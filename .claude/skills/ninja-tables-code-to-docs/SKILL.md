---
name: ninja-tables-code-to-docs
description: Orchestrates updating the Ninja Tables docs from plugin source changes or a new plugin release. Use for "update docs for v5.2.x", "sync docs to the latest plugin", "what changed in the plugin since <tag>", "document the new <feature> from the code", or any request that needs reading the Ninja Tables plugin PHP/Vue before writing. Loads plugin memory, runs the scripts/plugin helpers, maps plugin paths to doc pages, then hands off to ninja-tables-doc-writer + the matching page-type specialist and to the ninja-tables-screenshotter subagent for images.
---

# Ninja Tables Code-to-Docs Orchestrator

You bridge two places:

| What | Path | Access |
|---|---|---|
| Free plugin (git clone, branch `redesign` = new admin UI, tags `vX.Y.Z`) | `/Users/authlab-24/Local Sites/cart/app/public/wp-content/plugins/ninja-tables-dev` | **Read-only.** Never edit, never run state-changing git (checkout, reset, stash, commit). It carries the developer's local edits (`config/app.php` env=dev, `vite.config.mjs`). |
| Pro plugin (plain folder, no git) | `/Users/authlab-24/Local Sites/cart/app/public/wp-content/plugins/ninja-tables-pro` | Read-only. No diffs: compare by version header only. |
| Released ZIPs + `readme.txt` (feature list, changelog) | `ninja-tables-resource/` in this repo | Read-only. |
| Docs site | this repo, `docs/<category>/<slug>.md` | Edits go here. |

Both plugin folders are what the local site `http://localhost:10013` runs, so code and screenshots
always describe the same build.

---

## Workflow (follow in order)

### 0. Load plugin memory first
Read, before anything else:
- `.claude/plugin-memory/CATALOG.md`: module → key files → user-facing surface → doc pages, the admin
  route → Vue view → doc page map, the Pro-only list, and known gaps.
- The top 2–3 entries of `.claude/plugin-memory/CHANGES.md`: what the last runs did and deferred.
- For UI wording: `.claude/redesign-audit/00-editor-ui-labels.md` (exact strings per Vue component).

If `git -C <free> rev-parse --short HEAD` is newer than the sha in the latest CHANGES.md entry, run
`./scripts/plugin/sync-memory.sh <prev-tag>` first. It prints the files to re-index, a CHANGES.md
skeleton and the CATALOG lines to bump.

### 1. Confirm scope
- **Version range** ("update docs for v5.2.19"): previous tag → new tag/HEAD. No "since" given → the
  previous tag (`recent-changes.sh` lists them).
- **Single feature** ("document the new row-hover colours"): find it in CATALOG, read that module/view.
- **Single file or commit**: read it and its callers.
- If the range is huge (the redesign branch alone is ~390 files since v5.2.17), push back and scope by
  module or screen with the user.

### 2. Helpers (prefer these over hand-written git chains)
| Helper | Use |
|---|---|
| `./scripts/plugin/pull.sh` | Only when the user asks to update the clone (fast-forward only). |
| `./scripts/plugin/recent-changes.sh [N]` | Orientation: last N commits + recent tags. |
| `./scripts/plugin/diff-since.sh <tag>` | Commits + changed files (built assets, vendor, lockfiles excluded). |
| `./scripts/plugin/find-doc.sh "<feature>"` | Which doc page(s) and feature-memory chunks mention it. |
| `./scripts/plugin/sync-memory.sh <tag>` | Refresh memory after a pull (see §0). |

### 3. Map plugin paths → doc pages
Use CATALOG.md's **Drives docs** fields and its *Admin UI → doc page map*. Rough guide:

| Plugin path (free root) | Doc target |
|---|---|
| `resources/admin/routes.js` + `resources/admin/views/**` | the page for that screen (CATALOG UI map) |
| `resources/admin/components/editor/**` | table editor tabs: `table-settings`, `column-settings`, `styling-design`, `responsive-design`, `table-formatting` |
| Drag & Drop builder (`app/Modules/TableBuilder`, its Vue) | `drag-drop-tables`, `drag-drop-settings`, `drag-drop-elements` |
| `app/Modules/DataProviders/**` | `data-sources/*` (one page per provider) |
| `app/Modules/Integrations/**` | `data-sources/*`, `wordpress-integration/*` |
| `app/Modules/DataTables/**` | `creating-tables/choose-table-engine.md`, engine-specific settings |
| `app/Http/Controllers/**` (settings, import/export) | `table-management/*`, `import-export/*` |
| `app/Hooks/**` public hooks/filters | `advanced-features/hooks-and-filters.md` (developer page) |
| Shortcode / Gutenberg block code | `wordpress-integration/embed-tables.md`, `advanced-features/shortcode-reference.md` |
| Charts (or the separate Ninja Charts plugin) | `ninja-charts/*` |
| `ninja-tables.php` version header, `readme.txt` changelog | `docs/changelog/change-log.md` via `update-ninja-tables-changelog` |
| `Models/`, `Services/`, `Support/`, `Library/` internals | usually none; skip unless a visible setting/behaviour changed |

Nothing matches → `find-doc.sh`, then `check-ninja-tables-feature-coverage`. Still nothing → it needs a
new page: propose category + slug to the user before creating it.

### 4. Read the code
- Search the context-mode index first (`ctx_search`, source `ninja-tables-*`), then `Read` only the files
  it or the CATALOG points to. Index a file with `ctx_index` if it isn't indexed yet.
- The user-visible surface lives in: Vue template labels and `$t('…')` strings, `I18nStrings.php`,
  `__('…', 'ninja-tables')`, settings keys and their defaults, `apply_filters` / `do_action` names,
  Pro checks (`Pro::active()`, code that only exists in `ninja-tables-pro`).
- Purely internal changes (refactor, CSS-only polish, build config) usually need no doc change. Record
  them as skipped.
- Where possible, confirm behaviour live on `http://localhost:10013` with the headless runner (a preview
  plan with `--out=`), never with the Chrome extension.

### 5. Write via the specialists
Always load `ninja-tables-doc-writer`, then the specialist it routes to (`ninja-tables-settings-page`,
`-integration-page`, `-element-page`, `-howto-page`). For the procedure use `edit-ninja-tables-doc`
(existing page) or `write-ninja-tables-doc` (new page, incl. sidebar + featured card). Release notes go
through `update-ninja-tables-changelog`.

### 6. Screenshots
Delegate to the **`ninja-tables-screenshotter`** subagent (runs on a cheaper model): give it the page path
and which images are new or stale. It writes/updates `scripts/screenshots/plans/<slug>.json`, runs it,
checks every image, and reports. Record the plan names and the plugin sha in CHANGES.md. Leave
`<!-- TODO(screenshot): … -->` + a `.claude/SCREENSHOT-TODO.md` row only when the screen cannot be reached
on the local site.

### 7. Verify
`npm run docs:build` clean, the five image checks in CLAUDE.md, and for a big run
`node scripts/qa/diff-build.mjs <baseline-dist> .vitepress/dist` (copy `.vitepress/dist` aside before you
start) to see exactly which pages changed and in which region.

---

## Hard rules
- Never fabricate behaviour. Ambiguous code → ask.
- Never copy plugin source into user docs (hook names and shortcode attributes are fine on developer pages).
- Never skip the doc-writer + specialist pair.
- Never write secrets or real keys; use `<your-api-key>`-style placeholders.
- Never edit the plugin folders; never commit or push unless asked.

---

## Report (end of every run)

```
## Plugin → Docs sync summary
**Source:** ninja-tables-dev (<branch> @ <sha>), Pro <version>
**Range:** <since>..HEAD (<N> commits, <M> files)

### Doc pages updated
- docs/<category>/<slug>.md: <reason>
### Doc pages created (sidebar + featured card added)
- docs/<category>/<slug>.md: <reason>
### Screenshots
- <plan.json>: <images refreshed/added>, TODOs left: <n>
### Plugin changes skipped (no doc impact)
- <path>: <reason>
### Open questions
- <…>
```

Then: prepend the CHANGES.md entry (skeleton from `sync-memory.sh`), bump `Last fully audited:` in
CATALOG.md for every module touched, and update CATALOG structure if a module or doc page moved.

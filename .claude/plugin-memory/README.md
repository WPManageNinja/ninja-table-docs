# Plugin Memory: README

A persistent, three-layer memory of the Ninja Tables plugin, so doc-update sessions don't re-explore the
plugin from zero every release. Ported from the FluentCart docs repo.

Plugin code (read-only, what the local site `http://localhost:10013` runs):
- Free: `/Users/authlab-24/Local Sites/cart/app/public/wp-content/plugins/ninja-tables-dev` (git, branch `redesign`, tags `vX.Y.Z`)
- Pro: `/Users/authlab-24/Local Sites/cart/app/public/wp-content/plugins/ninja-tables-pro` (plain folder, no git)

The user owns `git pull` on the plugin. Claude only reads it.

---

## Layout

```
.claude/plugin-memory/
├── CATALOG.md   module/screen → files → user-facing surface → doc pages (always loaded)
├── CHANGES.md   per-release / per-run delta log, newest first, append-only
└── README.md    this file
```

Related memory elsewhere in the repo:
- `.claude/redesign-audit/`: exact UI labels per Vue component and the redesign audit notes.
- `.claude/skills/check-ninja-tables-feature-coverage/references/`: readme.txt feature list → coverage.

Plus a full-text index of the plugin source in the context-mode knowledge base (`ctx_index` /
`ctx_search`). It is not stored in this repo and can always be rebuilt.

---

## The three layers

### Layer 1 · CATALOG.md (always loaded)
One entry per module and per admin screen: purpose, key files, user-facing surface, the doc page(s) it
drives, and the plugin version through which the entry was last audited. Also holds the
`VUE_ALLOWLIST_REGEX` block that `scripts/plugin/sync-memory.sh` reads.

### Layer 2 · Indexed plugin source (on demand)
`app/**/*.php` plus the Vue allowlist from CATALOG. Query with `ctx_search` (e.g. `"html_cache"`,
`"Rendering Setting"`, `"ninja_table_rendering"`), then `Read` only the files it surfaces.

### Layer 3 · CHANGES.md (per-release log)
One H2 per release or sync run: source sha, modules touched, doc pages updated/created, screenshot plans
run, changes skipped (with reason), open questions. Read the newest entries first.

---

## Workflow per release

1. User pulls the plugin (or asks Claude to run `./scripts/plugin/pull.sh`).
2. `./scripts/plugin/sync-memory.sh <previous-tag>` (e.g. `v5.2.18`).
3. User pastes the changelog, or points at `readme.txt` in the new ZIP under `ninja-tables-resource/`.
4. Claude follows the `ninja-tables-code-to-docs` skill: re-index, map changes to pages, write via the
   doc-writer + specialists, delegate screenshots to `ninja-tables-screenshotter`, build, then prepend a
   CHANGES.md entry and bump CATALOG `Last fully audited:` lines.
5. User reviews and commits.

---

## Cheat-sheet

| Question | Where |
|---|---|
| What does module/screen X do, which page documents it? | CATALOG.md |
| Which Vue view is route `#/tables/<id>/design_studio`? | CATALOG.md → Admin UI map |
| Is feature Y Pro-only? | CATALOG.md → Pro-only surface |
| Did the last run already handle Z? | CHANGES.md (top entries) |
| Exact label text of a control? | `.claude/redesign-audit/00-editor-ui-labels.md`, then the Vue file |
| Where is symbol S defined? | `ctx_search`, then Read |

---

## Maintenance rules
- Keep CATALOG.md true: add an entry for a new module/screen, delete removed ones, fix moved doc paths.
- CHANGES.md is append-only (newest on top). A missed item goes into the next entry's open questions.
- The search index is throwaway; rebuild it from source whenever results look stale.
- Pro has no git history: note the Pro version in every CHANGES.md entry so the next run can tell whether it changed.

---
name: ninja-tables-docs-overhaul
description: Full, page-by-page overhaul of the Ninja Tables docs against the real plugin. Builds a complete feature map from the plugin code and the local site, designs a smooth user-journey category structure, then touches every doc individually: verifies every step against the plugin, adds every missing feature, fixes headings/format/notes via the writer skills, strips all screenshots and leaves structured screenshot placeholders for the later screenshot skill. Resumable through a ledger in .claude/docs-overhaul/. USE FOR: overhaul the docs, update all docs against the plugin, check every doc from the beginning, reorganize categories for the user journey, make sure every feature is documented, remove screenshots and mark where new ones go. DO NOT USE FOR: a single-page edit (edit-ninja-tables-doc), a release-range sync (ninja-tables-code-to-docs), taking the screenshots (ninja-tables-doc-screenshots / the screenshotter subagent), a read-only health check (audit-ninja-tables-docs).
---

# Ninja Tables Docs Overhaul

Goal: every page in `docs/` describes the plugin exactly as it works today, every plugin feature has a
home, and the sidebar walks a new user from install to a finished, embedded, styled table without a gap.
Screenshots are removed in this pass and replaced by placeholders; a separate screenshot skill fills them.

This skill is an **orchestrator**. It does not restate the writing rules. It decides *what* each page must
say and in *which order* pages sit; the existing skills decide *how* it is written:

| Need | Load |
|---|---|
| Voice, format, headings, callouts, links, Pro marking | `ninja-tables-doc-writer` (always, first) |
| Page template | the specialist it routes to: `ninja-tables-settings-page`, `-integration-page`, `-element-page`, `-howto-page` |
| In-place page edit procedure | `edit-ninja-tables-doc` |
| New page (file + sidebar + featured card) | `write-ninja-tables-doc` |
| Move / merge / delete / reorder | `restructure-ninja-tables-docs` |
| "Is this feature documented already?" | `check-ninja-tables-feature-coverage` |
| Plugin module → doc page map, Pro-only list, known gaps | `.claude/plugin-memory/CATALOG.md` |
| Exact UI strings | `.claude/redesign-audit/00-editor-ui-labels.md` (then confirm in code) |

---

## Hard rules

- **Never touch the other PC.** No `mcp__claude-in-chrome__*`, `mcp__remote-devices__*`,
  `mcp__Claude_Browser__*`, `mcp__computer-use__*`, RemoteTrigger, SendMessage, ListAgents, Artifact.
  Live testing uses a headless browser on THIS machine only (§2.3). Repeat this rule verbatim in the
  prompt of every subagent you start.
- **Plugin folders are read-only**: free `~/Local Sites/cart/app/public/wp-content/plugins/ninja-tables-dev`
  (git, branch `redesign`) and Pro `.../plugins/ninja-tables-pro`. No edits, no state-changing git.
- **Code + live site beat old docs.** Never carry a step, label, default or Free/Pro claim over from the old
  text without confirming it in code or on the site. Unclear after both → record an open question, ask.
- **Never invent** a feature, option, default or behaviour. Document what the plugin does today, including
  known caveats from CATALOG → *Gaps* (for example Remote CSV reads CSV only).
- **Slugs are URLs.** Moving a file to another category folder is URL-safe; renaming a slug is not. Rename
  only with user approval and log the old → new pair in `REDIRECTS.md` (§1.4).
- Two approval gates: the **journey/category plan** (§3) and any **delete/merge/slug rename**. Everything
  else proceeds without asking.
- Never commit or push unless asked. Never edit `.vitepress/dist/` or `.vitepress/cache/`.

---

## 1. Working files (resumability)

Everything lives in `.claude/docs-overhaul/` (not built, `.claude/**/*.md` is in `srcExclude`).
On every start, read these first and continue from the first unfinished item. Never redo a page marked `done`
unless the plugin changed since (compare the sha recorded in the ledger).

### 1.1 `FEATURE-MAP.md`: the "don't miss anything" list
One row per user-visible feature or option group, built in §2:

```
| # | Feature | Where in the UI | Free/Pro | Source (file:line) | Live-checked | Doc page § |
|---|---|---|---|---|---|---|
| 41 | Rows per page | Table › Appearance › Pagination | Free | resources/admin/views/editor/AppearanceTab.vue:812 | yes 2026-10-30 | /pagination § Rows per page |
```

`Doc page §` empty = undocumented. The overhaul is finished only when no row is empty.

### 1.2 `LEDGER.md`: one row per doc page
```
| Page | Journey group | Specialist | Status | Code ✓ | Live ✓ | Features (#) | Placeholders | Open questions | Plugin sha |
```
Status: `todo` → `in-progress` → `done` (or `pointer`, `merge-into:<slug>`, `delete`, `new`).
Generate the starting rows with:
```bash
find docs -name '*.md' ! -path 'docs/public/*' | sort
```

### 1.3 `JOURNEY.md`: the approved structure (§3)

### 1.4 `REDIRECTS.md`: `old /slug → new /slug` for every approved rename or merge (host-level 301s later)

### 1.5 `QUESTIONS.md`: open product questions, with file:line evidence, batched for the user

---

## 2. Phase A: build the feature map (no doc edits yet)

### 2.1 Inventory
- Run `sync-memory.sh` if the free plugin HEAD is newer than the sha in the top `CHANGES.md` entry
  (see `ninja-tables-code-to-docs` §0). Record free branch + sha and the Pro `Version:` header.
- List every doc page, its H2/H3 outline, and whether it is a pointer stub.
- Flag structural debt to fix later: `docs/public/` (must not exist, CLAUDE.md), pointer stubs, pages
  that are missing from the sidebar.

### 2.2 Read the plugin, screen by screen
Walk the admin in the order a user meets it, using CATALOG → *Admin UI (Vue) → doc page map*:
first-run wizard → tables list → Create a table (every tile and source) → table editor (Table Rows, column
dialog and each column type, Custom filters, Appearance, Table Configuration, Frontend editing, Custom
CSS/JS, import/export) → Drag & Drop builder (every element in `config/table-builder/component.php`,
cell and table settings, templates) → embedding (shortcode, Gutenberg block, TinyMCE) → global Settings
(General, Default appearance, Permissions, Performance, License) → Import page → Help → Charts →
developer surface (shortcode attributes, placeholders, `apply_filters`/`do_action`).

For each screen capture into FEATURE-MAP: every control, its exact label, default, options, what it
changes on the front end, conditions under which it shows (engine, table type, Pro), and Free/Pro
gating. Sources, in this order: Vue templates and `$t()` strings, `app/Modules/I18nStrings.php`,
`__('…','ninja-tables')`, settings defaults, Pro-only code in `ninja-tables-pro`, then `readme.txt` in
`ninja-tables-resource/` and the feature chunks of `check-ninja-tables-feature-coverage`.
Search the context-mode index first (`ctx_search`), Read only what it points to.

### 2.3 Confirm on the local site
Site `http://localhost:10013` (`admin`/`admin`), front-end preview `/?ninjatable_preview=<id>`.
The plugin runs in dev mode: the Vite server on port 8881 must be listening
(`lsof -iTCP:8881 -sTCP:LISTEN`); if not, stop and ask the user to start it.

- Drive it with headless Chrome via `playwright-core` (same stack as `scripts/screenshots/shoot.cjs`),
  from a script in the session scratchpad. A screenshotter preview run with `--out=<scratchpad>` also works.
  Look at the captures you take for checking; never save them under `public/images/`.
- Check what code reading leaves uncertain: does the option appear, where, under which condition, and
  what does the table on the page actually do when it changes.
- Create throwaway tables only, titled `DOCTEST <feature>`. Never change the seeded demo tables or pages
  (`scripts/demo-data/`): they are the screenshot fixtures. Delete your DOCTEST tables at the end.
- Free-only behaviour: read it from the gating code. Deactivating Pro on the site needs the user's OK.
- A screen that cannot be reached locally (Google OAuth, remote DB, licence server): document from code,
  mark `Live-checked: no (<reason>)`.

### 2.4 Coverage pass
Map each FEATURE-MAP row to the page § that covers it today. Empty rows plus CATALOG → *Gaps* are the
missing content. Report the count (features total / covered / partial / missing) before Phase B.

---

## 3. Phase B: design the user journey (approval gate)

Derive the structure from the feature map, not from the current folders. The reader's path is:

1. **Understand and install**: what Ninja Tables is, Free vs Pro, install, activate Pro licence, the first-run wizard.
2. **Create the first table**: choose a table type and engine, create, add rows, add columns.
3. **Shape the data**: column settings and every column type, row editing, import into a table, formulas.
4. **Make it look right**: Appearance (style, colours, fonts, search, sorting, pagination, responsive), default design.
5. **Make it interactive**: filters, frontend editing, export/print buttons.
6. **Put it on the site**: shortcode, block, embed, permissions to see/edit.
7. **Live data**: each connected source (WP posts, WooCommerce, Google Sheets, CSV, SQL, Fluent Forms, FluentCart).
8. **Drag & Drop tables**: create, builder tour, cells/rows/columns, every element, table settings.
9. **Manage and maintain**: tables list, duplicate, import/export tables, cache, global settings.
10. **Charts**, **For developers**, **Help & updates** (changelog).

Every step must be reachable by reading top to bottom: no page assumes a concept that only appears later
without a link to it. Propose in `JOURNEY.md`:
- the sidebar groups and order, each page with its short task-first label (CLAUDE.md → Sidebar);
- for each current page: keep / move folder / merge into / split / new / delete, with a one-line reason;
- new pages needed for missing features (category + slug);
- any slug rename (avoid; list the redirect).

Show it to the user and wait for approval. Then apply the structural part with
`restructure-ninja-tables-docs` (git mv, inbound links, sidebar) and create empty new pages with
`write-ninja-tables-doc` before Phase C. Run `npm run docs:build` after the restructure.

---

## 4. Phase C: touch every page (one at a time, in journey order)

For each page in LEDGER order, mark it `in-progress`, then:

1. **Load** `ninja-tables-doc-writer` and the page's specialist (once per session; re-read if unsure).
2. **Collect** the FEATURE-MAP rows assigned to this page and the matching code files.
3. **Verify every step and claim** in the current text against code and, where it matters, the live site:
   menu path, button labels, order of steps, defaults, option lists, what happens after **Save**, Free/Pro.
   Wrong → fix. Missing → add. Removed from the plugin → delete (mention the new location only if it moved).
4. **Complete it**: every assigned feature row gets its own option/step with what it does, when to use
   it, defaults and conditions. Prerequisites first ("You need a table with at least one column"), the
   outcome stated at the end.
5. **Format**: frontmatter `title` + real `description`, H1 = title, opening 1–3 sentences with the
   bold feature name and "(Pro)", H2/H3 outline from the specialist template, numbered lists only for
   strict sequences, `**Exact Label**` bold, flat `/<slug>` links (check each target exists), at most
   two `::: tip` / `::: warning` for data loss, security or surprising behaviour.
6. **Strip screenshots** (§5) and place placeholders where a reader needs to see the screen.
7. **Record** in the LEDGER: Code ✓, Live ✓, feature numbers covered, placeholder count, open questions,
   plugin sha. Fill the FEATURE-MAP `Doc page §` cells. Status → `done`.

Parallelising: pages are independent once Phase B is applied, so batches of pages may go to subagents.
Give each one: its page list, the FEATURE-MAP rows for those pages, this skill's path, the writer skill
names, the hard rules above **including the other-PC rule verbatim**, and "do not edit config.mts,
index.md or any page outside your list; do not build". Review every returned page yourself before marking it done.

Every ~10 pages: `npm run docs:build` to catch broken links early.

---

## 5. Screenshots: remove now, mark for later

Remove every image line `![…](/images/…)` from every page in this pass. **Do not delete or rename files
in `public/images/`**: they become orphans until the screenshot skill replaces or removes them (CLAUDE.md
says never bulk-delete orphans). Keep YouTube `.video-embed` blocks if the video still matches the UI;
drop them if it shows removed UI and log that in QUESTIONS.md.

Add a placeholder wherever a reader needs to see the screen: each screen the steps open for the first
time, each settings section documented option by option, each element/column type, and the visible
front-end result. Not for every click. Format (HTML comment, invisible on the site, parsed by the
screenshot skill):

```md
<!-- TODO(screenshot): pagination-1
  screen: Tables › <table> › Appearance › Pagination
  table: Product Price List
  state: Pagination section expanded, Rows per page set to 10
  highlight: Rows per page field
  view: admin
  alt: Appearance tab showing the Pagination options
-->
```

- `id` = `<slug>-<n>`, numbered in page order, unique per page.
- `table`: a seeded demo table title from `scripts/demo-data/` (never a DOCTEST table); `-` if none.
- `view`: `admin` or `frontend`. `highlight`: what the arrow points at, or `-`.
- No `{{ }}`, no `-->` and no `---` inside the comment (Vue / frontmatter parsing).
- Own line, blank line before and after. Inside a list item, indent it to the item's text.

Queue of all placeholders (for the screenshot skill and the final report):
```bash
grep -rn 'TODO(screenshot)' docs | wc -l
grep -rhoE 'TODO\(screenshot\): [a-z0-9-]+' docs | sort | uniq -d   # duplicate ids: must print nothing
```

---

## 6. Phase D: verify and hand over

1. FEATURE-MAP: zero empty `Doc page §` cells (or each one approved as "no doc needed" by the user).
2. LEDGER: every row `done` / `pointer` / merged / deleted as approved.
3. Every page in the sidebar exactly once (pointer stubs hidden); journey order matches `JOURNEY.md`.
4. `npm run docs:build` clean; image checks 1–4 from CLAUDE.md print nothing (check 1 must be empty
   since no image refs remain; report check 5 orphans, do not delete).
5. `npm run featured:generate` for new pages; for retitled pages delete the old card first.
6. Delete the DOCTEST tables created on the local site.
7. Update `.claude/plugin-memory/CATALOG.md` (*Drives docs*, route map, Gaps, `Last fully audited:`),
   prepend a `CHANGES.md` entry, and update the image baseline line in `CLAUDE.md` to the new state.
8. Report:

```
## Docs overhaul summary
Plugin: ninja-tables-dev <branch>@<sha>, Pro <version>
Features: <total> mapped, <n> newly documented, <n> corrected, <n> removed (gone from plugin)
Pages: <n> rewritten, <n> new, <n> merged, <n> moved, <n> deleted
Structure: <groups> sidebar groups (JOURNEY.md), redirects needed: <n> (REDIRECTS.md)
Screenshots: <n> image refs removed, <n> placeholders added, <n> orphan files left for the screenshot skill
Open questions: <n> (QUESTIONS.md)
```

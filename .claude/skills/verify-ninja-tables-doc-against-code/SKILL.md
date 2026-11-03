---
name: verify-ninja-tables-doc-against-code
description: 'Verify ONE Ninja Tables doc page claim by claim against the plugin source code (free ninja-tables-dev + Pro) and the live plugin UI, then fix what is wrong. Extracts every checkable claim (UI label, option, default, step, path, Free/Pro flag, shortcode attribute, hook, limit), proves or disproves each with file:line evidence, checks coverage of options the page forgot, and applies the fixes. USE FOR: verify this doc against the code, is this page accurate, fact-check a doc, code-accuracy audit, make this doc match the plugin, deep audit of a page or a folder. DO NOT USE FOR: site-wide link/frontmatter/sidebar lint (audit-ninja-tables-docs), deciding whether a feature is documented at all (check-ninja-tables-feature-coverage), writing a new page (write-ninja-tables-doc), release sync (ninja-tables-code-to-docs).'
license: MIT
compatibility: 'Needs read access to ~/Local Sites/cart/app/public/wp-content/plugins/ninja-tables-dev (free, git) and .../ninja-tables-pro; optional headless Chrome via playwright-core against http://localhost:10013.'
metadata:
  project: ninja-table-docs
  canonical-rules: CLAUDE.md
---

# Verify a doc against the plugin code

Goal: after this procedure every factual statement on the page is **proven true by the code** (or the live UI), every real option of the screen it documents is covered, and nothing invented remains. Run it on one page at a time; a folder is a loop of pages.

**Hard rules**
- This machine only. Never use the Chrome extension, remote-device, computer-use or any other-PC tool, never `screencapture`. Browser checks = headless local Chrome (`playwright-core`, `channel:'chrome'`).
- Plugin code is read-only. Never edit it, never run `pull.sh` unless asked.
- Never trust the old doc, the audit reports, or memory over the code. Evidence beats everything. If you cannot prove a claim, mark it `unverified`; do not "fix" it to a guess.
- Do not commit. Do not delete images (report orphans). Do not run `npm run docs:build` while other agents are editing in parallel; the lead builds once at the end.

## Step 0: Orient (2 minutes)

1. Read the page and its frontmatter. Note the screen/feature it documents.
2. Find the plugin files for that feature: `.claude/plugin-memory/CATALOG.md` (module → files → doc pages) and `scripts/plugin/find-doc.sh "<feature>"`. Typical homes:
   - Admin Vue screens: `resources/admin/views/*`, `resources/admin/components/**` (editor tabs: `views/TableEditorView.vue`; appearance: `components/editor/design/*`, `views/editor/AppearanceTab.vue`; columns: `components/Table/ColumnEditor/*`; create flow: `views/CreateTableView.vue`, `utils/tableSources.js`, `components/create/*`; settings: `views/SettingsView.vue`; builder: `components/TableBuilder/**`).
   - UI strings and tooltips: `resources/admin/data/data.js`, `app/Hooks/Ajax/I18nStrings.php`, the `.vue` template itself (the visible label wins over a translation key).
   - Behaviour: `app/` (PHP handlers, `app/Views/public/*`, `app/Modules/*`), front end `assets/` and `datatables/`; Pro: `ninja-tables-pro/app/**` and its built JS.
   - Free vs Pro: grep the Vue for `pro`/`isPro`/`ProBadge`, `component.php` for builder elements, `.claude/plugin-memory/CATALOG.md` Pro list, `docs/getting-started/free-vs-pro.md`.
3. Check recent changes that postdate the page: `git -C <plugin> log --since=<page's last git date> --oneline -- <those files>` (or `scripts/plugin/recent-changes.sh`). Recent commits are the most likely source of drift.

## Step 1: Extract the claims

Write a claim table (scratch file, not in the repo). One row per checkable statement:

| # | Page line | Type | Claim (quote) | Code evidence (file:line) | Live UI | Verdict |

Claim types to extract, every time:
- **LABEL**: any bold UI text, button, tab, section, menu path (`Ninja Tables › Charts`). Exact wording and capitalisation as displayed.
- **OPTION**: each setting/field/switch the page says exists, and its choices (radio/dropdown values, their order).
- **DEFAULT**: default values and initial states ("on by default", "20 rows", "DataTables is the default").
- **STEP**: step order and what each step does; prerequisites.
- **FLAG**: Free/Pro marking, plus conditions (needs Pro version, needs another plugin active, engine-specific).
- **BEHAVIOUR**: what the visitor/admin sees as a result (front-end effect, what is saved, what is hidden when off).
- **LIMIT**: numbers, ranges, min/max, sizes, counts ("385 functions", "up to 480px").
- **NAME**: shortcode attributes, hooks/filters, CSS classes, JS events, file names.
- **LINK**: internal links point to the page that really covers the topic.
- **IMAGE**: each screenshot shows the UI the text describes (labels, options present, engine line, tab names).

## Step 2: Prove each claim

For every row, in this order:
1. **Code**: open the exact component/handler and read it; quote `path:line`. For labels, read the rendered template text, not just the i18n key. For defaults, find where state is initialised (`data()`, store defaults, PHP `defaults()`), not just the first use. For behaviour, follow it to where it is applied (CSS generator, PHP formatter, JS init).
2. **Pro vs Free**: confirm in which plugin the code lives and any `is_pro`/license gate.
3. **Engine split**: FooTable vs DataTables often differ (labels, available switches, server vs client behaviour). Check both when the page doesn't say.
4. **Live UI** (for the 3–6 most important claims of the page, not all): http://localhost:10013 (admin/admin), headless Chrome, open the screen, compare. The dev server for the plugin's Vue runs on :8881; if the screen fails to render, say so and rely on code. Pro is active locally, so Free-only states are code-only: say so.
5. Verdict per claim: `OK`, `WRONG` (false/misleading), `OUTDATED` (was true, UI/flow changed), `MISSING` (real option/behaviour the page should state), `UNVERIFIED` (could not prove), `POLISH` (true but unclear).

Traps that have bitten this repo (check them every time): tab named **Styling** not Style; section **Pagination Colors**; settings nav says **Global appearance**; engine default is **DataTables (recommended)** in the create drawers; create tiles always show (drawer says "not installed or active"); Custom CSS/JS tab only has the header **Save**; Ninja Charts menu is **Ninja Tables › Charts › Add New**; **Dynamic post data / Dynamic column data** (no "settings"); minified Pro JS can hide behaviour: read the source map or the PHP side before claiming.

## Step 3: Coverage check

List every control of the documented screen from the Vue template (all fields, switches, selects, hidden-until-toggled controls, Pro-gated ones). Any control that is real and user-facing but not on the page → `MISSING`. Controls on the page that do not exist → `WRONG`. Also compare the page against sibling pages for contradictions (same fact stated differently).

## Step 4: Fix

Edit the page (use `edit-ninja-tables-doc` + `ninja-tables-doc-writer` for style):
- Change `WRONG`, `OUTDATED`, `MISSING` items to what the code proves, using the plugin's exact label text in **bold** (no inner spaces inside the markers).
- Leave `UNVERIFIED` text unchanged and list it in the report; never guess.
- Mark Pro features with "(Pro)" on first use; Pro-only attributes/options too.
- Keep slug, frontmatter title, inbound links, absolute `/slug` links, no `.md`, no relative links.
- If a screenshot is stale, note its path under *stale screenshots* (the screenshot pass is separate: `ninja-tables-doc-screenshots` / the screenshotter subagent).
- Appearance pages: if you change a node's wording, the mind-map `facts` in `.vitepress/trees/appearance.json` / `product.json` may need the same change (lead decides); run `node scripts/qa/check-trees.mjs`.

## Step 5: Report (per page, concise)

```
Page: docs/<category>/<slug>.md   Verdict: ok | fixed | needs-decision
Claims checked: N   OK n   WRONG n   OUTDATED n   MISSING n   UNVERIFIED n   POLISH n
Fixed: <line-level list: what changed and the evidence path:line>
Unverified (left as is): <claim + why>
Stale screenshots: <paths>
Needs decision: <questions>
Plugin issues noticed (not docs errors): <e.g. stale in-app text, bugs>
```

Folder runs: append each page's block to `.claude/docs-overhaul/reports/verify-<folder>.md`, then a summary table (page | WRONG | OUTDATED | MISSING | UNVERIFIED | status).

## Gate (lead, once, after all pages)

`npm run docs:build`; `node scripts/qa/check-trees.mjs` prints `✓`; image checks 1–4 print nothing; grep the traps list above across `docs/` for leftovers; headless-Chrome sweep of changed pages at 1280 and 390 for broken images / horizontal scroll.

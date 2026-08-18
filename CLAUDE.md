# CLAUDE.md — Ninja Tables User Documentation

End-user documentation site for the **Ninja Tables** WordPress plugin by WPManageNinja (free +
Pro table builder). Built with **VitePress 1.6+**, **Vue 3.5**.

## Commands

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies (once) |
| `npm run docs:dev` | Local dev server, default `http://localhost:5173` |
| `npm run docs:build` | Production build → `.vitepress/dist/` (gitignored) |
| `npm run docs:preview` | Preview the production build |

Run `npm run docs:build` after any structural change (new doc, rename, link edit, sidebar
change) to catch broken links and parser errors.

## Repository layout

```
/
├── index.md                     ← home page (layout: home, native hero+features frontmatter)
├── CLAUDE.md                    ← this file
├── package.json                 ← devDeps: vitepress, vue
├── public/                      ← site-wide assets served at root: logo.svg, favicon.png
│   └── images/<category>/<slug>/<file>.webp  ← all doc screenshots (see Images below)
├── .vitepress/
│   ├── config.mts               ← site config: title, cleanUrls, nav, sidebar (SINGLE source of truth)
│   └── theme/
│       ├── index.ts             ← DefaultTheme passthrough, imports style.css
│       └── style.css            ← brand color overrides (teal, see Brand below)
├── ninja-tables-resource/       ← brand assets (Logo/, Icon/) + plugin source ZIPs (free + pro),
│                                    the readme.txt inside each is the feature/changelog source of truth
└── guide/
    └── <category>/<slug>.md     ← every doc lives directly in a category folder (flat, no sub-folders)
```

### Category folders — flat, 2-level (18 folders)

Unlike some sibling doc sites, this repo does **not** nest category sub-folders on disk — every
page is `guide/<category>/<slug>.md`, one level deep. The 18 categories:

`getting-started` · `creating-tables` · `drag-drop-tables` · `drag-drop-settings` ·
`drag-drop-elements` · `data-sources` · `column-settings` · `field-types` · `table-settings` ·
`styling-design` · `responsive-design` · `table-management` · `import-export` ·
`wordpress-integration` · `advanced-features` · `table-formatting` · `ninja-charts` ·
`changelog`

(`public/images/` is assets, not a category.)

## URL convention — different from a rewrite-flattened site

On disk: `guide/<category>/<slug>.md` → In browser: `/guide/<category>/<slug>` (only
`cleanUrls: true` strips the `.html` extension — **the category stays in the URL**, it is not
flattened away via rewrites). All internal cross-links must use this full absolute form:

- ✅ `[Link Text](/guide/<category>/<slug>)`
- ❌ `[Link Text](/guide/<category>/<slug>.md)` (no `.md`)
- ❌ `[Link Text](./slug)` or `[Link Text](../category/slug)` (no relative links)

As of this writing, no page actually contains an internal cross-link yet (no guide page links to
another guide page) — the rule above is the convention to follow going forward, not a pattern to
reverse-engineer from existing pages.

## Sidebar — mandatory step when adding/renaming docs

The sidebar (and top nav) is 100% driven by the `themeConfig.nav` / `themeConfig.sidebar` arrays
inline in `.vitepress/config.mts` — there is **no separate `sidebar.json` file** in this repo.
VitePress does **not** auto-discover docs; every new or renamed `.md` file **must** be reflected
there.

Shape — **nested** array of 11 top-level groups, several with `collapsed: true` sub-groups up to
2 levels deep:

- Getting Started
- Creating Tables → nests **Drag & Drop Tables** → nests **Drag & Drop Elements**
- Data Sources & Integration
- Table Configuration → nests **Column Settings** / **Field Types** / **Table Settings**
- Styling & Design → nests **Responsive Design**
- Table Management
- Import & Export
- WordPress Integration
- Advanced Features → nests **Table Formatting**
- Ninja Charts
- Resources (Changelog only)

Leaf entry shape: `{ text: 'Page Title', link: '/guide/<category>/<slug>' }` (no `.md`). The top
`nav` array separately duplicates 2 of these links (User Guide → getting-started intro, Changelog)
plus Home and an external Website link — that's intentional, not a bug, so an audit checking
sidebar coverage should check presence, not exact 1:1 count parity with `nav` included.

## Images

All doc screenshots are local `.webp` files under `public/images/` — the only convention now, no
external `ninjatables.com` URLs remain (except 3 pre-existing dead links in
`data-sources/fluent-forms-integration.md` where the source images 404 upstream; leave those be
until replacement screenshots are available).

- **Location on disk**: `public/images/<category>/<short-slug>/<n>.-<Short-Label>.webp` — `public/`
  is VitePress's real static-asset root (a top-level `public/` folder is what actually gets copied
  to `dist/` and served; a `public/` folder nested under `guide/` is **not** served — don't
  recreate that mistake).
- **Reference in markdown**: `![Alt Text](/images/<category>/<short-slug>/<n>.-<Short-Label>.webp)`
  — always the absolute `/images/...` form, never `/guide/public/images/...`.
- **`<short-slug>`**: a compressed version of the page's own slug (stopwords like `how`/`to`/`with`
  stripped, capped around 25–28 chars) — NOT necessarily identical to the `.md` filename's slug.
  Check the existing folder under `public/images/<category>/` for a page before inventing a new
  short-slug, so it stays stable across edits.
- **`<n>.-<Short-Label>`**: 1-based, in the order the image appears on the page; `<Short-Label>` is
  a short Title-Case-hyphenated description derived from the original filename (dimension suffixes
  like `-1024x536` and `-scaled` stripped). Example: `/images/column-settings/conditional-formatting/1.-New-Ui-conditional-formatting-tab.webp`.
- **New screenshots**: convert to `.webp` before adding (`cwebp -q 82 in.png -o out.webp`; use
  `gif2webp` for animated GIFs), place under the matching `<category>/<short-slug>/` folder
  (create one if the page doesn't have one yet), and continue the existing numbering.

## Markdown writing style

1. Every page starts with YAML frontmatter (`title`, `description`), then a bare `# H1` matching
   `title`.
2. Short intro paragraph (1–3 sentences): what the feature is, who it's for. Bold the **feature
   name** on first use.
3. `##` for major sections, `###` for sub-topics.
4. Bullet lists for steps/feature lists; numbered lists only when strict sequence matters.
5. Bold important terms/UI labels with no inner whitespace inside markers (`**Save**`, never
   `**Save** button` split as `**Save **button` — CommonMark renders inner-space bold literally).
6. Cross-references always use the absolute form: `[Descriptive Text](/guide/<category>/<slug>)`.
7. Pro-only features: add "(Pro)" after the feature name on first use.
8. No support-boilerplate closers (e.g. "contact our support team"). Link to the relevant
   `wordpress-integration`/`table-management` page instead if a related doc exists.
9. Short, direct sentences aimed at end users, not developer prose (except pages in
   `advanced-features` that are explicitly for developers).
10. No callout syntax (`> [!TIP]` etc.) is currently used anywhere; it's available if it helps but
    isn't an established pattern to match yet.

## Changelog format

`guide/changelog/change-log.md` is fully maintained in a specific shape — match it precisely for
any changelog edits: reverse-chronological `## Ninja Tables vX.Y.Z` headings, each followed by
`*Released on Month D, YYYY*`, then a `::: code-group` block with fenced ` ```md [emoji Category]`
tabs (🆕 New Features / 🔧 Improvements / 🔒 Security / 🐛 Bug fixes — only non-empty categories
included) and `• ` bullet lines inside each tab.

## Feature memory

`.claude/skills/check-ninja-tables-feature-coverage/references/index.md` is the manifest of which
plugin features are documented, partially documented, or missing entirely, sourced from the
plugin's own `readme.txt` inside `ninja-tables-resource/untitled folder/ninja-tables.zip` and
`ninja-tables-pro.zip` (nearly identical between the two — one shared source of truth). Individual
feature chunks live in that skill's `references/features/`. The source readme has internal
inconsistencies (e.g. conflicting counts of "table creation options" across sections, features
whose free/pro gating is stated differently in different sections) — these are recorded as-is in
each chunk's `caveat` field, never silently resolved.

## Hard constraints — never do these

- Never create a `.md` directly under `guide/` — it must be inside a category subfolder.
- Never add a `public/` folder anywhere other than the repo root — VitePress only serves the
  top-level `public/`, a nested one (e.g. `guide/public/`) silently never ships.
- Never add/rename a doc without updating the sidebar in `.vitepress/config.mts`.
- Never use relative links (`./slug`, `../slug`) or a link with a `.md` suffix.
- Never commit `node_modules/`, `.vitepress/dist/`, or `.vitepress/cache/` (all gitignored).
- Never edit `.vitepress/dist/` directly — it's regenerated by `docs:build`.

## Brand

- Color: teal `#01D5C6` (family of shades set via `--vp-c-brand-*` in `.vitepress/theme/style.css`),
  sourced from `ninja-tables-resource/Icon|Logo`.
- Logo/favicon: `public/logo.svg`, `public/favicon.png`.

## Git

Only commit or push when explicitly asked. Check the current branch with
`git branch --show-current` before assuming it's `master`.

## Working style

Reusable procedures for this repo are captured as skills in `.claude/skills/` — check there first:
- `write-ninja-tables-doc` — create a new page
- `edit-ninja-tables-doc` — change an existing page's content
- `restructure-ninja-tables-docs` — rename/move/delete/merge/reorder
- `manage-ninja-tables-images` — add/replace/audit screenshots under `public/images/`
- `update-ninja-tables-changelog` — add a release entry to `guide/changelog/change-log.md`
- `audit-ninja-tables-docs` — read-only site-wide quality gate
- `check-ninja-tables-feature-coverage` — decide whether a plugin feature is already documented
  before writing anything

# CLAUDE.md

Guidance for working in this repository.

## What this is

A VitePress static documentation site for **Ninja Tables**, a WordPress table-builder plugin
(free + Pro). There's no application code here — nearly every task is writing or editing
documentation pages, keeping screenshots/links correct, and keeping the sidebar in sync. The one
exception is deciding *what* still needs to be documented, which is covered by the feature-memory
system described below.

## Stack & commands

- Deps: `vitepress ^1.6.4`, `vue ^3.5.21`. Run `npm install` once.
- `npm run docs:dev` — live preview with hot reload (default `http://localhost:5173`).
- `npm run docs:build` — production build to `.vitepress/dist` (gitignored, never edit or commit it).
- `npm run docs:preview` — serve the production build locally.

## Repository layout

```
index.md                              Homepage (native VitePress hero + features frontmatter)
guide/<category>/*.md                 18 category folders, no top-level guide/index.md:
                                       getting-started, creating-tables, drag-drop-tables,
                                       drag-drop-settings, drag-drop-elements, data-sources,
                                       column-settings, field-types, table-settings,
                                       styling-design, responsive-design, table-management,
                                       import-export, wordpress-integration, advanced-features,
                                       table-formatting, ninja-charts, changelog
guide/public/images/<category>/<slug>/*.{png,webp}   Local screenshot mirror (see note below)
.vitepress/config.mts                 nav + full nested sidebar (source of truth for site structure)
.vitepress/theme/                     brand color overrides (style.css) + DefaultTheme passthrough
public/                               Site-wide assets served at root: logo.svg, favicon.png
ninja-tables-resource/                Brand assets (Logo/, Icon/) + plugin source ZIPs (see below)
.claude/skills/                       add-doc-page, preview-docs, update-doc-page
```

**Sidebar structure** (`.vitepress/config.mts`, 11 top-level groups): Getting Started,
Creating Tables (nests Drag & Drop Tables → nests Drag & Drop Elements, both `collapsed: true`),
Data Sources & Integration, Table Configuration (nests Column Settings / Field Types / Table
Settings, all `collapsed: true`), Styling & Design (nests Responsive Design, `collapsed: true`),
Table Management, Import & Export, WordPress Integration, Advanced Features (nests Table
Formatting, `collapsed: true`), Ninja Charts, Resources (Changelog only). A new page is invisible
until it's added to the correct nested `items` array here — see the `add-doc-page` skill.

## Content conventions

- Frontmatter is `title` + `description` only. Exactly one `# H1` matching `title`. `##`/`###` for
  sections and steps.
- **Images**: every existing page currently embeds screenshots via external
  `https://ninjatables.com/wp-content/uploads/YYYY/MM/slug-WxH.ext` URLs. A parallel
  `guide/public/images/<category>/<slug>/` folder tree already exists per-category but is
  currently unreferenced by any page. Prefer the local path for new work going forward, but don't
  assume it's already the convention — check the actual target page.
- Internal links are relative and omit the `.md` extension (`cleanUrls: true` is set).
- No callout syntax (`> [!TIP]` etc.) is currently used anywhere; it's available if it helps but
  isn't an established pattern to match.

## Changelog format

`guide/changelog/change-log.md` is fully maintained in this exact shape — match it precisely for
any changelog edits: reverse-chronological `## Ninja Tables vX.Y.Z` headings, each followed by
`*Released on Month D, YYYY*`, then a `::: code-group` block with fenced ` ```md [emoji Category]`
tabs (🆕 New Features / 🔧 Improvements / 🔒 Security / 🐛 Bug fixes — only non-empty categories
included) and `• ` bullet lines inside each tab.

## Feature memory

`.claude/skills/update-doc-page/references/index.md` is the manifest of which plugin features are
documented, partially documented, or missing entirely, sourced from the plugin's own
`readme.txt` inside `ninja-tables-resource/untitled folder/ninja-tables.zip` and
`ninja-tables-pro.zip` (nearly identical between the two — one shared source of truth). Individual
feature chunks live in `references/features/`. The source readme has some internal
inconsistencies (e.g. conflicting counts of "table creation options" in different sections,
features whose free/pro gating is stated differently in different sections) — these are recorded
as-is in the chunk `caveat` field, never silently resolved.

## Gotchas

- Never edit `.vitepress/dist/` or `node_modules/` — both are gitignored build/dependency output.
- The `guide/public/images/...` tree and the external `ninjatables.com` image URLs are two
  different, currently-coexisting patterns — check which one a specific page actually uses before
  assuming.
- The plugin readme ZIPs contain known contradictions (see the feature-memory index) — when
  documenting a feature whose source description is ambiguous, report the ambiguity rather than
  picking one silently.

## Git

Only commit or push when explicitly asked. Current working branch may not be `master` — check
with `git branch --show-current` before assuming.

## Working style

Reusable procedures for this repo are captured as skills in `.claude/skills/` — check there first:
`add-doc-page` for new pages, `preview-docs` for verifying changes, `update-doc-page` for deciding
whether a feature is already documented before writing new content.

# Ninja Tables – User Documentation

Official end-user documentation for [Ninja Tables](https://ninjatables.com), the WordPress table-builder plugin (free + Pro) by [WPManageNinja](https://wpmanageninja.com).

Built with [VitePress](https://vitepress.dev/).

## What's Inside

97 pages across 18 category folders, grouped into 11 sidebar sections:

- **Getting Started** – Introduction, installation & activation, upgrading to Pro, onboarding, glossary
- **Creating Tables** – Your first table, plus the full Drag & Drop builder: table settings, responsive design, spacing, background color, cell management, and 12 drag & drop elements
- **Data Sources & Integration** – CSV, Google Sheets, WooCommerce, Fluent Forms, WordPress posts, custom SQL queries, Ninja Charts
- **Table Configuration** – Column settings (basic, advanced, transform value, conditional formatting), 8 field types, and table settings (language, custom filters, CSV & print, rendering, column rearrangement)
- **Styling & Design** – Style, color, font, and row-color settings, pagination, sorting, search & filter, plus responsive design (column breakpoints, stackable tables)
- **Table Management** – Title & description, tools, cloning, manual row sorting, data calculation, user permissions, CSS selectors, WooCommerce bulk actions
- **Import & Export** – CSV import into new or existing tables, TablePress and JSON import, CSV/JSON export
- **WordPress Integration** – Post meta fields, featured images, ACF / JetEngine / Toolset / Pods, custom columns, shortcode computed values
- **Advanced Features** – Frontend editing and shortcodes, plus table formatting (colspan, rowspan, image lightbox, Google Sheets hyperlinks)
- **Ninja Charts** – Installation, dynamic and manual charts, data range picker, customization, and Fluent Forms / Ninja Tables data sources
- **Resources** – How to get support, and the changelog (newest release first)

Currently documented release: **Ninja Tables v5.2.13** (August 3, 2026).

## Local Development

```bash
# Install dependencies
npm install

# Start the dev server
npm run docs:dev
```

The site will be available at `http://localhost:5173/`.

## Build

```bash
# Production build → .vitepress/dist/
npm run docs:build

# Preview the production build → http://localhost:4173
npm run docs:preview
```

`npm run docs:build` is the project's correctness check — it fails on dead internal links. Run it after any structural change (new page, rename, link edit, sidebar change) and before opening a pull request.

## Project Structure

```
.
├── index.md                          # Homepage (VitePress home layout: hero + features)
├── CLAUDE.md                         # Full conventions reference for contributors & AI agents
├── .vitepress/
│   ├── config.mts                    # Nav + sidebar — single source of truth
│   └── theme/
│       ├── index.ts                  # DefaultTheme passthrough
│       └── style.css                 # Brand color overrides
├── public/                           # Static assets, served from the site root
│   ├── logo.svg
│   ├── favicon.png
│   └── images/<category>/<short-slug>/   # Per-page screenshots (.webp)
└── guide/                            # All documentation content (Markdown)
    ├── getting-started/
    ├── creating-tables/
    ├── drag-drop-tables/
    ├── drag-drop-settings/
    ├── drag-drop-elements/
    ├── data-sources/
    ├── column-settings/
    ├── field-types/
    ├── table-settings/
    ├── styling-design/
    ├── responsive-design/
    ├── table-management/
    ├── import-export/
    ├── wordpress-integration/
    ├── advanced-features/
    ├── table-formatting/
    ├── ninja-charts/
    └── changelog/
```

Category folders are **flat** — every page is `guide/<category>/<slug>.md`, exactly one level deep. There are no nested sub-folders on disk, even where the sidebar nests groups.

## Writing Conventions

A page lives at `guide/<category>/<slug>.md` and is served at `/guide/<category>/<slug>`. Only `cleanUrls` strips the `.html` extension — **the category stays in the public URL**, so moving a page changes its live link.

Every page starts with frontmatter, followed by a bare `# H1` matching the title:

```yaml
---
title: "Page Title"
description: "A short summary of what the page covers."
---
```

Cross-links always use the absolute form — never relative, never with a `.md` suffix:

```md
[Descriptive Text](/guide/column-settings/conditional-formatting)
```

Screenshots are `.webp`, stored under the **root** `public/images/<category>/<short-slug>/`, and referenced with a root-relative `/images/…` path:

```md
![Conditional Formatting tab](/images/column-settings/conditional-formatting/1.-New-Ui-conditional-formatting-tab.webp)
```

`public/` at the repo root is the only served static root. A `public/` folder anywhere else (e.g. `guide/public/`) is silently never copied to `dist/`.

**Adding a page requires adding it to the sidebar** in `.vitepress/config.mts` — VitePress does not generate navigation from the filesystem, and a missing entry will not fail the build.

Pro-only features are marked "(Pro)" after the feature name on first use.

See [`CLAUDE.md`](./CLAUDE.md) for the complete conventions reference, including changelog formatting, image naming, and hard constraints.

## Automation

Reusable procedures for this repo are packaged as skills in `.claude/skills/`:

| Skill | Use it for |
| --- | --- |
| `write-ninja-tables-doc` | Create a new page |
| `edit-ninja-tables-doc` | Change an existing page's content |
| `restructure-ninja-tables-docs` | Rename, move, delete, merge, reorder |
| `manage-ninja-tables-images` | Add, replace, or audit screenshots |
| `update-ninja-tables-changelog` | Add a release entry to the changelog |
| `audit-ninja-tables-docs` | Read-only site-wide quality gate |
| `check-ninja-tables-feature-coverage` | Check whether a plugin feature is already documented |

## Contributing

1. Create a branch from `master`.
2. Make your changes under `guide/`.
3. Add any new page to the sidebar in `.vitepress/config.mts`.
4. Run `npm run docs:dev` to preview, then `npm run docs:build` to verify.
5. Open a pull request.

## Tech Stack

- [VitePress](https://vitepress.dev/) v1.6
- [Vue](https://vuejs.org/) 3.5
- Markdown with VitePress extensions (frontmatter, containers, code groups)
- Local (client-side) search — no external search service
- Brand color: teal `#01D5C6`

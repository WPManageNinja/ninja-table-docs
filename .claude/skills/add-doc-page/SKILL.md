---
name: add-doc-page
description: Create a new Ninja Tables documentation page in this VitePress site the correct way — scaffold the Markdown with proper frontmatter and structure, place screenshots, and (critically) register the page in the nested sidebar in .vitepress/config.mts so it actually shows up. Use whenever adding, moving, or renaming a guide page under guide/**.
---

# Add a documentation page

Adding a page is really three coordinated changes. Skipping the sidebar registration (step 3) is
the #1 mistake — the page will build fine but nobody will ever find it.

## Step 1 — Create the Markdown file

Path: `guide/<category>/<slug>.md`, kebab-case slug. Pick the real category folder — this repo has
exactly 18: `getting-started`, `creating-tables`, `drag-drop-tables`, `drag-drop-settings`,
`drag-drop-elements`, `data-sources`, `column-settings`, `field-types`, `table-settings`,
`styling-design`, `responsive-design`, `table-management`, `import-export`,
`wordpress-integration`, `advanced-features`, `table-formatting`, `ninja-charts`, `changelog`.

Template matching this repo's actual convention:

```markdown
---
title: "Human Readable Title"
description: "One-sentence summary of the page."
---

# Human Readable Title

Short intro paragraph — what this feature is and why someone would use it.

## First Major Step
Step-by-step instructions. Bold UI labels exactly as they appear in the plugin, e.g.
**Table Configuration** and **Save**.

![Descriptive alt text](https://ninjatables.com/wp-content/uploads/YYYY/MM/slug-WxH.png)

## Next Step
...
```

Rules: exactly one `# H1` matching `title`; `##`/`###` for sections/sub-steps; internal links are
relative and omit `.md` (e.g. `/guide/column-settings/basic-settings`); no established callout
syntax is in use — an optional `> [!TIP]` is fine if it genuinely helps, don't force it.

## Step 2 — Add screenshots

This repo currently has **two coexisting patterns** — check which one makes sense before picking:
- **Historical/actual pattern** (used by every existing page): external hosted URLs,
  `https://ninjatables.com/wp-content/uploads/YYYY/MM/slug-WxH.ext`.
- **Recommended going forward**: place new screenshots under
  `guide/public/images/<category>/<page-slug>/` and reference by absolute path
  (`/guide/public/images/<category>/<page-slug>/file.webp`) — folders for this already exist
  per-category, just currently unused by any page.

Either works and won't break the build — just be consistent within the page you're writing.

## Step 3 — Register in the sidebar (REQUIRED)

Edit `.vitepress/config.mts`. The sidebar is **nested**, not flat — 11 top-level groups, several
with `collapsed: true` sub-groups up to 2 levels deep:

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

Find the correct nested `items` array for your category — don't just push to the top level. Entry
shape:

```ts
{ text: 'Page Title', link: '/guide/<category>/<slug>' }
```

(no `.md` extension). Only touch the top `nav` array if the page needs top-nav visibility — rare;
`nav` currently only has Home / User Guide / Changelog / Website.

## Step 4 — Verify

Follow the `preview-docs` skill: run `npm run docs:dev` and confirm the page renders, sits in the
right sidebar group, images resolve, and links work. Then run `npm run docs:build` to confirm a
clean production build.

## Checklist

- [ ] File created at `guide/<category>/<slug>.md` with `title`/`description` frontmatter and one `# H1`
- [ ] Images referenced consistently (one pattern, not mixed) and they resolve
- [ ] Sidebar entry added to the correct **nested** group in `.vitepress/config.mts`
- [ ] `npm run docs:dev` looks right
- [ ] `npm run docs:build` passes

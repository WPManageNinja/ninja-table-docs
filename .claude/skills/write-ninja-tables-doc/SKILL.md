---
name: write-ninja-tables-doc
description: 'Create a NEW Ninja Tables end-user documentation page in this VitePress site, correctly placed in a category folder and wired into the hand-maintained nested sidebar in .vitepress/config.mts. Optionally converts pasted HTML or raw markdown source into a clean doc. USE FOR: add a doc, write a new doc page, create a doc for X, document this feature, write a guide for, new documentation page, turn this content into a doc, import this article. DO NOT USE FOR: editing an existing page (use edit-ninja-tables-doc), renaming/moving/deleting a page or reordering the sidebar (use restructure-ninja-tables-docs), site-wide quality checks (use audit-ninja-tables-docs), deciding whether a plugin feature is already documented (use check-ninja-tables-feature-coverage), or non-docs markdown like README.md / CLAUDE.md.'
license: MIT
compatibility: 'VitePress repo using guide/<category>/<slug>.md layout with a hand-maintained nested sidebar inline in .vitepress/config.mts and cleanUrls (no rewrite flattening — the category stays in the URL). Requires Node + npm to run docs:build.'
metadata:
  project: ninja-table-docs
  canonical-rules: CLAUDE.md
---

# Write a Ninja Tables Doc

Create one new documentation page end-to-end: place it in the right category folder, write it in
the house style, set up its images, wire it into the nested sidebar in `.vitepress/config.mts`,
and verify with a clean build. Canonical conventions live in `CLAUDE.md` — this skill is the
*procedure*.

---

## Agent Behavior Rules

1. **DO** complete Phase 1 setup and confirm the summary table before writing anything.
2. **DO** place the file at `guide/<category>/<slug>.md` inside an existing category folder.
3. **DO** include YAML frontmatter (`title`, `description`) and make the line after it a bare
   `# H1` matching `title`.
4. **DO** use the absolute cross-link form `/guide/<category>/<slug>` everywhere (no `.md`).
5. **DO** add the page to the correct nested group in `.vitepress/config.mts`'s `sidebar` array
   (mandatory — VitePress does NOT auto-discover pages), preserving `collapsed: true` on groups
   that already have it.
6. **DO** end on a green `npm run docs:build`.
7. **DO NOT** create a `.md` file directly under `guide/` (excluding `guide/public`).
8. **DO NOT** use relative links (`./slug`, `../slug`) or a link with a `.md` suffix.
9. **DO NOT** leave support boilerplate ("contact our support team," "reach out for
   assistance").
10. **DO NOT** invent a new category folder or a new sidebar group without asking the user.
11. **DO NOT** write `** term **` (inner-whitespace bold) — use `**term**`.
12. **DO** mark Pro-only features "(Pro)" after the feature name on first use.

---

## Phase 1: Setup (Interactive)

Ask the user directly for each item. Do not assume or skip.

### 1.1 Title
> **What is the page title?** (becomes the `# H1`, the frontmatter `title`, and the sidebar
> `text` unless told otherwise)

Record as `TITLE`.

### 1.2 Category folder
> **Which category does it belong in?**

The 18 existing folders under `guide/`: `getting-started`, `creating-tables`,
`drag-drop-tables`, `drag-drop-settings`, `drag-drop-elements`, `data-sources`,
`column-settings`, `field-types`, `table-settings`, `styling-design`, `responsive-design`,
`table-management`, `import-export`, `wordpress-integration`, `advanced-features`,
`table-formatting`, `ninja-charts`, `changelog`. If none fits, STOP and ask whether to add a new
category folder — do not invent one silently. Record as `CATEGORY`.

### 1.3 Slug (with uniqueness check)
Derive `SLUG` = kebab-case of `TITLE`. Verify it is globally unique:
`find guide -name '<slug>.md'` must return nothing. If it collides, ask the user for a distinct
slug. Record as `SLUG`. The file will be `guide/<CATEGORY>/<SLUG>.md`.

### 1.4 Sidebar group + position
The category folder maps to a nested group in `.vitepress/config.mts` — see `CLAUDE.md` for the
full tree (11 top-level groups; several nest sub-groups up to 2 levels deep, e.g. Table
Configuration → Column Settings / Field Types / Table Settings). Ask:
> **Which sidebar group should this appear in, and after which item?**

Record as `SIDEBAR_GROUP` and `SIDEBAR_POSITION`. If the right group doesn't exist, ask before
creating one.

### 1.5 Pro flag
> **Is this a Pro-only feature?** (if yes, mark it "(Pro)"; check
> `.claude/skills/check-ninja-tables-feature-coverage/references/index.md` if unsure of the tier)

Record as `IS_PRO`.

### 1.6 Images
> **Are there images? If yes, external hosted URLs or local files to place under
> `guide/public/images/<category>/<slug>/`?**

Record as `HAS_IMAGES` + source paths/URLs.

### 1.7 Source content (optional)
> **Do you have existing content (pasted HTML/markdown, or a plugin readme excerpt) to convert,
> or should I draft from your description?**

Record as `SOURCE_CONTENT`.

### 1.8 Confirm
Summarize and wait for confirmation before proceeding:

| Parameter        | Value |
| ---------------- | ----- |
| Title            | ...   |
| Category folder  | ...   |
| File path        | guide/<category>/<slug>.md |
| Sidebar group    | ...   |
| Position         | ...   |
| Pro-only         | ...   |
| Images           | ...   |
| Source content   | ...   |

---

## Phase 2: Context

1. Read `CLAUDE.md` (canonical conventions).
2. Read 1–2 existing docs in the same `CATEGORY` to match tone, heading depth, and image style.
3. Read the target group in `.vitepress/config.mts`'s `sidebar` array.
4. If this page is documenting a plugin feature, check
   `.claude/skills/check-ninja-tables-feature-coverage/references/index.md` for any existing
   chunk/caveat about it.

---

## Phase 3: Procedure

```
1. SCAFFOLD - Copy templates/doc-template.md to guide/<CATEGORY>/<SLUG>.md.
              Fill frontmatter title/description; set the H1; delete the scaffold-notes comment.

2. BODY     - Write the page per CLAUDE.md style:
              - frontmatter (title/description) -> # H1 -> 1-3 sentence intro
                (bold feature name on first use)
              - ## sections, ### sub-topics
              - bullets for steps; numbered lists only for strict sequences
              - cross-links as /guide/<category>/<slug> ONLY (no .md, no relative form)
              - mark Pro features "(Pro)" if IS_PRO
              - NO support boilerplate
              If SOURCE_CONTENT: convert it (strip wrapper HTML, fix bold whitespace).

3. IMAGES   - If HAS_IMAGES with local files: mkdir -p
              guide/public/images/<CATEGORY>/<SLUG>/, copy files in, reference each as
              /guide/public/images/<CATEGORY>/<SLUG>/<file>.ext. If external URLs: use them
              directly, matching the historical https://ninjatables.com/wp-content/uploads/...
              pattern.

4. SIDEBAR  - Insert into the correct nested items array in .vitepress/config.mts's sidebar:
              { text: '<TITLE>', link: '/guide/<CATEGORY>/<SLUG>' }
              Keep existing collapsed: true flags. Keep valid TypeScript.

5. BUILD    - Run: npm run docs:build
              Fix any dead-link / parse warnings, then rebuild until clean.
```

---

## Phase 4: Verify & Report

Report:
- File created: `guide/<CATEGORY>/<SLUG>.md`
- Public URL: `/guide/<CATEGORY>/<SLUG>`
- Sidebar entry added under **<SIDEBAR_GROUP>**
- Image folder: `guide/public/images/<CATEGORY>/<SLUG>/` (N files) or "external URLs" or "none"
- Build: pass / fail (+ any warnings fixed)
- If this documents a plugin feature: whether the matching feature-memory chunk (if any) was
  updated to `doc_status: documented` — see `check-ninja-tables-feature-coverage`.

---

## Quick Reference

### Paths & formats
```
File:        guide/<category>/<slug>.md
URL:         /guide/<category>/<slug>              (cleanUrls strips .html only — category stays)
Cross-link:  [Text](/guide/<category>/<slug>)       (never .md, never relative ./ or ../)
Image (external): https://ninjatables.com/wp-content/uploads/YYYY/MM/<slug>-WxH.ext
Image (local):     guide/public/images/<category>/<slug>/<name>.ext
Image ref (local):  /guide/public/images/<category>/<slug>/<name>.ext
Sidebar:     { text: '<Title>', link: '/guide/<category>/<slug>' }   in the correct nested group
Bold:        **term**                          (no inner spaces)
Build:       npm run docs:build
```

### Locate / check
```
Slug unique?   find guide -name '<slug>.md'     (must be empty)
Group names:   read .vitepress/config.mts sidebar array (or CLAUDE.md's summary)
```

### Key Principles
1. **Category folder always** — never a bare file under `guide/`.
2. **Sidebar is mandatory** — a doc not in `.vitepress/config.mts`'s sidebar is invisible.
3. **URLs include the category** — this repo does NOT flatten to a bare slug.
4. **Cross-check the feature-memory index** when documenting a plugin feature.
5. **Green build or it's not done.**

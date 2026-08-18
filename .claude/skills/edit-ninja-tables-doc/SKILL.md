---
name: edit-ninja-tables-doc
description: 'Edit the CONTENT of an EXISTING Ninja Tables documentation page in place (same slug, same file location) while preserving every site convention. Handles wording changes, new/removed sections, updated steps, and swapped or added screenshots. USE FOR: edit the X doc, update the wording on, add a section to, rewrite this page, fix the screenshot in, this doc is out of date, correct an error in the doc, expand the X guide. DO NOT USE FOR: creating a new page (use write-ninja-tables-doc), renaming the slug / moving to another category / deleting / reordering the sidebar (use restructure-ninja-tables-docs), site-wide audits (use audit-ninja-tables-docs), or deciding whether a feature is documented at all (use check-ninja-tables-feature-coverage).'
license: MIT
compatibility: 'VitePress repo using guide/<category>/<slug>.md layout with a hand-maintained nested sidebar inline in .vitepress/config.mts. Requires Node + npm to run docs:build.'
metadata:
  project: ninja-table-docs
  canonical-rules: CLAUDE.md
---

# Edit a Ninja Tables Doc

Modify an existing page in place. The slug, file path, and sidebar `link` stay the same.
Canonical conventions live in `CLAUDE.md` — this skill is the *procedure* for safe edits.

---

## Agent Behavior Rules

1. **DO** locate the exact file before editing and confirm it with the user.
2. **DO** preserve all conventions on every edit: absolute `/guide/<category>/<slug>` links (no
   `.md`, no relative form), `**term**` bold (no inner spaces), no support boilerplate, "(Pro)"
   markers for Pro features.
3. **DO** keep the frontmatter `title`/H1 in sync — if the display title changes, update both,
   and update the matching sidebar `text` in `.vitepress/config.mts` (the `link`/slug stays the
   same).
4. **DO** put any new/replacement images in the page's existing folder under
   `public/images/<category>/<short-slug>/` as .webp, referenced as `/images/...`. Resolve the
   real folder by grepping the page's current refs — the short-slug is a compressed form of the
   page slug. See `manage-ninja-tables-images`.
5. **DO** end on a green `npm run docs:build`.
6. **DO NOT** change the slug, rename, or move the file — that is restructure work.
7. **DO NOT** introduce relative links or links with a `.md` suffix.
8. **DO NOT** add closing support boilerplate.
9. **DO NOT** touch unrelated docs.
10. **DO** before editing, confirm exactly which section(s) of the page need to change and match
    the surrounding tone/heading level rather than restructuring the whole page.

---

## Phase 1: Setup (Interactive)

### 1.1 Target page
> **Which doc?** (title, slug, or URL)

Resolve to a file: `find guide -name '<slug>.md'`. If ambiguous or not found, ask. Record
`TARGET_PATH`, `SLUG`, `CATEGORY`.

### 1.2 The change
> **What should change?** (new wording, add/remove a section, update steps, swap image…)

Record as `CHANGE`.

### 1.3 Images & title
> **Does this change involve images?** and **Does the page title (H1/frontmatter) change?**

Record `TOUCHES_IMAGES` and `TITLE_CHANGES`.

### 1.4 Confirm

| Parameter      | Value |
| -------------- | ----- |
| File           | ...   |
| Change         | ...   |
| Touches images | ...   |
| Title changes  | ...   |

Wait for confirmation.

---

## Phase 2: Context

1. Read `TARGET_PATH` fully.
2. Read `CLAUDE.md` for conventions.
3. If `TITLE_CHANGES`: read `.vitepress/config.mts` and find the sidebar entry whose `link` is
   `/guide/<CATEGORY>/<SLUG>` (its `text` must be updated to match the new title).
4. If this page documents a plugin feature, check whether
   `.claude/skills/check-ninja-tables-feature-coverage/references/index.md` has a chunk pointing
   at it — update the chunk's `source_version`/`caveat` too if the edit changes those facts.

---

## Phase 3: Procedure

```
1. EDIT     - Apply CHANGE to TARGET_PATH using Edit.
              Enforce conventions on touched lines: absolute links, **term** bold,
              "(Pro)" markers, no boilerplate.

2. IMAGES   - If TOUCHES_IMAGES: resolve the page's real folder first —
                grep -oE "/images/[^)]*" <TARGET_PATH> | sed "s|/[^/]*$||" | sort -u
              Add/replace .webp files there, continuing the <n>.-<Short-Label> numbering,
              and update the ![alt](/images/...) refs. Remove refs whose files you deleted.

3. SIDEBAR  - If TITLE_CHANGES: update the matching entry's "text" in .vitepress/config.mts.
              Do NOT change its "link". Keep valid TypeScript.

4. BUILD    - npm run docs:build ; fix warnings; rebuild until clean.
```

---

## Phase 4: Verify & Report

Report:
- File edited: `TARGET_PATH`
- Summary of what changed
- Images touched? (added/replaced/removed)
- Sidebar `text` updated? (yes/no — link unchanged)
- Build: pass / fail

---

## Quick Reference

### Locate
```
File by slug:   find guide -name '<slug>.md'
Sidebar entry:  grep -n "'/guide/<category>/<slug>'" .vitepress/config.mts
Image folder:   public/images/<category>/<short-slug>/   (compressed slug — grep, do not guess)
```

### Formats (unchanged from site rules)
```
Cross-link:  [Text](/guide/<category>/<slug>)   (never .md, never relative)
Image ref:   ![Alt](/images/<category>/<short-slug>/<n>.-<Short-Label>.webp)
Bold:        **term**                           (no inner spaces)
```

### Key Principles
1. **In place only** — same slug, same path, same sidebar link.
2. **Conventions survive edits** — don't regress links/bold/boilerplate.
3. **Title change ⇒ sidebar text change** (link stays).
4. **Use this page's existing image folder** rather than inventing a new short-slug.
5. **Green build or it's not done.**

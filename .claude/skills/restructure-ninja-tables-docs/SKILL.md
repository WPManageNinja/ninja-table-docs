---
name: restructure-ninja-tables-docs
description: 'Perform STRUCTURAL operations on Ninja Tables docs while protecting reference integrity: rename a doc (change its slug/URL), move a doc to another category, delete a doc, merge two docs, or reorder the sidebar. Always rewrites inbound links, moves the image folder, and updates .vitepress/config.mts. USE FOR: rename this doc, change the slug, change the URL of, move X to another category, delete this doc, remove this page, merge these two docs, reorder the sidebar, change the order of pages. DO NOT USE FOR: content/wording edits (use edit-ninja-tables-doc), creating a brand-new page (use write-ninja-tables-doc), or read-only audits (use audit-ninja-tables-docs).'
license: MIT
compatibility: 'VitePress repo using guide/<category>/<slug>.md layout with a hand-maintained nested sidebar inline in .vitepress/config.mts and cleanUrls (category stays in the URL). Requires git, Node + npm to run docs:build.'
metadata:
  project: ninja-table-docs
  canonical-rules: CLAUDE.md
---

# Restructure Ninja Tables Docs

Structural changes are high-risk because **the file path is the public URL** (category included):
renaming, moving, or deleting a doc breaks every inbound `/guide/<category>/<slug>` link, can
orphan an image folder, and desyncs the sidebar. This skill makes those changes safely. Canonical
conventions live in `CLAUDE.md`.

---

## Agent Behavior Rules

1. **DO** confirm the operation and exact old/new identifiers before any change.
2. **DO** find every inbound link before renaming/moving:
   `grep -rl '](/guide/<old-category>/<old-slug>)' guide index.md`.
3. **DO** rewrite every inbound reference to the new path.
4. **DO** move the doc's local image folder with it (if it uses one) and fix in-doc image refs
   when the slug or category changes.
5. **DO** update `.vitepress/config.mts`'s sidebar — `link`, `text`, and group as needed —
   keeping valid TypeScript and existing `collapsed: true` flags.
6. **DO** use `git mv` for renames/moves so history is preserved.
7. **DO** end on a green `npm run docs:build` — and whenever an image folder was moved or files
   were renumbered, ALSO run the verify gate in `manage-ninja-tables-images` Phase 3. A `git mv`
   of an image folder without updating every ref leaves broken images that the build passes
   silently: it only fails on a relative path, never on a missing `/images/...` file.
8. **DO NOT** rename or move without rewriting every inbound reference.
9. **DO NOT** leave an orphaned local image folder under the old path.
10. **DO NOT** delete a doc without removing its sidebar entry AND reporting any inbound links
    that will now be dead.
11. **DO NOT** change page wording here (that's `edit-ninja-tables-doc`).
12. **DO** if the doc being renamed/moved/deleted has a feature-memory chunk under
    `.claude/skills/check-ninja-tables-feature-coverage/references/features/`, update its
    `doc_page` field (or `doc_status: missing` if deleted with no replacement) and the matching
    row in `references/index.md`.

---

## Phase 1: Setup (Interactive)

### 1.1 Operation
> **Which operation?** rename | move-category | delete | reorder | merge

Record as `OPERATION`.

### 1.2 Identifiers (by operation)
- **rename:** `OLD_SLUG`, `NEW_SLUG`, `CATEGORY` (verify new is unique:
  `find guide/<category> -name '<new>.md'`)
- **move-category:** `SLUG`, `OLD_CATEGORY`, `NEW_CATEGORY`, target sidebar group
- **delete:** `SLUG` (+ category)
- **merge:** `FROM_SLUG`, `INTO_SLUG` (+ categories; content of FROM is folded into INTO, then
  FROM deleted)
- **reorder:** sidebar group + the new item order

Resolve current path(s) with `find guide -name '<slug>.md'`. Record all.

### 1.3 Inbound link survey
Run `grep -rln '](/guide/<category>/<slug>)' guide index.md` for each affected path and show the
user the count + file list, so the blast radius is visible before confirming.

### 1.4 Confirm

| Parameter        | Value |
| ---------------- | ----- |
| Operation        | ...   |
| Old → new path   | ...   |
| Inbound links    | N files (listed) |
| Sidebar change   | ...   |

Wait for confirmation.

---

## Phase 2: Context

1. Read `CLAUDE.md`.
2. Read `.vitepress/config.mts` and locate the affected sidebar entry/entries.
3. Resolve the doc's REAL image folder — it is a compressed `<short-slug>`, not always the
   filename slug, so grep it rather than assuming:
   `grep -oE "/images/[^)]*" guide/<cat>/<slug>.md | sed "s|/[^/]*$||" | sort -u`
   Record it as `IMG_DIR` (may be empty if the page has no images).
4. Check `.claude/skills/check-ninja-tables-feature-coverage/references/index.md` for any chunk
   referencing the affected path(s).

---

## Phase 3: Procedure (by operation)

```
RENAME (slug change, same category):
  1. git mv guide/<cat>/<OLD_SLUG>.md guide/<cat>/<NEW_SLUG>.md
  2. git mv <IMG_DIR> public/images/<cat>/<NEW_SHORT_SLUG>   (if IMG_DIR exists; derive the new
     short-slug the same compressed way, or keep the old folder name and skip steps 2-3)
  3. In the moved file, rewrite local image refs .../<OLD_SHORT_SLUG>/ -> .../<NEW_SHORT_SLUG>/
  4. grep -rl '](/guide/<cat>/<OLD_SLUG>)' guide index.md -> rewrite each to /guide/<cat>/<NEW_SLUG>
  5. .vitepress/config.mts: set the entry's link to /guide/<cat>/<NEW_SLUG> (and text if changed)
  6. Update feature-memory chunk's doc_page if applicable
  7. BUILD

MOVE-CATEGORY (slug same, folder changes):
  1. git mv guide/<OLD_CAT>/<SLUG>.md guide/<NEW_CAT>/<SLUG>.md
  2. git mv <IMG_DIR> public/images/<NEW_CAT>/<SHORT_SLUG>   (if IMG_DIR exists)
  3. In the moved file, rewrite local image refs .../<OLD_CAT>/<SHORT_SLUG>/ -> .../<NEW_CAT>/<SHORT_SLUG>/
  4. grep -rl '](/guide/<OLD_CAT>/<SLUG>)' guide index.md -> rewrite to /guide/<NEW_CAT>/<SLUG>
     (unlike a flattened-URL site, the category IS part of the URL here, so this link DOES change)
  5. .vitepress/config.mts: move the {text,link} entry into the new group, link updated
  6. Update feature-memory chunk's doc_page if applicable
  7. BUILD

DELETE:
  1. grep -rln '](/guide/<cat>/<SLUG>)' guide index.md -> report inbound links that will break;
     fix or flag
  2. git rm guide/<cat>/<SLUG>.md
  3. rm -rf <IMG_DIR>   (if it exists AND no other page references those files — check first:
     grep -rn "<short-slug>/" --include="*.md" guide index.md)
  4. .vitepress/config.mts: remove the sidebar entry
  5. Feature-memory: if a chunk pointed here, set its doc_status to missing/partial and clear
     doc_page; update the index row
  6. BUILD

MERGE (FROM into INTO):
  1. Fold FROM's content into guide/<cat>/<INTO_SLUG>.md (preserve conventions)
  2. Move any still-needed images into INTO's image folder; fix refs
  3. grep -rl '](/guide/<cat>/<FROM_SLUG>)' guide index.md -> rewrite to /guide/<cat>/<INTO_SLUG>
  4. Delete FROM (file + image folder + sidebar entry)
  5. Update feature-memory chunk(s) if applicable
  6. BUILD

REORDER:
  1. Reorder items within the group in .vitepress/config.mts (valid TypeScript, collapsed:true
     preserved)
  2. BUILD
```

---

## Phase 4: Verify & Report

Report:
- Operation performed; old → new path(s)
- Inbound links rewritten: count + file list
- Image folder moved/removed (if applicable)
- Sidebar diff (link/text/group/order)
- Feature-memory chunk updated? (yes/no, which one)
- Dead links remaining (for delete): listed, or "none"
- Build: pass / fail

---

## Quick Reference

### Survey & locate
```
File by slug:    find guide -name '<slug>.md'
Inbound links:   grep -rln '](/guide/<category>/<slug>)' guide index.md
Image folder:    public/images/<category>/<short-slug>/   (grep the page's refs; do not guess)
Sidebar entry:   grep -n "'/guide/<category>/<slug>'" .vitepress/config.mts
```

### Rules of thumb
```
URL = /guide/<category>/<slug>   -> category IS part of the URL (unlike a rewrite-flattened site)
move-category                    -> link CHANGES too (category is in the path)
rename (slug change)             -> link CHANGES + all inbound links must be rewritten
```

### Key Principles
1. **The category is part of the URL here** — a move-category operation changes links too, not
   just the sidebar group.
2. **Survey blast radius first** (`grep -rln`) and show it before acting.
3. **Local image folder travels with the doc**; never orphan it.
4. **Sidebar stays in sync** — link/text/group/order all reconciled.
5. **Use `git mv`; finish on a green build.**

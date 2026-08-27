---
name: manage-ninja-tables-images
description: 'Add, replace, standardize, and audit screenshots in the Ninja Tables VitePress docs. Enforces the repo convention: images live at public/images/<category>/<short-slug>/<n>.-<Short-Label>.webp, are referenced in markdown as /images/... (never /guide/public/...), are always .webp, and carry descriptive alt text. Verifies every reference resolves and reports orphans. USE FOR: add screenshots, embed images, replace an image, fix image paths, broken image, image not showing, convert to webp, rename screenshots, renumber screenshots, find unused images, check alt text. DO NOT USE FOR: brand assets like public/logo.svg or public/favicon.png (config-level, see CLAUDE.md), creating a whole new page (use write-ninja-tables-doc), prose edits (use edit-ninja-tables-doc), or moving a page''s image folder as part of a rename (use restructure-ninja-tables-docs).'
license: MIT
compatibility: 'VitePress 1.6 site with the default publicDir at the repo root (public/). Markdown image refs are root-relative /images/... paths served straight out of public/. Image conversion requires cwebp / gif2webp (libwebp) or ImageMagick. Requires Node + npm to run docs:build.'
metadata:
  project: ninja-table-docs
  canonical-rules: CLAUDE.md
---

# Manage Ninja Tables Doc Screenshots

Add, swap, and validate screenshots without breaking the site's single image convention.

---

## ⚠️ One public folder, one path form (read this first)

| Thing | Where it lives | How it's referenced |
| --- | --- | --- |
| **Doc screenshots** | `public/images/<category>/<short-slug>/<file>.webp` | `![Alt](/images/<category>/<short-slug>/<file>.webp)` |
| **Brand assets** | `public/logo.svg`, `public/favicon.png` | `/logo.svg`, `/favicon.png` in `.vitepress/config.mts` |

**`public/` at the repo root is the only served static root.** A `public/` folder nested anywhere
else — `guide/public/` most temptingly — is silently never copied to `dist/`. Any image put there
renders in dev and 404s in production. If you find empty `guide/public/` directories, they are
leftovers: never add files to them.

**Never write `/guide/public/images/...` in markdown.** The correct form is always `/images/...`.

---

## Agent Behavior Rules

1. **DO** reference images as `/images/<category>/<short-slug>/<file>.webp` — absolute, no
   `guide/`, no `public/`, no relative `./` or `../`.
2. **DO** find a page's **real** image folder by grepping its existing refs — the `<short-slug>`
   is a *compressed* version of the page slug (stopwords like `how`/`to`/`with` stripped, capped
   around 25–28 chars) and often differs from the `.md` filename.
3. **DO** use `.webp` for everything. Convert `.png`/`.jpg`/`.gif` sources before adding them.
4. **DO** follow the file-naming scheme `<n>.-<Short-Label>.webp` — `<n>` is 1-based in the order
   the image appears on the page, `<Short-Label>` is Title-Case-hyphenated, and dimension suffixes
   (`-1024x536`, `-scaled`) are stripped. Example:
   `1.-New-Ui-conditional-formatting-tab.webp`.
5. **DO** continue a folder's existing numbering rather than restarting it, and renumber the
   trailing images when inserting one mid-page.
6. **DO** write descriptive alt text stating what the screenshot shows
   (`![Conditional Formatting tab](...)`), not `![image]` or `![screenshot]`.
7. **DO** place each image directly after the step or paragraph it illustrates.
8. **DO** end on Phase 3's VERIFY GATE — never on a green `npm run docs:build` alone. The build
   silently passes a missing file, an external URL, a non-webp and an orphan; it only fails on a
   relative path. A green build is not evidence the images work.
9. **DO NOT** add external image URLs (`ninjatables.com` or any other host). Every screenshot is
   local and **zero external refs remain** — the 3 dead `fluent-forms-integration.md` hotlinks
   that used to be the standing exception were restored from the Internet Archive and localised
   on 2026-08-27. An external URL is not just off-convention: the upstream host deletes files,
   which is precisely how those 3 broke.
10. **DO NOT** use a relative image path (`./shot.png`, `../shot.png`). Images render through
   `<ZoomableImage>` (see CLAUDE.md → Images → Image zoom), so `src` bypasses Vite's asset
   pipeline and a relative path 404s in the production build. Absolute `/images/...` only.
11. **DO NOT** create a `public/` folder anywhere but the repo root.
12. **DO NOT** bulk-delete image folders. Report orphans and ask.

---

## Phase 1: Setup (Interactive)

### 1.1 Task
> **What do you need?**

```
A. ADD       - new screenshots on an existing page
B. REPLACE   - swap an outdated screenshot
C. FIX       - an image isn't rendering
D. AUDIT     - check refs resolve, find orphans, check alt text and formats
```

Record `TASK`.

### 1.2 Target
For A–C: > **Which page?** Resolve it:
```
find guide -name '<slug>.md'
```
Record `TARGET_PATH`, `CATEGORY`, `SLUG`.

For D: no target — the whole site.

### 1.3 Source files
For A/B: > **Where are the new screenshots?** Record their paths and formats.

### 1.4 Confirm the destination folder

Resolve the page's **existing** image folder before inventing a short-slug:
```
grep -oE '/images/[^)]*' <TARGET_PATH> | sed 's|/[^/]*$||' | sort -u
```
- If the page already has a folder → **use that one**, even if its name differs from the slug.
- If it has none → check `ls public/images/<CATEGORY>/` for a near-match, then create
  `public/images/<CATEGORY>/<short-slug>/` and state the short-slug you derived.

Also note the highest existing number in that folder so new files continue the sequence:
```
ls public/images/<CATEGORY>/<short-slug>/ | sort -t. -k1 -n | tail -1
```

State the destination, the short-slug, and the starting number, then wait for confirmation.

---

## Phase 2: Procedure by task

### A. ADD
```
1. Convert sources to .webp if needed:
     cwebp -q 82 input.png -o output.webp
     gif2webp input.gif -o output.webp            # animated GIFs
     # or: magick input.png -quality 82 output.webp
2. Name them <n>.-<Short-Label>.webp, continuing the folder's numbering.
3. Copy into the confirmed folder.
4. Insert refs in TARGET_PATH directly after the step each one illustrates:
     ![Descriptive alt text](/images/<CATEGORY>/<short-slug>/<n>.-<Short-Label>.webp)
5. If inserting mid-page, renumber the later files AND their refs together.
6. Run the Phase 3 VERIFY GATE (not just docs:build).
```

### B. REPLACE
```
1. Find the existing ref and its file name.
2. Keep the SAME file name where possible — then no markdown edit is needed and nothing
   else that reuses the image breaks.
3. If the name must change: grep for the old name across all docs first, then update
   every ref.
4. Run the Phase 3 VERIFY GATE (not just docs:build).
```

### C. FIX a broken image
Work down this list — ordered by how often each cause actually occurs here:
```
1. Path written as /guide/public/images/... instead of /images/...
2. File placed under guide/public/ instead of the root public/  (renders in dev, 404s in prod)
3. Short-slug assumed from the page slug, but the real folder is compressed differently
4. Typo in the number/label, or wrong extension (.png vs .webp)
5. File genuinely missing from disk
6. Relative path (./ or ../) used instead of root-relative
7. External URL whose upstream file was deleted — curl it with a browser User-Agent AND a
   site Referer before concluding; a plain curl 404 can also mean hotlink protection.
   If it is genuinely gone, recover it from the Internet Archive:
     https://archive.org/wayback/available?url=<url-encoded-original>
     then fetch http://web.archive.org/web/<timestamp>if_/<original-url>
   Verify the download is complete (a truncated PNG makes cwebp fail with
   "libpng error: ReadFunc: invalid read length") before converting, then localise the ref.
```
**A broken image is never caused by the zoom plugin.** `<ZoomableImage>` passes `src` through
verbatim — if the file 404s it renders broken with or without the plugin. Before blaming the
theme, `curl` the URL and check the file exists on disk.
Verify the file exists:
```
ls public/images/<CATEGORY>/<short-slug>/
```

### D. AUDIT (read-only)
Current baseline (2026-08-27): **394 images, 394 unique refs, 0 broken refs, 0 orphans,
0 non-webp, 0 external URLs.** There are no known-dead exceptions any more. Anything else is a
regression introduced since.
```
1. BROKEN REFS - every markdown ref must resolve to a real file:
     grep -rhoE '\(/images/[^)]*\)' --include='*.md' guide index.md \
       | tr -d '()' | sed 's|^/|public/|' | sort -u \
       | while read p; do [ -f "$p" ] || echo "MISSING: $p"; done

2. WRONG FORM  - refs that still carry the guide/public prefix:
     grep -rn '](/guide/public/' --include='*.md' guide index.md

3. RELATIVE    - relative image paths:
     grep -rnE '!\[[^]]*\]\(\.\.?/' --include='*.md' guide index.md

4. STRAY DIR   - a public/ folder outside the repo root:
     find . -name public -type d -not -path './public' -not -path './node_modules/*'

5. ORPHANS     - image files no page references:
     comm -23 <(find public/images -type f | sed 's|^public||' | sort -u) \
              <(grep -rhoE '\(/images/[^)]*\)' --include='*.md' guide index.md \
                | tr -d '()' | sort -u)
     (Expect none. Report, do not delete.)

6. ALT TEXT    - empty or placeholder alt text:
     grep -rnE '!\[(|image|screenshot|img)\]\(' --include='*.md' guide index.md

7. NON-WEBP    - non-webp screenshots:
     find public/images -type f ! -name '*.webp'

8. EXTERNAL    - remaining hosted image URLs:
     grep -rn '](http' --include='*.md' guide | grep -iE '\.(png|jpg|jpeg|gif|webp)'
     (Expect exactly 3, all in data-sources/fluent-forms-integration.md.)
```

---

## Phase 3: Verify & Report

### VERIFY GATE — mandatory before reporting done

`npm run docs:build` catches **one** of the four image faults. Measured on this repo 2026-08-27
by seeding each fault deliberately:

| Fault | docs:build |
| --- | --- |
| Relative path (`./shot.webp`) | ❌ fails, exit 1 |
| Referenced `/images/...` file missing | ✅ **passes silently** |
| External URL (dead or alive) | ✅ **passes silently** |
| Non-webp / orphan | ✅ **passes silently** |

Never report an image task complete on a green build alone. Run all five; 1–4 must print
nothing, 5 is report-and-ask:

```bash
# 1. Referenced but missing on disk — this is what broke fluent-forms-integration
comm -13 <(find public/images -type f | sed 's|^public||' | sort -u) \
         <(grep -rhoE '\(/images/[^)]*\)' --include='*.md' guide index.md | tr -d '()' | sort -u)

# 2. External image URLs (must always be zero)
grep -rn '!\[[^]]*\](http' --include='*.md' guide index.md

# 3. Relative / non-absolute paths
grep -rhoE '!\[[^]]*\]\([^)]+\)' --include='*.md' guide index.md \
  | sed -E 's/.*\((.*)\)/\1/' | grep -vE '^/images/'

# 4. Non-webp files on disk
find public/images -type f ! -name '*.webp'

# 5. Orphans — REPORT and ask, never bulk-delete
comm -23 <(find public/images -type f | sed 's|^public||' | sort -u) \
         <(grep -rhoE '\(/images/[^)]*\)' --include='*.md' guide index.md | tr -d '()' | sort -u)
```

Then prove they actually render — check 1 only proves the file exists on disk:

```bash
pkill -f "vitepress preview"     # a stale one keeps serving the OLD dist -> phantom 404s
npm run docs:build && npm run docs:preview &
sleep 5
grep -rhoE '\(/images/[^)]*\)' --include='*.md' guide index.md | tr -d '()' | sort -u \
  | while read p; do c=$(curl -s -o /dev/null -w '%{http_code}' "http://127.0.0.1:4173$p"); \
      [ "$c" = 200 ] || echo "BROKEN $c $p"; done
pkill -f "vitepress preview"
```

If the port is already busy the new preview dies with `EADDRINUSE` and the old one answers from a
stale `dist` — always `pkill` first, or the results are meaningless.

Report:
- Task performed and the folder used (confirm it was the page's real folder, not a guessed one)
- Images added / replaced / renumbered, by name
- Any refs updated
- Audit findings, grouped: broken refs, wrong-form paths, stray public dirs, orphans, weak alt
  text, non-webp, external URLs
- Verify gate: the result of each of the five checks + the live 200 sweep (say "N images
  returned 200", not just "build passed" — a green build proves nothing about images)

For an audit, present findings as a checklist with counts and offending paths, then **offer**
fixes — do not apply them unasked.

---

## Quick Reference

### Formats
```
Markdown ref:  ![Descriptive alt text](/images/<category>/<short-slug>/<n>.-<Short-Label>.webp)
On disk:       public/images/<category>/<short-slug>/<n>.-<Short-Label>.webp
Brand assets:  public/logo.svg, public/favicon.png  → referenced in config.mts as /logo.svg
Never:         /guide/public/images/...   guide/public/...   ./img.webp
```

### Locate
```
A page's image folder:  grep -oE '/images/[^)]*' <file> | sed 's|/[^/]*$||' | sort -u
Folders in a category:  ls public/images/<category>/
Highest number used:    ls public/images/<category>/<short-slug>/ | sort -t. -k1 -n | tail -1
Reuse of one image:     grep -rn '<file>.webp' --include='*.md' guide index.md
```

### Videos (YouTube embeds, not images)
```
<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/<ID>" title="<Descriptive> Video" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
```
The .video-embed class lives in .vitepress/theme/style.css (full content width, 16:9, 16px
margins — same footprint as a doc image). Never leave a bare youtu.be/watch?v= URL on its own
line: it renders as a link, not a player.
Find them all:  grep -rn "youtu" --include="*.md" guide

### Convert to webp
```
cwebp -q 82 input.png -o output.webp
gif2webp input.gif -o output.webp
magick input.png -quality 82 output.webp
```

### Key Principles
1. **`/images/...` in markdown, `public/images/...` on disk** — nothing in between.
2. **Root `public/` only** — a nested `public/` silently never ships.
3. **Find the short-slug, don't guess it** — it's a compressed slug, not the filename.
4. **`.webp`, numbered in page order, descriptive alt text.**
5. **Orphans get reported, not deleted.**

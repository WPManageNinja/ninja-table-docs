---
name: update-ninja-tables-changelog
description: 'Add or maintain a release entry in the Ninja Tables changelog (guide/changelog/change-log.md). Prepends a new reverse-chronological version section in the site''s exact ::: code-group format with 🆕 New Features / 🔧 Improvements / 🔒 Security / 🐛 Bug fixes tabs, rewriting raw release notes or the plugin readme.txt changelog into user-facing lines. USE FOR: write a changelog entry, update the changelog, add release notes, document version X, we shipped a new release, import the readme.txt changelog. DO NOT USE FOR: writing or updating feature guides (use write-ninja-tables-doc / edit-ninja-tables-doc), deciding whether a release feature needs a doc page (use check-ninja-tables-feature-coverage), or site-wide checks (use audit-ninja-tables-docs).'
license: MIT
compatibility: 'Operates on guide/changelog/change-log.md in the ninja-table-docs VitePress site. Uses VitePress ::: code-group containers with md-fenced tabs. Release source of truth is the readme.txt inside ninja-tables-resource/**/ninja-tables.zip and ninja-tables-pro.zip. Requires Node + npm to run docs:build.'
metadata:
  project: ninja-table-docs
  canonical-rules: CLAUDE.md
---

# Update the Ninja Tables Changelog

Add a release to `guide/changelog/change-log.md`, newest first, in the site's established format.
Canonical conventions live in `CLAUDE.md` — this skill is the *procedure*.

---

## Agent Behavior Rules

1. **DO** read the current top entry in `guide/changelog/change-log.md` before writing, and copy
   its exact structure — blank lines, emoji, tab order, and bullet style included.
2. **DO** write from the **user's** point of view: what changed for someone using the plugin, not
   what changed in the code.
3. **DO** use `• ` bullets with the house **label prefix** (`Added:`, `Improved:`, `Fixed:`,
   `Fixes:`, `Security:`, `Compatibility:`) and a **trailing period** — this file's style, unlike
   the sibling docs sites.
4. **DO** omit any tab that has no entries — never ship an empty `🐛 Bug fixes` block.
5. **DO** insert the new release directly beneath the intro paragraph, above the previous
   `## Ninja Tables vX.Y.Z` heading.
6. **DO** ask for the release date if it isn't given; the format is `*Released on August 3, 2026*`
   on its own line, with a blank line above and below.
7. **DO** keep the four tabs in this order when more than one is present:
   🆕 New Features → 🔧 Improvements → 🔒 Security → 🐛 Bug fixes.
8. **DO** end on a green `npm run docs:build`.
9. **DO NOT** reorder, reword, or "tidy" past releases — they are a historical record, including
   their inconsistent verb tenses (`Fixes:` vs `Fixed:`, `Improve:` vs `Improved:`).
10. **DO NOT** include internal refactors, test changes, dependency bumps, or ticket numbers.
11. **DO** flag it when a release adds or changes a documented feature: the matching guide page
    probably needs an edit too. Say so in the report — a changelog line is not documentation.

---

## Phase 1: Setup (Interactive)

### 1.1 Source material
> **What's in this release?** (release notes, a `readme.txt` changelog section, a git log range,
> or a plain description)

If the user points at the plugin zips, the changelog section of `readme.txt` inside
`ninja-tables-resource/**/ninja-tables.zip` (and `ninja-tables-pro.zip`) is the source of truth —
the two are nearly identical. Record `SOURCE`.

### 1.2 Version and date
> **Version number?** and **release date?**

Record `VERSION` (e.g. `5.2.14`) and `DATE` (e.g. `August 18, 2026`). Confirm `VERSION` is newer
than the current top entry; if it is older, STOP and ask — back-filling an old release means
inserting mid-file, not prepending.

### 1.3 Confirm the classification

Sort every item into the four buckets and show the user the draft classification before writing:

```
🆕 New Features  - capabilities that did not exist before
🔧 Improvements  - existing behavior made better, faster, or clearer
                   (PHP/WP compatibility lines belong here, as "Compatibility: ...")
🔒 Security      - hardening and vulnerability fixes
🐛 Bug fixes     - things that were broken and now work
```

Drop anything users can't perceive. Wait for confirmation.

---

## Phase 2: Context

1. Read the top ~45 lines of `guide/changelog/change-log.md` — frontmatter, H1, intro, and the
   current newest release — and mirror that format exactly.
2. If the release touches a documented feature, find the affected pages so you can name them in
   the report:
   ```
   grep -rln '<feature term>' --include='*.md' guide
   ```
3. For a "what's new" release with genuinely new capabilities, run
   `check-ninja-tables-feature-coverage` to see whether each one already has a guide page.

---

## Phase 3: Procedure

```
1. DRAFT   - Rewrite each item into one user-facing line with a label prefix and a period.
             Keep lines short — one clause, no sub-bullets, no nested lists.

2. INSERT  - Prepend the new section directly under the intro paragraph of
             guide/changelog/change-log.md, above the previous release heading.
             Use the exact template below. Omit empty tabs.

3. BUILD   - npm run docs:build ; confirm the code-group renders and the build is clean.
```

### Template

````md
## Ninja Tables v<VERSION>

*Released on <DATE>*

::: code-group

```md [🆕 New Features]
• Added: <capability that is new>.
```

```md [🔧 Improvements]
• Improved: <existing behavior, now better>.
• Compatibility: <PHP/WP version note>.
```

```md [🔒 Security]
• Security: <what was hardened>.
```

```md [🐛 Bug fixes]
• Fixed: <what was broken>.
```

:::
````

The fence language inside each tab is `md`, and the tab label sits in `[...]` after it. A blank
line separates the heading, the date line, and the `::: code-group` opener.

---

## Phase 4: Verify & Report

Report:
- Version and date added
- Item counts per tab, and which tabs were omitted
- Anything from the source you deliberately dropped as not user-facing
- **Guide pages that likely need updating** because of this release (name them), and any new
  feature with no page at all
- Build: pass / fail

---

## Quick Reference

### House style
```
File:      guide/changelog/change-log.md
Heading:   ## Ninja Tables v5.2.13
Date:      *Released on August 3, 2026*        (own line, blank line above and below)
Bullets:   • Added: sentence case, trailing period.
Prefixes:  Added: | Improved: | Fixed: | Fixes: | Security: | Compatibility:
Tabs:      🆕 New Features | 🔧 Improvements | 🔒 Security | 🐛 Bug fixes
Order:     newest release first, directly under the intro paragraph
```

### Good vs bad entries
```
GOOD  • Fixed: European decimal format in custom filter.
BAD   • normalize decimal separator in NumberFormatter::parse() (#412)

GOOD  • Improved: Large table data exports smoothly to CSV/JSON.
BAD   • Added chunked export batching

GOOD  • Compatibility: PHP 8.4 deprecation notices.
BAD   • Bumped composer deps
```

### Locate
```
Current top version:  grep -m1 '^## Ninja Tables v' guide/changelog/change-log.md
All versions:         grep '^## Ninja Tables v' guide/changelog/change-log.md
Tabs in use:          grep -o '```md \[[^]]*\]' guide/changelog/change-log.md | sort -u
Readme source:        unzip -p ninja-tables-resource/**/ninja-tables.zip '*/readme.txt'
```

### Key Principles
1. **User-facing language only.**
2. **Copy the previous entry's format exactly** — including the label-prefix bullet style.
3. **Empty tabs get omitted, not shipped blank.**
4. **Never rewrite history.**
5. **A new feature usually means a guide page is needed too — say so.**

---
name: audit-ninja-tables-docs
description: 'Run a read-only quality gate across the whole Ninja Tables docs site: verify file placement, frontmatter, link form, sidebar coverage, image integrity, convention compliance, and a clean production build. Produces a scored pass/fail checklist with offending paths, then offers fixes. USE FOR: audit the docs, check for broken links, verify doc conventions, run the quality gate, is everything consistent, lint the docs, pre-commit doc check, find docs missing from the sidebar, find orphaned images. DO NOT USE FOR: writing a new page (use write-ninja-tables-doc), editing content (use edit-ninja-tables-doc), renaming/moving/deleting (use restructure-ninja-tables-docs), or checking plugin-feature documentation coverage (use check-ninja-tables-feature-coverage).'
license: MIT
compatibility: 'VitePress repo using guide/<category>/<slug>.md layout with a hand-maintained nested sidebar inline in .vitepress/config.mts. Requires Node + npm to run docs:build.'
metadata:
  project: ninja-table-docs
  canonical-rules: CLAUDE.md
---

# Audit Ninja Tables Docs

A read-only health check for the documentation site. Run it before committing or deploying. It
reports problems first; it fixes only with explicit user approval. Canonical conventions live in
`CLAUDE.md`.

---

## Agent Behavior Rules

1. **DO** run all checks read-only and present the full scored report before changing anything.
2. **DO** show offending file paths for every failed check (not just a count).
3. **DO** ask for confirmation before applying any fix; route real fixes through the appropriate
   skill (edit / restructure / write).
4. **DO** finish with `npm run docs:build` and report its result.
5. **DO NOT** edit content silently.
6. **DO NOT** mark a check "pass" without the command output that proves it.

---

## Phase 1: Setup (Interactive)

### 1.1 Scope
> **Audit the whole site, or a specific category folder?**

Record as `SCOPE` (default: whole `guide/`).

### 1.2 Fix mode
> **Report only, or report and then offer to fix?**

Record as `FIX_MODE`. (Default: report only.)

---

## Phase 2: Context

1. Read `CLAUDE.md` (the rules being enforced).
2. Note counts: docs = `find guide -name '*.md' -not -path 'guide/public/*' | wc -l`;
   sidebar/nav guide-links = `grep -c "link: '/guide/" .vitepress/config.mts`.

---

## Phase 3: Checks

Run each; record PASS/FAIL + offending paths.

```
C1 PLACEMENT   - No .md directly under guide/ (excluding guide/public):
                 find guide -maxdepth 1 -name '*.md'                    -> expect empty

C2 LINK FORM   - No relative links:
                 grep -rEn '\]\(\.\.?/' guide index.md                  -> expect empty
               - No .md-suffixed internal links:
                 grep -rEn '\]\(/guide/[^)]*\.md\)' guide index.md      -> expect empty

C3 FRONTMATTER - Every guide/**/*.md (excluding public) starts with a --- frontmatter block
                 containing both title: and description::
                 for f in $(find guide -name '*.md' -not -path 'guide/public/*'); do
                   head -1 "$f" | grep -q '^---$' || echo "$f: missing frontmatter"
                 done                                                   -> expect no output

C4 BOILER      - No support boilerplate:
                 grep -rin 'contact our support team' guide             -> expect empty
                 grep -rin 'reach out to our support team' guide        -> expect empty

C5 SIDEBAR     - Coverage: every guide/<category>/<slug>.md path appears as a link literal
                 somewhere in .vitepress/config.mts (nav or sidebar — this repo's nav
                 legitimately duplicates 2 sidebar links, so check presence, not exact count
                 parity):
                 for f in $(find guide -name '*.md' -not -path 'guide/public/*'); do
                   slug=$(echo "$f" | sed 's#^guide/##; s#\.md$##')
                   grep -q "/guide/$slug" .vitepress/config.mts || echo "$f: not in config.mts"
                 done                                                   -> expect no output
               - Every link in config.mts resolves: for each '/guide/<category>/<slug>' found,
                 the file guide/<category>/<slug>.md must exist.

C6 IMAGES      - Baseline at last audit (2026-08-27): 394 files, 394 unique refs,
                 0 broken refs, 0 orphans, 0 non-webp, 0 external URLs.
                 There are no longer any known-dead exceptions — the 3 former
                 fluent-forms-integration.md hotlinks are now local webp files.
                 Anything beyond that is a regression.
               - Every ref resolves:
                   grep -rhoE "\(/images/[^)]*\)" --include="*.md" guide index.md \
                     | tr -d "()" | sed "s|^/|public/|" | sort -u \
                     | while read p; do [ -f "$p" ] || echo "MISSING: $p"; done
               - No wrong-form refs:  grep -rn "](/guide/public/" --include="*.md" guide index.md
               - No stray public dir:  find . -name public -type d -not -path "./public" \
                                         -not -path "./node_modules/*"
               - No non-webp:  find public/images -type f ! -name "*.webp"
               - No external image URLs (must be zero — upstream hosts delete files):
                   grep -rn '!\[[^]]*\](http' --include="*.md" guide index.md
               - No relative / non-absolute image paths:
                   grep -rhoE '!\[[^]]*\]\([^)]+\)' --include="*.md" guide index.md \
                     | sed -E 's/.*\((.*)\)/\1/' | grep -vE "^/images/"
               - Orphans (report, never delete):
                   comm -23 <(find public/images -type f | sed "s|^public||" | sort -u) \
                            <(grep -rhoE "\(/images/[^)]*\)" --include="*.md" guide index.md \
                              | tr -d "()" | sort -u)
               - LIVE 200 sweep — the file existing on disk is not proof it serves:
                   pkill -f "vitepress preview"   # stale one serves the OLD dist
                   npm run docs:build && npm run docs:preview & sleep 5
                   grep -rhoE "\(/images/[^)]*\)" --include="*.md" guide index.md \
                     | tr -d "()" | sort -u \
                     | while read p; do c=$(curl -s -o /dev/null -w "%{http_code}" \
                         "http://127.0.0.1:4173$p"); [ "$c" = 200 ] || echo "BROKEN $c $p"; done
                   pkill -f "vitepress preview"

C7 BOLD        - No inner-whitespace bold (broken open and broken close). Run BOTH; union of
                 matches should be empty:
                   open : grep -rEn '(^|[[:space:]([{])\*\* ' guide index.md
                   close: grep -rEn ' \*\*([[:space:]]|$)' guide index.md
                 (These ignore legit bold whose content starts/ends with punctuation.)

C8 BUILD       - npm run docs:build exits 0 with no dead-link warnings.
               - NOTE: a green build says nothing about images. Verified 2026-08-27 by
                 seeding each fault: a missing /images/ file, an external URL, a non-webp
                 and an orphan ALL pass with exit 0 and no mention. Only a relative path
                 fails the build. C6 is the only gate that catches a broken image — never
                 substitute C8 for it.
```

---

## Phase 4: Report (& optional fix)

Print a scored checklist:

| Check | Result | Offending paths |
| ----- | ------ | --------------- |
| C1 Placement | ✅ / ❌ | ... |
| C2 Link form | ✅ / ❌ | ... |
| C3 Frontmatter | ✅ / ❌ | ... |
| C4 Boilerplate | ✅ / ❌ | ... |
| C5 Sidebar coverage | ✅ / ❌ | ... |
| C6 Image integrity | ✅ / ❌ | ... |
| C7 Bold rule | ✅ / ❌ | ... |
| C8 Build | ✅ / ❌ | ... |

Then summarize total pass/fail. If `FIX_MODE` allows and the user confirms, fix each issue via
the right skill (content → `edit-ninja-tables-doc`; structure → `restructure-ninja-tables-docs`;
missing page → `write-ninja-tables-doc`; images → `manage-ninja-tables-images`; changelog →
`update-ninja-tables-changelog`) and re-run the failed checks.

---

## Quick Reference

### One-shot survey
```
Docs count:       find guide -name '*.md' -not -path 'guide/public/*' | wc -l
Guide-links in config.mts: grep -c "link: '/guide/" .vitepress/config.mts
Dup slugs:        find guide -name '*.md' -not -path 'guide/public/*' -exec basename {} \; | sort | uniq -d
Build:            npm run docs:build
```

### Key Principles
1. **Read-only first** — report before you touch anything.
2. **Paths, not just counts** — every failure names its files.
3. **Coverage, not strict count-parity** — nav intentionally duplicates a couple of sidebar links
   in this repo.
4. **Build is the final gate** — it's the only real link checker.
5. **Fixes go through the proper skill**, never ad-hoc.

---
name: check-ninja-tables-feature-coverage
description: 'Given a plugin feature name or a "what''s new in vX.Y.Z" prompt, determine whether it is already documented in guide/**, and which existing page(s) cover it, using the feature-memory index in references/. Reports the coverage decision so the caller can route to write-ninja-tables-doc (nothing covers it) or edit-ninja-tables-doc (something already does). USE FOR: is this feature documented, check doc coverage for a feature, what still needs docs, has the changelog entry for vX.Y.Z been written up, find undocumented Pro features. DO NOT USE FOR: actually writing or editing the page (use write-ninja-tables-doc / edit-ninja-tables-doc), structural changes (use restructure-ninja-tables-docs), or a general site health check (use audit-ninja-tables-docs).'
license: MIT
compatibility: 'VitePress repo using guide/<category>/<slug>.md layout. Feature source of truth is the plugin readme.txt inside ninja-tables-resource ZIPs (free + pro).'
metadata:
  project: ninja-table-docs
  canonical-rules: CLAUDE.md
---

# Check Ninja Tables Feature Coverage

Decide whether a plugin feature is already documented, and where — a triage step, not a writing
step. Canonical conventions live in `CLAUDE.md`; this skill only consults and updates the
feature-memory manifest under `references/`.

---

## Agent Behavior Rules

1. **DO** always consult `references/index.md` before concluding a feature is undocumented.
2. **DO** treat the index as potentially stale — cross-check with a live `grep`/`find` over
   `guide/**` before reporting "missing," since the index is only as fresh as the last skill run
   that touched it.
3. **DO** report a concrete recommendation: hand off to `write-ninja-tables-doc` (nothing covers
   it) or `edit-ninja-tables-doc` (a page covers it, targeting the specific gap for `partial`).
4. **DO** record any tier/source inconsistency found in the readme verbatim in the chunk's
   `caveat` field — never silently resolve it.
5. **DO NOT** write or edit any `guide/**` page yourself — hand off to the appropriate skill.
6. **DO NOT** invent a `doc_status` without checking both the index and the live filesystem.

---

## Phase 1: Setup (Interactive)

### 1.1 What are we checking?
> **A specific feature name, or a changelog version (e.g. "what's new in v5.2.12")?**

Record as `QUERY` and its type (`FEATURE` or `VERSION`).

---

## Phase 2: Context

1. Read `references/index.md` (this skill's own manifest).
2. Normalize `QUERY` to a lookup key (Title Case, matching the `feature` field style used in
   chunk files, e.g. "Conditional Formatting").
3. If `VERSION` type: also read `guide/changelog/change-log.md` for that version's entries — the
   changelog is maintained separately by other work and is usually already current; this skill's
   job is to check whether each *feature* (not the changelog bullet itself) has narrative
   documentation elsewhere.

---

## Phase 3: Procedure

```
1. LOOKUP    - Find the matching row in references/index.md.

2. BRANCH    - documented -> open the chunk in references/features/<slug>.md for
               tier/caveats, open its doc_page(s). Recommend: no action needed, or
               edit-ninja-tables-doc if the query implies a change to an already-documented
               feature.
             - partial    -> chunk explains the gap. Recommend: edit-ninja-tables-doc,
               targeted at the specific gap.
             - missing, or not in the index at all -> do a staleness check:
               grep -ril "<feature keywords>" guide/ (excluding guide/changelog)
               If still not found: recommend write-ninja-tables-doc.

3. RECORD    - If this check surfaces a feature with no chunk file yet, create one under
               references/features/<slug>.md (schema below) and add its row to
               references/index.md, even before the page itself is written — so the next
               check-ninja-tables-feature-coverage run doesn't repeat the same research.
```

**Chunk file schema** (`references/features/<slug>.md`):
```yaml
---
feature: "Feature Name"          # canonical Title Case
tier: pro                        # free | pro
category: column-settings        # a real guide/ folder slug, or "uncategorized"
doc_status: documented           # documented | partial | missing
doc_page: guide/column-settings/conditional-formatting.md   # comma-separate if >1; blank if missing
source_version: "unspecified"
caveat: ""                       # verbatim note of any source inconsistency; blank if none
---

One paragraph plain-English description, paraphrased from the plugin readme.
```

---

## Phase 4: Verify & Report

Report:
- Feature/version checked
- Row found in index? (yes/no) — if stale, note the live-filesystem check performed instead
- Coverage verdict: documented / partial / missing, with `doc_page`(s) if any
- Recommended next skill: `write-ninja-tables-doc`, `edit-ninja-tables-doc`, or "none — already
  covered"
- Whether `references/index.md` / a chunk file was created or updated as part of this check

---

## Quick Reference

### Locate
```
Index:        .claude/skills/check-ninja-tables-feature-coverage/references/index.md
Chunk files:  .claude/skills/check-ninja-tables-feature-coverage/references/features/<slug>.md
Live check:   grep -ril "<keyword>" guide/ | grep -v changelog
```

### Key Principles
1. **Triage, not authoring** — this skill decides what's needed, it doesn't write pages.
2. **Index can be stale** — always corroborate a "missing" verdict with a live grep.
3. **Record inconsistencies, never resolve them silently** — the readme itself has contradictions.
4. **Close the loop** — a coverage check that finds a gap should leave a chunk file behind, even
   before the page exists.

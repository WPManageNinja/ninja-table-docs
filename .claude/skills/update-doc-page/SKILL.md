---
name: update-doc-page
description: Given a feature name or a "what's new in vX.Y.Z" prompt, determine whether it's already documented in guide/**, and either update the covering page(s) or hand off to add-doc-page if nothing covers it yet. Consults the feature-memory index in references/. Use whenever asked to document a new or changed Ninja Tables feature, or to check documentation coverage for a feature.
---

# Update or add a feature's documentation

## Step 1 — Identify the feature

Normalize the given feature name or changelog line to a lookup key (Title Case, matching the
`feature` field style used in the memory chunks, e.g. "Conditional Formatting").

## Step 2 — Consult the feature-memory index

Read `references/index.md` (in this skill folder) and find the matching row.

- **`doc_status: documented`** → open the linked chunk in `references/features/<slug>.md` for
  tier/caveats, open the `doc_page`(s) it points to → go to Step 3.
- **`doc_status: partial`** → the chunk's body/caveat explains the gap → Step 3, targeted at just
  that gap.
- **`doc_status: missing`, or the feature isn't in the index at all** → first do a staleness check:
  grep `guide/**/*.md` titles and headings for the feature name, since the index can only be as
  fresh as the last time a skill updated it. If genuinely not covered → Step 4.

## Step 3 — Update the existing page(s)

Open the page(s) from `doc_page`. Add or revise the relevant section matching this repo's existing
tone and heading level (don't restructure the whole page for a small addition). If the source is a
changelog line ("what's new in vX.Y.Z"), check whether `guide/changelog/change-log.md` already
lists it under that version — it should, since the changelog is maintained separately and is
already complete for released versions. Don't duplicate changelog bullets into feature pages;
only add narrative/how-to content a changelog entry doesn't cover.

After editing:
- Update the chunk file's `source_version` if this introduced a version-specific detail.
- Flip `doc_status` to `documented` if it was `partial`.

## Step 4 — Hand off when nothing covers it

Follow the `add-doc-page` skill to scaffold the new page and register it in the sidebar. Then:
- Create (or update) the matching chunk file under `references/features/<slug>.md` with
  `doc_status: documented` and the new `doc_page` path.
- Add or update its row in `references/index.md` so the index stays accurate for next time.

## Step 5 — Verify

Follow the `preview-docs` skill.

## Checklist

- [ ] Feature looked up in `references/index.md`
- [ ] Correct branch taken (update existing vs. hand off to `add-doc-page`)
- [ ] Page(s) edited or created
- [ ] Chunk file + index row updated to reflect the new `doc_status`/`doc_page`
- [ ] `docs:dev`/`docs:build` verified via `preview-docs`

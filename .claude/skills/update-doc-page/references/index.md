---
title: "Feature Memory Index"
description: "Manifest of all feature-memory chunks consumed by the update-doc-page skill."
---

# Feature Memory Index

Source of truth: `ninja-tables-resource/untitled folder/ninja-tables.zip` (free) and
`ninja-tables-pro.zip` (pro) — each zip's root `readme.txt` (~1279 lines, WordPress.org format,
nearly identical between the two). Re-derive/refresh this table if those ZIPs are ever updated to
a newer plugin version.

This is a starting set covering the free/premium feature lists from the readme's
`== Ninja Tables Features ==` section. Only 4 representative rows are fully populated so far
(one per `doc_status`/tier combination, to establish the pattern) — the remaining features from
that section still need chunk files. See "Remaining features to chunk" below.

| Feature | Tier | Category | Doc Status | Doc Page(s) | Chunk File |
|---|---|---|---|---|---|
| Conditional Formatting | pro | column-settings | documented | guide/column-settings/conditional-formatting.md | features/conditional-formatting.md |
| Drag and drop table builder | free | drag-drop-tables | documented | guide/drag-drop-tables/how-to-create-your-first-drag-and-drop-table-with-ninja-tables.md | features/drag-and-drop-table-builder.md |
| Merge/split table cells | pro (free in Drag & Drop) | table-formatting | documented | guide/table-formatting/colspan-cell-merge.md, guide/table-formatting/rowspan.md | features/merge-split-table-cells.md |
| WooCommerce Reviews table | free | data-sources | missing | — | features/woocommerce-reviews-table.md |

## Remaining features to chunk (from readme's Free/Premium lists — not yet populated)

Free list: Unlimited data, FluentCart tables, Pre-made templates, Table design customization,
Table colors, Searchable table, Charts and graphs, Fluent Forms integration, Responsive table,
Import-Export.

Premium list: Google Sheets integration, WooCommerce integration, WP Posts / Any Custom Post Type
Integration, Multimedia support, Front End Table Editing, Transform value with HTML, Stackable
table, Select Field/Image/File/Lightbox/Button/Link data types, Custom Filter.

## Known source inconsistencies (do not silently resolve — record as-is)

- Table-creation-option counts conflict across sources: "11 table creation options"
  (readme Description section) vs. "9 dynamic table types" (readme FAQ) vs. "9+ table creation
  options" (this repo's own `guide/getting-started/ninja-tables-introduction.md`).
- "Merge/split table cells" is listed under the Premium feature list but annotated inline
  "(Free in Drag and Drop)" — it's genuinely free in one table mode and pro in the other.
- The readme FAQ states Image/File/Lightbox/iframe uploads with no Pro qualifier, while the
  Premium feature list gates "Select Field, Image/File/Lightbox, & Button/Link data type" as pro.

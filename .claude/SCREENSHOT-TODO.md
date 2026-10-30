# Screenshot TODO

> **Superseded 2026-10-30 by the docs overhaul.** Every image line was removed from `docs/`; the queue is now the
> 293 structured placeholders in the pages themselves (`<!-- TODO(screenshot): <slug>-<n>` with `screen`, `table`,
> `state`, `highlight`, `view`, `alt`). List them with `grep -rn 'TODO(screenshot)' docs`. The per-page table below
> is the pre-overhaul state, kept for history only.

Retake queue for the redesigned admin UI. Not part of the built site (lives under `.claude/`).

Every image in `docs/` predates the redesign rewrite (commit `200bce7` kept the old image lines "to be retaken"), so every page below needs a pass. Work a page at a time by delegating to the **`ninja-tables-screenshotter`** subagent:

> Refresh the screenshots on `docs/<category>/<slug>.md`. Reuse the existing file names.

It writes `scripts/screenshots/plans/<slug>.json`, previews, verifies and writes the `.webp` files. Then tick the row (Status → `done YYYY-MM-DD`) and note the plan in `.claude/plugin-memory/CHANGES.md`.

Rules: replace stale images under the same file name; drop an image only when its section is gone; screens that can't be reached on `http://localhost:10013` stay as `<!-- TODO(screenshot): … -->` with a note here.

**Totals (generated 2026-10-29):** 88 pages, 356 image references, 0 TODO markers. Pages that are 'moved' pointer stubs are skipped.

## advanced-features

| Page | Images | TODO markers | Plan | Status |
|---|---|---|---|---|
| `advanced-shortcode` | 2 |  |  |  |
| `frontend-editing` | 6 |  |  |  |

## column-settings

| Page | Images | TODO markers | Plan | Status |
|---|---|---|---|---|
| `advanced-settings` | 4 |  |  |  |
| `basic-settings` | 2 |  |  |  |
| `conditional-formatting` | 23 |  |  |  |
| `transform-value` | 11 |  |  |  |

## creating-tables

| Page | Images | TODO markers | Plan | Status |
|---|---|---|---|---|
| `create-your-first-table` | 14 |  |  |  |

## data-sources

| Page | Images | TODO markers | Plan | Status |
|---|---|---|---|---|
| `construct-table-from-csv` | 5 |  |  |  |
| `create-table-from-custom-sql` | 6 |  |  |  |
| `create-wp-posts-table` | 6 |  |  |  |
| `fluent-forms-integration` | 9 |  |  |  |
| `fluentcart-integration` | 6 |  |  |  |
| `google-sheets-integration` | 8 |  |  |  |
| `woocommerce-integration` | 5 |  |  |  |
| `woocommerce-product-average-rating-column` | 1 |  |  |  |
| `woocommerce-product-reviews-table` | 3 |  |  |  |

## drag-drop-elements

| Page | Images | TODO markers | Plan | Status |
|---|---|---|---|---|
| `button-element` | 4 |  |  |  |
| `html-element` | 1 |  |  |  |
| `icon-element` | 1 |  |  |  |
| `image-element` | 2 |  |  |  |
| `list-element` | 3 |  |  |  |
| `progress-bar` | 1 |  |  |  |
| `ribbon-element` | 4 |  |  |  |
| `shortcode-element` | 2 |  |  |  |
| `star-rating-element-in-ninja-tables-drag-and-drop` | 1 |  |  |  |
| `styled-list` | 3 |  |  |  |
| `text-element` | 2 |  |  |  |
| `text-icon-pro` | 4 |  |  |  |

## drag-drop-settings

| Page | Images | TODO markers | Plan | Status |
|---|---|---|---|---|
| `drag-drop-cell-settings` | 4 |  |  |  |
| `drag-drop-rows-columns` | 4 |  |  |  |
| `ninja-tables-drag-and-drop-table-settings` | 4 |  |  |  |
| `responsive-table-design` | 5 |  |  |  |
| `spacing` | 2 |  |  |  |

## drag-drop-tables

| Page | Images | TODO markers | Plan | Status |
|---|---|---|---|---|
| `how-to-create-your-first-drag-and-drop-table-with-ninja-tables` | 5 |  |  |  |

## field-types

| Page | Images | TODO markers | Plan | Status |
|---|---|---|---|---|
| `actionable-button-link` | 2 |  |  |  |
| `date-field` | 6 |  |  |  |
| `html-field` | 2 |  |  |  |
| `image-file-lightbox` | 4 |  |  |  |
| `numeric-value` | 3 |  |  |  |
| `select-field` | 2 |  |  |  |
| `single-line-text-field` | 3 |  |  |  |
| `text-area` | 3 |  |  |  |

## getting-started

| Page | Images | TODO markers | Plan | Status |
|---|---|---|---|---|
| `how-to-install-and-activate-ninja-tables-plugin` | 2 |  |  |  |
| `ninja-tables-introduction` | 11 |  |  |  |
| `onboarding-setup-guide` | 6 |  |  |  |
| `upgrade-to-ninja-tables-pro-add-on-and-activate-ninja-tables-pro-license-key` | 6 |  |  |  |

## import-export

| Page | Images | TODO markers | Plan | Status |
|---|---|---|---|---|
| `export-ninja-tables-csv-json` | 3 |  |  |  |
| `import-csv-file-to-an-existing-table` | 5 |  |  |  |
| `import-ninja-tables-json` | 1 |  |  |  |
| `import-table-data-from-a-csv` | 6 |  |  |  |
| `import-table-from-tablepress-plugin` | 3 |  |  |  |

## ninja-charts

| Page | Images | TODO markers | Plan | Status |
|---|---|---|---|---|
| `create-ninja-charts-with-fluent-forms-entries` | 3 |  |  |  |
| `create-ninja-charts-with-ninja-tables-data` | 3 |  |  |  |
| `getting-started-with-ninja-charts-free-wordpress-chart-plugin` | 2 |  |  |  |
| `how-to-create-chart-manually-in-ninja-charts` | 5 |  |  |  |
| `how-to-create-dynamic-charts-with-ninja-charts` | 8 |  |  |  |
| `how-to-customize-charts-in-ninja-charts` | 8 |  |  |  |
| `how-to-install-ninja-charts` | 1 |  |  |  |
| `how-to-use-data-range-picker-in-ninja-charts` | 3 |  |  |  |

## responsive-design

| Page | Images | TODO markers | Plan | Status |
|---|---|---|---|---|
| `column-responsive-breakpoints` | 3 |  |  |  |
| `stackable-table` | 4 |  |  |  |

## styling-design

| Page | Images | TODO markers | Plan | Status |
|---|---|---|---|---|
| `add-or-remove-search-or-filter-functionality` | 2 |  |  |  |
| `other-design-settings` | 1 |  |  |  |
| `pagination` | 2 |  |  |  |
| `sorting` | 2 |  |  |  |
| `table-color-settings` | 3 |  |  |  |
| `table-font-settings` | 1 |  |  |  |
| `table-style-settings` | 1 |  |  |  |
| `tables-row-color` | 4 |  |  |  |

## table-formatting

| Page | Images | TODO markers | Plan | Status |
|---|---|---|---|---|
| `colspan-cell-merge` | 3 |  |  |  |
| `image-lightbox-using-column-transform-value` | 3 |  |  |  |
| `rowspan` | 4 |  |  |  |

## table-management

| Page | Images | TODO markers | Plan | Status |
|---|---|---|---|---|
| `define-permission-for-table-users` | 1 |  |  |  |
| `rearrangement-of-rows-in-ninja-tables-manual-row-sort` | 1 |  |  |  |
| `row-column-data-calculation` | 4 |  |  |  |
| `table-cloning-duplicating` | 1 |  |  |  |
| `table-styling-css-selector` | 2 |  |  |  |
| `table-title-description-settings` | 2 |  |  |  |
| `tools-and-settings` | 5 |  | yes | preview verified |
| `woocommerce-product-comparison-bulk-add-to-cart` | 3 |  |  |  |

## table-settings

| Page | Images | TODO markers | Plan | Status |
|---|---|---|---|---|
| `csv-and-print-button` | 3 |  |  |  |
| `custom-filters` | 6 |  |  |  |
| `table-rendering-settings` | 1 |  | yes | preview verified |

## wordpress-integration

| Page | Images | TODO markers | Plan | Status |
|---|---|---|---|---|
| `acf-field-integration-with-ninja-tables-column` | 9 |  |  |  |
| `create-custom-column-in-wp-post-cpt-woocommerce-table` | 1 |  |  |  |
| `featured-image` | 6 |  |  |  |
| `post-meta-field` | 8 |  |  |  |
| `shortcode-computed-value-or-html-in-wp-post-woocommerce-table` | 6 |  |  |  |

## Wave log
- 2026-10-30 pilots: tables-list (2 of 4; 1-2 blocked), table-rendering-settings (3 of 3).
- 2026-10-30 wave 1 (Get Started, Create, Import/Export, Columns, Column types): ~70 images placed; ~30 placeholders carry a `blocked:` line (grep `blocked:` in docs/). Next: Rows/Appearance/Filters/Embed/Speed/Live data/Drag & Drop/Manage/Charts.
- 2026-10-30 wave 2 (rows, formatting, colors/fonts, features, export, responsive, filters; 18 pages): ~23 images placed; the rest blocked (need saved values on demo tables or missing seed data). See blocked: lines.

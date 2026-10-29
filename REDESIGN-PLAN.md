# Ninja Tables redesign: documentation change plan

Prepared 2026-10-29 from a full audit of the redesigned plugin: `ninja-tables-dev` branch `redesign` (v5.2.18) plus `ninja-tables-pro` 5.2.18, tested on `cart.local` (localhost:10013). This file is a working plan. It is excluded from the published site (`srcExclude`).

**Screenshots are out of scope for now.** They will be retaken later with the FluentCart screenshot system. While pages are rewritten, old images stay in place, or are removed where the screen no longer exists.

---

## 1. What changed in the plugin, in one page

| Area | Old UI | New UI |
|---|---|---|
| Navigation | Left menu: All Tables, Add Table, Tools, Help | Top bar: **Tables · Create Table · Import · Charts · Help**, **gear = Settings**, light/dark toggle, **⌘K command palette** |
| Tables list | Simple list | Columns: Source, Engine, **Used on** (pages a table is embedded on), Shortcode. Filters by source/engine, bulk actions, **Trash** (restore / delete permanently), Duplicate |
| Creating | "Add Table" modal | **Create a table** screen with tiles. *Start from scratch*: Default table · Upload a file (CSV/Excel/JSON) · Drag & Drop table. *Connect live data*: WP Posts/CPTs · WooCommerce products · WooCommerce reviews · Fluent Forms entries · **FluentCart products** · Google Sheets · Remote CSV · Custom SQL. Each tile opens a right-side drawer |
| Engine | DataTables was hidden/new | **FooTable or DataTables is chosen when a table is created.** It is locked afterwards for tables that store their own rows |
| Editor tabs | Table Rows, Columns, Table Design, Table Configuration, Custom CSS/JS, Import/Export… | **Table Rows · Custom filters · Appearance · Table Configuration · Frontend editing · Custom CSS/JS**. Columns and Import/Export now live **inside Table Rows** (column header menus + toolbar) |
| Rows | Modal forms | Spreadsheet-style grid, row drawer (prev/next), Duplicate / Insert below, **Sort manually** toggle, Read-only badge for connected tables, row & cell colours in Row/Cell settings |
| Columns | Separate tab | Column dialog with **Basic · Advanced · Conditions · Transform**. New: **Click to copy** column option |
| Design | "Table Design" panels | **Appearance**: live preview (Desktop/Tablet/Mobile) + side panel: Quick styles (Minimal/Lined/Striped/Bordered/Compact), Title & header, Typography, Rows & borders, Colors, **Search (old Language settings moved here)**, Sorting, Pagination, Sticky header & column, **Mobile & row details** (stack as cards, + drawer, **Row details popup**), **Export & print (moved here)**, **Use as default for new tables** |
| Table Configuration | Rendering, language, buttons, etc. | Only performance: engine, Ajax/Legacy rendering, caching, HTML cache |
| Connected tables | Settings scattered | **Source banner** "Rows come from …" + **Source settings / Edit query** drawer (Query settings · Appearance · Add new column) |
| Tools page | One page with tabs | Split: **Import** (top nav) and **Settings** (gear): General · Global appearance · Permissions (+ SQL role switch) · **Performance** (clear caches) · License |
| Import | CSV/JSON | Adds **Excel (.xlsx)**, Ninja Tables JSON, Drag & Drop export, up to 300 MB, Media Library for big files (DataTables), auto-detect TablePress / Supsystic |
| Drag & Drop builder | Manage Cells / Background modes | Right panel **Elements | Settings (Table › Cell › Element)**, click-to-add, element search, zoom, Desktop/Tablet/Mobile preview, drag to reorder rows/columns, Merge/Split toolbar, ⋯ menu for export, 15 templates in 4 categories |
| Charts | Menu | Same separate **Ninja Charts** plugin; Ninja Tables › Charts shows a one-click **Install Ninja Charts** page when it is missing |

---

## 2. Ground rules for the rewrite

1. **URLs are now flat** (done 2026-10-29): `docs/<category>/<slug>.md` is served at `docs.ninjatables.com/<slug>`, e.g. `/ninja-tables-introduction`. Every old `/guide/<category>/<slug>` address now needs a **301 redirect** to `/<slug>`. The full list of 97 is in `redirect-map.tsv`. The redirects must be live on the server **before** the new site goes up, because these 21 old addresses are hard-linked in the plugin (including copies already installed on customer sites). Ask the dev team to switch the plugin's links to the new flat form. Keep these slugs stable from now on:
   - `getting-started/ninja-tables-introduction`, `getting-started/how-to-get-support`
   - `creating-tables/create-your-first-table`
   - `data-sources/construct-table-from-csv`, `data-sources/google-sheets-integration`, `data-sources/fluent-forms-integration`, `data-sources/create-wp-posts-table`, `data-sources/create-table-from-custom-sql`, `data-sources/woocommerce-integration`
   - `import-export/import-table-data-from-a-csv`, `import-export/import-ninja-tables-json`
   - `column-settings/basic-settings`, `column-settings/conditional-formatting`, `column-settings/transform-value`
   - `responsive-design/column-responsive-breakpoints`, `styling-design/table-style-settings`, `table-management/table-title-description-settings`
   - `wordpress-integration/post-meta-field`, `drag-drop-elements/text-element`
   - `ninja-charts/getting-started-with-ninja-charts-free-wordpress-chart-plugin`, `changelog/change-log`
2. **Avoid deleting any old URL.** When a page is merged, keep a short page at the old slug that says where the topic moved, or set up a redirect on the host. VitePress has no built-in redirects.
3. Use the **exact new UI labels** (e.g. "Appearance", not "Table Design"; "Table Rows → Edit query", not "Columns tab").
4. Mark **(Pro)** on first mention, using the corrected Free/Pro split in section 6.
5. Follow the conventions in `CLAUDE.md`: absolute links, sidebar in `.vitepress/config.mts`, frontmatter, no relative image paths.

---

## 3. Page-by-page verdict (97 old pages)

Legend:
- **R** = rewrite (the UI changed)
- **E** = edit (small path or label changes)
- **K** = keep as is
- **M** = merge into another page (keep a pointer at the old URL)
- 🔒 = URL locked (section 2)

### Getting Started (6)
| Page | Verdict | What changes |
|---|---|---|
| ninja-tables-introduction 🔒 | R | New creation tiles (11 types incl. FluentCart, Excel upload), engine choice, Appearance live preview, new nav |
| how-to-install-and-activate-ninja-tables-plugin | E | Post-activation lands on the new Welcome screen |
| upgrade-to-…-pro-license-key | R | License is now Settings (gear) › License. "Activate License" submenu |
| onboarding-setup-guide | R | Every step changed: Welcome → Create a table → drawer → Table Rows grid → Add column → Appearance |
| ninja-tables-glossary | E | Add Engine, Source banner, Connected table, Quick styles, Row details popup, Trash, Used on. Remove Table Design, Tools |
| how-to-get-support 🔒 | E | Help page now has an "Open a ticket" card |

### Creating Tables (1) + Drag & Drop (18)
| Page | Verdict | What changes |
|---|---|---|
| create-your-first-table 🔒 | R | Full rewrite around Create a table → Default table drawer → Table Rows → Add column → Add data → Appearance → shortcode/Preview. Move its Custom SQL section out (it has its own page) |
| how-to-create-your-first-drag-and-drop-table… | R | 2-step drawer (scratch grid 6×3 default / import / template), new builder layout, **click Save before embedding** |
| ninja-tables-drag-and-drop-table-settings | R | Settings now in the right panel "Settings · Table". Export moved to the ⋯ menu. Add Margin bottom and max-height note |
| responsive-table-design | R | Same panel. Add the Desktop/Tablet/Mobile preview switch |
| spacing | E | Labels only. Ribbon has no Spacing |
| table-background-color-customizing… | M → new "Cell settings" page | The Background mode is gone |
| manage-cells-in-ninja-tables-drag-and-drop | R / split | The Manage Cells mode is gone. It becomes "Rows & columns" + "Cell settings" |
| text-element 🔒 | E | Add Visual/HTML mode and the inline toolbar |
| button-element | R | Button size, link rel, hover scale, icon picker (icon is Pro) |
| icon-element | E | **Now Pro** |
| image-element | E | Add new tab + link rel |
| html-element | E | Called "Custom HTML" in the panel. Code box only |
| list-element | E | Defaults |
| star-rating-element… | E | "Show rating value" is off by default. Max 3–10 |
| progress-bar | E | **Now Free**. Separate bar colour |
| shortcode-element | K | — |
| styled-list | E | Label differences |
| ribbon-element | E | Default type is side. Add Table margin top |
| text-icon-pro | E | Label differences |

### Data Sources (10)
| Page | Verdict | What changes |
|---|---|---|
| create-wp-posts-table 🔒 | R | Create drawer (friendly names, Conditions, Order by, Query limit) + Table Rows → **Edit query** drawer (Query settings / Add new column, raw keys) |
| woocommerce-integration 🔒 | R | Source settings drawer: Query settings / Appearance (cart & checkout buttons, bulk action) / Add new column. New order-by options |
| woocommerce-product-reviews-table | R | Same drawer flow. Update the tab list |
| woocommerce-product-average-rating-column | E | Path: Source settings → Add new column → Product Data → Product Average Rating |
| fluentcart-integration | R | New tile + drawer, Brands filter, **fully Free** incl. bulk add-to-cart & compare |
| fluent-forms-integration 🔒 | R | New drawer + "Install Fluent Forms now". Add the ID/Serial/Status/payment columns |
| google-sheets-integration 🔒 | R | Explain **FooTable = live, keeps links/images, caching interval** vs **DataTables = synced copy (Auto sync, Sync now, status)** |
| construct-table-from-csv 🔒 | R | Tile is "Remote CSV / JSON". Same two-engine split. **JSON URL doesn't work yet** (see Q1) |
| create-table-from-custom-sql 🔒 | R | New drawer, more placeholders, **remote database connection**, SELECT-only, admin-only + Settings › Permissions SQL switch |
| ninja-charts-integration | M → ninja-charts pages | The path changed to Ninja Tables › Charts |

### Table Configuration: Column settings (4) + Field types (8) + Table settings (5)
| Page | Verdict | What changes |
|---|---|---|
| basic-settings 🔒 | R | Column dialog opened from the Table Rows column header (no Columns tab). Key can't change later. Responsive visibility options |
| advanced-settings | R | New grouping Display / Colors / Behavior / Header. **Click to copy** is new |
| conditional-formatting 🔒 | E | "Conditions" tab. Same rule set; dynamic dates helper |
| transform-value 🔒 | E | "Transform" tab. Excel formula switch now lives here (table-wide) |
| single-line-text-field, text-area, html-field, numeric-value | E | New path only (+ the HTML field trust warning) |
| date-field | E | Standard/Custom format toggle, Show time, First day of week |
| select-field, actionable-button-link | E | Pro notes. Button options list |
| image-file-lightbox | E | 5 click actions: image only / image lightbox / iframe lightbox / link / file download |
| column-rearrangement | M → basic-settings (or "Working with Table Rows") | Now a drag on the column header in Table Rows |
| csv-and-print-button | R | Moved to **Appearance › Export & print**. Adds Excel, plain-text export, print header/footer |
| custom-filters | R | Own tab, new editor; same filter types + Reset filter button, layouts, progressive |
| language-settings | M → Appearance › Search | Search placeholder / empty-result text / dropdown heading now live in Search |
| table-rendering-settings | R | Table Configuration = engine + Ajax/Legacy + caching + HTML cache. Engine switching rules |

### Styling & Design (8) + Responsive (2)
| Page | Verdict | What changes |
|---|---|---|
| table-style-settings 🔒 | R | Becomes the **Appearance tab overview**: live preview, Quick styles, style library, Use as default |
| table-color-settings | R | Colors: Preset vs Custom (Pro); search/header/body/hover/odd-even/footer |
| table-font-settings | E | Appearance › Typography |
| tables-row-color | R | Row settings / Cell settings in Table Rows (Pro) |
| pagination | E | Appearance › Pagination; page-size changer |
| sorting | E | Appearance › Sorting; Manual sort via Table Rows → Sort manually |
| add-or-remove-search-or-filter-functionality | R | Appearance › Search (position, full width, colours, texts) + column "Searchable" |
| other-design-settings | R | Content is now Sticky header & column + Mobile & row details. Rename the page |
| column-responsive-breakpoints 🔒 | E | Column dialog › Responsive visibility |
| stackable-table | R | Appearance › Mobile & row details › "Stack rows as cards" + stack-on devices + card look |

### Table Management (8)
| Page | Verdict | What changes |
|---|---|---|
| table-title-description-settings 🔒 | R | Pencil next to the title → Table details (title, **caption**, description); Appearance › Title & header |
| table-cloning-duplicating | E | Tables list › More actions › Duplicate |
| rearrangement-of-rows…-manual-row-sort | R | Table Rows → **Sort manually** toggle |
| row-column-data-calculation | E | Path: column › Transform › Excel formula support |
| define-permission-for-table-users | R | Settings › Permissions (roles + SQL switch) |
| tools-and-settings | R | The Tools page no longer exists. It becomes "**Settings**" (General, Global appearance, Permissions, Performance, License) |
| table-styling-css-selector | E | Custom CSS/JS tab, selector `#footable_parent_<ID>` / `#ninja_dt_parent_<ID>`, Table targeting class |
| woocommerce-product-comparison-bulk-add-to-cart | R + move to data-sources | Now a Source settings › Appearance checkbox. Works for FluentCart too |

### Import & Export (5)
| Page | Verdict | What changes |
|---|---|---|
| import-table-data-from-a-csv 🔒 | R | Import screen / Upload a file tile: CSV + Excel, 300 MB, Media Library for big files, UTF-8 |
| import-csv-file-to-an-existing-table | R | Table Rows → Import / export → Import rows (sample CSV, Replace existing data) |
| import-ninja-tables-json 🔒 | E | "Ninja Tables JSON" option |
| import-table-from-tablepress-plugin | E | "Import from another plugin" (TablePress + Supsystic, shown only when detected) |
| export-ninja-tables-csv-json | R | Table Rows → Import / export → Export: CSV, Excel, JSON |

### WordPress Integration (6)
| Page | Verdict | What changes |
|---|---|---|
| post-meta-field 🔒 | R | Path: Edit query → Add new column → Field type Post Meta. Absorbs Meta Box/JetEngine/Toolset/Pods |
| featured-image | R | Same path; image sizes; WP Posts vs Woo link options |
| acf-field-integration… | R | Same path; only shown when ACF is active |
| acf-metabox-jetengine-toolset-pods… | M → post-meta-field | There is no dedicated integration; they all work via Post Meta |
| create-custom-column-in-wp-post-cpt-woocommerce-table | R | Becomes the **Dynamic columns** hub (all field types per source) |
| shortcode-computed-value-or-html… | E | New path, `{post.featured_image_url}`, FluentCart |

### Advanced Features (3) + Table Formatting (4)
| Page | Verdict | What changes |
|---|---|---|
| advanced-shortcode | R | Missing about 10 attributes (`disable_edit`, `stackable`, `stack_devices`, `post_tax`, `post_tax_field`, `sf_filter/sf_column/sf_match`, `use_parent_width`, `info`). Works on DataTables since 5.2.14. Note that `sf_*` in Ajax mode is not access control |
| default-data-filtering-shortcode | E | Works on both engines |
| frontend-editing | R | Own tab: roles for add/edit and delete, Own data only, labels, per-column Editable/Required/Default |
| colspan-cell-merge, rowspan | E | `#colspan#` / `#rowspan#` still supported (now also in the DataTables renderer); re-check the "Legacy only" note |
| image-lightbox-using-column-transform-value | E | New Transform tab path |
| hyperlinks-from-google-sheets | M → google-sheets-integration | Only true on FooTable |

### Ninja Charts (8) + Changelog (1)
| Page | Verdict | What changes |
|---|---|---|
| getting-started-with-ninja-charts… 🔒 | E | Reached via Ninja Tables › Charts |
| how-to-install-ninja-charts | E | One-click **Install Ninja Charts** button |
| create-ninja-charts-with-ninja-tables-data | E | New entry path |
| the other 5 chart pages | K | The Ninja Charts plugin UI didn't change |
| change-log 🔒 | E | Fix 5.2.14 vs 5.2.15 numbering, 5.2.17 security wording; add the redesign release when it ships |

**Totals (all 97 pages):** 42 rewrite · 43 edit · 6 keep · 6 merge.

---

## 4. New pages to add

| New page | Category |
|---|---|
| The Tables list (search, filters, Used on, Trash, bulk actions, ⌘K) | table-management |
| Create a table: all table types at a glance (the 11 tiles) | creating-tables |
| FooTable vs DataTables: choosing an engine | creating-tables (or table-settings) |
| Working in Table Rows (grid, row drawer, column menus, read-only, compact, search) | creating-tables / table-management |
| Appearance tab: Mobile & row details (row details popup, + drawer, cards) | responsive-design |
| Use a table's design as the default for new tables | styling-design |
| Settings › Performance: clearing caches | table-management |
| Connected tables: source banner and Source settings drawer | data-sources |
| Google Sheets & CSV with DataTables: auto sync | data-sources |
| Custom SQL: connect a remote database | data-sources |
| Dynamic columns reference (all field types per source) | wordpress-integration |
| Embed with the Gutenberg block (block settings change the table everywhere) | wordpress-integration |
| Classic editor button & page builders (use the shortcode; no Elementor widget) | wordpress-integration |
| Shortcode reference (`[ninja_tables]`, `[ninja_table_info]`, `[ninja_table_cell]`, `[ninja_table_builder]`, `[nt_ratings]`, `[nt_icon]`, placeholders) | advanced-features |
| Developer hooks & filters | advanced-features (new "Developers" group) |
| Free vs Pro | getting-started |
| D&D: builder tour · Rows & columns · Cell settings · Templates · Import into D&D | drag-drop-* |

About 20 new pages.

---

## 5. Questions for the product team (answers needed before writing these parts)

1. **"Remote CSV / JSON" doesn't read JSON**: a JSON URL fails with "Expected CSV". Should JSON be fixed, or the tile renamed?
2. **WP Posts Create hint** says "add later in the Columns tab", but there is no Columns tab. Fix the hint? Will Edit query get the friendly labels from Create?
3. **Google Sheets on DataTables loses links/images.** Is that intended?
4. **Gutenberg block settings overwrite the table's own settings** for every embed. Is that intended?
5. Charts page says "**a Chart option appears on every table**". No code does this. Is it planned, or should the copy change?
6. **Drag & Drop tables render empty (plus a JS error) until Save is clicked once.** Fix, or document?
7. Free/Pro: confirm **Progress = Free, Icon = Pro** (D&D) and **FluentCart = fully Free**.
8. Changelog: is 5.2.14 or 5.2.15 the right number for Aug 21? Which 5.2.17 wording is final? Include Pro-only entries? What version will the redesign ship as?
9. `{current_user_role}` empties the whole filter for logged-out visitors. Is that a bug?
10. The plugin still links to old `wpmanageninja.com/docs/...` URLs. Update them, or keep redirects?
11. Copy bugs seen (for the dev team, not docs):
    - "Hide out of stocks items"
    - "Installing WP Fluent From…"
    - The Table Configuration tab's heading says "Performance"
    - D&D CSS hint "Please don't include tag"
    - "Stylist list"
    - The Shortcode element placeholder says "write html"
    - PRO badges on templates when Pro is active
    - The Desktop toggles under Mode options are always disabled

---

## 6. Corrected Free vs Pro (from code)

- **Free:**
  - Default, Upload (CSV/Excel/JSON) and Drag & Drop tables; Fluent Forms and **FluentCart** tables (incl. bulk cart/compare)
  - Text, Textarea, HTML, Number and Date (standard format) columns
  - Quick styles, borders, typography, basic search/sort/pagination, FooTable/DataTables, Ajax render, caching
  - Custom CSS, Global appearance, Performance, shortcodes `[ninja_tables]` (id, filter, use_parent_width, info), `[ninja_table_info]`, `[ninja_table_cell]`, `[ninja_table_builder]`, the Gutenberg block and the TinyMCE button
  - D&D elements: Text, Button, Rating, List, HTML, Shortcode, **Progress**
- **Pro:**
  - WP Posts, WooCommerce products/reviews, Google Sheets, Remote CSV, Custom SQL; D&D import from URL
  - Select / Image / Button column types, custom date format, Conditions, Transform, Advanced column options
  - Row/cell colours, manual sort, custom colours, search position, sticky, expand rows, Export & print, Legacy render
  - Custom JS, Custom filters, Frontend editing, Permissions, License
  - Advanced shortcode attributes, placeholders, `[nt_ratings]`, `[nt_icon]`, block Colors tab
  - D&D: **Icon**, Image, Styled List, Ribbon, Text Icon, Highlight column, Sticky, Custom JS

---

## 7. New, friendlier categories (sidebar)

**Approach:** the sidebar groups are rebuilt around what the reader wants to do, and named after the **tabs and screens they see in the new plugin**: Table Rows, Appearance, Custom filters, Frontend editing, Table Configuration, Custom CSS/JS, Settings. Readers will see this structure in the sidebar, the home page cards and the Help page cards.

**URLs are flat** (`/pagination`), so moving a page to another sidebar group or folder never changes its address. Only renaming a slug does, and a renamed slug needs a redirect added to `redirect-map.tsv`.

New pages (★) go into the most fitting existing folder.

| # | Sidebar group (new name) | Pages in it (sub-groups in *italics*) | Was |
|---|---|---|---|
| 1 | **Get Started** | Introduction · Install & activate · Activate your Pro license · Quick start: your first table in 5 minutes (onboarding) · ★Free vs Pro · Glossary | Getting Started |
| 2 | **Create a Table** | ★All table types at a glance · Create your first table · ★FooTable or DataTables: choose an engine · Import a CSV, Excel or JSON file · Import from TablePress · Import a Ninja Tables JSON file | Creating Tables + Import & Export |
| 3 | **Add & Edit Rows** *(Table Rows tab)* | ★Working in Table Rows · Add, edit, duplicate & delete rows (from first-table page) · Sort rows manually · Row & cell colors · Import rows into an existing table · Export a table (CSV, Excel, JSON) · Duplicate a table | Table Management + Import & Export + Styling |
| 4 | **Columns** | Add & edit a column (basic-settings) · Rearrange columns · Show/hide columns on mobile (breakpoints) · Advanced column options · Conditional formatting · Transform value · Row & column calculations · Merge cells (colspan/rowspan) · *Column types*: Single line text · Text area · HTML · Number · Date · Select · Button/Link · Image, file & lightbox · Image lightbox with Transform | Column Settings + Field Types + Table Formatting |
| 5 | **Appearance** *(Appearance tab)* | Appearance overview & quick styles (table-style-settings) · Colors · Fonts · Search box (incl. language texts) · Sorting · Pagination · Sticky header & first column · Mobile view: cards, + drawer & row details (stackable + other-design-settings) · Export & print buttons · ★Use a design as the default | Styling & Design + Responsive + Table Settings |
| 6 | **Filters & Frontend Editing** | Custom filters · Frontend editing · Filter rows with a shortcode (default-data-filtering) | Table Settings + Advanced Features |
| 7 | **Performance & Custom Code** *(Table Configuration + Custom CSS/JS tabs)* | Engine, rendering & caching (table-rendering-settings) · Custom CSS & JS + CSS selectors (table-styling-css-selector) | Table Settings + Table Management |
| 8 | **Show Live Data** *(Connect live data tiles)* | ★How connected tables work · WordPress posts & custom post types · WooCommerce products · Bulk add-to-cart & compare · WooCommerce reviews · Average rating column · FluentCart products · Fluent Forms entries · Google Sheets (incl. hyperlinks) · ★Google Sheets & CSV auto sync · Remote CSV · Custom SQL query · ★Connect a remote database · *Custom columns for posts & products*: ★All column types · Post meta (incl. Meta Box/JetEngine/Toolset/Pods) · ACF fields · Featured image · Shortcode & computed values · Custom columns | Data Sources & Integration + WordPress Integration |
| 9 | **Drag & Drop Builder** | Create a Drag & Drop table · ★Builder tour · ★Templates · ★Rows & columns · ★Cell settings · Table settings · Mobile & tablet layout · Spacing · *Elements*: Text · Button · Icon · Image · List · Styled list · Star rating · Progress bar · Ribbon · Text icon · HTML · Shortcode | Drag & Drop Tables/Settings/Elements |
| 10 | **Add Tables to Your Site** | ★Embed a table: shortcode, Gutenberg block, classic editor & page builders · ★Shortcode reference · Advanced shortcode options · ★Rating & icon shortcodes | Advanced Features |
| 11 | **Manage Tables & Settings** | ★The Tables list (search, filters, Trash, Used on) · Table title, caption & description · Settings overview (tools-and-settings) · Who can manage tables (permissions) · ★Clear caches (Performance) | Table Management |
| 12 | **Charts** | Getting started with Ninja Charts · Install Ninja Charts · Dynamic charts · Manual charts · Data range picker · Customize charts · Charts from Fluent Forms · Charts from Ninja Tables data | Ninja Charts |
| 13 | **For Developers** | ★Hooks & filters · ★Code recipes | (new) |
| 14 | **Help & Updates** | How to get support · Changelog | Resources |

**Naming rules for page titles in the sidebar:** short, task-first, plain words ("Sort rows manually", not "Rearrangement of Rows in Ninja Tables – Manual Row Sort"). The `title:` in each page's frontmatter can stay longer for SEO.

**Also update:** the home page feature cards (`index.md`) and the top nav to match the new groups. Ask the dev team to rename the Help page cards in the plugin the same way (they only link to the docs home page today).

**Pages that merge into others** (section 3: language-settings, column-rearrangement, hyperlinks-from-google-sheets, acf-metabox-jetengine…, ninja-charts-integration, table-background-color…) keep their URL as a short pointer page, but are hidden from the sidebar.

## 8. Suggested order of work

1. **Core path:** introduction, onboarding, create-your-first-table, new "Create a table" overview, engine page, "Working in Table Rows", Tables list, Settings (tools-and-settings). Every other page depends on these.
2. **Editor tabs:** column settings + field types, Appearance pages (styling-design + responsive), Table Configuration, Custom filters, Frontend editing, Custom CSS/JS, Import/Export.
3. **Connected sources:** source drawer overview, WP Posts, Woo, Reviews, FluentCart, Fluent Forms, Sheets, CSV, SQL, Dynamic columns + WordPress integration merges.
4. **Drag & Drop:** builder tour, rows & columns, cell settings, templates, element edits.
5. **Advanced & developers:** shortcode reference, Gutenberg/editor/page builders, hooks, Free vs Pro.
6. **Charts, glossary, changelog**, then the sidebar restructure, redirects/pointer pages and `npm run docs:build`.
7. **Screenshots pass** (later, with the FluentCart screenshot system).

## Raw audit notes
Detailed inventories (every option, default and label) are saved in the session scratchpad:
`/private/tmp/claude-503/-Users-authlab-24-Desktop-n2/c8fe564b-8b0b-4bb5-b226-cb2ab9e0c63e/scratchpad/inventory/`.
That folder is temporary. Ask Claude to copy them into the repo if you want to keep them.

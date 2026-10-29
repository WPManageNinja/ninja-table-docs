# 04 – Connected data sources, WordPress integration, shortcodes/blocks, developer features, Free vs Pro

Scope: what is specific to connected tables after creation (the Create screen and the normal-table editor are covered by other agents), plus shortcodes, Gutenberg/TinyMCE, hooks, Free-vs-Pro and the changelog.
Plugin: `ninja-tables-dev` (branch `redesign`, v5.2.18) + `ninja-tables-pro` 5.2.18. Site: localhost:10013 (WooCommerce 11.2.1, FluentCart 2.3.0 active; Fluent Forms and ACF inactive).

DOCTEST tables I created (all FooTable): **#889 "DOCTEST sources WP Posts"**, **#890 "DOCTEST sources WooCommerce"** (bulk action, go-to-cart, checkout and cart-before-table switched on), **#891 "DOCTEST sources FluentCart"** (same appearance switches on), **#892 "DOCTEST sources Woo Reviews"**. I changed no global settings.

Paths below: FREE = `wp-content/plugins/ninja-tables-dev`, PRO = `wp-content/plugins/ninja-tables-pro`.

---

## 1. Feature inventory

### 1.0 What all connected tables share in the new editor (seen in UI)

- Path: **Tables → (table) → Table Rows** tab. At the top is a **source banner**: icon + "Rows come from &lt;Source&gt;" + one line of description + a button (**Source settings**, or **Edit query** for WP Posts). If nothing is set up yet, the banner says "Nothing is set up yet. Open the source settings and choose what this table shows." and the button is primary.
- The button opens a large **drawer**. The drawer always starts with this note: "These settings decide which rows come into the table. Columns, design and features are set in the other tabs."
- Inside the drawer is a segmented control:
  - WP Posts: **Query settings | Add new column**
  - WooCommerce products, WooCommerce reviews, FluentCart: **Query settings | Appearance | Add new column**
  - Google Sheets / Remote CSV / SQL / Fluent Forms: a single form, no segments.
- The rows grid has a **Read-only** badge. Rows cannot be added or edited (the data lives elsewhere).
- Editor tabs for connected tables: Table Rows, Custom filters, Appearance, Table Configuration, Frontend editing, Custom CSS/JS (same as normal tables).
  - **Frontend editing** tab on a connected table shows: "Only tables that store their own rows can be edited from the front end. This one reads its rows from somewhere else, so there is nothing here to save back to."
  - **Table Configuration** tab: the page heading reads **"Performance"** although the tab is labelled "Table Configuration" (naming mismatch).
- **Add new column** (all post/product sources) uses the normal column form (Basic / Advanced / Conditions / Transform sub-tabs: Column name*, Column key*, Type, Responsive visibility) plus a **"Dynamic post data settings"** block (WP Posts) or **"Dynamic column data settings"** block (Woo / FluentCart): **Field type** + **Field value**. Footer button: **Add column**.
  - On connected tables the column **Type** list has no "Image/File/Lightbox" (that type exists only for default tables). FREE `components/Table/ColumnEditor/columnOptions.js`.
- A hidden route `#/tables/:id/columns` ("Columns in this table – Drag to reorder…, Add column") still works, but no tab or link leads to it. Yet the WP Posts Create drawer says "Post meta, ACF fields and shortcodes can be added later in the **Columns tab**", and there is no Columns tab. → Docs should say "Table Rows → Edit query → Add new column". Product team should fix the hint (see Open questions).

### 1.1 WP Posts / CPT table (Pro)

- Create: "WP Posts/CPTs" tile (other agent). Gated by `activated_features.wp_posts_table` (Pro).
- Banner: "Rows come from WordPress posts – Rows are built from a WordPress post query. Choose the post type, the filters and the columns." Button: **Edit query** (filter icon).
- **Query settings** (seen). This is the OLD transfer-list UI, not the friendly Create UI:
  - **All Types / Selected Types**: two lists that show raw post-type keys (`post`, `page`, `attachment`, `product`, `fluent-products`, …, plus private types such as `wp_block (private)` and `shop_order (private)`).
  - **All Properties / Selected Properties**: raw keys (`post_author`, `post_date`, `post_title`, `post.category`, `post.post_tag`, `ID`, `post_excerpt`, `post_content`, `post_status`, `comment_count`, `menu_order`, `guid`, …). The Create drawer shows friendly names (Title, Author, Date, Excerpt, …), so the same table shows different labels in two places. Docs need both, or a mapping table.
  - **Conditions** (collapsible): checkbox **Logged in user posts**; "You can add additional conditions/where clauses here." **Add condition** → each row has a field (post fields or taxonomy terms), an operator (Equal To, Not Equal To, Greater Than, Less Than, Greater Than Or Equal To, Less Than Or Equal To, In, Not In) and a value (date picker for dates; author/term pickers). Also here: **Query limit for frontend** (blank = all), **Order by column** (default `post_date`) and **Order by type** (Ascending / Descending, default Descending).
  - **Meta query**: "You can add additional meta query here." **Add meta query** → Meta key, operator (same list), Value ("enter comma separated value" for In / Not In). Numeric compare is used automatically for > < >= <=.
  - Button: **Update**.
- **Add new column → Field type** (seen; the list comes from PRO `Traits/WPPostDataSourceTrait.php::getPostDynamicColumnAtrributes`):
  - **Advanced Custom Fields (ACF)**: listed only when ACF is active (`function_exists('get_field')`). Value = ACF field selector. Not shown on this site because ACF is inactive.
  - **Post Meta**: value = meta key. Works for any plugin that stores plain post meta. This is how Meta Box / JetEngine / Toolset / Pods fields are shown: the code has **no dedicated integration** for those plugins (grep found nothing).
  - **Shortcode / Computed Value or HTML**: textarea. Built-in instructions list `{post.ID}`, `{post.post_title}`, `{post.permalink}`, `{postmeta.KEY}`, `{acf.name}` and `[yourshortcode YourParam="{post.ID}"]`. Also supported in code but not listed: any `{post.<wp_posts column>}` and **`{post.featured_image_url}`** (code only).
  - **Featured Image**: value = image size (thumbnail, medium, medium_large, large, 1536x1536, 2048x2048, plus WooCommerce sizes). Option **Link → Link to post permalink**. WooCommerce tables instead get radio buttons: Make image as lightbox / Link to product page / None, plus "Open link in new tab".
  - Columns created from query properties have extra options when edited: Title → Link to post permalink + Open link to new tab. Author → Link to author permalink + **Permalink action: make the author a table filter**. Taxonomy → Link to taxonomy, **Taxonomy separator**, **Permalink action: Make taxonomies as table filter**, Open link to new tab. FREE `components/DataProviders/WPPostDynamicColumn.vue`.
- The "Learn more" links inside these field types point to the OLD domain `wpmanageninja.com/docs/ninja-tables/wp-posts-table/{acf-field, custom-column-on-wp-posts-table, shortcode-computed-value-or-html-in-wp-posts-table}/`. Keep redirects (see Open questions).
- Shortcode attributes that act on this source: `post_tax` and `post_tax_field` (see 1.9).

### 1.2 WooCommerce products table (Pro, requires WooCommerce)

- Banner: "Rows come from WooCommerce products – Rows are built from a WooCommerce product query." Button: **Source settings**.
- **Query settings** (seen):
  - **Select Products By Category**, **… By Product Tags**, **… By Product Type**: multi-selects with "Select all" and counts. Help: "Leave empty if you want to show from all …".
  - **Hide out of stocks items** (sic): checkbox.
  - **Initial order by**: Product Title, Date, Menu Order, Average Rating, price (lower-case in UI), Popularity (Sales), Random. Direction: **Ascending way / Descending way**.
  - **Save settings**.
- **Appearance** (seen): **Show cart details before table**, **Show cart details after table**, **Show bulk action**, **Show go to cart button**, **Show checkout button**, **Cart text**, **Checkout text** (inputs), **Save settings**. Cart details only render when the cart is not empty (an empty cart showed nothing).
- **Default columns** on create: Image, Name, Category, Price, Quantity, Buy ("Add To Cart" button; out-of-stock items show "Out of stock"; variable products show a variation selector, see PRO `Views/woocommerce/variation.php`).
- **Add new column → Field type** (seen): Post Meta; Shortcode / Computed Value or HTML; Featured Image; **Product Data** (Product Price, Product Stock Status, Product Quantity input field, **Buy Now Button** (extra field "Buy now button text"), **Product SKU**, **Product Average Rating**); **Post Data** (Post Author, Post Date, Product Title, Product Short Description, Product Long Description, Post Status, Post Comment Count); **Product Taxonomy** (brand, type, visibility, cat, tag, shipping class, …; Link to taxonomy, Taxonomy separator). ACF appears too when ACF is active.
- **Product Average Rating** column options: **Filled star color**, **Empty star color**, **No review text** (placeholder "No reviews yet"), **Show rating value** checkbox. FREE `components/TableNav/_WPWooDynamicColumn.vue`.
- **Bulk actions / product comparison** (seen on the frontend preview after enabling "Show bulk action"): a checkbox column `#` is prepended, with a header toggle-all. Above the table: **Bulk Actions** select with **Add to Cart** / **Compare Products**, then **Apply**. PRO `Features/ProductComparison.php`. Developer filter: `ninja_tables_woo_add_to_cart_max_products`.
- The old docs mention a `shortcode` step for bulk actions. In the new UI it is just the Appearance checkbox.

### 1.3 WooCommerce reviews table (Pro, requires WooCommerce)

- Banner: "Rows come from WooCommerce reviews – Rows are built from the reviews left on your WooCommerce products." Button: **Source settings**.
- **Query settings** (seen): **Select Products Reviews By Category / Product Tags / Product Type**, plus **Reviews status**: All / Approved / Unapproved. **Save settings**.
- **Appearance** (seen): **Filled star color** (default #f2c94c), **Empty star color** (default #e6e6e6). **Save settings**.
- Default columns: Image, Title, Rating, Review, Reviewer.
- **Add new column** offers the same product field-type list as the Woo products table (Product Data, Post Data, Product Taxonomy, …). These refer to the reviewed product (code only: not verified that every option resolves correctly for reviews).
- On this site the table showed 0 rows (no reviews), so the frontend star output was not verified.

### 1.4 FluentCart products table (FREE, requires FluentCart)

- Fully in the free plugin (`FREE app/Modules/Integrations/FluentCart/*`). No Pro gating in code or UI. The readme says it is available in both.
- Banner: "Rows come from FluentCart products – Rows are built from a FluentCart product query." Button: **Source settings**.
- **Query settings** (seen): **Select Products By Category**, **Select Products By Product Brands** (help text says "…from all types": copy bug, should be "brands"), **Hide out of stocks items**, **Initial order by**: Product Title, Date, Price, Stock (+ direction). **Save settings**.
- **Appearance** (seen): same as Woo, but the label is **Show bulk actions** (plural); Woo says "Show bulk action".
- Default columns: Image, Name, Category, Price, Total Stock, Variations, Quantity, Buy ("Add To Cart"). Seen in preview: sale prices shown struck through, variation names listed.
- **Add new column → Field type** (code: `FREE config/fluent-cart-dynamic-column-option.php`): Product Data (Product Price, **Product Price Range**, **Product Variations**, **Product Stock**, Product Quantity input field, Buy Now Button, **Stock Availability**); Post Data (Author, Date, Product Title, Short/Long Description, Status); Post Meta; Shortcode / Computed Value or HTML; Featured Image; Product Taxonomy. The dropdown was not opened in the UI: it is a different component (`DataProviders/FluentCartDynamicColumn.vue`), so this list is code only.
- **Bulk actions** (seen): same Bulk Actions → Add to Cart / Compare Products → Apply bar as Woo (`FREE …/FluentCart/ProductComparison.php`). This is free.
- Developer filters: `ninja_table_fct_cart_text`, `ninja_table_fct_cart_url`, `ninja_table_fct_checkout_text`. Add-to-cart action `ninja_table_wp_fct_add_to_cart` also works for logged-out visitors.

### 1.5 Fluent Forms entries table (FREE) – code only, FF inactive

- Banner (`TableNav/Fluentform.vue`): "Fluent Forms entries – Rows come from a Fluent Forms form. Pick the form and the fields to show."
- Settings form (`DataProviders/FluentForm.vue`):
  - **Form** ("Select a Form", shown as "id : title")
  - **Select form fields** + Select all
  - **Entry type**: All / Read / Unread ("Select what type of entries you want to show from Fluent Forms.")
  - **Max records** ("Maximum records to show in frontend, keep empty to show all.")
  - **Show current user submissions only at frontend**
  - **Update** (the changelog mentions a confirmation notice on update)
- Extra columns available besides the form fields: **ID, Serial Number, Status**. For payment forms also **Payment Total, Payment Status, Billing Name, Billing Email, Transaction ID, Payment Date**. FREE `Modules/DataProviders/FluentFormProvider.php`.
- If FF is missing: "Fluent Forms is not installed yet" + **Install Fluent Forms now**. Typo in the installer message: "Installing WP Fluent **From**…".

### 1.6 Google Sheets (Pro) and Remote CSV (Pro)

There are two behaviours, depending on the table engine:

- **FooTable engine** (classic): the rows are fetched live from the sheet's *published HTML* (`pubhtml`). The sheet URL is normalised to `…/pubhtml/sheet?headers=false&gid=…`.
  - **Hyperlinks and images inside cells are kept** (the cell's inner HTML is kept), so a column set to **HTML field** shows clickable links (PRO `Traits/GoogleSheetTrait.php`).
  - Caching: **Table Configuration → Caching Configuration → "Caching interval (in minutes)"** ("Leave blank or set 0 to cache nothing."). The help shows hours when the value is over 60. (`hasExternalCachingInterval`.)
  - Source drawer (`TableNav/External.vue` → `ExternalDataSource.vue`, editing mode): **Source URL**, **Fetch columns**, "Fetch the columns first, then choose which of them the table shows.", **Select entry fields** + Select all, **Update**.
- **DataTables engine** (new in 5.2.17, `activated_features.google_sheet_dt`): rows are **imported into a database table** from the CSV export (`…pub?output=csv`). Sync runs in chunks by WP-cron.
  - Edit-view panel (`TableNav/GoogleSheetDTNav.vue`): **Status**, **Last sync**, **Rows**, **Duration**, **Auto sync** interval (Every 5 minutes / 15 minutes / 30 minutes / 1 hour / 6 hours / 12 hours / 24 hours / 7 days), **Sync now**, URL field ("Remote URL…") + **Fetch columns**, **Select entry fields**, **Update**.
  - Messages: "Syncing data from source…", "Sync completed successfully.", "Data is already up to date.", "Sync did not finish within the expected polling window.", and others.
  - Create help: "Google Sheets: File → Share → Publish to web → CSV format."
  - Because this path reads CSV, **hyperlinks and images are not carried over** (inferred from code). The old "Hyperlinks from Google Sheets" advice (set the column to HTML) only works with FooTable. Docs must say this.
- **Remote CSV / JSON** (tile name): the provider (`PRO Modules/DataProviders/CsvProvider.php`) parses **CSV only**. I tested `getHeaderFromCsvUrl` with a JSON URL (local WP REST API) and it returned "Expected CSV but received invalid data type from the given url." So **remote JSON is not supported**, although the tile, the drawer title and the placeholder say "CSV or JSON". Rows whose column count differs from the header are silently skipped (code only).
- Developer filters: `ninja_tables_remote_csv_timeout`, `ninja_tables_google_sheet_escape_zero_value`, `ninja_tables_gsheet_max_csv_size`, `ninja_tables_gsheet_cron_chunk_rows`, `ninja_tables_gsheet_cron_row_budget`, `ninja_tables_gsheet_cron_time_budget`, `ninja_tables_gsheet_insert_batch`.
- No Google Sheet / CSV DOCTEST table was created (needs a public sheet URL). Sections 1.6 and 1.7 are code only.

### 1.7 Custom SQL query (Pro) – code only

- Banner (`TableNav/RawSqlNav.vue`): "SQL query – Rows are the result of a read-only query you write against the database."
  - **Query** (code editor). Help: "A read-only SELECT, passed to `$wpdb->get_results()`." + **Read the docs**.
  - **Placeholders** listed: `{current_user_id}`, `{current_date}`, `{current_date_time}`, `{current_post_id}`, `{current_post_title}`, `{prefix}`. The code also supports `{user:FIELD}` and `{usermeta:KEY}` (via `ninja_parse_placeholder`).
  - **SQL error** alert. Button: **Save and run**.
- **Remote database connection** (NEW, not in old docs): when `connection_type === 'external'` there is a **Connection details** block with **DB host**, **DB host port**, **DB name**, **DB username**, **DB user password** ("Leave as is to keep the current password").
  - Help: "The server where the database lives — not localhost … On cPanel hosts use the Shared/Dedicated IP" and "Use a database user with SELECT-only privileges."
  - `{prefix}` defaults to `wp_` on remote databases (filter `ninja_table_raw_sql_remote_prefix`).
- Only SELECT is allowed; queries with disallowed keywords are rejected. The SQL module is for Administrators only ("For security reason, Custom SQL module is enabled only for Administrator user role…").
- Developer filters: `ninja_table_sql_permission`, `ninja_table_raw_sql_placeholders`, `ninja_table_raw_sql_parsed`, `ninja_table_raw_sql_remote_prefix`.

### 1.8 Ninja Charts (separate free plugin)

- Menu **Charts** (`components/Charts.vue`). When Ninja Charts is not installed: "Ninja Charts is not installed yet", "Turn any Ninja Table into a bar, line, pie or doughnut chart. Charts is a separate free plugin.", **Install Ninja Charts**, "Install it and a Chart option appears on every table." Mainly another area. Not tested.

### 1.9 Shortcodes (code + `FREE Shortcode_Engine_Support_Comparison.md`)

- **`[ninja_tables id="X"]`**. The tag name can be changed with the filter `ninja_tables_shortcode_base`.
  - Free attributes: `id`, `filter`, `use_parent_width`, `info`.
  - Pro attributes (PRO `Hooks/Handlers/TableHandler.php::ninjaTablesShortcodeDefaults`):
    - `per_page`, `search`, `sorting`, `hide_header`, `logged_in_only`, `columns` (comma list of column keys, default `all`), `skip`, `limit`
    - `disable_edit` (default `no`; frontend editing, default tables only)
    - `get_filter` (name of a URL query var; `?column=` also scopes it)
    - `filter_column`, `hide_default_filter=yes`, `filter_selects="Filter=Value|Filter2=Value"` (also read from `?filter_selects=`)
    - `stackable`, `stack_devices` (default `xs,sm`)
    - `post_tax="category=news,events|post_tag=x"` + `post_tax_field` (default `slug`; WP Posts / Woo query)
    - `sf_filter`, `sf_column`, `sf_match` (equal | contains | lt | gt | startswith): a static "locked" filter
  - Since 5.2.14 all of these also work on the **DataTables** engine.
  - Security note to document: in **Ajax** render mode, `sf_*` is a display filter, not an access control. Use **Legacy** render to really hide rows.
  - Old docs miss: `disable_edit`, `stackable`, `stack_devices`, `post_tax`, `post_tax_field`, `sf_filter`/`sf_column`/`sf_match`, `use_parent_width`, `info`.
- **`[ninja_table_info id="X" field="title|description|total_rows|last_modified|last_editor"]`** (free).
- **`[ninja_table_cell id="X" row="N" column="key"]`** or `row_id="…"` (free). Nesting is limited to 5 levels by `ninja_tables_cell_shortcode_max_depth` (5.2.17 security fix).
- **`[ninja_table_builder id="X"]`**: drag-and-drop tables (free). The Gutenberg block outputs this for D&D tables.
- **`[nt_ratings value=5 max=5 color="#ffcc00" alt_color="#dddddd"]`** and **`[nt_icon icon="star" number=1 color="black"]`** (Pro, `ExtraShortCodeHandler.php`). No old page.
- **Placeholders** in `filter`, `sf_filter`, conditional-formatting values and transform values (Pro, `PlaceholderParserHandler`):
  - `{date:FORMAT}`, `{date+N:FORMAT}`, `{date-N:FORMAT}`, `{date:timestamp}`
  - `{user:FIELD}`, `{usermeta:KEY}`, `{current_post_id}`, `{current_post_title}`, `{current_user_role}`
  - `{gt}`/`{greater}`, `{lt}`/`{lesser}`
  - Verified with wp eval: `{date-7:YYYY-MM-DD}` → 2026-10-22, `{date+1:…}` → 2026-10-30, `{gt}` → `>`, `{current_user_role}` → administrator.
  - **Bug:** if a visitor is logged out, `{current_user_role}` blanks the **whole** string, not just the placeholder (`"{date…} | {current_user_role} after"` returned an empty string).
- **Default data filtering syntax** (old page): unchanged in code (FooTable/DataTables search). Keep the page.

### 1.10 Gutenberg block (`FREE resources/admin/blocks/table-block/`)

- Block **"Ninja Tables"** (`ninja-tables/guten-block`, Block API v3, category Widgets). Keywords: Ninja Tables, Gutenberg Table, Table, Data Tables.
- Sidebar: **Select Table**, then three tabs: **Styling | Colors | Other**. The tabs are hidden for drag-and-drop tables.
  - **Styling**: Select Styling Library, Select Styles, Table Features (Enable sorting, Enable filter/search, Hide column headings / Hide Header Row, Show Table Title, Show Table Description, Hide All Borders, Hide internal borders, Enable Row Details Modal, Hide empty items / Hide Labels on responsive breakdown), **Stackable Table Configuration** (Enable Stackable Table, Target Devices: Mobile / Tablet / Laptop / Large Devices (iMac), Stacked Appearance).
  - **Colors** (Pro; Free shows "Color customization is a PRO feature… Get Pro"): Select Color Scheme (Default / Pre Defined Scheme / Custom Scheme), General / Hover / Active colours (Text, Background, Border, Icon, Hover Background), Use Alternate Color Schema for Table Rows.
  - **Other**: Pagination Settings (Items Per Page, Pagination Position Left/Center/Right, Hide Pagination (Show all data at once), Scroll to table top for pagination change, Show page size changer, Page Sizes), Search Settings (Search Bar Position, Full-width Search Input), Sorting Settings (Sort Type: Created at / By Column / Manual Sort (Pro); Sort Order Newest/Oldest First or Column + Ascending/Descending), Sticky & Row Details (Sticky Header, Sticky Offset, Sticky First Column, Disable Sticky on Mobile, Row Details (Responsive Drawer), Toggle Button Position First/Last Column), Font & Custom Class (Font Family, Font Size, Extra CSS Class for Table).
- **Important behaviour to document:** block settings are **written back to the table itself**. This happens through the `settings/{id}` REST call in the editor and again on `save_post` (`Integrations/Gutenberg/GutenbergIntegration.php::updateTableSettings`). They are not per-block, so changing them changes the table everywhere it is embedded. Only users with the Ninja Tables admin role can save them.
- The saved markup is only the shortcode (`[ninja_tables id]` or `[ninja_table_builder id]`).
- Not tested in the browser (it needs a post; I did not want to create non-Ninja-Tables content). Code only.

### 1.11 Classic editor (TinyMCE) button

- On post.php / post-new.php with the rich editor: toolbar button **"Add Ninja Tables Shortcode"**, dialog "Select a Table to insert" (lists all tables) → inserts `[ninja_tables id]`. FREE `Hooks/Handlers/EditorBlockHandler.php`, `assets/js/ninja-table-tinymce-button.js`. Code only.

### 1.12 Elementor / other page builders

- **No Elementor, Divi, Bricks, Oxygen or Beaver widget exists** in Free or Pro (grep). Builders use the shortcode (e.g. Elementor Shortcode widget). There is only an Elementor compatibility fix (5.2.14 "AJAX tables not rendering correctly in Elementor editor preview") and an admin-page script deregistration. Docs should not promise a widget.

### 1.13 Public hooks and filters a docs reader would use (curated; full list in code)

- **Render / shortcode**:
  - `ninja_tables_shortcode_base`, `ninja_tables_shortcode_defaults`, `ninja_tables_shortcode_data`, `ninja_table_js_config`, `ninja_table_rendering_table_vars`, `ninja_tables_get_public_data`, `ninja_table_column_attributes`, `ninja_table_attributes`, `ninja_tables_public_max_rows`
  - actions `ninja_tables_before_table_print` / `ninja_tables_after_table_print`, `ninja_tables_before_table_title` / `_after_table_title`, `ninja_tables_before_table_description` / `_after_…`, `ninja_tables_will_render_table`, `ninja_rendering_table_{provider}`
- **Permissions**: `ninja_table_admin_role`, `ninja_table_sql_permission`.
- **Data / CRUD actions**: `ninja_table_before_add_item`, `ninja_table_after_add_item`, `ninja_table_before_update_item`, `ninja_table_after_update_item`, `ninja_table_before_items_deleted`, `ninja_table_after_items_deleted`, `ninja_table_before_update_columns`; filter `ninja_tables_item_attributes`.
- **Placeholders**: `ninja_parse_placeholder`.
- **WP Posts / Woo**: `ninja_table_wp_posts_query_extra`, `ninja_table_post_table_args`, `ninja_table_post_table_args_{id}` (pattern), `ninja_table_format_acf_value`, `ninja_table_format_acf_array_enabled`, `ninja_table_woo_table_query_terms`, `ninja_table_woo_reviews_table_query_terms`, `ninja_table_woo_cart_text`, `ninja_table_woo_cart_url`, `ninjatable_hide_out_stock_cart_btn`, `nt_woo_always_cart_fragment`, `ninja_tables_woo_add_to_cart_max_products`.
- **FluentCart**: `ninja_table_fct_cart_text`, `ninja_table_fct_cart_url`, `ninja_table_fct_checkout_text`.
- **SQL**: `ninja_table_raw_sql_placeholders`, `ninja_table_raw_sql_parsed`, `ninja_table_raw_sql_remote_prefix`.
- **Sheets / CSV**: `ninja_tables_remote_csv_timeout`, `ninja_tables_gsheet_*`, `ninja_tables_google_sheet_escape_zero_value`.
- **Performance / import / export**: `ninja_tables_csv_import_chunk_size`, `ninja_tables_import_batch_max_bytes`, `ninja_tables_import_batch_max_cells`, `ninja_tables_export_stream_threshold`, `ninja_tables_xlsx_convert_slice_rows` / `_seconds`, `ninja_tables_frontend_xlsx_button_supported`, `ninja_tables_dt_*` (DataTables tuning), `ninja_table_search_time_delay`, `ninja_tables_footable_init_delay`.
- **Misc**: `ninja_tables_cell_shortcode_max_depth`, `ninja_tables_provider_allows_shortcodes`, `ninja_tables_shortcode_trusted_providers`, `ninja_tables_last_edited_time`.
- There is no developer page in the old docs. Also: `FREE docs/examples/` holds two developer examples (CSV export cron, league standings) that could become a "Developer recipes" page.

### 1.14 In-plugin doc links (the URLs the new docs must keep)

- The new admin links to **`https://docs.ninjatables.com/guide/...`** for these slugs, and all of them exist as old pages today:
  - `data-sources/construct-table-from-csv`, `data-sources/google-sheets-integration`, `data-sources/fluent-forms-integration`, `data-sources/create-wp-posts-table`, `data-sources/create-table-from-custom-sql`, `data-sources/woocommerce-integration`
  - `wordpress-integration/post-meta-field`, `changelog/change-log`
  - `import-export/import-table-data-from-a-csv`, `import-export/import-ninja-tables-json`
  - `column-settings/{basic-settings, conditional-formatting, transform-value}`, `responsive-design/column-responsive-breakpoints`, `styling-design/table-style-settings`, `table-management/table-title-description-settings`
  - `getting-started/{ninja-tables-introduction, how-to-get-support}`, `creating-tables/create-your-first-table`, `drag-drop-elements/text-element`, `ninja-charts/getting-started-with-ninja-charts-free-wordpress-chart-plugin`
- **Do not rename these slugs** (or add redirects).
- Legacy links still in the code: `wpmanageninja.com/docs/ninja-tables/wp-posts-table/{acf-field, custom-column-on-wp-posts-table, shortcode-computed-value-or-html-in-wp-posts-table}/` and `wpmanageninja.com/docs/ninja-tables/import-table-data-from-csv/`.

---

## 2. Free vs Pro matrix (from code; site runs Pro)

Gating comes from `activated_features` (Pro sets `wp_posts_table`, `woocommerce_table`, `external_data_source`, `google_sheet_dt`, `raw_sql_query`, `ninja_table_front_editor`; Free sets `default_tables`, `fluentform_tables`) and the UI `has_pro`, `NtProBadge`, `pro:` flags and `show_pro_popup`.

| Area | Feature | Free | Pro |
|---|---|:-:|:-:|
| Sources | Default table, Upload file (CSV/Excel/JSON), Drag & Drop builder | ✅ | ✅ |
| | Fluent Forms entries table | ✅ | ✅ |
| | FluentCart products table, incl. bulk add-to-cart / compare | ✅ | ✅ |
| | WP Posts / CPT table (+ Post Meta, ACF, Shortcode, Featured image columns) | – | ✅ |
| | WooCommerce products table (+ bulk actions, compare, avg rating column) | – | ✅ |
| | WooCommerce reviews table | – | ✅ |
| | Google Sheets (FooTable live + DataTables sync) | – | ✅ |
| | Remote CSV ("CSV/JSON") | – | ✅ |
| | Custom SQL (incl. remote DB) | – | ✅ |
| | D&D: "Import CSV/JSON from URL" | – | ✅ |
| Columns | Text, Textarea, HTML, Number, Date (standard formats) | ✅ | ✅ |
| | Select field, Image/File/Lightbox, Button/Link types | plain text only | ✅ |
| | Custom date format | – | ✅ |
| | Conditional formatting, Transform value (+ Excel formulas) | – | ✅ |
| | Column width, extra classes, column colours, sortable/searchable toggles, HTML header | – | ✅ |
| Rows | Row/cell colours, "Insert row below" | – | ✅ |
| | Manual sort (drag rows) | – | ✅ |
| Appearance | Presets, borders, typography, basic search/sort/pagination | ✅ | ✅ |
| | Custom table colours (Free: preview only, reset on save), alternate row colours | – | ✅ |
| | Search position / full-width search | – | ✅ |
| | Sticky header & first column | – | ✅ |
| | Expand first / all rows (row details) | – | ✅ |
| | Export & print buttons (CSV/Excel/print on frontend) | – | ✅ |
| Table config | Engine FooTable/DataTables, Ajax render, caching | ✅ | ✅ |
| | Legacy (server-side) render | – | ✅ |
| Other tabs | Custom CSS | ✅ | ✅ |
| | Custom JavaScript | – | ✅ |
| | Custom filters | – | ✅ |
| | Frontend editing | – | ✅ |
| Settings | Global appearance, Performance | ✅ | ✅ |
| | Permissions (roles), License | – | ✅ |
| D&D builder | Text, Button, Icon, Rating, List, HTML, Shortcode elements; merge cells | ✅ | ✅ |
| | Image, Styled List, Ribbon, Progress Bar, Text Icon elements; cell highlight | – | ✅ |
| Embedding | `[ninja_tables]` with id/filter/use_parent_width/info, `[ninja_table_info]`, `[ninja_table_cell]`, `[ninja_table_builder]`, Gutenberg block, TinyMCE button | ✅ | ✅ |
| | Advanced shortcode attributes (per_page, columns, get_filter, sf_*, post_tax, stackable…) | – | ✅ |
| | Placeholders `{date…}`, `{user:…}` etc. | – | ✅ |
| | `[nt_ratings]`, `[nt_icon]` | – | ✅ |
| | Gutenberg block Colors tab | – | ✅ |
| | Ninja Charts | separate free plugin | |

Note: this site shows **"Activate License"** in the menu, yet Pro features work. Licensing is another agent's area.

---

## 3. Changelog check

- **The brief's premise is out of date.** The old `guide/changelog/change-log.md` already contains **v5.2.18** (Oct 9 2026) and 5.2.17. Its 5.2.18 items match `readme.txt` exactly.
- Differences found:
  - **Version number:** readme `5.2.14` (Aug 21 2026) appears in the docs as **`5.2.15`**. Pro's readme uses 5.2.15 and 5.2.16 for the same day. Decide which number the docs use.
  - **5.2.17 Security line** differs:
    - readme: "…self-referencing cell shortcode, **and the server-rendered HTML cache is refreshed after update**."
    - docs: "…self-referencing cell shortcode. **Props to Jakub Herman.**"
  - **5.2.13:** wording only ("Added safeguards…" vs "Added: safeguards…").
  - The docs keep older history back to 1.0.0; the readme trims it. That's fine.
- **Missing:** the whole **admin redesign** (73 commits `develop..redesign`) has **no changelog entry yet**. The next release entry should cover at least:
  - new Create Table screen (Start from scratch / Connect live data)
  - source banner + Source settings drawer
  - Table Configuration / Performance page
  - Read-only connected rows
  - new Settings pages
  - toast notifications
  - Free Custom JS upgrade banner
  - and so on.
- Pro readme 5.2.16 has Pro-only license fixes that are not in the free changelog. Decide whether the docs changelog lists Pro-only items.

---

## 4. Old page mapping

| Old page | Verdict | Reason |
|---|---|---|
| data-sources/create-wp-posts-table | REWRITE (UI changed) | Create is now a drawer (friendly names, Conditions panel, Order By, Query limit, engine). Editing moved to Table Rows → **Edit query** drawer (Query settings / Add new column). Add "Logged in user posts". Slug must stay (linked from plugin). |
| data-sources/woocommerce-integration | REWRITE | Settings now in the **Source settings** drawer (Query settings / Appearance / Add new column). Order-by list now includes Average Rating, Popularity, Random. Slug linked from plugin. |
| data-sources/woocommerce-product-reviews-table | REWRITE | Same drawer flow. Reviews status and star colours are unchanged. The "Standard Table Settings" list of tabs is outdated (Table Design / Import/Export are gone; the tabs are now Appearance / Table Configuration / Custom filters / Frontend editing / Custom CSS/JS). |
| data-sources/woocommerce-product-average-rating-column | REWRITE (minor) | Now reached via Table Rows → Source settings → Add new column → Field type **Product Data → Product Average Rating**. Document the 4 options (filled/empty star colour, no-review text, show rating value). |
| table-management/woocommerce-product-comparison-bulk-add-to-cart | REWRITE + MOVE to data-sources (or MERGE into woocommerce-integration) | Enabled by **Appearance → Show bulk action**. Same bulk bar (Add to Cart / Compare Products). Also applies to FluentCart (free). |
| data-sources/fluentcart-integration | REWRITE | Flow changed (Create tile + Source settings drawer). Product Brands. Bulk actions plural label. Document that it's Free. |
| data-sources/fluent-forms-integration | REWRITE (light) | New banner/drawer + install-FF prompt. Options unchanged (Entry type All/Read/Unread, Max records, current-user-only). Add the extra ID/Serial/Status/payment columns. Slug linked from plugin. |
| data-sources/google-sheets-integration | REWRITE | Must explain FooTable (live pubhtml + caching interval) vs DataTables (sync into DB: Auto sync interval, Sync now, Status/Last sync/Rows/Duration). The hyperlink/image section is FooTable-only. Slug linked from plugin. |
| data-sources/construct-table-from-csv | REWRITE | Tile is now "Remote CSV / JSON". Same two-engine split. **JSON doesn't work** (see Open questions). Slug linked from plugin. |
| data-sources/create-table-from-custom-sql | REWRITE (partial) | Placeholder examples still valid. Add `{user:…}`/`{usermeta:…}`, the **remote DB connection** fields, the "Save and run" drawer, SELECT-only rule and admin-only rule. Slug linked from plugin. |
| data-sources/ninja-charts-integration | KEEP (minor edits) / MERGE into ninja-charts/* | Charts menu now shows an install prompt. The chart creation itself is in the separate plugin. |
| wordpress-integration/post-meta-field | REWRITE (UI path) | Path now Edit query → Add new column → Field type **Post Meta**. Linked from plugin (`post-meta-field`). |
| wordpress-integration/featured-image | REWRITE (UI path) | Same path. Image-size list. WP Posts: "Link to post permalink". Woo: lightbox / link to product page / none. |
| wordpress-integration/acf-field-integration-with-ninja-tables-column | REWRITE (UI path) | Same path. Note that the ACF option appears only when ACF is active. Plugin still links the old wpmanageninja URL. |
| wordpress-integration/acf-metabox-jetengine-toolset-pods-integration-with-ninja-tables | MERGE into post-meta-field (or KEEP as an "other custom-field plugins" section) | There is no dedicated integration in code; they all work through **Post Meta** (or Shortcode). The page is mostly JetEngine setup steps. |
| wordpress-integration/create-custom-column-in-wp-post-cpt-woocommerce-table | REWRITE → becomes the hub "Dynamic columns" page | List all field types per source (WP Posts / Woo / FluentCart). |
| wordpress-integration/shortcode-computed-value-or-html-in-wp-post-woocommerce-table | KEEP (minor edits) | Syntax unchanged. Add `{post.featured_image_url}` and FluentCart support. Update the UI path. |
| advanced-features/advanced-shortcode | REWRITE (extend) | Attributes table is incomplete (missing disable_edit, stackable, stack_devices, post_tax, post_tax_field, sf_*, use_parent_width, info). Add engine parity (works on DataTables since 5.2.14), the sf_* security note, nt_ratings/nt_icon, and the placeholder list. |
| advanced-features/default-data-filtering-shortcode | KEEP (minor edits) | Syntax unchanged. Add a note that it works on both engines. |
| advanced-features/frontend-editing | (other agent: editor) – note only | For connected tables the tab now explicitly says it is unavailable. Shortcode `disable_edit` belongs here. |
| table-formatting/hyperlinks-from-google-sheets | MERGE into google-sheets-integration | Same content as the Sheets page's "Import Hyperlinks/Images" section. Valid only with FooTable. |
| changelog/change-log | KEEP + update | Already at 5.2.18. Fix the 5.2.14/5.2.15 numbering and the 5.2.17 security wording. Add a redesign release entry when it ships. |

---

## 5. New features with no old page (suggested)

| Suggested title | Category |
|---|---|
| Connected tables: Source settings and read-only rows (overview of banner/drawer for every source) | data-sources |
| Dynamic columns reference (all Field types per source: Post Meta, ACF, Shortcode, Featured Image, Product Data, Post Data, Product/Post Taxonomy; link/filter options) | wordpress-integration |
| Google Sheets & CSV with the DataTables engine: auto sync, Sync now, sync status | data-sources |
| Caching for Google Sheets / remote CSV (Caching interval) | data-sources or table-settings |
| Custom SQL: connect a remote database | data-sources |
| Embed with the Gutenberg block (and why block settings change the table everywhere) | getting-started / wordpress-integration |
| Classic editor button & page builders (use the shortcode; no Elementor widget) | wordpress-integration |
| Shortcode reference (all tags + every attribute + placeholders, engine support) | advanced-features |
| `[nt_ratings]` and `[nt_icon]` shortcodes | advanced-features |
| Locked filters with `sf_filter` / `sf_column` / `sf_match` (+ security note) | advanced-features |
| Filter WP Posts/Woo tables by taxonomy from the shortcode (`post_tax`) | advanced-features |
| Developer hooks & filters reference (+ docs/examples recipes) | advanced-features (new "Developers" section) |
| Ninja Tables Free vs Pro | getting-started |

---

## 6. Open questions / issues for the product team

1. **"Remote CSV / JSON" does not read JSON.** The CsvProvider is CSV-only (my test: "Expected CSV but received invalid data type"). Either add JSON or rename the tile, the drawer title and the placeholder to "Remote CSV".
2. **The WP Posts Create hint says "add later in the Columns tab"**, but there is no Columns tab. The `#/tables/:id/columns` route exists, but no UI links to it. Fix the hint (→ "Table Rows → Edit query → Add new column"), or expose the tab.
3. **WP Posts Edit query uses raw keys** (`post_author`, `post.category`, private post types listed), while Create uses friendly labels. Should Edit query get the new UI?
4. **Google Sheets hyperlinks/images are lost with the DataTables engine** (CSV import). Is that intended? If so, docs will say "use FooTable for links/images".
5. **Gutenberg block settings overwrite the table's own settings** on post save, so they apply to every embed. Intended? Document it, or make the settings per-block.
6. **Changelog numbering:** 5.2.14 (readme) vs 5.2.15 (docs) for Aug 21 2026. Which 5.2.17 security wording is final (credit line vs cache-refresh)? Should the docs changelog include Pro-only entries? Where is the redesign release entry?
7. **Legacy doc links in code** (`wpmanageninja.com/docs/ninja-tables/wp-posts-table/...`, `.../import-table-data-from-csv/`): update them to docs.ninjatables.com, or keep redirects?
8. **`{current_user_role}` placeholder** blanks the entire filter string for logged-out visitors (verified). Bug?
9. Copy issues:
   - "Hide out of stocks items" (Woo + FluentCart)
   - FluentCart Brands help "…from all types"
   - Woo "Show bulk action" vs FluentCart "Show bulk actions"
   - "Initial order by" option "price" is lower-case
   - "Installing WP Fluent From…"
   - Table Configuration tab's page heading says "Performance"
   - WP Posts block heading "Dynamic post data settings" vs Woo "Dynamic column data settings"
   - The WP Posts dynamic list labels taxonomy as "Product Taxonomy" (code: `getPostTaxAttributes` label), and post data as "Product Title / Product Short Description", even for posts
10. No Elementor/Divi/Bricks widget exists. Confirm the docs should just say "use the shortcode", and whether any builder module is planned.
11. `TableCache::getExternalCachedData` guard `! isset(x) && x` looks inverted (code only; no user impact found, but a cache with no interval could misbehave).
12. Should docs present FluentCart tables as fully Free? The code has no gating, which matches the readme.

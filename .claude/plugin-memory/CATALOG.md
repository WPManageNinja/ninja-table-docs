# Ninja Tables Plugin — Module Catalog

A **table of contents** for the Ninja Tables plugin source. Always loaded first by the `ninja-tables-code-to-docs` orchestrator skill, before any plugin file is opened.

- **Free:** `/Users/authlab-24/Local Sites/cart/app/public/wp-content/plugins/ninja-tables-dev` (git, branch `redesign`, v5.2.18, HEAD `f0b7813e` = `v5.2.18-147-gf0b7813e`). All admin UI (Vue 3) lives here, including the screens for Pro features.
- **Pro:** `/Users/authlab-24/Local Sites/cart/app/public/wp-content/plugins/ninja-tables-pro` (not a git repo, v5.2.18). PHP + front-end assets only (`assets/js/ninja-tables-pro.js`, `ninja_table_comparison.js`, `woo_table_frontend.js`, `assets/libs/{formula,lity,sumoselect,stickyheaders,datepicker,icons}`); **no Vue**.
- Both are **read-only** sources. Never edit them, never run state-changing git.

For every entry below: what it does, the highest-signal files, the user-visible surface, the doc page(s) it drives (`docs/<category>/<slug>.md`, served at `/<slug>`), and the version through which it was audited end-to-end. Supporting research: `.claude/redesign-audit/*.md` (UI label dumps + Free/Pro matrix) and `.claude/skills/check-ninja-tables-feature-coverage/references/index.md`.

Gating model (from `04-sources-integration-pro.md` §2): Pro registers `activated_features` (`wp_posts_table`, `woocommerce_table`, `external_data_source`, `google_sheet_dt`, `raw_sql_query`, `ninja_table_front_editor`); Free sets `default_tables`, `fluentform_tables`. The Vue UI gates with `has_pro`, `NtProBadge`, `pro:` flags and `show_pro_popup`. Provider key = post meta `_ninja_tables_data_provider`.

---

## app/Modules/

### Modules/DataProviders (Free)
- **Purpose:** Data-provider contract plus the two free providers. `BaseProvider` wires the `ninja_tables_get_table_{key}` / `ninja_tables_get_table_data_{key}` / `ninja_tables_fetching_table_rows_{key}` hook family every source must answer.
- **Key files:** `BaseProvider.php`, `DefaultProvider.php` (key `default`: own-row tables, caching, date normalisation), `FluentFormProvider.php` (key `fluent-form`: entries, entry type, max records, current-user-only, overrides FF entry permissions), `NinjaFooTable.php` (static facade over `Services/Render/FooTableRenderer`).
- **User-facing surface:** Default table rows; Fluent Forms entries table (Create tile + Source settings drawer); "Install Fluent Forms now" when FF is missing.
- **Drives docs:** `docs/creating-tables/create-your-first-table.md`, `docs/creating-tables/working-in-table-rows.md`, `docs/data-sources/fluent-forms-integration.md`, `docs/data-sources/connected-tables-overview.md`
- **Last fully audited:** v5.2.18 (redesign @ f0b7813e)

### Modules/DataTables (Free)
- **Purpose:** The **DataTables engine**. On create with `rendering_engine=datatables` it builds a per-table SQL table `{prefix}ninja_tables_dt_<id>` and keeps its columns in sync; drops it on post delete. Server-side paging/search via its own Ajax handler.
- **Key files:** `DataTablesModule.php`, `Database/DynamicTableManager.php` (reserved/system column keys), `Handlers/{AjaxHandler,ItemsHandler,PublicRenderer}.php`, `Models/DynamicRow.php`, `Query/NumericFilter.php`; renderer in `app/Services/Render/DataTables*.php`; engine switch logic `app/Services/Table/Engine.php`.
- **User-facing surface:** Engine line on every Create drawer (FooTable "the usual choice" vs DataTables "holds up better once a table runs to thousands of rows"); Table Configuration › Table engine (locked after creation for own-row tables; switching keeps data, drops design); reserved column-key validation error.
- **Drives docs:** `docs/creating-tables/choose-table-engine.md`, `docs/table-settings/table-rendering-settings.md`
- **Last fully audited:** v5.2.18 (redesign @ f0b7813e)

### Modules/Integrations/FluentCart (Free)
- **Purpose:** FluentCart products as a table source (key `wp_fct`), with cart/checkout buttons, variations, bulk add-to-cart and product comparison. No Pro gating in code.
- **Key files:** `FluentCartIntegration.php`, `Handlers/FluentCartHandler.php`, `ProductQuery.php`, `ProductFormatter.php`, `CartService.php`, `ProductComparison.php` (registered unconditionally by `IntegrationsInit.php`); config `config/fluent-cart-headers.php`, `config/fluent-cart-dynamic-column-option.php`; Vue `components/tables/sources/FluentCartCreate.vue`, `components/TableNav/FcNavEdit.vue`, `components/DataProviders/FluentCartDynamicColumn.vue`.
- **User-facing surface:** Create tile **FluentCart products** (category, brands, hide out of stock, initial order by); Source settings drawer (Query settings / Appearance / Add new column); **Show bulk actions**; filters `ninja_table_fct_cart_text|cart_url|checkout_text`.
- **Drives docs:** `docs/data-sources/fluentcart-integration.md`, `docs/table-management/woocommerce-product-comparison-bulk-add-to-cart.md`, `docs/wordpress-integration/dynamic-columns-reference.md`
- **Last fully audited:** v5.2.18 (redesign @ f0b7813e)

### Modules/Integrations/FluentForms (Free)
- **Purpose:** Registers the Fluent Forms provider hooks unconditionally, so a table keeps its settings while FF is inactive.
- **Key files:** `FluentFormsIntegration.php`; controller `Http/Controllers/FluentFormsController.php`; Vue `components/tables/sources/FluentFormsCreate.vue`, `components/DataProviders/FluentForm.vue`, `FluentFormDynamicColumn.vue`.
- **User-facing surface:** Create tile **Fluent Forms entries**; extra ID/Serial/Status/payment columns; install prompt (`install/fluent-forms`).
- **Drives docs:** `docs/data-sources/fluent-forms-integration.md`
- **Last fully audited:** v5.2.18 (redesign @ f0b7813e)

### Modules/Integrations/Gutenberg (Free)
- **Purpose:** The **Ninja Tables** block (`ninja-tables/guten-block`, API v3). Saved markup is only the shortcode. Block sidebar settings are **written back to the table** (`settings/{id}` REST + `save_post` → `updateTableSettings`), so they apply on every embed.
- **Key files:** `GutenbergIntegration.php`; block UI `resources/admin/blocks/table-block/{block.js,Edit.js,Save.js,components/,ui/}`.
- **User-facing surface:** Select Table; tabs Styling | Colors (Pro) | Other (hidden for D&D tables).
- **Drives docs:** `docs/wordpress-integration/embed-tables.md`
- **Last fully audited:** v5.2.18 (redesign @ f0b7813e)

### Modules/Integrations (bootstrap)
- **Purpose:** `IntegrationsInit.php` loops Gutenberg / FluentForms / FluentCart, calls `isAvailable()` then `register()`; `BaseIntegration.php` is the contract.
- **Drives docs:** none (add a doc only if a new integration class is added to `$integrations`).
- **Last fully audited:** v5.2.18 (redesign @ f0b7813e)

### Modules/Lead (Free)
- **Purpose:** Admin opt-in prompts: newsletter lead opt-in and review request, each with dismiss timers.
- **Key files:** `LeadFlow.php` (`wp_ajax_ninja_table_lead_optin`, `wp_ajax_ninja_table_review_consent`, filters `ninja_tables_show_lead`, `ninja_tables_show_review_optin`), `LeadOptIn.php`, `ReviewOptIn.php`; Vue `components/Extras/lead.vue`, `_ReviewDialog.vue`.
- **User-facing surface:** Admin notices only.
- **Drives docs:** none.
- **Last fully audited:** v5.2.18 (redesign @ f0b7813e)

### Modules/TableBuilder (Free)
- **Purpose:** Server side of the **Drag & Drop builder**: initial config, element/setting/responsive schemas and the ready-made templates.
- **Key files:** `InitConfig.php` (loads `config/table-builder/{component,setting,responsive,templates}.php`), `DynamicConfig.php` (merges saved settings/responsive over static config), `ReadyMadeTable.php` (Pricing 1–4, Comparison 1–5, Employee 1–3, Schedule 1–3); `config/table-builder/component.php` holds element names + `has_pro`; controller `Http/Controllers/TableBuilderController.php`; render `app/Views/public/drag-and-drop-html.php`; importer `Services/Import/TableBuilderImporter.php`.
- **User-facing surface:** Create › Drag & Drop table drawer (Scratch grid 1–30, default 6×3 / Import CSV/JSON up to 1 MB, URL is Pro / Choose a template); builder at `#/table_builder_edit_table/:id`; `[ninja_table_builder id]`. Pro elements: Icon, Image, Styled List, Ribbon, Text Icon; Progress is free.
- **Drives docs:** `docs/drag-drop-tables/*.md` (3), `docs/drag-drop-settings/*.md` (7), `docs/drag-drop-elements/*.md` (12)
- **Last fully audited:** v5.2.18 (redesign @ f0b7813e)

### Modules/I18nStrings.php (Free)
- **Purpose:** GENERATED translation map handed to the admin app as `ninja_table_admin.i18n` (`npm run i18n:strings`, `dev/i18n/extract-strings.js`). 1645 lines.
- **Note:** The fastest way to diff **every admin label** between releases: `git diff <old>..<new> -- app/Modules/I18nStrings.php`. A changed string here points to the Vue file that owns it.
- **Drives docs:** none directly (signal only).
- **Last fully audited:** v5.2.18 (redesign @ f0b7813e)

### Modules/DataProviders/WPPostsProvider (Pro, `ninja-tables-pro/app/Modules/DataProviders/WPPostsProvider.php`)
- **Purpose:** WP Posts / any CPT table (key `wp-posts`). Query, taxonomy, author, meta conditions.
- **Key files:** `WPPostsProvider.php`, `app/Traits/WPPostDataSourceTrait.php`; free controller `WPPostsController.php`; Vue `components/tables/sources/{WpPostsCreate,WpPostRules}.vue`, `components/TableNav/WPPostsNav.vue`, `components/DataProviders/{WPPosts,WPPostConditions,WPPostMetaQuery,WPPostDynamicColumn}.vue`.
- **User-facing surface:** Create tile **WP Posts/CPTs**; Table Rows › **Edit query** drawer (Query settings | Add new column); dynamic column types Post Meta, ACF (only when ACF active), Shortcode, Featured Image, Post Data, taxonomy.
- **Drives docs:** `docs/data-sources/create-wp-posts-table.md`, `docs/wordpress-integration/post-meta-field.md`, `docs/wordpress-integration/acf-field-integration-with-ninja-tables-column.md`, `docs/wordpress-integration/acf-metabox-jetengine-toolset-pods-integration-with-ninja-tables.md`, `docs/wordpress-integration/featured-image.md`, `docs/wordpress-integration/create-custom-column-in-wp-post-cpt-woocommerce-table.md`, `docs/wordpress-integration/shortcode-computed-value-or-html-in-wp-post-woocommerce-table.md`, `docs/wordpress-integration/dynamic-columns-reference.md`
- **Last fully audited:** v5.2.18 (redesign @ f0b7813e)

### Modules/DataProviders/WoocommercePostsProvider (Pro, `ninja-tables-pro/app/Modules/DataProviders/WoocommercePostsProvider.php`)
- **Purpose:** WooCommerce products table (key `wp_woo`): query terms, cart DOM/fragments, variations, average-rating column.
- **Key files:** `WoocommercePostsProvider.php`, `app/Traits/WooDataSourceTrait.php`, `app/Features/ProductComparison.php`, `app/Views/woocommerce/variation.php`, `assets/js/woo_table_frontend.js`, `ninja_table_comparison.js`; Vue `components/tables/sources/WooCreate.vue`, `components/TableNav/WooNavEdit.vue`.
- **User-facing surface:** Create tile **WooCommerce products** (category/tag/type, hide out of stock, initial order by); Source settings (Query settings | Appearance | Add new column); **Show bulk action** (Add to Cart / Compare Products); Product Data › Product Average Rating column.
- **Drives docs:** `docs/data-sources/woocommerce-integration.md`, `docs/data-sources/woocommerce-product-average-rating-column.md`, `docs/table-management/woocommerce-product-comparison-bulk-add-to-cart.md`, `docs/wordpress-integration/dynamic-columns-reference.md`
- **Last fully audited:** v5.2.18 (redesign @ f0b7813e)

### Modules/DataProviders/WoocommerceReviewsProvider (Pro, `ninja-tables-pro/app/Modules/DataProviders/WoocommerceReviewsProvider.php`)
- **Purpose:** WooCommerce product reviews table (key `wp_woo_reviews`).
- **Key files:** `WoocommerceReviewsProvider.php`; Vue `components/TableNav/WooReviewsNavEdit.vue` (Create shares `WooCreate.vue`).
- **User-facing surface:** Create tile **WooCommerce reviews** (category/tags/type, Reviews status All/Approved/Unapproved); star colours.
- **Drives docs:** `docs/data-sources/woocommerce-product-reviews-table.md`
- **Last fully audited:** v5.2.18 (redesign @ f0b7813e)

### Modules/DataProviders/CsvProvider (Pro, `ninja-tables-pro/app/Modules/DataProviders/CsvProvider.php`)
- **Purpose:** Remote CSV (key `csv`) and Google Sheets published CSV (key `google-csv`) on FooTable: live fetch + caching interval; Sheets hyperlinks/images. Timeout filter `ninja_tables_remote_csv_timeout`.
- **Key files:** `CsvProvider.php`, `app/Traits/GoogleSheetTrait.php`; Vue `components/tables/sources/ExternalSourceCreate.vue`, `components/DataProviders/ExternalDataSource.vue`.
- **User-facing surface:** Create tiles **Google Sheets** and **Remote CSV / JSON** (2-step: name + URL). **Caveat:** the provider is CSV-only; JSON URLs fail ("Expected CSV but received invalid data type", audit 04 §6.1).
- **Drives docs:** `docs/data-sources/google-sheets-integration.md`, `docs/data-sources/construct-table-from-csv.md`, `docs/table-formatting/hyperlinks-from-google-sheets.md`
- **Last fully audited:** v5.2.18 (redesign @ f0b7813e)

### Modules/DataProviders/RawSqlProvider + RemoteWpdb (Pro, `ninja-tables-pro/app/Modules/DataProviders/`)
- **Purpose:** Custom SQL table (key `raw_sql`): SELECT-only validation (`app/Library/PHPSQLParser`), placeholders `{prefix}` `{current_user_id}` `{current_date}` `{current_date_time}`, optional remote DB connection (`RemoteWpdb.php`). Permission gate `hasSQLPermission` / filter `ninja_table_sql_permission`.
- **Key files:** `RawSqlProvider.php`, `RemoteWpdb.php`; Vue `components/tables/sources/RawSqlCreate.vue`.
- **User-facing surface:** Create tile **Custom SQL query** (SQL Connection Type), "Save and run" drawer; Settings › Permissions "Let these roles write SQL queries".
- **Drives docs:** `docs/data-sources/create-table-from-custom-sql.md`, `docs/data-sources/custom-sql-remote-database.md`
- **Last fully audited:** v5.2.18 (redesign @ f0b7813e)

### Modules/GoogleSheetSync (Pro, `ninja-tables-pro/app/Modules/GoogleSheetSync/`)
- **Purpose:** Google Sheets / CSV **on the DataTables engine**: imports into the DB table, background auto-sync via WP-Cron (`ninja_tables_gsheet_sync`, `ninja_tables_gsheet_cleanup_tmp`), chunked processing, feature flag `google_sheet_dt`.
- **Key files:** `GoogleSheetSyncProvider.php`, `SyncService.php` (793 lines), `Http/Controllers/GoogleSheetSyncController.php` (`fetch-headers`, `create`, `{id}/update`, `{id}/sync-now`, `{id}/process-chunk`, `{id}/sync-status`).
- **User-facing surface:** Auto sync interval, **Sync now**, Status / Last sync / Rows / Duration. Hyperlinks/images are lost on this engine.
- **Drives docs:** `docs/data-sources/google-sheets-csv-auto-sync.md`, `docs/data-sources/google-sheets-integration.md`, `docs/data-sources/construct-table-from-csv.md`
- **Last fully audited:** v5.2.18 (redesign @ f0b7813e)

### Modules/DataTables (Pro, `ninja-tables-pro/app/Modules/DataTables/`)
- **Purpose:** Brings two Pro features to the DataTables engine: frontend editing and manual row sort.
- **Key files:** `DataTablesModule.php`, `Handlers/DTFrontendEditHandler.php` (update/delete row), `Handlers/SortableHandler.php`.
- **User-facing surface:** Frontend editing and Sort manually on DataTables tables.
- **Drives docs:** `docs/advanced-features/frontend-editing.md`, `docs/table-management/rearrangement-of-rows-in-ninja-tables-manual-row-sort.md` (neither names the engine — see Gaps)
- **Last fully audited:** v5.2.18 (redesign @ f0b7813e)

---

## Other doc-relevant app/ subtrees

### Http/Controllers (Free `app/Http/Routes/api.php`), grouped by screen
- **Tables list / Create:** `TablesController` (index, store, duplicate, delete, bulk delete/restore = Trash, `table-inner-html`, `drag_and_drop_html`, dismiss-fluent-suggest). → `docs/table-management/tables-list.md`, `docs/table-management/table-cloning-duplicating.md`, `docs/creating-tables/table-types-overview.md`
- **Table Rows:** `TableItemsController` (rows CRUD). → `docs/creating-tables/working-in-table-rows.md`
- **Per-table settings:** `SettingsController` (`settings/{id}`: table settings, button = export/print, custom CSS/JS). → `docs/styling-design/table-style-settings.md`, `docs/table-settings/csv-and-print-button.md`, `docs/table-management/table-styling-css-selector.md`
- **Settings (gear):** `ToolsController` (default/global appearance, global settings, access roles, clear table cache, clear external cache). → `docs/table-management/tools-and-settings.md`, `docs/styling-design/use-design-as-default.md`, `docs/table-management/clear-table-cache.md`, `docs/table-management/define-permission-for-table-users.md`
- **Import:** `ImportController` (default import, chunked CSV init/process, table-builder import, other-plugin list/import, upload CSV into existing table). → `docs/import-export/*.md` (5)
- **Sources:** `FluentFormsController`, `WPPostsController` (post types, authors), `TableBuilderController` (D&D CRUD). → see the matching module above.
- **Installers:** `PluginInstallerController` (`install/fluent-forms`, `install/ninja-charts`; needs `install_plugins`). → `docs/data-sources/fluent-forms-integration.md`, `docs/ninja-charts/how-to-install-ninja-charts.md`
- **Pro controllers** (`ninja-tables-pro/app/Http/Controllers/`): `CustomFilterController` → `docs/table-settings/custom-filters.md`; `SortableController` (init/store) → `docs/table-management/rearrangement-of-rows-in-ninja-tables-manual-row-sort.md`; `PermissionController` → `docs/table-management/define-permission-for-table-users.md`; `LicenseController` (save/deactivate) → `docs/getting-started/upgrade-to-ninja-tables-pro-add-on-and-activate-ninja-tables-pro-license-key.md`; `GoogleSheetSyncController` → GoogleSheetSync above.
- **Last fully audited:** v5.2.18 (redesign @ f0b7813e)

### Hooks/Handlers (Free `app/Hooks/Handlers/`)
- **PublicDataHandler.php:** registers `[ninja_tables]` (base filterable via `ninja_tables_shortcode_base`), `[ninja_table_info]`, `[ninja_table_cell]` (depth cap `ninja_tables_cell_shortcode_max_depth`), `[ninja_table_builder]`; asset enqueue. → `docs/advanced-features/shortcode-reference.md`, `docs/advanced-features/advanced-shortcode.md`, `docs/wordpress-integration/embed-tables.md`
- **AdminMenuHandler.php:** WP submenu Tables / Import / Charts (→ `ninja-charts#/chart-list` + Add Chart when Ninja Charts is active) / Help; admin boot vars. → `docs/getting-started/ninja-tables-introduction.md`, `docs/data-sources/ninja-charts-integration.md`
- **EditorBlockHandler.php:** classic-editor TinyMCE button "Add Ninja Tables Shortcode". → `docs/wordpress-integration/embed-tables.md`
- **ExportHandler.php:** default + D&D export (CSV/JSON/Excel via `Services/Export/{TableExporter,XlsxWriter}.php`). → `docs/import-export/export-ninja-tables-csv-json.md`
- **PreviewHandler.php:** admin preview pages (`app/Views/admin/preview/{default-table,drag-and-drop}.php`, `?ninjatable_builder_preview=N`). → `docs/drag-drop-tables/drag-drop-builder-tour.md`
- **Internal (Drives docs: none):** Activation/Deactivation (deactivation feedback form), AjaxHandler, CPTHandler, CompatHandler, DataProviderHandler, NinjaTableAdminHandler, NoticeHandler, PluginLinksHandler, SettingHandler, StyleHandler.

### Hooks/Handlers (Pro `ninja-tables-pro/app/Hooks/Handlers/`)
- **TableHandler.php:** Pro shortcode attributes (`ninjaTablesShortcodeDefaults`: per_page, search, sorting, hide_header, logged_in_only, columns, skip, limit, disable_edit, get_filter, filter_column, hide_default_filter, filter_selects, stackable, stack_devices, post_tax, post_tax_field, sf_filter/sf_column/sf_match), formula parser, lightbox, own-data filters. → `docs/advanced-features/advanced-shortcode.md`, `docs/advanced-features/shortcode-reference.md`, `docs/advanced-features/default-data-filtering-shortcode.md`
- **TableEditorHandler.php** + `app/Views/row-editor.php` + `Services/FrontendRowValues.php`: frontend editing (roles, own data only, labels). → `docs/advanced-features/frontend-editing.md`
- **CustomFilterHandler.php** + `Traits/CustomFilter.php`: custom filters on the front end. → `docs/table-settings/custom-filters.md`
- **CustomJsHandler.php:** Custom JS (incl. D&D tables). → `docs/table-management/table-styling-css-selector.md`
- **ExtraShortCodeHandler.php:** `[nt_ratings]`, `[nt_icon]`. → `docs/advanced-features/rating-icon-shortcodes.md`
- **PlaceholderParserHandler.php** + `Services/TemplatePlaceholders.php`: `{date…}`, `{user:…}`, `{usermeta:…}`, `{current_post_id}`, `{current_user_role}`, `{gt}`/`{lt}`; transform `{{row.key}}` escaping. → `docs/advanced-features/shortcode-reference.md`, `docs/column-settings/transform-value.md`, `docs/column-settings/conditional-formatting.md`
- **PositionHandler.php** + `Traits/SortableTrait.php`: row position for manual sort. → `docs/table-management/rearrangement-of-rows-in-ninja-tables-manual-row-sort.md`
- **DataProviderHandler.php:** boots the Pro providers. Drives docs: none.
- **Last fully audited:** v5.2.18 (redesign @ f0b7813e)

### CPT (`app/CPT/NinjaTable.php`)
- **Purpose:** Registers the `ninja-table` post type; tables are posts, rows/settings are meta or the DT table.
- **Drives docs:** none (only `docs/getting-started/ninja-tables-glossary.md` if the storage model is described).

### Views/public + Services/Render (front-end rendering)
- **Key files:** `app/Views/public/{ninja-footable.php,ninja-footable-css.php,table-inner-html.php,drag-and-drop-html.php}`, `app/Views/public/datatables/{ninja-datatable.php,ninja-datatable-css.php}`; `app/Services/Render/{FooTableRenderer,DataTablesRenderer,CssGenerator,TableClasses,RenderConfig,ColumnFormatter}.php`.
- **User-facing surface:** Front-end markup, CSS selectors (`#footable_parent_<ID>`, `#ninja_dt_parent_<ID>`), Ajax vs Legacy render.
- **Drives docs:** `docs/table-management/table-styling-css-selector.md`, `docs/table-settings/table-rendering-settings.md`, `docs/advanced-features/hooks-and-filters.md` (render hooks). Re-check selectors when `TableClasses`/`CssGenerator` change.

### Services/Import, Services/Export, Services/TableUsage
- **Purpose:** `Import/{TableImporter,CsvChunkImporter,XlsxToCsvConverter,ThirdPartyImporter}.php` + `Adapters/{TablePressAdapter,SupsysticAdapter}.php`; `Export/*`; `TableUsage.php` (feeds the "Used on" column).
- **Drives docs:** `docs/import-export/import-table-data-from-a-csv.md`, `docs/import-export/import-table-from-tablepress-plugin.md`, `docs/import-export/import-ninja-tables-json.md`, `docs/import-export/export-ninja-tables-csv-json.md`, `docs/table-management/tables-list.md`. Tunables (`ninja_tables_csv_import_chunk_size`, `ninja_tables_import_batch_max_*`, `ninja_tables_export_stream_threshold`) → `docs/advanced-features/hooks-and-filters.md`.

### Library
- Free `app/Library/Csv` (vendored CSV reader); Pro `app/Library/PHPSQLParser` (SQL validation). **Drives docs: none.**

### Models, Helper, Functions, Support, Traits, Services/{Vite,AutomaticUpgrader,BackgroundInstaller,TranslationService}, Pro Services/PluginManager
- **Drives docs: none** (licensing changes in `PluginManager/FluentLicensing.php` may touch the license page). Skip unless a change adds a setting, a changelogged hook, or visible behaviour.

### Root / docs
- `ninja-tables.php` + `readme.txt` (version + changelog) → `docs/changelog/change-log.md`. Free `docs/examples/` → `docs/advanced-features/developer-code-recipes.md`.

---

## Admin UI (Vue) → doc page map

All paths relative to `resources/admin/`; routes from `routes.js` (hash router under `admin.php?page=ninja_tables`). Shell: `components/layout/{AppShell,AppTopBar,CommandPalette,ThemeToggle}.vue` → `docs/getting-started/ninja-tables-introduction.md`.

| Route (name) | View file | Doc page(s) |
| --- | --- | --- |
| `#/` (home) | `views/TablesView.vue` (+ `components/tables/UsagePopover.vue`) | `docs/table-management/tables-list.md`, `docs/table-management/table-cloning-duplicating.md` |
| `#/` first run | `components/onboarding/{OnboardingWizard,OnboardingEmpty,GettingStarted,WelcomeBanner,WhatMovedModal}.vue` | `docs/getting-started/onboarding-setup-guide.md` (partial — see Gaps) |
| `#/create` (create_table) | `views/CreateTableView.vue`, `components/tables/{DefaultTableForm,FileImporter,DragDropCreate,EngineLine}.vue`, `components/tables/sources/*.vue` | `docs/creating-tables/table-types-overview.md`, `docs/creating-tables/create-your-first-table.md`, `docs/creating-tables/choose-table-engine.md`, `docs/drag-drop-tables/how-to-create-your-first-drag-and-drop-table-with-ninja-tables.md`, `docs/drag-drop-tables/drag-drop-templates.md`, each `docs/data-sources/*` source page |
| `#/tools` (import_tables) | `views/ImportView.vue` | `docs/import-export/import-table-data-from-a-csv.md`, `docs/import-export/import-ninja-tables-json.md`, `docs/import-export/import-table-from-tablepress-plugin.md` |
| `#/tools/global_settings` | `views/settings/GeneralSettings.vue` (shell `views/SettingsView.vue`) | `docs/table-management/tools-and-settings.md` |
| `#/tools/default_table_appearance` | `views/settings/DefaultAppearanceSettings.vue` | `docs/styling-design/use-design-as-default.md`, `docs/table-management/tools-and-settings.md` |
| `#/tools/permission` | `views/settings/PermissionsSettings.vue` | `docs/table-management/define-permission-for-table-users.md` |
| `#/tools/performance` (settings_performance) | `views/settings/PerformanceSettings.vue` | `docs/table-management/clear-table-cache.md` |
| `#/tools/licensing` | `views/settings/LicenseSettings.vue` | `docs/getting-started/upgrade-to-ninja-tables-pro-add-on-and-activate-ninja-tables-pro-license-key.md` |
| `#/help` | `views/HelpView.vue`, `components/help/otherPlugins.js` | `docs/getting-started/how-to-get-support.md` |
| `#/charts` | `components/Charts.vue` | `docs/data-sources/ninja-charts-integration.md`, `docs/ninja-charts/how-to-install-ninja-charts.md`, `docs/ninja-charts/getting-started-with-ninja-charts-free-wordpress-chart-plugin.md` (URL hard-linked from this view — keep) |
| `#/tables/:id` editor shell | `views/TableEditorView.vue`, `components/editor/{EditorHeader,TableDetailsDialog}.vue` | `docs/table-management/table-title-description-settings.md` |
| `…/` Table Rows (data_items) | `views/editor/TableRowsTab.vue`, `components/editor/{RowsToolbar,RowDrawer,SourceBanner}.vue`, `components/TableNav/*.vue` | `docs/creating-tables/working-in-table-rows.md`, `docs/data-sources/connected-tables-overview.md`, `docs/styling-design/tables-row-color.md`, `docs/table-management/rearrangement-of-rows-in-ninja-tables-manual-row-sort.md` |
| ↳ Column dialog | `components/Table/ColumnEditor/{ColumnsEditor,AdvancedSettingsTab,_conditional,ContentTransformer}.vue`, `Fields/*.vue`, `columnOptions.js` | `docs/column-settings/{basic-settings,advanced-settings,conditional-formatting,transform-value}.md`, `docs/field-types/*.md` (8), `docs/responsive-design/column-responsive-breakpoints.md`, `docs/table-management/row-column-data-calculation.md` |
| `…/columns` (data_columns, hidden) | `components/Table/ColumnEditor/TableColumns.vue` | `docs/table-settings/column-rearrangement.md` |
| `…/import-export` (no tab) | `components/Table/Tools/{ExportImport,Import}.vue` | `docs/import-export/export-ninja-tables-csv-json.md`, `docs/import-export/import-csv-file-to-an-existing-table.md` |
| `…/filters` (data_filters, Pro) | `views/editor/CustomFiltersTab.vue`, `components/Table/TableFilters/*.vue` | `docs/table-settings/custom-filters.md` |
| `…/design_studio` Appearance | `views/editor/AppearanceTab.vue`, `components/editor/design/*.vue` | `docs/styling-design/table-style-settings.md` (hub), `table-color-settings.md`, `table-font-settings.md`, `add-or-remove-search-or-filter-functionality.md`, `sorting.md`, `pagination.md`, `other-design-settings.md`, `use-design-as-default.md` (all `docs/styling-design/`), `docs/table-settings/language-settings.md`, `docs/table-settings/csv-and-print-button.md` (ExportSection), `docs/responsive-design/stackable-table.md` |
| `…/configuration` | `views/editor/TableConfigurationTab.vue` | `docs/table-settings/table-rendering-settings.md`, `docs/creating-tables/choose-table-engine.md` |
| `…/table_editing` (Pro) | `views/editor/FrontendEditingTab.vue` | `docs/advanced-features/frontend-editing.md` |
| `…/additional_css` | `views/editor/CustomCodeTab.vue` | `docs/table-management/table-styling-css-selector.md` |
| `#/table_builder_edit_table/:id` | `components/TableBuilder/{TableBuilderHome,TopNav}.vue`, `Sidebar/{BuilderCanvas,BuilderPanel}.vue`, `Table/Layout.vue` | `docs/drag-drop-tables/drag-drop-builder-tour.md`, `docs/drag-drop-settings/drag-drop-rows-columns.md`, `docs/table-formatting/colspan-cell-merge.md`, `docs/table-formatting/rowspan.md` |
| ↳ Settings · Cell | `components/TableBuilder/Sidebar/{_CellSetting,_Background}.vue` | `docs/drag-drop-settings/drag-drop-cell-settings.md`, `manage-cells-in-ninja-tables-drag-and-drop.md`, `table-background-color-customizing-ninja-tables-drag-and-drop.md` |
| ↳ Settings · Table | `BuilderPanel.vue` + `config/table-builder/{setting,responsive}.php` | `docs/drag-drop-settings/ninja-tables-drag-and-drop-table-settings.md`, `responsive-table-design.md`, `spacing.md` |
| ↳ Element options | `components/TableBuilder/OptionComponent/<X>Option.vue` (+ `CustomHTML.vue`) | `docs/drag-drop-elements/<element>.md` (12; Rating = `star-rating-element-in-ninja-tables-drag-and-drop.md`, Progress = `progress-bar.md`, Text Icon = `text-icon-pro.md`, Styled List = `styled-list.md`) |
| `#/table_builder_add_table` | redirect → `#/create?source=drag_and_drop` | — |
| Gutenberg block | `blocks/table-block/*` | `docs/wordpress-integration/embed-tables.md` |
| TinyMCE | `ninja-table-tinymce-button.js` | `docs/wordpress-integration/embed-tables.md` |
| `#/ui-kit` | `views/UiKit.vue` (dev server only) | none |

---

## Pro-only surface

Everything below is gated in Free (badge / `show_pro_popup`); the UI is in the free plugin, the logic in `ninja-tables-pro`.

- WP Posts / CPT table → `docs/data-sources/create-wp-posts-table.md`
- WooCommerce products table, bulk actions, compare, avg rating → `docs/data-sources/woocommerce-integration.md`, `docs/table-management/woocommerce-product-comparison-bulk-add-to-cart.md`, `docs/data-sources/woocommerce-product-average-rating-column.md`
- WooCommerce reviews table → `docs/data-sources/woocommerce-product-reviews-table.md`
- Google Sheets (FooTable live + DataTables sync) → `docs/data-sources/google-sheets-integration.md`, `docs/data-sources/google-sheets-csv-auto-sync.md`
- Remote CSV → `docs/data-sources/construct-table-from-csv.md`
- Custom SQL (incl. remote DB) → `docs/data-sources/create-table-from-custom-sql.md`, `docs/data-sources/custom-sql-remote-database.md`
- Column types Select / Image-File-Lightbox / Button-Link; custom date format → `docs/field-types/select-field.md`, `image-file-lightbox.md`, `actionable-button-link.md`, `date-field.md`
- Column Advanced (width, classes, colours, sortable/searchable, HTML header), Conditions, Transform + Excel formulas → `docs/column-settings/advanced-settings.md`, `conditional-formatting.md`, `transform-value.md`, `docs/table-management/row-column-data-calculation.md`
- Row/cell colours, Insert row below → `docs/styling-design/tables-row-color.md`
- Manual row sort → `docs/table-management/rearrangement-of-rows-in-ninja-tables-manual-row-sort.md`
- Custom colours, alternate rows, search position, sticky header/column, expand rows, Export & print → `docs/styling-design/table-color-settings.md`, `add-or-remove-search-or-filter-functionality.md`, `other-design-settings.md`, `docs/responsive-design/stackable-table.md`, `docs/table-settings/csv-and-print-button.md`
- Legacy (server-side) render → `docs/table-settings/table-rendering-settings.md`
- Custom JS → `docs/table-management/table-styling-css-selector.md`
- Custom filters → `docs/table-settings/custom-filters.md`
- Frontend editing → `docs/advanced-features/frontend-editing.md`
- Permissions (roles), License → `docs/table-management/define-permission-for-table-users.md`, `docs/getting-started/upgrade-to-ninja-tables-pro-add-on-and-activate-ninja-tables-pro-license-key.md`
- D&D elements Icon, Image, Styled List, Ribbon, Text Icon; Highlight column; Import from URL; Pro templates → `docs/drag-drop-elements/{icon-element,image-element,styled-list,ribbon-element,text-icon-pro}.md`, `docs/drag-drop-settings/drag-drop-cell-settings.md`, `docs/drag-drop-tables/drag-drop-templates.md`
- Advanced shortcode attributes, placeholders, `[nt_ratings]`/`[nt_icon]` → `docs/advanced-features/advanced-shortcode.md`, `shortcode-reference.md`, `rating-icon-shortcodes.md`
- Gutenberg block Colors tab → `docs/wordpress-integration/embed-tables.md`
- Overall matrix → `docs/getting-started/free-vs-pro.md`

Caveat recorded in audit 03: D&D template PRO badges show even when Pro is active (`DragDropCreate.vue` checks only `item.has_pro`).

---

## Vue allowlist for indexing

`resources/admin/` is **not** bulk-indexed. These 15 files carry most doc-driving labels; re-index them when they change (pair with `config/table-builder/component.php` for D&D element names/gating and `app/Modules/I18nStrings.php` for a full label diff):

1. `resources/admin/views/TablesView.vue` — tables list, filters, Trash, onboarding mount
2. `resources/admin/views/CreateTableView.vue` — every Create tile
3. `resources/admin/views/ImportView.vue` — Import page
4. `resources/admin/views/editor/TableRowsTab.vue` — rows grid + toolbar
5. `resources/admin/views/editor/AppearanceTab.vue` — all Appearance sections
6. `resources/admin/views/editor/TableConfigurationTab.vue` — engine, rendering, caching
7. `resources/admin/views/editor/CustomFiltersTab.vue` — custom filters
8. `resources/admin/views/editor/FrontendEditingTab.vue` — frontend editing
9. `resources/admin/views/editor/CustomCodeTab.vue` — Custom CSS/JS
10. `resources/admin/views/settings/DefaultAppearanceSettings.vue` — Global appearance
11. `resources/admin/components/Table/ColumnEditor/ColumnsEditor.vue` — column dialog Basic + types
12. `resources/admin/components/Table/ColumnEditor/AdvancedSettingsTab.vue` — column Advanced
13. `resources/admin/components/Table/ColumnEditor/_conditional.vue` — conditional formatting
14. `resources/admin/components/tables/DragDropCreate.vue` — D&D create drawer + templates
15. `resources/admin/components/TableBuilder/Sidebar/BuilderPanel.vue` — D&D Elements/Settings panel

```VUE_ALLOWLIST_REGEX
^resources/admin/(views/(TablesView|CreateTableView|ImportView)|views/editor/(TableRows|Appearance|TableConfiguration|CustomFilters|FrontendEditing|CustomCode)Tab|views/settings/DefaultAppearanceSettings|components/Table/ColumnEditor/(ColumnsEditor|AdvancedSettingsTab|_conditional)|components/tables/DragDropCreate|components/TableBuilder/Sidebar/BuilderPanel)\.vue$
```

(Verified: matches exactly 15 tracked files at `f0b7813e`.)

---

## Gaps

Plugin features with no doc page, or a page that never mentions them (checked by grep across `docs/`, Oct 29 2026):

1. **First-run setup wizard + Getting started checklist** (`components/onboarding/OnboardingWizard.vue`, `GettingStarted.vue`, `OnboardingEmpty.vue`): "Set up your table" → "How do you want to start?" (Start blank / Upload a file / Connect a data source / Drag & Drop table) → name → "Make it look right" (design, font) → create; **Skip setup** / "Use the guided setup instead". `docs/getting-started/onboarding-setup-guide.md` walks the Create screen instead and never mentions the wizard or checklist.
2. **"What moved in the new Ninja Tables" modal + Welcome banner** (`WelcomeBanner.vue`, `WhatMovedModal.vue`): no doc mentions it. Candidate: a short section on `docs/getting-started/ninja-tables-introduction.md` or the changelog redesign entry.
3. **Frontend editing and manual row sort on the DataTables engine** (Pro `Modules/DataTables/Handlers/{DTFrontendEditHandler,SortableHandler}.php`): `docs/advanced-features/frontend-editing.md` and `docs/table-management/rearrangement-of-rows-in-ninja-tables-manual-row-sort.md` name neither engine.
4. **Redesign release entry**: 147 commits past the `v5.2.18` tag on `redesign` have no `docs/changelog/change-log.md` entry yet (audit 04 §3).
5. **Admin lead/review opt-ins and the deactivation feedback form** (`Modules/Lead/`, `DeactivationHandler.php`): undocumented by design. Internal, no doc needed.

Known product-side caveats to keep out of docs until resolved (audits 03/04): Remote CSV / JSON tile does not read JSON; Charts page claims "a Chart option appears on every table" (no code found); WP Posts Create hint points at a non-existent Columns tab; `{current_user_role}` blanks the whole string for logged-out visitors.

---

## How to update this catalog

- **Per release:** bump `Last fully audited:` on every module the release touched (record branch + short sha; Pro has no git, so record its `Version:` header).
- **New module or provider:** add an H3 under `app/Modules/` (free and Pro entries kept separate, Pro labelled with its path).
- **Doc page moves or gains a sibling:** update **Drives docs** and the route table, then re-run the path check (`ls` every `docs/...md` named here).
- **New Vue file becomes a recurring source of copy:** swap it into the allowlist (keep ≤ 15) and update the regex line.

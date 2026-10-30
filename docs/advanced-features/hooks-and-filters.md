---
title: "Hooks & Filters"
description: "Developer reference of the WordPress actions and filters Ninja Tables provides to change rendering, data, permissions, editing, connected sources, import and export."
---

# Hooks & Filters

Ninja Tables provides WordPress **actions** and **filters** so developers can change how tables render, which rows reach the browser, who can manage tables, what happens when rows change, and how connected sources behave. Add the code to your child theme's `functions.php`, a code-snippets plugin or an mu-plugin.

Hooks marked **(Pro)** only run when Ninja Tables Pro is active. A name ending in `<ID>`, `<provider>` or `<library>` is a family of hooks: replace the part in angle brackets with the table ID, the data source name or the engine. For events in the browser, see [JavaScript Events](/javascript-events). For complete working code, see [Developer Code Recipes](/developer-code-recipes).

## Rendering and shortcodes

These run while a table shortcode is turned into HTML.

| Hook | Type | Parameters | Purpose |
|---|---|---|---|
| `ninja_tables_shortcode_base` | filter | `$tag` (default `ninja_tables`) | Rename the table shortcode. |
| `ninja_tables_shortcode_defaults` | filter | `$defaults` | Add or change shortcode attributes and their defaults. |
| `ninja_tables_shortcode_data` | filter | `$shortcodeData` | Change the parsed attributes of one embed. |
| `ninja_tables_rendering_table_settings` | filter | `$settings`, `$shortcodeData`, `$table` | Change the table settings for one embed. Pro uses it for `per_page`, `search` and the other attributes. Return an empty array to render nothing. |
| `ninja_table_js_config` | filter | `$tableArray`, `$filter` | Change the table configuration before it is rendered. |
| `ninja_tables-render-table-<library>` | action | `$tableArray` | Renders the table for an engine. Core uses `footable` and `datatables`. |
| `ninja_rendering_table_<provider>` | action | `$tableArray` | Runs while the table configuration is built, for one data source. |
| `ninja_table_rendering_table_vars` | filter | `$tableVars`, `$tableId`, `$tableArray` | Change the settings passed to the front end. |
| `ninja_table_column_attributes` | filter | `$formattedColumn`, `$column`, `$tableId`, `$tableArray` | Change a column's front-end attributes. |
| `ninja_table_attributes` | filter | `$attributes`, `$tableId` | Change the HTML attributes of the `<table>` element (FooTable). |
| `ninja_tables_js_init_config` | filter | `$initConfig`, `$tableConfig`, `$tableId` | Change the FooTable start-up configuration for every table. |
| `ninja_tables_js_init_config_<ID>` | filter | `$initConfig`, `$tableConfig`, `$tableId` | The same, for one table. |
| `ninja_tables_footable_init_delay` | filter | `$ms` (default `0`) | Delay before FooTable starts. |
| `ninja_table_search_time_delay` | filter | `$ms` (default `1000`), `$tableId` | Delay before typing in the search box filters the table. |
| `ninja_tables_cell_shortcode_max_depth` | filter | `$depth` (default `5`) | How deep nested `[ninja_table_cell]` shortcodes are resolved. |
| `ninja_tables_will_render_table` | action | `$tableId` | Runs just before a table renders, and when its assets are prepared. |
| `ninja_table_before_render_table_source` | action | `$table`, `$tableVars`, `$tableArray` | Runs before the FooTable view is included. |
| `ninja_tables_before_table_title` / `ninja_tables_after_table_title` | action | `$table` | Output HTML around the table title. |
| `ninja_tables_before_table_description` / `ninja_tables_after_table_description` | action | `$table` | Output HTML around the table description (FooTable). |
| `ninja_tables_before_table_print` / `ninja_tables_after_table_print` | action | `$table`, `$tableVars` | Output HTML before or after the table. |
| `ninja_tables_inside_table_render` | action | `$table`, `$tableVars` | Runs inside the table markup (FooTable). |
| `ninja_table_builder_before_render` | action | `$tableId` | Runs before a Drag & Drop table renders. |
| `ninja_tables_drag_and_drop_after_table_print` | action | `$tableId` | Output HTML after a Drag & Drop table. |
| `ninja_tables_require_formulajs` | action | `$tableArray` | Loads the formula library for tables that use formulas. |
| `ninja_tables_load_lightbox` | action | `$settings` | Loads the lightbox library for tables that show images in a lightbox. |
| `ninja_tables_last_edited_time` | filter | `$time`, `$tableId` | The value of `[ninja_table_info field="last_modified"]`. |

**Example: show a note under one table**

```php
add_action('ninja_tables_after_table_print', function ($table, $tableVars) {
    if ((int) ($tableVars['table_id'] ?? 0) === 123) {
        echo '<p class="table-note">Prices include VAT.</p>';
    }
}, 10, 2);
```

## Data sent to the browser

These decide which rows a table loads. Rows reach the page either inside the HTML (Legacy) or through an Ajax request (the default).

| Hook | Type | Parameters | Purpose |
|---|---|---|---|
| `ninja_tables_get_public_data` | filter | `$rows`, `$tableId` | Change the rows sent to the browser. Use this one, not `ninja_tables_get_raw_table_data`. |
| `ninja_tables_get_raw_table_data` | filter | `$rows`, `$tableId` | The cached raw rows of a table with built-in rows. Prefer `ninja_tables_get_public_data`. |
| `ninja_tables_public_max_rows` | filter | `$max` (default `3000`) | Maximum rows loaded per request. |
| `ninja_table_per_chunk` | filter | `$size` (default `3000`), `$tableId` | Rows per chunk when a large table loads in chunks. |
| `ninja_table_is_public_ajax_table` | filter | `$isAjax`, `$tableId` | Force a table to load through Ajax (`true`) or inside the page (`false`). Tables set to Legacy rendering are always `false` before this runs. |
| `ninja_table_doing_ajax_table_data` | action | `$tableId` | Runs when the browser asks for a table's rows. |
| `ninja_tables_total_size_query` | filter | `$query`, `$tableVars` | Change the query that counts a table's rows (FooTable). Pro uses it for own-data tables. |
| `ninja_tables_public_force_own_only` | filter | `$ownOnly`, `$tableId` | Whether visitors get only their own rows. Pro answers this from the table's frontend editing settings. |
| `ninja_table_own_data_filter_query` | filter | `$query`, `$tableId` | Limit the rows query of a built-in table to the visitor's own rows. Pro implements it. |
| `ninja_tables_fetching_table_rows_<provider>` | filter | `$rows`, `$tableId`, `$defaultSorting`, `$limit`, `$skip`, `$ownOnly` | Supply the rows of a custom data source. CSV sources use `csv`. |
| `ninja_tables_get_table_data` | filter | `[$rows, $total]`, `$tableId`, `$perPage`, `$skip` | Change the rows and total of any source. |
| `ninja_tables_get_table_data_<provider>` | filter | `[$rows, $total]`, `$tableId`, `$perPage`, `$skip` | The same, for one data source. |
| `ninja_get_table_columns_<scope>` | filter | `$columns`, `$tableId` | Change the saved columns when they are read. Scopes include `public` and `admin`. |
| `ninja_get_table_settings_<scope>` | filter | `$settings`, `$tableId` | Change the saved settings when they are read. |
| `ninja_tables/get_default_ninja_table_settings` | filter | `$settings` | Defaults applied to new tables. |

**Example: allow more rows per request**

```php
add_filter('ninja_tables_public_max_rows', function () {
    return 5000;
});
```

### DataTables engine

| Hook | Type | Parameters | Purpose |
|---|---|---|---|
| `ninja_tables_dt_supported_providers` | filter | `$providers` | Data sources the DataTables engine can render. Default: `default`, `fluent-form`, `wp-posts`, `raw_sql`, `wp_fct`. |
| `ninja_tables_dt_max_length_all` | filter | `$max` (default `10000`) | Rows returned when the table asks for all rows at once. |
| `ninja_tables_dt_max_filter_options` | filter | `$max` (default `2000`) | Maximum choices in a column filter list. |
| `ninja_tables_dt_filter_options_cache_ttl` | filter | `$seconds` (default 5 minutes), `$tableId` | How long filter choices are cached. Return `0` to turn the cache off. |
| `ninja_tables_dt_trusted_html_columns` | filter | `$columnKeys`, `$tableId` | Columns whose HTML is treated as trusted. |
| `ninja_tables_dt_provider_rows_vary_by_viewer` | filter | `$varies`, `$tableId` | Tell the engine that a source returns different rows per viewer, so rows are not shared between visitors. |

## Shortcodes in cells and HTML cleaning

| Hook | Type | Parameters | Purpose |
|---|---|---|---|
| `ninja_tables_shortcode_trusted_providers` | filter | `$providers` (default `['default']`), `$tableId`, `$provider` | Data sources whose cells may run shortcodes. Sources you add are trusted with whatever their data holds. |
| `ninja_tables_provider_allows_shortcodes` | filter | `$allowed`, `$provider`, `$tableId` | Final yes or no for one table. |
| `ninja_tables/allowed_html_tags` | filter | `$tags` | HTML tags allowed in cells. |
| `ninja_tables/allowed_css_properties` | filter | `$properties` | Inline CSS properties allowed in cells. |
| `ninja_tables_disable_fields_sanitize` | filter | `$disabled` (default `false`) | Skip HTML cleaning for every user. Users who can post unfiltered HTML already skip it. |
| `ninja_tables_nonce_error` | filter | `$errors` | The error returned when a security check fails. |

## Permissions

| Hook | Type | Parameters | Purpose |
|---|---|---|---|
| `ninja_table_admin_role` | filter | `$roles` (default `['administrator']`) | Roles that can manage tables, in addition to the roles set in **Settings** › **Permissions**. |
| `ninja_table_sql_permission` (Pro) | filter | `$permission` | Control who may create Custom SQL tables. |

```php
add_filter('ninja_table_admin_role', function ($roles) {
    $roles[] = 'editor';
    return $roles;
});
```

## Row and column changes

These run when rows are added, updated or deleted in tables that store their own rows (from the admin, an import or frontend editing).

| Hook | Type | Parameters |
|---|---|---|
| `ninja_tables_item_attributes` | filter | `$attributes`: the row about to be saved |
| `ninja_table_before_add_item` | action | `$tableId`, `$attributes` |
| `ninja_table_after_add_item` | action | `$insertId`, `$tableId`, `$attributes` |
| `ninja_table_before_update_item` | action | `$id`, `$tableId`, `$attributes` |
| `ninja_table_after_update_item` | action | `$id`, `$tableId`, `$attributes` |
| `ninja_table_before_items_deleted` | action | `$ids`, `$tableId` |
| `ninja_table_after_items_deleted` | action | `$ids`, `$tableId` |
| `ninja_table_update_columns_<provider>` | filter | `$columns`, `$rawColumns`, `$tableId` |
| `ninja_table_before_update_columns_<provider>` | action | `$columns`, `$rawColumns`, `$tableId` |
| `ninja_table_before_update_columns` | action | `$columns`, `$rawColumns`, `$tableId` |
| `ninja_tables/after_table_created` | action | `$tableId`, `['request_data' => $request]` |
| `ninja_tables/update_table_settings` | action | `$tableId`, `['request_data' => $request]` |

**Example: email the admin when a row is added**

```php
add_action('ninja_table_after_add_item', function ($rowId, $tableId, $attributes) {
    if ((int) $tableId !== 123) {
        return;
    }
    wp_mail(get_option('admin_email'), 'New table row', 'Row #' . $rowId . ' was added.');
}, 10, 3);
```

## Frontend editing (Pro)

| Hook | Type | Parameters | Purpose |
|---|---|---|---|
| `ninja_table_pro_editor_data_submission` | filter | `$errors`, `$tableId`, `$values`, `$allColumns` | Validate a row submitted from the front end. Return an array of errors keyed by column key to reject it. |
| `ninja_table_update_row_data_<provider>` | action | `$values`, `$rowId`, `$tableId` | Save a row for a data source other than the built-in one. |
| `ninja_table_delete_row_data_<provider>` | action | `$rowId`, `$tableId` | Delete a row for a data source other than the built-in one. |
| `ninja_edit_select_placeholder` | filter | `$text`, and the column details | The placeholder text of a select field in the row editor. |

See [Frontend Editing](/frontend-editing) for the feature itself.

## Placeholders

| Hook | Type | Parameters | Purpose |
|---|---|---|---|
| `ninja_parse_placeholder` (Pro) | filter | `$string` | Replaces `{date:…}`, `{user:…}` and the other [placeholders](/shortcode-reference#placeholders-pro) in a string. Call it to use the same placeholders in your own code, or hook it to add your own. |

## WP Posts and WooCommerce tables (Pro)

| Hook | Type | Parameters | Purpose |
|---|---|---|---|
| `ninja_table_excluded_post_types` | filter | `$postTypes` | Post types left out of the post-type list when you create a WP Posts table. |
| `ninja_table_post_table_args` | filter | `$args`, `$data` | Change the `WP_Query` arguments of a WP Posts or WooCommerce table. |
| `ninja_table_post_table_args_<ID>` | filter | `$args`, `$data` | The same, for one table. |
| `ninja_table_wp_posts_query_extra` | filter | `$queryExtra`, `$tableId` | Add extra query conditions. Also used by FluentCart tables. |
| `ninja_table_format_acf_array_enabled` | filter | `$enabled` (default `true`) | Turn ACF array formatting on or off. |
| `ninja_table_format_acf_value` | filter | `$value` | Format an ACF field value before it is shown. |
| `ninja_table_woo_table_query_terms` | filter | `$settings` | Change the category, tag and type terms a product table queries. |
| `ninja_table_woo_reviews_table_query_terms` | filter | `$settings` | The same, for a WooCommerce reviews table. |
| `ninja_table_woo_cart_text` | filter | `$text` | Text of the cart button. |
| `ninja_table_woo_cart_url` | filter | `$url` | URL of the cart button. |
| `ninjatable_hide_out_stock_cart_btn` | filter | `$hide` (default `true`), `$product` | Hide the add-to-cart button for out-of-stock products. |
| `ninja_tables_woo_add_to_cart_max_products` | filter | `$max` (default `100`) | Maximum products in one bulk add-to-cart. |
| `nt_woo_always_cart_fragment` | filter | `$always` (default `false`) | Always load the WooCommerce cart fragment script on the page. |

**Example: hide private posts from a WP Posts table**

```php
add_filter('ninja_table_post_table_args', function ($args, $data) {
    $args['post_status'] = 'publish';
    return $args;
}, 10, 2);
```

## FluentCart tables

| Hook | Type | Parameters | Purpose |
|---|---|---|---|
| `ninja_table_fct_cart_text` | filter | `$text` | Text of the cart button. |
| `ninja_table_fct_cart_url` | filter | `$url` | URL of the cart button. |
| `ninja_table_fct_checkout_text` | filter | `$text` | Text of the checkout button. |
| `ninja_tables/fct_quantity_input_args` | filter | `$args`, `$product` | Attributes of the quantity input. |
| `ninja_tables/fct_quantity_input_step` | filter | `$step` (default `1`), `$product` | Step of the quantity input. |
| `ninja_tables/fct_quantity_input_pattern` | filter | `$pattern` (default `[0-9]*`) | Input pattern of the quantity field. |
| `ninja_tables/fct_quantity_input_inputmode` | filter | `$mode` (default `numeric`) | Input mode of the quantity field. |

## Fluent Forms tables

| Hook | Type | Parameters | Purpose |
|---|---|---|---|
| `ninja_tables_fluentform_per_page` | filter | `$limit`, `$tableId`, `$formId` | Maximum entries loaded (`-1` for no limit). |
| `ninja_tables_fluentform_entry_status` | filter | `$status`, `$tableId`, `$formId` | Which entries to load by status. Default `all`. |
| `ninja_tables_fluentform_order_by` | filter | `$orderBy`, `$tableId`, `$formId` | Sort order of the entries. |
| `ninja_tables_fluentform_all_entries` | filter | `$rows`, `$submissions`, `$columns`, `$tableId` | Change the final rows before the table shows them. |

## Custom SQL tables (Pro)

| Hook | Type | Parameters | Purpose |
|---|---|---|---|
| `ninja_table_raw_sql_placeholders` | filter | `$placeholders` | Add your own placeholders to SQL queries. |
| `ninja_table_raw_sql_parsed` | filter | `$parsedSql`, `$sql`, `$tableId` | Change the final query after placeholders are replaced. |
| `ninja_table_raw_sql_remote_prefix` | filter | `$prefix` (default `wp_`), `$connection` | Table prefix used for `{prefix}` on a remote database. |

## Google Sheets and remote CSV (Pro)

| Hook | Type | Parameters | Purpose |
|---|---|---|---|
| `ninja_tables_remote_csv_timeout` | filter | `$seconds` (default `20`; `10` when only checking the file) | Timeout for fetching a remote CSV. |
| `ninja_tables_google_sheet_escape_zero_value` | filter | `$escape` (default `true`) | Whether empty or zero sheet values are escaped. |
| `ninja_tables_gsheet_max_csv_size` | filter | `$bytes` (default 100 MB) | Largest sheet the DataTables sync will download. |
| `ninja_tables_gsheet_insert_batch` | filter | `$rows` (default `2000`) | Rows inserted per database batch during a sync. |
| `ninja_tables_gsheet_cron_time_budget` | filter | `$seconds` (default `20`) | How long one background sync run may work. |
| `ninja_tables_gsheet_cron_row_budget` | filter | `$rows` (default `40000`) | Rows one background run may process. |
| `ninja_tables_gsheet_cron_chunk_rows` | filter | `$rows` (default `5000`) | Rows handled per chunk in a background run. |

## Import and export

| Hook | Type | Parameters | Purpose |
|---|---|---|---|
| `ninja_tables_csv_import_chunk_size` | filter | `$rows` (default `20000`) | Rows per chunk when importing a large CSV. |
| `ninja_tables_csv_import_max_chunk_size` | filter | `$rows` (default `50000`) | Upper limit for the chunk size. |
| `ninja_tables_import_batch_max_cells` | filter | `$cells` (default `50000`) | Most cells inserted in one database batch. |
| `ninja_tables_import_batch_max_bytes` | filter | `$bytes` (default 4 MB) | Most data inserted in one database batch. |
| `ninja_tables_xlsx_convert_slice_rows` | filter | `$rows` (default `20000`) | Rows converted per step when reading an Excel file. |
| `ninja_tables_xlsx_convert_slice_seconds` | filter | `$seconds` (default `20`) | Time allowed per Excel conversion step. |
| `ninja_tables_csv_import_job_ttl_seconds` | filter | `$seconds` (default 2 hours) | How long an unfinished import job is kept. |
| `ninja_tables_export_stream_threshold` | filter | `$rows` (default `20000`), `$tableId` | Above this many rows, exports are streamed to save memory. |

## Admin screens

| Hook | Type | Parameters | Purpose |
|---|---|---|---|
| `ninja_tables/add_submenu` | filter | `$submenu`, `$capability` | Add or change items in the **Ninja Tables** menu. |
| `ninja_tables_admin_notices` | filter | `$notices` | Add or remove admin notices. |
| `ninja_tables/max_upload_file_size` | filter | `$size` (default `1024`) | Maximum upload file size passed to the admin app. |
| `ninja_tables/fluent_connector_base_url` | filter | `$url` | The Fluent Forms connector address used by the admin. |
| `ninja_tables/fluent_form_menu_icon` | filter | `$icon` | The Fluent Forms menu icon. |

## Plugin setup

| Hook | Type | Parameters | Purpose |
|---|---|---|---|
| `ninja_table_post_type_args` | filter | `$args` | Arguments used to register the `ninja-table` post type. |
| `ninja_table_post_status` | filter | `$statuses` | The list of post statuses (key and label) offered for post-based sources. |
| `ninjatables_loaded` | action | `$app` | Ninja Tables has finished loading. |
| `ninjatables_pro_loaded` (Pro) | action | `$app` | Ninja Tables Pro has finished loading. |

## Ninja Charts

These hooks belong to the free [Ninja Charts](/getting-started-with-ninja-charts-free-wordpress-chart-plugin) plugin, not Ninja Tables. Prefixes: `ntm` = charts from Ninja Tables data, `ffm` = charts from Fluent Forms entries, `manual` = charts with typed-in data.

| Hook | Type | Arguments | What it does |
|---|---|---|---|
| `ninja_charts_before_chart_save_or_update` | action | `$data` | Runs before a chart is saved. |
| `ninja_charts_after_chart_save_or_update` | action | `$chart` | Runs after a chart is saved. |
| `ninja_charts_before_chart_duplicate` | action | `$id` | Runs before a chart is duplicated. |
| `ninja_charts_after_chart_clone` | action | `$chart` | Runs after the copy is created. |
| `ninja_charts_before_chart_delete` | action | `$ids` | Runs before one or more charts are deleted. |
| `ninja_charts_chart_deleted` | action | `$id` | Runs after each chart is deleted. |
| `ninja_charts_shortcode_assets_loaded` | action | none | Runs when a chart shortcode has loaded its scripts and styles on the page. |
| `ninja_charts_ntm_table_lists` / `ninja_charts_ffm_table_lists` | filter | `$list` | The tables (or forms) offered as a chart source. |
| `ninja_charts_ntm_keys_by_table` / `ninja_charts_ffm_keys_by_table` | filter | `$keys_types` | The columns (or form fields) offered for a chosen source, with their types. |
| `ninja_charts_ntm_all_table_rows` / `ninja_charts_ffm_all_table_rows` | filter | `$rows` | All source rows read for a chart. |
| `ninja_charts_ntm_selected_table_rows` | filter | `$rows` | The Ninja Tables rows left after the chart's row selection. |
| `ninja_charts_ffm_filter_by_date_rows` | filter | `$rows` | Fluent Forms entries left after the date range filter. |
| `ninja_charts_ntm_all_data_by_table` / `ninja_charts_ffm_data_by_table` / `ninja_charts_manual_all_data_by_table` | filter | `$chart_data` | The final chart data (labels and datasets) before it is drawn. |
| `ninja_charts_manual_formatted_labels` | filter | `$labels` | Labels of a manual chart. |
| `ninja_charts_manual_data_sets_except_bubble_scatter_` | filter | `$data_sets` | Datasets of a manual chart other than bubble or scatter (the name ends in an underscore). |
| `ninja_charts_manual_data_sets_bubble_scatter_` | filter | `$data_sets` | Datasets of a manual bubble or scatter chart. |
| `ninja_charts_google_csv_row_limit` | filter | `$limit` (default `2000`) | Maximum rows read from a Google Sheets (CSV) table for a chart. |
| `ninja_charts_ntm_google_csv_unique_key` | filter | `$key` (default empty) | Cache key suffix for Google Sheets chart data. |
| `ninja_charts/fluent_connector_base_url` | filter | `$url` | Base URL of the Ninja Charts admin screen used by its menu links. |
| `ninja_charts_editor_available_charts` | filter | `$charts` | Charts listed in the classic editor's **Insert Ninja Charts Shortcode** dialog. |

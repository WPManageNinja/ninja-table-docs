---
title: "Hooks & Filters"
description: "Developer reference of the WordPress actions and filters Ninja Tables provides to change rendering, permissions, data, sources, import and export."
---

# Hooks & Filters

Ninja Tables provides WordPress **actions** and **filters** so developers can change how tables render, who can manage them, what happens when rows change, and how connected sources behave. Add the code to your child theme's `functions.php` or a code-snippets plugin.

Hooks marked **(Pro)** only run when Ninja Tables Pro is active.

## Rendering and shortcodes

| Hook | Type | Parameters | Purpose |
|---|---|---|---|
| `ninja_tables_shortcode_base` | filter | `$tag` (default `ninja_tables`) | Rename the table shortcode. |
| `ninja_tables_shortcode_defaults` | filter | `$defaults` | Add or change shortcode attributes and their defaults. |
| `ninja_tables_shortcode_data` | filter | `$shortcodeData` | Change the parsed attributes of one embed. |
| `ninja_table_js_config` | filter | `$tableArray`, `$filter` | Change the table configuration before it is rendered. |
| `ninja_table_rendering_table_vars` | filter | `$tableVars`, `$tableId`, `$tableArray` | Change the settings passed to the FooTable front end. |
| `ninja_table_column_attributes` | filter | `$formattedColumn`, `$column`, `$tableId`, `$tableArray` | Change a column's front-end attributes. |
| `ninja_table_attributes` | filter | `$attributes`, `$tableId` | Change the HTML attributes of the `<table>` element. |
| `ninja_tables_get_public_data` | filter | `$formattedData`, `$tableId` | Change the rows sent to the browser. |
| `ninja_tables_public_max_rows` | filter | `$max` (default `3000`) | Maximum rows loaded per request. |
| `ninja_table_search_time_delay` | filter | `$ms` (default `1000`), `$tableId` | Delay before typing in the search box filters the table. |
| `ninja_tables_footable_init_delay` | filter | `$ms` (default `0`) | Delay before FooTable starts. |
| `ninja_tables_cell_shortcode_max_depth` | filter | `$depth` (default `5`) | How deep nested `[ninja_table_cell]` shortcodes are resolved. |
| `ninja_tables_will_render_table` | action | `$tableId` | Runs just before a table renders. |
| `ninja_tables_before_table_title` / `ninja_tables_after_table_title` | action | `$table` | Output HTML around the table title. |
| `ninja_tables_before_table_print` / `ninja_tables_after_table_print` | action | `$table`, `$tableVars` | Output HTML before or after the table. |

**Example: show a note under one table**

```php
add_action('ninja_tables_after_table_print', function ($table, $tableVars) {
    if ((int) ($tableVars['table_id'] ?? 0) === 123) {
        echo '<p class="table-note">Prices include VAT.</p>';
    }
}, 10, 2);
```

**Example: allow more rows per request**

```php
add_filter('ninja_tables_public_max_rows', function () {
    return 5000;
});
```

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
| `ninja_table_before_update_columns` | action | `$tableColumns`, `$rawColumns`, `$tableId` |

**Example: email the admin when a row is added**

```php
add_action('ninja_table_after_add_item', function ($rowId, $tableId, $attributes) {
    if ((int) $tableId !== 123) {
        return;
    }
    wp_mail(get_option('admin_email'), 'New table row', 'Row #' . $rowId . ' was added.');
}, 10, 3);
```

## Placeholders

| Hook | Type | Parameters | Purpose |
|---|---|---|---|
| `ninja_parse_placeholder` | filter | `$string` | Replaces `{date:…}`, `{user:…}` and the other [placeholders](/shortcode-reference#placeholders-pro) in a string. Call it to use the same placeholders in your own code, or hook it to add your own. |

## WP Posts and WooCommerce tables (Pro)

| Hook | Type | Parameters | Purpose |
|---|---|---|---|
| `ninja_table_post_table_args` | filter | `$args`, `$data` | Change the `WP_Query` arguments of a WooCommerce product table. |
| `ninja_table_wp_posts_query_extra` | filter | `$queryExtra`, `$tableId` | Add extra query conditions. |
| `ninja_table_format_acf_value` | filter | `$value` | Format an ACF field value before it is shown. |
| `ninja_table_woo_table_query_terms` | filter | `$settings` | Change the category, tag and type terms a product table queries. |
| `ninja_table_woo_cart_text` | filter | `$text` | Text of the cart button. |
| `ninja_table_woo_cart_url` | filter | `$url` | URL of the cart button. |
| `ninjatable_hide_out_stock_cart_btn` | filter | `$hide` (default `true`), `$product` | Hide the add-to-cart button for out-of-stock products. |
| `ninja_tables_woo_add_to_cart_max_products` | filter | `$max` (default `100`) | Maximum products in one bulk add-to-cart. |

## FluentCart tables

| Hook | Type | Parameters | Purpose |
|---|---|---|---|
| `ninja_table_fct_cart_text` | filter | `$text` | Text of the cart button. |
| `ninja_table_fct_cart_url` | filter | `$url` | URL of the cart button. |
| `ninja_table_fct_checkout_text` | filter | `$text` | Text of the checkout button. |

## Custom SQL tables (Pro)

| Hook | Type | Parameters | Purpose |
|---|---|---|---|
| `ninja_table_raw_sql_placeholders` | filter | `$placeholders` | Add your own placeholders to SQL queries. |
| `ninja_table_raw_sql_parsed` | filter | `$parsedSql`, `$sql`, `$tableId` | Change the final query after placeholders are replaced. |
| `ninja_table_raw_sql_remote_prefix` | filter | `$prefix` (default `wp_`), `$connection` | Table prefix used for `{prefix}` on a remote database. |

## Google Sheets and remote CSV (Pro)

| Hook | Type | Parameters | Purpose |
|---|---|---|---|
| `ninja_tables_remote_csv_timeout` | filter | `$seconds` (default `20`) | Timeout for fetching a remote CSV. |
| `ninja_tables_google_sheet_escape_zero_value` | filter | `$escape` (default `true`) | Whether empty or zero sheet values are escaped. |
| `ninja_tables_gsheet_max_csv_size` | filter | `$bytes` (default 100 MB) | Largest sheet the DataTables sync will download. |

## Import and export

| Hook | Type | Parameters | Purpose |
|---|---|---|---|
| `ninja_tables_csv_import_chunk_size` | filter | `$rows` (default `20000`) | Rows per chunk when importing a large CSV. |
| `ninja_tables_export_stream_threshold` | filter | `$rows` (default `20000`), `$tableId` | Above this many rows, exports are streamed to save memory. |

For complete, working examples, see [Developer Code Recipes](/developer-code-recipes).

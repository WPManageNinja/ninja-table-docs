---
title: "Advanced Shortcode"
description: "Change how one embed of a table looks and behaves with shortcode attributes: rows per page, columns, filters, URL parameters, stacking and more."
---

# Advanced Shortcode

Shortcode attributes change how a table behaves **in one place only**, without touching the table's own settings. Use them to show the same table differently on different pages: fewer columns here, a fixed filter there, logged-in visitors only somewhere else.

Most attributes need Ninja Tables Pro; without Pro they are ignored. They work on both the FooTable and DataTables engines, except `info`, which only works on FooTable. For the complete list with defaults, see the [Shortcode Reference](/shortcode-reference).

## Basic usage

Every table has a shortcode. Copy it from the shortcode chip in the table editor, or from the **Shortcode** column in the [Tables list](/tables-list):

```
[ninja_tables id="123"]
```

Add attributes inside the brackets:

```
[ninja_tables id="123" per_page="20" columns="name,price" search="0"]
```

## Attributes

### Free

| Attribute | What it does |
|---|---|
| `id` | The table ID. Required. |
| `filter` | Show only rows matching this text. Supports `AND`, `OR`, `-exclude` and `"exact phrase"`. See [Default Data Filtering Shortcode](/default-data-filtering-shortcode). |
| `use_parent_width` | Make the table use its container's width. |
| `info` | FooTable only. Show a page-info line after the pagination, for example `info="Page {CP} of {TP}"`. Placeholders: `{CP}` current page, `{TP}` total pages, `{PF}` first row number shown, `{PL}` last row number shown, `{TR}` total rows. DataTables tables ignore it and always show their own "Showing 1 to 25 of 1,200 entries" line. |

### Pro

| Attribute | What it does | Values |
|---|---|---|
| `per_page` | Rows per page. | A number |
| `search` | Show or hide the search box. | `1` or `0` |
| `sorting` | Turn column sorting on or off. | `1` or `0` |
| `hide_header` | Hide the header row. | `1` or `0` |
| `logged_in_only` | Show the table to logged-in visitors only. | `1` |
| `columns` | Show only these columns, by column key. | Comma-separated keys, default `all` |
| `skip` | Skip the first rows of the data. | A number, default `0` |
| `limit` | Show at most this many rows. | A number, default `0` (no limit) |
| `filter_column` | Apply `filter` to these columns only. | Comma-separated column keys |
| `hide_default_filter` | Keep rows hidden by `filter` hidden even after a visitor resets the filters. | `yes` |
| `get_filter` | Filter from a URL query value, for example `get_filter="dept"` filters by `?dept=Sales`. | A query-parameter name |
| `filter_selects` | Pre-select values in the table's [custom filters](/custom-filters). | `Filter title=Value\|Other filter=Value` |
| `sf_filter`, `sf_column`, `sf_match` | A fixed ("locked") filter on one column that visitors can't clear. `sf_match`: `equal` (default), `contains`, `lt`, `gt` or `startswith`. | See below |
| `stackable` | Stack rows as cards on small screens for this embed. See [Stackable Table](/stackable-table). | `yes` |
| `stack_devices` | Devices that get cards when `stackable="yes"`. | `xs` (mobile), `sm` (tablet), `md` (laptop), `lg` (large); default `xs,sm` |
| `post_tax`, `post_tax_field` | Filter a WP Posts or WooCommerce table by taxonomy terms. | See below |
| `disable_edit` | Turn off [frontend editing](/frontend-editing) for this embed (read-only). | `yes` |

::: warning Use 1 and 0 for search, sorting and hide_header
These three attributes turn on for any value except `0` or empty. `search="false"`, `sorting="no"` and `hide_header="off"` all turn the feature **on**. Use `1` to turn on and `0` to turn off.
:::

## Examples

### Show a smaller version of a table

```
[ninja_tables id="123" columns="name,price,stock" per_page="5" search="0"]
```

### Lock a table to one category

```
[ninja_tables id="123" sf_column="category" sf_filter="Shoes"]
```

Rows whose `category` column equals **Shoes** are shown; visitors can't remove this filter. Change the comparison with `sf_match`: `contains` matches part of the cell (case-sensitive), `startswith` matches the beginning, and `lt` and `gt` compare the cell with the value. Keep both in the same format, for example the same date format.

::: warning
In **Ajax** rendering (the default), `sf_filter` only hides rows from view: the other rows are still sent to the browser. If those rows must not reach visitors at all, switch the table to **Legacy** rendering (Pro) in **Table Configuration**. See [Engine, Rendering & Caching](/table-rendering-settings).
:::

### Filter a posts or products table by taxonomy

```
[ninja_tables id="123" post_tax="category=news,events|post_tag=featured"]
```

Separate taxonomies with `|` and terms with commas. Terms are matched by slug; set `post_tax_field="name"` or `post_tax_field="term_id"` to match by name or ID instead. This works with [WP Posts](/create-wp-posts-table) and [WooCommerce](/woocommerce-integration) tables.

### Filter by date

Use date placeholders in `filter`, together with `filter_column`. The date format must match the column's date format.

Between two dates (here: today only):

```
filter="~{date:M/D/YYYY}:{date:M/D/YYYY}" filter_column="date"
```

From 7 days ago to tomorrow:

```
filter="~{date-7:M/D/YYYY}:{date+1:M/D/YYYY}" filter_column="date"
```

After today, or before today:

```
filter="{gt}{date:M/D/YYYY}" filter_column="date"
filter="{lt}{date:M/D/YYYY}" filter_column="date"
```

All placeholders are listed in the [Shortcode Reference](/shortcode-reference).

## Filter from the page address

Two attributes read their values from the address of the page, so one page can show a different slice of a table for each link.

### Filter with `get_filter`

Set `get_filter` to the name of a query parameter. The value of that parameter becomes the filter:

```
[ninja_tables id="123" get_filter="dept"]
```

Open the page as `/team/?dept=Sales` and the table shows the rows that match **Sales**. You can also add a `column` parameter to choose which columns the filter searches, as a comma-separated list of column keys:

```
/team/?dept=Sales&column=department,role
```

`column` is read only when `get_filter` is set on the shortcode, and it replaces any `filter_column` in the shortcode. Without the `dept` parameter in the address, the table shows the shortcode's own `filter`, if any.

### Pre-select custom filters with `?filter_selects=`

If a table has [custom filters](/custom-filters), `filter_selects` pre-selects their values. Write each pair as `Filter title=Value` and separate pairs with `|`:

```
[ninja_tables id="123" filter_selects="Category=Shoes|Size=42"]
```

A visitor can override it per link by adding a `filter_selects` parameter to the address, with the same syntax. When the parameter is present it replaces the shortcode's value.

```
/shop/?filter_selects=Category=Shoes|Size=42
```

## Other shortcodes

### Table info

Show a table's details anywhere:

```
[ninja_table_info id="123" field="title"]
```

`field` can be `title`, `description`, `total_rows` (tables that store their own rows only), `last_modified` or `last_editor`.

### A single cell

Print the value of one cell:

```
[ninja_table_cell id="123" row_id="45" column="price"]
```

For tables that store their own rows, use `row_id`: the row's ID, shown in **Table Rows** when you turn on **Show row ID, author and date**. For tables that read their rows from somewhere else (WP Posts, CSV and so on), use `row` with the row's position instead:

```
[ninja_table_cell id="123" row="3" column="price"]
```

<!-- TODO(screenshot): advanced-shortcode-1
  screen: Tables › Employee Directory › Table Rows
  table: Employee Directory
  state: Show row ID, author and date turned on so the ID column is visible
  highlight: Row ID column
  view: admin
  alt: Table Rows tab with the row ID column visible
-->

See the [Shortcode Reference](/shortcode-reference) for every shortcode in one place.

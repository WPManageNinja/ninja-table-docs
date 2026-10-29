---
title: "Advanced Shortcode"
description: "Change how one embed of a table looks and behaves with shortcode attributes: rows per page, columns, filters, stacking and more."
---

# Advanced Shortcode

Shortcode attributes change how a table behaves **in one place only**, without touching the table's own settings. Use them to show the same table differently on different pages: fewer columns here, a fixed filter there, logged-in visitors only somewhere else.

Most attributes need Ninja Tables Pro. They work on both the FooTable and DataTables engines (DataTables supports them since version 5.2.14).

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
| `info` | Show a page-info line after the pagination, e.g. `info="Page {CP} of {TP}"`. Placeholders: `{CP}` current page, `{TP}` total pages, `{PF}` first row number shown, `{PL}` last row number shown, `{TR}` total rows. |

### Pro

| Attribute | What it does | Values |
|---|---|---|
| `per_page` | Rows per page. | A number |
| `search` | Show or hide the search box. | `1` or `0` |
| `sorting` | Turn column sorting on or off. | `1` or `0` |
| `hide_header` | Hide the header row. | `1` or `0` |
| `logged_in_only` | Show the table to logged-in visitors only. | `1` or `0` |
| `columns` | Show only these columns, by column key. | Comma-separated keys, default `all` |
| `skip` | Skip the first rows of the data. | A number, default `0` |
| `limit` | Show at most this many rows. | A number, default `0` (no limit) |
| `filter_column` | Apply `filter` to one column only. | A column key |
| `hide_default_filter` | Keep rows hidden by `filter` hidden even after a visitor resets the filters. | `yes` |
| `get_filter` | Filter from a URL query value, e.g. `get_filter="dept"` filters by `?dept=Sales`. | A query-parameter name |
| `filter_selects` | Pre-select values in the table's [custom filters](/custom-filters). | `Filter title=Value\|Other filter=Value` |
| `sf_filter`, `sf_column`, `sf_match` | A fixed ("locked") filter on one column that visitors can't clear. `sf_match`: `equal` (default), `contains`, `lt`, `gt` or `startswith`. | See below |
| `stackable` | Stack rows as cards on small screens for this embed. | `yes` |
| `stack_devices` | Devices that get cards when `stackable="yes"`. | `xs` (mobile), `sm` (tablet), `md` (laptop), `lg` (large); default `xs,sm` |
| `post_tax`, `post_tax_field` | Filter a WP Posts or WooCommerce table by taxonomy terms. | See below |
| `disable_edit` | Turn off [frontend editing](/frontend-editing) for this embed (read-only). | `yes` |

## Examples

### Show a smaller version of a table

```
[ninja_tables id="123" columns="name,price,stock" per_page="5" search="0"]
```

### Lock a table to one category

```
[ninja_tables id="123" sf_column="category" sf_filter="Shoes"]
```

Rows whose `category` column equals **Shoes** are shown; visitors can't remove this filter.

::: warning
In **Ajax** rendering (the default), `sf_filter` only hides rows from view: the other rows are still sent to the browser. If those rows must not reach visitors at all, switch the table to **Legacy** rendering (Pro) in **Table Configuration**. See [Engine, Rendering & Caching](/table-rendering-settings).
:::

### Filter a posts or products table by taxonomy

```
[ninja_tables id="123" post_tax="category=news,events|post_tag=featured"]
```

Separate taxonomies with `|` and terms with commas. Terms are matched by slug; set `post_tax_field="name"` or `post_tax_field="term_id"` to match by name or ID instead.

### Filter by date

Use date placeholders in `filter`, together with `filter_column`. The date format must match the column's date format.

![Date filter example](/images/advanced-features/advanced-shortcode/1.-Advanced-shortcode.webp)

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

![Row ID in Table Rows](/images/advanced-features/advanced-shortcode/2.-advanced-shortcode-2.webp)

See the [Shortcode Reference](/shortcode-reference) for every shortcode in one place.

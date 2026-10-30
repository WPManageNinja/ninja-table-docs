---
title: "Shortcode Reference"
description: "Every Ninja Tables shortcode, attribute and placeholder in one place, with defaults, accepted values and whether it needs Pro."
---

# Shortcode Reference

This page lists every shortcode Ninja Tables provides, each attribute with its default, and the placeholders you can use inside shortcode filters. Follow the links for examples and the reasoning behind each option.

## Shortcodes

| Shortcode | What it shows | Free / Pro |
|---|---|---|
| `[ninja_tables id="123"]` | A table. | Free (most attributes are Pro) |
| `[ninja_table_builder id="123"]` | A Drag & Drop table. | Free |
| `[ninja_table_info id="123" field="title"]` | A detail about a table. | Free |
| `[ninja_table_cell id="123" row_id="45" column="price"]` | The value of one cell. | Free |
| `[nt_ratings value="4"]` | A star rating, for use in cells. | Pro |
| `[nt_icon icon="check"]` | An icon, for use in cells. | Pro |
| `[ninja_charts id="1"]` | A chart. Comes from the separate Ninja Charts plugin. | Free |

Charts are covered in [Add a Chart to a Page](/embed-ninja-charts).

## `[ninja_tables]`

The table shortcode. Add attributes inside the brackets; examples and use cases are in [Advanced Shortcode](/advanced-shortcode).

### Free attributes

| Attribute | Default | Purpose |
|---|---|---|
| `id` | none | Table ID. Required. |
| `filter` | none | Show only matching rows. Visitors can still search. Syntax (`AND`, `OR`, `-exclude`, `"phrase"`): [Default Data Filtering Shortcode](/default-data-filtering-shortcode). Placeholders in it need Pro. |
| `use_parent_width` | off | Make the table use its container's width. |
| `info` | empty | Page-info line after the pagination, for example `info="Page {CP} of {TP}"`. FooTable engine only: it has no effect on DataTables tables. |

### Pro attributes

Pro attributes are ignored when Ninja Tables Pro is not active.

| Attribute | Default | Values | Purpose |
|---|---|---|---|
| `per_page` | table setting | A number | Rows per page. |
| `search` | table setting | `1` or `0` | Show or hide the search box. |
| `sorting` | table setting | `1` or `0` | Turn column sorting on or off. |
| `hide_header` | table setting | `1` or `0` | Hide the header row. |
| `logged_in_only` | off | `1` | Show the table to logged-in visitors only. |
| `columns` | `all` | Comma-separated column keys | Show only these columns. Match the column **key**, not its title. |
| `skip` | `0` | A number | Skip the first rows of the data. |
| `limit` | `0` (no limit) | A number | Show at most this many rows. |
| `filter_column` | none | Comma-separated column keys | Apply `filter` to these columns only. |
| `hide_default_filter` | off | `yes` | Keep rows hidden by `filter` hidden even after a visitor resets the filters. |
| `get_filter` | none | A query-parameter name | Take the filter from the page address, for example `?dept=Sales`. |
| `filter_selects` | none | `Filter title=Value\|Other filter=Value` | Pre-select values in the table's [custom filters](/custom-filters). |
| `sf_filter` | none | Text or a placeholder | A locked filter value visitors can't clear. Needs `sf_column`. |
| `sf_column` | none | A column key | The column the locked filter applies to. |
| `sf_match` | `equal` | `equal`, `contains`, `lt`, `gt`, `startswith` | How `sf_filter` is compared with the cell. |
| `stackable` | off | `yes` | Stack rows as cards for this embed. |
| `stack_devices` | `xs,sm` | `xs`, `sm`, `md`, `lg` | Devices that get cards when `stackable` is on. |
| `post_tax` | none | `taxonomy=term,term\|taxonomy2=term` | Filter a WP Posts or WooCommerce table by taxonomy terms. |
| `post_tax_field` | `slug` | `slug`, `name`, `term_id` | How the terms in `post_tax` are matched. |
| `disable_edit` | `no` | `yes` | Turn off [frontend editing](/frontend-editing) for this embed. Applies to tables with built-in rows. |

::: warning Use 1 and 0, not "false" or "no"
`search`, `sorting` and `hide_header` turn on for any value except `0` or an empty value. Writing `search="false"` or `hide_header="no"` turns the feature **on**, not off. Always use `1` to turn on and `0` to turn off.
:::

Details that are easy to miss:

- `sf_match="lt"` and `"gt"` compare the cell with the filter value as PHP does, so keep both in the same format (for dates, the same date format). `contains` and `startswith` are case-sensitive.
- `logged_in_only` renders nothing for logged-out visitors. Logged-in visitors see the table as usual.
- `get_filter` can be combined with a `column` address parameter, and `filter_selects` can be overridden from the address. See [Advanced Shortcode](/advanced-shortcode).
- `sf_filter` hides rows from view only in Ajax rendering; the rest of the data is still sent to the browser.

If you need to rename the shortcode tag or add your own attributes, see the rendering hooks in [Hooks & Filters](/hooks-and-filters).

## `[ninja_table_builder]`

Shows a [Drag & Drop table](/how-to-create-your-first-drag-and-drop-table-with-ninja-tables). Its only attribute is `id`. Copy it from the shortcode chip in the builder. The table must be published, or nothing is printed. Logged-in table admins also see an **Edit Table** link below the table.

## `[ninja_table_info]`

Prints one detail of a table inside any content.

| Attribute | Values |
|---|---|
| `id` | Table ID. The table must be published, otherwise the text `Error: Invalid table ID.` is printed. |
| `field` | `title`, `description`, `total_rows`, `last_modified` or `last_editor`. |

- `total_rows` counts rows only for tables that store their own rows; other sources print nothing.
- `last_modified` is the time the table was last saved.
- `last_editor` is the display name of the last editor, or the table author if there is none.

## `[ninja_table_cell]`

Prints the value of one cell.

| Attribute | Values |
|---|---|
| `id` | Table ID. The table must be published, otherwise it prints "Sorry! The table is not available." |
| `row_id` | The row's ID, for tables that store their own rows. |
| `row` | The row's position (1 is the first row), for tables that read rows from elsewhere (WP Posts, CSV, Google Sheets and so on). |
| `column` | The column key. A number also works and picks the column by its position. |

A cell that itself contains a `[ninja_table_cell]` shortcode is resolved up to 5 levels deep.

## Shortcodes inside table cells

Any shortcode you type into a cell, including `[nt_ratings]` and `[nt_icon]`, runs only for tables whose rows are stored in Ninja Tables (typed in, imported or edited on the front end). Tables that read their rows from another source, such as Fluent Forms entries, show the shortcode text as it is. This stops values from outside sources from running code on your site. Developers can change the list of trusted sources with the `ninja_tables_shortcode_trusted_providers` filter; see [Hooks & Filters](/hooks-and-filters).

## `[nt_ratings]` and `[nt_icon]`

See [Rating & Icon Shortcodes](/rating-icon-shortcodes).

## Placeholders (Pro)

Placeholders are replaced with live values when the page loads. Use them in the `filter` and `sf_filter` shortcode attributes, in [conditional formatting](/conditional-formatting) and [Transform value](/transform-value) rules, and in the values and presets of [custom filters](/custom-filters).

| Placeholder | Becomes |
|---|---|
| `{date:FORMAT}` | Today's date in a [moment.js-style format](https://momentjs.com/docs/#/displaying/format/), for example `{date:YYYY-MM-DD}`. Without a format it is `Y-m-d`. |
| `{date+N:FORMAT}` | The date N days from now, for example `{date+7:YYYY-MM-DD}`. |
| `{date-N:FORMAT}` | The date N days ago, for example `{date-30:M/D/YYYY}`. |
| `{date:timestamp}` | The current Unix timestamp. |
| `{user:FIELD}` | A field of the logged-in user, for example `{user:ID}`, `{user:user_email}`, `{user:display_name}`. |
| `{usermeta:KEY}` | A user meta value of the logged-in user, for example `{usermeta:billing_city}`. |
| `{current_user_role}` | The logged-in user's role(s), comma-separated. |
| `{current_post_id}` | The ID of the page or post showing the table. |
| `{current_post_title}` | The title of that page or post. |
| `{gt}` or `{greater}` | `>` (greater than). |
| `{lt}` or `{lesser}` | `<` (less than). |

For logged-out visitors, `{user:...}` and `{usermeta:...}` are empty.

::: warning
`{current_user_role}` returns nothing for logged-out visitors, and then the **whole** value it is part of is emptied, not just the placeholder. Don't combine it with other filter text if logged-out visitors can see the table.
:::

### Examples

Show only the logged-in user's own rows, where the `email` column holds the user's email:

```
[ninja_tables id="123" sf_column="email" sf_filter="{user:user_email}"]
```

Show rows with a `date` column in the last 7 days:

```
[ninja_tables id="123" filter="~{date-7:YYYY-MM-DD}:{date:YYYY-MM-DD}" filter_column="date"]
```

Custom SQL tables have their own placeholders (`{prefix}`, `{current_user_id}` and others); see [Custom SQL Query](/create-table-from-custom-sql). To run the placeholder parser from your own code, see the `ninja_parse_placeholder` filter in [Hooks & Filters](/hooks-and-filters).

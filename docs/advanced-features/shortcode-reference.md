---
title: "Shortcode Reference"
description: "Every Ninja Tables shortcode and placeholder in one place, with its attributes and whether it needs Pro."
---

# Shortcode Reference

This page lists every shortcode Ninja Tables provides, and the placeholders you can use inside shortcode filters. Follow the links for examples and details.

## Shortcodes

| Shortcode | What it shows | Free / Pro |
|---|---|---|
| `[ninja_tables id="123"]` | A table. | Free (most attributes are Pro) |
| `[ninja_table_builder id="123"]` | A Drag & Drop table. | Free |
| `[ninja_table_info id="123" field="title"]` | A detail about a table. | Free |
| `[ninja_table_cell id="123" row_id="45" column="price"]` | The value of one cell. | Free |
| `[nt_ratings value="4"]` | A star rating, for use in cells. | Pro |
| `[nt_icon icon="check"]` | An icon, for use in cells. | Pro |

### `[ninja_tables]`

| Attribute | Purpose | Free / Pro |
|---|---|---|
| `id` | Table ID (required). | Free |
| `filter` | Show only matching rows. | Free |
| `use_parent_width` | Use the container's width. | Free |
| `info` | Page-info line, e.g. `Page {CP} of {TP}`. | Free |
| `per_page`, `search`, `sorting`, `hide_header`, `logged_in_only` | Override display settings for this embed. | Pro |
| `columns`, `skip`, `limit` | Choose which columns and rows to show. | Pro |
| `filter_column`, `hide_default_filter`, `get_filter`, `filter_selects` | Control filtering. | Pro |
| `sf_filter`, `sf_column`, `sf_match` | A locked filter visitors can't clear. | Pro |
| `stackable`, `stack_devices` | Stack rows as cards on chosen devices. | Pro |
| `post_tax`, `post_tax_field` | Filter WP Posts / WooCommerce tables by taxonomy. | Pro |
| `disable_edit` | Turn off frontend editing for this embed. | Pro |

Values, defaults and examples: [Advanced Shortcode](/advanced-shortcode). Filter syntax (`AND`, `OR`, `-exclude`, `"phrase"`): [Default Data Filtering Shortcode](/default-data-filtering-shortcode).

### `[ninja_table_builder]`

Shows a [Drag & Drop table](/how-to-create-your-first-drag-and-drop-table-with-ninja-tables). Its only attribute is `id`. Copy it from the shortcode chip in the builder. Save the table in the builder at least once before embedding it.

### `[ninja_table_info]`

| Attribute | Values |
|---|---|
| `id` | Table ID. |
| `field` | `title`, `description`, `total_rows` (tables that store their own rows only), `last_modified` or `last_editor`. |

### `[ninja_table_cell]`

| Attribute | Values |
|---|---|
| `id` | Table ID. |
| `row_id` | The row's ID, for tables that store their own rows. |
| `row` | The row's position, for tables that read rows from elsewhere (WP Posts, CSV, Google Sheets…). |
| `column` | The column key. |

A cell that itself contains a `[ninja_table_cell]` shortcode is resolved up to 5 levels deep.

### `[nt_ratings]` and `[nt_icon]`

See [Rating & Icon Shortcodes](/rating-icon-shortcodes).

## Placeholders (Pro)

Placeholders are replaced with live values when the page loads. Use them in the `filter` and `sf_filter` shortcode attributes, and in [conditional formatting](/conditional-formatting) and [Transform value](/transform-value) rules.

| Placeholder | Becomes |
|---|---|
| `{date:FORMAT}` | Today's date in a [moment.js-style format](https://momentjs.com/docs/#/displaying/format/), e.g. `{date:YYYY-MM-DD}`. |
| `{date+N:FORMAT}` | The date N days from now, e.g. `{date+7:YYYY-MM-DD}`. |
| `{date-N:FORMAT}` | The date N days ago, e.g. `{date-30:M/D/YYYY}`. |
| `{date:timestamp}` | The current Unix timestamp. |
| `{user:FIELD}` | A field of the logged-in user, e.g. `{user:ID}`, `{user:user_email}`, `{user:display_name}`. |
| `{usermeta:KEY}` | A user meta value of the logged-in user, e.g. `{usermeta:billing_city}`. |
| `{current_user_role}` | The logged-in user's role(s), comma-separated. |
| `{current_post_id}` | The ID of the page or post showing the table. |
| `{current_post_title}` | The title of that page or post. |
| `{gt}` or `{greater}` | `>` (greater than). |
| `{lt}` or `{lesser}` | `<` (less than). |

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

Custom SQL tables have their own placeholders (`{prefix}`, `{current_user_id}` and others); see [Custom SQL Query](/create-table-from-custom-sql).

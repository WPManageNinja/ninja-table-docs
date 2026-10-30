---
title: "Default Data Filtering Shortcode"
description: "Show only matching rows by adding a filter to the table shortcode, with AND, OR, exclude and exact-phrase rules."
---

# Default Data Filtering Shortcode

The **default data filtering shortcode** shows only the rows you want, by adding a `filter` to the table shortcode. Visitors see the filtered rows as soon as the page loads, without searching. The `filter` attribute is part of the free version.

For example, if a table lists hundreds of movies and one page should only show adventure films, add `filter="Adventure"` to that page's shortcode. Visitors can still use the [search box](/add-or-remove-search-or-filter-functionality) on top of the filter.

## Add a filter to a shortcode

1. Go to **Ninja Tables** › **Tables** and copy the table's shortcode from the list or from the editor header.
2. Paste it into your page and add a `filter` attribute. Replace `TABLEID` with your table's ID.
3. Update the page and open it to check the rows.

```
[ninja_tables id="TABLEID" filter="john smith"]
```

The filter looks at every column, unless you limit it (see below). The rules in the next section are FooTable search rules. On a DataTables table, the whole `filter` text is matched as one piece of text that a cell contains, so use a single word or phrase there.

<!-- TODO(screenshot): default-data-filtering-shortcode-1
  screen: A page with the Order History table and filter="Shipped" in its shortcode
  table: Order History
  state: Page showing only the rows that contain the filter word, search box empty
  highlight: -
  view: frontend
  alt: Table on a page showing only the rows that match the shortcode filter
-->

## Filter rules

### Simple

```
[ninja_tables id="TABLEID" filter="john smith"]
```

This shows the rows which contain **john** **smith**.

### AND

Make a query more specific by separating additional parts with a capitalized ***AND*** string.

```
[ninja_tables id="TABLEID" filter="john AND smith"]
```

This matches all rows containing both **john** **AND** **smith**.

### OR

Expand a query by separating additional parts with a capitalized ***OR*** string.

```
[ninja_tables id="TABLEID" filter="john OR smith"]
```

This matches all rows containing **john** or **smith**.

### Negate

Exclude a value from the results by prefixing it with a minus ***-*** sign.

```
[ninja_tables id="TABLEID" filter="john -smith"]
```

This matches all rows containing the word **john** but excludes any containing **smith**.

### Phrases

Match an exact word or phrase by wrapping it in quotes (" ").

```
[ninja_tables id="TABLEID" filter='"brown fox"']
```

This matches all rows containing the exact phrase **brown fox**.

## Limit the filter to some columns (Pro)

Add `filter_column` with the column keys, separated by commas, to apply the filter to those columns only:

```
[ninja_tables id="TABLEID" filter="Sales" filter_column="department"]
```

## Take the filter from the link (Pro)

Set `get_filter` to the name of a link parameter, and the value in the link becomes the filter. A link ending in `?dept=Sales` filters the table by Sales:

```
[ninja_tables id="TABLEID" get_filter="dept"]
```

Adding `&column=department,office` to the link replaces `filter_column` for that visit. Without the `dept` parameter, the table shows the shortcode's own `filter`, if any.

## Use live values (Pro)

Placeholders in the `filter` text, such as `{current_user_role}` or `{date:Y-m-d}`, are replaced when the page loads. See [Placeholders](/shortcode-reference).

## Related

- All shortcode options, including `hide_default_filter`, `filter_selects` and locked column filters with `sf_filter`: [Advanced Shortcode](/advanced-shortcode).
- Let visitors filter with dropdowns and ranges instead: [Custom Filters](/custom-filters).

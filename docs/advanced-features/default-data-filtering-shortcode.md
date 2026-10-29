---
title: "Default Data Filtering Shortcode"
description: "Show only matching rows by adding a filter to the table shortcode, with AND, OR, exclude and exact-phrase rules."
---

# Default Data Filtering Shortcode

The **default data filtering shortcode** shows only the rows you want, by adding a `filter` to the table shortcode. Visitors see the filtered rows as soon as the page loads, without searching. It works on both the FooTable and DataTables engines and is available in the free version.

For example, if a table lists hundreds of movies and one page should only show adventure films, add `filter="Adventure"` to that page's shortcode. Visitors can still use the [search box](/add-or-remove-search-or-filter-functionality) on top of the filter.

## Usage

Copy the table's shortcode from the table editor or the Tables list and add a `filter` attribute. Replace `TABLEID` with your table's ID.

### Simple

```
[ninja_tables id="TABLEID" filter="john smith"]
```

This will show the rows which contain **john** **smith**.

### AND

Make a query more specific by separating additional parts with a capitalized ***AND*** string.

```
[ninja_tables id="TABLEID" filter="john AND smith"]
```

This would match all rows containing both **john** **AND** **smith**.

### OR

Expand a query by separating additional parts with a capitalized ***OR*** string.

```
[ninja_tables id="TABLEID" filter="john OR smith"]
```

This would match all rows containing **john** or **smith**.

### Negate

Exclude a value from the results by prefixing it with a minus ***-*** sign.

```
[ninja_tables id="TABLEID" filter="john -smith"]
```

This would match all rows containing the word **john** but would exclude any containing **smith**.

### Phrases

Match an exact word or phrase by wrapping it in quotes (" ").

```
[ninja_tables id="TABLEID" filter='"brown fox"']
```

The above query would match all rows containing the exact phrase **brown fox**.

## Related

- More shortcode options, such as `columns`, `per_page` and locked column filters with `sf_filter` (Pro): [Advanced Shortcode](/advanced-shortcode).
- Let visitors filter with dropdowns and ranges instead: [Custom Filters](/custom-filters).

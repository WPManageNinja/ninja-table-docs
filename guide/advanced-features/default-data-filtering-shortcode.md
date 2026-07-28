---
title: "Default Data Filtering Shortcode"
description: "Default Data Filtering Shortcode"
---

# Default Data Filtering Shortcode

Default Data Filtering Shortcode feature allows you to quickly and easily display just the rows you want to show by providing a simple filter text in the table shortcode. In this case, you should filter the data created earlier in the table.
Default Data Filtering Shortcode is a Pro Feature!
For instance, say you have a table with lots of movie data, and you want to show the rows that only contain Adventure. This can be previously done in only one possible way- your user had to search for **Adventure** movies manually, given that you have allowed the**[ Search / Filter ](https://ninjatables.com/docs/add-or-remove-search-or-filter-functionality/)**options in your table.
However, the **Default Data Filtering** feature allows you as an admin to set default filtering options in a table containing a huge amount of data.

## Data Filtering Shortcode Usage

Regarding this, we also included more practical features. Please double-check the usage.

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

This would match all rows containing both **john OR smith**.

### Negate

Exclude a value from the results by prefixing it with a minus ***-*** sign.

```
[ninja_tables id="TABLEID" filter="john -smith"]
```

This would match all rows containing the word **john** but would exclude any containing **smith**.

Make a query more specific by separating additional parts with a capitalized ***AND*** string.

### Phrases

Match an exact word or phrase by wrapping it in quotes (" ").

```
[ninja_tables id="TABLEID" filter='"brown fox"']
```

The above query would match all rows containing the exact phrase **brown fox**.

You can quickly use your site's standard data filtering shortcode by reading this article!

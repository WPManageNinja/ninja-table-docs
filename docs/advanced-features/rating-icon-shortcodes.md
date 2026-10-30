---
title: "Rating & Icon Shortcodes"
description: "Show star ratings and small icons inside table cells with the [nt_ratings] and [nt_icon] shortcodes (Pro)."
---

# Rating & Icon Shortcodes

Ninja Tables Pro includes two small shortcodes for table cells: **`[nt_ratings]`** draws a star rating, and **`[nt_icon]`** repeats an icon. Type them straight into a cell, or build them with [Transform value](/transform-value) from another column.

::: tip Shortcodes in cells run only for trusted sources
Shortcodes typed into a cell run for tables whose rows are stored in Ninja Tables (typed in, imported or edited on the front end). Tables that read their rows from another source, such as Fluent Forms entries, show the shortcode text as it is. See [Shortcode Reference](/shortcode-reference).
:::

## Star ratings: `[nt_ratings]`

```
[nt_ratings value="4" max="5"]
```

Shows 4 filled stars followed by 1 empty star.

| Attribute | What it does | Default |
|---|---|---|
| `value` | The number of filled stars (whole numbers). | `5` |
| `max` | The total number of stars. If `value` is higher, `max` grows to match. | `5` |
| `color` | Color of the filled stars. | `#ffcc00` |
| `alt_color` | Color of the empty stars. | `#dddddd` |

The rating value is also written into the cell as hidden text, so the column still sorts and searches by the number. Only whole numbers count; a value like `3.5` is read as 3.

<!-- TODO(screenshot): rating-icon-shortcodes-1
  screen: Front end, a table with a rating column
  table: Course Catalog
  state: Rating column showing star ratings from 1 to 5
  highlight: -
  view: frontend
  alt: Table column showing star ratings drawn by the nt_ratings shortcode
-->

### Example: rating from another column

If a column with the key `score` holds a number from 1 to 5, add a **Rating** column and set its [Transform value](/transform-value) to:

```
[nt_ratings value="{{row.score}}" max="5" color="#f5a623"]
```

## Icons: `[nt_icon]`

```
[nt_icon icon="check" number="1" color="green"]
```

| Attribute | What it does | Default |
|---|---|---|
| `icon` | The icon name (see the list below). Nothing is shown if the name is empty or not in the list. | `star` |
| `number` | How many times to repeat the icon. | `1` |
| `color` | Icon color, as a name or hex code. | `black` |

Each icon is drawn about 20 pixels wide. The icon name is also written into the cell as hidden text. Available icons: `star`, `star-o`, `check`, `remove`, `remove-outline`, `add-outline`, `cart-outline`, `bag-handle`, `search-outline`, `pencil-sharp`, `trash-sharp`, `refresh-outline`, `caret-up-outline`, `caret-down-outline`, `caret-up-down-outline` and `loading`.

### Example: yes/no column

A plan comparison table can show a green check for included features and a grey cross for the rest. Put one of these in each cell:

```
[nt_icon icon="check" color="#2e7d32"]
[nt_icon icon="remove" color="#9e9e9e"]
```

See the [Shortcode Reference](/shortcode-reference) for every Ninja Tables shortcode.

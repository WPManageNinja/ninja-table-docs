---
title: "Rating & Icon Shortcodes"
description: "Show star ratings and small icons inside table cells with the [nt_ratings] and [nt_icon] shortcodes (Pro)."
---

# Rating & Icon Shortcodes

Ninja Tables Pro includes two small shortcodes for table cells: **`[nt_ratings]`** draws a star rating, and **`[nt_icon]`** repeats an icon. Type them straight into a cell, or build them with [Transform value](/transform-value) from another column.

::: tip
Shortcodes inside cells only run when the table uses **Legacy** rendering (Pro). Set it in **Table Configuration** › **Rendering Setting**. See [Engine, Rendering & Caching](/table-rendering-settings).
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

The rating value is also written into the cell as hidden text, so the column still sorts and searches by the number.

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
| `icon` | The icon name (see the list below). | `star` |
| `number` | How many times to repeat the icon. | `1` |
| `color` | Icon color, as a name or hex code. | `black` |

Available icons: `star`, `star-o`, `check`, `remove`, `remove-outline`, `add-outline`, `cart-outline`, `bag-handle`, `search-outline`, `pencil-sharp`, `trash-sharp`, `refresh-outline`, `caret-up-outline`, `caret-down-outline`, `caret-up-down-outline` and `loading`.

### Example: yes/no column

A plan comparison table can show a green check for included features and a grey cross for the rest:

```
[nt_icon icon="check" color="#2e7d32"]
[nt_icon icon="remove" color="#9e9e9e"]
```

See the [Shortcode Reference](/shortcode-reference) for every Ninja Tables shortcode.

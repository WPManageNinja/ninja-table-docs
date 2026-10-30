---
title: "Transform Value"
description: "Combine column values into HTML or an Excel formula and show the result in a column, using the Transform tab of the column dialog (Pro)."
---

# Transform Value

**Transform value** (Pro) builds what a column shows from your row data. You write HTML (or an Excel formula) that pulls in values from any column of the same row, and the result appears in this column. The stored data doesn't change, only what is shown. The **Table Rows** grid shows the transformed result too.

Use it to turn an email address into a link, show an image from a URL, add a unit after a number, or sum two columns.

## Open the Transform tab

1. Go to **Ninja Tables** › **Tables** › your table › **Table Rows**.
2. Click the gear icon on the column that should show the result, and choose **Column settings**.
3. Open the **Transform** tab.

![Transform tab with the value box and reference values](/images/column-settings/transform-value/1.-Transform-Tab-With-The-Value-Box.webp)

The tab has these parts:

- **Transform value box**: where you write your HTML or formula. HTML is filtered for safety when you save.
- **Excel formula support**: a switch that allows formulas such as `=SUM()`.
- **Show supported formulas**: appears when formulas are on. Opens the list of accepted functions.
- **Reference values**: a list of every column with its **Column name** and **Reference shortcode**.

Click **Save column** when you are done. Without Pro, the tab shows **Transform value is a Pro feature** and the box is disabled.

## Reference shortcodes

Each column has a reference shortcode made from its column key, in the form <code v-pre>{{row.column_key}}</code>. For example, a column with the key `email` has the shortcode <code v-pre>{{row.email}}</code>. When the table is shown, each shortcode is replaced with that row's value. The older single-brace form <code v-pre>{row.email}</code> still works.

Click a row in the **Reference values** list to insert its shortcode into the Transform value box at the cursor.

For **Numeric value** columns, thousand separators are removed before the value is put in, so `1,200` becomes `1200`. Values placed in a link or image address (`href`, `src`) are checked for safety and encoded.

You can also use Ninja Tables placeholders such as `{user:display_name}` in the box. They are filled in on the server when the table loads. See [Shortcode reference](/shortcode-reference).

## Example: turn text into a link

Write an anchor tag in the Transform value box and use reference shortcodes for the parts that change. For an Email column:

```html
<a href="mailto:{{row.email}}">{{row.email}}</a>
```

The same idea works for phone numbers (`tel:`), so visitors can call with one click.

<!-- TODO(screenshot): transform-value-2
  screen: Preview of Employee Directory
  table: Employee Directory
  state: Email column showing underlined mailto links produced by Transform value
  highlight: -
  view: frontend
  alt: Email column shown as links on the site
  blocked: needs a saved Transform value on Employee Directory Email column (no saving allowed)
-->

## Excel formulas

Turn on **Excel formula support** to use spreadsheet formulas. Add the reference shortcodes of your columns as the inputs:

```
=SUM({{row.q1}}, {{row.q2}})
```

How formulas are read:

- A formula must start with `=`, as in `=SUM(...)`. Or wrap one or more formulas in `[f]` and `[/f]` inside your HTML, for example <code v-pre>&lt;b&gt;[f]SUM({{row.q1}},{{row.q2}})[/f]&lt;/b&gt; total</code>. Without the `=` or the `[f]` tags, the text is shown as it is.
- If a formula can't be calculated, the cell shows empty.
- Click **Show supported formulas** for the full list, around 385 Excel-style functions such as `SUM`, `IF`, `AVERAGE`, `ROUND`, `CONCATENATE`, `DATE` and `TODAY`. Two extras are added: `NUMVAL` turns text such as `$1,200.50` into a number, and `DATEVAL` turns date text into a date value.
- When you save, a formula that starts with `=` is cleaned: it is cut off at 2,000 characters, and risky strings such as `javascript:`, `<script`, `eval(`, `document.`, `window.` and `fetch(` are removed.

::: warning The formula switch is table-wide and saves at once
**Excel formula support** applies to every column in this table, not only the one you are editing. It also saves the moment you flip it, without waiting for **Save column**. Excel formulas are marked experimental, so not every formula works.
:::

### Example: show a link only for some values

This turns *Female* in a Gender column into a link and leaves other values as they are:

```
=IF("{{row.gender}}"="Female","<a href='https://google.com'>{{row.gender}}</a>","{{row.gender}}")
```

You can use as many `IF` formulas as you need.

### Example: add two columns

1. Make sure the columns you add up have the **Numeric value** type.
2. Open the **Transform** tab of the result column and turn on **Excel formula support**.
3. Enter the formula, using the reference shortcodes of your columns:

```
=SUM({{row.product_1}},{{row.product_2}})
```

4. Click **Save column**.

The result column now shows the sum for every row.

<!-- TODO(screenshot): transform-value-3
  screen: Preview of Monthly Sales by Region 2026
  table: Monthly Sales by Region 2026
  state: A total column showing the sum of two numeric columns for every row
  highlight: -
  view: frontend
  alt: Result column showing the sum of two columns
  blocked: needs a saved SUM formula column on Monthly Sales by Region 2026 (no saving allowed)
-->

For more calculation examples, see [Formulas & calculations](/row-column-data-calculation). To show images and lightboxes from a URL column, see [Image lightbox with Transform](/image-lightbox-using-column-transform-value).

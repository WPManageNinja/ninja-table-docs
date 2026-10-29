---
title: "Transform Value"
description: "Combine column values into HTML or an Excel formula and show the result in a column, using the Transform tab of the column dialog (Pro)."
---

# Transform Value

**Transform value** (Pro) builds what a column shows from your row data. You write HTML (or an Excel formula) that pulls in values from any column of the same row, and the result appears in this column. The stored data doesn't change, only what visitors see.

Use it to turn an email address into a link, show an image from a URL, add a unit after a number, or sum two columns.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/JFno71QQjok" title="Transform Value Video" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Open the Transform tab

1. Go to **Tables** › your table › **Table Rows**.
2. Click the gear icon on the column that should show the result, and choose **Column settings**.
3. Open the **Transform** tab.

![Transform tab in the column dialog](/images/column-settings/transform-value/1.-transform-value-1.webp)

The tab has three parts:

- **Transform value box:** where you write your HTML or formula.
- **Excel formula support:** a switch that allows formulas such as `=SUM()`.
- **Reference values:** a list of every column with its **Reference shortcode**.

Click **Save column** when you are done.

## Reference shortcodes

Each column has a reference shortcode made from its column key, in the form <code v-pre>{{row.column_key}}</code>. For example, a column with the key `email` has the shortcode <code v-pre>{{row.email}}</code>. When the table is shown, each shortcode is replaced with that row's value.

Click a row in the **Reference values** list to insert its shortcode into the Transform value box at the cursor.

![Reference shortcodes](/images/column-settings/transform-value/3.-transform-value-4.webp)

## Excel formula support

Turn on **Excel formula support** to use spreadsheet formulas, for example:

```
=SUM({{row.q1}}, {{row.q2}})
```

Keep in mind:

- This switch **applies to every column in this table**, not only the one you are editing.
- Excel formulas are experimental, so not every formula works yet. Click **Show supported formulas** for the list.

![Show supported formulas](/images/column-settings/transform-value/2.-transform-value-3.webp)

## Example: turn text into a link

Write an anchor tag in the Transform value box and use reference shortcodes for the parts that change. For an Email column:

```html
<a href="mailto:{{row.email}}">{{row.email}}</a>
```

![HTML in the Transform value box](/images/column-settings/transform-value/4.-transform-value-5.webp)

![Email shortcode inside a link](/images/column-settings/transform-value/5.-transform-value-6.webp)

The same idea works for phone numbers, so visitors can call with one click:

![Transform value output](/images/column-settings/transform-value/6.-transform-value-7.webp)

## Example: show a link only for some values

With **Excel formula support** on, you can use `IF`. This turns *Female* in a Gender column into a link and leaves other values as they are:

```
=IF("{{row.gender}}"="Female","<a href='https://google.com'>{{row.gender}}</a>","{{row.gender}}")
```

You can use as many `IF` formulas as you need.

![Excel IF formula](/images/column-settings/transform-value/7.-transform-value-8.webp)

![Link added to some values](/images/column-settings/transform-value/8.-transform-value-9.webp)

## Example: add two columns

1. Make sure the columns you add up, and the result column, have the **Numeric value** type.
2. Open the **Transform** tab of the result column and turn on **Excel formula support**.
3. Enter the formula, using the reference shortcodes of your columns:

```
=SUM({{row.product_1}},{{row.product_2}})
```

4. Click **Save column**.

![Two number columns](/images/column-settings/transform-value/9.-transform-value-10.webp)

![SUM formula](/images/column-settings/transform-value/10.-transform-value-11.webp)

The result column now shows the sum for every row.

![Sum of two columns](/images/column-settings/transform-value/11.-transform-value-12.webp)

For more calculation examples, see [Row and column calculation](/row-column-data-calculation). To show images and lightboxes from a URL column, see [Image lightbox using Transform value](/image-lightbox-using-column-transform-value).

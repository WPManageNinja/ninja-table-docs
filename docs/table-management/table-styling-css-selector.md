---
title: "Custom CSS & JS"
description: "Style one table with your own CSS, run custom JavaScript after it loads, and find the CSS selectors for its header, rows and columns."
---

# Custom CSS & JS

The **Custom CSS/JS** tab lets you style one table with your own CSS, or run your own JavaScript after it loads, without changing your theme or your other tables. Custom CSS is free; **Custom JS** is a Pro feature. This page also lists the CSS selectors you need.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/pFVKabaY9Tw" title="Custom CSS Styling Video" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Open the Custom CSS/JS tab

1. Go to **Ninja Tables** › **Tables** and open a table.
2. Click the **Custom CSS/JS** tab.

![Custom CSS settings](/images/table-management/table-styling-css-selector/1.-06.webp)

### Custom CSS

Write your CSS in the editor and click **Save Custom CSS**. Don't include `<style></style>` tags.

To target only this table, start each rule with the table's selector, shown in the tab (click it to copy):

- FooTable tables: `#footable_parent_<ID>`, for example `#footable_parent_353`.
- DataTables tables: `#ninja_dt_parent_<ID>`.

You can also write `NT_ID` instead of the number, for example `#footable_parent_NT_ID`; it is replaced with the table's ID automatically.

### Custom JS (Pro)

Add a script that runs once the table has finished rendering, then click **Save Custom JS**. Don't include `<script></script>` tags. Two variables are ready to use:

- `$table`: the table element (jQuery).
- `tableConfig`: the table's settings.

```js
// Highlight a row when it is clicked
$table.on('click', 'tbody tr', function () {
    jQuery(this).toggleClass('is-picked');
});
```

Broken code can break the table, so test it on a page you can safely reload.

### Table targeting

- **Custom CSS class**: a class added to the table element, so you can style it from your theme. Use letters, numbers, dashes and underscores.
- **Table selector**: the selector for this table, with a **Copy CSS** button.

You can also add CSS anywhere else you like, such as your theme's stylesheet or **Appearance** › **Customize** › **Additional CSS** in WordPress.

::: tip
The examples below use the FooTable selector `#footable_parent_353`. Replace `353` with your table's ID.
:::

## Table Structure

Every table gets CSS classes and an HTML ID you can use for styling. In the examples, the table ID is **353**.

## Styling Table Header

- To Style the table header, you need the following CSS selector:

**`#footable_parent_353 table.ninja_table_pro > thead`**

- To select the contents, the CSS selector will be:

**`#footable_parent_353 table.ninja_table_pro > thead > tr > th`**

- Let's assume that you want to make the CSS table header's background color **black** and text color **white.** Then you have to write the following CSS:

```css
#footable_parent_353 table.ninja_table_pro thead {
    background-color: black;
    color: white;
    /* Write More css properties if you want */
}
#footable_parent_353 table.ninja_table_pro thead tr th {
    color: white;
    /* Write More css properties if you want */
}
```

- Now, If you want to control the font size, and font style of table column heading text, then you have to write the following CSS:

```css
#footable_parent_353 table.ninja_table_pro thead tr th {
    color: white;
    font-size: 20px;
    font-weight: bold;
    font-style: italic;
    /* Write More css properties if you want */
}
```

- Please note that **353** is the table ID. So you have to replace that with your table ID.

## Styling Table Rows

- To apply CSS to the table rows, the CSS selector will be:

```css
/* Select Table Rows */
#footable_parent_353 table.ninja_table_pro tbody tr {
    background-color: black;
    color: white;
    /* Write More css properties if you want */
}
/*Select Table row cell */
#footable_parent_353 table.ninja_table_pro tbody tr td {
    color: white;
    font-size: 18px;
    /* Write More css properties if you want */
}
```

- To Select Odd/Even Rows, you have to write the following CSS:

```css
/* Select Table EVEN Rows */
#footable_parent_353 table.ninja_table_pro tbody tr:nth-child(even) {
    background-color: black;
    color: white;
}
/* Select Table ODD Rows */
#footable_parent_353 table.ninja_table_pro tbody tr:nth-child(odd) {
    background-color: gray;
    color: white;
}
```

- Here is the screenshot of the table by applying some custom CSS:

![Applying custom styling in Ninja Tables](/images/table-management/table-styling-css-selector/2.-table-styling-css-selector-2.webp)

## Styling Specific Column

- Styling specific columns is easy too. Each column's cells have a common CSS class. It's like `ninja_column_ColumnIndex`. Please note that `ColumnIndex` starts from 0. So if you want to select the first column, then the CSS will be:

```css
/* Select The 1st Column */
#footable_parent_353 table.ninja_table_pro .ninja_column_0 {
    font-weight: bold;
    font-style: italic;
}
/*Select The 3rd Column  */
#footable_parent_353 table.ninja_table_pro .ninja_column_2 {
    font-weight: bold;
    font-style: italic;
}
```

- You can also give a column its own class: open the column's settings in **Table Rows**, go to the **Advanced** tab and fill in **Extra classes** (Pro). See [Advanced Column Options](/advanced-settings).

## Making the search bar center aligned

- You can set the search box position in **Appearance** › **Search** (Pro). With CSS, center it like this:

```css
#footable_parent_353 table.ninja_table_pro tr.footable-filtering form {
    text-align: center;
}
```

- To Make it left-aligned, please use the following CSS:

```css
#footable_parent_353 table.ninja_table_pro tr.footable-filtering form {
    text-align: left;
}
```

- If you want to apply this style for all the tables, then just remove `#footable_parent_353` from the CSS.

If you want to apply your CSS to all of your tables, then you have to replace **`#footable_parent_353`** with **`.footable_parent.ninja_table_wrapper`**

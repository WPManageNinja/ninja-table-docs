---
title: "Custom CSS & JS"
description: "Style one table with your own CSS, run custom JavaScript after it loads, and find the CSS selectors for its header, rows and columns."
---

# Custom CSS & JS

The **Custom CSS/JS** tab lets you style one table with your own CSS, or run your own JavaScript after it loads, without changing your theme or your other tables. Custom CSS is free; **Custom JS** is a Pro feature. This page also lists the CSS selectors you need.

Drag & Drop tables don't use this tab. They have their own **Custom JS** setting in the builder; see [Drag & Drop Table Settings](/ninja-tables-drag-and-drop-table-settings).

## Open the Custom CSS/JS tab

1. Go to **Ninja Tables** › **Tables** and open a table.
2. Click the **Custom CSS/JS** tab.

<!-- TODO(screenshot): table-styling-css-selector-1
  screen: Tables › Employee Directory › Custom CSS/JS
  table: Employee Directory
  state: CSS pane open with a short rule in the editor, Table targeting card on the right
  highlight: CSS / JavaScript switch
  view: admin
  alt: Custom CSS/JS tab with the CSS editor and the Table targeting card
-->

The card has a **CSS** and a **JavaScript** switch at the top. The **Save** button at the bottom saves the CSS, the JavaScript and the **Custom CSS class** together, so whichever pane you are on, you will not lose the other.

### Custom CSS

Write your CSS in the editor and click **Save Custom CSS**. Don't include `<style></style>` tags.

To target only this table, start each rule with the table's selector, shown above the editor (click it to copy):

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

Broken code can break the table, so test it on a page you can safely reload. Without Ninja Tables Pro, the pane shows an upgrade panel (**Unlock custom JavaScript**) and nothing is saved for JavaScript.

<!-- TODO(screenshot): table-styling-css-selector-2
  screen: Tables › Employee Directory › Custom CSS/JS › JavaScript
  table: Employee Directory
  state: JavaScript pane with the sample click script in the editor
  highlight: Save Custom JS
  view: admin
  alt: JavaScript pane of the Custom CSS/JS tab with a sample script
-->

### Table targeting

- **Custom CSS class**: a class added to the table so you can style it from your theme. Use letters, numbers, dashes and underscores; other characters are removed as you type. On FooTable it is added to the table itself, on DataTables to the outer wrapper.
- **Table selector**: a ready-made selector for this table with your class, and a **Copy CSS** button.

<!-- TODO(screenshot): table-styling-css-selector-3
  screen: Tables › Employee Directory › Custom CSS/JS › Table targeting
  table: Employee Directory
  state: Custom CSS class set to my-custom-table and the Table selector example showing
  highlight: Copy CSS
  view: admin
  alt: Table targeting card with the Custom CSS class field and the selector example
-->

You can also add CSS anywhere else you like, such as your theme's stylesheet or **Appearance** › **Customize** › **Additional CSS** in WordPress.

::: tip
The examples below use the FooTable selector `#footable_parent_353`. Replace `353` with your table's ID. For a DataTables table, use `#ninja_dt_parent_353` for the wrapper and `#ninja_dt_353` for the table; see the end of this page.
:::

## Table Structure

Every table gets CSS classes and an HTML ID you can use for styling. In the examples, the table ID is **353**. The selectors in this section are for the FooTable engine.

## Styling Table Header

- To Style the table header, you need the following CSS selector:

**`#footable_parent_353 table.foo-table > thead`**

- To select the contents, the CSS selector will be:

**`#footable_parent_353 table.foo-table > thead > tr > th`**

- Let's assume that you want to make the CSS table header's background color **black** and text color **white.** Then you have to write the following CSS:

```css
#footable_parent_353 table.foo-table thead {
    background-color: black;
    color: white;
    /* Write More css properties if you want */
}
#footable_parent_353 table.foo-table thead tr th {
    color: white;
    /* Write More css properties if you want */
}
```

- Now, If you want to control the font size, and font style of table column heading text, then you have to write the following CSS:

```css
#footable_parent_353 table.foo-table thead tr th {
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
#footable_parent_353 table.foo-table tbody tr {
    background-color: black;
    color: white;
    /* Write More css properties if you want */
}
/*Select Table row cell */
#footable_parent_353 table.foo-table tbody tr td {
    color: white;
    font-size: 18px;
    /* Write More css properties if you want */
}
```

- To Select Odd/Even Rows, you have to write the following CSS:

```css
/* Select Table EVEN Rows */
#footable_parent_353 table.foo-table tbody tr:nth-child(even) {
    background-color: black;
    color: white;
}
/* Select Table ODD Rows */
#footable_parent_353 table.foo-table tbody tr:nth-child(odd) {
    background-color: gray;
    color: white;
}
```

- This is how a table looks after applying some custom CSS:

<!-- TODO(screenshot): table-styling-css-selector-4
  screen: A page showing the Product Price List table with custom header and row colors
  table: Product Price List
  state: Black header with white text and alternating black and gray rows
  highlight: -
  view: frontend
  alt: Table on a page styled with custom CSS for the header and rows
-->

## Styling Specific Column

- Styling specific columns is easy too. Each column's cells have a common CSS class. It's like `ninja_column_ColumnIndex`. Please note that `ColumnIndex` starts from 0. So if you want to select the first column, then the CSS will be:

```css
/* Select The 1st Column */
#footable_parent_353 table.foo-table .ninja_column_0 {
    font-weight: bold;
    font-style: italic;
}
/*Select The 3rd Column  */
#footable_parent_353 table.foo-table .ninja_column_2 {
    font-weight: bold;
    font-style: italic;
}
```

- You can also give a column its own class: open the column's settings in **Table Rows**, go to the **Advanced** tab and fill in **Extra classes** (Pro). See [Advanced Column Options](/advanced-settings).

## Making the search bar center aligned

- You can set the search box position in **Appearance** › **Features** › **Search** (Pro). With CSS, center it like this:

```css
#footable_parent_353 table.foo-table tr.footable-filtering form {
    text-align: center;
}
```

- To Make it left-aligned, please use the following CSS:

```css
#footable_parent_353 table.foo-table tr.footable-filtering form {
    text-align: left;
}
```

- If you want to apply this style for all the tables, then just remove `#footable_parent_353` from the CSS.

If you want to apply your CSS to all of your FooTable tables, then you have to replace **`#footable_parent_353`** with **`.footable_parent.ninja_table_wrapper`**

## DataTables selectors

DataTables tables use different IDs and classes. In the examples, the table ID is **353**:

- Wrapper around the whole table: `#ninja_dt_parent_353`
- The table: `#ninja_dt_353` (also the class `.ninja-dt-table`)
- Header cells: `#ninja_dt_353 thead th`
- Rows and cells: `#ninja_dt_353 tbody tr` and `#ninja_dt_353 tbody td`
- A column: `#ninja_dt_353 td.ninja_column_0`, where the number starts at 0, as for FooTable

```css
/* Header with a black background and white text */
#ninja_dt_353 thead th {
    background-color: black;
    color: white;
}
/* Even rows in gray */
#ninja_dt_353 tbody tr:nth-child(even) {
    background-color: #eee;
}
```

To style every DataTables table, use `.ninja-tables-dt-wrapper` in place of `#ninja_dt_parent_353`.

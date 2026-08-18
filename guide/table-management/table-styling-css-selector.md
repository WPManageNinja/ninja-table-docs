---
title: "Table Styling & CSS Selector"
description: "Table Styling & CSS Selector"
---

# Table Styling & CSS Selector

Ninja Tables already has a ton of built-in styling options ranging from background color to the text color of your tables. Styling tables in Ninja Tables using CSS selector is an advanced functionality.

You can also specify the table header text styling, i.e. position, HTML content of the table header, column width, custom CSS classes, etc.

> [!Note]
> Table Styling & CSS Selector is a Ninja Tables Pro feature.

![Ninja Tables Advanced Settings](/images/table-management/table-styling-css-selector/1.-06.webp)

Sometimes you may need to add advanced styling for your tables. This article will explain to you how to style your tables and make them more beautiful with your existing theme.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/pFVKabaY9Tw" title="Custom CSS Styling Video" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Table Structure

- Every table gets certain CSS classes and an HTML ID that can be used for styling.

- Add your styling commands to your theme's CSS file or, **Appearance →** **Customize →** **Additional CSS** or, your preferred method to add custom CSS to your site.

- Where the table ID is **353,** and If you want to select a specific table to style, you need that table ID.

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

- You can also add an extra CSS class from the column editor **→** Advanced Settings; then you can select the CSS class and add your styles.

## Making the search bar center aligned

- By default, the search bar is right-aligned, but if you want to make it centered and aligned, use the following CSS:

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

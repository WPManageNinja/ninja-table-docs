---
title: "Advanced Settings"
description: "Set a column's alignment, width, CSS classes, colors, sorting, search, click-to-copy and header HTML in the Advanced tab of the column dialog."
---

# Advanced Settings

The **Advanced** tab of the column dialog fine-tunes how a column looks and behaves on your site. Text alignment and **Click to copy** are free. Column width, extra classes, colors, the Sortable and Searchable switches and HTML header content are Pro.

To open it, go to **Tables** › your table › **Table Rows**, click the gear icon on a column header, choose **Column settings**, then open the **Advanced** tab. Click **Save column** when you are done.

![Advanced tab of the column dialog](/images/column-settings/advanced-settings/1.-advanced-settings-3.webp)

The tab is split into four groups: Display, Colors, Behavior and Header.

## Display

### Header text align

Aligns the column heading. Choose **Default**, **Center**, **Left**, **Right**, **Justify**, **Start** or **End**.

### Content text align

Aligns the cells under the heading. Choose **Default**, **Center**, **Left** or **Right**.

### Column width (Pro)

Sets the width of the column in **px** or **%**. Leave it empty to size the column automatically.

### Extra classes (Pro)

Adds one or more CSS classes to every cell in this column, for example `price-col`. Separate several classes with a space. Then style them in the table's **Custom CSS/JS** tab:

1. Type a class name in **Extra classes**, for example `test`, and click **Save column**.
2. Open the **Custom CSS/JS** tab, add your CSS for `.test`, and click **Save Custom CSS**.

![Custom CSS for an extra class](/images/column-settings/advanced-settings/2.-css-in-advanced-settings.webp)

![Column styled with an extra class](/images/column-settings/advanced-settings/3.-advanced-settings-6.webp)

See [Style a table with CSS selectors](/table-styling-css-selector) for the selector to use.

## Colors (Pro)

Set a **Background color** and a **Text color** for the whole column on your site.

![Column with custom colors](/images/column-settings/advanced-settings/4.-color-customized-column.webp)

To color single rows or cells instead, see [Row and cell colors](/tables-row-color).

## Behavior

### Sortable (Pro)

When on, visitors can click the heading to sort the table by this column. Turn it off to stop sorting on this column only. Sorting for the whole table is set in **Appearance** › **Sorting**. See [Sorting](/sorting).

### Searchable (Pro)

When on, this column is included when visitors use the search box. Turn it off to leave the column out of search results.

### Click to copy

When on, visitors can click a cell in this column to copy its value. Useful for coupon codes, phone numbers or IDs.

## Header

### HTML header content (Pro)

Turn this on to show HTML in the column heading instead of the plain name, such as an icon, a line break or a link. Add your content in the **Header HTML content** editor that appears.

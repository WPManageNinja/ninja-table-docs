---
title: "Advanced Settings"
description: "Set a column's alignment, width, CSS classes, colors, sorting, search, click-to-copy and header HTML in the Advanced tab of the column dialog."
---

# Advanced Settings

The **Advanced** tab of the column dialog fine-tunes how a column looks and behaves on your site. Text alignment and **Click to copy** are free. Column width, extra classes, colors, the Sortable and Searchable switches and HTML header content are Pro. Without Pro, the tab opens with the note **Advanced column settings are mostly Pro** and an upgrade link.

1. Go to **Ninja Tables** › **Tables** › your table › **Table Rows**.
2. Click the gear icon on a column header and choose **Column settings**.
3. Open the **Advanced** tab.

![Advanced tab of the column dialog](/images/column-settings/advanced-settings/1.-Advanced-Tab-Of-The-Column-Dialog.webp)

The tab is split into four groups: Display, Colors, Behavior and Header.

## Display

- **Header text align**: aligns the column heading. Choose **Default**, **Center**, **Left**, **Right** or **Justify**. **Start** and **End** are in the list but have no effect on your site, on either the FooTable or the DataTables engine, so use **Left** or **Right** instead.
- **Content text align**: aligns the cells under the heading. Choose **Default**, **Center**, **Left** or **Right**.
- **Column width** (Pro): sets the width of the column in **px** or **%**. Leave it empty to size the column automatically.
- **Extra classes** (Pro): adds one or more CSS classes to the heading and every cell in this column, for example `price-col`. Separate several classes with a space. Then style them in the table's **Custom CSS/JS** tab:
  1. Type a class name in **Extra classes**, for example `test`, and click **Save column**.
  2. Open the **Custom CSS/JS** tab, add your CSS for `.test`, and click **Save Custom CSS**.

See [Style a table with CSS selectors](/table-styling-css-selector) for the selector to use. The same class is also what the [rowspan](/rowspan) method relies on.

<!-- TODO(screenshot): advanced-settings-2
  screen: Preview of Product Price List
  table: Product Price List
  state: One column with width 200px, custom background and text colors and a custom extra class visible on the front end
  highlight: -
  view: frontend
  alt: Column with a fixed width and custom styling on the site
  blocked: needs a saved column width, colors and extra class on a demo table (no saving allowed)
-->

## Colors (Pro)

Set a **Background color** and a **Text color** for the whole column. They apply to the heading and the cells of that column.

To color single rows or cells instead, see [Row and cell colors](/tables-row-color). To color by value, see [Conditional formatting](/conditional-formatting).

## Behavior

- **Sortable** (Pro): on by default. When on, visitors can click the heading to sort the table by this column. Turn it off to remove the sort icon and sorting for this column only. Sorting for the whole table is set in **Appearance** › **Sorting**. See [Sorting](/sorting).
- **Searchable** (Pro): on by default. When on, this column is included when visitors use the search box. Turn it off to leave the column out of search results and out of the **Search in** dropdown.
- **Click to copy**: off by default. When on, visitors can click a cell in this column to copy its value. Useful for coupon codes, phone numbers or IDs.

## Header

- **HTML header content** (Pro): turn this on to show HTML in the column heading instead of the plain name, such as an icon, a line break or a link. Add your content in the **Header HTML content** editor that appears. The HTML is filtered for safety, and shortcodes in it run.

Click **Save column** to keep your changes.

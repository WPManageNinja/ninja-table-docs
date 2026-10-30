---
title: "HTML Field"
description: "Use the HTML field column type to show links, media and formatted content, edited with the WordPress editor."
---

# HTML Field

The **HTML field** column type is for rich content: bold or colored text, lists, links, images and other media. You edit each cell with the WordPress editor, so you don't need to write HTML by hand. It is free and has no extra options.

## Set a column to HTML field

1. Go to **Tables** › your table › **Table Rows**.
2. To add a new column, click **Add column**. To change an existing one, click the gear icon on its header and choose **Column settings**.
3. In the **Basic** tab, set **Type** to **HTML field**. An info note appears: use HTML for links, media or any formatted content, and only trusted editors should edit this column.
4. Click **Add column** or **Save column**.

![Column dialog with Type set to HTML field](/images/field-types/html-field/1.-Column-Dialog-With-Type-Set.webp)

::: warning Only for trusted editors
HTML cells can hold links, media or any formatted content. Only people you trust should be able to edit this column.
:::

## Enter content

HTML cells are not edited inside the grid. Open the row drawer instead: click **Add data** for a new row, or the pencil icon on an existing row. The HTML column shows the WordPress editor (full width), where you can format text, add links and insert media. Click **Add row** or **Update** to save. See [Working in Table Rows](/working-in-table-rows).

<!-- TODO(screenshot): html-field-2
  screen: Tables › table › Table Rows › row drawer
  table: Employee Directory
  state: Row drawer open with the WordPress editor in the HTML column
  highlight: editor
  view: admin
  alt: Row drawer showing the WordPress editor for an HTML column
  blocked: no demo table has an HTML field column (row drawer shows no WordPress editor)
-->

## How it looks on your site

Visitors see the formatted result: bold text, links, lists and media render as HTML inside the cell.

<!-- TODO(screenshot): html-field-3
  screen: Tables › table › Preview
  table: Employee Directory
  state: An HTML column with a link and bold text
  highlight: -
  view: frontend
  alt: Table with an HTML column showing a link and bold text
  blocked: no demo table has HTML cell content
-->

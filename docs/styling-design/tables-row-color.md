---
title: "Table Row Color"
description: "Give a single row or cell its own background and text color from Row settings and Cell settings in Table Rows (Pro)."
---

# Table Row Color

**Row settings** and **Cell settings** (Pro) let you color one row or one cell, for example to highlight a featured plan or a sold-out product. You set a background color and a text color, and they show both in the editor grid and on your site.

To color a whole column instead, use the column's **Advanced** tab. See [Advanced settings](/advanced-settings). To color rows or cells automatically based on their values, see [Conditional formatting](/conditional-formatting).

Row and cell colors are only available on tables that keep their own rows.

## Color a row

1. Go to **Ninja Tables** › **Tables** › your table › **Table Rows**.
2. At the end of the row, click the palette icon (**Row settings**). The **Row settings** drawer opens.
3. Under **Row appearance**, pick a **Background** and a **Text** color. Leave a field as **Not set** to keep the table's default.
4. Click **Update**.

<!-- TODO(screenshot): tables-row-color-1
  screen: Tables › Hosting Plans Comparison › Table Rows › Row settings
  table: Hosting Plans Comparison
  state: Row settings drawer open with a Background and a Text color chosen
  highlight: Background field
  view: admin
  alt: Row settings drawer with Row appearance colors
-->

The drawer also has a **Created date** field with the hint **Useful when the table is sorted by created date**. Change it to move the row when the table is ordered by created date.

## Color a single cell

1. In the Table Rows grid, click the small palette icon in the cell (**Cell settings**).
2. Under **Cell appearance**, pick a **Background** and a **Text** color for that cell.
3. Click **Update**.

A cell color takes priority over its row color.

<!-- TODO(screenshot): tables-row-color-2
  screen: Tables › Hosting Plans Comparison › Table Rows › Cell settings
  table: Hosting Plans Comparison
  state: Cell settings drawer open for one cell with Cell appearance colors set
  highlight: Cell appearance card
  view: admin
  alt: Cell settings drawer with Cell appearance colors
-->

## See the result

Click **Preview** in the editor header, or open the page the table is on. The grid in **Table Rows** shows the same colors.

<!-- TODO(screenshot): tables-row-color-3
  screen: Preview of Hosting Plans Comparison
  table: Hosting Plans Comparison
  state: One colored row and one colored cell visible on the front end
  highlight: -
  view: frontend
  alt: Table on the site with a colored row and a colored cell
-->

## Without Pro

The two drawers still open on the free version, but they show **Row and cell colours are a Pro feature.** with an upgrade link instead of the color pickers, and **Update** is disabled.

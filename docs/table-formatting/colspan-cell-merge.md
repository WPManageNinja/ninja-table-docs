---
title: "Colspan/Cell Merge"
description: "Merge neighboring cells or column headings into one wider cell by typing #colspan# in the cells to merge."
---

# Colspan/Cell Merge

**Colspan** joins neighboring cells in a row into one wider cell. Type `#colspan#` in a cell and it merges with the cell to its left. Use it for section headings inside a table, a group heading over several columns, or a total that spans the last few cells.

::: warning Needs FooTable with Legacy rendering (Pro)
Cells are only merged when the table uses the **FooTable** engine and **Legacy** rendering. Set this in **Ninja Tables** › **Tables** › your table › **Table Configuration** › **Rendering Setting** › **Legacy**. New tables start on **Legacy** when Pro is active. See [Table rendering settings](/table-rendering-settings).

With **Ajax** rendering, or on a **DataTables** table, cells that contain `#colspan#` are removed from the table, but the cell next to them doesn't widen to fill the space.
:::

## Merge cells in a row

1. Go to **Ninja Tables** › **Tables** › your table › **Table Rows**.
2. Find the row with the cells you want to merge. Keep your content in the first (leftmost) cell.
3. In each cell to the right that should join it, type `#colspan#` and nothing else (click the cell to edit it in place, or use the row drawer).
4. Preview the table.

Each `#colspan#` cell merges into the cell to its left, so two `#colspan#` cells after a cell make one cell three columns wide. The merge applies only to that row. A `#colspan#` in the first column has nothing to its left, so it can't merge.

<!-- TODO(screenshot): colspan-cell-merge-1
  blocked: demo cells contain no #colspan# and typing it into cells saves row data
  screen: Tables › Conference Schedule › Table Rows
  table: Conference Schedule
  state: A section-heading row whose cells to the right contain #colspan#, and a total row whose last two cells contain #colspan#
  highlight: cells containing #colspan#
  view: admin
  alt: Cells with #colspan# in Table Rows
-->

In this example, a row of section headings sits in the middle of the table, and the last cells at the bottom merge into one.

<!-- TODO(screenshot): colspan-cell-merge-2
  blocked: needs saved #colspan# cells and Legacy rendering; Conference Schedule demo page only shows unmerged rows
  screen: Preview of Conference Schedule
  table: Conference Schedule
  state: Merged section-heading row and merged bottom cell visible on the front end
  highlight: -
  view: frontend
  alt: Merged cells in the table
-->

## Merge column headings

You can also merge a column heading with the one before it. Open the column's **Column settings** (gear icon on its header), set its **Column name** to `#colspan#`, then click **Save column**. The heading before it now spans both columns.

![#colspan# typed as a column name](/images/table-formatting/colspan-cell-merge/3.-Colspan-Typed-As-A-Column-Name.webp)

To merge cells that sit on top of each other instead, see [Rowspan/Merge rows](/rowspan).

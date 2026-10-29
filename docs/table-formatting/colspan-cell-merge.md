---
title: "Colspan/Cell Merge"
description: "Merge neighboring cells or column headings into one wider cell by typing #colspan# in the cells to merge."
---

# Colspan/Cell Merge

**Colspan** joins neighboring cells in a row into one wider cell. Type `#colspan#` in a cell and it merges with the cell to its left. Use it for section headings inside a table, a group heading over several columns, or a total that spans the last few cells.

::: warning Needs FooTable with Legacy rendering (Pro)
Cells are only merged when the table uses the **FooTable** engine and **Legacy** rendering. Set this in **Tables** › your table › **Table Configuration** › **Rendering Setting** › **Legacy**. See [Table rendering settings](/table-rendering-settings).

With **Ajax** rendering, or on a **DataTables** table, cells that contain `#colspan#` are removed from the table, but the cell next to them doesn't widen to fill the space.
:::

## Merge cells in a row

1. Go to **Tables** › your table › **Table Rows**.
2. Find the row with the cells you want to merge. Keep your content in the first (leftmost) cell.
3. In each cell to the right that should join it, type `#colspan#` (click the cell to edit it in place, or use the row drawer).
4. Save, then preview the table.

Each `#colspan#` cell merges into the cell to its left, so two `#colspan#` cells after a cell make one cell three columns wide. The merge applies only to that row.

![Cells with #colspan# in Table Rows](/images/table-formatting/colspan-cell-merge/1.-add-colspan-01.webp)

In the example above, cells right under the header and in the middle of the table become separate headings, and the last two cells at the bottom merge into one.

Here's how the table looks:

![Merged cells in the table](/images/table-formatting/colspan-cell-merge/2.-rowspan.webp)

## Merge column headings

You can also merge a column heading with the one before it. Open the column's **Column settings** (gear icon on its header) and set its **Column name** to `#colspan#`, then click **Save column**. The heading before it now spans both columns.

![#colspan# as a column name](/images/table-formatting/colspan-cell-merge/3.-Collapain-in-title-02.webp)

To merge cells that sit on top of each other instead, see [Rowspan/Merge rows](/rowspan).

---
title: "Drag & Drop Rows & Columns"
description: "Add, insert, duplicate, move and remove rows and columns in a Drag & Drop table, and merge or split cells."
---

# Drag & Drop Rows & Columns

In the **Drag & Drop builder**, the column letters above the table and the row numbers beside it are handles: use them to add, move, copy and remove whole columns and rows. You can also merge cells together. These tools work in **Desktop** preview only; in **Tablet** and **Mobile** preview they are hidden.

## Add rows and columns

Below the table, the add bar has two buttons:

- **+ Add row** › **At the bottom** or **At the top**
- **+ Add column** › **On the right** or **On the left**

A hint next to them reminds you that the ⋯ on a row or column number inserts next to it.

<!-- TODO(screenshot): drag-drop-rows-columns-1
  screen: Drag & Drop builder, add bar under the table
  table: a Drag & Drop pricing table
  state: + Add row menu open showing At the bottom and At the top
  highlight: + Add row button
  view: admin
  alt: Add row menu with At the bottom and At the top options
-->

## The column and row menus

Click a column letter (**A**, **B**, **C**…) to open its menu:

- **Insert column before** / **Insert column after**: add a column next to this one.
- **Insert left column** / **Insert right column**: add a column at the far left or far right of the table.
- **Duplicate column**: copy the column with its content.
- **Remove column**

<!-- TODO(screenshot): drag-drop-rows-columns-2
  screen: Drag & Drop builder, column menu
  table: a Drag & Drop pricing table
  state: Column B menu open
  highlight: Insert column after
  view: admin
  alt: Column menu with insert, duplicate and remove options
-->

Click a row number (**1**, **2**, **3**…) for the same options for rows:

- **Insert row before** / **Insert row after**: next to this row.
- **Insert top row** / **Insert bottom row**: at the very top or bottom of the table.
- **Duplicate row**
- **Remove row**

<!-- TODO(screenshot): drag-drop-rows-columns-3
  screen: Drag & Drop builder, row menu
  table: a Drag & Drop pricing table
  state: Row 2 menu open
  highlight: Insert row after
  view: admin
  alt: Row menu with insert, duplicate and remove options
-->

If a row or column you remove holds merged cells, their content moves into the neighboring cell.

## Move rows and columns

Drag a **column letter** left or right to move the whole column. Drag a **row number** up or down to move the whole row. To move a single element instead, drag it by the grip on its chip to another cell.

## Merge and split cells

1. Click the first cell.
2. Hold **Shift** and click the other cells you want to merge. Together they must form a solid rectangle, so cells next to each other with no gaps.
3. Click **Merge** in the canvas toolbar.

**Merge** stays greyed out until two or more cells are selected. It joins cells across columns (colspan) or down rows (rowspan). To undo it, select the merged cell and click **Split**.

<!-- TODO(screenshot): drag-drop-rows-columns-4
  screen: Drag & Drop builder, canvas toolbar
  table: a Drag & Drop pricing table
  state: Two neighboring cells selected, label reading 2 cells selected, Merge enabled
  highlight: Merge button
  view: admin
  alt: Two selected cells and the enabled Merge button in the canvas toolbar
-->

## Row height and column width

Set these for the selected cell's row and column in [Cell Settings](/drag-drop-cell-settings).

Click **Save** to keep your changes.

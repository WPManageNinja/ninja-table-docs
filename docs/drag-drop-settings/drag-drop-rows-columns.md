---
title: "Drag & Drop Rows & Columns"
description: "Add, insert, duplicate, move and remove rows and columns in a Drag & Drop table, and merge or split cells."
---

# Drag & Drop Rows & Columns

In the **Drag & Drop builder**, the column letters above the table and the row numbers beside it are handles: use them to select, add, move, copy and remove whole columns and rows. You can also merge cells together. The add bar, **Merge** and **Split** work in **Desktop** preview only; in **Tablet** and **Mobile** preview they are hidden.

## Add rows and columns

Below the table, the add bar has two split buttons:

- **Add Row** adds a row at the bottom. The arrow beside it lets you choose **At The Top** or **At The Bottom**.
- **Add Column** adds a column on the right. The arrow beside it lets you choose **On The Left** or **On The Right**.

![Add row menu with At the bottom and At the top options](/images/drag-drop-settings/manage-cells-ninja-tables/1.-Add-Row-Menu-With-At.webp)

## Select a column or row

Click a column letter (**A**, **B**, **C**…) or a row number (**1**, **2**, **3**…) to select the whole column or row. The **Settings** tab then shows its color and size options. See [Cell Settings](/drag-drop-cell-settings).

## The column and row menus

Each letter and number has a small **chevron** button beside it. Click the chevron to open the menu. The menu header names what it belongs to, such as **Column A**.

The column menu:

- **Insert Before A** / **Insert After A**: add a column next to this one (the letter changes with the column).
- **Add At Table Start** / **Add At Table End**: add a column at the far left or far right of the table.
- **Move Column Left** / **Move Column Right**: shift the column one place.
- **Duplicate Column**: copy the column with its content.
- **Remove Column**

![Column menu with insert, duplicate and remove options](/images/drag-drop-settings/manage-cells-ninja-tables/2.-Column-Menu-With-Insert-Duplicate.webp)

The row menu has the same options for rows:

- **Insert Before Row 3** / **Insert After Row 3**: next to this row (the number changes with the row).
- **Add At Table Start** / **Add At Table End**: at the very top or bottom of the table.
- **Move Row Up** / **Move Row Down**: shift the row one place.
- **Duplicate Row**
- **Remove Row**

Move items that cannot go further, such as **Move Column Left** on column **A**, are greyed out.

![Row menu with insert, duplicate and remove options](/images/drag-drop-settings/manage-cells-ninja-tables/3.-Row-Menu-With-Insert-Duplicate.webp)

If a row or column you remove holds merged cells, their content moves into the neighboring cell.

## Move rows and columns

Use **Move Column Left / Right** or **Move Row Up / Down** from the menu, or drag a **column letter** left or right, or a **row number** up or down, to move the whole column or row. To move a single element instead, drag it by the grip on its chip to another cell.

## Merge and split cells

**Merge** joins cells across columns (colspan) or down rows (rowspan). The cells together must form a solid rectangle, so cells next to each other with no gaps.

**Merge by clicking cells:**

1. Click **Merge** in the canvas toolbar. The toolbar reads "Click The Cells To Merge".
2. Click each cell you want to join. The toolbar counts them: "1 Cell Picked, Click Another", then "3 Cells Picked".
3. Click **Merge 3 Cells** (the number matches your picks), or press <kbd>Enter</kbd>. To back out, click **Cancel** or press <kbd>Esc</kbd>.

If the picked cells don't form a rectangle, the toolbar says "Pick Cells That Form A Rectangle" and the merge button stays off until you fix the selection.

![Merge mode in the canvas toolbar with three cells picked and the Merge 3 Cells button](/images/drag-drop-settings/manage-cells-ninja-tables/5.-Merge-Mode-In-The-Canvas-Toolbar.webp)

**Merge a selection you already made:** click a cell, hold <kbd>Shift</kbd> and click the others, then click **Merge**. With two or more cells already selected, it merges right away.

![Two selected cells and the enabled Merge button in the canvas toolbar](/images/drag-drop-settings/manage-cells-ninja-tables/4.-Two-Selected-Cells-And-The-Enabled.webp)

**Split** undoes a merge. Select the merged cell and click **Split**. It stays off until a merged cell is selected.

## Row height and column width

Select the row or column, then set the size in [Cell Settings](/drag-drop-cell-settings).

Click **Save** to keep your changes.

::: faq
== Why is Merge not doing anything when I click it?
With fewer than two cells selected, **Merge** starts merge mode instead. Click the cells you want to join, then click the merge button in the toolbar.
== Why can't I use Merge, Split or Add Row on Tablet or Mobile?
These tools are hidden in **Tablet** and **Mobile** preview. Switch the preview width back to **Desktop** to edit.
== Why is Split greyed out?
**Split** only works on a merged cell. Select the merged cell first.
:::

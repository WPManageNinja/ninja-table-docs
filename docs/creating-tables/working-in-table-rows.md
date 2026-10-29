---
title: "Working in Table Rows"
description: "Add, edit, reorder and color rows and columns in the spreadsheet-style Table Rows tab of the table editor."
---

# Working in Table Rows

The **Table Rows** tab is where you build a table's content. It opens first when you edit a table and shows your rows in a spreadsheet-style grid. Columns, row editing, manual sorting and per-table import and export all live here.

To open it, go to **Tables**, click a table, and stay on the **Table Rows** tab.

## The grid

Each column of your table is a column in the grid, and each row is a row. Rows appear in the order they are saved.

- **Edit a cell in place:** click a cell, type, then click outside it to save (or press **Enter** in a single-line cell). This works for text, text area, number, date and select columns. To edit HTML, image and button cells, use the row drawer (see below).
- **Sort the view:** click a column name. The tooltip shows what the next click does: **Sort A → Z**, **Sort Z → A**, then **Back to saved order**. This sort only changes the view in the editor. It doesn't change the order visitors see.
- **Select rows:** tick the checkboxes on the left. A **Delete (n)** button appears in the toolbar, with an **x** to **Clear selection**.

If a table has no columns yet, the tab shows **To get started please add table columns** with an **Add column** button. If it has columns but no rows, click **Add first row**.

## The toolbar

The bar above the grid holds these tools:

| Tool | What it does |
|---|---|
| **Search rows…** | Filters the grid as you type and shows how many rows match. Click **Clear search** to see all rows again. |
| **Sort manually** (Pro) | Turns on drag-to-reorder for rows. See [Sort rows manually](/rearrangement-of-rows-in-ninja-tables-manual-row-sort). |
| **Compact rows** | Switches between tight and roomy row height in the editor. Compact is on by default. It doesn't change the table on your site. |
| **Show row ID, author and date** | Adds three read-only columns to the grid: **Row ID**, **Created by** and **Reference date**. Click again to hide them. |
| **Import / export** | Opens a dialog to export this table as CSV, Excel (.xlsx) or JSON, or to import rows from a CSV file. See [Export a table](/export-ninja-tables-csv-json) and [Import a CSV into an existing table](/import-csv-file-to-an-existing-table). |
| **Add column** | Adds a new column at the end of the table. |
| **Add data** | Opens the row drawer to add a new row. |

## Add and edit rows in the row drawer

The **row drawer** slides in from the right with one field per column.

1. Click **Add data** in the toolbar, or click the pencil icon (**Edit row**) at the end of a row.
2. Fill in the fields. Each field matches its column type: a text box, a date picker, a dropdown for select columns, the WordPress editor for HTML columns, an image uploader for image columns, or a link field for button columns.
3. Click **Add row** (or **Update** when editing). You can also press **⌘ + Enter** (**Ctrl + Enter** on Windows) to add the row.

A few extras in the drawer:

- **Add another after this:** keep the drawer open after saving so you can add the next row straight away.
- **Previous row / Next row:** the arrow buttons at the top move through rows without closing the drawer, in the order shown in the grid.
- **Add at:** when **Sort manually** is on, choose whether a new row is added **First** or **Last**.

## Row actions

The end of every row has three buttons:

- **Row settings** (palette icon, Pro): set this row's **Row background** and **Row text colour**, and change its **Created date**. See [Row and cell colors](/tables-row-color).
- **Edit row** (pencil icon): opens the row drawer.
- **Row actions** (the ⋯ menu):
  - **Insert row below** (Pro): adds a new row right under this one.
  - **Duplicate row**: opens the drawer pre-filled with this row's values, and adds the copy after it.
  - **Delete row**: removes the row after you confirm.

Each cell also has a small palette icon for **Cell settings** (Pro), where you set the background and text color of that one cell.

## Column header menu

Every column header has a gear icon. Click it for the column menu:

- **Column settings:** opens the column dialog with the **Basic**, **Advanced**, **Conditions** and **Transform** tabs. See [Add and edit a column](/basic-settings).
- **Add column left** / **Add column right:** adds a new column next to this one.
- **Delete column:** removes the column and the data in it, after you confirm.

### Reorder columns

To move a column, drag the grip icon at the left of its header and drop it in a new spot. The new order is saved right away and is the order visitors see on your site.

## Connected tables are read-only here

Tables that get their rows from another source (WordPress posts, WooCommerce, Fluent Forms, FluentCart, Google Sheets, a remote CSV or a custom SQL query) show a **Read-only** badge in the toolbar. For these tables:

- A **source banner** above the grid says where the rows come from (**Rows come from …**) and has a **Source settings** button (**Edit query** for WP Posts tables) to change what the table shows. See [Connected tables overview](/connected-tables-overview).
- You can search the rows and switch **Compact rows**, but you can't add, edit, sort or delete rows here. Change the data in its source instead.
- The grid shows row numbers instead of checkboxes, and columns have no drag grip.
- The column menu still has **Column settings** and **Delete column**, so you can change how each column looks.

## Rows per page

The footer under the grid shows **Showing x–y of z** and page controls. Use **Rows per page** to show 10, 15, 20 (the default), 50 or 100 rows at a time, or type a page number to jump to it.

This only affects the editor. To set how many rows visitors see per page, use **Appearance** › **Pagination**. See [Pagination](/pagination).

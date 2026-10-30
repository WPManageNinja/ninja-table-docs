---
title: "Working in Table Rows"
description: "Add, edit, duplicate, delete and reorder rows and columns in the spreadsheet-style Table Rows tab of the table editor."
---

# Working in Table Rows

The **Table Rows** tab is where you build a table's content. It opens first when you edit a table and shows your rows in a spreadsheet-style grid. Columns, row editing, manual sorting and per-table import and export all live here.

To open it, go to **Ninja Tables** › **Tables**, click a table, and stay on the **Table Rows** tab.

![Table Rows tab with the toolbar above the grid](/images/creating-tables/working-rows/1.-Table-Rows-Tab-With-The-Toolbar.webp)

## The editor header

The header above the tabs stays visible while you work:

- **Back arrow**: returns to the [Tables list](/tables-list).
- **Table title** and its `#ID`: the pencil icon next to it (**Edit table details**) opens the title, caption and description. See [Title, caption & description](/table-title-description-settings).
- **Shortcode chip**: shows `[ninja_tables id="123"]`. Click it to copy the shortcode.
- **Preview**: opens the table on a bare page in a new tab, as visitors see it.
- **Save**: appears only on tabs that have settings to save, such as **Appearance**. The **Table Rows** tab has no Save button, because every cell edit, row and column change saves as soon as you make it.
- **Get Pro**: an upgrade link, shown only when Pro is not active.

## The grid

Each column of your table is a column in the grid, and each row is a row. Rows appear in the order set in **Appearance** › **Sorting** (by created date by default).

- **Edit a cell in place**: click a cell, type, then click outside it to save (or press **Enter** in a single-line cell). This works for text, text area, number, date and select columns. HTML, image and button cells are edited in the row drawer.
- **Preview in the grid**: when a column has a [Transform value](/transform-value) or a formula (Pro), the grid shows the result, not the raw stored value.
- **Sort the view**: click a column name. The tooltip shows the next step: **Sort A → Z**, **Sort Z → A**, then **Back to saved order**. This sort only reorders the rows already loaded in the grid (the current page), is never saved, and doesn't change what visitors see. It is turned off while **Sort manually** is on.
- **Select rows**: tick the checkboxes on the left. A **Delete (n)** button appears in the toolbar, with an **x** to clear the selection. Deleting asks you to confirm, then removes all ticked rows for good.

If a table has no columns yet, the tab shows **To get started please add table columns** with an **Add column** button. If it has columns but no rows, click **Add first row**. When a search finds nothing, the grid says **No rows match** and offers **Clear search**.

## The toolbar

The bar above the grid holds these tools:

| Tool | What it does |
|---|---|
| **Search rows...** | Searches all rows of the table (not only the page you see) as you type, and shows how many rows match. Press **Enter** to search at once. |
| **Read-only** | A badge that marks connected tables, whose rows come from another source. |
| **Sort manually** (Pro) | Turns on drag-to-reorder for rows. See [Sort rows manually](/rearrangement-of-rows-in-ninja-tables-manual-row-sort). |
| **Compact rows** | Switches between tight and roomy row height in the editor. Compact is on by default. It doesn't change the table on your site. |
| **Show row ID, author and date** | Adds three read-only columns to the grid: **Row ID**, **Created by** and **Reference date**. Click again to hide them. |
| **Import / Export** | Opens a dialog to export this table as CSV, Excel (.xlsx) or JSON, or to import rows from a CSV file. See [Export a table](/export-ninja-tables-csv-json) and [Import rows into a table](/import-csv-file-to-an-existing-table). |
| **Add column** | Adds a new column at the end of the table. |
| **Add data** | Opens the row drawer to add a new row. |

## Add and edit rows in the row drawer

The **row drawer** slides in from the right with one field per column.

1. Click **Add data** in the toolbar, or click the pencil icon (**Edit row**) at the end of a row.
2. Fill in the fields. Each field matches its column type: a text box, a text area, the WordPress editor for HTML columns, a date picker, a dropdown for select columns, an image uploader for image columns, or a link field for button columns. Image and button fields show a Pro badge, and without Pro they fall back to a plain input.
3. Click **Add row** (or **Update** when editing). You can also press **⌘ + Enter** (**Ctrl + Enter** on Windows) to add a new row.

The drawer title tells you what you are doing: **New row**, **Row 3** or **Duplicate row**. Under it, a subtitle shows where a new row will land, such as **Adds as row 21** or **Adds after the row**.

![Row drawer with one field per column](/images/creating-tables/working-rows/2.-Row-Drawer-With-One-Field-Per.webp)

A few extras in the drawer:

- **Add another after this**: keeps the drawer open after saving and clears the fields, so you can add the next row straight away. A counter in the header shows how many rows you have added (**3 added**).
- **Previous row / Next row**: the arrow buttons at the top move through rows without closing the drawer, in the order shown in the grid.
- **Add at**: when **Sort manually** is on, choose whether a new row is added **First** or **Last**.
- If every field is empty, saving shows **Please add at least 1 value to the row**.

Select columns let you type a value that is not in the **Select items** list, and multi-select columns store several values in one cell. Image columns use the WordPress media library. See [Select field](/select-field) and [Image/File/Lightbox](/image-file-lightbox).

## Row actions

The end of every row has three buttons:

- **Row settings** (palette icon, Pro): set this row's **Background** and **Text** colors, and change its **Created date**. See [Row and cell colors](/tables-row-color).
- **Edit row** (pencil icon): opens the row drawer.
- **Row actions** (the ⋯ menu):
  - **Insert row below** (Pro): opens the drawer to add a new row right under this one.
  - **Duplicate row**: opens the drawer pre-filled with this row's values and colors, and saves the copy as a new row.
  - **Delete row**: removes the row after you confirm.

Each cell also has a small palette icon for **Cell settings** (Pro), where you set the background and text color of that one cell.

::: tip Where the copy lands
**Duplicate row** and **Insert row below** put the new row right after the original only when the table is ordered by created date, or by manual order (Pro). When the table is ordered by a column, the new row appears wherever that sort puts it. Check **Appearance** › **Sorting**. See [Sorting](/sorting).
:::

## Column header menu

Every column header has a gear icon (**Column settings**). Click it for the column menu:

- **Column settings**: opens the **Edit column** drawer with the **Basic**, **Advanced**, **Conditions** (Pro) and **Transform** (Pro) tabs. See [Add and edit a column](/basic-settings).
- **Add column left** / **Add column right**: adds a new column next to this one.
- **Delete column**: removes the column and the data in it, after you confirm.

When you add a column, the **Name is required** and **Column key is required** messages stop you from saving an empty one, and a repeated key shows **Column Key needs to be unique**.

![Column header menu with Column settings and Delete column](/images/creating-tables/working-rows/3.-Column-Header-Menu-With-Column-Settings.webp)

### Reorder columns

To move a column, drag the grip icon (**Drag to reorder**) at the left of its header and drop it in a new spot. The new order is saved right away and is the order visitors see on your site.

::: warning DataTables column keys
On a **DataTables** table, these column keys are reserved and can't be used: `__id`, `__position`, `__owner_id`, `__settings`, `__created_at` and `__updated_at`. Saving shows **Column key "x" is reserved for system use. Please use a different key.**
:::

### The Columns page

An older full-page column manager is still available at the address `#/tables/<id>/columns` (add it after `admin.php?page=ninja_tables` in your browser). It lists the **Columns in this table**, with drag handles, a checkbox per column, **Select all** / **Deselect all**, **Delete (n)** for deleting many columns at once, and **Add column**. It has no tab, so you can only reach it by typing the address.

## Connected tables are read-only here

Tables that get their rows from another source (WordPress posts, WooCommerce, Fluent Forms, FluentCart, Google Sheets, a remote CSV or a custom SQL query) show a **Read-only** badge in the toolbar. For these tables:

- A **source banner** above the grid says where the rows come from and has a **Source settings** button (**Edit query** for WP Posts tables) to change what the table shows. See [Connected tables overview](/connected-tables-overview).
- You can search the rows and switch **Compact rows**, but you can't add, edit, sort or delete rows here. Change the data in its source instead.
- The grid shows row numbers instead of checkboxes, and columns have no drag grip.
- The column menu still has **Column settings** and **Delete column**, so you can change how each column looks.

## Rows per page

The footer under the grid shows the row and column counts, **Showing x–y of z**, and page controls. Use **Rows per page** to show 10, 15, 20 (the default), 50 or 100 rows at a time, or type a page number to jump to it.

This only affects the editor. To set how many rows visitors see per page, use **Appearance** › **Pagination**. See [Pagination](/pagination).

---
title: "Create a Drag & Drop Table"
description: "Build a visual table such as a pricing or comparison table with the Drag & Drop builder: start from scratch, a template or a CSV/JSON file, then save and embed it."
---

# Create a Drag & Drop Table

The **Drag & Drop table** builder lets you design a table visually, cell by cell. Instead of rows of data, each cell can hold one or more elements such as text, buttons, icons, star ratings, lists or images. It's ideal for pricing tables, feature comparisons, team lists and schedules.

## Create the table

1. Go to **Ninja Tables** › **Create Table**.
2. Under **Start from scratch**, click **Drag & Drop table**. A drawer opens.
3. Enter a **Table name** (for example "Pricing plans"). It is required, except when you import a file.
4. Under **Start with**, pick one of the three cards (double-click a card to pick it and move on):
   - **Create From Scratch**: an empty grid.
   - **Import from CSV/JSON**: build the table from a file.
   - **Choose a template**: start from a ready-made design.
5. Click **Next**.

<!-- TODO(screenshot): how-to-create-your-first-drag-and-drop-table-with-ninja-tables-1
  screen: Create Table › Drag & Drop table drawer, step 1
  table: -
  state: Table name filled in, the three Start with cards visible, none selected
  highlight: Start with cards
  view: admin
  alt: Drag & Drop table drawer with the Table name field and the three Start with cards
-->

If you click **Next** without choosing a card, the drawer asks you to "Choose how to start." Use **Previous** on step 2 to go back and change your choice.

### From scratch

Set the number of **columns** with the number box above the grid and the number of **rows** with the box beside it. Use the **−** and **+** buttons or type a number (1 to 30 each). The default is 6 rows × 3 columns, and the caption under the grid (for example "6 rows × 3 columns") shows the size. Click **Create table**.

Every cell starts with an empty **Text** element, ready to type in.

<!-- TODO(screenshot): how-to-create-your-first-drag-and-drop-table-with-ninja-tables-2
  screen: Create Table › Drag & Drop table drawer, step 2, Create From Scratch
  table: -
  state: Grid preview with the column and row number boxes
  highlight: column and row number boxes
  view: admin
  alt: Create From Scratch step with the column and row counters and the grid preview
-->

### From a CSV or JSON file

Drop a `.csv` or `.json` file on the upload area, or click **Browse File**. The file must be smaller than 1 MB; other types and larger files are refused with a message. The chosen file appears as a chip with its name and size, and **Remove** lets you pick a different one. With Pro you can instead paste a link under **From a URL**; it is switched off while a file is chosen. Click **Create table**.

What you get:

- Every CSV cell or JSON value becomes a **Text** element, in a grid as wide as the first row of your data. There is no header styling; add it in the builder.
- The table is named `Ninja-tables` followed by today's date (for example `Ninja-tables30-10-2026`), because the **Table name** field is not used for imports. Rename it in the builder header afterwards.
- If the JSON file is a table you exported from the builder with **Export as JSON**, the whole design comes back (elements, settings and responsive layout) and the table keeps its original name. See [Export a Table](/export-ninja-tables-csv-json).

### From a template

Pick a category (**All**, **Pricing**, **Comparison**, **Employee** or **Schedule**), click a template, then **Create table**. Some templates need Pro. See [Drag & Drop Templates](/drag-drop-templates) for the full list.

<!-- TODO(screenshot): how-to-create-your-first-drag-and-drop-table-with-ninja-tables-3
  screen: Create Table › Drag & Drop table drawer, step 2, Choose a template
  table: -
  state: Template cards with the category pills above them
  highlight: category pills
  view: admin
  alt: Template picker with the All, Pricing, Comparison, Employee and Schedule category pills
-->

Ninja Tables shows "Table created successfully." (or "Imported successfully." for a file) and opens the new table in the builder.

## Build the table

1. Click a cell to select it.
2. In the right panel, on the **Elements** tab, click an element to add it to the selected cell, or drag an element onto any cell.
3. Click the element in the cell and set its options in the **Settings** tab.

A cell can hold several elements. Adding another one stacks it below the ones already there, so you can put a heading, a list and a button in the same cell.

When you click an element and no single cell is selected (nothing selected, or several cells selected), it is added to the last cell, the one at the bottom right.

<!-- TODO(screenshot): how-to-create-your-first-drag-and-drop-table-with-ninja-tables-4
  screen: Drag & Drop builder, Elements tab
  table: a Drag & Drop pricing table
  state: One cell selected, Elements tab open with the General and Advanced groups
  highlight: Elements tab tile
  view: admin
  alt: Builder with a cell selected and the Elements tab listing the General and Advanced elements
-->

Elements in the **General** group are **Text**, **Button**, **Icon** (Pro), **Rating**, **List**, **HTML**, **Shortcode** and **Image** (Pro). The **Advanced** group has **Styled List** (Pro), **Ribbon** (Pro), **Progress** and **Text Icon** (Pro). On the free version, clicking or dragging a Pro element shows "You are using free version of ninja-tables, Upgrade To Pro" and adds nothing.

A tour of everything on the builder screen is in [Drag & Drop Builder Tour](/drag-drop-builder-tour). To add, move or merge rows and columns, see [Rows & Columns](/drag-drop-rows-columns).

## Save and add it to your site

1. Click **Save** in the top-right corner of the builder. A message confirms "Table data saved successfully."
2. Copy the shortcode from the chip next to the table's name, for example `[ninja_table_builder id="123"]`.
3. Paste it into a page or post, or insert the table with the Ninja Tables block, which also supports Drag & Drop tables. See [Add a Table to Your Site](/embed-tables).

::: warning Save once before embedding
The table on your site is built from the version you last saved in the builder. A new table, including one made from a template or a file, shows only an "Edit Table" link (shown to admins) until you click **Save** in the builder at least once.
:::

Click **Preview** in the builder to see the saved table on its own page. If you leave the builder with unsaved edits, your browser asks you to confirm that "Changes that you made may not be saved".

<!-- TODO(screenshot): how-to-create-your-first-drag-and-drop-table-with-ninja-tables-5
  screen: A page containing the Drag & Drop table
  table: a Drag & Drop pricing table
  state: Saved table embedded in a page with the shortcode
  highlight: -
  view: frontend
  alt: A saved Drag & Drop pricing table shown on a page
-->

## Next steps

- [Drag & Drop Templates](/drag-drop-templates)
- [Table Settings](/ninja-tables-drag-and-drop-table-settings)
- [Mobile & Tablet Layout](/responsive-table-design)

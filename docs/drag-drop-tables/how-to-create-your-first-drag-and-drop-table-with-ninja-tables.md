---
title: "Create a Drag & Drop Table"
description: "Build a visual table such as a pricing or comparison table with the Drag & Drop builder: start from scratch, a template or a CSV/JSON file, then save and embed it."
---

# Create a Drag & Drop Table

The **Drag & Drop table** builder lets you design a table visually, cell by cell. Instead of rows of data, each cell can hold one or more elements such as text, buttons, icons, star ratings, lists or images. It's ideal for pricing tables, feature comparisons, team lists and schedules.

## Create the table

1. Go to **Ninja Tables** › **Create Table**.
2. Under **Start from scratch**, click **Drag & Drop table**. A drawer opens.
3. Choose how to start. The top of the drawer has two cards, **Create From Scratch** and **Import From CSV/JSON**. Below them, **Choose a Template** lists the ready-made designs.
4. Click a card or a template to select it, then click **Next**. Clicking only selects, so a stray click doesn't create a table.

The name depends on how you start. A template asks for a **Table Name** on the next step, pre-filled from its category (for example "Pricing table"). A scratch table has an optional **Table Name** field; left empty, it's named "Table #" followed by its ID (for example "Table #1342"). A file takes its name from the file. You can rename any table in the builder header afterwards.

![Drag & Drop table drawer with the two start cards and the template picker](/images/drag-drop-tables/create-first-drag-drop/1.-Drag-Drop-Table-Drawer.webp)

If you click **Next** without choosing a card, the drawer asks you to "Choose how to start." Use **Previous** on step 2 to go back and change your choice. You can also double-click a card to pick it and move on.

### From scratch

Optionally type a **Table Name**. Set the number of **columns** with the number box above the grid and the number of **rows** with the box beside it. Use the **−** and **+** buttons or type a number (1 to 30 each). The default is 6 rows × 3 columns, and the caption under the grid (for example "6 rows × 3 columns") shows the size. Click **Create Table**.

Every cell starts with an empty **Text** element, ready to type in.

![Create From Scratch step with the column and row counters and the grid preview](/images/drag-drop-tables/create-first-drag-drop/2.-Create-From-Scratch-Step.webp)

### From a CSV or JSON file

Drop a `.csv` or `.json` file on the upload area, or click **Browse File**. The file must be smaller than 1 MB; other types and larger files are refused with a message. The chosen file appears as a chip with its name and size, and **Remove** lets you pick a different one. With Pro you can instead paste a link under **From a URL**; it is switched off while a file is chosen. Click **Create Table**.

What you get:

- Every CSV cell or JSON value becomes a **Text** element, in a grid as wide as the first row of your data. There is no header styling; add it in the builder.
- The table is named `Ninja-tables` followed by today's date (for example `Ninja-tables30-10-2026`). Rename it in the builder header afterwards.
- If the JSON file is a table you exported from the builder with **Export as JSON**, the whole design comes back (elements, settings and responsive layout) and the table is named from the file (the name saved in the export, which is a lowercase, hyphenated form of the original title). See [Export a Table](/guide/import-export/export-ninja-tables-csv-json).

### From a template

Pick a category pill (**All**, **Pricing**, **Comparison**, **Employee**, **Schedule**, **Specification** or **Stats**), then click a template to select it. Hover a template to see a larger preview. Click **Next**, check the **Table Name**, and click **Create Table**. You can also double-click a template to go straight to the name step. Some templates need Pro. See [Drag & Drop Templates](/guide/drag-drop-tables/drag-drop-templates) for the full list.

![Template picker with the All, Pricing, Comparison, Employee and Schedule category pills](/images/drag-drop-tables/create-first-drag-drop/3.-Template-Picker-With-The-All-Pricing.webp)

Ninja Tables shows "Table created successfully." (or "Imported successfully." for a file) and opens the new table in the builder.

## Build the table

1. Click a cell to select it.
2. In the right panel, on the **Elements** tab, click an element to add it to the selected cell, or drag an element onto any cell.
3. Click the element in the cell and set its options in the **Settings** tab. The third tab, **Responsive**, controls how the table looks on phones and tablets.

A cell can hold several elements. Adding another one stacks it below the ones already there, so you can put a heading, a list and a button in the same cell.

When you click an element and no single cell is selected (nothing selected, or several cells selected), it is added to the last cell, the one at the bottom right.

![Builder with a cell selected and the Elements tab listing the General and Advanced elements](/images/drag-drop-tables/create-first-drag-drop/4.-Builder-With-A-Cell-Selected.webp)

Elements in the **General** group are **Text**, **Button**, **Icon** (Pro), **Rating**, **List**, **HTML**, **Shortcode** and **Image** (Pro). The **Advanced** group has **Styled List** (Pro), **Ribbon** (Pro), **Progress** and **Text Icon** (Pro). On the free version, clicking or dragging a Pro element shows "You are using free version of ninja-tables, Upgrade To Pro" and adds nothing.

A tour of everything on the builder screen is in [Drag & Drop Builder Tour](/guide/drag-drop-tables/drag-drop-builder-tour). To add, move or merge rows and columns, see [Rows & Columns](/guide/drag-drop-settings/drag-drop-rows-columns).

## Save and add it to your site

1. Click **Save** in the top-right corner of the builder. A message confirms "Table data saved successfully."
2. Copy the shortcode from the chip next to the table's name, for example `[ninja_table_builder id="123"]`.
3. Paste it into a page or post, or insert the table with the Ninja Tables block, which also supports Drag & Drop tables. See [Add a Table to Your Site](/guide/wordpress-integration/embed-tables).

::: warning Save once before embedding
The table on your site is built from the version you last saved in the builder. A template table works on your site straight away, because it saves its design once when it's created. A new table from scratch or a file shows only an "Edit Table" link (shown to admins) until you click **Save** in the builder at least once.
:::

Click **Preview** in the builder to see the saved table on its own page. If you leave the builder with unsaved edits, your browser asks you to confirm that "Changes that you made may not be saved".

![A saved Drag & Drop pricing table shown on a page](/images/drag-drop-tables/create-first-drag-drop/5.-Saved-Drag-Drop-Pricing-Table-Shown.webp)

## Next steps

- [Drag & Drop Templates](/guide/drag-drop-tables/drag-drop-templates)
- [Table Settings](/guide/drag-drop-settings/ninja-tables-drag-and-drop-table-settings)
- [Mobile & Tablet Layout](/guide/drag-drop-settings/responsive-table-design)

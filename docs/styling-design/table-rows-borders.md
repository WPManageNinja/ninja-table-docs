---
title: "Rows & Borders"
description: "Pick a style library and turn row stripes, hover highlight, borders, compact cells and fixed layout on or off, from the Style section of the Styling tab."
---

# Rows & Borders

The **Style** section of the **Styling** tab controls how the rows and borders of a table look: stripes, hover highlight, borders, cell spacing and column layout. For FooTable tables it also holds the **Style Library**, which decides the look and which switches you get. It is free.

1. Go to **Ninja Tables** › **Tables** and open a table.
2. Click the **Table Design** tab.
3. In the settings panel, click the **Styling** tab, then open **Style**. It is the first section and is open by default.

![Style section of the Styling tab in Semantic UI, with the Style Library choice and the Rows, Borders and Layout switches](/images/styling-design/table-rows-borders/1.-Styling-Tab-Semantic-UI-Switches.webp)

The switches are grouped under three headings: **Rows**, **Borders** and **Layout**. Next to each switch there is an **(i)** icon. Hover over it to read a one-line description. Every change shows in the live preview straight away. Click **Save** at the top of the editor to keep it.

The panel depends on the table's engine and library, so pick the tab that matches your table. To see which engine a table uses, or to compare them, read [FooTable or DataTables: Choose an Engine](/guide/creating-tables/choose-table-engine).

::: tabs
== FooTable
FooTable tables start with the **Style Library** choice at the top of the section: **Semantic UI**, **Bootstrap 4** or **Bootstrap 3**. Semantic UI suits most sites. Pick a Bootstrap library only if your theme already uses Bootstrap and you want the table to match. The switches below change with the library.

![Style section with Bootstrap 4 selected, showing a shorter list of switches](/images/styling-design/table-rows-borders/2.-Styling-Tab-Bootstrap-4-Switches.webp)

- **Semantic UI**: all nine switches below, including **Single Line Cells** and **Fixed Layout**.
- **Bootstrap 4**: **Striped Rows**, **Hover Rows**, **Small Table**, **Vertically Centered Table Cell Contents**, and the three border switches.
- **Bootstrap 3**: the same list as Bootstrap 4, with **Condensed Table** in place of **Small Table**.
== DataTables
DataTables tables have no **Style Library** choice. The section starts straight with the switches: **Hover Rows**, **Striped Rows**, **Compact Table** and **Vertically Centered Table Cell Contents** under **Rows**, and **Bordered Table**, **Hide Horizontal Borders**, **Hide Vertical Borders** and **Hide All Borders** under **Borders**. There is no **Layout** group.

**Hide All Borders** exists only on DataTables.
:::

## Rows

These switches change how each row and its cells look.

- **Single Line Cells** (Semantic UI only): keeps the text of each cell on one line instead of wrapping it. Tooltip: "A table can specify that its cell contents should remain on a single line, and not wrap." Use it for short values such as codes or prices. A long text then makes the column wider.
- **Hover Rows**: highlights the row under the visitor's pointer. Tooltip: "Enable a hover state on table rows". It helps readers follow a row across a wide table. You can set the hover color in [Table Colors](/guide/styling-design/table-color-settings).
- **Striped Rows**: shades every other row. Tooltip: "Add zebra-striping to any table row". Stripes make long tables easier to scan.
- **Compact Table**: tightens the cells. Tooltip: "Make tables more compact by cutting cell padding in half". It is called **Small Table** in Bootstrap 4 and **Condensed Table** in Bootstrap 3. Use it to fit more rows on the screen.
- **Vertically Centered Table Cell Contents**: centers the content of each cell between the top and bottom. Tooltip: "Make cell contents vertically centered". It matters most when some cells are taller than others, for example a cell with an image or a long text beside short ones.

::: tip
A new table starts with **Hover Rows**, **Striped Rows** and **Vertically Centered Table Cell Contents** on (on Semantic UI). Turn them off if you want a plainer table.
:::

## Borders

These switches draw or remove the lines between cells.

- **Bordered Table**: draws borders on all sides of the table and of every cell. Tooltip: "Borders on all sides of the table and cells". Border colors you set in [Table Colors](/guide/styling-design/table-color-settings) only show when this is on.
- **Hide Horizontal Borders**: removes the horizontal lines between the body rows. Tooltip: "This will hide horizontal borders of table body rows".
- **Hide Vertical Borders**: removes the vertical lines between the cells of the body rows. Tooltip: "This will hide Vertical borders of table body rows" (DataTables: "vertical").
- **Hide All Borders** (DataTables only): removes every border from the table. Tooltip: "Remove all borders from the table".

Hide the horizontal lines for a clean list look, or the vertical lines for a row-based look. Turn on both and the body rows have no inner lines at all.

## Layout

**Fixed Layout** (Semantic UI only) is the only switch in this group. Tooltip: "A special faster form of table rendering that does not resize table cells based on content." The columns keep the widths they were given and do not grow or shrink to fit their content. Use it when you want steady column widths. Long unbroken text can then run past its cell, so combine it with the column width settings and check the preview.

## Save and check

Check the result in the preview. Use the **Desktop**, **Tablet** and **Mobile** buttons above the preview to see how the table looks at each width, then click **Save**.

::: warning
The FooTable and DataTables styles are separate sets. If you change a table's engine, open **Style** again and set the switches for the new engine. A switch that doesn't exist in the new library is dropped when you save.
:::

## Common questions

::: faq
== Why don't I see Single Line Cells or Fixed Layout?
They exist only in the **Semantic UI** library. Choose **Semantic UI** in **Style Library**. DataTables tables don't have them either.
== Why don't I see the Style Library choice?
It is shown for FooTable tables only. DataTables tables have one set of styles and no library to choose.
== Why don't I see Hide All Borders?
It exists only on DataTables tables. FooTable tables have **Hide Horizontal Borders** and **Hide Vertical Borders** instead.
== My border color doesn't show.
A border color only shows when the table has borders. Turn on **Bordered Table**, then set the color in [Table Colors](/guide/styling-design/table-color-settings).
== Why did my table look different after I changed the library or engine?
Each library and engine has its own styles, and the switches you set for one are not carried over to the other. Open **Style** again and set the switches you want.
:::

## Related

- Color the rows, the hover state and the borders: [Table Colors](/guide/styling-design/table-color-settings).
- Color a single row or cell: [Row & Cell Colors](/guide/styling-design/tables-row-color).
- Change the font and its size: [Table Fonts](/guide/styling-design/table-font-settings).
- Set the library and switches every new table starts with: [Default Design for New Tables](/guide/styling-design/use-design-as-default).

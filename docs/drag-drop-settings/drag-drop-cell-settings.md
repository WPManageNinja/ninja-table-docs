---
title: "Drag & Drop Cell Settings"
description: "Color rows, columns and single cells, highlight a column, and set row height and column width in a Drag & Drop table."
---

# Drag & Drop Cell Settings

**Cell settings** control the colors and size of the cells in a Drag & Drop table: colors for every row, colors for a selected row, column or cell, a highlighted column (Pro), and row height and column width.

1. In the builder, click a cell. Hold **Shift** and click to select several.
2. Open the **Settings** tab of the right panel. It shows **Settings · Cell**.

![Settings tab showing the Cell settings for one selected cell](/images/drag-drop-settings/manage-cells-ninja-tables/1.-Settings-Tab-Showing-The-Cell-Settings.webp)

If nothing useful is selected, the panel tells you to "Pick a row, a column or a cell to colour it" and to hold Shift to take several cells at once. With several cells selected, only the options that work for a group are shown.

## Colors for every row

- **Header background** (default `#dddddd`)
- **Even row background** (default `#dddddd`)
- **Odd row background** (default `#ffffff`)

These are the same values as **Table** › **Background** in the [table settings](/ninja-tables-drag-and-drop-table-settings); changing one changes the other.

![Cell settings showing the header, even row and odd row background colors](/images/drag-drop-settings/manage-cells-ninja-tables/2.-Cell-Settings-Showing-The-Header-Even.webp)

## Colors for what you picked

Color only the row, column or cell you selected:

- **Selected cell row background**: the row of the selected cell. Needs exactly one cell selected.
- **Selected cell column background**: the column of the selected cell. Needs exactly one cell selected.
- **Selected cell background**: the selected cell, or every selected cell. Works with one or more cells.

Each color picker has an opacity slider and preset swatches.

When these colors overlap, the selected cell color wins. Between a row color and a column color, the one that was first added to the cell more recently wins, and both sit on top of the every-row colors above. Changing an existing row or column color keeps its place; to bring it on top, clear it and set it again.

![Selected cell color pickers and the colored cell on the canvas](/images/drag-drop-settings/manage-cells-ninja-tables/3.-Selected-Cell-Color-Pickers.webp)

## Highlight column (Pro)

Make one column stand out, as in a "most popular" pricing plan. Select one cell in the column and turn on **Highlight column** (off by default; on the free version it is switched off and shows "This is a Pro feature."). Then set:

- **Highlighted column height** (1–40, default 10): how tall the highlight band is.
- **Shadow color** (default `#888888`, with opacity).
- **Shadow effect (X-axis)** (−30 to 30), **(Y-axis)** (1–30, default 10) and **(blur radius)** (10–30, default 10): the shape of the shadow.

Turning the highlight on also adjusts **Margin top** and **Margin bottom** under **Global style** in the [table settings](/ninja-tables-drag-and-drop-table-settings), so the shadow isn't cut off. If you then check those values and find they changed, that is why.

![Highlight column options with height and shadow settings](/images/drag-drop-settings/manage-cells-ninja-tables/4.-Highlight-Column-Options-With-Height.webp)

<!-- TODO(screenshot): drag-drop-cell-settings-5
  screen: A page containing the Drag & Drop table
  table: a Drag & Drop pricing table
  state: One plan column highlighted with a shadow
  highlight: -
  view: frontend
  blocked: needs a saved Highlight column on a front-end table (no saving allowed on Website Pricing)
  alt: Pricing table with the middle column highlighted by a shadow
-->

## Row height and column width

Select one cell, then set:

- **Row height** (50–500, default 50): the height of the selected cell's row.
- **Column width** (100–1000, default 150): the width of the selected cell's column. When it isn't set, the column uses **Table cell min auto width** from the table settings.

To merge or split cells, use **Merge** and **Split** in the canvas toolbar; see [Rows & Columns](/drag-drop-rows-columns).

Click **Save** to keep your changes.

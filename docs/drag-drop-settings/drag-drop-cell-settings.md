---
title: "Drag & Drop Cell Settings"
description: "Color cells, rows and columns, highlight a column, and set row height and column width in a Drag & Drop table."
---

# Drag & Drop Cell Settings

**Cell settings** control the colors and size of the parts of a Drag & Drop table you select: one cell, several cells, a whole column or a whole row. What the **Settings** tab shows depends on what you select.

Colors for the header, even rows and odd rows are not here. They are table-wide, so you set them in [Table Settings](/ninja-tables-drag-and-drop-table-settings) under **Background**.

| You select | How | Options you get |
| --- | --- | --- |
| One cell | Click the cell | **Cell Background** |
| Several cells | Click a cell, then hold <kbd>Shift</kbd> and click others | **Selected Cells Background** |
| A column | Click its letter (**A**, **B**, **C**…) | **Column Background**, **Highlight Column** (Pro), **Column Width** |
| A row | Click its number (**1**, **2**, **3**…) | **Row Background**, **Row Height** |

Open the **Settings** tab of the right panel. A breadcrumb at the top shows what you selected, such as **Table › Cell C3**, **Table › Column B**, **Table › Row 3** or **Table › 2 Cells**. Click **Table** to go back to the table settings.

![Settings tab showing the Cell settings for one selected cell](/images/drag-drop-settings/manage-cells-ninja-tables/1.-Settings-Tab-Showing-The-Cell-Settings.webp)

## Color a cell, a row or a column

- **Cell Background**: the color of the selected cell.
- **Selected Cells Background**: one color for every selected cell. If the cells already have different colors, a **Mixed Colors** note appears.
- **Row Background**: the color of the whole selected row.
- **Column Background**: the color of the whole selected column.

Each color picker has an opacity slider and preset swatches.

![Selected cell color pickers and the colored cell on the canvas](/images/drag-drop-settings/manage-cells-ninja-tables/3.-Selected-Cell-Color-Pickers.webp)

## Highlight Column (Pro)

Make one column stand out, as in a "most popular" pricing plan. Click the column letter, then turn on **Highlight Column** (off by default; on the free version it is switched off and the info icon says "This is a Pro feature."). Then set:

- **Highlighted Column Height** (1–40, default 10): how tall the highlight band is.
- **Shadow Color** (default `#888888`, with opacity).
- **Shadow Effect (X-Axis)** (−30 to 30), **Shadow Effect (Y-Axis)** (1–30, default 10) and **Shadow Effect (Blur Radius)** (10–30, default 10): the shape of the shadow.

Turning the highlight on also adjusts **Margin Top** and **Margin Bottom** under **Table Style** in the [table settings](/ninja-tables-drag-and-drop-table-settings), so the shadow isn't cut off. If you then check those values and find they changed, that is why.

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

## Row Height and Column Width

- **Row Height** (50–500, default 50): click the row number, then set the height of that row.
- **Column Width** (100–1000, default 150): click the column letter, then set the width of that column. When it isn't set, the column uses **Table Cell Min Auto Width** from the table settings.

To merge or split cells, use **Merge** and **Split** in the canvas toolbar; see [Rows & Columns](/drag-drop-rows-columns).

![Column B selected, with the Column Width option in the Settings tab](/images/drag-drop-settings/manage-cells-ninja-tables/5.-Column-Selected-With-Column-Width.webp)

![Row 3 selected, with the Row Height option in the Settings tab](/images/drag-drop-settings/manage-cells-ninja-tables/6.-Row-Selected-With-Row-Height.webp)

Click **Save** to keep your changes.

::: faq
== Where do I set the header, even-row and odd-row colors?
In the table settings. Click outside the table so nothing is selected, open the **Settings** tab and expand **Background**.
== Why can't I see Column Width or Row Height?
They only appear when you select a whole column (click its letter) or a whole row (click its number). Selecting a single cell shows only **Cell Background**.
== Why is Highlight Column switched off?
It is a Pro option. On the free version the switch is disabled.
:::

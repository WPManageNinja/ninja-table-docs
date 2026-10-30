---
title: "Text Element"
description: "Add and style text in a Drag & Drop table cell, editing it right in the cell or in the Visual/HTML editor."
---

# Text Element

The **Text** element holds a heading, a price, a label or a paragraph in a Drag & Drop table cell. It is the most used element, and it is free. Every cell of a table created from scratch starts with an empty Text element.

To add one, click a cell and click **Text** in the **Elements** tab. If no single cell is selected, it goes into the last (bottom-right) cell. You can also drag it onto a cell, and a cell can hold several elements. Click the text in the cell and start typing.

<!-- TODO(screenshot): text-element-1
  screen: Drag & Drop builder › Elements tab and canvas
  table: a Drag & Drop pricing table
  state: A cell selected, a Text element in it with text typed
  highlight: Text tile in the Elements tab
  view: admin
  alt: Text element added to a cell of a Drag & Drop table
-->

While you type in the cell, a small toolbar offers **bold**, **italic**, **underline**, **strikethrough**, a text highlight color, **link** and **unlink**.

## Text options

Click the Text element and open the **Settings** tab (titled **Text**). The options sit under **Content & style**:

- **Content**: the text itself. Switch between **Visual** (formatted text) and **HTML** (raw HTML) to edit it either way.
- **Font color**: leave it empty to use the table's global color.
- **Font size** (10–45): 10 means "use the table's global font size", which the slider shows as 15 by default.
- **Alignment**: **Left**, **Center** (default) or **Right**.
- **Font style**: any of **Bold**, **Italic**, **Underline** and **Strikethrough**.

<!-- TODO(screenshot): text-element-2
  screen: Drag & Drop builder › Settings › Text › Content & style
  table: a Drag & Drop pricing table
  state: Text element selected, Content & style open
  highlight: Font size slider
  view: admin
  alt: Settings tab showing the Text element options
-->

Below the options, **Spacing** sets the margin and padding around the text; see [Element Spacing](/spacing).

Click **Save** to keep your changes.

::: tip
To set the default font, size and color for the whole table, use **Global style** in the [table settings](/ninja-tables-drag-and-drop-table-settings). For cell colors, see [Cell Settings](/drag-drop-cell-settings).
:::

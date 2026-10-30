---
title: "Element Spacing (Drag & Drop)"
description: "Add margin and padding around an element in a Drag & Drop table cell, for all sides at once or each side separately."
---

# Element Spacing (Drag & Drop)

**Spacing** controls the space around an element inside a Drag & Drop table cell. Every element except the Ribbon has it.

1. In the builder, click an element in a cell.
2. In the **Settings** tab, open the **Spacing** section below **Content & style**.
3. Choose **Margin** (space outside the element) or **Padding** (space inside it).
4. Set **Top**, **Bottom**, **Left** and **Right**. Each slider goes from 0 to 100.

Each element starts with its own default spacing, for example a small margin and top and bottom padding on **Text**.

<!-- TODO(screenshot): spacing-1
  screen: Drag & Drop builder › Settings · Element › Spacing › Margin
  table: a Drag & Drop pricing table
  state: A Text element selected, Spacing open on the Margin tab
  highlight: Margin tab
  view: admin
  alt: Spacing section with the Margin tab and four side sliders
-->

Click the **lock** icon to link the sides, so changing one value changes all four. It starts unlocked. Click it again to set each side separately.

<!-- TODO(screenshot): spacing-2
  screen: Drag & Drop builder › Settings · Element › Spacing › Padding
  table: a Drag & Drop pricing table
  state: Spacing open on the Padding tab with the lock icon
  highlight: lock icon
  view: admin
  alt: Spacing section on the Padding tab with the lock icon above the sliders
-->

Click **Save** to keep your changes.

::: tip
For space between all cells, use **Cell padding** in the [table settings](/ninja-tables-drag-and-drop-table-settings). For space above and below the whole table, use **Global style** › **Margin top** / **Margin bottom**.
:::

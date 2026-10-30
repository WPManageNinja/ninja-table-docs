---
title: "Drag & Drop Mobile & Tablet Layout"
description: "Make a Drag & Drop table readable on phones and tablets: stack cells, use the top row as headers, and set padding and alignment per device."
---

# Drag & Drop Mobile & Tablet Layout

On phones and tablets, a wide Drag & Drop table is hard to read. The **responsive** settings stack the table's cells into groups on smaller screens, so each column becomes a readable block.

1. In the builder, click outside the table so nothing is selected.
2. Scroll down the **Settings** tab to **Responsive**, **Mode options** and **Responsive settings**.

<!-- TODO(screenshot): responsive-table-design-1
  screen: Drag & Drop builder › Settings · Table › Responsive
  table: a Drag & Drop pricing table
  state: Responsive, Mode options and Responsive settings sections visible
  highlight: Enable responsive table
  view: admin
  alt: Responsive sections in the table settings
-->

## Preview and real breakpoints

Check the result with the **Desktop**, **Tablet** and **Mobile** buttons in the canvas toolbar. In tablet and mobile view you can only look; switch back to **Desktop** to edit. When you open **Mode options** or **Responsive settings**, the canvas switches to that device for you (to **Tablet** if it was on **Desktop**).

A width slider above the table lets you drag the preview: mobile from 300 to 699 px (starting at 400 px) and tablet from 700 to 1023 px. It only appears while **Enable responsive table** is on and that device's **Disable breakpoint** is off.

On your site the layout switches at fixed widths, whatever you drag in the preview:

- **Mobile**: 700 px wide or narrower.
- **Tablet**: 701 to 1023 px.
- **Desktop**: 1024 px or wider.

## Responsive

- **Enable responsive table**: turns the responsive layout on. It is on for new tables, but some [templates](/drag-drop-templates) start with it off, so they keep their desktop layout on phones. While it is off, the controls below are greyed out.

## Mode options

Choose the **Mobile**, **Tablet** or **Desktop** tab. Mobile and Tablet set how the table stacks on that device:

- **Disable breakpoint**: keep the normal table layout on this device. The other options for the device are greyed out.
- **Cell stack direction**: stack cells as a **Row** (default) or a **Column**.
- **Top row as header**: repeat the first row as a heading in each stacked group (on by default).
- **Items per header**: how many columns share one header group. The default is 1 on mobile and 2 on tablet. The highest value you can pick depends on the table: the number of rows minus one, or the number of cells when **Top row as header** is off. In a one-row table it is locked.
- **Group separator**: the space between stacked groups (1–10, default 5). It is locked when the table has only one row, when **Top row as header** is off, when **Separate Columns/Rows** is on in the [table settings](/ninja-tables-drag-and-drop-table-settings), or when **Items per header** is at its highest value.

The **Desktop** tab shows **Top row as header** and **Static top row**. Both are off and can't be changed; desktop always uses the normal layout.

<!-- TODO(screenshot): responsive-table-design-2
  screen: Drag & Drop builder › Settings · Table › Mode options › Mobile
  table: a Drag & Drop pricing table
  state: Mobile tab open, canvas in Mobile preview
  highlight: Items per header
  view: admin
  alt: Mode options for mobile with stack direction, top row as header, items per header and group separator
-->

## Responsive settings

For **Mobile** and **Tablet** separately:

- **Cell padding** (0–50, default 10): space inside each cell on that device.
- **Table alignment**: **Left**, **Center** (default) or **Right** on that device.

<!-- TODO(screenshot): responsive-table-design-3
  screen: Drag & Drop builder › Settings · Table › Responsive settings
  table: a Drag & Drop pricing table
  state: Mobile tab with Cell padding and Table alignment
  highlight: Cell padding
  view: admin
  alt: Responsive settings for mobile with cell padding and table alignment
-->

Click **Save** to keep your changes. This is how a responsive table looks on a phone:

<!-- TODO(screenshot): responsive-table-design-4
  screen: A page containing the Drag & Drop table
  table: a Drag & Drop pricing table
  state: Page viewed at phone width with cells stacked under row headers
  highlight: -
  view: frontend
  alt: Responsive Drag & Drop table stacked on a phone screen
-->

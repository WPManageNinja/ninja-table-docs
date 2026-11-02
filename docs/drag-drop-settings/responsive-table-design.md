---
title: "Drag & Drop Mobile & Tablet Layout"
description: "Make a Drag & Drop table readable on phones and tablets: stack cells, use the top row as headers, and set padding and alignment per device."
---

# Drag & Drop Mobile & Tablet Layout

On phones and tablets, a wide Drag & Drop table is hard to read. The **responsive** settings stack the table's cells into groups on smaller screens, so each column becomes a readable block.

1. In the builder, open the **Responsive** tab of the right panel (next to **Elements** and **Settings**).
2. Turn on **Enable Responsive Table**. The **Mode Options** and **Responsive Settings** sections appear below it.

![Responsive tab with the Enable Responsive Table switch and its sections](/images/drag-drop-settings/responsive-table-design/1.-Responsive-Tab-With-The-Enable-Responsive.webp)

## Preview and real breakpoints

Check the result with the **Desktop**, **Tablet** and **Mobile** buttons in the canvas toolbar. In tablet and mobile view you can only look; switch back to **Desktop** to edit. When you open **Responsive Settings** while the canvas is on **Desktop**, it switches to **Tablet** for you.

A width slider above the table lets you drag the preview: mobile from 300 to 699 px (starting at 400 px) and tablet from 700 to 1023 px. It only appears while **Enable Responsive Table** is on and that device's **Disable Responsive Layout** is off.

On your site the layout switches at fixed widths, whatever you drag in the preview:

- **Mobile**: 700 px wide or narrower.
- **Tablet**: 701 to 1023 px.
- **Desktop**: 1024 px or wider.

## Enable Responsive Table

**Enable Responsive Table** turns the responsive layout on. It is on for new tables, but some [templates](/drag-drop-templates) start with it off, so they keep their desktop layout on phones.

While it is off, the tab shows only the switch and the hint "Enable Responsive Table To Show Mode Options And Responsive Settings. Existing Settings Are Retained." Your earlier settings come back when you switch it on again.

## Mode Options

Choose the **Mobile**, **Tablet** or **Desktop** tab. Mobile and Tablet set how the table stacks on that device. Each option has a short help line under it.

- **Disable Responsive Layout**: use the original table layout on this device instead of rearranging cells. The other options for the device are greyed out.
- **Cell Stacking Order**: stack cells as a **Row** (default) or a **Column**.
- **Use Top Row As Header**: repeat the first row as a heading in each stacked group (on by default).
- **Items Per Group**: how many columns share one header group. The default is 1 on mobile and 2 on tablet. The highest value you can pick depends on the table: the number of rows minus one, or the number of cells when **Use Top Row As Header** is off. In a one-row table it is locked.
- **Group Divider Thickness (Px)**: the space between stacked groups (1–10, default 5). It is locked when the table has only one row, when **Use Top Row As Header** is off, when **Separate Columns/Rows** is on in the [table settings](/ninja-tables-drag-and-drop-table-settings), or when **Items Per Group** is at its highest value.

The **Desktop** tab shows **Top Row As Header** and **Static Top Row**. Both are off and can't be changed; desktop always uses the normal layout.

![Mode Options for mobile with cell stacking order, use top row as header, items per group and group divider thickness](/images/drag-drop-settings/responsive-table-design/2.-Mode-Options-For-Mobile-With-Cell.webp)

## Responsive Settings

For **Mobile** and **Tablet** separately:

- **Cell Padding** (0–50, default 10): space inside each cell on that device.
- **Table Alignment**: **Left**, **Center** (default) or **Right** on that device.

![Responsive Settings for mobile with cell padding and table alignment](/images/drag-drop-settings/responsive-table-design/3.-Responsive-Settings-For-Mobile-With-Cell.webp)

Click **Save** to keep your changes. This is how a responsive table looks on a phone:

<!-- TODO(screenshot): responsive-table-design-4
  screen: A page containing the Drag & Drop table
  table: a Drag & Drop pricing table
  state: Page viewed at phone width with cells stacked under row headers
  highlight: -
  view: frontend
  blocked: Website Pricing is not saved with a responsive layout and demo tables must not be saved
  alt: Responsive Drag & Drop table stacked on a phone screen
-->

::: faq
== Why don't I see Mode Options or Responsive Settings?
**Enable Responsive Table** is off. Turn it on at the top of the **Responsive** tab.
== Why are the options for a device greyed out?
**Disable Responsive Layout** is on for that device. Turn it off to use the stacking options.
== Why does my phone switch layout at a different width than my preview?
The preview slider is only a test tool. On your site the layout switches at fixed widths: 700 px or narrower for mobile, 701 to 1023 px for tablet.
:::

---
title: "Drag & Drop Mobile & Tablet Layout"
description: "Make a Drag & Drop table readable on phones and tablets: stack cells, use the top row as headers, and set padding and alignment per device."
---

# Drag & Drop Mobile & Tablet Layout

On phones and tablets, a wide Drag & Drop table is hard to read. The **responsive** settings stack the table's cells into groups on smaller screens, so each column becomes a readable block.

1. In the builder, open the **Responsive** tab of the right panel (next to **Elements** and **Settings**).
2. Turn on **Enable Responsive Table**. A **Desktop** / **Tablet** / **Mobile** switch appears below it, with the settings of the device you pick.

![Responsive tab with the Enable Responsive Table switch and the device switch](/images/drag-drop-settings/responsive-table-design/1.-Responsive-Tab-With-The-Enable-Responsive.webp)

## Preview and real breakpoints

The **Desktop**, **Tablet** and **Mobile** switch in the **Responsive** tab is the same switch as the one in the canvas toolbar. Pick a device in either place and the other follows, so the canvas always shows the device whose settings you are editing. In tablet and mobile view you can only look; switch back to **Desktop** to edit. Leaving the **Responsive** tab puts the canvas back on **Desktop**.

A **Preview Width** row above the table lets you drag the preview or type a width in px: mobile from 300 to 699 px (starting at 400 px) and tablet from 700 to 1023 px (starting at 750 px). It only appears while **Enable Responsive Table** is on and that device's **Disable Responsive Layout** is off.

While **Enable Responsive Table** is off, the tablet and mobile previews show the table at a plain device width (768 px and 390 px), with the note "Responsive Layout Is Off: Visitors Scroll The Table Sideways. Turn It On In The Responsive Tab.".

On your site the layout switches at fixed widths, whatever you drag in the preview:

- **Mobile**: 700 px wide or narrower.
- **Tablet**: 701 to 1023 px.
- **Desktop**: 1024 px or wider.

## Enable Responsive Table

**Enable Responsive Table** turns the responsive layout on. It is on for new tables and for every [template](/drag-drop-templates).

While it is off, the tab shows only the switch and the hint "Enable Responsive Table To Show Mode Options And Responsive Settings. Existing Settings Are Retained." Your earlier settings come back when you switch it on again.

## Layout of one device

With **Enable Responsive Table** on, pick **Desktop**, **Tablet** or **Mobile** with the switch. The settings of that device are in one list under a heading such as **Mobile Layout**. The layout options come first, then the spacing options (see below). Mobile and Tablet set how the table stacks on that device. Each layout option has a short help line under it.

- **Disable Responsive Layout**: use the original table layout on this device instead of rearranging cells. The other options for the device are greyed out.
- **Cell Stacking Order**: stack cells as a **Row** (default) or a **Column**.
- **Use Top Row As Header**: repeat the first row as a heading in each stacked group (on by default for new tables; several [templates](/drag-drop-templates) start with it off on mobile or tablet). The builder preview follows this switch. On your live site, a table with two or more rows always uses its first row as the header, so the switch only changes how a one-row table stacks.
- **Items Per Group**: how many columns share one header group. The default is 1 on mobile and 2 on tablet. The highest value you can pick depends on the table: the number of rows minus one, the number of cells when **Use Top Row As Header** is off, or the number of columns in a one-row table. In a one-row table with **Use Top Row As Header** on, it is locked.
- **Group Divider Thickness (Px)**: the space between stacked groups (1–10, default 5). It is locked when the table has only one row, when **Use Top Row As Header** is off, when **Separate Columns/Rows** is on in the [table settings](/ninja-tables-drag-and-drop-table-settings), or when **Items Per Group** is at its highest value.

The **Desktop** layout shows **Top Row As Header** ("Use The First Row As Table Headings.") and **Static Top Row** ("Keep The First Row Visible While Scrolling."). Both are off and can't be changed; desktop always uses the normal layout.

![Layout options for mobile with cell stacking order, use top row as header, items per group and group divider thickness](/images/drag-drop-settings/responsive-table-design/2.-Mode-Options-For-Mobile-With-Cell.webp)

## Spacing for Mobile and Tablet

Below the layout options, **Mobile** and **Tablet** each have their own:

- **Cell Padding** (0–50, default 10): space inside each cell on that device.
- **Table Alignment**: **Left**, **Center** (default) or **Right** on that device.

![Spacing options for mobile with cell padding and table alignment](/images/drag-drop-settings/responsive-table-design/3.-Responsive-Settings-For-Mobile-With-Cell.webp)

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
== Why don't I see the device layout and spacing options?
**Enable Responsive Table** is off. Turn it on at the top of the **Responsive** tab.
== Why are the options for a device greyed out?
**Disable Responsive Layout** is on for that device. Turn it off to use the stacking options.
== Why does my phone switch layout at a different width than my preview?
The preview slider is only a test tool. On your site the layout switches at fixed widths: 700 px or narrower for mobile, 701 to 1023 px for tablet.
:::

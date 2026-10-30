---
title: "Button Element"
description: "Add a call-to-action button to a Drag & Drop table cell, with its own link, colors, size, icon and hover effect."
---

# Button Element

The **Button** element adds a clickable button to a Drag & Drop table cell, such as "Buy now" in a pricing table. Each button has its own link, colors, size, optional icon and hover effect. The button is free; adding an icon to it needs Pro.

To add one, click a cell and click **Button** in the **Elements** tab. If no single cell is selected, it goes into the last (bottom-right) cell. Click the button to set its options in the **Settings** tab, which has four sub-tabs: **General**, **Text**, **Icon** and **Hover**.

<!-- TODO(screenshot): button-element-1
  screen: Drag & Drop builder › canvas
  table: a Drag & Drop pricing table
  state: A Button element in a pricing plan cell
  highlight: -
  view: admin
  alt: Button element in a Drag & Drop table cell
-->

## General

- **Label** (default "Button Text"): the button text.
- **Background color** (default `#1E90FF`).
- **Border color** (default `#000000`), **Border size** (0–10, default 0) and **Border radius** (0–30, default 5).
- **Full width** (on by default): stretch the button across the cell. Turn it off to show **Button size** and **Alignment**.
- **Button size**: **S**, **M** (default) or **L**. Only shown when **Full width** is off.
- **Alignment**: **Left**, **Center** (default) or **Right**. Only shown when **Full width** is off.
- **URL** (default `https://example.com`): where the button links to.
- **Link rel attributes**: tick `sponsored`, `nofollow`, `noreferrer` or `noopener`, for example for affiliate links. None are ticked by default.
- **Open in a new tab** (on by default).

<!-- TODO(screenshot): button-element-2
  screen: Drag & Drop builder › Settings › Button › General
  table: a Drag & Drop pricing table
  state: Full width turned off so Button size and Alignment show
  highlight: Full width switch
  view: admin
  alt: Button General options with Full width turned off
-->

## Text

- **Font color**, **Font size** (10–50) and **Font style** (bold, italic, underline, strikethrough).

## Icon (Pro)

Put an icon inside the button. On the free version this sub-tab only shows "You are using free version of ninja-tables".

- **Enable icon** (off by default). The options below appear when it is on.
- **Icon**: pick one from the library with **Search icons**, or click **Upload your own** to choose an image from the media library. An SVG you upload can take the icon color; a PNG or JPG keeps its own colors.
- **Icon color**: leave empty to use the text color. Only shown when the icon is an SVG.
- **Icon size** (10–50): 10 uses the global font size.
- **Item spacing** (0–100, default 0): the gap between the icon and the text.
- **Icon position**: left or right of the text.

<!-- TODO(screenshot): button-element-3
  screen: Drag & Drop builder › Settings › Button › Icon
  table: a Drag & Drop pricing table
  state: Enable icon on, an icon picked
  highlight: Enable icon switch
  view: admin
  alt: Button Icon sub-tab with the icon picker
-->

## Hover

Turn on **Button hover** (off by default) to change the button when a visitor points at it. The other fields appear only when it is on.

- **Background color**, **Text color**, **Border color** and **Border size** (0–10) on hover.
- **Icon color** on hover. Only shown when **Enable icon** is on, you have Pro and the icon is an SVG.
- **Scale** (1–3, default 1): grow the button slightly on hover.

<!-- TODO(screenshot): button-element-4
  screen: Drag & Drop builder › Settings › Button › Hover
  table: a Drag & Drop pricing table
  state: Button hover on
  highlight: Button hover switch
  view: admin
  alt: Button Hover sub-tab with the hover options
-->

Below the sub-tabs, **Spacing** sets the margin and padding around the button; see [Element Spacing](/spacing).

Click **Save** to keep your changes.

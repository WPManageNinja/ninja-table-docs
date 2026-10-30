---
title: "Styled List Element (Pro)"
description: "Add a list with your own icons instead of bullets, such as check marks for included features, to a Drag & Drop table cell (Pro)."
---

# Styled List Element (Pro)

The **Styled List** element (Pro) is a list that uses an icon of your choice instead of a bullet, such as a check mark in front of each feature in a pricing plan. In the Settings tab it is titled "Stylist list". On the free version the tile has a **PRO** badge, and clicking it shows "You are using free version of ninja-tables, Upgrade To Pro" and adds nothing.

To add one, click a cell and click **Styled List** in the **Advanced** group of the **Elements** tab. If no single cell is selected, it goes into the last (bottom-right) cell. The list starts with three items. Click the list to set its options in the **Settings** tab, which has three sub-tabs: **General**, **Text** and **Icon**.

<!-- TODO(screenshot): styled-list-1
  screen: Drag & Drop builder › canvas
  table: a Drag & Drop pricing table
  state: A Styled List with check mark icons in a plan cell
  highlight: -
  view: admin
  alt: Styled List element with check mark icons
-->

## Add and remove items

Click an item to edit its text. There is no **Add item** button. Hover over an item and click its **copy** icon to add another item, or its **delete** icon to remove it. These icons only show in the Desktop preview.

## General

- **Space between icon and text** (0–200).
- **Item spacing vertically**: the space between items. The minimum is the table's global font size minus 2, the maximum is 50.
- **Alignment**: **Left**, **Center** (default) or **Right**.

## Text

- **Font color**, **Font size** (10–50) and **Font style** (bold, italic, underline, strikethrough).

## Icon

- **Icon color**: only shown when the icon is an SVG. An uploaded PNG or JPG keeps its own colors.
- **Icon size** (10–50).
- **Icon**: pick one from the library with the search box, or click **Upload your own** to choose an image from the media library. The default icon is "heart".

<!-- TODO(screenshot): styled-list-2
  screen: Drag & Drop builder › Settings › Stylist list › Icon
  table: a Drag & Drop pricing table
  state: Icon sub-tab open with the icon picker
  highlight: Icon picker
  view: admin
  alt: Styled List Icon sub-tab with the icon picker
-->

Below the sub-tabs, **Spacing** sets the margin and padding around the list; see [Element Spacing](/spacing). Click **Save** to keep your changes.

For a plain bulleted or numbered list, use the free [List element](/list-element).

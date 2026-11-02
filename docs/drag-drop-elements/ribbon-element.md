---
title: "Ribbon Element (Pro)"
description: "Add a ribbon such as \"Most popular\" or \"Best value\" to a Drag & Drop table cell (Pro)."
---

# Ribbon Element (Pro)

The **Ribbon** element (Pro) adds a label such as "Most popular" or "Best value" across the corner or edge of a cell, so one plan or product stands out. On the free version the tile has a **PRO** badge, and clicking it shows "You are using free version of ninja-tables, Upgrade To Pro" and adds nothing.

To add one, click a cell and click **Ribbon** in the **Advanced** group of the **Elements** tab. If no single cell is selected, it goes into the last (bottom-right) cell. Click it to set its options in the **Settings** tab, which has three sub-tabs: **General**, **Text** and **Background**.

![Ribbon element on a pricing plan cell](/images/drag-drop-elements/ribbon-element/1.-Ribbon-Element-On-A-Pricing-Plan.webp)

## General

The options shown depend on **Ribbon Type**:

- **Ribbon Type**: **side** (default), **bookmark**, **corner** or **horizontal**.
- **Ribbon Position**: **left** (default) or **right**. Only for the **corner** type. Switching it resets **X Offset**.
- **Ribbon Width** and **Ribbon Height**: the ranges differ per type.

| Type | Ribbon Width (default) | Ribbon Height (default) |
| --- | --- | --- |
| side | 20 to the cell width (55) | 10–100 (17) |
| bookmark | 30 to the cell width plus 16 (55) | 5–200 (36) |
| corner | 100–500 (245) | 10–60 (10) |
| horizontal | 30 to the cell width plus 20 (170) | 5–100 (25) |

- **X Offset**: moves the ribbon sideways. Only for the **corner** (−30 to the cell width minus 100, default −13) and **bookmark** (from −10, default −10) types. **Side** and **horizontal** ribbons have no **X Offset**.
- **Y Offset** (−150 to 150, default −11): moves the ribbon up or down. Shown for every type.
- **Table Margin Top**: adds space above the whole table (it edits **Margin Top** under the table's **Table Style**), so a ribbon that sticks out above the table isn't cut off. Use it only for **horizontal** ribbons; the slider goes from 0 to the ribbon height.

![Ribbon General options for the corner type](/images/drag-drop-elements/ribbon-element/2.-Ribbon-General-Options-For-The-Corner.webp)

## Text

- **Ribbon text** (default "Ribbon"): the label, for example "Most popular".
- **Font Color**, **Font Size** (10–50) and **Font Style**.
- **Font X Offset** and **Font Y Offset** (−100 to 100): position the text on the ribbon.

## Background

- **Background Color** (default `#C71585`): the ribbon's color.

![Ribbon Background sub-tab with the color picker](/images/drag-drop-elements/ribbon-element/3.-Ribbon-Background-Sub-Tab.webp)

The Ribbon has no **Spacing** section; use the offsets instead. Click **Save** to keep your changes.

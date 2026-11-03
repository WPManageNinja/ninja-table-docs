---
title: "Ribbon Element (Pro)"
description: "Add a ribbon such as \"Most popular\" or \"Best value\" to a Drag & Drop table cell (Pro)."
---

# Ribbon Element (Pro)

The **Ribbon** element (Pro) adds a label such as "Most popular" or "Best value" across the corner or edge of a cell, so one plan or product stands out. On the free version the tile has a **PRO** badge, and clicking it shows "You are using free version of ninja-tables, Upgrade To Pro" and adds nothing.

To add one, click a cell and click **Ribbon** in the **Advanced** group of the **Elements** tab. If no single cell is selected, it goes into the last (bottom-right) cell. Click it to set its options in the **Settings** tab. The options are in short sections, not sub-tabs: the top part (text and style), **Size**, **Text**, **Background**, and a folded **Fine-Tune Position** group.

The ribbon is pinned to the corner or edge of its cell and clipped to the cell, both in the builder and on your site.

![Ribbon element on a pricing plan cell](/images/drag-drop-elements/ribbon-element/1.-Ribbon-Element-On-A-Pricing-Plan.webp)

## Top of the panel

- **Ribbon Text** (default "Ribbon"): the label, for example "Most popular".
- **Style**: **Tag** (default), **Corner**, **Bookmark** or **Banner**.
- **Corner** (only for the **Corner** style): **Left** (default) or **Right**. A note says: "Corner ribbons need a cell about 100px tall to show in full." Switching it resets the corner **X Offset**.

![Ribbon options for the Corner style](/images/drag-drop-elements/ribbon-element/2.-Ribbon-General-Options-For-The-Corner.webp)

## Size

**Ribbon Width** and **Ribbon Height**. The ranges differ per style:

| Style | Ribbon Width (default) | Ribbon Height (default) |
| --- | --- | --- |
| Tag | 20 to the cell width (55) | 10–100 (17) |
| Bookmark | 30 to the cell width plus 16 (55) | 5–200 (36) |
| Corner | 100–500 (245) | 10–60 (10) |
| Banner | 30 to the cell width plus 20 (170) | 5–100 (25) |

## Text

- **Font Color**, **Font Size** (10–50) and **Font Style** (**Bold**, **Italic**, **Underline**, **Strikethrough**).

## Background

- **Background Color** (default `#C71585`): the ribbon's color.

![Ribbon Background section with the color picker](/images/drag-drop-elements/ribbon-element/3.-Ribbon-Background-Sub-Tab.webp)

## Fine-Tune Position

Click **Fine-Tune Position** to open the offsets most people never need:

- **X Offset**: moves the ribbon sideways. Only for the **Corner** (−30 to the cell width minus 100, default −13) and **Bookmark** (from −10, default −10) styles. **Tag** and **Banner** ribbons have no **X Offset**.
- **Y Offset** (−150 to 150, default −11): moves the ribbon up or down. Shown for every style.
- **Text X Offset** and **Text Y Offset** (−100 to 100): move the text on the ribbon.
- **Table Margin Top**: adds space above the whole table (it edits **Margin Top** under the table's **Table Style**), so a ribbon that sticks out above the table isn't cut off. Only for the **Banner** style; the slider goes from 0 to the banner height (25 by default).

The Ribbon has no **Spacing** section; use the offsets instead. Click **Save** to keep your changes.

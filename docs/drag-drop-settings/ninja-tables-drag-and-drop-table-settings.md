---
title: "Drag & Drop Table Settings"
description: "Table-wide settings for Drag & Drop tables: padding, alignment, size limits, background, custom CSS and JS, sticky rows, borders and global text style."
---

# Drag & Drop Table Settings

**Table settings** apply to the whole Drag & Drop table: spacing and size, colors, borders, the default text style, sticky rows and columns, and custom code.

To open them, click outside the table in the builder so nothing is selected. The **Settings** tab of the right panel shows **Settings · Table**, with these sections.

![Table settings](/images/drag-drop-settings/ninja-tables-drag-drop/1.-Data-Table-Settings.webp)

## General

- **Cell padding**: space between a cell's border and its content (0–50, default 10).
- **Table alignment**: place the table **Left**, **Center** (default) or **Right** on the page.
- **Separate Columns/Rows**: show cells as separate blocks with gaps between them. When on, set **Space between columns** and **Space between rows** (0–50, default 3).
- **Table container max width**: limit how wide the table can get (100–5000, default 700 when turned on). A wider table gets a horizontal scrollbar.
- **Table cell min auto width**: the smallest width a cell shrinks to (default 150).
- **Table container max height**: the tallest the table can be (default 500). Taller tables scroll inside this height, so raise it if your table is cut off on the page.

![General settings](/images/drag-drop-settings/ninja-tables-drag-drop/2.-Table-cell-settings.webp)

## Background

- **Header background**, **Even row background** and **Odd row background**.

The same colors, plus colors for a selected row, column or cell, are in [Cell Settings](/drag-drop-cell-settings).

## Custom CSS

Add CSS that only affects this table. Start your selectors with `.ntb_<ID>`, for example `.ntb_123`, to target this table. Don't include `<style>` tags.

![Custom CSS](/images/drag-drop-settings/ninja-tables-drag-drop/4.-Custom-CSS-in-drag-and-drop.webp)

## Custom JS (Pro)

Add JavaScript for this table. Use `.ntb_<ID>` to target it. Don't include `<script>` tags.

## Sticky (Pro)

- **First row sticky**: keep the first row visible while scrolling down.
- **First column sticky**: keep the first column visible while scrolling sideways.

## Accessibility

- **Table role**: the role screen readers announce for the table: **Table** (default), **Presentation**, **List** or **Row Group**. Use **Presentation** when the table is only used for layout.

## Border

- **Table border** (0–50, default 0) and **Border color**.
- **Apply inner border** (on by default): borders between cells. When on, set **Header inner border**, **Inner border color** and **Inner border size** (default 1).

![Border settings](/images/drag-drop-settings/ninja-tables-drag-drop/7.-drag-and-drop-table-border.webp)

## Global style

The default text style for the table. An element's own style overrides it.

- **Margin top** and **Margin bottom**: space above and below the table.
- **Font size** (12–40, default 15) and **Color**.
- **Font family**: **Inherit** (your theme's font) or a common web font such as Arial, Georgia, Tahoma or Verdana.

## Responsive

**Responsive**, **Mode options** and **Responsive settings** decide how the table looks on phones and tablets. See [Mobile & Tablet Layout](/responsive-table-design).

## Export

To export the table as CSV or JSON, use **⋯ More actions** in the builder header. See the [Builder Tour](/drag-drop-builder-tour).

Click **Save** to keep your changes.

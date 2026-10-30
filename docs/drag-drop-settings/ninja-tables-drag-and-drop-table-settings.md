---
title: "Drag & Drop Table Settings"
description: "Table-wide settings for Drag & Drop tables: padding, alignment, size limits, background, custom CSS and JS, sticky rows, borders and global text style."
---

# Drag & Drop Table Settings

**Table settings** apply to the whole Drag & Drop table: spacing and size, colors, borders, the default text style, sticky rows and columns, and custom code.

1. In the builder, click outside the table so nothing is selected.
2. Open the **Settings** tab of the right panel. It shows **Settings · Table**, with the sections below in this order.

<!-- TODO(screenshot): ninja-tables-drag-and-drop-table-settings-1
  screen: Drag & Drop builder › Settings · Table
  table: a Drag & Drop pricing table
  state: Nothing selected, all sections collapsed
  highlight: -
  view: admin
  alt: Settings tab with the Table settings sections listed
-->

## General

- **Cell padding**: space between a cell's border and its content (0–50, default 10).
- **Table alignment**: place the table **Left**, **Center** (default) or **Right** on the page. When a container max width is set, this also aligns the container.
- **Separate Columns/Rows**: show cells as separate blocks with gaps between them (off by default). When on, **Space between columns** and **Space between rows** appear (0–50, default 3).
- **Table container max width**: a switch, off by default. Turn it on to set the widest the table can get (100–5000, default 700). With the switch off, the table is still capped at 1160 px on your site.
- **Table cell min auto width**: the smallest width a cell shrinks to (10–500, default 150).
- **Table container max height**: the tallest the table can be (100–10000, default 500). Taller tables scroll inside this height, so raise it if your table is cut off on the page.

<!-- TODO(screenshot): ninja-tables-drag-and-drop-table-settings-2
  screen: Drag & Drop builder › Settings · Table › General
  table: a Drag & Drop pricing table
  state: General expanded, Table container max width switch on with its slider
  highlight: Table container max width switch
  view: admin
  alt: General settings with the container max width switch and slider
-->

## Background

- **Header background** (default `#dddddd`), **Even row background** (default `#dddddd`) and **Odd row background** (default `#ffffff`).

The same colors, plus colors for a selected row, column or cell, are in [Cell Settings](/drag-drop-cell-settings).

## Custom CSS

Add CSS that only affects this table, in the **Add your custom CSS** editor. Start your selectors with `.ntb_<ID>`, for example `.ntb_123`, to target this table. Don't include `<style>` tags. The CSS applies live in the builder.

::: tip
The warning under the editor reads "Please don't include tag" because the tag name is hidden by the plugin's own display. It means no `<style>` tag.
:::

<!-- TODO(screenshot): ninja-tables-drag-and-drop-table-settings-3
  screen: Drag & Drop builder › Settings · Table › Custom CSS
  table: a Drag & Drop pricing table
  state: Custom CSS editor open with a sample rule
  highlight: Add your custom CSS editor
  view: admin
  alt: Custom CSS section with the code editor
-->

## Custom JS (Pro)

Add JavaScript for this table in the **Add your custom JS** editor. Use `.ntb_<ID>` to target the table. Don't include `<script>` tags. The code runs on your site when the table is shown.

On the free version, an info icon beside the heading says "This is a Pro feature." Treat it as a Pro option.

## Sticky (Pro)

- **First row sticky**: keep the first row visible while scrolling down.
- **First column sticky**: keep the first column visible while scrolling sideways.

Both are off by default. They take effect on your site after you click **Save**. On the free version, an info icon says "This is a Pro feature." Treat it as a Pro option.

## Accessibility

- **Table role**: the role screen readers announce for the table: **Table** (default), **Presentation**, **List** or **Row Group**. Use **Presentation** when the table is only used for layout.

## Border

- **Table border** (0–50, default 0) and **Border color** (default `#000000`).
- **Apply inner border** (on by default): borders between cells. When on, set **Header inner border** (on by default), **Inner border color** (default `#000000`) and **Inner border size** (0–50, default 1).

<!-- TODO(screenshot): ninja-tables-drag-and-drop-table-settings-4
  screen: Drag & Drop builder › Settings · Table › Border
  table: a Drag & Drop pricing table
  state: Border expanded with Apply inner border on
  highlight: Apply inner border switch
  view: admin
  alt: Border settings with table border and inner border options
-->

## Global style

The default text style for the table. An element's own style overrides it.

- **Margin top** and **Margin bottom**: space above and below the table (0–100, default 0). The Highlight column option and the Ribbon element can change these automatically.
- **Font size** (12–40, default 15) and **Color**.
- **Font family**: **Inherit** (default, your theme's font) or a web font such as Arial, Helvetica, Georgia, Tahoma, Times New Roman, Verdana or Courier New.

## Responsive

**Responsive**, **Mode options** and **Responsive settings** decide how the table looks on phones and tablets. See [Mobile & Tablet Layout](/responsive-table-design).

## Export

To export the table as CSV or JSON, use **⋯ More actions** in the builder header. See the [Builder Tour](/drag-drop-builder-tour).

Click **Save** to keep your changes.

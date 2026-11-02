---
title: "Drag & Drop Table Settings"
description: "Table-wide settings for Drag & Drop tables: table style, layout, background, borders, sticky rows, accessibility, custom CSS and JS."
---

# Drag & Drop Table Settings

**Table settings** apply to the whole Drag & Drop table: the default text style, layout and size, colors, borders, sticky rows and columns, accessibility, and custom code.

1. In the builder, click outside the table so nothing is selected.
2. Open the **Settings** tab of the right panel. The breadcrumb reads **Table**, and the sections are listed in the order below.

![Settings tab with the Table settings sections listed](/images/drag-drop-settings/ninja-tables-drag-drop/1.-Settings-Tab-With-The-Table-Settings.webp)

## Table Style (Was Global Style)

The default text style for the table. The plugin shows this section as **Table Style** with a small "Global Style" tag beside it. An element's own style overrides it.

- **Margin Top** and **Margin Bottom**: space above and below the table (0–100, default 0). An info icon explains: "The global style will be applied if the component individual style is not applied." The **Highlight Column** option and the **Ribbon** element can change these automatically.
- **Font Size** (12–40, default 15) and **Color** (default `#000001`).
- **Font Family**: **Inherit** (default, your theme's font) or a web font such as Arial, Helvetica, Georgia, Tahoma, Times New Roman, Verdana or Courier New.

## Layout (Was General)

The plugin shows this section as **Layout** with a small "General" tag beside it.

- **Cell Padding**: space between a cell's border and its content (0–50, default 10).
- **Table Alignment**: place the table **Left**, **Center** (default) or **Right** on the page. When a container max width is set, this also aligns the container.
- **Separate Columns/Rows**: show cells as separate blocks with gaps between them (off by default). When on, **Space Between Columns** and **Space Between Rows** appear (0–50, default 3).
- **Table Container Max Width**: a switch, off by default. Turn it on to set the widest the table can get (100–5000, default 700). With the switch off, the table is still capped at 1160 px on your site.
- **Table Cell Min Auto Width**: the smallest width a cell shrinks to (10–500, default 150).
- **Table Container Max Height**: the tallest the table can be (100–10000, default 500). Taller tables scroll inside this height, so raise it if your table is cut off on the page.

![Layout settings with the container max width switch and slider](/images/drag-drop-settings/ninja-tables-drag-drop/2.-Layout-Settings-With-The-Container-Max.webp)

## Background

These are the only place to set the header, even-row and odd-row colors:

- **Header Background** (default `#dddddd`)
- **Even Row Background** (default `#dddddd`)
- **Odd Row Background** (default `#ffffff`)

Colors for one cell, a selected row or a selected column are in [Cell Settings](/drag-drop-cell-settings).

## Border

- **Table Border** (0–50, default 0) and **Border Color** (default `#000000`).
- **Apply Inner Border** (on by default): borders between cells. When on, set **Header Inner Border** (on by default), **Inner Border Color** (default `#000000`) and **Inner Border Size** (0–50, default 1).

![Border settings with table border and inner border options](/images/drag-drop-settings/ninja-tables-drag-drop/3.-Border-Settings-With-Table-Border.webp)

## Sticky (Pro)

- **First Row Sticky**: keep the first row visible while scrolling down.
- **First Column Sticky**: keep the first column visible while scrolling sideways.

Both are off by default. They take effect on your site after you click **Save**. On the free version, an info icon says "This is a Pro feature." Treat it as a Pro option.

## Accessibility

- **Table Role**: the role screen readers announce for the table: **Table** (default), **Presentation**, **List** or **Row Group**. Use **Presentation** when the table is only used for layout.

## Custom CSS

Add CSS that only affects this table, in the **Add Your Custom CSS** editor. Start your selectors with `.ntb_<ID>`, for example `.ntb_123`, to target this table. Don't include `<style>` tags. The CSS applies live in the builder.

::: tip
The warning under the editor reads "Please don't include tag" because the tag name is hidden by the plugin's own display. It means no `<style>` tag.
:::

![Custom CSS section with the code editor](/images/drag-drop-settings/ninja-tables-drag-drop/4.-Custom-CSS-Section-With-The-Code.webp)

## Custom JS (Pro)

Add JavaScript for this table in the **Add Your Custom JS** editor. Use `.ntb_<ID>` to target the table. Don't include `<script>` tags. The code runs on your site when the table is shown.

On the free version, an info icon beside the heading says "This is a Pro feature." Treat it as a Pro option.

## Responsive

Mobile and tablet layout is no longer in this list. It has its own **Responsive** tab in the right panel. See [Mobile & Tablet Layout](/responsive-table-design).

Click **Save** to keep your changes.

::: faq
== Where did General and Global Style go?
They were renamed. **General** is now **Layout** and **Global Style** is now **Table Style**. The options inside are the same.
== Why is my table cut off or scrolling?
**Table Container Max Height** (default 500) limits how tall the table gets. Raise it, or the table scrolls inside that height.
== Where are the mobile and tablet settings?
In the **Responsive** tab, next to **Elements** and **Settings**.
:::

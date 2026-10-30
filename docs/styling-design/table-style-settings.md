---
title: "Appearance Tab Overview"
description: "Design how a table looks on your site with the Appearance tab: a live preview, colors, typography, row styles and table features."
---

# Appearance Tab Overview

The **Appearance** tab is where you design how a table looks and behaves on your site. It shows a live preview of the table on the left and a settings panel on the right, so you see every change before you save it.

1. Go to **Ninja Tables** › **Tables** and open a table.
2. Click the **Appearance** tab.

<!-- TODO(screenshot): table-style-settings-1
  screen: Tables › Product Price List › Appearance
  table: Product Price List
  state: Appearance tab open on the Colors tab, preview visible on the left
  highlight: -
  view: admin
  alt: Appearance tab with the live preview on the left and the settings panel on the right
-->

## The live preview

The preview is drawn by your active theme, the way visitors will see it, including your theme's fonts and styles. Unsaved changes show in the preview until you save or leave the page.

- **Preview Width**: switch between **Desktop**, **Tablet** and **Mobile** to check each screen size.
- **Hide Panel**: the arrow at the top of the panel gives the preview the full width. Click the sliders icon in the toolbar (**Show Panel**) to bring the settings back.

Click **Save** at the top of the editor to keep your changes. Appearance settings and the Export & Print buttons are saved together.

::: tip
The preview needs at least one column. If the table has none yet, add them in [Table Rows](/working-in-table-rows) first.
:::

## The settings panel

The panel has three tabs: **Colors**, **Style** and **Features**. It opens on **Colors**. In **Style** and **Features**, sections are accordions: click a heading to open it, and only one section stays open at a time. A section with a switch in its heading (**Search**, **Sorting**, **Pagination**, **Stackable Table**) turns that whole feature on or off.

### Colors

Pick a ready-made color scheme, or set every color yourself in **Custom** mode (Pro). See [Table Colors](/table-color-settings).

### Style

- **Title & Header**: **Show Table Title**, **Show Table Description** and **Show Header Row**. See [Table Title, Caption & Description](/table-title-description-settings).
- **Typography**: **Font Family** and **Font Size**. See [Table Fonts](/table-font-settings).
- **Rows & Borders**: the style library and the row and border switches, described below.

<!-- TODO(screenshot): table-style-settings-2
  screen: Tables › Product Price List › Appearance › Style › Rows & Borders
  table: Product Price List
  state: Style tab, Rows & Borders section open
  highlight: Style Library
  view: admin
  alt: Rows & Borders section with the Style Library choice and the style switches
-->

The switches under **Rows & Borders** depend on the table's engine and library. Each has a short description under it.

- **FooTable tables** show a **Style Library** choice: **Semantic UI** (default), **Bootstrap 4** or **Bootstrap 3**. Semantic UI suits most sites; pick Bootstrap only if your theme already uses it. The switches below change with the library:
  - **Semantic UI**: **Single Line Cells**, **Fixed Layout**, **Hover Rows**, **Bordered Table**, **Hide Horizontal Borders**, **Hide Vertical Borders**, **Striped Rows**, **Compact Table** and **Vertically Centered Table Cell Contents**. **Single Line Cells** and **Fixed Layout** exist only in Semantic UI.
  - **Bootstrap 4**: **Striped Rows**, **Bordered Table**, **Hide Horizontal Borders**, **Hide Vertical Borders**, **Hover Rows**, **Small Table** and **Vertically Centered**.
  - **Bootstrap 3**: the same list, with **Condensed Table** in place of **Small Table**.
- **DataTables tables** have no library choice. The switches are **Hover Rows**, **Striped Rows**, **Bordered Table**, **Hide Horizontal Borders**, **Hide Vertical Borders**, **Hide All Borders**, **Compact Table** and **Vertically Centered Table Cell Contents**. **Hide All Borders** exists only on DataTables.

To see which engine a table uses, or to compare them, read [FooTable or DataTables: Choose an Engine](/choose-table-engine).

::: warning
Style switches are tied to the engine. If you switch a table's engine, check **Rows & Borders** again, because the FooTable and DataTables styles are separate sets.
:::

### Features

- **Search**: the search box, its texts, position and colors. See [Search Box](/add-or-remove-search-or-filter-functionality).
- **Sorting**: let visitors sort by clicking a column heading, and set the default order. See [Sorting](/sorting).
- **Pagination**: rows per page, page-size changer and position. See [Pagination](/pagination).
- **Sticky Header & Column** (Pro): see [Sticky Header & First Column](/other-design-settings).
- **Responsive Breakpoint**, **Stackable Table** and **Others** (Row Details Popup): how a table behaves on small screens. See [Responsive & Stackable Table](/stackable-table).
- **Export & Print** (Pro): download and print buttons for visitors. See [Export & Print Buttons](/csv-and-print-button).

## Set the starting design for new tables

Appearance changes apply to the open table only. To choose the look every new table starts with, use the gear icon › **Settings** › **Global appearance**. See [Default Design for New Tables](/use-design-as-default).

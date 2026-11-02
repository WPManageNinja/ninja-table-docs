---
title: "Rows & Borders"
description: "Turn row stripes, hover highlight, borders and cell spacing on or off, and pick the style library a table uses."
---

# Rows & Borders

The **Rows & Borders** section controls how the rows and borders of a table look: stripes, hover highlight, borders and cell spacing. It also holds the style library for FooTable tables. It is free.

1. Go to **Ninja Tables** › **Tables** and open a table.
2. Click the **Appearance** tab, then the **Style** tab in the settings panel.
3. Open **Rows & Borders**.

![Rows & Borders section with the Style Library choice and the style switches](/images/styling-design/table-rows-borders/1.-Rows-Borders-Section-With-The-Style.webp)

The switches depend on the table's engine and library. Each has a short description under it. Check the result in the preview, then click **Save**.

## Switches for your engine

The switches depend on the table's engine. Pick the tab that matches your table.

::: tabs
== FooTable
FooTable tables show a **Style Library** choice: **Semantic UI** (default), **Bootstrap 4** or **Bootstrap 3**. Semantic UI suits most sites; pick Bootstrap only if your theme already uses it. The switches below change with the library.

- **Semantic UI**: **Single Line Cells**, **Fixed Layout**, **Hover Rows**, **Bordered Table**, **Hide Horizontal Borders**, **Hide Vertical Borders**, **Striped Rows**, **Compact Table** and **Vertically Centered Table Cell Contents**. **Single Line Cells** and **Fixed Layout** exist only in Semantic UI.
- **Bootstrap 4**: **Striped Rows**, **Bordered Table**, **Hide Horizontal Borders**, **Hide Vertical Borders**, **Hover Rows**, **Small Table** and **Vertically Centered**.
- **Bootstrap 3**: the same list, with **Condensed Table** in place of **Small Table**.
== DataTables
DataTables tables have no library choice. The switches are **Hover Rows**, **Striped Rows**, **Bordered Table**, **Hide Horizontal Borders**, **Hide Vertical Borders**, **Hide All Borders**, **Compact Table** and **Vertically Centered Table Cell Contents**.

**Hide All Borders** exists only on DataTables.
:::

To see which engine a table uses, or to compare them, read [FooTable or DataTables: Choose an Engine](/choose-table-engine).

::: warning
Style switches are tied to the engine. If you switch a table's engine, check **Rows & Borders** again, because the FooTable and DataTables styles are separate sets.
:::

## Common questions

::: faq
== Why don't I see **Hide All Borders**?
It exists only on DataTables tables. FooTable tables have **Hide Horizontal Borders** and **Hide Vertical Borders** instead.
== Why did my table look different after I changed the engine?
The FooTable and DataTables styles are separate sets. Open **Rows & Borders** again and set the switches for the new engine.
== My custom border color doesn't show.
A border color only shows when the table has borders. Turn on **Bordered Table**, then set the color in [Table Colors](/table-color-settings).
:::

## Related

- Color the rows and borders: [Table Colors](/table-color-settings). A custom border color only shows when **Bordered Table** is on.
- Color a single row or cell: [Row & Cell Colors](/tables-row-color).
- Set the library and switches every new table starts with: [Default Design for New Tables](/use-design-as-default).

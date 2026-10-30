---
title: "Import Table from TablePress Plugin"
description: "Move tables from TablePress or Data Tables Generator by Supsystic into Ninja Tables with one click from the Import screen."
---

# Import Table from TablePress Plugin

If you've built tables with **TablePress** or **Data Tables Generator by Supsystic**, you can bring them into Ninja Tables without exporting files. The **Import from another plugin** card on the Import screen lists the tables it finds and imports each one with a click.

## Before you start

The other plugin must be installed and active on the same site, with at least one table in it. Ninja Tables only looks for those plugins' tables when it detects them.

<!-- TODO(screenshot): import-table-from-tablepress-plugin-1
  screen: TablePress › All Tables
  table: -
  state: TablePress table list with at least one table
  highlight: -
  view: admin
  alt: TablePress table list with a table ready to import
  blocked: TablePress is not installed on the demo site
-->

## Import a table

1. In Ninja Tables, click **Import** in the top bar.
2. Find the **Import from another plugin** card on the right. When a supported plugin is active, it says **We found TablePress on this site** (or the Supsystic plugin) with a **Detected** badge, and lists that plugin's tables.
3. Click **Import** next to the table you want. The button reads **Importing...** while it works, and only one table imports at a time.
4. When it's done, the row shows an **Imported** badge. Click **View** to open the new table in Ninja Tables.

<!-- TODO(screenshot): import-table-from-tablepress-plugin-2
  screen: Ninja Tables › Import › Import from another plugin
  table: -
  state: Card showing the Detected badge, a TablePress table and its Import button
  highlight: Import button
  view: admin
  alt: Import from another plugin card listing a TablePress table
  blocked: TablePress is not installed on the demo site
-->

Repeat for each table. Tables you've already imported keep the **Imported** badge with a **View** button, so you can tell them apart.

If no supported plugin is active, the card says **No other table plugin was found on this site**. If a plugin is found but has no tables, the card says you don't have any tables in it.

## After importing

The imported table is a normal Ninja Tables table with its own columns and rows. Its name is the original name followed by "(Imported From Table Press)", or "(Imported From Supsystic Table)" for Supsystic tables. You can rename it in its [table details](/table-title-description-settings).

- The table's first row becomes the column names. If a TablePress table has its header row turned off, the columns are named **Ninja Column 1**, **Ninja Column 2** and so on.
- It doesn't stay linked to the original, so changes in TablePress won't carry over.

Style the table in [Appearance](/table-style-settings), then replace the old plugin's shortcode on your pages with the Ninja Tables shortcode from the [Tables list](/tables-list).

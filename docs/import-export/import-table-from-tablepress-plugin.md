---
title: "Import Table from TablePress Plugin"
description: "Move tables from TablePress or Data Tables Generator by Supsystic into Ninja Tables with one click from the Import screen."
---

# Import Table from TablePress Plugin

If you've built tables with **TablePress** or **Data Tables Generator by Supsystic**, you can bring them into Ninja Tables without exporting files. The **Import from another plugin** card on the Import screen lists the tables it finds and imports each one with a click.

## Before you start

The other plugin must be installed and active on the same site, with at least one table in it. Ninja Tables only looks for those plugins' tables when it detects them.

Here's an example table made with TablePress:

![Table made of TablePress](/images/import-export/import-table-tablepress/1.-01-2.webp)

## Import a table

1. In Ninja Tables, click **Import** in the top bar.
2. Find the **Import from another plugin** card on the right. When a supported plugin is active, it says **We found TablePress on this site** (or the Supsystic plugin) with a **Detected** badge, and lists that plugin's tables.

![Import From WP Table Plugin](/images/import-export/import-table-tablepress/2.-02-2.webp)

3. Click **Import** next to the table you want.
4. When it's done, the row shows an **Imported** badge. Click **View** to open the new table in Ninja Tables.

![View Imported Table](/images/import-export/import-table-tablepress/3.-03-2.webp)

Repeat for each table. Tables you've already imported keep the **Imported** badge, so you can tell them apart.

If no supported plugin is active, the card says **No other table plugin was found on this site**.

## After importing

The imported table is a normal Ninja Tables table with its own columns and rows. It doesn't stay linked to the original, so changes in TablePress won't carry over. Style it in [Appearance](/table-style-settings), then replace the old plugin's shortcode on your pages with the Ninja Tables shortcode from the [Tables list](/tables-list).

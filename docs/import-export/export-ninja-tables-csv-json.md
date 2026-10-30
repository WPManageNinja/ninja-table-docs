---
title: "Export Ninja Tables (CSV/JSON)"
description: "Download a table's rows as CSV or Excel, or the whole table with its settings as JSON, from Table Rows › Import / Export."
---

# Export Ninja Tables (CSV/JSON)

You can download any table that stores its own rows as a file: **CSV** or **Excel (.xlsx)** for the rows, or **JSON** for the whole table, including its design and settings. Use an export to back up a table, edit the data in a spreadsheet, or move the table to another Ninja Tables site.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/qzE6NmZmQrQ" title="Export and Import Tables Video" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Export a table

1. Open the table from the [Tables list](/tables-list). It opens on the **Table Rows** tab.
2. Click **Import / Export** in the toolbar. The **Import / Export** dialog opens on **Export**, with the **Export This Table** card.

![Import / Export dialog open on the Export tab](/images/import-export/export-ninja-tables-csv/1.-Import-Export-Dialog-Open.webp)

3. Pick a **Format**: **CSV**, **Excel (.xlsx)** or **JSON**. CSV is the default.
4. Click **Export Table**. The file downloads to your computer.

![Export This Table card with the Format menu open](/images/import-export/export-ninja-tables-csv/2.-Export-This-Table-Card.webp)

## Which format to choose

| Format | What's in it | Use it to |
|---|---|---|
| **CSV** | The rows, with column names in the first row | Edit the data in a spreadsheet, or import it elsewhere |
| **Excel (.xlsx)** | The rows, as a ready-to-open spreadsheet | Share the data with people who use Excel, Google Sheets or Numbers |
| **JSON** | The whole table: columns, rows, design and settings | Back up the table, or [import it](/import-ninja-tables-json) into another Ninja Tables site without setting it up again |

In a CSV, a cell holding several values (such as a multi-select) is joined with a comma and a space. Cells that start with a character a spreadsheet could read as a formula are made safe, so opening the file can't run a formula.

## About Excel exports

- The file opens in Excel, Google Sheets and Numbers.
- The first row holds your column names, followed by one row per table row.
- Numbers are exported as numbers. Codes with leading zeros, such as ZIP codes, and long IDs stay as text, so they aren't changed.
- A worksheet can hold up to 1,048,576 rows, which is Excel's own limit. For bigger tables, export as CSV.
- The **Excel (.xlsx)** option only appears if your server has the PHP Zip extension. If you don't see it, ask your host to enable the extension, or export as CSV.

## Large tables

Tables with 20,000 or more rows are streamed to the file as it's built, instead of being loaded into memory first, so a CSV or JSON export of a big table doesn't run out of server memory. You don't need to do anything. Developers can change the 20,000-row threshold with the `ninja_tables_export_stream_threshold` filter.

## Tables you can't export

Connected tables, such as WooCommerce, WP Posts, Google Sheets or Custom SQL tables, get their rows from the source, so their Table Rows toolbar has no **Import / Export** button. Export the data from the source itself.

## Export a Drag & Drop table

In the Drag & Drop builder, click the **More actions** (⋯) button at the top, then choose **Export as CSV** or **Export as JSON** under **Export Table**. The button appears once the table has been saved.

## Let visitors download the table

The export above is for you in the admin. To add CSV, Excel and print buttons for visitors on your site, use **Appearance** › **Export & print** (Pro). See [Export and print buttons](/csv-and-print-button).

To bring an exported file back in, see [Import a CSV, Excel or JSON file](/import-table-data-from-a-csv) or [Import rows into an existing table](/import-csv-file-to-an-existing-table).

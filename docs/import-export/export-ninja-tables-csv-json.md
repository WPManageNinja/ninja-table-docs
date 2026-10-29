---
title: "Export Ninja Tables (CSV/JSON)"
description: "Download a table's rows as CSV or Excel, or the whole table with its settings as JSON, from Table Rows › Import / export › Export."
---

# Export Ninja Tables (CSV/JSON)

You can download any table that stores its own rows as a file: **CSV** or **Excel (.xlsx)** for the rows, or **JSON** for the whole table, including its design and settings. Use an export to back up a table, edit the data in a spreadsheet, or move the table to another Ninja Tables site.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/qzE6NmZmQrQ" title="Export and Import Tables Video" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Export a table

1. Open the table from the [Tables list](/tables-list). It opens on the **Table Rows** tab.
2. Click **Import / export** in the toolbar.

![Import - Export](/images/import-export/export-ninja-tables-csv/1.-01-3.webp)

3. Choose **Export**. The **Export this table** panel opens.

![Export Data](/images/import-export/export-ninja-tables-csv/2.-02-3.webp)

4. Pick a **Format**: **CSV**, **Excel (.xlsx)** or **JSON**.

![File Format](/images/import-export/export-ninja-tables-csv/3.-03-3.webp)

5. Click **Export table**. The file downloads to your computer.

## Which format to choose

| Format | What's in it | Use it to |
|---|---|---|
| **CSV** | The rows, with column names in the first row | Edit the data in a spreadsheet, or import it elsewhere |
| **Excel (.xlsx)** | The rows, as a ready-to-open spreadsheet | Share the data with people who use Excel, Google Sheets or Numbers |
| **JSON** | The whole table: columns, rows, design and settings | Back up the table, or [import it](/import-ninja-tables-json) into another Ninja Tables site without setting it up again |

## About Excel exports

- The file opens in Excel, Google Sheets and Numbers.
- The first row holds your column names, followed by one row per table row.
- Numbers are exported as numbers. Codes with leading zeros, such as ZIP codes, and long IDs stay as text, so they aren't changed.
- A worksheet can hold up to 1,048,576 rows, which is Excel's own limit. For bigger tables, export as CSV.
- The **Excel (.xlsx)** option only appears if your server has the PHP Zip extension. If you don't see it, ask your host to enable the extension, or export as CSV.

## Tables you can't export

Connected tables, such as WooCommerce, WP Posts, Google Sheets or Custom SQL tables, get their rows from the source, so their Table Rows toolbar has no **Import / export** button. Export the data from the source itself.

To export a Drag & Drop table, use the ⋯ menu in the Drag & Drop builder.

## Let visitors download the table

The export above is for you in the admin. To add CSV, Excel and print buttons for visitors on your site, use **Appearance** › **Export & print** (Pro). See [Export and print buttons](/csv-and-print-button).

To bring an exported file back in, see [Import a CSV, Excel or JSON file](/import-table-data-from-a-csv) or [Import rows into an existing table](/import-csv-file-to-an-existing-table).

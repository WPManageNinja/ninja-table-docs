---
title: "Export Ninja Tables (CSV/JSON)"
description: "Export Ninja Tables (CSV/JSON)"
---

# Export Ninja Tables (CSV/JSON)

It is quite easy & straightforward to export table data from **Ninja Tables**. This plugin is designed to make things simpler for the users & improve the overall user experience.

Let's dive into the article to learn how the Ninja Tables export works.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/qzE6NmZmQrQ" title="Export and Import Tables Video" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

- First, navigate to **All Tables** in the Ninja tables. Pick the preferred table you want to export.
- Then move to the **Import-Export** tab.

![Import - Export](/images/import-export/export-ninja-tables-csv/1.-01-3.webp)

- The **Export Data** option can be found below the **Import Data** option, on the **Import-Export** menu.

![Export Data](/images/import-export/export-ninja-tables-csv/2.-02-3.webp)

- Ninja Tables provides three export file formats: **CSV**, **Excel (.xlsx)**, and **JSON**. Now you just need to choose the option.

![File Format](/images/import-export/export-ninja-tables-csv/3.-03-3.webp)

<!-- SCREENSHOT UPDATE NEEDED: images/import-export/export-ninja-tables-csv/3.-03-3.webp - the Format dropdown now lists CSV, Excel (.xlsx) and JSON; retake with the dropdown open. Also retake 2.-02-3.webp if the Export Table panel text changed. -->

- Lastly, save the table data on your computer by clicking on the **Export Table** button.

> [!Note]
> When you export a particular table in CSV or Excel format, you'll just export the table data. However, exporting the JSON file lets you export the Table Styling with the table data. 

So there's no need to customize your table from scratch.

## Export a Table as Excel (.xlsx)

Choose **Excel (.xlsx)** from the **Format** dropdown and click **Export Table** to download a ready-to-open spreadsheet.

- The file opens in Excel, Google Sheets, and Numbers.
- The first row holds your column names, followed by one row per table row.
- Numbers are exported as numbers. Values such as ZIP codes with leading zeros and long IDs stay as text, so they are not changed.
- Large tables are supported. A single worksheet can hold up to 1,048,576 rows, which is Excel's own limit. If your table has more rows, export it as CSV instead.
- The **Excel (.xlsx)** option only shows if your server has the PHP Zip extension enabled. If you don't see it, ask your host to enable the extension or export as CSV.

<!-- SCREENSHOT UPDATE NEEDED: add a new screenshot (suggested name 4.-Export-as-Excel.webp) of the Export Table panel with "Excel (.xlsx)" selected, showing the helper text "Opens in Excel, Google Sheets and Numbers...". -->

To let your site visitors download the table as an Excel file, see [Export Buttons (CSV / Excel / Print)](/guide/table-settings/csv-and-print-button).

Export table data from Ninja Tables and use it in a new table or simply send the CSV/Excel/JSON file to someone who needs it. To bring a file back in, see [Import Table Data from CSV](/guide/import-export/import-table-data-from-a-csv).


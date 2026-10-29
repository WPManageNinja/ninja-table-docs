---
title: "Import CSV File to an Existing Table"
description: "Add rows from a CSV file to a table you already have, or replace all its rows, from Table Rows › Import / export › Import rows."
---

# Import CSV File to an Existing Table

**Import rows** adds the rows from a CSV file to a table that already exists, keeping its columns, design and settings. You can add the new rows after the existing ones, or replace every row in the table. To create a new table from a file instead, see [Import a CSV, Excel or JSON file](/import-table-data-from-a-csv).

Import rows works on tables that store their own rows (Default tables and tables created from a file). Connected tables, such as WooCommerce or Google Sheets tables, get their rows from the source, so they can't import rows.

## Before you start: match the columns

The table needs its columns set up first. Ninja Tables reads the CSV by position: the first value in each line goes into the first column, the second into the second, and so on. So the file must have:

- A header row as its first line. It's skipped, not imported.
- The **same number of columns** as the table, in the **same order**.

Lines with a different number of values than the table has columns are skipped.

The easiest way to get this right is to start from the sample file:

1. Open the table and go to **Table Rows** › **Import / export** › **Import**.
2. Click **Download sample CSV**. The file has your table's column names as its header row, in the right order.
3. Add your rows below the header, and save it as CSV.

The **Sample header structure** table at the bottom of the Import panel also shows the expected columns.

![Import-Export tab](/images/import-export/import-csv-file-existing/1.-01.webp)

### Check a column's order and name

To check which column is which, open the menu on a column header in **Table Rows** and click **Column settings**. The dialog shows the **Column name** and **Column key**.

![Column Name](/images/import-export/import-csv-file-existing/2.-import-CSV-file-to-an-Existing-table-3.webp)

![Column Key](/images/import-export/import-csv-file-existing/3.-02-1.webp)

Then compare the table's columns with the columns in your CSV file, left to right.

![column name same as column key in table](/images/import-export/import-csv-file-existing/4.-import-CSV-file-to-an-Existing-table-5.webp)

## Import the rows

1. Open the table in Ninja Tables and stay on the **Table Rows** tab.
2. Click **Import / export** in the toolbar, then choose **Import**.
3. Click the upload area to choose your CSV file, or drag and drop it there.
4. Choose the options:
   - **Replace existing data**: deletes every row already in the table, then imports the file. Leave it off to add the file's rows after the existing rows.
   - **Convert to UTF-8 format**: turn it on if the file isn't saved as Unicode, so accented characters come through correctly.
5. Click **Import table**.

![Import from CSV button](/images/import-export/import-csv-file-existing/5.-03-1.webp)

When the import finishes, the new rows appear in the grid.

::: warning
**Replace existing data** can't be undone. If you might need the old rows, [export the table](/export-ninja-tables-csv-json) first.
:::

## Troubleshooting

- **"Please use the provided CSV header structure"**: the file has a different number of columns than the table. Download the sample CSV and copy your data into it.
- **"Please configure the table columns before importing data"**: the table has no columns yet. Add them first with **Add column**.
- **Some rows are missing**: those lines had more or fewer values than the table has columns, often because of an extra comma. Check them in a spreadsheet app.
- **Accented characters look wrong**: import again with **Convert to UTF-8 format** turned on.

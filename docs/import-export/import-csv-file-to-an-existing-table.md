---
title: "Import CSV File to an Existing Table"
description: "Add rows from a CSV file to a table you already have, or replace all its rows, from Table Rows › Import / Export › Import."
---

# Import CSV File to an Existing Table

**Import Rows** adds the rows from a CSV file to a table that already exists, keeping its columns, design and settings. You can add the new rows after the existing ones, or replace every row in the table. To create a new table from a file instead, see [Import a CSV, Excel or JSON file](/import-table-data-from-a-csv).

Import works on tables that store their own rows (Default tables and tables created from a file). Connected tables, such as WooCommerce or Google Sheets tables, get their rows from the source, so they show **Sorry! You can not import any data as the table data is configured as external source** instead. This per-table import reads CSV only. For JSON or Excel files, use the [global Import page](/import-ninja-tables-json).

## Before you start: match the columns

The table needs its columns set up first. Ninja Tables reads the CSV by position: the first value in each line goes into the first column, the second into the second, and so on. So the file must have:

- A header row as its first line. It's skipped, not imported, so header names don't need to match.
- The **same number of columns** as the table, in the **same order**.

Lines with a different number of values than the table has columns are skipped.

The easiest way to get this right is to start from the sample file:

1. Open the table and go to **Table Rows** › **Import / Export** and choose **Import**.
2. Click **Download sample CSV**. The file has your table's column names as its header row, in the right order, plus a few example lines.
3. Add your rows below the header, and save it as CSV.

The **Sample header structure** table at the bottom of the Import panel also shows the expected columns.

![Import tab with the upload area and the sample header structure](/images/import-export/import-csv-file-existing/1.-Import-Tab-With-The-Upload-Area.webp)

### Check a column's order and name

To check which column is which, look at the column headers in **Table Rows** left to right. To see a column's **Column name** and **Column key**, click its gear icon and choose **Column settings**. See [Add and edit a column](/basic-settings).

## Import the rows

1. Open the table in Ninja Tables and stay on the **Table Rows** tab.
2. Click **Import / Export** in the toolbar, then choose **Import**.
3. Click the upload area to choose your CSV file, or drag and drop it there. Only one `.csv` file at a time.
4. Choose the options, which appear once a file is chosen:
   - **Replace existing data**: deletes every row already in the table, then imports the file. Leave it off to add the file's rows after the existing rows.
   - **Convert to UTF-8 format**: reads the file as ISO-8859-1 (Latin-1) and converts it to UTF-8. Turn it on only if accented characters come through wrong and your file was saved in Latin-1. It does not detect or convert other encodings.
5. Click **Import table**.

![Import tab with a file chosen and the two options](/images/import-export/import-csv-file-existing/2.-Import-Tab-With-A-File-Chosen.webp)

When the import finishes, you see **Successfully uploaded data.** (**Successfully imported N rows.** on DataTables tables), and the new rows appear in the grid when you close the dialog.

::: warning
**Replace existing data** can't be undone. If you might need the old rows, [export the table](/export-ninja-tables-csv-json) first.
:::

## Troubleshooting

- **"Please use the provided CSV header structure"**: the file has a different number of columns than the table. Download the sample CSV and copy your data into it.
- **"Table configuration required"** or **"Please configure the table columns before importing data."**: the table has no columns yet. Add them first with **Add column**.
- **Some rows are missing**: those lines had more or fewer values than the table has columns, often because of an extra comma. Check them in a spreadsheet app.
- **Accented characters look wrong**: import again with **Convert to UTF-8 format** turned on, if the file is Latin-1. Otherwise re-save the file as UTF-8 in your spreadsheet app.

---
title: "Import Table Data from CSV"
description: "Create a new table from a CSV, Excel (.xlsx) or JSON file using the Import screen or the Upload a file tile, including large files and encoding tips."
---

# Import Table Data from CSV

If your data is already in a spreadsheet or another system, you can turn it into a Ninja Tables table in one step. **Import** creates a new table from a **CSV**, **Excel (.xlsx)** or **JSON** file: the first row becomes the columns and every other row becomes a table row. This guide covers both ways to import a file and the things to check first.

To add rows to a table you already have, see [Import rows into an existing table](/import-csv-file-to-an-existing-table) instead.

## Import from the Import screen

1. In Ninja Tables, click **Import** in the top bar.

![Import](/images/import-export/import-table-data-csv/1.-import-button-01.webp)

2. Under **1. What are you importing?**, pick the file type:
   - **CSV**: from Excel, Google Sheets or Numbers.
   - **Excel (.xlsx)**: the first sheet is imported.
   - **JSON**: a list of rows (objects or arrays).
   - **Ninja Tables JSON**: a table exported from Ninja Tables, with its design and settings. See [Import a Ninja Tables JSON file](/import-ninja-tables-json).
   - **Drag & Drop export**: a JSON or CSV file exported from a Drag & Drop table.

   Click **Sample CSV** to download an example file with the right layout.
3. Under **2. Choose the file**, pick the **Rendering engine**: **FooTable** (the usual choice) or **DataTables** (for thousands of rows). The engine can't be changed after the table is created, so see [choose an engine](/choose-table-engine) if you're unsure.
4. Click the upload area to choose your file, or drag and drop it there.

![CSV/Json](/images/import-export/import-table-data-csv/2.-02.webp)

5. For a CSV file, turn on **Convert to UTF-8** if the file isn't saved as Unicode, so accented characters come through correctly.
6. Click **Import**.

Ninja Tables creates the table, imports the rows and opens the new table in the editor. A table imported from CSV or Excel is named after the file. You can rename it with the pencil next to its name; see [Table title, caption and description](/table-title-description-settings).

## Import from the Create a table screen

You can also import while creating a table:

1. Click **Create Table** in the top bar.
2. Click **Upload a file** under **Start from scratch**. You can also drag your file anywhere onto the Create a table screen.
3. Enter a **Table name** (optional; the file name is used if you leave it empty) and a **Description** if you like.
4. Choose the file. Ninja Tables picks the **File type** from the file name; change it if it's wrong.
5. Check the engine line, and click **Change** to pick DataTables if you need it.
6. Click **Create table**.

## Import an Excel (.xlsx) file

You can import an Excel workbook directly, without converting it to CSV first. Choose **Excel (.xlsx)** on the Import screen, or use the **Upload a file** tile.

- **Only the first sheet is imported.** Move the data you want onto the first sheet, or save it as its own workbook.
- The first row is used as the column names.
- **Formulas** are imported as their last calculated values. If the values look out of date, open and save the file in Excel first.
- Only **.xlsx** files are supported. For an old **.xls** file, open it in Excel and save it again as .xlsx, or export it as CSV.

While the import runs, a progress bar shows **Converting the Excel file**, followed by the import progress.

## Import large files

The upload limit is your server's maximum upload size, which the Import screen shows under **2. Choose the file**. If your file is bigger:

1. Upload the CSV or Excel file to the WordPress **Media Library** first.
2. On the Import screen, choose **CSV** or **Excel (.xlsx)** and pick **DataTables** as the rendering engine.
3. Under **Large file source**, click **Choose a CSV from the media library** (or **Choose an Excel file from the media library**) and pick your file.
4. Click **Import**.

Ninja Tables reads the file in small batches, so very large files (hundreds of thousands of rows) don't time out. Large file import from the Media Library is only available with the DataTables engine.

If a file is larger than the server's upload limit, ask your host to raise the limit, or use the Media Library route above.

## Tips for a clean import

- Put the column names in the first row.
- Use one table per file.
- Save the file as UTF-8 so accents and emoji survive, or turn on **Convert to UTF-8**.
- Excel formulas come in as their last calculated values.

Once the table exists, you can add more rows from a file from **Table Rows** › **Import / export** in the table editor.

![Import and Export](/images/import-export/import-table-data-csv/3.-03.webp)

## Fix CSV files from Excel

If a CSV saved from Microsoft Excel imports with blank or broken cells, save it again in Excel as **MS-DOS Comma Separated (.csv)**, or import the workbook directly as [Excel (.xlsx)](#import-an-excel-xlsx-file).

![Export As MS-DOS comma-separated (.csv) format](/images/import-export/import-table-data-csv/4.-import-table-data-from-CSV-2.webp)

## Fix CSV files that aren't comma-separated

Ninja Tables reads comma-separated CSV files. If your file uses another separator, such as semicolons or tabs, convert it with Google Sheets:

1. In Google Sheets, go to **File** › **Import**.

![Import File](/images/import-export/import-table-data-csv/5.-import-table-data-from-CSV-3.webp)

2. Click **Upload** and upload your file.

![Upload button](/images/import-export/import-table-data-csv/6.-import-table-data-from-CSV-4.webp)

3. Check the columns, then go to **File** › **Download** › **Comma-separated values (.csv)**.
4. Import the downloaded file into Ninja Tables.

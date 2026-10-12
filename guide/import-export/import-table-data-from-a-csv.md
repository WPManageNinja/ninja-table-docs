---
title: "Import Table Data from CSV"
description: "Import Table Data from CSV"
---

# Import Table Data from CSV

If you have an existing table on another website, turn the table data into **CSV file** (or **JSON**) and import it into Ninja Tables.

- First, go to the Ninja Tables dashboard and click the **Import Table** button (or the "Import" option on the left menubar). Now, press the **Choose File** button.

![Import](/images/import-export/import-table-data-csv/1.-import-button-01.webp)

- Choose the **CSV / JSON** file you want to upload.

![CSV/Json](/images/import-export/import-table-data-csv/2.-02.webp)

- Click the **Import** button, and then you’re good to go!

**Ninja Tables** is going to do the rest for you. Your data will be automatically uploaded.
You can also use the "**Import-Export**" tab at the top of a table to import tables.

![Import and Export](/images/import-export/import-table-data-csv/3.-03.webp)

## Import an Excel (.xlsx) File

You can also import an Excel workbook directly, without converting it to CSV first.

- Go to **Tools** → **Import** in Ninja Tables.
- Set the **Import Format** to **Excel - Spreadsheet (.xlsx)**.
- Choose your file or drag and drop it into the upload area. The server's maximum upload size is shown below the format hint.
- Click the **Import** button.

<!-- SCREENSHOT UPDATE NEEDED: add a new screenshot (suggested name 7.-Import-Excel-format.webp) of Tools → Import with "Excel - Spreadsheet (.xlsx)" selected, showing the "Only the first sheet is imported..." note and the maximum upload size. Also retake 2.-02.webp: the upload area now accepts CSV, Excel or JSON. -->

Ninja Tables first converts the file, then imports the rows. A progress bar shows **Converting Excel file** followed by the import progress, and the new table opens when it finishes.

Things to know before you import:

- **Only the first sheet is imported.** Move the data you want onto the first sheet, or save it as its own workbook.
- The first row is used as the column names.
- **Formulas** are imported as their last calculated values. Open and save the file in Excel first if the values look out of date.
- Only **.xlsx** files are supported. For an old **.xls** file, open it in Excel and re-save it as .xlsx (or export it as CSV).
- The new table is named after the file.
- Large files (hundreds of thousands of rows) are imported in small batches, so they do not time out. If you use the **DataTables** rendering engine, you can also click **Choose Excel file from Media Library** under **Large File Source** and pick a workbook you already uploaded.

On the **Add Table** screen, the Import option points you to **Tools** → **Import** for Excel files.

## Table Data Import for MS-Excel

You can now [import an .xlsx file directly](#import-an-excel-xlsx-file). If you would rather use CSV, or have any issue with CSV data imports, such as having blank values in your cell, in case you use MS-Excel, export the CSV as MS-DOS Comma Separated Value (CSV).

![Export As MS-DOS comma-separated (.csv) format](/images/import-export/import-table-data-csv/4.-import-table-data-from-CSV-2.webp)

Ninja table supports only comma-separated CSV and JSON.

If your CSV file is not **Comma Separated** & is in another format, there is a trick for converting it to make it Comma-Separated-CSV,

- First, go to the **Google Spreadsheet → File →** click on **Import** & then a pop-up will appear.

![Import File](/images/import-export/import-table-data-csv/5.-import-table-data-from-CSV-3.webp)

- Click on the **Upload** button & then upload the CSV file.

![Upload button](/images/import-export/import-table-data-csv/6.-import-table-data-from-CSV-4.webp)

- Set the column name as table Column Key, and then **download** it as Comma-Separated-CSV and import it to the existing Ninja Tables.

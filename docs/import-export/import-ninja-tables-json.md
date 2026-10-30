---
title: "Import Ninja Tables JSON"
description: "Import a table exported from Ninja Tables as JSON, with its columns, rows, design and settings, or a Drag & Drop table export."
---

# Import Ninja Tables JSON

A **Ninja Tables JSON** file holds a whole table: its title, description, columns, rows, design and settings. Import one to copy a table from another site, restore a backup, or use a downloaded [table template](https://ninjatables.com/free-table-templates/). To create a JSON file, [export a table](/export-ninja-tables-csv-json) as **JSON**.

## Import a Ninja Tables JSON file

1. In Ninja Tables, click **Import** in the top bar.
2. Under **1. What are you importing?**, choose **Ninja Tables JSON** ("From another site. Keeps design & settings.").
3. Under **2. Choose the file**, pick the **Rendering engine**, then click the upload area to choose your JSON file, or drag and drop it there.
4. Click **Import**.

![Import screen with the Ninja Tables JSON option selected](/images/import-export/import-ninja-tables-json/1.-Import-Screen-With-The-Ninja-Tables.webp)

Ninja Tables creates a new table from the file and opens it in the editor. The table keeps the title, columns, rows, design and settings it had when it was exported. The engine you pick on the Import screen is the one the new table uses.

You can also import a Ninja Tables JSON file from **Create Table** › **Upload a file**. Ninja Tables picks the file type from the file name; check that **File type** shows **JSON - Exported From Ninja Tables**.

If the file isn't a Ninja Tables export, the import stops with "Please upload a JSON file exported from Ninja Tables". Choose **JSON** instead if it is a plain list of rows.

::: warning
The **DataTables** engine only accepts tables whose rows are stored in Ninja Tables (Default tables). A file exported from a connected table, such as WP Posts or Custom SQL, shows an error when you import it with DataTables. Import it with **FooTable** instead.
:::

## Import a Drag & Drop table export

A file exported from a Drag & Drop table needs its own option:

1. Click **Import** in the top bar.
2. Choose **Drag & Drop export** ("JSON or CSV from a Drag & Drop table.").
3. Choose the file and click **Import**.

The new Drag & Drop table opens in the builder. Save it once there before you embed it on a page.

- A **JSON** export brings back the whole layout, with its elements and settings.
- A **CSV** file creates a grid with a cell for every value in the file, including the first row, and the table is named after the file.

## JSON vs Ninja Tables JSON

The Import screen has two JSON options:

- **Ninja Tables JSON** is a full table exported from Ninja Tables, including its design and settings.
- **JSON** is a plain list of rows, for example from another app. The names in the first row become the columns, and it brings in the data only. The new table is called **Temporary table name** until you rename it in its [table details](/table-title-description-settings). See [Import a CSV, Excel or JSON file](/import-table-data-from-a-csv).

---
title: "Construct Table from CSV"
description: "Build a table from a CSV file at a public URL with the Remote CSV / JSON source, and keep it in step with the file on FooTable or DataTables."
---

# Construct Table from CSV

**Remote CSV** (Pro) builds a table from a CSV (comma-separated values) file that lives at a public web address. Use it when another system, website or service publishes its data as a CSV file. When the file changes, the table follows.

For Google Sheets, use the dedicated [Google Sheets integration](/google-sheets-integration) instead.

::: warning CSV only
The tile is called **Remote CSV / JSON**, but today it reads **CSV files only**. A JSON URL is rejected with "Expected CSV but received invalid data type from the given url." To show JSON data, convert it to CSV first, or upload the JSON file with **Create Table** › **Upload a file**. See [Import a CSV, Excel or JSON file](/import-table-data-from-a-csv).
:::

## Before you start

- The file must be reachable without a login, at a public URL (HTTPS is best).
- The first row must hold the column headers. Rows with a different number of cells than the header row are skipped.

## Create the table

1. Go to **Create Table** and, under **Connect live data**, click **Remote CSV / JSON**.
2. Enter a **Table name**.
3. Check the engine line. FooTable is the usual choice. Click **Change** to pick DataTables instead. The two work differently (see below).
4. Paste the file's address:
   - On FooTable, into **Data source URL**.
   - On DataTables, into **CSV File URL**, and choose a **Sync Interval** (Every 1 hour by default). You can change it any time.
5. Click **Next**.
6. Under **Select entry fields**, tick the columns you want, or use **Select all**.
7. Click **Create table**.

![Create New Table](/images/data-sources/construct-table-csv/1.-Create-New-Table.webp)

![Connect External CSV with FooTable selected](/images/data-sources/construct-table-csv/2.-Connect-External-CSV-FooTable.webp)

![Connect External CSV with DataTables selected](/images/data-sources/construct-table-csv/3.-Connect-External-CSV-DataTables.webp)

![Select Entry Fields](/images/data-sources/construct-table-csv/4.-Select-Entry-Fields.webp)

Ninja Tables opens the new table on the **Table Rows** tab with the file's data in it. The rows are read-only: change them in the source file.

![CSV data imported into a Ninja Table](/images/data-sources/construct-table-csv/5.-CSV-Table-Result.webp)

## FooTable or DataTables

| | FooTable | DataTables |
|---|---|---|
| How rows are read | Fetched from the URL when the table loads | Copied into your database, then synced on a schedule |
| How often it updates | After the **Caching interval** (5 minutes by default) | On the **Auto sync** schedule, or when you click **Sync now** |
| Best for | Small and medium files | Large files with thousands of rows |

## Change the URL or the columns

- **FooTable:** on the **Table Rows** tab, the banner reads **Rows come from Remote CSV or JSON**. Click **Source settings**, change the **Source URL** if needed, click **Fetch columns**, tick the columns under **Select entry fields** and click **Update**.
- **DataTables:** the **Table Rows** tab shows a sync panel with the URL, the columns, the **Auto sync** schedule and **Sync now**. See [Google Sheets & CSV auto sync](/google-sheets-csv-auto-sync).

## How fast changes show up

On FooTable, Ninja Tables keeps the fetched file for the **Caching interval (in minutes)** set in **Table Configuration** › **Caching Configuration**. New tables start at 5 minutes. Leave it blank or set it to 0 to fetch the file on every page view (slower).

On DataTables, the table updates on its **Auto sync** schedule, or right away when you click **Sync now**.

## Customize the table

Everything else works like other tables: rename columns and change their types from the column header › **Column settings**, design the table in **Appearance**, and add [Custom filters](/custom-filters) (Pro). To turn plain URLs in the file into links or images, use [Transform value](/transform-value) (Pro).

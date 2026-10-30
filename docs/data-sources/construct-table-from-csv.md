---
title: "Construct Table from CSV"
description: "Build a table from a CSV file at a public URL with the Remote CSV / JSON source, and keep it in step with the file on FooTable or DataTables."
---

# Construct Table from CSV

**Remote CSV** (Pro) builds a table from a CSV (comma-separated values) file that lives at a public web address. Use it when another system, website or service publishes its data as a CSV file. When the file changes, the table follows.

For Google Sheets, use the dedicated [Google Sheets integration](/google-sheets-integration) instead.

::: warning CSV only
The tile is called **Remote CSV / JSON**, but today it reads **CSV files only**. The field is labeled "A CSV or JSON file URL", yet a JSON URL is rejected with "Expected CSV but received invalid data type from the given url." To show JSON data, convert it to CSV first, or upload the JSON file with **Create Table** › **Upload a file**. See [Import a CSV, Excel or JSON file](/import-table-data-from-a-csv).
:::

## Before you start

- The file must be reachable without a login, at a public URL.
- The server hosting the file must report it as CSV. A content type that contains "csv" works, and so does `application/octet-stream` or `application/binary`. A plain `text/plain` response works only when the address ends in `.csv`. Anything else is rejected as "invalid data type".
- The first row must hold the column headers. Rows with a different number of cells than the header row are skipped.
- On FooTable the file is requested with a short time limit (10 seconds for the column list, 20 seconds for the rows), so a slow server may fail to load. Developers can change the limit with a filter listed in [Hooks and filters](/hooks-and-filters).
- On **DataTables**, the address must start with `https://`, and private or internal addresses (such as `localhost` or a local network IP) are blocked. See [Google Sheets & CSV auto sync](/google-sheets-csv-auto-sync).

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

![Remote CSV drawer step 1 with the Data source URL field](/images/data-sources/construct-table-csv/1.-Remote-CSV-Drawer-Step-1.webp)

![Remote CSV drawer with DataTables selected and a Sync Interval list](/images/data-sources/construct-table-csv/2.-Remote-CSV-Drawer-With-DataTables-Selected.webp)

<!-- TODO(screenshot): construct-table-from-csv-3
  screen: Tables › Create Table › Connect live data › Remote CSV / JSON › Step 2
  table: -
  state: Select entry fields with all columns ticked
  highlight: Select all
  view: admin
  alt: Select entry fields step listing the CSV columns
  blocked: needs a reachable public CSV URL (fetch fails from the demo site: "Expected CSV but received invalid data type") and creating a table
-->

Ninja Tables opens the new table on the **Table Rows** tab with the file's data in it. The rows are read-only: change them in the source file. You can still export the table, but you can't import rows into it or sort its rows by hand.

<!-- TODO(screenshot): construct-table-from-csv-4
  screen: Tables › a Remote CSV table › Table Rows
  table: -
  state: Table Rows tab with the CSV data loaded
  highlight: -
  view: admin
  alt: Table Rows tab showing rows read from a remote CSV file
  blocked: needs a reachable public CSV URL (fetch fails from the demo site: "Expected CSV but received invalid data type") and creating a table
-->

## FooTable or DataTables

| | FooTable | DataTables |
|---|---|---|
| How rows are read | Fetched from the URL when the table loads | Copied into your database, then synced on a schedule |
| How often it updates | After the **Caching interval** (5 minutes by default) | On the **Auto sync** schedule, or when you click **Sync now** |
| Address must be HTTPS | No (HTTPS is best) | Yes |
| Best for | Small and medium files | Large files with thousands of rows |

## Change the URL or the columns

- **FooTable:** on the **Table Rows** tab, the banner reads **Rows come from Remote CSV or JSON**. Click **Source settings**, change the **Source URL** if needed, click **Fetch columns**, tick the columns under **Select entry fields** and click **Update**.
- **DataTables:** the **Table Rows** tab shows a sync panel with the URL, the columns, the **Auto sync** schedule and **Sync now**. See [Google Sheets & CSV auto sync](/google-sheets-csv-auto-sync).

## How fast changes show up

On FooTable, Ninja Tables keeps the fetched file for the **Caching interval (in minutes)** set in **Table Configuration** › **Caching Configuration**. New tables start at 5 minutes. Leave it blank or set it to 0 to fetch the file on every page view (slower).

On DataTables, the table updates on its **Auto sync** schedule, or right away when you click **Sync now**.

## Customize the table

Everything else works like other tables: rename columns and change their types from the column header › **Column settings**, design the table in **Appearance**, and add [Custom filters](/custom-filters) (Pro). To turn plain URLs in the file into links or images, use [Transform value](/transform-value) (Pro).

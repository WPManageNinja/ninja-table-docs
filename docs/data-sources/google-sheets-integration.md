---
title: "Google Sheets Integration"
description: "Show a published Google Sheet as a Ninja Tables table that keeps up with the sheet, and learn how the FooTable and DataTables engines handle it differently, including links and images."
---

# Google Sheets Integration

**Google Sheets Integration** (Pro) shows a Google Sheet as a table on your site. When you change the sheet, the table follows, so you keep editing in Google Sheets and never copy data by hand.

How the table keeps up with the sheet depends on the engine you pick when you create it:

| | FooTable | DataTables |
|---|---|---|
| How rows are read | Fetched live from the published sheet | Copied into your database, then synced on a schedule |
| How often it updates | After the **Caching interval** (5 minutes by default) | On the **Auto sync** schedule, or when you click **Sync now** |
| Links and images in cells | Kept | Not kept (plain text only) |
| Best for | Small and medium sheets, sheets with links or images | Large sheets with thousands of rows |

See [Choose a table engine](/choose-table-engine) for more about the two engines.

::: warning No Google sign-in
Ninja Tables does not connect to your Google account. There is no sign-in, no permission screen and no API key. It reads a sheet that you have **published to the web**, so anyone with the link can read it. Do not publish a sheet that holds private data.
:::

## Step 1: Publish your sheet

Ninja Tables reads sheets that are published to the web.

1. In Google Sheets, open **File** › **Share** › **Publish to web**.
2. On the **Link** tab, pick the sheet (tab) you want, for example **Sheet1**.
3. Choose **Comma-separated values (.csv)**.
4. Under **Published content and settings**, make sure **Automatically republish when changes are made** is ticked.
5. Click **Publish**, then copy the link.

<!-- TODO(screenshot): google-sheets-integration-1
  screen: Google Sheets › File › Share › Publish to web
  table: -
  state: Link tab with Sheet1 and Comma-separated values (.csv) chosen
  highlight: Publish button
  view: admin
  alt: Google Sheets Publish to web dialog with the CSV format selected
-->

## Step 2: Create the table

1. Go to **Create Table** and, under **Connect live data**, click **Google Sheets**.
2. Enter a **Table name**.
3. Check the engine line. FooTable is the usual choice. Click **Change** to pick DataTables instead.
4. Paste the link you copied:
   - On FooTable, into **Data source URL**.
   - On DataTables, into **Google Sheet CSV URL**, and choose a **Sync Interval** (Every 1 hour by default). You can change it any time. The link must start with `https://`.
5. Click **Next**.
6. Under **Select entry fields**, tick the columns you want in the table, or use **Select all**.
7. Click **Create table**.

<!-- TODO(screenshot): google-sheets-integration-2
  screen: Tables › Create Table › Connect live data › Google Sheets › Step 1
  table: -
  state: FooTable engine, Table name and Data source URL filled in
  highlight: Data source URL field
  view: admin
  alt: Google Sheets drawer step 1 with the Data source URL field
-->

<!-- TODO(screenshot): google-sheets-integration-3
  screen: Tables › Create Table › Connect live data › Google Sheets › Step 1
  table: -
  state: DataTables engine chosen, Google Sheet CSV URL and Sync Interval visible
  highlight: Sync Interval list
  view: admin
  alt: Google Sheets drawer with DataTables selected and a Sync Interval list
-->

<!-- TODO(screenshot): google-sheets-integration-4
  screen: Tables › Create Table › Connect live data › Google Sheets › Step 2
  table: -
  state: Select entry fields with one column unticked
  highlight: Select all
  view: admin
  alt: Select entry fields step listing the sheet columns
-->

Ninja Tables opens the new table on the **Table Rows** tab with your sheet's data in it. The rows are read-only: edit them in Google Sheets.

<!-- TODO(screenshot): google-sheets-integration-5
  screen: Tables › a Google Sheets table › Table Rows
  table: -
  state: Table Rows tab with the sheet data loaded
  highlight: -
  view: admin
  alt: Table Rows tab showing rows read from a Google Sheet
-->

If Ninja Tables finds no columns, it says "No columns found. Use the link from File → Share → Publish to web." Check that the sheet is published and that you pasted the published link, not the address of the editor page.

## Change the sheet or the columns

### On FooTable

On the **Table Rows** tab, the banner reads **Rows come from Google Sheet**. Click **Source settings**. In the drawer:

1. Change the **Source URL** if needed.
2. Click **Fetch columns** to read the sheet's columns again.
3. Tick the columns under **Select entry fields**.
4. Click **Update**.

### On DataTables

The **Table Rows** tab shows a sync panel with the column list, the URL, the **Auto sync** schedule, **Sync now** and the result of the last sync. See [Google Sheets & CSV auto sync](/google-sheets-csv-auto-sync).

## How fast changes show up

- **Google's delay:** after you edit a published sheet, Google can take about 5 minutes to republish it.
- **FooTable:** Ninja Tables keeps the fetched sheet for the **Caching interval (in minutes)** in **Table Configuration** › **Caching Configuration**. New tables start at 5 minutes. Leave it blank or set it to 0 to cache nothing (every page view fetches the sheet, which is slower).
- **DataTables:** the table updates on its **Auto sync** schedule, or right away when you click **Sync now**. The sync runs in the background through WordPress's scheduled tasks (WP-Cron), so you don't need to keep the admin open. Intervals run from every 5 minutes to every 7 days. See [Google Sheets & CSV auto sync](/google-sheets-csv-auto-sync).

## Requirements for DataTables sync

- The link must be **HTTPS**. Other links are rejected with "Please provide a valid HTTPS URL."
- The link must be reachable from your server over the public internet. Private and internal addresses (such as `localhost` or a local network IP) are blocked.
- A Google Sheets link that is not in CSV form (for example one ending in `/pubhtml`) is converted to the CSV form for you.
- Deleting the table also cancels its scheduled sync and cleans up any sync that is still running.

## Hyperlinks and images from the sheet

Links and images in your sheet only carry over on the **FooTable** engine.

- **Hyperlinks:** set the column's type to **[HTML field](/html-field)**. Open the column header › **Column settings**, change **Type** to **HTML field** and save. Links from the sheet become clickable.
- **Images:** add images to cells in Google Sheets with **Insert** › **Image** › **Insert image in cell**, and set the column type to **HTML field**. The images show in the table.

::: warning DataTables tables get plain text
On **DataTables**, the sheet is read as CSV, which holds only text. Links, images and cell formatting are lost. If you need them, create the table with FooTable.
:::

On either engine, if a column holds plain URLs (for example `https://example.com/photo.jpg`), you can turn them into links or images with [Transform value](/transform-value) (Pro).

Formatting from the sheet (colors, bold text, fonts) isn't copied on either engine. Style the table in the **Appearance** tab instead.

## Tutorial video

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/-eO4-F5sowo" title="Google Sheets Integration Video" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

For any other CSV file on the web, see [Remote CSV](/construct-table-from-csv).

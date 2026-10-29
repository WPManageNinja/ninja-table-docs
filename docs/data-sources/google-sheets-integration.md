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

## Step 1: Publish your sheet

Ninja Tables reads sheets that are published to the web.

1. In Google Sheets, open **File** › **Share** › **Publish to web**.
2. On the **Link** tab, pick the sheet (tab) you want, for example **Sheet1**.
3. Choose **Comma-separated values (.csv)**.
4. Under **Published content and settings**, make sure **Automatically republish when changes are made** is ticked.
5. Click **Publish**, then copy the link.

![employee data in google sheets](/images/data-sources/google-sheets-integration/1.-employee-data-in-google-sheets.webp)

![publish google sheet to the web](/images/data-sources/google-sheets-integration/5.-Publish-Google-Sheet-To-The-Web.webp)

![Copy Link](/images/data-sources/google-sheets-integration/copy-link-6.webp)

## Step 2: Create the table

1. Go to **Create Table** and, under **Connect live data**, click **Google Sheets**.
2. Enter a **Table name**.
3. Check the engine line. FooTable is the usual choice. Click **Change** to pick DataTables instead.
4. Paste the link you copied:
   - On FooTable, into **Data source URL**.
   - On DataTables, into **Google Sheet CSV URL**, and choose a **Sync Interval** (Every 1 hour by default). You can change it any time.
5. Click **Next**.
6. Under **Select entry fields**, tick the columns you want in the table, or use **Select all**.
7. Click **Create table**.

![Create New Table](/images/data-sources/google-sheets-integration/2.-Create-New-Table.webp)

![Connect Google Sheets with FooTable selected](/images/data-sources/google-sheets-integration/3.-Connect-Google-Sheets-FooTable.webp)

![Connect Google Sheets with DataTables selected](/images/data-sources/google-sheets-integration/4.-Connect-Google-Sheets-DataTables.webp)

![Select Entry Fields, with one column unchecked](/images/data-sources/google-sheets-integration/6.-Select-Entry-Fields.webp)

Ninja Tables opens the new table on the **Table Rows** tab with your sheet's data in it. The rows are read-only: edit them in Google Sheets.

![Google Sheets data imported into a Ninja Table](/images/data-sources/google-sheets-integration/8.-Google-Sheets-Table-Result.webp)

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
- **DataTables:** the table updates on its **Auto sync** schedule, or right away when you click **Sync now**.

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

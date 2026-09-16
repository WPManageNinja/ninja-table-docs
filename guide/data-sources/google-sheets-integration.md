---
title: "Google Sheets Integration"
description: "Google Sheets Integration"
---

# Google Sheets Integration

Google Sheets integration with Ninja Tables is certainly the plugin's one of many useful features. This combination is actually an **auto-sync** where data from Google Sheets are automatically fetched and displayed in a customized table.

Moreover, the data in Ninja Tables will automatically update if there are any changes in the Google Sheets. Google takes a minimum of 5 minutes to update the data on the web.

## Data from Google Sheets to WordPress Table

How to display Google Sheets data entries in a WordPress table?
We'll explain the process here, using the following dummy Google Sheet.

![employee data in google sheets](/images/data-sources/google-sheets-integration/1.-employee-data-in-google-sheets.webp)

- We will import this data table to Ninja Tables. To do this, go to the **Ninja Tables dashboard** located in the sidebar. Then, go to the **Add Table** button from the top right corner of the dashboard.
- After that, a pop-up box will be visible. Choose **Connect Google Sheets** from the sidebar.

![](/images/data-sources/google-sheets-integration/2.-Google-Sheet-Integration-1.webp)


- Then add a name to the table. It could be your Google Sheets name or any other name you want.
- Choose a **Rendering Engine** — **FooTable** (the default; lightweight and responsive) or **DataTables** (better performance for large sheets). DataTables support for Google Sheets was added in Ninja Tables v5.2.17. See [Rendering Engine](#rendering-engine) below for how the two differ.
- In your Google Sheet, find the **File** option and then click **Publish to the Web** in order to get the **Data URL**.

![publish google sheet to the web](/images/data-sources/google-sheets-integration/3.-publish-google-sheet-to-the-web.webp)


- Choose your predefined sheet in the Section **Link**. In this example, we are using **Sheet 1**. Also, select "**Comma-Separated Values(CSV)**" from the Embed Section, as Google shares its data to the web as CSV.
- Make sure that in the **Published content and settings** option, the **automatically republish when changes are made** is **checked**.
- Then copy the link, go back to the dashboard of your Ninja Tables, and paste it into the **Data Source URL** field (labelled **Google Sheet CSV URL** when DataTables is selected).
- If you chose **DataTables**, a **Sync Interval** dropdown appears — from **Every 5 minutes** up to **Every 7 Days** (default **Every 1 hour**). Pick anything for now; as the field itself notes, you can change the sync interval any time after the table is created.
- Once you’re done, proceed to the **Next** button.
- Choose and save the entry fields you wish to add to. This is how all your data will be imported here automatically.

![Select Entry Fields](/images/data-sources/google-sheets-integration/4.-Google-Sheet-Integration-2.webp)

- Now, go to your Google Sheet again, add some other data here, and check if the modified data is automatically applied to your Ninja Tables.
- However, in this case, after you're finished adding the details, you have to wait 5 minutes. This is because Google updates the table data cache every 5 minutes. Let's push forward through the waiting period.
- Go back to your Ninja Tables after 5 minutes, and reload the page. Then at the bottom of the table are the data rows you added 5 minutes ago.
- This is it, the data will also be included in Ninja Tables if someone changes or adds some data to Google Sheets.
- If you created the table with the **DataTables** engine, new rows arrive on the next scheduled sync instead — or click **Sync Now** in the **Auto Sync** panel to pull them in immediately (see [DataTables](#datatables) below).

## Tutorial Video

Here's a tutorial video so you can try it yourself.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/-eO4-F5sowo" title="Google Sheets Integration Video" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Rendering Engine

A Google Sheets table can be displayed with either of Ninja Tables' rendering engines. You pick the engine in the **Connect Google Sheets** pop-up when creating the table.

### FooTable (default)

The table reads your published sheet on the fly and caches the result. How long it is cached is set under **Table Configuration → Rendering Settings → Caching Configuration → Caching Interval (In Minutes)** — the default is 5 minutes, and leaving it blank or 0 disables caching for the table data.

### DataTables

Available for Google Sheets tables since Ninja Tables v5.2.17. Instead of reading the sheet live, Ninja Tables copies the rows into its own database table on a schedule — the **Sync Interval** you chose when creating the table — which is what gives large sheets faster rendering.

#### Create a DataTables table from Google Sheets

1. In your Google Sheet, go to **File → Share → Publish to web**, choose the sheet, pick **Comma-separated values (.csv)**, and copy the link.
2. In the Ninja Tables dashboard, click **Add Table** and choose **Connect Google Sheets**.
3. Enter a **Table Title**.
4. Under **Rendering Engine**, select **DataTables**.
5. Paste the copied link into the **Google Sheet CSV URL** field.
6. Choose a **Sync Interval** — how often Ninja Tables pulls fresh rows from the sheet. Options run from **Every 5 minutes** to **Every 7 Days**; the default is **Every 1 hour**. You can change this any time later.
7. Click **Next**. Ninja Tables fetches the column headers from your sheet.
8. Under **Select Entry Fields**, tick the columns you want in the table (or **Select all**) and click **Save**.

The table is created and the first sync starts right away. Once it finishes, the table is ready to insert with its shortcode like any other Ninja Table.

#### Manage syncing after creation

Open the table and you'll see an **Auto Sync** panel above the table data:

- **Auto Sync** — change the sync interval; the new value is saved as soon as you pick it.
- **Sync Now** — pull the latest rows from the sheet immediately instead of waiting for the next scheduled sync. A progress indicator shows how many rows have been imported.
- **Last Sync**, **Rows**, **Status** and **Duration** — details of the most recent sync.
- **Remote URL** → **Fetch Columns** → **Update** — point the table at a different published sheet or change which columns are included.

Custom filters, search and the other table settings work the same way with both engines — see [Custom Filters](/guide/table-settings/custom-filters) and [Table Rendering Settings](/guide/table-settings/table-rendering-settings).

## Import Hyperlinks/Images Automatically

If your spreadsheet has hyperlinks or images, you can import them directly into Ninja Table so that the link will transform into a clickable link, and the actual image will appear.

**Hyperlink**: If you have any URL, by default Google will turn them into clickable links until you make them plain text by removing the link inside. 

If you want Ninja Table to behave similarly, just change that column's data type to **[HTML](/guide/field-types/html-field)**. It will transform all your hyperlinks into clickable links.

**Image**: Just import your images into a cell using the **Image in Cell** option.

> [!Note]
> The data is shared to the web as CSV, which only contains text, any formatting in the sheet will not reflect in the table. But you can do those formatting from Ninja Tables itself.

Moreover, if the spreadsheet contains a column with links in plain text and Image links, use the "Transform Value" feature to turn them into clickable links and viewable Images. See the documentation to learn more about Column Transform Value.

Embed Google Sheet data table in your WordPress post/page effortlessly using Ninja Tables.

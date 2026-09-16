---
title: "Construct Table from CSV"
description: "Construct Table from CSV"
---

# Construct Table from CSV

Other than Google Sheets, if you wish to show data form from another source and if this source shares data with the web as a .CSV (Comma Separated Value), then we can use external data source links to create a table.

Let's dive into this simple article to learn how to construct a table from CSV.

> [!Note]
> Construct Table From External CSV is a Pro Feature.

- Click "Add Table" and pick the **Connect External CSV** from the initial sidebar menu.
- Name the table. It'll be your table title.
- Choose a **Rendering Engine** — **FooTable** (the default) or **DataTables** (better for large files; supported for CSV tables since Ninja Tables v5.2.17).
- Paste your External Data Source Link in the **Data Source URL** field (labelled **CSV File URL** when DataTables is selected). It must be a public HTTPS link to the `.csv` file.
- If you chose **DataTables**, a **Sync Interval** dropdown appears — from **Every 5 minutes** up to **Every 7 Days** (default **Every 1 hour**). You can change the sync interval any time after the table is created.
- Once you’re done, proceed to the **Next** button.

![Construct Table](/images/data-sources/construct-table-csv/1.-Construct-Table-From-CSV-1.webp)

- Choose and save the entry fields you wish to add.

This is how all your data will be imported here automatically. Lastly, don't forget to click on the **Save** button.

![Construct Table CSV](/images/data-sources/construct-table-csv/2.-Construct-Table-From-CSV-2.webp)

- The table has been created here (See the below screenshot)

![Construct Table CSV](/images/data-sources/construct-table-csv/3.-Construct-Table-From-CSV-3.webp)

All other settings are exactly the same as Google Sheets. Please check the **[documentation](/guide/data-sources/google-sheets-integration)** for further details.

## Rendering Engine

Like Google Sheets tables, an external CSV table can use either engine:

- **FooTable** (default) reads the CSV on the fly and caches it for the **Caching Interval (In Minutes)** set under **Table Configuration → Rendering Settings → Caching Configuration** (default 5 minutes).
- **DataTables** copies the rows into Ninja Tables' own database table on the **Sync Interval** you chose.

### Create a DataTables table from a CSV URL

1. In the Ninja Tables dashboard, click **Add Table** and choose **Connect External CSV**.
2. Enter a **Table Title**.
3. Under **Rendering Engine**, select **DataTables**.
4. Paste the public HTTPS link to your `.csv` file into the **CSV File URL** field.
5. Choose a **Sync Interval** — from **Every 5 minutes** to **Every 7 Days** (default **Every 1 hour**). You can change this any time later.
6. Click **Next**. Ninja Tables fetches the column headers from the file.
7. Under **Select Entry Fields**, tick the columns you want (or **Select all**) and click **Save**.

The table is created and the first sync starts immediately.

### Manage syncing after creation

Open the table and use the **Auto Sync** panel above the table data to:

- Change the **Auto Sync** interval — saved as soon as you pick a new value.
- Click **Sync Now** to pull the latest rows immediately.
- Check **Last Sync**, **Rows**, **Status** and **Duration** for the most recent sync.
- Change the **Remote URL**, click **Fetch Columns**, adjust the selected columns, and click **Update** to point the table at a different file.

The panel works exactly as described for Google Sheets — see [Google Sheets Integration → Rendering Engine](/guide/data-sources/google-sheets-integration#rendering-engine).

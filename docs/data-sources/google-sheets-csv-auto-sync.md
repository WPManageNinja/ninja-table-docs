---
title: "Google Sheets & CSV Auto Sync with the DataTables Engine"
description: "Keep a Google Sheets or Remote CSV table on the DataTables engine in step with its source: set the auto sync schedule, sync on demand and read the sync status."
---

# Google Sheets & CSV Auto Sync with the DataTables Engine

When you create a [Google Sheets](/google-sheets-integration) or [Remote CSV](/construct-table-from-csv) table on the **DataTables** engine, Ninja Tables copies the rows into your own database and refreshes the copy on a schedule. This **auto sync** (Pro) keeps large sheets fast: visitors read the rows from your site, not from Google or the remote server.

Tables on the FooTable engine don't use auto sync. They fetch the source live and cache it for the **Caching interval** set in **Table Configuration**.

## How auto sync works

- When you create the table, Ninja Tables reads the source as CSV and imports the rows. Big files are imported in chunks in the background.
- After that, it checks the source again on the **Auto sync** schedule and updates the rows.
- The sync runs through WordPress's scheduled tasks (WP-Cron). These run when your site gets visits, so on a quiet site a sync can start a little later than scheduled.

::: tip
Because the source is read as CSV, links, images and cell formatting from a Google Sheet aren't kept. If you need clickable links or images from the sheet, use the FooTable engine. See [Hyperlinks and images from the sheet](/google-sheets-integration#hyperlinks-and-images-from-the-sheet).
:::

## Set the schedule when you create the table

On the **Google Sheets** or **Remote CSV / JSON** drawer, switch the engine to **DataTables**. The URL field becomes **Google Sheet CSV URL** (or **CSV File URL**) and a **Sync Interval** list appears. Pick how often to sync. The default is **Every 1 hour**.

## The sync panel

Open the table and go to **Table Rows**. At the top is a panel titled **You may edit your table settings here.** Open it to see:

- **Select entry fields**: the source's columns. Tick the ones the table shows, or use **Select all**.
- The source URL field (**Remote URL…**) with a **Fetch columns** button. Click it after you change the URL, or after you add columns to the source.
- **Update**: saves the URL and column choices.
- **Auto sync**: how often the table syncs. Choose Every 5 minutes, 15 minutes, 30 minutes, 1 hour, 6 hours, 12 hours, 24 hours or 7 days. The new interval is saved as soon as you pick it.
- **Sync now**: syncs right away, without waiting for the schedule.

After the first sync, the panel shows the result of the last sync:

- **Last sync**: when it ran.
- **Rows**: how many rows it imported.
- **Status**: whether it succeeded.
- **Duration**: how long it took.
- The error message, if the last sync failed.

While a sync is running, a bar at the top of the tab shows **Importing data…** with the progress and the number of rows processed. Click it to see the details.

## Sync messages

| Message | What it means |
|---|---|
| Syncing data from source… | A sync is in progress. |
| Sync completed successfully. | The rows were updated. |
| Data is already up to date. | Nothing changed in the source since the last sync. |
| Sync did not finish within the expected polling window. | The sync is taking longer than the screen waits for. It may still finish in the background. Reload the page later and check **Last sync**. |
| Sync failed. / Sync failed to start. | The source couldn't be read. Check that the URL is public and still published, then click **Sync now**. |

## Tips

- Pick the longest interval that suits your data. Syncing every 5 minutes on a large sheet adds load to your site.
- After you change a sheet and want the change live immediately, click **Sync now**.
- If you added a column to the sheet, click **Fetch columns**, tick the new column and click **Update**.

---
title: "Clear Table Cache"
description: "Fix tables that show old data by clearing the Ninja Tables cache and your caching plugins' caches in Settings › Performance."
---

# Clear Table Cache

Ninja Tables caches each table's data so pages load fast. If a table on your site keeps showing old rows after you've changed it, clear the caches in **Settings** › **Performance**. This page explains both buttons there and the per-table cache options.

## Clear the caches

1. In Ninja Tables, click the **gear** icon in the top bar to open **Settings**.
2. Click **Performance**.
3. Under **Clear caches**, click the button you need:
   - **Clear table cache** (**Ninja Tables cache**): clears the cached data of every table. Each table is rebuilt the next time someone views it.
   - **Clear external caches** (**Caching plugins**): asks the caching plugins on your site to flush their page caches too.

A message confirms when the cache has been cleared. Reload the page with the table to check it.

Both buttons are free and safe to use: they don't change or delete any table data.

## Which button do I need?

- **The table is out of date in the admin preview or on every page**: click **Clear table cache**.
- **The table is right in Preview, but your live page still shows the old version**: a page cache is serving an old copy of the page. Click **Clear external caches**. If that doesn't help, clear the cache from your caching plugin, your host's control panel or your CDN.

Ninja Tables usually clears a table's cache by itself when you change its rows or settings in the admin, so you mostly need these buttons after changes made elsewhere, such as directly in the database, or when a page cache is involved.

### Caching plugins that Clear external caches supports

When they're active, **Clear external caches** asks these to flush:

- LiteSpeed Cache
- Nginx Helper
- WP Rocket
- GoDaddy managed WordPress cache
- WP Fastest Cache
- WP Super Cache
- Autoptimize
- WP-Optimize
- SiteGround Optimizer
- Cloudflare

For any other caching plugin or CDN, clear its cache from its own settings.

## Per-table cache settings

Each table also has its own cache options in **Table Configuration** › **Caching Configuration**:

- **Disable Caching**: stops caching this table. It's not recommended unless you know you need it, because the table then loads its data on every view.
- **Caching interval (in minutes)**: for tables that read from an outside source, such as Google Sheets or a remote CSV, how long to keep the fetched data before reading the source again.
- **Enable HTML cache**: for tables using Legacy rendering, caches the table's finished HTML for the number of minutes you set.

See [Engine, rendering and caching](/table-rendering-settings).

::: tip
A Google Sheets or Remote CSV table on FooTable shows changes from its source only after its caching interval has passed. To see a change straight away, click **Clear table cache**. On DataTables, these tables keep a synced copy that updates on its own schedule instead; see [Google Sheets & CSV auto sync](/google-sheets-csv-auto-sync).
:::

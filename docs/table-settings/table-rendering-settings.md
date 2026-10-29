---
title: "Engine, Rendering & Caching"
description: "Use the Table Configuration tab to pick the table engine, choose Ajax or Legacy rendering, and set up caching so tables load fast."
---

# Engine, Rendering & Caching

The **Table Configuration** tab controls how a table loads on your site: which engine draws it, how its rows reach the page, and how it is cached. Most tables work well with the defaults; change these when a table is very large, uses merged cells or shortcodes, or shows outdated data.

1. Go to **Ninja Tables** › **Tables** and open a table.
2. Click the **Table Configuration** tab. The settings are grouped under **Performance**.

![Table configuration settings](/images/table-settings/table-rendering-settings/1.-New-Ui-table-rendering-settings.webp)

## Table engine

**Table engine** is the renderer that powers the table on your site:

- **FooTable**: the engine most existing tables use. Light, responsive out of the box, and fully supported. Keep it if your table works well.
- **DataTables**: faster with large tables, with server-side paging. Best for new tables that run to thousands of rows.

You choose the engine when you create a table. What happens later depends on the table type:

- Tables that keep their own rows (default and uploaded tables) are **locked** to the engine they were created with. The tab shows "Drawn by the FooTable engine" (or DataTables).
- Where the engine can still be switched, a warning explains that **switching engine only moves your data**: rows and columns are kept, but the table's design (colors, styling and layout) doesn't carry over, so set it up again in **Appearance**.

See [FooTable or DataTables: Choose an Engine](/choose-table-engine) for a full comparison.

## Rendering Setting

**Rendering Setting** decides how the rows are put on the page:

- **Ajax** (default): rows load right after the page. Fast, and best for big tables. Shortcodes written into cells will not run.
- **Legacy** (Pro): rows are built on the server into the page HTML. Use it for merged cells ([colspan](/colspan-cell-merge)), shortcodes inside cells, and better SEO, since the rows are in the page source.

::: warning
Shortcode filters such as `sf_filter` only hide rows from view in **Ajax** mode; the data still reaches the browser. Use **Legacy** if rows must really stay off the page. See [Advanced Shortcode](/advanced-shortcode).
:::

## Caching Configuration

To load faster, Ninja Tables caches table contents. The options shown depend on the table type:

- **Display Frontend Loader**: show a loading indicator while the table loads.
- **Disable Caching**: turn caching off for this table. Not recommended unless you know you need it, for example while testing.
- **Caching interval (in minutes)**: for tables that read rows from elsewhere (such as Google Sheets or a remote CSV), how long fetched data is reused before it's fetched again. Leave blank or set 0 to cache nothing.
- **Enable HTML cache** (Legacy rendering only): caches the full HTML of the table and serves it without touching the database. Set how long under **HTML caching interval (in minutes)**.

Click **Save** to keep your changes.

::: tip
If a table on your site shows old data, clear the cache from the gear icon › **Settings** › **Performance**. See [Clear Caches](/clear-table-cache).
:::

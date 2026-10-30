---
title: "Engine, Rendering & Caching"
description: "Use the Table Configuration tab to see or switch the table engine, choose Ajax or Legacy rendering, and set up caching so tables load fast."
---

# Engine, Rendering & Caching

The **Table Configuration** tab controls how a table loads on your site: which engine draws it, how its rows reach the page, and how it is cached. Most tables work well with the defaults; change these when a table is very large, uses merged cells or shortcodes, or shows outdated data.

1. Go to **Ninja Tables** › **Tables** and open a table.
2. Click the **Table Configuration** tab. The settings sit in one **Performance** card.

![Table Configuration tab showing the Performance card](/images/table-settings/table-rendering-settings/1.-Table-Configuration-Tab-Showing-The-Performance.webp)

## Table engine

**Table engine** is the renderer that powers the table on your site:

- **FooTable**: the engine most existing tables use. Fully supported, so keep it if your table works well.
- **DataTables**: faster with large tables, with server-side paging and all the newer features. Best for new tables.

You pick the engine when you create a table. What the tab shows later depends on the table type:

- Tables that keep their own rows (default and uploaded tables) are **locked** to the engine they were created with. The tab shows "Drawn by the FooTable engine" (or DataTables) and a note that the engine is locked.
- Tables whose rows come from somewhere else (Fluent Forms entries, WP Posts, Custom SQL, FluentCart products) show both engines as cards, so you can switch.

When you pick a different engine, a warning says **Switching engine only moves your data**. Rows and columns are kept, but the table's design (colors, styling and layout) doesn't carry over, so set it up again in **Appearance**.

See [FooTable or DataTables: Choose an Engine](/choose-table-engine) for a full comparison.

## Rendering Setting

**Rendering Setting** decides how the rows are put on the page:

- **Ajax**: rows load right after the page. Fast, and best for big tables. Shortcodes written into cells will not run. Ajax is the default when Ninja Tables Pro is not active.
- **Legacy** (Pro): rows are built on the server into the page HTML. Use it for merged cells ([colspan](/colspan-cell-merge)), shortcodes inside cells, and better SEO, since the rows are in the page source. Legacy is the default for new tables when Pro is active.

In the free version the **Legacy** card is locked; clicking it opens the upgrade popup. A table saved while Pro was active keeps Legacy selected even if Pro is later deactivated.

![Rendering Setting with the Ajax and Legacy cards](/images/table-settings/table-rendering-settings/2.-Rendering-Setting-With-The-Ajax.webp)

### How each engine uses the setting

- **FooTable, Ajax**: the page loads first, then the table asks the server for all its rows in one request.
- **FooTable, Legacy**: the rows are written into the page itself, so no extra request is needed.
- **DataTables, Ajax**: server-side paging. The table only requests the rows for the page the visitor is on. This applies to tables that keep their own rows.
- **DataTables, Legacy**: all rows are handed to the table at once and paged in the browser.
- **DataTables on tables from Fluent Forms, WP Posts, Custom SQL or FluentCart**: there is no server-side paging for these tables. If their rows differ per visitor (for example Fluent Forms "own submissions only", WP Posts "current user's posts only", or Custom SQL using current-user placeholders), Legacy is ignored and Ajax is used, so a cached page never shows one visitor's rows to another.

::: warning
Shortcode filters such as `sf_filter` only hide rows from view in **Ajax** mode; the data still reaches the browser. Use **Legacy** if rows must really stay off the page. See [Advanced Shortcode](/advanced-shortcode).
:::

## Caching Configuration

To load faster, Ninja Tables caches table contents. The **Caching Configuration** row only appears when at least one of its options applies to the table:

- **Display Frontend Loader**: show a loading indicator while the table loads. On by default. Shown for tables that keep their own rows.
- **Disable Caching**: turn caching off for this table. Not recommended unless you know you need it, for example while testing. Shown for tables that keep their own rows.
- **Caching interval (in minutes)**: for Remote CSV and Google Sheets tables, how long fetched data is reused before it is fetched again. Leave blank or set 0 to cache nothing. Over 60 minutes, the field also shows the interval in hours.
- **Enable HTML cache** (Legacy rendering only): caches the full HTML of the table and serves it without touching the database. It appears when **Rendering Setting** is **Legacy** and **Disable Caching** is off.
- **HTML caching interval (in minutes)**: appears once **Enable HTML cache** is on. Sets how long the cached HTML is kept.

Tables from WP Posts, WooCommerce, Fluent Forms, FluentCart and Custom SQL have no caching options of their own, so the row is hidden for them unless Legacy rendering applies.

![Caching Configuration options with HTML cache turned on](/images/table-settings/table-rendering-settings/3.-Caching-Configuration-Options-With-HTML-Cache.webp)

Click **Save** to keep your changes.

::: tip
If a table on your site shows old data, clear the cache from the gear icon › **Settings** › **Performance**. See [Clear Caches](/clear-table-cache).
:::

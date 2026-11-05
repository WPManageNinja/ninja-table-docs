---
title: Find Your Way Around Ninja Tables
description: Learn the Ninja Tables admin, including the top bar, light and dark mode, and where old screens moved.
---

# Find Your Way Around Ninja Tables

The **Ninja Tables** admin is one app with a top bar and a gear icon for site-wide settings. This page shows what each part does, how to switch between light and dark mode, and where the screens from older versions moved.

## Open Ninja Tables

Click **Ninja Tables** in the WordPress admin menu (it reads **Ninja Tables Pro** when Pro is active). The menu has these items:

- **Tables**: the [Tables list](/guide/table-management/tables-list).
- **Create Table**: the Create a table screen.
- **Import**: the Import screen.
- **Charts**: opens the Charts screen, where you can install the free Ninja Charts plugin. Once Ninja Charts is active, this item opens its chart list.
- **Get Pro** (orange, free version only): opens the Pro page on wpmanageninja.com.
- **Activate License** or **Renew License** (orange, Pro only): shows while your license isn't active or has expired, and opens **Settings** › **License**.
- **Settings**: site-wide settings (General, Global appearance, Permissions, Performance and, with Pro active, License).
- **Help**: documentation, support and community links.

![WordPress admin menu with the Ninja Tables submenu expanded](/images/getting-started/admin-navigation/1.-WordPress-Admin-Menu-With-The-Ninja.webp)

You need the Ninja Tables admin permission to see the menu. By default that is administrators only; Pro can let other roles manage tables. See [Who can manage tables](/guide/table-management/define-permission-for-table-users).

## The top bar

Every Ninja Tables screen shares the same top bar:

- **Ninja Tables** and the **plan pill** on the left. The pill reads **Free** or **Pro**. Click the logo or name to go back to the Tables list.
- **Tables**, **Create Table**, **Import**, **Charts** and **Help** in the middle. The one you are on is highlighted.
- The **gear** icon opens [Settings](/guide/table-management/tools-and-settings). It stays highlighted on any settings screen.
- The **theme** icon switches between light and dark mode.
- **Get Pro** on the right, on the free version only.

Inside a table, the top bar is replaced by the table's own header, which has the table name, its shortcode, **Preview** and **Save**. Click the back arrow there to return to the list.

![Ninja Tables top bar with the plan pill, menu items, gear icon and theme icon](/images/getting-started/admin-navigation/2.-Ninja-Tables-Top-Bar.webp)

## Switch between light and dark mode

Click the theme icon in the top bar and choose **Light**, **Dark** or **System**. **System** follows your computer's setting, and the icon changes to a sun or moon to match what it picked.

Your choice is saved in your browser and is shared with the other Fluent plugins on the same site, so changing it in one changes it in all.

## See what moved from older versions

A **Welcome to the new Ninja Tables** banner appears at the top of the **Tables** list until you dismiss it. Your tables, shortcodes and the way tables look on your site are unchanged; only the admin screens were reorganized. The banner has two buttons:

- **What moved?** opens a map of old screens and their new homes.
- **Dismiss** (the x) hides the banner.

![Welcome to the new Ninja Tables banner with the What moved button and Dismiss](/images/getting-started/admin-navigation/4.-Welcome-To-The-New-Ninja-Tables.webp)

**What moved?** opens **What moved in the new Ninja Tables**:

| Old screen | Where it lives now |
|---|---|
| Add Table (pop-up) | **Create Table** page |
| Tools › Import | **Import** (top bar) |
| Tools › Default appearance | **Settings** (gear) › **Default appearance** |
| Tools › Permissions | **Settings** › **Permissions** |
| Tools › Global settings (JavaScript errors) | **Settings** › **General** |
| Tools › Clear cache | **Settings** › **Performance** |
| Tools › License | **Settings** › **License** |
| Table › Design Studio | Table › **Table Design** |
| Table › Columns | **Table Rows**, the gear on each column |
| Table › Custom filters (under Columns) | Table › **Custom Filter** |
| Table › Import / Export | **Table Rows** › **Import / export** |
| Table › Rendering settings & caching | Table › **Table Configuration** |
| Table › Additional CSS / JS | Table › **Custom CSS/JS** |

In the dialog, **Got it** closes it. The **Default appearance** screen is called **Global appearance** in the Settings side menu. See the [Settings overview](/guide/table-management/tools-and-settings).

## Old links still work

Bookmarks and links from older versions open the right place in the new admin:

- `#/tools` opens **Import**.
- `#/tools/global_settings`, `#/tools/default_table_appearance`, `#/tools/permission`, `#/tools/performance` and `#/tools/licensing` open the matching **Settings** screen.
- `#/tables/<ID>/design_studio`, `/configuration`, `/additional_css`, `/filters` and `/table_editing` open the matching tab of that table.
- `#/tables/<ID>/import-export` opens the table's **Import / Export** panel, and `#/tables/<ID>/columns` opens the older Columns page, each on a page of its own (neither is a tab). See [Working in Table Rows](/guide/creating-tables/working-in-table-rows).
- `#/table_builder_add_table` opens **Create Table** with the **Drag & Drop table** panel open.

You can also open a **Create Table** panel straight from a link by adding `#/create?source=` and the tile's key, for example `#/create?source=upload` or `#/create?source=drag_and_drop`.

## Start-up hints are saved per browser

The first-run setup and the welcome banner remember what you skipped or hid in your browser, not on the site. If you clear your browser data, or open the admin in another browser, they appear again. See [Onboarding](/guide/getting-started/ninja-tables-onboarding).

## When a feature needs Pro

On the free version, locked options show a **Pro** badge or a note with an **Upgrade to Pro** link. Clicking some of them opens an **Unlock the Ninja Tables Pro features** pop-up with two buttons: **Not now**, and **Get Ninja Tables Pro**, which opens the Pro page. See [Free vs Pro](/guide/getting-started/free-vs-pro) for the full list.

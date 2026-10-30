---
title: "Settings Overview"
description: "A tour of Ninja Tables Settings: General, Global appearance, Permissions, Performance and License, and where the old Tools page options went."
---

# Settings Overview

**Settings** holds the site-wide options for Ninja Tables. Open it with the **gear** icon in the top bar. Settings for a single table live inside that table's editor instead.

<!-- TODO(screenshot): tools-and-settings-1
  screen: Settings › General
  table: -
  state: Settings open on General with the side navigation visible
  highlight: Settings side navigation
  view: admin
  alt: Ninja Tables Settings with the side navigation listing its sections
-->

Settings has five sections, listed on the left:

- **General**: how Ninja Tables handles JavaScript errors on your pages.
- **Global appearance**: the starting design for new tables.
- **Permissions** (Pro): which roles can manage tables.
- **Performance**: clear the table cache.
- **License** (Pro): activate and manage your Ninja Tables Pro license. It only appears when Pro is installed.

Under **Elsewhere**, the same list links to **Import tables** and the **Help center**.

::: tip Looking for the old Tools page?
The Tools page has been split. Importing tables is now **Import** in the top bar, and everything else lives in Settings.
:::

## Saving changes

General, Global appearance and Permissions share the same footer. As soon as you change something, an **Unsaved changes** badge appears and the **Cancel** and **Save settings** buttons switch on. **Save settings** stores the card and shows **Settings successfully updated**. **Cancel** puts every field back to its last saved value. A smaller **Save settings** button also sits in the card header. Both stay greyed out until something changes.

## General

**Global Javascript Error Handling** sets what Ninja Tables does when another script on the page throws an error while a table is rendering. It applies to all tables.

- **Console Log JS Errors Silently**: Ninja Tables catches the error so the table keeps working, and writes it to the browser console.
- **Handle Error But don't Log**: Ninja Tables catches the error without logging it.
- **Don't Handle Global Javascript Errors (Default)**: errors are left to the browser.

If a table doesn't load because of a conflict with another plugin or your theme, try one of the first two options.

<!-- TODO(screenshot): tools-and-settings-2
  screen: Settings › General
  table: -
  state: Global Javascript Error Handling card with the three radio options
  highlight: Console Log JS Errors Silently option
  view: admin
  alt: General settings showing the JavaScript error handling options
-->

## Global appearance

The card is titled **Global appearance Settings**. New tables start with these settings. Existing tables aren't changed, and every table can still be adjusted in its own **Appearance** tab.

- **Default Table Color**: the color scheme for new tables. Choose from Default, White, Red, Orange, Yellow, Olive, Green, Teal, Blue, Violet, Purple, Pink, Grey or Black.
- **Default Styling Library**: **Semantic UI** (default), **Bootstrap 4** or **Bootstrap 3**. Semantic UI suits most sites; pick Bootstrap only if your theme already uses it. Below it, a list of switches changes with the library you pick:
  - Semantic UI: Single Line Cells, Fixed Layout, Hover Rows, Bordered Table, Hide Horizontal Borders, Hide Vertical Borders, Striped Rows, Compact Table and Vertically Centered.
  - Bootstrap 4: Striped, Bordered, Hide Horizontal and Vertical Borders, Hover, Small Table and Vertically Centered.
  - Bootstrap 3: the same as Bootstrap 4, with Condensed Table in place of Small Table.
- **Default Font setting**: **Font family** (**Inherit from theme** by default, or a generic family such as serif or monospace) and **Font size** from 1 to 50 (14 by default).
- **Show**: **Table title**, **Table description** and **Hide all borders**. All three are off by default.
- **Default Features**: **Search box** and **Sorting** (both on by default), **Default Pagination settings** (**Pages** or **Show all rows**; **Pages** by default) and **Rows per page** (20 by default; hidden when you choose **Show all rows**).

Click **Save settings** when you're done.

<!-- TODO(screenshot): tools-and-settings-3
  screen: Settings › Global appearance
  table: -
  state: Global appearance card showing color swatches, styling library and the Show and Default Features groups
  highlight: Default Table Color swatches
  view: admin
  alt: Global appearance settings for new tables
-->

To copy the design of a table you've already styled, see [Use a design as the default](/use-design-as-default).

## Permissions

By default only administrators can manage tables. With Pro you can tick other roles under **Who can manage tables**, and let them write SQL queries for Custom SQL tables. The role list leaves out Administrator (always allowed) and Subscriber. See [Define user role permissions](/define-permission-for-table-users).

In the free version this section shows **Permissions are a Pro feature** with an upgrade link.

## Performance

The card is titled **Clear caches**. Ninja Tables caches tables so pages stay fast. If a table on your site shows old data, clear the caches here:

- **Clear table cache** rebuilds every table the next time it's viewed.
- **Clear external caches** asks the popular caching plugins on your site to flush their caches too.

See [Clear caches](/clear-table-cache).

## License

This section appears once Ninja Tables Pro is installed. Paste your license key under **Enter the License Key** and click **Activate** to get Pro updates and support. See [Activate your Pro license](/upgrade-to-ninja-tables-pro-add-on-and-activate-ninja-tables-pro-license-key).

Once a key is active, the card shows the product and plan, a status badge (**Active**, **Expired**, **Disabled**, **Invalid**, **Not activated** or **Grace period**), **Expires** (or **Lifetime**) with how many days are left, the masked **License key**, **Licensed to**, and when the license was **Last checked**. The links **Refresh**, **Your account** and **Get Support** sit below, with a **Deactivate** button. To switch keys, click **Enter a different key**.

A colored alert above the card explains anything that needs attention:

- **Your license expired on** (during the grace period): everything keeps working for now, but updates and support end soon. Click **Renew license**.
- **Your license expired on** (expired): updates have stopped until you renew.
- **Your license has been disabled**: this usually means a refund or a chargeback. Click **Get Support**.
- **Could not check your license**: Ninja Tables couldn't reach the license server. The alert shows the message it received. Click **Refresh** to try again.
- **Please update Ninja Tables Pro**: your Pro version is too old to manage the license here. Update Pro first.

<!-- TODO(screenshot): tools-and-settings-4
  screen: Settings › License
  table: -
  state: License card with an active license showing status, expiry and the license key
  highlight: Status badge
  view: admin
  alt: License settings showing an active Ninja Tables Pro license
-->

---
title: "Settings Overview"
description: "A tour of Ninja Tables Settings: General, Global appearance, Permissions, Performance and License, and where the old Tools page options went."
---

# Settings Overview

**Settings** holds the site-wide options for Ninja Tables. Open it with the **gear** icon in the top bar. Settings for a single table live inside that table's editor instead.

![Tools & Settings](/images/table-management/tools-settings/1.-tools-settings-01.webp)

Settings has five sections, listed on the left:

- **General**: how Ninja Tables handles JavaScript errors on your pages.
- **Global appearance**: the starting design for new tables.
- **Permissions** (Pro): which roles can manage tables.
- **Performance**: clear the table cache.
- **License** (Pro): activate your Ninja Tables Pro license. It only appears when Pro is installed.

Under **Elsewhere**, the same list links to **Import tables** and the **Help center**.

::: tip Looking for the old Tools page?
The Tools page has been split. Importing tables is now **Import** in the top bar, and everything else lives in Settings.
:::

## General

**Global Javascript Error Handling** sets what Ninja Tables does when another script on the page throws an error while a table is rendering. It applies to all tables.

- **Console Log JS Errors Silently**: Ninja Tables catches the error so the table keeps working, and writes it to the browser console.
- **Handle Error But don't Log**: Ninja Tables catches the error without logging it.
- **Don't Handle Global Javascript Errors (Default)**: errors are left to the browser.

If a table doesn't load because of a conflict with another plugin or your theme, try one of the first two options.

## Global appearance

New tables start with these settings. Existing tables aren't changed, and every table can still be adjusted in its own **Appearance** tab.

- **Default Table Color**: the color scheme for new tables.
- **Default Styling Library**: Semantic UI, Bootstrap 4 or Bootstrap 3, plus that library's table styles, such as single line cells, fixed layout, hover rows, bordered, striped, compact and vertically centered cells. Semantic UI suits most sites; pick Bootstrap only if your theme already uses it.
- **Default Font setting**: the font family (or **Inherit from theme**) and font size.
- **Show**: whether new tables show the table title and description, and whether to hide all borders.
- **Default Features**: turn the search box and sorting on or off.
- **Default Pagination settings**: split rows into pages or show all rows, and the number of rows per page.

Click **Save settings** when you're done.

![Global Appearance](/images/table-management/tools-settings/2.-Global-Apperrance-02.webp)

To copy the design of a table you've already styled, open that table's **Appearance** tab and use **Use as default for new tables** instead. See [Use a design as the default](/use-design-as-default).

## Permissions

By default only administrators can manage tables. With Pro you can tick other roles under **Who can manage tables**, and let them write SQL queries for Custom SQL tables. See [Define user role permissions](/define-permission-for-table-users).

![Permission](/images/table-management/tools-settings/3.-Permission-03.webp)

## Performance

Ninja Tables caches tables so pages stay fast. If a table on your site shows old data, clear the caches here:

- **Clear table cache** rebuilds every table the next time it's viewed.
- **Clear external caches** asks the popular caching plugins on your site to flush their caches too.

See [Clear caches](/clear-table-cache).

![Clear Table Cache](/images/table-management/tools-settings/5.-Global-Settings-05.webp)

## License

This section appears once Ninja Tables Pro is installed. Paste your license key and click **Activate** to get Pro updates and support. See [Activate your Pro license](/upgrade-to-ninja-tables-pro-add-on-and-activate-ninja-tables-pro-license-key).

![License](/images/table-management/tools-settings/4.-License-04.webp)

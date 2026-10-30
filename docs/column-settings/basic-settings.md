---
title: "Basic Settings"
description: "Add a column or edit an existing one: set its name, key, type and responsive visibility in the Basic tab of the column dialog."
---

# Basic Settings

The **Basic** tab of the column dialog sets what a column is: its name, its key, the type of data it holds, and on which devices it shows. Every table column has these settings, whether the table keeps its own rows or gets them from a connected source.

## Open the column dialog

Columns are managed from the **Table Rows** tab. There is no separate Columns tab.

- **Add a new column**: go to **Ninja Tables** › **Tables** › your table › **Table Rows** and click **Add column** in the toolbar. To place it next to an existing column, click that column's gear icon and choose **Add column left** or **Add column right**. The **New column** drawer opens.
- **Edit a column**: click the gear icon on the column header and choose **Column settings**. The **Edit column** drawer opens with the column name under the title.

![Edit column drawer with the Basic, Advanced, Conditions and Transform tabs](/images/column-settings/basic-settings/1.-Edit-Column-Drawer-With-The-Basic.webp)

The dialog has four tabs: **Basic**, **Advanced**, **Conditions** (Pro) and **Transform** (Pro). On the free version, a lock icon marks **Conditions** and **Transform**. Click **Add column** (new column) or **Save column** (existing column) when you are done. **Cancel** drops your unsaved changes. The edit drawer also has a **Delete column** link, which asks you to confirm before removing the column and its data.

To learn the rest of the grid, see [Working in Table Rows](/working-in-table-rows).

## Column name

The heading visitors see at the top of the column, for example *Price*. This field is required. Saving without it shows **Name is required**.

## Column key

The key identifies the column inside Ninja Tables. Shortcodes, imports, filters and Transform values all use it.

- When you add a column, the key is filled in from the name automatically (for example, *Unit price* becomes `unit_price`). You can edit it before saving.
- Use English letters, numbers and `_` only. The form doesn't check the characters for you, so keep to this yourself.
- Each key must be unique in the table. A repeated key shows **Column Key needs to be unique. Please add a suffix / prefix to make it unique**, and an empty one shows **Column key is required**.
- **The key can't change later.** Once the column is saved, the field is locked. If you need a different key, add a new column and delete the old one.
- On a **DataTables** table, the keys `__id`, `__position`, `__owner_id`, `__settings`, `__created_at` and `__updated_at` are reserved and are rejected.

## Type

Choose the type of data the column holds. The type decides how the cell is edited in Table Rows and how it shows on your site. New columns start as **Single line text field**.

| Type | Use it for |
|---|---|
| [Single line text field](/single-line-text-field) | Short text, names, codes |
| [Text area](/text-area) | Longer text on several lines |
| [HTML field](/html-field) | Links, media and formatted content |
| [Numeric value](/numeric-value) | Numbers you want to sort and compare as numbers |
| [Date field](/date-field) | Dates, with an optional time |
| [Select field](/select-field) (Pro) | A list of choices |
| [Image/File/Lightbox](/image-file-lightbox) (Pro) | Images, lightboxes and image links. Only on tables that keep their own rows |
| [Button/Link](/actionable-button-link) (Pro) | A button that opens a link |

When you pick a type, its own settings appear under the **Type** field.

![Type dropdown with the eight column types](/images/column-settings/basic-settings/2.-Type-Dropdown-With-The-Eight-Column.webp)

On the free version you can still pick **Select field**, **Image/File/Lightbox** and **Button/Link**, but the dialog shows a Pro note. A new image or button column is saved as a single line text column, and a select column behaves as plain text on your site.

## Responsive visibility

Choose where the column shows on small screens:

- **Always show in all devices** (default)
- **Hidden on desktop**
- **Initial hidden mobile**
- **Initial hidden mobile and tab**
- **Initial Hidden Mobile, Tab and Regular Computers**
- **Totally hidden on all devices**

Columns that are folded away aren't lost. Visitors tap the **+** button on a row to see them, and you set how that works in **Appearance** › **Features** › **Mobile & row details**. Careful: **Initial Hidden Mobile, Tab and Regular Computers** hides the column at every width, and **Hidden on desktop** does too on FooTable tables, so the column only appears in the **+** drawer. For what each option does on each table engine, see [Show or hide columns on mobile](/column-responsive-breakpoints).

## Extra settings on connected tables

On tables built from WordPress posts, WooCommerce or FluentCart, the Basic tab also shows the source fields for the column (**Dynamic post data settings** or **Dynamic column data settings**), so you can choose which post field, meta value or product data it displays. See [Dynamic columns reference](/dynamic-columns-reference).

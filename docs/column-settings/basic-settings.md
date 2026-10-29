---
title: "Basic Settings"
description: "Add a column or edit an existing one: set its name, key, type and responsive visibility in the Basic tab of the column dialog."
---

# Basic Settings

The **Basic** tab of the column dialog sets what a column is: its name, its key, the type of data it holds, and on which devices it shows. Every table column has these settings, whether the table keeps its own rows or gets them from a connected source.

## Open the column dialog

Columns are managed from the **Table Rows** tab. There is no separate Columns tab.

- **Add a new column:** go to **Tables** › your table › **Table Rows** and click **Add column** in the toolbar. To place it next to an existing column, click that column's gear icon and choose **Add column left** or **Add column right**. The **New column** drawer opens.
- **Edit a column:** click the gear icon on the column header and choose **Column settings**. The **Edit column** drawer opens with the column name under the title.

![Column settings in the table column header](/images/column-settings/basic-settings/1.-New-UI-table-column.webp)

The dialog has four tabs: **Basic**, **Advanced**, **Conditions** (Pro) and **Transform** (Pro). Click **Add column** (for a new column) or **Save column** (for an existing one) when you are done. The edit drawer also has a **Delete column** link.

To learn the rest of the grid, see [Working in Table Rows](/working-in-table-rows).

## Column name

The heading visitors see at the top of the column, for example *Price*. This field is required.

## Column key

The key identifies the column inside Ninja Tables. Shortcodes, imports, filters and Transform values all use it.

- When you add a column, the key is filled in from the name automatically (for example, *Unit price* becomes `unit_price`). You can edit it before saving.
- Use English letters, numbers and `_` only. Each key must be unique in the table.
- **The key can't change later.** Once the column is saved, the field is locked. If you need a different key, add a new column and delete the old one.

## Type

Choose the type of data the column holds. The type decides how the cell is edited in Table Rows and how it shows on your site.

| Type | Use it for |
|---|---|
| [Single line text field](/single-line-text-field) | Short text, names, codes |
| [Text area](/text-area) | Longer text on several lines |
| [HTML field](/html-field) | Links, media and formatted content |
| [Numeric value](/numeric-value) | Numbers you want to sort and compare as numbers |
| [Date field](/date-field) | Dates, with an optional time |
| [Select field](/select-field) (Pro) | A fixed list of choices |
| [Image/File/Lightbox](/image-file-lightbox) (Pro) | Images, lightboxes and image links. Only on tables that keep their own rows |
| [Button/Link](/actionable-button-link) (Pro) | A button that opens a link |

When you pick a type, its own settings appear under the **Type** field.

## Responsive visibility

Choose where the column shows on small screens:

![Responsive visibility options](/images/column-settings/basic-settings/2.-New-Ui-responsive-breakpoints.webp)

- **Always show in all devices** (default)
- **Hidden on desktop**
- **Initial hidden mobile**
- **Initial hidden mobile and tab**
- **Initial Hidden Mobile, Tab and Regular Computers**
- **Totally hidden on all devices**

Columns that are "initially hidden" aren't lost. Visitors tap the **+** button on a row to see them. You set how that works in **Appearance** › **Mobile & row details**. For details on each option, see [Column responsive breakpoints](/column-responsive-breakpoints).

## Extra settings on connected tables

On tables built from WordPress posts, WooCommerce or FluentCart, the Basic tab also shows the source fields for the column, so you can choose which post field, meta value or product data it displays. See [Dynamic columns reference](/dynamic-columns-reference).

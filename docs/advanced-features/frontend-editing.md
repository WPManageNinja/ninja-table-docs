---
title: "Frontend Editing"
description: "Let logged-in users add, edit and delete table rows right on your site, without wp-admin access, and control who can change what (Pro)."
---

# Frontend Editing

**Frontend editing** (Pro) lets logged-in users add, edit and delete rows right on the page where the table is shown, with no access to wp-admin needed. You choose which user roles can edit, which columns they can change, and whether they only see their own rows.

Frontend editing works on tables that store their own rows (default and uploaded tables). Tables that read their rows from somewhere else, such as WP Posts, WooCommerce or Google Sheets, can't be edited from the front end; the tab says so.

## Turn it on

1. Go to **Ninja Tables** › **Tables** and open a table.
2. Click the **Frontend editing** tab.
3. Turn on the switch next to **Frontend editing**.

![Enable frontend editing](/images/advanced-features/frontend-editing/1.-Enable-Frontend-Editing-1.webp)

Set the options below and click **Save** at the top of the editor. Turning editing off saves straight away.

## Permissions

![Frontend editing permissions](/images/advanced-features/frontend-editing/3.-Enable-Frontend-Editing-3.webp)

- **Who can add & edit**: the user roles that get the **Add row** and edit buttons. Leave it empty for **Administrators only**.
- **Who can delete**: the roles that can delete rows. Deleted rows can't be recovered.
- **Own data only**: users only see, edit and delete the rows they added themselves. Everyone else sees an empty table.

::: tip Show all rows read-only
With **Own data only** on, you can still show every row to everyone, read-only, on another page. Use the shortcode shown in the tab:

```
[ninja_tables disable_edit="yes" id="123"]
```
:::

![Own data only](/images/advanced-features/frontend-editing/4.-Own-Data-Only.webp)

## Appearance

The labels and icons visitors see while editing:

- **Add row button label** and **Edit row button label**
- **Add popup heading** and **Edit popup heading**
- **Action icon position**: put the edit and delete icons on the **Left** or **Right** of each row.
- **Always show edit icons**: show the icons all the time. When off, they appear when hovering a row.

![Appearance settings](/images/advanced-features/frontend-editing/6.-Appearance-Settings.webp)

## Columns

Choose what people can change, column by column:

- **Editable**: users can change this column.
- **Required**: the column must be filled in before a row can be saved.
- **Default value**: the value a new row starts with.

![Editable column options](/images/advanced-features/frontend-editing/5.-EDitable-Column.webp)

## On your site

Logged-in users with the right role see an **Add row** button above the table and edit and delete icons on each row. Clicking one opens a popup form.

![Frontend editing on a page](/images/advanced-features/frontend-editing/7.-frontend-edit-1.webp)

---
title: "Frontend Editing"
description: "Let logged-in users add, edit and delete table rows right on your site, without wp-admin access, and control who can change what (Pro)."
---

# Frontend Editing

**Frontend editing** (Pro) lets users add, edit and delete rows right on the page where the table is shown, with no access to wp-admin needed. You choose which user roles can edit, which columns they can change, and whether they only see their own rows. It works the same way on FooTable and DataTables tables.

Frontend editing works on tables that store their own rows (default and uploaded tables). Tables that read their rows from somewhere else, such as WP Posts, WooCommerce, Fluent Forms, Custom SQL or Google Sheets, can't be edited from the front end. For those, the tab shows a note instead of the settings and the switch is hidden.

Without Ninja Tables Pro, the tab shows an upgrade panel (**Unlock frontend editing**).

## Turn it on

1. Go to **Ninja Tables** › **Tables** and open a table.
2. Click the **Frontend Editing** tab.
3. Turn on the switch next to **Frontend Editing**.

![Frontend Editing tab with the switch turned on](/images/advanced-features/frontend-editing/1.-Frontend-Editing-Tab-With-The-Switch.webp)

Set the options below and click **Save** at the top of the editor. Turning the switch off saves straight away.

## Permissions

![Permissions card with the role picker open](/images/advanced-features/frontend-editing/2.-Permissions-Card-With-The-Role-Picker.webp)

- **Who can add & edit**: the roles that get the add and edit buttons. Pick as many roles as you like. Leave it empty for **Administrators only**.
  - **Public Users (Only add data)**: lets visitors who are not logged in add new rows. They can't edit or delete existing rows.
- **Who can delete**: the roles that can delete rows. Only logged-in users can delete, so this list has no public option. Deleted rows can't be recovered.
- **Own data only**: users only see, edit and delete the rows they added themselves. Everyone else sees an empty table.

Administrators can always add, edit and delete from the front end, whatever you pick here. The role lists don't include **Administrator** for that reason.

::: tip Show all rows read-only
With **Own data only** on, you can still show every row to everyone, read-only, on another page. Use the shortcode shown in the tab:

```
[ninja_tables disable_edit="yes" id="123"]
```
:::

![Own data only switch with the read-only shortcode](/images/advanced-features/frontend-editing/3.-Own-Data-Only-Switch.webp)

## Appearance

The labels and icons visitors see while editing:

- **Add row button label**: the text of the add button. The default is "New Row".
- **Edit row button label**: the text of the button that switches rows into edit mode. The default is "Edit Rows".
- **Add popup heading**: the title of the add popup. The default is "Add Data".
- **Edit popup heading**: the title of the edit popup. The default is "Edit Data".
- **Action icon position**: put the edit and delete icons on the **Left** or **Right** of each row. The default is **Right**.
- **Always show edit icons**: show the icons all the time. When off, they appear when hovering a row.

![Appearance card with frontend editing labels and icon options](/images/advanced-features/frontend-editing/4.-Appearance-Card-With-Frontend-Editing-Labels.webp)

## Columns

The **Columns** card lists every column with its type underneath the name: **Single line text**, **Number**, **Multi line text**, **HTML**, **Date**, **Select (dropdown)**, **Image** or **Button / link**. Choose what people can change, column by column:

- **Editable**: users can change this column. Columns that are not editable are left out when a row is saved, including when a new row is added.
- **Required**: the column must be filled in before a row can be saved. This is only enforced on columns that are also **Editable**.
- **Default value**: the value a new row starts with.

![Columns card with Editable, Required and Default value for each column](/images/advanced-features/frontend-editing/5.-Columns-Card-With-Editable-Required.webp)

## On your site

Users with the right role see an add button above the table (**New Row** unless you changed the label) and edit and delete icons on each row. Clicking one opens a popup form. A row can't be saved while a required column is empty.

<!-- TODO(screenshot): frontend-editing-6
  screen: Page showing the Employee Directory table while logged in as an editor
  table: Employee Directory
  state: the add button above the table and the edit popup open on a row
  highlight: -
  view: frontend
  alt: Table on a page with the Add row button and the edit popup open
  blocked: blocked: Employee Directory has Frontend editing OFF (saved) and the switch saves immediately when toggled; needs Frontend editing = on saved on table Employee Directory (Pro, own-data-only off, roles e.g. Editor); plus a page embedding the table and an editor-role login (the runner logs in as admin)
-->

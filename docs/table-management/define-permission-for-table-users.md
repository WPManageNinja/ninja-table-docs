---
title: "Define User Role Permission for Table Users"
description: "Choose which WordPress user roles can manage tables, and whether they can build Custom SQL tables, in Settings › Permissions (Pro)."
---

# Define User Role Permission for Table Users

By default, only administrators can create and edit tables. With **Permissions** (Pro) you can hand table management to other roles, such as editors or shop managers, without making them administrators. You can also decide whether those roles may write SQL queries for Custom SQL tables.

## Choose who can manage tables

1. In Ninja Tables, click the **gear** icon in the top bar to open **Settings**.
2. Click **Permissions**.
3. Under **Who can manage tables**, tick each role that should have access, or tick **Select all**.
4. Click **Save settings**.

<!-- TODO(screenshot): define-permission-for-table-users-1
  screen: Settings › Permissions
  table: -
  state: Who can manage tables card with Editor and Shop manager ticked
  highlight: Role checkboxes
  view: admin
  alt: Permissions settings with role checkboxes under Who can manage tables
-->

Administrators always have access, whatever you tick, so Administrator isn't in the list. Subscriber isn't listed either. A role you tick here can create, edit and delete **every** table on the site; there's no per-table permission.

Like every settings card, an **Unsaved changes** badge appears when you change a box. **Cancel** restores the saved roles and **Save settings** applies them. If you untick every role, only administrators can manage tables again.

In the free version, the Permissions screen shows **Permissions are a Pro feature**, and only administrators can manage tables.

## Let roles write SQL queries

Once you've ticked at least one role, a **Custom SQL module** card appears below. It controls whether those roles can build [Custom SQL tables](/create-table-from-custom-sql):

1. Turn on **Let these roles write SQL queries**.
2. Click **Save settings**.

It's off by default and applies to all the roles ticked above. The roles and this switch are saved together.

<!-- TODO(screenshot): define-permission-for-table-users-2
  screen: Settings › Permissions
  table: -
  state: Custom SQL module card visible with the warning and the switch on
  highlight: Let these roles write SQL queries switch
  view: admin
  alt: Custom SQL module card with the write SQL queries switch
-->

::: warning
Users with this permission can run read queries against your database. SQL tables can read any data in it, including user details. Only turn this on for roles you fully trust.
:::

## Related

- [Let users edit a table from the page](/frontend-editing) (Pro). Frontend editing has its own role settings per table, for visitors who edit rows on your site rather than in the admin.
- [Settings overview](/tools-and-settings)

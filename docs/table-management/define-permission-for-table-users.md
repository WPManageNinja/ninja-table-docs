---
title: "Define User Role Permission for Table Users"
description: "Choose which WordPress user roles can manage tables, and whether they can build Custom SQL tables, in Settings › Permissions (Pro)."
---

# Define User Role Permission for Table Users

By default, only administrators can create and edit tables. With **Permissions** (Pro) you can hand table management to other roles, such as editors or shop managers, without making them administrators. You can also decide whether those roles may write SQL queries for Custom SQL tables.

In the free version, the Permissions screen shows **Permissions are a Pro feature**, and only administrators can manage tables.

## Choose who can manage tables

1. In Ninja Tables, click the **gear** icon in the top bar to open **Settings**.
2. Click **Permissions**.
3. Under **Who can manage tables**, tick each role that should have access. Staff roles come first, with **Roles for customers and members** below them.
4. Click **Save settings**.

![Permissions settings with role checkboxes under Who can manage tables](/images/table-management/define-permission-table/1.-Permissions-Settings-With-Role-Checkboxes-Under.webp)

The list shows the roles on your site, so it also includes roles added by other plugins, and yours may differ from the screenshot. Administrators always have access, so Administrator isn't in the list, and neither is the WordPress Subscriber role. A role you tick here can create, edit and delete **every** table on the site; there's no per-table permission. Only a WordPress administrator can save changes on this screen.

### Roles for customers and members

Roles that can't write posts, such as **Customer**, are listed apart in this group. They usually belong to shoppers or site members, so leave them unticked unless you trust every user who has them. If you tick one, a warning names it: "Every user with these roles can edit and delete all tables: Customer".

![Warning shown after ticking the Customer role, before saving](/images/table-management/define-permission-table/3.-Customer-Role-Warning.webp)

### Save your changes

The page has one **Save settings** button, under both cards. It switches on when you change something and saves the roles and the SQL switch together. If you untick every role, only administrators can manage tables again.

## Let roles write SQL queries

Once you've ticked at least one role, a **Custom SQL module** card appears below. It controls whether those roles can build [Custom SQL tables](/guide/data-sources/create-table-from-custom-sql):

1. Turn on **Let these roles write SQL queries**.
2. Click **Save settings**.

It's off by default and applies to all the roles ticked above, including any customer or member role. Administrators can always write SQL queries.

![Custom SQL module card with the write SQL queries switch](/images/table-management/define-permission-table/2.-Custom-SQL-Module-Card.webp)

::: warning
Users with this permission can run read queries against your database. SQL tables can read any data in it, including user details. Only turn this on for roles you fully trust.
:::

## Related

- [Let users edit a table from the page](/guide/advanced-features/frontend-editing) (Pro). Frontend editing has its own role settings per table, for visitors who edit rows on your site rather than in the admin.
- [Settings overview](/guide/table-management/tools-and-settings)

---
title: "Fluent Forms Integration"
description: "Show Fluent Forms submissions in a table that updates by itself, choose the fields, filter by entry status, set the entry order and show each visitor only their own entries."
---

# Fluent Forms Integration

**Fluent Forms Integration** shows the entries of a Fluent Forms form as a table on your site. New submissions appear in the table automatically, so there is nothing to re-enter. It's free and works for registration lists, RSVPs, directories, and order or payment records.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/0dsOiczWsIQ" title="Fluent Forms Integration Video" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Before you start

You need [Fluent Forms](https://fluentforms.com/) installed and a form with some entries.

If Fluent Forms isn't installed, the **Fluent Forms entries** drawer says "Fluent Forms is not installed yet". Click **Install Fluent Forms now** to install and activate it in one step.

If Fluent Forms is installed but out of date, the drawer shows a warning that Fluent Forms needs to be updated. Update it from the **Plugins** screen, then open the drawer again.

<!-- TODO(screenshot): fluent-forms-integration-1
  screen: Tables › Create Table › Connect live data › Fluent Forms entries
  table: -
  state: Drawer open with Fluent Forms not installed, showing the install prompt
  highlight: Install Fluent Forms now button
  view: admin
  alt: Fluent Forms entries drawer asking to install Fluent Forms
-->

## Create a Fluent Forms table

1. Go to **Create Table** and, under **Connect live data**, click **Fluent Forms entries**.
2. Enter a **Table name**. Picking a form fills it in for you (for example "Contact Form entries"), and you can change it.
3. Under **Choose form**, select your form. The list shows each form as its ID and title.
4. Under **Select form fields**, tick the fields you want. Each ticked field becomes a column, in the order you tick them.
5. Set **Entry Status** to **All** (default), **Read** or **Unread**. Read entries are the ones opened in **Fluent Forms › Entries**.
6. Check **Max records**. It starts at **1000**, so a new table shows at most 1,000 entries. Raise the number, or clear the field to show all entries.
7. Check the engine line (FooTable is the usual choice). See [Choose a table engine](/choose-table-engine).
8. Click **Create table**.

<!-- TODO(screenshot): fluent-forms-integration-2
  screen: Tables › Create Table › Connect live data › Fluent Forms entries
  table: a Fluent Forms contact form with entries
  state: Form chosen, three fields ticked, Entry Status All, Max records 1000
  highlight: Max records field
  view: admin
  alt: Fluent Forms entries drawer with form, fields, entry status and max records
-->

Ninja Tables opens the new table on the **Table Rows** tab, with your form fields as column headers and the entries as rows.

<!-- TODO(screenshot): fluent-forms-integration-3
  screen: Tables › a Fluent Forms table › Table Rows
  table: a Fluent Forms contact form with entries
  state: Table Rows tab showing form entries as rows
  highlight: -
  view: admin
  alt: Table Rows tab listing Fluent Forms entries
-->

### Extra entry columns

Besides your form fields, the field list offers:

- **ID**, **Serial Number** and **Status** of each entry.
- For payment forms: **Payment Total**, **Payment Status**, **Billing Name**, **Billing Email**, **Transaction ID** and **Payment Date**.

## Change the form settings

On the **Table Rows** tab, the banner reads **Rows come from Fluent Forms entries**. Click **Source settings** to open the drawer. Here you can:

- Change the **Form**.
- Add or remove fields under **Select form fields** (or use **Select all**).
- Change the **Entry type**: All, Read or Unread.
- Change **Max records**. Keep it empty to show all.
- Turn on **Show current user submissions only at frontend** (see below).

Click **Update** to apply the changes. Changing the form or the fields rebuilds the columns.

The rows are read-only, because they come from Fluent Forms. To change an entry, edit it in Fluent Forms. You can still rename columns, change their type and design the table in the **Appearance** tab. For a cleaner mobile view, see [Responsive breakpoints](/column-responsive-breakpoints) and [Stackable table](/stackable-table).

<!-- TODO(screenshot): fluent-forms-integration-4
  screen: Tables › a Fluent Forms table › Table Rows › Source settings
  table: a Fluent Forms contact form with entries
  state: Source settings drawer open
  highlight: Update button
  view: admin
  alt: Source settings drawer of a Fluent Forms table
-->

## Choose the entry order

New entries show first by default. To show the oldest first, go to **Appearance** › **Sorting**, set **Default Order** to **Created Date**, then set **Order** to **Oldest First** or **Newest First**.

## Show entries by status

You can show only read or unread entries:

1. In Fluent Forms, open the form's entries and set an entry's status with **Change Status**.
2. In the table's source settings, set **Entry type** to **Read** or **Unread**, then click **Update**.

The table now shows only entries with that status. Trashed entries are never shown.

## Show each visitor only their own submissions

Turn on **Show current user submissions only at frontend** in the source settings. Logged-in visitors then see only the entries they submitted. Logged-out visitors see an empty table. This is useful for "My registrations" or "My orders" pages.

::: warning
This option is only in **Source settings**, not on the Create screen. Turn it on after you create the table.
:::

## Show the table

Copy the shortcode from the editor header and paste it into any page or post, or use the Ninja Tables block. See [Embed a table](/embed-tables).

Developers can change the entry status, page size and order with the Fluent Forms filters listed in [Hooks and filters](/hooks-and-filters). To turn the same entries into a chart, see [Create charts from Fluent Forms entries](/create-ninja-charts-with-fluent-forms-entries).

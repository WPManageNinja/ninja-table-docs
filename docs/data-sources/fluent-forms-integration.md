---
title: "Fluent Forms Integration"
description: "Show Fluent Forms submissions in a table that updates by itself, choose the fields, filter by entry status and show each visitor only their own entries."
---

# Fluent Forms Integration

**Fluent Forms Integration** shows the entries of a Fluent Forms form as a table on your site. New submissions appear in the table automatically, so there is nothing to re-enter. It's free and works for registration lists, RSVPs, directories, and order or payment records.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/0dsOiczWsIQ" title="Fluent Forms Integration Video" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Before you start

You need [Fluent Forms](https://fluentforms.com/) installed, and a form with some entries.

![Form Entries](/images/data-sources/fluent-forms-integration/1.-Fluent-Forms-1.webp)

If Fluent Forms isn't installed, the **Fluent Forms entries** drawer says "Fluent Forms is not installed yet". Click **Install Fluent Forms now** to install and activate it in one step.

## Create a Fluent Forms table

1. Go to **Create Table** and, under **Connect live data**, click **Fluent Forms entries**.
2. Enter a **Table name**.
3. Under **Choose form**, select your form.
4. Under **Select form fields**, tick the fields you want. Each ticked field becomes a column, in this order.
5. Set **Entry Status** to **All**, **Read** or **Unread**. Read entries are the ones opened in **Fluent Forms › Entries**.
6. Set **Max records** to limit how many entries the table shows. Leave it empty to show all.
7. Check the engine line (FooTable is the usual choice). See [Choose a table engine](/choose-table-engine).
8. Click **Create table**.

![Connect Fluent Forms](/images/data-sources/fluent-forms-integration/2.-Fluent-Forms-2.webp)

![Select Entry Fields](/images/data-sources/fluent-forms-integration/3.-Fluent-Forms-3.webp)

Ninja Tables creates the table with your form fields as column headers and the entries as rows.

![form entries in data table](/images/data-sources/fluent-forms-integration/4.-Form-Entries-In-Data-Table.webp)

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

Click **Update** to apply the changes.

![Contact Table](/images/data-sources/fluent-forms-integration/5.-Contact-Table.webp)

The rows are read-only, because they come from Fluent Forms. To change an entry, edit it in Fluent Forms. You can still rename columns, change their type and design the table in the **Appearance** tab. For a cleaner mobile view, see [Responsive breakpoints](/column-responsive-breakpoints) and [Stackable table](/stackable-table).

## Show each visitor only their own submissions

Turn on **Show current user submissions only at frontend** in the source settings. Logged-in visitors then see only the entries they submitted. This is useful for "My registrations" or "My orders" pages.

![Own Submission Form](/images/data-sources/fluent-forms-integration/6.-Own-Submission-Form.webp)

## Show entries by status

You can show only read or unread entries:

1. In Fluent Forms, open the form's entries and set an entry's status with **Change Status**.

![Show Table Data According to the Entry Type](/images/data-sources/fluent-forms-integration/7.-fluent-forms-integration-12.webp)

2. In the table's source settings, set **Entry type** to **Read** or **Unread**, then click **Update**.

![Entry Type](/images/data-sources/fluent-forms-integration/8.-Fluent-Forms-5.webp)

The table now shows only entries with that status.

![Status](/images/data-sources/fluent-forms-integration/9.-fluent-forms-integration-14.webp)

## Show the table

Copy the shortcode from the editor header and paste it into any page or post, or use the Ninja Tables block. See [Embed a table](/embed-tables).

To turn the same entries into a chart, see [Create charts from Fluent Forms entries](/create-ninja-charts-with-fluent-forms-entries).

---
title: "Search Box"
description: "Turn the table search box on or off, change its placeholder, no-results and dropdown heading texts, and set its position and colors."
---

# Search Box

The **search box** above a table lets visitors type a word and see only the rows that contain it. You can turn it on or off, change its texts, and decide where it sits. It is on by default.

1. Go to **Ninja Tables** › **Tables** and open a table.
2. Click the **Appearance** tab, then the **Features** tab in the settings panel.
3. Open **Search**.

<!-- TODO(screenshot): add-or-remove-search-or-filter-functionality-1
  screen: Tables › Employee Directory › Appearance › Features › Search
  table: Employee Directory
  state: Search section open with the heading switch on
  highlight: Search heading switch
  view: admin
  alt: Search section with the text fields, Look options and the Custom Filters link
-->

The switch in the **Search** heading turns the search box on or off.

## Texts

These three fields are the table's search wording. They replaced the old **Language settings**. Leave a field empty to use the built-in text.

- **Placeholder Text**: the grey hint inside the empty search box. The built-in text is `Search`.
- **Empty Result Text**: the message shown when nothing matches. The built-in text is `No Result Found`.
- **Dropdown Heading**: the heading of the "search in" dropdown that lets visitors pick which columns to search. The built-in text is `Search in`. This is used by FooTable tables; the DataTables engine does not read it.

**Placeholder Text** and **Empty Result Text** work on both engines (FooTable and DataTables).

## Look

- **Position** (Pro): **Left**, **Center**, **Right** or **Default**.
- **Full Width** (Pro): the search box takes the full width above the table.
- **Colors** (Pro): **Background**, **Icon** and **Border** of the search box. They are the same colors as **Search Bar Colors** in [Table Colors](/table-color-settings).

Click **Save** to keep your changes.

## Leave a column out of the search

By default every column is searched. To leave one out, open the column's settings in **Table Rows**, go to the **Advanced** tab and turn off **Searchable** (Pro). See [Advanced Column Options](/advanced-settings).

## Need dropdown filters?

The search box searches text. To give visitors dropdowns, checkboxes or date and number ranges, use [Custom Filters](/custom-filters) (Pro). The **Search** section has a **Custom Filters** link that jumps straight to that tab.

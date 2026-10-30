---
title: "Introduction – Getting Started with Ninja Tables"
description: "What Ninja Tables does, how its admin is laid out, and the ways you can build, style and publish a responsive table in WordPress."
---

# Introduction – Getting Started with Ninja Tables

**Ninja Tables** is a WordPress table builder for creating responsive, searchable tables without writing code. Type rows in by hand, upload a spreadsheet, design a layout cell by cell, or connect live data from WooCommerce, Google Sheets, your posts and more. To check whether it fits your project, see the [feature page](https://ninjatables.com/features/).

## Find your way around

After you [install and activate the plugin](/how-to-install-and-activate-ninja-tables-plugin), open **Ninja Tables** in the WordPress admin menu. On a site with no tables, you start in a short guided setup that helps you create your first one; see [Guided setup and quick start](/onboarding-setup-guide). Once you have tables, Ninja Tables opens on the [Tables list](/tables-list).

Every Ninja Tables screen shares the same top bar:

- **Tables**: the [list of all your tables](/tables-list), with search, filters, the shortcode for each table and where each one is used.
- **Create Table**: the **Create a table** screen, where you pick what kind of table to build.
- **Import**: create a table from a CSV, Excel or JSON file, or bring tables over from TablePress.
- **Charts**: turn table data into charts with the free [Ninja Charts](/getting-started-with-ninja-charts-free-wordpress-chart-plugin) plugin.
- **Help**: documentation, support and community links.
- The **gear** icon opens [Settings](/tools-and-settings) (General, Global appearance, Permissions, Performance and License).
- The theme icon switches the admin between **Light**, **Dark** and **System** mode.

Press **⌘K** (Mac) or **Ctrl+K** (Windows) to search your tables and settings from anywhere. See [Find your way around](/admin-navigation) for the top bar, the search, and a map of where older screens moved.

![Ninja Tables Tables list with the top bar](/images/getting-started/ninja-tables-introduction/1.-Ninja-Tables-Tables-List.webp)

## Ways to create a table

The **Create a table** screen groups its options into two sections. Each tile opens a panel on the right where you name the table and set it up. See [All table types at a glance](/table-types-overview) for a full comparison.

**Start from scratch**

- **Default table**: add columns and rows yourself in a spreadsheet-style grid.
- **Upload a file**: start from a CSV, Excel (.xlsx) or JSON file.
- **Drag & Drop table**: design a free layout cell by cell, or start from a ready-made template.

**Connect live data**

- **WP Posts/CPTs** (Pro): posts, pages and custom post types.
- **WooCommerce products** (Pro): a product catalog with add-to-cart buttons.
- **WooCommerce reviews** (Pro): product reviews and ratings.
- **Fluent Forms entries**: live form submissions.
- **FluentCart products**: FluentCart products with add-to-cart buttons.
- **Google Sheets** (Pro): rows from a published Google Sheet.
- **Remote CSV / JSON** (Pro): rows from a CSV file at a URL.
- **Custom SQL query** (Pro): rows from a database query.

The WooCommerce tiles only appear when WooCommerce is active, and the FluentCart tile only when FluentCart is active.

![Create a table screen with Start from scratch and Connect live data tiles](/images/getting-started/ninja-tables-introduction/2.-Create-A-Table-Screen-With-Start.webp)

When you create a table, you also choose its **engine**: **FooTable** (the usual choice) or **DataTables**, which holds up better once a table runs to thousands of rows. Read [FooTable or DataTables: choose an engine](/choose-table-engine) before you build a large table, because tables that store their own rows keep the engine they were created with.

## The table editor

Open any table to edit it. The table name, its ID and its shortcode sit at the top, with a **Preview** button that opens the table on its own page. The editor has six tabs:

- **Table Rows**: add, edit, duplicate and delete rows, add and configure columns, and import or export rows. Connected tables show where their rows come from, with a **Source settings** button.
- **Custom filters** (Pro): add dropdown, checkbox, date and range filters above the table.
- **Appearance**: style the table with a live preview, then set search, sorting, pagination and the mobile layout.
- **Table Configuration**: the engine, how rows load (Ajax or Legacy) and caching.
- **Frontend editing** (Pro): let logged-in users add, edit and delete rows from the page.
- **Custom CSS/JS**: add your own CSS, or JavaScript (Pro).

![Table editor with the six tabs along the top](/images/getting-started/ninja-tables-introduction/3.-Table-Editor-With-The-Six-Tabs.webp)

## Drag & Drop table builder

Build tables visually: add text, buttons, images, ratings, lists and more into any cell, merge and split cells, and preview the result on desktop, tablet and mobile. See [Create your first Drag & Drop table](/how-to-create-your-first-drag-and-drop-table-with-ninja-tables).

<!-- TODO(screenshot): ninja-tables-introduction-4
  screen: Tables › a Drag & Drop table › builder
  table: a Drag & Drop pricing table
  state: Builder open with elements placed in cells
  highlight: -
  view: admin
  alt: Drag & Drop builder with a pricing table
  blocked: site has only DOCTEST Drag & Drop tables, no demo pricing builder table
-->

## Ready-made table templates

The Drag & Drop builder includes ready-made templates for pricing tables, comparison tables, employee tables and schedules. Pick one when you create a Drag & Drop table. Some templates are Pro; see [Drag & Drop templates](/drag-drop-templates).

You can also download free templates from the [Ninja Tables template collection](https://ninjatables.com/free-table-templates/). Each one comes as a JSON file that you [import](/import-ninja-tables-json), customize and embed. The instructions are included with each template.

## Responsive tables

Every table works on desktops, tablets and phones, and search, sorting, filtering and pagination work on all of them. On small screens you can hide columns, fold them into an expandable row, or [stack each row as a card](/stackable-table).

## Design and customization

The **Appearance** tab shows a live preview of your table, which you can switch between Desktop, Tablet and Mobile. It has three tabs:

- **Colors**: preset color schemes, or your own colors (Pro).
- **Style**: title and header, typography (font family and size), and rows and borders, including the style library (Semantic UI, Bootstrap 4 or Bootstrap 3), stripes and hover effects.
- **Features**: search box, sorting, pagination, sticky header and first column (Pro), responsive breakpoint, stackable table, export and print buttons (Pro), and the row details popup.

To set the starting look for every new table, use **Settings** › **Global appearance**. See the [Appearance overview](/table-style-settings) for details.

![Appearance tab with a live preview and the Colors, Style and Features tabs](/images/getting-started/ninja-tables-introduction/5.-Appearance-Tab-With-A-Live-Preview.webp)

## Fast performance

Tables can load their rows with Ajax right after the page, and their data is cached, so pages stay fast. Large tables can use the DataTables engine, which loads one page of rows at a time from the server. You control engine, rendering and caching per table in [Table Configuration](/table-rendering-settings).

## Import and export

Create tables from CSV, Excel (.xlsx), JSON or Ninja Tables JSON files, and [import tables from TablePress](/import-table-from-tablepress-plugin) or Data Tables Generator by Supsystic. Each table can also be exported as CSV, Excel or JSON from **Table Rows** › **Import / Export**. See [Import a CSV, Excel or JSON file](/import-table-data-from-a-csv) and [Export a table](/export-ninja-tables-csv-json).

## Integrations

- **WooCommerce** (Pro): [product tables](/woocommerce-integration) with add-to-cart buttons, bulk add to cart and compare.
- **FluentCart**: [product tables](/fluentcart-integration) with add-to-cart buttons, bulk add to cart and compare.
- **Google Sheets** (Pro): [show a Google Sheet](/google-sheets-integration) as a table, kept up to date.
- **Fluent Forms**: [display form entries](/fluent-forms-integration) in a table.
- **Ninja Charts**: turn table data into [charts and graphs](/create-ninja-charts-with-ninja-tables-data).

## Accessible tables

Tables rendered by Ninja Tables meet **WCAG 2.1 AA** accessibility standards, so they can be navigated by keyboard and read correctly by screen readers. You can give any table a caption in its [table details](/table-title-description-settings). For Drag & Drop tables, you can also set the [Table Role](/ninja-tables-drag-and-drop-table-settings) to describe how assistive technology should read the table.

## SEO-friendly tables

Ninja Tables outputs clean HTML tables that search engines can read. If search engines need to see every row in the page HTML, use the Legacy rendering mode (Pro) in [Table Configuration](/table-rendering-settings).

## Put a table on your site

Every table has a shortcode, such as `[ninja_tables id="123"]`, shown in the Tables list and at the top of the editor. Paste it into any post or page, or use the **Ninja Tables** block in the block editor. See [Embed a table](/embed-tables). Shortcode attributes let you show the same table in different ways on different pages; see the [shortcode reference](/shortcode-reference).

## Next steps

- [Guided setup and quick start](/onboarding-setup-guide)
- [Create your first table](/create-your-first-table)
- [Free vs Pro](/free-vs-pro)
- [Glossary](/ninja-tables-glossary)

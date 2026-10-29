---
title: "Introduction – Getting Started with Ninja Tables"
description: "What Ninja Tables does, how its admin screens are laid out, and the ways you can build, style and publish a responsive table in WordPress."
---

# Introduction – Getting Started with Ninja Tables

**Ninja Tables** is a WordPress table builder for creating responsive, searchable tables without writing code. Type rows in by hand, upload a spreadsheet, design a layout cell by cell, or connect live data from WooCommerce, Google Sheets, your posts and more. To check whether it fits your project, see the [feature page](https://ninjatables.com/features/).

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/9XIbrKvJRho" title="Ninja Tables Overview Video" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Find your way around

After you [install and activate the plugin](/how-to-install-and-activate-ninja-tables-plugin), open **Ninja Tables** in the WordPress admin menu. Until you create a table, you'll see the **Welcome to Ninja Tables** screen with two buttons, **Create your first table** and **Import table**, plus links to the documentation, templates and demo.

![Welcome to Ninja Tables UI](/images/getting-started/ninja-tables-introduction/1.-Welcome-to-Ninja-Tables-UI.webp)

Every Ninja Tables screen shares the same top bar:

- **Tables**: the [list of all your tables](/tables-list), with search, filters, the shortcode for each table and where each one is used.
- **Create Table**: the **Create a table** screen, where you pick what kind of table to build.
- **Import**: create a table from a CSV, Excel or JSON file, or bring tables over from TablePress.
- **Charts**: turn table data into charts with the free [Ninja Charts](/getting-started-with-ninja-charts-free-wordpress-chart-plugin) plugin.
- **Help**: documentation, support and community links.
- The **gear** icon opens [Settings](/tools-and-settings) (General, Global appearance, Permissions, Performance and License).
- The sun icon switches the admin between light and dark mode.

Press **⌘K** (Mac) or **Ctrl+K** (Windows) anywhere in Ninja Tables to open the command palette. Type to jump to a table or a settings screen.

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

The WooCommerce and FluentCart tiles only appear when those plugins are active.

![New UI Table creation option](/images/getting-started/ninja-tables-introduction/2.-Table-creation-option-UI.webp)

When you create a table, you also choose its **engine**: **FooTable** (the usual choice) or **DataTables**, which holds up better once a table runs to thousands of rows. Read [FooTable or DataTables: choose an engine](/choose-table-engine) before you build a large table, because tables that store their own rows keep the engine they were created with.

## The table editor

Open any table to edit it. The table name, its ID and its shortcode sit at the top, with a **Preview** button that opens the table on its own page. The editor has six tabs:

- **Table Rows**: add, edit, duplicate and delete rows, add and configure columns, and import or export rows. Connected tables show where their rows come from, with a **Source settings** button.
- **Custom filters** (Pro): add dropdown, checkbox, date and range filters above the table.
- **Appearance**: style the table with a live preview, then set search, sorting, pagination and the mobile layout.
- **Table Configuration**: the engine, how rows load (Ajax or Legacy) and caching.
- **Frontend editing** (Pro): let logged-in users add, edit and delete rows from the page.
- **Custom CSS/JS**: add your own CSS, or JavaScript (Pro).

## Drag & Drop table builder

Build tables visually: add text, buttons, images, ratings, lists and more into any cell, merge and split cells, and preview the result on desktop, tablet and mobile. See [Create your first Drag & Drop table](/how-to-create-your-first-drag-and-drop-table-with-ninja-tables).

![Ninja Tables drag and drop](/images/getting-started/ninja-tables-introduction/3.-Screenshot-2023-07-26-122526.webp)

## Ready-made table templates

The Drag & Drop builder includes ready-made templates for pricing tables, comparison tables and more. You can pick one when you create a Drag & Drop table.

![Table Templates](/images/getting-started/ninja-tables-introduction/4.-Screenshot-7.webp)

You can also download free templates from the [Ninja Tables template collection](https://ninjatables.com/free-table-templates/). Each one comes as a JSON file that you [import](/import-ninja-tables-json), customize and embed. The instructions are included with each template.

![template categories](/images/getting-started/ninja-tables-introduction/8.-template-categories.webp)

## Responsive tables

Every table works on desktops, tablets and phones, and search, sorting, filtering and pagination work on all of them. On small screens you can hide columns, fold them into an expandable row, or [stack each row as a card](/stackable-table).

![Collapsed Table](/images/getting-started/ninja-tables-introduction/5.-Collapsed-Table-1.webp)

## Design and customization

The **Appearance** tab shows a live preview of your table, which you can switch between Desktop, Tablet and Mobile. Start from a **Quick style** (Minimal, Lined, Striped, Bordered or Compact), then fine-tune it:

- Title and header row
- Font family and size
- Style library (Semantic UI, Bootstrap 4 or Bootstrap 3), borders, stripes and hover effects
- Preset color schemes, or your own colors (Pro)
- Search box, sorting and pagination
- Sticky header and first column (Pro)
- Mobile layout and row details
- Export and print buttons (Pro)

When you like a design, you can [use it as the default for new tables](/use-design-as-default). See the [Appearance overview](/table-style-settings) for details.

![New UI table design tabs](/images/getting-started/ninja-tables-introduction/6.-New-UI-table-design-tabs.webp)

## Fast performance

Tables can load their rows with Ajax right after the page, and their data is cached, so pages stay fast. Large tables can use the DataTables engine, which loads one page of rows at a time from the server. You control engine, rendering and caching per table in [Table Configuration](/table-rendering-settings).

![New UI table rendering](/images/getting-started/ninja-tables-introduction/7.-New-UI-table-rendering.webp)

## Import and export

Create tables from CSV, Excel (.xlsx), JSON or Ninja Tables JSON files, and [import tables from TablePress](/import-table-from-tablepress-plugin) or Data Tables Generator by Supsystic. Each table can also be exported as CSV, Excel or JSON from **Table Rows** › **Import / export**. See [Import a CSV, Excel or JSON file](/import-table-data-from-a-csv) and [Export a table](/export-ninja-tables-csv-json).

![New UI table import tools and settings](/images/getting-started/ninja-tables-introduction/9.-New-UI-table-import-tools-and-settings.webp)

## Integrations

- **WooCommerce** (Pro): [product tables](/woocommerce-integration) with add-to-cart buttons, bulk add to cart and compare.
- **FluentCart**: [product tables](/fluentcart-integration) with add-to-cart buttons, bulk add to cart and compare.
- **Google Sheets** (Pro): [show a Google Sheet](/google-sheets-integration) as a table, kept up to date.
- **Fluent Forms**: [display form entries](/fluent-forms-integration) in a table.
- **Ninja Charts**: turn table data into [charts and graphs](/create-ninja-charts-with-ninja-tables-data).

![WooCommerce product table](/images/getting-started/ninja-tables-introduction/10.-WooCommerce-product-table-1.webp)

![connect google sheets to ninja tables](/images/getting-started/ninja-tables-introduction/11.-connect-google-sheets-to-ninja-tables.webp)

## Accessible tables

Tables rendered by Ninja Tables meet **WCAG 2.1 AA** accessibility standards, so they can be navigated by keyboard and read correctly by screen readers. You can give any table a caption in its [table details](/table-title-description-settings). For Drag & Drop tables, you can also set the [Table Role](/ninja-tables-drag-and-drop-table-settings) to describe how assistive technology should read the table.

## SEO-friendly tables

Ninja Tables outputs clean HTML tables that search engines can read. If search engines need to see every row in the page HTML, use the Legacy rendering mode (Pro) in [Table Configuration](/table-rendering-settings).

## Put a table on your site

Every table has a shortcode, such as `[ninja_tables id="123"]`, shown in the Tables list and at the top of the editor. Paste it into any post or page, or use the **Ninja Tables** block in the block editor. See [Embed a table](/embed-tables). Shortcode attributes let you show the same table in different ways on different pages; see the [shortcode reference](/shortcode-reference).

## Next steps

- [Quick start: your first table](/onboarding-setup-guide)
- [Create your first table](/create-your-first-table)
- [Free vs Pro](/free-vs-pro)
- [Glossary](/ninja-tables-glossary)

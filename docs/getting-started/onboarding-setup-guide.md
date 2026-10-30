---
title: "Guided Setup and Quick Start"
description: "Create your first table with the three-step guided setup, or skip it and build a Default table by hand, style it and put it on a page."
---

# Guided Setup and Quick Start

The first time you open **Ninja Tables** on a site with no tables, a **guided setup** walks you through creating your first table in three steps. This page covers the guided setup, what you see if you skip it, and a manual quick start that takes you from a new table to a published one in about five minutes.

## Use the guided setup

The setup shows on **Ninja Tables** › **Tables** while the site has no tables at all, including none in the trash.

### Step 1: Choose how to start

The first step is **Welcome to Ninja Tables**. Under **How do you want to start?**, pick one of four cards, then click **Continue**. **Continue** stays off until you pick one.

- **Start blank**: "Type or paste rows from a spreadsheet." Continue to step 2.
- **Upload a file**: "CSV, Excel (.xlsx) or JSON." Opens the **Create Table** screen with the **Upload a file** panel ready. See [Import a CSV, Excel or JSON file](/import-table-data-from-a-csv).
- **Connect a data source**: "Fluent Forms, WordPress posts, WooCommerce, Google Sheets…" Opens the **Create Table** screen so you can pick a tile. See [All table types at a glance](/table-types-overview).
- **Drag & Drop table**: "A free layout or a ready-made pricing, comparison or schedule template." Opens **Create Table** with the **Drag & Drop table** panel ready. See [Create your first Drag & Drop table](/how-to-create-your-first-drag-and-drop-table-with-ninja-tables).

<!-- TODO(screenshot): onboarding-setup-guide-1
  screen: Ninja Tables › Tables (no tables)
  table: -
  state: Guided setup step 1 with the four start cards and Start blank selected
  highlight: Start blank card
  view: admin
  alt: Guided setup step 1 showing four start cards
  blocked: needs a site with no tables (demo site has 17)
-->

### Step 2: Name your table

If you chose **Start blank**, step 2 is **Set up your table**:

- **Table name**: for example "Pricing table". If you leave it empty, the table is named **My first table**.
- **Description**: optional. You can change it later in the table's details; see [Table title, caption and description](/table-title-description-settings).

Click **Continue to design**.

<!-- TODO(screenshot): onboarding-setup-guide-2
  screen: Ninja Tables › Tables (no tables) › Set up your table
  table: -
  state: Step 2 with a table name typed
  highlight: Table name field
  view: admin
  alt: Guided setup step 2 with the Table name and Description fields
  blocked: needs a site with no tables (demo site has 17)
-->

### Step 3: Pick a look

Step 3 is **Make it look right**. It sets the starting design, and you can change everything later on the **Appearance** tab.

- **Colors**: choose a ready-made color scheme.
- **Font family**: **Inherit from theme** is the default. The list also has generic families such as serif, sans-serif and monospace.
- **Font size**: from 10 to 24 px. The default is 14.

Click **Create your table**. Ninja Tables creates an empty table with the **FooTable** engine, applies your look, and opens it on the **Table Rows** tab. Add your columns next; the steps are in the quick start below.

<!-- TODO(screenshot): onboarding-setup-guide-3
  screen: Ninja Tables › Tables (no tables) › Make it look right
  table: -
  state: Step 3 with a color scheme, font and size chosen
  highlight: Create your table button
  view: admin
  alt: Guided setup step 3 with color, font family and font size options
  blocked: needs a site with no tables (demo site has 17)
-->

Click **Back** to return to a previous step. The note under the card says the setup is optional and everything in it can be changed later.

## Skip the setup

Click **Skip setup** at the bottom left of the card at any time. The setup is replaced by a plain screen, **You don't have any tables yet**, with two buttons:

- **Create a table** opens the **Create Table** screen.
- **Import** opens the Import screen.

To bring the guided setup back, click **Use the guided setup instead** on that screen.

The setup and the screens after it remember your choices in your browser, not on the site. See [Find your way around](/admin-navigation).

<!-- TODO(screenshot): onboarding-setup-guide-4
  screen: Ninja Tables › Tables (no tables, setup skipped)
  table: -
  state: Empty state with Create a table, Import and Use the guided setup instead
  highlight: Create a table button
  view: admin
  alt: Empty state reading You don't have any tables yet
  blocked: needs a site with no tables (setup skipped)
-->

## Follow the Getting started checklist

While your site has only one or two tables, a **Getting started** card sits at the top of the Tables list. It shows how far you are, for example "1 of 3 done · about 3 minutes", with three steps:

- **Create your first table**: done as soon as any table exists.
- **Pick a design**: done once you save a table's **Appearance** in this browser. **Start** or **Open** takes you to the Appearance tab.
- **Add it to a page**: done once any table is used on a page. **Start** or **Open** takes you to the table's **Table Rows** tab, where you copy the shortcode.

Click the x to hide the card. It disappears on its own once you have three or more tables.

<!-- TODO(screenshot): onboarding-setup-guide-5
  screen: Ninja Tables › Tables
  table: -
  state: Getting started card visible above a list with one table
  highlight: Start button
  view: admin
  alt: Getting started checklist with three steps above the Tables list
  blocked: Getting started card is hidden once a site has 3+ tables (demo has 17)
-->

## Quick start: build a Default table by hand

Use these steps if you skipped the setup, or want to see every screen. For more detail on each step, see [Create your first table](/create-your-first-table).

### Open Create Table

Click **Create Table** in the top bar, or **New table** on the [Tables list](/tables-list). The **Create a table** screen shows every kind of table in two groups: **Start from scratch** and **Connect live data**. Click **Default table** under **Start from scratch**.

A panel opens on the right:

1. Enter a **Table name**, for example "Pricing plans". It's required.
2. Optionally add a **Description**.
3. Leave the engine on **FooTable**, the usual choice. If you expect thousands of rows, click **Change** and pick **DataTables**. You can't change the engine of a Default table later, so see [choose an engine](/choose-table-engine) if you're unsure.
4. Click **Create table**.

![Default table panel with Table name, Description and the engine line](/images/getting-started/onboarding-setup-guide/6.-Default-Table-Panel-With-Table-Name.webp)

### Add your first column

The table opens on the **Table Rows** tab. Its shortcode, for example `[ninja_tables id="158"]`, is shown at the top. The table has no columns yet, so click **Add column**.

The column dialog opens on its **Basic** tab:

- **Column name**: the header visitors see, for example "Plan".
- **Column key**: filled in from the name. It's used by shortcodes, imports and filters, and can't be changed later.
- **Type**: what the column holds, such as Single line text, Numeric value or Date field.
- **Responsive visibility**: whether the column is shown or hidden on smaller screens.

Click **Add column** to save it. Repeat for each column you need, for example "Price" and "Features". See [column basic settings](/basic-settings) for every option.

### Add your rows

Click **Add data**. A panel opens with one field per column. Fill them in and click **Add row**. Tick **Add another after this** to keep the panel open for the next row.

Your rows appear in the grid. To change a row later, open its row actions to edit, duplicate or delete it.

<!-- TODO(screenshot): onboarding-setup-guide-7
  screen: Tables › Pricing plans › Table Rows
  table: -
  state: Grid with three columns and a few rows after adding data
  highlight: Add data button
  view: admin
  alt: Table Rows grid with columns and rows added
  blocked: needs a newly created Pricing plans table; not creating tables on the demo site
-->

### Style your table

Click the **Appearance** tab. The left side shows a live preview of your table; switch it between Desktop, Tablet and Mobile to check each size. The side panel has three tabs:

- **Colors**: pick a preset color scheme.
- **Style**: open **Title & Header** to show the table title above the table, and **Rows & Borders** for stripes, hover and borders.
- **Features**: open **Search**, **Sorting** and **Pagination** to set how visitors find their way around the table.

Click **Save** at the top when you're happy. See the [Appearance overview](/table-style-settings) for every option.

### Put the table on a page

1. Click **Preview** at the top of the editor to see the table on its own page.
2. Click the shortcode at the top of the editor to copy it.
3. Open the post or page where the table should appear, paste the shortcode (or add the **Ninja Tables** block and pick your table), and publish.

See [Embed a table](/embed-tables) for the block, the classic editor and page builders.

![A published page showing a Ninja Tables table](/images/getting-started/onboarding-setup-guide/8.-Published-Page-Showing-A-Ninja-Tables.webp)

## Where to go next

- Add more column types and options: [column basic settings](/basic-settings)
- Show live data instead of typed rows: [How connected tables work](/connected-tables-overview)
- Change site-wide defaults, permissions and caches: [Settings](/tools-and-settings)

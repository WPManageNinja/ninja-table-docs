---
title: "Create Your First Table"
description: "Build a Default table step by step: create it, add columns and rows, style it in Appearance, preview it and embed it on a page."
---

# Create Your First Table

A **Default table** is a table whose rows you type, paste or import yourself. This guide walks through building one from start to finish: create the table, add columns and rows, style it, and put it on a page. For a shorter version, see the [quick start](/onboarding-setup-guide).

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/U8AHiC1g3Ew" title="Ninja Tables Playbook Video" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Create the table

1. In your WordPress admin, click **Ninja Tables**, then **Create Table** in the top bar. You can also click **New table** on the Tables list.
2. On the **Create a table** screen, click **Default table** under **Start from scratch**.

![New UI Table creation option](/images/creating-tables/create-first-table/1.-Table-creation-option-UI.webp)

3. In the panel that opens, enter a **Table name**. It's required.
4. Optionally add a **Description**. The editor lets you add bold and italic text, lists, links and media.
5. Check the engine line. **FooTable** is the usual choice. If the table will hold thousands of rows, click **Change** and pick **DataTables**. The engine of a Default table can't be changed later; see [choose an engine](/choose-table-engine).
6. Click **Create table**.

The table opens in the editor on the **Table Rows** tab.

The other tiles on the Create a table screen build different kinds of tables, such as tables from a file, WooCommerce products or a SQL query. See [All table types at a glance](/table-types-overview). For a table built from a database query, see [Custom SQL table](/create-table-from-custom-sql).

## Add columns

A new table has no columns, so the grid shows **Add column**.

![New UI add table column](/images/creating-tables/create-first-table/2.-New-UI-add-table-column.webp)

1. Click **Add column**.
2. On the **Basic** tab, fill in:
   - **Column name**: the header visitors see.
   - **Column key**: filled in from the name. Use English letters, numbers and `_` only. It's used by shortcodes, imports and filters, and it can't change later.
   - **Type**: Single line text field, Text area, HTML field, Numeric value or Date field. Select field, Button/Link and Image need Pro.
   - **Responsive visibility**: whether the column is always shown, or hidden on some screen sizes.
3. Click **Add column**.

![New UI table column](/images/creating-tables/create-first-table/3.-New-UI-table-column.webp)

Repeat for each column. To edit a column later, open the menu on its header in Table Rows and click **Column settings**. The same menu lets you add a column to the left or right, sort the rows, or delete the column. Drag a column header to move the column.

## Add rows

Click **Add data** in the toolbar. A panel opens with one field per column.

1. Fill in the fields.
2. Tick **Add another after this** if you want to add more rows straight away.
3. Click **Add row**.

![New Ui add data add column](/images/creating-tables/create-first-table/4.-New-Ui-add-data-add-column.webp)

The toolbar above the grid also has:

- **Search rows**: find rows by any value.
- **Sort manually** (Pro): drag rows into the order visitors see. See [Sort rows manually](/rearrangement-of-rows-in-ninja-tables-manual-row-sort).
- **Compact rows**: show more rows on screen.
- **Import / export**: add rows from a CSV file, or export the table. See [Import rows into an existing table](/import-csv-file-to-an-existing-table).

For everything you can do in the grid, see [Working in Table Rows](/working-in-table-rows).

## Edit, duplicate and delete rows

Each row has its own actions at the end of the row:

- **Edit row** opens the row in the side panel. Use **Previous row** and **Next row** to move through the table without closing it.
- **Row actions** › **Insert row below** (Pro), **Duplicate row** or **Delete row**.
- **Row settings** (Pro) sets a background and text color for the row. Cells have their own **Cell settings**. See [Row and cell colors](/tables-row-color).

To delete several rows at once, tick them and click **Delete** in the toolbar.

![New Ui add delete or duplicate row](/images/creating-tables/create-first-table/13.-New-Ui-add-delete-or-duplicate-row.webp)

## Fine-tune your columns

The column dialog has three more tabs:

- **Advanced**: text alignment, column width, extra CSS classes, background and text colors, **Sortable**, **Searchable**, **Click to copy** and HTML header content. Most options here are Pro. See [Advanced column settings](/advanced-settings).

![New Ui column advanced settings](/images/creating-tables/create-first-table/6.-New-Ui-column-advanced-settings.webp)

- **Conditions** (Pro): style a cell, row or column when its value matches a rule, such as "greater than 100". See [Conditional formatting](/conditional-formatting).

![New Ui conditional formatting tab](/images/creating-tables/create-first-table/7.-New-Ui-conditional-formatting-tab.webp)

- **Transform** (Pro): change how a value is shown, for example turning plain text into a link, or calculating it with an Excel formula. See [Transform value](/transform-value).

![New Ui transform value tab](/images/creating-tables/create-first-table/8.-New-Ui-transform-value-tab.webp)

Click **Save column** after changing a column.

## Style the table in Appearance

Click the **Appearance** tab. On the left is a live preview of your table, which you can switch between Desktop, Tablet and Mobile. The side panel holds the design options.

![New UI table design tabs](/images/creating-tables/create-first-table/9.-New-UI-table-design-tabs.webp)

- **Quick styles**: one-click looks: Minimal, Lined, Striped, Bordered and Compact.
- **Title & header**: show the table title, description and header row.
- **Typography**: font family and size.
- **Rows & borders**: the style library (Semantic UI, Bootstrap 4 or Bootstrap 3 on FooTable) and options such as hover, stripes and borders.
- **Colors**: pick a preset color scheme, or set your own colors (Pro).

![New Ui predefined color scheme](/images/creating-tables/create-first-table/11.-New-Ui-predefined-color-scheme.webp)

![New Ui custom color scheme](/images/creating-tables/create-first-table/12.-New-Ui-custom-color-scheme.webp)

- **Search**, **Sorting** and **Pagination**: what visitors can search, the default order and how many rows show per page.
- **Sticky header & column** (Pro): keep the header row or first column in view while scrolling.
- **Mobile & row details**: how the table behaves on small screens, such as folding extra columns into a + drawer or stacking rows as cards.

![New table ui stackable table](/images/creating-tables/create-first-table/10.-New-table-ui-stackable-table.webp)

- **Export & print** (Pro): CSV, Excel and print buttons for visitors.

Click **Save** at the top of the editor to keep your changes. See the [Appearance overview](/table-style-settings) for every option.

## Check Table Configuration

The **Table Configuration** tab controls how the table loads: its engine, whether rows load with **Ajax** or are built into the page (**Legacy**, Pro), and caching. The defaults suit most tables. See [Engine, rendering and caching](/table-rendering-settings).

![New Ui table configuration tab](/images/creating-tables/create-first-table/5.-New-Ui-table-configuration-tab.webp)

## Preview and embed the table

- Click **Preview** at the top of the editor to open the table on its own page.
- Click the shortcode at the top of the editor, for example `[ninja_tables id="123"]`, to copy it. The same shortcode is in the **Shortcode** column of the [Tables list](/tables-list).

![New Ui embed shortcode](/images/creating-tables/create-first-table/14.-New-Ui-embed-shortcode.webp)

Paste the shortcode into any post or page, or add the **Ninja Tables** block in the block editor and search for your table by name.

::: warning
The design options in the block's sidebar are saved to the table itself. Changing them changes the table on every page where it's shown, not just this one.
:::

See [Embed a table](/embed-tables) for the block editor, the classic editor and page builders.

## Next steps

- [Duplicate a table](/table-cloning-duplicating) to reuse its setup.
- [Add custom filters](/custom-filters) (Pro) above the table.
- [Let users edit the table from the page](/frontend-editing) (Pro).

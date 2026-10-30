---
title: "Ninja Tables Glossary"
description: "Plain-language definitions of the terms used in the Ninja Tables admin and documentation, from Appearance to Used on."
---

# Ninja Tables Glossary

This glossary explains the terms you'll see in the Ninja Tables admin and in these docs. Features marked (Pro) need [Ninja Tables Pro](/free-vs-pro).

## A

**Advanced (column tab):** The column dialog tab for alignment, width, extra CSS classes, colors, Sortable, Searchable, Click to copy and HTML header content. Most options are Pro.

**Advanced shortcode:** Extra attributes for the `[ninja_tables]` shortcode (Pro) that change how a table shows on one page, such as rows per page or which columns to show. See the [shortcode reference](/shortcode-reference).

**Ajax rendering:** A rendering mode where the table's rows load right after the page. It's fast and suits big tables, but shortcodes typed into cells don't run. Compare Legacy rendering.

**Appearance:** The table editor tab where you style a table with a live preview. It has three tabs: Colors, Style (title and header, typography, rows and borders) and Features (search, sorting, pagination, sticky header, responsive breakpoint, stackable table, export and print, and the row details popup).

## B

**Basic (column tab):** The first tab of the column dialog, where you set the column name, column key, type and responsive visibility.

**Button element:** A Drag & Drop element that adds a clickable button to a cell.

## C

**Caption:** An optional line of text, set in table details, that Ninja Tables adds to the table as an HTML caption. Screen readers announce it.

**Cell merge (colspan):** Combining adjacent cells in the same row into one cell.

**Click to copy:** A column option that lets visitors copy a cell's value with one click.

**Column dialog:** The window you open from a column header in Table Rows (**Column settings**) to edit a column. It has four tabs: Basic, Advanced, Conditions and Transform.

**Column key:** The internal name of a column, used by shortcodes, imports and filters. You set it when you add the column, and it can't change later.

**Command palette:** A quick search you open with ⌘K (Mac) or Ctrl+K (Windows) anywhere in Ninja Tables, to jump to a table or a screen. See [Find your way around](/admin-navigation).

**Conditions (column tab):** Rules (Pro) that change a cell's, row's or column's color, content or CSS class when its value matches, for example "greater than 100". Also called conditional formatting.

**Connected table:** A table whose rows come from somewhere else, such as WordPress posts, WooCommerce, Fluent Forms, a Google Sheet or a SQL query. Its rows are read-only in Ninja Tables. See [How connected tables work](/connected-tables-overview).

**Custom CSS/JS:** The table editor tab for your own CSS, or JavaScript (Pro), scoped to one table.

**Custom filters:** The table editor tab (Pro) for adding dropdown, radio, checkbox, text, date and range filters above a table.

**Custom SQL query:** A connected table (Pro) built from a read-only SQL query on your WordPress database or a remote database.

## D

**DataTables:** One of the two table engines. It loads one page of rows at a time from the server, so it holds up well for tables with thousands of rows. See [choose an engine](/choose-table-engine).

**Data filtering shortcode:** Shortcode attributes that show only matching rows of a table, without visitors needing to search or filter.

**Default table:** A table whose rows you type, paste or import yourself. Ninja Tables stores the rows.

**Drag & Drop table:** A table you design visually in the builder by placing elements (text, buttons, images, ratings and more) into cells, instead of setting up columns and rows.

## E

**Engine:** The renderer that draws a table on your site: FooTable or DataTables. You choose it when you create a table. Tables that store their own rows keep that engine afterwards.

**Excel formula support:** A Transform option (Pro) that computes a cell's value with Excel-style formulas such as `=SUM(...)`. It applies to the whole table.

**Export & print:** The Appearance › Features section (Pro) that adds CSV, Excel and print buttons for visitors.

## F

**Featured image:** A column type for WP Posts and WooCommerce tables that shows a post's featured image.

**FluentCart integration:** A connected table built from FluentCart products, with add-to-cart buttons. It's free.

**Fluent Forms integration:** A connected table that shows submitted Fluent Forms entries as rows.

**FooTable:** One of the two table engines. It's light and responsive, and the usual choice for most tables.

**Frontend editing:** The table editor tab (Pro) that lets chosen user roles add, edit and delete rows from the page.

## G

**Getting started checklist:** A card at the top of the Tables list, while the site has one or two tables, with three steps: create a table, pick a design and add it to a page. See [Guided setup and quick start](/onboarding-setup-guide).

**Global appearance:** The Settings section with default styles for new tables. Existing tables don't change.

**Google Sheets integration:** A connected table (Pro) that shows rows from a published Google Sheet.

**Guided setup:** The three-step wizard that opens on the Tables screen when a site has no tables: choose how to start, name the table, pick a look. See [Guided setup and quick start](/onboarding-setup-guide).

## H

**HTML cache:** A caching option that stores the table's finished HTML and serves it without touching the database, for the number of minutes you set.

**HTML element (Drag & Drop):** A Drag & Drop element, called Custom HTML in the builder, for your own HTML in a cell.

**HTML field:** A column type that renders HTML inside a cell.

## I

**Icon element:** A Drag & Drop element (Pro) that shows an icon inside a cell.

**Image & file (column type):** A column type (Pro) for images or files, with click actions such as lightbox, link or download.

**Image element (Drag & Drop):** A Drag & Drop element (Pro) for placing an image in a cell.

**Image lightbox:** Opening an image in an enlarged popup when a visitor clicks it.

**Import:** Creating a table from a CSV, Excel (.xlsx), JSON or Ninja Tables JSON file, or from TablePress or Data Tables Generator by Supsystic. Open it from **Import** in the top bar.

## J

**JSON export/import:** Exporting a whole table, including its design and settings, as a Ninja Tables JSON file, and importing it on the same or another site.

## L

**Legacy rendering:** A rendering mode (Pro) where rows are built on the server into the page HTML. It suits merged cells, shortcodes in cells and SEO. Compare Ajax rendering.

**License key:** The key you enter in **Settings** › **License** to activate Ninja Tables Pro updates and support.

**List element:** A Drag & Drop element for a bulleted or numbered list inside a cell.

## M

**Manual sort:** Dragging rows into the order visitors see, with the **Sort manually** switch in Table Rows (Pro).

**Merge/split cells:** Combining cells (see Cell merge and Rowspan) or splitting a merged cell back into separate cells.

**Mobile layout:** The Appearance › Features sections for small screens: Responsive Breakpoint folds extra columns into a + drawer, Stackable Table stacks rows as cards, and Others holds the Row details popup.

## N

**Ninja Charts:** A free companion plugin that turns Ninja Tables data into charts. Open it from **Charts** in the top bar.

**Numeric value (column type):** A column type for numbers, so they sort and calculate as numbers.

## P

**Pagination:** Splitting a long table's rows across pages.

**Performance:** The Settings section with buttons to clear the Ninja Tables cache and ask caching plugins to clear theirs. See [Clear caches](/clear-table-cache).

**Permissions:** The Settings section (Pro) where you choose which user roles can manage tables, and whether they can write SQL queries.

**Plan pill:** The **Free** or **Pro** label next to the Ninja Tables name in the top bar. See [Find your way around](/admin-navigation).

**Post meta field:** A column for WP Posts and WooCommerce tables that shows a custom field value, including fields from ACF, Meta Box, JetEngine, Toolset and Pods.

**Pro:** The paid add-on that unlocks extra data sources, column types, design options and tools. See [Free vs Pro](/free-vs-pro).

**Progress bar element:** A Drag & Drop element that shows a value as a filled bar or circle.

## Q


## R

**Read-only:** A badge in Table Rows on connected tables. Their rows come from the source, so you can't add or edit them in Ninja Tables.

**Responsive visibility:** A column setting that shows or hides the column on desktop, tablet or mobile.

**Ribbon element:** A Drag & Drop element (Pro) that adds a ribbon or badge, such as "Best seller", to a cell.

**Row and cell settings:** Background and text colors for a single row or cell (Pro), set from the row actions in Table Rows.

**Row details popup:** An Appearance › Features › Others option that shows a row's full details in a popup.

**Rowspan:** Merging a cell vertically across two or more rows.

## S

**Search:** The built-in search box visitors type into to filter rows. Its placeholder and "no results" texts are set in **Appearance** › **Features** › **Search**.

**Select field (column type):** A column type (Pro) with a list of set options for each cell.

**Settings:** The site-wide options you open with the gear icon: General, Global appearance, Permissions, Performance and License. See [Settings overview](/tools-and-settings).

**Shortcode:** The code, such as `[ninja_tables id="123"]`, that you paste into a post or page to show a table. Drag & Drop tables use `[ninja_table_builder id="123"]`.

**Shortcode element (Drag & Drop):** A Drag & Drop element that runs any WordPress shortcode inside a cell.

**Sorting:** Letting visitors click a column header to sort rows by that column.

**Source banner:** The bar at the top of Table Rows on a connected table, saying where its rows come from, with a **Source settings** (or **Edit query**) button.

**Source settings:** The panel that sets which rows a connected table pulls in, opened from the source banner.

**Stackable table:** A mobile layout where each row stacks into a card instead of scrolling sideways. Set it in **Appearance** › **Features** › **Stackable Table**.

**Star rating element:** A Drag & Drop element that shows a star rating in a cell.

**Sticky header & column:** Appearance › Features options (Pro) that keep the header row or first column in view while visitors scroll.

**Styled list element:** A Drag & Drop element (Pro) for a list with custom icons.

## T

**Table Configuration:** The table editor tab for the engine, rendering mode (Ajax or Legacy) and caching.

**Table details:** The dialog you open with the pencil next to a table's name, to edit its title, caption and description.

**Table duplicating:** Making a copy of a table, with its columns, rows and settings, from the Tables list. See [Duplicate a table](/table-cloning-duplicating).

**Table ID:** The unique number of each table, used in its shortcode.

**Table Rows:** The first table editor tab, a spreadsheet-style grid where you add and edit rows and columns, and import or export rows with **Import / Export**.

**TablePress migration:** Importing tables from the TablePress plugin into Ninja Tables. See [Import from TablePress](/import-table-from-tablepress-plugin).

**Text icon element:** A Drag & Drop element (Pro) that pairs an icon with text in one cell.

**Transform (column tab):** A column tab (Pro) that changes how a cell's value is shown, using an HTML template, other columns' values or Excel formulas.

**Trash:** Where tables go when you move them to trash from the Tables list. They're hidden on your site until you restore them or delete them for good.

## U

**Used on:** A column in the Tables list that shows how many posts or pages embed each table, with links to them.

## W

**Welcome banner:** A notice at the top of the Tables list after an update, with **What moved?**, **Find a setting** and **Dismiss** buttons. See [Find your way around](/admin-navigation).

**WooCommerce integration:** A connected table (Pro) built from WooCommerce products, with prices, stock and add-to-cart buttons.

**WP Posts table:** A connected table (Pro) built from WordPress posts, pages or any custom post type.

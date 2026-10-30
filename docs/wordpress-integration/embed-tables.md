---
title: "Add a Table to Your Site"
description: "Embed a table on any page or post with its shortcode, the Ninja Tables block, the classic editor button or a page builder, and preview it first."
---

# Add a Table to Your Site

Every table has a **shortcode**, and that shortcode is how a table appears on your site. You can paste it yourself, or insert it with the **Ninja Tables** block in the block editor or the button in the classic editor. A table can be placed on as many pages as you like, but only a **published** table shows to visitors.

## Copy the shortcode

- **In the table editor**: the shortcode chip next to the table's title, for example `[ninja_tables id="123"]`. Click it to copy.
- **In the Tables list**: the **Shortcode** column. See [The Tables List](/tables-list).

<!-- TODO(screenshot): embed-tables-1
  screen: Tables › Product Price List (table editor header)
  table: Product Price List
  state: Table editor open, shortcode chip and Preview button visible in the header
  highlight: Shortcode chip
  view: admin
  alt: Table editor header with the shortcode chip and the Preview button
-->

Drag & Drop tables use a different shortcode, `[ninja_table_builder id="123"]`. Copy it from the chip in the builder. The table must be published, or the shortcode prints nothing. Logged-in table admins also see an **Edit Table** link under a Drag & Drop table on the page.

## Preview a table before you embed it

Click **Preview** in the table editor, or use the preview option in the Tables list, to open the table on its own themed page. The link looks like `/?ninjatable_preview=123`. Drag & Drop tables preview from the builder's top bar (`/?ninjatable_builder_preview=123`). Only users with the table admin role can open a preview; everyone else gets nothing. The role is set under **Settings** › **Permissions**; see [Define Permission for Table Users](/define-permission-for-table-users).

## If a table does not show

Visitors see nothing when a table cannot be displayed. Logged-in users with the table admin role see a short notice in its place:

- **This table is currently in trash. Please restore it to display the table.**
- **This table does not exist or has been permanently deleted.** The ID in the shortcode is wrong, or the table was removed for good.
- **This table has no columns configured. Please add columns to display the table.**
- **This table is not published. Please publish it to display the table.**

When you preview a page or post while logged in as a user who is not a table admin, the table is replaced with **Please publish the page/post to see the table**. Publish the page to see the table.

## Block editor (Gutenberg)

1. Edit a page or post and add the **Ninja Tables** block (search for "Ninja Tables" or "table"; it's in the **Widgets** category).
2. Pick the table under **Select Table**. The list shows every table, whatever its status.
3. Adjust its settings in the block sidebar if you want to.

The block shows a live preview of the table in the editor. It saves the table's shortcode into the page, so the page keeps working even if you later switch editors. A Drag & Drop table is saved as `[ninja_table_builder id="123"]`, and the block sidebar shows only **Select Table** for it.

<!-- TODO(screenshot): embed-tables-2
  screen: Page editor › Ninja Tables block
  table: Product Price List
  state: Block selected, sidebar showing Select Table and the Styling, Colors and Other tabs
  highlight: Select Table field
  view: admin
  alt: Ninja Tables block in the block editor with its sidebar tabs
-->

For regular tables the sidebar has three tabs: **Styling**, **Colors** and **Other**.

::: warning Block settings change the table everywhere
The settings in the block sidebar are saved to the **table itself**, not to this one block. The save happens when you save or update the post, and only if the user saving it has the table admin role. Once saved, the change shows on every page that shows the table. To show a table differently on one page only, use [shortcode attributes](/advanced-shortcode) instead.
:::

### Styling tab

- **Select Styling Library**: the CSS library the table uses. The choices depend on the table engine.
- **Select Styles**: style options of the chosen library, shown as checkboxes when the library has any.
- **Table Features**:
  - **Show Table Title** and **Show Table Description**.
  - **Enable the visitor to filter or search the table**: the search box.
  - **Enable sorting of the table by the visitor** (Pro).
  - **Hide Header Row**.
  - **Enable Row Details Modal**: opens a row's full details in a popup.
  - **Hide All Borders**.
  - **Hide empty items on responsive breakdown** (Pro) and **Hide Labels on responsive breakdown** (Pro).
- **Stackable Table Configuration**: **Enable Stackable Table** shows rows as cards. When on, choose **Target Devices** (**Mobile**, **Tablet**, **Laptop**, **Large Devices (iMac)**) and **Stacked Appearance** (**Hide column headings**, **Hide internal borders**). See [Stackable Table](/stackable-table).

### Colors tab (Pro)

Without Pro, the tab shows the notice **Color customization is a PRO feature** and a **Get Pro** button.

- **Select Color Scheme**: **Pre Defined Scheme** shows a dropdown of the schemes of the table's styling library. **Custom Scheme** lets you pick each color:
  - **Search Bar Colors**: **Background**, **Icon**, **Border**.
  - **Table Header Colors**: **Background**, **Text**, **Border**.
  - **Table Body Colors**, with **Default** and **Hover** tabs: **Background**, **Text**, **Border**.
  - **Use Alternate Color Schema for Table Rows**: when on, adds **Odd Row Colors** and **Even Row Colors**, each with **Background**, **Text** and **Hover Background**.
  - **Footer Colors**: **Background**, **Active**, **Border**.

### Other tab

- **Pagination Settings**:
  - **Hide Pagination (Show all data at once)**. When on, the rest of this section is hidden.
  - **Pagination Items Per Page** (default 10).
  - **Pagination Position**: **Left**, **Center** or **Right** (default **Right**).
  - **Scroll to table top for pagination change** (Pro).
  - **Show page size changer** (Pro), with **Page Sizes (Comma-separated)**; the default is `10,20,50,100`.
- **Search Settings** (Pro): **Search Bar Position** (**Left**, **Center**, **Right**, **Default**) and **Full-width Search Input**.
- **Sorting Settings**: choose how rows are ordered by default.
  - **Created at**: **Sort Type** is **Newest First** or **Oldest First**. Shown only for tables that can sort by creation time.
  - **By Column**: pick the **Column** and the **Sort Order** (**Ascending** or **Descending**).
  - **Manual Sort**: shown only for tables with manual sorting turned on.
- **Sticky & Row Details**:
  - **Row Details (Responsive Drawer)** (Pro): **Default**, **Expand First** or **Expand All**.
  - **Toggle Button Position**: **First Column** or **Last Column**, for the + icon of the responsive drawer.
  - **Sticky First Column** (Pro) and **Sticky Header** (Pro).
  - With **Sticky Header** on: **Sticky Offset** and **Disable Sticky on Mobile** (Pro).
- **Font & Custom Class**:
  - **Extra CSS Class for Table**.
  - **Font Family**: **theme-font** (default) or a generic family such as serif or monospace.
  - **Font Size** (default 16).

<!-- TODO(screenshot): embed-tables-3
  screen: Page editor › Ninja Tables block › Other tab
  table: Product Price List
  state: Other tab open with Pagination Settings expanded
  highlight: Pagination Items Per Page field
  view: admin
  alt: Other tab of the Ninja Tables block showing the pagination options
-->

## Classic editor

In the classic editor, click the **Add Ninja Tables Shortcode** button in the toolbar. In the **Insert Ninja Tables Shortcode** window, choose a table under **Select a Table to insert** and click **Insert Shortcode**. The shortcode is added at the cursor: `[ninja_tables id="123"]`, or `[ninja_table_builder id="123"]` for a Drag & Drop table. The list includes tables of every status, so check that the table is published.

## Page builders

Ninja Tables has no dedicated Elementor, Divi, Bricks or Beaver Builder widget. Use your builder's **Shortcode** widget (or a text/HTML widget that runs shortcodes) and paste the table's shortcode into it.

## Widgets, templates and other places

The shortcode works anywhere WordPress runs shortcodes: widget areas, theme templates (`<?php echo do_shortcode('[ninja_tables id="123"]'); ?>`) and other plugins that support shortcodes.

## See where a table is used

The **Used on** column in the [Tables list](/tables-list) shows how many pages and posts embed each table. Click it to see the list. It finds tables placed with the shortcode or the block in page and post content; tables placed in widgets or theme templates aren't counted.

## Change one embed only

Shortcode attributes change a table on a single page without touching its settings: for example `per_page`, `columns`, `filter` or `logged_in_only`. See [Advanced Shortcode](/advanced-shortcode) and the [Shortcode Reference](/shortcode-reference).

---
title: "Add a Table to Your Site"
description: "Embed a table on any page or post with its shortcode, the Ninja Tables block, the classic editor button or a page builder."
---

# Add a Table to Your Site

Every table has a **shortcode**, and that shortcode is how a table appears on your site. You can paste it yourself, or insert it with the Ninja Tables block in the block editor or the button in the classic editor. A table can be placed on as many pages as you like.

## Copy the shortcode

- **In the table editor**: the shortcode chip next to the table's title, for example `[ninja_tables id="123"]`. Click it to copy.
- **In the Tables list**: the **Shortcode** column. See [The Tables List](/tables-list).

Drag & Drop tables use a different shortcode, `[ninja_table_builder id="123"]`. Copy it from the chip in the builder, and click **Save** in the builder at least once before embedding it, or the page shows only an "Edit Table" link.

Click **Preview** in the table editor to open the table on its own page before you embed it.

## Block editor (Gutenberg)

1. Edit a page or post and add the **Ninja Tables** block (search for "Ninja Tables" or "table"; it's in the **Widgets** category).
2. Pick the table under **Select Table**.
3. Optionally adjust its settings in the block sidebar.

For regular tables the sidebar has three tabs:

- **Styling**: style library and styles, and table features such as sorting, search, hiding the header row, showing the title and description, borders, the row details popup, and stackable (card) layout with its devices and look.
- **Colors** (Pro): color scheme and individual colors.
- **Other**: pagination, search position, sorting, sticky header and first column, row details, font and an extra CSS class.

Drag & Drop tables don't have these tabs.

::: warning Block settings change the table everywhere
The settings in the block sidebar are saved to the **table itself**, not to this one block. Changing them changes the table on every page that shows it. To show a table differently on one page only, use [shortcode attributes](/advanced-shortcode) instead.
:::

The block saves the table's shortcode into the page, so the page keeps working even if you later switch editors.

## Classic editor

In the classic editor, click the **Add Ninja Tables Shortcode** button in the toolbar, choose a table under **Select a Table to insert**, and the shortcode is added at the cursor.

## Page builders

Ninja Tables has no dedicated Elementor, Divi, Bricks or Beaver Builder widget. Use your builder's **Shortcode** widget (or a text/HTML widget that runs shortcodes) and paste the table's shortcode into it.

## Widgets, templates and other places

The shortcode works anywhere WordPress runs shortcodes: widget areas, theme templates (`<?php echo do_shortcode('[ninja_tables id="123"]'); ?>`) and other plugins that support shortcodes.

## See where a table is used

The **Used on** column in the [Tables list](/tables-list) shows how many pages and posts embed each table. Click it to see the list. It finds tables placed with the shortcode or the block in page and post content; tables placed in widgets or theme templates aren't counted.

## Change one embed only

Shortcode attributes change a table on a single page without touching its settings: for example `per_page`, `columns`, `filter` or `logged_in_only`. See [Advanced Shortcode](/advanced-shortcode) and the [Shortcode Reference](/shortcode-reference).

---
title: "WP Posts Table/Custom Post Type Integration"
description: "Show your WordPress posts, pages and custom post types in a searchable table, filter them with conditions and meta queries, and change the query later from Edit query."
---

# WP Posts Table/Custom Post Type Integration

A **WP Posts table** (Pro) shows your WordPress posts, pages or any custom post type as a searchable, sortable table. It's useful for blogs, resource libraries, member areas and directories. The rows come from a live post query, so new posts appear in the table automatically.

On the Free plugin the **WP Posts/CPTs** drawer shows a Pro notice instead of the form. If Pro is active but out of date, the drawer asks you to update it. See [How connected tables work](/connected-tables-overview).

## Create a WP Posts table

1. Go to **Create Table** and, under **Connect live data**, click **WP Posts/CPTs**.
2. Enter a **Table name**.
3. Under **Post types**, tick at least one post type, for example **Posts**. Nothing is ticked when the drawer opens. See the list below.
4. Under **Columns**, tick at least one column. The list stays empty until you pick a post type.
5. Optionally use **Conditions** (open by default) to filter the posts (see below).
6. Click **Create table**.

![WP Posts/CPTs drawer with the Post types and Columns lists](/images/data-sources/create-wp-posts-table/1.-WP-Posts-CPTs-Drawer.webp)

Ninja Tables opens the new table on the **Table Rows** tab. The rows are read-only, because they come from your posts.

### Post types

The **Post types** list shows a counter, for example 0/28, and these entries:

- **Posts**, **Pages** and **Media**, named as in WordPress.
- Every other type registered on your site, such as a store's `product` or a page builder's template type, under its internal name.
- Types that are not public, such as `wp_block`, `wp_template`, `shop_order` and `product_variation`, with **(private)** after the name. They are listed because they are real post types, but you will rarely want them in a table.

Some system types, for example revisions and menu items, are never listed.

You must tick at least one post type, or Ninja Tables shows an error and doesn't create the table.

### Columns

The **Columns** list stays empty ("Pick a post type first.") until you tick a post type. It offers:

- Title, Author, Date, Excerpt, Content, Status, Comments, Modified date, Post ID, Slug and Menu order.
- One entry per taxonomy of the post types you ticked, such as **Categories · Posts** and **Tags · Posts**. Unticking a post type removes its taxonomy columns.
- Further raw post fields at the end, such as `post_date_gmt`, `guid` and `post_parent`.

Ninja Tables sets each column's type for you: Post ID, Comments, Menu order and the parent post become **Numeric value** columns, the post date columns become **Date** columns formatted as `YYYY-MM-DD`, and everything else is **Single line text**. You can change a column's type later from the column header › **Column settings**. Column headings are generated from the field names, so the date column is headed **Create Date** and the Categories column is headed **Category**. Rename them from the same menu.

::: tip
Post meta, ACF fields and shortcodes aren't in this list. Add those columns after you create the table, from **Table Rows** › **Edit query** › **Add new column**. See [Dynamic columns reference](/dynamic-columns-reference).
:::

### Conditions on the Create screen

**Conditions** is open by default. Use it to narrow down the posts.

- **Only the logged-in user's posts**: each visitor sees only the posts they wrote. Handy for member areas.
- **Rules**: click **Add condition**, then choose a **Field**, an **Operator** and a **Value**. The table only shows posts that match every rule. Click the trash icon (**Remove condition**) at the end of a rule to delete it.

The **Field** list appears once you pick a post type. It offers ID, Author, Comments, Date, Modified date, Status and your taxonomies:

| Field | Operators | Value |
|---|---|---|
| ID | Equal To, Not Equal To, Greater Than, Less Than, Greater Than Or Equal To, Less Than Or Equal To | A number |
| Comments | Equal To, Greater Than, Less Than, Greater Than Or Equal To, Less Than Or Equal To (no Not Equal To) | A number |
| Date, Modified date | The same six as ID | A date and time picker |
| Author, Status and taxonomies | In, Not In | A multi-select list |

To limit the table to published posts, add a rule with **Status**, **In** and **Published**.

### Order and limit

The Create drawer doesn't set the order or a row limit, so a new table shows every matching post. The table starts on FooTable. To use DataTables, change **Table engine** in **Table Configuration**.

To set **Order by column**, **Order by type** and **Query limit for frontend**, open **Edit query** › **Conditions** after you create the table (see below).

## Change the query later: Edit query

On the **Table Rows** tab, the banner reads **Rows come from WordPress posts**. Click **Edit query** to open the drawer. It has two sections: **Query settings** and **Add new column**.

![Edit query drawer with the Selected Types and Selected Properties lists](/images/data-sources/create-wp-posts-table/2.-Edit-Query-Drawer-With-The-Selected.webp)

### Query settings

**Query settings** uses two lists for each choice. Move items from the left list to the right list to select them.

- **All Types / Selected Types**: the post types in the table. This list uses the post types' internal names, such as `post`, `page` and `product`. Private types carry **(private)**.
- **All Properties / Selected Properties**: the columns. This list also uses internal field names. Here is how they match the names on the Create screen:

| Create screen | Edit query |
|---|---|
| Title | `post_title` |
| Author | `post_author` |
| Date | `post_date` |
| Excerpt | `post_excerpt` |
| Content | `post_content` |
| Status | `post_status` |
| Comments | `comment_count` |
| Modified date | `post_modified` |
| Post ID | `ID` |
| Slug | `post_name` |
| Menu order | `menu_order` |
| Categories / Tags | `post.category` / `post.post_tag` |

Click **Update** when you're done. **Update** merges your choices into the table instead of rebuilding it:

- Properties you add become new columns at the end.
- Properties you remove from **Selected Properties** are dropped from the table.
- Columns you added with **Add new column** (Post Meta, ACF, Shortcode and Featured Image columns) are always kept, and so are the settings of columns you left selected.

### Conditions

Open **Conditions** to filter and order the rows:

- **Logged in user posts**: show each visitor only their own posts.
- **Add condition**: add a rule with a field (a post field or a taxonomy), an operator and a value. Operators are Equal To, Not Equal To, Greater Than, Less Than, Greater Than Or Equal To, Less Than Or Equal To, In and Not In. Date fields show a date picker, and author, status and taxonomy fields show a picker. Comments has no Not Equal To.
- **Query limit for frontend**: how many posts to show in total. Leave it blank to show all.
- **Order by column**: the field the rows are sorted by: `ID`, `post_date`, `post_author`, `post_title`, `post_status`, `menu_order` or `comment_count`. A new table starts with no choice here, and WordPress then sorts by post date, newest first.
- **Order by type**: **Ascending** or **Descending**.

For example, a rule on **ID** with **Equal To** and the value `129` shows only the post with ID 129.

![Conditions section of the Edit query drawer with a rule and the order fields](/images/data-sources/create-wp-posts-table/3.-Conditions-Section-Of-The-Edit-Query.webp)

### Meta query

**Meta query** is available only here, not on the Create screen. Open it to filter posts by a custom field value. Click **Add meta query**, then enter:

- **Meta key**: the custom field's key, for example `acf_demo`.
- An operator: Equal To, Not Equal To, In, Not In, greater than or less than (including or equal to). Greater than and less than comparisons are made as numbers.
- **Value**: the value to compare with. For **In** and **Not In**, enter comma-separated values.

For example, the meta key `acf_demo` with the value `ACF Demo Example` shows only the posts whose `acf_demo` field holds that value.

Click **Update** to apply the query.

### Add new column

Use **Add new column** to add columns that aren't plain post fields: Post Meta, Advanced Custom Fields (ACF, only when that plugin is active), Shortcode / Computed Value or HTML, and Featured Image. See [Dynamic columns reference](/dynamic-columns-reference).

## Link titles, authors and terms

Columns built from the query have extra options. Open them from the column header › **Column settings**:

- **Title**: **Link to post permalink** and **Open link to new tab**. Title, Post ID and Author are linked to their pages by default.
- **Author**: **Link to author permalink**, and a **Permalink action** with the checkbox **Make taxonomies as table filter** (the plugin reuses this label for authors). When it is on, clicking an author name filters the table to that author's posts instead of opening the author page. This is on by default.
- **Taxonomy** (Categories, Tags and so on): **Link to taxonomy**, a **Taxonomy separator** for posts with several terms (a comma by default), a **Permalink action** that makes the terms table filters, and **Open link to new tab** (shown only while the filter action is off). Terms are linked and act as filters by default.

## Filter by taxonomy from the shortcode

You can limit a WP Posts table to certain terms on a single page with the `post_tax` shortcode attribute, for example `[ninja_tables id="123" post_tax="category=news,events"]`. See [Shortcode reference](/shortcode-reference).

Developers can change the post query, or the list of post types, with filters. See [Hooks and filters](/hooks-and-filters).

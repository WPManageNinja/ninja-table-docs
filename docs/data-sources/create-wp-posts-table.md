---
title: "WP Posts Table/Custom Post Type Integration"
description: "Show your WordPress posts, pages and custom post types in a searchable table, filter them with conditions and meta queries, and change the query later from Edit query."
---

# WP Posts Table/Custom Post Type Integration

A **WP Posts table** (Pro) shows your WordPress posts, pages or any custom post type as a searchable, sortable table. It's useful for blogs, resource libraries, member areas and directories. The rows are built from a post query, so new posts appear in the table automatically.

## Create a WP Posts table

1. Go to **Create Table** and, under **Connect live data**, click **WP Posts/CPTs**.
2. Enter a **Table name**.
3. Under **Post types**, tick one or more post types (Posts, Pages, Media and any custom post types on your site).
4. Under **Columns**, tick the post fields you want as columns: Title, Author, Date, Excerpt, Content, Status, Comments, Modified date, Post ID, Slug, Menu order, taxonomies such as Categories and Tags, and other post fields.
5. Optionally open **Conditions** to filter the posts (see below).
6. Set **Order By Column** and choose **A → Z** or **Z → A**.
7. Set **Query Limit For Frontend** to cap how many posts the table shows. Leave it empty to show all.
8. Check the engine line (FooTable is the usual choice). See [Choose a table engine](/choose-table-engine).
9. Click **Create table**.

![Create WP Post](/images/data-sources/create-wp-posts-table/1.-WP-Post-Table-1.webp)

![Single Post](/images/data-sources/create-wp-posts-table/2.-WP-Post-Table-2.webp)

Ninja Tables opens the new table on the **Table Rows** tab. The rows are read-only, because they come from your posts. See [How connected tables work](/connected-tables-overview).

::: tip
Post meta, ACF fields, featured images and shortcodes are added after the table is created, from **Table Rows** › **Edit query** › **Add new column**. See [Dynamic columns reference](/dynamic-columns-reference).
:::

### Conditions on the Create screen

Open **Conditions** to narrow down the posts:

- **Status**: pick one or more of Published, Draft, Pending, Private and Scheduled.
- **Only the logged-in user's posts**: each visitor sees only the posts they wrote. Handy for member areas.
- **Rules**: click **Add condition**, then choose a **Field**, an **Operator** and a **Value**. The table only shows posts that match every rule.

## Change the query later: Edit query

On the **Table Rows** tab, the banner reads **Rows come from WordPress posts**. Click **Edit query** to open the drawer. It has two sections: **Query settings** and **Add new column**.

### Query settings

**Query settings** uses two lists for each choice. Move items from the left list to the right list to select them.

- **All Types / Selected Types**: the post types in the table. This list uses the post types' internal names, such as `post`, `page` and `product`.
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

![Settings](/images/data-sources/create-wp-posts-table/3.-WP-Post-Table-3.webp)

Click **Update** when you're done.

### Conditions

Open **Conditions** to filter and order the rows:

- **Logged in user posts**: show each visitor only their own posts.
- **Add condition**: add a rule with a field (a post field or a taxonomy), an operator and a value. Operators are Equal To, Not Equal To, Greater Than, Less Than, Greater Than Or Equal To, Less Than Or Equal To, In and Not In. Date fields show a date picker, and author and taxonomy fields show a picker.
- **Query limit for frontend**: how many posts to show in total. Leave it blank to show all.
- **Order by column**: the column the rows are sorted by (Post Date by default).
- **Order by type**: **Ascending** or **Descending** (the default).

For example, a rule on **ID** with **Equal To** and the value `129` shows only the post with ID 129.

![Conditions](/images/data-sources/create-wp-posts-table/4.-WP-Post-Table-4.webp)

![Result of Conditions](/images/data-sources/create-wp-posts-table/5.-WP-Post-Table-Condition-Preview.webp)

### Meta query

Open **Meta query** to filter posts by a custom field value. Click **Add meta query**, then enter:

- **Meta key**: the custom field's key, for example `acf_demo`.
- An operator from the same list as Conditions. Greater than and less than comparisons are made as numbers.
- **Value**: the value to compare with. For **In** and **Not In**, enter comma-separated values.

For example, the meta key `acf_demo` with the value `ACF Demo Example` shows only the posts whose `acf_demo` field holds that value.

![Meta Query](/images/data-sources/create-wp-posts-table/6.-WP-Post-Table-5.webp)

Click **Update** to apply the query.

### Add new column

Use **Add new column** to add columns that aren't plain post fields: Post Meta, Advanced Custom Fields (ACF), Shortcode / Computed Value or HTML, and Featured Image. See [Dynamic columns reference](/dynamic-columns-reference).

## Link titles, authors and terms

Columns built from the query have extra options. Open them from the column header › **Column settings**:

- **Title**: **Link to post permalink** and **Open link to new tab**.
- **Author**: **Link to author permalink**, and a **Permalink action** that makes the author name a table filter, so clicking it shows only that author's posts.
- **Taxonomy** (Categories, Tags and so on): **Link to taxonomy**, a **Taxonomy separator** for posts with several terms, a **Permalink action** that makes the terms table filters, and **Open link to new tab**.

## Filter by taxonomy from the shortcode

You can limit a WP Posts table to certain terms on a single page with the `post_tax` shortcode attribute, for example `[ninja_tables id="123" post_tax="category=news,events"]`. See [Shortcode reference](/shortcode-reference).

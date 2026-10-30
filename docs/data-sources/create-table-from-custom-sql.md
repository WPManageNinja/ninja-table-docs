---
title: "Create Table from Custom SQL"
description: "Build a table from a read-only SQL SELECT query on your WordPress database or a remote MySQL database, with dynamic placeholders such as the current user or date."
---

# Create Table from Custom SQL

A **Custom SQL query** table (Pro) shows the result of a SQL query you write. The data is read from the database each time the table loads, so changes show up on the front end. For example, a table built on the WordPress users table lists every user, and a new user appears without any extra step.

Only read-only `SELECT` queries are allowed, and only administrators can write them (see [Who can write SQL queries](#who-can-write-sql-queries)).

## Create a Custom SQL table

1. Go to **Create Table** and, under **Connect live data**, click **Custom SQL query**.
2. Enter a **Table name**.
3. Write your query in **Custom SQL Query**, for example `SELECT * FROM wp_buyers_table`. The query is passed to the WordPress `$wpdb->get_results()` function.
4. Leave **SQL Connection Type** on **Default WP SQL Table** to query this site's database. To query another database, choose **Remote/External SQL**. See [Connect a remote database](/custom-sql-remote-database).
5. Check the engine line (FooTable is the usual choice). See [Choose a table engine](/choose-table-engine).
6. Click **Create table**.

<!-- TODO(screenshot): create-table-from-custom-sql-1
  screen: Tables › Create Table › Connect live data › Custom SQL query
  table: -
  state: Table name and a SELECT query filled in, SQL Connection Type on Default WP SQL Table
  highlight: Custom SQL Query editor
  view: admin
  alt: Custom SQL query drawer with a SELECT query
-->

Ninja Tables runs the query and turns the fields of the first result row into text columns, named after the fields. The query must return at least one row, otherwise Ninja Tables can't detect the columns and says "SQL is valid but returned no rows, so columns cannot be detected." If the query has an error, an **SQL error** message shows what went wrong.

<!-- TODO(screenshot): create-table-from-custom-sql-2
  screen: Tables › a Custom SQL table › Table Rows
  table: -
  state: Table Rows tab with the query result as rows
  highlight: -
  view: admin
  alt: Table Rows tab showing the result of a SQL query
-->

The rows are read-only. You can still rename columns, change their types and design the table in the **Appearance** tab.

## Change the query later

On the **Table Rows** tab, the banner reads **Rows come from SQL query**. Click **Source settings**, edit the **Query**, and click **Save and run**. For a remote database, the **Connection details** are in the same drawer.

<!-- TODO(screenshot): create-table-from-custom-sql-3
  screen: Tables › a Custom SQL table › Table Rows › Source settings
  table: -
  state: Source settings drawer open with the Query and the Placeholders row
  highlight: Save and run button
  view: admin
  alt: Source settings drawer of a Custom SQL table with the Query field
-->

## What queries are allowed

- The query must start with `SELECT`. Comments before it are ignored, and it can start with an opening bracket.
- A query that does not start with `SELECT` is rejected with "Only SELECT queries are allowed."
- A query that contains any of these words is rejected with "The SQL contains disallowed keywords. Only SELECT queries are permitted.": `delete`, `update`, `insert`, `drop`, `truncate`, `alter`, `create`, `grant`, `revoke`, `rename`, `call`, `handler`, `lock`, `unlock`, `set`, `replace into`, `load_file`, `into outfile`, `into dumpfile` and `load data`.
- The check looks at whole words, and ignores text inside quotes. Column names such as `last_update` or `created_at` are fine, and so is the `REPLACE()` string function.

## Conditional queries

Use a standard `WHERE` clause to fetch only some rows.

### Single condition

```sql
SELECT * FROM `wp_buyers_table` WHERE products = 'book'
```

### Several conditions

```sql
SELECT * FROM `wp_buyers_table` WHERE products = 'book' OR products = 'computer'
```

## More examples

These examples use the `wp_buyers_table` table below. Adapt them to your own tables.

The first five rows:

```sql
SELECT * FROM `wp_buyers_table` WHERE id <= 5
```

Everything except the first five rows:

```sql
SELECT * FROM `wp_buyers_table` WHERE id > 5
```

Book buyers among the first five rows:

```sql
SELECT * FROM `wp_buyers_table` WHERE id <= 5 AND products = 'book'
```

The first five rows, except book buyers:

```sql
SELECT * FROM `wp_buyers_table` WHERE id <= 5 AND products != 'book'
```

Pen and computer buyers among the first five rows:

```sql
SELECT * FROM `wp_buyers_table` WHERE id <= 5 AND (products = 'pen' OR products = 'computer')
```

## Dynamic placeholders

Placeholders are replaced with live values when the table loads:

| Placeholder | Replaced with |
|---|---|
| `{prefix}` | The database table prefix, for example `wp_` |
| `{current_user_id}` | The ID of the logged-in visitor (0 for logged-out visitors) |
| `{current_date}` | Today's date, as `YYYY-MM-DD` |
| `{current_date_time}` | The current date and time, as `YYYY-MM-DD HH:MM:SS` |
| `{current_post_id}` | The ID of the page or post the table is on |
| `{current_post_title}` | The title of the page or post the table is on |
| `{user:FIELD}` | A field of the logged-in user, for example `{user:user_email}` |
| `{usermeta:KEY}` | A user meta value of the logged-in user, for example `{usermeta:billing_city}` |
| `{current_user_role}` | The logged-in user's roles, separated by commas, for example `administrator` |
| `{date:FORMAT}` | Today's date in the format you choose, for example `{date:YYYY-MM-DD}` |
| `{date+N:FORMAT}` and `{date-N:FORMAT}` | The date N days from now or N days ago, for example `{date-7:YYYY-MM-DD}` |
| `{gt}` and `{lt}` | The signs `>` and `<` |

Values are escaped for safety, but not quoted. Put text and date placeholders inside quotes, as in the examples below.

The `FORMAT` uses tokens such as `YYYY`, `MM` and `DD`. Use date-only formats, because the colon in a time would be read as the end of the format.

::: warning Logged-out visitors
`{current_user_role}`, `{user:FIELD}` and `{usermeta:KEY}` have no value for visitors who are not logged in. For `{user:FIELD}` and `{usermeta:KEY}` the placeholder becomes empty. For `{current_user_role}`, the **whole query** is emptied, so a logged-out visitor sees an empty table. Plan the query for both cases when the table is public.
:::

### Examples with placeholders

Posts written by the logged-in visitor, using the site's own prefix:

```sql
SELECT * FROM {prefix}posts WHERE post_author = {current_user_id}
```

Posts published before today:

```sql
SELECT * FROM `wp_posts` WHERE post_date < '{current_date}'
```

The post whose title matches the page the table is on:

```sql
SELECT * FROM `wp_posts` WHERE post_title = '{current_post_title}'
```

Orders for the logged-in visitor's email address:

```sql
SELECT * FROM `wp_buyers_table` WHERE email = '{user:user_email}'
```

Posts from the last 7 days:

```sql
SELECT * FROM `wp_posts` WHERE post_date >= '{date-7:YYYY-MM-DD}'
```

Developers can add their own placeholders or change the final query. See [Hooks and filters](/hooks-and-filters).

## Big results and speed

Ninja Tables runs your query on every load of the table, loads the whole result and then cuts it into pages. There is no paging inside the database. A query that returns hundreds of thousands of rows will be slow, so add a `WHERE` or a `LIMIT` to return only what the table needs. If the database can't be reached, the table shows no rows.

## Who can write SQL queries

SQL tables can read any data in your database, so Custom SQL is limited to **Administrators** by default. Other users see: "For security reason, Custom SQL module is enabled only for Administrator user role." They can view the data and change other settings, but can't change the query.

To let other roles write queries, go to the gear icon › **Settings** › **Permissions**. Tick the roles under **Who can manage tables**, then turn on **Let these roles write SQL queries** under **Custom SQL module**. Only do this for roles you fully trust. See [Define permission for table users](/define-permission-for-table-users).

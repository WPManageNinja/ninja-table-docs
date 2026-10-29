---
title: "Create Table from Custom SQL"
description: "Build a table from a read-only SQL SELECT query on your WordPress database or a remote MySQL database, with dynamic placeholders such as the current user or date."
---

# Create Table from Custom SQL

A **Custom SQL query** table (Pro) shows the result of a SQL query you write. The data is read each time the table loads, so changes in the database show up on the front end. For example, a table built on the WordPress users table lists every user, and a new user appears without any extra step.

Only read-only `SELECT` queries are allowed, and only administrators can write them (see [Who can write SQL queries](#who-can-write-sql-queries)).

## Create a Custom SQL table

1. Go to **Create Table** and, under **Connect live data**, click **Custom SQL query**.
2. Enter a **Table name**.
3. Write your query in **Custom SQL Query**, for example `SELECT * FROM wp_buyers_table`. The query is passed to the WordPress `$wpdb->get_results()` function.
4. Leave **SQL Connection Type** on **Default WP SQL Table** to query this site's database. To query another database, choose **Remote/External SQL**. See [Connect a remote database](/custom-sql-remote-database).
5. Check the engine line (FooTable is the usual choice). See [Choose a table engine](/choose-table-engine).
6. Click **Create table**.

![Create Table from Custom SQL](/images/data-sources/create-table-custom-sql/1.-create-table-from-custom-sql-1.webp)

![Custom Sql Table](/images/data-sources/create-table-custom-sql/2.-Custom-SQL-Table.webp)

Each column in the query result becomes a table column. If the query has an error, an **SQL error** message shows what went wrong.

![Created Table](/images/data-sources/create-table-custom-sql/3.-Ninja-Tables-Pro-Demosite-WordPress-1-1.webp)

The rows are read-only. You can still rename columns, change their types and design the table in the **Appearance** tab.

## Change the query later

On the **Table Rows** tab, the banner reads **Rows come from SQL query**. Click **Source settings**, edit the **Query**, and click **Save and run**. For a remote database, the **Connection details** are in the same drawer.

## What queries are allowed

- The query must start with `SELECT`.
- Queries that contain statements such as `DELETE`, `UPDATE`, `INSERT`, `DROP`, `TRUNCATE`, `ALTER`, `CREATE`, `GRANT` or `SET` are rejected with "Only SELECT queries are allowed." or "The SQL contains disallowed keywords."
- Column names such as `last_update` or `created_at` are fine, as is the `REPLACE()` string function.

## Conditional queries

Use a standard `WHERE` clause to fetch only some rows.

### Single condition

```sql
SELECT * FROM `wp_buyers_table` WHERE products = 'book'
```

![Single Conditional Queries](/images/data-sources/create-table-custom-sql/4.-create-table-from-custom-sql-4-edited.webp)

### Several conditions

```sql
SELECT * FROM `wp_buyers_table` WHERE products = 'book' OR products = 'computer'
```

![Multiple Conditional Queries](/images/data-sources/create-table-custom-sql/5.-create-table-from-custom-sql-5-edited.webp)

## More examples

These examples use the `wp_buyers_table` table below. Adapt them to your own tables.

![wp_buyers_table (database table)](/images/data-sources/create-table-custom-sql/6.-create-table-from-custom-sql-6.webp)

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

Values are escaped for safety, but not quoted. Put text and date placeholders inside quotes, as in the examples below.

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

## Who can write SQL queries

SQL tables can read any data in your database, so Custom SQL is limited to **Administrators** by default. Other users see: "For security reason, Custom SQL module is enabled only for Administrator user role." They can view the data and change other settings, but can't change the query.

To let other roles write queries, go to the gear icon › **Settings** › **Permissions**. Tick the roles under **Who can manage tables**, then turn on **Let these roles write SQL queries** under **Custom SQL module**. Only do this for roles you fully trust. See [Define permission for table users](/define-permission-for-table-users).

---
title: "Custom SQL: Connect a Remote Database"
description: "Build a Ninja Tables table from a SELECT query on a MySQL database on another server, and set up the host, user and remote access it needs."
---

# Custom SQL: Connect a Remote Database

A [Custom SQL query](/create-table-from-custom-sql) table (Pro) can read from a MySQL or MariaDB database on another server, not just from your WordPress database. Use it to show data from another application, an older site or a reporting database, without copying the data into WordPress.

## Before you start

You need these details from the remote database's host:

- **DB host**: the server where the database lives. It is **not** `localhost` (that means your own site). Use an IP address or a host name, such as `203.0.113.10` or `db.example.com`. On cPanel hosts, use the Shared or Dedicated IP shown on the cPanel home page.
- **DB host port**: usually `3306`.
- **DB name**: the database name.
- **DB username** and **DB user password**.

Two settings on the remote side are important:

- **Allow your site to connect.** On the remote host, open **Remote MySQL** or **Remote Database Access** and add your site's IP address. If the connection fails with "Access denied for user 'x'@'1.2.3.4'", then `1.2.3.4` is the IP to add.
- **Use a read-only user.** Create a database user with **SELECT-only** privileges for Ninja Tables. Ninja Tables only runs `SELECT` queries, but a read-only user adds a second layer of safety.

## Create a table from a remote database

1. Go to **Create Table** and, under **Connect live data**, click **Custom SQL query**.
2. Enter a **Table name**.
3. Set **SQL Connection Type** to **Remote/External SQL**.
4. Fill in **DB host**, **DB host port**, **DB name**, **DB username** and **DB user password**.
5. Write your query in **Custom SQL Query**, for example `SELECT id, name, city FROM customers`.
6. Click **Create table**.

Ninja Tables connects to the remote database, runs the query and builds the columns from the result. If the connection or the query fails, an **SQL error** message explains why.

## Change the connection or the query

On the **Table Rows** tab, click **Source settings** on the **Rows come from SQL query** banner. The drawer shows the **Query** and, below it, the **Connection details**. Leave **DB user password** as is to keep the current password, or type a new one. Click **Save and run**.

## The {prefix} placeholder on a remote database

All [placeholders](/create-table-from-custom-sql#dynamic-placeholders) work on remote databases. `{prefix}` is the table prefix of the remote connection, and it is `wp_` by default. If the remote database uses another prefix, write the full table name in your query instead.

## Troubleshooting

| Problem | What to check |
|---|---|
| Access denied for user … @ … | Add the IP shown in the message to the remote host's Remote MySQL allow list, and check the username and password. |
| Can't connect to the server | Check **DB host** and **DB host port**. Don't use `localhost`. Make sure the remote server accepts outside connections on that port. |
| Only SELECT queries are allowed | Remove any statement that changes data. See [What queries are allowed](/create-table-from-custom-sql#what-queries-are-allowed). |
| The table is empty | Run the same query in the remote database's tool (such as phpMyAdmin) to check that it returns rows. |

Like every SQL table, remote SQL tables can only be created and edited by administrators, or by roles allowed under the gear icon › **Settings** › **Permissions** › **Let these roles write SQL queries**.

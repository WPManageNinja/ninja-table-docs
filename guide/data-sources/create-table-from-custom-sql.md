---
title: "Create Table from Custom SQL"
description: "Create Table from Custom SQL"
---

# Create Table from Custom SQL

One of the most versatile features of **Ninja Tables Pro **is the **Custom SQL Query**.

You can create a table from your SQL database with the help of your custom SQL query. Here the table data is dynamically fetched. Each manual change in the database or in a plugin will be displayed on the table’s front end.

For example, when you create a table from the WP user table, it will display all user data on the table. Once you have a new user, it synchronizes with your site's database table. After that, the table can be edited and redesigned like a default table.

## Table with Custom SQL Queries

Here is a simple table created in Ninja Tables using Custom SQL Query -

- Below you can notice a database table on the WordPress database called **wp_buyers_table**. You can easily create a table from this database table by writing a single-line query in Ninja Tables.

![Create Table from Custom SQL](/images/data-sources/create-table-custom-sql/1.-create-table-from-custom-sql-1.webp)

- First, go to the **Add Table** button and Custom SQL and name your table. Then write a custom SQL query: *SELECT * FROM “your-database-table-name”
- For our wp_buyers_table it will be like this:  `**SELECT * FROM `wp_buyers_table`**`
- And then click on the **Add** button.

![](/images/data-sources/create-table-custom-sql/2.-Custom-SQL-Table.webp)

- **Congratulations!** Your Table is now successfully created. You can alter the design of your table like you can with other tables.

![Created Table](/images/data-sources/create-table-custom-sql/3.-Ninja-Tables-Pro-Demosite-WordPress-1-1.webp)

## **Some Conditional Query**

The data can be accessed conditionally from your database table. Here you can use the standard SQL coding method. You can set the condition of the data to fetch after the keyword WHERE.

### **Single Conditional Queries**

So if a table is made from the wp_buyers_table table to display only book buyers then this structure should be followed.
SELECT * FROM `Your Database Table Name` WHERE columnName = 'yourFilterValue'*

For our wp_buyers_table it will be like this: `**SELECT * FROM `wp_buyers_table`WHERE products = 'book'**`

![Single Conditional Queries](/images/data-sources/create-table-custom-sql/4.-create-table-from-custom-sql-4-edited.webp)

### **Multiple Conditional Queries**

If a table is created to display book and computer buyers from the wp buyers table then this structure can be followed.

*SELECT * FROM `wp_buyers_table` WHERE coloumnName = 'filterData1' OR columnName= 'filterData2'*
For our wp_buyers_table it will be like this: **`SELECT * FROM `wp_buyers_table`WHERE products = 'book'OR products = 'Computer’`**

![Multiple Conditional Queries](/images/data-sources/create-table-custom-sql/5.-create-table-from-custom-sql-5-edited.webp)

## **Few Basic Examples**

With respect to this `wp_buyers_table` all sample queries are written, you can write your own based on your table data.

![wp_buyers_table (database table)](/images/data-sources/create-table-custom-sql/6.-create-table-from-custom-sql-6.webp)

To grab the first five data:

```sql
SELECT * FROM `wp_buyers_table` WHERE id <= 5
```

To fetch data except the first five:

```sql
SELECT * FROM `wp_buyers_table` WHERE id > 5
```

To get data on the first five that contain only book buyers:

```sql
SELECT * FROM `wp_buyers_table` WHERE id <=5 AND products = 'book'
```

To fetch the data of the first five except book buyers:

```sql
SELECT * FROM `wp_buyers_table` WHERE id <=5 AND products != 'book'
```

To get the data of the first five pen and computer buyers:

```sql
SELECT * FROM `wp_buyers_table` WHERE id <=5 AND (products = 'pen' OR products = 'computer')
```

## **Advanced Custom Queries**

To write queries, some Dynamic Placeholders are available. Use this shortcode below on your queries to dynamically use the current user id, current date, current date-time, current post id, current post title, and prefix value.

- **Current user id:** `{current_user_id}`
- **Current Date:** `{current_date}`
- **Current Date Time:** `{current_date_time}`
- **Current Post Id:** `{current_post_id}`
- **Current Post Title:** `{current_post_title}`
- **And Prefix:** `{prefix}`

## **Examples of Advanced Queries**

To create a table from our database table's wp-posts where the current user creates the data, it will be:

```sql
SELECT * FROM wp_posts WHERE post_author = {current_user_id}
```

When the data is created before the current date:

```sql
SELECT * FROM `wp_posts` WHERE post_date < {current_date}
```

When the current user creates the data:

```sql
SELECT * FROM `wp_posts` WHERE user_id = {current_user_id}
```

When the data needs to match with the post title, we can write:

```sql
SELECT * FROM `wp_posts` WHERE post_title = {current_post_title}
```

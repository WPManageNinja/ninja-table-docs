---
title: "Construct Table from CSV"
description: "Construct Table from CSV"
---

# Construct Table from CSV

Other than Google Sheets, if you wish to show data from another source, and if that source shares its data on the web as a .CSV (Comma Separated Value) file, you can use an external data source link to create a table.

Let's dive into this simple article to learn how to construct a table from CSV.

> [!Note]
> Construct Table From External CSV is a Pro Feature.

- Go to the **Ninja Tables dashboard** located in the sidebar, and click the **Create New Table** button from the top right corner of the **Table List** page.

![Create New Table](/images/data-sources/construct-table-csv/1.-Create-New-Table.webp)

- A pop-up box titled **How would you like to create your table?** will appear. Choose **Connect External CSV** from the sidebar, then give your table a **Table Title**.
- Under **Rendering Engine**, pick how the table should render on the frontend. **FooTable** is the default engine, lightweight and responsive. **DataTables** is the advanced option, built for better performance on large datasets. Paste your external CSV file link into the **Data Source URL** field.

![Connect External CSV with FooTable selected](/images/data-sources/construct-table-csv/2.-Connect-External-CSV-FooTable.webp)

- If you switch to **DataTables**, the URL field is labeled **CSV File URL** instead of **Data Source URL**, and an extra **Sync Interval** option appears so you can control how often Ninja Tables checks the file for changes. It's set to **Every 1 hour** by default.
- Once you're done, proceed to the **Next** button.

![Connect External CSV with DataTables selected](/images/data-sources/construct-table-csv/3.-Connect-External-CSV-DataTables.webp)

- On **Step 2**, you'll land on **Select Entry Fields**. Uncheck any column you don't want imported, or use **Select all** to bring in every column, then hit **Save**.

![Select Entry Fields](/images/data-sources/construct-table-csv/4.-Select-Entry-Fields.webp)

- Once saved, Ninja Tables imports your data and takes you to the **Table Rows** tab, where your CSV data is already sitting in a table, ready to publish with its shortcode.

![CSV data imported into a Ninja Table](/images/data-sources/construct-table-csv/5.-CSV-Table-Result.webp)

All other settings are exactly the same as Google Sheets. Please check the **[documentation](/guide/data-sources/google-sheets-integration)** for further details.

Creating data tables from CSV as an external source is fast and easy in Ninja Tables. If you already have tables on another website, simply fetch the table using CSV.

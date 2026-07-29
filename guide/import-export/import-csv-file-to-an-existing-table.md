---
title: "Import CSV File to an Existing Table"
description: "Import CSV File to an Existing Table"
---

# Import CSV File to an Existing Table

You can easily import a CSV file (Comma Separated Values) to an existing table by following a few steps.

- First, go to the **Ninja Tables dashboard →** and open an **existing** **table** where you want to import a CSV file.
- Now go to the **Import-Export** tab of that table.
- Here, you will find a **Choose file** option, and you can upload only **CSV**(Comma Separated Value) files.
- Replace Existing Data. When you **Enable Replace Existing Data**, the same row of the CSV file will be replaced with the existing Table.

![Import-Export tab](/images/import-export/import-csv-file-existing/1.-01.webp)

- One thing to remember is that the Header Structure of the CSV file you intend to import must match the **Column** **Key** of the existing table.

Let's have a look at an example for a better understanding-

- Now, choose the third column, whose heading is **last_Name**, and click the **Edit** icon next to the column name. (Same as with other columns).

![Column Name](/images/import-export/import-csv-file-existing/2.-import-CSV-file-to-an-Existing-table-3.webp)

- A pop-up window will appear displaying the **Column Key** of that particular **Column Name**.
- Column Key for the third column is **lastname** in this case. It must be identical to the third column of the CSV file that you intend to import. Otherwise, importing both files will not work together.

![Column Key](/images/import-export/import-csv-file-existing/3.-02-1.webp)

- And now, take a look at the CSV file you're about to import.
- As you can see, the names of all columns are the same as the Existing table Column Key.

![column name same as column key in table](/images/import-export/import-csv-file-existing/4.-import-CSV-file-to-an-Existing-table-5.webp)

- You can now go to the existing table's **Import-Export** tab and upload a file by clicking on the **Choose File** button.
- When you're finished uploading the file, click the **Import from CSV** button.

![Import from CSV button](/images/import-export/import-csv-file-existing/5.-03-1.webp)

- Go back to the Existing table and check to confirm if the Imported CSV file is working properly.
- To import data from a CSV file into an existing table, the header structure of the CSV file has to be identical to the current table header information.

You can simply download the sample CSV file by clicking on the **Download Sample CSV** button to find out about your CSV file header structure.

These are a few simple steps to easily import CSV files to an Existing Table!

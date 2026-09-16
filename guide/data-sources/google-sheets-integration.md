---
title: "Google Sheets Integration"
description: "Google Sheets Integration"
---

# Google Sheets Integration

Google Sheets integration with Ninja Tables is certainly the plugin's one of many useful features. This combination is actually an **auto-sync** where data from Google Sheets are automatically fetched and displayed in a customized table.

Moreover, the data in Ninja Tables will automatically update if there are any changes in the Google Sheets. Google takes a minimum of 5 minutes to update the data on the web.

## Data from Google Sheets to WordPress Table

How to display Google Sheets data entries in a WordPress table?
We'll explain the process here, using the following dummy Google Sheet.

![employee data in google sheets](/images/data-sources/google-sheets-integration/1.-employee-data-in-google-sheets.webp)

- We will import this data table to Ninja Tables. To do this, go to the **Ninja Tables dashboard** located in the sidebar, and click the **Create New Table** button from the top right corner of the **Table List** page.

![Create New Table](/images/data-sources/google-sheets-integration/2.-Create-New-Table.webp)

- After that, a pop-up box titled **How would you like to create your table?** will appear. Choose **Connect Google Sheets** from the sidebar, then give your table a **Table Title**. It could be your Google Sheets name or any other name you want.
- Under **Rendering Engine**, pick how the table should render on the frontend. **FooTable** is the default engine, lightweight and responsive. **DataTables** is the advanced option, built for better performance on large datasets.

![Connect Google Sheets with FooTable selected](/images/data-sources/google-sheets-integration/3.-Connect-Google-Sheets-FooTable.webp)

- If you switch to **DataTables**, the URL field is labeled **Google Sheet CSV URL** instead of **Data Source URL**, and an extra **Sync Interval** option appears so you can control how often Ninja Tables checks Google Sheets for changes. It's set to **Every 1 hour** by default.

![Connect Google Sheets with DataTables selected](/images/data-sources/google-sheets-integration/4.-Connect-Google-Sheets-DataTables.webp)

- Now, in your Google Sheet, find the **File** option and then click **Publish to the Web** in order to get the **Data URL**.

![publish google sheet to the web](/images/data-sources/google-sheets-integration/5.-Publish-Google-Sheet-To-The-Web.webp)

- Choose your predefined sheet in the **Link** tab. In this example, we are using **Sheet1**. Also, select "**Comma-separated values (CSV)**" from the next dropdown, as Google shares its data to the web as CSV.
- Make sure that in the **Published content and settings** option, **automatically republish when changes are made** is **checked**. After that, **Copy** the link.

![Copy Link](/images/data-sources/google-sheets-integration/copy-link-6.webp)

- Now, go back to your Ninja Tables dashboard, and paste it into the **Data Source URL** (or **Google Sheet CSV URL**) field. Once you're done, proceed to the **Next** button.
- On **Step 2**, you'll land on **Select Entry Fields**. Uncheck any column you don't want imported, or use **Select all** to bring in every column, then hit **Save**.

![Select Entry Fields, with one column unchecked](/images/data-sources/google-sheets-integration/6.-Select-Entry-Fields.webp)

- Once saved, Ninja Tables imports your data and takes you to the **Table Rows** tab, where your Google Sheets entries are already sitting in a table, ready to publish with its shortcode.

![Google Sheets data imported into a Ninja Table](/images/data-sources/google-sheets-integration/8.-Google-Sheets-Table-Result.webp)

- Now, go to your Google Sheet again, add some other data, and check if the modified data is automatically applied to your Ninja Tables.
- However, in this case, after you're finished adding the details, you have to wait 5 minutes. This is because Google updates the table data cache every 5 minutes. Let's push forward through the waiting period.
- Go back to your Ninja Tables after 5 minutes, and reload the page. Then at the bottom of the table are the data rows you added 5 minutes ago.
- This is it, the data will also be included in Ninja Tables if someone changes or adds some data to Google Sheets.

## Tutorial Video

Here's a tutorial video so you can try it yourself.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/-eO4-F5sowo" title="Google Sheets Integration Video" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Import Hyperlinks/Images Automatically

If your spreadsheet has hyperlinks or images, you can import them directly into Ninja Table so that the link will transform into a clickable link, and the actual image will appear.

**Hyperlink**: If you have any URL, by default Google will turn them into clickable links until you make them plain text by removing the link inside.

If you want Ninja Table to behave similarly, just change that column's data type to **[HTML](/guide/field-types/html-field)**. It will transform all your hyperlinks into clickable links.

**Image**: Just import your images into a cell using the **Image in Cell** option.

> [!Note]
> The data is shared to the web as CSV, which only contains text, any formatting in the sheet will not reflect in the table. But you can do those formatting from Ninja Tables itself.

Moreover, if the spreadsheet contains a column with links in plain text and Image links, use the **[Transform Value](/guide/column-settings/transform-value)** feature to turn them into clickable links and viewable Images.

Embed Google Sheet data table in your WordPress post/page effortlessly using Ninja Tables.

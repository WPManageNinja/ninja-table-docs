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

- We will import this data table to Ninja Tables. To do this, go to the **Ninja Tables dashboard** located in the sidebar. Then, go to the **Add Table** button from the top right corner of the dashboard.
- After that, a pop-up box will be visible. Choose **Connect Google Sheets** from the sidebar.

![](/images/data-sources/google-sheets-integration/2.-Google-Sheet-Integration-1.webp)


- Then add a name to the table. It could be your Google Sheets name or any other name you want.
- In your Google Sheet, find the **File** option and then click **Publish to the Web** in order to get the **Data URL**.

![publish google sheet to the web](/images/data-sources/google-sheets-integration/3.-publish-google-sheet-to-the-web.webp)


- Choose your predefined sheet in the Section **Link**. In this example, we are using **Sheet 1**. Also, select "**Comma-Separated Values(CSV)**" from the Embed Section, as Google shares its data to the web as CSV.
- Make sure that in the **Published content and settings** option, the **automatically republish when changes are made** is **checked**.
- Then copy the link, go back to the dashboard of your Ninja Tables, and paste it into the **Data Source URL**. Once you’re done, proceed to the **Next** button.
- Choose and save the entry fields you wish to add to. This is how all your data will be imported here automatically.

![Select Entry Fields](/images/data-sources/google-sheets-integration/4.-Google-Sheet-Integration-2.webp)

- Now, go to your Google Sheet again, add some other data here, and check if the modified data is automatically applied to your Ninja Tables.
- However, in this case, after you're finished adding the details, you have to wait 5 minutes. This is because Google updates the table data cache every 5 minutes. Let's push forward through the waiting period.
- Go back to your Ninja Tables after 5 minutes, and reload the page. Then at the bottom of the table are the data rows you added 5 minutes ago.
- This is it, the data will also be included in Ninja Tables if someone changes or adds some data to Google Sheets.

## Tutorial Video

Here's a tutorial video so you can try it yourself.

<div style="position: relative; padding-top: 56.25%;">
  <iframe src="https://www.youtube.com/embed/-eO4-F5sowo?si=DM_kH9DyHe08fXYc" title="Google Sheets Integration Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>

## Import Hyperlinks/Images Automatically

If your spreadsheet has hyperlinks or images, you can import them directly into Ninja Table so that the link will transform into a clickable link, and the actual image will appear.

**Hyperlink**: If you have any URL, by default Google will turn them into clickable links until you make them plain text by removing the link inside. 

If you want Ninja Table to behave similarly, just change that column's data type to **[HTML](https://ninjatables.com/docs/html-field/)**. It will transform all your hyperlinks into clickable links.

**Image**: Just import your images into a cell using the **Image in Cell** option.

> [!Note]
> The data is shared to the web as CSV, which only contains text, any formatting in the sheet will not reflect in the table. But you can do those formatting from Ninja Tables itself.

Moreover, if the spreadsheet contains a column with links in plain text and Image links, use the "Transform Value" feature to turn them into clickable links and viewable Images. See the documentation to learn more about Column Transform Value.

Embed Google Sheet data table in your WordPress post/page effortlessly using Ninja Tables.

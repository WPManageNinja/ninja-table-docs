---
title: "Hyperlinks from Google Sheets"
description: "Hyperlinks from Google Sheets"
---

# Hyperlinks from Google Sheets

Consider a user who has a data table in Google Sheets and wishes to import the table from **Google Sheets** to Ninja Tables. If the table contains hyperlinks, he would want the links to work in Ninja Tables as well.

But if the hyperlink is erased after the table is imported, the table does not serve its purpose. This is because the hyperlinked data cannot be saved after the table is converted to CSV.

**But Ninja Tables will bring the links back just by changing the data type!**

## HTML Data Type for Hyperlink from Google Sheets

This short guide will demonstrate to you how to include hyperlinked data in your table when it's imported from Google Sheets.

- For instance, we've imported a Google Sheet with three columns named **Title**, **Link Text**, and **Actual link**. This is a dummy table containing information about different mobile phone models.

![Change Column Data Type for Hyperlinks](/images/table-formatting/hyperlinks-google-sheets/1.-image-3.webp)

When you create a "Google Sheets data table" with this sheet, the column with links will initially remove the links and keep the texts.

![Removed links from Google Sheets](/images/table-formatting/hyperlinks-google-sheets/2.-Links-in-Google-Sheets.webp)

- The next step is to add the* *link to the link text column. Simply go to table column configuration and set the data type to "**HTML Field**."

![Change data type](/images/table-formatting/hyperlinks-google-sheets/3.-HTML-Field.webp)

- Update the column settings and check the table preview.

![Clickable links from Google Sheets](/images/table-formatting/hyperlinks-google-sheets/4.-clickable-links-from-Google-Sheets.webp)

Now the links from Google Sheets are clickable hyperlinks.

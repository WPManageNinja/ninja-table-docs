---
title: "Export & Print Buttons"
description: "Add CSV, Excel and Print buttons to a table so visitors can download the rows they see or print the table, set from the Features tab in Appearance (Pro)."
---

# Export & Print Buttons

**Export & Print** (Pro) adds buttons to a table on your site, so visitors can download it as a **CSV** or **Excel** file, or **Print** it. You choose which buttons show, what they say, how they look, and where they sit.

This page is about buttons for your visitors. To export a table yourself from the admin, see [Export a Table](/export-ninja-tables-csv-json).

## Add the buttons

1. Go to **Ninja Tables** › **Tables** and open a table.
2. Click the **Appearance** tab, then the **Features** tab in the settings panel.
3. Open **Export & Print**. On the free version it shows a lock box: "Export and print buttons are a Pro feature."
4. Turn on the switch of each button you want. All are off by default.

![Export & Print section with the CSV and Excel buttons turned on](/images/table-settings/csv-print-button/1.-Export-Print-Section-With-A-Switch.webp)

Click **Save** at the top of the editor. The button settings are saved together with the rest of the Appearance settings, so one **Save** keeps both.

## Buttons

Each button has a switch, a one-line description and, once it is on, its own options.

| Button | What it does |
| --- | --- |
| **CSV** | Download the rows as a .csv file |
| **Excel** | Download the rows as an .xlsx file |
| **Print** | Open a print-ready view of the table |

Every button you turn on shows these two options:

- **Button Text**: the label on the button. The defaults are `CSV`, `Excel` and `Print`.
- **Background** and **Text**: the button's colors. The defaults are a black background with white text, `rgb(0,0,0)` and `rgb(255,255,255)`.

![The CSV and Excel button cards with their text, colors and options](/images/table-settings/csv-print-button/2.-Export-Print-Buttons-And-Placement.webp)

### CSV

The visitor gets a `.csv` file named after the table title, for example `Quarterly Sales by Store 2026.csv`. The file opens correctly in Excel with accents and non-Latin characters.

- **Export As Plain Text (strips HTML and links)**: off by default. Turn it on to remove HTML and links from the cells and keep only the text. Leave it off to keep cell markup such as links and images as it is stored.

### Excel

The visitor gets an `.xlsx` file named after the table title. It is plain text. Numbers stay numbers, and codes with leading zeros stay as text.

The **Excel** card only appears when your Ninja Tables Pro version supports the Excel button. If you don't see it, update the Pro plugin.

### Print

The **Print** button opens a print-ready copy of the table in a new window and starts the browser's print dialog. The copy keeps the table's look and any row colors.

![Print button options with the header and footer editor, and the Placement options](/images/table-settings/csv-print-button/3.-Print-Button-Options.webp)

Add a header and footer to the printed pages. Switch between **Print Screen Header** and **Print Screen Footer** to edit each one:

- **Header In Each Page** / **Footer In Each Page**: **Yes** repeats it on every printed page. **No** (default) prints it once, at the top or bottom of the print.
- **Description For Header** / **Description For Footer**: the text, written in a visual editor, so you can add a logo, a title or a date.

## What the visitor gets

- **Rows.** Only the rows currently matching the visitor's search or filters are exported. If a visitor searches for "Dhaka" and clicks **CSV**, the file holds the matching rows only. This includes rows on other pages, not just the page on screen.
- **Columns.** The columns the visitor can see. Columns that are hidden on all devices are left out.
- **Header row.** The file starts with the column titles.
- **Formatting.** Values are exported as they show in the table, after column formatting such as dates and numbers.

## Placement

At the bottom of the section, **Placement** decides where the buttons sit around the table.

- **Position**: where the button bar goes.
  - **After Search Box** (default)
  - **Top Of The Table**
  - **Bottom Of The Table**
- **Alignment**: **Left**, **Center** or **Right**. The editor opens on **Right** for a new table.

When the table has no search box, **After Search Box** puts the buttons above the table.

![A table on the site with export and print buttons](/images/table-settings/csv-print-button/1.-Table-On-The-Site-With-Export.webp)

## Common questions

::: faq
== The buttons don't show on my site.
Check that at least one switch is on, that you clicked **Save**, and that Ninja Tables Pro is active. If you use page caching, clear the cache.
== I don't see an Excel button.
The Excel card appears only when your Pro plugin supports it. Update Ninja Tables Pro.
== Does the download include rows from other pages?
Yes. It includes all rows that match the visitor's search or filters, not only the current page.
== Can visitors export hidden columns?
No. Only the columns visible in the table are exported.
== The CSV has HTML in it.
Turn on **Export As Plain Text (strips HTML and links)** in the CSV options.
:::

## Related

- Export a table yourself from the admin: [Export a Table](/export-ninja-tables-csv-json).
- Let visitors search the table first: [Search Box](/add-or-remove-search-or-filter-functionality).
- Color the table: [Table Colors](/table-color-settings).

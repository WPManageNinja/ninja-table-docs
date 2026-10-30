---
title: "Export & Print Buttons"
description: "Add CSV, Excel and Print buttons to a table so visitors can download the rows they see or print the table (Pro)."
---

# Export & Print Buttons

**Export & Print** (Pro) adds buttons to a table on your site, so visitors can download it as a **CSV** or **Excel** file, or **Print** it. The download contains the rows the visitor is currently viewing, so any search or filter they applied is respected.

This page is about buttons for your visitors. To export a table yourself from the admin, see [Export a Table](/export-ninja-tables-csv-json).

## Add the buttons

1. Go to **Ninja Tables** › **Tables** and open a table.
2. Click the **Appearance** tab, then the **Features** tab in the settings panel.
3. Open **Export & Print**. On the free version it shows a lock box: "Export and print buttons are a Pro feature."
4. Turn on the switch of each button you want: **CSV**, **Excel** and **Print**. All three are off by default.

<!-- TODO(screenshot): csv-and-print-button-1
  screen: Tables › Employee Directory › Appearance › Features › Export & Print
  table: Employee Directory
  state: Export & Print open with the CSV and Print switches on
  highlight: CSV switch
  view: admin
  alt: Export & Print section with a switch for each button and the Position and Alignment options
-->

Each button you turn on opens its own options:

- **Button Text**: the label on the button. The defaults are `CSV`, `Excel` and `Print`.
- **Background** and **Text**: the button's colors. The defaults are a black background with white text.

## Button options

### CSV

- **Export As Plain Text (strips HTML and links)**: removes HTML and links from the downloaded file, leaving only the text.

### Excel

Downloads the rows the visitor is viewing as an `.xlsx` file, as plain text. Numbers stay numbers, and codes with leading zeros stay as text. The **Excel** card only appears when your Ninja Tables Pro version supports the Excel button; if you don't see it, update the Pro plugin.

### Print

Add a header and footer to the printed pages. Switch between **Print Screen Header** and **Print Screen Footer** to edit each one:

- **Header In Each Page** / **Footer In Each Page**: **Yes** repeats it on every printed page; **No** (default) prints it once.
- **Description For Header** / **Description For Footer**: the text, written in a visual editor, so you can add a logo, a title or a date.

<!-- TODO(screenshot): csv-and-print-button-2
  screen: Tables › Employee Directory › Appearance › Features › Export & Print › Print
  table: Employee Directory
  state: Print card open on Print Screen Header with text in the editor
  highlight: Print Screen Header
  view: admin
  alt: Print button options with the header and footer editor
-->

## Where the buttons appear

- **Position**: **After Search Box** (default), **Top Of The Table** or **Bottom Of The Table**.
- **Alignment**: **Left**, **Center** or **Right** (default).

Click **Save** to keep your changes. The buttons are saved with the rest of the Appearance settings.

<!-- TODO(screenshot): csv-and-print-button-3
  screen: Tables › Employee Directory › Preview
  table: Employee Directory
  state: Front-end table with CSV, Excel and Print buttons above the table
  highlight: -
  view: frontend
  alt: A table on the site with export and print buttons
-->

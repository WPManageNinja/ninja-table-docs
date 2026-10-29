---
title: "Button/Link"
description: "Use the Button/Link column type (Pro) to show a styled button in each cell that opens a link or downloads a file."
---

# Button/Link

The **Button/Link** column type (Pro) turns each cell into a button. You set the button text and style once for the whole column, and each row holds its own link. Use it for *Buy now*, *Download* or *Read more* buttons.

## Set a column to Button/Link

1. Go to **Tables** › your table › **Table Rows**.
2. To add a new column, click **Add column**. To change an existing one, click the gear icon on its header and choose **Column settings**.
3. In the **Basic** tab, set **Type** to **Button/Link**. The button settings appear below it.
4. Click **Add column** or **Save column**.

![Button/Link column settings](/images/field-types/actionable-button-link/1.-Actionable-button-in-Ninja-Tables.webp)

Without Pro, a new Button/Link column is saved as a Single line text field.

## Button settings

### Button text

The label on every button in this column, for example *Buy now*. HTML is supported, so you can add an icon.

### Button options

- **Open link in a new tab:** the link opens in a new browser tab.
- **Rounded corners:** gives the button rounded corners.
- **Force download:** clicking the button downloads the file instead of opening it.

### Colors

Set the **Background**, **Text** and **Border** colors of the button.

### Link rel attribute

Tick any of these to add them to the link's `rel` attribute:

- **sponsored:** marks the link as paid or sponsored.
- **nofollow:** asks search engines not to follow the link or pass ranking to it.
- **noreferrer:** stops the browser from sending your page address to the target site.
- **noopener:** stops the opened page from getting access to your page.

## Add the links

Each cell holds the link that its button opens. Open the row drawer (**Add data**, or the pencil icon on a row) and type the URL in the button column's field. The button text comes from the column settings, so you only enter the link.

::: tip
Use a full URL, such as `https://example.com/pricing`. A relative path or a post slug also works, but it is used as-is in the link, so it is read relative to the page the table is on.
:::

Click **Preview** in the table header to see your buttons.

![Buttons in a table](/images/field-types/actionable-button-link/2.-buttons-in-columns.webp)

---
title: "Button/Link"
description: "Use the Button/Link column type (Pro) to show a styled button in each cell that opens a link or downloads a file."
---

# Button/Link

The **Button/Link** column type (Pro) turns each cell into a button. You set the button text and style once for the whole column, and each row holds its own link. Use it for *Buy now*, *Download* or *Read more* buttons.

On the free version you can still choose this type, but a note says **Buttons on tables are a Pro feature** and the options are disabled. A new Button/Link column added without Pro is saved as a Single line text field, and the row drawer shows the Pro badge with a plain text box.

## Set a column to Button/Link

1. Go to **Tables** › your table › **Table Rows**.
2. To add a new column, click **Add column**. To change an existing one, click the gear icon on its header and choose **Column settings**.
3. In the **Basic** tab, set **Type** to **Button/Link**. The button settings appear below it.
4. Click **Add column** or **Save column**.

![Column dialog with Type set to Button/Link](/images/field-types/actionable-button-link/1.-Column-Dialog-With-Type-Set.webp)

## Button text

The label on every button in this column, for example *Buy now*. HTML is supported, so you can add an icon.

## Button options

- **Open link in a new tab**: the link opens in a new browser tab.
- **Rounded corners**: gives the button rounded corners.
- **Force download**: clicking the button downloads the file instead of opening it.

## Colors

Set the **Background**, **Text** and **Border** colors of the button. They are blank by default.

## Link rel attribute

Tick any of these to add them to the link's `rel` attribute:

- **sponsored**: marks the link as paid or sponsored.
- **nofollow**: asks search engines not to follow the link or pass ranking to it.
- **noreferrer**: stops the browser from sending your page address to the target site.
- **noopener**: stops the opened page from getting access to your page.

![Button/Link options with colors and rel attributes](/images/field-types/actionable-button-link/2.-Button-Link-Options-With-Colors.webp)

## Add the links

Each cell holds the link its button opens. Open the row drawer (**Add data**, or the pencil icon on a row) and type the URL in the button column's field, which has the placeholder `https://`. The button text comes from the column settings, so you only enter the link. Button cells are not edited inside the grid.

::: tip
Use a full URL, such as `https://example.com/pricing`. A relative path or a post slug also works, but it is used as-is in the link, so it is read relative to the page the table is on.
:::

![Row drawer showing the link field for a Button/Link column](/images/field-types/actionable-button-link/3.-Row-Drawer-Showing-The-Link-Field.webp)

## How it looks on your site

Each cell shows a link styled as a button with your text and colors. It carries the new-tab, rounded, download and `rel` options you set. Click **Preview** in the table header to check it.

![Table with styled buttons in a Button/Link column](/images/field-types/actionable-button-link/4.-Table-With-Styled-Buttons.webp)

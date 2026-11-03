---
title: "Table Fonts"
description: "Change the font family and font size of a table from the Typography section of the Styling tab."
---

# Table Fonts

The **Typography** section changes the **font family** and the **font size** of the text in a table, so it matches your site or stands out from it. Both settings are free, and they apply to the whole table.

1. Go to **Ninja Tables** › **Tables** and open a table.
2. Click the **Table Design** tab.
3. In the settings panel, click the **Styling** tab, then open **Typography**.

![Typography section with the Font Family list and the Font Size slider](/images/styling-design/table-font-settings/1.-Typography-Section.webp)

Every change shows in the live preview straight away. Click **Save** at the top of the editor to keep it.

## Font Family

**Font Family** is a dropdown. Click it and pick a font from the list.

![Font Family list open, showing Inherit From Theme and the generic font families](/images/styling-design/table-font-settings/2.-Font-Family-List.webp)

The default is **Inherit From Theme**. The table then uses the same font as the rest of your site, so it blends in with no extra work. Keep it unless you want the table to look different from the page.

The other choices are generic font families. Each one tells the visitor's browser or device to use its own font of that kind, so nothing is downloaded:

- **Sans-Serif**: a clean font without small strokes on the letters.
- **Serif**: a font with small strokes on the letters, like a printed book.
- **Monospace**: every letter has the same width. Good for codes and numbers.
- **System UI**: the main font of the visitor's operating system.
- **UI Sans-Serif**, **UI Serif**, **UI Monospace** and **UI Rounded**: the system's own sans-serif, serif, monospace and rounded fonts.
- **Cursive**: a handwriting style font.
- **Fantasy**: a decorative font.

Because these use the visitor's device, the exact look differs a little between Windows, macOS, Android and iOS. The list has no Google fonts or custom font uploads, and no choice is Pro: it is the same on the free and Pro versions. To use a specific font, load it on your site and set it in your own CSS (see [Custom CSS & JS](/table-styling-css-selector)).

## Font Size

**Font Size** is a slider. Drag it, and the size in pixels shows to the right of it, for example **14px**.

- **Range**: 1 px to 50 px, in steps of 1 px.
- **Default**: 14 px.

The size applies to the table text. Between 12 px and 18 px is comfortable for most tables. Very small sizes are hard to read on a phone, so check the **Mobile** preview before you save.

::: tip
To set the font for every new table, use the gear icon › **Settings** › **Global appearance**. See [Default Design for New Tables](/use-design-as-default).
:::

## Common questions

::: faq
== Can I use a Google font or my own font?
Not from this list. **Font Family** offers **Inherit From Theme** and generic families only. Load your font on your site and apply it with CSS, as described in [Custom CSS & JS](/table-styling-css-selector).
== The font on my site didn't change.
Check that you clicked **Save**. If **Font Family** is **Inherit From Theme**, the table copies your theme, so changing the theme's font changes the table too.
== Why does the font look different on another device?
The generic families use the font the visitor's device provides for that kind, so the look can vary between devices. **Inherit From Theme** follows your theme's font instead.
== Does the font size change the header and the pagination too?
The size is set for the table as a whole. To style a single part, such as the header, use the options in [Table Colors](/table-color-settings) or your own CSS.
:::

## Related

- Change the colors of the table text, header and rows: [Table Colors](/table-color-settings).
- Row stripes, borders and cell spacing: [Rows & Borders](/table-rows-borders).
- Style the table with your own CSS: [Custom CSS & JS](/table-styling-css-selector).

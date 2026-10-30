---
title: "Select Field"
description: "Use the Select field column type (Pro) to pick each cell's value from a dropdown list, with optional multi-selection."
---

# Select Field

The **Select field** column type (Pro) gives a column a dropdown of suggested choices. Instead of typing, editors pick a value, so values stay consistent. For example, *Yes* / *No*, or *In stock* / *Out of stock*. The same list can feed [Custom filters](/custom-filters).

On the free version you can still choose this type, but the column works as plain text and a note says **Select fields are a Pro feature**. The item and placeholder boxes are disabled.

## Set a column to Select field

1. Go to **Tables** › your table › **Table Rows**.
2. To add a new column, click **Add column**. To change an existing one, click the gear icon on its header and choose **Column settings**.
3. In the **Basic** tab, set **Type** to **Select field**. The select settings appear below it.
4. Click **Add column** or **Save column**.

![Column dialog with Type set to Select field](/images/field-types/select-field/1.-Column-Dialog-With-Type-Set.webp)

## Select items

Enter the choices, one per line. For example:

```
Yes
No
```

## Placeholder

Text shown in the dropdown before a choice is made, for example *Choose a plan*.

## Enable multi-selection

Tick **Enable multi-selection** to allow more than one choice in a cell, for example both *Yes* and *No*. On your site the choices show in one cell separated by a comma and a space.

## Pick values

Click a cell in the grid, or open the row drawer, and pick a value from the dropdown. You can also type to search the list.

::: tip Editors can add their own values
The dropdown accepts a typed value that is not in **Select items**, and saves it as typed. Use the list as a guide, not as a lock. Only people who can edit the table can do this.
:::

![Select dropdown open in the row drawer](/images/field-types/select-field/2.-Select-Dropdown-Open-In-The-Row.webp)

## How it looks on your site

Visitors see the chosen text in the cell. With Pro active, the table also keeps the list so [Custom filters](/custom-filters) can offer the same choices.

![Table with a Select field column on the front end](/images/field-types/select-field/3.-Table-With-A-Select-Field-Column.webp)

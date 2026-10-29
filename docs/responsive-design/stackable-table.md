---
title: "Mobile View: Cards, + Drawer & Row Details"
description: "Choose how a table looks on small screens: stack each row as a card or fold columns into a + drawer, and open row details in a popup."
---

# Mobile View: Cards, + Drawer & Row Details

Wide tables don't fit on a phone. The **Mobile & row details** settings decide what happens on small screens: each row can become a **card**, or extra columns can fold into a **+ drawer**. You can also let visitors open a row's details in a popup.

1. Go to **Ninja Tables** › **Tables** and open a table.
2. Click the **Appearance** tab, then the **Features** tab in the settings panel.
3. Open **Mobile & row details**.

![Mobile & row details](/images/responsive-design/stackable-table/1.-Stackable-Table-1-1.webp)

Use **Preview width** › **Mobile** above the preview to check the result.

## On small screens

Pick one of two layouts:

### Stack rows as cards

Each row is shown as a card, with every column on its own line and the column name next to the value.

- **Stack on**: the devices that get cards: **Mobile device**, **Tablet device**, **Laptop** and **Large devices (iMac)**. Other devices show the normal table.
- **Card look**:
  - **Hide column headings**: hide the table's header row while stacked.
  - **Hide internal borders**: remove the borders between the lines of a card.

![Choose the devices to stack on](/images/responsive-design/stackable-table/2.-Stackable-Table-2.webp)

![A stacked product table](/images/responsive-design/stackable-table/3.-stackable-table-4.webp)

### Fold columns into a + drawer

Columns you hide on small screens move into a drawer that opens with a **+** button. Choose which columns hide on which devices in each column's **Responsive visibility**, see [Show or Hide Columns on Mobile](/column-responsive-breakpoints).

- **Open the + drawer**: **Closed**, **First row** (Pro) or **All rows** (Pro).
- **+ button in**: **First column** or **Last column**.

## Row details popup

Turn on **Row details popup** and a visitor can click a row on the site to see all of its details in a popup. This helps when many columns are hidden on small screens.

## Hide empty values and labels (Pro)

- **Hide empty values**: leave empty cells out of the drawer, the cards and the popup.
- **Hide labels**: show the values without their column names.

![Hide empty values and labels](/images/responsive-design/stackable-table/4.-Stackable-Table-3.webp)

Click **Save** to keep your changes.

::: tip
You can turn on cards for one embed with the `stackable` and `stack_devices` shortcode attributes (Pro). See [Advanced Shortcode](/advanced-shortcode).
:::

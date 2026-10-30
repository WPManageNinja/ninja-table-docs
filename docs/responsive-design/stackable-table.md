---
title: "Responsive & Stackable Table"
description: "Choose how a table looks on small screens: fold columns into a + drawer, stack each row as a card, and open row details in a popup."
---

# Responsive & Stackable Table

Wide tables don't fit on a phone. The **Responsive Breakpoint**, **Stackable Table** and **Others** sections of the Appearance tab decide what happens on small screens: extra columns can fold into a **+ drawer**, each row can become a **card**, and visitors can open a row's details in a popup. The three are independent, so you can set up one, two or all of them.

1. Go to **Ninja Tables** › **Tables** and open a table.
2. Click the **Appearance** tab, then the **Features** tab in the settings panel.
3. Open **Responsive Breakpoint**, **Stackable Table** or **Others**.

![Responsive Breakpoint section with the drawer, toggle position and hide options](/images/responsive-design/stackable-table/1.-Responsive-Breakpoint-Section-With-The-Drawer.webp)

Use **Preview Width** › **Mobile** above the preview to check the result.

## Responsive Breakpoint

Columns you hide on small screens move into a drawer that opens with a **+** button. Choose which columns hide on which devices in each column's **Responsive visibility**, see [Show or Hide Columns on Mobile](/column-responsive-breakpoints). These settings only matter for a table that has at least one column with a breakpoint.

- **Responsive drawer**: whether the drawer starts open. **Closed** (default) keeps every drawer shut. **First Row** (Pro) opens the drawer of the first row only. **All Rows** (Pro) opens every drawer.
- **Toggle Position**: put the **+** button in the **First Column** (default) or the **Last Column**.
- **Hide Empty Values** (Pro): leave empty cells out of the drawer, the cards and the popup.
- **Hide Labels** (Pro): show the values without their column names.

## Stackable Table

**Stackable Table** shows each row as a card, with every column on its own line and the column name next to the value. The switch in the heading is off by default.

![Stackable Table section with the Stack On devices and Card Look options](/images/responsive-design/stackable-table/2.-Stackable-Table-Section-With-The-Stack.webp)

- **Stack On**: tick the devices that get cards: **Mobile Device**, **Tablet Device**, **Laptop** and **Large Devices (iMac)**. With no device ticked, the table is not stacked anywhere.
- **Card Look**:
  - **Hide Column Headings**: hide the table's header row while stacked.
  - **Hide Internal Borders**: remove the borders between the lines of a card.

<!-- TODO(screenshot): stackable-table-3
  screen: Tables › Product Price List › Preview
  table: Product Price List
  state: Mobile view of the table stacked as cards
  highlight: -
  view: frontend
  alt: A stacked product table with each row shown as a card
  blocked: needs Stackable Table saved on a demo table (unsaved change not visible on the front end)
-->

## Others: Row Details Popup

Turn on **Row Details Popup** and a visitor can click a row on the site to see all of its details in a popup. It is off by default and free. This helps when many columns are hidden on small screens.

Click **Save** to keep your changes.

::: tip
You can turn on cards for one embed with the `stackable` and `stack_devices` shortcode attributes (Pro). See [Advanced Shortcode](/advanced-shortcode).
:::

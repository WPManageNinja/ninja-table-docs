---
title: "Responsive & Stackable Table"
description: "Choose how a table looks on small screens: fold columns into a + drawer, stack each row as a card on the devices you pick, and open row details in a popup."
---

# Responsive & Stackable Table

Wide tables don't fit on a phone. The **Mobile** section of the Features tab decides what happens on small screens. It has two groups of settings, and they work independently:

- **Responsive Breakpoint**: columns you hide on small screens fold into a **+ drawer** that visitors open to read the rest of the row.
- **Stackable Table**: each row becomes a **card**, with every column on its own line.

1. Go to **Ninja Tables** › **Tables** and open a table.
2. Click the **Appearance** tab.
3. In the settings panel, click the **Features** tab, then open **Mobile**.

![Mobile section with the Responsive Breakpoint settings](/images/responsive-design/stackable-table/1.-Responsive-Breakpoint-Section-With-The-Drawer.webp)

Use **Preview Width** › **Mobile** above the preview to check the result. Click **Save** at the top of the editor to keep your changes.

## Responsive Breakpoint

Columns you hide on small screens move into a drawer that opens with a **+** button. Choose which columns hide on which devices in each column's **Responsive visibility**. See [Show or Hide Columns on Mobile](/column-responsive-breakpoints). These settings only matter for a table that has at least one column folded into the drawer.

- **Responsive drawer**: whether the drawers start open.
  - **Closed** (default): every drawer starts shut. Visitors tap **+** to open one.
  - **First Row** (Pro): the drawer of the first row starts open.
  - **All Rows** (Pro): every drawer starts open.
- **Toggle Position**: put the **+** button in the **First Column** (default) or the **Last Column**.
- **Hide Empty Values** (Pro): leave empty cells out of the drawer, so a row does not show a label with nothing next to it.
- **Hide Labels** (Pro): show the values in the drawer without their column names.

On the free version, **First Row**, **All Rows** and the two switches open the upgrade popup and change nothing.

## Stackable Table

With **Stack Rows As Cards** on, each row is shown as a card: every column on its own line, with the column name next to the value. Cards are easier to read than a wide table on a phone. The switch is off by default and it is free.

![Stackable Table settings with Stack Rows As Cards on, the Stack On devices and Card Look](/images/responsive-design/stackable-table/2.-Stackable-Table-Section-With-The-Stack.webp)

When the switch is on, two groups appear.

### Stack On

Tick the devices that get cards. On any other screen the table keeps its normal layout.

| Option | Cards show on screens up to about |
| --- | --- |
| **Mobile Device** | 480 px wide |
| **Tablet Device** | 768 px wide |
| **Laptop** | 992 px wide |
| **Large Devices (iMac)** | any width, so wider screens too |

With no device ticked, the table is not stacked anywhere.

How a tick behaves depends on the table engine you use. See [Table Rendering Settings](/table-rendering-settings).

- **DataTables**: a tick means that width and everything narrower. Tick **Laptop** and phones and tablets get cards too.
- **FooTable**: a tick means that screen size only. Tick **Laptop** alone and only laptop-sized screens get cards, so tick **Mobile Device** as well to cover phones.

Not sure which engine your table uses? Tick every device you want cards on, then check each size with **Preview Width**.

### Card Look

Two optional tweaks for how the cards look:

- **Hide Column Headings**: hide the column names inside the cards, so each line shows only the value. The names stay available to screen readers.
- **Hide Internal Borders**: remove the lines between the rows of a card.

![A stacked product table with each row shown as a card](/images/responsive-design/stackable-table/1.-Stacked-Product-Table-With-Each-Row.webp)

## Row Details Popup

A separate switch lets visitors open a row's details in a popup. It is not in the **Mobile** section. Find **Row Details Popup** in the **Row Details** section of the Features tab. Turn it on and a visitor can click a row on the site to see all of its details. It is off by default and free. This helps when many columns are folded away on small screens.

::: tip
You can turn on cards for one embed with the `stackable` and `stack_devices` shortcode attributes (Pro). See [Advanced Shortcode](/advanced-shortcode).
:::

## Common questions

::: faq
== I turned on Stack Rows As Cards but my table is not stacked.
Tick at least one device under **Stack On**. With none ticked the table is not stacked anywhere. Also click **Save**, and check the table at the right width with **Preview Width**.
== Cards and the + drawer are both set up. Which one shows?
On a screen where the table is stacked, rows show as cards. On other screens, the **+** drawer still applies to the columns you hid.
== I can't pick First Row or All Rows.
They are Pro options. On the free version they open the upgrade popup, and the drawers stay **Closed**.
== The cards show no column names.
Check **Hide Column Headings** under **Card Look**. It hides the names inside the cards. **Hide Labels** (Pro) does the same for the **+** drawer.
== Where do I choose which columns fold into the drawer?
In each column's **Responsive visibility** setting. See [Show or Hide Columns on Mobile](/column-responsive-breakpoints).
:::

## Related

- Choose which columns hide on which devices: [Show or Hide Columns on Mobile](/column-responsive-breakpoints).
- Switch the table engine: [Table Rendering Settings](/table-rendering-settings).
- Set the attributes for one embed: [Advanced Shortcode](/advanced-shortcode).
- Keep the header or first column in view while scrolling: [Sticky Header & First Column](/other-design-settings).

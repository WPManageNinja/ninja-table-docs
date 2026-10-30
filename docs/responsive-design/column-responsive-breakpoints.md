---
title: "Show or Hide Columns on Mobile"
description: "Use a column's Responsive visibility setting to decide on which devices it shows and when it folds into the + drawer."
---

# Show or Hide Columns on Mobile

**Responsive visibility** decides on which devices a column is shown. A hidden column folds into a **+** drawer that visitors can open, so wide tables stay readable on phones.

## Set a column's visibility

1. Go to **Ninja Tables** › **Tables** and open a table.
2. In **Table Rows**, click the gear icon on the column heading and choose **Column settings**.
3. On the **Basic** tab, pick an option under **Responsive visibility**.
4. Click **Save column**.

![Responsive visibility options in the Basic tab](/images/responsive-design/column-responsive/1.-Responsive-Visibility-Options-In-The-Basic.webp)

## The options

- **Always show in all devices** (default): the column always shows.
- **Hidden on desktop**: the column is folded into the **+** drawer. The result depends on the table engine: on a **FooTable** table the column is hidden at every screen width, so visitors only see it in the **+** drawer. On a **DataTables** table the column shows on phones and tablets and is hidden on wide desktop screens (wider than about 1,200 px).
- **Initial hidden mobile**: hidden on phones, shown on wider screens; visitors open it with the **+** button.
- **Initial hidden mobile and tab**: hidden on phones and tablets, shown on desktop; opened with **+**.
- **Initial Hidden Mobile, Tab and Regular Computers**: folded into the **+** drawer at every screen width, so it never shows as a table column. Despite the name, it is not shown on large screens, on either engine.
- **Totally hidden on all devices**: never shown, not even in the **+** drawer. Useful for a column you only use for filters, sorting or calculations. DataTables tables leave it out completely.

Exact break points differ a little between the two engines. Test the table on a phone-sized window with **Preview**.

<!-- TODO(screenshot): column-responsive-breakpoints-2
  screen: Preview of Employee Directory at phone width
  table: Employee Directory
  state: A column set to Initial hidden mobile folded behind the + button, drawer open on one row
  highlight: + button
  view: frontend
  alt: Column hidden behind the plus button on a phone
  blocked: needs a column saved with a responsive breakpoint (unsaved change); Employee Directory on the front end currently has no hidden column
-->

## The + drawer

How the **+** drawer behaves is set for the whole table in **Appearance** › **Features** › **Mobile & row details**, with **On small screens** set to **Fold columns into a + drawer**:

- **Open the + drawer**: **Closed** (default), **First row** (Pro) or **All rows** (Pro).
- **+ button in**: put the button in the **First column** or **Last column**.
- **Hide empty values** (Pro): leave empty cells out of the drawer.
- **Hide labels** (Pro): show values without their column names.

Prefer each row as a card instead? See [Mobile View: Cards, + Drawer & Row Details](/stackable-table).

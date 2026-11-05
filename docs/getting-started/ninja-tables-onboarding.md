---
title: "Onboarding: Your First Run in Ninja Tables"
description: "What you see the first time you open Ninja Tables: the two-step guided setup, the empty state and the welcome banner, and how to use or skip each one."
---

# Onboarding: Your First Run in Ninja Tables

The first time you open **Ninja Tables**, the plugin helps you get to a published table quickly. This page explains each onboarding screen, what it does and how to skip it. Nothing here is required: you can always create tables yourself from **Create Table**.

| Screen | When it shows | Skip it |
|---|---|---|
| [Guided setup](#use-the-guided-setup) | The site has no tables at all | **Skip setup** |
| [Empty state](#skip-the-setup) | You skipped the setup and still have no tables | Create or import a table |
| [Welcome banner](#see-the-welcome-banner) | Tables list, until you dismiss it | The x button |

After onboarding, build and publish a table by hand with the [Quick start](/guide/getting-started/onboarding-setup-guide).

## Use the guided setup

The setup shows on **Ninja Tables** › **Tables** while the site has no tables at all, including none in the trash.

### Step 1: Choose how to start

The card's header counts the steps ("Step 1 of 2"). The first step is **Welcome to Ninja Tables**. Under **How do you want to start?**, pick one of four cards, then click **Continue**. **Continue** stays off until you pick one.

- **Start blank**: "Type or paste rows from a spreadsheet."
- **Upload a file**: "CSV, Excel (.xlsx) or JSON."
- **Connect a data source**: "Fluent Forms, WordPress posts, WooCommerce, Google Sheets…"
- **Drag & Drop table**: "A free layout or a ready-made pricing, comparison or schedule template."

![Guided setup step 1 showing four start cards](/images/getting-started/ninja-tables-onboarding/1.-Guided-Setup-Step-1-Start-Cards.webp)

### Step 2: Finish the table

Step 2 is the last step, and it depends on the card you picked. Everything happens inside the setup card, so you don't leave the screen until the table exists.

**Start blank** shows **Set up your table**:

- **Table name**: for example "Pricing table". If you leave it empty, the table is named **My first table**.
- **Description**: optional. You can change it later in the table's details; see [Table title, caption and description](/guide/table-management/table-title-description-settings).

Click **Create your table**. Ninja Tables creates an empty table with the **FooTable** engine and opens it on the **Table Rows** tab. Add your columns next; the steps are in the [Quick start](/guide/getting-started/onboarding-setup-guide).

![Guided setup step 2 with the Table name and Description fields](/images/getting-started/ninja-tables-onboarding/2.-Guided-Setup-Step-2-Table-Name.webp)

The other cards show the same panel you get on the **Create Table** screen:

- **Upload a file** shows the file panel. See [Import a CSV, Excel or JSON file](/guide/import-export/import-table-data-from-a-csv).
- **Connect a data source** first lists the sources: **WP Posts/CPTs**, **WooCommerce products**, **WooCommerce reviews**, **Fluent Forms entries**, **FluentCart products**, **Google Sheets**, **Remote CSV / JSON** and **Custom SQL query**. Click one to open its panel, and use the back arrow next to the title to pick another source. **Fluent Forms entries** and **FluentCart products** stay in the list when their plugin isn't active, marked **Plugin unavailable**. The WooCommerce cards only appear when WooCommerce is active. Pro sources carry a **Pro** badge on the free version. See [All table types at a glance](/guide/creating-tables/table-types-overview).
- **Drag & Drop table** shows **Create From Scratch** and **Import From CSV/JSON**, with the ready-made templates below. Click a template to select it, click **Next**, name the table, then click **Create Table**. See [Create your first Drag & Drop table](/guide/drag-drop-tables/how-to-create-your-first-drag-and-drop-table-with-ninja-tables).

![Guided setup listing the data sources to connect](/images/getting-started/ninja-tables-onboarding/3.-Guided-Setup-Connect-A-Data-Source.webp)

::: tip
The **Start blank** card has no engine choice and always makes a FooTable, while the **Create Table** screen defaults to DataTables. If you want DataTables, click **Skip setup** and use **Create Table** instead. See [Create a FooTable](/guide/creating-tables/create-a-footable-table) and [Choose an Engine](/guide/creating-tables/choose-table-engine).
:::

Click **Back** to return to step 1. The note under the card says the setup is optional and everything in it can be changed later.

## Skip the setup

Click **Skip setup** at the bottom left of the card at any time. The setup is replaced by a plain screen, **You don't have any tables yet**, with two buttons:

- **Create a table** opens the **Create Table** screen.
- **Import** opens the Import screen.

To bring the guided setup back, click **Use the guided setup instead** on that screen.

The setup and the screens after it remember your choices in your browser, not on the site. See [Find your way around](/guide/getting-started/admin-navigation).

![Empty state reading You do not have any tables yet](/images/getting-started/ninja-tables-onboarding/4.-Empty-State-No-Tables-Yet.webp)

## See the welcome banner

A **Welcome to the new Ninja Tables** banner sits at the top of the **Tables** list until you dismiss it. It tells you that your tables, shortcodes and front end are unchanged, and only the admin screens were reorganized. **What moved?** opens a list of where each old screen lives now (close it with **Got it**), and the x hides the banner for everyone on the site. The full map is in [Find your way around](/guide/getting-started/admin-navigation).

![Welcome banner above the Tables list with the What moved button](/images/getting-started/ninja-tables-onboarding/5.-Welcome-Banner-Above-The-Tables-List.webp)

## Common questions

::: faq
== How do I see the onboarding again on a site that already has tables?
Add `onboarding` to the Ninja Tables admin address, for example `admin.php?page=ninja_tables&onboarding=1` (it can also go after the `#`). The guided setup and the welcome banner show for that visit, whatever the site has, and your skips and hides are not saved. Click **Skip setup**, or create a table, and the parameter is removed.
== The guided setup doesn't show for me.
It only shows while the site has no tables, including none in the trash. If you clicked **Skip setup** before, choose **Use the guided setup instead** on the empty screen.
== Will the setup show again on another computer?
Yes. Onboarding choices are saved in your browser, not on the site, so another browser or a cleared browser shows them again.
== Why is my first table a FooTable?
The guided setup has no engine choice and always creates a FooTable. The **Create Table** screen defaults to DataTables. See [Create a FooTable](/guide/creating-tables/create-a-footable-table) and [FooTable or DataTables](/guide/creating-tables/choose-table-engine).
:::

## Where to go next

- Build and publish a table by hand: [Quick start](/guide/getting-started/onboarding-setup-guide)
- See every table type: [All table types at a glance](/guide/creating-tables/table-types-overview)
- Learn the admin screens: [Find your way around](/guide/getting-started/admin-navigation)

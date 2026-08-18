---
title: "FluentCart Integration"
description: "Connect Ninja Tables with FluentCart to build responsive, sortable product tables with add-to-cart, variations, and bulk buying."
---

# FluentCart Integration

**FluentCart Integration** connects Ninja Tables directly with FluentCart so you can build responsive, sortable product tables. Customers can add items to their cart, select variations, and buy in bulk without leaving the table.

If both Ninja Tables and FluentCart are installed and activated on your site, the integration is ready to use — there is nothing extra to set up.

## Create a FluentCart Table

### Step 1: Create a New FluentCart Table

- From your WordPress dashboard, go to **Ninja Tables → Tables**.
- Click **Create Your First Table** (or **Create New Table** if you already have tables).
- In the table creation menu, select **FluentCart Table**.

![FluentCart in the table creation menu](/images/data-sources/fluentcart-integration/1.-FluentCart-in-table-creation-menu.webp)

### Step 2: Configure Your Product Query

The configuration panel is where you decide which products appear in the table.

- **Table Title:** Give the table a clear name, such as "Men's Shoes".
- **Select Products By Category:** Show products from the categories you pick. Leave it empty to include every category.
- **Select Products By Product Brands:** Limit the table to specific brands.
- **Hide out of stock items:** Check this to leave out products that are currently out of stock.
- **Initial Order By:** Set the default sort — **Product Title**, **Price**, **Date**, and so on — in **Ascending** or **Descending** order.

![FluentCart table creation settings](/images/data-sources/fluentcart-integration/2.-FluentCart-table-creation.webp)

Click **Create Products Table** when you are done. Ninja Tables builds the table with product images, prices, **Add To Cart** buttons, and more.

### Step 3: Customize Your Table Settings

In the table editor, a banner at the top reads **You may update the FluentCart query settings here**. Clicking it opens three tabs: **Appearance**, **Query Settings**, and **Add New Column**.

![FluentCart table settings in the editor](/images/data-sources/fluentcart-integration/3.-FluentCart-table-backend.webp)

#### Appearance

This tab controls the cart features and buttons shown with your table.

- **Show Cart Details:** Display a mini-cart summary **Before** or **After** the table.
- **Show Go to Cart Button:** Adds a **Go to Cart** button at the top-right of the table.
- **Show Checkout Button:** Adds a **Buy Now** or **Checkout** button, also at the top-right.
- **Show Bulk Actions:** Adds a dropdown so customers can select several products and add them all to the cart at once.
- **Cart Text / Checkout Text:** Change the wording on the **Go to Cart** and **Checkout** buttons.

#### Query Settings

This tab reopens the settings you chose in Step 2. You can change the categories, brands, or sort order at any time.

![FluentCart query settings](/images/data-sources/fluentcart-integration/4.-FluentCart-query-settings.webp)

#### Add New Column

This tab adds more information to the table, just like any other Ninja Table. To add a product short description column:

- Click the **Add New Column** tab.
- Enter a **Column Name**, such as "Description".
- Scroll down to **Dynamic Column Data Settings**.
- Set **Field Type** to **Post Data**.
- Set **Field Value** to **Product Short Description**.
- Click **Add Column**. The table now shows the short description for each product.

![Adding a new column to a FluentCart table](/images/data-sources/fluentcart-integration/5.-FluentCart-table-add-new-column.webp)

### Standard Table Settings

Settings specific to your FluentCart product data live under the **Table Rows** tab. The table also has access to every standard Ninja Tables setting from the other tabs in the editor:

- **Table Configuration:** Core rendering settings such as pagination, sorting, and search — see [Table Rendering Settings](/guide/table-settings/table-rendering-settings).
- **Table Design:** Colors, borders, and layout to match your branding — see [Table Style Settings](/guide/styling-design/table-style-settings).
- **Frontend Editing:** Let specified users edit table data from the front end — see [Frontend Editing](/guide/advanced-features/frontend-editing).
- **Custom CSS/JS:** Add your own CSS or JavaScript — see [Table Styling & CSS Selector](/guide/table-management/table-styling-css-selector).
- **Import/Export:** Move table data in and out as CSV or JSON — see [Export Ninja Tables (CSV/JSON)](/guide/import-export/export-ninja-tables-csv-json).

### Step 4: Display Your Table

- Copy the **shortcode** from the table editor.
- Paste it into any WordPress page, post, or widget.

![FluentCart product table on the front end](/images/data-sources/fluentcart-integration/6.-FluentCart-table-frontend.webp)

Your FluentCart product table is now live and fully interactive for customers.

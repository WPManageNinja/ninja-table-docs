---
title: Add a Chart to a Page
description: Show a Ninja Chart on any page or post with the chart shortcode, the Ninja Charts block or the classic editor button.
---

# Add a Chart to a Page

Once a chart is saved, show it on your site with its **shortcode**, with the **Ninja Charts** block in the block editor, or with the **Insert Ninja Charts Shortcode** button in the classic editor. The chart renders on the page with its saved settings, and its size adjusts to the screen when **Responsive chart** is on.

## Use the shortcode

1. Go to **Ninja Tables** › **Charts** and find your chart.
2. Copy the shortcode from the **ShortCode** column. It looks like `[ninja_charts id="1"]`, where the number is the chart's ID.
3. Paste it into a page, post or any place that accepts shortcodes (in the block editor, use a **Shortcode** block).

<!-- TODO(screenshot): embed-ninja-charts-1
  screen: Ninja Tables › Charts
  table: -
  state: All Charts list with the ShortCode column of one chart highlighted
  highlight: ShortCode column
  view: admin
  alt: ShortCode column in the All Charts list
-->

`id` is the only attribute. If the ID doesn't match a chart (for example, the chart was deleted), the page shows "Invalid ShortCode...!".

You can also copy the shortcode from the last step of the chart creator.

## Use the classic editor button

In the classic editor, the toolbar has a Ninja Charts button on post and page screens.

1. Click the Ninja Charts button. The **Insert Ninja Charts Shortcode** window opens.
2. Under **Select a chart to insert**, choose a chart.
3. Click **Insert Shortcode**. If you haven't chosen a chart, it asks you to "Please select a chart".

The shortcode is added where your cursor is.

<!-- TODO(screenshot): embed-ninja-charts-2
  screen: Posts › Add New (classic editor) › Ninja Charts button
  table: -
  state: Insert Ninja Charts Shortcode window open with a chart selected
  highlight: Insert Shortcode button
  view: admin
  alt: Classic editor window for inserting a Ninja Charts shortcode
-->

## Use the Ninja Charts block

The **Ninja Charts** block (in the **Widgets** category) builds a chart right inside the block editor. It doesn't use a saved chart or a shortcode: you enter the data and choose the design in the block's own sidebar, and the chart lives in that page only.

1. In the block editor, click the **+** inserter and add **Ninja Charts**.
2. Open the block sidebar and work through the panels below.

<!-- TODO(screenshot): embed-ninja-charts-3
  screen: Posts › Add New (block editor) › Ninja Charts block
  table: -
  state: Ninja Charts block inserted with the General and Data Management panels open in the sidebar
  highlight: Chart type field
  view: admin
  alt: Ninja Charts block with its sidebar panels
-->

The sidebar panels:

- **General**: **Chart engine**, **Chart type** and **Chart title**. Changing the type or engine on a chart with data asks you to confirm ("Change Chart Type?" or "Switch chart engine?").
- **Data Management**: add and edit the data with **Add Dataset**, **Add Data**, **Add Point**, **Add Ring** or **Add Slice** (the button depends on the chart type), plus edit and delete for each row. Bubble charts have a bubble size label.
- **Appearance**: **Responsive chart**, width, height and position, **Background color**, border, and font size, style and color.
- **Title**, **Axes**, **Tooltip** and **Legend**: the same kind of options as the [chart creator tabs](/how-to-customize-charts-in-ninja-charts).
- **Layout**: padding around the chart.
- **Animation**: **Startup animation**, **Duration (ms)**, **Easing** and **Trigger**.
- **Fill**: **Area fill**, **Point style**, **Point fill**, **Line width**, **Straight line** and **Show points**.
- **3D Effect**: options for a 3D look.

Which panels and options show depends on the chart type.

::: tip
Want to reuse one chart on several pages, or keep the data in a table or form? Build it in the chart creator and use its shortcode instead.
:::

## Use the legacy block

The **Ninja Charts (Legacy)** block shows a chart you already saved. Add it from the block inserter, then choose your chart from **Select a Chart**. For new pages, the shortcode is simpler and works everywhere.

## Check it on your site

Preview a saved chart from the eye icon in the chart list. See [Manage Your Charts](/manage-ninja-charts).

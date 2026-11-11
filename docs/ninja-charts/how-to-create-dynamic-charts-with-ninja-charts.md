---
title: "How to Create Dynamic Charts with Ninja Charts"
description: "Create a chart that updates automatically from a Ninja Tables table or Fluent Forms entries, then save it and copy its shortcode."
---

# How to Create Dynamic Charts with Ninja Charts

A **dynamic chart** reads its numbers from a Ninja Tables table or Fluent Forms entries, so it stays current as the data changes. This page walks through the create screen and the chart builder once. Install [Ninja Charts](/guide/ninja-charts/how-to-install-ninja-charts) first.

## Start on the create screen

1. Go to **Ninja Tables** › **Charts** and click **New Chart**.
2. Enter a **Chart name**.
3. Under **Where is your data?**, choose **Ninja Tables** or **Fluent Forms**, then pick the table or form. (**Manual** is for [typed-in charts](/guide/ninja-charts/how-to-create-chart-manually-in-ninja-charts).)
4. Read the **Data needed** guide. It lists the columns or fields the chosen chart type uses, such as a label plus a number, or a choice that is counted.
5. Under **What do you want to show?**, choose the render engine (**Chart.js** or **Google Charts**) and a chart type.
6. Click **Continue to builder**.

The button stays off until the chart has a name and, for a table or form, a source. A hint beside it says what is missing. If the list is empty, the screen asks you to create a table in Ninja Tables or a form in Fluent Forms first.

![Create a chart screen with the Data needed guide for a column chart](/images/ninja-charts/create-dynamic-charts-ninja/1.-Create-A-Chart-Screen.webp)

## Choose the data in the Data panel

The builder opens on the **Data** tab of the sidebar, with the chart already drawing in the preview.

- **Data source** shows the app and the **Selected table** or **Selected form**. **Change source** switches to another source and keeps your design settings, but you choose the columns again. **Edit table** or **Edit form** opens the source in a new tab, since its data can only be changed there.
- The column picker (**What should the chart show?**) sets which columns or fields are charted.
- **Rows in chart** limits which rows are used.
- **View data** shows the data as the chart receives it.

See [Choose Your Chart Data](/guide/ninja-charts/how-to-use-data-range-picker-in-ninja-charts) for each option.

![Data panel of the chart builder with the source card, column picker and Rows in chart](/images/ninja-charts/create-dynamic-charts-ninja/2.-Data-Panel-Of-The-Chart-Builder.webp)

## Style it in the Design panel

Open the **Design** tab to change the chart type, series colours, title, legend, axes, layout and more while the preview updates. Open **Responsive** to adjust the chart for tablets and phones. See [Customize a Chart](/guide/ninja-charts/how-to-customize-charts-in-ninja-charts).

![Design panel of the chart builder with series colours](/images/ninja-charts/create-dynamic-charts-ninja/3.-Design-Panel-Of-The-Chart-Builder.webp)

## Save and copy the shortcode

1. Check the header. It shows the chart name (click it, or click the pencil, **Edit chart name**, to rename), the chart's **#ID** once saved, and the save state: **All changes saved**, **Unsaved changes** or **Saving changes**.
2. Click **Save**. The button is off until something has changed. The chart needs a name, and its columns must be valid, or you get a message such as "Please give this chart a name." instead. A "Chart saved" message confirms it.
3. Click the shortcode chip in the header to copy it. It looks like `[ninja_charts id="12"]`, where the number is the chart's ID. Hover over it to see **Click to copy**. A **Shortcode copied** message confirms it.
4. Click **Preview** to see the last saved version on your site in a new tab. Preview is off until the chart has been saved once ("Save the chart to preview it"), and it does not show unsaved changes.

![Builder header with the saved state, shortcode chip, Preview and Save buttons](/images/ninja-charts/create-dynamic-charts-ninja/4.-Builder-Header-With-The-Saved-State.webp)

### Leaving without saving

If you have unsaved changes and click **Back to charts**, go to another screen or close the tab, the builder warns you. **Leave without saving?** says "Your changes to this chart will be lost." Click **Keep editing** to stay, or **Leave** to drop the changes. Closing or reloading the browser tab shows your browser's own warning instead.

[Add the shortcode to a page](/guide/ninja-charts/embed-ninja-charts). The chart now appears in your [chart list](/guide/ninja-charts/manage-ninja-charts).

## What the preview shows when something is missing

The preview tells you what it needs:

- **No data yet**: the chart type's outline appears until the chart has data, for example when you haven't picked columns. If the source has no rows at all, a note adds "This source has no rows to chart yet." Add rows in the table or form.
- **Updating chart**: while the preview redraws after a change, the old chart stays dimmed with a small spinner. It is read out as "Updating chart" for screen readers.
- **This data source is not available.**: the table or form no longer exists. Use **Change source** on the Data tab.
- **This chart could not be opened**: when you open a saved chart that can't be loaded, this screen shows the reason and a **Back to charts** button.
- **Add a row to see your chart.**: shown on a manual chart with no rows. Click **Open data sheet** to add some.

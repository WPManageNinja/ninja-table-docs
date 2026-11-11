---
title: "How to Customize Charts in Ninja Charts"
description: "Change a chart's title, legend, axes, tooltip, hover effect, size, colors and animation in the Design panel, and set separate sizes for tablets and phones in the Responsive panel."
---

# How to Customize Charts in Ninja Charts

The **Design** and **Responsive** panels in the chart builder control how a chart looks. Every change shows in the live preview straight away, so you can try an option and see the result before you save.

1. Go to **Ninja Tables** › **Charts** and open a chart.
2. In the sidebar, click **Design** to style the chart, or **Responsive** to set sizes for tablets and phones.
3. Change options and watch the preview.
4. Click **Save** in the header. The header shows **Unsaved changes** until you do, then **All changes saved**.

![Chart builder with the Design panel open next to the live preview](/images/ninja-charts/customize-charts-ninja/1.-Chart-Builder-With-The-Design-Panel.webp)

Options differ by chart engine (**Chart.js** or **Google Charts**) and by chart type. This page says when an option appears only for some charts. To change the data instead, see the [Data panel](/guide/ninja-charts/how-to-use-data-range-picker-in-ninja-charts) or [typing data in yourself](/guide/ninja-charts/how-to-create-chart-manually-in-ninja-charts).

## Chart

The panel starts with a **Chart** group.

### Chart type

Pick another type from the picker. The list depends on the engine:

- **Chart.js**: Line, Pie, Bar, Horizontal Bar, Bubble, Doughnut, Scatter, Area, Combo, Radar, Polar and Funnel.
- **Google Charts**: Line, Pie, Bar, Horizontal Bar, Bubble, Doughnut, Scatter, Area, Combo and Histogram.

When the new type needs a different data shape, a notice appears under the picker. On a manual chart it says what changed, with an **Undo** button. On a chart that reads a table or form, it asks you to check the columns, with a **Go to Data** button.

### Color pickers

Every color setting in the Design panel works the same way. Click the swatch to open the picker, which has preset colors and an opacity slider, or type a hex code (such as `#01D5C6`) or an `rgb()` value into the box beside it. When a setting is empty, the box shows its default. On settings that can be empty, a small **x** (**Clear colour**) appears once a color is set. Click it to go back to the default.

### Series (or Slices)

This section lists one row per data series, or one per slice on pie, doughnut, polar and funnel charts. Each row has a color swatch. Click it to change the color.

- On a chart connected to a table or form, each row also has a **Label** field to rename the series.
- On a manual chart there is no **Label** field here. Rename series and slices in the data sheet or the Data panel instead.
- On **Line** and **Area** charts (Chart.js), each series also has **Straight lines** (turns off the curve), **Hide points** and **Line width**.

![Design panel Chart group with chart type picker and series colors](/images/ninja-charts/customize-charts-ninja/2.-Design-Panel-Chart-Group-With-Chart.webp)

## Labels

The **Labels** group holds the text parts of the chart.

### Title

- **Show title**: turns the chart title on or off.
- **Position**: on Chart.js, **Top**, **Bottom**, **Left** or **Right**. On Google Charts, **In** or **Out**. Google pie and doughnut charts don't have this option.
- **Color**: the title color.
- **Font size**: the title size.
- **Font style** (Chart.js only): **Normal**, **Oblique** or **Italic**.

### Legend

The legend names each series or slice. It doesn't appear on Chart.js funnel charts.

- **Show legend**: turns the legend on or off.
- **Position**: on Chart.js, **Top**, **Bottom**, **Left** or **Right**. On Google Charts, **Top**, **Bottom**, **In** or **Right**.
- **Alignment** (Google Charts only): **Start**, **Center** or **End**.
- **Color**: the legend text color.
- **Font size** (Google Charts only): the legend text size.

### Axes

This section appears only for charts that have axes. On Chart.js it is hidden for Pie, Doughnut, Polar, Radar and Funnel. On Google Charts it shows for Line, Bar, Horizontal Bar, Histogram, Area, Bubble and Scatter.

- **Show grid lines** (Chart.js only): turns the grid lines on or off.
- **Stacked**: stacks the series on top of each other. It shows for line, bar, horizontal bar and area charts on Chart.js, and for bar, horizontal bar, histogram and area charts on Google Charts.
- **Horizontal axis label**: text shown under the horizontal axis.
- **Vertical axis label**: text shown beside the vertical axis.
- **Vertical axis minimum** and **Vertical axis maximum**: fix the lowest and highest value on the vertical axis. Leave them empty to let the chart choose.

### Tooltip

The tooltip is the box that appears when a visitor points at a bar, slice or point.

- **Show tooltip**: turns tooltips on or off.
- **Shared tooltip** (Chart.js only): shows every series at the hovered position in one tooltip.
- **Background color**, **Border color**, **Title color**, **Text color** and **Border width** (Chart.js only): style the tooltip box and its text.
- **Text color** and **Font size** (Google Charts): style the tooltip text. Google Charts has no tooltip box styling.

### Hover

Hover controls what a chart does when the pointer is over a bar, slice or point.

On Chart.js:

- **Hover effect**: **Highlight** (default) shows a stronger shade, **None** keeps the normal color, and **Custom** lets you pick the color.
- **Hover color**: appears when **Hover effect** is **Custom**. One color for every bar, slice or point under the pointer.
- **Hover border width**: the outline width on hover, from 0 to 20. Leave it empty to keep the normal border.
- **Hover border color**: the outline color on hover. Leave it empty to keep the normal border.

On Google Charts there is one switch:

- **Hover effects** (on by default): when you turn it off, nothing changes under the pointer and tooltips are hidden too.

![Hover section of the Design panel with a custom hover color](/images/ninja-charts/customize-charts-ninja/3.-Hover-Section-Of-The-Design-Panel.webp)

## Layout

The **Layout** group sets size, spacing, background and text.

### Size and spacing

This section is called **Size** on Google Charts, where it has no padding fields.

- **Fit container width**: when on, the chart always fills the width of the area it is placed in.
- **Width (px)**: appears when **Fit container width** is off.
- **Position**: appears when **Fit container width** is off. Place the chart on the **Left**, **Center** or **Right**.
- **Height (px)**: the chart height.
- **Padding top**, **Padding right**, **Padding bottom**, **Padding left** (Chart.js only): space between the chart and its edge.

### Background and text

- **Background color**, **Border color**, **Border width** and **Border radius**: style the box around the chart.
- **Font size**: the base text size.
- **Font style** (Chart.js only): **Normal**, **Oblique** or **Italic**.
- **Font color**: the base text color.
- **3D** (Google Charts, pie and doughnut only): draws the chart in 3D.

![Layout group of the Design panel with fixed width options](/images/ninja-charts/customize-charts-ninja/4.-Layout-Group-Of-The-Design-Panel.webp)

## More

### Animation and fill (Chart.js)

- **Animation**: the easing used when the chart draws, such as `linear`, `easeInQuad` or `easeOutBounce`. The list is searchable. Polar charts leave out `easeInElastic`, `easeInOutElastic`, `easeInOutBack` and `easeInBack`.
- **Area fill**: appears on Area charts only. Choose **Start**, **Origin**, **End** or **False** to set where the color fills.

Google Charts has no **Animation and fill** section.

### Advanced

- **Render engine**: switch between **Chart.js** and **Google Charts**. Switching resets the design settings, because each engine has its own.

::: warning
Changing the render engine resets your design settings. Switch engines before you style the chart, not after.
:::

## Responsive

The **Responsive** panel sets different values for tablets and phones. Everything else stays the same as on desktop.

1. Open the **Responsive** tab in the sidebar.
2. Use the device switch at the top to choose **Tablet** or **Mobile**.
3. Fill in only the values you want to change.

The preview follows the switch: it narrows to a tablet or phone frame (about 796 px and 414 px wide), and the switch above the preview also has **Desktop**. If the preview shows desktop, the panel's help text reminds you the settings apply to tablets and phones only.

### How fallbacks work

Every field starts empty and inherits. Tablets use the desktop settings unless you change them here. Phones use the tablet settings unless you change them here. An empty number field shows the inherited value as a hint, and the dropdowns offer **Same as desktop** (or **Same as tablet** on mobile) with the current value in brackets.

Devices are measured by the visitor's screen width: **Mobile** up to 767 px, **Tablet** from 768 px to 1024 px, and desktop above that.

### Size

- **Height (px)**: the chart height, a whole number from 1 to 5000.
- **Font size**: the base text size, from 1 to 200.

### Title

- **Show title**: **Same as desktop**, **Show** or **Hide**.
- **Title font size**: from 1 to 200.

### Legend

This group is hidden on Chart.js funnel charts.

- **Show legend**: **Same as desktop**, **Show** or **Hide**.
- **Legend position**: **Same as desktop**, or a position. The choices match the engine's legend positions above.

Click **Reset to desktop** (on tablet) or **Reset to tablet** (on mobile) to clear all values for that device. The button is disabled when the device has no values of its own.

![Responsive panel with Mobile selected and the preview in a phone frame](/images/ninja-charts/customize-charts-ninja/5.-Responsive-Panel-With-Mobile-Selected.webp)

## Preview on other screen sizes

Above the preview, the **Desktop**, **Tablet** and **Mobile** switch changes the frame the chart draws in. It is hidden while you edit a manual chart's data sheet. A fixed-width Chart.js chart fades out and redraws when the frame settles; other charts follow the frame as it resizes.

Click **Save** to keep your changes. **Preview** in the header opens the last saved version on your site. To place the chart on a page, see [Embed Ninja Charts](/guide/ninja-charts/embed-ninja-charts).

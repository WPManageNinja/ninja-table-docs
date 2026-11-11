---
title: Add a Chart to a Page
description: Show a Ninja Chart on any page or post with the chart shortcode, the Ninja Charts block or the classic editor button.
---

# Add a Chart to a Page

Once a chart is saved, show it on your site with its **shortcode**, with the **Ninja Charts** block in the block editor, or with the **Insert Ninja Charts Shortcode** button in the classic editor. The chart renders on the page with its saved settings, and its size adjusts to the screen on phones and tablets.

## Use the shortcode

1. Go to **Ninja Tables** › **Charts** and find your chart.
2. Copy the shortcode from the **Shortcode** column. It looks like `[ninja_charts id="1"]`, where the number is the chart's ID.
3. Paste it into a page, post or any place that accepts shortcodes (in the block editor, use a **Shortcode** block).

![Shortcode column in the Charts list](/images/ninja-charts/embed-charts/1.-Shortcode-Column-In-The-Charts-List.webp)

`id` is the only attribute. If the ID doesn't match a chart (for example, the chart was deleted), the page shows "Invalid ShortCode...!".

After you save a chart in the builder, or import one from a CSV file, its shortcode is shown too.

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
  blocked: the classic editor (TinyMCE) is not available on the dev site and no Classic Editor plugin is installed
-->

## Use the Ninja Charts block

The **Ninja Charts** block (in the **Widgets** category) builds a chart right inside the block editor. It doesn't use a saved chart or a shortcode: you type the data and choose the design in the block itself, and the chart lives in that page only.

### Start a chart

A new block opens a start screen: **Let's make a chart**. It says "Pick a style, then add your numbers. You can change anything later."

1. In the block editor, click the **+** inserter and add **Ninja Charts**.
2. Under **1 Choose a chart**, pick the **Chart engine** (**Chart.js** or **Google Charts**) and a chart type.
3. Under **2 Add your data**, choose how to begin:
   - **Type your own data** (Start from an empty sheet) opens the **Edit data** window with a first series and row ready.
   - **Try sample data** (See the chart now, edit the numbers later) fills the chart with example numbers that you can edit or replace.

The start screen first shows the everyday types: Bar, Line, Pie, Doughnut, Area and Horizontal bar. Click **Show N more chart types** to see the rest. The number depends on the engine, because each engine has its own list (see the table below).

### Choose a type

Each chart type is a card with a small picture and its name. On the start screen each card also says what the type is good for.

| Chart type | Good for | Chart.js | Google Charts |
| --- | --- | --- | --- |
| Bar | Compare categories | Yes | Yes |
| Horizontal bar | Long category names | Yes | Yes |
| Line | Trends over time | Yes | Yes |
| Area | Totals over time | Yes | Yes |
| Pie | Parts of a whole | Yes | Yes |
| Doughnut | Parts, with a center | Yes | Yes |
| Polar area | Compare in a circle | Yes | No |
| Radar | Compare many traits | Yes | No |
| Scatter | Find correlations | Yes | Yes |
| Bubble | Three values at once | Yes | Yes |
| Funnel | Stages of a process | Yes | No |

If you change the engine and your chart type doesn't exist in it, the first type of the new engine is used. Use the arrow keys, <kbd>Home</kbd> and <kbd>End</kbd> to move between the cards. A type that would convert your data only gets focus on an arrow key, and <kbd>Space</kbd> or <kbd>Enter</kbd> picks it.

<!-- TODO(screenshot): embed-ninja-charts-3
  screen: Post editor, Ninja Charts block start screen
  table: -
  state: "Let's make a chart" with the engine switch, chart type cards and the two data choices
  highlight: Chart engine switch, chart type cards, Type your own data and Try sample data
  view: admin
  alt: Ninja Charts block start screen with chart type picker
-->

### Edit data

Click **Edit data** in the block toolbar, or in the **Data** tab of the sidebar, to open the **Edit data** window. It's a sheet, and its columns depend on the chart type.

| Chart types | One row is | Columns |
| --- | --- | --- |
| Bar, Horizontal bar, Line, Area, Radar | A **Label** | One value column per series. Each series has a color swatch and a name in its header. |
| Pie, Doughnut, Polar area, Funnel | A **Slice** | For each ring, a **Color** and a **Value**. |
| Scatter, Bubble | A **Point** | For each series, **X** and **Y**. Bubble also has **Size**. |

The window description changes to match: "One row per label, with a value for each series.", "One row per slice, with its value and color in each ring." or "One row per point, with its position in each series."

**Sheet options**

- **Series** (**Ring** on pie-style charts): adds a series or ring. New ones are named "Dataset N" or "Ring N", and you can rename them in the header. Pie-style rings have a **Ring name** field, other types a **Series name** field.
- **Row** (**Slice** or **Point** on those types): adds a row at the end. New rows are named "Label N", "Slice N" or "Point N".
- **Delete row**: the **x** at the end of a row removes it.
- **Remove series** (**Remove ring**): the **x** in a header removes it. It shows only when there is more than one series or ring.
- **Color**: the swatch in a series header sets that series color. In pie-style charts, each slice has its own swatch in the **Color** column.
- A count at the top shows the rows, slices or points and the series or rings, for example "4 rows · 2 series".
- **No rows yet.** appears on an empty sheet, with an **Add a row** button.
- A number cell that holds something that isn't a number is marked as invalid. Fix it before you save.

**Keyboard**

- <kbd>Enter</kbd> moves down and adds a row at the end. <kbd>Shift</kbd>+<kbd>Enter</kbd> moves up.
- Arrow keys move between cells. Left and right move to the next cell when the cursor is at the edge of the text.

Click **Save data** to apply your changes, or **Cancel** to leave them. Nothing reaches the block until you save.

**Toolbar shortcuts.** The block toolbar has quick buttons: **Add series** or **Add ring**, and **Add row**, **Add point** or **Add slice**, depending on the type. Each opens the **Edit data** window with the new series or row already added.

<!-- TODO(screenshot): embed-ninja-charts-4
  screen: Post editor, Ninja Charts block, Edit data window
  table: -
  state: Edit data sheet with two series and four rows on a bar chart
  highlight: Series headers, Save data button
  view: admin
  alt: Edit data window with the chart data sheet
-->

### Design the chart

The block sidebar has three tabs: **Data**, **Design** and **Responsive**.

**Data tab.** Shows "Typed-in data" with the counts (rows or slices or points, and series or rings), the list of series with their colors, and an **Edit data** button. A block with no data shows "This chart has no data yet. Add the first dataset, slice or point from the chart placeholder or the block toolbar."

**Design tab.** Four groups of sections, which open one at a time: **Chart**, **Labels**, **Layout** and **More**. Which sections and options show depends on the chart type and engine. Every option below says where it applies.

#### Chart

**Chart type** shows the type cards. Changing the type may convert your data (see [Change the type or engine](#change-the-type-or-engine)).

The **Series** section is called **Slices** on pie-style charts and **Points** on scatter and bubble. It has:

- **Colors**: one color per series, per slice (per ring if there are several) or per point. Rename series in the data editor.
- **Show percentages**: displays percentage labels on chart slices. Chart.js only, on Pie, Doughnut, Polar area, Funnel, Bar and Horizontal bar.
- **Area fill**: fills the area under the lines. Chart.js only, on Bar, Horizontal bar, Line, Area and Radar.
- **Point fill**: fills the data points with color. Chart.js only, on Line, Area and Radar.
- **Straight line**: disables curved lines. Chart.js only, on Line, Area and Radar.
- **Show points**: displays data point dots on lines. Chart.js only, on Line, Area and Radar.
- **Line width**: from 1 to 50 (default 3). Same types.
- **Point style**: the shape of the dots. Shows when **Show points** is on. Choices: Circle, Cross, Cross rotated, Dash, Line, Rect, Rect rounded, Rect rotated, Star, Triangle.

#### Labels

**Title**

- **Chart title** (placeholder "Enter chart title"), **Show title**.
- **Position**: Top, Bottom, Left or Right on Chart.js. On Google Charts it is **Inside** or **Outside**, and Pie and Doughnut have no position.
- **Color**, **Font size** (1 to 200 px) and **Font style**: Normal, Oblique or Italic.

**Legend** (not on Funnel)

- **Show legend**.
- **Legend box fill**: filled color boxes, or outlines when off. Chart.js only.
- **Position**: Top, Bottom, Left or Right on Chart.js. On Google Charts: Top, Bottom, Right, In or None.
- **Alignment**: Start, Center or End. Google Charts only.
- **Color** and **Font size**.

**Axes** (not on Pie, Doughnut, Polar area, Radar or Funnel)

- **Show grid lines**: Chart.js only.
- **Stacked**: stacks the series on top of each other. Bar, Horizontal bar, Line and Area.
- **Horizontal axis label** and **Vertical axis label**.
- **Vertical axis min** and **Vertical axis max**: leave empty for **Auto**.
- **Bubble size label**: Bubble charts only.

**Tooltip**

- **Show tooltip**.
- **Shared tooltip**: shows every series at the hovered position. Chart.js only.
- **Trigger**: **Focus**, **Selection** or **None**. Google Charts only.
- **Background color** and **Border**: Chart.js only.
- **Title color** and **Title font size**.
- **Text color** and **Text font size**: Chart.js only.

**Hover**

- Chart.js: **Hover effect** is **Highlight** (a stronger shade), **None** or **Custom**. **Custom** adds **Hover color**, one color for every bar, slice or point under the pointer. **Hover border width** (0 to 20 px, empty keeps the normal border) and **Hover border color** are always available.
- Google Charts: **Hover effects** turns the pointer effect on or off. When off, nothing changes under the pointer and tooltips are hidden too.

#### Layout

**Size and spacing** (called **Size** on Google Charts)

- **Fit container width**: the chart always fills the width of the area it sits in. When off, set **Width (px)** and **Position** (**Left**, **Center** or **Right**).
- **Height (px)**: tablets and phones can use their own height in the **Responsive** tab.
- **Padding (px)**: **Top**, **Right**, **Bottom**, **Left**. Chart.js only.

**Background and text**

- **Background color**.
- **Border**: choose **All sides** or **Each side**. Each side has **Width**, **Style** (Solid, Dashed, Dotted, Double or None) and **Color**. With **Each side**, set **Top**, **Right**, **Bottom** and **Left** separately.
- **Corner radius**: choose **All corners** with one **Radius**, or **Each corner** with **Top left**, **Top right**, **Bottom left** and **Bottom right**.
- **Font size**, **Font color**, and **Font style** (Chart.js only).
- **Enable 3D**: displays the chart with a 3D effect. Google Charts only, on Pie and Doughnut.

#### More

**Animation and fill** (called **Animation** on Google Charts)

- Chart.js: **Easing** sets how the chart moves as it draws (linear, ease-in, ease-out, elastic, bounce and other curves). On Area charts, **Fill to** sets where the filled area under the line stops: Start, Origin, End or False.
- Google Charts: **Startup animation** animates the chart on its initial draw. **Duration (ms)** is 0 to 10,000 (default 1,000). **Easing** is Linear, In, Out (default) or In and Out.

**Advanced** has the **Chart engine** switch. Switching resets the design settings, as each engine has its own.

#### Color picker

Every color field shows a swatch with a panel of preset colors and a **Custom color** option for any color you like. A color field with an **x** can be cleared with **Clear color**, which goes back to the default.

<!-- TODO(screenshot): embed-ninja-charts-5
  screen: Post editor, Ninja Charts block selected, sidebar Design tab
  table: -
  state: Bar chart with sample data, Design tab open on Labels › Hover
  highlight: Data / Design / Responsive tabs, Hover section
  view: admin
  alt: Ninja Charts block with the Design tab in the sidebar
-->

### Set up tablets and phones

1. Open the **Responsive** tab. The canvas switches to a **Tablet preview** with its width (768 px). A phone shows **Mobile preview** (390 px).
2. Under **Device to edit**, choose **Tablet** or **Mobile**. Click **Preview desktop** to look at the desktop version again.
3. Change the options you need.

| Group | Option |
| --- | --- |
| Size | **Height (px)** (up to 5,000). **Font size** (up to 200) is for Google Charts only. |
| Title | **Show title** and **Title font size** (up to 200) |
| Legend (not on Chart.js Funnel) | **Show legend** and **Legend position** |

**Show title** and **Show legend** offer "Same as desktop" (or "Same as tablet"), **Show** and **Hide**. **Legend position** offers the same inherit choice plus the positions your engine supports.

Tablets use the desktop settings unless you change them, and phones use the tablet settings unless you change them. A field you haven't changed is empty and shows the inherited value as its placeholder. Click **Reset to desktop** (or **Reset to tablet** for mobile) to drop your overrides. The tab shows a marker when it holds overrides.

When you open another tab, the preview stays on the device you chose, so you can check design changes on it too.

### Change the type or engine

**Chart type.** Types fall into three groups by how they hold data: standard (Bar, Horizontal bar, Line, Area, Radar), circular (Pie, Doughnut, Polar area, Funnel) and point (Scatter, Bubble). Switching inside a group, such as Bar to Line, keeps your data and doesn't ask. Switching between groups on a chart that has data opens **Change chart type?**: "Changing from X to Y requires data conversion", with a list of what changes. Click **Change type** to convert, or **Cancel** to keep the chart as it is. The dialog warns "Some data may be lost or modified. This action cannot be undone."

| From | To | What changes |
| --- | --- | --- |
| Standard | Circular | Multiple datasets will merge into one ring. Each data point will get its own color. |
| Circular | Standard | Color arrays will convert to single colors per dataset. |
| Standard | Point | Labels will be removed. Values will convert to X/Y coordinates. |
| Point | Standard | Points will convert back to simple values. Labels will be auto-generated. |
| Circular | Point | Slices will convert to X/Y coordinates. Color arrays will be removed. |
| Point | Circular | Points will convert to slices. Each slice will get its own color. |

On a chart with no data, the type changes with no question.

**Chart engine.** Changing it on a chart that has data opens **Switch chart engine?**: "Switching the chart engine will reset your chart options to defaults. Your data (labels and datasets) will be preserved." and "Some chart types may not be available in the new engine." Click **Switch engine** to continue or **Cancel**. If your chart type doesn't exist in the new engine, the first available type is used. On the start screen, the engine switch changes with no question.

::: tip
Want to reuse one chart on several pages, or keep the data in a table or form? Build it in the chart builder and use its shortcode instead.
:::

## Use the legacy block

The **Ninja Charts (Legacy)** block shows a chart you already saved. Add it from the block inserter, then choose your chart from **Select a Chart**. For new pages, the shortcode is simpler and works everywhere.

## Check it on your site

Preview a saved chart from the eye icon in the chart list. See [Manage Your Charts](/guide/ninja-charts/manage-ninja-charts).

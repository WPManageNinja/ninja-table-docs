---
title: "How to Create Ninja Charts with Fluent Forms Entries"
description: "Turn Fluent Forms submissions into a chart with Ninja Charts, for example to show survey or poll results."
---

# How to Create Ninja Charts with Fluent Forms Entries

A chart built from **Fluent Forms** entries is a dynamic chart: it updates as new submissions arrive. It's a good fit for polls, surveys and ratings. You need Fluent Forms and [Ninja Charts](/guide/ninja-charts/how-to-install-ninja-charts) active.

## Create the chart

1. Go to **Ninja Tables** › **Charts** and click **New Chart**.
2. Enter a **Chart name**.
3. Under **Where is your data?**, choose **Fluent Forms**, then pick the form.
4. Check the **Data needed** guide, then choose the render engine and a chart type.
5. Click **Continue to builder**.

The **Fluent Forms** card is always listed. Without Fluent Forms, or without any forms, the screen asks you to create a form first ("Please create a form in Fluent Forms first.").

![Create a chart screen with Fluent Forms selected and a form chosen](/images/ninja-charts/create-ninja-charts-fluent/1.-Create-A-Chart-Screen-With-Fluent.webp)

## Pick fields that fit the chart

On the **Data** tab, **What should the chart show?** offers two goals:

- **Count answers**: how many people chose each answer. Choose a **Question to count**. The choice fields are Radio, Checkbox, Select, Multi-select, Country, Rating, Score, Net promoter score, Payment method and Agreement.
- **Show numbers**: a number from each entry, named by a text, email, link or date field. Number, Range slider and Quantity fields can be measured.

The **Fields for this chart** list says how many fields each part needs and how many your form has. If the form can't fill the chart, a message says so, for example "To count answers, add a choice field to the form." Free-text answers are all different, so they can't be counted. For polls and surveys, **Count answers** with a pie or bar chart is usually the best fit. Scatter, bubble, combo and histogram charts can't count answers.

![Data panel with Count answers chosen for a Fluent Forms chart](/images/ninja-charts/create-ninja-charts-fluent/2.-Data-Panel-With-Count-Answers-Chosen.webp)

## Limit entries by date

Under **Rows in chart**, choose **Date range** and pick a start and end date (or a shortcut such as **Last month**). Only entries submitted between those dates are charted. The other choices are **All rows**, **Limit rows** and **Choose rows**; see [Choose Your Chart Data](/guide/ninja-charts/how-to-use-data-range-picker-in-ninja-charts).

![Rows in chart with the Date range option for a Fluent Forms chart](/images/ninja-charts/create-ninja-charts-fluent/3.-Rows-In-Chart-With-The-Date.webp)

## Edit the form from the builder

**Selected form** names your form. Its entries are read-only here, so click **Edit form** to open it in the Fluent Forms editor in a new tab. **Change source** switches to another form or source.

## Finish the chart

Style it in [Customize a Chart](/guide/ninja-charts/how-to-customize-charts-in-ninja-charts), click **Save**, and copy the shortcode. See [Add a Chart to a Page](/guide/ninja-charts/embed-ninja-charts).

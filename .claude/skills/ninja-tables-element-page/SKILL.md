---
name: ninja-tables-element-page
description: 'Specialist template for Ninja Tables reference pages about ONE building block: a Drag & Drop builder element (docs/drag-drop-elements: Text, Button, Icon, Image, List, Styled List, Rating, Progress, Ribbon, Text Icon, HTML, Shortcode) or a column type (docs/field-types: Single line text, Text area, HTML, Numeric value, Date, Select, Button/Link, Image/File/Lightbox). USE FOR: write or edit button-element.md, ribbon-element.md, text-element.md, date-field.md, select-field.md, actionable-button-link.md, a new element or column type page. DO NOT USE FOR: whole tabs or panels of options (ninja-tables-settings-page), connected sources (ninja-tables-integration-page), multi-step tasks (ninja-tables-howto-page).'
---

# Ninja Tables Element & Column Type Page Template

Always pair with `ninja-tables-doc-writer` (voice and universal rules).

An element page documents one thing you can put in a table: a Drag & Drop **element** or a
column **type**. It says what the element is for, how to add it, and what each of its options does.
These are the shortest pages on the site, usually 20–60 lines.

## When to use this template

- **Drag & Drop elements (docs/drag-drop-elements)**: `text-element`, `button-element`,
  `icon-element`, `image-element`, `list-element`, `styled-list`,
  `star-rating-element-in-ninja-tables-drag-and-drop`, `progress-bar`, `ribbon-element`,
  `text-icon-pro`, `html-element`, `shortcode-element`.
- **Column types (docs/field-types)**: `single-line-text-field`, `text-area`, `html-field`,
  `numeric-value`, `date-field`, `select-field`, `actionable-button-link`,
  `image-file-lightbox`.

## Required structure — Drag & Drop element

```
---
title: "<Name> Element"            # add " (Pro)" to the title when the element is Pro-only
description: "<What it adds to a Drag & Drop table cell, with a concrete example.>"
---

# <Name> Element

The **<Name>** element (Pro) <adds what> to a Drag & Drop table cell, such as <example>.
<One sentence on when to use it. Say which parts need Pro, if only some do.>

To add one, click a cell and click **<Name>** in the <**Advanced** group of the> **Elements**
tab. Click it to set its options in the **Settings** tab, which has <N> sub-tabs.

![<Name> element in a table](/images/drag-drop-elements/<short-slug>/1.-<Label>.webp)

## <Sub-tab: General>

- **<Option>**: <what it does>.

## <Sub-tab: Text / Icon (Pro) / Hover / Background>

- ...

Below the sub-tabs, **Spacing** sets the margin and padding around the <element>; see
[Element Spacing](/spacing).

Click **Save** to keep your changes.
```

If the element has no sub-tabs, use a single `## <Name> options` H2 (see `icon-element`).

## Required structure — column type

```
# <Type label>

The **<Type label>** column type (Pro) <what each cell holds or does>. <Why it helps: sorting,
filters, consistent values.>

<Free-version fallback, one line: "On the free version, a <Type> column works as plain text.">

## Set a column to <Type label>

1. Go to **Tables** › your table › **Table Rows**.
2. To add a new column, click **Add column**. To change an existing one, click the gear icon on its header and choose **Column settings**.
3. In the **Basic** tab, set **Type** to **<Type label>**. The <type> settings appear below it.
4. Click **Add column** or **Save column**.

![<Type> column settings](/images/field-types/<short-slug>/1.-<Label>.webp)

## <Setting group>

### <Individual setting>

<One or two sentences, or a bullet list of choices with examples in code spans.>

## <Fill in the column / Add the links>

<How the cell is edited in the grid or the row drawer, and how it looks on the site.>
```

## Rules

- **The "add it" sentence is fixed.** Drag & Drop: "To add one, click a cell and click
  **<Name>** in the **Elements** tab." Column types: the 4-step `## Set a column to <Type>` list,
  copied word for word, with only the type label changed. Ten of twelve element pages and all
  eight field-type pages already follow this.
- **H2s follow the element's sub-tabs or the type's settings, in UI order.** Use the exact
  sub-tab names (**General**, **Text**, **Icon (Pro)**, **Hover**, **Background**).
- **Bullet style**: element pages use `- **Label**: description.` Field-type pages may use
  `### <Setting>` blocks or `- **Label:** description.` Keep one style within a page.
- **Ranges and defaults** in brackets where confirmed: `**Font size** (10–45)`.
- **Pro**: a Pro-only element gets `(Pro)` in its title and H1 (`Ribbon Element (Pro)`) and on
  first mention. A free element with Pro parts says so in the intro ("adding an icon to it
  needs Pro") and marks the H2 (`## Icon (Pro)`). For a Pro column type, state the free fallback.
- **Cross-link** to [Element Spacing](/spacing) for spacing, to the table-wide
  [Drag & Drop table settings](/ninja-tables-drag-and-drop-table-settings) for global text style,
  and from column types to [Conditional formatting](/conditional-formatting),
  [Transform value](/transform-value) or [Custom filters](/custom-filters) where they interact.
- **No step-by-step tutorials** beyond the add-it block. Building a whole table belongs on a
  how-to page.

## Images

- One shot of the element or column in use near the top, then one per sub-tab or setting group,
  placed after that group's bullets. A final front-end preview is optional.
- Paths: `/images/drag-drop-elements/<short-slug>/<n>.-<Label>.webp` or
  `/images/field-types/<short-slug>/<n>.-<Label>.webp`.
- Screenshots are produced by the `ninja-tables-screenshotter` subagent / the
  `ninja-tables-doc-screenshots` skill, never by hand. Leave
  `<!-- TODO(screenshot): <element, sub-tab and state to capture> -->` only when a screen can't
  be reached. Drag & Drop shots use sample tables `893`/`894`.

## Verbatim model — `docs/drag-drop-elements/button-element.md`

```
# Button Element

The **Button** element adds a clickable button to a Drag & Drop table cell, such as "Buy now" in a pricing table. Each button has its own link, colors, size, optional icon and hover effect. The button is free; adding an icon to it needs Pro.

To add one, click a cell and click **Button** in the **Elements** tab. Click the button to set its options in the **Settings** tab, which has four sub-tabs.

## General

- **Label**: the button text.
- **Background color**, **Border color**, **Border size** and **Border radius**.
- **Full width**: stretch the button across the cell. When off, choose **Button size** (**S**, **M** or **L**) and **Alignment**.
- **URL**: where the button links to.
```

Column-type model: `docs/field-types/date-field.md`, with `## Set a column to Date field`, then
`## Date format` → `### Standard` / `### Custom (Pro)`, then `## Show time`.

## Sidebar entry

The label is the bare name, with `(Pro)` for Pro-only elements:

```ts
{ text: 'Ribbon (Pro)', link: '/ribbon-element' }   // Drag & Drop Builder › Elements
{ text: 'Date', link: '/date-field' }               // Columns › Column types
```

## Common pitfalls

- **Rewording the add-it block**, so pages drift apart. Copy it.
- **Old UI**: no "Columns tab", no "Manage Cells mode". Columns are edited from **Table Rows** ›
  gear icon › **Column settings**. Elements are picked from the right panel's **Elements** tab.
- **Missing the free fallback** on a Pro column type.
- **Using "field" and "type" inconsistently.** The UI label goes in bold (**Date field**,
  **Button/Link**), and the page calls it a "column type".
- **Turning an element page into a tutorial** about building a pricing table.

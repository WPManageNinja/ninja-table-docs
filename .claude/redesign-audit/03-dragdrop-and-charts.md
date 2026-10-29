# 03 — Drag & Drop table builder + Charts (redesign, v5.2.18)

Sources: hands-on run in local headless Playwright (admin, Pro plugin active, Pro license **not** activated: "Activate License" shows in menu), plus code in `ninja-tables-dev` (`resources/admin/components/TableBuilder/**`, `components/tables/DragDropCreate.vue`, `config/table-builder/*.php`, `components/Charts.vue`, `app/Hooks/Handlers/AdminMenuHandler.php`). The Ninja Charts plugin is NOT installed on the test site. I did not install it (that would change the site outside Ninja Tables test data). Instead I downloaded the wp.org zip (v3.4.3) into the scratchpad and read its code only.

Test data I created: D&D tables **#893 "DOCTEST dragdrop Scratch"** (from scratch, 6×3, with every element added) and **#894 "DOCTEST dragdrop Pricing Template"** (template "Pricing Table One"), plus a draft page **#896 "DOCTEST dragdrop render"** with both shortcodes. I changed no global settings.

---

## 1. Feature inventory: Drag & Drop builder

### 1.1 Creating a D&D table (new drawer flow)
Path: **Ninja Tables › Create Table** (route `#/create`). Under **START FROM SCRATCH**, choose the card **Drag & Drop table** ("Free layout or a ready-made template."). A right-hand drawer titled **Drag & Drop table** opens. It has 2 steps.

**Step 1**
- **Table name** (required, placeholder "e.g. Pricing plans"). For Import it is optional: "An imported table is named from its file; rename it in the builder." If it is missing you get the error "Table title field is required".
- **Start with**: pick one of three cards:
  - **Create From Scratch**
  - **Import from CSV/JSON**
  - **Choose a template**

  If none is picked you get "Choose how to start." Double-clicking a card picks it and moves on to step 2.
- Footer buttons: **Cancel** / **Next →**.

**Step 2, by mode**
- **Create From Scratch**: a visual grid picker with −/+ buttons and number inputs for **columns** (across the top) and **rows** (down the side). Each is 1 to 30, and the default is **6 rows × 3 columns**. A caption shows the size, e.g. "6 rows × 3 columns". (Old docs: rows/cols were typed in a dialog, and the builder default was 1×1.)
- **Import from CSV/JSON**:
  - **From a URL**: Pro. Free shows a Pro badge and the field is disabled. Help text: "A link to a CSV or JSON file."
  - A drop zone: "Choose a CSV or JSON file or drag & drop it here." **Up to 1 MB**, with a **Browse File** button. Errors: "File type must be CSV/JSON format!" and "File size can not exceed 1MB!".
- **Choose a template**: a heading "Choose a template", then category pills **All | Pricing | Comparison | Employee | Schedule**, then a thumbnail grid.
- Footer buttons: **Previous** / **Create table ✓**. On success the toast is "Table created successfully." (or "Imported successfully.") and the builder opens at `#/table_builder_edit_table/<id>`.

**Templates** (from `config/table-builder/templates.php`; free = no Pro badge)

| Category | Templates |
|---|---|
| Pricing | Pricing Table One (free), Two / Three / Four (Pro) |
| Comparison | Comparison Table One (free), Two / Three / Four / Five (Pro) |
| Employee | Employee Table One (free), Two / Three (Pro) |
| Schedule | Schedule Table One / Two / Three (all free) |

- In free, picking a Pro template gives the error "This is a Pro feature." and opens the upgrade URL.
- The **PRO badges show even when Pro is active**. `DragDropCreate.vue` uses `v-if="item.has_pro"` with no `hasPro` check. This is cosmetic, but it may confuse Pro users.

### 1.2 Builder screen layout (`#/table_builder_edit_table/:id`)
**Header bar**
- **← back** (aria "Back to all tables").
- Table name with a **pencil icon** that opens the **Rename table** modal: "Only you see this name. It is how the table is listed in the admin." The new name is kept with the next **Save**.
- `#id`.
- **Shortcode chip** `[ninja_table_builder id="N"]` (click to copy).
- **Full screen** toggle (expand icon).
- **Preview**: opens `?ninjatable_builder_preview=N` in a new tab. This is the admin-only preview page with the shortcode and an Edit link.
- **⋯ More actions** menu, section **EXPORT TABLE**: **Export as CSV** / **Export as JSON**. In the old docs, export lived under Settings as "Export Table › Select Format".
- **Save** (primary).

**Canvas toolbar**
- A selection label: "Click a cell to edit it", "Cell C1", or "2 cells selected".
- **Merge** button: disabled until 2+ cells are shift-selected. Its tooltip says "Shift-click another cell to select more than one".
- **Split** button.
- **Zoom** select: 50 / 75 / 100 / 125 / 150 %.
- **Preview width** segmented control: **Desktop / Tablet / Mobile** icons. In Tablet or Mobile, the label reads "Previewing on mobile". In that view, Merge/Split, the add bar and element editing are hidden. You can only look at the responsive result there.

**Canvas** ("sheet" with fake browser chrome)
- Column handles **A, B, C… ⋮** sit above the table and row handles **1, 2, 3… ⋮** sit to the left.
- **Drag a column letter to move the whole column.** Rows can be dragged to reorder them. Both are new (commits 02709f80, 2c03ae56).
- **Column menu** (click the letter), headed "COLUMN A": Insert column before · Insert column after · Insert left column · Insert right column · Duplicate column · Remove column.
- **Row menu**: Insert row before · Insert row after · Insert top row · Insert bottom row · Duplicate row · Remove row.
- Confusing pair of labels: "Insert left column" adds a column at the far left of the table, while "Insert column before" adds it next to the selected column. The same applies to "top row" vs "row before". The docs should explain this.
- **Add bar** under the table:
  - **+ Add row ▾** → At the bottom / At the top.
  - **+ Add column ▾** → On the right / On the left.
  - Hint: "⋯ on a row or column number inserts next to it".
- **Cells of a from-scratch table** each start with an empty Text element. It shows grey "Add New" placeholder text. Clicking it gives inline editing with a floating toolbar: **B, I, U, S (strikethrough), link, unlink**.
- **Element chip**: a selected element shows a name chip with **Drag to move** (grip), **Duplicate** and **Delete** buttons. "Duplicate element" is a new visible action.
- **Selecting**:
  - Click a cell to select it.
  - **Shift+click** adds more cells to the selection (needed for Merge).
  - Clicking outside the table clears the selection.
  - Clicking an element selects the element.

**Right panel** (can be hidden with **→** "Hide panel", and shown again with the sliders button "Show panel"). It has two tabs:
- **Elements**:
  - Hint: "Select a cell first, or drag an element onto any cell".
  - A **Search elements** box (empty result: "No elements match …").
  - Two groups, **General** and **Advanced**.
  - **Click** an element to add it to the selected cell, or **drag** it onto any cell. (Old UI: drag only.)
  - In free, locked elements show a PRO badge with the tooltip "%s is a Pro element. Ninja Tables Pro unlocks it."
- **Settings · <selection>**: a breadcrumb **Table › Cell › Element**. What it shows depends on what is selected:
  - nothing selected = Table settings
  - a cell = Cell inspector
  - an element = Element options

  The old **Manage Cells** and **Background** "modes" (buttons above the table, with a Close button in the sidebar) are gone. They are now the Cell inspector.

### 1.3 Elements (palette names; Free/Pro from `config/table-builder/component.php` `has_pro`)

| Palette name | Inspector heading (inconsistent!) | Group | Free/Pro | Options seen in UI |
|---|---|---|---|---|
| Text | Text | General | Free | **Content** with a **Visual / HTML** editing-mode switch (new). Font color, Font size (10–45; shows 15), Alignment L/C/R, Font style Bold/Italic/Underline/Strikethrough |
| Button | Button | General | Free (button **icon** is Pro: "You are using free version of ninja-tables") | Sub-tabs. **General**: Label, Background color, Border color, Border size, Border radius, **Full width** (when off: **Button size S/M/L** + Alignment), URL, **Link rel attributes** (sponsored/nofollow/noreferrer/noopener, new), Open in a new tab. **Text**: Font color, size, style. **Icon**: Enable icon, Icon color, Icon size, Item spacing, icon picker (Search icons + **Upload your own**), Icon position left/right. **Hover**: Button hover switch → Background color, Text color, Icon color, Border color, Border size, **Scale** (new) |
| Icon | Icon | General | **Pro** (old doc doesn't say Pro) | Color, Icon size (10–150), Alignment, icon picker (search + Upload your own; tooltip: "An SVG you upload can take the colour above; a PNG or a JPG keeps its own.") |
| Rating | **Star rating** | General | Free | Star size, Alignment, Color, Show rating value (default **off**; old doc says on), Maximum star (3–10) |
| List | List | General | Free | Sub-tabs. **General**: Item spacing vertically, Space between icon and text, Alignment. **Text**: font color/size/style. **List**: List type Unordered/Ordered. List icon: ul = circle/square/disc/none, ol = upper-roman/lower-roman/upper-alpha/lower-alpha/decimal |
| HTML | **Custom HTML** | General | Free | Code box only (placeholder "write html") |
| Shortcode | Shortcode | General | Free | Shortcode box (placeholder says "write html", a copy bug), Alignment |
| Image | Image | General | **Pro** | Replace image, Alignment, Image size (10–100, default 50), Image shape Square/Round, Image alternative text, Image link, **Open in a new tab** + **Link rel attributes** (new vs old doc) |
| Styled List | **Stylist list** (typo) | Advanced | **Pro** | Sub-tabs. **General**: Space between icon and text, Item spacing vertically, Alignment. **Text**: font color/size/style. **Icon**: Icon color, Icon size, picker/upload |
| Ribbon | Ribbon | Advanced | **Pro** | Sub-tabs. **General**: Ribbon type side/bookmark/corner/horizontal (default **side**; old doc says corner), Ribbon position left/right, Ribbon width, Ribbon height, X offset, Y offset, **Table margin top**. **Text**: Ribbon text, Font color, Font size, Font X/Y offset, Font style. **Background**: Background color. No Spacing section |
| Progress | Progress | Advanced | **Free** (old doc says Pro) | Progress type line/circle/dashboard (default circle), Text color, **Progress bar color** (new, separate from text color), Text font size, Progressbar percentage, Progressbar width, Progressbar thickness, Alignment |
| Text Icon | **Text icon** | Advanced | **Pro** | Sub-tabs. **General**: Text, Item spacing, Alignment. **Text**: font color/size/style. **Icon**: Color, Icon size, picker/upload, Icon position left/right |

- **Spacing**: every element except Ribbon has a second accordion, **Spacing**. It has **Margin | Padding** tabs, each with Top / Bottom / Left / Right.
- **Free vs Pro summary** (changed vs old docs):
  - Pro elements: **Icon, Image, Styled List, Ribbon, Text Icon**.
  - Progress is now free.
  - The old intro said "Four cell elements in the Advanced section are Pro". That is wrong now: 3 Advanced + 2 General are Pro.
- **Naming inconsistency**: the palette, the inspector heading and the canvas chip labels use different names. Layout.vue chip labels include "Text with icon". The docs should standardise on the palette names.

### 1.4 Cell inspector (select a cell → Settings · Cell C1)
Intro text when several cells are selected: "Pick one cell to reach its own options. Hold Shift and click to take several at once, which is how you merge them."

- **COLOURS FOR EVERY ROW**: Header background, Even row background, Odd row background. These duplicate the Table › Background settings.
- **COLOURS FOR WHAT YOU PICKED**: Selected cell row background, Selected cell column background, Selected cell background. Help: "Pick a row, a column or a cell to colour it. Hold Shift and click to take several cells at once."
- **Highlight column**: switch, **Pro** (tooltip "This is a Pro feature."). When on: Highlighted column height, Shadow color, Shadow effect (X-axis), Shadow effect (Y-axis), Shadow effect (blur radius).
- **Row height** (default 50), **Column width** (default 150).
- **Merge / Split** are in the canvas toolbar.
  - Verified: shift-select A1+B1, then Merge, gives colspan=2.
  - Split was disabled straight after merging. To split, you have to reselect the merged cell (inferred).
- Color pickers have opacity (old doc mentions it; not re-verified).

### 1.5 Table settings (nothing selected → Settings · Table)
Accordions, in UI order (labels are sentence case):

1. **General**
   - Cell padding: 0–50, default 10.
   - Table alignment: Left/Center/Right, default Center.
   - **Separate Columns/Rows**: switch, default off. Turning it on reveals Space between columns and Space between rows (0–50, default 3).
   - **Table container max width**: switch, default off. Turning it on reveals a slider (100–5000, default 700).
   - **Table cell min auto width**: 10–500, default 150.
   - **Table container max height**: 100–10000, default 500.
     - This clips or scrolls tall tables on the front end. Verified: #893 wrapper is 500 px, table is 743 px.
2. **Background**: Header background (#dddddd), Even row background (#dddddd), Odd row background (#ffffff).
3. **Custom CSS**: "Add your custom CSS". "You may add `.ntb_<id>` as your css selector prefix to target this specific table." Ace editor.
   - **Bug**: the warning renders as "Please don't include `<code></code>` tag". The `<style></style>` text is lost, and the same happens with `<script>` under Custom JS.
4. **Custom JS** (Pro, ⓘ tooltip): "You may use `.ntb_<id>` to target this specific table."
5. **Sticky** (Pro, ⓘ): First row sticky, First column sticky.
6. **Accessibility**: Table role = Table / Presentation / List / Row Group (default Table).
7. **Border**:
   - Table border: 0–50, default 0.
   - Border color: #000000.
   - **Apply inner border**: switch, default on. Its children are Header inner border (on), Inner border color, Inner border size (0–50, default 1).
8. **Global style** (ⓘ "The global style will be applied if the component individual style is not applied."):
   - Margin top, **Margin bottom** (new vs old doc).
   - Font size: 12–40, default 15.
   - Color.
   - Font family: Inherit, Arial, Helvetica, Comic Sans, Courier New, Georgia, Impact, Charcoal, Lucida Grande, Palatino Linotype, Book Antiqua, Palatino, Tahoma, Geneva, Times New Roman, Verdana, Monaco.
9. **Responsive**: Enable responsive table (default on for new tables; the Pricing template ships with it **off**).
10. **Mode options**: tabs **Mobile | Tablet | Desktop**.
    - Mobile/Tablet:
      - Disable breakpoint.
      - Cell stack direction: Row/Column.
      - Top row as header: default on.
      - Items per header: 1–5, mobile default 1, tablet default 2.
      - Group separator: 1–10, default 5.
    - Desktop: Top row as header and Static top row are **always disabled** (`disable: true` in config). Why are they there at all? See the open questions.
11. **Responsive settings**: tabs Mobile | Tablet, each with Cell padding and Table alignment.

Removed from settings: **Export Table** (moved to the ⋯ menu).

### 1.6 Front-end rendering (verified on draft page #896)
- Shortcode: `[ninja_table_builder id="N"]`.
- The front end prints an **HTML snapshot saved by the builder on Save** (`_ninja_table_builder_table_html` meta). It does not render live.
- **Gotcha (not new, but users will hit it)**: a table created from a template, an import or the new drawer has **no HTML until you click Save in the builder once**.
  - Before saving, #894 rendered only an "Edit Table" link on the page and in Preview, and the page threw the JS error "Cannot read properties of undefined (reading 'options')".
  - After Save it rendered correctly and the error went away.
  - The old create flow had the same `table_html => null`, but the docs should say "Click Save before embedding".
- Admins see an **Edit Table** link under each table.
- Mobile (390 px):
  - #893 (responsive on, top row as header) stacked into groups with the separator bars.
  - #894 (template, responsive off) kept its desktop layout and overflowed sideways.
- All elements rendered: button, icon, stars, list, custom HTML, shortcode text, progress.
- Gutenberg block / editor integration for D&D tables is out of scope here (EditorBlockHandler references `ninja_table_builder`).

---

## 2. Feature inventory: Charts

### 2.1 What exists in Ninja Tables
- **Menu**: Ninja Tables › **Charts** (`admin.php?page=ninja_tables#/charts`). It also appears in the top app nav ("Charts") and in the ⌘K command palette ("Charts", sub "Ninja Charts", alias "graph"). The Help page has a "Ninja Charts" card linking to the old getting-started doc.
- **Charts are not built into Ninja Tables.** They come from the separate free plugin **Ninja Charts** (wp.org slug `ninja-charts`, latest 3.4.3).
- **When Ninja Charts is NOT installed** (current site), the page shows:
  - Header "Charts" with the subtitle "Turn any Ninja Table into a bar, line, pie or doughnut chart. Charts is a separate free plugin."
  - A card: "**Ninja Charts is not installed yet**" / "It reads the tables you already have, so there is nothing to re-enter. Install it and a Chart option appears on every table."
  - Bullets: "Bar, line, pie, doughnut, radar and polar charts" · "Built from a table you already maintain" · "Updates whenever the table data changes".
  - Buttons: **Install Ninja Charts** and **Read the docs** (→ `docs.ninjatables.com/guide/ninja-charts/getting-started-with-ninja-charts-free-wordpress-chart-plugin`). **Keep this URL alive.**
  - An embedded YouTube intro (v-mU6LIb7jQ).
  - **Install Ninja Charts** POSTs `install/ninja-charts`. It needs the `install_plugins` capability (otherwise "Insufficient permissions"). It installs and activates the plugin from wp.org in the background, shows "Successfully enabled Ninja Charts." and redirects to `admin.php?page=ninja-charts#/chart-list`. (code only; not clicked)
- **When Ninja Charts IS installed** (code only):
  - The NT submenu "Charts" points to `admin.php?page=ninja-charts#/chart-list`, and an extra submenu **Add Chart** (`#/add-chart`) appears.
  - The `#/charts` route redirects to the chart list.
  - Ninja Charts removes its own top-level "Ninja Charts" menu when Ninja Tables is active. Without NT it has its own menu: Charts / Add Chart / Get help.
- **Free vs Pro**: Ninja Charts is free and needs no Ninja Tables Pro.

### 2.2 Ninja Charts plugin itself (from the wp.org zip, code/readme only; UI not seen)
- **Renderers**: Chart.js and Google Charts.
- **Chart types**:
  - Chart.js thumbnails: area, bar, bubble, combo, doughnut, funnel, horizontal bar, line, pie, polar area, radar, scatter, stacked area.
  - Google thumbnails: area, bar, bubble, column, combo, donut, histogram, line, pie, scatter, stacked bar.
- **Data sources**:
  - `ninja_table` (needs Ninja Tables active).
  - `fluent_form` (needs Fluent Forms active; otherwise "The required plugin for %s is not active.").
  - `manual` (manual inputs).
  - Calculative fields modules exist for NT and FF.
- **Shortcode**: `[ninja_charts id="N"]`. An invalid id prints "Invalid ShortCode...!". There is also a TinyMCE button and a block.
- **The flow in the old docs** (Title & renderer & type → Data Source → Data Range (select columns, number of items default 10, order, pick items, date range picker) → Formatting & Preview (Chart / Series / Axes / Title / Tooltip / Legend) → Save & Get Shortcode) is Ninja Charts UI. The Ninja Tables redesign did not change it.

### 2.3 Charts issues
- The NT Charts page copy claims "**a Chart option appears on every table**". I found **no code** in NT free/Pro or in Ninja Charts 3.4.3 that adds a per-table Chart option. Charts are made from the Ninja Charts list. The claim looks false. Confirm with the product team before the docs repeat it.
- The subtitle/bullets list 4 to 6 chart types, but the plugin offers 12+ types across 2 renderers, plus Fluent Forms and manual sources. The page undersells it.

---

## 3. Old page mapping

| Old page | Verdict | Reason |
|---|---|---|
| drag-drop-tables/how-to-create-your-first-drag-and-drop-table-with-ninja-tables | **REWRITE (UI changed)** | Creation is now a Create Table screen with a 2-step drawer (Scratch grid 1–30, default 6×3 / Import / Template with category pills). Right panel has Elements/Settings tabs, click-to-add, search, and the ⋯ export menu. The "Manage Cells / Background buttons" and "Save Table" labels are gone. The Pro element list is wrong. Add "Save before embedding". |
| drag-drop-settings/ninja-tables-drag-and-drop-table-settings | **REWRITE (UI changed)** | Settings now sit in a right "Settings · Table" tab with sentence-case labels. Export moved to the ⋯ menu. Add Global style › Margin bottom and the max-height clipping note. Options otherwise the same. |
| drag-drop-settings/responsive-table-design | **REWRITE (minor+)** | Now in the same Settings tab (Responsive / Mode options / Responsive settings). Add the canvas **Desktop/Tablet/Mobile preview** switch. Explain the always-disabled Desktop toggles. The "leftmost side" location is wrong. |
| drag-drop-settings/spacing | **KEEP (minor edits)** | Still an accordion "Spacing" with Margin/Padding tabs. Check whether the lock/link toggle still exists (not seen in the text dump). Ribbon has no Spacing. |
| drag-drop-settings/table-background-color-customizing-ninja-tables-drag-and-drop | **REWRITE → MERGE into a new "Cell settings" page** | The "Background" mode and Close button are gone. Colours are in the Cell inspector ("Colours for every row" / "Colours for what you picked") and in Table › Background. |
| drag-drop-settings/manage-cells-in-ninja-tables-drag-and-drop | **SPLIT / REWRITE** | The "Manage Cells" mode is gone. Split into (a) "Rows & columns": handles A/B/C and 1/2/3 ⋮ menus, Add row/Add column bar, drag to reorder rows/columns; (b) the Cell inspector (Highlight column (Pro), Row height, Column width); (c) Merge/Split in the toolbar via Shift+click. |
| drag-drop-elements/text-element | **KEEP (minor edits)** | Add the Visual/HTML editing mode and the inline toolbar (B/I/U/S/link). The default font size shown is 15 (global). |
| drag-drop-elements/button-element | **REWRITE (minor+)** | Add Button size S/M/L (when not full width), Link rel attributes, Hover › Scale, and the icon picker search/upload. Note the button icon is Pro. |
| drag-drop-elements/icon-element | **KEEP (minor edits)** | Mark as **Pro**. Add the icon search and the SVG/PNG colour tooltip. |
| drag-drop-elements/image-element | **KEEP (minor edits)** | Still Pro. Add Open in a new tab and Link rel attributes. |
| drag-drop-elements/html-element | **KEEP (minor edits)** | Inspector calls it "Custom HTML". Options = code box only. The old doc mentions alignment/line height, which is not in the UI (only via the HTML itself). |
| drag-drop-elements/list-element | **KEEP (minor edits)** | Options match. Fix the defaults. |
| drag-drop-elements/star-rating-element-in-ninja-tables-drag-and-drop | **KEEP (minor edits)** | Inspector says "Star rating". Show rating value defaults to **off** (doc says on). Max star is 3–10. |
| drag-drop-elements/progress-bar | **KEEP (minor edits)** | Now **Free** (doc says Pro). Separate Text color and Progress bar color. |
| drag-drop-elements/shortcode-element | **KEEP (minor edits)** | Same options. |
| drag-drop-elements/styled-list | **KEEP (minor edits)** | Still Pro. Inspector heading typo "Stylist list". |
| drag-drop-elements/ribbon-element | **KEEP (minor edits)** | Default type is **side** (doc says corner). Add **Table margin top**. Note there is no Spacing section. |
| drag-drop-elements/text-icon-pro | **KEEP (minor edits)** | Options match. Inspector says "Text icon". |
| data-sources/ninja-charts-integration | **REWRITE** | Path "Ninja Tables dashboard → Add Charts → Chart List" is wrong. New path: **Ninja Tables › Charts** (an install page if Ninja Charts is missing; otherwise the Ninja Charts list + **Add Chart** submenu). |
| ninja-charts/getting-started-with-ninja-charts-free-wordpress-chart-plugin | **KEEP (minor edits)** | Linked directly from the NT Charts page and the Help page, so keep the URL. Add "reached via Ninja Tables › Charts". |
| ninja-charts/how-to-install-ninja-charts | **REWRITE (minor)** | Add the one-click **Install Ninja Charts** button on Ninja Tables › Charts (needs the install_plugins capability). |
| ninja-charts/how-to-create-dynamic-charts-with-ninja-charts | **KEEP** | Ninja Charts UI is unchanged by the redesign (not verified live). |
| ninja-charts/how-to-create-chart-manually-in-ninja-charts | **KEEP** | Same as above. |
| ninja-charts/how-to-use-data-range-picker-in-ninja-charts | **KEEP** | Same as above. |
| ninja-charts/how-to-customize-charts-in-ninja-charts | **KEEP** | Same as above. |
| ninja-charts/create-ninja-charts-with-fluent-forms-entries | **KEEP** | Same as above. |
| ninja-charts/create-ninja-charts-with-ninja-tables-data | **KEEP (minor edits)** | Update the entry path to Ninja Tables › Charts / Add Chart. |

## 4. New features with no old page
- **"Drag & Drop builder tour: canvas, panel and toolbar"** (drag-drop-tables). Covers zoom, Desktop/Tablet/Mobile preview, full screen, hide/show panel, Table › Cell › Element breadcrumb, click-to-add, element search, element chip (move/duplicate/delete), inline text toolbar, rename, ⋯ Export as CSV/JSON, Preview, Save.
- **"Rows and columns in Drag & Drop tables"** (drag-drop-settings). Covers handles and menus, the Add row/Add column bar, drag to reorder columns/rows, Merge/Split with Shift+click.
- **"Cell settings"** (drag-drop-settings). Covers row/column/cell colours, Highlight column (Pro), Row height, Column width. This replaces the Background and Manage Cells pages.
- **"Drag & Drop templates"** (drag-drop-tables). Lists the 15 templates by category with Free/Pro.
- **"Import a CSV/JSON file into a Drag & Drop table"** (drag-drop-tables). Covers the 1 MB limit and import from URL (Pro). It is only a sentence in the old intro today.
- **"Exporting a Drag & Drop table"**. Could be a section of the tour page instead.
- Troubleshooting entry: **"My Drag & Drop table shows only 'Edit Table'"** → open it in the builder and click Save.

## 5. Open questions for the product team
1. Charts page copy: "Install it and a Chart option appears on every table". Where is that option? I found no code for it. Is it planned, or should the copy change? Should the copy also list all 12+ chart types, Fluent Forms and manual data?
2. Should creating a D&D table (template/import/scratch) generate and save the front-end HTML straight away? Right now a never-saved table renders empty and throws a JS error on the page.
3. Mode options › Desktop: "Top row as header" and "Static top row" are permanently disabled. Should they be removed, or are they meant to work?
4. The PRO badge on templates in the create drawer shows even with Pro active. Is that intentional?
5. Element naming: should the inspector and chips use the palette names (Rating / HTML / Styled List / Text Icon) instead of Star rating / Custom HTML / Stylist list / Text icon?
6. Custom CSS / Custom JS hint lost its `<style></style>` / `<script></script>` text ("Please don't include  tag").
7. Shortcode element placeholder says "write html".
8. Progress element is now free and Icon is Pro (both are the reverse of the old docs). Please confirm this is the intended gating.
9. Is the default "Table container max height 500" intended? It clips or scrolls tall D&D tables on the front end.
10. Is "Insert left column" vs "Insert column before" (and "top row" vs "row before") worth renaming to "Insert column at the start"?

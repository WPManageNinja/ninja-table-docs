# Areas 1+2 — Global screens, creation, normal-table editor (done by main session)

Sources: live UI dumps (headless Playwright) + label extraction from `resources/admin` + `git diff develop..redesign`.

## App shell
- Top bar: Tables · Create Table · Import · Charts · Help; gear = Settings; sun icon = light/dark theme toggle; ⌘K command palette (search box in top bar removed).
- WP submenu: Tables, Import, Charts, Activate License, Help.
- Empty state (no tables): "Welcome to Ninja Tables" + Create your first table / Import table + links (Documentation, Introduction, Templates, Demo).

## Tables list (home)
- Columns: ID, Table, Preview, Source, Engine, **Used on** (popover: "Embedded on N pages" — NEW), Shortcode (copy), Actions (Edit, More actions → Duplicate, Move to trash).
- Filters: All / Default / Connected sources / Drag & Drop; Filter by source; Filter by engine (FooTable/DataTables); search by name, shortcode or #ID ("/" shortcut).
- Bulk actions (selection pill): Move to trash; in Trash: Restore / Delete permanently.
- **Trash** view (NEW) — tables are trashed first, then deleted.

## Create a table (`#/create`) — tiles open right-side drawers
START FROM SCRATCH
- **Default table** — name, description (WP editor), Engine line (FooTable "the usual choice" · Change → DataTables "holds up better once a table runs to thousands of rows").
- **Upload a file** — CSV, Excel (.xlsx) or JSON; name optional (file name used); Convert to UTF-8; engine.
- **Drag & Drop table** — name; Start with: Create From Scratch (rows/cols picker) · Import from CSV/JSON (file up to 1 MB or From a URL) · Choose a template (template categories). → Next.
CONNECT LIVE DATA
- **WP Posts/CPTs** — post types (multi), columns (Title, Author, Date, Excerpt, Content, Status, Comments, Modified date, Post ID, Slug, Menu order, taxonomies, raw post fields), "Post meta, ACF fields and shortcodes can be added later in the Columns tab", Conditions (status/order), Order by column + A→Z/Z→A, Query limit for frontend, engine.
- **WooCommerce products** — category/tag/type lists (empty = all), Hide out of stock items, Initial order by.
- **WooCommerce reviews** — product category/tags/type, Reviews status (All/Approved/Unapproved).
- **Fluent Forms entries** — if FF missing: "Install Fluent Forms now" button.
- **FluentCart products** — category, brands, hide out of stock, initial order by, engine. (NEW source vs old docs)
- **Google Sheets** — 2-step: name + Data source URL → step 2. Engine.
- **Remote CSV / JSON** — 2-step: name + URL (JSON URL is NEW).
- **Custom SQL query** — query editor; placeholders {prefix} {current_user_id} {current_date} {current_date_time}; SQL Connection Type (Default WP SQL Table / others).
- Engine chooser (FooTable vs DataTables) is now chosen at creation for every type. **The engine is locked after creation for tables that keep their own rows.**

## Import (`#/tools`)
- 1. What are you importing? CSV · Excel (.xlsx, first sheet, formulas → last values) · JSON (list of rows) · Ninja Tables JSON (keeps design & settings) · Drag & Drop export (JSON/CSV). Sample CSV link.
- 2. Choose the file: up to 300 MB; bigger CSV/Excel can come from the Media Library on DataTables (chunked "Large file source"). Engine chooser. Convert to UTF-8.
- Import from another plugin: TablePress, Data Tables Generator by Supsystic (only shown when detected).
- Tips box. Excel import is NEW.

## Settings (gear) — General · Global appearance · Permissions · Performance · License
- **General** (`global_settings`): Global JavaScript error handling (Console log silently / Handle but don't log / Don't handle (default)).
- **Global appearance**: defaults for NEW tables only — color scheme, styling library (Semantic UI / Bootstrap), single line cells, fixed layout, hover rows, bordered, hide horizontal/vertical borders, striped, compact, vertically centered; font family/size; show title/description, hide all borders; search box, sorting; pagination (pages/show all, rows per page).
- **Permissions**: "Who can manage tables" — tick roles (Pro: "Roles & access is a Pro feature"); also "Let these roles write SQL queries" (code).
- **Performance** (NEW page): Clear table cache; Clear external caches (asks caching plugins to flush).
- **License**: key + Activate.
- Old "Tools" page is gone: its parts are split into Import (top nav) and Settings (gear).

## Help page — rebuilt: doc category cards, support ticket, review, other plugins. Hard-coded links only to ninjatables.com/docs/ root (and docs-category/simple-mode, advanced-mode) → doc slugs are free to change.

## Table editor (`#/tables/:id`)
Header: title (pencil → Table details: title, **caption** (NEW), description), #ID, shortcode chip, Preview, Save (on tabs that need it), Get Pro (free).
Tabs: **Table Rows · Custom filters · Appearance · Table Configuration · Frontend editing · Custom CSS/JS**. Columns and Import/export are no longer tabs — they live inside Table Rows (old URLs still open).

### Table Rows
- Spreadsheet-style grid. Toolbar: Search rows, Read-only toggle, **Sort manually** (drag rows), Compact rows, show/hide row ID-author-date, Import / export, Add column, Add data; bulk Delete / Clear selection; rows per page; pagination "Showing x–y of z".
- Column header menu: Column settings, Add column left/right, Delete column, Sort A→Z / Z→A / Back to saved order, drag to reorder (= old "column rearrangement").
- Row actions: Edit row, Insert row below, Duplicate row, Delete row; Row settings & Cell settings (Pro: row/cell background & text colours — replaces old "row color"); row drawer has Previous/Next row, Add at First/Last, Created date.
- Connected tables show a **Source banner** "Rows come from … · Source settings".

### Column dialog — tabs Basic · Advanced · Conditions · Transform
- Basic: Column name, Column key (immutable later), Type, Responsive visibility (Always show / Hidden on desktop / Initial hidden mobile / mobile+tab / mobile+tab+computers / Totally hidden). Type-specific settings below.
- Types: Single line text, Text area, HTML field, Numeric value (separator US/EU), Date field (standard/custom moment format, Show time, time format, first day of week), Select field (Pro: items, placeholder, multi-select), Button/Link (Pro: text, new tab, rounded, force download, colors, rel), Image (type added by Pro, not in the free type list; Pro: image only / image lightbox / iframe lightbox / link to URL / file download).
- Advanced (mostly Pro): header & content text align, column width + unit, extra classes, background/text color, Sortable, Searchable, **Click to copy** (NEW), HTML header content.
- Conditions (Pro): rules If value [Equal, Not equal, <, >, <=, >=, Between, Contains, Does not contain] → cell/row/column actions (color, bg, content, CSS class, resets); dynamic dates ({date} today/tomorrow/±10 days).
- Transform (Pro): HTML template with {{row.key}}, Excel formula support (experimental, table-wide), supported formulas list, reference shortcodes.

### Custom filters (Pro) — filter list (move up/down, edit, delete); filter editor: title, label, UI type (Select dropdown, Radio, Checkbox, Text input, Date picker, Date range, Number range, Reset filter button), manual vs dynamic values from a column, parse comma separated, sort dynamic values, multi-select, date operator, prefix, filter columns, strict mode; Layout inline / in columns (2-4); Progressive filters.

### Appearance (live preview canvas rendered by the theme + side panel; preview Desktop/Tablet/Mobile)
- Quick styles presets: Minimal, Lined, Striped, Bordered, Compact. (NEW)
- Title & header (show title, description, header row) · Typography (font family/size) · Rows & borders (style library Semantic UI / Bootstrap 4 / Bootstrap 3 + its options) · Colors (Preset scheme or Custom: search bar, header, body, hover, alternate odd/even rows, footer — Custom is Pro) · Search (placeholder, empty result text, dropdown heading — **old Language settings moved here**; position, full width, colors) · Sorting (switch + default order: created date / by column / manual) · Pagination (rows per page, page-size changer, scroll to top, position) · Sticky header & column (top offset, off on mobile, sticky first column) · Mobile & row details (fold columns into + drawer vs **stack rows as cards** + stack-on breakpoints + card look; open drawer closed/first/all; + button first/last column; **Row details popup** (NEW) with hide empty values/labels) · Export & print (Pro, moved here from old Table Configuration: CSV/Excel/print buttons, text/colours, plain-text export, print header/footer, position, alignment).
- "Use as default for new tables" (NEW).

### Table Configuration — now only Performance: Table engine (FooTable / DataTables; switching keeps data but drops design; locked for own-row tables), Rendering (Ajax / Legacy), Caching (frontend loader, disable caching, interval, HTML cache + interval).

### Frontend editing (Pro) — enable; who can add & edit (roles), who can delete; own data only (+ read-only shortcode for everyone); button labels, popup headings, icon position, always show icons; per-column Editable / Required / Default value. Only own-row tables.

### Custom CSS/JS — Custom CSS (selector prefix `#footable_parent_<ID>` on FooTable, `#ninja_dt_parent_<ID>` on DataTables; `_NT_ID` placeholder form), Custom JS (Pro; $table, tableConfig), Table targeting: Custom CSS class (moved from old "Extra CSS class"), Copy table selector.

### Per-table Import and export (in Table Rows toolbar) — Export: CSV, Excel (.xlsx), JSON; Import rows from CSV (sample download, replace existing data, UTF-8). Not for external sources.

## Removed / relocated vs old UI (code: deleted files in develop..redesign)
- Configurations/_LanguageSettings → Appearance › Search. _RenderingSettings → Table Configuration. _buttons (CSV/print) → Appearance › Export & print. Design Studio panels → Appearance. EditTableModal → Table details dialog. Tools/Tools.vue → Settings + Import. Tools/Privacy → Settings › Permissions.
- No standalone "column rearrangement" screen (drag columns in Table Rows header / column list).
- Row/column data calculation still possible via Transform + Excel formulas.

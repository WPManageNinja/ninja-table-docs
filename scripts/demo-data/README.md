# Demo data for screenshots

Seeds the local Ninja Tables site (`http://localhost:10013`, Local site "cart") with realistic tables so
doc screenshots look like a real, well-used install instead of an empty test site.

```bash
./scripts/demo-data/seed.sh            # create or replace the demo tables + pages (idempotent)
./scripts/demo-data/seed.sh --remove   # delete only the demo tables + pages (and the extras)
./scripts/demo-data/seed.sh --extras   # create or replace only the extra tables + pages below
```

The site must be running in Local (the script needs its MySQL socket).

## What it creates

| Table | Rows | Shows off |
|---|---|---|
| Hosting Plans Comparison | 12 | small comparison table, teal scheme, ✓/✗ cells |
| Product Price List | 41 | number + select columns, stock status, 3 pages of pagination |
| Employee Directory | 150 | select, date, responsive breakpoints, blue scheme |
| World Countries | 42 | numbers with separators, green scheme (rounded public figures) |
| Monthly Sales by Region 2026 | 12 | numeric series for charts and calculations |
| Conference Schedule | 33 | date + select (Track), violet scheme |
| Course Catalog | 16 | button column ("Enroll now") |
| Order History | 1,200 | large table: search, pagination, sorting (FooTable) |
| Order History (DataTables) | 1,200 | same data on the DataTables engine |

Plus 5 published pages embedding tables with the shortcode (so **Used on** shows "On 1 page", and there are
real front-end pages): Hosting Plans, Shop Price List, Our Team, WordCamp Schedule 2026, Online Courses.

## Extras: tables with saved settings (`seed-demo-extras.php`)

Shots of a *result* (coloured cells, merged rows, filters, buttons…) need settings saved on a table, but the main
demo tables must stay as they are (their ids show in existing screenshots). The extras script adds separate tables
and pages, tagged `_nt_demo_extra`, and merges them into `demo-tables.json` (listed under `extras`). It never touches
the main tables, so it can be re-run on its own with `--extras`. A plain `seed.sh` runs it after the main seed.

| Table (page) | Saved settings it shows |
|---|---|
| Team Contacts (Team Contacts) | HTML field, mailto Transform value, conditional formatting, HTML in a text cell, hidden-on-mobile columns |
| Staff Directory (Staff Directory) | custom filters (In Columns, 3) and CSV / Excel / Print buttons |
| Department Roster (Department Roster) | rowspan: `combine` class + Custom JS from the docs' gist (`assets/rowspan.js`) |
| Winter Apparel (Winter Collection) | Image/Lightbox column with media-library photos, Text area, styled Price column, Stackable, Number Range filter |
| Quarterly Sales by Store 2026 (Quarterly Sales) | `=SUM()` Transform formula + column totals Custom JS (`assets/column-totals.js`) |
| Event Agenda (Event Agenda) | `#colspan#` merged rows, Legacy rendering |
| Managed WordPress Plans (same) | row and cell colours |
| Weekend Workshops | Sort manually on |
| Pricing Plans / Pricing Plans (empty) | a small 3-column table, and a brand-new table with no columns |
| Website Pricing (Website Pricing) | Drag & Drop pricing table, copied from the newest Drag & Drop table with "Pricing" in its title |
| – (Shipped Orders) | `[ninja_tables id=… filter="Shipped"]` on Order History |

It also writes `wp-content/uploads/nt-demo/countries.csv` for the Remote CSV flow (`csv_url` in the map).
Stored formats were read from the plugin code (free `redesign` branch, Pro 5.2.18). If a plugin update changes them,
save the setting once in the editor and compare with `get_post_meta()`.

## How it works

- `seed-demo-tables.php` loads WordPress (`wp-load.php`) with Local's PHP and calls the plugin's own import
  pipeline (`TableImporter::createTable` → `storeTableConfigWhenImporting` → `writeIndexedRows`), the same
  path a CSV import takes, then sets column types and appearance as the editor would save them.
- Everything it creates carries post meta `_nt_demo_seed = 1`. A re-run deletes exactly those first, so it
  never touches other tables (e.g. the `DOCTEST …` tables).
- Data is deterministic (fixed random seed): re-seeding produces the same rows, so screenshots are reproducible.
- **Table ids change on every re-seed.** The script writes `scripts/screenshots/demo-tables.json`
  (title → id, page title → path, gitignored) and screenshot plans refer to tables by title:
  `{"admin": "/tables/{{Employee Directory}}/configuration"}`, `{"front": "{{page:Our Team}}/"}`.

## Safety

This writes to the local site's database. Back it up first if it holds anything you care about:

```bash
B="$HOME/Library/Application Support/Local/lightning-services/mysql-8.0.35+4/bin/darwin-arm64/bin"
SOCK="$HOME/Library/Application Support/Local/run/Ecc_Xk6CZ/mysql/mysqld.sock"
"$B/mysqldump" -uroot -proot --socket="$SOCK" --single-transaction local > "$HOME/Local Sites/cart/backups/backup-$(date +%Y%m%d-%H%M).sql"
```

A backup taken right before the first seed is at `~/Local Sites/cart/backups/before-demo-seed-20261029-1837.sql`.

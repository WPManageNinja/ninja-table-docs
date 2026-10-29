# Demo data for screenshots

Seeds the local Ninja Tables site (`http://localhost:10013`, Local site "cart") with realistic tables so
doc screenshots look like a real, well-used install instead of an empty test site.

```bash
./scripts/demo-data/seed.sh            # create or replace the demo tables + pages (idempotent)
./scripts/demo-data/seed.sh --remove   # delete only the demo tables + pages
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

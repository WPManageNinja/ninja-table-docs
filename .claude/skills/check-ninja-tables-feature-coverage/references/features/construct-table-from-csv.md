---
feature: "Construct Table from External CSV"
tier: pro
category: data-sources
doc_status: documented
doc_page: guide/data-sources/construct-table-from-csv.md
source_version: "5.2.17"
caveat: "Verified against the free v5.2.17 ZIP from wordpress.org (ninja-tables-admin.js, Remote-Data-Source + GoogleSheetDTNav components). The DataTables sync back end lives in Pro (pro/gsheet-sync/* endpoints, activated_features.google_sheet_dt); Pro 5.2.17 source was not available. ninja-tables-resource/ is absent from this checkout."
---

Build a table from any public HTTPS URL that serves CSV. Same two engines as Google Sheets: **FooTable** (live fetch + Caching Interval) or, since v5.2.17, **DataTables** (scheduled sync on a Sync Interval with an Auto Sync panel after creation). The URL field is labelled CSV File URL under DataTables.

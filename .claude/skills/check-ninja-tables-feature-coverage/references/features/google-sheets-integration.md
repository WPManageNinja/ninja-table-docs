---
feature: "Google Sheets Integration"
tier: pro
category: data-sources
doc_status: documented
doc_page: guide/data-sources/google-sheets-integration.md
source_version: "5.2.17"
caveat: "Verified against the free v5.2.17 ZIP from wordpress.org (ninja-tables-admin.js, Remote-Data-Source + GoogleSheetDTNav components). The DataTables sync back end lives in Pro (pro/gsheet-sync/* endpoints, activated_features.google_sheet_dt); Pro 5.2.17 source was not available. ninja-tables-resource/ is absent from this checkout."
---

Connect a published-to-web Google Sheet by its CSV URL. With the default **FooTable** engine the sheet is read live and cached for the Caching Interval (Rendering Settings → Caching Configuration, default 5 min). Since v5.2.17 the **DataTables** engine is also offered in the connect modal: rows are copied into a dedicated DB table on a **Sync Interval** (5 min – 7 days, default 1 hour, changeable any time from the Auto Sync panel, which also has Sync Now, Last Sync/Rows/Status/Duration and Fetch Columns → Update).

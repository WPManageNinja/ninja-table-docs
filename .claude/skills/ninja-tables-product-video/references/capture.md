# Capture: get the truth before you build

Everything that claims to be Ninja Tables must be Ninja Tables. Two ways to get it, both on this PC only.

## 1. Sources, best first

1. **The plugin code** for labels, options, defaults and Free vs Pro: `~/Local Sites/cart/app/public/wp-content/plugins/ninja-tables-dev`
   (branch `redesign`) and `.../ninja-tables-pro`. Map a feature to its files with `scripts/plugin/find-doc.sh "<feature>"`
   and `.claude/plugin-memory/CATALOG.md`.
2. **The local site** `http://localhost:10013` (`admin` / `admin`), driven by headless Playwright through
   `scripts/screenshots/lib/harness.cjs` (`Harness`: `gotoAdmin`, `gotoFront`, `click`, `fillByLabel`,
   `shotRaw`, `naturalLook`, `setViewport`). Needs the plugin's Vite dev server on port 8881.
   Demo tables come from `./scripts/demo-data/seed.sh`; reference them by title.
3. **Brand files**: `ninja-tables-resource/Logo`, `ninja-tables-resource/Icon`, `public/logo.svg`. Partner logos
   from the partner plugin's own assets. Never redraw a logo from memory.
4. Missing a screen you cannot reach (signed-in third-party, old UI): a clearly labelled placeholder, and tell
   the user which screen to send.

## 2. What to capture for a rebuilt-UI film (promo-layer style)

- **Data**: scrape the real rows (e.g. `/shop-price-list/` front end, all pages) into `assets/<name>.csv`.
  Compute search/sort results from that CSV in `build.py`, not by hand.
- **Colours**: read computed styles of the real preset on the front end (header bg, odd/even row bg, text) with
  `page.evaluate(() => getComputedStyle(el).backgroundColor)`. Record them as named constants with a comment
  saying where they came from.
- **Labels**: copy button/tab/option text exactly as the UI shows it (case included).
- **Product images**: crop from a 2× front-end capture (e.g. FluentCart `/shop-3/`) into `assets/img/product-N.png`.
- **Behaviour**: click it once on the local site and watch what really happens (Add To Cart shows a cart icon;
  no drawer). Film that.

## 3. What to capture for a screenshot film (launch-film style)

`launch-film/capture/capture.cjs` is the working example. It walks the real flow at 2× and saves lossless PNGs
to `assets/ui/` plus `capture/state.json` with every id it created:

scrape rows → Create Table › Upload a file (CSV) → Table Design › Colors › Teal → Features › Mobile › Enable
Stackable Table → device previews → Save → ⌘K palette ("Product") → create a page with the shortcode via REST →
front end at desktop and 390 px phone width.

Then `capture/measure.cjs` writes target rects (`rects.json`) so the cursor lands on the real controls, and
`capture/build_scenes.py` generates the scenes.

## 4. Side effects and cleanup

Capturing creates real tables and pages on the **local demo site only**. Record their ids in `state.json` and in
`REVIEW.md`, and remove them when the film is final:

```bash
node .claude/video/launch-film/capture/cleanup.cjs <tableId> <pageId>
```

(REST: `DELETE /wp-json/ninjatables/v2/tables/{id}`, `DELETE /wp-json/wp/v2/pages/{id}?force=true`, nonce from
`admin-ajax.php?action=rest-nonce`.) Currently kept for the launch film: table #1021, page #1022.

## 5. Plan caveat

The dev site runs Pro, so the admin top bar shows a **PRO** pill. For a wordpress.org (Free) audience, either
avoid that bar in frame or recapture with Pro deactivated, and mark every Pro feature on screen.

# Build pattern

## 1. HyperFrames contract (break one and the render is wrong or blank)

- Root `index.html`: `<div id="root" data-composition-id="main" data-start="0" data-duration="TOTAL"
  data-width="1920" data-height="1080">`. It holds the ground, blobs, light leaks and one **host** per scene.
- Host: `<div id="demo" data-composition-id="demo" data-composition-src="compositions/demo.html"
  data-start="3.3" data-duration="11.73" data-track-index="1" ...>`. **Host `id` = composition id.**
- Scene file: everything inside one `<template>`; its inner root carries the same `data-composition-id`.
- Every composition registers one **paused** timeline: `window.__timelines["demo"] = tl;`. Child timelines
  added to it must not be paused. Times inside a scene are local (0 = the host's `data-start`).
- Pad the root timeline to the full length: `tl.set({}, {}, TOTAL)` or a full-length tween.
- Use `fromTo` for anything that must be correct when seeked to any frame. Set `immediateRender: false` on a
  `fromTo` that starts later than another tween on the same property.
- **No CSS `transform` on elements GSAP tweens** (GSAP owns transform; put static offsets in `left/top` or on a
  wrapper). Scale groups that must scale together inside one wrapper (we wrapped the table in `#d-tbl`).
- Intended overlaps (rows, cells, swatches, the cursor over the UI): add `data-layout-allow-overlap` or the
  layout check errors.
- Deterministic only. Fonts: `local()` or files in `assets/`. GSAP from the pinned CDN URL in the template.

## 2. The `build.py` generator (promo-layer)

Hand-writing five HTML files drifts. One Python script generates all of them from shared tokens and real data:

| Piece | What it does |
|---|---|
| `GROUND, INK, CORAL, TEAL, DEF, TEA` | palette, incl. the real preset colours |
| `BASE_CSS` | `.hl` headline, `.w` words, `.sub`, `.card`, `.hand`, `.ring` |
| `JS` | shared per-scene helpers: `H(X,Y)` fingertip aim, `reveal(id,t)`, `hide(id,t)`, `tap(hand,ring,X,Y,t)` |
| `words(text, acc=…)` | splits a headline into `.w` spans, accent words in coral |
| `scene(sid, body, script)` | wraps a scene in `<template>`, registers its timeline |
| `HAND` | hand + ring markup per scene prefix |
| data block | reads `assets/product-price-list.csv`, computes the real search ("lap") and sort (Price desc) results |
| geometry | `CL, CT, CW, CH` card rect, `COLS` widths, `col_x(i)`, target points (`SEARCH`, `PRICE_HDR`, `FILE_DROP`) |
| `HOSTS`, `TOTAL`, `LEAK` | the master timeline and light leaks; `index.html` is written last |

Change a headline, a beat time or a row → edit `build.py` → `python3 build.py` → check → snapshot. Never edit the
generated `compositions/*.html` by hand (the next build overwrites them).

For a film built from screenshots instead (launch-film), the same pattern is `capture/build_scenes.py`, with
target rects measured by `capture/measure.cjs` into `rects.json` so the cursor lands on real buttons.

## 3. Gotchas we hit, and the fix

| Symptom | Cause | Fix |
|---|---|---|
| `first_frame_empty` | hook faded in from 0 | something readable is on screen at t = 0 (static eyebrow or first word) |
| `text_below_floor` | 24 px eyebrows | ≥ 28 px at 1080p |
| Imported table empty | CSV header had more names than values | trim the header to the row width |
| Parts of the table scaled to different origins | separate tweens on header and rows | wrap in one element and scale that |
| Layout overlap errors | rows/cells/cursor intentionally overlap | `data-layout-allow-overlap` |
| Rows collide during search/sort | everything moved at once | leavers out → survivors move (stagger) → newcomers in, opacity dip |
| Dragged file covers the drop text | drop point too central | aim `FILE_DROP` left of the label |
| Empty ground for a few frames at a seam | outgoing scene ended before the transition covered the frame | extend the outgoing host until the leak/iris fills the frame, or overlap hosts 0.15 s on another track |
| End line held too short | CTA landed late | land the CTA by −2.25 s |
| Wrong swatch picked in capture | fuzzy text match ("Teal" vs "Green") | exact regex `^teal$` |
| Typing into ⌘K did nothing | input not focused | click the input before typing |
| Switch click intercepted | the label overlays the switch | force-click the `.el-switch` wrapper |

## 4. Useful CLI

```bash
npx hyperframes lint                       # contract errors
npx hyperframes check --json               # lint + runtime + layout + motion + contrast + craft warnings
npx hyperframes snapshot --at 1,3.5,5.2    # PNG frames at those seconds
npx hyperframes snapshot --review          # scene sheet, seam strips, 360 px phone sheet
npx hyperframes snapshot --range 2.6,3.4 --frames 8   # motion across a seam
npx hyperframes measure cuts <video.mp4>   # cut times of a reference video
npx hyperframes catalog --query "light leak"           # ready-made registry blocks
npx hyperframes preview --background       # Studio preview; --status / --stop
npx hyperframes render --quality looks -o renders/name-v1.mp4
```

`reverse-any-video` (rebuild a video automatically) is a paid HyperFrames Pro feature. For a reference video,
use `measure cuts` + ffmpeg frame sheets (`ffmpeg -i ref.mp4 -vf fps=2,scale=480:-1,tile=6x6 sheet.png`) and
write the findings into `.claude/video/REFERENCE-ANALYSIS.md`. An MP4 never contains its source project or
prompt; ask the author for the project folder or `SKILL.md`.

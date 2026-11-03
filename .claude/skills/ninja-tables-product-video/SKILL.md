---
name: ninja-tables-product-video
description: Plan, script, build, review and render Ninja Tables product videos (launch, promo, feature, social cut) with HyperFrames (HTML + GSAP → MP4), in the WPManageNinja "layer" house style learned from the FluentCart × Fluent Player promo. Covers the one-thing + 3-storylines process, the 2-second beat grid, real-UI capture from the local site, the cream-ground / top-headline / big-product / hand-cursor / light-leak grammar, the build script pattern, the check + snapshot review gate, sound, and delivery. USE FOR: make a product video, launch video, promo video, feature video, release video, social clip, reel, video for the new UI, redo/tweak the promo, add a scene, change a headline, re-render. DO NOT USE FOR: YouTube embeds in doc pages (CLAUDE.md "Videos"), doc screenshots (ninja-tables-take-screenshots), social-share cards (ninja-tables-featured-images).
---

# Ninja Tables: Product Videos

Short, music-driven product films built in code with **HyperFrames 0.9.7** (HeyGen): every frame is HTML/CSS,
animated by a paused GSAP timeline, rendered to MP4 by headless Chrome + ffmpeg. Nothing is hand-edited in a
video editor, so a headline, a price or a beat can be changed and re-rendered in minutes.

Two working projects are the reference implementations. **Start every new film by copying one of them**:

| Project | Style | Use as the template for |
|---|---|---|
| `.claude/video/promo-layer/` | FluentCart "layer" style: cream ground, top headline, rebuilt UI, 👆 hand, light leaks, 28.5 s | **Default.** Promos, feature films, social cuts |
| `.claude/video/launch-film/` | Real screenshots of the admin in a window, crop cards, iris/whip seams, 40.5 s | Walkthrough-style films where real pixels matter more than motion |

Background reading, already done once (don't redo it unless the reference changes):
`.claude/video/REFERENCE-ANALYSIS.md` (both reference videos measured frame by frame),
`.claude/video/STORYLINES.md`, `.claude/video/redesign-launch-video-plan.md`.

## Hard rules

1. **This PC only.** Capture with the local headless Playwright harness (`scripts/screenshots/lib/harness.cjs`)
   against `http://localhost:10013`. Never the Chrome extension, `screencapture`, remote devices or the other PC
   (global CLAUDE.md). Tell every subagent the same.
2. **Real product, real data, real claims.** Every label, colour, option and behaviour on screen exists in the
   plugin today (check the code in `ninja-tables-dev` / `ninja-tables-pro`, or click it on the local site).
   Pro features carry a "Pro" mark. No invented numbers ("10× faster", "in seconds") unless measured.
   Example: FluentCart Add To Cart in a product table shows a cart icon next to the button, not a drawer,
   so the film shows the icon.
3. **Projects live in `.claude/video/<name>/`** (VitePress `srcExclude` keeps them off the site). Each has a
   `.gitignore` with `renders/`, `.hyperframes/`, `node_modules/`. Commit only when asked; never commit MP4s.
4. **Determinism.** No `Math.random()`, `Date.now()` or network fetches inside compositions. Every asset is a
   local file under `assets/`.
5. **Don't block on music.** No HeyGen sign-in and no track → deliver silent and say so (see `references/sound.md`).

## The workflow (follow in order)

| # | Step | Output | Reference |
|---|---|---|---|
| 1 | **The one thing**: what the viewer can now do, in one line; one viewer, one real task; one piece of real data that travels through the film | 3 lines in `SPEC.md` | `references/story-and-script.md` §1 |
| 2 | **Three storylines**, recommendation first. Person present → show them and stop until they pick. "Just make it" → build the recommendation | `STORYLINES.md` | §2 |
| 3 | **Beat sheet on a 2 s grid**: hook → demo verbs → second world → proof grid → end card, every headline ≤ 6 words | `SPEC.md` beat table | §3–4, `references/house-style.md` §1 |
| 4 | **Capture the truth**: real rows, real preset colours, real labels, product images, logos (from `ninja-tables-resource/` and plugin assets) | `assets/`, `capture/` | `references/capture.md` |
| 5 | **Scaffold**: copy `promo-layer/` (minus `renders/`, `.hyperframes/`), rename in `meta.json`, `package.json`, `index.html` title | new project folder | below |
| 6 | **Build**: edit the project's `build.py` (geometry + data + per-scene GSAP), run `python3 build.py` | `index.html`, `compositions/*.html` | `references/house-style.md`, `references/build-pattern.md` |
| 7 | **Check**: `npx hyperframes check --json` until 0 errors; every warning fixed or kept on purpose | clean check | `references/review.md` §1 |
| 8 | **Look**: `snapshot --review` + `--at` on every beat + `--range` across every seam; fix P0/P1 | frames read | `references/review.md` §2–3 |
| 9 | **Render**: `npx hyperframes render --quality looks -o renders/<name>-v<N>.mp4`; verify with `ffprobe` | MP4 | `references/review.md` §4 |
| 10 | **Deliver**: `REVIEW.md` (calls made, measured vs looked, weakest shot, kept warnings, local-site side effects) + full path in the reply, `open -R` it in Finder | `REVIEW.md` | `references/review.md` §4 |

### Scaffold commands

```bash
cd .claude/video
rsync -a --exclude renders --exclude .hyperframes --exclude node_modules promo-layer/ <new-name>/
cd <new-name>
# edit meta.json id/name, package.json name, build.py title + HOSTS + scenes
python3 build.py
npx --yes hyperframes@0.9.7 lint
npx --yes hyperframes@0.9.7 check --json
npx --yes hyperframes@0.9.7 snapshot --review
npx --yes hyperframes@0.9.7 render --quality looks -o renders/<new-name>-v1.mp4
```

`.claude/video/*/` folders are hidden in Finder (dot folder); tell the user <kbd>Cmd</kbd>+<kbd>Shift</kbd>+<kbd>.</kbd>
or copy the MP4 to `~/Desktop` when they ask where it is.

## Film types and lengths

| Type | Length | Shape |
|---|---|---|
| Promo / launch (default) | 25–45 s | hook → 4–6 demo verbs → second world (shop, phone, sheet) → proof grid → end card |
| Feature film (one feature) | 15–25 s | hook with the feature already working → 2–3 verbs → result → end card |
| Social cut (9:16 or 1:1) | 10–20 s | same scenes, `data-resolution` portrait/square, headline larger, product cropped to the action |
| Long-form explainer ("7 ways to use Ninja Tables") | 3–10 min | needs a presenter or a HeyGen avatar (paid); reuse chapter cards with big numerals + kinetic callouts from the YouTube reference (`REFERENCE-ANALYSIS.md` §2). Ask before planning one |

## Feature ideas that film well (verified in the plugin)

Upload a CSV/Excel/JSON file · Table Design › Colors presets (Teal, Default …) · front-end search · column sort ·
Conditional formatting (Pro) · Stackable Table on phones · ⌘K command palette in the new admin ·
FluentCart / WooCommerce product tables with Add To Cart · Google Sheets and WP Posts (Pro) as live sources ·
Ninja Charts from a table · Drag & Drop builder (Pro). Check `.claude/plugin-memory/CATALOG.md` for the
screen and files before scripting any other feature.

## References

- `references/story-and-script.md`: the one thing, storylines, beats, copy rules, banned words and tells.
- `references/house-style.md`: the layer grammar with exact tokens (colours, type, sizes, timings, eases).
- `references/build-pattern.md`: HyperFrames contract, the `build.py` helpers, gotchas we hit and their fixes.
- `references/capture.md`: getting real UI, data, colours and images from the local site.
- `references/review.md`: check warnings, snapshot review, P0/P1/P2 notes, render and delivery.
- `references/sound.md`: music and effects, and what to do without a source.

Upstream HyperFrames skills (deeper detail, optional): `npx hyperframes skills update` installs `/hyperframes`,
`/hyperframes-cli`, `/hyperframes-registry`, `/media-use`. Docs: https://hyperframes.heygen.com/llms.txt.

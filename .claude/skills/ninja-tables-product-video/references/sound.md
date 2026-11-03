# Sound

A promo over ~15 s gets a music bed plus a few effects on visible actions, unless it is made to autoplay muted
(feeds) or the user asked for silence. The reference used "Chill House Vol. 7" by Sascha Ende (CC BY, credited
in the end-card footer), around 120 BPM, which is why the film changes every 2 s.

## 1. Getting music, in order

1. **The user's own track** (best: they own the licence). Drop it in `assets/music.mp3`.
2. **HeyGen catalog** via `/media-use` (`bgm`), after `npx hyperframes auth login`. Search by feel and tempo,
   not subject: "warm chill house, 120 bpm, bright, upbeat".
3. **A CC-BY or royalty-free track** the user picks (e.g. from the artist above); add the credit line to the end card.
4. **None available** → deliver silent, say so in one line, and say how to add it. Don't write music in code or
   build an audio chain nobody can hear.

## 2. Wiring it

```html
<audio id="bgm" src="assets/music.mp3" data-start="0" data-duration="TOTAL" data-track-index="9" data-volume="0.8"></audio>
```

- Music only: the music is the clock. Run `npx hyperframes beats assets/music.mp3` and move the bar grid
  (`HOSTS`, `BEAT` in `build.py`) onto its strong beats; land the first light leak and the end-card CTA on downbeats.
- Enter at the track's strongest bar, not its intro; end on a bar line with a short fade under the end card.

## 3. Effects (few and exact)

| Sound | Only on |
|---|---|
| click | a real 👆 tap on screen |
| whoosh | a light-leak seam (rotate 2–3 takes) |
| pop | a badge, pill or tile landing |
| riser → impact | the end-card mark, once |

Place each so its peak lands one frame after the picture. Hits sit 3–6 dB over the bed.

## 4. Levels and checks

Mix around −16 to −14 LUFS, true peak ≤ −1 dBTP (`npx hyperframes normalize-audio`). After render:
`npx hyperframes audio renders/<file>.mp4 --json` to confirm sound is present and hits line up. Say in `REVIEW.md`
that it was measured, not heard.

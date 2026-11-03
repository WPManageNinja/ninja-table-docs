# Review, render, deliver

You wrote the timeline, so you know what happens. The viewer sees it once, at full speed, often on a phone.
`check` catches what is broken; this pass catches what is weak. Do it before every render.

## 1. Measure

`npx hyperframes check --json` must show 0 errors. Then read every warning:

| Warning | Means | Usual fix |
|---|---|---|
| `first_frame_empty` | frame 0 (the social thumbnail) is blank | put the eyebrow/first word on screen at t = 0 |
| `line_unread` | a line is on screen too briefly | 0.3 s per word + 0.5 s; last line ≥ 2 s |
| `dead_stretch` | > 3 s with nothing changing | add story (a reveal, a click), never a wobble |
| `text_below_floor` | text < ~28 px at 1080p | enlarge, or mark it as deliberately unreadable texture (raw CSV wall) |
| `film_silent` | > 15 s with no audio | add music, or keep and say why |
| contrast | low contrast pair | fix, unless it is the plugin's real preset colour (say so) |

A warning is a question: fix it, or keep it on purpose and write why in `REVIEW.md`.

## 2. Look

1. `npx hyperframes snapshot --review`: scene sheet, a strip across every cut (−0.2 → +0.2 s), phone sheet at 360 px.
   Open all three with Read.
2. `snapshot --at` on every beat's landed moment (about 1.4 s into each bar).
3. `snapshot --range A,B --frames 8` around the light leaks, the search/sort row moves and the end card.

Ask, per sheet:

- Describe each beat frame in one sentence as a stranger would. Anything you'd have to explain is a P0.
- Do the frames, in order, tell the story, each causing the next? Does each match its line in `SPEC.md`?
- Does it read as the real product, or as a mockup? Are labels, prices and colours the real ones?
- Framing: crops, text at the edge, collisions mid-move, the cursor tip on its target.
- Timing: a read shorter than its words, a pop with no move, a jump at a seam, everything on one curve.
- Tells from `story-and-script.md` §5.
- Words covered: do the pictures alone still tell it? Phone sheet: can every line be read at 360 px?

## 3. Notes and fixes

One line each: `t=4.2s · where · problem → exact change · what stays`. Rank:
**P0** breaks the read or is wrong · **P1** weakens the film (dead stretch, soft payoff, jumpy seam) · **P2** polish.
Fix every P0 and the worthwhile P1s (text first, then timing, then detail), rebuild, snapshot only what changed.
Never score the film out of 10. A busy film: remove a third of the motion, keep the moves that lead the eye.

For an independent read, give a Sonnet subagent only `SPEC.md` and the three sheets and ask for P0/P1 lines
(include the "this PC only, never the Chrome extension or other PC" rule in its prompt).

## 4. Render and deliver

```bash
npx --yes hyperframes@0.9.7 render --quality looks -o renders/<name>-v<N>.mp4
ffprobe -v error -show_entries format=duration:stream=width,height,r_frame_rate,codec_type -of compact renders/<name>-v<N>.mp4
```

Bump `v<N>` for every delivered version; keep earlier ones until the user picks.

Write `REVIEW.md` at the project root (the next turn reads it before changing anything):

- creative calls made, and the storylines not built;
- what was measured vs only looked at; what nobody checked (sound is measured, never heard);
- the weakest shot and what you'd change with more time (P1/P2 list);
- warnings kept on purpose, and why;
- local-site side effects (table/page ids) and the cleanup command.

In the reply: the full absolute path of the MP4, its length and size, the short form of `REVIEW.md`, and
`open -R "<path>"` to reveal it in Finder.

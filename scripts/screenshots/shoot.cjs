#!/usr/bin/env node
// Declarative screenshot runner for Ninja Tables docs (ported from the FluentCart docs runner).
//
//   npm run shots -- scripts/screenshots/plans/<plan>.json [--only=name1,name2] [--out=/abs/tmp/dir]
//   --out writes the .webp files somewhere else (a dry run / preview that leaves public/images untouched)
//
// A plan is JSON:
// {
//   "site": "http://localhost:10013",                      (optional, default)
//   "outDir": "public/images/<category>/<short-slug>",     (required; created if missing)
//   "viewport": {"width":1600,"height":1100},              (optional, default)
//   "doc": "docs/<category>/<slug>.md",                    (optional, informational: the page the plan feeds)
//   "steps": [ ...see STEP TYPES below... ]
// }
//
// STEP TYPES (one key per step object):
//   {"admin": "/tables/895/configuration"}          go to an admin SPA hash route (logs in first, hides WP chrome,
//                                                   welcome banner and the telemetry opt-in dialog)
//   {"front": "/?ninjatable_preview=895", "hideThemeHeader": true}   go to a front-end URL (logged in; hides admin bar)
//       optional "waitUntil": "load" for pages that never go network-idle
//   {"viewport": {"width":1600,"height":1400}}      resize; applies to every later step (put it before the "admin"
//                                                   step it is for). Not needed with "crop": "auto".
//   {"click": <sel>}                                click; <sel> = "css" | {"text":"Save"} | {"role":"button","name":"^save$"} | {"selector":"css","hasText":"Ajax"}
//   {"hover": <sel>}                                hover (tooltips, row actions)
//   {"fill": {"selector": <sel>, "value": "..."}}   type into an input
//   {"fillByLabel": {"label":"Table Title","value":"Product Catalog"}}   input under a visible label (NOT saved)
//   {"setColor": {"label":"Header background","hex":"#01D5C6"}}         Element Plus colour picker in that label's row
//   {"scrollTo": <sel>}                             scroll an element into view
//   {"hideCss": ".some-noise"}                      display:none for anything noisy
//   {"scrollTop": true}                             reset every scroll container
//   {"css": "..."}                                  inject arbitrary CSS
//   {"eval": "..."}                                 run JS in the page
//   {"wait": 800}                                   ms
//   {"shot": {                                      take + annotate + export
//       "name": "1.-Table-Configuration-Tab",        -> <outDir>/<name>.webp  (repo naming: <n>.-<Short-Label>)
//       "clip": "app" | "viewport" | {"element": <sel>, "pad": 24} | {"rows": ["Rendering Setting"], "pad": 24} | {"x":0,"y":0,"width":800,"height":600},
//       "arrows": [{"target": <sel> | {"row":"Rendering Setting","part":"control|label|row"}, "from": "left|right|top|bottom", "len": 150}],
//       "highlights": [<sel>],
//       "crop": "auto" | {"height": 1500},           "auto" (app shots): grow the viewport to fit the whole
//                                                    screen and end 24px under the content. Prefer it.
//                                                    Object = manual crop in image px (left/top/width optional)
//       "export": false                              (keep the raw PNG only, e.g. an input for "stack")
//   }}
//   clip {"element": <sel>, "pad": 40, "extendRight": true}  keeps the element's left edge but runs to the
//       viewport's right edge with a mirrored margin
//   {"stack": {"raws": ["before","after"], "labels": ["Before: ...","After: ..."], "name": "3.-Before-After"}}
//       vertical before/after composite from earlier shots' RAW pngs (by shot name)
//
// Raw PNGs go to scripts/screenshots/raw/ (gitignored). Only the .webp in outDir is committed.

const fs = require('fs');
const path = require('path');
const { Harness } = require('./lib/harness.cjs');
const { annotate, stack } = require('./lib/annotate.cjs');

const REPO = path.resolve(__dirname, '..', '..');

function parseArgs() {
  const args = process.argv.slice(2);
  const plan = args.find(a => !a.startsWith('--'));
  const only = (args.find(a => a.startsWith('--only=')) || '').replace('--only=', '').split(',').filter(Boolean);
  const out = (args.find(a => a.startsWith('--out=')) || '').replace('--out=', '');
  return { plan, only, out };
}

async function main() {
  const { plan: planFile, only, out: outOverride } = parseArgs();
  if (!planFile) { console.error('usage: npm run shots -- <plan.json> [--only=name,name] [--out=dir]'); process.exit(1); }
  const plan = JSON.parse(fs.readFileSync(path.resolve(planFile), 'utf8'));
  if (!plan.outDir) throw new Error('plan.outDir is required');
  if (!/^public\/images\//.test(plan.outDir)) throw new Error('plan.outDir must start with public/images/ (the only folder VitePress serves)');
  const outDir = outOverride ? path.resolve(outOverride) : path.resolve(REPO, plan.outDir);
  fs.mkdirSync(outDir, { recursive: true });

  const h = new Harness({ site: plan.site, viewport: plan.viewport, user: plan.user, pass: plan.pass });
  await h.launch();
  const raws = {};
  let n = 0;

  try {
    for (const step of plan.steps) {
      n++;
      const type = Object.keys(step).find(k => !['hideThemeHeader', 'login', 'waitUntil'].includes(k));
      const v = step[type];
      const tag = `[${n}] ${type}`;
      switch (type) {
        case 'admin': console.log(tag, v); await h.gotoAdmin(v); break;
        case 'front': console.log(tag, v); await h.gotoFront(v, { hideThemeHeader: step.hideThemeHeader !== false, login: step.login !== false, waitUntil: step.waitUntil || 'networkidle' }); break;
        case 'viewport': console.log(tag, JSON.stringify(v)); await h.setViewport(v); break;
        case 'click': console.log(tag, JSON.stringify(v)); await h.click(v); break;
        case 'hover': console.log(tag, JSON.stringify(v)); await h.hover(v); break;
        case 'fill': console.log(tag, JSON.stringify(v.selector)); await h.fill(v.selector, v.value); break;
        case 'fillByLabel': console.log(tag, v.label); await h.fillByLabel(v.label, v.value); break;
        case 'setColor': console.log(tag, v.label, v.hex); await h.setColor(v.label, v.hex); break;
        case 'scrollTo': console.log(tag, JSON.stringify(v)); await h.scrollTo(v); break;
        case 'hideCss': console.log(tag, v); await h.hideCss(v); break;
        case 'scrollTop': console.log(tag); await h.scrollTop(); break;
        case 'css': console.log(tag, v.slice(0, 60)); await h.page.addStyleTag({ content: v }); await h.page.waitForTimeout(300); break;
        case 'eval': console.log(tag, v.slice(0, 60)); await h.page.evaluate(v); await h.page.waitForTimeout(600); break;
        case 'wait': console.log(tag, v); await h.page.waitForTimeout(v); break;
        case 'shot': {
          if (only.length && !only.includes(v.name)) { console.log(tag, v.name, '(skipped)'); break; }
          console.log(tag, v.name);
          const autoCrop = v.crop === 'auto';
          const { file, clip } = await h.shotRaw(v.name, v.clip || 'app', { autoCrop });
          raws[v.name] = file;
          if (v.export === false) { console.log('     -> raw only'); break; }
          const arrows = [];
          for (const a of v.arrows || []) arrows.push({ target: await h.resolveTarget(a.target, clip), from: a.from || 'left', len: a.len || 160 });
          const highlights = [];
          for (const t of v.highlights || []) highlights.push(await h.resolveTarget(t, clip));
          const out = path.join(outDir, `${v.name}.webp`);
          await annotate(file, out, { arrows, highlights, crop: autoCrop ? null : (v.crop || null), scale: h.o.scale });
          const meta = await require('sharp')(out).metadata();
          console.log(`     -> ${outOverride ? out : path.relative(REPO, out)}  ${meta.width}x${meta.height}`);
          break;
        }
        case 'stack': {
          console.log(tag, v.name);
          const files = v.raws.map(r => raws[r] || path.join(h.o.rawDir, `${r}.png`));
          const out = path.join(outDir, `${v.name}.webp`);
          await stack(files, v.labels, out);
          console.log(`     -> ${outOverride ? out : path.relative(REPO, out)}`);
          break;
        }
        default: throw new Error('Unknown step type: ' + type);
      }
    }
  } finally {
    await h.close();
  }
  console.log('done');
}

main().catch(e => { console.error(e); process.exit(1); });

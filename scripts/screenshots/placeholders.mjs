#!/usr/bin/env node
// Bridges the doc pages' screenshot placeholders and the shot runner.
//
//   node scripts/screenshots/placeholders.mjs list [slug ...] [--json]   every <!-- TODO(screenshot): … --> with its
//                                                                         target outDir + file name
//   node scripts/screenshots/placeholders.mjs place <slug> [--dry]       replace each placeholder whose .webp exists
//                                                                         with ![alt](/images/…), leave the rest
//   node scripts/screenshots/placeholders.mjs sheet <slug ...> --out=<file.html>
//                                                                         review gallery: image + placeholder side by side
//   node scripts/screenshots/placeholders.mjs orphans <slug>             files in the page's outDir that no page references
//
// Placeholder format (written by the docs-overhaul skill):
//   <!-- TODO(screenshot): <slug>-<n>
//     screen: …  table: …  state: …  highlight: …  view: admin|frontend  alt: …
//   -->
// outDir = the page's pre-overhaul image folder (page-folders.json), else public/images/<category>/<short-slug>.
// File name = <n>.-<Short-Label>.webp, Short-Label from the alt text (Title-Case-Hyphenated, ≤ 6 words).

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const FOLDERS = JSON.parse(fs.readFileSync(path.join(REPO, 'scripts/screenshots/page-folders.json'), 'utf8'));
const RE = /<!-- TODO\(screenshot\): ([a-z0-9-]+)\n([\s\S]*?)-->/g;
const STOP = new Set(['how', 'to', 'with', 'in', 'the', 'a', 'an', 'and', 'of', 'for', 'your', 'ninja', 'tables', 'table', 'on', 'from']);

function pages() {
  const out = {};
  for (const cat of fs.readdirSync(path.join(REPO, 'docs'))) {
    const dir = path.join(REPO, 'docs', cat);
    if (!fs.statSync(dir).isDirectory()) continue;
    for (const f of fs.readdirSync(dir)) if (f.endsWith('.md')) out[f.slice(0, -3)] = { cat, file: path.join(dir, f) };
  }
  return out;
}

function shortSlug(slug) {
  const s = slug.split('-').filter(w => !STOP.has(w)).join('-');
  return (s || slug).slice(0, 28).replace(/-+$/, '');
}

function label(alt) {
  const words = alt.replace(/[^A-Za-z0-9 ]+/g, ' ').split(/\s+/).filter(Boolean)
    .filter((w, i) => !(i === 0 && /^(the|a|an)$/i.test(w))).slice(0, 6);
  while (words.length > 2 && /^(the|a|an|with|of|and|to|on|in|for|from|reading|showing|listing|its|their)$/i.test(words[words.length - 1])) words.pop();
  return words.map(w => w[0].toUpperCase() + w.slice(1)).join('-') || 'Screenshot';
}

function parse(slug, page) {
  const text = fs.readFileSync(page.file, 'utf8');
  const outDir = FOLDERS[slug] || `public/images/${page.cat}/${shortSlug(slug)}`;
  const items = [];
  let m, n = 0;
  while ((m = RE.exec(text))) {
    n++;
    const fields = {};
    for (const line of m[2].split('\n')) {
      const k = line.match(/^\s*([a-z]+):\s*(.*)$/);
      if (k) fields[k[1]] = k[2].trim();
    }
    const line = text.slice(0, m.index).split('\n').length;
    const name = `${n}.-${label(fields.alt || m[1])}`;
    items.push({ id: m[1], line, ...fields, outDir, name, file: `${outDir}/${name}.webp`, raw: m[0] });
  }
  RE.lastIndex = 0;
  return { slug, doc: path.relative(REPO, page.file), outDir, items, text };
}

const [cmd, ...rest] = process.argv.slice(2);
const flags = Object.fromEntries(rest.filter(a => a.startsWith('--')).map(a => { const [k, v] = a.slice(2).split('='); return [k, v ?? true]; }));
const slugs = rest.filter(a => !a.startsWith('--'));
const all = pages();
const pick = (slugs.length ? slugs : Object.keys(all)).map(s => {
  if (!all[s]) { console.error(`unknown page: ${s}`); process.exit(1); }
  return parse(s, all[s]);
}).filter(p => p.items.length || slugs.length);

if (cmd === 'list') {
  if (flags.json) {
    console.log(JSON.stringify(pick.map(({ text, ...p }) => ({ ...p, items: p.items.map(({ raw, ...i }) => i) })), null, 1));
  } else {
    let total = 0;
    for (const p of pick) {
      console.log(`\n${p.doc}  →  ${p.outDir}`);
      for (const i of p.items) {
        total++;
        const done = fs.existsSync(path.join(REPO, i.file)) ? 'exists' : i.blocked ? 'BLOCKD' : '      ';
        console.log(`  ${done}  L${String(i.line).padEnd(4)} ${i.name}.webp  [${i.view || '?'}] ${i.screen || ''}${i.table && i.table !== '-' ? '  (' + i.table + ')' : ''}${i.blocked ? '  blocked: ' + i.blocked : ''}`);
      }
    }
    console.log(`\n${total} placeholders on ${pick.length} pages`);
  }
} else if (cmd === 'place') {
  if (slugs.length !== 1) { console.error('place takes exactly one slug'); process.exit(1); }
  const p = pick[0];
  let text = p.text, placed = 0, left = 0;
  for (const i of p.items) {
    if (!fs.existsSync(path.join(REPO, i.file))) { left++; continue; }
    const alt = (i.alt || i.id).replace(/[[\]]/g, '');
    text = text.replace(i.raw, `![${alt}](/${i.file.replace(/^public\//, '')})`);
    placed++;
  }
  if (!flags.dry) fs.writeFileSync(path.join(REPO, p.doc), text);
  console.log(`${p.doc}: ${placed} placed, ${left} placeholders left${flags.dry ? ' (dry run)' : ''}`);
} else if (cmd === 'sheet') {
  const out = flags.out ? path.resolve(String(flags.out)) : null;
  if (!out) { console.error('sheet needs --out=<file.html>'); process.exit(1); }
  const esc = s => String(s || '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const imgDir = flags.images ? path.resolve(String(flags.images)) : null;
  const rows = pick.flatMap(p => p.items.map(i => {
    const f = imgDir ? path.join(imgDir, `${i.name}.webp`) : path.join(REPO, i.file);
    const img = fs.existsSync(f) ? `<img src="file://${esc(f)}">` : '<div class="missing">not taken yet</div>';
    return `<section><div class="meta"><b>${esc(p.slug)} · ${esc(i.name)}</b><br>
      <i>screen</i> ${esc(i.screen)}<br><i>table</i> ${esc(i.table)}<br><i>state</i> ${esc(i.state)}<br>
      <i>highlight</i> ${esc(i.highlight)}<br><i>view</i> ${esc(i.view)}<br><i>alt</i> ${esc(i.alt)}</div>${img}</section>`;
  }));
  fs.writeFileSync(out, `<!doctype html><meta charset="utf-8"><title>Screenshot review</title><style>
    body{font:14px -apple-system,Helvetica,sans-serif;background:#f3f4f6;margin:24px}
    section{display:grid;grid-template-columns:320px 1fr;gap:20px;background:#fff;border-radius:10px;padding:16px;margin:0 0 20px}
    .meta{line-height:1.6;color:#374151} i{color:#9ca3af;font-style:normal;display:inline-block;width:70px}
    img{max-width:100%;border:1px solid #e5e7eb;border-radius:6px} .missing{color:#dc2626;padding:40px}</style>
    <h1>Screenshot review (${rows.length})</h1>${rows.join('\n')}`);
  console.log(`wrote ${out} (${rows.length} shots)`);
} else if (cmd === 'orphans') {
  const p = pick[0];
  const dir = path.join(REPO, p.outDir);
  if (!fs.existsSync(dir)) { console.log('(no folder yet)'); process.exit(0); }
  const refs = new Set();
  for (const s of Object.values(all)) for (const r of fs.readFileSync(s.file, 'utf8').matchAll(/\]\(\/images\/([^)]+)\)/g)) refs.add('public/images/' + r[1]);
  for (const f of fs.readdirSync(dir)) {
    const rel = `${p.outDir}/${f}`;
    if (!refs.has(rel)) console.log(rel);
  }
} else {
  console.log('usage: placeholders.mjs list|place|sheet|orphans …  (see header)');
}

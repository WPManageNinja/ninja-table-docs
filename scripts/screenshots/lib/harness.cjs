// Headless-Chrome harness for Ninja Tables doc screenshots.
// Drives the REAL Google Chrome on this Mac via playwright-core (no browser download,
// no macOS permissions, same /etc/hosts as the shell, so Local-by-Flywheel sites resolve).
// Ported from the FluentCart docs runner. See .claude/skills/ninja-tables-doc-screenshots/SKILL.md.

const path = require('path');
const fs = require('fs');

function loadPlaywright() {
  try { return require('playwright-core'); } catch (e) { /* fall through */ }
  throw new Error('playwright-core not found. Run `npm install` in the docs repo (no browser download needed).');
}

const { chromium } = loadPlaywright();

const DEFAULTS = {
  // Local "cart" site. Ninja Tables runs from wp-content/plugins/ninja-tables-dev (git clone,
  // branch = what the site shows) + ninja-tables-pro.
  site: 'http://localhost:10013',
  user: 'admin',
  pass: 'admin',
  adminPage: 'ninja_tables',
  appRoot: '#data-tables-app',
  chrome: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  viewport: { width: 1600, height: 1100 },
  scale: 2,
  // The Ninja Tables admin app sits below the WP admin bar (32px) and right of the
  // WP admin menu (160px). We hide both but keep their space.
  adminClip: { x: 160, y: 32 },
  rawDir: path.join(__dirname, '..', 'raw'),
};

// Ancestors that count as one "settings row" for {row: "<label>"} targets and {rows: [...]} clips.
const ROW_SELECTOR = '.nt-setting-row, .nt-field, .nt-config__row, .nt-settings-q, .el-form-item';

class Harness {
  constructor(opts = {}) {
    const clean = Object.fromEntries(Object.entries(opts).filter(([, v]) => v !== undefined && v !== null));
    this.o = { ...DEFAULTS, ...clean, viewport: { ...DEFAULTS.viewport, ...(opts.viewport || {}) } };
    fs.mkdirSync(this.o.rawDir, { recursive: true });
    this.loggedIn = false;
  }

  async launch() {
    this.browser = await chromium.launch({ executablePath: this.o.chrome, headless: true });
    this.context = await this.browser.newContext({
      viewport: this.o.viewport, deviceScaleFactor: this.o.scale,
      colorScheme: 'light', reducedMotion: 'reduce',
    });
    // Before any page script runs: light theme (shared Fluent key, see ThemeToggle.vue) and, unless the
    // plan shoots onboarding itself ("onboarding": true), the welcome banner + Getting started card dismissed.
    // These are per-browser localStorage flags (onboardingStore.js); nothing is saved on the site.
    await this.context.addInitScript(({ onboarding }) => {
      try {
        localStorage.setItem('fluent_theme_mode', 'light');
        localStorage.setItem('ninjatable_theme', 'light');
        if (!onboarding) {
          localStorage.setItem('ninjatable_onboarding_banner', 'hidden');
          localStorage.setItem('ninjatable_onboarding_checklist', 'hidden');
        }
      } catch (e) { /* storage blocked */ }
    }, { onboarding: !!this.o.onboarding });
    this.page = await this.context.newPage();
    return this.page;
  }

  // What makes a capture look like a calm, human screenshot instead of a mid-frame grab:
  // no animations or half-open transitions, no scrollbars, no blinking caret, no stray focus ring,
  // and web fonts loaded before the shot.
  async naturalLook() {
    const p = this.page;
    await p.addStyleTag({ content: `
      *, *::before, *::after { transition: none !important; animation: none !important; caret-color: transparent !important; }
      ::-webkit-scrollbar { width: 0 !important; height: 0 !important; background: transparent !important; }
      * { scrollbar-width: none !important; }
      :focus, :focus-visible { outline: none !important; }
      #vite-error-overlay, vite-error-overlay, #qm, #query-monitor-main { display: none !important; }
    ` });
    await p.evaluate(() => { if (document.activeElement && document.activeElement !== document.body) document.activeElement.blur(); });
    await p.evaluate(() => (document.fonts && document.fonts.ready) || null).catch(() => {});
    await p.mouse.move(0, 0);
    await p.waitForTimeout(250);
  }

  async close() { if (this.browser) await this.browser.close(); }

  async setViewport(v) {
    this.o.viewport = { ...this.o.viewport, ...v };
    await this.page.setViewportSize(this.o.viewport);
    await this.page.waitForTimeout(400);
  }

  // WP login. The redirect after submit is occasionally slow/missed, so retry.
  async login() {
    const p = this.page;
    for (let attempt = 1; attempt <= 4; attempt++) {
      await p.goto(`${this.o.site}/wp-login.php`, { waitUntil: 'load', timeout: 90000 });
      await p.waitForTimeout(800);
      await p.fill('#user_login', this.o.user);
      await p.fill('#user_pass', this.o.pass);
      await p.waitForTimeout(300);
      await p.press('#user_pass', 'Enter');
      try {
        await p.waitForURL('**/wp-admin/**', { timeout: 20000, waitUntil: 'commit' });
        this.loggedIn = true;
        return;
      } catch (e) {
        const err = await p.locator('#login_error').textContent().catch(() => '');
        console.log(`  login attempt ${attempt} did not redirect${err ? ': ' + err.trim() : ''}`);
      }
    }
    throw new Error('login failed after 4 attempts');
  }

  // Admin SPA route, e.g. "/" (Tables list), "/tools/global_settings", "/tables/895/configuration".
  async gotoAdmin(hash) {
    if (!this.loggedIn) await this.login();
    const p = this.page;
    await p.goto(`${this.o.site}/wp-admin/admin.php?page=${this.o.adminPage}#${hash}`, { waitUntil: 'networkidle', timeout: 90000 });
    await p.waitForSelector(`${this.o.appRoot} > *`, { timeout: 30000 });
    await p.waitForTimeout(1500);
    await this.cleanAdminChrome();
  }

  // Any front-end URL (path or absolute), e.g. "/?ninjatable_preview=895". Logged in by default
  // because the dev site sits in "coming soon" mode for visitors.
  async gotoFront(url, { hideThemeHeader = true, login = true, waitUntil = 'networkidle', contentWidth = 1180 } = {}) {
    if (login && !this.loggedIn) await this.login();
    const p = this.page;
    const full = /^https?:/.test(url) ? url : this.o.site + url;
    await p.goto(full, { waitUntil, timeout: 90000 });
    await p.waitForTimeout(1200);
    await p.addStyleTag({ content: `
      #wpadminbar { display: none !important; } html { margin-top: 0 !important; }
      /* what a visitor sees: no admin-only "Edit Table" link */
      .nt_edit_link { display: none !important; }
      /* a normal wide content column, so tables are not squeezed by the demo theme's narrow default */
      ${contentWidth ? `.is-layout-constrained > :where(:not(.alignleft):not(.alignright):not(.alignfull)), .entry-content > * { max-width: ${contentWidth}px !important; }` : ''}
      ${hideThemeHeader ? 'header.wp-block-template-part, .wp-site-blocks > header, .wp-block-template-part:first-child { display: none !important; }' : ''}
    ` });
    await this.naturalLook();
  }

  // Hide WP admin chrome without changing layout, plus notices and the Ninja Tables
  // one-off nags (welcome banner, telemetry opt-in dialog) that are not part of the feature.
  async cleanAdminChrome() {
    const p = this.page;
    await p.addStyleTag({ content: `
      #wpadminbar, #adminmenumain, #adminmenuback, #adminmenuwrap { visibility: hidden !important; }
      #wpfooter { display: none !important; }
      .notice, .update-nag, .nt-welcome { display: none !important; }
    ` });
    await p.evaluate(() => {
      // Telemetry opt-in ("We made a few tweaks to Ninja Tables"). Hide, never click: clicking
      // Skip / Opt-in changes a site option.
      document.querySelectorAll('.el-dialog__title').forEach(t => {
        if (/^We made a few tweaks/.test(t.textContent.trim())) {
          const overlay = t.closest('.el-overlay');
          if (overlay) overlay.style.display = 'none';
        }
      });
      document.body.classList.remove('el-popup-parent--hidden');
      document.body.style.overflow = '';
    });
    await this.naturalLook();
  }

  async hideCss(selector) {
    await this.page.addStyleTag({ content: `${selector} { display: none !important; }` });
    await this.page.waitForTimeout(200);
  }

  async scrollTop() {
    await this.page.evaluate(() => {
      window.scrollTo(0, 0);
      document.querySelectorAll('*').forEach(e => { if (e.scrollTop) e.scrollTop = 0; });
    });
    await this.page.waitForTimeout(300);
  }

  async scrollTo(sel) {
    await this.loc(sel).scrollIntoViewIfNeeded();
    await this.page.waitForTimeout(400);
  }

  // Locator helpers -------------------------------------------------------

  loc(sel) {
    // {text: "Save"} matches exact visible text; {role, name} = accessible role + name regex;
    // {selector, hasText} = CSS narrowed by text.
    if (typeof sel === 'string') return this.page.locator(sel).first();
    if (sel.text) return this.page.getByText(sel.text, { exact: true }).first();
    if (sel.role) return this.page.getByRole(sel.role, { name: new RegExp(sel.name, 'i') }).first();
    if (sel.hasText) return this.page.locator(sel.selector || '*', { hasText: sel.hasText }).first();
    throw new Error('Unsupported selector: ' + JSON.stringify(sel));
  }

  // Bounding box of a settings row for a visible label text, plus the control inside it.
  // A row is the nearest ROW_SELECTOR ancestor (.nt-config__row on the table editor tabs),
  // falling back to the first ancestor wider than 900px.
  async settingsRow(labelText) {
    return this.page.evaluate(({ txt, rowSel }) => {
      const visible = e => { const r = e.getBoundingClientRect(); return r.width > 0 && r.height > 0; };
      const lab = Array.from(document.querySelectorAll('body *'))
        .find(e => e.children.length === 0 && e.textContent.trim() === txt && visible(e));
      if (!lab) return null;
      let el = lab.closest(rowSel);
      if (!el) { el = lab; for (let i = 0; i < 8 && el; i++) { if (el.getBoundingClientRect().width > 900) break; el = el.parentElement; } }
      const r = el.getBoundingClientRect();
      const ctrl = el.querySelector('.el-input-number, .nt-segmented, .nt-radio-cards, .el-radio-group, [role="radiogroup"], .el-select, .el-switch, .el-input, .el-color-picker, input, textarea');
      const c = ctrl ? ctrl.getBoundingClientRect() : null;
      const l = lab.getBoundingClientRect();
      return {
        row: { x: r.x, y: r.y, width: r.width, height: r.height },
        control: c ? { x: c.x, y: c.y, width: c.width, height: c.height } : null,
        label: { x: l.x, y: l.y, width: l.width, height: l.height },
      };
    }, { txt: labelText, rowSel: ROW_SELECTOR });
  }

  // Input actions ---------------------------------------------------------

  async click(sel) { await this.loc(sel).click(); await this.page.waitForTimeout(500); }

  async hover(sel) { await this.loc(sel).hover(); await this.page.waitForTimeout(500); }

  async fill(sel, value) { await this.loc(sel).fill(String(value)); await this.page.waitForTimeout(200); }

  // Type into the input that belongs to a visible label. Sets the value through the native
  // setter so Vue picks it up. NOT saved.
  async fillByLabel(label, value) {
    const ok = await this.page.evaluate(({ label, value }) => {
      const lab = Array.from(document.querySelectorAll('label, span, div, p, strong'))
        .find(e => e.children.length === 0 && e.textContent.trim() === label);
      if (!lab) return false;
      let el = lab, input = null;
      for (let i = 0; i < 6 && el && !input; i++) { input = el.querySelector('input:not([type=checkbox]):not([type=radio]), textarea'); if (!input) el = el.parentElement; }
      if (!input) return false;
      const proto = input.tagName === 'TEXTAREA' ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
      Object.getOwnPropertyDescriptor(proto, 'value').set.call(input, value);
      input.dispatchEvent(new Event('input', { bubbles: true }));
      input.dispatchEvent(new Event('change', { bubbles: true }));
      return true;
    }, { label, value });
    if (!ok) throw new Error('fillByLabel: no input found under label ' + JSON.stringify(label));
    await this.page.waitForTimeout(200);
  }

  // Element Plus colour picker in the same row as a visible label.
  async setColor(label, hex) {
    const p = this.page;
    const row = await this.settingsRow(label);
    if (!row) throw new Error('setColor: label not found: ' + label);
    const triggers = p.locator('.el-color-picker__trigger');
    const n = await triggers.count();
    let best = null, bestD = Infinity;
    for (let i = 0; i < n; i++) {
      const b = await triggers.nth(i).boundingBox();
      if (!b) continue;
      const d = Math.abs((b.y + b.height / 2) - (row.row.y + row.row.height / 2));
      if (d < bestD) { bestD = d; best = triggers.nth(i); }
    }
    if (!best) throw new Error('setColor: no colour picker near ' + label);
    await best.click();
    const dropdown = p.locator('.el-color-dropdown:visible, .el-color-picker__panel:visible').last();
    await dropdown.waitFor({ state: 'visible', timeout: 5000 });
    const input = dropdown.locator('input').first();
    await input.fill(hex);
    await input.press('Enter');
    const ok = dropdown.locator('button', { hasText: /^(OK|Confirm)$/i }).first();
    if (await ok.count()) await ok.click();
    await p.waitForTimeout(400);
  }

  // Screenshots -----------------------------------------------------------

  // Resolve a clip spec to CSS-pixel page coordinates.
  //   "app"                       -> the Ninja Tables admin app region (default for admin pages)
  //   "viewport"                  -> whole viewport
  //   {element: sel, pad}         -> that element's box (+pad)
  //   {rows: [label,...], pad}    -> union of settings rows (+pad)
  //   {x, y, width, height}       -> explicit CSS px
  async resolveClip(spec = 'app') {
    const vp = this.page.viewportSize();
    if (spec === 'viewport') return { x: 0, y: 0, width: vp.width, height: vp.height };
    if (spec === 'app') {
      const { x, y } = this.o.adminClip;
      return { x, y, width: vp.width - x, height: vp.height - y };
    }
    if (spec.element) {
      const b = await this.loc(spec.element).boundingBox();
      if (!b) throw new Error('clip element not found: ' + JSON.stringify(spec.element));
      const pad = spec.pad || 0;
      const x = Math.max(0, b.x - pad), y = Math.max(0, b.y - pad);
      const width = spec.extendRight ? vp.width - x - x : b.width + pad * 2;
      return { x, y, width, height: b.height + pad * 2 };
    }
    if (spec.rows) {
      const boxes = [];
      for (const label of spec.rows) {
        const r = await this.settingsRow(label);
        if (!r) throw new Error('settings row not found: ' + label);
        boxes.push(r.row);
      }
      const pad = spec.pad == null ? 24 : spec.pad;
      const x1 = Math.min(...boxes.map(b => b.x)) - pad, y1 = Math.min(...boxes.map(b => b.y)) - pad;
      const x2 = Math.max(...boxes.map(b => b.x + b.width)) + pad, y2 = Math.max(...boxes.map(b => b.y + b.height)) + pad;
      return { x: Math.max(0, x1), y: Math.max(0, y1), width: x2 - Math.max(0, x1), height: y2 - Math.max(0, y1) };
    }
    if (spec.width && spec.height) return { x: spec.x || 0, y: spec.y || 0, width: spec.width, height: spec.height };
    throw new Error('Unsupported clip: ' + JSON.stringify(spec));
  }

  // Resolve an arrow/highlight target to IMAGE pixels relative to a clip.
  //   "css" | {text} | {role,name} | {selector,hasText}   -> element box
  //   {row: label, part: 'control'|'label'|'row'}         -> settings row part (default control)
  async resolveTarget(spec, clip) {
    let b;
    if (spec.row) {
      const r = await this.settingsRow(spec.row);
      if (!r) throw new Error('settings row not found: ' + spec.row);
      b = spec.part === 'row' ? r.row : spec.part === 'label' ? r.label : (r.control || r.row);
    } else {
      b = await this.loc(spec).boundingBox();
      if (!b) throw new Error('arrow target not found: ' + JSON.stringify(spec));
    }
    const s = this.o.scale;
    return { x: (b.x - clip.x) * s, y: (b.y - clip.y) * s, width: b.width * s, height: b.height * s };
  }

  // Bottom edge (CSS px) of the visible content inside the plugin app: the lowest visible leaf
  // element. Used by "crop": "auto" so plans never hand-compute crop heights.
  async contentBottom() {
    return this.page.evaluate((root) => {
      const app = document.querySelector(root);
      if (!app) return null;
      let max = 0;
      app.querySelectorAll('*').forEach(e => {
        if (e.children.length) return;
        const r = e.getBoundingClientRect();
        if (r.width === 0 || r.height === 0) return;
        const cs = getComputedStyle(e);
        if (cs.visibility === 'hidden' || cs.display === 'none') return;
        if (r.bottom > max) max = r.bottom;
      });
      return max;
    }, this.o.appRoot);
  }

  // "crop": "auto" on an "app" shot: grow the viewport until the whole screen fits (tall settings
  // pages), then end the clip 24px below the last content.
  async autoFit() {
    let bottom = await this.contentBottom();
    if (bottom == null) return null;
    const vp = this.page.viewportSize();
    if (bottom + 24 > vp.height) {
      await this.setViewport({ height: Math.ceil(bottom + 24) });
      await this.page.waitForTimeout(400);
      bottom = await this.contentBottom();
    }
    return Math.ceil(bottom + 24);
  }

  // Take a raw PNG for the clip; returns { file, clip }.
  async shotRaw(name, clipSpec = 'app', { autoCrop = false } = {}) {
    const fitBottom = autoCrop ? await this.autoFit() : null;
    const clip = await this.resolveClip(clipSpec);
    if (fitBottom) clip.height = Math.min(clip.height, fitBottom - clip.y);
    const vp = this.page.viewportSize();
    clip.width = Math.min(clip.width, vp.width - clip.x);
    clip.height = Math.min(clip.height, vp.height - clip.y);
    const file = path.join(this.o.rawDir, `${name}.png`);
    await this.page.screenshot({ path: file, clip });
    return { file, clip };
  }
}

module.exports = { Harness, DEFAULTS };

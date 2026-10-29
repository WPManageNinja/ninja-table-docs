# Ninja Tables Plugin: Per-Release Doc-Sync Log

Append-only log, **newest at top**. One H2 per release or sync run.
Read the newest entries first: they say what was already done, what was deferred, and which plugin sha
the docs currently describe.

---

## Baseline: plugin memory initialised (October 29, 2026)
- **Source:** free `ninja-tables-dev` branch `redesign` @ `f0b7813e` (header 5.2.18, latest tag `v5.2.18`); Pro folder 5.2.18.
- **Docs state:** commit `200bce7` "Rewrite docs for the redesigned Ninja Tables admin UI" (branch `ninjatable-new-ui`). Every page was rewritten for the new admin UI by 6 writers following `.claude/redesign-audit/WRITING-BRIEF.md`; audit notes are in `.claude/redesign-audit/`.
- **Tooling added:** plugin memory (this folder), `scripts/plugin/*`, the screenshot runner `scripts/screenshots/` (ported from FluentCart, `npm run shots`), the `ninja-tables-screenshotter` subagent (Sonnet), `scripts/qa/diff-build.mjs`, and the skills `ninja-tables-code-to-docs`, `ninja-tables-doc-writer`, the four page-type specialists, `ninja-tables-doc-screenshots`, `ninja-tables-featured-images`, `ninja-tables-deployment`.
- **Demo data:** `scripts/demo-data/seed.sh` seeded 9 tables (~2,700 rows) + 5 pages on cart.local (meta `_nt_demo_seed`). DB backup before seeding: `~/Local Sites/cart/backups/before-demo-seed-20261029-1837.sql`.
- **Screenshot plans:** `table-rendering-settings.json`, `tools-and-settings.json` (both verified as previews only; nothing written to `public/images/` yet).
- **Open questions carried forward:**
  - Most screenshots still show the pre-redesign UI (the rewrite kept old image lines "to be retaken"). The retake queue is `.claude/SCREENSHOT-TODO.md`.
  - The Charts admin, licensing and a few Pro-only screens have not yet been checked against the docs page by page. The `ninja-charts/` pages were not rewritten in the redesign pass (old voice, `> [!Tip]` callouts).
  - Undocumented (from CATALOG `## Gaps`): first-run setup wizard + Getting started checklist (`components/onboarding/OnboardingWizard.vue`, `GettingStarted.vue`); the "What moved" modal and welcome banner; which engines support front-end editing and manual row sort (Pro adds DataTables support); no changelog entry yet for the redesign (HEAD is `v5.2.18-147-gf0b7813e`).
  - Product issues to keep out of the docs until fixed (from the audits): Remote CSV/JSON tile cannot read JSON; no "Chart option on every table"; WP Posts create hint points to a Columns tab that no longer exists; `{current_user_role}` blanks the whole string for logged-out visitors.

---
name: ninja-tables-deployment
description: Use when publishing Ninja Tables docs changes, adding or updating an npm dependency, when the live site (docs.ninjatables.com) does not update after a push, when a remote build fails, or when a second lockfile or a Node version error appears. Covers the pre-push gate, npm-only rule, Node pinning, and live verification.
---

# Ninja Tables Docs Deployment

## What is known

- Repo: `WPManageNinja/ninja-table-docs` (GitHub). Work branch for the redesign: `ninjatable-new-ui`;
  default branch `master`.
- Live site: https://docs.ninjatables.com, served through **Cloudflare** (`server: cloudflare`). The
  sibling FluentCart docs deploy with **Cloudflare Pages auto-building on every push to `master`**, and
  this site is assumed to work the same way. There is no workflow file in this repo; the build config lives
  on the hosting side. **Confirm with the user before relying on this**, and record the answer here.
- Old `/guide/<category>/<slug>` URLs need host-level 301s to `/<slug>` (see CLAUDE.md). Those live on
  the hosting side, not in this repo.

## Publish workflow

1. Local gate: `npm run docs:build` must pass, plus the five image checks in CLAUDE.md. For big changes,
   compare builds: copy `.vitepress/dist` aside first, rebuild, then
   `node scripts/qa/diff-build.mjs <old-dist> .vitepress/dist`.
2. Commit on a branch, merge to `master`, push. Only when the user asks.
3. Verify live with a marker unique to the change, not by eyeballing. A new static asset is the cleanest:
   ```bash
   curl -s -o /dev/null -w '%{http_code}\n' https://docs.ninjatables.com/<new-asset-path>   # 404 → 200
   curl -s https://docs.ninjatables.com/<slug> | grep -o '<expected text>'
   ```
4. Not live after ~30 minutes usually means the remote build failed; logs are only on the hosting
   dashboard. Diagnose from the repo with the checklist below.

## Dependencies: npm only

- `npm install -D <pkg>`. Never `pnpm`/`yarn`. `package-lock.json` is the only lockfile; delete any
  `pnpm-lock.yaml` / `yarn.lock` in the same commit (a stale second lockfile made Cloudflare pick the wrong
  package manager on the FluentCart site and silently drop a dependency).
- Native packages enforce their Node floor at install time. **`sharp` 0.35 needs Node ≥ 20.9**, but
  `package.json` here still says `"engines": { "node": "^18.0.0 || >=20.0.0" }` and there is no
  `.node-version` / `.nvmrc`. If a remote build runs on Node 18 it can fail on `sharp`. The FluentCart fix
  was to pin Node 22 in `.node-version`, `.nvmrc` and `engines` together. Propose that to the user; don't
  change it unasked.
- `playwright-core` and `sharp` are devDependencies used only by local scripts (screenshots, featured
  cards). The VitePress build itself does not need them.

## Quick reference

| Question | Answer |
|---|---|
| Deploy trigger | Push to `master` (assumed, confirm) |
| Hosting | Cloudflare (Pages assumed) |
| Package manager | npm, single `package-lock.json` |
| Pre-push gate | `npm run docs:build` + image checks |
| Live check | curl a change-specific marker |
| Build logs | hosting dashboard only |

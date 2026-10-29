#!/usr/bin/env bash
# Fetch + fast-forward the Ninja Tables plugin clone so later reads see the latest code.
# The clone carries local dev edits (config/app.php env=dev, vite.config.mjs); --ff-only
# refuses rather than merging over them. Read-only with respect to the docs repo.
set -euo pipefail
source "$(dirname "$0")/_paths.sh"
require_plugin_git

echo "Plugin repo:    $PLUGIN_PATH"
echo "Current branch: $(git -C "$PLUGIN_PATH" branch --show-current)"
echo "Local changes:"; git -C "$PLUGIN_PATH" status --short | sed 's/^/  /'
echo ""
echo "Fetching all remotes + tags..."
git -C "$PLUGIN_PATH" fetch --all --tags --prune
echo ""
echo "Pulling (fast-forward only)..."
git -C "$PLUGIN_PATH" pull --ff-only
echo ""
echo "Done. HEAD is now:"
git -C "$PLUGIN_PATH" log -1 --oneline
echo "Pro version (folder, not git): $(grep -m1 -E '^\s*\*?\s*Version:' "$PRO_PATH/ninja-tables-pro.php" | sed 's/.*Version:\s*//')"

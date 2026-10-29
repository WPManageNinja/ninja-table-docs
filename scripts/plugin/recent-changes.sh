#!/usr/bin/env bash
# List the last N commits in the Ninja Tables plugin with changed-file stats, plus recent tags.
# Usage: ./scripts/plugin/recent-changes.sh [N]   (default N=20)
set -euo pipefail
source "$(dirname "$0")/_paths.sh"
require_plugin_git
N="${1:-20}"

echo "Last $N commits in $PLUGIN_PATH ($(git -C "$PLUGIN_PATH" branch --show-current)):"
echo ""
git -C "$PLUGIN_PATH" log -n "$N" --pretty=format:'%h %ad %s' --date=short --shortstat \
  | awk '/^[0-9a-f]{7,} / { print ""; print; next } NF > 0 { print "    " $0 }'
echo ""
echo "---"
echo "Recent tags:"
git -C "$PLUGIN_PATH" tag --sort=-creatordate | head -5

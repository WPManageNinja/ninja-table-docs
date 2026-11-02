#!/usr/bin/env bash
# Seed (or remove) the realistic demo tables on the local Ninja Tables site used for screenshots.
#   ./scripts/demo-data/seed.sh            create / replace demo tables (idempotent)
#   ./scripts/demo-data/seed.sh --remove   delete only the demo tables (and the extras)
#   ./scripts/demo-data/seed.sh --extras   create / replace only the extra tables + pages (seed-demo-extras.php);
#                                          add --remove to delete only the extras
#   ./scripts/demo-data/seed.sh --sources  create / replace only the connected-source demo tables (FluentCart)
#   ./scripts/demo-data/seed.sh --blog     create / replace only the demo blog (author, 6 posts, WP Posts table)
# Back up first if the site holds anything you care about (see README in this folder).
set -euo pipefail

SITE_ID="${NT_LOCAL_SITE_ID:-Ecc_Xk6CZ}"   # Local by Flywheel id of the "cart" site (localhost:10013)
export NT_WP_ROOT="${NT_WP_ROOT:-$HOME/Local Sites/cart/app/public}"
export NT_HTTP_HOST="${NT_HTTP_HOST:-localhost:10013}"
LOCAL="$HOME/Library/Application Support/Local"
SOCK="$LOCAL/run/$SITE_ID/mysql/mysqld.sock"
PHP="${NT_PHP:-$(ls -d "$LOCAL"/lightning-services/php-8.2*/bin/darwin-arm64/bin/php | head -1)}"

[ -S "$SOCK" ] || { echo "MySQL socket not found ($SOCK). Start the site in Local first." >&2; exit 1; }

run() { "$PHP" -d memory_limit=1024M -d mysqli.default_socket="$SOCK" -d pdo_mysql.default_socket="$SOCK" "$@"; }
DIR="$(dirname "$0")"
if [[ " $* " == *" --extras "* ]]; then
  run "$DIR/seed-demo-extras.php" "$@"
elif [[ " $* " == *" --blog "* ]]; then
  run "$DIR/seed-demo-blog.php" "$@"
elif [[ " $* " == *" --sources "* ]]; then
  run "$DIR/seed-demo-sources.php" "$@"
else
  # The main seed rewrites demo-tables.json and gives Order History a new id, so the extras always follow it.
  run "$DIR/seed-demo-tables.php" "$@"
  run "$DIR/seed-demo-extras.php" "$@"
  run "$DIR/seed-demo-blog.php" "$@"
  run "$DIR/seed-demo-sources.php" "$@"
fi

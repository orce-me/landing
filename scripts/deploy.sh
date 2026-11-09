#!/usr/bin/env bash
# Builds the static landing and uploads it to the VPS, where the Caddy of the
# orce-me stack serves it (orce-me/deploy):
#   scripts/deploy.sh luabagg@187.53.97.41
set -euo pipefail

target=${1:?usage: scripts/deploy.sh user@host}
root=$(cd "$(dirname "$0")/.." && pwd)

(cd "$root" && pnpm generate --dotenv .env.production)
rsync -az --delete "$root/.output/public/" "$target:/srv/orce/landing/"

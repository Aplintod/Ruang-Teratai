#!/usr/bin/env bash
# Menyiapkan folder _site yang di-publish Cloudflare Pages.
# Hanya file situs yang ikut; dokumentasi, catatan, README, dan skrip tidak tayang.
set -euo pipefail

rm -rf _site
mkdir -p _site
cp index.html 404.html _headers _site/
cp -r halaman assets _site/
find _site -name ".gitkeep" -delete

echo "Selesai: $(find _site -type f | wc -l) file siap di _site/"

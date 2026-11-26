#!/usr/bin/env bash
# Menyiapkan folder _site yang di-publish Cloudflare Pages.
# Hanya file situs yang ikut; dokumentasi, catatan, README, dan skrip tidak tayang.
#
# Variabel lingkungan:
#   SITE_URL  alamat situs tanpa garis miring di akhir, misalnya https://rsudaws-info.pages.dev
#             (diisi di Cloudflare: Settings → Variables and Secrets). Dipakai untuk pratinjau
#             WhatsApp (Open Graph), URL kanonik, dan sitemap.
set -euo pipefail

SITE_URL="${SITE_URL:-${CF_PAGES_URL:-}}"
SITE_URL="${SITE_URL%/}"

rm -rf _site
mkdir -p _site
cp index.html 404.html _headers _site/
cp -r halaman assets _site/
find _site -name ".gitkeep" -delete

# 1. Isi alamat situs di tag Open Graph & kanonik
find _site -name "*.html" -exec sed -i "s|__SITE_URL__|${SITE_URL}|g" {} +

# 2. Daftar foto yang benar-benar ada → main.js (browser tidak perlu menebak ekstensi)
foto=$(cd _site/assets/img && find . -type f \( -name "*.webp" -o -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" \) \
  | sed 's|^\./||' | sort | sed 's/.*/"&"/' | paste -sd, -)
sed -i "s|const FOTO = null; // __DAFTAR_FOTO__|const FOTO = [${foto}];|" _site/assets/js/main.js

# 3. sitemap.xml & robots.txt (halaman bertanda noindex tidak dimasukkan)
{
  echo '<?xml version="1.0" encoding="UTF-8"?>'
  echo '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
  (cd _site && find . -name "*.html" ! -name "404.html" | sed 's|^\./||' | sort) | while read -r f; do
    grep -q 'name="robots" content="noindex"' "_site/$f" && continue
    loc="${SITE_URL}/${f}"
    [ "$f" = "index.html" ] && loc="${SITE_URL}/"
    echo "  <url><loc>${loc}</loc></url>"
  done
  echo '</urlset>'
} > _site/sitemap.xml
printf 'User-agent: *\nAllow: /\n\nSitemap: %s/sitemap.xml\n' "${SITE_URL}" > _site/robots.txt

echo "Selesai: $(find _site -type f | wc -l) file siap di _site/ (SITE_URL=${SITE_URL:-belum diisi})"

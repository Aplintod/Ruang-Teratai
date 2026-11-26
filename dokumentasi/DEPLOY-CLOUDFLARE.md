# Pindah ke Cloudflare Pages

Tujuan: repo GitHub bisa dibuat **private**, dan yang tayang hanya file situs. Dokumentasi, catatan, dan kode Apps Script tidak ikut tayang.

Cloudflare Pages gratis: 500 build per bulan, bandwidth tidak dibatasi, dan mendukung repo private.

## Yang sudah disiapkan di repo

| File | Fungsi |
|---|---|
| `build.sh` | Menyalin `index.html`, `404.html`, `_headers`, `halaman/`, dan `assets/` ke folder `_site/`. Hanya folder ini yang di-publish. |
| `_headers` | Header keamanan (CSP, anti-iframe, dll.). Penjelasan di [KEAMANAN.md](KEAMANAN.md). |
| `.gitignore` | Folder `_site/` hasil build tidak ikut di-commit. |

## Langkah (sekali saja, ±15 menit)

### 1. Buat project di Cloudflare
1. Daftar atau masuk di **dash.cloudflare.com**, lalu aktifkan verifikasi dua langkah (2FA) di pengaturan akun.
2. Buka **Workers & Pages → Create → Pages → Connect to Git**.
3. Hubungkan akun GitHub. Saat GitHub meminta izin, pilih **Only select repositories** lalu pilih repo `Ruang-Teratai` saja, jangan semua repo.
4. Pilih repo `Ruang-Teratai`, lalu isi:

   | Pengaturan | Isi |
   |---|---|
   | Project name | nama yang akan jadi alamat, misalnya `rsudaws-info` → `rsudaws-info.pages.dev` |
   | Production branch | `main` |
   | Framework preset | `None` |
   | Build command | `bash build.sh` |
   | Build output directory | `_site` |

5. Buka **Environment variables (advanced)**, lalu tambahkan variabel:

   | Variable name | Value |
   |---|---|
   | `SITE_URL` | alamat situs tanpa garis miring di akhir, misalnya `https://rsudaws-info.pages.dev` |

   Variabel ini dipakai untuk pratinjau link di WhatsApp, `sitemap.xml`, dan `robots.txt`. Kalau nama project belum pasti, isi setelah deploy pertama lewat **Settings → Variables and Secrets**, lalu deploy ulang (**Deployments → ⋯ → Retry deployment**).
6. Klik **Save and Deploy**, tunggu 1–2 menit.
7. Buka alamat `https://<nama-project>.pages.dev` dan cek semua halaman.

### 2. Cek keamanannya sudah aktif
- Buka https://securityheaders.com, masukkan alamat `.pages.dev`. Hasil yang diharapkan: nilai **A**.
- Coba buka `https://<nama-project>.pages.dev/dokumentasi/VERIFIKASI.md`. Hasil yang benar: **halaman tidak ditemukan**.

### 3. Aktifkan statistik pengunjung (opsional, gratis)
1. Di project Pages: **Metrics → Web Analytics → Enable**.
2. Statistik (jumlah pengunjung, halaman terpopuler, asal negara, jenis perangkat) muncul di menu **Web Analytics** pada dashboard Cloudflare.
3. Cloudflare Web Analytics tidak memakai cookie dan tidak melacak pengunjung secara pribadi. Alamat script-nya sudah diizinkan di `_headers`.
4. Cek pratinjau WhatsApp: tempel alamat situs ke https://www.opengraph.xyz atau kirim ke chat WhatsApp sendiri.

### 4. Jadikan repo private
1. GitHub → repo `Ruang-Teratai` → **Settings → General**, gulir ke **Danger Zone**.
2. **Change repository visibility → Make private**.
3. Situs di Cloudflare tetap jalan, karena Cloudflare membaca repo lewat izin yang diberikan di langkah 1.3.
4. GitHub Pages otomatis berhenti, karena paket gratis tidak menayangkan repo private. Alamat lama `aplintod.github.io/Ruang-Teratai` tidak bisa dibuka lagi, jadi bagikan alamat baru ke klien.

### 5. Setelah pindah
- Setiap commit ke `main` otomatis tayang dalam 1–2 menit, sama seperti sebelumnya.
- Commit ke branch lain jadi **preview** di alamat terpisah, berguna untuk cek sebelum tayang.
- File `.nojekyll` hanya dipakai GitHub Pages dan boleh dihapus setelah pindah.
- Kalau nanti dipakai sebagai situs resmi, alamatnya bisa diganti ke subdomain RS (misalnya `info.rsudaws.co.id`) lewat **Custom domains** di Cloudflare, dengan bantuan tim IT RS.

## Mencoba build di komputer sendiri (opsional)

```bash
bash build.sh
```

```bash
python3 -m http.server 8000 --directory _site
```

Lalu buka http://localhost:8000. Header dari `_headers` hanya aktif di Cloudflare, tidak di server lokal ini.

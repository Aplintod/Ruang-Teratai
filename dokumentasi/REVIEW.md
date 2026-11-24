# Menyambungkan Formulir Review ke Google Sheets

Halaman `halaman/review.html` sudah berisi formulir. Supaya jawabannya tersimpan, formulir perlu disambungkan ke Google Sheets lewat Google Apps Script. Tidak perlu server dan gratis.

## Isi formulir

| No | Pertanyaan | Bentuk | Kolom di Sheet |
|---|---|---|---|
| 1 | Anda mengisi sebagai | Pilih satu: pasien, keluarga pasien, pengunjung, mahasiswa, petugas RS, lainnya | Peran |
| 2 | Ruangan | Pilih satu: Ruang Teratai, ruangan lain, tidak sedang dirawat | Ruangan |
| 3 | Penilaian keseluruhan | Bintang 1–5 | Bintang (1-5) |
| 4a | Informasi yang saya cari mudah ditemukan | Skala 1–5 | Mudah ditemukan |
| 4b | Bahasanya mudah dipahami | Skala 1–5 | Bahasa mudah dipahami |
| 4c | Informasinya membantu saya selama di rumah sakit | Skala 1–5 | Membantu selama di RS |
| 4d | Tampilannya nyaman dibaca di HP | Skala 1–5 | Nyaman di HP |
| 5 | Bagian yang paling membantu | Boleh pilih lebih dari satu | Bagian paling membantu |
| 6 | Kritik dan saran | Teks bebas, maks. 1000 karakter | Kritik & saran |

Nomor 1–4 wajib diisi, nomor 5–6 boleh dikosongkan. Formulir tidak meminta nama atau nomor HP.

## Langkah pemasangan (±10 menit, sekali saja)

1. Buat Google Sheet baru, misalnya beri nama **Review Situs RSUD AWS**.
2. Di Sheet itu buka **Ekstensi → Apps Script**.
3. Hapus isi `Code.gs` bawaan, lalu salin seluruh isi file [`apps-script/Code.gs`](apps-script/Code.gs) ke sana. Simpan (ikon disket).
4. Klik **Terapkan (Deploy) → Deployment baru**.
   - Pilih jenis: **Aplikasi web (Web app)**.
   - *Jalankan sebagai*: **Saya** (akun Anda).
   - *Yang memiliki akses*: **Siapa saja (Anyone)**.
   - Klik **Terapkan**, lalu izinkan akses saat diminta. Kalau muncul peringatan "Google belum memverifikasi aplikasi ini", klik **Lanjutan → Buka (nama project)**. Itu normal untuk script milik sendiri.
5. Salin **URL aplikasi web** yang muncul (berakhiran `/exec`).
6. Buka URL itu di browser. Kalau muncul `{"ok":true,"pesan":"Endpoint review aktif"}`, berarti sudah jalan.
7. Di repo, buka `assets/js/main.js`, isi `reviewUrl` di objek `SITE`:

   ```js
   reviewUrl: "https://script.google.com/macros/s/XXXXXXXX/exec",
   ```

8. Commit dan push. Coba isi formulir di situs, lalu cek apakah baris baru muncul di tab **Review** pada Sheet.

## Catatan

- Kalau isi `Code.gs` diubah, deploy ulang lewat **Terapkan → Kelola deployment → Edit (ikon pensil) → Versi: Versi baru**. Dengan cara ini URL tidak berubah.
- Formulir memakai kolom jebakan tersembunyi untuk menyaring bot sederhana. Bila nanti banyak isian sampah, bisa ditambah pembatasan lain.
- Isian teks yang diawali `=`, `+`, `-`, atau `@` otomatis diberi tanda kutip supaya tidak dibaca sebagai rumus oleh Sheets.
- Review ini khusus tentang **situs**. Keluhan pelayanan diarahkan ke jalur pengaduan rumah sakit, dan keterangan ini sudah tertulis di halaman Review.

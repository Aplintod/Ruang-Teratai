# Keamanan Situs

Ringkasan langkah keamanan yang sudah diterapkan, batasannya, dan hal yang perlu dijaga tim.

## Kenapa tetap HTML statis

Situs ini sengaja tidak memakai server, database, CMS, atau framework. Untuk situs informasi, ini justru pilihan paling aman:

- **Tidak ada server atau database**, jadi tidak ada SQL injection, pembobolan server, atau kebocoran database.
- **Tidak ada panel admin**, jadi tidak ada kata sandi admin yang bisa ditebak.
- **Tidak ada pustaka pihak ketiga** yang dimuat di browser, jadi tidak ada risiko pustaka yang disusupi (supply chain).
- Satu-satunya bagian yang menerima kiriman data adalah formulir Review, dan bagian itu dibatasi ketat (lihat di bawah).

## Yang sudah diterapkan

| Ancaman | Perlindungan |
|---|---|
| Kode sumber, dokumentasi, dan riwayat commit dicomot | Repo dibuat private. Yang tayang hanya isi `_site/` (lihat `build.sh`). |
| Injeksi script (XSS) | **Content Security Policy** di `_headers`: browser hanya menjalankan script dari situs ini sendiri. Tidak ada script inline di HTML. Data yang ditampilkan lewat JavaScript memakai `textContent` atau di-escape. Sudah diuji: script sisipan diblokir. |
| Situs dimasukkan ke iframe situs lain (clickjacking) | `X-Frame-Options: DENY` dan `frame-ancestors 'none'` |
| Browser salah menebak jenis file | `X-Content-Type-Options: nosniff` |
| Alamat halaman bocor ke situs lain | `Referrer-Policy: strict-origin-when-cross-origin` |
| Akses kamera, mikrofon, lokasi | Dimatikan lewat `Permissions-Policy` |
| Koneksi tidak terenkripsi | HTTPS dari Cloudflare + `Strict-Transport-Security` |
| Data kunjungan pasien terkirim ke pihak ketiga | Font disimpan sendiri di `assets/fonts/`, tidak ada Google Fonts, analytics, atau pelacak. |
| Isian formulir berbahaya di Google Sheets | Apps Script hanya menerima jawaban yang sama persis dengan pilihan formulir, nilai 1–5, teks dipotong panjangnya, dan isian yang diawali `= + - @` diberi tanda kutip supaya tidak dibaca sebagai rumus. |
| Formulir dibanjiri kiriman otomatis | Kolom jebakan bot (honeypot) dan batas 40 kiriman per 10 menit di Apps Script. |
| Data pribadi pengisi review | Formulir tidak meminta nama, nomor HP, atau data pribadi. |

## Batasan yang perlu dipahami

**Tampilan situs tidak bisa disembunyikan sepenuhnya.** Supaya halaman tampil, browser harus mengunduh HTML, CSS, JavaScript, dan foto. Siapa pun bisa menyimpan halaman yang dibukanya ("Save Page As"). Ini berlaku untuk semua situs di internet. Yang bisa dilindungi adalah kode sumber utuh, dokumentasi, dan riwayatnya, dan perlindungan hukumnya lewat hak cipta (`LICENSE` dan tulisan di footer). Trik seperti mematikan klik kanan tidak dipakai karena mudah dilewati dan menyulitkan pengguna.

**Alamat Apps Script terlihat di `main.js`.** Ini wajar dan bukan rahasia: alamat itu hanya bisa menambah baris review, tidak bisa membaca atau mengubah isi Sheet.

## Yang perlu dijaga tim

1. **Verifikasi dua langkah (2FA)** di akun GitHub, Cloudflare, dan Google (pemilik Sheet review).
2. **Akses seminimal mungkin.** Kolaborator repo hanya anggota tim. Aplikasi Cloudflare di GitHub hanya diberi akses ke repo ini.
3. **Jangan pernah commit rahasia**, seperti kata sandi, token, atau kunci API. Situs ini memang tidak membutuhkannya.
4. **Google Sheet review** hanya dibagikan ke anggota tim, bukan "siapa saja yang memiliki link".
5. **Izin data pribadi (UU No. 27/2022 tentang Pelindungan Data Pribadi).** Nama dan foto 20 petugas ditampilkan publik. Pastikan ada **persetujuan tertulis** dari setiap petugas, dan hapus data petugas yang tidak setuju atau sudah pindah. Jangan menampilkan foto atau data pasien.
6. **Jika diajukan menjadi situs resmi RS:** koordinasikan dengan tim IT RS soal domain (misalnya subdomain `rsudaws.co.id`) dan kemungkinan pemeriksaan keamanan dari pihak RS.

## Kalau ada perubahan

- **Menambah script baru:** buat sebagai file `.js` di `assets/js/`, jangan ditulis langsung di HTML, karena script inline akan diblokir CSP.
- **Memakai layanan luar baru** (misalnya peta tertanam atau video YouTube): alamat layanannya perlu ditambahkan ke `Content-Security-Policy` di `_headers`. Kalau tidak, layanan itu akan diblokir.

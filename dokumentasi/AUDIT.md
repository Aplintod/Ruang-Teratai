# Audit Kelayakan sebagai Situs Resmi RSUD AWS

Tanggal audit: 25 November 2026. **Pembaruan 26 November 2026:** temuan T1–T3, A1–A3, S1, S2, S4, S5 sudah diperbaiki (lihat bagian 7).

Cara audit:
- **Lighthouse 12** (alat audit Google) pada 5 halaman, mode HP dan desktop.
- **axe-core 4** (pemeriksa aksesibilitas WCAG 2.1 AA) pada 11 halaman.
- Uji CSP dan simulasi serangan script (lihat [KEAMANAN.md](KEAMANAN.md)).
- Pemeriksaan manual: konten, kepatuhan regulasi, dan kesiapan operasional.

---

## 1. Skor saat ini

| Halaman | Performa (HP / desktop) | Aksesibilitas | Praktik terbaik | SEO |
|---|---|---|---|---|
| Beranda | 93 / 100 | 98 | 96 | 100 |
| Beranda Ruang Teratai | 86 / 96 | 98 | 96 | 100 |
| Edukasi | 88 / 100 | 100 | 96 | 100 |
| Review | 94 / 100 | 98 | 100 | 100 |
| Petugas & Struktur | **58** / 79 | 98 | 96 | 100 |

Server uji lokal tidak mengompres file dan tidak mengatur cache. Di Cloudflare kedua hal itu otomatis, jadi skor performa nyata akan sedikit lebih tinggi. Temuan yang memang berasal dari kode situs tercantum di bawah.

**Kesimpulan singkat:** dasar teknisnya sudah kuat. Keamanan baik, aksesibilitas hampir sempurna, dan SEO teknis lolos. Kekurangan terbesar untuk menjadi situs resmi ada di **cakupan konten**, **kepatuhan regulasi instansi publik**, dan **cara pengelolaan** (siapa yang memperbarui isi dan bagaimana caranya).

---

## 2. Temuan teknis

### 2.1 Performa
| # | Temuan | Dampak | Rekomendasi |
|---|---|---|---|
| T1 | 20 foto petugas totalnya ±4 MB (1200×1600 px, ±200 KB per foto), padahal ditampilkan selebar ±250 px | Halaman Petugas lambat di HP (LCP 4,6 detik) dan boros kuota | Perkecil ke ±600 px dan ubah ke WebP (±30–40 KB per foto), sehingga totalnya ±0,7 MB. Bisa otomatis di `build.sh`. |
| T2 | Foto dicari dengan mencoba beberapa ekstensi (`.jpg`, `.png`, `.webp`, `.jpeg`). Yang tidak ada menghasilkan error 404 di konsol | Permintaan sia-sia, foto muncul terlambat, skor "praktik terbaik" turun | Saat build, buat daftar file foto yang benar-benar ada, sehingga tiap foto langsung dipanggil dengan nama yang tepat |
| T3 | Kartu petugas dibuat lewat JavaScript setelah halaman tampil, sehingga isi halaman bergeser (CLS 0,58; batas baik < 0,1) | Halaman "melompat" saat dimuat | Buat kartu petugas langsung di HTML saat build, atau sediakan ruang tetap sebelum kartu dimuat |
| T4 | Foto tidak punya ukuran alternatif untuk layar kecil (`srcset`) | HP mengunduh foto ukuran besar | Buat 2–3 ukuran per foto saat build |
| T5 | CSS 90 KB belum diperkecil, sekitar 50% aturannya tidak dipakai di tiap halaman | Tampilan pertama sedikit tertunda | Perkecil (minify) saat build |

### 2.2 Aksesibilitas (WCAG 2.1 AA)
| # | Temuan | Rekomendasi |
|---|---|---|
| A1 | Logo di header punya label untuk pembaca layar ("…, beranda") yang tidak memuat teks yang tampil (35 elemen, semua halaman) | Hapus `aria-label` dari logo atau samakan dengan teks yang tampil |
| A2 | Label kecil di latar hijau (Hak & Kewajiban) kontrasnya 4,21:1, minimal 4,5:1 | Pakai putih penuh untuk teks kecil di latar hijau |
| A3 | Urutan judul melompat (misalnya H2 langsung ke H4) di 8 halaman | Rapikan tingkat judul |
| A4 | Belum diuji dengan pembaca layar sungguhan (TalkBack/VoiceOver) dan navigasi keyboard penuh | Uji manual sebelum peluncuran resmi. UU 8/2016 tentang Penyandang Disabilitas mewajibkan layanan publik dapat diakses |

### 2.3 Tampil di pencarian & saat dibagikan
| # | Temuan | Dampak | Rekomendasi |
|---|---|---|---|
| S1 | Tidak ada tag Open Graph (gambar, judul, deskripsi pratinjau) | Saat link dibagikan di **WhatsApp**, tidak muncul gambar pratinjau | Tambah tag Open Graph di tiap halaman, termasuk gambar 1200×630 |
| S2 | Tidak ada `robots.txt`, `sitemap.xml`, dan URL kanonik | Google lebih lambat mengenali semua halaman | Buat otomatis saat build |
| S3 | Tidak ada data terstruktur schema.org (`Hospital`) | Info RS (alamat, telepon, jam) tidak tampil kaya di Google | Tambah JSON-LD (sebagai file terpisah agar tetap sesuai CSP) |
| S4 | Ikon hanya SVG, tanpa `apple-touch-icon` dan web manifest | Ikon tidak rapi saat situs disimpan ke layar utama HP | Tambah ikon PNG dan manifest |
| S5 | Halaman 404 tanpa header dan footer | Pengunjung yang tersesat tidak punya menu untuk kembali | Pakai kerangka halaman biasa |

### 2.4 Keamanan (sudah baik, beberapa penguatan)
| # | Temuan | Rekomendasi |
|---|---|---|
| K1 | Formulir review hanya dilindungi honeypot dan batas kiriman | Tambah **Cloudflare Turnstile** (CAPTCHA gratis tanpa teka-teki gambar), diverifikasi di Apps Script |
| K2 | Belum ada `security.txt` (alamat untuk melaporkan celah keamanan) | Tambah `/.well-known/security.txt` dengan kontak tim IT RS |
| K3 | Belum ada pemeriksaan keamanan independen | Minta tim IT RS atau pihak ketiga melakukan uji penetrasi sebelum peluncuran resmi |

---

## 3. Kepatuhan sebagai situs instansi pemerintah

RSUD AWS adalah badan publik milik Pemprov Kaltim, jadi situs resminya terikat aturan yang tidak berlaku untuk situs proyek biasa. Poin di bawah perlu dikonfirmasi ke bagian hukum, PPID, dan IT RS serta Diskominfo Kaltim.

| # | Kewajiban | Dasar | Status di situs |
|---|---|---|---|
| R1 | **Domain resmi pemerintah** (umumnya `.go.id`, atau subdomain domain RS yang sudah ada) | Ketentuan nama domain instansi penyelenggara negara (PP 71/2019 tentang PSTE). Perlu dicek ke Diskominfo | Masih `github.io` (nanti `pages.dev`) |
| R2 | **Kebijakan privasi**: data apa yang dikumpulkan, untuk apa, disimpan di mana (Google Sheets), berapa lama, dan hak pengguna | UU 27/2022 tentang Pelindungan Data Pribadi | **Belum ada** |
| R3 | **Persetujuan tertulis** 20 petugas untuk nama dan foto | UU 27/2022 | Perlu dipastikan |
| R4 | **Penafian medis**: informasi di situs bersifat umum dan bukan pengganti konsultasi tenaga kesehatan | Praktik umum situs kesehatan | **Belum ada** |
| R5 | **Tautan PPID** dan informasi publik berkala (profil, kinerja, laporan) | UU 14/2008 tentang Keterbukaan Informasi Publik | Belum ditautkan (RS sudah punya situs PPID) |
| R6 | **Standar pelayanan, maklumat pelayanan, dan kanal pengaduan resmi** (termasuk SP4N-LAPOR!) | UU 25/2009 tentang Pelayanan Publik | Belum ada; halaman keluhan masih umum |
| R7 | Survei kepuasan masyarakat (SKM) | PermenPAN-RB 14/2017 | Review di situs adalah review **situs**, bukan SKM pelayanan. Bedakan jelas atau tautkan ke SKM resmi RS |
| R8 | Integrasi dengan arsitektur SPBE daerah | Perpres 95/2018 tentang SPBE | Koordinasi dengan Diskominfo |
| R9 | Izin pemakaian ilustrasi cuci tangan WHO | Kebijakan hak cipta WHO (poster tidak berlisensi terbuka) | Dipakai dengan mencantumkan sumber; ajukan izin lewat formulir WHO atau ganti dengan poster PPI RSUD AWS |

---

## 4. Cakupan konten untuk situs resmi RS

Sekarang situs ini kuat sebagai **situs informasi rawat inap** (satu ruangan lengkap). Situs resmi RS biasanya juga memuat:

| Prioritas | Konten | Catatan |
|---|---|---|
| Tinggi | **IGD 24 jam**: nomor darurat besar dan menonjol di setiap halaman | Saat ini belum ada |
| Tinggi | Daftar layanan dan poliklinik, **jadwal dokter** | Sumber data dari RS, idealnya diperbarui rutin |
| Tinggi | Alur pendaftaran rawat jalan dan rawat inap, info **BPJS**, tautan pendaftaran online bila RS punya | |
| Tinggi | Isi ruangan lain (saat ini 13 kartu "segera hadir") | Halaman "segera hadir" terlalu banyak bisa memberi kesan situs belum jadi |
| Sedang | Berita dan pengumuman | Butuh cara memperbarui yang mudah (lihat bagian 5) |
| Sedang | Peta area RS, parkir, dan cara menuju tiap gedung | |
| Sedang | Tarif layanan (informasi publik) | |
| Rendah | Karier, unduhan (leaflet), versi bahasa Inggris | |

Data contoh yang masih tersisa (detail di [VERIFIKASI.md](VERIFIKASI.md)): nomor ekstensi Ruang Teratai, isi kamar (AC, nakas, kursi pendamping, Wi-Fi), jadwal harian ruangan, redaksi resmi misi dan nilai RS, motto, dan sambutan kepala ruangan.

---

## 5. Pengelolaan dan operasional

| # | Temuan | Rekomendasi |
|---|---|---|
| O1 | Mengubah isi harus lewat file HTML/JS di GitHub, jadi perlu orang yang paham kode | Untuk situs resmi, staf RS perlu bisa mengedit tanpa kode. Pilihan gratis yang cocok dengan arsitektur sekarang: **Decap CMS** (panel edit berbasis web; perubahan tetap tersimpan di GitHub dan otomatis tayang di Cloudflare) |
| O2 | Akun GitHub, Cloudflare, dan Google Sheet masih milik pribadi | Pindahkan kepemilikan ke **akun institusi RS**, dengan minimal dua admin dan 2FA |
| O3 | Belum ada pemantauan situs | Aktifkan **Cloudflare Web Analytics** (gratis, tanpa cookie, tanpa pelacak pihak ketiga) dan pemantau uptime |
| O4 | Belum ada SOP konten | Tentukan siapa yang mengusulkan, menyetujui, dan memperbarui konten, serta jadwal pengecekan data (misalnya daftar petugas tiap 3 bulan) |
| O5 | Dokumentasi teknis sudah ada (README, FOTO, REVIEW, KEAMANAN, DEPLOY, VERIFIKASI) | Siapkan dokumen serah terima untuk tim IT RS |

---

## 6. Urutan pengerjaan yang disarankan

**Sebelum dipublikasikan ke pasien (sekarang):**
1. Perbaikan teknis cepat: T1–T3 (foto petugas), A1–A3 (aksesibilitas), S1 (pratinjau WhatsApp), S5 (halaman 404).
2. Kebijakan privasi (R2), penafian medis (R4), dan nomor IGD (konten prioritas tinggi).
3. Persetujuan petugas (R3) dan pelengkapan data contoh.
4. Pindah ke Cloudflare Pages dan repo private.

**Sebelum diajukan sebagai situs resmi:**
5. Kepatuhan R1, R5–R8, bersama PPID, bagian hukum, dan IT RS.
6. Konten prioritas tinggi lainnya (layanan, jadwal dokter, pendaftaran, BPJS).
7. CMS untuk staf RS (O1) dan pemindahan kepemilikan akun (O2).
8. Uji pembaca layar (A4), Turnstile (K1), dan uji penetrasi (K3).

---

## 7. Yang sudah diperbaiki (26 November 2026)

| Temuan | Perbaikan | Hasil |
|---|---|---|
| T1, T4 | Semua foto diperkecil dan diubah ke WebP | Total foto 5,8 MB → 1,8 MB; halaman Petugas 4,2 MB → 0,7 MB |
| T2 | `build.sh` membuat daftar foto yang ada; browser tidak lagi menebak ekstensi | 0 permintaan 404 |
| T3 | Ruang tetap untuk kotak kepala ruangan | Pergeseran halaman (CLS) 0,58 → 0 |
| A1–A3 | Label logo & tombol, kontras teks di latar hijau, urutan judul, label area denah | axe-core: 0 pelanggaran di 11 halaman |
| S1 | Tag Open Graph + gambar pratinjau 1200×630 | Pratinjau link di WhatsApp (aktif setelah `SITE_URL` diisi di Cloudflare) |
| S2 | `sitemap.xml`, `robots.txt`, URL kanonik dibuat saat build | |
| S4 | Ikon layar utama HP dan web manifest | |
| S5 | Halaman 404 dengan header, footer, dan tautan bantuan | |
| – | Pencarian, tombol kembali ke atas, tombol cetak/simpan PDF dan salin link, tata tertib pengunjung resmi RS | |

Skor Lighthouse halaman Petugas (HP) setelah perbaikan: performa **84** (sebelumnya 58), aksesibilitas, praktik terbaik, dan SEO **100**. Diukur di server lokal tanpa kompresi; di Cloudflare biasanya lebih tinggi.

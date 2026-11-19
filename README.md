# Web Profil Ruang Teratai 1 – RSUD Abdoel Wahab Sjahranie

Situs statis (HTML, CSS, JavaScript biasa). Tidak ada build step, tidak ada backend, jadi bisa di-hosting gratis di Netlify, Vercel, Cloudflare Pages, atau GitHub Pages.

## Struktur halaman

| File | Isi | Poin dari klien |
|---|---|---|
| `index.html` | Beranda: hero, ringkasan angka, menu ke semua halaman, jam besuk | – |
| `profil.html` | Profil ruangan: tentang, visi-misi, layanan, struktur organisasi, kontak | 1 |
| `tim.html` | Profil pegawai: kepala ruangan + tim (tab ketua tim / perawat / staf) | 1 |
| `ruangan.html` | Pengenalan ruangan: cara menuju, denah, galeri foto | 2 |
| `fasilitas.html` | Tipe kamar & fasilitas, kondisi ruangan | 3, 4 |
| `hak-kewajiban.html` | Hak & kewajiban pasien (UU 17/2023 Pasal 276–277), saran & keluhan | 5 |
| `caregiver.html` | Panduan keluarga pendamping: aturan menunggu, peran, bawaan, FAQ | 6 |
| `orientasi.html` | Orientasi online mahasiswa (masih "segera hadir") | katalog berikutnya |

## Desain

- Huruf: **Instrument Serif** (judul) dan **Geist** (teks), dari Google Fonts.
- Warna: gading `#f5f1ea`, hijau tua `#17352f`, aksen terakota `#a65d4c`. Semua ada di `:root` paling atas `assets/css/style.css`.
- Animasi muncul saat di-scroll memakai class `reveal`. Animasi otomatis mati untuk pengguna yang mengaktifkan "kurangi gerakan" di perangkatnya.

## Cara mengganti data contoh

Data yang belum pasti diberi garis bawah titik-titik (class `tbd`, muncul tulisan "Data contoh" saat kursor diarahkan). Catatan untuk tim ditulis di blok `note`. Cari `tbd` atau `note` di kode.

- **Kontak, alamat, jam besuk** → `assets/js/main.js`, objek `SITE` di bagian atas. Sekali ubah, berlaku di semua halaman.
- **Menu navigasi** → `assets/js/main.js`, array `NAV`.
- **Pegawai** → `assets/js/data-pegawai.js`. Isi nama, jabatan, dan path foto. Foto taruh di `assets/img/pegawai/`, potret tegak (kepala ruangan 4:5, pegawai lain 3:4).
- **Foto ruangan** → taruh di `assets/img/ruangan/`, lalu ganti blok placeholder (warna polos dengan tulisan "Foto"). Class rasio (`r-3x2`, `r-4x5`, dst.) dipertahankan:

  ```html
  <!-- sebelum -->
  <div class="media r-3x2" data-cap="Kamar VIP"></div>
  <!-- sesudah -->
  <figure class="media r-3x2"><img src="assets/img/ruangan/kamar-vip.jpg" alt="Kamar VIP Ruang Teratai 1"></figure>
  ```

- **Foto hero beranda** → di `index.html`, tambahkan pada `<section class="hero on-dark">` atribut `style="--hero-img:url('assets/img/ruangan/hero.jpg')"`. Lapisan hijau gelap di atas foto dibuat otomatis supaya teks tetap terbaca.

- **Warna** → variabel di `:root` paling atas `assets/css/style.css`.

Kompres foto dulu sebelum dimasukkan (misalnya lewat squoosh.app), usahakan di bawah 300 KB per foto.

## Menjalankan di komputer

Cukup buka `index.html` di browser. Atau pakai server lokal:

```bash
python3 -m http.server 8000
```

lalu buka http://localhost:8000

## Deploy ke Netlify (gratis)

1. Push repo ini ke GitHub.
2. Login di netlify.com pakai akun GitHub → **Add new site** → **Import an existing project** → pilih repo ini.
3. Build command dikosongkan, publish directory `.` (sudah diatur di `netlify.toml`).
4. Deploy. Alamatnya akan berbentuk `nama-situs.netlify.app` dan namanya bisa diganti di Site settings.

Setiap ada push ke branch utama, Netlify otomatis memperbarui situs.

## Rencana berikutnya

- Survei kepuasan: form HTML yang mengirim data ke Google Apps Script + Google Sheets (tanpa server sendiri).
- Orientasi online mahasiswa: materi, video, dan kuis.
- Denah resmi dan foto dari pihak RS.

## Catatan sumber

- Hak & kewajiban pasien: Undang-Undang Nomor 17 Tahun 2023 tentang Kesehatan, Pasal 276 dan 277. Teks perlu dicocokkan lagi dengan dokumen resmi dan leaflet RSUD AWS.
- Alamat dan telepon RS: dokumen publik RSUD AWS / Pemprov Kaltim.
- Isi kamar, aturan penunggu, jam besuk, visi-misi: **contoh**, menunggu data dari RS.

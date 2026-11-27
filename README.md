# Etam Smart – Situs Informasi Pasien RSUD Abdoel Wahab Sjahranie

Situs statis (HTML, CSS, JavaScript biasa) berisi informasi untuk pasien dan keluarga: profil rumah sakit, ruang rawat inap (dimulai dari Ruang Teratai), edukasi, serta hak dan kewajiban pasien. Tanpa server, database, maupun framework, sehingga ringan dan permukaan serangannya kecil. Di-deploy gratis ke Cloudflare Pages.

## Struktur folder

```
/
├── index.html                  Beranda umum RSUD AWS
├── 404.html                    Halaman "tidak ditemukan"
├── halaman/
│   ├── profil.html             Profil RS: visi, misi, nilai, sejarah, layanan unggulan, kontak
│   ├── ruangan.html            Pilih ruangan (Teratai aktif, ruangan lain "segera hadir")
│   ├── edukasi/                Edukasi (punya sub-menu sendiri)
│   │   ├── index.html             Beranda edukasi: 4 topik + galeri poster
│   │   ├── cuci-tangan.html       Kapan & 6 langkah cuci tangan (ilustrasi WHO)
│   │   ├── pencegahan-infeksi.html  Cuci tangan, masker, etika batuk, kebersihan
│   │   ├── manajemen-nyeri.html   Relaksasi napas dalam, kompres dingin & hangat + poster
│   │   └── pulang.html            Pulang dengan aman: persiapan pulang & tanda bahaya
│   ├── hak-kewajiban.html      Hak & kewajiban pasien (UU 17/2023)
│   ├── review.html             Formulir review situs (bintang, skala 1–5, saran) → Google Sheets
│   ├── orientasi.html          Orientasi mahasiswa (disembunyikan dari menu, file disimpan)
│   └── ruangan/
│       └── teratai/            Ruang Teratai (punya sub-menu sendiri)
│           ├── index.html         Beranda ruangan: info, sambutan, alur, jadwal harian, galeri
│           ├── petugas.html       Petugas & struktur organisasi
│           ├── denah.html         Cara menuju & denah
│           ├── fasilitas.html     Kamar, fasilitas, kondisi ruangan
│           └── tata-tertib.html   Tata tertib & jam besuk (dari lembar resmi ruangan)
├── assets/
│   ├── css/style.css           Seluruh tampilan
│   ├── fonts/                  Font Newsreader & Geist (disimpan sendiri, lisensi OFL)
│   ├── js/main.js              Header, footer, menu, sub-menu ruangan, data kontak, jadwal, ilustrasi, foto otomatis
│   ├── js/data-pegawai.js      Data petugas Ruang Teratai
│   ├── js/petugas.js           Kartu petugas & bagan struktur
│   ├── js/beranda-ruangan.js   Nama & sambutan karu di beranda ruangan
│   ├── js/review.js            Formulir review
│   └── img/
│       ├── rs/                 Foto rumah sakit
│       └── teratai/            Foto Ruang Teratai (+ pegawai/ untuk foto petugas)
├── dokumentasi/
│   ├── FOTO.md                 Daftar foto + nama filenya
│   ├── VERIFIKASI.md           Semua isi web + sumbernya, untuk dicek klien
│   ├── REVIEW.md               Cara menyambungkan formulir review ke Google Sheets
│   ├── DEPLOY-CLOUDFLARE.md    Cara deploy ke Cloudflare Pages & menjadikan repo private
│   ├── KEAMANAN.md             Langkah keamanan, batasan, dan kewajiban tim
│   └── apps-script/Code.gs     Kode Apps Script untuk review
├── _redirects                  Pengalihan alamat lama (Cloudflare)
├── _headers                    Header keamanan Cloudflare Pages (CSP, dll.)
├── build.sh                    Menyiapkan folder _site/ yang di-publish
├── LICENSE                     Hak cipta
└── .nojekyll                   Hanya untuk GitHub Pages, boleh dihapus setelah pindah ke Cloudflare
```

Link menu dan foto diatur otomatis oleh `main.js`, jadi tetap benar dari folder mana pun.

### Menambah ruangan baru (misalnya Anggrek)

1. Salin folder `halaman/ruangan/teratai/` menjadi `halaman/ruangan/anggrek/`, lalu ganti isinya.
2. Di `assets/js/main.js`, tambahkan `anggrek` ke objek `RUANGAN` (nama, folder, dan daftar sub-menu). Di setiap halaman barunya, ubah `data-ruangan="teratai"` menjadi `data-ruangan="anggrek"`.
3. Foto disimpan di `assets/img/anggrek/`, dan `data-img="teratai/..."` diganti `data-img="anggrek/..."`.
4. Di `halaman/ruangan.html`, ubah kartu "Segera hadir" Anggrek menjadi tautan.

## Desain

- Huruf: **Newsreader** (judul, serif yang mudah dibaca) dan **Geist** (teks), dari Google Fonts.
- Warna mengikuti logo RSUD AWS: biru `#0c54cc`, biru tua `#0b3478`, hijau `#00843a`, hijau-kuning `#b7d433`, kuning `#f4c623`, dan putih. Semua ada di `:root` paling atas `assets/css/style.css`.
- Ilustrasi garis ada di `assets/js/main.js` (konstanta `SPRITE`), dipakai dengan `<svg class="ill"><use href="#nama"/></svg>`.
- Tombol **Aa** di header memperbesar tampilan (3 tingkat) dan pilihannya diingat browser.
- Animasi muncul saat di-scroll memakai class `reveal`. Animasi otomatis mati untuk pengguna yang mengaktifkan "kurangi gerakan" di perangkatnya.

## Cara mengganti data contoh

Data yang belum pasti diberi garis bawah titik-titik (class `tbd`, muncul tulisan "Data contoh" saat kursor diarahkan). Catatan untuk tim ditulis di blok `note`. Cari `tbd` atau `note` di kode.

- **Kontak, alamat, jam besuk** → `assets/js/main.js`, objek `SITE` di bagian atas. Sekali ubah, berlaku di semua halaman.
- **Menu navigasi** → `assets/js/main.js`, array `NAV`. Sub-menu ruangan → objek `RUANGAN`. Halaman Orientasi sedang disembunyikan: untuk memunculkannya lagi, hapus tanda `//` pada baris Orientasi di `NAV`.
- **Foto (ruangan & pegawai)** → lihat **[dokumentasi/FOTO.md](dokumentasi/FOTO.md)**. Cukup simpan foto dengan nama yang tercantum di sana, foto langsung terpasang tanpa mengubah kode.
- **Data petugas Ruang Teratai** → `assets/js/data-pegawai.js`.
- **Jadwal harian** ("Sehari di Ruang Teratai") → `assets/js/main.js`, array `JADWAL`. Jam ditulis desimal (7.5 = 07.30).
- **Denah** → denah sekarang skematik sementara di `halaman/ruangan/teratai/denah.html`. Begitu `assets/img/teratai/denah.png` ada, otomatis diganti gambar resmi. Keterangan tiap area ada di atribut `data-desc` pada SVG denah.

- **Warna** → variabel di `:root` paling atas `assets/css/style.css`.

Kompres foto dulu sebelum dimasukkan (misalnya lewat squoosh.app), usahakan di bawah 300 KB per foto.

## Menjalankan di komputer

Cukup buka `index.html` di browser. Atau pakai server lokal:

```bash
python3 -m http.server 8000
```

lalu buka http://localhost:8000

## Deploy

Situs di-deploy ke **Cloudflare Pages** dengan build command `bash build.sh` dan output `_site`. Langkah lengkapnya ada di [dokumentasi/DEPLOY-CLOUDFLARE.md](dokumentasi/DEPLOY-CLOUDFLARE.md).

Hal yang perlu diingat soal keamanan (detail di [dokumentasi/KEAMANAN.md](dokumentasi/KEAMANAN.md)):
- Jangan menulis script langsung di HTML. Buat file `.js` di `assets/js/`, karena script inline diblokir Content Security Policy.
- Kalau memakai layanan luar baru (peta, video, dll.), tambahkan alamatnya ke `_headers`.

## Rencana berikutnya

- Survei kepuasan: form HTML yang mengirim data ke Google Apps Script + Google Sheets (tanpa server sendiri).
- Orientasi online mahasiswa: materi, video, dan kuis.
- Denah resmi dan foto dari pihak RS.

## Catatan sumber

- Hak & kewajiban pasien: Undang-Undang Nomor 17 Tahun 2023 tentang Kesehatan, Pasal 276 dan 277. Teks perlu dicocokkan lagi dengan dokumen resmi dan leaflet RSUD AWS.
- Alamat dan telepon RS: dokumen publik RSUD AWS / Pemprov Kaltim.
- Isi kamar, aturan penunggu, jam besuk, visi-misi: **contoh**, menunggu data dari RS.

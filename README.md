# Web Profil Ruang Teratai 1 – RSUD Abdoel Wahab Sjahranie

Situs statis (HTML, CSS, JavaScript biasa). Tidak ada build step, tidak ada backend, jadi bisa di-hosting gratis di Netlify, Vercel, Cloudflare Pages, atau GitHub Pages.

## Struktur folder

```
/
├── index.html            Beranda (wajib di root untuk GitHub Pages)
├── 404.html              Halaman "tidak ditemukan"
├── halaman/              Halaman-halaman lain
│   ├── profil.html          Profil ruangan                      (poin 1)
│   ├── tim.html             Profil pegawai                      (poin 1)
│   ├── ruangan.html         Pengenalan, alur pasien, denah      (poin 2)
│   ├── fasilitas.html       Kondisi & fasilitas kamar           (poin 3, 4)
│   ├── hak-kewajiban.html   Hak & kewajiban pasien              (poin 5)
│   ├── caregiver.html       Panduan keluarga pendamping         (poin 6)
│   └── orientasi.html       Orientasi mahasiswa (disembunyikan dari menu, file disimpan)
├── assets/
│   ├── css/style.css        Seluruh tampilan
│   ├── js/main.js           Header, footer, data kontak, jadwal, ilustrasi, foto otomatis
│   ├── js/data-pegawai.js   Data pegawai
│   └── img/
│       ├── ruangan/         Foto ruangan (nama file lihat dokumentasi/FOTO.md)
│       └── pegawai/         Foto pegawai
├── dokumentasi/
│   ├── FOTO.md              Daftar foto yang dibutuhkan + nama filenya
│   └── VERIFIKASI.md        Daftar semua isi web + sumbernya, untuk dicek klien
├── netlify.toml          Pengaturan Netlify
└── .nojekyll             Agar GitHub Pages menyajikan file apa adanya
```

Halaman di folder `halaman/` memakai path `../assets/...`. Link menu dan foto diatur otomatis oleh `main.js`, jadi tetap benar dari folder mana pun.

## Desain

- Huruf: **Instrument Serif** (judul) dan **Geist** (teks), dari Google Fonts.
- Warna: gading `#f5f1ea`, hijau tua `#17352f`, aksen terakota `#a65d4c`. Semua ada di `:root` paling atas `assets/css/style.css`.
- Ilustrasi garis ada di `assets/js/main.js` (konstanta `SPRITE`), dipakai dengan `<svg class="ill"><use href="#nama"/></svg>`.
- Tombol **Aa** di header memperbesar tampilan (3 tingkat) dan pilihannya diingat browser.
- Animasi muncul saat di-scroll memakai class `reveal`. Animasi otomatis mati untuk pengguna yang mengaktifkan "kurangi gerakan" di perangkatnya.

## Cara mengganti data contoh

Data yang belum pasti diberi garis bawah titik-titik (class `tbd`, muncul tulisan "Data contoh" saat kursor diarahkan). Catatan untuk tim ditulis di blok `note`. Cari `tbd` atau `note` di kode.

- **Kontak, alamat, jam besuk** → `assets/js/main.js`, objek `SITE` di bagian atas. Sekali ubah, berlaku di semua halaman.
- **Menu navigasi** → `assets/js/main.js`, array `NAV`. Halaman Orientasi sedang disembunyikan: untuk memunculkannya lagi, hapus tanda `//` pada baris Orientasi di `NAV`, lalu tambahkan kembali barisnya di daftar isi `index.html`.
- **Foto (ruangan & pegawai)** → lihat **[dokumentasi/FOTO.md](dokumentasi/FOTO.md)**. Cukup simpan foto dengan nama yang tercantum di sana, foto langsung terpasang tanpa mengubah kode.
- **Data pegawai** → `assets/js/data-pegawai.js`.
- **Jadwal harian** ("Sehari di Teratai 1" di beranda) → `assets/js/main.js`, array `JADWAL`. Jam ditulis desimal (7.5 = 07.30).
- **Denah** → denah sekarang skematik sementara di `halaman/ruangan.html`. Begitu `assets/img/ruangan/denah.png` ada, otomatis diganti gambar resmi. Keterangan tiap area ada di atribut `data-desc` pada SVG denah.

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

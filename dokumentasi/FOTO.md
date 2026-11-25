# Daftar Foto

Foto akan **terpasang otomatis** kalau disimpan dengan nama dan folder yang persis seperti di bawah. Tidak perlu mengubah kode. Cukup taruh filenya, commit, lalu push.

- Format: `.jpg` (disarankan), `.png`, atau `.webp`. Nama file **huruf kecil semua**.
- Ukuran: lebar sekitar 1600–2000 px untuk foto ruangan, sekitar 800 px untuk foto pegawai.
- Besar file: usahakan di bawah 400 KB. Kompres dulu lewat squoosh.app atau tinypng.com.
- Kalau sebuah file belum ada, tempatnya tetap menampilkan kotak placeholder seperti sekarang.

## Foto rumah sakit → `assets/img/rs/`

| Nama file | Dipakai di | Isi foto | Posisi HP |
|---|---|---|---|
| `hero.jpg` | Beranda (latar paling atas) dan Profil RS | Foto gedung atau gerbang RSUD AWS | Mendatar |
| `profil.jpg` | Profil RS (opsional) | Foto lain RSUD AWS. Kalau tidak ada, Profil RS memakai `hero.jpg` | Mendatar |
| `ilustrasi-cuci-tangan.jpg` | Edukasi (cadangan) | Sudah ada: foto domain publik dari Wikimedia Commons, dipakai sampai ada `bukti-cuci-tangan-1` | – |

## Foto Ruang Teratai → `assets/img/teratai/`

| Nama file | Dipakai di | Isi foto | Posisi HP |
|---|---|---|---|
| `hero.jpg` | Beranda Ruang Teratai (opsional) | Foto utama Ruang Teratai. Kalau tidak ada, dipakai `gedung-paviliun` | Mendatar |
| `lorong-1.jpg`, `lorong-2.jpg`, `lorong-3.jpg` | Beranda Ruang Teratai (3 foto berjejer) | Tiga lorong atau tiga sudut berbeda. `lorong-1` kalau belum ada memakai `lorong.jpg` | Tegak lebih baik |
| `lorong.jpg` | Cadangan untuk `lorong-1` | Lorong ruangan, diambil dari ujung lorong | Mendatar |
| `pintu-masuk.jpg` | (cadangan, belum dipakai) | Pintu masuk atau papan nama Ruang Teratai 1 | Mendatar |
| `gedung-paviliun.jpg` | Beranda Ruang Teratai & kartu ruangan | Gedung Ruang Teratai dari luar | Mendatar |
| `nurse-station.jpg` | Galeri | Nurse station, boleh ada perawat sedang bekerja | Tegak |
| `kamar-pasien.jpg` | Galeri | Kamar pasien secara umum | Mendatar atau persegi |
| `kamar-mandi.jpg` | Galeri | Kamar mandi dalam kamar | Persegi |
| `taman.jpg` | Galeri | Taman di area Ruang Teratai | Persegi atau tegak |
| `kamar-vip.jpg` | Fasilitas | Kamar VIP dari sudut pintu. Kalau tidak ada, dipakai `kamar-pasien` | Mendatar |
| `kamar-vvip.jpg` | Fasilitas | Kamar VVIP dari sudut pintu. Kalau tidak ada, dipakai `kamar-pasien` | Mendatar |
| `bukti-cuci-tangan-1.jpg` s.d. `-3.jpg` | Edukasi: praktik cuci tangan | Petugas Ruang Teratai sedang mencuci tangan / memakai hand rub | Tegak |
| `tempat-sampah.jpg` | Edukasi: memilah sampah | Sudah ada: tiga tempat sampah berlabel | Mendatar |
| `tempat-sampah-2.jpg` (opsional) | Edukasi: memilah sampah | Foto tempat sampah kedua; muncul di bawah foto pertama bila ada | Mendatar |
| `cuci-tangan.jpg` | Fasilitas & Edukasi | Wastafel atau hand rub di depan kamar | Tegak |
| `edukasi-keluarga.jpg` | Edukasi | Papan informasi atau poster pencegahan infeksi | Tegak |
| `struktur-organisasi.png` | Petugas & Struktur | Bagan struktur organisasi (gambar dari RS) | – |
| `jalur-evakuasi.jpg` | Denah | Sudah ada: poster jalur evakuasi resmi. Denah interaktif digambar ulang dari poster ini | – |
| `denah.png` | (tidak dipakai lagi) | Denah resmi dari RS. Begitu file ini ada, denah skematik otomatis diganti. | – |

## Foto petugas Ruang Teratai → `assets/img/teratai/pegawai/`

Nama file memakai kode jabatan. Nama orang dan jabatan diisi di `assets/js/data-pegawai.js`.

| Nama file | Siapa |
|---|---|
| `karu.jpg` | Kepala Ruangan |
| `ccm-01.jpg` | Clinical Case Manager |
| `katim-01.jpg`, `katim-02.jpg`, … | Ketua Tim |
| `pp-01.jpg` s.d. `pp-15.jpg` | Perawat Pelaksana |
| `staf-01.jpg`, … | Staf |

Kalau pembagiannya belum diketahui, foto boleh di-push dulu dengan nama apa saja (misalnya nama bawaan WhatsApp) ke folder ini. Nanti diganti namanya setelah jabatan tiap orang jelas.

## Tips memotret pakai HP

- Ambil foto pagi atau siang dengan lampu ruangan menyala dan tirai dibuka.
- Rapikan dulu: tempat tidur kosong dan rapi, tidak ada barang pribadi atau sampah.
- **Jangan ada wajah pasien** atau data pasien (papan nama, rekam medis) yang terlihat di foto.
- Foto pegawai: latar dinding polos yang sama untuk semua orang, berseragam, posisi setengah badan, HP setinggi mata.
- Pegang HP lurus (jangan miring) dan pakai lensa utama, bukan lensa ultra-wide.

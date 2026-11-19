# Daftar Foto

Foto akan **terpasang otomatis** kalau disimpan dengan nama dan folder yang persis seperti di bawah. Tidak perlu mengubah kode. Cukup taruh filenya, commit, lalu push.

- Format: `.jpg` (disarankan), `.png`, atau `.webp`. Nama file **huruf kecil semua**.
- Ukuran: lebar sekitar 1600–2000 px untuk foto ruangan, sekitar 800 px untuk foto pegawai.
- Besar file: usahakan di bawah 400 KB. Kompres dulu lewat squoosh.app atau tinypng.com.
- Kalau sebuah file belum ada, tempatnya tetap menampilkan kotak placeholder seperti sekarang.

## Foto ruangan → `assets/img/ruangan/`

| Nama file | Dipakai di | Isi foto | Posisi HP |
|---|---|---|---|
| `hero.jpg` | Beranda, latar paling atas | Foto paling bagus: lorong atau nurse station dengan cahaya terang. Teks putih ditaruh di atasnya, jadi sisakan area yang agak polos. | Mendatar |
| `lorong.jpg` | Beranda & galeri | Lorong ruangan, diambil dari ujung lorong | Mendatar |
| `pintu-masuk.jpg` | Profil ruangan | Pintu masuk atau papan nama Ruang Teratai 1 | Mendatar |
| `gedung-paviliun.jpg` | Pengenalan | Gedung Paviliun Teratai dari luar | Mendatar |
| `nurse-station.jpg` | Galeri | Nurse station, boleh ada perawat sedang bekerja | Tegak |
| `kamar-pasien.jpg` | Galeri | Kamar pasien secara umum | Mendatar atau persegi |
| `kamar-mandi.jpg` | Galeri | Kamar mandi dalam kamar | Persegi |
| `taman.jpg` | Galeri | Taman di area Paviliun Teratai | Persegi atau tegak |
| `kamar-vip.jpg` | Fasilitas | Kamar VIP dari sudut pintu, terlihat tempat tidur dan sofa | Mendatar |
| `kamar-kelas-1.jpg` | Fasilitas | Kamar Kelas I dari sudut pintu | Mendatar |
| `cuci-tangan.jpg` | Fasilitas | Wastafel atau hand rub di depan kamar | Tegak |
| `edukasi-keluarga.jpg` | Caregiver | Perawat sedang menjelaskan sesuatu kepada keluarga pasien | Tegak |
| `struktur-organisasi.png` | Profil ruangan | Bagan struktur organisasi (gambar dari RS) | – |
| `denah.png` | Pengenalan | Denah resmi dari RS. Begitu file ini ada, denah skematik otomatis diganti. | – |

## Foto pegawai → `assets/img/pegawai/`

| Nama file | Siapa |
|---|---|
| `kepala-ruangan.jpg` | Kepala ruangan (potret tegak 4:5) |
| `pegawai-01.jpg`, `pegawai-02.jpg`, … | Pegawai sesuai **urutan baris** di `assets/js/data-pegawai.js` (potret tegak 3:4) |

Contoh: baris pertama di array `PEGAWAI` adalah Ketua Tim A, jadi fotonya `pegawai-01.jpg`. Baris ketiga belas berarti `pegawai-13.jpg`. Kalau urutan pegawai diubah, nama fotonya ikut disesuaikan.

## Tips memotret pakai HP

- Ambil foto pagi atau siang dengan lampu ruangan menyala dan tirai dibuka.
- Rapikan dulu: tempat tidur kosong dan rapi, tidak ada barang pribadi atau sampah.
- **Jangan ada wajah pasien** atau data pasien (papan nama, rekam medis) yang terlihat di foto.
- Foto pegawai: latar dinding polos yang sama untuk semua orang, berseragam, posisi setengah badan, HP setinggi mata.
- Pegang HP lurus (jangan miring) dan pakai lensa utama, bukan lensa ultra-wide.

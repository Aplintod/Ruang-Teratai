# Daftar Verifikasi Konten

Semua informasi di web beserta asal sumbernya. Kolom **Info fix** diisi setelah ada konfirmasi dari pihak RS. Kalau isinya sudah benar, tulis "OK". Kalau harus diganti, tulis isi yang benar. Kalau tidak dipakai, tulis "hapus".

**Kode sumber**

| Kode | Arti | Tindakan |
|---|---|---|
| **[1] Internet** | Dari hasil pencarian internet (dokumen publik/pihak ketiga), bukan langsung dari web resmi RSUD AWS | Konfirmasi singkat ke RS |
| **[2] Hukum** | Teks peraturan yang ditulis dari ingatan, belum dicocokkan dengan dokumen aslinya | Cocokkan dengan dokumen resmi (JDIH / peraturan.go.id) |
| **[3] Umum** | Praktik umum rumah sakit di Indonesia, **bukan** aturan khusus RSUD AWS | Tanyakan apakah berlaku di Teratai 1 |
| **[4] Contoh** | Dikarang sebagai pengisi sementara | Wajib diganti dengan data asli |

Kolom **Tanda di web**: "ya" berarti sudah diberi garis bawah titik-titik "data contoh" di web. "tidak" berarti tampil seperti fakta. Bagian bertanda "tidak" lebih perlu diperhatikan karena bisa dikira aturan resmi RS.

---

## A. Data umum (muncul di banyak halaman)

Data ini diatur sekali di `assets/js/main.js` (objek `SITE`).

| # | Isi di web | Sumber | Tanda di web | Info fix |
|---|---|---|---|---|
| A1 | Alamat: Jl. Palang Merah Indonesia No. 1, Sidodadi, Samarinda Ulu, Samarinda, Kalimantan Timur 75123 | [1] | tidak | |
| A2 | Telepon RS: (0541) 738070 | [1] | tidak | |
| A3 | Telepon/ekstensi Ruang Teratai 1: "Ext. —" | [4] | ya | |
| A4 | Jam besuk siang 11.00–13.00 | [4] | ya | |
| A5 | Jam besuk sore 17.00–19.00 | [4] | ya | |
| A6 | Zona waktu WITA | [1] | tidak | |
| A7 | Footer: "Keadaan darurat di kamar: tekan bel pasien atau panggil perawat jaga" | [3] | tidak | |
| A8 | Logo: ikon teratai buatan sendiri (bukan logo resmi RS/ruangan) | [4] | tidak | |

## B. Beranda (`index.html`)

| # | Isi di web | Sumber | Tanda di web | Info fix |
|---|---|---|---|---|
| B1 | Ruang Teratai 1 adalah ruang rawat inap di Paviliun Teratai | Info dari klien | tidak | |
| B2 | Paviliun Teratai adalah gedung perawatan "kelas paviliun" | Info dari klien | tidak | |
| B3 | RSUD AWS rumah sakit rujukan tertinggi di Kalimantan Timur | [1] | tidak | |
| B4 | Perawat bekerja dalam sistem tim | [3] | tidak | |
| B5 | Setiap pasien punya satu perawat penanggung jawab per shift | [3] | tidak | |
| B6 | Nama perawat penanggung jawab tertulis di papan dekat tempat tidur | [3] | tidak | |
| B7 | Keluarga dilibatkan sejak hari pertama sampai persiapan pulang | [3] | tidak | |
| B8 | Perawat jaga 24 jam, tiga shift | [3] | tidak | |
| B9 | Sambutan kepala ruangan (kutipan) | [4] | tidak | |
| B10 | Nama kepala ruangan | [4] | ya | |
| B11 | Jumlah tempat tidur: 00 | [4] | ya | |
| B12 | Jumlah kamar perawatan: 00 | [4] | ya | |
| B13 | Jumlah perawat & staf: 00 | [4] | ya | |
| B14 | "Satu penunggu per pasien" | [3] | tidak | |
| B15 | Pengunjung yang demam/batuk/pilek sebaiknya menunda kunjungan | [3] | tidak | |

### Jadwal harian "Sehari di Teratai 1"

Diatur di `assets/js/main.js` (array `JADWAL`). Seluruh jadwal sudah diberi keterangan "Jam masih perkiraan".

| # | Kegiatan | Jam di web | Sumber | Info fix |
|---|---|---|---|---|
| B16 | Cek tanda vital | 06.00 | [4] | |
| B17 | Ganti shift pagi | 07.00 | [4] | |
| B18 | Sarapan | 07.30 | [4] | |
| B19 | Visite dokter | 08.00–12.00 | [4] | |
| B20 | Besuk siang | 11.00–13.00 | [4] | |
| B21 | Makan siang | 12.00 | [4] | |
| B22 | Istirahat siang | 13.00–16.00 | [4] | |
| B23 | Ganti shift sore | 14.00 | [4] | |
| B24 | Besuk sore | 17.00–19.00 | [4] | |
| B25 | Makan sore | 17.30 | [4] | |
| B26 | Ganti shift malam | 21.00 | [4] | |
| B27 | Lampu redup | 21.00–23.00 | [4] | |

## C. Profil Ruangan (`profil.html`)

| # | Isi di web | Sumber | Tanda di web | Info fix |
|---|---|---|---|---|
| C1 | Paviliun Teratai melayani pasien kelas paviliun, baik pasien umum maupun peserta asuransi | [3] tafsiran | tidak | |
| C2 | RSUD AWS milik Pemerintah Provinsi Kalimantan Timur | [1] | tidak | |
| C3 | Sejarah singkat ruangan | belum ada | catatan "perlu dilengkapi" | |
| C4 | Jenis kasus yang paling banyak dirawat | belum ada | catatan "perlu dilengkapi" | |
| C5 | Visi: "Ruang rawat inap paviliun yang aman, bersih, dan dipercaya pasien di Kalimantan Timur" | [4] | ya | |
| C6 | Misi 1: Memberi asuhan keperawatan sesuai standar profesi | [4] | tidak | |
| C7 | Misi 2: Menjaga keselamatan pasien di setiap tindakan | [4] | tidak | |
| C8 | Misi 3: Melibatkan keluarga dalam perawatan dan persiapan pulang | [4] | tidak | |
| C9 | Misi 4: Menjadi tempat belajar yang baik bagi mahasiswa praktik | [4] | tidak | |
| C10 | Motto ruangan (judul sudah menyebut "motto", tapi isinya belum ada) | belum ada | – | |
| C11 | Layanan: asuhan keperawatan 24 jam (pengkajian, tanda vital, obat, perawatan luka, pencegahan jatuh) | [3] | tidak | |
| C12 | Layanan: visite dokter (DPJP) setiap hari | [3] | tidak | |
| C13 | Layanan: edukasi pasien dan keluarga | [3] | tidak | |
| C14 | Layanan: lahan praktik klinik bagi mahasiswa | [3] | tidak | |
| C15 | Struktur: kepala ruangan → beberapa ketua tim → perawat pelaksana per shift | [3] | tidak | |
| C16 | Bagan struktur organisasi (gambar) | belum ada | placeholder | |

## D. Profil Pegawai (`tim.html`, data di `assets/js/data-pegawai.js`)

| # | Isi di web | Sumber | Tanda di web | Info fix |
|---|---|---|---|---|
| D1 | Nama, gelar, dan pendidikan kepala ruangan | [4] | tidak | |
| D2 | Sambutan kepala ruangan | [4] | tidak | |
| D3 | Susunan jabatan: Ketua Tim A, Ketua Tim B, Perawat Penanggung Jawab Shift | [4] | tidak | |
| D4 | 6 perawat pelaksana (nama & pendidikan) | [4] | tidak | |
| D5 | Staf pendukung: administrasi ruangan, pramu husada, petugas kebersihan | [4] | tidak | |
| D6 | Jumlah total pegawai (sekarang 12 + kepala ruangan) | [4] | tidak | |
| D7 | Nama perawat penanggung jawab ditulis di papan dekat tempat tidur dan diperbarui tiap shift | [3] | tidak | |
| D8 | Semua pegawai memakai kartu identitas | [3] | tidak | |

## E. Pengenalan & Denah (`ruangan.html`)

| # | Isi di web | Sumber | Tanda di web | Info fix |
|---|---|---|---|---|
| E1 | Alur 1: Pendaftaran rawat inap, keluarga mengurus administrasi dan memilih kelas kamar | [3] | tidak | |
| E2 | Alur 2: Masuk kamar, perawat memasang gelang identitas dan menjelaskan aturan ruangan | [3] | tidak | |
| E3 | Alur 3: Perawatan harian (visite, obat, pemantauan 24 jam) | [3] | tidak | |
| E4 | Alur 4: Persiapan pulang (edukasi obat, diet, tanda bahaya) | [3] | tidak | |
| E5 | Alur 5: Pulang membawa surat kontrol dan resep pulang | [3] | tidak | |
| E6 | Rute dari gerbang menuju Paviliun Teratai ("ikuti papan petunjuk") | [4] | ya | |
| E7 | Lantai Ruang Teratai 1 | [4] | ya | |
| E8 | Tersedia lift dan tangga | [3] | tidak | |
| E9 | Pengunjung dan penunggu melapor ke nurse station sebelum masuk kamar | [3] | tidak | |
| E10 | Denah skematik (tata letak, posisi area) | [4] | ya | |
| E11 | Nomor kamar 101–108 | [4] | ya | |
| E12 | Kamar 101–104 VIP, 105–108 Kelas I | [4] | ya | |
| E13 | Area yang ada: nurse station, ruang tindakan, pantry & linen, ruang tunggu keluarga, WC pengunjung, tangga & lift | [4] | ya | |
| E14 | Jalur evakuasi ditandai "EXIT" hijau menuju titik kumpul | [3] | tidak | |
| E15 | Galeri: lorong, nurse station, kamar pasien, kamar mandi, ruang tunggu | foto belum ada | placeholder | |

## F. Kondisi & Fasilitas Kamar (`fasilitas.html`)

| # | Isi di web | Sumber | Tanda di web | Info fix |
|---|---|---|---|---|
| F1 | Tipe kamar yang ada: VIP dan Kelas I | [4] | tidak | |
| F2 | VIP: 1 pasien per kamar | [4] | tidak | |
| F3 | VIP: jumlah kamar | [4] | ya | |
| F4 | VIP: sofa bed untuk 1 pendamping | [4] | tidak | |
| F5 | VIP: kamar mandi dalam dengan air panas | [4] | tidak | |
| F6 | VIP: tempat tidur elektrik dengan pagar pengaman | [4] | tidak | |
| F7 | VIP: AC, televisi, kulkas kecil | [4] | tidak | |
| F8 | VIP: bel perawat di samping tempat tidur dan di kamar mandi | [4] | tidak | |
| F9 | VIP: saluran oksigen dan suction sentral | [4] | tidak | |
| F10 | Kelas I: jumlah pasien per kamar | [4] | ya | |
| F11 | Kelas I: jumlah kamar | [4] | ya | |
| F12 | Kelas I: kursi pendamping, kamar mandi dalam, AC, nakas, bel, oksigen sentral | [4] | tidak | |
| F13 | Di setiap kamar: tempat tidur berpagar, bel, kamar mandi dalam, AC, oksigen sentral, TV (VIP) | [4] | sebagian | |
| F14 | Hand rub di depan setiap kamar dan di nurse station | [3] | tidak | |
| F15 | Bel tersambung langsung ke nurse station | [3] | tidak | |
| F16 | Tiga shift: pagi, sore, malam | [3] | tidak | |
| F17 | Wi-Fi | [4] | ya | |
| F18 | Lantai dan kamar mandi dibersihkan minimal dua kali sehari | [3] | tidak | |
| F19 | Linen diganti setiap hari atau saat kotor | [3] | tidak | |
| F20 | Sampah medis dan non-medis dipisahkan sejak dari kamar | [3] | tidak | |
| F21 | Keselamatan: pagar tempat tidur, gelang identitas, penanda risiko jatuh, alat pemadam api, jalur evakuasi | [3] | tidak | |
| F22 | Lampu diredupkan pada malam hari | [3] | tidak | |
| F23 | Seluruh area RS kawasan tanpa rokok, termasuk rokok elektrik | [3] (umumnya diwajibkan peraturan) | tidak | |
| F24 | Tarif mengikuti tarif resmi RSUD AWS, tanyakan ke pendaftaran rawat inap | [3] | tidak | |

## G. Hak & Kewajiban Pasien (`hak-kewajiban.html`)

| # | Isi di web | Sumber | Tanda di web | Info fix |
|---|---|---|---|---|
| G1 | Dasar hukum: UU No. 17 Tahun 2023 tentang Kesehatan, Pasal 276 dan 277 | [2] | catatan sumber | |
| G2 | Pasal 276 huruf a–g (7 hak pasien) | [2] | catatan sumber | |
| G3 | Pasal 277 huruf a–d (4 kewajiban pasien) | [2] | catatan sumber | |
| G4 | Apakah RSUD AWS punya leaflet/daftar hak & kewajiban versi RS sendiri? Kalau ada, sebaiknya dipakai juga | perlu ditanyakan | – | |
| G5 | Ringkasan "Intinya" (3 poin bahasa sederhana) | tafsiran dari G2–G3 | tidak | |
| G6 | Contoh: penjelasan sebelum tindakan dan persetujuan tertulis (informed consent) | [3] | tidak | |
| G7 | Contoh: identitas dicek dengan gelang sebelum obat/ambil darah | [3] | tidak | |
| G8 | Contoh: sampaikan alergi, obat, dan riwayat penyakit | [3] | tidak | |
| G9 | Contoh: pasien bisa menentukan keluarga yang boleh menerima informasi | [3] | tidak | |
| G10 | Contoh: boleh meminta pendapat dokter lain lewat perawat/DPJP | [3] | tidak | |
| G11 | Saluran keluhan: perawat jaga/kepala ruangan, unit pengaduan RSUD AWS, kotak saran | [3] | sebagian | |
| G12 | Kontak unit pengaduan RSUD AWS | [4] | ya | |
| G13 | Ada kotak saran di area ruangan | [3] | tidak | |
| G14 | Survei kepuasan online "sedang disiapkan" | rencana proyek | tidak | |

## H. Caregiver (`caregiver.html`)

| # | Isi di web | Sumber | Tanda di web | Info fix |
|---|---|---|---|---|
| H1 | Definisi caregiver: keluarga/orang terdekat yang mendampingi pasien | [3] | tidak | |
| H2 | Keterlibatan keluarga termasuk standar pelayanan RS | [3] | tidak | |
| H3 | Satu orang penunggu per pasien | [3] | ya (judul bagian) | |
| H4 | Penunggu memakai kartu atau gelang penunggu | [3] | ya (judul bagian) | |
| H5 | Penunggu berusia dewasa dan sehat | [3] | ya (judul bagian) | |
| H6 | Pergantian penunggu dilaporkan ke perawat jaga | [3] | ya (judul bagian) | |
| H7 | Paling banyak dua pengunjung di dalam kamar, bergantian | [3] | ya (judul bagian) | |
| H8 | Anak di bawah 12 tahun sebaiknya tidak ikut menjenguk | [3] | ya (judul bagian) | |
| H9 | Pengunjung yang batuk/pilek/demam menunda kunjungan | [3] | ya (judul bagian) | |
| H10 | 6 hal yang bisa dibantu: cuci tangan, cegah jatuh, lapor perubahan, makan sesuai diet, serahkan obat dari rumah, jaga diri | [3] | tidak | |
| H11 | Barang yang sebaiknya dibawa (KTP, kartu BPJS/asuransi, pakaian, alat mandi & makan, daftar obat, charger) | [3] | tidak | |
| H12 | Barang yang sebaiknya tidak dibawa (perhiasan/uang besar, alat listrik pribadi, rokok, tikar/kasur tambahan, bunga & tanaman) | [3] | tidak | |
| H13 | FAQ: penunggu boleh ikut saat visite | [3] | tidak | |
| H14 | FAQ: penunggu tidur di kursi/sofa pendamping | [4] | ya | |
| H15 | FAQ: beri tahu perawat sebelum meninggalkan pasien | [3] | tidak | |
| H16 | FAQ: edukasi sebelum pulang (obat, kontrol, diet, tanda bahaya) | [3] | tidak | |

Catatan: semua aturan H3–H9 diberi keterangan "Aturan berikut masih contoh" di judul bagiannya, tetapi tiap poinnya sendiri tidak ditandai.

## I. Orientasi Mahasiswa (`orientasi.html`)

| # | Isi di web | Sumber | Tanda di web | Info fix |
|---|---|---|---|---|
| I1 | 6 modul: mengenal ruangan, tata tertib, keselamatan pasien, dokumentasi, kasus yang sering ditemui, kuis | [4] usulan | ya (disebut "usulan awal") | |
| I2 | Permohonan praktik klinik lewat bagian diklat RSUD AWS | [3] | tidak | |

---

## Pertanyaan untuk klien (ringkas)

1. Nomor telepon/ekstensi Ruang Teratai 1, dan kontak unit pengaduan RSUD AWS.
2. Jam besuk resmi dan aturan penunggu/pengunjung yang berlaku.
3. Kelas kamar yang ada di Teratai 1, jumlah kamar dan tempat tidur per kelas, serta nomor kamarnya.
4. Isi tiap tipe kamar (fasilitas yang benar-benar ada, termasuk Wi-Fi).
5. Jenis pasien/kasus yang dirawat, dan sejarah singkat ruangan.
6. Visi, misi, motto ruangan, atau ikut punya RSUD AWS?
7. Daftar pegawai: nama + gelar, jabatan, pendidikan, dan foto. Juga struktur organisasi.
8. Jadwal harian: shift, visite, jam makan, jam istirahat.
9. Lantai dan rute menuju ruangan, serta denah resmi.
10. Leaflet hak & kewajiban pasien versi RSUD AWS (kalau ada).
11. Logo yang boleh dipakai (logo RS dan/atau ruangan).

# Daftar Verifikasi Konten

Semua informasi di web beserta asal sumbernya. Kolom **Info fix** diisi setelah ada konfirmasi dari pihak RS: tulis "OK" kalau sudah benar, isi yang benar kalau perlu diganti, atau "hapus".

**Kode sumber**

| Kode | Arti | Tindakan |
|---|---|---|
| **[R] Resmi** | Dari dokumen/lembar resmi ruangan, atau dari situs resmi RSUD AWS lewat hasil pencarian (situs RS tidak bisa dibuka langsung dari lingkungan kerja) | Cocokkan redaksinya |
| **[1] Internet** | Dari sumber pemerintah/berita selain situs RS | Konfirmasi singkat |
| **[2] Hukum** | Teks peraturan, dicocokkan dengan beberapa sumber sekunder | Cocokkan dengan naskah resmi di JDIH |
| **[3] Umum** | Praktik umum rumah sakit / pedoman umum (WHO), bukan aturan khusus RSUD AWS | Tanyakan apakah berlaku |
| **[4] Contoh** | Dikarang sebagai pengisi sementara | Wajib diganti |

---

## A. Data umum (`assets/js/main.js`, objek `SITE`)

| # | Isi di web | Sumber | Info fix |
|---|---|---|---|
| A1 | Alamat: Jl. Palang Merah Indonesia No. 1, Sidodadi, Samarinda Ulu, Samarinda, Kalimantan Timur 75123 | [1] | |
| A2 | Telepon RS: (0541) 738118 / 741793 (sebelumnya 738070) | [R] situs resmi rsudaws.co.id, bagian Hubungi Kami | OK |
| A3 | Telepon/ekstensi Ruang Teratai: belum ada ("Ext. —") | [4] | |
| A4 | Jam besuk Ruang Teratai: sore 16.00–18.00 | [R] lembar tata tertib | |
| A5 | Nama situs di header: "RSUD Abdoel Wahab Sjahranie" tanpa logo | keputusan tim | |
| A7 | Nomor IGD khusus tidak dicantumkan di situs resmi RS, sehingga tombol darurat IGD tidak ditambahkan | [R] | |
| A6 | Warna situs mengikuti logo AWS: biru #0c54cc, hijau #00843a, hijau-kuning, kuning, putih | logo dari klien | |

## B. Beranda umum (`index.html`)

| # | Isi di web | Sumber | Info fix |
|---|---|---|---|
| B1 | RS milik Pemerintah Provinsi Kalimantan Timur | [R] | |
| B2 | Rumah sakit kelas A pendidikan | [R] + [1] Diskominfo Kaltim | |
| B3 | Rujukan tertinggi di Kalimantan Timur | [1] | |
| B4 | Berawal dari Landschap Hospital tahun 1933 | [R] halaman Sejarah | |
| B5 | Akreditasi paripurna KARS | [R] + [1] | |
| B6 | Nilai: Ramah, Cekatan, Santun, Profesional | [R] | |

## C. Profil RS (`halaman/profil.html`)

| # | Isi di web | Sumber | Info fix |
|---|---|---|---|
| C1 | Visi: "Rumah Sakit AWS berdaulat dalam pelayanan yang berstandar internasional" | [R] halaman Visi & Misi | |
| C2 | Misi 1: Mewujudkan pelayanan paripurna, bermutu, mudah diakses, dan berorientasi pada budaya keselamatan pasien | [R] (redaksi sesuai kutipan) | |
| C3 | Misi 2: Mengembangkan layanan unggulan berbasis teknologi terkini | [R] (redaksi disusun dari ringkasan, cocokkan) | |
| C4 | Misi 3: Mewujudkan rumah sakit pendidikan yang memadukan proses pendidikan dan pelayanan | [R] (redaksi disusun dari ringkasan, cocokkan) | |
| C5 | Misi 4: Menerapkan tata kelola rumah sakit yang profesional, akuntabel, dan transparan | [R] (redaksi disusun dari ringkasan, cocokkan) | |
| C6 | Misi 5: Menyediakan sumber daya dan lingkungan yang berkualitas serta berdaya saing | [R] (redaksi disusun dari ringkasan, cocokkan) | |
| C7 | Penjelasan nilai (Ramah: rasa aman dan nyaman; Cekatan: terampil dan tepat; Santun: menghormati dan mengayomi; Profesional: sesuai tugas, kompetensi, dan etika) | [R] (diringkas, cocokkan) | |
| C8 | Motto RS | belum ditemukan | |
| C9 | 1933: Landschap Hospital di Emma Straat (kini Jl. Gurami) | [R] | |
| C10 | 12 November 1977: gedung baru diresmikan Gubernur Abdoel Wahab Sjahranie, bernama RS Segiri | [R] | |
| C11 | 22 Februari 1986: berganti nama menjadi RSUD A. W. Sjahranie | [R] | |
| C12 | 2014: ditetapkan sebagai RS kelas A pendidikan | [R] tabel perkembangan | |
| C13 | Layanan unggulan: jantung terpadu, kanker, stroke, uronefrologi | [R] Renstra Bisnis 2024–2028 | |
| C14 | Kedokteran nuklir: RS keempat di Indonesia yang memiliki instalasi ini, setelah Jakarta, Bandung, dan Semarang | [R] dokumen profil (data lama, cek apakah masih relevan) | |
| C15 | Foto: `assets/img/rs/hero.jpg` (gerbang & gedung Paviliun AWS) | dari klien | |

## D. Ruangan (`halaman/ruangan.html`)

Daftar berdasarkan catatan dari pihak rumah sakit (revisi klien).

| # | Ruangan | Keterangan di web | Sumber | Info fix |
|---|---|---|---|---|
| D1 | Anggrek | Kelas 1 | klien | |
| D2 | Asoka | Paru | klien | |
| D3 | Aster | Bedah, kelas 3 | klien | |
| D4 | Bougenville | Jantung | klien | |
| D5 | Cempaka | Kelas 1, 2, dan 3 | klien | |
| D6 | Edelweis | Kelas 1, 2, dan 3 | klien | |
| D7 | Flamboyan | Penyakit dalam, kelas 3 | klien | |
| D8 | Lily | "Rawat inap" (jenis & kelas belum diketahui) | klien | |
| D9 | Mawar | "Rawat inap" (jenis & kelas belum diketahui) | klien | |
| D10 | Melati | Anak | klien | |
| D11 | Seruni | HCU, ditampilkan di kelompok Perawatan Intensif | klien | |
| D12 | ICU, ICCU, PICU | Perawatan Intensif | klien | |
| D13 | Sakura | dihapus (tidak ada di daftar klien) | – | |

## E. Edukasi (`halaman/edukasi/`)

Edukasi dipecah menjadi beranda + 4 halaman atas permintaan klien. Bagian memilah sampah dihapus.

| # | Isi di web | Sumber | Info fix |
|---|---|---|---|
| E1 | Cuci tangan: kapan mencuci tangan + 6 langkah dengan ilustrasi poster WHO *How to Handwash?* (2009). Izin resmi WHO belum diajukan | [3] WHO | |
| E2 | Pencegahan infeksi: cuci tangan (tautan ke halaman cuci tangan), pakai masker, etika batuk, tunda kunjungan saat sakit, jangan duduk di tempat tidur pasien, jangan menyentuh alat medis, jaga kebersihan kamar | [3] | |
| E3 | Manajemen nyeri: relaksasi napas dalam, kompres dingin, kompres hangat; isi teks disalin dari poster | poster Co-Ners UMKT Kel. 6 | |
| E4 | Dasar poster: SPO Relaksasi Napas Dalam No. 191/FIK.3/B/2019 (Prodi S1 Keperawatan & Profesi Ners UMKT); SPO Kompres Dingin No. 033/12/03/XI/2022 dan SPO Kompres Hangat No. 032/12/03/XI/2022 (RSUD AWS) | tertera di poster | |
| E5 | Pulang dengan aman: persiapan sebelum pulang (obat, kontrol, dokumen, makan & aktivitas, perawatan di rumah) + tanda bahaya segera ke IGD | [3] | |
| E6 | Nama aplikasi "Etam Smart" di header, judul tab, footer, pratinjau WhatsApp, poster QR | klien | OK |

## F. Hak & Kewajiban (`halaman/hak-kewajiban.html`)

| # | Isi di web | Sumber | Info fix |
|---|---|---|---|
| F1 | Pasal 276 UU 17/2023: 7 hak pasien (huruf a–g) | [2] cocok dengan publikasi RSUD Kartini Jepara dan RRI | |
| F2 | Pasal 277 UU 17/2023: 4 kewajiban pasien (huruf a–d) | [2] cocok dengan sumber yang sama | |
| F3 | Ringkasan "Intinya" & contoh di ruang rawat inap | tafsiran + [3] | |
| F4 | Saluran keluhan: perawat jaga/kepala ruangan, unit pengaduan RSUD AWS (kontak belum ada), kotak saran | [3] / [4] | |
| F5 | Leaflet hak & kewajiban versi RSUD AWS (kalau ada) | perlu ditanyakan | |

## G. Review (`halaman/review.html`)

| # | Isi di web | Sumber | Info fix |
|---|---|---|---|
| G1 | Formulir: peran, ruangan, bintang 1–5, 4 pernyataan skala 1–5, bagian paling membantu, kritik & saran (tanpa nama/HP) | rancangan tim | |
| G2 | Data tersimpan ke Google Sheets setelah Apps Script dipasang (lihat `dokumentasi/REVIEW.md`) | belum dipasang | |

## H. Ruang Teratai – Beranda (`halaman/ruangan/teratai/index.html`)

| # | Isi di web | Sumber | Info fix |
|---|---|---|---|
| H1 | Ruang Teratai melayani pasien rawat inap (istilah "Paviliun" diganti "Ruangan" atas permintaan klien) | klien | |
| H2 | 21 tempat tidur | klien | OK |
| H3 | 17 perawat jaga | klien | OK |
| H4 | Keterangan Teratai 1 (12 TT), Teratai 2 (7 TT), Teratai 3 (27 TT) dari situs RS dihapus atas permintaan klien; diganti 21 tempat tidur, 11 kamar, 17 perawat jaga, Kelas 1 | klien | OK |
| H5 | Perawat jaga 24 jam dalam tiga shift; satu perawat penanggung jawab per pasien tiap shift | [3] | |
| H6 | Sambutan & nama kepala ruangan | [4] | |
| H7 | Alur pasien 5 tahap (pendaftaran → masuk kamar → perawatan → persiapan pulang → pulang) | [3] | |
| H8 | Jadwal harian: jam besuk 16.00–18.00 | [R] | |
| H9 | Jadwal harian lain: cek tanda vital 06.00, shift 07.00/14.00/21.00, sarapan 07.30, visite 08.00–12.00, makan siang 12.00, istirahat 13.00–16.00, makan sore 18.30, lampu redup 21.00–23.00 | [4] | |
| H10 | Tiga foto lorong di bagian atas (baru ada 1 foto) | foto dari klien | |
| H11 | Galeri: gedung, nurse station, kamar pasien, kamar mandi, taman | foto dari klien | |

## I. Ruang Teratai – Petugas & Struktur (`petugas.html`, data di `assets/js/data-pegawai.js`)

| # | Isi di web | Sumber | Info fix |
|---|---|---|---|
| I1 | 20 petugas: 1 Karu (Jemmi Anggraini), 1 CCM (Awal Darmawan), 1 Katim (Astuti Widiawati), 17 Perawat Pelaksana, beserta pendidikan terakhir | [R] daftar petugas dari ruangan | |
| I2 | Nama ditulis dengan huruf kapital di awal kata (daftar asli huruf besar semua); gelar belum dicantumkan | – | |
| I3 | Staf non-perawat (administrasi, pramu husada, dll.) belum ada di daftar | perlu ditanyakan | |
| I4 | Sambutan kepala ruangan | [4] | |
| I5 | Bagan struktur dibuat otomatis: Karu → CCM & Katim → PP | [3] perlu dicek | |
| I6 | Bagan resmi (gambar) akan muncul otomatis bila ada `assets/img/teratai/struktur-organisasi.png` | belum ada | |

## J. Ruang Teratai – Denah (`denah.html`)

| # | Isi di web | Sumber | Info fix |
|---|---|---|---|
| J1 | Rute dari gerbang ke Ruang Teratai & lantai ruangan | [4] | |
| J2 | Denah interaktif: 11 kamar Kelas 1 (Kamar 1–7 dan 9–12), ruang obat, ruang karu, nurse station, ruang alat, edukasi; **pintu utama di ujung kanan**, sisi kiri adalah **parkiran** (bukan pintu utama) | [R] denah jalur evakuasi + koreksi klien | OK |
| J3 | Poster jalur evakuasi (label diedit: "Lobi" → "Parkiran", "Jalur ke-2" → "Pintu utama") + petunjuk: kamar 1–7 & nurse station ke sisi parkiran, kamar 9–12 & ruang alat ke pintu utama | [R] + koreksi klien | |
| J4 | Pengunjung melapor ke nurse station sebelum masuk kamar | [3] | |
| J5 | Jumlah tempat tidur di web memakai angka klien (21), bukan hitungan dari gambar denah | klien | OK |

## K. Ruang Teratai – Fasilitas (`fasilitas.html`)

| # | Isi di web | Sumber | Info fix |
|---|---|---|---|
| K1 | Semua kamar Kelas 1 (sebelumnya VIP/VVIP) | klien | OK |
| K2 | Isi kamar: tempat tidur berpagar, bel perawat, oksigen sentral (umum); AC, nakas, kursi pendamping masih contoh | [3] / [4] | |
| K3 | Foto kamar Kelas 1 sementara memakai foto `kamar-pasien` (bisa diganti dengan `kamar-kelas-1.jpg`) | – | |
| K4 | Fasilitas bersama: hand rub, bel perawat, tiga shift, Wi-Fi (belum dikonfirmasi) | [3] / [4] | |
| K5 | Kondisi ruangan: kebersihan 2x sehari, linen, pemilahan sampah, keselamatan, lampu malam, kawasan tanpa rokok | [3] | |

## L. Ruang Teratai – Tata Tertib (`tata-tertib.html`)

| # | Isi di web | Sumber | Info fix |
|---|---|---|---|
| L1 | 9 poin tata tertib (jam besuk, larangan anak < 12 tahun, tikar, menjemur, merokok, alat elektronik, barang berharga, kerapian, kebersihan) | [R] lembar Tata Tertib Ruang Rawat Inap, ditandatangani "R Teratai" | |
| L2 | Redaksi disesuaikan ke huruf kecil dan kalimat baku tanpa mengubah isi | – | |
| L3 | Tata tertib pengunjung RSUD AWS (13 poin) | [R] situs resmi, halaman Tata Tertib Pengunjung | OK |

---

## Pertanyaan untuk klien

1. Nomor telepon/ekstensi Ruang Teratai dan kontak unit pengaduan RSUD AWS.
2. Apakah jam besuk hanya sore (16.00–18.00), atau ada jam besuk siang?
4. Isi kamar Kelas 1 (AC, nakas, kursi/sofa pendamping, dll.).
5. Daftar petugas (nama, gelar, jabatan, pendidikan, foto) dan bagan struktur organisasi.
6. Denah resmi dan lantai ruangan.
7. Jadwal harian ruangan: visite, jam makan, jam istirahat.
8. Ruang Mawar dan Lily itu ruangan apa dan kelas berapa?
9. Motto RSUD AWS, dan apakah redaksi misi di web sudah sesuai dokumen resmi.
10. Materi PPI/edukasi resmi dan leaflet hak & kewajiban pasien versi RSUD AWS, kalau ada.

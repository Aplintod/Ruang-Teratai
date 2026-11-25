/* =========================================================
   DATA PETUGAS RUANG TERATAI
   Sumber: daftar petugas dari Ruang Teratai (20 orang).

   Kelompok:
     karu  = Kepala Ruangan
     ccm   = Clinical Case Manager
     katim = Ketua Tim
     pp    = Perawat Pelaksana
     staf  = Staf (administrasi, pramu husada, kebersihan, dll.)

   Foto dipasang otomatis dari assets/img/teratai/pegawai/<file>.jpg
   (boleh .jpeg/.png/.webp). Kolom "file" = nama file tanpa ekstensi.
   Contoh: { ..., file: "pp-03" } → assets/img/teratai/pegawai/pp-03.jpeg

   Halaman Petugas, bagan Struktur Organisasi, dan sambutan di beranda
   Ruang Teratai semuanya dibuat dari daftar ini, jadi cukup ubah di sini.

   Foto potret tegak (3:4), lebar ±800 px.
   ========================================================= */

const KEPALA_RUANGAN = {
  nama: "Jemmi Anggraini",
  jabatan: "Kepala Ruangan",
  kelompok: "karu",
  pendidikan: "Ners",
  file: "karu",
  sambutan:
    "Selamat datang di Ruang Teratai. Kami berusaha agar setiap pasien dan keluarganya tahu apa yang sedang terjadi selama perawatan. Jika ada yang ingin ditanyakan, silakan sampaikan ke perawat yang bertugas.",
};

const KELOMPOK = {
  ccm: "Clinical Case Manager",
  katim: "Ketua Tim",
  pp: "Perawat Pelaksana",
  staf: "Staf",
};

const PEGAWAI = [
  { nama: "Awal Darmawan", jabatan: "Clinical Case Manager", kelompok: "ccm", pendidikan: "M.Kep", file: "ccm-01" },
  { nama: "Astuti Widiawati", jabatan: "Ketua Tim", kelompok: "katim", pendidikan: "A.Md.Kep", file: "katim-01" },

  { nama: "Deasy Novianti", jabatan: "Perawat Pelaksana", kelompok: "pp", pendidikan: "Ners", file: "pp-01" },
  { nama: "Nani Mariani", jabatan: "Perawat Pelaksana", kelompok: "pp", pendidikan: "Ners", file: "pp-02" },
  { nama: "Nina Sultani", jabatan: "Perawat Pelaksana", kelompok: "pp", pendidikan: "A.Md.Kep", file: "pp-03" },
  { nama: "Rista Nurzulita Rima", jabatan: "Perawat Pelaksana", kelompok: "pp", pendidikan: "A.Md.Kep", file: "pp-04" },
  { nama: "Ina Yusmina Zainah", jabatan: "Perawat Pelaksana", kelompok: "pp", pendidikan: "A.Md.Kep", file: "pp-05" },
  { nama: "Hairina", jabatan: "Perawat Pelaksana", kelompok: "pp", pendidikan: "A.Md.Kep", file: "pp-06" },
  { nama: "Firman Aditya", jabatan: "Perawat Pelaksana", kelompok: "pp", pendidikan: "Ners", file: "pp-07" },
  { nama: "Maulana", jabatan: "Perawat Pelaksana", kelompok: "pp", pendidikan: "A.Md.Kep", file: "pp-08" },
  { nama: "Ayu Rachmadani", jabatan: "Perawat Pelaksana", kelompok: "pp", pendidikan: "A.Md.Kep", file: "pp-09" },
  { nama: "Maulidaini", jabatan: "Perawat Pelaksana", kelompok: "pp", pendidikan: "A.Md.Kep", file: "pp-10" },
  { nama: "Fera Ayudiati Shinta", jabatan: "Perawat Pelaksana", kelompok: "pp", pendidikan: "Ners", file: "pp-11" },
  { nama: "Deby Octa Fitri", jabatan: "Perawat Pelaksana", kelompok: "pp", pendidikan: "Ners", file: "pp-12" },
  { nama: "Muhammad Ridho", jabatan: "Perawat Pelaksana", kelompok: "pp", pendidikan: "Ners", file: "pp-13" },
  { nama: "Didik", jabatan: "Perawat Pelaksana", kelompok: "pp", pendidikan: "SST", file: "pp-14" },
  { nama: "Agus Imam Kusairi", jabatan: "Perawat Pelaksana", kelompok: "pp", pendidikan: "Ners", file: "pp-15" },
  { nama: "Dewi Sobba", jabatan: "Perawat Pelaksana", kelompok: "pp", pendidikan: "Ners", file: "pp-16" },
  { nama: "Karina Oktavia", jabatan: "Perawat Pelaksana", kelompok: "pp", pendidikan: "A.Md.Kep", file: "pp-17" },

  // Staf belum ada di daftar. Contoh baris kalau nanti ditambahkan:
  // { nama: "Nama Staf", jabatan: "Administrasi", kelompok: "staf", pendidikan: "", file: "staf-01" },
];

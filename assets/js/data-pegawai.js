/* =========================================================
   DATA PETUGAS RUANG TERATAI — nama & jumlah per kelompok masih CONTOH.

   Kelompok:
     karu  = Kepala Ruangan
     ccm   = Clinical Case Manager
     katim = Ketua Tim
     pp    = Perawat Pelaksana
     staf  = Staf (administrasi, pramu husada, kebersihan, dll.)

   Foto dipasang otomatis dari assets/img/teratai/pegawai/<file>.jpg
   (boleh .jpeg/.png/.webp). Kolom "file" = nama file tanpa ekstensi.
   Contoh: { ..., file: "pp-03" } → assets/img/teratai/pegawai/pp-03.jpg

   Halaman Petugas dan bagan Struktur Organisasi sama-sama dibuat dari
   daftar ini, jadi cukup ubah di sini.

   Potret tegak (3:4), lebar ±800 px.
   ========================================================= */

const KEPALA_RUANGAN = {
  nama: "Nama Kepala Ruangan",
  jabatan: "Kepala Ruangan",
  kelompok: "karu",
  file: "karu",
  pendidikan: "",
  sambutan:
    "Selamat datang di Ruang Teratai. Kami berusaha agar setiap pasien dan keluarganya tahu apa yang sedang terjadi selama perawatan. Jika ada yang ingin ditanyakan, silakan sampaikan ke perawat yang bertugas.",
};

const KELOMPOK = {
  ccm: "Clinical Case Manager",
  katim: "Ketua Tim",
  pp: "Perawat Pelaksana",
  staf: "Staf",
};

// Buat daftar contoh: n orang per kelompok, file "<kelompok>-01", "-02", dst.
const contoh = (kelompok, n, jabatan) =>
  Array.from({ length: n }, (_, i) => {
    const no = String(i + 1).padStart(2, "0");
    return { nama: "Nama menyusul", jabatan: n > 1 ? `${jabatan} ${i + 1}` : jabatan, kelompok, file: `${kelompok}-${no}` };
  });

// Ganti baris-baris di bawah dengan data asli, misalnya:
// { nama: "Ns. Siti Aminah, S.Kep.", jabatan: "Ketua Tim 1", kelompok: "katim", file: "katim-01" },
const PEGAWAI = [
  ...contoh("ccm", 1, "Clinical Case Manager"),
  ...contoh("katim", 3, "Ketua Tim"),
  ...contoh("pp", 15, "Perawat Pelaksana"),
  ...contoh("staf", 5, "Staf"),
];

/* =========================================================
   DATA PEGAWAI — semua masih DUMMY.
   Cara mengganti:
   1. Simpan foto di assets/img/pegawai/ (potret tegak: kepala ruangan 4:5, pegawai lain 3:4; .jpg/.webp, lebar ±800 px)
   2. Isi "foto" dengan path-nya, contoh: "assets/img/pegawai/kepala-ruangan.jpg"
   3. Kalau "foto" dikosongkan (""), yang tampil adalah kotak placeholder.
   ========================================================= */

const KEPALA_RUANGAN = {
  nama: "Ns. Nama Kepala Ruangan, S.Kep.",
  jabatan: "Kepala Ruangan",
  foto: "",
  pendidikan: "S1 Keperawatan + Profesi Ners",
  sambutan:
    "Selamat datang di Ruang Teratai 1. Kami berusaha agar setiap pasien dan keluarganya tahu apa yang sedang terjadi selama perawatan. Jika ada yang ingin ditanyakan, silakan sampaikan ke perawat yang bertugas.",
};

// kelompok: "pengelola" | "perawat" | "pendukung"
const PEGAWAI = [
  { nama: "Ns. Nama Pegawai, S.Kep.", jabatan: "Ketua Tim A", kelompok: "pengelola", pendidikan: "Profesi Ners", foto: "" },
  { nama: "Ns. Nama Pegawai, S.Kep.", jabatan: "Ketua Tim B", kelompok: "pengelola", pendidikan: "Profesi Ners", foto: "" },
  { nama: "Nama Pegawai, A.Md.Kep.", jabatan: "Perawat Penanggung Jawab Shift", kelompok: "pengelola", pendidikan: "D3 Keperawatan", foto: "" },

  { nama: "Ns. Nama Pegawai, S.Kep.", jabatan: "Perawat Pelaksana", kelompok: "perawat", pendidikan: "Profesi Ners", foto: "" },
  { nama: "Ns. Nama Pegawai, S.Kep.", jabatan: "Perawat Pelaksana", kelompok: "perawat", pendidikan: "Profesi Ners", foto: "" },
  { nama: "Nama Pegawai, A.Md.Kep.", jabatan: "Perawat Pelaksana", kelompok: "perawat", pendidikan: "D3 Keperawatan", foto: "" },
  { nama: "Nama Pegawai, A.Md.Kep.", jabatan: "Perawat Pelaksana", kelompok: "perawat", pendidikan: "D3 Keperawatan", foto: "" },
  { nama: "Ns. Nama Pegawai, S.Kep.", jabatan: "Perawat Pelaksana", kelompok: "perawat", pendidikan: "Profesi Ners", foto: "" },
  { nama: "Nama Pegawai, A.Md.Kep.", jabatan: "Perawat Pelaksana", kelompok: "perawat", pendidikan: "D3 Keperawatan", foto: "" },

  { nama: "Nama Pegawai", jabatan: "Administrasi Ruangan", kelompok: "pendukung", pendidikan: "", foto: "" },
  { nama: "Nama Pegawai", jabatan: "Pramu Husada", kelompok: "pendukung", pendidikan: "", foto: "" },
  { nama: "Nama Pegawai", jabatan: "Petugas Kebersihan", kelompok: "pendukung", pendidikan: "", foto: "" },
];

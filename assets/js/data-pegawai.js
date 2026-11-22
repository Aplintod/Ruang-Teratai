/* =========================================================
   DATA PEGAWAI — semua masih DUMMY.

   Foto bisa dipasang dengan dua cara:
   A. Otomatis: simpan foto dengan nama sesuai urutan di daftar ini.
      - Kepala ruangan      → assets/img/teratai/pegawai/kepala-ruangan.jpg
      - Pegawai ke-1, ke-2… → assets/img/teratai/pegawai/pegawai-01.jpg, pegawai-02.jpg, dst.
      (urutan = urutan baris di array PEGAWAI di bawah)
   B. Manual: isi "foto" dengan path lengkap, contoh "assets/img/teratai/pegawai/budi.jpg"

   Potret tegak: kepala ruangan 4:5, pegawai lain 3:4. Format .jpg/.png/.webp, lebar ±800 px.
   ========================================================= */

const KEPALA_RUANGAN = {
  nama: "Ns. Nama Kepala Ruangan, S.Kep.",
  jabatan: "Kepala Ruangan",
  foto: "",
  pendidikan: "S1 Keperawatan + Profesi Ners",
  sambutan:
    "Selamat datang di Ruang Teratai. Kami berusaha agar setiap pasien dan keluarganya tahu apa yang sedang terjadi selama perawatan. Jika ada yang ingin ditanyakan, silakan sampaikan ke perawat yang bertugas.",
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

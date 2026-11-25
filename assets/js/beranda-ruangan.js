/* Beranda ruangan: nama & sambutan kepala ruangan diambil dari data-pegawai.js */
// Nama & sambutan kepala ruangan diambil dari data-pegawai.js
document.querySelectorAll('[data-karu="nama"]').forEach((el) => { el.textContent = KEPALA_RUANGAN.nama; });
document.querySelectorAll('[data-karu="sambutan"]').forEach((el) => { el.textContent = KEPALA_RUANGAN.sambutan; });

/**
 * Penyimpan review situs RSUD AWS ke Google Sheets.
 * Panduan pemasangan: lihat dokumentasi/REVIEW.md
 *
 * Script ini dipasang dari Google Sheet (Ekstensi → Apps Script),
 * lalu di-deploy sebagai Web App.
 */

const NAMA_SHEET = "Review";

// Hanya jawaban yang sama persis dengan pilihan di formulir yang diterima
const PILIHAN_PERAN = ["Pasien", "Keluarga pasien", "Pengunjung", "Mahasiswa", "Petugas RS", "Lainnya"];
const PILIHAN_RUANGAN = ["Ruang Teratai", "Ruangan lain", "Tidak sedang dirawat"];
const PILIHAN_BAGIAN = ["Profil RS", "Petugas & struktur", "Denah", "Fasilitas", "Tata tertib & jam besuk", "Edukasi", "Hak & kewajiban"];

// Batas kiriman untuk menahan banjir kiriman otomatis (spam)
const BATAS_KIRIMAN = 40; // kiriman maksimal...
const JENDELA_DETIK = 600; // ...dalam 10 menit
const KOLOM = [
  "Waktu",
  "Peran",
  "Ruangan",
  "Bintang (1-5)",
  "Mudah ditemukan (1-5)",
  "Bahasa mudah dipahami (1-5)",
  "Membantu selama di RS (1-5)",
  "Nyaman di HP (1-5)",
  "Bagian paling membantu",
  "Kritik & saran",
  "Halaman",
];

function doPost(e) {
  const p = (e && e.parameter) || {};

  // Kolom jebakan bot: manusia tidak pernah mengisinya
  if (p.website) return balas({ ok: true });

  const bintang = angka(p.bintang);
  const peran = pilih(p.peran, PILIHAN_PERAN);
  const ruangan = pilih(p.ruangan, PILIHAN_RUANGAN);
  if (!bintang || !peran || !ruangan) return balas({ ok: false, error: "isian tidak valid" });
  const bagian = String(p.bagian || "")
    .split(",")
    .map((x) => x.trim())
    .filter((x) => PILIHAN_BAGIAN.indexOf(x) !== -1)
    .join(", ");

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    // Pembatas jumlah kiriman
    const cache = CacheService.getScriptCache();
    const jumlah = Number(cache.get("jumlah_kiriman") || 0);
    if (jumlah >= BATAS_KIRIMAN) return balas({ ok: false, error: "terlalu banyak kiriman, coba lagi nanti" });
    cache.put("jumlah_kiriman", String(jumlah + 1), JENDELA_DETIK);

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(NAMA_SHEET) || ss.insertSheet(NAMA_SHEET);
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(KOLOM);
      sheet.setFrozenRows(1);
    }
    sheet.appendRow([
      new Date(),
      peran,
      ruangan,
      bintang,
      angka(p.mudah),
      angka(p.bahasa),
      angka(p.membantu),
      angka(p.hp),
      bagian,
      teks(p.saran, 1000),
      teks(p.halaman, 200),
    ]);
  } finally {
    lock.releaseLock();
  }
  return balas({ ok: true });
}

// Untuk mengecek apakah Web App sudah aktif: buka URL-nya di browser
function doGet() {
  return balas({ ok: true, pesan: "Endpoint review aktif" });
}

// Jawaban harus salah satu pilihan yang tersedia
function pilih(v, daftar) {
  const s = String(v || "").trim();
  return daftar.indexOf(s) !== -1 ? s : "";
}

// Nilai 1-5, selain itu dikosongkan
function angka(v) {
  const n = Number(v);
  return n >= 1 && n <= 5 && Math.round(n) === n ? n : "";
}

// Potong teks dan cegah isian dibaca sebagai rumus spreadsheet
function teks(v, maks) {
  const s = String(v || "").slice(0, maks).trim();
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function balas(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

/**
 * Penyimpan review situs RSUD AWS ke Google Sheets.
 * Panduan pemasangan: lihat dokumentasi/REVIEW.md
 *
 * Script ini dipasang dari Google Sheet (Ekstensi → Apps Script),
 * lalu di-deploy sebagai Web App.
 */

const NAMA_SHEET = "Review";
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
  if (!bintang) return balas({ ok: false, error: "bintang tidak valid" });

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(NAMA_SHEET) || ss.insertSheet(NAMA_SHEET);
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(KOLOM);
      sheet.setFrozenRows(1);
    }
    sheet.appendRow([
      new Date(),
      teks(p.peran, 40),
      teks(p.ruangan, 40),
      bintang,
      angka(p.mudah),
      angka(p.bahasa),
      angka(p.membantu),
      angka(p.hp),
      teks(p.bagian, 300),
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

/**
 * Penyimpan review situs RSUD AWS ke Google Sheets, lengkap dengan
 * tampilan rapi dan sheet "Ringkasan" berisi angka dan grafik.
 * Panduan pemasangan: dokumentasi/REVIEW.md
 *
 * Script ini dipasang dari Google Sheet (Ekstensi → Apps Script).
 * Jalankan fungsi setup() sekali, lalu deploy sebagai Web App.
 */

const NAMA_SHEET = "Review";
const NAMA_RINGKASAN = "Ringkasan";

// Hanya jawaban yang sama persis dengan pilihan di formulir yang diterima
const PILIHAN_PERAN = ["Pasien", "Keluarga pasien", "Pengunjung", "Mahasiswa", "Petugas RS", "Lainnya"];
const PILIHAN_RUANGAN = ["Ruang Teratai", "Ruangan lain", "Tidak sedang dirawat"];
const PILIHAN_BAGIAN = ["Profil RS", "Petugas & struktur", "Denah", "Fasilitas", "Tata tertib & jam besuk", "Edukasi", "Hak & kewajiban"];
const ASPEK = [
  ["Mudah ditemukan", "E"],
  ["Bahasa mudah dipahami", "F"],
  ["Membantu selama di RS", "G"],
  ["Nyaman di HP", "H"],
];

// Batas kiriman untuk menahan banjir kiriman otomatis (spam)
const BATAS_KIRIMAN = 40; // kiriman maksimal...
const JENDELA_DETIK = 600; // ...dalam 10 menit

// Warna mengikuti logo RSUD AWS
const WARNA = {
  biruTua: "#0b3478",
  biru: "#0c54cc",
  hijau: "#00843a",
  hijauKuning: "#b7d433",
  kuning: "#f4c623",
  latar: "#f1f5fb",
  garis: "#dfe8f4",
  merahMuda: "#f8d7d4",
  kuningMuda: "#fff1c2",
  hijauMuda: "#cfeedd",
};

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

/* =========================================================
   1. MENERIMA REVIEW DARI SITUS
   ========================================================= */

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

    const sheet = sheetReview_();
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

/* =========================================================
   2. SETUP TAMPILAN (jalankan sekali dari editor, atau lewat
      menu "Review Situs" di Google Sheet)
   ========================================================= */

function setup() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  rapikanReview_(sheetReview_());
  buatRingkasan_(ss);
  ss.setActiveSheet(ss.getSheetByName(NAMA_RINGKASAN));
  SpreadsheetApp.flush();
}

// Menu tambahan saat Sheet dibuka
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("Review Situs")
    .addItem("Rapikan tampilan & perbarui grafik", "setup")
    .addToUi();
}

function sheetReview_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(NAMA_SHEET) || ss.insertSheet(NAMA_SHEET, 0);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(KOLOM);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function rapikanReview_(sheet) {
  const BARIS = 2000; // jangkauan format; baris baru di bawahnya tetap tercatat
  const n = KOLOM.length;
  if (sheet.getMaxRows() < BARIS) sheet.insertRowsAfter(sheet.getMaxRows(), BARIS - sheet.getMaxRows());

  // Header
  sheet.getRange(1, 1, 1, n).setValues([KOLOM])
    .setFontWeight("bold").setFontColor("#ffffff").setBackground(WARNA.biruTua)
    .setVerticalAlignment("middle").setWrap(true);
  sheet.setRowHeight(1, 42);
  sheet.setFrozenRows(1);

  // Baris berwarna selang-seling
  sheet.getBandings().forEach((b) => b.remove());
  sheet.getRange(1, 1, BARIS, n)
    .applyRowBanding(SpreadsheetApp.BandingTheme.BLUE, true, false)
    .setHeaderRowColor(WARNA.biruTua)
    .setFirstRowColor("#ffffff")
    .setSecondRowColor(WARNA.latar);

  // Lebar kolom & format isi
  [150, 130, 150, 95, 120, 120, 120, 110, 230, 420, 220].forEach((w, i) => sheet.setColumnWidth(i + 1, w));
  sheet.getRange(2, 1, BARIS - 1, 1).setNumberFormat("dd/mm/yyyy hh:mm");
  sheet.getRange(2, 4, BARIS - 1, 5).setHorizontalAlignment("center");
  sheet.getRange(2, 9, BARIS - 1, 2).setWrap(true);
  sheet.getRange(2, 1, BARIS - 1, n).setVerticalAlignment("top");

  // Warna nilai 1-5: merah (rendah) → kuning → hijau (tinggi)
  const rentang = sheet.getRange(2, 4, BARIS - 1, 5);
  const aturan = SpreadsheetApp.newConditionalFormatRule()
    .setGradientMinpointWithValue(WARNA.merahMuda, SpreadsheetApp.InterpolationType.NUMBER, "1")
    .setGradientMidpointWithValue(WARNA.kuningMuda, SpreadsheetApp.InterpolationType.NUMBER, "3")
    .setGradientMaxpointWithValue(WARNA.hijauMuda, SpreadsheetApp.InterpolationType.NUMBER, "5")
    .setRanges([rentang])
    .build();
  sheet.setConditionalFormatRules([aturan]);
}

function buatRingkasan_(ss) {
  let sh = ss.getSheetByName(NAMA_RINGKASAN);
  if (!sh) sh = ss.insertSheet(NAMA_RINGKASAN, 0);
  sh.getCharts().forEach((c) => sh.removeChart(c));
  sh.clear();
  sh.getRange(1, 1, sh.getMaxRows(), sh.getMaxColumns()).breakApart();
  sh.setHiddenGridlines(true);
  const R = "'" + NAMA_SHEET + "'!";

  // Judul
  sh.getRange("A1:F1").merge().setValue("Ringkasan Review Situs RSUD Abdoel Wahab Sjahranie")
    .setFontSize(16).setFontWeight("bold").setFontColor("#ffffff").setBackground(WARNA.biruTua)
    .setVerticalAlignment("middle");
  sh.setRowHeight(1, 44);
  sh.getRange("A2:F2").merge().setValue("Angka dan grafik diperbarui otomatis setiap ada review baru.")
    .setFontColor("#66738a").setFontStyle("italic");

  // Kartu angka utama
  const kartu = [
    ["A", "Total review", "=COUNTA(" + R + "A2:A)", "0"],
    ["C", "Rata-rata bintang", "=IFERROR(AVERAGE(" + R + "D2:D),0)", "0.00"],
    ["E", "Memberi bintang 4–5", "=IFERROR(COUNTIF(" + R + "D2:D,\">=4\")/COUNT(" + R + "D2:D),0)", "0%"],
  ];
  kartu.forEach(([kol, label, rumus, format]) => {
    const k2 = String.fromCharCode(kol.charCodeAt(0) + 1);
    sh.getRange(kol + "4:" + k2 + "4").merge().setValue(label)
      .setFontColor("#3e4c63").setBackground(WARNA.latar).setFontWeight("bold");
    sh.getRange(kol + "5:" + k2 + "5").merge().setFormula(rumus).setNumberFormat(format)
      .setFontSize(26).setFontWeight("bold").setFontColor(WARNA.biru).setBackground(WARNA.latar)
      .setHorizontalAlignment("left");
  });
  sh.getRange("A6:B6").merge().setFormula("=\"7 hari terakhir: \"&COUNTIF(" + R + "A2:A,\">=\"&(TODAY()-7))&\" review\"")
    .setFontColor("#3e4c63");
  sh.setRowHeight(5, 48);

  // Tabel-tabel sumber grafik
  const judulTabel = (sel, a, b) => sh.getRange(sel).setValues([[a, b]])
    .setFontWeight("bold").setBackground(WARNA.garis).setFontColor(WARNA.biruTua);

  judulTabel("A8:B8", "Bintang", "Jumlah");
  for (let i = 1; i <= 5; i++) {
    sh.getRange(8 + i, 1).setValue(i + " bintang");
    sh.getRange(8 + i, 2).setFormula("=COUNTIF(" + R + "D2:D," + i + ")");
  }

  judulTabel("D8:E8", "Aspek (skala 1–5)", "Rata-rata");
  ASPEK.forEach(([nama, kol], i) => {
    sh.getRange(9 + i, 4).setValue(nama);
    sh.getRange(9 + i, 5).setFormula("=IFERROR(AVERAGE(" + R + kol + "2:" + kol + "),0)").setNumberFormat("0.00");
  });

  judulTabel("A16:B16", "Mengisi sebagai", "Jumlah");
  PILIHAN_PERAN.forEach((x, i) => {
    sh.getRange(17 + i, 1).setValue(x);
    sh.getRange(17 + i, 2).setFormula("=COUNTIF(" + R + "B2:B,A" + (17 + i) + ")");
  });

  judulTabel("D16:E16", "Bagian paling membantu", "Dipilih");
  PILIHAN_BAGIAN.forEach((x, i) => {
    sh.getRange(17 + i, 4).setValue(x);
    sh.getRange(17 + i, 5).setFormula("=COUNTIF(" + R + "I2:I,\"*\"&D" + (17 + i) + "&\"*\")");
  });

  judulTabel("A26:B26", "Tanggal", "Review");
  for (let i = 0; i < 14; i++) {
    const r = 27 + i;
    sh.getRange(r, 1).setFormula("=TODAY()-" + (13 - i)).setNumberFormat("dd/mm");
    sh.getRange(r, 2).setFormula("=COUNTIFS(" + R + "A2:A,\">=\"&A" + r + "," + R + "A2:A,\"<\"&(A" + r + "+1))");
  }

  [130, 80, 24, 190, 130, 24].forEach((w, i) => sh.setColumnWidth(i + 1, w));
  sh.getRange("A8:E40").setFontColor("#12233d");

  // Grafik (di kolom G ke kanan)
  const grafik = (jenis, rentang, judul, baris, opsi) => {
    let b = sh.newChart().setChartType(jenis).addRange(sh.getRange(rentang))
      .setPosition(baris, 7, 0, 0)
      .setOption("title", judul)
      .setOption("titleTextStyle", { color: WARNA.biruTua, fontSize: 14, bold: true })
      .setOption("width", 620).setOption("height", 300)
      .setOption("legend", { position: "none" })
      .setOption("backgroundColor", "#ffffff");
    Object.keys(opsi || {}).forEach((k) => { b = b.setOption(k, opsi[k]); });
    sh.insertChart(b.build());
  };

  grafik(Charts.ChartType.COLUMN, "A9:B13", "Distribusi bintang", 1,
    { colors: [WARNA.kuning], vAxis: { minValue: 0, format: "0" } });
  grafik(Charts.ChartType.BAR, "D9:E12", "Rata-rata tiap aspek (1–5)", 17,
    { colors: [WARNA.hijau], hAxis: { minValue: 0, maxValue: 5 } });
  grafik(Charts.ChartType.PIE, "A17:B22", "Siapa yang mengisi", 33,
    { pieHole: 0.45, legend: { position: "right" },
      colors: [WARNA.biru, WARNA.hijau, WARNA.kuning, WARNA.hijauKuning, WARNA.biruTua, "#9fb0c8"] });
  grafik(Charts.ChartType.BAR, "D17:E23", "Bagian paling membantu", 49,
    { colors: [WARNA.biru], hAxis: { minValue: 0, format: "0" } });
  grafik(Charts.ChartType.LINE, "A27:B40", "Review per hari (14 hari terakhir)", 65,
    { colors: [WARNA.biru], vAxis: { minValue: 0, format: "0" }, pointSize: 5, lineWidth: 3 });
}

/* =========================================================
   3. FUNGSI BANTU
   ========================================================= */

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

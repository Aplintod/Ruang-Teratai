/* =========================================================
   Header, footer, menu, tab, animasi, ilustrasi, foto otomatis.
   Header & footer ditulis di sini supaya cukup diubah sekali.
   ========================================================= */

const SITE = {
  rs: "RSUD Abdoel Wahab Sjahranie",
  rsPendek: "RSUD AWS",
  kota: "Samarinda, Kalimantan Timur",
  alamat: "Jl. Palang Merah Indonesia No. 1, Sidodadi, Samarinda Ulu, Samarinda, Kalimantan Timur 75123",
  telpRs: "(0541) 738118",      // sesuai situs resmi rsudaws.co.id
  telpRsLink: "+62541738118",
  telpRs2: "(0541) 741793",
  peta: "https://www.google.com/maps/search/?api=1&query=RSUD+Abdoel+Wahab+Sjahranie+Samarinda",
  // Ruang Teratai
  telpRuang: "Ext. —", // TODO: belum ada data
  besuk: "16.00–18.00", // dari lembar Tata Tertib Ruang Teratai
  // Alamat Web App Google Apps Script untuk menyimpan review (lihat dokumentasi/REVIEW.md).
  // Selama masih kosong, formulir review tampil tetapi belum bisa mengirim data.
  reviewUrl: "https://script.google.com/macros/s/AKfycbysxp5UYmgF1V5X8PlY0IPuBtYcczBOa1N7gm6lhERylI220st46D_2kw68jV-j0ruTFg/exec",
};

/* Jadwal harian Ruang Teratai. Jam ditulis desimal: 7.5 = 07.30.
   Jam besuk dari tata tertib RS; kegiatan lain MASIH PERKIRAAN. */
const JADWAL = [
  // baris 1: pergantian shift
  { jenis: "titik", jam: 7, teks: "Ganti shift pagi", baris: 1 },
  { jenis: "titik", jam: 14, teks: "Ganti shift sore", baris: 1 },
  { jenis: "titik", jam: 21, teks: "Ganti shift malam", baris: 1 },
  // baris 2: dokter & istirahat
  { jenis: "visite", dari: 8, sampai: 12, teks: "Visite dokter", baris: 2 },
  { jenis: "istirahat", dari: 13, sampai: 16, teks: "Istirahat siang", baris: 2 },
  { jenis: "istirahat", dari: 21, sampai: 23, teks: "Lampu redup", baris: 2 },
  // baris 3: besuk
  { jenis: "besuk", dari: 16, sampai: 18, teks: "Jam besuk", baris: 3 },
  // baris 4: makan & pemeriksaan rutin
  { jenis: "titik", jam: 6, teks: "Cek tanda vital", baris: 4 },
  { jenis: "titik", jam: 7.5, teks: "Sarapan", baris: 4 },
  { jenis: "titik", jam: 12, teks: "Makan siang", baris: 4 },
  { jenis: "titik", jam: 18.5, teks: "Makan sore", baris: 4 },
];

/* Menu utama. "cocok" = awalan alamat yang ikut membuat menu itu aktif. */
const NAV = [
  { href: "halaman/profil.html", label: "Profil RS" },
  { href: "halaman/ruangan.html", label: "Ruangan", cocok: "halaman/ruangan/" },
  { href: "halaman/edukasi.html", label: "Edukasi" },
  { href: "halaman/hak-kewajiban.html", label: "Hak & Kewajiban" },
  { href: "halaman/review.html", label: "Review" },
  // Orientasi disembunyikan sementara. Untuk memunculkan lagi, hapus tanda // di baris berikut:
  // { href: "halaman/orientasi.html", label: "Orientasi" },
];

/* Sub-menu tiap ruangan. Ruangan baru cukup ditambahkan di sini + dibuatkan foldernya. */
const RUANGAN = {
  teratai: {
    nama: "Ruang Teratai",
    folder: "halaman/ruangan/teratai/",
    menu: [
      ["index.html", "Beranda"],
      ["petugas.html", "Petugas & Struktur"],
      ["denah.html", "Denah"],
      ["fasilitas.html", "Fasilitas"],
      ["tata-tertib.html", "Tata Tertib"],
    ],
  },
};

/* ---------- Ilustrasi garis (dipakai dengan <svg class="ill"><use href="#nama"/></svg>) ---------- */
const SPRITE = `<svg xmlns="http://www.w3.org/2000/svg" style="display:none" aria-hidden="true">
<symbol id="bed" viewBox="0 0 64 64"><path d="M6 46V16M6 38h52v8M58 46v-8M6 32h14M26 32h22a10 10 0 0 1 10 6M10 32v-4a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v4M6 46h4M54 46h4"/></symbol>
<symbol id="bell" viewBox="0 0 64 64"><path d="M32 10a3 3 0 0 1 3 3v2.5A15 15 0 0 1 47 30v9l5 7H12l5-7v-9a15 15 0 0 1 12-14.5V13a3 3 0 0 1 3-3ZM26 50a6 6 0 0 0 12 0"/><path d="M52 18c2 2.5 3 5.5 3 9M12 18c-2 2.5-3 5.5-3 9"/></symbol>
<symbol id="shower" viewBox="0 0 64 64"><path d="M12 56V18a8 8 0 0 1 16 0v1M20 21h16M28 21a9 9 0 0 1 9 9H19a9 9 0 0 1 9-9ZM21 36v3M28 36v3M35 36v3M24.5 44v3M31.5 44v3M28 52v2"/><path d="M42 56h12M48 56V40"/></symbol>
<symbol id="ac" viewBox="0 0 64 64"><path d="M8 14h48v18H8zM14 25h36"/><path d="M20 38c-2 3 2 5 0 8s2 5 0 8M32 38c-2 3 2 5 0 8s2 5 0 8M44 38c-2 3 2 5 0 8s2 5 0 8"/></symbol>
<symbol id="tv" viewBox="0 0 64 64"><path d="M8 14h48v32H8zM24 54h16M32 46v8M14 40l8-8 6 6 10-12 12 14"/></symbol>
<symbol id="oxygen" viewBox="0 0 64 64"><path d="M18 8h28v24H18z"/><circle cx="32" cy="20" r="5"/><path d="M32 32v6c0 5-8 5-8 11v7M24 56h8M20 14h3M41 14h3"/></symbol>
<symbol id="wash" viewBox="0 0 64 64"><path d="M12 14h22a6 6 0 0 1 6 6v4M23 14V9M17 9h12M40 29v3M40 36v2"/><path d="M10 52c5-8 12-12 22-12s17 4 22 12M18 52c3-4 8-6 14-6s11 2 14 6"/></symbol>
<symbol id="rail" viewBox="0 0 64 64"><path d="M6 48V18M6 40h52v8M58 48v-8M12 40V28h30v12M12 28h30M19 28v12M26 28v12M33 28v12M10 30h0"/><path d="M48 22v10M48 36v.5"/></symbol>
<symbol id="food" viewBox="0 0 64 64"><path d="M8 32h48a24 24 0 0 1-48 0ZM6 56h52"/><path d="M24 10c-3 4 3 6 0 10s3 6 0 8M32 8c-3 4 3 6 0 10s3 6 0 8M40 10c-3 4 3 6 0 10s3 6 0 8"/></symbol>
<symbol id="pill" viewBox="0 0 64 64"><path d="M24 44 44 24a8.5 8.5 0 0 1 12 12L36 56a8.5 8.5 0 0 1-12-12ZM34 34l12 12"/><circle cx="18" cy="18" r="10"/><path d="M11 25l14-14"/></symbol>
<symbol id="moon" viewBox="0 0 64 64"><path d="M40 10a22 22 0 1 0 16 32 18 18 0 0 1-16-32Z"/><path d="M48 12v6M45 15h6M54 24v4M52 26h4"/></symbol>
<symbol id="badge" viewBox="0 0 64 64"><path d="M14 16h36v40H14zM26 8h12v10H26z"/><circle cx="32" cy="32" r="6"/><path d="M22 50c2-5 6-8 10-8s8 3 10 8"/></symbol>
<symbol id="clock" viewBox="0 0 64 64"><circle cx="32" cy="32" r="23"/><path d="M32 18v14l9 6"/></symbol>
<symbol id="door" viewBox="0 0 64 64"><path d="M16 56V8h30v48M8 56h48M38 32h.5"/><path d="M46 12l8 4v40"/></symbol>
<symbol id="doc" viewBox="0 0 64 64"><path d="M16 8h22l10 10v38H16zM38 8v10h10M23 30h18M23 38h18M23 46h11"/></symbol>
<symbol id="phone" viewBox="0 0 64 64"><path d="M20 10h8l4 11-5.5 3.5a26 26 0 0 0 13 13L43 32l11 4v8a4 4 0 0 1-4 4C29 48 16 35 16 14a4 4 0 0 1 4-4Z"/></symbol>
<symbol id="family" viewBox="0 0 64 64"><circle cx="22" cy="18" r="7"/><circle cx="44" cy="22" r="5.5"/><path d="M8 54c0-10 6-18 14-18s14 8 14 18M34 54c0-8 4-14 10-14s10 6 10 14"/></symbol>
<symbol id="steth" viewBox="0 0 64 64"><path d="M16 8v16a11 11 0 0 0 22 0V8M12 8h8M34 8h8M27 35v5a12 12 0 0 0 24 0v-6"/><circle cx="51" cy="29" r="5"/></symbol>
<symbol id="home" viewBox="0 0 64 64"><path d="M8 30 32 10l24 20M15 25v31h34V25M27 56V42h10v14"/></symbol>
<symbol id="map" viewBox="0 0 64 64"><path d="M32 56s-16-15-16-28a16 16 0 0 1 32 0c0 13-16 28-16 28Z"/><circle cx="32" cy="28" r="6"/></symbol>
<symbol id="chat" viewBox="0 0 64 64"><path d="M10 14h44v28H30l-12 10V42h-8z"/><path d="M20 25h24M20 32h16"/></symbol>
<symbol id="shield" viewBox="0 0 64 64"><path d="M32 8 12 16v14c0 13 9 22 20 26 11-4 20-13 20-26V16Z"/><path d="m23 32 6 6 12-12"/></symbol>
<symbol id="wifi" viewBox="0 0 64 64"><path d="M8 26a34 34 0 0 1 48 0M16 34a22 22 0 0 1 32 0M24 42a10 10 0 0 1 16 0"/><circle cx="32" cy="50" r="2"/></symbol>
<symbol id="mask" viewBox="0 0 64 64"><path d="M14 22c6-3 12-4 18-4s12 1 18 4v12c0 9-8 14-18 14s-18-5-18-14Z"/><path d="M14 26H8a4 4 0 0 0 0 8h6M50 26h6a4 4 0 0 1 0 8h-6M22 28h20M22 35h20"/></symbol>
<symbol id="trash" viewBox="0 0 64 64"><path d="M12 18h40M26 18v-6h12v6M16 18l3 38h26l3-38M27 28v18M37 28v18"/></symbol>
<symbol id="hand" viewBox="0 0 64 64"><path d="M22 34V14a4 4 0 0 1 8 0v16M30 30V10a4 4 0 0 1 8 0v20M38 30V14a4 4 0 0 1 8 0v22c0 12-7 20-17 20-7 0-11-4-15-10l-6-10a4 4 0 0 1 7-4l5 7"/></symbol>
<symbol id="building" viewBox="0 0 64 64"><path d="M10 56V20l22-10 22 10v36M6 56h52M26 56V42h12v14M32 20v10M27 25h10M18 30h4M42 30h4M18 40h4M42 40h4"/></symbol>
<symbol id="star" viewBox="0 0 64 64"><path d="m32 8 7 15 16 2-12 11 3 16-14-8-14 8 3-16L9 25l16-2Z"/></symbol>
<symbol id="arrow" viewBox="0 0 16 16"><path d="M2 8h12M9 3l5 5-5 5"/></symbol>
</svg>`;

const LOTUS = `<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.2" aria-hidden="true"><path d="M20 7c4.2 4.6 5.3 10.4 0 17.5C14.7 17.4 15.8 11.6 20 7Z"/><path d="M20 24.5c-4.6-1-9.2-4.9-10.6-11.6 6 .8 9.4 4.9 10.6 11.6Zm0 0c4.6-1 9.2-4.9 10.6-11.6-6 .8-9.4 4.9-10.6 11.6Z"/><path d="M20 25c-6 .2-12-2.2-15-6.8 6-.3 11 2.4 15 6.8Zm0 0c6 .2 12-2.2 15-6.8-6-.3-11 2.4-15 6.8Z"/><path d="M8 30.5h24M13 34h14"/></svg>`;

/* ROOT = alamat folder utama situs, dihitung dari lokasi file script ini.
   Dengan begitu link & foto tetap benar, baik dari index.html maupun dari halaman/*.html */
const ROOT = (document.currentScript && document.currentScript.src)
  ? document.currentScript.src.replace(/assets\/js\/main\.js.*$/, "")
  : "";
const url = (h) => ROOT + h;
const herePath = location.pathname.replace(/\/$/, "/index.html");
const isHere = (h) => { try { return new URL(url(h), location.href).pathname === herePath; } catch (e) { return false; } };
const isUnder = (prefix) => { try { return herePath.startsWith(new URL(url(prefix), location.href).pathname); } catch (e) { return false; } };
const isActive = (n) => isHere(n.href) || (n.cocok && isUnder(n.cocok));

/* ---------- Ukuran teks ---------- */
const SIZES = ["", "l", "xl"];
function store(key, val) {
  try { if (val === undefined) return localStorage.getItem(key); localStorage.setItem(key, val); } catch (e) { return null; }
}
function applySize(s) {
  if (s) document.documentElement.dataset.size = s; else delete document.documentElement.dataset.size;
  document.querySelectorAll(".size-btn").forEach((b) => {
    const i = SIZES.indexOf(s || "");
    b.querySelectorAll(".dots i").forEach((d, k) => d.classList.toggle("on", k <= i));
    const st = b.querySelector(".size-state");
    if (st) st.textContent = ` (ukuran teks ${["normal", "besar", "lebih besar"][i]})`;
  });
}
applySize(store("teratai-size") || "");

function renderHeader() {
  const el = document.getElementById("site-header");
  if (!el) return;

  const items = NAV.map((n) => `<a href="${url(n.href)}"${isActive(n) ? ' class="active" aria-current="page"' : ""}>${n.label}</a>`).join("");
  const mobile = NAV.map((n, i) => `<li><a href="${url(n.href)}"><small>0${i + 1}</small>${n.label}</a></li>`).join("");
  const sizeBtn = `<button class="size-btn" type="button"><b aria-hidden="true">Aa</b><span class="t">Ukuran teks</span><span class="sr size-state"></span><span class="dots" aria-hidden="true"><i></i><i></i><i></i></span></button>`;

  el.className = "site-header";
  el.innerHTML = `
    <div class="wrap">
      <a class="brand" href="${url("index.html")}">
        <span><span class="brand-name"><span class="brand-full">${SITE.rs}</span><span class="brand-short">${SITE.rsPendek}</span></span><span class="brand-sub">${SITE.kota}</span></span>
      </a>
      <nav class="nav" aria-label="Menu utama">${items}</nav>
      <div class="head-right">
        <button class="search-btn" type="button" aria-label="Cari informasi" title="Cari"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg></button>
        ${sizeBtn}
        <a class="nav-cta" href="${url("halaman/profil.html#kontak")}">Kontak</a>
        <button class="menu-btn" type="button" aria-expanded="false" aria-controls="mobile-menu">Menu <i></i></button>
      </div>
    </div>`;

  const mm = document.createElement("div");
  mm.className = "mobile-menu";
  mm.id = "mobile-menu";
  mm.innerHTML = `<ol><li><a href="${url("index.html")}"><small>00</small>Beranda</a></li>${mobile}</ol>
    <div class="meta">${SITE.rs}<br><a href="tel:${SITE.telpRsLink}">Telepon ${SITE.telpRs}</a></div>`;
  el.after(mm);

  el.querySelector(".size-btn").addEventListener("click", () => {
    const cur = document.documentElement.dataset.size || "";
    const next = SIZES[(SIZES.indexOf(cur) + 1) % SIZES.length];
    store("teratai-size", next);
    applySize(next);
  });
  applySize(document.documentElement.dataset.size || "");

  const btn = el.querySelector(".menu-btn");
  btn.addEventListener("click", () => {
    const open = document.body.classList.toggle("menu-open");
    btn.setAttribute("aria-expanded", String(open));
  });

  document.addEventListener("keydown", (e) => { if (e.key === "Escape") document.body.classList.remove("menu-open"); });

  const onScroll = () => el.classList.toggle("scrolled", window.scrollY > 40);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* Sub-menu ruangan: <nav id="sub-nav" data-ruangan="teratai"></nav> */
function renderSubnav() {
  const el = document.getElementById("sub-nav");
  if (!el) return;
  const r = RUANGAN[el.dataset.ruangan];
  if (!r) return;
  el.className = "subnav";
  el.setAttribute("aria-label", `Menu ${r.nama}`);
  el.innerHTML = `<div class="wrap">
    <a class="ward" href="${url(r.folder + "index.html")}">${LOTUS}${r.nama}</a>
    <ul>${r.menu.map(([f, label]) => `<li><a href="${url(r.folder + f)}"${isHere(r.folder + f) ? ' class="active" aria-current="page"' : ""}>${label}</a></li>`).join("")}</ul>
  </div>`;
  // geser sub-menu hanya bila menu yang aktif tidak terlihat penuh di layar
  const act = el.querySelector("a.active"), w = el.querySelector(".wrap");
  if (act && act.offsetLeft + act.offsetWidth > w.clientWidth) w.scrollLeft = act.offsetLeft - 20;
}

function renderFooter() {
  const el = document.getElementById("site-footer");
  if (!el) return;
  const t = RUANGAN.teratai;
  el.className = "site-footer";
  el.innerHTML = `
    <div class="wrap">
      <div class="foot-top">
        <div>
          <p class="foot-h">Alamat</p>
          <p>${SITE.rs}<br>${SITE.alamat}</p>
          <p><a href="${SITE.peta}" target="_blank" rel="noopener">Buka di Google Maps</a></p>
        </div>
        <div>
          <p class="foot-h">Menu</p>
          <ul>${NAV.map((n) => `<li><a href="${url(n.href)}">${n.label}</a></li>`).join("")}</ul>
        </div>
        <div>
          <p class="foot-h">${t.nama}</p>
          <ul>${t.menu.map(([f, label]) => `<li><a href="${url(t.folder + f)}">${label}</a></li>`).join("")}</ul>
        </div>
        <div>
          <p class="foot-h">Kontak</p>
          <ul>
            <li><a href="tel:${SITE.telpRsLink}">Telepon RS ${SITE.telpRs}</a> / ${SITE.telpRs2}</li>
            <li>${t.nama} <span class="tbd" title="Data belum ada">${SITE.telpRuang}</span></li>
            <li>Jam besuk ${t.nama}: ${SITE.besuk}</li>
          </ul>
        </div>
      </div>
      <div class="foot-word" aria-hidden="true">RSUD <em>AWS</em></div>
      <div class="foot-bottom">
        <span>&copy; ${new Date().getFullYear()} ${SITE.rs}, ${SITE.kota}. Hak cipta dilindungi.</span>
        <span>Keadaan darurat di kamar: tekan bel pasien atau panggil perawat jaga.</span>
      </div>
    </div>`;
}

function initTabs() {
  document.querySelectorAll("[data-tabs]").forEach((wrap) => {
    const tabs = wrap.querySelectorAll('[role="tab"]');
    tabs.forEach((tab) => tab.addEventListener("click", () => {
      tabs.forEach((t) => {
        t.setAttribute("aria-selected", "false");
        document.getElementById(t.getAttribute("aria-controls")).hidden = true;
      });
      tab.setAttribute("aria-selected", "true");
      const panel = document.getElementById(tab.getAttribute("aria-controls"));
      panel.hidden = false;
      panel.querySelectorAll(".reveal").forEach((r) => r.classList.add("in"));
    }));
  });
}

function fillSiteData() {
  document.querySelectorAll("[data-site]").forEach((el) => {
    const v = SITE[el.dataset.site];
    if (v) el.textContent = v;
  });
}

/* ---------- Foto otomatis ----------
   <div class="media" data-img="teratai/lorong"> akan mencari
   assets/img/teratai/lorong.jpg / .jpeg / .png / .webp.
   Kalau ada, foto dipasang. Kalau tidak, placeholder tetap tampil. */
const EXT = ["webp", "jpg", "jpeg", "png"];
/* Saat build (build.sh), baris di bawah diganti daftar foto yang benar-benar ada,
   sehingga browser tidak perlu menebak ekstensi (tidak ada permintaan 404). */
const FOTO = null; // __DAFTAR_FOTO__
function findImage(list, done) {
  // list boleh berisi beberapa nama dipisah koma: dicoba berurutan, yang pertama ada dipakai
  const names = list.split(",").map((b) => b.trim()).filter(Boolean);
  if (FOTO) {
    for (const b of names) for (const e of EXT) if (FOTO.includes(`${b}.${e}`)) return done(`${ROOT}assets/img/${b}.${e}`);
    return;
  }
  const tries = names.flatMap((b) => EXT.map((e) => `${ROOT}assets/img/${b}.${e}`));
  let i = 0;
  const next = () => {
    if (i >= tries.length) return;
    const src = tries[i++];
    const im = new Image();
    im.onload = () => done(src);
    im.onerror = next;
    im.src = src;
  };
  next();
}
function initImages() {
  document.querySelectorAll("[data-img]:not([data-img-done])").forEach((el) => {
    el.setAttribute("data-img-done", "");
    findImage(el.dataset.img, (src) => {
      if (el.classList.contains("hero")) { el.style.setProperty("--hero-img", `url('${src}')`); el.classList.add("has-photo"); return; }
      const img = document.createElement("img");
      img.src = src;
      img.alt = el.dataset.cap || "";
      img.loading = "lazy";
      el.innerHTML = "";
      el.appendChild(img);
      el.classList.add("has-img");
    });
  });
}

/* ---------- Jadwal harian ruangan ---------- */
const fmt = (h) => `${String(Math.floor(h)).padStart(2, "0")}.${h % 1 ? String(Math.round((h % 1) * 60)).padStart(2, "0") : "00"}`;
function renderDay() {
  const el = document.querySelector("[data-day]");
  if (!el) return;
  const A = 5, B = 24, pos = (h) => ((h - A) / (B - A)) * 100;
  const rows = [[], [], [], [], []];
  JADWAL.forEach((j) => rows[j.baris || 1].push(j));

  let scale = "";
  for (let h = 6; h <= 22; h += 2) scale += `<span style="left:${pos(h)}%">${fmt(h)}</span>`;

  const rowHtml = (r) => r.map((j) => j.jenis === "titik"
    ? `<div class="day-dot" style="left:${pos(j.jam)}%"><i></i><span>${j.teks}</span></div>`
    : `<div class="day-bar ${j.jenis}" style="left:${pos(j.dari)}%;width:${pos(j.sampai) - pos(j.dari)}%" title="${fmt(j.dari)}–${fmt(j.sampai)}">${j.teks}</div>`).join("");

  const sorted = [...JADWAL].sort((a, b) => (a.jam ?? a.dari) - (b.jam ?? b.dari));
  el.innerHTML = `
    <div class="day-track" aria-hidden="true">
      <div class="day-scale">${scale}</div>
      ${[1, 2, 3, 4].map((n) => `<div class="day-row">${rowHtml(rows[n])}</div>`).join("")}
    </div>
    <ul class="day-list">${sorted.map((j) => `<li><time>${j.jam !== undefined ? fmt(j.jam) : fmt(j.dari) + "–" + fmt(j.sampai)}</time>
      <span class="t">${j.teks}${j.jenis === "besuk" ? '<span class="chip besuk">besuk</span>' : j.jenis === "visite" ? '<span class="chip visite">dokter</span>' : ""}</span></li>`).join("")}</ul>
    <div class="day-legend">
      <span><i style="background:var(--yellow)"></i>Jam besuk</span>
      <span><i style="background:var(--blue)"></i>Visite dokter</span>
      <span><i style="background:repeating-linear-gradient(135deg,var(--paper-3) 0 3px,var(--paper-2) 3px 6px)"></i>Waktu istirahat</span>
      <span><i style="border:1.5px solid var(--dark);border-radius:50%;background:var(--paper)"></i>Kegiatan rutin</span>
    </div>`;
}

/* ---------- Denah interaktif ---------- */
function initPlan() {
  const svg = document.querySelector("[data-plan]");
  if (!svg) return;
  const info = document.querySelector("[data-plan-info]");
  const areas = svg.querySelectorAll(".area");
  const pick = (a) => {
    areas.forEach((x) => x.classList.toggle("on", x === a));
    info.innerHTML = `<span class="k">${a.dataset.kind || "Area"}</span><h3 class="h3">${a.dataset.title}</h3><p>${a.dataset.desc}</p>`;
  };
  areas.forEach((a) => {
    a.setAttribute("tabindex", "0");
    a.setAttribute("role", "button");
    a.addEventListener("click", () => pick(a));
    a.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); pick(a); } });
  });
  const first = svg.querySelector(".area[data-default]");
  if (first) pick(first);
}

function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("in")); return; }
  const io = new IntersectionObserver((entries) => entries.forEach((en) => {
    if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
  }), { rootMargin: "0px 0px -8% 0px", threshold: .08 });
  els.forEach((e) => io.observe(e));
  const hero = document.querySelector(".hero");
  if (hero) requestAnimationFrame(() => setTimeout(() => hero.classList.add("ready"), 60));
}

/* ---------- Pencarian ---------- */
const CARI = [
  ["Jam besuk", "Jam besuk Ruang Teratai pukul 16.00–18.00", "halaman/ruangan/teratai/tata-tertib.html", "besuk kunjungan jenguk waktu sore jam"],
  ["Tata tertib Ruang Teratai", "Aturan untuk pasien, keluarga, dan pengunjung", "halaman/ruangan/teratai/tata-tertib.html", "aturan larangan tikar merokok anak penunggu"],
  ["Tata tertib pengunjung RS", "Aturan pengunjung yang berlaku di seluruh RSUD AWS", "halaman/ruangan/teratai/tata-tertib.html#tatib-rs", "aturan penunggu pendamping rokok jualan inventaris"],
  ["Denah Ruang Teratai", "Letak kamar, nurse station, dan pintu masuk", "halaman/ruangan/teratai/denah.html", "peta lokasi kamar nurse station parkir pintu"],
  ["Jalur evakuasi", "Pintu keluar saat keadaan darurat", "halaman/ruangan/teratai/denah.html#evakuasi", "darurat kebakaran apar hydrant keluar"],
  ["Petugas Ruang Teratai", "Kepala ruangan, CCM, ketua tim, dan perawat", "halaman/ruangan/teratai/petugas.html", "perawat karu dokter tim nama struktur organisasi"],
  ["Fasilitas kamar", "Kamar Kelas 1, tempat tidur, dan kamar mandi", "halaman/ruangan/teratai/fasilitas.html", "kamar kelas tempat tidur fasilitas ac kamar mandi"],
  ["Jadwal harian", "Kegiatan dari pagi sampai malam di Ruang Teratai", "halaman/ruangan/teratai/index.html#jadwal", "visite dokter makan shift istirahat jadwal"],
  ["Cuci tangan", "Kapan dan bagaimana mencuci tangan", "halaman/edukasi.html#cara-cuci-tangan", "cuci tangan hand rub sabun kebersihan langkah"],
  ["Pencegahan infeksi", "Etika batuk, masker, dan kebersihan", "halaman/edukasi.html#pencegahan-infeksi", "infeksi batuk masker kuman"],
  ["Memilah sampah", "Kantong kuning dan kantong hitam", "halaman/edukasi.html#sampah", "sampah limbah kuning hitam buang"],
  ["Persiapan pulang", "Obat, jadwal kontrol, dan dokumen", "halaman/edukasi.html#persiapan-pulang", "pulang obat kontrol resep dokumen"],
  ["Tanda bahaya", "Kapan harus segera ke IGD setelah pulang", "halaman/edukasi.html#tanda-bahaya", "bahaya igd darurat demam sesak"],
  ["Hak & kewajiban pasien", "Menurut UU Nomor 17 Tahun 2023", "halaman/hak-kewajiban.html", "hak kewajiban pasien undang-undang"],
  ["Saran & keluhan", "Cara menyampaikan keluhan pelayanan", "halaman/hak-kewajiban.html#keluhan", "keluhan pengaduan saran komplain"],
  ["Profil RSUD AWS", "Visi, misi, nilai, dan sejarah", "halaman/profil.html", "visi misi sejarah nilai profil rumah sakit"],
  ["Kontak rumah sakit", "Alamat dan nomor telepon", "halaman/profil.html#kontak", "telepon alamat kontak lokasi maps"],
  ["Daftar ruangan", "Ruang rawat inap dan perawatan intensif", "halaman/ruangan.html", "ruangan rawat inap anggrek cempaka melati icu"],
  ["Review situs", "Beri penilaian dan saran", "halaman/review.html", "review rating bintang saran kritik"],
];
function initSearch() {
  const btn = document.querySelector(".search-btn");
  if (!btn) return;
  const dlg = document.createElement("dialog");
  dlg.className = "modal search-modal";
  dlg.setAttribute("aria-label", "Cari informasi");
  dlg.innerHTML = `<form method="dialog" class="search-head">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
      <input type="text" inputmode="search" enterkeyhint="search" placeholder="Cari: jam besuk, denah, cuci tangan..." aria-label="Kata kunci" autocomplete="off">
      <button class="search-close" type="submit" aria-label="Tutup">Esc</button>
    </form>
    <ul class="search-list" role="list"></ul>`;
  document.body.appendChild(dlg);
  const input = dlg.querySelector("input"), list = dlg.querySelector(".search-list");
  const norm = (t) => t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const tampil = () => {
    const q = norm(input.value.trim());
    const kata = q.split(/\s+/).filter(Boolean);
    const hasil = CARI.filter(([j, d, , k]) => kata.every((w) => norm(`${j} ${d} ${k}`).includes(w)));
    list.innerHTML = "";
    if (!hasil.length) { const li = document.createElement("li"); li.className = "search-empty"; li.textContent = "Tidak ditemukan. Coba kata lain."; list.appendChild(li); return; }
    hasil.forEach(([j, d, u]) => {
      const li = document.createElement("li"), a = document.createElement("a"), b = document.createElement("strong"), s = document.createElement("span");
      a.href = url(u); b.textContent = j; s.textContent = d;
      a.append(b, s); li.appendChild(a); list.appendChild(li);
      a.addEventListener("click", () => dlg.close());
    });
  };
  input.addEventListener("input", tampil);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Escape") { e.preventDefault(); dlg.close(); }
    if (e.key === "Enter") { e.preventDefault(); const a = list.querySelector("a"); if (a) a.click(); }
  });
  btn.addEventListener("click", () => { input.value = ""; tampil(); dlg.showModal(); input.focus(); });
  dlg.addEventListener("click", (e) => { if (e.target === dlg) dlg.close(); });
}

/* ---------- Tombol kembali ke atas ---------- */
function initToTop() {
  const b = document.createElement("button");
  b.className = "to-top";
  b.type = "button";
  b.setAttribute("aria-label", "Kembali ke atas");
  b.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7"/></svg>`;
  document.body.appendChild(b);
  b.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  const cek = () => b.classList.toggle("show", window.scrollY > 900);
  window.addEventListener("scroll", cek, { passive: true });
  cek();
}

/* ---------- Cetak / simpan PDF & salin link: <div data-tools></div> ---------- */
function initTools() {
  document.querySelectorAll("[data-tools]").forEach((el) => {
    el.className = "page-tools";
    el.innerHTML = `<button type="button" data-cetak><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9V3h12v6M6 18H4v-7h16v7h-2M8 14h8v7H8z"/></svg>Cetak / simpan PDF</button>
      <button type="button" data-salin><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/></svg><span>Salin link halaman</span></button>`;
    el.querySelector("[data-cetak]").addEventListener("click", () => window.print());
    const salin = el.querySelector("[data-salin]");
    salin.addEventListener("click", async () => {
      const link = location.href.split("#")[0];
      try {
        if (navigator.share && matchMedia("(pointer: coarse)").matches) { await navigator.share({ title: document.title, url: link }); return; }
        await navigator.clipboard.writeText(link);
        salin.querySelector("span").textContent = "Link tersalin";
      } catch (e) {
        salin.querySelector("span").textContent = "Gagal menyalin";
      }
      setTimeout(() => { salin.querySelector("span").textContent = "Salin link halaman"; }, 2500);
    });
  });
}

document.body.insertAdjacentHTML("afterbegin", SPRITE);
document.documentElement.classList.remove("no-js");
renderHeader();
initSearch();
renderSubnav();
renderFooter();
fillSiteData();
renderDay();
initTabs();
initPlan();
initImages();
initReveal();
initToTop();
initTools();

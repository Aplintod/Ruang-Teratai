/* =========================================================
   Header, footer, menu, tab, animasi, ilustrasi, foto otomatis.
   Header & footer ditulis di sini supaya cukup diubah sekali.
   ========================================================= */

const SITE = {
  nama: "Ruang Teratai 1",
  rs: "RSUD Abdoel Wahab Sjahranie",
  alamat: "Jl. Palang Merah Indonesia No. 1, Sidodadi, Samarinda Ulu, Samarinda, Kalimantan Timur 75123",
  telpRs: "(0541) 738070",
  telpRsLink: "+62541738070",
  // TODO: data di bawah masih contoh, ganti setelah ada konfirmasi RS
  telpRuang: "Ext. —",
  besukSiang: "11.00–13.00",
  besukSore: "17.00–19.00",
};

/* Jadwal harian (beranda). Jam ditulis desimal: 7.5 = 07.30. MASIH CONTOH. */
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
  { jenis: "besuk", dari: 11, sampai: 13, teks: "Besuk siang", baris: 3 },
  { jenis: "besuk", dari: 17, sampai: 19, teks: "Besuk sore", baris: 3 },
  // baris 4: makan & pemeriksaan rutin
  { jenis: "titik", jam: 6, teks: "Cek tanda vital", baris: 4 },
  { jenis: "titik", jam: 7.5, teks: "Sarapan", baris: 4 },
  { jenis: "titik", jam: 12, teks: "Makan siang", baris: 4 },
  { jenis: "titik", jam: 17.5, teks: "Makan sore", baris: 4 },
];

const NAV = [
  { label: "Profil", children: [
    { href: "halaman/profil.html", label: "Profil Ruangan" },
    { href: "halaman/tim.html", label: "Profil Pegawai" },
  ] },
  { label: "Ruangan", children: [
    { href: "halaman/ruangan.html", label: "Pengenalan & Denah" },
    { href: "halaman/fasilitas.html", label: "Kondisi & Fasilitas" },
  ] },
  { href: "halaman/hak-kewajiban.html", label: "Hak & Kewajiban" },
  { href: "halaman/caregiver.html", label: "Caregiver" },
  // Orientasi disembunyikan sementara. Untuk memunculkan lagi, hapus tanda // di baris berikut:
  // { href: "halaman/orientasi.html", label: "Orientasi" },
];

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
<symbol id="arrow" viewBox="0 0 16 16"><path d="M2 8h12M9 3l5 5-5 5"/></symbol>
</svg>`;

const LOTUS = `<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.2" aria-hidden="true"><path d="M20 7c4.2 4.6 5.3 10.4 0 17.5C14.7 17.4 15.8 11.6 20 7Z"/><path d="M20 24.5c-4.6-1-9.2-4.9-10.6-11.6 6 .8 9.4 4.9 10.6 11.6Zm0 0c4.6-1 9.2-4.9 10.6-11.6-6 .8-9.4 4.9-10.6 11.6Z"/><path d="M20 25c-6 .2-12-2.2-15-6.8 6-.3 11 2.4 15 6.8Zm0 0c6 .2 12-2.2 15-6.8-6-.3-11 2.4-15 6.8Z"/><path d="M8 30.5h24M13 34h14"/></svg>`;
const CHEV = `<svg viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.3"><path d="m2 3.5 3 3 3-3"/></svg>`;

/* ROOT = alamat folder utama situs, dihitung dari lokasi file script ini.
   Dengan begitu link & foto tetap benar, baik dari index.html maupun dari halaman/*.html */
const ROOT = (document.currentScript && document.currentScript.src)
  ? document.currentScript.src.replace(/assets\/js\/main\.js.*$/, "")
  : "";
const url = (h) => ROOT + h;
const herePath = location.pathname.replace(/\/$/, "/index.html");
const isHere = (h) => { try { return new URL(url(h), location.href).pathname === herePath; } catch (e) { return false; } };
const flatNav = () => NAV.flatMap((n) => n.children || [n]);

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
    b.setAttribute("aria-label", `Ukuran teks: ${["normal", "besar", "lebih besar"][i]}. Tekan untuk mengubah.`);
  });
}
applySize(store("teratai-size") || "");

function renderHeader() {
  const el = document.getElementById("site-header");
  if (!el) return;

  const items = NAV.map((n) => {
    if (!n.children) return `<a href="${url(n.href)}"${isHere(n.href) ? ' class="active" aria-current="page"' : ""}>${n.label}</a>`;
    const act = n.children.some((c) => isHere(c.href));
    return `<div class="nav-group">
      <button type="button" aria-expanded="false"${act ? ' class="active"' : ""}>${n.label}${CHEV}</button>
      <div class="nav-menu">${n.children.map((c, i) =>
        `<a href="${url(c.href)}"${isHere(c.href) ? ' class="active" aria-current="page"' : ""}>${c.label}<span>0${i + 1}</span></a>`).join("")}</div>
    </div>`;
  }).join("");

  const mobile = flatNav().map((n, i) => `<li><a href="${url(n.href)}"><small>0${i + 1}</small>${n.label}</a></li>`).join("");
  const sizeBtn = `<button class="size-btn" type="button"><b>Aa</b><span class="t">Ukuran teks</span><span class="dots"><i></i><i></i><i></i></span></button>`;

  el.className = "site-header";
  el.innerHTML = `
    <div class="wrap">
      <a class="brand" href="${url("index.html")}" aria-label="${SITE.nama}, beranda">
        ${LOTUS}
        <span><span class="brand-name">${SITE.nama}</span><span class="brand-sub">${SITE.rs}</span></span>
      </a>
      <nav class="nav" aria-label="Menu utama">${items}</nav>
      <div class="head-right">
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

  el.querySelectorAll(".nav-group > button").forEach((b) => {
    b.addEventListener("click", (e) => {
      e.stopPropagation();
      const g = b.parentElement;
      const was = g.classList.contains("open");
      el.querySelectorAll(".nav-group").forEach((x) => { x.classList.remove("open"); x.firstElementChild.setAttribute("aria-expanded", "false"); });
      if (!was) { g.classList.add("open"); b.setAttribute("aria-expanded", "true"); }
    });
  });
  document.addEventListener("click", () => el.querySelectorAll(".nav-group").forEach((x) => x.classList.remove("open")));
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    el.querySelectorAll(".nav-group").forEach((x) => x.classList.remove("open"));
    document.body.classList.remove("menu-open");
  });

  const onScroll = () => el.classList.toggle("scrolled", window.scrollY > 40);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function renderFooter() {
  const el = document.getElementById("site-footer");
  if (!el) return;
  el.className = "site-footer";
  el.innerHTML = `
    <div class="wrap">
      <div class="foot-top">
        <div>
          <h4>Alamat</h4>
          <p>Paviliun Teratai<br>${SITE.rs}<br>${SITE.alamat}</p>
        </div>
        <div>
          <h4>Halaman</h4>
          <ul>${flatNav().slice(0, 4).map((n) => `<li><a href="${url(n.href)}">${n.label}</a></li>`).join("")}</ul>
        </div>
        <div>
          <h4>Pasien &amp; keluarga</h4>
          <ul>${flatNav().slice(4).map((n) => `<li><a href="${url(n.href)}">${n.label}</a></li>`).join("")}</ul>
        </div>
        <div>
          <h4>Kontak</h4>
          <ul>
            <li><a href="tel:${SITE.telpRsLink}">RS ${SITE.telpRs}</a></li>
            <li>Ruangan <span class="tbd" title="Data contoh">${SITE.telpRuang}</span></li>
            <li>Besuk <span class="tbd" title="Data contoh">${SITE.besukSiang} &amp; ${SITE.besukSore}</span></li>
          </ul>
        </div>
      </div>
      <div class="foot-word" aria-hidden="true">Teratai <em>1</em></div>
      <div class="foot-bottom">
        <span>&copy; ${new Date().getFullYear()} ${SITE.nama}, ${SITE.rs}</span>
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
   <div class="media" data-img="ruangan/lorong"> akan mencari
   assets/img/ruangan/lorong.jpg / .jpeg / .png / .webp.
   Kalau ada, foto dipasang. Kalau tidak, placeholder tetap tampil. */
const EXT = ["jpg", "png", "webp", "jpeg"];
function findImage(list, done) {
  // list boleh berisi beberapa nama dipisah koma: dicoba berurutan, yang pertama ada dipakai
  const tries = list.split(",").map((b) => b.trim()).filter(Boolean)
    .flatMap((b) => EXT.map((e) => `${ROOT}assets/img/${b}.${e}`));
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

/* ---------- Sehari di Teratai 1 ---------- */
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
      <span><i style="background:var(--clay)"></i>Jam besuk</span>
      <span><i style="background:var(--green-2)"></i>Visite dokter</span>
      <span><i style="background:repeating-linear-gradient(135deg,var(--paper-3) 0 3px,var(--paper-2) 3px 6px)"></i>Waktu istirahat</span>
      <span><i style="border:1.5px solid var(--green);border-radius:50%;background:var(--paper)"></i>Kegiatan rutin</span>
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
    a.setAttribute("aria-label", a.dataset.title);
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

document.body.insertAdjacentHTML("afterbegin", SPRITE);
document.documentElement.classList.remove("no-js");
renderHeader();
renderFooter();
fillSiteData();
renderDay();
initTabs();
initPlan();
initImages();
initReveal();

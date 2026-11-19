/* =========================================================
   Header, footer, menu, tab, dan animasi.
   Header & footer ditulis di sini supaya cukup diubah sekali.
   ========================================================= */

document.documentElement.classList.remove("no-js");

const SITE = {
  nama: "Ruang Teratai 1",
  rs: "RSUD Abdoel Wahab Sjahranie",
  alamat: "Jl. Palang Merah Indonesia No. 1, Sidodadi, Samarinda Ulu, Samarinda, Kalimantan Timur 75123",
  telpRs: "(0541) 738070",
  // TODO: data di bawah masih contoh, ganti setelah ada konfirmasi RS
  telpRuang: "Ext. —",
  besukSiang: "11.00–13.00",
  besukSore: "17.00–19.00",
};

const NAV = [
  { label: "Profil", children: [
    { href: "profil.html", label: "Profil Ruangan" },
    { href: "tim.html", label: "Profil Pegawai" },
  ] },
  { label: "Ruangan", children: [
    { href: "ruangan.html", label: "Pengenalan & Denah" },
    { href: "fasilitas.html", label: "Kondisi & Fasilitas" },
  ] },
  { href: "hak-kewajiban.html", label: "Hak & Kewajiban" },
  { href: "caregiver.html", label: "Caregiver" },
  { href: "orientasi.html", label: "Orientasi" },
];

const LOTUS = `<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.2" aria-hidden="true"><path d="M20 7c4.2 4.6 5.3 10.4 0 17.5C14.7 17.4 15.8 11.6 20 7Z"/><path d="M20 24.5c-4.6-1-9.2-4.9-10.6-11.6 6 .8 9.4 4.9 10.6 11.6Zm0 0c4.6-1 9.2-4.9 10.6-11.6-6 .8-9.4 4.9-10.6 11.6Z"/><path d="M20 25c-6 .2-12-2.2-15-6.8 6-.3 11 2.4 15 6.8Zm0 0c6 .2 12-2.2 15-6.8-6-.3-11 2.4-15 6.8Z"/><path d="M8 30.5h24M13 34h14"/></svg>`;
const ARROW = `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M2 8h12M9 3l5 5-5 5"/></svg>`;
const CHEV = `<svg viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.3"><path d="m2 3.5 3 3 3-3"/></svg>`;

const page = location.pathname.split("/").pop() || "index.html";

function flatNav() {
  return NAV.flatMap((n) => n.children || [n]);
}

function renderHeader() {
  const el = document.getElementById("site-header");
  if (!el) return;

  const items = NAV.map((n) => {
    if (!n.children) return `<a href="${n.href}"${n.href === page ? ' class="active" aria-current="page"' : ""}>${n.label}</a>`;
    const act = n.children.some((c) => c.href === page);
    return `<div class="nav-group">
      <button type="button" aria-expanded="false"${act ? ' class="active"' : ""}>${n.label}${CHEV}</button>
      <div class="nav-menu">${n.children.map((c, i) =>
        `<a href="${c.href}"${c.href === page ? ' class="active" aria-current="page"' : ""}>${c.label}<span>0${i + 1}</span></a>`).join("")}</div>
    </div>`;
  }).join("");

  const mobile = flatNav().map((n, i) =>
    `<li><a href="${n.href}"><small>0${i + 1}</small>${n.label}</a></li>`).join("");

  el.className = "site-header";
  el.innerHTML = `
    <div class="wrap">
      <a class="brand" href="index.html" aria-label="${SITE.nama}, beranda">
        ${LOTUS}
        <span><span class="brand-name">${SITE.nama}</span><span class="brand-sub">${SITE.rs}</span></span>
      </a>
      <nav class="nav" aria-label="Menu utama">${items}</nav>
      <a class="nav-cta" href="profil.html#kontak">Kontak ruangan</a>
      <button class="menu-btn" type="button" aria-expanded="false" aria-controls="mobile-menu">Menu <i></i></button>
    </div>`;

  const mm = document.createElement("div");
  mm.className = "mobile-menu";
  mm.id = "mobile-menu";
  mm.innerHTML = `<ol><li><a href="index.html"><small>00</small>Beranda</a></li>${mobile}</ol>
    <div class="meta">${SITE.rs}<br>Telepon ${SITE.telpRs}</div>`;
  el.after(mm);

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

  // Header: latar muncul setelah di-scroll, sembunyi saat scroll ke bawah
  let last = 0;
  const onScroll = () => {
    const y = window.scrollY;
    el.classList.toggle("scrolled", y > 40);
    el.classList.toggle("hidden", y > 400 && y > last && !document.body.classList.contains("menu-open"));
    last = y;
  };
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
          <ul>${flatNav().slice(0, 4).map((n) => `<li><a href="${n.href}">${n.label}</a></li>`).join("")}</ul>
        </div>
        <div>
          <h4>Pasien &amp; keluarga</h4>
          <ul>${flatNav().slice(4).map((n) => `<li><a href="${n.href}">${n.label}</a></li>`).join("")}</ul>
        </div>
        <div>
          <h4>Kontak</h4>
          <ul>
            <li>RS ${SITE.telpRs}</li>
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

renderHeader();
renderFooter();
fillSiteData();
initTabs();
initReveal();

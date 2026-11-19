/* =========================================================
   Header, footer, menu, dan tab.
   Header & footer ditulis di sini supaya cukup diubah sekali
   untuk semua halaman.
   ========================================================= */

const SITE = {
  nama: "Ruang Teratai 1",
  rs: "RSUD Abdoel Wahab Sjahranie",
  alamat: "Jl. Palang Merah Indonesia No. 1, Sidodadi, Samarinda Ulu, Samarinda, Kalimantan Timur 75123",
  telpRs: "(0541) 738070",
  // TODO: ganti dengan nomor/ekstensi ruangan dari pihak RS
  telpRuang: "Ext. xxx (menunggu data)",
  jamBesuk: ["Siang: 11.00 – 13.00 WITA", "Sore: 17.00 – 19.00 WITA"],
};

const NAV = [
  { href: "index.html", label: "Beranda" },
  {
    label: "Profil",
    children: [
      { href: "profil.html", label: "Profil Ruangan" },
      { href: "tim.html", label: "Profil Pegawai" },
    ],
  },
  {
    label: "Ruangan",
    children: [
      { href: "ruangan.html", label: "Pengenalan & Denah" },
      { href: "fasilitas.html", label: "Kondisi & Fasilitas Kamar" },
    ],
  },
  { href: "hak-kewajiban.html", label: "Hak & Kewajiban Pasien" },
  { href: "caregiver.html", label: "Caregiver" },
  { href: "orientasi.html", label: "Orientasi Mahasiswa" },
];

const LOTUS_SVG = `<svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M16 6c3 3.5 4 7.5 0 13-4-5.5-3-9.5 0-13Z" fill="#fff"/><path d="M16 19c-3.5-1-7-4-8-9 4.5.5 7 3.5 8 9Zm0 0c3.5-1 7-4 8-9-4.5.5-7 3.5-8 9Z" fill="#f3b6c6"/><path d="M5 18c3 4 6.5 5 11 5s8-1 11-5" stroke="#fff" stroke-width="2" stroke-linecap="round"/></svg>`;

function currentPage() {
  const p = location.pathname.split("/").pop();
  return p === "" ? "index.html" : p;
}

function renderHeader() {
  const el = document.getElementById("site-header");
  if (!el) return;
  const page = currentPage();

  const items = NAV.map((item) => {
    if (!item.children) {
      const active = item.href === page ? ' class="active" aria-current="page"' : "";
      return `<a href="${item.href}"${active}>${item.label}</a>`;
    }
    const isActive = item.children.some((c) => c.href === page);
    const links = item.children
      .map((c) => `<a href="${c.href}"${c.href === page ? ' class="active" aria-current="page"' : ""}>${c.label}</a>`)
      .join("");
    return `<div class="nav-dropdown">
      <button type="button" aria-expanded="false"${isActive ? ' class="active"' : ""}>${item.label}
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
      </button>
      <div class="menu">${links}</div>
    </div>`;
  }).join("");

  el.className = "site-header";
  el.innerHTML = `
    <div class="container">
      <a class="brand" href="index.html">
        <span class="brand-mark">${LOTUS_SVG}</span>
        <span class="brand-text"><strong>${SITE.nama}</strong><small>${SITE.rs}</small></span>
      </a>
      <button class="menu-toggle" type="button" aria-label="Buka menu" aria-expanded="false" aria-controls="main-nav"><span></span></button>
      <nav class="nav" id="main-nav" aria-label="Menu utama">${items}</nav>
    </div>`;

  const toggle = el.querySelector(".menu-toggle");
  const nav = el.querySelector(".nav");
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  el.querySelectorAll(".nav-dropdown > button").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const dd = btn.parentElement;
      const wasOpen = dd.classList.contains("open");
      el.querySelectorAll(".nav-dropdown").forEach((d) => {
        d.classList.remove("open");
        d.querySelector("button").setAttribute("aria-expanded", "false");
      });
      if (!wasOpen) {
        dd.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });
  document.addEventListener("click", () => {
    el.querySelectorAll(".nav-dropdown").forEach((d) => d.classList.remove("open"));
  });
}

function renderFooter() {
  const el = document.getElementById("site-footer");
  if (!el) return;
  const year = new Date().getFullYear();
  el.className = "site-footer";
  el.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div>
          <h4>${SITE.nama}</h4>
          <p>Ruang rawat inap Paviliun Teratai, ${SITE.rs} Samarinda.</p>
          <p>${SITE.alamat}</p>
        </div>
        <div>
          <h4>Halaman</h4>
          <ul>
            <li><a href="profil.html">Profil Ruangan</a></li>
            <li><a href="tim.html">Profil Pegawai</a></li>
            <li><a href="fasilitas.html">Fasilitas Kamar</a></li>
            <li><a href="hak-kewajiban.html">Hak &amp; Kewajiban Pasien</a></li>
            <li><a href="caregiver.html">Caregiver</a></li>
          </ul>
        </div>
        <div>
          <h4>Kontak</h4>
          <ul>
            <li>Telepon RS: ${SITE.telpRs}</li>
            <li>Ruang Teratai 1: ${SITE.telpRuang}</li>
            <li>Jam besuk:<br>${SITE.jamBesuk.join("<br>")}</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>&copy; ${year} ${SITE.nama} &middot; ${SITE.rs}</span>
        <span>Dalam keadaan darurat, hubungi perawat jaga atau tekan bel pasien.</span>
      </div>
    </div>`;
}

function initTabs() {
  document.querySelectorAll("[data-tabs]").forEach((wrap) => {
    const tabs = wrap.querySelectorAll('[role="tab"]');
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        tabs.forEach((t) => {
          t.setAttribute("aria-selected", "false");
          document.getElementById(t.getAttribute("aria-controls")).hidden = true;
        });
        tab.setAttribute("aria-selected", "true");
        document.getElementById(tab.getAttribute("aria-controls")).hidden = false;
      });
    });
  });
}

/* Isi teks yang ditandai data-site="kunci" dengan nilai dari SITE */
function fillSiteData() {
  document.querySelectorAll("[data-site]").forEach((el) => {
    const v = SITE[el.dataset.site];
    if (v) el.innerHTML = Array.isArray(v) ? v.join("<br>") : v;
  });
}

renderHeader();
renderFooter();
initTabs();
fillSiteData();

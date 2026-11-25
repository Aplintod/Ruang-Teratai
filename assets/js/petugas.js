/* Halaman Petugas & Struktur: kartu petugas dan bagan organisasi dibuat dari data-pegawai.js */
const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const foto = (p, ratio, cap) => `<div class="media ${ratio}" data-img="teratai/pegawai/${esc(p.file)}${p.file === "karu" ? ", teratai/pegawai/kepala-ruangan" : ""}" data-cap="${cap}"></div>`;

// Kepala ruangan
const k = KEPALA_RUANGAN;
document.getElementById("kepala-ruangan").innerHTML = `
  ${foto(k, "r-4x5", "Kepala Ruangan")}
  <div>
    <span class="label"><span class="n">01</span> Kepala Ruangan (Karu)</span>
    <h2 class="h2 mt-s">${esc(k.nama)}</h2>
    ${k.pendidikan ? `<p class="small" style="margin-top:6px">Pendidikan: ${esc(k.pendidikan)}</p>` : ""}
    <blockquote class="quote mt-m">${esc(k.sambutan)}</blockquote>
  </div>`;

// Daftar petugas per kelompok
document.getElementById("daftar-petugas").innerHTML = Object.entries(KELOMPOK).map(([kode, judul]) => {
  const list = PEGAWAI.filter((p) => p.kelompok === kode);
  if (!list.length) return "";
  return `<div class="people-group">
    <h3 class="h3">${judul} <span class="count">${list.length}</span></h3>
    <div class="people">${list.map((p) => `
      <article class="person">
        ${foto(p, "r-3x4", "Foto petugas")}
        <h4>${esc(p.nama)}</h4>
        ${p.pendidikan ? `<span class="meta">${esc(p.pendidikan)}</span>` : ""}
      </article>`).join("")}</div>
  </div>`;
}).join("");

// Bagan struktur organisasi
const node = (p, besar) => `<div class="org-node${besar ? " big" : ""}">
    ${foto(p, "r-1x1", "")}
    <div><strong>${esc(p.jabatan)}</strong><span>${esc(p.nama)}</span></div>
  </div>`;
const grup = (kode) => PEGAWAI.filter((p) => p.kelompok === kode);
document.getElementById("bagan").innerHTML = `
  <div class="org-level">${node(KEPALA_RUANGAN, true)}</div>
  <div class="org-level org-row">${[...grup("ccm"), ...grup("katim")].map((p) => node(p)).join("")}</div>
  ${grup("pp").length ? `<div class="org-level"><div class="org-group"><strong>Perawat Pelaksana</strong><span>${grup("pp").length} orang, di bawah ketua tim</span></div></div>` : ""}
  ${grup("staf").length ? `<div class="org-level org-side"><div class="org-group"><strong>Staf</strong><span>${grup("staf").length} orang, langsung di bawah kepala ruangan</span></div></div>` : ""}`;

initImages();

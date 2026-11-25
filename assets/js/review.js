/* Formulir review: validasi, bintang, dan pengiriman ke Google Apps Script (SITE.reviewUrl di main.js) */
(function () {
  const form = document.getElementById("form-review");
  const err = document.getElementById("form-error");
  const starText = document.getElementById("star-text");
  const teks = ["", "Sangat kurang", "Kurang", "Cukup", "Baik", "Sangat baik"];

  // bintang: sorot sampai bintang yang dipilih
  const stars = form.querySelectorAll(".stars label");
  form.querySelectorAll('input[name="bintang"]').forEach((r) => r.addEventListener("change", () => {
    const v = Number(r.value);
    stars.forEach((l, i) => l.classList.toggle("on", i < v));
    starText.textContent = `${v} bintang: ${teks[v]}`;
  }));

  const saran = document.getElementById("saran");
  saran.addEventListener("input", () => { document.getElementById("sisa").textContent = 1000 - saran.value.length; });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    err.hidden = true;
    const data = new FormData(form);
    const wajib = { peran: "peran Anda", ruangan: "ruangan", bintang: "jumlah bintang", mudah: "pernyataan 4", bahasa: "pernyataan 4", membantu: "pernyataan 4", hp: "pernyataan 4" };
    const kurang = [...new Set(Object.keys(wajib).filter((k) => !data.get(k)).map((k) => wajib[k]))];
    if (kurang.length) {
      err.textContent = "Mohon lengkapi: " + kurang.join(", ") + ".";
      err.hidden = false;
      return;
    }
    const kirim = new URLSearchParams();
    for (const [k, v] of data.entries()) if (k !== "bagian") kirim.append(k, v);
    kirim.append("bagian", data.getAll("bagian").join(", "));
    kirim.append("halaman", location.href);

    if (!SITE.reviewUrl) {
      err.textContent = "Formulir belum tersambung ke penyimpanan data. Penilaian Anda belum terkirim.";
      err.hidden = false;
      return;
    }
    const btn = document.getElementById("kirim");
    btn.disabled = true;
    btn.textContent = "Mengirim...";
    try {
      await fetch(SITE.reviewUrl, { method: "POST", mode: "no-cors", body: kirim });
      form.closest(".review-layout").hidden = true;
      document.getElementById("review-done").hidden = false;
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (x) {
      err.textContent = "Gagal mengirim. Periksa koneksi internet lalu coba lagi.";
      err.hidden = false;
      btn.disabled = false;
      btn.textContent = "Kirim penilaian";
    }
  });
})();

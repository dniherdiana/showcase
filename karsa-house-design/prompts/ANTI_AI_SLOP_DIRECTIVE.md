# 🛡️ ANTI-AI SLOP DIRECTIVE & MASTER GUARDRAIL (dniWebCraft)
Master Filter Engine: Eliminasi Total Klise AI, Larangan Em-Dash, Larangan Eyebrow di Atas Heading, dan Penegakan Photo-First Superdesign Architecture

Stack Arsitektur: Astro 7 (.astro) | Tailwind CSS v4.3 (@theme) | Svelte 5 Islands (.svelte) | Data Decoupled (.data.js)

================================================================================
I. ZERO TOLERANCE BANNED CHARACTERS & SYNTAX (KUOTA = 0)
================================================================================

🚫 1. ZERO EM-DASH & EN-DASH POLICY (MUTLAK):
   - Karakter em-dash (`—`) dan en-dash (`–`) DILARANG 100% di seluruh teks UI (Headline, Subheadline, Body Copy, Badge, CTA, Quote, Alt Text).
   - Pengganti yang sah: Tanda titik (`.`), koma (`,`), titik dua (`:`), atau tanda hubung standar (`-`).

🚫 2. TOTAL BAN: EYEBROW DI ATAS HEADING:
   - DILARANG MENARUH TEKS EYEBROW / LABEL KECIL DI ATAS HEADING H1, H2, ATAU H3!
   - Pola klise AI seperti menaruh "SPESIFIKASI LAYANAN", "REALITAS INDUSTRI", "TAHAP 01" di atas judul DILARANG TOTAL.
   - Heading WAJIB langsung tampil mandiri, tegas, dan percaya diri sesuai tipografi preset terpilih.

🚫 3. ZERO ARBITRARY HEX COLOR IN TAILWIND V4:
   - DILARANG menggunakan arbitrary class warna seperti `text-[#876426]`, `bg-[#1A1817]`, atau `border-[#C5A059]`.
   - WAJIB gunakan semantic utility class dari `@theme` di `global.css`:
     * `text-brand-accent`, `text-ink-primary`, `text-ink-muted`
     * `bg-surface-ground`, `bg-surface-panel`, `bg-surface-contrast`
     * `border-brand-accent`, `border-ink-primary/10`

================================================================================
II. PHOTO-FIRST SUPERDESIGN ARCHITECTURE (ANTI "PDF REPORT SYNDROME")
================================================================================

🚫 1. BANNED: TEXT-ONLY & BULLET-BOX SECTIONS:
   - DILARANG membuat section yang hanya berisi deretan kartu teks, kotak bullet point, atau form ledger kaku tanpa visual arsitektural/produk.
   - Website WAJIB dipimpin oleh FOTOGRAFI NYATA (resolusi tinggi dari Unsplash/Pexels via Astro `<Image />`).

🖼️ 2. MANDATORY PHOTO REAL-ESTATE (MINIMAL 50% MEDIA RATIO):
   - Hero Beranda: WAJIB foto besar bleeding menetes ke bawah, full-bleed cinematic frame, atau split showcase media masif sesuai blueprint preset terpilih.
   - Section Layanan: Tiap item layanan WAJIB memiliki 1 foto showcase resolusi tinggi (interior, material, denah CAD, fasad), BUKAN hanya ikon dan boks teks.
   - Section Portofolio: WAJIB berupa galeri visual foto (asymmetric masonry grid, multi-card listing, atau cinematic 16:9 frames).
   - Semua gambar disimpan di `src/images/` dan di-render menggunakan `<Image src={...} alt="..." class="..." />` dari `astro:assets` untuk menjamin 0 CLS.

🚫 3. BANNED: HERO CLONE & 3-COLUMN IDENTICAL CARDS:
   - DILARANG menyalin kerangka Hero yang sama antar halaman (Beranda != Layanan != Portofolio).
   - DILARANG membuat grid 3-kartu sejajar simetris dengan bayangan abu-abu standar.

================================================================================
III. STANDAR RICH COPYWRITING & JARGON BAN
================================================================================

🚫 1. BANNED AI PHRASES (KUOTA = 0):
   - "Di era [digital / globalisasi / modern / serba cepat] saat ini..."
   - "Solusi [terpercaya / terdepan / terbaik / handal / inovatif]" (tanpa data riil di kalimat yang sama).
   - "Bukan hanya [X], tetapi juga [Y]..."
   - "Mewujudkan ruang / bisnis impian Anda..."
   - "Kualitas tanpa kompromi..."
   - "Pengalaman yang tak terlupakan / luar biasa..."
   - Kata kerja hampa: "Elevate", "Seamless", "Unleash", "Next-Gen", "Revolutionize".

✍️ 2. THE BRAND INTERCHANGEABILITY TEST:
   - Uji setiap kalimat: Jika nama brand diganti dengan nama kompetitor dan kalimatnya tetap terasa masuk akal/umum, TULIS ULANG! Copywriting wajib memuat SOP kerja, durasi hari/minggu, batas toleransi deviasi (<5%), spesifikasi material, atau nama kota.

✍️ 3. CTA KONTEKSTUAL & TAKTIS:
   - Banned: "Klik Di Sini", "Mulai Sekarang", "Pelajari Lebih Lanjut", "Baca Selengkapnya".
   - Wajib: "Jadwalkan Konsultasi Denah", "Kunci Jadwal Briefing", "Lihat Rincian Biaya 42 Proyek", "Unduh Spesifikasi Teknis".

================================================================================
IV. MECHANICAL PRE-FLIGHT CHECKLIST
================================================================================
Sebelum kode dihasilkan, verifikasi:
- [ ] ZERO em-dash (`—` atau `–`) di seluruh teks UI.
- [ ] ZERO eyebrow di atas elemen H1 / H2 / H3.
- [ ] ZERO arbitrary hex class (`text-[#...]` / `bg-[#...]`).
- [ ] Mengikuti YAML blueprint preset terpilih di `.prompts/PRESET_SEED.md` secara presisi.
- [ ] Setiap section layanan dan portofolio memuat foto nyata via Astro `<Image />`.
- [ ] Data terpisah murni di `[Component].data.js` (tidak di-hardcode di file `.astro`).

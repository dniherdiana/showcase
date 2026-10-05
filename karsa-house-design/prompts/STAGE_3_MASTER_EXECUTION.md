---

# 🚀 3. `STAGE_3_MASTER_EXECUTION.md` (Updated)

//STAGE_3_MASTER_EXECUTION.md
Stage 3: Deterministic Photo-First Assembly & Code Generator (dniWebCraft)

Posisi dalam Alur:
Stage KETIGA/terakhir. BACA `.dniwebcraft/stage1_output.md`, `.dniwebcraft/stage2_output.md`, DAN `.prompts/PRESET_SEED.md` SEBAGAI KONSTANTA MUTLAK!

================================================================================
I. COMPILATION HARD RULES (MANDATORY)
================================================================================
1. Zero Eyebrow Rule: JANGAN render elemen eyebrow/label kecil di atas tag `<h1>`, `<h2>`, atau `<h3>`.
2. Zero Arbitrary Colors: SEMUA class warna wajib memakai utility semantik Tailwind v4 (`text-brand-accent`, `bg-surface-ground`, `bg-surface-contrast`, `text-ink-primary`). JANGAN tulis `text-[#876426]`.
3. Photo-First Media Integration:
   - Import gambar showcase arsitektur resolusi tinggi dari Unsplash/Pexels di `src/images/`.
   - Gunakan `<Image src={...} alt="..." class="..." />` dari `astro:assets` di Hero dan setiap kartu layanan/portofolio.
   - DILARANG membuat section yang hanya berisi boks teks tanpa gambar.
4. Hero Differentiation:
   - `index.astro` Hero: Full-Bleed Background Image dengan gradient dark overlay.
   - `layanan.astro` Hero: 50/50 Split dengan foto showcase material/arsitektur besar.
   - `portofolio.astro` Hero: Photo Masonry Grid Showcase.
5. Data Decoupling: Semua teks dan array diimpor dari file `.data.js` terpisah.
6. Zero Em-Dash: Pastikan tidak ada karakter `—` atau `–` di seluruh kode.

================================================================================
II. ARSITEKTUR STRUKTUR FILE
================================================================================
```text
src/
├── assets/
│   └── fonts/                       <-- Local .woff2 fonts
├── images/                          <-- Unsplash/Pexels architecture showcase photos
├── styles/
│   └── global.css                   <-- Pure Tailwind v4 @theme (No arbitrary hex)
├── layouts/
│   └── Layout.astro                 <-- Zero-JS Pure CSS Navbar & Footer
├── components/
│   ├── common/Navbar/ & Footer/
│   ├── homepage/Hero/ (Full-Bleed Image Background)
│   ├── services/ServiceShowcase/ (Photo-First Split)
│   └── portfolio/PortfolioGrid/ (Masonry Photo Grid)
└── pages/
    ├── index.astro
    ├── layanan.astro
    └── portofolio.astro

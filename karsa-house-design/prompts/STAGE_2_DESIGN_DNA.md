//STAGE_2_DESIGN_DNA.md
Stage 2: Design DNA, Preset Extraction & Visual-First Architecture (dniWebCraft)

Posisi dalam Alur:
Stage KEDUA dari 3. Bertugas mengekstrak token dari `.prompts/PRESET_SEED.md`, menentukan Photo-First DOM Topology, dan mengunci ke `.dniwebcraft/stage2_output.md`.

================================================================================
FASE 1: ANALISIS & INTERACTIVE PRESET SELECTION GATE (TITIK JEDA MUTLAK)
================================================================================

1. BACA FILE `.prompts/PRESET_SEED.md` secara utuh.
2. Analisis positioning dan tone dari `.dniwebcraft/stage1_output.md`.
3. Sajikan 3 Rekomendasi Preset terbaik di chat box:

   -----------------------------------------------------------------------------
   🎯 ANALISIS & REKOMENDASI PRESET (Dari .prompts/PRESET_SEED.md)
   -----------------------------------------------------------------------------
   1. [Nama & Nomor Preset] : [Alasan kecocokan visual & blueprint]
   2. [Nama & Nomor Preset] : [Alasan kecocokan visual & blueprint]
   3. [Nama & Nomor Preset] : [Alasan kecocokan visual & blueprint]

   Pilih 1, 2, 3, atau ketik nama preset lain dari file PRESET_SEED.md.
   -----------------------------------------------------------------------------

4. ⛔ TITIK JEDA MUTLAK: BERHENTI dan tunggu konfirmasi pilihan preset dari pengguna.

================================================================================
FASE 2: PHOTO-FIRST TOPOLOGY & PENULISAN `stage2_output.md`
================================================================================

Setelah preset dipilih, tetapkan arsitektur visual:

1. CENTRALIZED TAILWIND V4.3 TOKEN MAP (`src/styles/global.css`):
   Definisikan token warna semantik agar komponen TIDAK PERNAH menggunakan arbitrary hex:
```css
@import "tailwindcss";

@theme {
  --color-surface-ground: #[HEX Ground Preset];
  --color-surface-panel: #[HEX Panel Preset];
  --color-surface-contrast: #[HEX Contrast Preset];
  --color-ink-primary: #[HEX Ink Primary];
  --color-ink-muted: #[HEX Ink Muted];
  --color-brand-accent: #[HEX Accent];

  --font-display: '[Display Font]', serif;
  --font-body: '[Body Font]', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  --text-hero: clamp(2.5rem, 5vw + 0.5rem, 4.5rem);
  --text-h1: clamp(2rem, 3.5vw + 0.5rem, 3.25rem);
  --text-h2: clamp(1.5rem, 2.5vw + 0.5rem, 2.25rem);
}


2. PHOTO-FIRST HERO DIFFERENTIATION MATRIX:

    Halaman Beranda (/):

        Visual: Full-Bleed Cinematic Hero Image dengan Dark Scrim Overlay (bg-gradient-to-r from-black/85 via-black/60 to-transparent).

        Konten: Headline H1 tegas dan kontras tinggi di atas foto, 2 tombol CTA, tanpa eyebrow di atas H1.

    Halaman Layanan (/layanan):

        Visual: Split 50/50 Showcase. Sisi kiri memuat foto material/CAD besar beresolusi tinggi, sisi kanan memuat judul layanan dan ruang lingkup kerja.

    Halaman Portofolio (/portofolio):

        Visual: Asymmetric Masonry Photo Grid. Setiap proyek dipimpin oleh foto arsitektural 16:9 atau 4:5 dengan hover reveal data teknis di bawah foto.

3. WAJIB TULIS DAN SIMPAN SELURUH SPESIFIKASI INI KE: .dniwebcraft/stage2_output.md.

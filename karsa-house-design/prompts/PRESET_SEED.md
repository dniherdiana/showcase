# dniWebCraft Master Preset Seeds (v8 — Superdesign Alpha Specification)
# Architecture: Astro 7 + Tailwind CSS v4.3 (@theme) + Svelte 5 Islands

================================================================================
PRESET 01: PRODUCT-TILE WHITEOUT (Apple Industrial Minimalist)
================================================================================
---
version: "superdesign-alpha"
name: "Product-tile whiteout"
archetype: "ARCHETYPE_SYMMETRICAL_STAGE"
description: "Light-mode-default industrial retail system built on flat off-white panels, edge-to-edge product renders bleeding from below headlines, and a single rationed blue lifted only for links and pill CTAs."
colors:
  background: "#F5F5F7"
  surface: "#FFFFFF"
  surface-dark: "#000000"
  text-primary: "#1D1D1F"
  text-secondary: "#6E6E73"
  accent: "#0071E3"
  link: "#0066CC"
typography:
  display-lg:
    fontFamily: "Plus Jakarta Sans, -apple-system, sans-serif"
    fontSize: "56px"
    fontWeight: 600
    lineHeight: "1.07"
    letterSpacing: "-0.5px"
  headline-md:
    fontFamily: "Plus Jakarta Sans, -apple-system, sans-serif"
    fontSize: "40px"
    fontWeight: 600
    lineHeight: "1.1"
    letterSpacing: "-0.3px"
  body-md:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: "1.47"
    letterSpacing: "-0.37px"
  label-md:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: "1.1"
    letterSpacing: "0.2px"
spacing:
  base: "8px"
  gap: "12px"
  section-padding: "56px"
rounded:
  control: "980px"
  card: "0px"
  pill: "9999px"
components:
  navbar:
    background: "rgba(245, 245, 247, 0.8)"
    backdrop-filter: "saturate(1.8) blur(20px)"
    height: "44px"
  button-primary-hero:
    background: "#0071E3"
    text-color: "#FFFFFF"
    radius: "980px"
    height: "44px"
    padding: "11px 21px"
  button-outline:
    background: "transparent"
    text-color: "#0071E3"
    radius: "980px"
    height: "44px"
    padding: "11px 21px"
    border: "1px solid #0071E3"
  card-panel:
    background: "#F5F5F7"
    radius: "0px"
    padding: "56px 0px 64px"
  card-panel-dark:
    background: "#000000"
    radius: "0px"
    padding: "56px 0px 64px"
  footer:
    background: "#F5F5F7"
---

## Overview
Sistem industri ritel dengan kanvas dominan off-white (`#F5F5F7`) dan panel putih (`#FFFFFF`) yang ditumpuk tanpa border dan tanpa shadow. Struktur dibangun murni dari kontras blok warna bergantian (off-white ↔ hitam pekat) serta tipografi berbobot medium yang tegas. Warna biru (`#0071E3`) sangat dirasionalkan dan hanya boleh muncul pada tombol pill serta teks tautan.

## Composition
* **Hero First Screen:** Struktur terpusat simetris. Headline 1 baris di atas, diikuti subhead 1 baris, pasangan 2 tombol pill (solid + outline), kemudian foto produk/karya besar yang bleeding menetes keluar dari kontainer teks ke bawah. Menolak pola hero asimetris.
* **Mid-Page Rhythm:** Ritme full-width promo bands (100/100/100) berselang-seling warna terang dan gelap, lalu pecah menjadi 2x2 Bento Block (49/49 split), diikuti Media Horizontal Scrolling Rail untuk showcase visual dinamis.
* **Footer:** Ditutup dengan footer padat 5 kolom yang dipisahkan garis tipis 1px.

## Graphics & Depth
* **Shadows:** Nol shadow pada kartu konten. Elevasi L1 studio light difus `rgba(0,0,0,0.15) 0 20px 40px` hanya untuk elemen floating mockup.
* **Navbar Glass:** `backdrop-filter: saturate(180%) blur(20px)` dengan border bawah `rgba(0,0,0,0.08) 1px solid`.

## Guardrails
* Dilarang menambahkan border atau border-radius pada panel section (wajib 0px).
* Dilarang menggunakan warna aksen biru pada heading, ikon, atau background section.
* Dilarang menggunakan layout hero split kiri-teks/kanan-foto.

================================================================================
PRESET 02: HAUTE-COUTURE EDITORIAL (Luxury & Architecture)
================================================================================
---
version: "superdesign-alpha"
name: "Haute-couture editorial"
archetype: "ARCHETYPE_EDITORIAL_ASYMMETRY"
description: "High-contrast architectural and fashion editorial system defined by full-bleed portrait photography, Cormorant display serif typography, 1px brass hairlines, and asymmetric sticky storytelling."
colors:
  background: "#FDFBF7"
  surface: "#F3EFE6"
  surface-dark: "#1A1817"
  text-primary: "#1A1817"
  text-secondary: "#66635B"
  accent: "#C5A059"
  link: "#C5A059"
typography:
  display-lg:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "52px"
    fontWeight: 500
    lineHeight: "1.05"
    letterSpacing: "-0.5px"
  headline-md:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "36px"
    fontWeight: 500
    lineHeight: "1.15"
    letterSpacing: "0px"
  body-md:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: "1.65"
    letterSpacing: "-0.1px"
  label-md:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "10px"
    fontWeight: 600
    lineHeight: "1.2"
    letterSpacing: "0.25em"
spacing:
  base: "8px"
  gap: "16px"
  section-padding: "64px"
rounded:
  control: "0px"
  card: "0px"
  pill: "0px"
components:
  navbar:
    background: "#FDFBF7"
    backdrop-filter: "none"
    height: "64px"
    border-bottom: "1px solid rgba(26, 24, 23, 0.12)"
  button-primary-hero:
    background: "#1A1817"
    text-color: "#FDFBF7"
    radius: "0px"
    height: "46px"
    padding: "12px 28px"
    hover-background: "#C5A059"
  button-outline:
    background: "transparent"
    text-color: "#1A1817"
    radius: "0px"
    height: "46px"
    padding: "12px 28px"
    border: "1px solid #1A1817"
  card-panel:
    background: "#F3EFE6"
    radius: "0px"
    border: "1px solid rgba(26, 24, 23, 0.15)"
  card-panel-dark:
    background: "#1A1817"
    radius: "0px"
    text-color: "#FDFBF7"
---

## Overview
Sistem majalah arsitektur dan editorial mewah. Berpijak pada kertas hangat (`#FDFBF7`), panel taupe halus (`#F3EFE6`), dan kontras arang pekat (`#1A1817`). Struktur hidup dari asimetri kolom, tipografi serif anggun, dan garis pemisah hairline 1px emas (`#C5A059`).

## Composition
* **Hero First Screen:** Asymmetric Editorial Split. Kolom kiri (7 cols) memuat headline serif besar dan narasi lugas, kolom kanan (5 cols) memuat frame foto vertikal rasio 4:5 yang dibingkai border 1px dengan cap arsip autentik di bawahnya.
* **Services / Specialization:** 2-Column Sticky Architecture. Kiri judul section yang sticky saat di-scroll, kanan daftar spesifikasi dengan gambar arsitektural berlebar variabel diselingi pull-quotes berhuruf miring.
* **Portfolio Showcase:** Full-Width Single-Card Focus atau Masonry Asimetris berdimensi variatif (16:10 landscape dan 4:5 portrait) lengkap dengan data metrik anggaran dan durasi pengerjaan.

## Graphics & Depth
* **Shadows:** Nol drop-shadow konvensional. Kedalaman visual dibangun dari tumpukan frame foto bergaris 1px dan peralihan kanvas ke blok gelap `#1A1817`.
* **Hairline Dividers:** Menggunakan `border-b border-black/10` dan `divide-y divide-black/10` untuk mengorganisir data.

## Guardrails
* Dilarang menggunakan sudut membulat (radius wajib 0px tajam pada semua elemen).
* Dilarang menggunakan sans-serif geometris bulat sebagai display heading.
* Dilarang membungkus konten dalam card rounded dengan bayangan abu-abu lembut.

================================================================================
PRESET 03: STRIPE FINTECH PRECISION (Developer & High-Volume B2B)
================================================================================
---
version: "superdesign-alpha"
name: "Stripe fintech precision"
archetype: "ARCHETYPE_CHROMATIC_MATRIX"
description: "Pure white high-trust infrastructure system featuring whisper-weight headlines (300 weight), chromatic blue-tinted shadows, and a dark navy mid-page contrast break."
colors:
  background: "#FFFFFF"
  surface: "#FFFFFF"
  surface-panel: "#F8FAFC"
  surface-dark: "#061B31"
  text-primary: "#061B31"
  text-secondary: "#425466"
  accent: "#533AFD"
  link: "#533AFD"
typography:
  display-lg:
    fontFamily: "Plus Jakarta Sans, -apple-system, sans-serif"
    fontSize: "56px"
    fontWeight: 300
    lineHeight: "1.08"
    letterSpacing: "-1.4px"
  headline-md:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "36px"
    fontWeight: 400
    lineHeight: "1.15"
    letterSpacing: "-0.8px"
  body-md:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.6"
    letterSpacing: "-0.2px"
  label-md:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "11px"
    fontWeight: 500
    lineHeight: "1.2"
    letterSpacing: "0.05em"
spacing:
  base: "8px"
  gap: "16px"
  section-padding: "64px"
rounded:
  control: "6px"
  card: "8px"
  pill: "9999px"
components:
  navbar:
    background: "rgba(255, 255, 255, 0.85)"
    backdrop-filter: "blur(16px)"
    height: "56px"
    border-bottom: "1px solid #E2E8F0"
  button-primary-hero:
    background: "#533AFD"
    text-color: "#FFFFFF"
    radius: "6px"
    height: "42px"
    padding: "10px 18px"
    hover-background: "#432EC7"
  button-outline:
    background: "transparent"
    text-color: "#061B31"
    radius: "6px"
    height: "42px"
    padding: "10px 18px"
    border: "1px solid #CBD5E1"
  card-panel:
    background: "#FFFFFF"
    radius: "8px"
    border: "1px solid #E5EDF5"
    shadow: "0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07)"
  card-panel-dark:
    background: "#061B31"
    radius: "8px"
    text-color: "#FFFFFF"
---

## Overview
Sistem presisi enterprise B2B dengan kanvas putih dominan (`#FFFFFF`), teks biru-navy pekat (`#061B31`), dan aksen electric indigo (`#533AFD`). Ciri khasnya adalah tipografi display berbobot sangat tipis (weight 300) yang memancarkan otoritas tenang, serta bayangan kartu yang dibiaskan dengan warna biru kromatik (`rgba(50,50,93,...)`).

## Composition
* **Hero First Screen:** Headline besar berbobot tipis 300 di kiri dengan tracking rapat (-1.4px), subhead 18px, sepasang tombol indigo + ghost, dan panel dashboard mockup teknis di kanan dengan multi-layer chromatic shadow.
* **Feature Grid:** Grid kartu fitur 2 atau 3 kolom berlatar putih dengan bayangan biru lembut, dipecah oleh 1 section band full-width berwarna dark navy (`#061B31`) di tengah halaman.
* **Workflow Matrix:** Baris data tabular dengan font monospace untuk angka statistik dan garis pembatas hairline horizontal tipis.

## Graphics & Depth
* **Chromatic Multi-Layer Shadow:**
  * L1: `0 3px 6px rgba(50,50,93,0.06), 0 1px 3px rgba(0,0,0,0.08)`
  * L2: `0 15px 35px rgba(50,50,93,0.1), 0 5px 15px rgba(0,0,0,0.07)`
  * L3: `0 30px 60px -12px rgba(50,50,93,0.25), 0 18px 36px -18px rgba(0,0,0,0.3)`
* **Filosofi:** Bayangan wajib dibiaskan warna navy (`#32325D`), dilarang memakai bayangan abu-abu hitam netral.

## Guardrails
* Dilarang menggunakan font weight 600 atau 700 pada display headline (wajib weight 300/400).
* Dilarang menggunakan warna hitam murni `#000000` untuk teks judul (wajib `#061B31`).
* Dilarang menggunakan tombol ber-radius pill bulat penuh (wajib radius 6px persegi halus).

================================================================================
PRESET 04: LINEAR DARK PRECISION (Issue-Tracker & Developer Workspace)
================================================================================
---
version: "superdesign-alpha"
name: "Linear dark precision"
archetype: "ARCHETYPE_LUMINANCE_STACK"
description: "Dark-native system built on stepped background luminance surfaces, semi-transparent white hairline borders, and singular indigo accents."
colors:
  background: "#08090A"
  surface: "#0F1011"
  surface-elevated: "#191A1B"
  text-primary: "#F7F8F8"
  text-secondary: "#8A8F98"
  accent: "#5E6AD2"
  link: "#7170FF"
typography:
  display-lg:
    fontFamily: "Geist, Plus Jakarta Sans, sans-serif"
    fontSize: "56px"
    fontWeight: 500
    lineHeight: "1.08"
    letterSpacing: "-1.5px"
  headline-md:
    fontFamily: "Geist, sans-serif"
    fontSize: "32px"
    fontWeight: 500
    lineHeight: "1.15"
    letterSpacing: "-0.8px"
  body-md:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: "1.6"
    letterSpacing: "-0.1px"
  label-md:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "11px"
    fontWeight: 500
    lineHeight: "1.2"
    letterSpacing: "0.05em"
spacing:
  base: "8px"
  gap: "12px"
  section-padding: "56px"
rounded:
  control: "6px"
  card: "8px"
  pill: "9999px"
components:
  navbar:
    background: "rgba(8, 9, 10, 0.8)"
    backdrop-filter: "blur(16px)"
    height: "52px"
    border-bottom: "1px solid rgba(255, 255, 255, 0.08)"
  button-primary-hero:
    background: "#5E6AD2"
    text-color: "#FFFFFF"
    radius: "6px"
    height: "40px"
    padding: "9px 16px"
    hover-background: "#6F7BE0"
  button-outline:
    background: "rgba(255, 255, 255, 0.04)"
    text-color: "#F7F8F8"
    radius: "6px"
    height: "40px"
    padding: "9px 16px"
    border: "1px solid rgba(255, 255, 255, 0.1)"
  card-panel:
    background: "#0F1011"
    radius: "8px"
    border: "1px solid rgba(255, 255, 255, 0.08)"
---

## Overview
Sistem antarmuka gelap terukur. Mengeliminasi drop-shadow konvensional (tidak ada drop-shadow hitam di atas latar gelap). Elevasi sepenuhnya ditentukan oleh **Luminance Stepping** (peningkatan kecerahan permukaan latar belakang) yang dibingkai oleh border semi-transparan `rgba(255,255,255,0.08)`.

## Composition
* **Hero First Screen:** Kanvas gelap gulita (`#08090A`) dengan headline berukuran 56px berbobot 500, tombol aksi indigo transparan, dan screenshot aplikasi/arsitektur berbingkai border kaca tipis.
* **Feature Grid:** Panel gelap bertingkat (`#0F1011` $\rightarrow$ `#191A1B`), teks deskripsi berwarna abu-abu terang `#D0D6E0`, dan status indicator dot hijau statis (`#27A644`).
* **Workflow & Data Rows:** Baris-baris bergaris horizontal dengan nomor monospace kecil dan pembatas hairline yang hanya menyala saat disentuh hover kursor.

## Graphics & Depth
* **Luminance Stepping:**
  * Base Floor: `#08090A`
  * Panel Surface: `#0F1011` (`rgba(255,255,255,0.03)`)
  * Elevated Hover: `#191A1B` (`rgba(255,255,255,0.06)`)
* **Border:** `1px solid rgba(255, 255, 255, 0.08)`.
* **Glow Aksen:** Glow indigo subtil hanya pada area fokus `box-shadow: 0 0 20px rgba(94, 106, 210, 0.15)`.

## Guardrails
* Dilarang menggunakan teks putih murni `#FFFFFF` (wajib `#F7F8F8`).
* Dilarang menggunakan drop shadow hitam pekat untuk menciptakan elevasi.
* Dilarang menggunakan gradien neon mencolok di teks heading.

================================================================================
PRESET 05: AVANT-GARDE KINETIC BRUTALISM (Creative Agency & Studio)
================================================================================
---
version: "superdesign-alpha"
name: "Avant-garde kinetic brutalism"
archetype: "ARCHETYPE_BRUTALIST_SPLIT"
description: "High-contrast graphic brutalism defined by thick 2px black borders, diagonal clip-path section dividers, hard solid 4px offset shadows, and kinetic marquee tickers."
colors:
  background: "#F0F0F0"
  surface: "#FFFFFF"
  surface-dark: "#000000"
  text-primary: "#000000"
  text-secondary: "#404040"
  accent: "#E2FF00"
  link: "#0038FF"
typography:
  display-lg:
    fontFamily: "Syne, sans-serif"
    fontSize: "64px"
    fontWeight: 800
    lineHeight: "0.95"
    letterSpacing: "-1px"
  headline-md:
    fontFamily: "Syne, sans-serif"
    fontSize: "36px"
    fontWeight: 700
    lineHeight: "1.0"
    letterSpacing: "-0.5px"
  body-md:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "15px"
    fontWeight: 500
    lineHeight: "1.5"
    letterSpacing: "0px"
  label-md:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "11px"
    fontWeight: 700
    lineHeight: "1.2"
    letterSpacing: "0.1em"
spacing:
  base: "8px"
  gap: "16px"
  section-padding: "56px"
rounded:
  control: "0px"
  card: "0px"
  pill: "0px"
components:
  navbar:
    background: "#F0F0F0"
    height: "56px"
    border-bottom: "2px solid #000000"
  button-primary-hero:
    background: "#E2FF00"
    text-color: "#000000"
    radius: "0px"
    height: "46px"
    padding: "12px 24px"
    border: "2px solid #000000"
    shadow: "4px 4px 0px #000000"
  button-outline:
    background: "#FFFFFF"
    text-color: "#000000"
    radius: "0px"
    height: "46px"
    padding: "12px 24px"
    border: "2px solid #000000"
    shadow: "4px 4px 0px #000000"
  card-panel:
    background: "#FFFFFF"
    radius: "0px"
    border: "2px solid #000000"
    shadow: "4px 4px 0px #000000"
---

## Overview
Sistem grafis avant-garde bertaraf internasional. Menolak sudut membulat dan bayangan blur. Struktur ditegakkan oleh garis tebal 2px hitam pekat, bayangan keras (hard offset shadow), dan aksen warna neon acid (`#E2FF00`) serta biru kobalt (`#0038FF`).

## Composition
* **Hero First Screen:** Headline besar skew/miring transform diagonal dengan blok warna solid yang terpotong garis miring (`clip-path`), berdampingan dengan frame foto hitam-putih kontras tinggi.
* **Kinetic Marquee:** 1 pita teks berjalan murni CSS melintasi section dengan background hitam dan teks neon acid.
* **Feature & Portfolio:** Kartu berotasi sedikit (-2° / 2°) yang kembali lurus saat kursor hover, masing-masing membawa bayangan padat `4px 4px 0 #000000`.

## Graphics & Depth
* **Hard Offset Shadows:**
  * Default: `4px 4px 0px #000000`
  * Active/Elevated: `8px 8px 0px #000000`
  * Nol blur, nol transparansi.
* **Section Dividers:** Minimal 1 pemotong diagonal `clip-path: polygon(0 0, 100% 4vw, 100% 100%, 0 100%)` antar section.

## Guardrails
* Dilarang menggunakan bayangan blur atau gradien halus.
* Dilarang menggunakan border-radius > 0px.
* Dilarang menggunakan warna pastel redup.

================================================================================
PRESET 06: ORGANIC CRAFT & WARM LIVING (F&B, Artisanal & Wellness)
================================================================================
---
version: "superdesign-alpha"
name: "Organic craft & warm living"
archetype: "ARCHETYPE_ORGANIC_STAGGERED"
description: "Warm nature-grounded system built on soft oatmeal bases, terracotta accents, large pill curves, and negative-margin staggered photo overlaps."
colors:
  background: "#FAF8F5"
  surface: "#FFFFFF"
  surface-panel: "#E8EFE9"
  surface-dark: "#1C2A23"
  text-primary: "#1C2A23"
  text-secondary: "#525E54"
  accent: "#D96B43"
  link: "#D96B43"
typography:
  display-lg:
    fontFamily: "Outfit, sans-serif"
    fontSize: "52px"
    fontWeight: 600
    lineHeight: "1.1"
    letterSpacing: "-0.5px"
  headline-md:
    fontFamily: "Outfit, sans-serif"
    fontSize: "34px"
    fontWeight: 600
    lineHeight: "1.15"
    letterSpacing: "-0.3px"
  body-md:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.65"
    letterSpacing: "0px"
  label-md:
    fontFamily: "Outfit, sans-serif"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: "1.2"
    letterSpacing: "0.1em"
spacing:
  base: "8px"
  gap: "16px"
  section-padding: "60px"
rounded:
  control: "9999px"
  card: "24px"
  pill: "9999px"
components:
  navbar:
    background: "rgba(250, 248, 245, 0.85)"
    backdrop-filter: "blur(12px)"
    height: "60px"
    border-bottom: "1px solid rgba(28, 42, 35, 0.08)"
  button-primary-hero:
    background: "#1C2A23"
    text-color: "#FAF8F5"
    radius: "9999px"
    height: "46px"
    padding: "12px 28px"
    hover-background: "#D96B43"
  button-outline:
    background: "transparent"
    text-color: "#1C2A23"
    radius: "9999px"
    height: "46px"
    padding: "12px 28px"
    border: "1px solid #1C2A23"
  card-panel:
    background: "#FFFFFF"
    radius: "24px"
    shadow: "0 8px 24px rgba(28, 42, 35, 0.06)"
  card-panel-sage:
    background: "#E8EFE9"
    radius: "24px"
---

## Overview
Sistem organik yang terinspirasi dari alam, bumi, dan material taktil. Menggunakan kanvas krem hangat (`#FAF8F5`), panel hijau sage (`#E8EFE9`), dan aksen terracotta (`#D96B43`). Ritme visual mengalir bebas melalui sudut membulat lebar (radius 24px) dan susunan foto staggered yang saling bertumpuk lembut.

## Composition
* **Hero First Screen:** Headline hangat di kiri atas, berdampingan dengan foto lanskap/interior berkontur lembut di kanan yang menjorok keluar batas kontainer (*negative-margin overlap*) ke section di bawahnya.
* **Services Staggered Grid:** Kartu-kartu layanan naik-turun selang-seling (offset masonry), masing-masing berlatar putih dengan bayangan alami yang sangat lembut.
* **Proof & Testimonial:** 1 kutipan besar berhuruf miring hangat di dalam kontainer sage hijau ber-radius 24px.

## Graphics & Depth
* **Soft Natural Shadows:**
  * L1: `0 8px 24px rgba(28, 42, 35, 0.06)`
  * L2: `0 16px 40px rgba(28, 42, 35, 0.1)`
* **Filosofi:** Bayangan hangat difus seperti pantulan cahaya matahari alami di atas kertas.

## Guardrails
* Dilarang menggunakan sudut tajam 0px atau border hitam tebal.
* Dilarang menggunakan warna dingin abu-abu kebiruan.
* Dilarang membuat susunan kartu simetris yang kaku.

================================================================================
PRESET 07: NOTION WARM ANALOG (Productivity, Studio & Docs)
================================================================================
---
version: "superdesign-alpha"
name: "Notion warm analog"
archetype: "ARCHETYPE_ANALOG_WHISPER"
description: "Warm-white analog workspace defined by alternating cream surfaces (#F6F5F4), whisper-light 1px borders, and ultra-subtle sub-0.04 opacity shadows."
colors:
  background: "#FFFFFF"
  surface: "#F6F5F4"
  surface-dark: "#31302E"
  text-primary: "#31302E"
  text-secondary: "#615D59"
  accent: "#0075DE"
  link: "#0075DE"
typography:
  display-lg:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "52px"
    fontWeight: 700
    lineHeight: "1.1"
    letterSpacing: "-1.2px"
  headline-md:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "28px"
    fontWeight: 600
    lineHeight: "1.2"
    letterSpacing: "-0.5px"
  body-md:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: "1.6"
    letterSpacing: "-0.1px"
  label-md:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "11px"
    fontWeight: 600
    lineHeight: "1.2"
    letterSpacing: "0.05em"
spacing:
  base: "8px"
  gap: "12px"
  section-padding: "52px"
rounded:
  control: "6px"
  card: "12px"
  pill: "9999px"
components:
  navbar:
    background: "#FFFFFF"
    height: "52px"
    border-bottom: "1px solid rgba(0, 0, 0, 0.08)"
  button-primary-hero:
    background: "#0075DE"
    text-color: "#FFFFFF"
    radius: "6px"
    height: "38px"
    padding: "8px 16px"
    hover-background: "#0066C4"
  button-outline:
    background: "#FFFFFF"
    text-color: "#31302E"
    radius: "6px"
    height: "38px"
    padding: "8px 16px"
    border: "1px solid rgba(0, 0, 0, 0.12)"
  card-panel:
    background: "#F6F5F4"
    radius: "12px"
    border: "1px solid rgba(0, 0, 0, 0.08)"
---

## Overview
Sistem analog hangat bernuansa kertas kerja (*analog workspace*). Menggunakan ritme selang-seling antara putih murni (`#FFFFFF`) dan putih hangat (`#F6F5F4`). Teks menggunakan abu-abu hangat berbobot arang (`#31302E`), dan seluruh garis pembatas dirancang sangat halus (*whisper border* `rgba(0,0,0,0.08)`).

## Composition
* **Hero First Screen:** Kanvas putih bersih dengan headline bold 52px, tombol aksi biru ber-radius 6px, serta ilustrasi/mockup arsitektur berbingkai whisper border.
* **Alternating Sections:** Setiap perpindahan section berganti latar antara `#FFFFFF` dan `#F6F5F4` untuk menciptakan batas alami tanpa garis tebal.
* **Grid Cards:** Grid 2 atau 3 kolom kartu beralas `#F6F5F4` dengan radius 12px dan bayangan sangat tipis (hampir tidak terlihat, namun terasa ada).

## Graphics & Depth
* **Whisper Shadow:**
  * L1: `0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02)`
  * L2: `0 4px 12px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.03)`
* **Filosofi:** Bayangan "dirasakan, bukan dilihat" (felt, not seen).

## Guardrails
* Dilarang menggunakan warna abu-abu kebiruan dingin (wajib undertone hangat coklat/krem).
* Dilarang menggunakan border lebih tebal dari 1px atau opacity border > 0.1.
* Dilarang menggunakan bayangan pekat atau gradien berwarna-warni.

================================================================================
PRESET 08: NIKE ATHLETIC MONOCHROME (High-Impact & Streetwear)
================================================================================
---
version: "superdesign-alpha"
name: "Nike athletic monochrome"
archetype: "ARCHETYPE_MONOCHROME_PUNCH"
description: "Monumental high-impact system featuring 96px uppercase condensed headlines punching through full-bleed action imagery with pure monochrome UI controls."
colors:
  background: "#F5F5F5"
  surface: "#FFFFFF"
  surface-dark: "#111111"
  text-primary: "#111111"
  text-secondary: "#525252"
  accent: "#111111"
  link: "#111111"
typography:
  display-lg:
    fontFamily: "Oswald, Impact, sans-serif"
    fontSize: "80px"
    fontWeight: 700
    lineHeight: "0.90"
    letterSpacing: "-0.5px"
  headline-md:
    fontFamily: "Oswald, sans-serif"
    fontSize: "44px"
    fontWeight: 700
    lineHeight: "0.95"
    letterSpacing: "0px"
  body-md:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "16px"
    fontWeight: 500
    lineHeight: "1.4"
    letterSpacing: "0px"
  label-md:
    fontFamily: "Oswald, sans-serif"
    fontSize: "14px"
    fontWeight: 700
    lineHeight: "1.0"
    letterSpacing: "0.15em"
spacing:
  base: "8px"
  gap: "8px"
  section-padding: "48px"
rounded:
  control: "40px"
  card: "0px"
  pill: "9999px"
components:
  navbar:
    background: "#FFFFFF"
    height: "60px"
    border-bottom: "1px solid #E5E5E5"
  button-primary-hero:
    background: "#111111"
    text-color: "#FFFFFF"
    radius: "40px"
    height: "44px"
    padding: "12px 24px"
    hover-background: "#333333"
  button-outline:
    background: "transparent"
    text-color: "#111111"
    radius: "40px"
    height: "44px"
    padding: "12px 24px"
    border: "1.5px solid #111111"
  card-panel:
    background: "#FFFFFF"
    radius: "0px"
    padding: "0px"
---

## Overview
Sistem atletis berbobot masif dan penuh energi. Mengandalkan headline condensed huruf kapital raksasa (line-height ultra rapat 0.90) yang menimpa foto aksi *full-bleed edge-to-edge*. Seluruh antarmuka bersifat monokrom murni (`#111111`), membiarkan warna berasal 100% dari konten fotografi.

## Composition
* **Hero First Screen:** Foto resolusi tinggi *full-bleed edge-to-edge* tanpa border-radius dengan overlay gradien hitam tipis di bagian bawah, ditimpa headline huruf kapital 80px/96px dan tombol pill hitam pekat.
* **Dense Media Grid:** Grid kartu foto padat ber-gap rapat (4px - 8px) rasio 16:9 atau 1:1 square tanpa sudut membulat, dengan teks kategori huruf kapital berukuran 14px.
* **Statement Promo Band:** Banner hitam pekat memanjang melintasi layar dengan teks deklarasi berhuruf kapital besar.

## Graphics & Depth
* **Shadows:** Nol shadow di seluruh halaman.
* **Kedalaman:** Tercipta murni dari kontras pekat elemen UI monokrom terhadap foto-foto berwarna jenuh.

## Guardrails
* Dilarang menggunakan border-radius pada foto atau kontainer showcase (wajib 0px).
* Dilarang menggunakan warna aksen di luar monokrom hitam/putih.
* Dilarang menggunakan huruf kecil (lowercase) pada display headline hero.

================================================================================
PRESET 09: SHOPIFY DARK THEATRE (Keynote & E-Commerce Flagship)
================================================================================
---
version: "superdesign-alpha"
name: "Shopify dark theatre"
archetype: "ARCHETYPE_THEATRE_SPOTLIGHT"
description: "Cinematic dark forest-teal system featuring monumental 80px/300 featherlight headlines, subtle ambient radial spotlights, and bioluminescent neon green accents."
colors:
  background: "#02090A"
  surface: "#102620"
  surface-dark: "#02090A"
  text-primary: "#FFFFFF"
  text-secondary: "#A1A1AA"
  accent: "#36F4A4"
  link: "#36F4A4"
typography:
  display-lg:
    fontFamily: "Cabinet Grotesk, Syne, sans-serif"
    fontSize: "80px"
    fontWeight: 300
    lineHeight: "1.02"
    letterSpacing: "-1.5px"
  headline-md:
    fontFamily: "Cabinet Grotesk, sans-serif"
    fontSize: "40px"
    fontWeight: 300
    lineHeight: "1.1"
    letterSpacing: "-0.8px"
  body-md:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: "1.6"
    letterSpacing: "-0.1px"
  label-md:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "11px"
    fontWeight: 600
    lineHeight: "1.2"
    letterSpacing: "0.15em"
spacing:
  base: "8px"
  gap: "16px"
  section-padding: "72px"
rounded:
  control: "9999px"
  card: "16px"
  pill: "9999px"
components:
  navbar:
    background: "rgba(2, 9, 10, 0.85)"
    backdrop-filter: "blur(20px)"
    height: "56px"
    border-bottom: "1px solid rgba(255, 255, 255, 0.08)"
  button-primary-hero:
    background: "#FFFFFF"
    text-color: "#02090A"
    radius: "9999px"
    height: "46px"
    padding: "12px 28px"
    hover-background: "#36F4A4"
  button-outline:
    background: "transparent"
    text-color: "#FFFFFF"
    radius: "9999px"
    height: "46px"
    padding: "12px 28px"
    border: "1px solid rgba(255, 255, 255, 0.2)"
  card-panel:
    background: "#102620"
    radius: "16px"
    border: "1px solid rgba(54, 244, 164, 0.15)"
---

## Overview
Sistem teatrikal gelap yang terinspirasi dari panggung peluncuran produk digital (*keynote stage*). Berpijak pada kanvas gelap hijau lumut pekat (`#02090A` $\rightarrow$ `#102620`). Headline menggunakan ukuran raksasa monumental 80px namun berbobot featherlight (weight 300) yang disinari gradien spotlight lembut dari belakang.

## Composition
* **Hero First Screen:** Kanvas gelap gulita dengan headline putih featherlight 80px, disinari spotlight radial gradient hijau-teal lembut di belakang teks, serta sepasang tombol pill putih dan outline.
* **Keynote Slide Bands:** Setiap fitur/layanan disajikan seperti satu lembar slide presentasi dengan jeda vertikal luas (72px - 96px), screenshot arsitektur dalam kontainer gelap berbingkai halus, dan aksen neon green `#36F4A4` pada angka data.
* **Stats Section:** Angka metrik raksasa 80px berbobot tebal yang menyala kontras di atas kanvas gelap.

## Graphics & Depth
* **Theatre Spotlight Gradient:** `radial-gradient(circle at 50% 30%, rgba(16, 38, 32, 0.8) 0%, rgba(2, 9, 10, 0) 70%)`.
* **Card Glow:** `box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.1)`.

## Guardrails
* Dilarang menggunakan font weight tebal (>400) pada headline monumental hero.
* Dilarang menggunakan warna neon hijau secara berlebihan (hanya untuk aksen fokus dan hover).
* Dilarang menyisipkan section putih terang di tengah halaman gelap teatrikal ini.

================================================================================
PRESET 10: VERCEL ENGINEERING MINIMAL (Cloud Platform & DevTools)
================================================================================
---
version: "superdesign-alpha"
name: "Vercel engineering minimal"
archetype: "ARCHETYPE_SHADOW_BORDER"
description: "Gallery-white engineering system replacing all physical borders with 1px shadow rings, structured around a 3-step connected workflow pipeline centerpiece."
colors:
  background: "#FFFFFF"
  surface: "#FAFAFA"
  surface-dark: "#171717"
  text-primary: "#171717"
  text-secondary: "#4D4D4D"
  accent: "#0A72EF"
  link: "#0A72EF"
typography:
  display-lg:
    fontFamily: "Geist, sans-serif"
    fontSize: "52px"
    fontWeight: 600
    lineHeight: "1.08"
    letterSpacing: "-2.0px"
  headline-md:
    fontFamily: "Geist, sans-serif"
    fontSize: "32px"
    fontWeight: 600
    lineHeight: "1.15"
    letterSpacing: "-1.0px"
  body-md:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: "1.55"
    letterSpacing: "-0.2px"
  label-md:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "11px"
    fontWeight: 600
    lineHeight: "1.2"
    letterSpacing: "0.08em"
spacing:
  base: "8px"
  gap: "12px"
  section-padding: "56px"
rounded:
  control: "8px"
  card: "8px"
  pill: "9999px"
components:
  navbar:
    background: "rgba(255, 255, 255, 0.85)"
    backdrop-filter: "blur(16px)"
    height: "56px"
    shadow: "0 0 0 1px rgba(0, 0, 0, 0.08)"
  button-primary-hero:
    background: "#171717"
    text-color: "#FFFFFF"
    radius: "8px"
    height: "40px"
    padding: "10px 18px"
    hover-background: "#000000"
  button-outline:
    background: "#FFFFFF"
    text-color: "#171717"
    radius: "8px"
    height: "40px"
    padding: "10px 18px"
    shadow: "0 0 0 1px rgba(0, 0, 0, 0.12)"
  card-panel:
    background: "#FFFFFF"
    radius: "8px"
    shadow: "0 0 0 1px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.04)"
---

## Overview
Sistem rekayasa minimalis galeri putih murni. Menggantikan seluruh properti `border` fisik dengan ring bayangan 1px (`box-shadow: 0 0 0 1px rgba(0,0,0,0.08)`). Ciri khas utamanya adalah diagram alur kerja 3 tahap (Workflow Pipeline) yang terhubung garis presisi dengan aksen warna khusus per fase.

## Composition
* **Hero First Screen:** Kanvas putih galeri dengan headline Geist ber-tracking sangat rapat (-2.0px), subhead abu-abu terukur, tombol solid hitam + outline ber-ring shadow, dan latar belakang gradien pastel sangat halus.
* **Workflow Pipeline Centerpiece:** Section proses 3 tahap yang disusun horizontal terhubung garis penghubung aktif dengan label monospace kapital.
* **Screenshot & Metric Grid:** Kartu screenshot aplikasi dengan top-radius 8px yang melayang di atas ring shadow 1px.

## Graphics & Depth
* **Shadow-as-Border:** `box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.08)`.
* **Elevated Shadow:** `box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.08), 0 8px 24px rgba(0, 0, 0, 0.06)`.

## Guardrails
* Dilarang menggunakan properti CSS `border` fisik pada kartu (wajib menggunakan box-shadow ring).
* Dilarang menggunakan tombol pill bulat penuh (wajib radius 8px).
* Dilarang menggunakan font serif display.


================================================================================
PRESET 11: CYBER-AESTHETICS DARK MODE (Technical Blueprints & Crypto)
================================================================================
---
version: "superdesign-alpha"
name: "Cyber-aesthetics dark mode"
archetype: "ARCHETYPE_BLUEPRINT_GRID"
description: "Dark-native technical system built on faint blueprint grid lines, glowing terminal mono badges, and sharp 12px translucent glass cards."
colors:
  background: "#08080A"
  surface: "#121216"
  surface-dark: "#18181C"
  text-primary: "#FFFFFF"
  text-secondary: "#A1A1AA"
  accent: "#00F0FF"
  link: "#00F0FF"
typography:
  display-lg:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "44px"
    fontWeight: 700
    lineHeight: "1.05"
    letterSpacing: "-0.5px"
  headline-md:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "28px"
    fontWeight: 700
    lineHeight: "1.15"
    letterSpacing: "-0.3px"
  body-md:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "1.6"
    letterSpacing: "0px"
  label-md:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "11px"
    fontWeight: 500
    lineHeight: "1.2"
    letterSpacing: "0.15em"
spacing:
  base: "8px"
  gap: "12px"
  section-padding: "56px"
rounded:
  control: "9999px"
  card: "12px"
  pill: "9999px"
components:
  navbar:
    background: "rgba(8, 8, 10, 0.85)"
    backdrop-filter: "blur(20px)"
    height: "52px"
    border-bottom: "1px solid rgba(255, 255, 255, 0.1)"
  button-primary-hero:
    background: "#00F0FF"
    text-color: "#08080A"
    radius: "9999px"
    height: "42px"
    padding: "10px 22px"
    hover-background: "#33F3FF"
    shadow: "0 0 20px rgba(0, 240, 255, 0.35)"
  button-outline:
    background: "rgba(255, 255, 255, 0.04)"
    text-color: "#00F0FF"
    radius: "9999px"
    height: "42px"
    padding: "10px 22px"
    border: "1px solid rgba(0, 240, 255, 0.3)"
  card-panel:
    background: "#121216"
    radius: "12px"
    border: "1px solid rgba(255, 255, 255, 0.08)"
---

## Overview
Sistem kanvas gelap teknikal yang menyerupai antarmuka mesin presisi dan lembar spesifikasi CAD. Berpijak pada latar hitam pekat (`#08080A`), garis-garis grid cetak biru (blueprint grid), dan aksen cyan elektrik (`#00F0FF`).

## Composition
* **Hero First Screen:** Kanvas gelap berlatar grid teknis 32px. Headline Space Grotesk dengan aksen glow cyan tipis pada kata kunci utama, didampingi terminal badge di sudut panel.
* **Services / Features:** Bento 3x3 asimetris dengan panel semi-transparan yang memancarkan border glow cyan saat disentuh kursor.
* **Data Matrix Portfolio:** Grid thumbnail rapat dengan overlay data teknis instan saat di-hover.

## Graphics & Depth
* **Blueprint Grid:** `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`.
* **Elevasi Cyan Glow:** `box-shadow: 0 0 20px rgba(0, 240, 255, 0.15)`.

## Guardrails
* Dilarang menggunakan font serif atau font rounded friendly.
* Dilarang menggunakan animasi pulse berulang yang mengganggu.
* Dilarang menggunakan gradien teks berwarna-warni selain cyan murni.

================================================================================
PRESET 12: SWISS CORPORATE PRECISION (Audit, Law & Enterprise)
================================================================================
---
version: "superdesign-alpha"
name: "Swiss corporate precision"
archetype: "ARCHETYPE_REPORT_MATRIX"
description: "Formal structured Swiss layout defined by 4-column grids, razor-thin vertical dividers, and oversized metric data anchors."
colors:
  background: "#F8FAFC"
  surface: "#FFFFFF"
  surface-dark: "#0F172A"
  text-primary: "#0F172A"
  text-secondary: "#475569"
  accent: "#0284C7"
  link: "#0284C7"
typography:
  display-lg:
    fontFamily: "Geist, Plus Jakarta Sans, sans-serif"
    fontSize: "40px"
    fontWeight: 600
    lineHeight: "1.1"
    letterSpacing: "-0.5px"
  headline-md:
    fontFamily: "Geist, sans-serif"
    fontSize: "24px"
    fontWeight: 600
    lineHeight: "1.2"
    letterSpacing: "-0.2px"
  body-md:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: "1.6"
    letterSpacing: "0px"
  label-md:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "11px"
    fontWeight: 600
    lineHeight: "1.2"
    letterSpacing: "0.08em"
spacing:
  base: "8px"
  gap: "0px"
  section-padding: "60px"
rounded:
  control: "4px"
  card: "4px"
  pill: "9999px"
components:
  navbar:
    background: "#FFFFFF"
    height: "56px"
    border-bottom: "1px solid #E2E8F0"
  button-primary-hero:
    background: "#0F172A"
    text-color: "#FFFFFF"
    radius: "4px"
    height: "40px"
    padding: "10px 20px"
    hover-background: "#0284C7"
  button-outline:
    background: "#FFFFFF"
    text-color: "#0F172A"
    radius: "4px"
    height: "40px"
    padding: "10px 20px"
    border: "1px solid #CBD5E1"
  card-panel:
    background: "#FFFFFF"
    radius: "4px"
    border: "1px solid #E2E8F0"
---

## Overview
Sistem presisi korporat Swiss yang dirancang untuk membangun rasa percaya tinggi (high-trust). Menghilangkan elemen dekoratif liar dan mengandalkan keteraturan grid 4-kolom bergaris vertikal tipis (`divide-x divide-slate-200`) serta angka statistik besar sebagai jangkar visual.

## Composition
* **Hero First Screen:** Kolom kiri memuat headline formal tegas dan satu angka statistik raksasa (misal: 99.2% atau 42 Proyek), kolom kanan memuat foto korporat bersih ber-border 1px.
* **Services Matrix:** Grid 4-kolom bersambung tanpa gap, dipisahkan oleh garis vertikal 1px tipis, masing-masing memuat ikon fungsional dan rincian deliverable.
* **Portfolio Table:** Tabel perbandingan multi-kolom yang rapi dengan angka tabular (`tabular-nums`).

## Graphics & Depth
* **Shadows:** L0 flat, L1 `0 1px 3px rgba(15, 23, 42, 0.06)`.
* **Dividers:** Menggunakan `border-t border-slate-200` dan `divide-x divide-slate-200`.

## Guardrails
* Dilarang menggunakan layout asimetris liar atau kartu melayang acak.
* Dilarang menggunakan sudut membulat lebar (radius maksimal 4px).
* Dilarang menggunakan font serif dekoratif.

================================================================================
PRESET 13: NEO-BRUTALIST POP (Youth Media, Creator & Edutech)
================================================================================
---
version: "superdesign-alpha"
name: "Neo-brutalist pop"
archetype: "ARCHETYPE_STICKER_POP"
description: "High-energy playful scrapbook system featuring -2° rotated sticker boxes, 2px solid black borders, and heavy 6px offset hard shadows."
colors:
  background: "#FEF08A"
  surface: "#FCE7F3"
  surface-dark: "#000000"
  text-primary: "#000000"
  text-secondary: "#262626"
  accent: "#8B5CF6"
  link: "#8B5CF6"
typography:
  display-lg:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "48px"
    fontWeight: 800
    lineHeight: "1.0"
    letterSpacing: "-0.5px"
  headline-md:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "28px"
    fontWeight: 800
    lineHeight: "1.1"
    letterSpacing: "-0.2px"
  body-md:
    fontFamily: "Outfit, sans-serif"
    fontSize: "16px"
    fontWeight: 500
    lineHeight: "1.5"
    letterSpacing: "0px"
  label-md:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "12px"
    fontWeight: 800
    lineHeight: "1.2"
    letterSpacing: "0.05em"
spacing:
  base: "8px"
  gap: "16px"
  section-padding: "56px"
rounded:
  control: "12px"
  card: "12px"
  pill: "9999px"
components:
  navbar:
    background: "#FFFFFF"
    height: "60px"
    border-bottom: "2px solid #000000"
  button-primary-hero:
    background: "#8B5CF6"
    text-color: "#FFFFFF"
    radius: "12px"
    height: "46px"
    padding: "12px 24px"
    border: "2px solid #000000"
    shadow: "6px 6px 0px #000000"
  button-outline:
    background: "#FEF08A"
    text-color: "#000000"
    radius: "12px"
    height: "46px"
    padding: "12px 24px"
    border: "2px solid #000000"
    shadow: "6px 6px 0px #000000"
  card-panel:
    background: "#FFFFFF"
    radius: "12px"
    border: "2px solid #000000"
    shadow: "6px 6px 0px #000000"
---

## Overview
Sistem pop neo-brutalisme yang berenergi tinggi dan ekspresif. Memadukan warna kuning cerah (`#FEF08A`), merah muda lembut (`#FCE7F3`), dan ungu elektrik (`#8B5CF6`). Ciri visual utamanya adalah elemen boks berstiker yang dimiringkan -2° dan bayangan padat 6px hitam tanpa blur.

## Composition
* **Hero First Screen:** Headline bold di dalam boks stiker miring -2° dengan border hitam 2px, dikelilingi foto bergaya polaroid miring dengan efek selotip visual.
* **Services Grid:** Kartu-kartu berwarna pastel kontras yang terhubung panah grafis tegas, masing-masing memiliki bayangan offset padat `6px 6px 0 #000000`.
* **Testimonials:** Balon dialog pop tebal berbayangan keras 6px.

## Graphics & Depth
* **Hard Solid Shadows:** `6px 6px 0px #000000` pada seluruh tombol dan kontainer kartu.
* **Border:** Wajib `2px solid #000000`.

## Guardrails
* Dilarang menggunakan bayangan blur atau gradien halus.
* Dilarang menggunakan font serif atau gaya korporat formal.
* Dilarang menggunakan warna redup dingin tanpa kontras.

================================================================================
PRESET 14: EDITORIAL DARK LUXURY (VIP Lounge & Night Architecture)
================================================================================
---
version: "superdesign-alpha"
name: "Editorial dark luxury"
archetype: "ARCHETYPE_DARK_EDITORIAL"
description: "Restrained dark luxury system built on a 50/50 vertical split hero, Cormorant Garamond display typography, and 1px gold hairline framing."
colors:
  background: "#0B0B0C"
  surface: "#141416"
  surface-dark: "#000000"
  text-primary: "#F4F4F5"
  text-secondary: "#71717A"
  accent: "#D4AF37"
  link: "#D4AF37"
typography:
  display-lg:
    fontFamily: "Cormorant Garamond, serif"
    fontSize: "48px"
    fontWeight: 500
    lineHeight: "1.15"
    letterSpacing: "0px"
  headline-md:
    fontFamily: "Cormorant Garamond, serif"
    fontSize: "32px"
    fontWeight: 500
    lineHeight: "1.2"
    letterSpacing: "0px"
  body-md:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: "1.6"
    letterSpacing: "0px"
  label-md:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "11px"
    fontWeight: 500
    lineHeight: "1.2"
    letterSpacing: "0.2em"
spacing:
  base: "8px"
  gap: "16px"
  section-padding: "64px"
rounded:
  control: "9999px"
  card: "0px"
  pill: "9999px"
components:
  navbar:
    background: "#0B0B0C"
    height: "64px"
    border-bottom: "1px solid rgba(212, 175, 55, 0.2)"
  button-primary-hero:
    background: "#D4AF37"
    text-color: "#0B0B0C"
    radius: "9999px"
    height: "44px"
    padding: "11px 24px"
    hover-background: "#E5C158"
  button-outline:
    background: "transparent"
    text-color: "#D4AF37"
    radius: "9999px"
    height: "44px"
    padding: "11px 24px"
    border: "1px solid rgba(212, 175, 55, 0.4)"
  card-panel:
    background: "#141416"
    radius: "0px"
    border: "1px solid rgba(212, 175, 55, 0.15)"
---

## Overview
Sistem kemewahan gelap yang anggun dan sunyi (*restrained dark luxury*). Menggunakan kanvas hitam arang (`#0B0B0C`), panel gelap pekat (`#141416`), dan garis aksen emas murni (`#D4AF37`).

## Composition
* **Hero First Screen:** Split vertikal 50/50 full-bleed. Sisi kiri memuat foto atmosferik dramatis beresolusi tinggi, sisi kanan memuat teks berbingkai border emas 1px dengan tombol pill emas.
* **Services Bands:** Band horizontal memanjang atmosferik dengan foto temaram redup dan judul emas kecil.
* **Portfolio Showcase:** Foto full-bleed satu per satu dengan jeda scroll lambat dan caption teknis minimalis di sudut bawah.

## Graphics & Depth
* **Shadows:** Bayangan dalam dramatis `0 20px 60px rgba(0, 0, 0, 0.6)`.
* **Border:** Garis emas tipis `1px solid rgba(212, 175, 55, 0.2)`.

## Guardrails
* Dilarang menggunakan warna terang mencolok atau gradien neon.
* Dilarang menggunakan sans-serif tebal untuk display headline.
* Dilarang menggunakan border-radius pada panel kartu (wajib 0px).

================================================================================
PRESET 15: ULTRA-MODERN FLUID MINIMALIST (Creative Tech & Studio)
================================================================================
---
version: "superdesign-alpha"
name: "Ultra-modern fluid minimalist"
archetype: "ARCHETYPE_SIDEBAR_MATRIX"
description: "Fluid 12-column architectural grid featuring an 8-column main content stream and a sticky 4-column metadata sidebar."
colors:
  background: "#FFFFFF"
  surface: "#F9FAFB"
  surface-dark: "#09090B"
  text-primary: "#111827"
  text-secondary: "#4B5563"
  accent: "#1D4ED8"
  link: "#1D4ED8"
typography:
  display-lg:
    fontFamily: "Cabinet Grotesk, Plus Jakarta Sans, sans-serif"
    fontSize: "44px"
    fontWeight: 700
    lineHeight: "1.05"
    letterSpacing: "-0.6px"
  headline-md:
    fontFamily: "Cabinet Grotesk, sans-serif"
    fontSize: "28px"
    fontWeight: 700
    lineHeight: "1.15"
    letterSpacing: "-0.3px"
  body-md:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.6"
    letterSpacing: "0px"
  label-md:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "11px"
    fontWeight: 600
    lineHeight: "1.2"
    letterSpacing: "0.05em"
spacing:
  base: "8px"
  gap: "16px"
  section-padding: "60px"
rounded:
  control: "9999px"
  card: "8px"
  pill: "9999px"
components:
  navbar:
    background: "#FFFFFF"
    height: "56px"
    border-bottom: "1px solid #E5E7EB"
  button-primary-hero:
    background: "#111827"
    text-color: "#FFFFFF"
    radius: "9999px"
    height: "42px"
    padding: "10px 22px"
    hover-background: "#1D4ED8"
  button-outline:
    background: "#FFFFFF"
    text-color: "#111827"
    radius: "9999px"
    height: "42px"
    padding: "10px 22px"
    border: "1px solid #D1D5DB"
  card-panel:
    background: "#F9FAFB"
    radius: "8px"
    border: "1px solid #E5E7EB"
---

## Overview
Sistem grid 12-kolom yang konsisten dan cair. Ciri khas utamanya adalah pembagian layout yang stabil di seluruh halaman: 8 kolom untuk konten narasi utama dan 4 kolom untuk sidebar metadata/statistik yang melayang sticky saat di-scroll.

## Composition
* **Hero First Screen:** Grid asimetris 12-kolom (8 kolom headline + CTA, 4 kolom metadata teknis dan koordinat).
* **Services Breakdown:** Konten ruang lingkup di kolom 8, sementara kolom 4 menampilkan ringkasan durasi dan deliverables.
* **Portfolio Filter Stream:** Proyek ditampilkan di 8 kolom utama, dengan filter kategori interaktif di sidebar 4 kolom.

## Graphics & Depth
* **Shadows:** L0 flat, L1 `0 1px 2px rgba(0, 0, 0, 0.04)` + border tipis 1px.
* **Kedalaman:** Dibangun melalui pergerakan sticky sidebar metadata terhadap konten scroll utama.

## Guardrails
* Dilarang memecah pola grid 8/4 yang menjadi identitas preset ini.
* Dilarang menggunakan shadow tebal dramatis atau border-radius besar.

================================================================================
PRESET 16: HIGH-END OPULENT GOLD (Heritage, VIP & Haute Horlogerie)
================================================================================
---
version: "superdesign-alpha"
name: "High-end opulent gold"
archetype: "ARCHETYPE_GOLD_FRAMING"
description: "Opulent luxury system featuring full 4-sided gold decorative framing around headlines, media cards, and formal symmetrical layouts."
colors:
  background: "#0A0908"
  surface: "#161514"
  surface-dark: "#000000"
  text-primary: "#FAF9F6"
  text-secondary: "#A19E95"
  accent: "#D4AF37"
  link: "#D4AF37"
typography:
  display-lg:
    fontFamily: "Cinzel, serif"
    fontSize: "44px"
    fontWeight: 600
    lineHeight: "1.15"
    letterSpacing: "0.5px"
  headline-md:
    fontFamily: "Cinzel, serif"
    fontSize: "26px"
    fontWeight: 600
    lineHeight: "1.2"
    letterSpacing: "0.3px"
  body-md:
    fontFamily: "Cormorant Garamond, serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: "1.7"
    letterSpacing: "0px"
  label-md:
    fontFamily: "Cinzel, serif"
    fontSize: "10px"
    fontWeight: 600
    lineHeight: "1.2"
    letterSpacing: "0.25em"
spacing:
  base: "8px"
  gap: "16px"
  section-padding: "64px"
rounded:
  control: "2px"
  card: "2px"
  pill: "2px"
components:
  navbar:
    background: "#0A0908"
    height: "64px"
    border-bottom: "1px solid rgba(212, 175, 55, 0.3)"
  button-primary-hero:
    background: "#D4AF37"
    text-color: "#0A0908"
    radius: "2px"
    height: "44px"
    padding: "11px 24px"
    hover-background: "#E5C158"
  button-outline:
    background: "transparent"
    text-color: "#D4AF37"
    radius: "2px"
    height: "44px"
    padding: "11px 24px"
    border: "1px solid #D4AF37"
  card-panel:
    background: "#161514"
    radius: "2px"
    border: "1px solid #D4AF37"
---

## Overview
Sistem kemewahan warisan klasik (heritage luxury) yang formal dan monumental. Setiap panel dan kartu konten dikelilingi oleh bingkai emas 4 sisi penuh (`1px solid #D4AF37`), dipadukan dengan tipografi serif Cinzel bertrack lebar.

## Composition
* **Hero First Screen:** Simetris berwibawa di tengah. Headline dikelilingi bingkai emas 4 sisi, dengan foto panggung/karya berbingkai emas di bawahnya.
* **Services Panels:** Setiap layanan dibungkus dalam panel gelap berbingkai emas penuh dengan detail ornamen tipis.
* **Portfolio Showcase:** Grid foto formal simetris berbingkai emas seragam.

## Graphics & Depth
* **Frame Emas Penuh:** `border: 1px solid #D4AF37`.
* **Glow Emas Subtil:** `box-shadow: 0 4px 20px rgba(212, 175, 55, 0.15)`.

## Guardrails
* Dilarang menggunakan sudut membulat > 2px.
* Dilarang menggunakan font modern sans-serif.
* Dilarang menggunakan border yang hanya ada di 1 sisi (wajib bingkai 4 sisi penuh).

================================================================================
PRESET 17: PURE SWISS FLAT DESIGN (Data Portals & Infrastructure)
================================================================================
---
version: "superdesign-alpha"
name: "Pure swiss flat design"
archetype: "ARCHETYPE_SOLID_BLOCKS"
description: "Zero-shadow zero-blur flat system built on solid color modular blocks touching edge-to-edge with thick 2px borders."
colors:
  background: "#F4F4F6"
  surface: "#FFFFFF"
  surface-dark: "#1E293B"
  text-primary: "#0F172A"
  text-secondary: "#64748B"
  accent: "#2563EB"
  link: "#2563EB"
typography:
  display-lg:
    fontFamily: "Geist, sans-serif"
    fontSize: "44px"
    fontWeight: 700
    lineHeight: "1.0"
    letterSpacing: "-0.5px"
  headline-md:
    fontFamily: "Geist, sans-serif"
    fontSize: "28px"
    fontWeight: 700
    lineHeight: "1.1"
    letterSpacing: "-0.3px"
  body-md:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: "1.55"
    letterSpacing: "0px"
  label-md:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "11px"
    fontWeight: 700
    lineHeight: "1.2"
    letterSpacing: "0.08em"
spacing:
  base: "8px"
  gap: "0px"
  section-padding: "52px"
rounded:
  control: "0px"
  card: "0px"
  pill: "0px"
components:
  navbar:
    background: "#FFFFFF"
    height: "52px"
    border-bottom: "2px solid #E2E8F0"
  button-primary-hero:
    background: "#2563EB"
    text-color: "#FFFFFF"
    radius: "0px"
    height: "42px"
    padding: "10px 20px"
    hover-background: "#1D4ED8"
  button-outline:
    background: "#FFFFFF"
    text-color: "#0F172A"
    radius: "0px"
    height: "42px"
    padding: "10px 20px"
    border: "2px solid #E2E8F0"
  card-panel:
    background: "#FFFFFF"
    radius: "0px"
    border: "2px solid #E2E8F0"
---

## Overview
Sistem desain flat Swiss murni tanpa bayangan dan tanpa efek blur. Geometri visual terbentuk dari blok-blok warna solid modular yang menempel rapat tanpa celah (`gap-0`) dan dibatasi oleh garis border 2px solid.

## Composition
* **Hero First Screen:** Blok warna solid penuh dengan headline besar di dalam boks bergaris 2px tegas, menolak elemen foto mengambang.
* **Modular Block Grid:** Kotak-kotak layanan warna solid berbeda yang berbatasan langsung satu sama lain.
* **Data Matrix:** Tabel data monokrom bergaris 2px dengan angka condensed tegas.

## Graphics & Depth
* **Nol Shadow & Nol Blur:** Kedalaman murni dari pembagian blok warna solid dan garis border 2px.

## Guardrails
* Dilarang menggunakan shadow apapun (drop shadow, inner shadow).
* Dilarang menggunakan border-radius > 0px.
* Dilarang menggunakan gradien warna.

================================================================================
PRESET 18: MATERIAL YOU DYNAMIC SYSTEM (Apps & Modern Community)
================================================================================
---
version: "superdesign-alpha"
name: "Material you dynamic system"
archetype: "ARCHETYPE_MATERIAL_ELEVATION"
description: "Soft modern app layout featuring 28px rounded floating panels, multi-tier physical elevation shadows, and pill-shaped interactive controls."
colors:
  background: "#F8FDFF"
  surface: "#E0E0FF"
  surface-dark: "#1D1B20"
  text-primary: "#1D1B20"
  text-secondary: "#49454F"
  accent: "#414E9B"
  link: "#414E9B"
typography:
  display-lg:
    fontFamily: "Outfit, sans-serif"
    fontSize: "40px"
    fontWeight: 600
    lineHeight: "1.1"
    letterSpacing: "-0.3px"
  headline-md:
    fontFamily: "Outfit, sans-serif"
    fontSize: "26px"
    fontWeight: 600
    lineHeight: "1.2"
    letterSpacing: "-0.1px"
  body-md:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.55"
    letterSpacing: "0px"
  label-md:
    fontFamily: "Outfit, sans-serif"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: "1.2"
    letterSpacing: "0.1em"
spacing:
  base: "8px"
  gap: "16px"
  section-padding: "56px"
rounded:
  control: "9999px"
  card: "28px"
  pill: "9999px"
components:
  navbar:
    background: "rgba(248, 253, 255, 0.9)"
    backdrop-filter: "blur(12px)"
    height: "60px"
  button-primary-hero:
    background: "#414E9B"
    text-color: "#FFFFFF"
    radius: "9999px"
    height: "44px"
    padding: "11px 24px"
    hover-background: "#323E82"
  button-outline:
    background: "#E0E0FF"
    text-color: "#1D1B20"
    radius: "9999px"
    height: "44px"
    padding: "11px 24px"
  card-panel:
    background: "#E0E0FF"
    radius: "28px"
    shadow: "0 4px 8px rgba(0, 0, 0, 0.12), 0 1px 3px rgba(0, 0, 0, 0.08)"
---

## Overview
Sistem dinamis berbasis filosofi Material You. Mengutamakan kartu-kartu ber-radius besar (28px) yang melayang dengan elevasi bayangan fisik bertingkat dan tombol-tombol berbentuk kapsul bulat (pill).

## Composition
* **Hero First Screen:** Panel kartu raksasa radius 28px melayang di atas background dengan bayangan elevasi yang jelas.
* **Stacking Rounded Cards:** Kartu-kartu layanan bertumpuk dengan bayangan yang semakin tebal pada layer yang lebih tinggi.
* **Pill Testimonials:** Kutipan di dalam wadah pill raksasa dengan foto melayang di sudutnya.

## Graphics & Depth
* **Elevasi Bertingkat Material:**
  * L1: `0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08)`
  * L2: `0 4px 8px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.08)`
  * L3: `0 8px 16px rgba(0,0,0,0.14), 0 4px 8px rgba(0,0,0,0.10)`

## Guardrails
* Dilarang menggunakan sudut tajam 0px.
* Dilarang menggunakan bayangan hitam pekat (wajib bayangan difus lembut).

================================================================================
PRESET 19: WEB3 HOLOGRAPHIC CYBERPUNK (Gaming, Metaverse & DAO)
================================================================================
---
version: "superdesign-alpha"
name: "Web3 holographic cyberpunk"
archetype: "ARCHETYPE_HOLOGRAPHIC_GLOW"
description: "Futuristic cyberpunk system featuring neon magenta-to-cyan text gradients, animated holographic grids, and glowing glass panels."
colors:
  background: "#050508"
  surface: "#0D0E15"
  surface-dark: "#151722"
  text-primary: "#FFFFFF"
  text-secondary: "#94A3B8"
  accent: "#FF007A"
  link: "#00F0FF"
typography:
  display-lg:
    fontFamily: "Space Mono, monospace"
    fontSize: "40px"
    fontWeight: 700
    lineHeight: "1.1"
    letterSpacing: "0.5px"
  headline-md:
    fontFamily: "Space Mono, monospace"
    fontSize: "26px"
    fontWeight: 700
    lineHeight: "1.2"
    letterSpacing: "0.2px"
  body-md:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "1.6"
    letterSpacing: "0px"
  label-md:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "11px"
    fontWeight: 500
    lineHeight: "1.2"
    letterSpacing: "0.2em"
spacing:
  base: "8px"
  gap: "16px"
  section-padding: "60px"
rounded:
  control: "9999px"
  card: "16px"
  pill: "9999px"
components:
  navbar:
    background: "rgba(5, 5, 8, 0.85)"
    backdrop-filter: "blur(20px)"
    height: "56px"
    border-bottom: "1px solid rgba(255, 0, 122, 0.2)"
  button-primary-hero:
    background: "#FF007A"
    text-color: "#FFFFFF"
    radius: "9999px"
    height: "44px"
    padding: "11px 24px"
    hover-background: "#FF2A94"
    shadow: "0 0 24px rgba(255, 0, 122, 0.4)"
  button-outline:
    background: "rgba(255, 255, 255, 0.04)"
    text-color: "#00F0FF"
    radius: "9999px"
    height: "44px"
    padding: "11px 24px"
    border: "1px solid rgba(0, 240, 255, 0.3)"
  card-panel:
    background: "#0D0E15"
    radius: "16px"
    border: "1px solid rgba(255, 0, 122, 0.2)"
---

## Overview
Sistem holografik futuristik bertema cyberpunk. Menggabungkan kanvas hitam obsidian (`#050508`), panel semi-transparan (`#0D0E15`), dan gradien neon dua warna yang mencolok (magenta `#FF007A` ke cyan `#00F0FF`).

## Composition
* **Hero First Screen:** Headline Space Mono dengan teks beraksen neon magenta, dilatari oleh garis grid holografik tipis.
* **Bento Glass Cards:** Panel bento 3x3 dengan border gradien neon yang menyala saat di-hover.
* **Hover Reveal Showcase:** Grid proyek yang menampilkan frame neon saat tersentuh kursor.

## Graphics & Depth
* **Neon Glow:** `box-shadow: 0 0 24px rgba(255, 0, 122, 0.3)`.
* **Glass Panel:** `background: rgba(13, 14, 21, 0.7); backdrop-filter: blur(16px)`.

## Guardrails
* Dilarang menggunakan latar belakang putih atau abu-abu terang.
* Dilarang menggunakan font serif klasik.

================================================================================
PRESET 20: PLAYFUL GEOMETRIC MEMPHIS (Kids, Pop Fest & Creative Food)
================================================================================
---
version: "superdesign-alpha"
name: "Playful geometric memphis"
archetype: "ARCHETYPE_MEMPHIS_SHAPES"
description: "Vibrant Memphis-style layout featuring scattered abstract geometric shapes (triangles, squiggles, circles) and thick 3px black borders."
colors:
  background: "#FEF9C3"
  surface: "#F472B6"
  surface-dark: "#38BDF8"
  text-primary: "#000000"
  text-secondary: "#374151"
  accent: "#A855F7"
  link: "#A855F7"
typography:
  display-lg:
    fontFamily: "Plus Jakarta Sans, Fredoka, sans-serif"
    fontSize: "44px"
    fontWeight: 800
    lineHeight: "1.1"
    letterSpacing: "-0.5px"
  headline-md:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "26px"
    fontWeight: 800
    lineHeight: "1.2"
    letterSpacing: "-0.2px"
  body-md:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "16px"
    fontWeight: 500
    lineHeight: "1.6"
    letterSpacing: "0px"
  label-md:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "12px"
    fontWeight: 800
    lineHeight: "1.2"
    letterSpacing: "0.05em"
spacing:
  base: "8px"
  gap: "16px"
  section-padding: "56px"
rounded:
  control: "9999px"
  card: "24px"
  pill: "9999px"
components:
  navbar:
    background: "#FEF9C3"
    height: "60px"
    border-bottom: "3px solid #000000"
  button-primary-hero:
    background: "#A855F7"
    text-color: "#FFFFFF"
    radius: "9999px"
    height: "46px"
    padding: "12px 24px"
    border: "3px solid #000000"
    shadow: "4px 4px 0px #000000"
  button-outline:
    background: "#38BDF8"
    text-color: "#000000"
    radius: "9999px"
    height: "46px"
    padding: "12px 24px"
    border: "3px solid #000000"
    shadow: "4px 4px 0px #000000"
  card-panel:
    background: "#FFFFFF"
    radius: "24px"
    border: "3px solid #000000"
    shadow: "4px 4px 0px #000000"
---

## Overview
Sistem gaya Memphis yang ceria dan penuh bentuk abstrak (segitiga, lingkaran, squiggle). Memadukan latar kuning cerah (`#FEF9C3`), panel merah muda (`#F472B6`), dan biru muda (`#38BDF8`) dengan garis luar tebal 3px hitam.

## Composition
* **Hero First Screen:** Headline bold di tengah yang dikelilingi ornamen bentuk geometris tersebar di sekitarnya.
* **Masonry Asymmetrical Grid:** Kartu-kartu layanan warna-warni berukuran bervariasi dengan elemen geometris di sela-sela grid.
* **Testimonials:** Bentuk geometris tidak beraturan dengan teks kutipan kontras.

## Graphics & Depth
* **Hard Offset Shadows:** `4px 4px 0px #000000`.
* **Border:** `3px solid #000000`.

## Guardrails
* Dilarang menggunakan monokrom kaku atau gaya minimalis sunyi.
* Dilarang menggunakan bayangan blur halus.

================================================================================
PRESET 21: SOFT CLAYMORPHISM 3D (Casual Fintech & Edutech Apps)
================================================================================
---
version: "superdesign-alpha"
name: "Soft claymorphism 3d"
archetype: "ARCHETYPE_CLAY_3D"
description: "Tactile inflated 3D clay system built on double inner/outer shadow physics, 32px bulbous curves, and soft pastel purple tones."
colors:
  background: "#F3F0FF"
  surface: "#E0E7FF"
  surface-dark: "#2E1065"
  text-primary: "#1E1B4B"
  text-secondary: "#475569"
  accent: "#7C3AED"
  link: "#7C3AED"
typography:
  display-lg:
    fontFamily: "Outfit, sans-serif"
    fontSize: "42px"
    fontWeight: 600
    lineHeight: "1.1"
    letterSpacing: "-0.3px"
  headline-md:
    fontFamily: "Outfit, sans-serif"
    fontSize: "26px"
    fontWeight: 600
    lineHeight: "1.2"
    letterSpacing: "-0.1px"
  body-md:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.6"
    letterSpacing: "0px"
  label-md:
    fontFamily: "Outfit, sans-serif"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: "1.2"
    letterSpacing: "0.1em"
spacing:
  base: "8px"
  gap: "16px"
  section-padding: "56px"
rounded:
  control: "9999px"
  card: "32px"
  pill: "9999px"
components:
  navbar:
    background: "#F3F0FF"
    height: "60px"
  button-primary-hero:
    background: "#7C3AED"
    text-color: "#FFFFFF"
    radius: "9999px"
    height: "46px"
    padding: "12px 24px"
    shadow: "inset -4px -4px 8px rgba(255, 255, 255, 0.4), inset 4px 4px 8px rgba(0, 0, 0, 0.2), 6px 6px 16px rgba(124, 58, 237, 0.3)"
  button-outline:
    background: "#E0E7FF"
    text-color: "#1E1B4B"
    radius: "9999px"
    height: "46px"
    padding: "12px 24px"
    shadow: "inset -4px -4px 8px rgba(255, 255, 255, 0.6), inset 4px 4px 8px rgba(124, 58, 237, 0.1)"
  card-panel:
    background: "#E0E7FF"
    radius: "32px"
    shadow: "inset -8px -8px 16px rgba(255, 255, 255, 0.6), inset 8px 8px 16px rgba(124, 58, 237, 0.1), 8px 8px 16px rgba(124, 58, 237, 0.15)"
---

## Overview
Sistem claymorphism 3D yang lembut dan taktil, membuat elemen UI terlihat seperti terbuat dari tanah liat empuk (*inflated clay*). Menggunakan double shadow (inner shadow untuk ketebalan material + outer shadow untuk melayang).

## Composition
* **Hero First Screen:** Panel clay 3D timbul dari background ungu lembut (`#F3F0FF`), dengan tombol fisik membal.
* **Clay Card Grid:** Kartu-kartu tebal radius 32px yang saling berdekatan dengan efek timbul 3D seragam.
* **Clay Bubbles:** Balon fitur membal dengan highlight putih lembut di sudut kiri atas.

## Graphics & Depth
* **Double Clay Shadow Formula:** `inset -8px -8px 16px rgba(255,255,255,0.6), inset 8px 8px 16px rgba(124,58,237,0.1), 8px 8px 16px rgba(124,58,237,0.15)`.

## Guardrails
* Dilarang menggunakan border tajam 1px solid.
* Dilarang menggunakan radius kecil (<24px).
* Dilarang menggunakan warna hitam pekat.

================================================================================
PRESET 22: CORPORATE EXECUTIVE AUTHORITY (Holding, Maritime & Finance)
================================================================================
---
version: "superdesign-alpha"
name: "Corporate executive authority"
archetype: "ARCHETYPE_AUTHORITY_MATRIX"
description: "Stately executive enterprise system defined by Merriweather serif headlines, bold navy top-dividers, and data-driven achievement metrics."
colors:
  background: "#F8FAFC"
  surface: "#FFFFFF"
  surface-dark: "#0F172A"
  text-primary: "#0F172A"
  text-secondary: "#334155"
  accent: "#1E40AF"
  link: "#1E40AF"
typography:
  display-lg:
    fontFamily: "Merriweather, serif"
    fontSize: "38px"
    fontWeight: 700
    lineHeight: "1.2"
    letterSpacing: "-0.5px"
  headline-md:
    fontFamily: "Merriweather, serif"
    fontSize: "24px"
    fontWeight: 700
    lineHeight: "1.25"
    letterSpacing: "-0.2px"
  body-md:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: "1.6"
    letterSpacing: "0px"
  label-md:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "11px"
    fontWeight: 600
    lineHeight: "1.2"
    letterSpacing: "0.1em"
spacing:
  base: "8px"
  gap: "16px"
  section-padding: "60px"
rounded:
  control: "4px"
  card: "4px"
  pill: "4px"
components:
  navbar:
    background: "#FFFFFF"
    height: "60px"
    border-bottom: "2px solid #1E40AF"
  button-primary-hero:
    background: "#1E40AF"
    text-color: "#FFFFFF"
    radius: "4px"
    height: "42px"
    padding: "10px 20px"
    hover-background: "#1E3A8A"
  button-outline:
    background: "#FFFFFF"
    text-color: "#0F172A"
    radius: "4px"
    height: "42px"
    padding: "10px 20px"
    border: "1px solid #CBD5E1"
  card-panel:
    background: "#FFFFFF"
    radius: "4px"
    border: "1px solid #CBD5E1"
    border-top: "3px solid #1E40AF"
---

## Overview
Sistem korporat formal berwibawa tinggi (*executive authority*). Menggunakan tipografi serif Merriweather yang kokoh dan garis pembatas biru tebal 3px di bagian atas setiap panel kartu.

## Composition
* **Hero First Screen:** Headline formal Merriweather dengan garis aksen biru tebal di atas judul, didampingi foto profesional di sisi kanan.
* **Services Grid:** Grid 4-kolom kartu putih dengan border atas 3px biru tua, berfokus pada data angka pencapaian.
* **Executive Summary:** Lembar ringkasan formal dengan struktur multi-kolom rapi.

## Graphics & Depth
* **Divider Atas Tebal:** `border-top: 3px solid #1E40AF`.
* **Shadows:** L0 flat, L1 `0 1px 3px rgba(15, 23, 42, 0.08)`.

## Guardrails
* Dilarang menggunakan font playful atau rounded.
* Dilarang menggunakan sudut membulat lebar.

================================================================================
PRESET 23: HAND-DRAWN INDIE SKETCH (Artisan, Bakery & Handmade)
================================================================================
---
version: "superdesign-alpha"
name: "Hand-drawn indie sketch"
archetype: "ARCHETYPE_INDIE_SCRAPBOOK"
description: "Charming artisanal system featuring Caveat script headlines, irregular wavy border radii, -2° rotated photos, and paper textures."
colors:
  background: "#FFFDF9"
  surface: "#F7F3E9"
  surface-dark: "#292524"
  text-primary: "#1C1917"
  text-secondary: "#57534E"
  accent: "#EA580C"
  link: "#EA580C"
typography:
  display-lg:
    fontFamily: "Caveat, cursive"
    fontSize: "44px"
    fontWeight: 700
    lineHeight: "1.15"
    letterSpacing: "0px"
  headline-md:
    fontFamily: "Caveat, cursive"
    fontSize: "28px"
    fontWeight: 700
    lineHeight: "1.2"
    letterSpacing: "0px"
  body-md:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: "1.6"
    letterSpacing: "0px"
  label-md:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: "1.2"
    letterSpacing: "0.05em"
spacing:
  base: "8px"
  gap: "16px"
  section-padding: "52px"
rounded:
  control: "9999px"
  card: "255px 15px 225px 15px/15px 225px 15px 255px"
  pill: "9999px"
components:
  navbar:
    background: "#FFFDF9"
    height: "56px"
    border-bottom: "1px solid rgba(28, 25, 23, 0.1)"
  button-primary-hero:
    background: "#EA580C"
    text-color: "#FFFFFF"
    radius: "9999px"
    height: "42px"
    padding: "10px 22px"
    hover-background: "#C2410C"
  button-outline:
    background: "transparent"
    text-color: "#1C1917"
    radius: "9999px"
    height: "42px"
    padding: "10px 22px"
    border: "1.5px solid #1C1917"
  card-panel:
    background: "#F7F3E9"
    radius: "255px 15px 225px 15px/15px 225px 15px 255px"
    border: "1.5px solid rgba(28, 25, 23, 0.15)"
---

## Overview
Sistem scrapbook artisanal yang hangat dan personal. Menggunakan font tulisan tangan Caveat pada headline, border-radius tidak beraturan yang bergelombang alami (*wavy irregular radius*), dan foto-foto yang dipasang sedikit miring (-2° s/d 2°).

## Composition
* **Hero First Screen:** Headline tulisan tangan dengan garis bawah coretan tangan, didampingi foto produk miring -2° bergaya album fisik.
* **Scrapbook Services:** Kartu-kartu ber-border organik tidak simetris yang bersusun tumpang tindih lembut.
* **Paper Note Testimonials:** Kutipan di atas panel bertekstur kertas sobek.

## Graphics & Depth
* **Wavy Irregular Radius:** `border-radius: 255px 15px 225px 15px/15px 225px 15px 255px`.
* **Shadows:** Bayangan sangat lembut `0 4px 12px rgba(0, 0, 0, 0.05)`.

## Guardrails
* Dilarang menggunakan font geometris kaku.
* Dilarang menggunakan foto yang tegak lurus sempurna tanpa rotasi scrapbook.

================================================================================
PRESET 24: HEAVY INDUSTRIAL HARDWARE (Machinery & Construction)
================================================================================
---
version: "superdesign-alpha"
name: "Heavy industrial hardware"
archetype: "ARCHETYPE_HAZARD_STEEL"
description: "Rugged industrial system defined by condensed uppercase Oswald headlines, yellow hazard-stripes, and thick 2px slate borders."
colors:
  background: "#0F172A"
  surface: "#1E293B"
  surface-dark: "#000000"
  text-primary: "#F8FAFC"
  text-secondary: "#94A3B8"
  accent: "#FACC15"
  link: "#FACC15"
typography:
  display-lg:
    fontFamily: "Oswald, sans-serif"
    fontSize: "48px"
    fontWeight: 700
    lineHeight: "1.0"
    letterSpacing: "1px"
  headline-md:
    fontFamily: "Oswald, sans-serif"
    fontSize: "28px"
    fontWeight: 700
    lineHeight: "1.1"
    letterSpacing: "0.5px"
  body-md:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: "1.5"
    letterSpacing: "0px"
  label-md:
    fontFamily: "Oswald, sans-serif"
    fontSize: "12px"
    fontWeight: 700
    lineHeight: "1.2"
    letterSpacing: "0.15em"
spacing:
  base: "8px"
  gap: "12px"
  section-padding: "56px"
rounded:
  control: "0px"
  card: "0px"
  pill: "0px"
components:
  navbar:
    background: "#0F172A"
    height: "56px"
    border-bottom: "2px solid #FACC15"
  button-primary-hero:
    background: "#FACC15"
    text-color: "#0F172A"
    radius: "0px"
    height: "44px"
    padding: "11px 22px"
    hover-background: "#EAB308"
  button-outline:
    background: "transparent"
    text-color: "#FACC15"
    radius: "0px"
    height: "44px"
    padding: "11px 22px"
    border: "2px solid #FACC15"
  card-panel:
    background: "#1E293B"
    radius: "0px"
    border: "2px solid #334155"
---

## Overview
Sistem industri berat (*heavy industrial*) yang tangguh dan maskulin. Menggunakan kanvas baja gelap (`#0F172A`), panel besi (`#1E293B`), dan aksen kuning keselamatan kerja (*hazard yellow* `#FACC15`).

## Composition
* **Hero First Screen:** Headline condensed kapital besar berlatar garis hazard-stripe diagonal (kuning-hitam) sebagai pembatas visual, didampingi foto alat berat/fasad baja.
* **Technical Spec Grid:** Grid spesifikasi mesin dengan border 2px slate tebal dan label kapasitas muatan riil.
* **Steel Footer:** Ditutup dengan footer baja gelap bergaris hazard stripe di border atas.

## Graphics & Depth
* **Hazard Stripe Pattern:** `repeating-linear-gradient(45deg, #FACC15, #FACC15 10px, #000000 10px, #000000 20px)`.
* **Border:** `2px solid #334155`.

## Guardrails
* Dilarang menggunakan font serif atau sudut membulat (wajib 0px tajam).
* Dilarang menggunakan warna pastel lembut.

================================================================================
PRESET 25: HIGH-TECH ENTERPRISE INFRASTRUCTURE (Cloud & Telecom)
================================================================================
---
version: "superdesign-alpha"
name: "High-tech enterprise infrastructure"
archetype: "ARCHETYPE_CIRCUIT_DASHBOARD"
description: "Mission-critical infrastructure system featuring Geist typography, dashboard telemetry metric cards, and connected cyan circuit lines."
colors:
  background: "#030712"
  surface: "#0B1528"
  surface-dark: "#111827"
  text-primary: "#F9FAFB"
  text-secondary: "#94A3B8"
  accent: "#0EA5E9"
  link: "#0EA5E9"
typography:
  display-lg:
    fontFamily: "Geist, sans-serif"
    fontSize: "42px"
    fontWeight: 700
    lineHeight: "1.05"
    letterSpacing: "-0.5px"
  headline-md:
    fontFamily: "Geist, sans-serif"
    fontSize: "26px"
    fontWeight: 600
    lineHeight: "1.15"
    letterSpacing: "-0.3px"
  body-md:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "1.6"
    letterSpacing: "0px"
  label-md:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "11px"
    fontWeight: 500
    lineHeight: "1.2"
    letterSpacing: "0.1em"
spacing:
  base: "8px"
  gap: "12px"
  section-padding: "56px"
rounded:
  control: "6px"
  card: "6px"
  pill: "9999px"
components:
  navbar:
    background: "rgba(3, 7, 18, 0.85)"
    backdrop-filter: "blur(16px)"
    height: "52px"
    border-bottom: "1px solid rgba(14, 165, 233, 0.2)"
  button-primary-hero:
    background: "#0EA5E9"
    text-color: "#030712"
    radius: "6px"
    height: "40px"
    padding: "10px 18px"
    hover-background: "#38BDF8"
  button-outline:
    background: "rgba(255, 255, 255, 0.04)"
    text-color: "#0EA5E9"
    radius: "6px"
    height: "40px"
    padding: "10px 18px"
    border: "1px solid rgba(14, 165, 233, 0.3)"
  card-panel:
    background: "#0B1528"
    radius: "6px"
    border: "1px solid rgba(14, 165, 233, 0.2)"
---

## Overview
Sistem infrastruktur cloud dan pusat data (*telemetry dashboard*). Berpijak pada kanvas gelap pekat (`#030712`), panel telemetri biru malam (`#0B1528`), dan garis-garis circuit board penghubung antar kartu.

## Composition
* **Hero First Screen:** Headline presisi di kiri, panel telemetri live stats di kanan dengan status indicator dot hijau aktif.
* **Circuit Grid Services:** Kartu-kartu dashboard metrik yang terhubung garis biru tipis seperti jalur sirkuit listrik.
* **Data Table Specs:** Tabel spesifikasi data server dengan font monospace JetBrains Mono.

## Graphics & Depth
* **Circuit Border:** `1px solid rgba(14, 165, 233, 0.2)`.
* **Glow Data:** `box-shadow: 0 4px 16px rgba(14, 165, 233, 0.1)`.

## Guardrails
* Dilarang menggunakan font serif atau warna hangat kemerahan.

================================================================================
PRESET 26: SOFT TACTILE NEUMORPHISM (Smart Devices & Audio)
================================================================================
---
version: "superdesign-alpha"
name: "Soft tactile neumorphism"
archetype: "ARCHETYPE_TACTILE_NEUMORPH"
description: "Tactile device system where background and panels share the EXACT SAME COLOR (#E0E5EC), differentiated purely by extruded/inset shadows."
colors:
  background: "#E0E5EC"
  surface: "#E0E5EC"
  surface-dark: "#1E293B"
  text-primary: "#2D3748"
  text-secondary: "#718096"
  accent: "#4A90E2"
  link: "#4A90E2"
typography:
  display-lg:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "40px"
    fontWeight: 600
    lineHeight: "1.1"
    letterSpacing: "-0.3px"
  headline-md:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "26px"
    fontWeight: 600
    lineHeight: "1.2"
    letterSpacing: "-0.1px"
  body-md:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: "1.6"
    letterSpacing: "0px"
  label-md:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "11px"
    fontWeight: 600
    lineHeight: "1.2"
    letterSpacing: "0.1em"
spacing:
  base: "8px"
  gap: "16px"
  section-padding: "56px"
rounded:
  control: "9999px"
  card: "20px"
  pill: "9999px"
components:
  navbar:
    background: "#E0E5EC"
    height: "60px"
  button-primary-hero:
    background: "#E0E5EC"
    text-color: "#4A90E2"
    radius: "9999px"
    height: "44px"
    padding: "11px 24px"
    shadow: "-6px -6px 12px #FFFFFF, 6px 6px 12px rgba(163, 177, 198, 0.6)"
  button-outline:
    background: "#E0E5EC"
    text-color: "#2D3748"
    radius: "9999px"
    height: "44px"
    padding: "11px 24px"
    shadow: "inset 4px 4px 8px rgba(163, 177, 198, 0.6), inset -4px -4px 8px #FFFFFF"
  card-panel:
    background: "#E0E5EC"
    radius: "20px"
    shadow: "-6px -6px 12px #FFFFFF, 6px 6px 12px rgba(163, 177, 198, 0.6)"
---

## Overview
Sistem taktil fisik neumorphik perangkat keras audio. Fitur kuncinya: **Warna Background dan Panel SAMA PERSIS (`#E0E5EC`)**. Kedalaman bentuk dibentuk 100% dari bayangan extruded (timbul) dan inset (tenggelam).

## Composition
* **Hero First Screen:** Headline di dalam panel timbul halus, dengan tombol pill fisik yang tampak membal keluar dari layar.
* **Tactile Button Grid:** Layanan ditampilkan sebagai panel tombol fisik besar yang bisa ditekan.
* **Inset Testimonials:** Kutipan di dalam panel tenggelam (inset shadow), kontras dari panel layanan yang timbul.

## Graphics & Depth
* **Extruded Shadow:** `-6px -6px 12px #FFFFFF, 6px 6px 12px rgba(163, 177, 198, 0.6)`.
* **Inset Shadow:** `inset 6px 6px 12px rgba(163, 177, 198, 0.6), inset -6px -6px 12px #FFFFFF`.

## Guardrails
* Dilarang menggunakan border hitam atau warna latar belakang yang berbeda antara base dan panel (wajib identik `#E0E5EC`).

================================================================================
PRESET 27: QUIET LUXURY MINIMAL (Private Bespoke & High Art)
================================================================================
---
version: "superdesign-alpha"
name: "Quiet luxury minimal"
archetype: "ARCHETYPE_WHITESPACE_FIRST"
description: "Extreme minimalist luxury system defined by massive deliberate whitespace, zero cards, zero borders, and slow single-image viewports."
colors:
  background: "#F7F5F0"
  surface: "#E8E4DC"
  surface-dark: "#D8D2C4"
  text-primary: "#1C1C1A"
  text-secondary: "#63615A"
  accent: "#3F5F4A"
  link: "#3F5F4A"
typography:
  display-lg:
    fontFamily: "Cormorant Garamond, serif"
    fontSize: "44px"
    fontWeight: 500
    lineHeight: "1.25"
    letterSpacing: "0px"
  headline-md:
    fontFamily: "Cormorant Garamond, serif"
    fontSize: "28px"
    fontWeight: 500
    lineHeight: "1.3"
    letterSpacing: "0px"
  body-md:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: "1.75"
    letterSpacing: "0px"
  label-md:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "11px"
    fontWeight: 500
    lineHeight: "1.2"
    letterSpacing: "0.2em"
spacing:
  base: "8px"
  gap: "24px"
  section-padding: "80px"
rounded:
  control: "0px"
  card: "0px"
  pill: "0px"
components:
  navbar:
    background: "#F7F5F0"
    height: "64px"
  button-primary-hero:
    background: "#1C1C1A"
    text-color: "#F7F5F0"
    radius: "0px"
    height: "44px"
    padding: "11px 24px"
    hover-background: "#3F5F4A"
  button-outline:
    background: "transparent"
    text-color: "#1C1C1A"
    radius: "0px"
    height: "44px"
    padding: "11px 24px"
    border: "1px solid #1C1C1A"
  card-panel:
    background: "transparent"
    radius: "0px"
---

## Overview
Preset yang paling sunyi dan eksklusif. Menghilangkan seluruh kotak kartu, border, dan bayangan. *Whitespace* luas adalah fitur utama yang menjadi pernyataan kemewahan.

## Composition
* **Hero First Screen:** Headline serif anggun di kiri dengan jeda kosong yang sangat luas di kanan sebelum foto kecil artistik muncul.
* **Services Columns:** Kolom teks sempit tanpa border atau kartu, dipisahkan oleh jeda vertikal yang sangat lega.
* **Single Image Portfolio:** 1 foto per viewport scroll lambat dengan caption 1 baris.

## Graphics & Depth
* **Nol Shadow & Nol Border:** Kedalaman murni dari ritme jeda ruang kosong.

## Guardrails
* Dilarang membuat card atau border apapun.
* Dilarang menampilkan banyak foto kecil sekaligus dalam 1 viewport.

================================================================================
PRESET 28: SOFT EDITORIAL (Design Journals & Boutique Interiors)
================================================================================
---
version: "superdesign-alpha"
name: "Soft editorial"
archetype: "ARCHETYPE_IMAGE_LED_JOURNAL"
description: "Image-led publication layout where variable-width photography leads every section before narrative text, framed by 1px micro-borders."
colors:
  background: "#F6F3ED"
  surface: "#DDD7CC"
  surface-dark: "#C8C0B0"
  text-primary: "#1E1D1A"
  text-secondary: "#666157"
  accent: "#A65D45"
  link: "#A65D45"
typography:
  display-lg:
    fontFamily: "Playfair Display, serif"
    fontSize: "44px"
    fontWeight: 500
    lineHeight: "1.15"
    letterSpacing: "0px"
  headline-md:
    fontFamily: "Playfair Display, serif"
    fontSize: "28px"
    fontWeight: 500
    lineHeight: "1.2"
    letterSpacing: "0px"
  body-md:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.65"
    letterSpacing: "0px"
  label-md:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "11px"
    fontWeight: 500
    lineHeight: "1.2"
    letterSpacing: "0.1em"
spacing:
  base: "8px"
  gap: "16px"
  section-padding: "60px"
rounded:
  control: "4px"
  card: "4px"
  pill: "9999px"
components:
  navbar:
    background: "#F6F3ED"
    height: "60px"
    border-bottom: "1px solid rgba(166, 93, 69, 0.15)"
  button-primary-hero:
    background: "#1E1D1A"
    text-color: "#F6F3ED"
    radius: "4px"
    height: "42px"
    padding: "10px 22px"
    hover-background: "#A65D45"
  button-outline:
    background: "transparent"
    text-color: "#1E1D1A"
    radius: "4px"
    height: "42px"
    padding: "10px 22px"
    border: "1px solid rgba(166, 93, 69, 0.3)"
  card-panel:
    background: "#F6F3ED"
    radius: "4px"
    border: "1px solid rgba(166, 93, 69, 0.15)"
---

## Overview
Sistem majalah visual di mana setiap item dibuka oleh foto berukuran variabel yang memimpin sebelum teks deskripsi di bawahnya (*image-led publication*).

## Composition
* **Hero First Screen:** Split 45/55 asimetris dengan micro-border 1px mengelilingi foto.
* **Image-Led Services:** Tiap item layanan dipimpin oleh foto dulu (lebar variabel) baru diikuti teks deskripsi.
* **Variable Width Blocks:** Susunan foto portofolio berdimensi campuran (sebagian lebar penuh, sebagian setengah).

## Graphics & Depth
* **Micro-Border:** `1px solid rgba(166, 93, 69, 0.15)`.
* **Shadow:** Sangat tipis `0 1px 2px rgba(0, 0, 0, 0.04)`.

## Guardrails
* Dilarang mengunci foto dalam boks berukuran sama seragam.

================================================================================
PRESET 29: ORGANIC MODERN (Eco Living & Botanical Architecture)
================================================================================
---
version: "superdesign-alpha"
name: "Organic modern"
archetype: "ARCHETYPE_BLOB_MASK"
description: "Fluid living system defined by organic curved blob photo masks bleeding to viewport edges, fluid whitespace, and warm earth tones."
colors:
  background: "#F3EFE7"
  surface: "#DDE5DB"
  surface-dark: "#C2D0BF"
  text-primary: "#1C211B"
  text-secondary: "#5A6359"
  accent: "#A7654B"
  link: "#A7654B"
typography:
  display-lg:
    fontFamily: "Cabinet Grotesk, sans-serif"
    fontSize: "42px"
    fontWeight: 600
    lineHeight: "1.1"
    letterSpacing: "-0.3px"
  headline-md:
    fontFamily: "Cabinet Grotesk, sans-serif"
    fontSize: "26px"
    fontWeight: 600
    lineHeight: "1.2"
    letterSpacing: "-0.1px"
  body-md:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.65"
    letterSpacing: "0px"
  label-md:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "11px"
    fontWeight: 600
    lineHeight: "1.2"
    letterSpacing: "0.1em"
spacing:
  base: "8px"
  gap: "16px"
  section-padding: "56px"
rounded:
  control: "9999px"
  card: "16px"
  pill: "9999px"
components:
  navbar:
    background: "rgba(243, 239, 231, 0.85)"
    backdrop-filter: "blur(12px)"
    height: "60px"
  button-primary-hero:
    background: "#1C211B"
    text-color: "#F3EFE7"
    radius: "9999px"
    height: "44px"
    padding: "11px 24px"
    hover-background: "#A7654B"
  button-outline:
    background: "transparent"
    text-color: "#1C211B"
    radius: "9999px"
    height: "44px"
    padding: "11px 24px"
    border: "1px solid #1C211B"
  card-panel:
    background: "#DDE5DB"
    radius: "16px"
---

## Overview
Sistem organik modern non-kartu. Menolak boks kaku dan menggantinya dengan foto bermasker lengkung organik (*blob mask*) yang mengalir bleeding ke tepi layar.

## Composition
* **Hero First Screen:** Foto besar dengan mask lengkung organik bleeding ke sisi kanan viewport.
* **Fluid Flow Services:** Teks mengalir bebas diselingi foto berkontur organik tanpa boks kartu.
* **Fluid Portfolio:** Galeri foto dengan variasi bentuk mask lengkung yang dinamis.

## Graphics & Depth
* **Blob Mask:** `clip-path` organik berkontur alami.
* **Shadow:** `0 4px 20px rgba(0, 0, 0, 0.06)`.

## Guardrails
* Dilarang menggunakan boks kartu kaku bersegi empat.

================================================================================
PRESET 30: SWISS MINIMAL (Graphic Bureau & Urban Analytics)
================================================================================
---
version: "superdesign-alpha"
name: "Swiss minimal"
archetype: "ARCHETYPE_ASYMMETRIC_SWISS"
description: "Ultra-calm Swiss system featuring deliberate uneven column widths (wide column 1, narrow column 2), razor-thin 1px borders, and pure whitespace."
colors:
  background: "#F5F5F2"
  surface: "#E5E5E0"
  surface-dark: "#D0D0C8"
  text-primary: "#181816"
  text-secondary: "#575650"
  accent: "#3F6B52"
  link: "#3F6B52"
typography:
  display-lg:
    fontFamily: "Geist, sans-serif"
    fontSize: "42px"
    fontWeight: 700
    lineHeight: "1.05"
    letterSpacing: "-0.5px"
  headline-md:
    fontFamily: "Geist, sans-serif"
    fontSize: "26px"
    fontWeight: 700
    lineHeight: "1.15"
    letterSpacing: "-0.3px"
  body-md:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: "1.6"
    letterSpacing: "0px"
  label-md:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "11px"
    fontWeight: 600
    lineHeight: "1.2"
    letterSpacing: "0.1em"
spacing:
  base: "8px"
  gap: "0px"
  section-padding: "60px"
rounded:
  control: "2px"
  card: "2px"
  pill: "2px"
components:
  navbar:
    background: "#F5F5F2"
    height: "56px"
    border-bottom: "1px solid #D0D0C8"
  button-primary-hero:
    background: "#181816"
    text-color: "#F5F5F2"
    radius: "2px"
    height: "40px"
    padding: "10px 20px"
    hover-background: "#3F6B52"
  button-outline:
    background: "#F5F5F2"
    text-color: "#181816"
    radius: "2px"
    height: "40px"
    padding: "10px 20px"
    border: "1px solid #181816"
  card-panel:
    background: "#FFFFFF"
    radius: "2px"
    border: "1px solid #D0D0C8"
---

## Overview
Sistem grid Swiss paling tenang dan berwibawa. Struktur visual hidup dari asimetri kolom yang disengaja (kolom 1 lebar untuk narasi, kolom 2 sempit untuk metadata) dengan garis pembatas setipis silet (*razor-thin 1px*).

## Composition
* **Hero First Screen:** Grid logic dengan lebar kolom variabel (asimetri kolom terencana) dan whitespace luas.
* **Services Grid:** Grid kolom tidak seragam bergaris 1px tipis.
* **Portfolio Table:** Matriks data asimetris dengan font tabular.

## Graphics & Depth
* **Razor-Thin Border:** `1px solid #D0D0C8`.
* **Nol Shadow:** Kedalaman dari asimetri grid yang presisi.

## Guardrails
* Dilarang menggunakan shadow tebal atau warna mencolok.

================================================================================
PRESET 31: IMMERSIVE MODERN (Cinematic & Virtual Media)
================================================================================
---
version: "superdesign-alpha"
name: "Immersive modern"
archetype: "ARCHETYPE_CINEMATIC_DEPTH"
description: "Dark cinematic media system built on 3-tier layering depth (foreground, midground, background) and dramatic atmospheric scale."
colors:
  background: "#0D0E0C"
  surface: "#181A17"
  surface-dark: "#222520"
  text-primary: "#FAF9F6"
  text-secondary: "#8C8B82"
  accent: "#667A68"
  link: "#667A68"
typography:
  display-lg:
    fontFamily: "Syne, sans-serif"
    fontSize: "44px"
    fontWeight: 600
    lineHeight: "1.1"
    letterSpacing: "-0.3px"
  headline-md:
    fontFamily: "Syne, sans-serif"
    fontSize: "28px"
    fontWeight: 600
    lineHeight: "1.2"
    letterSpacing: "-0.1px"
  body-md:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.6"
    letterSpacing: "0px"
  label-md:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "11px"
    fontWeight: 500
    lineHeight: "1.2"
    letterSpacing: "0.15em"
spacing:
  base: "8px"
  gap: "16px"
  section-padding: "64px"
rounded:
  control: "4px"
  card: "4px"
  pill: "9999px"
components:
  navbar:
    background: "rgba(13, 14, 12, 0.85)"
    backdrop-filter: "blur(16px)"
    height: "56px"
    border-bottom: "1px solid rgba(255, 255, 255, 0.08)"
  button-primary-hero:
    background: "#FAF9F6"
    text-color: "#0D0E0C"
    radius: "4px"
    height: "44px"
    padding: "11px 24px"
    hover-background: "#667A68"
  button-outline:
    background: "transparent"
    text-color: "#FAF9F6"
    radius: "4px"
    height: "44px"
    padding: "11px 24px"
    border: "1px solid rgba(255, 255, 255, 0.2)"
  card-panel:
    background: "#181A17"
    radius: "4px"
    border: "1px solid rgba(255, 255, 255, 0.08)"
---

## Overview
Sistem sinematik gelap berlapis (*layered cinematic depth*). Menolak tampilan flat 2D dan menciptakan kedalaman visual bertingkat antara elemen teks foreground, foto midground, dan tekstur background atmosferik.

## Composition
* **Hero First Screen:** Foto full-bleed berlapis dengan teks headline muncul di antara layer visual.
* **Services Bands:** Band gelap lebar dengan jeda visual sinematik.
* **Portfolio Showcase:** Scroll showcase dengan efek depth visual bertingkat.

## Graphics & Depth
* **Cinematic Floating Shadow:** `0 20px 60px rgba(0, 0, 0, 0.5)`.

## Guardrails
* Dilarang membuat layout flat 2D tanpa kedalaman layer.

================================================================================
PRESET 32: APPLE PRODUCT STAGE (Benchmark Flagship E-Commerce)
================================================================================
---
version: "superdesign-alpha"
name: "Apple product stage"
archetype: "ARCHETYPE_PRODUCT_STAGE"
description: "Iconic flagship stage system defined by single products on solid color fields, paired 980px pill CTAs, and alternating black/grey full-viewport bands."
colors:
  background: "#FFFFFF"
  surface: "#F5F5F7"
  surface-dark: "#000000"
  text-primary: "#1D1D1F"
  text-secondary: "#6E6E73"
  accent: "#0071E3"
  link: "#0066CC"
typography:
  display-lg:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "56px"
    fontWeight: 600
    lineHeight: "1.1"
    letterSpacing: "-0.5px"
  headline-md:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "36px"
    fontWeight: 600
    lineHeight: "1.15"
    letterSpacing: "-0.3px"
  body-md:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: "1.47"
    letterSpacing: "-0.37px"
  label-md:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: "1.1"
    letterSpacing: "0.2px"
spacing:
  base: "8px"
  gap: "12px"
  section-padding: "56px"
rounded:
  control: "980px"
  card: "12px"
  pill: "9999px"
components:
  navbar:
    background: "rgba(255, 255, 255, 0.8)"
    backdrop-filter: "saturate(1.8) blur(20px)"
    height: "44px"
  button-primary-hero:
    background: "#0071E3"
    text-color: "#FFFFFF"
    radius: "980px"
    height: "44px"
    padding: "11px 21px"
    hover-background: "#0076DF"
  button-outline:
    background: "transparent"
    text-color: "#0071E3"
    radius: "980px"
    height: "44px"
    padding: "11px 21px"
    border: "1px solid #0071E3"
  card-panel:
    background: "#F5F5F7"
    radius: "12px"
---

## Overview
Sistem galeri patung produk di atas latar solid hitam (`#000000`) atau abu-abu (`#F5F5F7`). Satu produk/pesan fokus per section tanpa kartu kaku dan tanpa border.

## Composition
* **Hero First Screen:** Kanvas solid dengan satu headline terpusat, subhead 1 baris, pasangan tombol pill (biru + outline), dan foto produk besar menetes ke bawah.
* **Services Bands:** Band full-width selang-seling hitam dan abu-abu (1 pesan fokus per band).
* **Portfolio Showcase:** Bento 50/50 foto produk di atas bidang solid.

## Graphics & Depth
* **Nol Shadow pada Objek:** Kedalaman murni dari kontras bidang solid (hitam ↔ abu-abu).

## Guardrails
* Dilarang menggunakan kartu ber-border pada objek panggung.

================================================================================
PRESET 33: AIRBNB PHOTOGRAPHY BAZAAR (Travel & Curated Stays)
================================================================================
---
version: "superdesign-alpha"
name: "Airbnb photography bazaar"
archetype: "ARCHETYPE_PHOTO_BAZAAR"
description: "Browsing-magazine layout featuring a horizontal scrollable category pill bar, dense 3-5 column photography-led listing grids, and Rausch Red accents."
colors:
  background: "#FFFFFF"
  surface: "#F7F7F7"
  surface-dark: "#222222"
  text-primary: "#222222"
  text-secondary: "#717171"
  accent: "#FF385C"
  link: "#FF385C"
typography:
  display-lg:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "32px"
    fontWeight: 600
    lineHeight: "1.15"
    letterSpacing: "-0.5px"
  headline-md:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "22px"
    fontWeight: 600
    lineHeight: "1.2"
    letterSpacing: "-0.2px"
  body-md:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: "1.5"
    letterSpacing: "0px"
  label-md:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: "1.1"
    letterSpacing: "0.05em"
spacing:
  base: "8px"
  gap: "16px"
  section-padding: "48px"
rounded:
  control: "9999px"
  card: "20px"
  pill: "9999px"
components:
  navbar:
    background: "#FFFFFF"
    height: "64px"
    border-bottom: "1px solid #EBEBEB"
  button-primary-hero:
    background: "#FF385C"
    text-color: "#FFFFFF"
    radius: "9999px"
    height: "44px"
    padding: "11px 24px"
    hover-background: "#E00B41"
  button-outline:
    background: "#FFFFFF"
    text-color: "#222222"
    radius: "9999px"
    height: "44px"
    padding: "11px 24px"
    border: "1px solid #DDDDDD"
  card-panel:
    background: "#FFFFFF"
    radius: "20px"
    shadow: "0 6px 16px rgba(0, 0, 0, 0.08)"
---

## Overview
Sistem majalah etalase visual (*photography bazaar*). Dipimpin oleh bilah kategori berbentuk pill yang dapat di-scroll horizontal, diikuti oleh grid kartu listing foto padat 3–4 kolom ber-radius 20px dengan bayangan hangat 3 lapis.

## Composition
* **Hero First Screen:** Bilah aksi terpusat di tengah dengan deretan listing foto mencuat di bawah sebagai bukti visual nyata.
* **Category Pill Bar:** Baris kategori pill horizontal (ikon + label) yang memimpin langsung ke grid foto.
* **Dense Listing Grid:** Grid padat 3 atau 4 kolom kartu foto rasio 16:10 dengan judul, lokasi, dan harga tabular di bawah foto.

## Graphics & Depth
* **3-Layer Warm Shadow:** `rgba(0,0,0,0.08) 0 2px 6px, rgba(0,0,0,0.05) 0 6px 16px, rgba(0,0,0,0.08) 0 12px 28px`.

## Guardrails
* Dilarang membuat kartu yang hanya berisi teks (foto wajib memimpin di setiap kartu).

================================================================================
PRESET 34: WISE BOLD BILLBOARD (Fintech Disruptor & Transparency)
================================================================================
---
version: "superdesign-alpha"
name: "Wise bold billboard"
archetype: "ARCHETYPE_BILLBOARD_SCALE"
description: "Ultra-heavy billboard system defined by 80px/900 weight ultra-tight headlines (0.85 line-height), large 32px rounded cards, and growing Lime Green pill CTAs."
colors:
  background: "#EFF1F0"
  surface: "#FFFFFF"
  surface-dark: "#0E0F0C"
  text-primary: "#0E0F0C"
  text-secondary: "#454745"
  accent: "#9FE870"
  link: "#163300"
typography:
  display-lg:
    fontFamily: "Outfit, sans-serif"
    fontSize: "80px"
    fontWeight: 900
    lineHeight: "0.85"
    letterSpacing: "-1.5px"
  headline-md:
    fontFamily: "Outfit, sans-serif"
    fontSize: "44px"
    fontWeight: 900
    lineHeight: "0.9"
    letterSpacing: "-0.8px"
  body-md:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: "1.5"
    letterSpacing: "0px"
  label-md:
    fontFamily: "Outfit, sans-serif"
    fontSize: "13px"
    fontWeight: 700
    lineHeight: "1.1"
    letterSpacing: "0.05em"
spacing:
  base: "8px"
  gap: "16px"
  section-padding: "60px"
rounded:
  control: "9999px"
  card: "32px"
  pill: "9999px"
components:
  navbar:
    background: "#EFF1F0"
    height: "60px"
  button-primary-hero:
    background: "#9FE870"
    text-color: "#163300"
    radius: "9999px"
    height: "48px"
    padding: "12px 28px"
    hover-transform: "scale(1.05)"
  button-outline:
    background: "#FFFFFF"
    text-color: "#0E0F0C"
    radius: "9999px"
    height: "48px"
    padding: "12px 28px"
    border: "1px solid #CBD5E1"
  card-panel:
    background: "#FFFFFF"
    radius: "32px"
    shadow: "0 0 0 1px rgba(14, 15, 12, 0.08), 0 8px 24px rgba(14, 15, 12, 0.06)"
---

## Overview
Sistem spanduk billboard berbobot ultra-tebal (*bold billboard*). Ciri visual utamanya adalah headline bobot 900 dengan line-height sangat rapat (0.85) dan tombol aksi kapsul Lime Green (`#9FE870`) yang membesar saat di-hover (`scale(1.05)`).

## Composition
* **Hero First Screen:** Kanvas off-white hangat dengan headline 80px/900 ultra-tight, didampingi tombol pill Lime Green yang tumbuh saat kursor hover.
* **Bold Feature Statements:** Pernyataan lugas per fitur dengan sub-heading 44px/900 di dalam kartu ber-radius 32px.
* **Transparent Rate Ledger:** Tabel data perbandingan transparan dengan kartu ber-radius besar.

## Graphics & Depth
* **Ring Shadow:** `0 0 0 1px rgba(14, 15, 12, 0.08), 0 8px 24px rgba(14, 15, 12, 0.06)`.
* **Hover Interaction:** `transform: scale(1.05)` pada tombol aksi utama.

## Guardrails
* Dilarang menggunakan headline berukuran kecil atau tipis.
* Dilarang menggunakan sudut kartu tajam (wajib radius 32px membulat lebar).

================================================================================
PRESET 35: SPOTIFY IMMERSIVE COMPACT (Audio & Streaming Media)
================================================================================
---
version: "superdesign-alpha"
name: "Spotify immersive compact"
archetype: "ARCHETYPE_COMPACT_APP"
description: "Dense dark app system built on compact headlines (24px-32px), pill/circle controls, and achromatic canvas where color comes 100% from media cover art."
colors:
  background: "#121212"
  surface: "#181818"
  surface-dark: "#282828"
  text-primary: "#FFFFFF"
  text-secondary: "#B3B3B3"
  accent: "#1ED760"
  link: "#1ED760"
typography:
  display-lg:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "28px"
    fontWeight: 700
    lineHeight: "1.15"
    letterSpacing: "-0.3px"
  headline-md:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "20px"
    fontWeight: 700
    lineHeight: "1.2"
    letterSpacing: "-0.1px"
  body-md:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "1.5"
    letterSpacing: "0px"
  label-md:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "11px"
    fontWeight: 700
    lineHeight: "1.2"
    letterSpacing: "0.15em"
spacing:
  base: "8px"
  gap: "12px"
  section-padding: "48px"
rounded:
  control: "9999px"
  card: "8px"
  pill: "9999px"
components:
  navbar:
    background: "#121212"
    height: "56px"
  button-primary-hero:
    background: "#1ED760"
    text-color: "#000000"
    radius: "9999px"
    height: "40px"
    padding: "10px 24px"
    hover-background: "#22E567"
  button-outline:
    background: "#181818"
    text-color: "#FFFFFF"
    radius: "9999px"
    height: "40px"
    padding: "10px 24px"
    hover-background: "#282828"
  card-panel:
    background: "#181818"
    radius: "8px"
    hover-background: "#282828"
---

## Overview
Sistem aplikasi kompak gelap (*compact dark app*). Menolak headline raksasa dan memilih tipografi kompak (28px) yang padat fungsional. Seluruh kanvas bersifat achromatic hitam (`#121212`), membiarkan warna visual memancar sepenuhnya dari cover art foto media, dengan aksen hijau Spotify (`#1ED760`) untuk status aktif dan tombol putar.

## Composition
* **Hero First Screen:** Headline kompak terpusat dengan cover art album/proyek berdimensi besar sebagai sumber warna utama.
* **Dense Media Cards:** Grid kartu padat `#181818` tanpa border yang memancarkan transisi hover pencerahan (`#282828`).
* **Track-List Timeline:** Baris linimasa dengan pemisah hairline abu-abu dan badge status aktif.

## Graphics & Depth
* **Hover Lightening Transition:** Background kartu bertransisi dari `#181818` ke `#282828` saat di-hover.
* **Shadows:** Bayangan pekat `rgba(0, 0, 0, 0.4) 0 8px 24px`.

## Guardrails
* Dilarang menggunakan headline raksasa di atas 36px di Hero.
* Dilarang menggunakan border fisik pada kartu utama (wajib menggunakan hover lightening).

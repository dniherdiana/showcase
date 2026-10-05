# 🚀 Panduan Cara Prompt dniWebCraft di Gemini CLI (Antigravity CLI)

Dokumen ini berisi panduan langkah-demi-langkah dan template prompt siap *copy-paste* untuk menjalankan alur **3-Stage Architecture Engine**, **Redesign Engine**, dan **Recopywriting Engine** di Gemini CLI / Antigravity CLI (`agy`) dengan **efisiensi token maksimal**.

---
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
## 📑 Alur Kerja Ringkas (Direct 3-Stage Workflow)
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

```
[1. Isi Data: .prompts/01-intake/01_CLIENT_INTAKE_ID.md (atau 02_CLIENT_INTAKE_EN.md)]
        ↓
[🟢 2. Prompt Stage 1: Riset Real-Time, Price Tier & Copywriting] ➔ Output: .dniwebcraft/stage1_output.md
        ↓
[🟡 3. Prompt Stage 2: Kunci Preset Pilihan & DOM Blueprint] ➔ Output: .dniwebcraft/stage2_output.md
        (Anda langsung menentukan nomor preset; AI hanya membaca blok preset terkait — hemat token 95%!)
        ↓
[🟣 4. Prompt Stage 3: Eksekusi Kode Astro 5, Tailwind v4 & Svelte 5] ➔ Output: Source Code src/
```

---

## 🟢 Langkah 1: Persiapan Input Data Klien

Sebelum menjalankan prompt, pastikan data klien telah diisi di file `.prompts/01-intake/01_CLIENT_INTAKE_ID.md (atau 02_CLIENT_INTAKE_EN.md)`.
*(Jika ingin mencoba simulasi cepat, Anda dapat menggunakan contoh data siap pakai di `.prompts/01-intake/00_CLIENT_INTAKE_EXAMPLE.md`)*.

---

## 🟢 Langkah 2: Prompt Stage 1 (Research & Copywriting Intelligence)

Salin dan kirim prompt berikut ke Gemini CLI:

```text
Baca file `.prompts/02-core-stages/01_STAGE_DISCOVERY_AND_COPYWRITING.md`, `.prompts/01-intake/01_CLIENT_INTAKE_ID.md (atau 02_CLIENT_INTAKE_EN.md)` (atau `.prompts/01-intake/00_CLIENT_INTAKE_EXAMPLE.md`), dan `.prompts/04-directives/01_ANTI_SLOP_DIRECTIVE.md`.

Jalankan STAGE 1:
1. Lakukan riset online real-time mengenai industri klien, bedah kelebihan dan kelemahan website 3-5 kompetitor riil, serta riset mendalam profil customer (demografi, usia, pekerjaan, daya beli, dan rasa cemas).
2. Terapkan kalibrasi Price Tier (§01b) dan rumuskan sitemap halaman MPA dinamis beserta susunan section tiap halaman murni dari hasil riset (DILARANG template kaku!). **WAJIB RUMUSKAN 4-6 HALAMAN LENGKAP**.
**WAJIB tulis narasi PANJANG 80-150 kata per blok section (MASSIVE COPY), DILARANG membuat kumpulan quote/one-liner pendek atau teks minim.**
**TULIS dan simpan seluruh kontrak output lengkap (JANGAN DIRANGKUM, TULIS SEMUAHALAMAN)**
3. Susun copywriting bahasa manusia yang natural, cerdas, hangat, tidak kaku, tidak norak, dan anti-slop. **WAJIB tulis narasi PANJANG 80-150 kata per blok section (MASSIVE COPY), DILARANG membuat kumpulan quote/one-liner pendek atau teks minim**. (Heading-First wajib, ZERO Eyebrow di atas heading, ZERO Em-Dash/En-Dash/Tanda Hubung Buatan, ZERO //).
4. TULIS dan simpan seluruh kontrak output lengkap (JANGAN DIRANGKUM, TULIS SEMUA HALAMAN) ke file `.dniwebcraft/stage1_output.md` serta kumpulkan visual ground truth target ke `.dniwebcraft/references/`.
```

> 🎯 **Hasil Stage 1:** File `.dniwebcraft/stage1_output.md` terbuat lengkap berisi riset kompetitor, profil customer, sitemap MPA dinamis, copywriting verbatim per section, dan kandidat *wow-anchor*.

---

## 🟡 Langkah 3: Prompt Stage 2 (Kunci Preset Pilihan & DOM Blueprint)

Pilih salah satu dari 34 preset di atas (misalnya **Preset 6** atau nomor preset lain yang Anda inginkan), lalu kirim prompt berikut:

```text
Gunakan Preset 23

Baca file `.dniwebcraft/stage1_output.md`, `.prompts/02-core-stages/02_STAGE_DESIGN_DNA.md`, dan `.prompts/04-directives/01_ANTI_SLOP_DIRECTIVE.md`.
(Catatan Efisiensi Token: DILARANG scan seluruh 34 preset 02_TASTE_PRESETS.md. Cukup baca blok spesifikasi Preset 23 dan baris matriks §02.1).

Jalankan STAGE 2:
1. Baca spesifikasi Preset 23 dari `.prompts/04-directives/02_TASTE_PRESETS.md` (§02.1 Structural Binding Matrix & token spec).
2. Kunci blueprint DOM per rute halaman MPA dinamis (Hero Topology Lock, Radius Scope, Depth Model, 8 sumbu Page Signature) dengan proteksi visual kaya (rasio visual >= 50-60%, anti-gurun teks).
3. Lakukan audit WCAG Automated Computed Contrast (minimal 4.5:1 body / 3:1 UI) dan Single H1 Rule.
4. TULIS dan simpan hasilnya ke file `.dniwebcraft/stage2_output.md` dan inisialisasi `.dniwebcraft/page_signature_manifest.md`.
```

> 🎯 **Hasil Stage 2:** File `.dniwebcraft/stage2_output.md` terbuat langsung dalam 1 langkah tanpa scan seluruh file, menghemat token dan waktu secara maksimal!

---

## 🟣 Langkah 4: Prompt Stage 3 (Eksekusi Perakitan Kode Astro)

Salin dan kirim prompt berikut:

```text
Baca file `.dniwebcraft/stage1_output.md`, `.dniwebcraft/stage2_output.md`, `.prompts/02-core-stages/03_STAGE_MASTER_EXECUTION.md`, dan `.prompts/04-directives/01_ANTI_SLOP_DIRECTIVE.md`.
(Catatan Efisiensi Token: DILARANG scan seluruh file 02_TASTE_PRESETS.md, gunakan token & DOM skeleton yang sudah terkunci di stage2_output.md).

Jalankan STAGE 3:
1. Buat file `src/styles/global.css` (Tailwind v4.3 @theme + utility class .btn-thunk / .card-thunk).
2. Ekspor seluruh copy teks verbatim dari Stage 1 ke file data berdampingan `[ComponentName].data.js` (ZERO EM-DASH).
3. Rakit komponen shell `src/layouts/Layout.astro`, Navbar, dan Footer.
4. Bangun komponen interaktif Svelte 5 Islands (`.svelte` dengan `client:visible`).
5. Bangun halaman SATU PER SATU secara berurutan: setiap halaman baru WAJIB membaca file `.astro` halaman sebelumnya dan memiliki siluet DOM berbeda (8 sumbu di `page_signature_manifest.md`).
6. Jalankan audit mekanis Hard Compliance Gate (Zero Eyebrow, Zero Em-Dash, Zero //, Zero Numbering in Box, Zero Generic Cards, Zero Tailwind v3 Syntax & Decimal Opacity `/[0.xx]`).
```

---

## 🟡 Langkah 5: Prompt Clean-up & Refactoring (POST-STAGE 3)

Setelah Stage 3 selesai dan desain terlihat bagus di browser, JANGAN langsung diserahkan ke klien. Jalankan prompt ini untuk membersihkan "sampah" sisa pembuatan (komponen tidak terpakai, CSS redundant, logic berulang) tanpa merusak desain:

```text
Jalankan prosedur dari `.prompts/02-core-stages/04_STAGE_REFACTOR_AUDIT.md`.
Tugas Anda adalah memindai seluruh folder `src/`, membersihkan dead code, menyatukan komponen yang redundant, dan menghapus sisa boilerplate tanpa mengubah hasil visual sedikit pun.
Tulis laporan akhir ke `.dniwebcraft/refactor_audit.md`.
```

---

## 🟠 Langkah 6: Prompt Stage 4 (Full SEO Add-on - OPSIONAL)

HANYA jalankan prompt ini jika klien membeli paket SEO lengkap. Salin dan kirim prompt berikut:

```text
Klien ini membeli add-on Full SEO. Baca `.prompts/03-premium-addons/01_ADDON_FULL_SEO.md`, file data `src/**/*.data.js`, dan output Stage 1.

Jalankan STAGE 4:
1. Buat komponen `src/components/common/SEO.astro` yang memproses JSON-LD Schema.org dan OpenGraph secara dinamis.
2. Update `Layout.astro` untuk memanggil komponen SEO baru ini.
3. Suntikkan object `seoData` (berisi title, description, dan struktur JSON-LD yang spesifik dengan industri klien) ke masing-masing file `.data.js`.
4. Update `src/pages/*.astro` untuk meneruskan `seoData` ke Layout.
```

---

## 🟢 Langkah 7: Prompt Stage 5 (Client Handoff & Brand Guidelines - BONUS PREMIUM)

Jalankan ini di akhir proyek untuk memberikan kejutan (*surprise and delight*) berupa PDF Panduan Merek kepada klien.

```text
Jalankan prosedur dari `.prompts/03-premium-addons/02_ADDON_CLIENT_HANDOFF.md`.
Tugas Anda adalah membaca `stage1_output.md` dan `stage2_output.md`, lalu merangkum filosofi desain, palet warna, tipografi, dan tone komunikasi menjadi dokumen `HANDOFF_TO_CLIENT.md` yang elegan.
```

---

> 💡 **TIPS ANIMASI KUSTOM:**
> Jika Anda memiliki library animasi sendiri (CSS classes atau komponen Svelte/Astro), masukkan ke dalam file `.prompts/04-directives/03_03_ANIMATION_LIBRARY.md`. Anda bisa menyelipkan instruksi *"Terapkan animasi dari ANIMATION_LIBRARY"* saat menjalankan Prompt Stage 3 atau Stage 3.5!

---

---

## 🟣 Langkah 8: Prompt Stage 6 (Headless CMS & Blog - ADD-ON)

Jalankan jika klien ingin mengupdate artikel atau portofolio sendiri.

```text
Klien ini membeli add-on CMS/Blog. Baca `.prompts/03-premium-addons/03_ADDON_CMS_BLOG.md`.
Buat koleksi Astro di `src/content/` dengan schema Zod yang spesifik untuk industri ini, lalu buat halaman index dan detail (slug) secara dinamis.
```

---

## 🟣 Langkah 9: Prompt Stage 7 (Analytics Injection - ADD-ON)

Jalankan jika klien butuh data tracking (GA4 / Pixel).

```text
Klien ini butuh Analytics. Baca `.prompts/03-premium-addons/04_ADDON_ANALYTICS.md`.
Suntikkan script tracking di `<head>` pada `Layout.astro` dan tambahkan event micro-conversion di setiap tombol CTA utama.
```

---

## 🟣 Langkah 10: Prompt Stage 8 (Copywriting A/B Testing - ADD-ON)

Jalankan untuk klien B2B/SaaS yang gila data konversi.

```text
Kita akan melakukan A/B Testing. Baca `.prompts/03-premium-addons/05_ADDON_AB_TESTING.md`.
Buat 3 variasi copywriting Hero (Fokus Rasional, Fokus Emosional, Fokus Harga/ROI) dan siapkan komponen Astro-nya untuk Split Testing.
```

---

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
## 📋 Daftar Cepat 34 Preset Taste Skill (Pilih untuk Stage 2)
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

| # | Nama Preset | # | Nama Preset |
|---|---|---|---|
| **01** | Product-tile whiteout | **18** | Material you dynamic system |
| **02** | Haute-couture editorial | **19** | Web3 holographic cyberpunk |
| **03** | Stripe fintech precision | **20** | Playful geometric memphis |
| **04** | Linear dark precision | **21** | Soft claymorphism 3d |
| **05** | Avant-garde kinetic brutalism | **22** | Corporate executive authority |
| **06** | Organic craft & warm living | **23** | Hand-drawn indie sketch |
| **07** | Notion warm analog | **24** | Heavy industrial hardware |
| **08** | Nike athletic monochrome | **25** | Dark infra telemetry |
| **09** | Shopify dark theatre | **26** | Retro terminal cli |
| **10** | Vercel engineering minimal | **27** | Quiet luxury minimalist |
| **11** | Cyber-aesthetics dark mode | **28** | Soft editorial modern |
| **12** | Swiss corporate precision | **29** | Neumorphic soft glow |
| **13** | Neo-brutalist pop | **30** | Pure swiss zero shadow |
| **14** | Editorial dark luxury | **31** | Luxury high-contrast serif |
| **15** | Ultra-modern fluid minimalist | **32** | Airbnb photography bazaar |
| **16** | High-end opulent gold | **33** | Wise bold billboard |
| **17** | Pure swiss flat design | **34** | Spotify immersive compact |

---

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
## ✍️ Recopywriting & Pemadatan Konten Rich Text (Universal Multi-Industri)
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Jika proyek Anda sudah memiliki teks/website lama tetapi bahasanya tipis,
kaku, atau terasa seperti *AI slop*, gunakan prompt berikut untuk
melakukan refactoring copywriting secara instan (panduan lengkap di

    ```text
Baca panduan di `prompts/01_UTIL_RECOPYWRITING.md`,
`prompts/01_ANTI_SLOP_DIRECTIVE.md`, dan `prompts/01_STAGE_DISCOVERY_AND_COPYWRITING.md`.

SUMBER KONTEKS & DRAF OTOMATIS:
    1. Pindai seluruh file `src/**/*.data.js` dan dokumen konteks proyek
  (misal: `.prompts/01-intake/00_CLIENT_INTAKE_EXAMPLE.md` / `.prompts/01-intake/01_CLIENT_INTAKE_ID.md (atau 02_CLIENT_INTAKE_EN.md)` jika ada).
    2. Ekstrak secara mandiri:
       - Nama Brand & Persona (dari Navbar, Footer, Hero)
       - Industri & Price Tier (Luxury / Studio Menengah / B2B)
       - Target Audiens & Pain Points (dari teks draf saat ini)
       - Seluruh draf teks lama dari masing-masing file `*.data.js`

    INSTRUKSI RECOPYWRITING WAJIB:
    1. Eliminasi Total AI Slop: Buang semua frasa klise korporat ("komitmen",
  "solusi terbaik", "era modern", "pengalaman tak terlupakan").
    2. Terapkan Heading-First Mutlak: DILARANG meletakkan eyebrow, badge
  pill, atau micro-label apapun di atas judul H1/H2/H3.
    3. Kepatuhan Tanda Baca Keras: ZERO em-dash (—), ZERO en-dash (–), ZERO
  tanda hubung gantung (" - "), ZERO simbol "//".
    4. Suntikkan Bobot Rich Text (Show, Don't Tell): Terapkan Arsitektur
  Konten 5 Lapis (Heading -> Context Lede -> Operational Process ->
  Data/Proof/Specs -> Active CTA).
    5. Founder POV & Musuh Bersama: Angkat kebiasaan buruk industri secara
  halus dan buktikan standar kerja brand ini tanpa menyerang nama kompetitor
  secara frontal.
    6. In-Place Data Update (Data Decoupling): Perbarui langsung file-file
  `src/**/*.data.js` yang relevan dengan tetap mempertahankan format export
  object yang dibutuhkan komponen Astro.
```
---

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
## 🔄 Redesign Proyek yang Sudah Ada (Total DOM Mutation)
Jika Anda ingin merombak website/project yang sudah ada ke preset baru tanpa membangun dari nol:
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

```text
Baca file `.dniwebcraft/stage1_output.md` (atau data copy project yang ada), `.prompts/05-utilities/02_UTIL_02_UTIL_REDESIGN.md`, `.prompts/02-core-stages/02_STAGE_DESIGN_DNA.md`, `.prompts/02-core-stages/03_STAGE_MASTER_EXECUTION.md`, dan `.prompts/04-directives/01_ANTI_SLOP_DIRECTIVE.md`.

Gunakan PRESET: Preset 23

INSTRUKSI PEROMBAKAN TOTAL (ZERO RESKINNING):
1. Efisiensi Token: HANYA baca blok spesifikasi Preset 23 dari `.prompts/04-directives/02_TASTE_PRESETS.md` (§02.1 Structural Binding Matrix & spec token). DILARANG scan seluruh file 5000 baris.
2. Rombak Total Pohon DOM & Layout: Hancurkan seluruh struktur layout lama. Bangun ulang struktur DOM komponen `.astro` 100% mengikuti HERO_TOPOLOGY_LOCK, RADIUS_SCOPE, DEPTH MODEL, dan SIMETRI dari Preset 23.
3. Kunci Design Contract: Perbarui token @theme di `src/styles/global.css` dan perbarui `.dniwebcraft/stage2_output.md`.
4. Proteksi Visual Kaya: Setiap section wajib memiliki rasio visual >= 50-60% real-estate (Astro <Image />, bento grid, interactive island). Dilarang section gurun teks kosong!
5. Eksekusi Anti-Slop Mutlak: Terapkan Heading-First (ZERO Eyebrow di atas heading), ZERO Em-Dash/En-Dash, ZERO //, dan lolos Hard Compliance Gate.
```

---

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
## 🛠️ Perintah Tambahan untuk Review Hasil
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Setelah Stage 3 selesai merakit kode:

### 1. Menjalankan Server Development di Background
```bash
astro dev --background
```

### 2. Memeriksa Status & Log Server
```bash
astro dev status
astro dev logs
```

### 3. Menghentikan Server
```bash
astro dev stop
```

---

__________________________________________________________________
## 🛡️ Checklist Aturan Anti-Slop (Otomatis Teraplikasi)

Setiap tahapan prompt di atas telah mengunci aturan keras berikut:
- ✅ **Heading-First Mandatory:** Tidak ada pill/badge/eyebrow di atas `<h1>`, `<h2>`, atau `<h3>`.
- ✅ **Zero Em-Dash / En-Dash:** Tidak ada tanda pisah panjang atau tanda hubung gantung buatan.
- ✅ **Zero // Symbols:** Tidak ada simbol `//` pada teks antarmuka.
- ✅ **Zero Generic Card Fatigue:** Bentuk kartu dan radius strictly mengikuti spesifikasi preset.
- ✅ **Rich Media Density:** Minimal 50–60% real-estate visual (tanpa section gurun teks kosong).

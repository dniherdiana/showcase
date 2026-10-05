# 🔄 REDESIGN ENGINE & TOTAL ARCHITECTURAL MUTATION PROTOCOL (dniWebCraft)

Dokumen ini adalah **Protokol Perombakan Total (Total Architectural Redesign)** untuk merombak proyek/website yang sudah ada ke dalam salah satu dari 34 Preset Taste Skill di `02_TASTE_PRESETS.md`.

---

## 🚫 HUKUM UTAMA: ZERO CSS-RESKINNING (ANTI-GANTI WARNA POLOS)

> **"MENGGANTI WARNA LATAR, MERUBAH FONT, ATAU MENAMBAHKAN BORDER PADA LAYOUT LAMA ADALAH KEGAGALAN MUTLAK (REJECTED)."**

Redesign **BUKAN** sekadar *reskinning* CSS di atas kerangka layout lama. Redesign adalah **PEROMBAKAN FISIK POHON DOM (DOM STRUCTURAL MUTATION)** secara total:

1. **Struktur DOM & Grid Lama Wajib Dihancurkan**:
   - Jika layout lama memakai split 50/50 generik, 3 kolom kartu monoton, atau hero teks tengah biasa, struktur tersebut **WAJIB DIHANCURKAN DAN DIBANGUN ULANG DARI NOL**.
   - Susunan kontainer, rasio kolom, pembagian viewport, dan hierarki elemen wajib mengikuti **`HERO TOPOLOGY LOCK`** dan **`STRUCTURAL BINDING MATRIX`** dari Preset terpilih di `02_TASTE_PRESETS.md` §02.1.

2. **Uji Siluet Grayscale (Grayscale Silhouette Test)**:
   - Jika website sebelum dan sesudah redesign dikonversi ke hitam-putih (grayscale), **siluet makro, grid, bentuk kontainer, dan ritme spasialnya WAJIB BERUBAH TOTAL**.
   - Jika yang membedakan hanyalah warna, redesign dinyatakan **GAGAL TOTAL**.

3. **Proteksi Konten & Visual Kaya (Anti-Miskin Konten)**:
   - DILARANG membuang konten penting atau membuat halaman menjadi gurun teks kosong.
   - Rasio visual wajib **$\ge$ 50–60% real-estate** (media foto resolusi tinggi `<Image />`, bento grid, diagram teknis, sampel produk, dan Svelte 5 interactive islands).

4. **Kepatuhan Mutlak Anti-Slop**:
   - ⛔ **Heading-First Wajib**: ZERO EYEBROW / PILL / BADGE di atas `<h1>`, `<h2>`, `<h3>`.
   - ⛔ **Zero Em-Dash (`—`) / En-Dash (`–`)**: Dilarang tanda hubung buatan (` - `) atau tanda pisah panjang.
   - ⛔ **Zero Simbol `//`**: Ganti pemisah visual dengan `·` atau `|`.

---

## ⚡ PROTOKOL 4 LANGKAH EKSEKUSI REDESIGN

```
[1. Content & Data Extraction] ➔ Ekstrak copy/aset lama, decouple dari layout lama
                 ↓
[2. Targeted Preset Spec Read] ➔ Baca HANYA blok preset terpilih di 02_TASTE_PRESETS.md (hemat token)
                 ↓
[3. Total DOM & Topology Rebuild] ➔ Bongkar layout lama & rakit ulang pohon DOM sesuai preset
                 ↓
[4. Hard Compliance Gate QA] ➔ Audit mekanis (Zero Eyebrow, Zero Em-Dash, Grayscale Test)
```

---

### LANGKAH 1: Content Decoupling (Ekstraksi Konten Asli)
1. Baca seluruh copywriting dan data yang ada pada project lama (`.astro`, `.data.js`, atau `.dniwebcraft/stage1_output.md`).
2. Pisahkan data teks dari markup HTML/Astro lama.
3. Bersihkan seluruh teks dari AI Slop:
   * Hapus seluruh em-dash (`—`), en-dash (`–`), dan tanda hubung gantung (` - `). Tulis ulang secara natural.
   * Hapus field `sectionLabel` / `tagline` / `eyebrow` yang sebelumnya dirender di atas heading.
   * Hapus simbol `//`.
4. Simpan/pastikan data bersih siap diekspor dari file `[ComponentName].data.js`.

---

### LANGKAH 2: Tentukan "Visitor Mode" & Ekstraksi Preset (§02.1 02_TASTE_PRESETS.md)
*(Efisiensi Token: AI DILARANG scan seluruh file 5000 baris, hanya membaca blok preset terpilih)*.

**A. Tentukan Visitor Mode (Dari Konteks Konten):**
1. **Persuade (Landing Page/Marketing):** Desain adalah produknya. Gunakan tipografi ekspresif dan layout hero asimetris/menonjol.
2. **Operate (App/Dashboard):** *Scanability* menang atas ekspresi seni. Fokus pada kejelasan, panel data yang rapi, dan konvensi antarmuka.
3. **Read (Dokumentasi/Blog):** Pemahaman konten adalah raja. Fokus pada lebar kolom baca (*measure*), ritme vertikal, dan hierarki headings.
4. **Experience (Portofolio/Showcase):** Konten media memimpin. UI harus memudar ke belakang (transparan/minimal) agar foto/karya menjadi bintang utama.

**B. Ekstrak 6 parameter kunci preset terpilih:**
1. **`HERO_TOPOLOGY_LOCK`**:
   * *Contoh:* `CENTERED_STAGE` (01), `EDITORIAL_7_5` (02), `SPLIT_LEFT_MEDIA` (08), `BILLBOARD_RAG` (33), `IMMERSIVE_COMPACT` (34), dll.
2. **`RADIUS_SCOPE`**:
   * *Contoh:* `0px` flat (02, 05, 08, 14, 17, 24, 27) vs `soft 8px` vs `huge 24px/pill`.
3. **`BORDER / DEPTH MODEL`**:
   * *Contoh:* Hairline 1px, shadow-as-border (10 Vercel), chromatic glow (04, 11, 19), 3D clay extrusion (21), atau pure flat zero shadow (17, 30).
4. **`SIMETRI & COLUMN RATIO`**:
   * *Contoh:* Asimetris 7/5, 8/4, 45/55, atau Simetris Rigid.
5. **`ATMOSPHERE & TEXTURE`**:
   * *Contoh:* Grain overlay, hairline grid, subtle scanline, warm analog canvas, atau dark obsidian.
6. **`TAILWIND @theme TOKENS`**:
   * Petakan warna hex, type scale, letter spacing, dan font weight khas preset ke `src/styles/global.css`. Wajib gunakan token semantik `@theme` dan sintaks native opacity v4 (`/8`, `/12`, `/50`), DILARANG bracket desimal v3 `/[0.xx]`.

---

### LANGKAH 3: Total DOM & Topology Rebuild (Perombakan Pohon DOM)

Bongkar seluruh file komponen di `src/components/` dan rakit ulang dari nol:

1. **Hero Section Rebuild**:
   * Ganti total layout hero lama dengan arketipe `HERO_TOPOLOGY_LOCK` preset terpilih.
   * Pasang elemen visual dominan (media foto Astro `<Image />`, bento grid, atau oversized typography over media).
   * Heading H1 WAJIB menjadi elemen PERTAMA di kontainer (Heading-First).
   * Terapkan Primary CTA dengan kelas `.btn-thunk` (`h-12`).

2. **Body Sections Rebuild**:
   * Rombak seluruh grid kartu lama. Jika preset adalah `0px` radius flat, hapus semua kartu rounded dan gunakan layout garis border hairline atau editorial text-flow.
   * Ganti penomoran `01, 02` dalam box dengan ikon semantik `lucide-astro`.
   * Berikan ritme padding royal (`py-20` s/d `py-28`) dengan rasio visual $\ge$ 50–60%.
   * Tambahkan minimal 1-2 Svelte 5 Interactive Islands (`.svelte` dengan `client:visible`).

3. **Common Shell Rebuild (`Layout.astro`, `Navbar`, `Footer`)**:
   * Sesuaikan navbar dan footer dengan bahasa visual preset (misal: floating dock pill, full-width architectural header, atau minimal borderless).

---

### LANGKAH 4: Hard Compliance Gate QA (Audit Mekanis)

Jalankan perintah audit mekanis sebelum menyatakan redesign selesai:

```bash
# 1. Pastikan Nol Em-Dash & En-Dash
rg -nP '[\x{2014}\x{2013}]' src/

# 2. Pastikan Nol Simbol // pada teks render
rg -nP '\x{002F}\x{002F}' src/

# 3. Pastikan Nol Eyebrow di atas Heading
rg -n "sectionLabel|tagline|telemetryTag" src/components/

# 4. Verifikasi Single H1 Rule
rg -n "<h1" src/pages/ src/components/

# 5. Pastikan Nol Sintaks Tailwind v3 / Decimal Opacity Bracket
rg -nP '/\[0\.\d+\]' src/
rg -nP '\b(shadow-sm|outline-none|bg-gradient-to|aspect-\[16/9\]|aspect-\[1/1\])\b' src/
```

Lakukan tes visual di browser via `astro dev --background` untuk memastikan siluet baru terbukti berubah total dari desain lama.

---

## 📋 TEMPLATE PROMPT SIAP PAKAI DI GEMINI CLI

Salin dan kirim prompt berikut saat ingin merombak project ke Preset tertentu (contoh: **Preset 14** atau ganti dengan preset pilihan Anda):

```text
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
REDESIGN PROJECT TOTAL DOM MUTATION
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Baca file `.dniwebcraft/stage1_output.md` (atau data copy project yang ada), `.prompts/05-utilities/02_UTIL_02_UTIL_REDESIGN.md`, `.prompts/02-core-stages/02_STAGE_DESIGN_DNA.md`, `.prompts/02-core-stages/03_STAGE_MASTER_EXECUTION.md`, dan `.prompts/04-directives/01_ANTI_SLOP_DIRECTIVE.md`.

Gunakan PRESET: Preset 14

INSTRUKSI PEROMBAKAN TOTAL (ZERO RESKINNING):
1. Efisiensi Token: HANYA baca blok spesifikasi Preset 14 dari `.prompts/04-directives/02_TASTE_PRESETS.md` (§02.1 Structural Binding Matrix & spec token). DILARANG scan seluruh file 5000 baris.
2. Rombak Total Pohon DOM & Layout: Hancurkan seluruh struktur layout lama. Bangun ulang struktur DOM komponen `.astro` 100% mengikuti HERO_TOPOLOGY_LOCK, RADIUS_SCOPE, DEPTH MODEL, dan SIMETRI dari Preset 14.
3. Kunci Design Contract: Perbarui token @theme di `src/styles/global.css` dan perbarui `.dniwebcraft/stage2_output.md`.
4. Proteksi Visual Kaya: Setiap section wajib memiliki rasio visual >= 50-60% real-estate (Astro <Image />, bento grid, interactive island). Dilarang section gurun teks kosong!
5. Eksekusi Anti-Slop Mutlak: Terapkan Heading-First (ZERO Eyebrow di atas heading), ZERO Em-Dash/En-Dash, ZERO //, dan lolos Hard Compliance Gate.
```

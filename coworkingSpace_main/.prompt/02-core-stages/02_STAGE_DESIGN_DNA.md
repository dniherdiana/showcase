//02_STAGE_DESIGN_DNA.md
Stage 2: Design DNA, Taste Skill Calibration & Deterministic DOM Topology Engine (dniWebCraft)

Posisi dalam Alur:
Stage KEDUA dari 3. Pengguna langsung menentukan nomor/nama preset di prompt (misal `Gunakan Preset 6`).
Bertugas membaca `.dniwebcraft/stage1_output.md` dan **HANYA MEMBACA BLOK SPESIFIK PRESET YANG DIPILIH** dari `.prompts/04-directives/02_TASTE_PRESETS.md` (menghemat token & request hingga 95% tanpa scan seluruh file 5000 baris), mengalibrasi 3 Anti-Slop Dials, serta MENULISKAN KONTRAK STRUKTUR DOM KONKRET ke `.dniwebcraft/stage2_output.md`.

================================================================================
I. KALIBRASI TASTE SKILL & HUKUM KONVERSI
================================================================================

1. CALIBRATED ANTI-SLOP DIALS:
   - Design Variance (8/10): Kunci arsitektur layout asimetris editorial. Setiap rute halaman MPA wajib memiliki siluet makro yang berbeda total.
   - Motion Intensity (6/10): Terapkan fisika interaksi teredam (*The Thunk Test*) 150ms-200ms cubic-bezier untuk seluruh elemen interaktif.
   - Visual Density & Rich Media Dial (Target: 4/10 Whitespace / 8/10 Rich Media):
     * 🛡️ **HUKUM PROTEKSI KONTEN & VISUAL KAYA (ANTI-GURUN TEKS / ANTI-MISKIN KONTEN):**
       Aturan whitespace BUKAN berarti mengikis konten, membuang foto, atau mengubah preset kaya menjadi minimalis kosong.
       DILARANG membiarkan section miskin visual atau gundul teks. DILARANG membuat kartu/komponen yang hanya berisi 1-2 baris teks tanpa visual.
     * **Rasio Visual Wajib >= 50-60% real-estate:** Setiap halaman wajib dipimpin media beresolusi tinggi (Unsplash/Pexels CDN atau `/src/assets/images/`), bento grid fotografi, diagram teknis, tabel komparasi, sampel material, atau Svelte 5 interactive islands.
     * **Setiap Section WAJIB Mengunci Image Slot:** Hero (full-bleed/split image), Bento Cards (minimal 2-3 kartu bergambar), Showcase, dan About wajib memiliki URL gambar Unsplash atau path aset lokal.
     * Seluruh karakter visual khas preset (misal: 3D clay physics, neon telemetry grid, blueprint technical lines, monolithic typography over media, wavy blob masks) WAJIB dieksekusi dengan fidelitas visual penuh.
     * **DEFINISI KUNCI (ANTI-KONTRADIKSI):** VOID (section gurun teks tanpa peristiwa visual) DILARANG keras; WHITESPACE (ritme padding internal `py-20` hingga `py-28` yang royal) WAJIB.

2. HERO 3-SECOND CLARITY:
   - Viewport pertama wajib menjawab: Solusi Spesifik + Target Audiens + Aksi Risiko Rendah.

3. INTENT-DRIVEN CTA & ERGONOMICS:
   - Primary CTA wajib menggunakan kontras visual tertinggi di halaman dengan area sentuh minimum 48px (`h-12`).

4. WCAG CONTRAST GATE (COMPUTED, BUKAN VISUAL):
   - Ambang WAJIB dibuktikan angka, bukan perkiraan mata:
     body <18px >= 4.5:1 | large text (>=18px) dan UI/focus ring >= 3:1 | placeholder >= 4.5:1.
   - Gray di bawah `#595959` di atas putih otomatis GAGAL AA untuk teks normal.
   - Teks-over-foto diuji ke area TERANG gambar, bukan area gelapnya.
   - SELURUH pasangan warna dicatat rasio + verdict ke `CONTRAST_TABLE` di output contract.

5. WOW ANCHOR LAW (SATU ELEMEN TAK TERLUPKAN PER HALAMAN):
   - Merujuk WAJIB ke ground truth `.dniwebcraft/references/` dari Stage 1. Tanpa reference, preset tidak boleh dikunci.
   - Setiap halaman WAJIB mengunci eksplisit SATU signature moment dari kandidat `SIGNATURE_MOMENT_CANDIDATES` Stage 1 (tipe raksasa menimpa media, frame hairline emas/gold, marquee kinetik, komparator Sebelum/Sesudah, tumpukan frame editorial, dst) yang akan diingat pengunjung beserta lokasi DOM-nya.
   - Kalau sebuah halaman tidak memiliki signature moment tertulis, blueprint DITOLAK dan wajib dimutasi sampai punya satu.

6. HEADING-FIRST & ZERO EM-DASH ANTI-SLOP MANDATORY:
   - ⛔ **ZERO EYEBROW DI ATAS HEADING:** Heading H1, H2, H3 WAJIB menjadi elemen PERTAMA di container/seksi. DILARANG merender badge/pill/chip/label di atas heading pada preset manapun.
   - ⛔ **ZERO EM-DASH (`—`) & EN-DASH (`–`):** DILARANG menggunakan karakter em-dash/en-dash atau tanda hubung gantung (` - `). Seluruh teks copy dalam blueprint wajib mengalir natural seperti bahasa manusia.

================================================================================
II. DIRECT USER-DRIVEN PRESET LOCK & TOKEN EFFICIENCY PROTOCOL
================================================================================

1. **PENGGUNA YANG MENENTUKAN PRESET SECARA LANGSUNG:**
   - Pengguna langsung memberikan pilihan preset pada prompt input (contoh: `Gunakan Preset 6`).
   - AI **TIDAK PERLU** menyajikan rekomendasi atau melakukan auto-select.

2. ⚡ **MANDAT EFISIENSI TOKEN (DILARANG SCAN SELURUH FILE):**
   - AI **DILARANG SCAN / MEMBACA SELURUH ISI FILE `02_TASTE_PRESETS.md` (5.000 BARIS / 34 PRESET)**.
   - AI HANYA membaca bagian blok spesifikasi preset yang dipilih oleh pengguna di `.prompts/04-directives/02_TASTE_PRESETS.md` (misal: mencari section `# PRESET 6` atau `# PRESET 06`).
   - AI membaca `.dniwebcraft/stage1_output.md` untuk mengambil seluruh sitemap halaman MPA dinamis, price tier, dan copywriting.
   - Ekstrak `HERO TOPOLOGY LOCK`, `RADIUS SCOPE`, `BORDER/DEPTH MODEL`, dan `SIMETRI` dari §02.1 Structural Binding Matrix khusus untuk preset tersebut.
   - Lanjutkan langsung ke perakitan blueprint DOM lengkap di Bagian III dan simpan hasilnya ke `.dniwebcraft/stage2_output.md`.
================================================================================

Setelah preset dipilih, AI wajib mengunci kontrak DOM untuk SEMUA halaman MPA dinamis (seluruh rute halaman hasil riset Stage 1) ke `.dniwebcraft/stage2_output.md` melalui protokol di bawah.

---
1. BACA STRUKTURAL BINDING MATRIX (WAJIB):
   - Baca baris preset terpilih pada `STRUCTURAL BINDING MATRIX` di `.prompts/04-directives/02_TASTE_PRESETS.md` § 02.1.
   - Wajib mengekstrak ke kontrak DOM: `HERO TOPOLOGY LOCK`, `RADIUS SCOPE`, `BORDER / DEPTH MODEL`, dan `SIMETRI`.
   - DILARANG hanya menyalin token warna/tipografi. Siluet struktural tiap preset harus lolos aturan 1.6 (grayscale test) dan 1.7 (anti-homogenisasi). Preset terpilih TIDAK BOLEH dirender sebagai "editorial stage default".

2. PER-PAGE SILHOUETTE LOCK (SETIAP HALAMAN WAJIB BEDA):
   Seluruh halaman MPA didaftarkan pada `PAGE_SIGNATURE_MANIFEST` (disimpan di `.dniwebcraft/page_signature_manifest.md`). Setiap halaman mengunci 8 sumbu:

   ```text
   AXIS                        | NILAI
   1. HERO_TOPOLOGY            | {dari STRUCTURAL BINDING MATRIX, contoh: CENTERED_STAGE / EDITORIAL_7_5 / BILLBOARD_RAG}
   2. SECTION_ORDER            | [Hero, Ledger, Pillars, Showcase, ...]
   3. COLUMN_RATIO             | misal 7/5, 8/4, 45/55, 12/0, 0/12
   4. CARD_USAGE               | 0 (tanpa kartu) / 1 / 2 / 3+ (bentuk kartu)
   5. BORDER_RADIUS_SCOPE      | flat 0 / sharp / soft / rounded / huge
   6. IMAGE_DENSITY            | rasio & jumlah foto, aspect, crop
   7. ALIGNMENT                | L / R / C (per section)
   8. MOTION_SIGNATURE         | reveal / thunk / none / kinetic
   ```

   HUKUM WAJIB (NON-NEGOTIABLE):
   - Halaman baru WAJIB berbeda dari SEMUA halaman sebelumnya pada HERO_TOPOLOGY dan SECTION_ORDER.
   - Halaman baru Wajib berbeda minimal 3 sumbu lain.
   - SEBELUM mengunci kandidat blueprint, AI wajib MEMBACA hasil rancangan (DOM skeleton) semua halaman yang sudah dibuat dan membandingkan 8 sumbunya. Bila bentrok, lakukan mutasi pada sumbu berbiaya terendah yang diizinkan grammar preset hingga bebas bentrok.

2b. GRAYSCALE SILHOUETTE GATE (SEBELUM LOCK):
   - Kandidat blueprint WAJIB lolos dua uji sebelum dikunci:
     (i) GRAYSCALE TEST: ketika semua warna dihapus, siluet makro halaman tetap terbaca dan
         BERBEDA dari semua halaman lain. Kalau yang membedakan hanyalah warna, DITOLAK.
     (ii) SKELETON TEST: hanya menyisakan kotak, teks, spasi, dan alignment; komposisi harus
         tetap teridentifikasi (uji struktur, bukan dekorasi).
   - Kegagalan salah satu uji = mutasi blueprint sampai lolos (pilih sumbu berbiaya terendah).

3. DIVERSE MACRO-ARCHETYPE DOM SKELETON CATALOG:
   ⛔ **DILARANG MENGKLONING SATU STRUKTUR LAYOUT:** Dilarang mengulang kerangka 2-kolom (7/5) di semua preset. AI wajib memilih dan mengeksekusi arketipe layout yang selaras dengan `HERO TOPOLOGY LOCK` dan `BORDER/DEPTH MODEL` preset:

   - **ARKETIPE A: MONOLITHIC CENTERED STAGE (Preset 01, 10, 15, 33)**
     * *Hero:* Headline tipe raksasa di tengah (`text-center max-w-4xl mx-auto`), diikuti tombol aksi ganda, dan media visual besar di bawahnya (`aspect-video w-full max-w-5xl mx-auto`).
     * *Feature Section:* Single-column monumental narrative atau timeline vertikal terpusat, bukan kartu 3-kolom.

   - **ARKETIPE B: EDITORIAL ASYMMETRIC STAGGER (Preset 02, 14, 27, 28)**
     * *Hero:* Teks naratif kiri 7-kolom (`lg:col-span-7`), frame foto 4:5 kanan (`lg:col-span-5 aspect-4/5`) dengan cap/caption arsip di bawah foto.
     * *Feature Section:* Hairline dividers terbuka (`divide-y divide-border`) horizontal dengan daftar teks dan foto yang muncul bergantian tanpa border kotak.

   - **ARKETIPE C: TECHNICAL DATA LEDGER / MATRIX (Preset 03, 04, 12, 24, 25)**
     * *Hero:* Split-screen teknis dengan live telemetry / code inspector di kanan.
     * *Feature Section:* Tabel matriks tabular 2-kolom atau 4-kolom kompak dengan border hairline tipis (`border border-border/20`) dan metrik angka numerik, BUKAN kartu shadow mengambang.

   - **ARKETIPE D: FULL-BLEED CINEMATIC SHOWCASE (Preset 08, 09, 19, 31, 34)**
     * *Hero:* Background 100vw penuh dengan gradient overlay gelap, teks tebal kiri bawah, zero container borders.
     * *Feature Section:* Horizontal scrolling rail atau showcase foto berskala besar dengan caption minimalis di sudut bawah.

   - **ARKETIPE E: MODULAR BENTO & DENSE CANVAS (Preset 05, 06, 13, 20, 21)**
     * *Hero:* Asymmetric bento header dengan sel interaktif dan elemen visual multi-skala (kolom 8/4 atau 4/4/4 tidak rata).
     * *Feature Section:* Bento grid tidak beraturan (sel 2x1, 1x2, 1x1) yang menggabungkan foto, metrik, dan alat interaktif Svelte 5.

4. 🛡️ **MANDAT CETAK BIRU DOM LENGKAP UNTUK SEMUA SECTION:**
   - Stage 2 WAJIB menuliskan kerangka markup HTML fisik (`MANDATORY_DYNAMIC_DOM_SKELETONS`) untuk **SETIAP SECTION** (Hero, Features, Process, Showcase, CTA) di `.dniwebcraft/stage2_output.md`.
   - DILARANG hanya menulis deskripsi teks. Stage 3 TIDAK BOLEH mengarang struktur layout sendiri; Stage 3 hanya bertugas mengompilasi kerangka DOM yang sudah dikunci di Stage 2.

5. HEADING-FIRST & MEDIA LAW DALAM BLUEPRINT:
   - Blueprint section DILARANG memuat elemen label/pill/badge/caption di atas `<h1>`/`<h2>`/`<h3>`. Keterangan konteks ditempatkan di BAWAH heading atau menyatu dalam lede.
   - Setiap blueprint hero WAJIB mengunci elemen visual dominan (foto Unsplash/assets, rail metrik, boks komposisi, interactive island).
   - Minimal 4–8 penempatan gambar nyata per halaman terdaftar di `IMAGE_BRIEFS`.

================================================================================
IV. OUTPUT CONTRACT: .dniwebcraft/stage2_output.md

Tuliskan output ke `.dniwebcraft/stage2_output.md`:

    PRESET_SELECTED & ARCHETYPE_LOCKED

    STRUCTURAL_BINDING (dari matriks § 02.1: HERO_TOPOLOGY, RADIUS, BORDER/DEPTH, SIMETRI)

    GROUND_TRUTH: referensi `.dniwebcraft/references/` yang dikunci sebagai target
    visual + `VISUAL_THESIS` dari Stage 1 (dibaca ulang saat render di Stage 3)

    TASTE_SKILL_DIAL_SETTINGS: Variance 8 | Motion 6 | Density 4 (Void dilarang, Whitespace royal)

    DESIGN_SYSTEM_CONTRACT (schema DESIGN.md 9 seksi, BUKAN sekadar token warna):
      A. VISUAL_THEME: 1 paragraf filosofi + 4-8 karakter visual kunci.
      B. COLOR_ROLES: primary/accent/interactive (dengan hover+focus), neutral scale min
         5 step, surface & border, shadow color (rgba, brand-tinted).
      C. TYPE_SCALE: tabel LENGKAP (display/h1/h2/h3/h4/body/body-small/label/code)
         berisi size, weight, line-height, letter-spacing, OpenType features;
         tabular numerals untuk metrik dan case study; font PASTIKAN lolos extended
         blacklist dan mematuhi pairing law (02_TASTE_PRESETS.md § 01.8-01.9).
      D. COMPONENT_STATES: button primary/secondary lengkap dengan hover/focus/active,
         card, input + placeholder, navigation + active indicator.
      E. LAYOUT_PRINCIPLES: base unit, spacing scale, container width, grid + gutter,
         section spacing, border-radius scale sesuai RADIUS SCOPE preset.
      F. ELEVATION_TOKENS: `--shadow-l1..l4` KROMATIK (brand-tinted) + token glow aksen
         bila ada; nol shadow netral (02_TASTE_PRESETS.md § 01.10).
      G. ATMOSPHERE_LAYERS: 1-2 lapisan per section (grain/layering/hairline/material)
         sesuai arketipe preset (02_TASTE_PRESETS.md § 01.11).
      H. RESPONSIVE_BEHAVIOR: breakpoints (640/768/1024/1280/1536, mobile-first min-width),
         touch target >= 48px, fluid type `clamp()`, strategi collapse per komponen.
      I. IMAGE_BRIEFS: per halaman (subjek, mood, color grading, crop, aspect) + guardrail
         teks-over-foto diuji ke area TERANG gambar.
      J. DATA_SCHEMA_LOCK: schema field per komponen (heading, subhead, body, cta) DILARANG
         memuat field "eyebrow" yang dirender di atas heading (`sectionLabel`/`tagline`/
         `telemetryTag` sebagai pill) dan DILARANG literal `//` pada string render;
         pemisah memakai `·` / `|`.
      K. HERO_MEDIA_LAW: setiap hero wajib punya elemen visual dominan (foto/rail metrik/
         boks komposisi/kinetic/tipe raksasa atas media); teks-atas-solid dilarang tanpa
         pengecualian terdokumentasi. Media minimum per halaman >= 3 anchors, rasio visual
         >= 50% real-estate.

    CONTRAST_TABLE: SELURUH pasangan warna utama dengan rasio kontras + verdict WCAG AA
    (body >= 4.5:1, large/UI/focus >= 3:1, placeholder >= 4.5:1). Gray < #595959 di atas
    putih = GAGAL teks normal.

    SIGNATURE_MOMENT_MANIFEST: SATU wow-anchor per halaman (jenis: tipe raksasa / frame
    emas / marquee kinetik / komparator Sebelum-Sesudah / tumpukan editorial, lokasi DOM,
    dan trigger motion). Dilarang ada halaman tanpa entry.

    TAILWIND_V4_THEME (global.css @theme + .btn-thunk / .card-thunk)

    MANDATORY_DYNAMIC_DOM_SKELETONS untuk seluruh komponen halaman
    (pohon DOM per halaman WAJIB berbeda satu sama lain)

    PAGE_SIGNATURE_MANIFEST awal (dilanjutkan di Stage 3 per halaman:
     tulis ke `.dniwebcraft/page_signature_manifest.md`)

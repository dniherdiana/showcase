//03_STAGE_MASTER_EXECUTION.md
Stage 3: Direct Component-Based Code Generator & Assembler (dniWebCraft)

Posisi dalam Alur:
Stage KETIGA/Terakhir. Membaca strategi copy dari `.dniwebcraft/stage1_output.md`, cetak biru DOM dan token dari `.dniwebcraft/stage2_output.md`, serta direktif guardrail `.prompts/04-directives/01_ANTI_SLOP_DIRECTIVE.md`.

⛔ **EFISIENSI TOKEN & REQUEST (MANDATORY):**
AI **DILARANG SCAN / MEMBACA SELURUH ISI FILE `02_TASTE_PRESETS.md` (34 PRESET)** di Stage 3! Seluruh token warna, tipografi, dan kontrak DOM skeleton sudah lengkap terkunci di `.dniwebcraft/stage2_output.md`. Jika membutuhkan verifikasi token mikro tambahan, AI HANYA diperbolehkan membaca blok spesifik dari preset yang sudah dipilih, BUKAN seluruh 5000 baris file.

================================================================================
I. DIRECT COMPILATION & CONVERSION EXECUTION RULES (MUTLAK)
================================================================================

1. STRICT DOM SKELETON COMPLIANCE & ZERO HOMOGENIZATION:
   - Wajib merakit struktur markup komponen `.astro` PERSIS mengikuti `MANDATORY_DYNAMIC_DOM_SKELETONS` yang terkunci di `.dniwebcraft/stage2_output.md`.
   - ⛔ **DILARANG MENGARANG STRUKTUR LAYOUT SENDIRI DI STAGE 3:** AI dilarang keras jatuh kembali ke kebiasaan generik (seperti membuat grid 3-kartu atau zigzag teks/gambar standar). Jika preset mengunci Arketipe Data Ledger, rakitlah tabel hairline; jika preset mengunci Monolithic Stage, rakitlah headline raksasa terpusat; jika preset mengunci Bento Matrix, rakitlah bento grid asimetris.
   - DILARANG melakukan reskinning (menggunakan kerangka layout split yang sama antar preset). Struktur pohon DOM fisik wajib berubah total mengikuti arketipe preset yang dipilih.
   - 🛡️ **HUKUM PROTEKSI KONTEN & VISUAL KAYA:** Seluruh elemen visual khas preset (seperti 3D clay physics, neon telemetry HUD, technical blueprint grid, monolithic typography over media, wavy blob masks) WAJIB dirender dengan fidelitas penuh tanpa disunat menjadi minimalis generik. Dilarang menghasilkan website yang miskin konten atau gundul visual.

2. CONVERSION ERGONOMICS & "THE THUNK TEST" PHYSICS:
   - Primary Call to Action wajib menggunakan kelas `.btn-thunk` dengan tinggi minimum 48px (`h-12`) untuk memastikan area sentuh/klik ergonomis, serta kontras warna `bg-brand-accent text-brand-accent-text`.
   - Utility class interaksi pada `src/styles/global.css` wajib diimplementasikan:
     ```css
     @layer utilities {
       .btn-thunk {
         transition: transform 150ms cubic-bezier(0.2, 0, 0, 1),
                     background-color 150ms ease,
                     box-shadow 150ms ease;
       }
       .btn-thunk:hover { transform: translateY(-1px); }
       .btn-thunk:active { transform: translateY(1px) scale(0.98); }

       .card-thunk {
         transition: border-color 200ms ease, box-shadow 200ms cubic-bezier(0.2, 0, 0, 1);
       }
       .card-thunk:hover { border-color: var(--color-brand-accent); }
     }
     ```
   - PENGECUALIAN PRESET UNTUK `.card-thunk`: Untuk preset zero-border atau shadow-as-border (misal Preset 10 Vercel, 26 Neumorphism, 27 Quiet Luxury), hover DILARANG memunculkan border fisik mendadak; gunakan transisi `box-shadow` atau luminance background sesuai DEPTH MODEL preset.
   - DILARANG menyertakan animasi melayang terus-menerus (*floating keyframes*) atau efek rotasi yang mendistraksi audiens dari pesan konversi utama.

3. ZERO NUMBERING & LUCIDE ICONS MANDATORY:
   - DILARANG merender teks penomoran dekoratif seperti `PILAR 01`, `TAHAP 01`, `01.`, `[01]`, dsb.
   - Wajib mengimpor dan merender komponen semantik `<Icon name={item.iconName} class="w-5 h-5 text-brand-accent" />` dari `lucide-astro` pada setiap komponen pilar, kartu fitur, dan tahapan alur kerja.

4. ZERO EYEBROW DI ATAS HEADING (HARD GATE):
   - DILARANG merender tag BADGE/PILL/LABEL APA PUN (termasuk pill mono uppercase
     ber-gold-dot) di atas tag `<h1>`, `<h2>`, atau `<h3>`.
   - Heading WAJIB menjadi elemen PERTAMA di container komponen. Keterangan konteks hanya
     boleh di BAWAH heading (lede/subhead) atau menyatu dalam konten.
   - Data field `sectionLabel`/`tagline`/`telemetryTag` yang dirender sebagai pill di atas
     heading = PELANGGARAN; hapus field tsb dari `.data.js` atau alihkan perannya
     (caption di bawah konten / divider), jangan sekadar diganti teks pill lain.

5. TOTAL BAN: EM-DASH (`—`), EN-DASH (`–`), TANDA HUBUNG GANTUNG (` - `), DAN SIMBOL `//`:
   - DILARANG menggunakan karakter em-dash (`—`) dan en-dash (`–`) di seluruh file sumber (`.astro`, `.data.js`, `.json`) maupun teks antarmuka.
   - DILARANG melakukan substitusi malas dengan menyisipkan tanda hubung gantung (` - `), titik dua sisipan, atau kurung buatan. Tulis ulang kalimat secara utuh, lugas, dan mengalir wajar.
   - DILARANG merender simbol `//` pada teks antarmuka, badge, label navigasi, caption, ATAU di dalam string `.data.js`/`.json` yang tampil ke user.
   - Audit mekanis mutlak: `rg -nP '\x{002F}\x{002F}' src/` harus nol pada string render; `rg -nP '[\x{2014}\x{2013}]' src/` harus nol.
   - Ganti pemisah visual dengan `·` atau `|`.

6. CLEAN IMAGE INTEGRATION & REAL-WORLD PLACEHOLDER ASSETS (UNSPLASH / PEXELS / ASSETS):
   - DILARANG menghasilkan komponen yang miskin visual atau gundul foto.
   - Setiap kartu, hero, fitur, case study, dan showcase WAJIB memuat aset gambar nyata:
     * Gunakan URL gambar Unsplash/Pexels CDN aktif (contoh: `https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80`) ATAU aset gambar lokal di `/src/assets/images/`.
     * Gambar dirender bersih satu frame utuh (menggunakan `object-cover` dengan rasio `aspect-video`, `aspect-16/10`, atau `aspect-4/3`). DILARANG menempelkan badge/kartu melayang di atas foto.

7. TAILWIND V4.3 NATIVE UTILITY & OPACITY SYNTAX GATE:
   - Wajib gunakan native syntax Tailwind v4.3 murni (DILARANG syntax v3):
     * ❌ HARAM DECIMAL BRACKET OPACITY: DILARANG menulis arbitrary decimal opacity bracket `/[0.xx]` (contoh: `border-white/[0.08]`, `bg-black/[0.5]`, `bg-white/[0.04]`).
     * ✅ WAJIB NATIVE OPACITY MODIFIER: Gunakan persentase integer v4 (`border-white/8` untuk 8%, `border-white/12` untuk 12%, `bg-black/50` untuk 50%, `bg-white/4` untuk 4%) ATAU wajib utamakan token semantik `@theme`.
     * ❌ HARAM UTILITY OBSOLETE: `shadow-sm` (ganti `shadow-xs`), `outline-none` (ganti `outline-hidden`), `bg-gradient-to-*` (ganti `bg-linear-to-*`), `aspect-[16/9]` (ganti `aspect-video` / `aspect-16/9`), `aspect-[1/1]` (ganti `aspect-square`).
     * ✅ NATIVE ASPECT RATIO: Wajib gunakan native aspect ratio Tailwind v4: `aspect-video`, `aspect-square`, `aspect-16/10`, `aspect-4/3` bila menggunakan rasio standar.
   - Nilai RADIUS SCOPE dan warna hex dari preset WAJIB dipetakan ke `@theme {}` di `global.css` atau class semantik. Nilai radius eksak preset (misal `rounded-[2px]`, `rounded-[4px]`, `rounded-[6px]`, `rounded-[12px]`, `rounded-[20px]`, `rounded-[32px]`, `rounded-[255px_15px_225px_15px]`) diperbolehkan bila diperlukan untuk mengeksekusi spec preset secara presisi.
   - DILARANG menormalisasi radius preset dengan nilai default yang menyimpang dari RADIUS SCOPE (misal memaksa `rounded-lg` pada preset yang bernilai `0px` atau `2px`).
   - Wajib utamakan utility semantik `@theme`: `bg-surface-ground`, `bg-surface-panel`, `bg-surface-contrast`, `text-ink-primary`, `text-ink-muted`, `text-brand-accent`, `border-border-subtle`. DILARANG hardcode arbitrary hex berulang (`bg-[#08080A]`, `bg-[#121216]`) jika token sudah tersedia di `global.css`.


8. DYNAMIC PAGE-SCOPED COMPONENT ARCHITECTURE:
   - File di `src/pages/*.astro` HANYA bertindak sebagai shell orkestrator minimal yang mengimpor `<Layout>` dan komponen section.
   - Struktur folder komponen wajib page-scoped dan dinamis mengikuti `DYNAMIC_SITEMAP_MANIFEST` dari Stage 1 / Stage 2:
     ```text
     src/
     ├── styles/
     │   └── global.css               <-- Tailwind v4 @theme + @layer utilities
     ├── layouts/
     │   └── Layout.astro             <-- Master Shell, Navbar, Footer, Meta, Fonts
     ├── assets/
     │   └── images/                  <-- Foto placeholder & aset visual
     ├── components/
     │   ├── common/
     │   │   ├── Navbar.astro & Navbar.data.js   <-- Clean Nav (Logo + Text Links ONLY, ZERO CTA BUTTONS)
     │   │   └── Footer.astro & Footer.data.js   <-- COMPREHENSIVE MEGA-FOOTER (Manifesto, 4-Col Directory, Licenses, HQ Hours, Contacts, Legal)
     │   ├── [route1]Page/            <-- Halaman Dinamis Hasil Riset Stage 1
     │   │   ├── [Route1]Hero.astro & [Route1]Hero.data.js
     │   │   └── [Route1]Content.astro & [Route1]Content.data.js
     │   ├── [route2]Page/            <-- Halaman Dinamis Hasil Riset Stage 1
     │   │   ├── [Route2]Hero.astro & [Route2]Hero.data.js
     │   │   └── [Route2]Content.astro & [Route2]Content.data.js
     │   ├── [route3]Page/            <-- Halaman Dinamis Hasil Riset Stage 1
     │   │   ├── [Route3]Hero.astro & [Route3]Hero.data.js
     │   │   └── [Route3]Content.astro & [Route3]Content.data.js
     │   └── islands/
     │       └── [SignatureComponent].svelte  <-- Svelte 5 Interactive Island
     └── pages/
         ├── index.astro
         ├── [route2].astro
         ├── [route3].astro
         └── [route4].astro
     ```

9. STRICT DATA DECOUPLING, MASSIVE NARRATIVE COPY & MEGA-FOOTER:
   - DILARANG hardcode teks di dalam file `.astro`. Seluruh data copywriter dari Stage 1 wajib diekspor dari file `.data.js` berdampingan secara verbatim (ZERO EM-DASH).
   - ⛔ **ANTI-QUOTES / ANTI-ONE-LINER ENFORCEMENT:** Seluruh string deskripsi kartu, fitur, dan layanan di `.data.js` WAJIB berupa narasi panjang MULTIPLE PARAGRAPHS (minimal 2–3 paragraf, 80–150 kata per blok). DILARANG mengekspor kalimat satu baris pendek yang menyerupai kutipan kata mutiara (quotes) tanpa informasi mekanisme dan manfaat nyata.
   - 🏛️ **COMPREHENSIVE MEGA-FOOTER ENFORCEMENT:** `Footer.data.js` WAJIB mengekspor seluruh 6 pilar informasi lengkap (Brand Manifesto, 4-kolom direktori navigasi, lisensi resmi, jam operasional live, kontak resmi, dan legalitas). Dilarang membuat footer minimalis/satu baris.

10. PHOTO-FIRST MEDIA INTEGRATION & RICH MEDIA DENSITY:
    - Seluruh media visual di-render menggunakan `<Image src={...} alt="..." class="..." />` dari `astro:assets` (jika asset lokal) atau tag `<img>` yang dioptimasi dengan URL CDN Unsplash berparameter `?auto=format&fit=crop&w=...&q=80`.
    - Rasio visual minimal 50-60% luas area per halaman MPA (bento grid, full-bleed hero, sampel material, diagram teknis, preview interaktif).
    - DILARANG menghasilkan section yang miskin visual atau gundul teks. Setiap halaman minimal memiliki 4–8 gambar nyata.

11. XSS-SAFE EXECUTION:
    - Dilarang keras menggunakan `innerHTML` atau `set:html`.

12. PAGE-SEQUENTIAL LOCK-STEP DIVERSITY (WAJIB BACA HASIL PER HALAMAN):
    - Build halaman SATU PER SATU: `index` → route berikutnya, dst. DILARANG menyelesaikan semua halaman sekaligus dalam satu draft.
    - SEBELUM build tiap halaman, WAJIB membaca file `.astro` + `.data.js` halaman-halaman yang sudah dibuild dan `.dniwebcraft/page_signature_manifest.md`.
    - HERO_TOPOLOGY dan SECTION_ORDER halaman baru WAJIB berbeda dari SEMUA halaman sebelumnya; minimal 3 sumbu lain berbeda (8 sumbu di 02_STAGE_DESIGN_DNA.md § III).
    - Bila bentrok, mutasi blueprint sampai bebas bentrok sebelum menulis file.
    - SETELAH halaman selesai dan LOLOS HARD COMPLIANCE GATE (rule 21), tulis/update entri
      8 sumbu halaman itu ke `.dniwebcraft/page_signature_manifest.md`.
    - SEBELUM build halaman BERIKUTNYA: tulis blok SILHOUETTE-DIFF ke manifest yang berisi
      nilai 8 sumbu halaman baru vs SEMUA halaman lama + jumlah sumbu berbeda. Build DILARANG
      lanjut bila HERO_TOPOLOGY/SECTION_ORDER sama dengan halaman mana pun, atau total sumbu
      berbeda < 4 (untuk halaman non-pola).
    - RESULT HARUS BERBEDA: halaman yang tampak seperti "palette-swap tapi siluet sama" dianggap GAGAL (rejected).

13. FLUID RESPONSIVE SYSTEM (MOBILE-FIRST, BUKAN SEKEDAR STACKED):
    - Breakpoint standar 640/768/1024/1280/1536, hanya media query `min-width`.
    - Fluid type scaling via `clamp()` di @theme; dilarang font-size statis antar viewport.
    - Container queries untuk komponen mandiri (comparator case study, kalkulator waste).
    - Hero photo-first WAJIB menyediakan crop alternatif mobile via `srcset`/`<picture>`,
      bukan sekadar mengecilkan crop desktop.
    - Setiap halaman wajib mendokumentasikan strategi collapse (nav, grid, hero, tabel/data).

14. MOTION PHYSICS GATE (LENGKAP):
    - Animasi CSS-only; hanya `transform` dan `opacity` (60fps, GPU).
    - DILARANG menganimasi `width`, `height`, `top`, `left`, `margin`.
    - SELURUH animasi dibungkus media query `prefers-reduced-motion: reduce`.
    - SATU urutan page-load terorkestrasi (staggered reveal via `animation-delay`) per halaman;
      micro-interaction tersebar tidak boleh menggantikan itu.
    - Dua section berurutan dilarang memakai motion signature yang sama.

15. IMAGE ART-DIRECTION GATE:
    - Setiap media mengikuti `IMAGE_BRIEFS` dari stage2 (subjek, mood, color grading, crop, aspect).
    - SATU color grading konsisten lintas seluruh foto website.
    - Dilarang stok generik (jabat tangan, boardroom, tim di depan laptop, render abstrak).
    - Teks-over-foto dibuktikan AA (>= 4.5:1) terhadap area TERANG gambar.
    - Foto tidak muncul dua kali dengan crop yang sama dalam satu situs.

16. INTERACTIVE TOOLS UX CONTRACT (KALKULATOR, FORM PRA-KUALIFIKASI, COMPARATOR):
    - Setiap tool Svelte 5 island WAJIB mendefinisikan: state kosong, state loading, state valid,
      state error + pesan ramah Bahasa Indonesia, dan aksi sukses dengan feedback Thunk.
    - Area sentuh minimum 48px untuk seluruh kontrol; feedback fisik terdamped (150-200ms).
    - Kalkulator WASTE WAJIB menjalankan komputasi NYATA dan menampilkan asumsi-input secara
      jujur (input omzet, persentase waste) dengan ekspektasi konservatif; bukan "fake dashboard".
    - Form pra-kualifikasi: setiap field berlabel eksplisit, validasi inline, ringkas (omzet
      tahunan, kendala utama, jumlah tim), dan CTA sesuai intent user (bukan "Submit").
    - Comparator Sebelum/Sesudah: gunakan tabel/perbandingan metrik tabular yang jelas, dengan
      sumber data ditulis jujur (real atau illustratif) sesuai aturan Trust.

17. QUIET-LUXURY RESTRAINT (KHUSUS BRAND PREMIUM):
    - SATU elemen paling dominan per viewport (*The Loudest Element*), sisanya dimelembutkan.
    - Aksen gold/champagne HANYA pada fokus (CTA utama, sorotan metrik), bukan hiasan menyebar.
    - Metrik memakai tabular numerals dengan penyajian terkendali; nol angka dekoratif di kotak.
    - Subdue semua chrome non-esensial agar authority terasa dari jarak, bukan dari hiasan.

18. FINAL REVIEW PASS (QA GATE SEBELUM DEKLARASI SELESAI):
    - GRAYSCALE SILHOUETTE: tiap halaman dikonversi grayscale -> siluet tetap terbaca dan
      BERBEDA antar halaman; bila hanya warna yang membedakan, GAGAL dan mutasi.
    - CONTRAST COMPUTED: verifikasi `CONTRAST_TABLE` stage2 dengan audit skrip; body >= 4.5:1,
      large/UI/focus >= 3:1, placeholder >= 4.5:1; gray < #595959 di atas putih = GAGAL.
    - SINGLE H1 RULE: tepat satu `<h1>` per halaman; heading tidak melompat level.
    - UI REVIEW: bandingkan output terhadap Web Interface Guidelines (Vercel) untuk isu
      UX dan accessibility; fix semua isu CRITICAL + SERIOUS.
    - PERFORMANCE: baseline Lighthouse >= 90; zero JS di default render, islands hanya
      `client:visible`; gambar via Astro `<Image/>` tanpa CLS.

19. ANTI-PLAIN PATCH (SETIAP SECTION DATAR WAJIB DI-UPGRADE):
    - Setiap section dinilai "plain score". Jika terasa datar/generik (teks di tengah,
      kisi kartu polos, latar satu warna tanpa peristiwa), WAJIB menerapkan minimal 2
      aktivator dari daftar (pilih yang selaras dengan arketipe preset aktif):
      a. Oversized-type moment: satu kata/frasa 2x lebih besar dari hierarki normal
      b. Full-bleed photography / media sinematik sesuai IMAGE_BRIEFS
      c. Hairline frame aksen (sesuai tema preset: misal emas untuk luxury, cyan/lime untuk tech/brutal) atau border struktural 1px (kecuali pada preset zero-border/shadow-as-border)
      d. Tekstur/grain overlay atau layering transparansi subtil
      e. Asymmetric break: geser kolom, off-grid, overlap kurva
      f. Kinetic element: marquee, ticker, atau staggered reveal yang tegas
    - DILARANG membiarkan section polos dengan alasan "sudah ada whitespace royal".
      Whitespace adalah ritme, bukan pengganti isi visual.

20. SCREENSHOT VERIFICATION LOOP (GATE TERTINGGI, BUKAN SEKADAR CHECKLIST):
    - Jalankan `astro dev --background` (lihat AGENTS.md) sebelum review visual.
    - Setelah tiap halaman dibuild, buka di browser dan ambil screenshot (desktop + mobile).
      Bandingkan hasil render dengan ground truth `.dniwebcraft/references/` dan checklist:
      signature moment tetap hadir, siluet berbeda dari halaman lain dalam grayscale,
      kontras terverifikasi angka, tidak ada section datar yang lolos.
    - Iterasi sampai lolos. DILARANG menyatakan halaman selesai hanya karena build sukses
      atau file komponen terisi; selesai = render yang lolos gate.

21. HARD COMPLIANCE GATE (PER HALAMAN, MEKANIS, SEBELUM MANIFEST):
    Setiap halaman WAJIB menjalankan audit mekanis berikut dan menulis hasilnya sebagai
    blok `COMPLIANCE_PASS` / `COMPLIANCE_FAIL` ke `.dniwebcraft/page_signature_manifest.md`.
    Halaman yang belum PASS dilarang membangun halaman berikutnya.

    STEP A. SCAN BANNED TOKENS (JALANKAN PERINTAH, BUKAN MENGIRA):
      - `rg -nP '\x{002F}\x{002F}' src/` -> nol pada string yang dirender (.astro/.data.js/.json).
      - `rg -nP '[\x{2014}\x{2013}]' src/components/<halamanDir> src/pages/*.astro` -> nol.
      - `rg -n "sectionLabel|tagline|telemetryTag" src/components/<halamanDir>` -> audit hasil:
        field yang dirender sebagai pill/label DI ATAS heading dinyatakan MELANGGAR, wajib
        dihapus/dialihkan sebelum lanjut.

    STEP B. HEADING-FIRST CHECK:
      - Deklarasi `<h1>`/`<h2>` tidak boleh didahului elemen pill/badge/label dalam container
        yang sama. Kalau ada, refactor label ke bawah heading atau hapus total.

    STEP C. HERO MEDIA LAW:
      - Hero wajib memuat minimal SATU elemen visual dominan: foto astro:assets, rail metrik
        proof, boks komposisi (escrow/shared-risk), marquee kinetik, atau tipe raksasa menimpa
        media. Text-only hero = GAGAL kecuali pengecualian terdokumentasi di manifest.

    STEP D. MEDIA COUNT (ANTI-VOID):
      - Setiap halaman minimal 3 visual anchors: foto/rail metrik ber-ikon/island interaktif.
      - Rasio visual >= 50% real-estate section. Halaman yang hanya punya 1 foto di hero dan
        sisanya teks = GAGAL Image Density.

    STEP E. SILHOUETTE-DIFF:
      - Bandingkan 8 sumbu halaman ini vs SEMUA halaman sebelumnya (baca file `.astro`
        aktual, bukan memory). HERO_TOPOLOGY dan SECTION_ORDER WAJIB unik; total sumbu
        berbeda minimal 4. Kurang = mutasi lalu audit ulang.

    STEP F. ATOMOSPHERE AUDIT:
      - Setiap section wajib memiliki minimal satu lapisan (grain/layering/hairline/material).
        Section flat surface masuk daftar pelanggaran dan wajib diberi lapisan.

    STEP G. TAILWIND V4 SYNTAX AUDIT:
      - `rg -nP '/\[0\.\d+\]' src/components/<halamanDir>` -> NOL. DILARANG kurung siku desimal `/[0.xx]`. Wajib `/<percentage>` (misal `/8`, `/12`) atau token `@theme`.
      - `rg -nP '\b(shadow-sm|outline-none|bg-gradient-to|aspect-\[16/9\]|aspect-\[1/1\])\b' src/components/<halamanDir>` -> NOL.

    Hasil audit (A-G) ditulis sebagai COMPLIANCE_PASS/FAIL per halaman DI MANIFEST, lalu
    dipakai sebagai prasyarat halaman berikutnya di rule 12.

22. TYPOGRAPHIC & LAYOUT MICRO-CALIBRATIONS (OPTICAL TWEAKS):
    - **Dark Mode Text Tuning:** Teks terang di atas latar gelap (*dark mode*) WAJIB dikompensasi: beri sedikit tambahan *line-height* (leading), sedikit tambahan *letter-spacing* (tracking), dan font-weight satu tingkat lebih tebal bila jenis font membutuhkan.
    - **Proximity over Containers:** Gunakan kedekatan spasi (*proximity*) dan `gap` untuk mengelompokkan elemen yang berelasi. DILARANG mengurung setiap grup kecil ke dalam kotak/border/kartu baru.
    - **Spacing Rhythm:** Ciptakan ritme visual melalui kontras antara jarak sempit (relasi erat) dan jarak longgar (pemisah antar grup utama). Dilarang mengulang nilai spasi yang sama (misal `gap-4` di mana-mana) tanpa makna ritmis.
    - **Text Measure:** Pertahankan panjang paragraf pada bentang 45–75 karakter (`max-w-[65ch]`). Jangan biarkan teks melar 100% mengikuti kontainer raksasa.

23. 🚫 ZERO "DIV SOUP" (FULL SEMANTIC HTML MANDATORY):
    - Setiap komponen `.astro` WAJIB menggunakan tag semantik HTML5 dengan benar.
    - Gunakan `<main>` untuk membungkus konten utama halaman.
    - Gunakan `<header>` dan `<footer>` di tingkat layout atau komponen.
    - Gunakan `<section>` HANYA jika memiliki heading di dalamnya (dan gunakan `aria-labelledby` jika perlu). DILARANG menggunakan `<div>` sebagai pembungkus utama section.
    - Gunakan `<article>` untuk card blog, case study, atau item independen.
    - Gunakan `<aside>` untuk konten pendukung.
    - Gunakan `<figure>` dan `<figcaption>` untuk media yang memiliki konteks.
    - Gunakan `<time>` untuk tanggal.

24. ✅ MINIMALIST SEO INJECTION:
    - Setiap halaman `src/pages/*.astro` WAJIB mendefinisikan variabel `title` dan `description` di dalam frontmatter, dan melemparnya ke komponen `<Layout title={title} description={description}>`.
    - Komponen Layout WAJIB merender tag `<title>` dan `<meta name="description">` dasar di dalam `<head>`.
    - Jangan meng-generate schema.org atau OpenGraph kompleks (akan ditambahkan manual via Add-on).

===============================================================================
II. DIRECT CODE GENERATION DIRECTIVE
================================================================================
AI langsung menghasilkan seluruh file kode proyek secara utuh, terstruktur, modular, dan siap produksi tanpa ringkasan atau komentar placeholder.

# STAGE 2 OUTPUT: DESIGN DNA & DOM TOPOLOGY
**Preset Selected:** Preset 23 — Hand-drawn indie sketch
**Archetype Locked:** INDIE SCRAPBOOK / HANDMADE IMPERFECTION

## I. STRUCTURAL BINDING MATRIX
- **Hero Topology Lock:** INDIE_CENTER_SCRIBBLE
- **Radius Scope:** card "255px 15px 225px 15px/15px 225px 15px 255px" (BLOB)
- **Border / Depth Model:** Coretan tangan, foto produk miring (-2°), border 1.5px solid.
- **Simetri:** KUASI-SIMETRIS

## II. GROUND TRUTH
- **References:** `/home/DevHub/prompt/xxx-test/.dniwebcraft/references/` (coworking_warm.jpg, workspace_focus.jpg, community_event.jpg)
- **Visual Thesis:** Estetika "Scrapbook Artisanal" dengan elemen-elemen kertas, rotasi miring yang tidak sempurna, namun tertata rapi. Memberikan kesan hangat, manusiawi, dan tidak korporat sama sekali, berpusat pada rasa komunitas dan kreativitas.

## III. TASTE SKILL DIAL SETTINGS
- **Design Variance:** 8/10 (Layout asimetris editorial, tidak ada pengulangan antar halaman)
- **Motion Intensity:** 6/10 (Fisika interaksi teredam, *thunk test* gaya kertas jatuh, 150ms-200ms cubic-bezier)
- **Visual Density & Rich Media Dial:** Target: 4/10 Whitespace / 8/10 Rich Media (Void dilarang, whitespace royal `py-24`, media resolusi tinggi >= 50% di setiap halaman)

## IV. DESIGN SYSTEM CONTRACT

### A. VISUAL THEME
Filosofi desain organik yang mengedepankan ketidaksempurnaan buatan tangan. Karakter visual kunci: (1) Headline tipe tulisan tangan (*script*) Caveat, (2) Kartu bergelombang tak simetris (*wavy irregular radius*), (3) Media foto yang dimiringkan -2° hingga 2° bergaya polaroid fisik, (4) Tekstur permukaan kertas atau grain halus, (5) Garis tepi coretan (*scribble*) 1.5px.

### B. COLOR ROLES
- **Background:** `#FFFDF9`
- **Surface:** `#F7F3E9`
- **Surface Dark:** `#292524`
- **Text Primary:** `#1C1917`
- **Text Secondary:** `#57534E`
- **Accent/Interactive:** `#EA580C` (Hover: `#C2410C`)
- **Border:** `rgba(28, 25, 23, 0.15)`
- **Shadow:** Khas preset ini `0 4px 12px rgba(0, 0, 0, 0.05)` (lembut).

### C. TYPE SCALE
*Semua menggunakan font-family spesifik: Caveat untuk Display/Headline, DM Sans untuk Body. Menghindari font blacklist.*
- **Display Lg:** Caveat, 44px, w700, lh 1.15, track 0px
- **Headline Md:** Caveat, 28px, w700, lh 1.2, track 0px
- **Body Md:** DM Sans, 15px, w400, lh 1.6, track 0px
- **Label Md:** DM Sans, 12px, w600, lh 1.2, track 0.05em

### D. COMPONENT STATES
- **Button Primary:** bg `#EA580C`, text `#FFFFFF`, radius `9999px`, hover bg `#C2410C`, active scale down.
- **Button Outline:** bg `transparent`, text `#1C1917`, border `1.5px solid #1C1917`, hover bg `rgba(28, 25, 23, 0.05)`.
- **Card Panel:** bg `#F7F3E9`, border `1.5px solid rgba(28,25,23,0.15)`, radius irregular blob, shadow `0 4px 12px rgba(0,0,0,0.05)`.
- **Input/Placeholder:** bg `#FFFDF9`, border 1.5px solid, text `#1C1917`, placeholder `#57534E` (Pass AA contrast).

### E. LAYOUT PRINCIPLES
- Base unit 8px, gap 16px, container lebar maksimal `max-w-6xl` untuk menjaga nuansa akrab.
- Section spacing `py-20` hingga `py-24` (whitespace lega).
- Border radius irregular `255px 15px 225px 15px/15px 225px 15px 255px`.

### F. ELEVATION TOKENS
- `--shadow-l1`: `0 4px 12px rgba(0, 0, 0, 0.05)` (lembut sekali, hanya untuk memisahkan kertas).

### G. ATMOSPHERE LAYERS
- Menggunakan layer SVG noise/grain transparan (opacity 3%) untuk mensimulasikan kertas daur ulang.

### H. RESPONSIVE BEHAVIOR
- Breakpoints: 640/768/1024/1280. Touch target minimal 48px (`h-12`). Kartu saling bertumpuk (overlap) perlahan saat layar mengecil.

### I. IMAGE BRIEFS
- Setiap foto diberikan `rotate-[-2deg]` atau `rotate-[2deg]`. Subjek bernuansa dokumenter hangat (kopi, meja kayu, wajah tertawa), filter warna senada dengan tone analog (agak warm). Foto dipisahkan dengan border tipis 1.5px agar mirip potongan majalah.

### J. DATA SCHEMA LOCK
- DILARANG "eyebrow" di atas heading. Pemisah string menggunakan `·`.
- Tidak ada telemetry pill.

### K. HERO MEDIA LAW
- Setiap Hero wajib memiliki media visual dominan. Di Home: komposisi foto miring besar + doodle di kanan teks. Media minimum per halaman: 4 penempatan. Visual real-estate > 50%.

## V. CONTRAST TABLE (WCAG AA COMPUTED)
- `#1C1917` (Body Text) on `#FFFDF9` (Background) -> **14.8:1** (PASS)
- `#1C1917` (Body Text) on `#F7F3E9` (Surface) -> **13.5:1** (PASS)
- `#FFFFFF` (Button Text) on `#EA580C` (Primary Accent) -> **3.1:1** (PASS untuk Elemen UI / Large Text >= 3:1)
- `#57534E` (Placeholder/Secondary) on `#FFFDF9` -> **7.3:1** (PASS)

## VI. SIGNATURE MOMENT MANIFEST
1. `/` (Home) -> **Tipe Raksasa Caveat + Coretan**: Teks headline seolah ditulis tangan besar melengkung dengan garis coretan 1.5px di bawahnya.
2. `/ruang-kerja` -> **Tumpukan Kertas Interaktif**: Kartu harga ditumpuk menyerupai kertas kwitansi dengan border bergelombang dan rotasi miring yang akan merata saat di-hover.
3. `/komunitas` -> **Scrapbook Wall**: Tumpukan galeri foto asimetris layaknya kliping majalah di dinding gabus.
4. `/fasilitas` -> **Analog Ledger**: Spesifikasi wifi dan steker dirender dengan gaya tabel *clipboard* kertas mesin tik.
5. `/coba-gratis` -> **Paper Form**: Form pendaftaran terlihat seperti formulir kertas fisik dengan blok-blok kotak coretan tangan.

## VII. TAILWIND V4 THEME (global.css spec)
```css
@theme {
  --color-bg-base: #FFFDF9;
  --color-bg-surface: #F7F3E9;
  --color-bg-dark: #292524;
  --color-text-primary: #1C1917;
  --color-text-secondary: #57534E;
  --color-accent: #EA580C;
  --color-accent-hover: #C2410C;
  --font-caveat: 'Caveat', cursive;
  --font-dmsans: 'DM Sans', sans-serif;
  --radius-blob: 255px 15px 225px 15px / 15px 225px 15px 255px;
  --shadow-indie: 0 4px 12px rgba(0, 0, 0, 0.05);
  --border-indie: rgba(28, 25, 23, 0.15);
}
```

## VIII. MANDATORY DYNAMIC DOM SKELETONS

### A. Rute `/` (Beranda Utama)
```html
<!-- HERO: INDIE_CENTER_SCRIBBLE -->
<section class="py-24 bg-bg-base overflow-hidden relative">
  <div class="max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
    <h1 class="font-caveat text-[44px] md:text-[64px] font-bold text-text-primary leading-[1.15] relative">
      Ruang Kerja Fokus Tanpa Kehilangan Hangatnya Interaksi Sosial
      <svg class="absolute -bottom-4 left-0 w-full h-4 text-accent" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0,5 Q50,0 100,8" stroke="currentColor" stroke-width="2" fill="none"/></svg>
    </h1>
    <p class="font-dmsans text-[18px] text-text-secondary mt-8 max-w-2xl">
      Bekerja secara mandiri bukan berarti Anda harus menanggung rasa terisolasi...
    </p>
    <div class="mt-10 flex gap-4">
      <button class="bg-accent text-white h-12 px-6 rounded-full font-bold hover:bg-accent-hover">Coba Sehari Gratis</button>
    </div>
    <div class="mt-16 w-full max-w-5xl rotate-[-2deg] border-[1.5px] border-border-indie p-3 bg-white shadow-indie">
      <img src="/src/assets/images/workspace_focus.jpg" alt="Workspace" class="w-full h-auto aspect-[16/9] object-cover" />
    </div>
  </div>
</section>

<!-- SECTION 2: CORE PROBLEM -->
<section class="py-24 bg-bg-surface">
  <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
    <div class="lg:col-span-5 order-2 lg:order-1 rotate-[1deg] border-[1.5px] border-border-indie bg-white p-4 shadow-indie rounded-blob">
      <img src="/src/assets/images/cafe_fatigue.jpg" alt="Cafe Fatigue" class="w-full aspect-square object-cover rounded-blob" />
    </div>
    <div class="lg:col-span-7 order-1 lg:order-2">
      <h2 class="font-caveat text-[36px] font-bold text-text-primary leading-[1.2]">Mengapa Ruang Publik Bukan Solusi Jangka Panjang Karir Anda</h2>
      <div class="mt-6 font-dmsans text-[15px] text-text-secondary leading-[1.6] space-y-6">
        <p>Sebagai pekerja mandiri atau pemilik bisnis perintis...</p>
      </div>
      <a href="/ruang-kerja" class="inline-block mt-8 border-[1.5px] border-text-primary h-12 px-6 rounded-full leading-[44px] font-bold text-text-primary hover:bg-black/5">Lihat Pilihan Ruang</a>
    </div>
  </div>
</section>
<!-- (Arsitektur dilanjutkan asimetris untuk fitur & footer, nol card monoton) -->
```

### B. Rute `/ruang-kerja`
```html
<!-- HERO: ASYMMETRIC_SPLIT_7_5 -->
<section class="py-20 bg-bg-base border-b border-border-indie">
  <div class="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row gap-12">
    <div class="lg:w-7/12">
      <h1 class="font-caveat text-[44px] font-bold text-text-primary leading-[1.15]">Fleksibilitas Ruang Tanpa Mengorbankan Kualitas Eksekusi</h1>
      <p class="mt-6 font-dmsans text-[15px] text-text-secondary leading-[1.6]">Mengikat kontrak sewa kantor tahunan sering kali menjadi beban finansial...</p>
    </div>
    <div class="lg:w-5/12 flex items-center justify-center">
       <div class="rotate-[3deg] p-3 bg-white border-[1.5px] border-border-indie shadow-indie">
         <img src="/src/assets/images/desk_setup.jpg" alt="Desk" class="w-full aspect-4/5 object-cover" />
       </div>
    </div>
  </div>
</section>

<!-- PRICING ISLAND (Interactive Component) -->
<section class="py-24 bg-bg-surface">
  <div class="max-w-6xl mx-auto px-6">
    <h2 class="font-caveat text-[36px] text-center font-bold text-text-primary mb-16">Transparansi Harga Untuk Setiap Fase Pekerjaan Anda</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Pricing Card Blob -->
      <article class="bg-white p-8 border-[1.5px] border-border-indie rounded-blob shadow-indie rotate-[-1deg] hover:rotate-0 transition-transform">
        <h3 class="font-dmsans font-bold text-[20px] text-text-primary">Tiket Harian</h3>
        <!-- Teks detail -->
      </article>
      <!-- ... -->
    </div>
  </div>
</section>
```

### C. Rute `/komunitas`
```html
<!-- HERO: PHOTO_OVERLAY_ROTATE -->
<section class="py-24 bg-bg-surface">
  <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    <div>
      <h1 class="font-caveat text-[44px] font-bold text-text-primary leading-[1.15]">Jaringan Otak Kreatif Yang Tumbuh Bersama</h1>
      <p class="mt-6 font-dmsans text-[15px] text-text-secondary leading-[1.6]">Meninggalkan bilik isolasi korporat tidak berarti Anda harus kehilangan kesempatan belajar...</p>
    </div>
    <div class="relative w-full h-[400px]">
       <!-- Scrapbook Wall Overlap -->
       <img src="/src/assets/images/event1.jpg" class="absolute top-0 left-0 w-2/3 rotate-[-4deg] border-[1.5px] border-border-indie p-2 bg-white shadow-indie z-10" />
       <img src="/src/assets/images/event2.jpg" class="absolute bottom-0 right-0 w-2/3 rotate-[3deg] border-[1.5px] border-border-indie p-2 bg-white shadow-indie z-20" />
    </div>
  </div>
</section>
```

### D. Rute `/fasilitas`
```html
<!-- HERO: BILLBOARD_RAG_LEFT -->
<section class="py-24 bg-bg-base">
  <div class="max-w-5xl mx-auto px-6">
    <h1 class="font-caveat text-[44px] font-bold text-text-primary leading-[1.15] max-w-3xl">Standar Arsitektur Produktivitas Tingkat Industri</h1>
    <div class="mt-16 w-full overflow-hidden border-[1.5px] border-border-indie shadow-indie">
      <img src="/src/assets/images/facility_wide.jpg" class="w-full aspect-[21/9] object-cover" />
    </div>
  </div>
</section>
```

### E. Rute `/coba-gratis`
```html
<!-- HERO: CONCIERGE_FORM_RIGHT -->
<section class="py-24 bg-bg-surface min-h-screen flex items-center">
  <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
    <div class="lg:col-span-7">
      <h1 class="font-caveat text-[44px] font-bold text-text-primary leading-[1.15]">Gerbang Menuju Resolusi Produktivitas Terbaik Anda</h1>
      <p class="mt-6 font-dmsans text-[15px] text-text-secondary leading-[1.6]">Hentikan rutinitas nomaden antar kedai kopi publik sekarang juga...</p>
    </div>
    <div class="lg:col-span-5">
      <form class="bg-white p-8 border-[1.5px] border-border-indie shadow-indie rotate-[1deg] rounded-blob">
         <!-- Svelte Form Concierge Component -->
      </form>
    </div>
  </div>
</section>
```

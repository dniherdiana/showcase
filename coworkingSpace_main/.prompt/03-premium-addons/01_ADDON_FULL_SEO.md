//01_ADDON_FULL_SEO.md
Stage 4: Advanced SEO & Semantic Schema Injection (Add-on)

Posisi dalam Alur:
Stage ini HANYA dijalankan jika klien membeli "Full SEO Add-on". Dijalankan setelah Stage 3 selesai dan klien sudah menyetujui desain website.
Tugas utama stage ini adalah menyuntikkan OpenGraph, Twitter Cards, dan JSON-LD Schema.org yang sangat terstruktur berdasarkan jenis industri klien, tanpa merusak desain UI yang sudah ada.

================================================================================
I. CORE OBJECTIVES & RULES
================================================================================

1. ZERO UI DISRUPTION:
   - DILARANG mengubah markup HTML, styling Tailwind, atau desain UI yang sudah disetujui.
   - Seluruh pekerjaan SEO murni terjadi di dalam blok `<head>`, Frontmatter (---), dan file data (`.data.js`).

2. DYNAMIC SCHEMA.ORG (JSON-LD) MATCHING:
   - AI wajib membaca `qna.md` atau hasil riset Stage 1 untuk menentukan tipe Schema yang paling akurat.
   - DILARANG menggunakan schema `WebPage` atau `Organization` secara generik jika ada spesifikasi yang lebih tepat.
   - Contoh Mapping:
     * Arsitek / Interior: `HomeAndConstructionBusiness` atau `ProfessionalService`
     * Klinik Medis: `MedicalClinic`
     * B2B Tech / SaaS: `SoftwareApplication` atau `B2BBusiness`
     * Kafe / Restoran: `Restaurant` atau `CafeOrCoffeeShop` dengan `menu` URL.
   - Setiap halaman spesifik wajib mendapat Schema turunannya (misal: halaman FAQ wajib punya `FAQPage` schema, halaman artikel wajib punya `Article` schema, halaman service detail wajib punya `Service` schema).

================================================================================
II. EXECUTION STEPS (LANGKAH EKSEKUSI KODE)
================================================================================

Jalankan perintah ini secara berurutan:

STEP 1: BUAT KOMPONEN `<SEO.astro>` TINGKAT LANJUT
Buat file `src/components/common/SEO.astro` yang menerima props lengkap: `title`, `description`, `canonicalURL`, `image` (OG image), dan `schemaData` (JSON-LD).
- Wajib memiliki `<title>`, `<meta name="description">`, dan `<link rel="canonical">`.
- Wajib memiliki blok `og:title`, `og:description`, `og:image`, `og:type`, `og:url`.
- Wajib memiliki blok `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`.
- Wajib merender `<script type="application/ld+json">` yang secara dinamis mengubah string `schemaData` menjadi JSON yang aman dari XSS.

STEP 2: UPDATE `Layout.astro`
Modifikasi `src/layouts/Layout.astro` untuk mengimpor dan merender komponen `<SEO />` yang baru dibuat di dalam `<head>`, dan menghapus tag SEO minimalis lama agar tidak ada duplikasi.

STEP 3: SUNTIKAN DATA SEO & SCHEMA KE `*.data.js`
Buka setiap file `src/**/*.data.js` (misalnya `[Route]Hero.data.js` atau `[Route]Page.data.js`) dan tambahkan object ekspor baru bernama `seoData`.
- `seoData` wajib berisi: `title` (dioptimasi, panjang ideal < 60 karakter), `description` (dioptimasi dengan keyword, < 160 karakter), dan `schema`.
- `schema` harus berupa JSON/Object murni yang mewakili schema.org spesifik halaman tersebut.
- DILARANG melakukan keyword stuffing; tulisan tetap natural.

STEP 4: UPDATE FRONTMATTER SETIAP HALAMAN `src/pages/*.astro`
- Import `seoData` dari file data yang bersangkutan.
- Lewatkan `seoData` tersebut sebagai props ke `<Layout seo={seoData}>`.

STEP 5: SITEMAP & ROBOTS.TXT (INSTRUKSI UNTUK USER)
Tuliskan pesan instruksi di terminal (output chat) agar developer menjalankan perintah berikut secara manual untuk melengkapi SEO:
```bash
npx astro add sitemap
```
Serta instruksikan untuk membuat file `public/robots.txt` dengan isi:
```text
User-agent: *
Allow: /
Sitemap: https://domainklien.com/sitemap-index.xml
```

================================================================================
III. OUTPUT CONTRACT
================================================================================
Pastikan AI mengkonfirmasi 3 hal ini di akhir response:
1. "SEO Component Terpasang: Ya"
2. "Jumlah Schema JSON-LD yang disuntikkan: [Jumlah]"
3. "Tipe Schema Utama: [Misal: ProfessionalService / MedicalClinic]"

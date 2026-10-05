//03_ADDON_CMS_BLOG.md
Stage 6: Headless CMS & Content Collections Integration (Premium Add-on)

Posisi dalam Alur:
Dijalankan sebagai Add-on jika klien meminta fitur "Artikel/Blog", "Portofolio Dinamis", atau ingin mengelola konten sendiri.

================================================================================
I. INSTRUKSI UNTUK AI
================================================================================

Tugas Anda adalah mengubah website statis MPA menjadi website dinamis menggunakan Astro Content Collections.

STEP 1: SETUP KONTEN
1. Buat folder `src/content/[jenis-konten]/` (jenis-konten disesuaikan dengan QnA: misal `blog`, `portfolio`, atau `case-studies`).
2. Buat file `src/content/config.ts` dan definisikan skema Zod (`defineCollection`) yang sangat spesifik dengan industri klien (misal: jika Arsitek, masukkan field `year`, `location`, `materials`).
3. Buat minimal 3 file dummy `.md` atau `.mdx` di dalam folder tersebut agar desain bisa dirender.

STEP 2: SETUP HALAMAN (ROUTING DINAMIS)
1. Buat halaman index list: `src/pages/[jenis-konten]/index.astro` yang memanggil `getCollection()`. Render data dalam bentuk Grid/Bento yang sesuai dengan Stage 2 Design DNA.
2. Buat halaman detail dinamis: `src/pages/[jenis-konten]/[...slug].astro` menggunakan `getStaticPaths()`.

STEP 3: DEKORASI & TYPOGRAPHY
Gunakan plugin `@tailwindcss/typography` (`prose`) di dalam halaman detail konten agar Markdown dirender dengan cantik, proporsional, dan sesuai tipografi brand klien.

================================================================================
II. KONTRAK OUTPUT
================================================================================
AI wajib mengonfirmasi:
1. "Koleksi Konten Berhasil Dibuat: [Nama Koleksi]"
2. "Schema Zod Spesifik: Ya"
3. "Halaman Dinamis Siap: `/[jenis-konten]/[slug]`"

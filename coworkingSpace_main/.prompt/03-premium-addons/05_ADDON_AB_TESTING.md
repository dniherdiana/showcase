//05_ADDON_AB_TESTING.md
Stage 8: Copywriting A/B Testing Generator (Conversion Optimization Add-on)

Posisi dalam Alur:
Dijalankan ketika klien ingin mengetes pesan mana yang paling menghasilkan konversi tinggi (biasanya untuk klien SaaS, B2B, atau E-Commerce).

================================================================================
I. INSTRUKSI UNTUK AI
================================================================================

Tugas Anda adalah men-generate 3 variasi ekstrim dari komponen Hero dan menyiapkannya untuk split testing.

STEP 1: BACA KONTEKS
Baca `.dniwebcraft/stage1_output.md` untuk memahami persona audiens dan titik rasa sakit (pain points) utama.

STEP 2: GENERATE 3 VARIASI `[Route]Hero.data.js`
Alih-alih satu object data ekspor, buat tiga object/file data terpisah:
- **Variant A (The Feature/Logic Focus):** Copywriting yang rasional, menonjolkan fitur teknis, kecepatan, dan garansi logika.
- **Variant B (The Emotional/Fear Focus):** Copywriting yang menekan ketakutan audiens (contoh: rasa cemas tertinggal, rugi biaya) dan menawarkan keselamatan.
- **Variant C (The Price/ROI Focus):** Copywriting yang langsung menembak keuntungan finansial, hemat waktu, dan *Return on Investment* (ROI) yang jelas.

STEP 3: INTEGRASI A/B TESTING DI `.astro`
Ubah komponen `Hero.astro` untuk secara acak me-render salah satu varian (jika menggunakan A/B testing sederhana via Edge Functions atau logic server-side ringan), ATAU cukup hasilkan ketiga file komponen (`HeroVariantA.astro`, dll) beserta instruksi agar developer dapat menghubungkannya ke sistem Vercel Edge / Netlify Split Testing.

================================================================================
II. KONTRAK OUTPUT
================================================================================
AI wajib mengonfirmasi:
1. "3 Variasi Teks Dihasilkan (Logic, Fear, ROI): Ya"
2. "Modifikasi Komponen/Data Siap untuk Split Test: Ya"

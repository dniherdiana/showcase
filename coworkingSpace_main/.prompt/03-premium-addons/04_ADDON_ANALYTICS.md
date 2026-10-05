//04_ADDON_ANALYTICS.md
Stage 7: Telemetry & Analytics Injection (Data-Driven Add-on)

Posisi dalam Alur:
Dijalankan ketika klien membutuhkan pelacakan performa (Google Analytics, Meta Pixel, atau Plausible).

================================================================================
I. INSTRUKSI UNTUK AI
================================================================================

STEP 1: SUNTIKKAN GLOBAL TRACKING SCRIPT
1. Tambahkan parameter/variabel untuk ID Analytics di frontmatter `Layout.astro` (misal: `GA_MEASUREMENT_ID`).
2. Suntikkan script instalasi Google Analytics (gtag.js) atau Meta Pixel di dalam blok `<head>`, dengan memastikan performa website tidak drop (gunakan trik `type="text/partytown"` jika partytown tersedia, atau pastikan script diload secara `async`/`defer`).

STEP 2: MICRO-CONVERSION TRACKING PADA CTA
1. Cari setiap komponen tombol CTA (terutama kelas `.btn-thunk`).
2. Tambahkan inline script event handler (atau integrasikan melalui framework yang dipakai) untuk memicu konversi saat tombol diklik.
Contoh: `onclick="if(typeof gtag === 'function') gtag('event', 'generate_lead', { 'event_category': 'WhatsApp' });"`

STEP 3: PERINGATAN COOKIE (COMPLIANCE)
Bila diperlukan, buat satu Svelte Island sederhana `<CookieConsent client:load />` di pojok bawah layar yang minimalis dan tidak merusak estetika desain brand.

================================================================================
II. KONTRAK OUTPUT
================================================================================
AI wajib mengonfirmasi:
1. "Global Script (GA4/Pixel) Terpasang di `<head>`: Ya"
2. "Event Tracking pada CTA Utama Terpasang: Ya"

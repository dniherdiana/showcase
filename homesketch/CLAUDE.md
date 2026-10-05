# AGENTS.md — Klinik Estetika Alunê

## Design Intent (Terkunci)
Situs ini dirancang oleh dniWebCraft dengan aturan anti-slop. Jangan ubah arah visual/konsep,
preset, atau struktur yang sudah dikunci tanpa alasan tertulis — desain ini bukan template generik.

- Preset: 21 — Quiet Luxury Minimal (Keluarga: Editorial-Bordered)
- Design DNA terkunci: Stuktur dibentuk ruang negatif, typography asimetris tegas, hairline divider 1px (tanpa bento box/card)
- Font: Cinzel (Heading) & DM Sans (Body) — JANGAN ganti ke Inter/Roboto/Arial.

## ANTI-SLOP STRICT
- Jangan render eyebrow labels/badge pill di atas heading section.
- Jangan gunakan Inter/Roboto/Arial. Jangan gunakan animate-ping/animate-pulse/glowing dots.
- Jangan taruh box absolut/kutipan/statistik di atas foto (parasite overlay).
- Jangan ubah jadi layout SaaS generik (hero-centered + cards 3-kolom + testimonials).
- Jangan pindah ke gradient ungu/biru atau glassmorphism.
- Hapus elemen yang kalau dihilangkan tidak mengubah makna (restraint).
- Setiap halaman wajib mempertahankan minimal 1 momen berkesan.

## STACK
- Astro 7 + Tailwind CSS v4 CSS-first (`@theme` di `src/styles/global.css`). BANNED tailwind.config.js.
- Interaktivitas hanya di Svelte 5 Islands (.svelte). Jangan pakai vanilla JS/DOM manipulation.
- Semua gambar pakai Astro `<Image />` dari astro:assets; raw <img> banned.
- Icons: lucide-astro. Teks/data wajib di .data.js, jangan hardcode di markup.
- Tepat 1 <h1> per halaman; pasangan warna wajib WCAG 2.1 AA (≥ 4.5:1).
# ANIMATION_LIBRARY & MICRO-INTERACTIONS

File ini adalah perpustakaan animasi kustom (Custom Animation Engine). 
Anda (Developer) dapat memasukkan utility classes CSS, skrip Lenis Smooth Scroll, atau komponen pembungkus (wrapper) animasi di sini.

================================================================================
I. ATURAN PENGGUNAAN ANIMASI UNTUK AI (STAGE 3 / 3.5)
================================================================================
Jika user menginstruksikan "Terapkan animasi dari ANIMATION_LIBRARY", AI WAJIB:
1. Membaca definisi class animasi di bawah ini.
2. Memasukkan class animasi HANYA pada elemen yang tepat (Heading, Bento Cards, Buttons, Image Wrappers).
3. Memastikan adanya *stagger effect* (jeda berurutan) agar elemen tidak muncul secara bersamaan.
4. DILARANG menganimasi tag `<main>` atau container induk secara keseluruhan; animasi harus pada level anak (child elements).

================================================================================
II. KOLEKSI ANIMASI KUSTOM & BACKGROUND EFFECTS
================================================================================

Koleksi animasi dan efek visual telah dikurasi dan dipisahkan ke dalam folder `../06-ui-components/animations/`. Saat diminta menerapkan efek tertentu, rujuk file-file berikut:

## A. Background Effects (Astro Components)
- `06-ui-components/animations/background-effects/HeroParallaxOverlay.astro` : Overlay paralaks untuk Hero image.
- `06-ui-components/animations/background-effects/InteractiveBgGlowing.astro` : Efek glow interaktif mengikuti kursor.
- `06-ui-components/animations/background-effects/ParticleBackground.astro` : Background partikel halus.

## B. CSS Reveal & Scroll Animations
- `06-ui-components/animations/css-animations/reveal.css` & `global-reveal.css` : File CSS utama untuk IntersectionObserver reveal animasi (fade-up, fade-in).
- `06-ui-components/animations/css-animations/stats-scroll.css` : Efek animasi khusus untuk angka/stats saat di-scroll.

## C. Spesifik Komponen
- `06-ui-components/animations/components/Stats.astro` : Komponen counter/angka berjalan interaktif. (Gunakan data dari `stats-data.md` jika butuh referensi konten).

*(Developer: Saat AI diminta menerapkan efek ini, AI akan otomatis membaca kode dari lokasi tersebut dan mengintegrasikannya ke proyek Anda).*

================================================================================
III. PENGECUALIAN (ANTI-SLOP MOTION GATE)
================================================================================
- DILARANG menaruh animasi melayang-layang terus menerus (floating keyframes).
- DILARANG menganimasi paragraf teks panjang (body text) karena merusak keterbacaan.
- Semua interaksi hover WAJIB menggunakan kurva *cubic-bezier(0.2, 0, 0, 1)* (The Thunk Test) dengan durasi 150-200ms.

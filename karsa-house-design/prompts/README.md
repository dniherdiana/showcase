🟢 1. Prompt Stage 1 (Research & Copywriting)
Plaintext

Baca file `.prompts/STAGE_1_CONTENT_COPY.md`, `prompts/00-qna-mentah.md` dan `.prompts/ANTI_AI_SLOP_DIRECTIVE.md`.

Berikut adalah brief / data QnA project:
---
read hasil brief `prompts/00-qna-mentah.md`
---

Tugas kamu:
1. Lakukan riset kompetitor real-time dan susun copywriting humanis untuk arsitektur MPA.
2. Terapkan aturan ZERO EM-DASH (`—` / `–`), lolos Brand Interchangeability Test, dan tanpa jargon AI.
3. TULIS dan simpan seluruh outputnya ke file `.dniwebcraft/stage1_output.md`.

🔵 2. Prompt Stage 2 - Fase 1 (Analisis & Rekomendasi Preset dari File)
Plaintext

Baca file `.dniwebcraft/stage1_output.md`, `.prompts/STAGE_2_DESIGN_DNA.md`, dan `.prompts/PRESET_SEED.md`.

Jalankan FASE 1:
1. Analisis data Stage 1, lalu cocokkan dengan 35 preset yang ada di `.prompts/PRESET_SEED.md`.
2. Sajikan 3 Rekomendasi Preset terbaik beserta alasan teknis kecocokan blueprint-nya.
3. BERHENTI dan tunggu pilihan preset dari saya (jangan buat file dulu!).

🟡 3. Prompt Stage 2 - Fase 2 (Kunci Desain & Tulis Output)

(Setelah kamu memilih, misalnya Preset 01 Haute-Couture Editorial:)
Plaintext

Gunakan Preset 01 (Haute-Couture Editorial) dari file `.prompts/PRESET_SEED.md`.

Jalankan FASE 2:
1. Ekstrak token warna, tipografi, dan signature move dari preset tersebut di `.prompts/PRESET_SEED.md`.
2. Terapkan blueprint layout per halaman (Beranda, Layanan, Portofolio) dengan aturan visual rich density (minimal 50% real-estate terisi, anti-void).
3. Lakukan audit WCAG Automated Contrast dan Single H1 Rule.
4. TULIS dan simpan hasilnya langsung ke file `.dniwebcraft/stage2_output.md`.

🟣 4. Prompt Stage 3 (Eksekusi Kode Komponen)
Plaintext

Baca file `.dniwebcraft/stage1_output.md`, `.dniwebcraft/stage2_output.md`, `.prompts/PRESET_SEED.md`, `.prompts/STAGE_3_MASTER_EXECUTION.md`, dan `.prompts/ANTI_AI_SLOP_DIRECTIVE.md`.

Eksekusi dan rakit seluruh kode proyek:
1. `src/styles/global.css` (Tailwind v4.3 `@theme` + variables dari stage2_output.md).
2. File data `[ComponentName].data.js` (copywriting Stage 1 verbatim, ZERO EM-DASH).
3. Komponen modular `.astro` (Hero yang berbeda per halaman, Zero-JS Navbar di Layout, Astro `<Image />`).
4. Komponen interaktif Svelte 5 Islands (`.svelte` dengan `client:visible`).
5. Halaman `src/pages/index.astro`, `layanan.astro`, dan `portofolio.astro`.





++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
REDESIGN PRESET
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Baca `.dniwebcraft/stage1_output.md`, `.prompts/PRESET_SEED.md`,
  `.prompts/STAGE_2_DESIGN_DNA.md`, dan
  `.prompts/ANTI_AI_SLOP_DIRECTIVE.md`.

  Terapkan [MODE A: USER MANUAL OVERRIDE] dengan PRESET: Preset 33

  Instruksi Khusus Anti-Gurun Teks:
  1. Rasio visual minimal 60% real-estate: Setiap section WAJIB dipimpin
  media foto atau bento grid multi-foto. Dilarang membuat section yang
  hanya berisi paragraf panjang/bullet points tanpa visual pendamping.
  2. Hero Diferensiasi Mutlak: Beranda, Layanan, dan Portofolio WAJIB
  memiliki susunan layout Hero yang berbeda total.
  3. Kunci seluruh token @theme Tailwind v4 dan blueprint DOM, lalu simpan
  ke `.dniwebcraft/stage2_output.md`.

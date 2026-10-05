//02_ADDON_CLIENT_HANDOFF.md
Stage 5: Client Handoff & Brand Guidelines Generation (Premium Add-on)

Posisi dalam Alur:
Dijalankan setelah Stage 3 atau 4 selesai sepenuhnya. Tujuan stage ini adalah meng-generate dokumen panduan merek (Brand Guidelines) dan Handoff Manual yang terlihat mewah dan profesional untuk diberikan kepada klien. 
Dokumen ini akan merangkum seluruh filosofi desain, kode warna, tipografi, dan tone of voice yang telah dikunci di `stage2_output.md` dan `stage1_output.md`.

================================================================================
I. INSTRUKSI UNTUK AI
================================================================================

1. BACA SUMBER KEBENARAN:
   - Baca `.dniwebcraft/stage1_output.md` (untuk tone of voice, copy strategy, positioning).
   - Baca `.dniwebcraft/stage2_output.md` (untuk hex codes, type scale, komponen desain).

2. GENERATE FILE HANDOFF:
   - Buat file `.dniwebcraft/HANDOFF_TO_CLIENT.md`.
   - Tulisan WAJIB bernada sangat profesional, elegan, edukatif, dan memosisikan studio pembuat (Anda) sebagai agensi desain kelas atas.
   - DILARANG menggunakan kata-kata "AI", "Prompt", atau "Generated". Dokumen ini seolah-olah ditulis langsung oleh Art Director / Arsitek Web.

================================================================================
II. STRUKTUR DOKUMEN HANDOFF (WAJIB DIIKUTI)
================================================================================

Dokumen `HANDOFF_TO_CLIENT.md` yang dihasilkan harus memiliki struktur berikut:

# [Nama Brand Klien] - Digital Brand Guidelines & Handoff

Selamat datang di rumah digital baru Anda. Dokumen ini adalah panduan resmi (*brand guidelines*) untuk menjaga konsistensi visual dan komunikasi merek Anda di masa depan.

## 1. Filosofi Desain (The Visual Thesis)
(AI: Tuliskan 2-3 paragraf elegan tentang mengapa arsitektur desain (Archetype) dan siluet layout ini dipilih untuk memecahkan masalah industri mereka. Ambil dari Visual Thesis di Stage 2).

## 2. Palet Warna (Color System)
(AI: Ekstrak tabel warna dari Stage 2. Tampilkan Nama Warna, Kode HEX, dan Fungsi).
Contoh:
- **Primary Ink (#121212):** Digunakan untuk teks utama agar otoritas terjaga.
- **Surface Ground (#F9F9F7):** Latar belakang kanvas yang hangat, menghindari putih medis.
- **Brand Accent ([Hex]):** Digunakan khusus untuk tombol konversi.

## 3. Tipografi (Typography)
(AI: Sebutkan jenis font yang digunakan, beserta alasan psikologisnya. Tampilkan pasangan font Heading dan Body).

## 4. Voice & Tone (Panduan Komunikasi)
(AI: Jelaskan Archetype klien dari Stage 1. Berikan contoh: "Bagaimana cara menulis di media sosial atau brosur").
- **Do:** (Contoh kalimat yang benar dan selaras dengan merek).
- **Don't:** (Contoh kalimat pantangan/slop yang merusak citra merek).

## 5. Media & Fotografi (Art Direction)
(AI: Ringkas panduan *Image Briefs* dari Stage 2. Jelaskan filter, mood, dan komposisi foto seperti apa yang boleh di-upload klien di masa depan).

## 6. Serah Terima Aset (Handoff)
- **Source Code:** Tersedia di repositori.
- **Teknologi:** Dibangun di atas Astro Framework untuk kecepatan (0 CLS, 100/100 Lighthouse score).

---
(Catatan untuk Developer: Export file `.dniwebcraft/HANDOFF_TO_CLIENT.md` ini ke format PDF menggunakan Markdown to PDF converter, lalu kirim ke klien sebagai nilai tambah/bonus layanan Anda!)

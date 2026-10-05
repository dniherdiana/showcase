//01_STAGE_DISCOVERY_AND_COPYWRITING.md
Stage 1: Client Intake -> Real-Time Industry Research -> Universal MPA Copywriting Engine (dniWebCraft)

# Stage 01 — Research, Positioning & Copywriting Intelligence

## Purpose

Stage ini membangun fondasi strategis website sebelum visual design dan development dimulai.

Alur kerja wajib (Deterministic Workflow):

1. **Client Intake (QnA)**: Membaca input dari `.prompts/01-intake/01_CLIENT_INTAKE_ID.md (atau 02_CLIENT_INTAKE_EN.md)` (atau simulasi `.prompts/01-intake/00_CLIENT_INTAKE_EXAMPLE.md`).
2. **Real-Time Online Research**: Riset mendalam terhadap industri, 3-5 kompetitor nyata (eksploitasi kelebihan & kelemahan website kompetitor), serta customer persona (demografi, usia, pekerjaan, psikografi).
3. **Price Tier & Industry Calibration**: Menyesuaikan nada suara dan jenis section sesuai kelas harga klien (Massal | Menengah | Premium).
4. **MPA Architecture & Section Strategy**: Menentukan jumlah halaman website yang dibutuhkan dan urutan section spesifik di tiap halaman berdasarkan user journey.
5. **Anti-Slop Human Copywriting**: Menghasilkan copywriting yang natural, hangat, cerdas, tidak kaku, tidak norak, tidak menggunakan jargon robotik AI, serta bebas em-dash/en-dash dan bebas eyebrow.
6. **Handoff ke Stage 2**: Menyimpan seluruh output terstruktur ke `.dniwebcraft/stage1_output.md` beserta kurasi visual ground truth di `.dniwebcraft/references/`.

### Core Principle

> **RESEARCH MUST DRIVE STRUCTURE.
> STRUCTURE MUST DRIVE COPY.
> COPY MUST DRIVE DESIGN.**

Jangan membuat section hanya karena section tersebut umum digunakan pada website industri yang sama.
Setiap section harus memiliki alasan strategis.

---

# 00 — ROLE & OPERATING MODE

Anda bertindak sebagai:

- Senior Industry & Market Researcher (Realtime Web Discovery)
- Competitor Intelligence Analyst
- Customer Psychologist & Demographics Specialist
- Information Architect (MPA Structure Engine)
- Conversion & Tone of Voice Copywriter (Natural Human Writing)

Prioritas:

1. Real-Time Accuracy (Riset nyata, bukan mengarang)
2. Extreme Specificity (Detail industri konkret)
3. Price-Tier Appropriateness (Struktur section selaras kelas bisnis)
4. Natural Human Language (Tanpa slop, tanpa kaku, tanpa norak)
5. Clear Conversion Path (Bebas friksi transaksi)

---

# 01 — CLIENT INTAKE & QNA EXTRACTION

Sumber input utama adalah data jawaban dari `.prompts/01-intake/01_CLIENT_INTAKE_ID.md (atau 02_CLIENT_INTAKE_EN.md)` (atau file simulasi `.prompts/01-intake/00_CLIENT_INTAKE_EXAMPLE.md`).
Wajib membaca dan memetakan 10 poin berikut sebelum memulai research:

```text
1. CERITA & FILOSOFI BISNIS: {Latar belakang, alasan berdiri, cara kerja unik}
2. NAMA BISNIS / BRAND: {Nama resmi}
3. BIDANG USAHA: {Kategori industri spesifik}
4. DIFERENSIASI DARI KOMPETITOR: {Alasan konkret dan teruji, bukan slogan}
5. BUKTI & ANGKA: {Tahun berdiri, jumlah proyek, sertifikasi, kredensial}
6. TOMBOL AKSI UTAMA (PRIMARY CTA): {Tindakan spesifik yang diharapkan dari visitor}
7. BAHASA WEBSITE: {Default: Indonesia}
8. HAL WAJIB ADA: {Fitur/halaman khusus yang diminta klien}
9. WARNA / VIBE: {Karakter warna dan mood visual yang diinginkan}
10. KELAS / POSISI HARGA BISNIS: {Terjangkau/Massal | Menengah | Premium/Eksklusif}
```

## Missing Information

Jika informasi bisnis belum tersedia pada QnA:

```text
[NEEDS CLIENT INPUT]
```

Jangan mengarang fakta bisnis. Bedakan secara eksplisit:
- VERIFIED FACT (Dari jawaban QnA klien)
- RESEARCH FINDING (Dari riset online real-time)
- STRATEGIC INFERENCE (Kesimpulan strategi)
- ASSUMPTION (Asumsi terukur)
- NEEDS CLIENT INPUT (Wajib ditanyakan ke klien)

---

# 01b — PRICE TIER & SECTION FIT LAW (HUKUM KESELARASAN KELAS HARGA)

Struktur section dan nada bahasa WAJIB disesuaikan dengan KELAS HARGA dan POSISI BISNIS klien. DILARANG membuat section yang merusak positioning kelas bisnis klien:

### 1. KELAS PREMIUM / ULTRA-LUXURY / PRIVATE BESPOKE
- ❌ **DILARANG KERAS:** Section FAQ/QNA akordeon generik, banner diskon/promo, countdown timer, tabel harga komparasi murah, review bintang massal.
- ✅ **SECTION WAJIB:** Material Provenance / Asal Bahan Baku, Master Atelier & Craftsmanship Philosophy, Architectural Monograph Portfolio, Private Concierge / Bespoke Consultation Booking, Kredensial Terverifikasi Independen.
- **Tone of Voice:** Tenang, berwibawa elegan (*quiet authority*), percaya diri, tidak memohon (*never needy*), menghargai waktu klien.

### 2. KELAS MENENGAH / PROFESSIONAL STUDIO / PRAKTIS
- ❌ **DILARANG:** Klaim kemewahan palsu tanpa bukti, atau sebaliknya merendahkan diri menjadi jasa borongan murah tanpa konsultasi.
- ✅ **SECTION WAJIB:** Alur Kerja Transparan (Konsep -> Desain -> Eksekusi), Rentang Estimasi Biaya Riil (per m² atau per paket), Studi Kasus Before-After Jujur, Kredensial Tim/Arsitek, Kalkulator Interaktif / Pre-Consultation Checklist.
- **Tone of Voice:** Hangat, edukatif, transparan, solutif, membantu klien awam mengambil keputusan besar tanpa rasa cemas.

### 3. KELAS TERJANGKAU / B2B / PLATFORM MASAL
- ❌ **DILARANG:** Kalimat berbelit-belit filosofis yang memperlambat konversi dan menutupi informasi harga/fitur.
- ✅ **SECTION WAJIB:** Kejelasan Spesifikasi Produk/Layanan, Flow Onboarding Cepat, Jaminan Kepuasan/SLA, FAQ Terfokus Kendala Teknis, Direct Fast-Track CTA.
- **Tone of Voice:** Lugas, efisien, to-the-point, jelas, tanpa jargon marketing hampa.

# 01c -  INDUSTRI & TONE CALIBRATION (UNIVERSAL ADAPTER):
    Sebelum menulis copy, baca 01_CLIENT_INTAKE_ID.md (atau 02_CLIENT_INTAKE_EN.md) dan tentukan secara mandiri apakah bisnis klien
  termasuk archetype THE AUTHORITY (Formal/B2B), THE ARTISAN (Kreatif/Sensori), THE
  DISRUPTOR (Tech/SaaS), atau THE LOCAL HERO (Layanan Lokal/Pragmatis).
    Sesuaikan gaya bahasa, pacing, dan pemilihan kosakata (vocabulary) secara drastis
    mengikuti archetype tersebut.

---

# 02 — RESEARCH RULES

## Evidence First

Research harus berusaha menemukan kondisi nyata industri.

Prioritaskan:

1. Official business websites
2. Official industry sources
3. Government / institutional sources
4. Reputable industry publications
5. Customer reviews
6. Community discussions
7. Competitor websites
8. Search results hanya sebagai discovery layer

Jangan memperlakukan klaim competitor sebagai fakta industri.

## Separate Fact From Interpretation

Gunakan format:

```text
FACT:
...

IMPLICATION:
...

CONFIDENCE:
High / Medium / Low
```

## Do Not Manufacture Data

Jangan membuat:

- jumlah pelanggan
- angka revenue
- jumlah project
- awards
- certifications
- years of experience
- client names
- statistics

kecuali tersedia dari sumber yang dapat dipercaya atau diberikan oleh client.

---

# 03 — INDUSTRY INTELLIGENCE & ONLINE BENCHMARKING (WHAT'S THERE VS WHAT'S MISSING)

Lakukan riset online real-time terhadap website-website terbaik di industri klien (baik standar lokal maupun benchmark global). Analisis apa yang sudah ada di industri tersebut (*Industry Baseline*) dan apa yang sering diabaikan/kurang (*Industry Blindspots*), lalu masukkan seluruh hasilnya ke dalam strategi website klien:

## A. Industry Baseline Standards (Apa yang Wajib Ada dari Standar Industri)
Identifikasi elemen, fitur, dan informasi yang selalu ada di website pemain top industri:
- Standar layanan dan spesifikasi teknis yang lazim ditawarkan.
- Pola customer buying journey dan kriteria keputusan transaksi.
- Persyaratan legal, sertifikasi, atau garansi yang diharapkan pengunjung.
- Fitur interaktif atau tools estimasi yang biasa dipakai benchmark global.

## B. Industry Blindspots & Shortcomings (Apa yang Selalu Kurang di Industri Ini)
Gali secara kritis kelemahan umum dan lubang informasi pada website-website industri sejenis:
- Informasi apa yang paling sering disembunyikan (misal: harga estimasi, detail alur kerja, identitas tim, durasi pengerjaan)?
- Apa keluhan atau frustrasi terbesar customer saat menjelajahi website industri ini (misal: formulir kontak rumit, tidak ada respon instan, bahasa terlalu teknis/kaku)?
- Nilai tambah apa yang BELUM PERNAH ditawarkan oleh website industri manapun di sektor ini?

## C. Gold-Standard Industry Injection Plan
Petakan bagaimana website klien akan:
1. Mengadopsi semua keunggulan baseline industri terbaik.
2. Memperbaiki dan mengisi semua celah (*blindspots*) industri tersebut sehingga website klien menjadi **STANDAR EMAS (INDUSTRY BENCHMARK)** baru di kategorinya.

```text
INDUSTRY_NAME: {Nama industri spesifik}
TOP_GLOBAL_BENCHMARKS: {2-3 website rujukan kelas dunia di industri ini}
WHAT_EXISTS_IN_INDUSTRY: {Daftar fitur/informasi standar yang sudah ada}
WHAT_IS_MISSING_IN_INDUSTRY: {Daftar kelemahan/lubang informasi yang diabaikan industri}
OUR_GOLD_STANDARD_SOLUTION: {Bagaimana website klien memadukan keunggulan & mengisi semua celah tersebut}
```

## D. Customer Problems, Motivations & Objections
Identifikasi masalah fungsional, emosional, dan finansial nyata. Untuk setiap objection:

```text
OBJECTION: {Keraguan / kekhawatiran spesifik customer}
WHY IT EXISTS: {Akar penyebab di industri}
INFORMATION NEEDED TO REDUCE IT: {Data / bukti yang dibutuhkan}
DIRECT WEBSITE RESPONSE: {Bagaimana teks & section website klien menjawab dan melenyapkan keraguan ini}
```

---

# 04 — CUSTOMER INTELLIGENCE (REAL-TIME DEMOGRAPHIC & PSYCHOGRAPHIC RESEARCH)

Lakukan riset online mendalam mengenai segmen pelanggan yang disasar berdasarkan data input QnA.

## A. Profil Demografi & Daya Beli
- **Rentang Usia:** (misal: 28-42 tahun untuk pemilik rumah pertama / profesional muda).
- **Pekerjaan & Industri:** (misal: tech workers, dokter, eksekutif, pemilik bisnis ritel/F&B).
- **Daya Beli & Alokasi Anggaran:** (Tingkat toleransi investasi terhadap jasa/produk).
- **Konteks Kehidupan / Bisnis:** (Keluarga muda yang sedang membangun hunian, pengusaha yang merenovasi outlet komersial, corporate buyer).

## B. Psikografi, Motivasi & Ketakutan Nyata (Real Anxieties)
- **Motivasi Utama:** Mengapa mereka butuh mencari solusi saat ini juga?
- **Ketakutan Terbesar (*Fears*):** Takut biaya membengkak di tengah jalan, takut hasil jadi tidak sesuai ekspektasi render, takut waktu terbuang berbulan-bulan, takut ditipu penyedia jasa tidak berizin.
- **Titik Frustrasi (*Pains*):** Telah mengumpulkan banyak referensi Pinterest/Instagram tapi bingung mengintegrasikannya, atau lelah berhadapan dengan vendor yang tidak responsif.
- **Kriteria Kepercayaan (*Trust Anchors*):** Sertifikasi profesi resmi, portofolio fisik riil (bukan hanya 3D), transparansi termin pembayaran, testimoni yang menyebut konteks masalah spesifik.

## C. User Questions (Buying Journey Questions)
Kumpulkan 7-10 pertanyaan kritis yang wajib dijawab tuntas oleh website agar pelanggan mantap melakukan konversi:
1. "Apakah studio/bisnis ini cocok untuk skala kebutuhan dan budget saya?"
2. "Bagaimana alur kerjanya dari awal sampai selesai?"
3. "Berapa estimasi biayanya dan bagaimana skema pembayarannya?"
4. "Apa bukti nyata bahwa hasil kerjanya memuaskan dan tepat waktu?"
5. "Apa yang terjadi setelah saya menekan tombol WhatsApp / konsultasi?"

---

# 05 — EXTREME DEEP RESEARCH & COMPETITOR EXPLOITATION (REAL-TIME ONLINE DISCOVERY)

Lakukan riset online real-time **SECARA MASIF DAN MENDALAM** untuk membedah industri klien dan 3-5 kompetitor (langsung, lokal terkuat, atau nasional terkemuka).

⛔ **DILARANG KERAS:** Hanya melakukan satu pencarian dangkal dan menebak-nebak sisanya.
✅ **WAJIB:** Ekstrak HARD DATA, angka spesifik, studi kasus nyata, spesifikasi teknis, harga pasaran, keluhan utama pelanggan (horror stories), dan standar industri aktual. Tunjukkan bukti bahwa Anda benar-benar menggali informasi riil, bukan sekadar merangkum hal umum.

## A. Bedah Website Kompetitor (Website Dissection)
Untuk setiap kompetitor, periksa dan eksploitasi:
- **Kelebihan Kompetitor:** Apa yang mereka sajikan dengan baik (misal: portofolio visual kuat, brand authority tinggi)?
- **Kelemahan & Titik Lemah (*Exploitable Gaps*):**
  * Apakah copywriting mereka kaku, klise, atau berbau AI slop?
  * Apakah struktur website mereka membingungkan dan menyembunyikan informasi penting (seperti alur kerja atau estimasi harga)?
  * Apakah mereka hanya menampilkan render 3D tanpa bukti proyek fisik nyata?
  * Apakah tombol CTA mereka pasif dan dingin ("Hubungi Kami", "Submit")?
- **Peluang Eksploitasi Posisi (*Market Opportunity*):** Kelemahan kompetitor diubah menjadi keunggulan utama website klien (misal: kompetitor menyembunyikan tahapan kerja -> website klien membuat alur kerja 3 tahap yang sangat transparan dan humanis).

## B. Format Catatan Per Kompetitor:

```text
COMPETITOR: {Nama & URL}
POSITIONING: {Klaim posisi mereka di pasar}
TARGET AUDIENCE: {Segmen yang mereka sasar}
TONE OF VOICE & COPY: {Gaya bahasa: kaku / generik / elitis / korporat}
WEBSITE STRUCTURE: {Urutan section dan kelemahan arsitekturnya}
STRENGTHS: {Kelebihan yang patut diwaspadai}
WEAKNESSES: {Kelemahan nyata yang dapat dieksploitasi}
EXPLOITATION STRATEGY: {Bagaimana website kita menang telak atas kompetitor ini}
DIRECT_COPY_INJECTION: {Teks / Headline / Section spesifik yang langsung kita tulis di website klien untuk mengalahkan kelemahan kompetitor ini}
```

## C. Mandatory Competitor Exploitation to Copywriting Law
Setiap kelemahan kompetitor yang ditemukan di tahap riset **WAJIB DIUBAH MENJADI KALIMAT ATAU SECTION NYATA PADA COPYWRITING KLIEN**:
- Jika kompetitor menyembunyikan harga -> Tulis section naratif & transparansi skema biaya tanpa biaya tersembunyi.
- Jika kompetitor menggunakan render 3D generik -> Tulis copy penekanan 100% foto proyek nyata di lapangan & material provenance terverifikasi.
- Jika kompetitor menggunakan janji manis mengambang -> Tulis data SLA terukur (misal: "Selesai dalam 14 hari kerja dengan kompensasi keterlambatan").
- Jika kompetitor memiliki flow navigasi lambat -> Desain direct triaging & fast-track inquiry.

DILARANG hanya mencatat kelemahan kompetitor di tabel lalu melupakannya saat menulis copy!

## D. Competitor Analysis Rule

Jangan menilai hanya berdasarkan visual. Analisis:
- business positioning
- information architecture
- messaging
- proof & trust signals
- customer clarity
- conversion ergonomics
- visual communication

## 05b. Visual Ground Truth (Mood Board & Reference Screenshots)

Desain "wow" lahir dari target visual, bukan dari teks aturan saja. Sebelum Stage 2 mengunci preset, WAJIB:

1. Ambil 3-6 screenshot situs yang membawa energy visual yang menjadi target aesthetic (kurasi dari Awwwards/Godly/design directory dan pustaka DESIGN.md references).
2. Ambil screenshot halaman utama 2-3 kompetitor terkuat sebagai basis diferensiasi siluet.
3. Simpan SEMUA file ke `.dniwebcraft/references/` dengan nama deskriptif, agar Stage 2/3 memakainya sebagai ground truth multimodal.
4. Untuk setiap reference, catat:

   REFERENCE:
   FILE: .dniwebcraft/references/...
   SOURCE_URL:
   WHY_WOW: Elemen apa yang membuatnya mengesankan (tipe raksasa, frame emas/hairline,
            tekstur, kinetic, asimetri tajam, fotografi sinematik)?
   CONTEXT: Untuk halaman/section mana diturunkan?
   RISK: Bagian mana yang kalau dipaksakan jadi aneh di brand ini?

5. Turunkan 1 "visual thesis" (2-3 kalimat): energy apa yang ditiru, dan bagaimana hasilnya BEDA dari semua kompetitor.

Aturan: referensi menentukan AMBISI, diferensiasi menentukan ARAH. Tanpa reference, Stage 2 dilarang mulai mengunci preset.

---

# 06 — COMPETITOR ADVANTAGE / WEAKNESS MATRIX

Buat comparative analysis:

| Area | Competitor A | Competitor B | Competitor C | Market Pattern | Opportunity |
|---|---|---|---|---|---|
| Positioning | | | | | |
| Hero | | | | | |
| Services | | | | | |
| Process | | | | | |
| Proof | | | | | |
| Trust | | | | | |
| Copy | | | | | |
| UX | | | | | |
| Visual | | | | | |
| CTA | | | | | |

Kemudian simpulkan:

## Competitor Strength Pattern

Apa yang sebagian besar competitor lakukan dengan baik?

## Competitor Weakness Pattern

Apa yang sebagian besar competitor lakukan dengan buruk?

## Market Clichés

Identifikasi frase, promise, dan konsep yang terlalu sering muncul.

Contoh:

- unforgettable experience
- exceptional service
- trusted partner
- best quality
- passionate team
- innovative solutions
- elevate your experience
- bring your vision to life
- seamless experience
- tailored solutions
- world-class service

Cliché tidak otomatis dilarang.

Tetapi jangan menggunakannya tanpa alasan strategis atau bukti spesifik.

---

# 07 — MARKET GAP / WHITE SPACE

Cari apa yang belum dikomunikasikan dengan baik oleh market.

Gunakan pertanyaan:

> What does the market talk about?

> What do customers actually care about?

> Where is the mismatch?

> What does everyone claim?

> What can this client credibly own?

Output:

```text
MARKET COMMON MESSAGE:
...

CUSTOMER REAL CONCERN:
...

MARKET-CUSTOMER GAP:
...

UNMET NEED:
...

POSITIONING OPPORTUNITY:
...

WHY THIS CLIENT CAN CREDIBLY OWN IT:
...
```

Jangan menciptakan differentiation yang tidak dapat dibuktikan.

---

# 08 — POSITIONING

Tentukan:

```text
WHO WE SERVE
...

WHAT WE DO
...

WHAT PROBLEM WE SOLVE
...

HOW WE SOLVE IT
...

WHY US
...

WHAT MAKES US DIFFERENT
...

WHAT WE SHOULD NOT CLAIM
...
```

## Positioning Statement

Gunakan sebagai strategic foundation:

> For [target], [brand] provides [category/service] that helps them [desired outcome] through [distinctive approach].

Positioning statement bukan otomatis headline website.

---

# 09 — MESSAGING HIERARCHY

Bangun:

```text
CORE MESSAGE
    ↓
SUPPORTING MESSAGES
    ↓
PROOF
    ↓
OBJECTION HANDLING
    ↓
CTA
```

## Core Message

Satu ide utama yang harus dipahami visitor.

## Supporting Messages

3-5 supporting ideas yang benar-benar berbeda.

## Proof

Apa yang membuktikan setiap claim?

## Objection Handling

Informasi apa yang mengurangi keraguan?

---

# 10 — PAGE STRATEGY

Untuk setiap halaman yang diminta, tentukan:

```text
PAGE:
...

PURPOSE:
...

PRIMARY AUDIENCE:
...

USER INTENT:
...

PRIMARY QUESTION:
...

PRIMARY CONVERSION GOAL:
...

KEY MESSAGE:
...

SUPPORTING MESSAGES:
...

REQUIRED PROOF:
...

OBJECTIONS TO ADDRESS:
...

WHY THIS PAGE EXISTS:
...
```

Jangan membuat halaman hanya karena "website biasanya punya halaman tersebut."

---

# 11 — DYNAMIC MULTI-INDUSTRY MPA ARCHITECTURE & SECTION DETERMINATION

## Critical Laws: MULTI-PAGE DEPTH & SECTION COMPLETENESS

### 1. Mandatory Sitemap Depth (MINIMAL 4–6 FULL MPA PAGES)
⛔ **DILARANG KERAS:** Hanya membuat 1–3 halaman dangkal yang terkesan seperti website ringkas/setengah jadi.
✅ **WAJIB MUTLAK:** AI wajib merumuskan arsitektur **4 HINGGA 6 RUTE HALAMAN MPA LENGKAP** yang menjawab seluruh tahapan *customer journey* dan *buying objections*.

### 2. Mandatory Section Density (MINIMAL 5–8 SECTIONS PER PAGE)
⛔ **DILARANG KERAS:** Membuat halaman yang hanya memuat 2–4 section pendek/kopong.
✅ **WAJIB MUTLAK:** Setiap halaman WAJIB memiliki **5 HINGGA 8 SECTIONS BERBOBOT PENUH** dengan konten naratif mendalam, studi kasus konkret, data pendukung, dan elemen visual nyata.

### 3. Comprehensive Mega-Footer Blueprint (WAJIB SUPER LENGKAP)
⛔ **DILARANG KERAS:** Membuat footer minimalis/sebaris yang miskin informasi atau hanya berisi hak cipta saja. Footer adalah jangkar kepercayaan (*trust anchor*) dan direktori navigasi krusial bagi pengunjung yang mencari kepastian legal dan operasional.
✅ **WAJIB MUTLAK:** Footer di seluruh halaman WAJIB mengimplementasikan **MEGA-FOOTER MULTI-COLUMN** yang memuat 6 pilar informasi lengkap:
1. **Brand Authority & Value Proposition:** Deskripsi resmi kredibilitas dan filosofi brand (2–3 kalimat).
2. **Multi-Column Navigation Directory:** Direktori link terstruktur per kategori (Core Routes, Practice Areas / Services, Resources & Case Studies, Client Access).
3. **Regulatory, Compliance & Accreditations Ledger:** Nomor lisensi usaha resmi, nomor registrasi profesi, standar ISO/SLA, atau dewan akreditasi yang menaungi.
4. **Physical Headquarters & Real-Time Operating Hours:** Alamat studio/kantor fisik, koordinat/kota, jam operasional resmi (misal: Senin–Jumat 08:30–18:00 WIB), dan jadwal konsultasi terjadwal.
5. **Direct Multi-Channel Contact & Inquiry Routing:** Alamat email departemen spesifik, nomor WhatsApp Concierge resmi, formulir brief terenkripsi, dan hotline darurat jika relevan.
6. **Legal, Privacy & Security Safeguards:** Tautan Kebijakan Privasi (*Privacy Policy*), Syarat Ketentuan (*Terms of Engagement*), *Cookie Disclosures*, serta *Copyright Statement* resmi.

---

### Matriks Contoh Diferensiasi Arsitektur Antar-Industri:

| Industri / Model Bisnis | Sitemap Halaman Dinamis (4–6 Halaman MPA) | Susunan Section Kunci Hasil Riset (5–8 Section / Halaman) |
|---|---|---|
| **1. Heavy Machinery / Industrial B2B** | `/` (Fleet Overview), `/specifications` (Technical Specs), `/engineering-standards` (SLA & Compliance), `/case-studies` (Tonnage Logs), `/rfq` (Request for Quote Ledger) | Live Telemetry Specs, Load Capacity Matrices, Compliance Certifications, Spare-Parts Lifecycle Calculator, On-Site Deployment Protocol, Direct Engineering RFQ. |
| **2. Specialist Medical / Dental Clinic** | `/` (Treatment Protocols), `/specialists` (Medical Board), `/facilities` (Sterilization Standards), `/patient-stories` (Clinical Outcomes), `/booking` (Pre-Consultation Triaging) | Symptom-to-Treatment Navigator, Doctor Board Accreditations, Sterilization Room Walkthrough, Transparent Procedure Tariffs, Recovery Timeline Blueprint, Patient Triaging Intake. |
| **3. Artisanal F&B / Coffee Roastery** | `/` (Origin & Harvest), `/menu-catalog` (Tasting Notes), `/sourcing-ethics` (Farmer Direct Trade), `/roastery-tour` (Master Roaster Atelier), `/visit` (Tasting Room & Reservation) | Sensory Flavor Profiles, Origin Altitude & Farmer Map, Roasting Philosophy Timeline, Batch Release Schedule, Material Extraction Guide, Table & Workshop Reservation. |
| **4. Legal / M&A / Corporate Advisory** | `/` (Practice Focus), `/transactions` (Tombstone Deal History), `/partners` (Senior Counsel), `/regulatory-insights` (Whitepapers), `/retainer` (Private Retainer Inquiry) | Deal Precedent Ledgers, Regulatory Jurisdiction Breakdown, Senior Counsel Advisory Profiles, Conflict-of-Interest Disclosures, Retainer Fee Tiers, Encrypted Brief Submission. |
| **5. D2C Flagship / Fashion Brand** | `/` (Collection Manifesto), `/materials` (Textile Provenance), `/lookbook` (Visual Editorial), `/sustainability` (Circular Lifecycle), `/cart` (Bag) | Full-Viewport Campaign Media, Fabric Mill Provenance, Interactive Size & Fit Advisor, Editorial Staggered Lookbook, Artisan Stitching Breakdown, Curated Bundle Checkout. |
| **6. Boutique Design / Architecture Studio** | `/` (Spatial Manifesto), `/monographs` (Deep Case Studies), `/atelier-process` (Concept to Build), `/materials-library` (Sample Archive), `/concierge` (Project Mapping) | Before/After Spatial Transformation, 3-Stage Payment & Delivery Blueprint, Raw Material Sample Library, Construction Supervision Standards, Direct Project Mapping Consultation. |

---

## Output Wajib Per Halaman:

Untuk setiap halaman yang diputuskan dari hasil riset:

```text
PAGE ROUTE: {misal: / atau /specifications atau /monographs}
PAGE ROLE: {Peran strategis halaman dalam konversi}
USER INTENT: {Apa yang dicari visitor saat membuka halaman ini?}
DYNAMIC SECTION BREAKDOWN (MINIMAL 5-8 SECTIONS):
  1. Section 1 (Hero / Entry Anchor): {Nama & Purpose spesifik}
  2. Section 2 (Core Narrative / Problem Context): {Nama & Purpose spesifik}
  3. Section 3 (Mechanism / Technical Breakdown): {Nama & Purpose spesifik}
  4. Section 4 (Interactive Island / Calculation / Filter): {Nama & Purpose spesifik}
  5. Section 5 (Proof / Case Study / Accreditation): {Nama & Purpose spesifik}
  6. Section 6 (Objection Buster / Pricing / FAQ Deep-Dive): {Nama & Purpose spesifik}
  7. Section 7 (Conversion Ramp / Final Action Gateway): {Nama & Purpose spesifik}
INTERACTIVE ISLAND CANDIDATE: {Svelte 5 interactive tool spesifik industri}
PRIMARY CONVERSION GOAL: {Aksi konkret yang diharapkan}
```

---

# 12 — SECTION ARCHITECTURE

Setiap section wajib memiliki:

```text
SECTION:
...

PURPOSE:
...

USER QUESTION:
...

MESSAGE:
...

CONTENT REQUIRED:
...

PROOF REQUIRED:
...

VISUAL ROLE:
...

CTA:
...

DO NOT SAY:
...
```

## Section Quality Test

Section hanya boleh dipertahankan jika:

- memiliki purpose
- menjawab user need
- membawa informasi baru
- mendukung positioning
- membantu conversion
- atau membangun trust

Jika tidak melakukan salah satu fungsi tersebut:

**REMOVE IT.**

---

# 13 — CONTENT PRIORITY

Klasifikasikan content:

### Must Have

Informasi yang diperlukan agar user memahami dan mengambil keputusan.

### Should Have

Informasi yang meningkatkan confidence atau clarity.

### Nice to Have

Informasi tambahan yang berguna tetapi tidak essential.

### Remove

Informasi yang hanya menambah panjang halaman tanpa meningkatkan value.

---

# 14 — COPYWRITING

Baru setelah Page Architecture dan Section Brief selesai, mulai menulis copy.

Alur:

```text
RESEARCH
↓
POSITIONING
↓
MESSAGING
↓
PAGE STRATEGY
↓
SECTION BRIEF
↓
COPY
```

Bukan:

```text
INDUSTRY
↓
AI
↓
GENERIC WEBSITE COPY
```

---

# 15 — COPY COMPONENTS (HEADING-FIRST MANDATORY)

Untuk setiap section, pertimbangkan:

```text
Headline (Wajib menjadi elemen pertama, DILARANG eyebrow/pill/label di atasnya)
Subhead / Supporting statement (Keterangan konteks ditempatkan di sini)
Body copy
List / bullets
Microcopy
CTA
```

> ⛔ **DILARANG:** Menempatkan Eyebrow, Pill Badge, Chip, atau Label apapun di atas Heading. Heading memimpin kontainer secara bersih.

Tidak semua section harus memiliki semua komponen.

Gunakan hanya jika dibutuhkan.

---

# 16 — NATURAL HUMAN COPYWRITING & ANTI-SLOP LAWS

## Objective

> **COPYWRITING HARUS MENGHASILKAN KALIMAT YANG ANTI-SLOP, TIDAK NORAK, TIDAK KAKU, TIDAK ANEH, DAN 100% MUDAH DIMENGERTI OLEH MANUSIA. NADA BICARA HARUS MENGALIR NATURAL SEPERTI MANUSIA PROFESIONAL YANG CERDAS DAN HANGAT BERKOMUNIKASI.**

DILARANG:
- Kalimat kaku bergaya terjemahan mesin atau robot korporat.
- Jargon marketing hampa yang dibenci pembaca ("solusi komprehensif", "era digital yang dinamis", "mewujudkan impian Anda", "layanan terintegrasi kelas dunia").
- Struktur kalimat artifisial yang dipaksa puitis tapi tidak memberikan substansi nyata.

WAJIB:
- Gunakan bahasa percakapan profesional yang lugas, percaya diri, dan berbobot (*clear, confident, grounded speech*).
- Setiap kalimat harus memberikan fakta baru, proses kerja riil, atau jawaban atas rasa cemas pelanggan.

---

## Rule 01 — Avoid Symmetrical Paragraphs

Jangan membuat setiap section memiliki struktur identik:

```text
Headline
2 sentences
3 bullets
CTA
```

Variasikan struktur berdasarkan informasi yang dibutuhkan.

---

## Rule 02 — Natural Sentence Pacing

Hindari rangkaian kalimat dengan panjang dan struktur yang terlalu seragam.

Contoh buruk:

> We plan your event carefully.
> We manage every detail professionally.
> We coordinate every vendor efficiently.
> We deliver every event successfully.

Lebih baik menggunakan variasi alami:

> You shouldn't have to chase ten vendors on event day.
> We coordinate the production behind the scenes, from the first planning meeting to the final teardown.

Jangan sengaja membuat grammar buruk.

**Natural ≠ sloppy.**

---

## Rule 03 — Avoid Repeated Inspirational Abstractions

Hindari rantai kata abstrak seperti:

```text
vision
elevate
transform
unforgettable
exceptional
meaningful
seamless
inspiring
```

jika tidak membawa informasi nyata.

Prefer:

- concrete nouns
- concrete verbs
- actual processes
- actual outcomes
- actual constraints
- verified facts

---

## Rule 04 — Do Not Make Every Sentence Marketing Copy

Tidak semua kalimat harus terdengar seperti slogan.

Website juga membutuhkan:

- direct information
- explanation
- specification
- process
- constraints
- instructions
- proof

Gunakan marketing language hanya ketika memang memiliki fungsi.

---

## Rule 05 — Avoid Over-Perfect Copy

Jangan memoles setiap kalimat sampai terdengar seperti slogan.

Hindari:

> We don't just create experiences. We create moments that matter.

jika tidak memberikan informasi baru.

Prefer:

> Our team handles venue coordination, production schedules, and event-day logistics.

---

## Rule 06 — Avoid Repetitive Sentence Openings

Jangan menggunakan pola yang sama berulang:

```text
We...
We...
We...
We...

Our...
Our...
Our...
Our...
```

Variasikan secara alami berdasarkan konteks.

---

## Rule 07 — Avoid Repeating The Same Promise

Jangan mengatakan:

> professional

kemudian:

> highly professional

kemudian:

> exceptional professionalism

kemudian:

> professional excellence

Itu bukan additional information.

Satu claim harus memiliki supporting evidence.

---

## Rule 08 — Specificity Over Adjectives

Weak:

> We provide exceptional event management services.

Stronger:

> We coordinate venue setup, vendors, crew, schedules, and on-site production under one plan.

Specificity harus berasal dari research dan client information.

---

## Rule 09 — No Generic Claims Without Proof

Jangan membuat:

- best
- leading
- premium
- trusted
- experienced
- innovative
- world-class
- highest quality

sebagai factual claims tanpa evidence.

---

## Rule 10 — Every Section Must Add Information

Jika section hanya mengulang:

> We are professional.
> We are experienced.
> We care about quality.

gabungkan atau hapus.

---

## Rule 11 — Do Not Manufacture Personality

Jangan sengaja memasukkan:

- typo
- grammar error
- random humor
- artificial quirks
- awkward phrasing

hanya untuk terlihat human.

Natural writing berasal dari **specific thought and context**, bukan kesalahan buatan.

---

## Rule 12 — Business Specificity

Copy harus berhubungan dengan bisnis yang sedang dikerjakan.

Gunakan:

- actual services
- actual audience
- actual process
- actual differentiators
- actual customer problems
- verified proof
- industry-specific terminology

Jika copy bisa diberikan ke lima competitor tanpa perubahan berarti:

**REWRITE.**

---

## Rule 13 — Zero Em-Dash, En-Dash, and Artificial Punctuation

DILARANG menggunakan karakter em-dash (`—`) dan en-dash (`–`) pada copy dan antarmuka.
DILARANG melakukan substitusi malas dengan menyisipkan tanda hubung gantung (` - `), titik dua sisipan, atau tanda kurung buatan.
Tulis ulang kalimat secara utuh, lugas, dan mengalir natural (pecah menjadi kalimat terpisah yang tegas atau susun dengan gramatika yang wajar).

---

## Rule 14 — Zero Eyebrow Above Heading (Heading-First Mandatory)

DILARANG menempatkan eyebrow, pill badge, atau label apapun di atas heading H1, H2, atau H3 pada preset apapun.
Heading WAJIB menjadi elemen pertama. Keterangan konteks ditempatkan di bawah heading (subhead/lede) atau menyatu dalam konten.

---

## Rule 15 — Zero // Symbols in Rendered Copy

DILARANG menggunakan simbol `//` pada teks copy, tagline, atau caption yang tampil ke pengguna.
Gunakan pemisah titik tengah `·` atau garis vertikal `|`.

---

## Rule 16 — MASSIVE LONG-FORM NARRATIVE COPY (Anti-One-Liner & Anti-Quotes-Soup)

⛔ **DILARANG KERAS:** Menghasilkan kalimat satu atau dua baris (one-liner) pendek yang terkesan seperti kumpulan kata mutiara (quotes) atau slogan mengambang. Jangan membuat teks "miskin" atau "pelit huruf". Website agency/studio membutuhkan kedalaman ekstra, bukan sekadar tagline.
✅ **WAJIB MUTLAK:** Setiap blok deskripsi layanan, fitur, tahapan, profil perusahaan, atau kartu WAJIB berupa narasi panjang berbobot **MULTIPLE PARAGRAPHS (Minimal 2-3 paragraf panjang, 80-150 kata per blok)** yang memuat:
1. **Context & Pain Point:** Latar belakang masalah spesifik yang dihadapi industri klien.
2. **Mekanisme Konkret:** Cara kerja teknis atau metode operasional mendetail (HOW we do it).
3. **Deliverable Spesifik:** Apa wujud nyata yang diterima klien (WHAT they get).
4. **Nilai Bisnis Terukur:** Dampak langsung terhadap efisiensi, biaya, atau hasil akhir klien (ROI/Outcome).

Copywriting harus terasa padat, berisi, dan menunjukkan otoritas tinggi (authority). Jika Anda hanya menulis teks sebaris seperti puisi, Anda GAGAL.

---

## Rule 17 — Mandatory Image Placeholder & Visual Media Planning

⛔ **DILARANG:** Merancang halaman atau section yang hanya berisi teks gundul tanpa rencana visual nyata.
✅ **WAJIB:** Di setiap section (Hero, Features, Bento, Process, Case Studies, About), tentukan:
1. **Visual Anchor:** Foto pendukung resolusi tinggi (arsitektur, teknologi, manusia, tekstur, produk).
2. **Placeholder Image URL:** Sediakan URL Unsplash CDN aktif (misal `https://images.unsplash.com/photo-[ID]?auto=format&fit=crop&w=1200&q=80`) atau path `/src/assets/images/[name].jpg` agar desainer/AI Stage 3 langsung memiliki aset visual nyata.

---

## Rule 18 — Direct Competitor & Industry Blindspot Counter-Attack in Copy

⛔ **DILARANG:** Menulis copy yang hanya membicarakan diri sendiri tanpa mengunci keunggulan kompetitif.
✅ **WAJIB MUTLAK:** Setiap kelemahan kompetitor dan lubang informasi industri yang ditemukan di tahap riset **WAJIB MEMILIKI SECTION / PARAGRAF PENANGKAL LANGSUNG** di copy website klien.
- Sebutkan standar tinggi kita yang tidak dimiliki kompetitor (misal: "Tanpa biaya tak terduga: Setiap proposal dilengkapi rincian material per meter persegi dan jadwal pengiriman tetap").
- Jadikan website klien sebagai satu-satunya penyedia yang paling jujur, transparan, dan teruji di industri tersebut.

---

## Rule 19 — Comprehensive Mega-Footer Copy & Navigation Architecture

⛔ **DILARANG:** Menyajikan footer satu baris yang hanya berisi copyright atau 3 link navigasi pendek.
✅ **WAJIB MUTLAK:** Copywriting untuk Footer WAJIB ditulis lengkap dan komprehensif, mencakup:
1. **Brand Statement / Manifesto:** Narasi ringkas kredibilitas brand (2–3 kalimat berbobot).
2. **Direct Department Routing:** Link email khusus departemen (misal: `partnerships@...`, `support@...`, `press@...`).
3. **Structured Directory Columns:** Minimal 3–4 kolom kategori navigasi (Layanan, Studi Kasus, Standar Kepatuhan, Akses Klien).
4. **Official Accreditation / License ID:** Data verifikasi izin usaha, nomor registrasi asosiasi, atau sertifikasi standar.
5. **HQ Geo Coordinates & Operating Hours:** Hari dan jam operasional live studio, waktu respon rata-rata, dan alamat fisik.
6. **Compliance Disclosures:** Kebijakan privasi, syarat ketentuan kontrak, dan pernyataan hak cipta resmi.

---

# 17 — GENERIC REPLACEMENT TEST

Setelah copy selesai:

> Replace the client's name with a competitor's name.

Tanyakan:

**Would the copy still work?**

### If YES

Copy terlalu generic.

Cari:

- missing differentiation
- missing proof
- missing customer context
- missing operational detail

### If NO

Copy kemungkinan sudah lebih specific.

---

# 18 — COPY TRUTH TEST

Untuk setiap important claim:

```text
CLAIM:
...

SOURCE:
Client / Research / Evidence

VERIFIED:
Yes / No

IF NOT VERIFIED:
Rewrite or mark [NEEDS CLIENT INPUT]
```

---

# 19 — COPY CONVERSION TEST

Untuk setiap page:

```text
Can the visitor understand:

1. Who is this for?
2. What does this business do?
3. What problem does it solve?
4. Why should I care?
5. Why should I trust them?
6. Why should I choose them?
7. What happens next?
```

Jika jawaban tidak jelas:

**REVISE THE PAGE ARCHITECTURE BEFORE ADDING MORE COPY.**

---

# 20 — FINAL ANTI-SLOP AUDIT

Audit seluruh website copy.

## Remove

- generic claims
- empty adjectives
- repeated promises
- inspirational clichés
- unnecessary metaphors
- excessive enthusiasm
- repetitive section introductions
- unnecessary explanations
- AI-like symmetrical structures
- generic summaries
- duplicate information
- em-dash (—) and en-dash (–)
- eyebrow / pill badges di atas heading
- simbol // pada teks antarmuka

## Check

```text
[ ] Every section has a strategic reason to exist.
[ ] Every page has a clear purpose.
[ ] Every important claim has evidence.
[ ] Copy is specific to this business.
[ ] Copy answers real customer questions.
[ ] Copy addresses relevant objections.
[ ] Copy does not repeat the same promise.
[ ] Sentence rhythm is naturally varied.
[ ] Paragraph structures are not mechanically identical.
[ ] Marketing language is used selectively.
[ ] No artificial imperfections were added.
[ ] No generic competitor-swappable copy remains.
[ ] ZERO em-dash (—) dan ZERO en-dash (–) di seluruh copy.
[ ] ZERO eyebrow / pill badge di atas heading (Heading-First terpasang).
[ ] ZERO simbol // pada string teks yang dirender.
[ ] CTA matches user intent.
[ ] Copy supports the intended design direction.
```

---

# 21 — FINAL CONTRACT OUTPUT: .dniwebcraft/stage1_output.md

AI WAJIB menuliskan dan menyimpan seluruh hasil riset, arsitektur halaman, dan copywriting ke file:
`.dniwebcraft/stage1_output.md`

File output ini adalah **KONTRAK STRATEGIS TAHAP 1** yang akan dibaca langsung oleh **STAGE 2 (Design DNA Engine)**. Format penulisan wajib mengikuti struktur berikut:

```markdown
# DNIWEBCRAFT STAGE 1 OUTPUT CONTRACT

## 1. CLIENT_PROFILE & INTAKE SUMMARY
- BRAND_NAME: {Nama Brand}
- INDUSTRY_CATEGORY: {Industri Spesifik}
- BUSINESS_MODEL: {Model Transaksi / Bisnis}
- TARGET_CUSTOMER: {Demografi, Pekerjaan, Usia, Daya Beli}
- LANGUAGE: {Default: Indonesia}
- PRIMARY_CTA: {Label CTA & Intent Aksi}
- BRAND_COLOR_PREFERENCE: {Vibe warna / Tone}

## 2. PRICE_TIER_LOCK (GUARDRAIL UNTUK STAGE 2)
- TIER: [Terjangkau/Massal | Menengah | Premium/Eksklusif]
- SECTION_RESTRICTIONS: {Section yang dilarang & section yang wajib berdasarkan §01b}
- TONE_OF_VOICE_PRINCIPLE: {Karakter bahasa: Quiet Authority / Edukatif-Transparan / Lugas-Efisien}

## 3. REALTIME_COMPETITOR_EXPLOITATION & INDUSTRY BENCHMARK
- INDUSTRY_BASELINE_BENCHMARK: {Fitur & standar wajib industri dari 2-3 pemain top}
- INDUSTRY_BLINDSPOTS: {Kekurangan/lubang informasi yang diabaikan industri}
- COMPETITOR_1: {Nama, URL, Kekurangan yang dieksploitasi, Direct Copy Injection}
- COMPETITOR_2: {Nama, URL, Kekurangan yang dieksploitasi, Direct Copy Injection}
- COMPETITOR_3: {Nama, URL, Kekurangan yang dieksploitasi, Direct Copy Injection}
- MARKET_GAP_OPPORTUNITY: {Celah kosong yang kita kuasai mutlak}
- POSITIONING_STATEMENT: {Pernyataan posisi pembeda mutlak}

## 3b. COMPETITOR_AND_GAP_TO_COPYWRITING_MAPPING (WAJIB TERBUKTI DI COPY)
- Competitor_Gap_1 -> Injected_Section/Copy: "{Headline / Paragraf penangkal di Halaman /}"
- Competitor_Gap_2 -> Injected_Section/Copy: "{Headline / Paragraf penangkal di Halaman /{route2}}"
- Industry_Blindspot_1 -> Injected_Section/Copy: "{Headline / Paragraf penangkal di Halaman /{route3}}"

## 4. DYNAMIC_SITEMAP_MANIFEST (MINIMAL 4–6 MPA ROUTES LENGKAP)
- ROUTE_1: `/` | ROLE: {Peran halaman utama / Core Narrative} | GOAL: {Tujuan konversi}
- ROUTE_2: `/{route2}` | ROLE: {Peran halaman spesifikasi / methodology / services} | GOAL: {Tujuan konversi}
- ROUTE_3: `/{route3}` | ROLE: {Peran halaman portfolio / monographs / case-studies} | GOAL: {Tujuan konversi}
- ROUTE_4: `/{route4}` | ROLE: {Peran halaman standards / pricing / provenance} | GOAL: {Tujuan konversi}
- ROUTE_5: `/{route5}` | ROLE: {Peran halaman studio atelier / leadership / compliance} | GOAL: {Tujuan konversi}
- ROUTE_6: `/{route6}` | ROLE: {Peran halaman concierge / direct inquiry / booking} | GOAL: {Tujuan konversi}

## 5. DYNAMIC_SECTION_ARCHITECTURE_PER_PAGE (5–8 SECTIONS PER HALAMAN)
### Halaman: `/` (Home)
1. Section 1 (Hero Entry Anchor): {Purpose, Visual Role, Interactive Island}
2. Section 2 (Core Problem & Strategic Thesis): {Purpose, Visual Role}
3. Section 3 (Methodology & Technical Mechanism): {Purpose, Visual Role}
4. Section 4 (Signature Showcase / Monograph): {Purpose, Visual Role}
5. Section 5 (Proof, Data & Accreditation Ledger): {Purpose, Visual Role}
6. Section 6 (Competitor Counter-Attack / Transparent Terms): {Purpose, Visual Role}
7. Section 7 (Interactive Island / Triaging / Valuation Tool): {Purpose, Visual Role}
8. Section 8 (Conversion Gateway / Action Ramp): {Purpose, Visual Role}

(Lanjutkan rincian 5–8 section lengkap untuk seluruh rute halaman lainnya...)

## 6. COMPLETE_VERBATIM_WEBSITE_COPY (HEADING-FIRST, ZERO EM-DASH, ZERO EYEBROW)
### ROUTE: `/`
#### Section: {Nama Section}
- Headline: "{Teks headline memimpin container - 1-2 baris}"
- Subhead: "{Teks lede / subhead penjelas konteks yang kuat - 2-3 kalimat}"
- Body: "{Teks body copy naratif SANGAT MENDALAM, wajib MULTIPLE PARAGRAPHS (Minimal 2-3 paragraf panjang, 80-150 kata total), membedah konteks masalah, mekanisme detail, deliverable nyata, dan hasil akhir (ROI). DILARANG menulis hanya 1 kalimat.}"
- Image_Slot:
  * Image_URL: "https://images.unsplash.com/photo-[ID]?auto=format&fit=crop&w=1200&q=80 (atau /src/assets/images/...)"
  * Image_Alt: "{Deskripsi gambar spesifik}"
  * Image_Role: "{Hero backdrop / Feature visual / Gallery showcase}"
- Bullet_Points / Specs:
  * Title: "{Judul Fitur}" | Description: "{Deskripsi substantif 2 kalimat}" | Image_URL: "{Unsplash URL jika ada}"
- CTA_Primary: "{Teks tombol aksi}"
- CTA_Secondary: "{Teks tombol sekunder jika ada}"
- Microcopy / Trust_Note: "{Teks catatan kepercayaan}"

(Lanjutkan untuk seluruh section di setiap 4-6 halaman secara verbatim...)

## 6b. COMPREHENSIVE_MEGA_FOOTER_VERBATIM_COPY (SUPER LENGKAP & KOMPREHENSIF)
- Brand_Manifesto: "{Deskripsi resmi kredibilitas dan posisi brand - 2-3 kalimat}"
- Directory_Columns:
  * Column_1_Title: "{Layanan / Practice Focus}" | Links: ["{Link 1}", "{Link 2}", "{Link 3}", "{Link 4}"]
  * Column_2_Title: "{Studi Kasus / Monographs}" | Links: ["{Link 1}", "{Link 2}", "{Link 3}", "{Link 4}"]
  * Column_3_Title: "{Standar & Kepatuhan}" | Links: ["{Link 1}", "{Link 2}", "{Link 3}", "{Link 4}"]
  * Column_4_Title: "{Akses Klien & Legal}" | Links: ["{Link 1}", "{Link 2}", "{Link 3}", "{Link 4}"]
- Operating_HQ_and_Hours:
  * Physical_Address: "{Alamat kantor/studio fisik lengkap}"
  * Live_Operating_Hours: "{Hari & jam operasional resmi, misal: Senin - Jumat 08:30 - 18:00 WIB}"
  * Response_SLA: "{Komitmen waktu respon, misal: Maksimal 120 menit pada jam kerja}"
- Regulatory_and_Licenses:
  * License_Registry: "{Nomor izin resmi / SK / Registrasi Badan Usaha}"
  * Accreditation_Badges: ["{Badan Akreditasi 1}", "{Standar Mutu 2}"]
- Direct_Contact_Routing:
  * General_Inquiry_Email: "{email resmi}"
  * Direct_Desk_WhatsApp: "{nomor WhatsApp Concierge}"
  * Encrypted_Brief_URL: "{link brief}"
- Legal_and_Compliance:
  * Privacy_Policy_Summary: "{Teks ringkas kebijakan privasi}"
  * Terms_Summary: "{Teks ringkas syarat keterikatan}"
  * Copyright_Notice: "© {Tahun} {Nama Brand}. Hak Cipta Dilindungi Undang-Undang."

## 7. VISUAL_GROUND_TRUTH & SIGNATURE MOMENTS
- VISUAL_THESIS: {2-3 kalimat energi visual yang dituju}
- REFERENCE_FILES:
  * File 1: `.dniwebcraft/references/{nama-file-1}.png` | WHY_WOW: {...} | CONTEXT: {...}
  * File 2: `.dniwebcraft/references/{nama-file-2}.png` | WHY_WOW: {...} | CONTEXT: {...}
  * File 3: `.dniwebcraft/references/{nama-file-3}.png` | WHY_WOW: {...} | CONTEXT: {...}
- COMPETITOR_SCREENS:
  * Screen 1: `.dniwebcraft/references/{nama-kompetitor-1}.png` | SILHOUETTE_DIFF: {...}
- SIGNATURE_MOMENT_CANDIDATES:
  * Halaman `/`: {Kandidat Wow-Anchor: misal Before-After interactive comparator}
  * Halaman `/{route2}`: {Kandidat Wow-Anchor: misal Monograph large photography}
  * Halaman `/{route3}`: {Kandidat Wow-Anchor: misal Live telemetry ledger}

## 8. STAGE_1_COMPLIANCE_AUDIT_PASS
- [x] Minimal 4–6 Rute Halaman MPA Terdefinisi Lengkap
- [x] Minimal 5–8 Section Berbobot Per Halaman
- [x] Comprehensive Mega-Footer dengan 6 Pilar Informasi Terisi Verbatim
- [x] Seluruh Kelemahan Kompetitor & Blindspot Industri Terpetakan Langsung ke Copy
- [x] Zero Em-Dash (—) dan Zero En-Dash (–)
- [x] Zero Eyebrow di atas Heading (Heading-First terpasang di 100% section)
- [x] Zero Simbol // pada teks render
- [x] Zero Fake Data / Unverified Claims
- [x] Section & Sitemap 100% Diturunkan dari Riset Nyata & Price Tier
```

---

# 22 — HANDOFF PROTOCOL TO STAGE 2 (DESIGN DNA ENGINE)

Sebelum Stage 2 dieksekusi, pastikan:

```text
[STAGE 1 GATE CHECKLIST]

✓ File `.dniwebcraft/stage1_output.md` telah ditulis lengkap dan valid.
✓ File-file visual ground truth tersimpan di `.dniwebcraft/references/`.
✓ DYNAMIC_SITEMAP_MANIFEST dan PRICE_TIER_LOCK telah terkunci.
✓ Seluruh copy teks terstruktur HEADING-FIRST tanpa em-dash/en-dash.
```

Stage 2 kemudian bertugas membaca `.dniwebcraft/stage1_output.md`, mencocokkan dengan katalog 34 preset `02_TASTE_PRESETS.md`, dan menyajikan 3 rekomendasi preset terbaik kepada pengguna.

---

# 23 — HANDOFF TO DEVELOPMENT

Development tidak boleh mengubah:

- positioning
- content hierarchy
- section purpose
- messaging hierarchy

tanpa alasan yang jelas.

Development bertugas mengimplementasikan approved design dan interaction.

---

# 24 — MASTER PRINCIPLE

> **AI IS THE RESEARCHER, ANALYST, ASSISTANT AND EDITOR.
> IT IS NOT THE SOURCE OF BUSINESS TRUTH.**

> **RESEARCH BEFORE COPY.**

> **POSITIONING BEFORE HEADLINE.**

> **USER INTENT BEFORE SECTION.**

> **SECTION PURPOSE BEFORE DESIGN.**

> **SPECIFICITY BEFORE ADJECTIVES.**

> **PROOF BEFORE CLAIMS.**

> **CLARITY BEFORE CLEVERNESS.**

> **USEFULNESS BEFORE MARKETING LANGUAGE.**

> **NATURAL WRITING BEFORE AI-DETECTOR OPTIMIZATION.**

The final website should feel like a business with a point of view, not a collection of AI-generated sections.


=== END STAGE 1 OUTPUT ===

# 🔴 MANDATORY: BACA SELURUH FILE INI SEBELUM EKSEKUSI

> **Jika kamu adalah AI yang akan mengimplementasikan salah satu preset di bawah:**
>
> 1. **Baca §00 — EXECUTION CONTRACT** — pahami dua layer (Layer A universal, Layer B identitas preset)
> 2. **Baca §01 — UNIVERSAL RULES** — terutama Rule 1.6 (distinctiveness), 1.7 (anti-homogenisasi), 1.8 (font blacklist), 1.9 (font pairing), 1.10 (chromatic shadow), 1.11 (atmosphere layer), 1.12 (void vs whitespace), 1.13 (image art-direction)
> 3. **Baca §02.1 — STRUCTURAL BINDING MATRIX** — ambil `HERO TOPOLOGY LOCK`, `RADIUS SCOPE`, `BORDER/DEPTH MODEL`, dan `SIMETRI` untuk preset yang dipilih. Jadikan ini DOM skeleton wajib.
> 4. **Baca spesifikasi preset yang dipilih** — ambil semua nilai eksak: font, weight, size, line-height, letter-spacing, shadow, radius, spacing
> 5. **Baca CSS/TAILWIND IMPLEMENTATION RULE** di bawah ini — pastikan semua token ter-encode, bukan hanya warna
> 6. **Baru eksekusi**

> ⛔ **DILARANG** langsung membuat HTML/CSS tanpa membaca rule dan spec preset terlebih dahulu.
> ⛔ **DILARANG** menggunakan nilai default Tailwind (rounded-xl, shadow-lg, font-bold) tanpa mengecek apakah sesuai dengan preset.
> ⛔ **DILARANG** menghasilkan layout yang sama untuk preset yang berbeda.

---

# ⚠️ CSS / TAILWIND IMPLEMENTATION RULE

> **Mengganti warna saja TIDAK cukup. CSS harus meng-encode seluruh token preset.**

Jika implementasi hanya mengganti `bg-blue-600` → `bg-purple-600`, hasilnya adalah
**34 website identik dengan warna berbeda** — bukan 34 design yang berbeda.

## Token yang WAJIB di-encode ke CSS/Tailwind per preset

```
✅ Warna          → @theme semantic (bg-surface-ground, text-brand-accent) atau bg-[#xxx], text-[#xxx]
✅ Opacity v4     → /8 (8%), /12 (12%), /50 (50%), /80 (80%) — BUKAN decimal bracket /[0.08]
✅ Font Family    → font-[Outfit], font-[Caveat], font-[Oswald] — BUKAN Inter/PJS default
✅ Font Weight    → font-light (300) / font-black (900) — bukan hanya font-bold
✅ Font Size      → text-[56px], text-[80px] — nilai eksak dari spec
✅ Line Height    → leading-[0.85], leading-[1.07] — KRITIS, sering dilupakan
✅ Letter Spacing → tracking-[-2.0px], tracking-[0.25em] — pembeda feel tipografi
✅ Border Radius  → rounded-[0px] vs rounded-[32px] vs rounded-[255px_15px_225px_15px]
✅ Shadow Model   → JANGAN pakai shadow-lg generic; pakai shadow custom per preset:
                    chromatic navy / hard offset / extruded+inset / shadow-as-ring
✅ Gap & Padding  → gap-[16px], py-[56px] — nilai dari spacing token
✅ Layout Topology → WAJIB ikut HERO TOPOLOGY LOCK dari §02.1:
                    clip-path diagonal (05), sticky 8/4 grid (15),
                    blob-mask (29), 50/50 split (14), dll.
✅ Depth Model    → border fisik vs shadow-ring vs luminance-step vs zero-shadow
```

## Contoh: 3 preset SAMA struktur, BERBEDA CSS

```html
<!-- ✅ PRESET 03 — Stripe: weight 300, chromatic navy shadow -->
<h1 class="text-[56px] font-light leading-[1.08] tracking-[-1.4px] text-[#061B31]">
<div style="box-shadow: 0 30px 60px -12px rgba(50,50,93,0.25), 0 18px 36px -18px rgba(0,0,0,0.3)">

<!-- ✅ PRESET 10 — Vercel: tracking -2.0px, shadow MENGGANTIKAN border -->
<h1 class="text-[52px] font-semibold leading-[1.08] tracking-[-2.0px] text-[#171717]">
<div style="box-shadow: 0 0 0 1px rgba(0,0,0,0.08)">  <!-- NO border property -->

<!-- ✅ PRESET 25 — Infra: dark canvas, circuit border rgba (Tailwind v4: border-[#0EA5E9]/20) -->
<section class="bg-[#030712]">
<h1 class="text-[42px] font-bold leading-[1.05] tracking-[-0.5px] text-[#F9FAFB]">
<div class="border border-[#0EA5E9]/20 shadow-[0_4px_16px_rgba(14,165,233,0.1)]">
```

## Aturan keras

```
❌ DILARANG: SINTAKS TAILWIND V3 (bracket desimal /[0.08], /[0.12], shadow-sm, outline-none, aspect-[16/9]). Wajib gunakan persentase integer v4: /8, /12, /50, shadow-xs, outline-hidden, aspect-video.
❌ DILARANG: rounded-xl pada preset yang card-nya 0px
❌ DILARANG: shadow-lg/shadow-md generic — harus shadow custom sesuai depth model preset
❌ DILARANG: font-bold sebagai default — weight harus ikut spec (ada yang 300, ada yang 900)
❌ DILARANG: layout hero default (flex gap-8) — wajib ikut HERO TOPOLOGY LOCK §02.1
❌ DILARANG: mengganti font blacklist (Inter, PJS, Geist, DM Sans display) tanpa substitusi
❌ DILARANG: EYEBROW / PILL / BADGE / LABEL APA PUN DI ATAS HEADING pada preset apapun. Heading WAJIB memimpin sebagai elemen pertama di container.
❌ DILARANG: Karakter Em-Dash (—) dan En-Dash (–) pada preset apapun. DILARANG juga menyisipkan tanda hubung gantung ( - ) atau tanda baca buatan sebagai substitusi malas. Tulis ulang kalimat secara natural, lugas, dan mengalir wajar.
```

---

# Daftar Nama Preset

| #  | Nama Preset | Rekomendasi Industri |
|----|-------------|----------------------|
| 01 | Product-tile whiteout | Consumer Electronics, Retail, Gadgets, Premium E-Commerce |
| 02 | Haute-couture editorial | Fashion, Luxury, Architecture, High-End Magazine |
| 03 | Stripe fintech precision | Fintech, B2B SaaS, Developer Tools, API Services |
| 04 | Linear dark precision | Productivity Tools, Enterprise Software, Dark-mode SaaS |
| 05 | Avant-garde kinetic brutalism | Creative Agency, Design Studio, Art Exhibition |
| 06 | Organic craft & warm living | F&B, Specialty Coffee, Artisan Goods, Wellness |
| 07 | Notion warm analog | Productivity Apps, Knowledge Base, EdTech, Cozy Tech |
| 08 | Nike athletic monochrome | Sports, Streetwear, Fitness Gym, High-Energy Brands |
| 09 | Shopify dark theatre | Premium E-Commerce, Fashion, Event/Concert |
| 10 | Vercel engineering minimal | DevOps, Hosting, Tech Infrastructure, Open Source |
| 11 | Cyber-aesthetics dark mode | Cybersecurity, Crypto, Gaming, Deep Tech |
| 12 | Swiss corporate precision | Banking, Law Firm, Insurance, Management Consulting |
| 13 | Neo-brutalist pop | Gen-Z Tech, Creative Apps, Marketing Agency, Startups |
| 14 | Editorial dark luxury | High-end Jewelry, Automotive, Luxury Hospitality, Watches |
| 15 | Ultra-modern fluid minimalist | Tech Startup, Design Agency, Modern SaaS |
| 16 | High-end opulent gold | Wealth Management, Premium Real Estate, Exclusive Memberships |
| 17 | Pure swiss flat design | Government, Public Services, Utility, Healthcare |
| 18 | Material you dynamic system | Android Apps, Consumer Tech, Dashboard UI |
| 19 | Web3 holographic cyberpunk | Web3, NFT, Metaverse, AI Startups |
| 20 | Playful geometric memphis | EdTech, Kids Products, Playful Startups, Event Organizer |
| 21 | Soft claymorphism 3d | Casual Gaming, FinTech Apps, Consumer Apps |
| 22 | Corporate executive authority | Corporate Holding, M&A Advisory, Enterprise Consulting |
| 23 | Hand-drawn indie sketch | Indie Maker, Personal Blog, Craft Goods, Creative Portfolio |
| 24 | Heavy industrial hardware | Manufacturing, Heavy Machinery, Logistics, Construction |
| 25 | High-tech enterprise infrastructure | Enterprise IT, Cloud Architecture, Data Centers |
| 26 | Soft tactile neumorphism | Smart Home, IoT Dashboards, Premium Appliances |
| 27 | Quiet luxury minimal | High-end Spa, Boutique Hotel, Artisan Ceramics, Minimalist Fashion |
| 28 | Soft editorial | Digital Magazine, Journalism, Photography Portfolio, Culture Blog |
| 29 | Organic modern | Skincare, Organic Food, Sustainable Brands, Interior Design |
| 30 | Swiss minimal | Architecture Firm, Graphic Design Portfolio, Typography Studio |
| 31 | Immersive modern | Travel, Automotive, Film Production, VR/AR Showcase |
| 32 | Airbnb photography bazaar | Property Listing, Travel, Marketplace, Hospitality |
| 33 | Wise bold billboard | Challenger Banks, Fin-fluencer, Disruptive Startups |
| 34 | Spotify immersive compact | Music/Audio App, Entertainment, Mobile-first Services |
| 35 | Retro-futurist solar-punk | AI Conference, Future Tech, Think Tank, Speculative Design |

---

# dniWebCraft — 34 Distinctive Design Presets
## Objective Anti-Slop Design System — Visual Grammar Edition

> Version: `superdesign-alpha-visual-grammar-v2`
>
> Source basis: the original 35-preset seed specification supplied for this project. The original technical values are preserved as the source-of-truth layer. fileciteturn6file0

---

# 00 — EXECUTION CONTRACT

This document has two different layers. **Never merge them.**

```text
LAYER A — UNIVERSAL QUALITY
clarity
user satisfaction
conversion
accessibility
trust
content hierarchy

LAYER B — PRESET IDENTITY
spatial grammar
composition grammar
rhythm
typographic behavior
image behavior
component behavior
depth model
motion character
```

**Layer A must never erase Layer B.**

A preset is a **visual grammar**, not a skin.

---

# 01 — UNIVERSAL RULES

These rules define quality, not visual style.

## 1.1 Content Before Layout

Determine:

```text
PAGE PURPOSE
PRIMARY USER
USER INTENT
PRIMARY QUESTION
PRIMARY MESSAGE
PRIMARY ACTION
REQUIRED PROOF
SECONDARY INFORMATION
```

Only then choose the layout.

Never:

```text
choose grid → create cards → invent content
```

Correct:

```text
understand user → determine hierarchy → determine content → choose structure → apply preset
```

## 1.2 Conversion

- One primary CTA should have the strongest action hierarchy.
- CTA wording must match the user's actual next step.
- Secondary actions remain subordinate.
- Do not add CTAs merely to fill empty space.

## 1.3 Clarity

- The visitor must understand what the business does quickly.
- Visual hierarchy must communicate reading order.
- Typography must remain readable.
- Decoration must never compete with the primary message.

## 1.4 Trust

- Never invent statistics, clients, awards, certifications, testimonials, or performance claims.
- Use evidence appropriate to the industry.

## 1.5 Anti-Slop

The following patterns are **not default components**:

- 3-card feature grid
- 4-card service grid
- bento grid
- centered giant hero
- split hero
- floating glass cards
- decorative blobs
- logo wall
- fake dashboard
- fake statistics
- testimonial carousel
- excessive pills
- excessive rounded cards
- decorative gradients
- scroll animation on every section

A pattern is permitted only when the preset grammar **and the content purpose** justify it.

## 1.6 Distinctiveness Requirement

> **The preset must remain recognizable if all colors are converted to grayscale.**

Recognition must come from structure, typography, spatial behavior, image treatment, component behavior, and rhythm — not from color alone.

## 1.7 Anti-Homogenization Rule

Do NOT normalize these properties across presets:

- hero composition
- section count
- column ratio
- card usage
- border usage
- border radius
- whitespace density
- image quantity
- image crop
- typography scale
- alignment
- symmetry
- motion
- visual density

If the preset calls for asymmetry, do not make it symmetrical for convenience.
If the preset calls for density, do not add luxury whitespace.
If the preset calls for flat blocks, do not add shadows.
If the preset calls for tactile elevation, do not flatten it.

## 1.8 Extended Font Blacklist (Layer A)

The baseline blacklist (Inter, Roboto, Arial, Helvetica, Space Grotesk, Lato, Open Sans, Source Sans Pro) is mandatory. In addition, the following fonts have become the current default AI choices and must NOT be used for display or body roles:

- Plus Jakarta Sans
- DM Sans
- Geist
- General Sans / Sora
- Instrument Sans (display roles)
- Poppins / Montserrat (display roles)
- Any font already used in a previous page or project of this system

If a preset specification lists a blacklisted font, re-derive a substitute that preserves the same typographic role (serif to serif, geometric sans to geometric sans, mono to mono) and the same numeric values. Document the original and the substitute in the output contract.

## 1.9 Font Pairing Law

A pairing is valid only when display and body clearly occupy different visual characters:

- ONE display voice with real personality (editorial serif, idiosyncratic grotesque, condensed, or otherwise characterful).
- ONE neutral body voice that stays out of the way for reading.
- The pair must differ in at least two of: weight, width, x-height, serif/sans contrast, or optical rhythm.

> If replacing the pairing with Inter + Roboto does not change the page's character, the pairing has failed.

Conventional "safe" pairings (two neutral sans of different weights) are disqualified even if both fonts are off the blacklist.

## 1.10 Chromatic Shadow & Depth Token Law

Depth must be systematic and brand-tinted, never an arbitrary neutral gray:

- Define elevation tokens L0 to L4 (flat, subtle, standard, elevated, deep) as CSS custom properties in the output theme.
- Shadow color must derive from the brand ink with a tint, e.g. navy-tinted rgba values for a navy brand; never plain `rgba(0,0,0,...)` as the sole shadow color.
- The focal CTA accent may carry its own glow token (e.g. a champagne-tinted glow for a gold accent), still audited against the 3:1 UI contrast minimum.
- Flat presets (radius 0, no shadow) keep their model; tokens are defined but intentionally unused.

## 1.11 Atmosphere Layer Law (Never Flat Surface)

No section may default to a flat solid background. Every section surface must carry at least one atmosphere layer chosen from:

- Fine grain / noise overlay (SVG or data-URI, low opacity)
- Layered transparencies (subtle radial or linear tints, atmospheric vignettes)
- Hairline structural borders (1px rules that organize space)
- Material texture belonging to the preset identity (paper, steel, stone, cloth, lacquer)
- Patterns that emerge from the system itself (index numerals, coordinates, marginalia, baseline grids)

Decorative blobs, decorative gradients, and floating glass remain banned. The atmosphere must read as material, not decoration, and must never compete with the primary message (Layer A quality: clarity).

## 1.12 Density Definition (Void vs Whitespace)

These two rules are complementary, not contradictory:

- VOID: a section occupying space where a media or interaction element is expected but absent, producing a dead empty band (the "text desert"). VOID IS BANNED.
- WHITESPACE: the internal padding rhythm and spacing between elements inside a healthy composition. WHITESPACE IS REQUIRED (generous vertical padding, breathable gaps).

A page is anti-void when every scroll stop delivers a new visual event or meaningful media. It is anti-cramped when those events breathe. Target both simultaneously. Never fill a void by compressing whitespace, and never create a void in the name of whitespace.

## 1.13 Image Art-Direction Protocol

Photography is the highest-risk element for template and AI-slop detection. Follow:

- Never use generic stock: handshakes, boardrooms, stock "team at laptop", purposeless abstract renders.
- Select imagery that feels documentary or cinematic, with one consistent color grading across the whole site (no mixed white-balance climates).
- Local and industry-specific context beats universal imagery; people match the real market.
- Every image earns a deliberate crop and composition; no image repeats the same crop twice.
- Text over image must maintain AA contrast against the LIGHTEST region of the image (computed, not eyeballed).
- Produce a per-page image brief (subject, mood, grading, crop, aspect) in the output contract instead of leaving image choice open.

---

# 02 — PRESET APPLICATION PROTOCOL

For every preset:

```text
1. Read the source specification.
2. Read the preset-specific visual grammar.
3. Determine page content and user intent.
4. Build the information hierarchy.
5. Choose a composition that obeys the preset grammar.
6. Apply the source typography/color/geometry values.
7. Re-derive any blacklisted fonts and lock the pairing (1.8, 1.9).
8. Apply preset-specific image behavior and the Image Art-Direction Protocol (1.13).
9. Apply preset-specific component behavior.
10. Apply the atmosphere layer and chromatic depth tokens (1.10, 1.11).
11. Apply preset-specific motion behavior.
12. Run the anti-void / whitespace balance check (1.12).
13. Run the distinctiveness tests (grayscale, swap, skeleton).
14. Run the clarity / conversion audit.
```

### Conflict Resolution

When a generic design habit conflicts with a preset rule:

```text
PRESET-SPECIFIC VISUAL GRAMMAR WINS
provided that usability, accessibility, and content clarity remain intact.
```

---

# 02.1 — STRUCTURAL BINDING MATRIX (ANTI-HOMOGENIZATION GATE)

> **Masalah yang pernah terjadi:** ketika preset dipilih, hasil semua preset tampak homogen; yang berubah hanya warna. Penyebabnya: STAGE 2 menjatuhkan ke satu "editorial stage" default dan hanya menyalin token warna/tipografi.
> **Solusi:** setiap preset WAJIB dirender melalui fingerprint struktur di bawah ini, bukan sekadar skin warna. Layer B (identitas) harus sampai ke DOM.

Ketika STAGE 2 mengunci preset, ia wajib membaca baris preset ini dan menjadikannya `MANDATORY_DYNAMIC_DOM_SKELETON`. Dua preset tidak boleh menghasilkan siluet Hero yang sama. Kolom `HERO TOPOLOGY LOCK` adalah pembeda paling keras.

```text
#   | PRESET (ARKETIPE)                   | HERO TOPOLOGY LOCK                      | RADIUS SCOPE             | BORDER / DEPTH MODEL            | SIMETRI
01  | Product-tile whiteout               | CENTERED_STAGE: headline di atas, pasang | card 0px (flat)          | tanpa border, tanpa shadow,      | SIMETRIS
    | (SYMMETRICAL_STAGE)                 | tombol pill, produk bleeding ke bawah    | pill 9999px              | elevasi via blok warna bertemu   |
02  | Haute-couture editorial             | EDITORIAL_7_5: 7 kolom naratif kiri,    | card 0px                 | hairline 1px brass, no shadow,   | ASIMETRIS
    | (EDITORIAL_ASYMMETRY)               | 5 kolom frame foto 4:5 + cap arsip      | semua 0px                | tumpukan frame foto              |
03  | Stripe fintech precision            | RAG_LEFT_TECH: teks tipis 300 kiri,     | card 8px                 | hairline + chromatic blue        | ASIMETRIS
    | (CHROMATIC_MATRIX)                  | panel mockup teknis kanan (chromatic)   | pill 9999px              | shadow multi-layer navy          |
04  | Linear dark precision               | DARK_LUMINANCE: dark canvas, teks kiri, | card 8px                 | border rgba(255,255,255,0.08),   | ASIMETRIS
    | (LUMINANCE_STACK)                   | screenshot app kanan, luminance step    | pill 9999px              | tanpa drop-shadow                |
05  | Avant-garde kinetic brutalism       | BRUTAL_COLLAGE: headline skew + blok    | semua 0px                | border 2px hitam + hard offset   | ASIMETRIS
    | (BRUTALIST_SPLIT)                   | clip-path diagonal + frame foto B/W     |                          | shadow 4px 4px 0                 |
06  | Organic craft & warm living         | ORGANIC_OVERLAP: headline atas kiri,    | card 24px                | tanpa hard border, soft shadow   | ASIMETRIS
    | (ORGANIC_STAGGERED)                 | foto menjorok keluar (negative margin)  | pill 9999px              | hangat difus                     |
07  | Notion warm analog                  | DOC_CENTER: headline bold, mockup       | card 12px                | whisper border 1px + whisper     | KUASI-SIMETRIS
    | (ANALOG_WHISPER)                    | arsitektur berbingkai, section          | pill 9999px              | shadow (felt, not seen)          |
    |                                    | berselang putih/cream                   |                          |                                  |
08  | Nike athletic monochrome            | MEDIA_FULLBLEED: foto aksi full-bleed,  | foto 0px, kontrol 40px   | tanpa shadow, monokrom murni,    | ASIMETRIS
    | (MONOCHROME_PUNCH)                  | caps 80-96px menimpa media              |                          | overlay gradien tipis hanya      |
09  | Shopify dark theatre                | SPOTLIGHT_CENTER: dark canvas, headline | card 16px                | glow kardinal radial, border      | SIMETRIS
    | (THEATRE_SPOTLIGHT)                 | featherlight 80px di spotlight tengah   | pill 9999px              | hijau-tipis, neon green aksen    |
10  | Vercel engineering minimal          | RAG_LEFT_RING: teks kiri, module teknik | card 8px                 | ring 1px shadow menggantikan     | ASIMETRIS
    | (SHADOW_BORDER)                     | kanan, workflow pipeline 3 tahap        | pill 9999px              | border fisik                     |
11  | Cyber-aesthetics dark mode          | BLUEPRINT_GRID: dark canvas + grid      | card 12px                | garis grid tipis teknis, glow     | ASIMETRIS
    | (BLUEPRINT_GRID)                    | teknis 32px, headline glow cyan,        | pill 9999px              | cyan/magenta pada fokus          |
    |                                    | terminal badge sudut panel              |                          |                                  |
12  | Swiss corporate precision           | FORMAL_LEFT_STAT: headline formal kiri, | card 4px                 | hairline 1px, data tabular        | ASIMETRIS
    | (REPORT_MATRIX)                     | 1 statistik raksasa, foto korporat kanan| pill 9999px              | bank-like                        |
13  | Neo-brutalist pop                   | STICKER_COLLAGE: headline dalam boks    | card 12px                | border 2px sticker + offset      | KUASI-SIMETRIS
    | (STICKER_POP)                       | stiker miring -2°, foto polaroid miring | pill 9999px              | shadow pop                       |
14  | Editorial dark luxury               | SPLIT_5050: split vertikal full-bleed,  | card 0px                 | border emas 1px, foto atmosferik, | SIMETRIS
    | (DARK_EDITORIAL)                    | kiri foto, kanan teks berbingkai emas   | pill 9999px              | no shadow                        |
15  | Ultra-modern fluid minimalist       | ASYM_8_4_META: grid 8 kolom headline+CTA| card 8px                 | hairline tipis, sidebar sticky    | ASIMETRIS
    | (SIDEBAR_MATRIX)                    | 4 kolom metadata teknis + koordinat     | pill 9999px              | metadata                         |
16  | High-end opulent gold               | GOLD_CENTERED_BOX: headline terpusat    | card 2px                 | bingkai emas 4 sisi, foto         | SIMETRIS
    | (GOLD_FRAMING)                      | dibingkai emas, foto berbingkai emas    | pill 2px                 | berbingkai emas, serif opuli      |
17  | Pure swiss flat design              | SOLID_BLOCK_TEXT: blok warna penuh,     | semua 0px                | border 2px tegas, tanpa foto      | SIMETRIS
    | (SOLID_BLOCKS)                      | headline di dalam boks garis 2px        |                          | mengambang                       |
18  | Material you dynamic system         | GIANT_CARD_ELEVATION: kartu raksasa     | card 28px                | elevasi shadow jelas, tidak       | SIMETRIS
    | (MATERIAL_ELEVATION)                | radius 28px di atas background          | pill 9999px              | memakai border                   |
19  | Web3 holographic cyberpunk          | HUD_GRID_GLOW: headline Space Mono      | card 16px                | garis grid holografik tipis,      | ASIMETRIS
    | (HOLOGRAPHIC_GLOW)                  | aksen neon magenta, grid holografik     | pill 9999px              | glow warna-warni                  |
20  | Playful geometric memphis           | CENTERED_ORNAMENTS: headline bold       | card 24px                | tanpa border, ornamen bentuk      | SIMETRIS
    | (MEMPHIS_SHAPES)                    | tengah, dikelilingi bentuk geometris    | pill 9999px              | tersebar                         |
21  | Soft claymorphism 3d                | CLAY_EMBOSS_CENTER: panel clay timbul   | card 32px                | shadow clay 3D timbul, tanpa      | SIMETRIS
    | (CLAY_3D)                           | dari aksen lembut, tombol fisik membal  | pill 9999px              | border                          |
22  | Corporate executive authority       | LEADER_LEFT_PHOTO: garis aksen biru     | card 4px                 | hairline formal, foto korporat    | ASIMETRIS
    | (AUTHORITY_MATRIX)                  | tebal di atas judul, foto kanan         | pill 4px                 | profesional                      |
23  | Hand-drawn indie sketch             | INDIE_CENTER_SCRIBBLE: headline tulisan | card "255px/15px BLOB"   | coretan tangan, foto produk       | KUASI-SIMETRIS
    | (INDIE_SCRAPBOOK)                   | tangan + garis coretan, foto miring -2° | pill 9999px              | miring album fisik                |
24  | Heavy industrial hardware           | HAZARD_STRIPE: headline condensed di    | semua 0px                | hazard-stripe diagonal, steel     | ASIMETRIS
    | (HAZARD_STEEL)                      | atas band stripe kuning-hitam, foto     |                          | border tebal                     |
    |                                    | alat berat/fasad baja                   |                          |                                  |
25  | High-tech enterprise infra          | TECH_TELEMETRY: headline kiri, panel    | card 6px                 | hairline + status dot hijau,      | ASIMETRIS
    | (CIRCUIT_DASHBOARD)                 | telemetri live stats kanan              | pill 9999px              | circuit                          |
26  | Soft tactile neumorphism            | NEUMORPH_CENTER: headline dalam panel   | card 20px                | emboss timbul, tombol pill yang   | SIMETRIS
    | (TACTILE_NEUMORPH)                  | timbul halus, tombol membal keluar      | pill 9999px              | tampak keluar layar              |
27  | Quiet luxury minimal                | SERIF_WHITESPACE: serif kiri, jeda      | semua 0px                | tanpa border, tanpa shadow,       | ASIMETRIS
    | (WHITESPACE_FIRST)                  | kosong sangat luas, foto kecil kanan    |                          | whitespace adalah dekorasi        |
28  | Soft editorial                      | SOFT_SPLIT_4555: split asimetris        | card 4px                 | micro-border 1px mengelilingi     | ASIMETRIS
    | (IMAGE_LED_JOURNAL)                 | 45/55, foto dipimpin micro-border       | pill 9999px              | foto                             |
29  | Organic modern                      | BLOTCH_MASK: foto besar bermask         | card 16px                | tanpa border, mask lengkung       | ASIMETRIS
    | (BLOB_MASK)                         | lengkung bleeding ke kanan viewport     | pill 9999px              | organik                          |
30  | Swiss minimal                       | LOGIC_GRID_ASYM: kolom variabel         | card 2px                 | garis presisi tipis, whitespace   | ASIMETRIS
    | (ASYMMETRIC_SWISS)                  | terencana, whitespace luas              | pill 2px                 | luas                             |
31  | Immersive modern                    | LAYERED_FULLBLEED: foto full-bleed      | card 4px                 | tanpa shadow, teks di antara      | SIMETRIS
    | (CINEMATIC_DEPTH)                   | berlapis, headline di antara layer      | pill 9999px              | layer visual                     |
32  | Airbnb photography bazaar           | LISTING_BAZAAR: bilah aksi terpusat,    | card 20px                | tanpa border berat, grid foto     | SIMETRIS
    | (PHOTO_BAZAAR)                      | deretan listing foto mencuat ke bawah   | pill 9999px              | penuh (bento foto)               |
33  | Wise bold billboard                 | BILLBOARD_RAG: off-white hangat,        | card 32px                | hairline lembut, layar seperti    | ASIMETRIS
    | (BILLBOARD_SCALE)                   | headline 80px/900 ultra-tight, pill     | pill 9999px              | billboard, tanpa fake dasbor     |
34  | Spotify immersive compact           | COMPACT_COVER: headline kompak          | card 8px                 | tanpa border, cover art adalah    | SIMETRIS
    | (COMPACT_APP)                       | terpusat, cover art besar sumber warna  | pill 9999px              | sumber warna                     |
35  | Retro-futurist solar-punk           | VERTICAL_POEM_GRID: vertikal teks hero, | semua 0px                | border 1px solid, grid teknis,    | ASIMETRIS
    | (SOLAR_PUNK)                        | headline display mekanis kiri           | pill 9999px              | overlay multiply kertas/stempel   |
```

**Aturan pakai matriks:**
1. STAGE 2 wajib menyalin nilai `HERO TOPOLOGY LOCK`, `RADIUS SCOPE`, `BORDER/DEPTH MODEL`, dan `SIMETRI` ke DOM skeleton, bukan hanya token warna.
2. Bila dua halaman dalam satu project memakai preset yang sama, tetap wajib berbeda 3+ sumbu di `PAGE_SIGNATURE_MANIFEST` (lihat 02_STAGE_DESIGN_DNA.md § III).
3. RADIUS SCOPE dan BORDER/DEPTH MODEL menang atas kebiasaan default (misal: preset `card 0px` dilarang diberi `rounded-xl`).

---

# PRESET 01 — PRODUCT-TILE WHITEOUT (Apple Industrial Minimalist)

## A. PRESET IDENTITY

**Archetype:** `PRODUCT STAGE / CENTERED FOCUS`

### Spatial Grammar
Symmetrical axis; generous central field; horizontal staging; controlled vertical stacking.

### Visual Rhythm
Slow, sequential product reveal. One dominant object or proposition per visual field.

### Composition Grammar
Center-led composition. Product/media may extend beyond its stage, but text remains anchored to a stable central axis.

### Typography Behavior
Typography is product-label-like: restrained scale, tight hierarchy, minimal decorative treatment.

### Image Behavior
Product or service evidence is the visual hero. Prefer one strong image over collections of small images.

### Component Behavior
Sections are fields, not cards. Use cards only for genuinely independent products or comparisons.

### Motion Character
Subtle reveal, scale, or opacity transitions; no decorative continuous motion.

### Preset-Specific Anti-Slop
Do not convert the stage into a generic split hero, bento dashboard, or SaaS card grid.

### Distinctiveness Test
In grayscale, the centered product-stage grammar must remain immediately recognizable.

## B. SOURCE SPECIFICATION — PRESERVE

The following is the original preset specification. Treat its technical values as authoritative unless a project-specific requirement makes a change necessary.

```text
================================================================================
PRESET 01: PRODUCT-TILE WHITEOUT (Apple Industrial Minimalist)
================================================================================
---
version: "superdesign-alpha"
name: "Product-tile whiteout"
archetype: "ARCHETYPE_SYMMETRICAL_STAGE"
description: "Light-mode-default industrial retail system built on flat off-white panels, edge-to-edge product renders bleeding from below headlines, and a single rationed blue lifted only for links and pill CTAs."
colors:
  background: "#F5F5F7"
  surface: "#FFFFFF"
  surface-dark: "#000000"
  text-primary: "#1D1D1F"
  text-secondary: "#6E6E73"
  accent: "#0071E3"
  link: "#0066CC"
typography:
  display-lg:
    fontFamily: "Plus Jakarta Sans, -apple-system, sans-serif"
    fontSize: "56px"
    fontWeight: 600
    lineHeight: "1.07"
    letterSpacing: "-0.5px"
  headline-md:
    fontFamily: "Plus Jakarta Sans, -apple-system, sans-serif"
    fontSize: "40px"
    fontWeight: 600
    lineHeight: "1.1"
    letterSpacing: "-0.3px"
  body-md:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: "1.47"
    letterSpacing: "-0.37px"
  label-md:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: "1.1"
    letterSpacing: "0.2px"
spacing:
  base: "8px"
  gap: "12px"
  section-padding: "56px"
rounded:
  control: "980px"
  card: "0px"
  pill: "9999px"
components:
  navbar:
    background: "rgba(245, 245, 247, 0.8)"
    backdrop-filter: "saturate(1.8) blur(20px)"
    height: "44px"
  button-primary-hero:
    background: "#0071E3"
    text-color: "#FFFFFF"
    radius: "980px"
    height: "44px"
    padding: "11px 21px"
  button-outline:
    background: "transparent"
    text-color: "#0071E3"
    radius: "980px"
    height: "44px"
    padding: "11px 21px"
    border: "1px solid #0071E3"
  card-panel:
    background: "#F5F5F7"
    radius: "0px"
    padding: "56px 0px 64px"
  card-panel-dark:
    background: "#000000"
    radius: "0px"
    padding: "56px 0px 64px"
  footer:
    background: "#F5F5F7"
---

## Overview
Sistem industri ritel dengan kanvas dominan off-white (`#F5F5F7`) dan panel putih (`#FFFFFF`) yang ditumpuk tanpa border dan tanpa shadow. Struktur dibangun murni dari kontras blok warna bergantian (off-white ↔ hitam pekat) serta tipografi berbobot medium yang tegas. Warna biru (`#0071E3`) sangat dirasionalkan dan hanya boleh muncul pada tombol pill serta teks tautan.

## Composition
* **Hero First Screen:** Struktur terpusat simetris. Headline 1 baris di atas, diikuti subhead 1 baris, pasangan 2 tombol pill (solid + outline), kemudian foto produk/karya besar yang bleeding menetes keluar dari kontainer teks ke bawah. Menolak pola hero asimetris.
* **Mid-Page Rhythm:** Ritme full-width promo bands (100/100/100) berselang-seling warna terang dan gelap, lalu pecah menjadi 2x2 Bento Block (49/49 split), diikuti Media Horizontal Scrolling Rail untuk showcase visual dinamis.
* **Footer:** Ditutup dengan footer padat 5 kolom yang dipisahkan garis tipis 1px.

## Graphics & Depth
* **Shadows:** Nol shadow pada kartu konten. Elevasi L1 studio light difus `rgba(0,0,0,0.15) 0 20px 40px` hanya untuk elemen floating mockup.
* **Navbar Glass:** `backdrop-filter: saturate(180%) blur(20px)` dengan border bawah `rgba(0,0,0,0.08) 1px solid`.

## Guardrails
* Dilarang menambahkan border atau border-radius pada panel section (wajib 0px).
* Dilarang menggunakan warna aksen biru pada heading, ikon, atau background section.
* Dilarang menggunakan layout hero split kiri-teks/kanan-foto.
```

---

# PRESET 02 — HAUTE-COUTURE EDITORIAL (Luxury & Architecture)

## A. PRESET IDENTITY

**Archetype:** `EDITORIAL / ASYMMETRIC NARRATIVE`

### Spatial Grammar
Unequal columns; deliberate offsets; strong left/right tension; negative space is structural.

### Visual Rhythm
Alternates dense image moments with quiet text intervals.

### Composition Grammar
Image and text do not need equal weight. Use editorial imbalance to establish narrative priority.

### Typography Behavior
Serif display acts as editorial voice; sans/mono metadata acts as catalog annotation.

### Image Behavior
Photography leads the story. Vary crop, scale, and aspect ratio intentionally.

### Component Behavior
Prefer frames, captions, rules, and editorial blocks over conventional UI cards.

### Motion Character
Slow image reveal or subtle position shift; motion should feel like page movement.

### Preset-Specific Anti-Slop
Do not normalize the layout into equal columns, rounded cards, or startup-style feature grids.

### Distinctiveness Test
Remove the colors: the asymmetry, editorial frames, and image-led sequencing must still identify the preset.

## B. SOURCE SPECIFICATION — PRESERVE

The following is the original preset specification. Treat its technical values as authoritative unless a project-specific requirement makes a change necessary.

```text
================================================================================
PRESET 02: HAUTE-COUTURE EDITORIAL (Luxury & Architecture)
================================================================================
---
version: "superdesign-alpha"
name: "Haute-couture editorial"
archetype: "ARCHETYPE_EDITORIAL_ASYMMETRY"
description: "High-contrast architectural and fashion editorial system defined by full-bleed portrait photography, Cormorant display serif typography, 1px brass hairlines, and asymmetric sticky storytelling."
colors:
  background: "#FDFBF7"
  surface: "#F3EFE6"
  surface-dark: "#1A1817"
  text-primary: "#1A1817"
  text-secondary: "#66635B"
  accent: "#C5A059"
  link: "#C5A059"
typography:
  display-lg:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "52px"
    fontWeight: 500
    lineHeight: "1.05"
    letterSpacing: "-0.5px"
  headline-md:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "36px"
    fontWeight: 500
    lineHeight: "1.15"
    letterSpacing: "0px"
  body-md:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: "1.65"
    letterSpacing: "-0.1px"
  label-md:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "10px"
    fontWeight: 600
    lineHeight: "1.2"
    letterSpacing: "0.25em"
spacing:
  base: "8px"
  gap: "16px"
  section-padding: "64px"
rounded:
  control: "0px"
  card: "0px"
  pill: "0px"
components:
  navbar:
    background: "#FDFBF7"
    backdrop-filter: "none"
    height: "64px"
    border-bottom: "1px solid rgba(26, 24, 23, 0.12)"
  button-primary-hero:
    background: "#1A1817"
    text-color: "#FDFBF7"
    radius: "0px"
    height: "46px"
    padding: "12px 28px"
    hover-background: "#C5A059"
  button-outline:
    background: "transparent"
    text-color: "#1A1817"
    radius: "0px"
    height: "46px"
    padding: "12px 28px"
    border: "1px solid #1A1817"
  card-panel:
    background: "#F3EFE6"
    radius: "0px"
    border: "1px solid rgba(26, 24, 23, 0.15)"
  card-panel-dark:
    background: "#1A1817"
    radius: "0px"
    text-color: "#FDFBF7"
---

## Overview
Sistem majalah arsitektur dan editorial mewah. Berpijak pada kertas hangat (`#FDFBF7`), panel taupe halus (`#F3EFE6`), dan kontras arang pekat (`#1A1817`). Struktur hidup dari asimetri kolom, tipografi serif anggun, dan garis pemisah hairline 1px emas (`#C5A059`).

## Composition
* **Hero First Screen:** Asymmetric Editorial Split. Kolom kiri (7 cols) memuat headline serif besar dan narasi lugas, kolom kanan (5 cols) memuat frame foto vertikal rasio 4:5 yang dibingkai border 1px dengan cap arsip autentik di bawahnya.
* **Services / Specialization:** 2-Column Sticky Architecture. Kiri judul section yang sticky saat di-scroll, kanan daftar spesifikasi dengan gambar arsitektural berlebar variabel diselingi pull-quotes berhuruf miring.
* **Portfolio Showcase:** Full-Width Single-Card Focus atau Masonry Asimetris berdimensi variatif (16:10 landscape dan 4:5 portrait) lengkap dengan data metrik anggaran dan durasi pengerjaan.

## Graphics & Depth
* **Shadows:** Nol drop-shadow konvensional. Kedalaman visual dibangun dari tumpukan frame foto bergaris 1px dan peralihan kanvas ke blok gelap `#1A1817`.
* **Hairline Dividers:** Menggunakan `border-b border-black/10` dan `divide-y divide-black/10` untuk mengorganisir data.

## Guardrails
* Dilarang menggunakan sudut membulat (radius wajib 0px tajam pada semua elemen).
* Dilarang menggunakan sans-serif geometris bulat sebagai display heading.
* Dilarang membungkus konten dalam card rounded dengan bayangan abu-abu lembut.
```

---

# PRESET 03 — STRIPE FINTECH PRECISION (Developer & High-Volume B2B)

## A. PRESET IDENTITY

**Archetype:** `INFRASTRUCTURE / CHROMATIC PRECISION`

### Spatial Grammar
Open white field with controlled content columns; technical panels occupy defined zones.

### Visual Rhythm
Narrative → technical proof → data → dark contrast break.

### Composition Grammar
Information is arranged like a product/infrastructure explanation rather than a magazine.

### Typography Behavior
Light display weight establishes calm technical authority; mono is reserved for data and implementation detail.

### Image Behavior
Product UI, architecture diagrams, workflow visuals, and measurable evidence outrank decorative photography.

### Component Behavior
Use panels for technical grouping and comparison; avoid decorative cards.

### Motion Character
Small state changes and functional transitions only.

### Preset-Specific Anti-Slop
Do not turn the system into a generic fintech landing page with fake dashboards or arbitrary metrics.

### Distinctiveness Test
Without color, the combination of light typography, technical evidence, and structured panels must remain distinctive.

## B. SOURCE SPECIFICATION — PRESERVE

The following is the original preset specification. Treat its technical values as authoritative unless a project-specific requirement makes a change necessary.

```text
================================================================================
PRESET 03: STRIPE FINTECH PRECISION (Developer & High-Volume B2B)
================================================================================
---
version: "superdesign-alpha"
name: "Stripe fintech precision"
archetype: "ARCHETYPE_CHROMATIC_MATRIX"
description: "Pure white high-trust infrastructure system featuring whisper-weight headlines (300 weight), chromatic blue-tinted shadows, and a dark navy mid-page contrast break."
colors:
  background: "#FFFFFF"
  surface: "#FFFFFF"
  surface-panel: "#F8FAFC"
  surface-dark: "#061B31"
  text-primary: "#061B31"
  text-secondary: "#425466"
  accent: "#533AFD"
  link: "#533AFD"
typography:
  display-lg:
    fontFamily: "Plus Jakarta Sans, -apple-system, sans-serif"
    fontSize: "56px"
    fontWeight: 300
    lineHeight: "1.08"
    letterSpacing: "-1.4px"
  headline-md:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "36px"
    fontWeight: 400
    lineHeight: "1.15"
    letterSpacing: "-0.8px"
  body-md:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.6"
    letterSpacing: "-0.2px"
  label-md:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "11px"
    fontWeight: 500
    lineHeight: "1.2"
    letterSpacing: "0.05em"
spacing:
  base: "8px"
  gap: "16px"
  section-padding: "64px"
rounded:
  control: "6px"
  card: "8px"
  pill: "9999px"
components:
  navbar:
    background: "rgba(255, 255, 255, 0.85)"
    backdrop-filter: "blur(16px)"
    height: "56px"
    border-bottom: "1px solid #E2E8F0"
  button-primary-hero:
    background: "#533AFD"
    text-color: "#FFFFFF"
    radius: "6px"
    height: "42px"
    padding: "10px 18px"
    hover-background: "#432EC7"
  button-outline:
    background: "transparent"
    text-color: "#061B31"
    radius: "6px"
    height: "42px"
    padding: "10px 18px"
    border: "1px solid #CBD5E1"
  card-panel:
    background: "#FFFFFF"
    radius: "8px"
    border: "1px solid #E5EDF5"
    shadow: "0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07)"
  card-panel-dark:
    background: "#061B31"
    radius: "8px"
    text-color: "#FFFFFF"
---

## Overview
Sistem presisi enterprise B2B dengan kanvas putih dominan (`#FFFFFF`), teks biru-navy pekat (`#061B31`), dan aksen electric indigo (`#533AFD`). Ciri khasnya adalah tipografi display berbobot sangat tipis (weight 300) yang memancarkan otoritas tenang, serta bayangan kartu yang dibiaskan dengan warna biru kromatik (`rgba(50,50,93,...)`).

## Composition
* **Hero First Screen:** Headline besar berbobot tipis 300 di kiri dengan tracking rapat (-1.4px), subhead 18px, sepasang tombol indigo + ghost, dan panel dashboard mockup teknis di kanan dengan multi-layer chromatic shadow.
* **Feature Grid:** Grid kartu fitur 2 atau 3 kolom berlatar putih dengan bayangan biru lembut, dipecah oleh 1 section band full-width berwarna dark navy (`#061B31`) di tengah halaman.
* **Workflow Matrix:** Baris data tabular dengan font monospace untuk angka statistik dan garis pembatas hairline horizontal tipis.

## Graphics & Depth
* **Chromatic Multi-Layer Shadow:**
  * L1: `0 3px 6px rgba(50,50,93,0.06), 0 1px 3px rgba(0,0,0,0.08)`
  * L2: `0 15px 35px rgba(50,50,93,0.1), 0 5px 15px rgba(0,0,0,0.07)`
  * L3: `0 30px 60px -12px rgba(50,50,93,0.25), 0 18px 36px -18px rgba(0,0,0,0.3)`
* **Filosofi:** Bayangan wajib dibiaskan warna navy (`#32325D`), dilarang memakai bayangan abu-abu hitam netral.

## Guardrails
* Dilarang menggunakan font weight 600 atau 700 pada display headline (wajib weight 300/400).
* Dilarang menggunakan warna hitam murni `#000000` untuk teks judul (wajib `#061B31`).
* Dilarang menggunakan tombol ber-radius pill bulat penuh (wajib radius 6px persegi halus).
```

---

# PRESET 04 — LINEAR DARK PRECISION (Issue-Tracker & Developer Workspace)

## A. PRESET IDENTITY

**Archetype:** `DARK WORKSPACE / LUMINANCE STACK`

### Spatial Grammar
Nested dark surfaces create depth instead of conventional shadows. Compact horizontal structures are favored.

### Visual Rhythm
Dense functional zones separated by small luminance changes.

### Composition Grammar
Interface-like composition: surface → panel → elevated state. Avoid large decorative empty stages.

### Typography Behavior
Neutral sans for hierarchy; mono for identifiers, commands, and technical metadata.

### Image Behavior
Product interface and workflow evidence dominate; decorative photography is secondary.

### Component Behavior
Panels, rows, states, and compact controls are more important than marketing cards.

### Motion Character
Hover/state feedback and focused transitions; no cinematic movement.

### Preset-Specific Anti-Slop
Do not add bright gradients, oversized marketing bands, or decorative glass cards.

### Distinctiveness Test
In grayscale, luminance stepping and workspace density must still distinguish the preset.

## B. SOURCE SPECIFICATION — PRESERVE

The following is the original preset specification. Treat its technical values as authoritative unless a project-specific requirement makes a change necessary.

```text
================================================================================
PRESET 04: LINEAR DARK PRECISION (Issue-Tracker & Developer Workspace)
================================================================================
---
version: "superdesign-alpha"
name: "Linear dark precision"
archetype: "ARCHETYPE_LUMINANCE_STACK"
description: "Dark-native system built on stepped background luminance surfaces, semi-transparent white hairline borders, and singular indigo accents."
colors:
  background: "#08090A"
  surface: "#0F1011"
  surface-elevated: "#191A1B"
  text-primary: "#F7F8F8"
  text-secondary: "#8A8F98"
  accent: "#5E6AD2"
  link: "#7170FF"
typography:
  display-lg:
    fontFamily: "Geist, Plus Jakarta Sans, sans-serif"
    fontSize: "56px"
    fontWeight: 500
    lineHeight: "1.08"
    letterSpacing: "-1.5px"
  headline-md:
    fontFamily: "Geist, sans-serif"
    fontSize: "32px"
    fontWeight: 500
    lineHeight: "1.15"
    letterSpacing: "-0.8px"
  body-md:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: "1.6"
    letterSpacing: "-0.1px"
  label-md:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "11px"
    fontWeight: 500
    lineHeight: "1.2"
    letterSpacing: "0.05em"
spacing:
  base: "8px"
  gap: "12px"
  section-padding: "56px"
rounded:
  control: "6px"
  card: "8px"
  pill: "9999px"
components:
  navbar:
    background: "rgba(8, 9, 10, 0.8)"
    backdrop-filter: "blur(16px)"
    height: "52px"
    border-bottom: "1px solid rgba(255, 255, 255, 0.08)"
  button-primary-hero:
    background: "#5E6AD2"
    text-color: "#FFFFFF"
    radius: "6px"
    height: "40px"
    padding: "9px 16px"
    hover-background: "#6F7BE0"
  button-outline:
    background: "rgba(255, 255, 255, 0.04)"
    text-color: "#F7F8F8"
    radius: "6px"
    height: "40px"
    padding: "9px 16px"
    border: "1px solid rgba(255, 255, 255, 0.1)"
  card-panel:
    background: "#0F1011"
    radius: "8px"
    border: "1px solid rgba(255, 255, 255, 0.08)"
---

## Overview
Sistem antarmuka gelap terukur. Mengeliminasi drop-shadow konvensional (tidak ada drop-shadow hitam di atas latar gelap). Elevasi sepenuhnya ditentukan oleh **Luminance Stepping** (peningkatan kecerahan permukaan latar belakang) yang dibingkai oleh border semi-transparan `rgba(255,255,255,0.08)`.

## Composition
* **Hero First Screen:** Kanvas gelap gulita (`#08090A`) dengan headline berukuran 56px berbobot 500, tombol aksi indigo transparan, dan screenshot aplikasi/arsitektur berbingkai border kaca tipis.
* **Feature Grid:** Panel gelap bertingkat (`#0F1011` $\rightarrow$ `#191A1B`), teks deskripsi berwarna abu-abu terang `#D0D6E0`, dan status indicator dot hijau statis (`#27A644`).
* **Workflow & Data Rows:** Baris-baris bergaris horizontal dengan nomor monospace kecil dan pembatas hairline yang hanya menyala saat disentuh hover kursor.

## Graphics & Depth
* **Luminance Stepping:**
  * Base Floor: `#08090A`
  * Panel Surface: `#0F1011` (`rgba(255,255,255,0.03)`)
  * Elevated Hover: `#191A1B` (`rgba(255,255,255,0.06)`)
* **Border:** `1px solid rgba(255, 255, 255, 0.08)`.
* **Glow Aksen:** Glow indigo subtil hanya pada area fokus `box-shadow: 0 0 20px rgba(94, 106, 210, 0.15)`.

## Guardrails
* Dilarang menggunakan teks putih murni `#FFFFFF` (wajib `#F7F8F8`).
* Dilarang menggunakan drop shadow hitam pekat untuk menciptakan elevasi.
* Dilarang menggunakan gradien neon mencolok di teks heading.
```

---

# PRESET 05 — AVANT-GARDE KINETIC BRUTALISM (Creative Agency & Studio)

## A. PRESET IDENTITY

**Archetype:** `GRAPHIC BRUTALISM / VISUAL TENSION`

### Spatial Grammar
Hard axes with deliberate imbalance, scale collisions, blocks, and occasional diagonal cuts.

### Visual Rhythm
Interrupted and energetic rather than evenly spaced.

### Composition Grammar
Use visual confrontation: oversized type against hard blocks, strong borders, offset objects, and controlled imbalance.

### Typography Behavior
Display typography is a graphic object. Scale and weight are primary compositional tools.

### Image Behavior
High-contrast photography or graphic media can collide with typography rather than sit politely beside it.

### Component Behavior
Hard-edged controls and panels; component boundaries can become graphic elements.

### Motion Character
Short, decisive interaction feedback; kinetic effects only when they reinforce the graphic language.

### Preset-Specific Anti-Slop
Do not soften the system into rounded SaaS cards or neutral editorial minimalism.

### Distinctiveness Test
If all color is removed, hard edges, scale contrast, and imbalance must still make it recognizable.

## B. SOURCE SPECIFICATION — PRESERVE

The following is the original preset specification. Treat its technical values as authoritative unless a project-specific requirement makes a change necessary.

```text
================================================================================
PRESET 05: AVANT-GARDE KINETIC BRUTALISM (Creative Agency & Studio)
================================================================================
---
version: "superdesign-alpha"
name: "Avant-garde kinetic brutalism"
archetype: "ARCHETYPE_BRUTALIST_SPLIT"
description: "High-contrast graphic brutalism defined by thick 2px black borders, diagonal clip-path section dividers, hard solid 4px offset shadows, and kinetic marquee tickers."
colors:
  background: "#F0F0F0"
  surface: "#FFFFFF"
  surface-dark: "#000000"
  text-primary: "#000000"
  text-secondary: "#404040"
  accent: "#E2FF00"
  link: "#0038FF"
typography:
  display-lg:
    fontFamily: "Syne, sans-serif"
    fontSize: "64px"
    fontWeight: 800
    lineHeight: "0.95"
    letterSpacing: "-1px"
  headline-md:
    fontFamily: "Syne, sans-serif"
    fontSize: "36px"
    fontWeight: 700
    lineHeight: "1.0"
    letterSpacing: "-0.5px"
  body-md:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "15px"
    fontWeight: 500
    lineHeight: "1.5"
    letterSpacing: "0px"
  label-md:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "11px"
    fontWeight: 700
    lineHeight: "1.2"
    letterSpacing: "0.1em"
spacing:
  base: "8px"
  gap: "16px"
  section-padding: "56px"
rounded:
  control: "0px"
  card: "0px"
  pill: "0px"
components:
  navbar:
    background: "#F0F0F0"
    height: "56px"
    border-bottom: "2px solid #000000"
  button-primary-hero:
    background: "#E2FF00"
    text-color: "#000000"
    radius: "0px"
    height: "46px"
    padding: "12px 24px"
    border: "2px solid #000000"
    shadow: "4px 4px 0px #000000"
  button-outline:
    background: "#FFFFFF"
    text-color: "#000000"
    radius: "0px"
    height: "46px"
    padding: "12px 24px"
    border: "2px solid #000000"
    shadow: "4px 4px 0px #000000"
  card-panel:
    background: "#FFFFFF"
    radius: "0px"
    border: "2px solid #000000"
    shadow: "4px 4px 0px #000000"
---

## Overview
Sistem grafis avant-garde bertaraf internasional. Menolak sudut membulat dan bayangan blur. Struktur ditegakkan oleh garis tebal 2px hitam pekat, bayangan keras (hard offset shadow), dan aksen warna neon acid (`#E2FF00`) serta biru kobalt (`#0038FF`).

## Composition
* **Hero First Screen:** Headline besar skew/miring transform diagonal dengan blok warna solid yang terpotong garis miring (`clip-path`), berdampingan dengan frame foto hitam-putih kontras tinggi.
* **Kinetic Marquee:** 1 pita teks berjalan murni CSS melintasi section dengan background hitam dan teks neon acid.
* **Feature & Portfolio:** Kartu berotasi sedikit (-2° / 2°) yang kembali lurus saat kursor hover, masing-masing membawa bayangan padat `4px 4px 0 #000000`.

## Graphics & Depth
* **Hard Offset Shadows:**
  * Default: `4px 4px 0px #000000`
  * Active/Elevated: `8px 8px 0px #000000`
  * Nol blur, nol transparansi.
* **Section Dividers:** Minimal 1 pemotong diagonal `clip-path: polygon(0 0, 100% 4vw, 100% 100%, 0 100%)` antar section.

## Guardrails
* Dilarang menggunakan bayangan blur atau gradien halus.
* Dilarang menggunakan border-radius > 0px.
* Dilarang menggunakan warna pastel redup.
```

---

# PRESET 06 — ORGANIC CRAFT & WARM LIVING (F&B, Artisanal & Wellness)

## A. PRESET IDENTITY

**Archetype:** `ORGANIC CRAFT / NATURAL RHYTHM`

### Spatial Grammar
Soft offsets, overlapping media, curved boundaries, and irregular but intentional spacing.

### Visual Rhythm
Flowing and tactile; avoid mechanically repeating equal blocks.

### Composition Grammar
Let imagery and curved forms interrupt the grid. Alignment can breathe rather than remain rigid.

### Typography Behavior
Friendly geometric display with comfortable line-height; typography should feel human rather than institutional.

### Image Behavior
Material, people, food, interiors, and process photography are primary evidence.

### Component Behavior
Soft containers may group related content, but not every section becomes a card.

### Motion Character
Slow, organic movement; gentle reveal or drift only.

### Preset-Specific Anti-Slop
Do not impose rigid symmetrical grids, hard borders, or cold corporate spacing.

### Distinctiveness Test
In grayscale, curved media, overlap, and irregular rhythm must remain obvious.

## B. SOURCE SPECIFICATION — PRESERVE

The following is the original preset specification. Treat its technical values as authoritative unless a project-specific requirement makes a change necessary.

```text
================================================================================
PRESET 06: ORGANIC CRAFT & WARM LIVING (F&B, Artisanal & Wellness)
================================================================================
---
version: "superdesign-alpha"
name: "Organic craft & warm living"
archetype: "ARCHETYPE_ORGANIC_STAGGERED"
description: "Warm nature-grounded system built on soft oatmeal bases, terracotta accents, large pill curves, and negative-margin staggered photo overlaps."
colors:
  background: "#FAF8F5"
  surface: "#FFFFFF"
  surface-panel: "#E8EFE9"
  surface-dark: "#1C2A23"
  text-primary: "#1C2A23"
  text-secondary: "#525E54"
  accent: "#D96B43"
  link: "#D96B43"
typography:
  display-lg:
    fontFamily: "Outfit, sans-serif"
    fontSize: "52px"
    fontWeight: 600
    lineHeight: "1.1"
    letterSpacing: "-0.5px"
  headline-md:
    fontFamily: "Outfit, sans-serif"
    fontSize: "34px"
    fontWeight: 600
    lineHeight: "1.15"
    letterSpacing: "-0.3px"
  body-md:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.65"
    letterSpacing: "0px"
  label-md:
    fontFamily: "Outfit, sans-serif"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: "1.2"
    letterSpacing: "0.1em"
spacing:
  base: "8px"
  gap: "16px"
  section-padding: "60px"
rounded:
  control: "9999px"
  card: "24px"
  pill: "9999px"
components:
  navbar:
    background: "rgba(250, 248, 245, 0.85)"
    backdrop-filter: "blur(12px)"
    height: "60px"
    border-bottom: "1px solid rgba(28, 42, 35, 0.08)"
  button-primary-hero:
    background: "#1C2A23"
    text-color: "#FAF8F5"
    radius: "9999px"
    height: "46px"
    padding: "12px 28px"
    hover-background: "#D96B43"
  button-outline:
    background: "transparent"
    text-color: "#1C2A23"
    radius: "9999px"
    height: "46px"
    padding: "12px 28px"
    border: "1px solid #1C2A23"
  card-panel:
    background: "#FFFFFF"
    radius: "24px"
    shadow: "0 8px 24px rgba(28, 42, 35, 0.06)"
  card-panel-sage:
    background: "#E8EFE9"
    radius: "24px"
---

## Overview
Sistem organik yang terinspirasi dari alam, bumi, dan material taktil. Menggunakan kanvas krem hangat (`#FAF8F5`), panel hijau sage (`#E8EFE9`), dan aksen terracotta (`#D96B43`). Ritme visual mengalir bebas melalui sudut membulat lebar (radius 24px) dan susunan foto staggered yang saling bertumpuk lembut.

## Composition
* **Hero First Screen:** Headline hangat di kiri atas, berdampingan dengan foto lanskap/interior berkontur lembut di kanan yang menjorok keluar batas kontainer (*negative-margin overlap*) ke section di bawahnya.
* **Services Staggered Grid:** Kartu-kartu layanan naik-turun selang-seling (offset masonry), masing-masing berlatar putih dengan bayangan alami yang sangat lembut.
* **Proof & Testimonial:** 1 kutipan besar berhuruf miring hangat di dalam kontainer sage hijau ber-radius 24px.

## Graphics & Depth
* **Soft Natural Shadows:**
  * L1: `0 8px 24px rgba(28, 42, 35, 0.06)`
  * L2: `0 16px 40px rgba(28, 42, 35, 0.1)`
* **Filosofi:** Bayangan hangat difus seperti pantulan cahaya matahari alami di atas kertas.

## Guardrails
* Dilarang menggunakan sudut tajam 0px atau border hitam tebal.
* Dilarang menggunakan warna dingin abu-abu kebiruan.
* Dilarang membuat susunan kartu simetris yang kaku.
```

---

# PRESET 07 — NOTION WARM ANALOG (Productivity, Studio & Docs)

## A. PRESET IDENTITY

**Archetype:** `ANALOG WORKSPACE / INFORMATION QUIET`

### Spatial Grammar
Document-like columns and modest surfaces; hierarchy comes from tonal paper changes.

### Visual Rhythm
Consistent and calm, similar to reading a well-organized workspace.

### Composition Grammar
Content blocks resemble notes, documents, or workspace objects rather than marketing cards.

### Typography Behavior
Highly readable sans hierarchy; utility labels remain subordinate.

### Image Behavior
Diagrams, screenshots, notes, and real working material are more appropriate than cinematic photography.

### Component Behavior
Small utility panels, notes, lists, and document blocks; cards should feel functional.

### Motion Character
Minimal. State changes should be nearly instantaneous.

### Preset-Specific Anti-Slop
Do not make every element a floating rounded card or fake productivity dashboard.

### Distinctiveness Test
The preset should feel like an organized workspace even when color and imagery are removed.

## B. SOURCE SPECIFICATION — PRESERVE

The following is the original preset specification. Treat its technical values as authoritative unless a project-specific requirement makes a change necessary.

```text
================================================================================
PRESET 07: NOTION WARM ANALOG (Productivity, Studio & Docs)
================================================================================
---
version: "superdesign-alpha"
name: "Notion warm analog"
archetype: "ARCHETYPE_ANALOG_WHISPER"
description: "Warm-white analog workspace defined by alternating cream surfaces (#F6F5F4), whisper-light 1px borders, and ultra-subtle sub-0.04 opacity shadows."
colors:
  background: "#FFFFFF"
  surface: "#F6F5F4"
  surface-dark: "#31302E"
  text-primary: "#31302E"
  text-secondary: "#615D59"
  accent: "#0075DE"
  link: "#0075DE"
typography:
  display-lg:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "52px"
    fontWeight: 700
    lineHeight: "1.1"
    letterSpacing: "-1.2px"
  headline-md:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "28px"
    fontWeight: 600
    lineHeight: "1.2"
    letterSpacing: "-0.5px"
  body-md:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: "1.6"
    letterSpacing: "-0.1px"
  label-md:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "11px"
    fontWeight: 600
    lineHeight: "1.2"
    letterSpacing: "0.05em"
spacing:
  base: "8px"
  gap: "12px"
  section-padding: "52px"
rounded:
  control: "6px"
  card: "12px"
  pill: "9999px"
components:
  navbar:
    background: "#FFFFFF"
    height: "52px"
    border-bottom: "1px solid rgba(0, 0, 0, 0.08)"
  button-primary-hero:
    background: "#0075DE"
    text-color: "#FFFFFF"
    radius: "6px"
    height: "38px"
    padding: "8px 16px"
    hover-background: "#0066C4"
  button-outline:
    background: "#FFFFFF"
    text-color: "#31302E"
    radius: "6px"
    height: "38px"
    padding: "8px 16px"
    border: "1px solid rgba(0, 0, 0, 0.12)"
  card-panel:
    background: "#F6F5F4"
    radius: "12px"
    border: "1px solid rgba(0, 0, 0, 0.08)"
---

## Overview
Sistem analog hangat bernuansa kertas kerja (*analog workspace*). Menggunakan ritme selang-seling antara putih murni (`#FFFFFF`) dan putih hangat (`#F6F5F4`). Teks menggunakan abu-abu hangat berbobot arang (`#31302E`), dan seluruh garis pembatas dirancang sangat halus (*whisper border* `rgba(0,0,0,0.08)`).

## Composition
* **Hero First Screen:** Kanvas putih bersih dengan headline bold 52px, tombol aksi biru ber-radius 6px, serta ilustrasi/mockup arsitektur berbingkai whisper border.
* **Alternating Sections:** Setiap perpindahan section berganti latar antara `#FFFFFF` dan `#F6F5F4` untuk menciptakan batas alami tanpa garis tebal.
* **Grid Cards:** Grid 2 atau 3 kolom kartu beralas `#F6F5F4` dengan radius 12px dan bayangan sangat tipis (hampir tidak terlihat, namun terasa ada).

## Graphics & Depth
* **Whisper Shadow:**
  * L1: `0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02)`
  * L2: `0 4px 12px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.03)`
* **Filosofi:** Bayangan "dirasakan, bukan dilihat" (felt, not seen).

## Guardrails
* Dilarang menggunakan warna abu-abu kebiruan dingin (wajib undertone hangat coklat/krem).
* Dilarang menggunakan border lebih tebal dari 1px atau opacity border > 0.1.
* Dilarang menggunakan bayangan pekat atau gradien berwarna-warni.
```

---

# PRESET 08 — NIKE ATHLETIC MONOCHROME (High-Impact & Streetwear)

## A. PRESET IDENTITY

**Archetype:** `ATHLETIC IMPACT / MEDIA DOMINANCE`

### Spatial Grammar
Full-bleed media, compressed spacing, strong horizontal/diagonal energy, large type anchored to imagery.

### Visual Rhythm
Fast, punchy, campaign-like.

### Composition Grammar
Photography and typography can occupy the same plane. Text may overlap media when contrast remains accessible.

### Typography Behavior
Condensed uppercase display is a major visual shape, not just a heading.

### Image Behavior
Action, movement, body, product-in-use, and high-energy photography are primary.

### Component Behavior
Minimal UI chrome; buttons and labels should remain subordinate to the campaign image.

### Motion Character
Quick entrance, hover, or media transitions; avoid slow luxury motion.

### Preset-Specific Anti-Slop
Do not dilute the athletic identity with soft cards, pastel surfaces, or dense SaaS modules.

### Distinctiveness Test
Grayscale should still reveal media dominance, condensed type, and campaign rhythm.

## B. SOURCE SPECIFICATION — PRESERVE

The following is the original preset specification. Treat its technical values as authoritative unless a project-specific requirement makes a change necessary.

```text
================================================================================
PRESET 08: NIKE ATHLETIC MONOCHROME (High-Impact & Streetwear)
================================================================================
---
version: "superdesign-alpha"
name: "Nike athletic monochrome"
archetype: "ARCHETYPE_MONOCHROME_PUNCH"
description: "Monumental high-impact system featuring 96px uppercase condensed headlines punching through full-bleed action imagery with pure monochrome UI controls."
colors:
  background: "#F5F5F5"
  surface: "#FFFFFF"
  surface-dark: "#111111"
  text-primary: "#111111"
  text-secondary: "#525252"
  accent: "#111111"
  link: "#111111"
typography:
  display-lg:
    fontFamily: "Oswald, Impact, sans-serif"
    fontSize: "80px"
    fontWeight: 700
    lineHeight: "0.90"
    letterSpacing: "-0.5px"
  headline-md:
    fontFamily: "Oswald, sans-serif"
    fontSize: "44px"
    fontWeight: 700
    lineHeight: "0.95"
    letterSpacing: "0px"
  body-md:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "16px"
    fontWeight: 500
    lineHeight: "1.4"
    letterSpacing: "0px"
  label-md:
    fontFamily: "Oswald, sans-serif"
    fontSize: "14px"
    fontWeight: 700
    lineHeight: "1.0"
    letterSpacing: "0.15em"
spacing:
  base: "8px"
  gap: "8px"
  section-padding: "48px"
rounded:
  control: "40px"
  card: "0px"
  pill: "9999px"
components:
  navbar:
    background: "#FFFFFF"
    height: "60px"
    border-bottom: "1px solid #E5E5E5"
  button-primary-hero:
    background: "#111111"
    text-color: "#FFFFFF"
    radius: "40px"
    height: "44px"
    padding: "12px 24px"
    hover-background: "#333333"
  button-outline:
    background: "transparent"
    text-color: "#111111"
    radius: "40px"
    height: "44px"
    padding: "12px 24px"
    border: "1.5px solid #111111"
  card-panel:
    background: "#FFFFFF"
    radius: "0px"
    padding: "0px"
---

## Overview
Sistem atletis berbobot masif dan penuh energi. Mengandalkan headline condensed huruf kapital raksasa (line-height ultra rapat 0.90) yang menimpa foto aksi *full-bleed edge-to-edge*. Seluruh antarmuka bersifat monokrom murni (`#111111`), membiarkan warna berasal 100% dari konten fotografi.

## Composition
* **Hero First Screen:** Foto resolusi tinggi *full-bleed edge-to-edge* tanpa border-radius dengan overlay gradien hitam tipis di bagian bawah, ditimpa headline huruf kapital 80px/96px dan tombol pill hitam pekat.
* **Dense Media Grid:** Grid kartu foto padat ber-gap rapat (4px - 8px) rasio 16:9 atau 1:1 square tanpa sudut membulat, dengan teks kategori huruf kapital berukuran 14px.
* **Statement Promo Band:** Banner hitam pekat memanjang melintasi layar dengan teks deklarasi berhuruf kapital besar.

## Graphics & Depth
* **Shadows:** Nol shadow di seluruh halaman.
* **Kedalaman:** Tercipta murni dari kontras pekat elemen UI monokrom terhadap foto-foto berwarna jenuh.

## Guardrails
* Dilarang menggunakan border-radius pada foto atau kontainer showcase (wajib 0px).
* Dilarang menggunakan warna aksen di luar monokrom hitam/putih.
* Dilarang menggunakan huruf kecil (lowercase) pada display headline hero.
```

---

# PRESET 09 — SHOPIFY DARK THEATRE (Keynote & E-Commerce Flagship)

## A. PRESET IDENTITY

**Archetype:** `CINEMATIC THEATRE / PRODUCT REVEAL`

### Spatial Grammar
Large dark fields with spotlighted focal zones; content enters as staged scenes.

### Visual Rhythm
Slow scene-to-scene progression with substantial vertical breathing room.

### Composition Grammar
Treat each major section like a presentation stage. One focal message or object per scene.

### Typography Behavior
Featherlight monumental display type; weight contrast is more important than decorative effects.

### Image Behavior
Product renders, demonstrations, and controlled atmosphere are preferred.

### Component Behavior
Large stage surfaces rather than repeated cards.

### Motion Character
Slow reveal, camera-like movement, or subtle spotlight transitions; never constant motion.

### Preset-Specific Anti-Slop
Do not flatten the theatre into ordinary dark cards or neon dashboards.

### Distinctiveness Test
Without color, the staged focal zones and scene sequencing must remain recognizable.

## B. SOURCE SPECIFICATION — PRESERVE

The following is the original preset specification. Treat its technical values as authoritative unless a project-specific requirement makes a change necessary.

```text
================================================================================
PRESET 09: SHOPIFY DARK THEATRE (Keynote & E-Commerce Flagship)
================================================================================
---
version: "superdesign-alpha"
name: "Shopify dark theatre"
archetype: "ARCHETYPE_THEATRE_SPOTLIGHT"
description: "Cinematic dark forest-teal system featuring monumental 80px/300 featherlight headlines, subtle ambient radial spotlights, and bioluminescent neon green accents."
colors:
  background: "#02090A"
  surface: "#102620"
  surface-dark: "#02090A"
  text-primary: "#FFFFFF"
  text-secondary: "#A1A1AA"
  accent: "#36F4A4"
  link: "#36F4A4"
typography:
  display-lg:
    fontFamily: "Cabinet Grotesk, Syne, sans-serif"
    fontSize: "80px"
    fontWeight: 300
    lineHeight: "1.02"
    letterSpacing: "-1.5px"
  headline-md:
    fontFamily: "Cabinet Grotesk, sans-serif"
    fontSize: "40px"
    fontWeight: 300
    lineHeight: "1.1"
    letterSpacing: "-0.8px"
  body-md:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: "1.6"
    letterSpacing: "-0.1px"
  label-md:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "11px"
    fontWeight: 600
    lineHeight: "1.2"
    letterSpacing: "0.15em"
spacing:
  base: "8px"
  gap: "16px"
  section-padding: "72px"
rounded:
  control: "9999px"
  card: "16px"
  pill: "9999px"
components:
  navbar:
    background: "rgba(2, 9, 10, 0.85)"
    backdrop-filter: "blur(20px)"
    height: "56px"
    border-bottom: "1px solid rgba(255, 255, 255, 0.08)"
  button-primary-hero:
    background: "#FFFFFF"
    text-color: "#02090A"
    radius: "9999px"
    height: "46px"
    padding: "12px 28px"
    hover-background: "#36F4A4"
  button-outline:
    background: "transparent"
    text-color: "#FFFFFF"
    radius: "9999px"
    height: "46px"
    padding: "12px 28px"
    border: "1px solid rgba(255, 255, 255, 0.2)"
  card-panel:
    background: "#102620"
    radius: "16px"
    border: "1px solid rgba(54, 244, 164, 0.15)"
---

## Overview
Sistem teatrikal gelap yang terinspirasi dari panggung peluncuran produk digital (*keynote stage*). Berpijak pada kanvas gelap hijau lumut pekat (`#02090A` $\rightarrow$ `#102620`). Headline menggunakan ukuran raksasa monumental 80px namun berbobot featherlight (weight 300) yang disinari gradien spotlight lembut dari belakang.

## Composition
* **Hero First Screen:** Kanvas gelap gulita dengan headline putih featherlight 80px, disinari spotlight radial gradient hijau-teal lembut di belakang teks, serta sepasang tombol pill putih dan outline.
* **Keynote Slide Bands:** Setiap fitur/layanan disajikan seperti satu lembar slide presentasi dengan jeda vertikal luas (72px - 96px), screenshot arsitektur dalam kontainer gelap berbingkai halus, dan aksen neon green `#36F4A4` pada angka data.
* **Stats Section:** Angka metrik raksasa 80px berbobot tebal yang menyala kontras di atas kanvas gelap.

## Graphics & Depth
* **Theatre Spotlight Gradient:** `radial-gradient(circle at 50% 30%, rgba(16, 38, 32, 0.8) 0%, rgba(2, 9, 10, 0) 70%)`.
* **Card Glow:** `box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.1)`.

## Guardrails
* Dilarang menggunakan font weight tebal (>400) pada headline monumental hero.
* Dilarang menggunakan warna neon hijau secara berlebihan (hanya untuk aksen fokus dan hover).
* Dilarang menyisipkan section putih terang di tengah halaman gelap teatrikal ini.
```

---

# PRESET 10 — VERCEL ENGINEERING MINIMAL (Cloud Platform & DevTools)

## A. PRESET IDENTITY

**Archetype:** `ENGINEERING MINIMAL / SYSTEM EXPLANATION`

### Spatial Grammar
Clean white field, strong alignment, compact technical modules, deliberate vertical sequencing.

### Visual Rhythm
Problem → mechanism → workflow → evidence.

### Composition Grammar
Prefer diagrams, workflows, and architecture over decorative blocks.

### Typography Behavior
Geometric sans for engineering clarity; mono for technical labels.

### Image Behavior
Screenshots, architecture diagrams, code-adjacent visuals, and system relationships.

### Component Behavior
Workflow nodes, technical panels, documentation-like blocks.

### Motion Character
Functional diagram transitions and subtle state feedback.

### Preset-Specific Anti-Slop
Do not invent a mandatory three-step pipeline when the real workflow has another structure.

### Distinctiveness Test
The page must read as an engineered system, not a generic startup landing page.

## B. SOURCE SPECIFICATION — PRESERVE

The following is the original preset specification. Treat its technical values as authoritative unless a project-specific requirement makes a change necessary.

```text
================================================================================
PRESET 10: VERCEL ENGINEERING MINIMAL (Cloud Platform & DevTools)
================================================================================
---
version: "superdesign-alpha"
name: "Vercel engineering minimal"
archetype: "ARCHETYPE_SHADOW_BORDER"
description: "Gallery-white engineering system replacing all physical borders with 1px shadow rings, structured around a 3-step connected workflow pipeline centerpiece."
colors:
  background: "#FFFFFF"
  surface: "#FAFAFA"
  surface-dark: "#171717"
  text-primary: "#171717"
  text-secondary: "#4D4D4D"
  accent: "#0A72EF"
  link: "#0A72EF"
typography:
  display-lg:
    fontFamily: "Geist, sans-serif"
    fontSize: "52px"
    fontWeight: 600
    lineHeight: "1.08"
    letterSpacing: "-2.0px"
  headline-md:
    fontFamily: "Geist, sans-serif"
    fontSize: "32px"
    fontWeight: 600
    lineHeight: "1.15"
    letterSpacing: "-1.0px"
  body-md:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: "1.55"
    letterSpacing: "-0.2px"
  label-md:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "11px"
    fontWeight: 600
    lineHeight: "1.2"
    letterSpacing: "0.08em"
spacing:
  base: "8px"
  gap: "12px"
  section-padding: "56px"
rounded:
  control: "8px"
  card: "8px"
  pill: "9999px"
components:
  navbar:
    background: "rgba(255, 255, 255, 0.85)"
    backdrop-filter: "blur(16px)"
    height: "56px"
    shadow: "0 0 0 1px rgba(0, 0, 0, 0.08)"
  button-primary-hero:
    background: "#171717"
    text-color: "#FFFFFF"
    radius: "8px"
    height: "40px"
    padding: "10px 18px"
    hover-background: "#000000"
  button-outline:
    background: "#FFFFFF"
    text-color: "#171717"
    radius: "8px"
    height: "40px"
    padding: "10px 18px"
    shadow: "0 0 0 1px rgba(0, 0, 0, 0.12)"
  card-panel:
    background: "#FFFFFF"
    radius: "8px"
    shadow: "0 0 0 1px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.04)"
---

## Overview
Sistem rekayasa minimalis galeri putih murni. Menggantikan seluruh properti `border` fisik dengan ring bayangan 1px (`box-shadow: 0 0 0 1px rgba(0,0,0,0.08)`). Ciri khas utamanya adalah diagram alur kerja 3 tahap (Workflow Pipeline) yang terhubung garis presisi dengan aksen warna khusus per fase.

## Composition
* **Hero First Screen:** Kanvas putih galeri dengan headline Geist ber-tracking sangat rapat (-2.0px), subhead abu-abu terukur, tombol solid hitam + outline ber-ring shadow, dan latar belakang gradien pastel sangat halus.
* **Workflow Pipeline Centerpiece:** Section proses 3 tahap yang disusun horizontal terhubung garis penghubung aktif dengan label monospace kapital.
* **Screenshot & Metric Grid:** Kartu screenshot aplikasi dengan top-radius 8px yang melayang di atas ring shadow 1px.

## Graphics & Depth
* **Shadow-as-Border:** `box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.08)`.
* **Elevated Shadow:** `box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.08), 0 8px 24px rgba(0, 0, 0, 0.06)`.

## Guardrails
* Dilarang menggunakan properti CSS `border` fisik pada kartu (wajib menggunakan box-shadow ring).
* Dilarang menggunakan tombol pill bulat penuh (wajib radius 8px).
* Dilarang menggunakan font serif display.
```

---

# PRESET 11 — CYBER-AESTHETICS DARK MODE (Technical Blueprints & Crypto)

## A. PRESET IDENTITY

**Archetype:** `CYBER BLUEPRINT / TECHNICAL ATMOSPHERE`

### Spatial Grammar
Dark canvas with technical grid references, sharp panel geometry, and layered interface zones.

### Visual Rhythm
Dense technical information interrupted by deliberate atmospheric gaps.

### Composition Grammar
Blueprint/grid is the environmental layer; technical content sits on top of it.

### Typography Behavior
Space Grotesk for system identity; mono for technical notation.

### Image Behavior
Diagrams, schematics, terminal-like data, and technical visuals.

### Component Behavior
Glass/technical panels, labels, data matrices, system indicators.

### Motion Character
Reactive hover and small system-state animations.

### Preset-Specific Anti-Slop
Do not use neon glow as the sole source of identity; every technical graphic must have meaning.

### Distinctiveness Test
Remove the cyan: blueprint geometry and technical layering must still identify the preset.

## B. SOURCE SPECIFICATION — PRESERVE

The following is the original preset specification. Treat its technical values as authoritative unless a project-specific requirement makes a change necessary.

```text
================================================================================
PRESET 11: CYBER-AESTHETICS DARK MODE (Technical Blueprints & Crypto)
================================================================================
---
version: "superdesign-alpha"
name: "Cyber-aesthetics dark mode"
archetype: "ARCHETYPE_BLUEPRINT_GRID"
description: "Dark-native technical system built on faint blueprint grid lines, glowing terminal mono badges, and sharp 12px translucent glass cards."
colors:
  background: "#08080A"
  surface: "#121216"
  surface-dark: "#18181C"
  text-primary: "#FFFFFF"
  text-secondary: "#A1A1AA"
  accent: "#00F0FF"
  link: "#00F0FF"
typography:
  display-lg:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "44px"
    fontWeight: 700
    lineHeight: "1.05"
    letterSpacing: "-0.5px"
  headline-md:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "28px"
    fontWeight: 700
    lineHeight: "1.15"
    letterSpacing: "-0.3px"
  body-md:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "1.6"
    letterSpacing: "0px"
  label-md:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "11px"
    fontWeight: 500
    lineHeight: "1.2"
    letterSpacing: "0.15em"
spacing:
  base: "8px"
  gap: "12px"
  section-padding: "56px"
rounded:
  control: "9999px"
  card: "12px"
  pill: "9999px"
components:
  navbar:
    background: "rgba(8, 8, 10, 0.85)"
    backdrop-filter: "blur(20px)"
    height: "52px"
    border-bottom: "1px solid rgba(255, 255, 255, 0.1)"
  button-primary-hero:
    background: "#00F0FF"
    text-color: "#08080A"
    radius: "9999px"
    height: "42px"
    padding: "10px 22px"
    hover-background: "#33F3FF"
    shadow: "0 0 20px rgba(0, 240, 255, 0.35)"
  button-outline:
    background: "rgba(255, 255, 255, 0.04)"
    text-color: "#00F0FF"
    radius: "9999px"
    height: "42px"
    padding: "10px 22px"
    border: "1px solid rgba(0, 240, 255, 0.3)"
  card-panel:
    background: "#121216"
    radius: "12px"
    border: "1px solid rgba(255, 255, 255, 0.08)"
---

## Overview
Sistem kanvas gelap teknikal yang menyerupai antarmuka mesin presisi dan lembar spesifikasi CAD. Berpijak pada latar hitam pekat (`#08080A`), garis-garis grid cetak biru (blueprint grid), dan aksen cyan elektrik (`#00F0FF`).

## Composition
* **Hero First Screen:** Kanvas gelap berlatar grid teknis 32px. Headline Space Grotesk dengan aksen glow cyan tipis pada kata kunci utama, didampingi terminal badge di sudut panel.
* **Services / Features:** Bento 3x3 asimetris dengan panel semi-transparan yang memancarkan border glow cyan saat disentuh kursor.
* **Data Matrix Portfolio:** Grid thumbnail rapat dengan overlay data teknis instan saat di-hover.

## Graphics & Depth
* **Blueprint Grid:** `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`.
* **Elevasi Cyan Glow:** `box-shadow: 0 0 20px rgba(0, 240, 255, 0.15)`.

## Guardrails
* Dilarang menggunakan font serif atau font rounded friendly.
* Dilarang menggunakan animasi pulse berulang yang mengganggu.
* Dilarang menggunakan gradien teks berwarna-warni selain cyan murni.
```

---

# PRESET 12 — SWISS CORPORATE PRECISION (Audit, Law & Enterprise)

## A. PRESET IDENTITY

**Archetype:** `SWISS CORPORATE / REPORT STRUCTURE`

### Spatial Grammar
Rigid grid, clear axes, strong vertical/horizontal rules, low ornamental variance.

### Visual Rhythm
Stable and systematic; information appears in ordered modules.

### Composition Grammar
Use tables, matrices, columns, and document-like structures when content supports them.

### Typography Behavior
Neutral sans with tabular/mono utility data. Typography establishes hierarchy through scale, not decoration.

### Image Behavior
Evidence-oriented corporate photography; never let imagery overpower operational information.

### Component Behavior
Tables and structured panels are preferred over floating feature cards.

### Motion Character
Near-zero except interaction feedback.

### Preset-Specific Anti-Slop
Do not use arbitrary asymmetric hero layouts, floating cards, or decorative statistics.

### Distinctiveness Test
The grid and information architecture must remain identifiable without color.

## B. SOURCE SPECIFICATION — PRESERVE

The following is the original preset specification. Treat its technical values as authoritative unless a project-specific requirement makes a change necessary.

```text
================================================================================
PRESET 12: SWISS CORPORATE PRECISION (Audit, Law & Enterprise)
================================================================================
---
version: "superdesign-alpha"
name: "Swiss corporate precision"
archetype: "ARCHETYPE_REPORT_MATRIX"
description: "Formal structured Swiss layout defined by 4-column grids, razor-thin vertical dividers, and oversized metric data anchors."
colors:
  background: "#F8FAFC"
  surface: "#FFFFFF"
  surface-dark: "#0F172A"
  text-primary: "#0F172A"
  text-secondary: "#475569"
  accent: "#0284C7"
  link: "#0284C7"
typography:
  display-lg:
    fontFamily: "Geist, Plus Jakarta Sans, sans-serif"
    fontSize: "40px"
    fontWeight: 600
    lineHeight: "1.1"
    letterSpacing: "-0.5px"
  headline-md:
    fontFamily: "Geist, sans-serif"
    fontSize: "24px"
    fontWeight: 600
    lineHeight: "1.2"
    letterSpacing: "-0.2px"
  body-md:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: "1.6"
    letterSpacing: "0px"
  label-md:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "11px"
    fontWeight: 600
    lineHeight: "1.2"
    letterSpacing: "0.08em"
spacing:
  base: "8px"
  gap: "0px"
  section-padding: "60px"
rounded:
  control: "4px"
  card: "4px"
  pill: "9999px"
components:
  navbar:
    background: "#FFFFFF"
    height: "56px"
    border-bottom: "1px solid #E2E8F0"
  button-primary-hero:
    background: "#0F172A"
    text-color: "#FFFFFF"
    radius: "4px"
    height: "40px"
    padding: "10px 20px"
    hover-background: "#0284C7"
  button-outline:
    background: "#FFFFFF"
    text-color: "#0F172A"
    radius: "4px"
    height: "40px"
    padding: "10px 20px"
    border: "1px solid #CBD5E1"
  card-panel:
    background: "#FFFFFF"
    radius: "4px"
    border: "1px solid #E2E8F0"
---

## Overview
Sistem presisi korporat Swiss yang dirancang untuk membangun rasa percaya tinggi (high-trust). Menghilangkan elemen dekoratif liar dan mengandalkan keteraturan grid 4-kolom bergaris vertikal tipis (`divide-x divide-slate-200`) serta angka statistik besar sebagai jangkar visual.

## Composition
* **Hero First Screen:** Kolom kiri memuat headline formal tegas dan satu angka statistik raksasa (misal: 99.2% atau 42 Proyek), kolom kanan memuat foto korporat bersih ber-border 1px.
* **Services Matrix:** Grid 4-kolom bersambung tanpa gap, dipisahkan oleh garis vertikal 1px tipis, masing-masing memuat ikon fungsional dan rincian deliverable.
* **Portfolio Table:** Tabel perbandingan multi-kolom yang rapi dengan angka tabular (`tabular-nums`).

## Graphics & Depth
* **Shadows:** L0 flat, L1 `0 1px 3px rgba(15, 23, 42, 0.06)`.
* **Dividers:** Menggunakan `border-t border-slate-200` dan `divide-x divide-slate-200`.

## Guardrails
* Dilarang menggunakan layout asimetris liar atau kartu melayang acak.
* Dilarang menggunakan sudut membulat lebar (radius maksimal 4px).
* Dilarang menggunakan font serif dekoratif.
```

---

# PRESET 13 — NEO-BRUTALIST POP (Youth Media, Creator & Edutech)

## A. PRESET IDENTITY

**Archetype:** `NEO-BRUTAL POP / STICKER GRAPHICS`

### Spatial Grammar
Graphic blocks, offsets, rotation, irregular scale, and strong edge contrast.

### Visual Rhythm
Playful interruption with repeated visual beats, not a calm vertical stack.

### Composition Grammar
Use graphic objects as active participants in composition; they can overlap text/media while preserving reading order.

### Typography Behavior
Heavy sans acts as poster lettering. Short phrases work better than long paragraphs.

### Image Behavior
Polaroid-like, creator, youth, food, and candid imagery.

### Component Behavior
Sticker panels, speech forms, hard-shadow buttons, and graphic labels.

### Motion Character
Snappy hover and micro-interactions; avoid elegant slow fades.

### Preset-Specific Anti-Slop
Do not make every element rotated or turn the system into random decoration.

### Distinctiveness Test
Even without color, hard shadows, sticker geometry, and graphic interruption must remain visible.

## B. SOURCE SPECIFICATION — PRESERVE

The following is the original preset specification. Treat its technical values as authoritative unless a project-specific requirement makes a change necessary.

```text
================================================================================
PRESET 13: NEO-BRUTALIST POP (Youth Media, Creator & Edutech)
================================================================================
---
version: "superdesign-alpha"
name: "Neo-brutalist pop"
archetype: "ARCHETYPE_STICKER_POP"
description: "High-energy playful scrapbook system featuring -2° rotated sticker boxes, 2px solid black borders, and heavy 6px offset hard shadows."
colors:
  background: "#FEF08A"
  surface: "#FCE7F3"
  surface-dark: "#000000"
  text-primary: "#000000"
  text-secondary: "#262626"
  accent: "#8B5CF6"
  link: "#8B5CF6"
typography:
  display-lg:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "48px"
    fontWeight: 800
    lineHeight: "1.0"
    letterSpacing: "-0.5px"
  headline-md:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "28px"
    fontWeight: 800
    lineHeight: "1.1"
    letterSpacing: "-0.2px"
  body-md:
    fontFamily: "Outfit, sans-serif"
    fontSize: "16px"
    fontWeight: 500
    lineHeight: "1.5"
    letterSpacing: "0px"
  label-md:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "12px"
    fontWeight: 800
    lineHeight: "1.2"
    letterSpacing: "0.05em"
spacing:
  base: "8px"
  gap: "16px"
  section-padding: "56px"
rounded:
  control: "12px"
  card: "12px"
  pill: "9999px"
components:
  navbar:
    background: "#FFFFFF"
    height: "60px"
    border-bottom: "2px solid #000000"
  button-primary-hero:
    background: "#8B5CF6"
    text-color: "#FFFFFF"
    radius: "12px"
    height: "46px"
    padding: "12px 24px"
    border: "2px solid #000000"
    shadow: "6px 6px 0px #000000"
  button-outline:
    background: "#FEF08A"
    text-color: "#000000"
    radius: "12px"
    height: "46px"
    padding: "12px 24px"
    border: "2px solid #000000"
    shadow: "6px 6px 0px #000000"
  card-panel:
    background: "#FFFFFF"
    radius: "12px"
    border: "2px solid #000000"
    shadow: "6px 6px 0px #000000"
---

## Overview
Sistem pop neo-brutalisme yang berenergi tinggi dan ekspresif. Memadukan warna kuning cerah (`#FEF08A`), merah muda lembut (`#FCE7F3`), dan ungu elektrik (`#8B5CF6`). Ciri visual utamanya adalah elemen boks berstiker yang dimiringkan -2° dan bayangan padat 6px hitam tanpa blur.

## Composition
* **Hero First Screen:** Headline bold di dalam boks stiker miring -2° dengan border hitam 2px, dikelilingi foto bergaya polaroid miring dengan efek selotip visual.
* **Services Grid:** Kartu-kartu berwarna pastel kontras yang terhubung panah grafis tegas, masing-masing memiliki bayangan offset padat `6px 6px 0 #000000`.
* **Testimonials:** Balon dialog pop tebal berbayangan keras 6px.

## Graphics & Depth
* **Hard Solid Shadows:** `6px 6px 0px #000000` pada seluruh tombol dan kontainer kartu.
* **Border:** Wajib `2px solid #000000`.

## Guardrails
* Dilarang menggunakan bayangan blur atau gradien halus.
* Dilarang menggunakan font serif atau gaya korporat formal.
* Dilarang menggunakan warna redup dingin tanpa kontras.
```

---

# PRESET 14 — EDITORIAL DARK LUXURY (VIP Lounge & Night Architecture)

## A. PRESET IDENTITY

**Archetype:** `DARK EDITORIAL / NIGHT LUXURY`

### Spatial Grammar
Large dark fields, narrow text columns, image/text tension, fine framing.

### Visual Rhythm
Slow, quiet, cinematic.

### Composition Grammar
Image and text may occupy unequal territory; use darkness as negative space.

### Typography Behavior
Serif display provides sophistication; sans utility text stays quiet.

### Image Behavior
Atmospheric architecture, interiors, fashion, and night photography.

### Component Behavior
Frames, captions, rules, and large media; avoid generic card systems.

### Motion Character
Slow fade/reveal with restrained timing.

### Preset-Specific Anti-Slop
Do not use neon, colorful gradients, or dense dashboard UI.

### Distinctiveness Test
The combination of darkness, serif typography, and fine framing must survive grayscale.

## B. SOURCE SPECIFICATION — PRESERVE

The following is the original preset specification. Treat its technical values as authoritative unless a project-specific requirement makes a change necessary.

```text
================================================================================
PRESET 14: EDITORIAL DARK LUXURY (VIP Lounge & Night Architecture)
================================================================================
---
version: "superdesign-alpha"
name: "Editorial dark luxury"
archetype: "ARCHETYPE_DARK_EDITORIAL"
description: "Restrained dark luxury system built on a 50/50 vertical split hero, Cormorant Garamond display typography, and 1px gold hairline framing."
colors:
  background: "#0B0B0C"
  surface: "#141416"
  surface-dark: "#000000"
  text-primary: "#F4F4F5"
  text-secondary: "#71717A"
  accent: "#D4AF37"
  link: "#D4AF37"
typography:
  display-lg:
    fontFamily: "Cormorant Garamond, serif"
    fontSize: "48px"
    fontWeight: 500
    lineHeight: "1.15"
    letterSpacing: "0px"
  headline-md:
    fontFamily: "Cormorant Garamond, serif"
    fontSize: "32px"
    fontWeight: 500
    lineHeight: "1.2"
    letterSpacing: "0px"
  body-md:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: "1.6"
    letterSpacing: "0px"
  label-md:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "11px"
    fontWeight: 500
    lineHeight: "1.2"
    letterSpacing: "0.2em"
spacing:
  base: "8px"
  gap: "16px"
  section-padding: "64px"
rounded:
  control: "9999px"
  card: "0px"
  pill: "9999px"
components:
  navbar:
    background: "#0B0B0C"
    height: "64px"
    border-bottom: "1px solid rgba(212, 175, 55, 0.2)"
  button-primary-hero:
    background: "#D4AF37"
    text-color: "#0B0B0C"
    radius: "9999px"
    height: "44px"
    padding: "11px 24px"
    hover-background: "#E5C158"
  button-outline:
    background: "transparent"
    text-color: "#D4AF37"
    radius: "9999px"
    height: "44px"
    padding: "11px 24px"
    border: "1px solid rgba(212, 175, 55, 0.4)"
  card-panel:
    background: "#141416"
    radius: "0px"
    border: "1px solid rgba(212, 175, 55, 0.15)"
---

## Overview
Sistem kemewahan gelap yang anggun dan sunyi (*restrained dark luxury*). Menggunakan kanvas hitam arang (`#0B0B0C`), panel gelap pekat (`#141416`), dan garis aksen emas murni (`#D4AF37`).

## Composition
* **Hero First Screen:** Split vertikal 50/50 full-bleed. Sisi kiri memuat foto atmosferik dramatis beresolusi tinggi, sisi kanan memuat teks berbingkai border emas 1px dengan tombol pill emas.
* **Services Bands:** Band horizontal memanjang atmosferik dengan foto temaram redup dan judul emas kecil.
* **Portfolio Showcase:** Foto full-bleed satu per satu dengan jeda scroll lambat dan caption teknis minimalis di sudut bawah.

## Graphics & Depth
* **Shadows:** Bayangan dalam dramatis `0 20px 60px rgba(0, 0, 0, 0.6)`.
* **Border:** Garis emas tipis `1px solid rgba(212, 175, 55, 0.2)`.

## Guardrails
* Dilarang menggunakan warna terang mencolok atau gradien neon.
* Dilarang menggunakan sans-serif tebal untuk display headline.
* Dilarang menggunakan border-radius pada panel kartu (wajib 0px).
```

---

# PRESET 15 — ULTRA-MODERN FLUID MINIMALIST (Creative Tech & Studio)

## A. PRESET IDENTITY

**Archetype:** `FLUID GRID / CREATIVE SYSTEM`

### Spatial Grammar
12-column system with persistent relationships, but composition can shift within the grid.

### Visual Rhythm
Content-led; metadata and narrative maintain separate lanes.

### Composition Grammar
Use the grid as an invisible coordinate system rather than a visible template.

### Typography Behavior
Strong geometric display with concise metadata.

### Image Behavior
Projects, process, and visual artifacts can occupy variable grid spans.

### Component Behavior
Sidebar metadata, filters, project modules, and modular content blocks.

### Motion Character
Sticky relationships and scroll-linked context are more important than decorative animation.

### Preset-Specific Anti-Slop
Do not blindly force 8/4 everywhere when the content needs another relationship.

### Distinctiveness Test
The underlying grid logic must be apparent even when the exact column ratios change.

## B. SOURCE SPECIFICATION — PRESERVE

The following is the original preset specification. Treat its technical values as authoritative unless a project-specific requirement makes a change necessary.

```text
================================================================================
PRESET 15: ULTRA-MODERN FLUID MINIMALIST (Creative Tech & Studio)
================================================================================
---
version: "superdesign-alpha"
name: "Ultra-modern fluid minimalist"
archetype: "ARCHETYPE_SIDEBAR_MATRIX"
description: "Fluid 12-column architectural grid featuring an 8-column main content stream and a sticky 4-column metadata sidebar."
colors:
  background: "#FFFFFF"
  surface: "#F9FAFB"
  surface-dark: "#09090B"
  text-primary: "#111827"
  text-secondary: "#4B5563"
  accent: "#1D4ED8"
  link: "#1D4ED8"
typography:
  display-lg:
    fontFamily: "Cabinet Grotesk, Plus Jakarta Sans, sans-serif"
    fontSize: "44px"
    fontWeight: 700
    lineHeight: "1.05"
    letterSpacing: "-0.6px"
  headline-md:
    fontFamily: "Cabinet Grotesk, sans-serif"
    fontSize: "28px"
    fontWeight: 700
    lineHeight: "1.15"
    letterSpacing: "-0.3px"
  body-md:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.6"
    letterSpacing: "0px"
  label-md:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "11px"
    fontWeight: 600
    lineHeight: "1.2"
    letterSpacing: "0.05em"
spacing:
  base: "8px"
  gap: "16px"
  section-padding: "60px"
rounded:
  control: "9999px"
  card: "8px"
  pill: "9999px"
components:
  navbar:
    background: "#FFFFFF"
    height: "56px"
    border-bottom: "1px solid #E5E7EB"
  button-primary-hero:
    background: "#111827"
    text-color: "#FFFFFF"
    radius: "9999px"
    height: "42px"
    padding: "10px 22px"
    hover-background: "#1D4ED8"
  button-outline:
    background: "#FFFFFF"
    text-color: "#111827"
    radius: "9999px"
    height: "42px"
    padding: "10px 22px"
    border: "1px solid #D1D5DB"
  card-panel:
    background: "#F9FAFB"
    radius: "8px"
    border: "1px solid #E5E7EB"
---

## Overview
Sistem grid 12-kolom yang konsisten dan cair. Ciri khas utamanya adalah pembagian layout yang stabil di seluruh halaman: 8 kolom untuk konten narasi utama dan 4 kolom untuk sidebar metadata/statistik yang melayang sticky saat di-scroll.

## Composition
* **Hero First Screen:** Grid asimetris 12-kolom (8 kolom headline + CTA, 4 kolom metadata teknis dan koordinat).
* **Services Breakdown:** Konten ruang lingkup di kolom 8, sementara kolom 4 menampilkan ringkasan durasi dan deliverables.
* **Portfolio Filter Stream:** Proyek ditampilkan di 8 kolom utama, dengan filter kategori interaktif di sidebar 4 kolom.

## Graphics & Depth
* **Shadows:** L0 flat, L1 `0 1px 2px rgba(0, 0, 0, 0.04)` + border tipis 1px.
* **Kedalaman:** Dibangun melalui pergerakan sticky sidebar metadata terhadap konten scroll utama.

## Guardrails
* Dilarang memecah pola grid 8/4 yang menjadi identitas preset ini.
* Dilarang menggunakan shadow tebal dramatis atau border-radius besar.
```

---

# PRESET 16 — HIGH-END OPULENT GOLD (Heritage, VIP & Haute Horlogerie)

## A. PRESET IDENTITY

**Archetype:** `HERITAGE OPULENCE / FORMAL FRAMING`

### Spatial Grammar
Formal symmetry, centered axes, framed visual zones, ceremonial spacing.

### Visual Rhythm
Slow and deliberate with strong pauses.

### Composition Grammar
Frames establish importance and hierarchy; symmetry is allowed when it conveys heritage.

### Typography Behavior
High-contrast serif with classical proportions and generous tracking.

### Image Behavior
Craft, objects, detail, heritage environments, and formal portraiture.

### Component Behavior
Frames and plaques rather than modern rounded cards.

### Motion Character
Minimal ceremonial reveal.

### Preset-Specific Anti-Slop
Do not mix contemporary startup UI patterns, playful geometry, or soft rounded cards.

### Distinctiveness Test
Grayscale must still show formal framing and ceremonial symmetry.

## B. SOURCE SPECIFICATION — PRESERVE

The following is the original preset specification. Treat its technical values as authoritative unless a project-specific requirement makes a change necessary.

```text
================================================================================
PRESET 16: HIGH-END OPULENT GOLD (Heritage, VIP & Haute Horlogerie)
================================================================================
---
version: "superdesign-alpha"
name: "High-end opulent gold"
archetype: "ARCHETYPE_GOLD_FRAMING"
description: "Opulent luxury system featuring full 4-sided gold decorative framing around headlines, media cards, and formal symmetrical layouts."
colors:
  background: "#0A0908"
  surface: "#161514"
  surface-dark: "#000000"
  text-primary: "#FAF9F6"
  text-secondary: "#A19E95"
  accent: "#D4AF37"
  link: "#D4AF37"
typography:
  display-lg:
    fontFamily: "Cinzel, serif"
    fontSize: "44px"
    fontWeight: 600
    lineHeight: "1.15"
    letterSpacing: "0.5px"
  headline-md:
    fontFamily: "Cinzel, serif"
    fontSize: "26px"
    fontWeight: 600
    lineHeight: "1.2"
    letterSpacing: "0.3px"
  body-md:
    fontFamily: "Cormorant Garamond, serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: "1.7"
    letterSpacing: "0px"
  label-md:
    fontFamily: "Cinzel, serif"
    fontSize: "10px"
    fontWeight: 600
    lineHeight: "1.2"
    letterSpacing: "0.25em"
spacing:
  base: "8px"
  gap: "16px"
  section-padding: "64px"
rounded:
  control: "2px"
  card: "2px"
  pill: "2px"
components:
  navbar:
    background: "#0A0908"
    height: "64px"
    border-bottom: "1px solid rgba(212, 175, 55, 0.3)"
  button-primary-hero:
    background: "#D4AF37"
    text-color: "#0A0908"
    radius: "2px"
    height: "44px"
    padding: "11px 24px"
    hover-background: "#E5C158"
  button-outline:
    background: "transparent"
    text-color: "#D4AF37"
    radius: "2px"
    height: "44px"
    padding: "11px 24px"
    border: "1px solid #D4AF37"
  card-panel:
    background: "#161514"
    radius: "2px"
    border: "1px solid #D4AF37"
---

## Overview
Sistem kemewahan warisan klasik (heritage luxury) yang formal dan monumental. Setiap panel dan kartu konten dikelilingi oleh bingkai emas 4 sisi penuh (`1px solid #D4AF37`), dipadukan dengan tipografi serif Cinzel bertrack lebar.

## Composition
* **Hero First Screen:** Simetris berwibawa di tengah. Headline dikelilingi bingkai emas 4 sisi, dengan foto panggung/karya berbingkai emas di bawahnya.
* **Services Panels:** Setiap layanan dibungkus dalam panel gelap berbingkai emas penuh dengan detail ornamen tipis.
* **Portfolio Showcase:** Grid foto formal simetris berbingkai emas seragam.

## Graphics & Depth
* **Frame Emas Penuh:** `border: 1px solid #D4AF37`.
* **Glow Emas Subtil:** `box-shadow: 0 4px 20px rgba(212, 175, 55, 0.15)`.

## Guardrails
* Dilarang menggunakan sudut membulat > 2px.
* Dilarang menggunakan font modern sans-serif.
* Dilarang menggunakan border yang hanya ada di 1 sisi (wajib bingkai 4 sisi penuh).
```

---

# PRESET 17 — PURE SWISS FLAT DESIGN (Data Portals & Infrastructure)

## A. PRESET IDENTITY

**Archetype:** `PURE SWISS FLAT / MODULAR BLOCKS`

### Spatial Grammar
Zero-gap modular blocks, hard boundaries, strong axes, flat planes.

### Visual Rhythm
Systematic and graphic; blocks form a visual syntax.

### Composition Grammar
Use contiguous modules and direct adjacency. White space is a deliberate block, not default padding.

### Typography Behavior
Bold neutral sans with strong labels and data hierarchy.

### Image Behavior
Use sparingly; diagrams and information blocks are usually stronger.

### Component Behavior
Flat modules, tables, dividers, and solid-color blocks.

### Motion Character
Minimal; state changes can be hard and immediate.

### Preset-Specific Anti-Slop
Do not add shadows, blur, soft gradients, or rounded containers.

### Distinctiveness Test
Without color, the block boundaries and zero-gap structure must remain unmistakable.

## B. SOURCE SPECIFICATION — PRESERVE

The following is the original preset specification. Treat its technical values as authoritative unless a project-specific requirement makes a change necessary.

```text
================================================================================
PRESET 17: PURE SWISS FLAT DESIGN (Data Portals & Infrastructure)
================================================================================
---
version: "superdesign-alpha"
name: "Pure swiss flat design"
archetype: "ARCHETYPE_SOLID_BLOCKS"
description: "Zero-shadow zero-blur flat system built on solid color modular blocks touching edge-to-edge with thick 2px borders."
colors:
  background: "#F4F4F6"
  surface: "#FFFFFF"
  surface-dark: "#1E293B"
  text-primary: "#0F172A"
  text-secondary: "#64748B"
  accent: "#2563EB"
  link: "#2563EB"
typography:
  display-lg:
    fontFamily: "Geist, sans-serif"
    fontSize: "44px"
    fontWeight: 700
    lineHeight: "1.0"
    letterSpacing: "-0.5px"
  headline-md:
    fontFamily: "Geist, sans-serif"
    fontSize: "28px"
    fontWeight: 700
    lineHeight: "1.1"
    letterSpacing: "-0.3px"
  body-md:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: "1.55"
    letterSpacing: "0px"
  label-md:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "11px"
    fontWeight: 700
    lineHeight: "1.2"
    letterSpacing: "0.08em"
spacing:
  base: "8px"
  gap: "0px"
  section-padding: "52px"
rounded:
  control: "0px"
  card: "0px"
  pill: "0px"
components:
  navbar:
    background: "#FFFFFF"
    height: "52px"
    border-bottom: "2px solid #E2E8F0"
  button-primary-hero:
    background: "#2563EB"
    text-color: "#FFFFFF"
    radius: "0px"
    height: "42px"
    padding: "10px 20px"
    hover-background: "#1D4ED8"
  button-outline:
    background: "#FFFFFF"
    text-color: "#0F172A"
    radius: "0px"
    height: "42px"
    padding: "10px 20px"
    border: "2px solid #E2E8F0"
  card-panel:
    background: "#FFFFFF"
    radius: "0px"
    border: "2px solid #E2E8F0"
---

## Overview
Sistem desain flat Swiss murni tanpa bayangan dan tanpa efek blur. Geometri visual terbentuk dari blok-blok warna solid modular yang menempel rapat tanpa celah (`gap-0`) dan dibatasi oleh garis border 2px solid.

## Composition
* **Hero First Screen:** Blok warna solid penuh dengan headline besar di dalam boks bergaris 2px tegas, menolak elemen foto mengambang.
* **Modular Block Grid:** Kotak-kotak layanan warna solid berbeda yang berbatasan langsung satu sama lain.
* **Data Matrix:** Tabel data monokrom bergaris 2px dengan angka condensed tegas.

## Graphics & Depth
* **Nol Shadow & Nol Blur:** Kedalaman murni dari pembagian blok warna solid dan garis border 2px.

## Guardrails
* Dilarang menggunakan shadow apapun (drop shadow, inner shadow).
* Dilarang menggunakan border-radius > 0px.
* Dilarang menggunakan gradien warna.
```

---

# PRESET 18 — MATERIAL YOU DYNAMIC SYSTEM (Apps & Modern Community)

## A. PRESET IDENTITY

**Archetype:** `MATERIAL TACTILE / ELEVATION HIERARCHY`

### Spatial Grammar
Layered rounded surfaces with explicit physical elevation.

### Visual Rhythm
Stack → elevate → interact → settle.

### Composition Grammar
Surface hierarchy is central. Interactive layers should physically separate from background.

### Typography Behavior
Friendly modern sans; comfortable and app-like.

### Image Behavior
App states, community content, and friendly illustrations.

### Component Behavior
Elevated cards, sheets, chips, floating controls, and material surfaces.

### Motion Character
Physical transitions: lift, settle, expand, and state change.

### Preset-Specific Anti-Slop
Do not combine this with flat Swiss boundaries or sharp industrial geometry.

### Distinctiveness Test
In grayscale, elevation and rounded surface hierarchy must remain visible.

## B. SOURCE SPECIFICATION — PRESERVE

The following is the original preset specification. Treat its technical values as authoritative unless a project-specific requirement makes a change necessary.

```text
================================================================================
PRESET 18: MATERIAL YOU DYNAMIC SYSTEM (Apps & Modern Community)
================================================================================
---
version: "superdesign-alpha"
name: "Material you dynamic system"
archetype: "ARCHETYPE_MATERIAL_ELEVATION"
description: "Soft modern app layout featuring 28px rounded floating panels, multi-tier physical elevation shadows, and pill-shaped interactive controls."
colors:
  background: "#F8FDFF"
  surface: "#E0E0FF"
  surface-dark: "#1D1B20"
  text-primary: "#1D1B20"
  text-secondary: "#49454F"
  accent: "#414E9B"
  link: "#414E9B"
typography:
  display-lg:
    fontFamily: "Outfit, sans-serif"
    fontSize: "40px"
    fontWeight: 600
    lineHeight: "1.1"
    letterSpacing: "-0.3px"
  headline-md:
    fontFamily: "Outfit, sans-serif"
    fontSize: "26px"
    fontWeight: 600
    lineHeight: "1.2"
    letterSpacing: "-0.1px"
  body-md:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.55"
    letterSpacing: "0px"
  label-md:
    fontFamily: "Outfit, sans-serif"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: "1.2"
    letterSpacing: "0.1em"
spacing:
  base: "8px"
  gap: "16px"
  section-padding: "56px"
rounded:
  control: "9999px"
  card: "28px"
  pill: "9999px"
components:
  navbar:
    background: "rgba(248, 253, 255, 0.9)"
    backdrop-filter: "blur(12px)"
    height: "60px"
  button-primary-hero:
    background: "#414E9B"
    text-color: "#FFFFFF"
    radius: "9999px"
    height: "44px"
    padding: "11px 24px"
    hover-background: "#323E82"
  button-outline:
    background: "#E0E0FF"
    text-color: "#1D1B20"
    radius: "9999px"
    height: "44px"
    padding: "11px 24px"
  card-panel:
    background: "#E0E0FF"
    radius: "28px"
    shadow: "0 4px 8px rgba(0, 0, 0, 0.12), 0 1px 3px rgba(0, 0, 0, 0.08)"
---

## Overview
Sistem dinamis berbasis filosofi Material You. Mengutamakan kartu-kartu ber-radius besar (28px) yang melayang dengan elevasi bayangan fisik bertingkat dan tombol-tombol berbentuk kapsul bulat (pill).

## Composition
* **Hero First Screen:** Panel kartu raksasa radius 28px melayang di atas background dengan bayangan elevasi yang jelas.
* **Stacking Rounded Cards:** Kartu-kartu layanan bertumpuk dengan bayangan yang semakin tebal pada layer yang lebih tinggi.
* **Pill Testimonials:** Kutipan di dalam wadah pill raksasa dengan foto melayang di sudutnya.

## Graphics & Depth
* **Elevasi Bertingkat Material:**
  * L1: `0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08)`
  * L2: `0 4px 8px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.08)`
  * L3: `0 8px 16px rgba(0,0,0,0.14), 0 4px 8px rgba(0,0,0,0.10)`

## Guardrails
* Dilarang menggunakan sudut tajam 0px.
* Dilarang menggunakan bayangan hitam pekat (wajib bayangan difus lembut).
```

---

# PRESET 19 — WEB3 HOLOGRAPHIC CYBERPUNK (Gaming, Metaverse & DAO)

## A. PRESET IDENTITY

**Archetype:** `HOLOGRAPHIC CYBERPUNK / NEON LAYERING`

### Spatial Grammar
Dark space with translucent layers, luminous edges, and depth through glow.

### Visual Rhythm
Pulsed and reactive, with high-energy focal moments.

### Composition Grammar
Layered interface surfaces may overlap; visual hierarchy is controlled by luminance and glow.

### Typography Behavior
Mono display reinforces machine/cyber identity.

### Image Behavior
Digital worlds, gaming visuals, abstract 3D, and technical environments.

### Component Behavior
Glass panels, neon controls, holographic frames, system overlays.

### Motion Character
Reactive, ambient, and state-driven; never animate everything simultaneously.

### Preset-Specific Anti-Slop
Do not use rainbow gradients, random holographic objects, or decorative blockchain terminology.

### Distinctiveness Test
Without color, transparency, layering, and luminous hierarchy must still distinguish the preset.

## B. SOURCE SPECIFICATION — PRESERVE

The following is the original preset specification. Treat its technical values as authoritative unless a project-specific requirement makes a change necessary.

```text
================================================================================
PRESET 19: WEB3 HOLOGRAPHIC CYBERPUNK (Gaming, Metaverse & DAO)
================================================================================
---
version: "superdesign-alpha"
name: "Web3 holographic cyberpunk"
archetype: "ARCHETYPE_HOLOGRAPHIC_GLOW"
description: "Futuristic cyberpunk system featuring neon magenta-to-cyan text gradients, animated holographic grids, and glowing glass panels."
colors:
  background: "#050508"
  surface: "#0D0E15"
  surface-dark: "#151722"
  text-primary: "#FFFFFF"
  text-secondary: "#94A3B8"
  accent: "#FF007A"
  link: "#00F0FF"
typography:
  display-lg:
    fontFamily: "Space Mono, monospace"
    fontSize: "40px"
    fontWeight: 700
    lineHeight: "1.1"
    letterSpacing: "0.5px"
  headline-md:
    fontFamily: "Space Mono, monospace"
    fontSize: "26px"
    fontWeight: 700
    lineHeight: "1.2"
    letterSpacing: "0.2px"
  body-md:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "1.6"
    letterSpacing: "0px"
  label-md:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "11px"
    fontWeight: 500
    lineHeight: "1.2"
    letterSpacing: "0.2em"
spacing:
  base: "8px"
  gap: "16px"
  section-padding: "60px"
rounded:
  control: "9999px"
  card: "16px"
  pill: "9999px"
components:
  navbar:
    background: "rgba(5, 5, 8, 0.85)"
    backdrop-filter: "blur(20px)"
    height: "56px"
    border-bottom: "1px solid rgba(255, 0, 122, 0.2)"
  button-primary-hero:
    background: "#FF007A"
    text-color: "#FFFFFF"
    radius: "9999px"
    height: "44px"
    padding: "11px 24px"
    hover-background: "#FF2A94"
    shadow: "0 0 24px rgba(255, 0, 122, 0.4)"
  button-outline:
    background: "rgba(255, 255, 255, 0.04)"
    text-color: "#00F0FF"
    radius: "9999px"
    height: "44px"
    padding: "11px 24px"
    border: "1px solid rgba(0, 240, 255, 0.3)"
  card-panel:
    background: "#0D0E15"
    radius: "16px"
    border: "1px solid rgba(255, 0, 122, 0.2)"
---

## Overview
Sistem holografik futuristik bertema cyberpunk. Menggabungkan kanvas hitam obsidian (`#050508`), panel semi-transparan (`#0D0E15`), dan gradien neon dua warna yang mencolok (magenta `#FF007A` ke cyan `#00F0FF`).

## Composition
* **Hero First Screen:** Headline Space Mono dengan teks beraksen neon magenta, dilatari oleh garis grid holografik tipis.
* **Bento Glass Cards:** Panel bento 3x3 dengan border gradien neon yang menyala saat di-hover.
* **Hover Reveal Showcase:** Grid proyek yang menampilkan frame neon saat tersentuh kursor.

## Graphics & Depth
* **Neon Glow:** `box-shadow: 0 0 24px rgba(255, 0, 122, 0.3)`.
* **Glass Panel:** `background: rgba(13, 14, 21, 0.7); backdrop-filter: blur(16px)`.

## Guardrails
* Dilarang menggunakan latar belakang putih atau abu-abu terang.
* Dilarang menggunakan font serif klasik.
```

---

# PRESET 20 — PLAYFUL GEOMETRIC MEMPHIS (Kids, Pop Fest & Creative Food)

## A. PRESET IDENTITY

**Archetype:** `MEMPHIS / GEOMETRIC PLAY`

### Spatial Grammar
Asymmetric placement of circles, lines, triangles, and blocks around a stable content core.

### Visual Rhythm
Irregular, cheerful, rhythmic.

### Composition Grammar
Content remains structurally clear while geometry creates peripheral energy.

### Typography Behavior
Bold friendly sans; short copy supports visual play.

### Image Behavior
Bright food, children, creators, events, and colorful scenes.

### Component Behavior
Graphic containers, shapes, labels, and playful blocks.

### Motion Character
Small bounces or quick transitions can reinforce playfulness.

### Preset-Specific Anti-Slop
Do not scatter shapes into reading paths or use geometry without compositional purpose.

### Distinctiveness Test
The geometric grammar should remain visible even if all colors are converted to gray.

## B. SOURCE SPECIFICATION — PRESERVE

The following is the original preset specification. Treat its technical values as authoritative unless a project-specific requirement makes a change necessary.

```text
================================================================================
PRESET 20: PLAYFUL GEOMETRIC MEMPHIS (Kids, Pop Fest & Creative Food)
================================================================================
---
version: "superdesign-alpha"
name: "Playful geometric memphis"
archetype: "ARCHETYPE_MEMPHIS_SHAPES"
description: "Vibrant Memphis-style layout featuring scattered abstract geometric shapes (triangles, squiggles, circles) and thick 3px black borders."
colors:
  background: "#FEF9C3"
  surface: "#F472B6"
  surface-dark: "#38BDF8"
  text-primary: "#000000"
  text-secondary: "#374151"
  accent: "#A855F7"
  link: "#A855F7"
typography:
  display-lg:
    fontFamily: "Plus Jakarta Sans, Fredoka, sans-serif"
    fontSize: "44px"
    fontWeight: 800
    lineHeight: "1.1"
    letterSpacing: "-0.5px"
  headline-md:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "26px"
    fontWeight: 800
    lineHeight: "1.2"
    letterSpacing: "-0.2px"
  body-md:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "16px"
    fontWeight: 500
    lineHeight: "1.6"
    letterSpacing: "0px"
  label-md:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "12px"
    fontWeight: 800
    lineHeight: "1.2"
    letterSpacing: "0.05em"
spacing:
  base: "8px"
  gap: "16px"
  section-padding: "56px"
rounded:
  control: "9999px"
  card: "24px"
  pill: "9999px"
components:
  navbar:
    background: "#FEF9C3"
    height: "60px"
    border-bottom: "3px solid #000000"
  button-primary-hero:
    background: "#A855F7"
    text-color: "#FFFFFF"
    radius: "9999px"
    height: "46px"
    padding: "12px 24px"
    border: "3px solid #000000"
    shadow: "4px 4px 0px #000000"
  button-outline:
    background: "#38BDF8"
    text-color: "#000000"
    radius: "9999px"
    height: "46px"
    padding: "12px 24px"
    border: "3px solid #000000"
    shadow: "4px 4px 0px #000000"
  card-panel:
    background: "#FFFFFF"
    radius: "24px"
    border: "3px solid #000000"
    shadow: "4px 4px 0px #000000"
---

## Overview
Sistem gaya Memphis yang ceria dan penuh bentuk abstrak (segitiga, lingkaran, squiggle). Memadukan latar kuning cerah (`#FEF9C3`), panel merah muda (`#F472B6`), dan biru muda (`#38BDF8`) dengan garis luar tebal 3px hitam.

## Composition
* **Hero First Screen:** Headline bold di tengah yang dikelilingi ornamen bentuk geometris tersebar di sekitarnya.
* **Masonry Asymmetrical Grid:** Kartu-kartu layanan warna-warni berukuran bervariasi dengan elemen geometris di sela-sela grid.
* **Testimonials:** Bentuk geometris tidak beraturan dengan teks kutipan kontras.

## Graphics & Depth
* **Hard Offset Shadows:** `4px 4px 0px #000000`.
* **Border:** `3px solid #000000`.

## Guardrails
* Dilarang menggunakan monokrom kaku atau gaya minimalis sunyi.
* Dilarang menggunakan bayangan blur halus.
```

---

# PRESET 21 — SOFT CLAYMORPHISM 3D (Casual Fintech & Edutech Apps)

## A. PRESET IDENTITY

**Archetype:** `CLAYMORPHISM / INFLATED PHYSICAL UI`

### Spatial Grammar
Large rounded masses with tactile depth; content sits on or inside inflated forms.

### Visual Rhythm
Soft, buoyant, repetitive physical rhythm.

### Composition Grammar
Controls and content behave like physical objects with thickness.

### Typography Behavior
Friendly rounded display; readable against low-contrast surfaces.

### Image Behavior
Soft illustrations, casual product imagery, friendly app scenes.

### Component Behavior
Inflated buttons, clay cards, bubbles, inset/extruded states.

### Motion Character
Small physical bounce/press behavior.

### Preset-Specific Anti-Slop
Do not introduce sharp borders, flat industrial modules, or high-contrast brutalist geometry.

### Distinctiveness Test
Even without color, the inflated/inset shadow physics must identify the preset.

## B. SOURCE SPECIFICATION — PRESERVE

The following is the original preset specification. Treat its technical values as authoritative unless a project-specific requirement makes a change necessary.

```text
================================================================================
PRESET 21: SOFT CLAYMORPHISM 3D (Casual Fintech & Edutech Apps)
================================================================================
---
version: "superdesign-alpha"
name: "Soft claymorphism 3d"
archetype: "ARCHETYPE_CLAY_3D"
description: "Tactile inflated 3D clay system built on double inner/outer shadow physics, 32px bulbous curves, and soft pastel purple tones."
colors:
  background: "#F3F0FF"
  surface: "#E0E7FF"
  surface-dark: "#2E1065"
  text-primary: "#1E1B4B"
  text-secondary: "#475569"
  accent: "#7C3AED"
  link: "#7C3AED"
typography:
  display-lg:
    fontFamily: "Outfit, sans-serif"
    fontSize: "42px"
    fontWeight: 600
    lineHeight: "1.1"
    letterSpacing: "-0.3px"
  headline-md:
    fontFamily: "Outfit, sans-serif"
    fontSize: "26px"
    fontWeight: 600
    lineHeight: "1.2"
    letterSpacing: "-0.1px"
  body-md:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.6"
    letterSpacing: "0px"
  label-md:
    fontFamily: "Outfit, sans-serif"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: "1.2"
    letterSpacing: "0.1em"
spacing:
  base: "8px"
  gap: "16px"
  section-padding: "56px"
rounded:
  control: "9999px"
  card: "32px"
  pill: "9999px"
components:
  navbar:
    background: "#F3F0FF"
    height: "60px"
  button-primary-hero:
    background: "#7C3AED"
    text-color: "#FFFFFF"
    radius: "9999px"
    height: "46px"
    padding: "12px 24px"
    shadow: "inset -4px -4px 8px rgba(255, 255, 255, 0.4), inset 4px 4px 8px rgba(0, 0, 0, 0.2), 6px 6px 16px rgba(124, 58, 237, 0.3)"
  button-outline:
    background: "#E0E7FF"
    text-color: "#1E1B4B"
    radius: "9999px"
    height: "46px"
    padding: "12px 24px"
    shadow: "inset -4px -4px 8px rgba(255, 255, 255, 0.6), inset 4px 4px 8px rgba(124, 58, 237, 0.1)"
  card-panel:
    background: "#E0E7FF"
    radius: "32px"
    shadow: "inset -8px -8px 16px rgba(255, 255, 255, 0.6), inset 8px 8px 16px rgba(124, 58, 237, 0.1), 8px 8px 16px rgba(124, 58, 237, 0.15)"
---

## Overview
Sistem claymorphism 3D yang lembut dan taktil, membuat elemen UI terlihat seperti terbuat dari tanah liat empuk (*inflated clay*). Menggunakan double shadow (inner shadow untuk ketebalan material + outer shadow untuk melayang).

## Composition
* **Hero First Screen:** Panel clay 3D timbul dari background ungu lembut (`#F3F0FF`), dengan tombol fisik membal.
* **Clay Card Grid:** Kartu-kartu tebal radius 32px yang saling berdekatan dengan efek timbul 3D seragam.
* **Clay Bubbles:** Balon fitur membal dengan highlight putih lembut di sudut kiri atas.

## Graphics & Depth
* **Double Clay Shadow Formula:** `inset -8px -8px 16px rgba(255,255,255,0.6), inset 8px 8px 16px rgba(124,58,237,0.1), 8px 8px 16px rgba(124,58,237,0.15)`.

## Guardrails
* Dilarang menggunakan border tajam 1px solid.
* Dilarang menggunakan radius kecil (<24px).
* Dilarang menggunakan warna hitam pekat.
```

---

# PRESET 22 — CORPORATE EXECUTIVE AUTHORITY (Holding, Maritime & Finance)

## A. PRESET IDENTITY

**Archetype:** `EXECUTIVE AUTHORITY / INSTITUTIONAL DOCUMENT`

### Spatial Grammar
Stable axes, formal columns, restrained asymmetry, clear executive hierarchy.

### Visual Rhythm
Measured and deliberate; information appears as evidence, capability, and governance.

### Composition Grammar
Use institutional dividers, summary sheets, credentials, operational proof, and controlled photography.

### Typography Behavior
Merriweather establishes authority; sans supports operational scanning.

### Image Behavior
Facilities, leadership, fleet, infrastructure, operations, and credible environments.

### Component Behavior
Formal panels, summary tables, evidence blocks, and restrained CTA controls.

### Motion Character
Functional only; no playful motion.

### Preset-Specific Anti-Slop
Do not make the page look like a generic SaaS dashboard or startup pitch deck.

### Distinctiveness Test
In grayscale, formal typography, institutional dividers, and document-like hierarchy must remain distinctive.

## B. SOURCE SPECIFICATION — PRESERVE

The following is the original preset specification. Treat its technical values as authoritative unless a project-specific requirement makes a change necessary.

```text
================================================================================
PRESET 22: CORPORATE EXECUTIVE AUTHORITY (Holding, Maritime & Finance)
================================================================================
---
version: "superdesign-alpha"
name: "Corporate executive authority"
archetype: "ARCHETYPE_AUTHORITY_MATRIX"
description: "Stately executive enterprise system defined by Merriweather serif headlines, bold navy top-dividers, and data-driven achievement metrics."
colors:
  background: "#F8FAFC"
  surface: "#FFFFFF"
  surface-dark: "#0F172A"
  text-primary: "#0F172A"
  text-secondary: "#334155"
  accent: "#1E40AF"
  link: "#1E40AF"
typography:
  display-lg:
    fontFamily: "Merriweather, serif"
    fontSize: "38px"
    fontWeight: 700
    lineHeight: "1.2"
    letterSpacing: "-0.5px"
  headline-md:
    fontFamily: "Merriweather, serif"
    fontSize: "24px"
    fontWeight: 700
    lineHeight: "1.25"
    letterSpacing: "-0.2px"
  body-md:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: "1.6"
    letterSpacing: "0px"
  label-md:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "11px"
    fontWeight: 600
    lineHeight: "1.2"
    letterSpacing: "0.1em"
spacing:
  base: "8px"
  gap: "16px"
  section-padding: "60px"
rounded:
  control: "4px"
  card: "4px"
  pill: "4px"
components:
  navbar:
    background: "#FFFFFF"
    height: "60px"
    border-bottom: "2px solid #1E40AF"
  button-primary-hero:
    background: "#1E40AF"
    text-color: "#FFFFFF"
    radius: "4px"
    height: "42px"
    padding: "10px 20px"
    hover-background: "#1E3A8A"
  button-outline:
    background: "#FFFFFF"
    text-color: "#0F172A"
    radius: "4px"
    height: "42px"
    padding: "10px 20px"
    border: "1px solid #CBD5E1"
  card-panel:
    background: "#FFFFFF"
    radius: "4px"
    border: "1px solid #CBD5E1"
    border-top: "3px solid #1E40AF"
---

## Overview
Sistem korporat formal berwibawa tinggi (*executive authority*). Menggunakan tipografi serif Merriweather yang kokoh dan garis pembatas biru tebal 3px di bagian atas setiap panel kartu.

## Composition
* **Hero First Screen:** Headline formal Merriweather dengan garis aksen biru tebal di atas judul, didampingi foto profesional di sisi kanan.
* **Services Grid:** Grid 4-kolom kartu putih dengan border atas 3px biru tua, berfokus pada data angka pencapaian.
* **Executive Summary:** Lembar ringkasan formal dengan struktur multi-kolom rapi.

## Graphics & Depth
* **Divider Atas Tebal:** `border-top: 3px solid #1E40AF`.
* **Shadows:** L0 flat, L1 `0 1px 3px rgba(15, 23, 42, 0.08)`.

## Guardrails
* Dilarang menggunakan font playful atau rounded.
* Dilarang menggunakan sudut membulat lebar.
```

---

# PRESET 23 — HAND-DRAWN INDIE SKETCH (Artisan, Bakery & Handmade)

## A. PRESET IDENTITY

**Archetype:** `INDIE SCRAPBOOK / HANDMADE IMPERFECTION`

### Spatial Grammar
Irregular edges, rotated media, overlapping paper-like objects, but stable reading order.

### Visual Rhythm
Human and slightly unpredictable.

### Composition Grammar
Controlled imperfection: not every object aligns, but important content remains easy to scan.

### Typography Behavior
Handwritten display is an accent voice; body remains highly readable.

### Image Behavior
Real process, handmade objects, workspace, food, maker portraits.

### Component Behavior
Paper notes, taped images, irregular frames, handwritten labels.

### Motion Character
Small hand-made feel: subtle tilt/reveal; avoid polished corporate transitions.

### Preset-Specific Anti-Slop
Do not make every element crooked or fill the page with fake tape/doodles.

### Distinctiveness Test
Grayscale should retain paper, rotation, and handmade framing.

## B. SOURCE SPECIFICATION — PRESERVE

The following is the original preset specification. Treat its technical values as authoritative unless a project-specific requirement makes a change necessary.

```text
================================================================================
PRESET 23: HAND-DRAWN INDIE SKETCH (Artisan, Bakery & Handmade)
================================================================================
---
version: "superdesign-alpha"
name: "Hand-drawn indie sketch"
archetype: "ARCHETYPE_INDIE_SCRAPBOOK"
description: "Charming artisanal system featuring Caveat script headlines, irregular wavy border radii, -2° rotated photos, and paper textures."
colors:
  background: "#FFFDF9"
  surface: "#F7F3E9"
  surface-dark: "#292524"
  text-primary: "#1C1917"
  text-secondary: "#57534E"
  accent: "#EA580C"
  link: "#EA580C"
typography:
  display-lg:
    fontFamily: "Caveat, cursive"
    fontSize: "44px"
    fontWeight: 700
    lineHeight: "1.15"
    letterSpacing: "0px"
  headline-md:
    fontFamily: "Caveat, cursive"
    fontSize: "28px"
    fontWeight: 700
    lineHeight: "1.2"
    letterSpacing: "0px"
  body-md:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: "1.6"
    letterSpacing: "0px"
  label-md:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: "1.2"
    letterSpacing: "0.05em"
spacing:
  base: "8px"
  gap: "16px"
  section-padding: "52px"
rounded:
  control: "9999px"
  card: "255px 15px 225px 15px/15px 225px 15px 255px"
  pill: "9999px"
components:
  navbar:
    background: "#FFFDF9"
    height: "56px"
    border-bottom: "1px solid rgba(28, 25, 23, 0.1)"
  button-primary-hero:
    background: "#EA580C"
    text-color: "#FFFFFF"
    radius: "9999px"
    height: "42px"
    padding: "10px 22px"
    hover-background: "#C2410C"
  button-outline:
    background: "transparent"
    text-color: "#1C1917"
    radius: "9999px"
    height: "42px"
    padding: "10px 22px"
    border: "1.5px solid #1C1917"
  card-panel:
    background: "#F7F3E9"
    radius: "255px 15px 225px 15px/15px 225px 15px 255px"
    border: "1.5px solid rgba(28, 25, 23, 0.15)"
---

## Overview
Sistem scrapbook artisanal yang hangat dan personal. Menggunakan font tulisan tangan Caveat pada headline, border-radius tidak beraturan yang bergelombang alami (*wavy irregular radius*), dan foto-foto yang dipasang sedikit miring (-2° s/d 2°).

## Composition
* **Hero First Screen:** Headline tulisan tangan dengan garis bawah coretan tangan, didampingi foto produk miring -2° bergaya album fisik.
* **Scrapbook Services:** Kartu-kartu ber-border organik tidak simetris yang bersusun tumpang tindih lembut.
* **Paper Note Testimonials:** Kutipan di atas panel bertekstur kertas sobek.

## Graphics & Depth
* **Wavy Irregular Radius:** `border-radius: 255px 15px 225px 15px/15px 225px 15px 255px`.
* **Shadows:** Bayangan sangat lembut `0 4px 12px rgba(0, 0, 0, 0.05)`.

## Guardrails
* Dilarang menggunakan font geometris kaku.
* Dilarang menggunakan foto yang tegak lurus sempurna tanpa rotasi scrapbook.
```

---

# PRESET 24 — HEAVY INDUSTRIAL HARDWARE (Machinery & Construction)

## A. PRESET IDENTITY

**Archetype:** `INDUSTRIAL HARDWARE / SAFETY SYSTEM`

### Spatial Grammar
Rigid horizontal/vertical engineering structure; hard boundaries and technical zones.

### Visual Rhythm
Functional and robust, with occasional hazard emphasis.

### Composition Grammar
Specifications, capacity, dimensions, process, and equipment evidence dominate.

### Typography Behavior
Condensed uppercase is used for industrial authority and labeling.

### Image Behavior
Actual machinery, facilities, construction environments, materials.

### Component Behavior
Specification tables, hard panels, safety markers, technical labels.

### Motion Character
Functional status and mechanical transitions only.

### Preset-Specific Anti-Slop
Do not overuse hazard stripes; they are an emphasis device, not a background texture everywhere.

### Distinctiveness Test
The industrial technical structure must remain obvious without yellow.

## B. SOURCE SPECIFICATION — PRESERVE

The following is the original preset specification. Treat its technical values as authoritative unless a project-specific requirement makes a change necessary.

```text
================================================================================
PRESET 24: HEAVY INDUSTRIAL HARDWARE (Machinery & Construction)
================================================================================
---
version: "superdesign-alpha"
name: "Heavy industrial hardware"
archetype: "ARCHETYPE_HAZARD_STEEL"
description: "Rugged industrial system defined by condensed uppercase Oswald headlines, yellow hazard-stripes, and thick 2px slate borders."
colors:
  background: "#0F172A"
  surface: "#1E293B"
  surface-dark: "#000000"
  text-primary: "#F8FAFC"
  text-secondary: "#94A3B8"
  accent: "#FACC15"
  link: "#FACC15"
typography:
  display-lg:
    fontFamily: "Oswald, sans-serif"
    fontSize: "48px"
    fontWeight: 700
    lineHeight: "1.0"
    letterSpacing: "1px"
  headline-md:
    fontFamily: "Oswald, sans-serif"
    fontSize: "28px"
    fontWeight: 700
    lineHeight: "1.1"
    letterSpacing: "0.5px"
  body-md:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: "1.5"
    letterSpacing: "0px"
  label-md:
    fontFamily: "Oswald, sans-serif"
    fontSize: "12px"
    fontWeight: 700
    lineHeight: "1.2"
    letterSpacing: "0.15em"
spacing:
  base: "8px"
  gap: "12px"
  section-padding: "56px"
rounded:
  control: "0px"
  card: "0px"
  pill: "0px"
components:
  navbar:
    background: "#0F172A"
    height: "56px"
    border-bottom: "2px solid #FACC15"
  button-primary-hero:
    background: "#FACC15"
    text-color: "#0F172A"
    radius: "0px"
    height: "44px"
    padding: "11px 22px"
    hover-background: "#EAB308"
  button-outline:
    background: "transparent"
    text-color: "#FACC15"
    radius: "0px"
    height: "44px"
    padding: "11px 22px"
    border: "2px solid #FACC15"
  card-panel:
    background: "#1E293B"
    radius: "0px"
    border: "2px solid #334155"
---

## Overview
Sistem industri berat (*heavy industrial*) yang tangguh dan maskulin. Menggunakan kanvas baja gelap (`#0F172A`), panel besi (`#1E293B`), dan aksen kuning keselamatan kerja (*hazard yellow* `#FACC15`).

## Composition
* **Hero First Screen:** Headline condensed kapital besar berlatar garis hazard-stripe diagonal (kuning-hitam) sebagai pembatas visual, didampingi foto alat berat/fasad baja.
* **Technical Spec Grid:** Grid spesifikasi mesin dengan border 2px slate tebal dan label kapasitas muatan riil.
* **Steel Footer:** Ditutup dengan footer baja gelap bergaris hazard stripe di border atas.

## Graphics & Depth
* **Hazard Stripe Pattern:** `repeating-linear-gradient(45deg, #FACC15, #FACC15 10px, #000000 10px, #000000 20px)`.
* **Border:** `2px solid #334155`.

## Guardrails
* Dilarang menggunakan font serif atau sudut membulat (wajib 0px tajam).
* Dilarang menggunakan warna pastel lembut.
```

---

# PRESET 25 — HIGH-TECH ENTERPRISE INFRASTRUCTURE (Cloud & Telecom)

## A. PRESET IDENTITY

**Archetype:** `MISSION-CRITICAL INFRASTRUCTURE / TELEMETRY`

### Spatial Grammar
Dark operational canvas, compact data panels, explicit relationships between systems.

### Visual Rhythm
Monitoring rhythm: status → metric → relationship → detail.

### Composition Grammar
Use telemetry, topology, availability, infrastructure relationships, and technical evidence when real.

### Typography Behavior
Neutral technical sans plus mono data.

### Image Behavior
Infrastructure, network maps, server environments, architecture diagrams.

### Component Behavior
Metric panels, status rows, topology lines, data tables.

### Motion Character
Status changes and live-like behavior only when the data is genuinely dynamic.

### Preset-Specific Anti-Slop
Never invent live telemetry or fake uptime numbers.

### Distinctiveness Test
Grayscale must retain the operational dashboard/topology grammar.

## B. SOURCE SPECIFICATION — PRESERVE

The following is the original preset specification. Treat its technical values as authoritative unless a project-specific requirement makes a change necessary.

```text
================================================================================
PRESET 25: HIGH-TECH ENTERPRISE INFRASTRUCTURE (Cloud & Telecom)
================================================================================
---
version: "superdesign-alpha"
name: "High-tech enterprise infrastructure"
archetype: "ARCHETYPE_CIRCUIT_DASHBOARD"
description: "Mission-critical infrastructure system featuring Geist typography, dashboard telemetry metric cards, and connected cyan circuit lines."
colors:
  background: "#030712"
  surface: "#0B1528"
  surface-dark: "#111827"
  text-primary: "#F9FAFB"
  text-secondary: "#94A3B8"
  accent: "#0EA5E9"
  link: "#0EA5E9"
typography:
  display-lg:
    fontFamily: "Geist, sans-serif"
    fontSize: "42px"
    fontWeight: 700
    lineHeight: "1.05"
    letterSpacing: "-0.5px"
  headline-md:
    fontFamily: "Geist, sans-serif"
    fontSize: "26px"
    fontWeight: 600
    lineHeight: "1.15"
    letterSpacing: "-0.3px"
  body-md:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "1.6"
    letterSpacing: "0px"
  label-md:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "11px"
    fontWeight: 500
    lineHeight: "1.2"
    letterSpacing: "0.1em"
spacing:
  base: "8px"
  gap: "12px"
  section-padding: "56px"
rounded:
  control: "6px"
  card: "6px"
  pill: "9999px"
components:
  navbar:
    background: "rgba(3, 7, 18, 0.85)"
    backdrop-filter: "blur(16px)"
    height: "52px"
    border-bottom: "1px solid rgba(14, 165, 233, 0.2)"
  button-primary-hero:
    background: "#0EA5E9"
    text-color: "#030712"
    radius: "6px"
    height: "40px"
    padding: "10px 18px"
    hover-background: "#38BDF8"
  button-outline:
    background: "rgba(255, 255, 255, 0.04)"
    text-color: "#0EA5E9"
    radius: "6px"
    height: "40px"
    padding: "10px 18px"
    border: "1px solid rgba(14, 165, 233, 0.3)"
  card-panel:
    background: "#0B1528"
    radius: "6px"
    border: "1px solid rgba(14, 165, 233, 0.2)"
---

## Overview
Sistem infrastruktur cloud dan pusat data (*telemetry dashboard*). Berpijak pada kanvas gelap pekat (`#030712`), panel telemetri biru malam (`#0B1528`), dan garis-garis circuit board penghubung antar kartu.

## Composition
* **Hero First Screen:** Headline presisi di kiri, panel telemetri live stats di kanan dengan status indicator dot hijau aktif.
* **Circuit Grid Services:** Kartu-kartu dashboard metrik yang terhubung garis biru tipis seperti jalur sirkuit listrik.
* **Data Table Specs:** Tabel spesifikasi data server dengan font monospace JetBrains Mono.

## Graphics & Depth
* **Circuit Border:** `1px solid rgba(14, 165, 233, 0.2)`.
* **Glow Data:** `box-shadow: 0 4px 16px rgba(14, 165, 233, 0.1)`.

## Guardrails
* Dilarang menggunakan font serif atau warna hangat kemerahan.
```

---

# PRESET 26 — SOFT TACTILE NEUMORPHISM (Smart Devices & Audio)

## A. PRESET IDENTITY

**Archetype:** `NEUMORPHIC DEVICE / PHYSICAL AFFORDANCE`

### Spatial Grammar
Single material plane; raised and recessed elements create the entire hierarchy.

### Visual Rhythm
Calm tactile repetition.

### Composition Grammar
Interactive objects should look physically pressable; static areas remain flatter.

### Typography Behavior
Neutral, highly legible sans because low-contrast surfaces already provide visual complexity.

### Image Behavior
Device controls, audio interfaces, tactile hardware.

### Component Behavior
Extruded controls, inset panels, physical knobs/tiles.

### Motion Character
Press, depress, release, and state transitions.

### Preset-Specific Anti-Slop
Do not add conventional borders or strong color blocks that destroy the material illusion.

### Distinctiveness Test
Remove all color differences: the shadow physics must still reveal the design system.

## B. SOURCE SPECIFICATION — PRESERVE

The following is the original preset specification. Treat its technical values as authoritative unless a project-specific requirement makes a change necessary.

```text
================================================================================
PRESET 26: SOFT TACTILE NEUMORPHISM (Smart Devices & Audio)
================================================================================
---
version: "superdesign-alpha"
name: "Soft tactile neumorphism"
archetype: "ARCHETYPE_TACTILE_NEUMORPH"
description: "Tactile device system where background and panels share the EXACT SAME COLOR (#E0E5EC), differentiated purely by extruded/inset shadows."
colors:
  background: "#E0E5EC"
  surface: "#E0E5EC"
  surface-dark: "#1E293B"
  text-primary: "#2D3748"
  text-secondary: "#718096"
  accent: "#4A90E2"
  link: "#4A90E2"
typography:
  display-lg:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "40px"
    fontWeight: 600
    lineHeight: "1.1"
    letterSpacing: "-0.3px"
  headline-md:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "26px"
    fontWeight: 600
    lineHeight: "1.2"
    letterSpacing: "-0.1px"
  body-md:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: "1.6"
    letterSpacing: "0px"
  label-md:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "11px"
    fontWeight: 600
    lineHeight: "1.2"
    letterSpacing: "0.1em"
spacing:
  base: "8px"
  gap: "16px"
  section-padding: "56px"
rounded:
  control: "9999px"
  card: "20px"
  pill: "9999px"
components:
  navbar:
    background: "#E0E5EC"
    height: "60px"
  button-primary-hero:
    background: "#E0E5EC"
    text-color: "#4A90E2"
    radius: "9999px"
    height: "44px"
    padding: "11px 24px"
    shadow: "-6px -6px 12px #FFFFFF, 6px 6px 12px rgba(163, 177, 198, 0.6)"
  button-outline:
    background: "#E0E5EC"
    text-color: "#2D3748"
    radius: "9999px"
    height: "44px"
    padding: "11px 24px"
    shadow: "inset 4px 4px 8px rgba(163, 177, 198, 0.6), inset -4px -4px 8px #FFFFFF"
  card-panel:
    background: "#E0E5EC"
    radius: "20px"
    shadow: "-6px -6px 12px #FFFFFF, 6px 6px 12px rgba(163, 177, 198, 0.6)"
---

## Overview
Sistem taktil fisik neumorphik perangkat keras audio. Fitur kuncinya: **Warna Background dan Panel SAMA PERSIS (`#E0E5EC`)**. Kedalaman bentuk dibentuk 100% dari bayangan extruded (timbul) dan inset (tenggelam).

## Composition
* **Hero First Screen:** Headline di dalam panel timbul halus, dengan tombol pill fisik yang tampak membal keluar dari layar.
* **Tactile Button Grid:** Layanan ditampilkan sebagai panel tombol fisik besar yang bisa ditekan.
* **Inset Testimonials:** Kutipan di dalam panel tenggelam (inset shadow), kontras dari panel layanan yang timbul.

## Graphics & Depth
* **Extruded Shadow:** `-6px -6px 12px #FFFFFF, 6px 6px 12px rgba(163, 177, 198, 0.6)`.
* **Inset Shadow:** `inset 6px 6px 12px rgba(163, 177, 198, 0.6), inset -6px -6px 12px #FFFFFF`.

## Guardrails
* Dilarang menggunakan border hitam atau warna latar belakang yang berbeda antara base dan panel (wajib identik `#E0E5EC`).
```

---

# PRESET 27 — QUIET LUXURY MINIMAL (Private Bespoke & High Art)

## A. PRESET IDENTITY

**Archetype:** `QUIET LUXURY / WHITESPACE AS MATERIAL`

### Spatial Grammar
Extremely open composition, narrow text measures, isolated objects, long pauses.

### Visual Rhythm
Slow and sparse.

### Composition Grammar
A small number of elements receive disproportionate attention through space, not size.

### Typography Behavior
Serif voice with generous line-height and restrained scale.

### Image Behavior
Few, highly curated images; quality and context matter more than quantity.

### Component Behavior
Prefer naked content, rules, captions, and simple controls over cards.

### Motion Character
Slow fade/reveal only.

### Preset-Specific Anti-Slop
Do not fill empty space with cards, decorative shapes, or oversized marketing copy.

### Distinctiveness Test
If the page still looks crowded after removing color, the preset has failed.

## B. SOURCE SPECIFICATION — PRESERVE

The following is the original preset specification. Treat its technical values as authoritative unless a project-specific requirement makes a change necessary.

```text
================================================================================
PRESET 27: QUIET LUXURY MINIMAL (Private Bespoke & High Art)
================================================================================
---
version: "superdesign-alpha"
name: "Quiet luxury minimal"
archetype: "ARCHETYPE_WHITESPACE_FIRST"
description: "Extreme minimalist luxury system defined by massive deliberate whitespace, zero cards, zero borders, and slow single-image viewports."
colors:
  background: "#F7F5F0"
  surface: "#E8E4DC"
  surface-dark: "#D8D2C4"
  text-primary: "#1C1C1A"
  text-secondary: "#63615A"
  accent: "#3F5F4A"
  link: "#3F5F4A"
typography:
  display-lg:
    fontFamily: "Cormorant Garamond, serif"
    fontSize: "44px"
    fontWeight: 500
    lineHeight: "1.25"
    letterSpacing: "0px"
  headline-md:
    fontFamily: "Cormorant Garamond, serif"
    fontSize: "28px"
    fontWeight: 500
    lineHeight: "1.3"
    letterSpacing: "0px"
  body-md:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: "1.75"
    letterSpacing: "0px"
  label-md:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "11px"
    fontWeight: 500
    lineHeight: "1.2"
    letterSpacing: "0.2em"
spacing:
  base: "8px"
  gap: "24px"
  section-padding: "80px"
rounded:
  control: "0px"
  card: "0px"
  pill: "0px"
components:
  navbar:
    background: "#F7F5F0"
    height: "64px"
  button-primary-hero:
    background: "#1C1C1A"
    text-color: "#F7F5F0"
    radius: "0px"
    height: "44px"
    padding: "11px 24px"
    hover-background: "#3F5F4A"
  button-outline:
    background: "transparent"
    text-color: "#1C1C1A"
    radius: "0px"
    height: "44px"
    padding: "11px 24px"
    border: "1px solid #1C1C1A"
  card-panel:
    background: "transparent"
    radius: "0px"
---

## Overview
Preset yang paling sunyi dan eksklusif. Menghilangkan seluruh kotak kartu, border, dan bayangan. *Whitespace* luas adalah fitur utama yang menjadi pernyataan kemewahan.

## Composition
* **Hero First Screen:** Headline serif anggun di kiri dengan jeda kosong yang sangat luas di kanan sebelum foto kecil artistik muncul.
* **Services Columns:** Kolom teks sempit tanpa border atau kartu, dipisahkan oleh jeda vertikal yang sangat lega.
* **Single Image Portfolio:** 1 foto per viewport scroll lambat dengan caption 1 baris.

## Graphics & Depth
* **Nol Shadow & Nol Border:** Kedalaman murni dari ritme jeda ruang kosong.

## Guardrails
* Dilarang membuat card atau border apapun.
* Dilarang menampilkan banyak foto kecil sekaligus dalam 1 viewport.
```

---

# PRESET 28 — SOFT EDITORIAL (Design Journals & Boutique Interiors)

## A. PRESET IDENTITY

**Archetype:** `IMAGE-LED EDITORIAL / PUBLICATION`

### Spatial Grammar
Variable-width image blocks, editorial columns, asymmetric image/text relationships.

### Visual Rhythm
Image → caption → narrative → image; like a visual journal.

### Composition Grammar
Photography establishes the opening beat of each story unit.

### Typography Behavior
Serif editorial display plus small mono metadata.

### Image Behavior
Images are primary content, not decoration.

### Component Behavior
Captions, bylines, metadata, image frames, article blocks.

### Motion Character
Subtle editorial reveals; avoid app-like microinteractions.

### Preset-Specific Anti-Slop
Do not normalize every image to identical cards or dimensions.

### Distinctiveness Test
Grayscale must preserve the publication-like image sequencing.

## B. SOURCE SPECIFICATION — PRESERVE

The following is the original preset specification. Treat its technical values as authoritative unless a project-specific requirement makes a change necessary.

```text
================================================================================
PRESET 28: SOFT EDITORIAL (Design Journals & Boutique Interiors)
================================================================================
---
version: "superdesign-alpha"
name: "Soft editorial"
archetype: "ARCHETYPE_IMAGE_LED_JOURNAL"
description: "Image-led publication layout where variable-width photography leads every section before narrative text, framed by 1px micro-borders."
colors:
  background: "#F6F3ED"
  surface: "#DDD7CC"
  surface-dark: "#C8C0B0"
  text-primary: "#1E1D1A"
  text-secondary: "#666157"
  accent: "#A65D45"
  link: "#A65D45"
typography:
  display-lg:
    fontFamily: "Playfair Display, serif"
    fontSize: "44px"
    fontWeight: 500
    lineHeight: "1.15"
    letterSpacing: "0px"
  headline-md:
    fontFamily: "Playfair Display, serif"
    fontSize: "28px"
    fontWeight: 500
    lineHeight: "1.2"
    letterSpacing: "0px"
  body-md:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.65"
    letterSpacing: "0px"
  label-md:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "11px"
    fontWeight: 500
    lineHeight: "1.2"
    letterSpacing: "0.1em"
spacing:
  base: "8px"
  gap: "16px"
  section-padding: "60px"
rounded:
  control: "4px"
  card: "4px"
  pill: "9999px"
components:
  navbar:
    background: "#F6F3ED"
    height: "60px"
    border-bottom: "1px solid rgba(166, 93, 69, 0.15)"
  button-primary-hero:
    background: "#1E1D1A"
    text-color: "#F6F3ED"
    radius: "4px"
    height: "42px"
    padding: "10px 22px"
    hover-background: "#A65D45"
  button-outline:
    background: "transparent"
    text-color: "#1E1D1A"
    radius: "4px"
    height: "42px"
    padding: "10px 22px"
    border: "1px solid rgba(166, 93, 69, 0.3)"
  card-panel:
    background: "#F6F3ED"
    radius: "4px"
    border: "1px solid rgba(166, 93, 69, 0.15)"
---

## Overview
Sistem majalah visual di mana setiap item dibuka oleh foto berukuran variabel yang memimpin sebelum teks deskripsi di bawahnya (*image-led publication*).

## Composition
* **Hero First Screen:** Split 45/55 asimetris dengan micro-border 1px mengelilingi foto.
* **Image-Led Services:** Tiap item layanan dipimpin oleh foto dulu (lebar variabel) baru diikuti teks deskripsi.
* **Variable Width Blocks:** Susunan foto portofolio berdimensi campuran (sebagian lebar penuh, sebagian setengah).

## Graphics & Depth
* **Micro-Border:** `1px solid rgba(166, 93, 69, 0.15)`.
* **Shadow:** Sangat tipis `0 1px 2px rgba(0, 0, 0, 0.04)`.

## Guardrails
* Dilarang mengunci foto dalam boks berukuran sama seragam.
```

---

# PRESET 29 — ORGANIC MODERN (Eco Living & Botanical Architecture)

## A. PRESET IDENTITY

**Archetype:** `ORGANIC MODERN / FLOWING ENVIRONMENT`

### Spatial Grammar
Curved masks, flowing edges, overlaps, and content that can bleed into neighboring regions.

### Visual Rhythm
Natural and continuous.

### Composition Grammar
Images and text should feel connected to the environment rather than boxed into modules.

### Typography Behavior
Modern geometric sans balances organic imagery.

### Image Behavior
Botanical, architecture, landscape, material, and natural-light photography.

### Component Behavior
Curved media, open text blocks, soft containers where necessary.

### Motion Character
Slow, fluid, natural movement.

### Preset-Specific Anti-Slop
Do not combine organic forms with rigid corporate cards or excessive rectangular framing.

### Distinctiveness Test
Without color, flowing masks and edge bleeding must remain identifiable.

## B. SOURCE SPECIFICATION — PRESERVE

The following is the original preset specification. Treat its technical values as authoritative unless a project-specific requirement makes a change necessary.

```text
================================================================================
PRESET 29: ORGANIC MODERN (Eco Living & Botanical Architecture)
================================================================================
---
version: "superdesign-alpha"
name: "Organic modern"
archetype: "ARCHETYPE_BLOB_MASK"
description: "Fluid living system defined by organic curved blob photo masks bleeding to viewport edges, fluid whitespace, and warm earth tones."
colors:
  background: "#F3EFE7"
  surface: "#DDE5DB"
  surface-dark: "#C2D0BF"
  text-primary: "#1C211B"
  text-secondary: "#5A6359"
  accent: "#A7654B"
  link: "#A7654B"
typography:
  display-lg:
    fontFamily: "Cabinet Grotesk, sans-serif"
    fontSize: "42px"
    fontWeight: 600
    lineHeight: "1.1"
    letterSpacing: "-0.3px"
  headline-md:
    fontFamily: "Cabinet Grotesk, sans-serif"
    fontSize: "26px"
    fontWeight: 600
    lineHeight: "1.2"
    letterSpacing: "-0.1px"
  body-md:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.65"
    letterSpacing: "0px"
  label-md:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "11px"
    fontWeight: 600
    lineHeight: "1.2"
    letterSpacing: "0.1em"
spacing:
  base: "8px"
  gap: "16px"
  section-padding: "56px"
rounded:
  control: "9999px"
  card: "16px"
  pill: "9999px"
components:
  navbar:
    background: "rgba(243, 239, 231, 0.85)"
    backdrop-filter: "blur(12px)"
    height: "60px"
  button-primary-hero:
    background: "#1C211B"
    text-color: "#F3EFE7"
    radius: "9999px"
    height: "44px"
    padding: "11px 24px"
    hover-background: "#A7654B"
  button-outline:
    background: "transparent"
    text-color: "#1C211B"
    radius: "9999px"
    height: "44px"
    padding: "11px 24px"
    border: "1px solid #1C211B"
  card-panel:
    background: "#DDE5DB"
    radius: "16px"
---

## Overview
Sistem organik modern non-kartu. Menolak boks kaku dan menggantinya dengan foto bermasker lengkung organik (*blob mask*) yang mengalir bleeding ke tepi layar.

## Composition
* **Hero First Screen:** Foto besar dengan mask lengkung organik bleeding ke sisi kanan viewport.
* **Fluid Flow Services:** Teks mengalir bebas diselingi foto berkontur organik tanpa boks kartu.
* **Fluid Portfolio:** Galeri foto dengan variasi bentuk mask lengkung yang dinamis.

## Graphics & Depth
* **Blob Mask:** `clip-path` organik berkontur alami.
* **Shadow:** `0 4px 20px rgba(0, 0, 0, 0.06)`.

## Guardrails
* Dilarang menggunakan boks kartu kaku bersegi empat.
```

---

# PRESET 30 — SWISS MINIMAL (Graphic Bureau & Urban Analytics)

## A. PRESET IDENTITY

**Archetype:** `SWISS MINIMAL / ASYMMETRIC INFORMATION`

### Spatial Grammar
Uneven columns, strict alignment within each column, large negative space.

### Visual Rhythm
Quiet but intellectually tense through uneven proportions.

### Composition Grammar
Use metadata as a counterweight to narrative. Empty space is deliberately placed.

### Typography Behavior
Neutral sans + mono metadata; type size and position create the hierarchy.

### Image Behavior
Sparse and documentary; never decorative.

### Component Behavior
Rules, labels, tables, and open text blocks.

### Motion Character
Near-zero.

### Preset-Specific Anti-Slop
Do not turn Swiss asymmetry into arbitrary random placement.

### Distinctiveness Test
Remove color: column proportion, rules, and whitespace should identify it.

## B. SOURCE SPECIFICATION — PRESERVE

The following is the original preset specification. Treat its technical values as authoritative unless a project-specific requirement makes a change necessary.

```text
================================================================================
PRESET 30: SWISS MINIMAL (Graphic Bureau & Urban Analytics)
================================================================================
---
version: "superdesign-alpha"
name: "Swiss minimal"
archetype: "ARCHETYPE_ASYMMETRIC_SWISS"
description: "Ultra-calm Swiss system featuring deliberate uneven column widths (wide column 1, narrow column 2), razor-thin 1px borders, and pure whitespace."
colors:
  background: "#F5F5F2"
  surface: "#E5E5E0"
  surface-dark: "#D0D0C8"
  text-primary: "#181816"
  text-secondary: "#575650"
  accent: "#3F6B52"
  link: "#3F6B52"
typography:
  display-lg:
    fontFamily: "Geist, sans-serif"
    fontSize: "42px"
    fontWeight: 700
    lineHeight: "1.05"
    letterSpacing: "-0.5px"
  headline-md:
    fontFamily: "Geist, sans-serif"
    fontSize: "26px"
    fontWeight: 700
    lineHeight: "1.15"
    letterSpacing: "-0.3px"
  body-md:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: "1.6"
    letterSpacing: "0px"
  label-md:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "11px"
    fontWeight: 600
    lineHeight: "1.2"
    letterSpacing: "0.1em"
spacing:
  base: "8px"
  gap: "0px"
  section-padding: "60px"
rounded:
  control: "2px"
  card: "2px"
  pill: "2px"
components:
  navbar:
    background: "#F5F5F2"
    height: "56px"
    border-bottom: "1px solid #D0D0C8"
  button-primary-hero:
    background: "#181816"
    text-color: "#F5F5F2"
    radius: "2px"
    height: "40px"
    padding: "10px 20px"
    hover-background: "#3F6B52"
  button-outline:
    background: "#F5F5F2"
    text-color: "#181816"
    radius: "2px"
    height: "40px"
    padding: "10px 20px"
    border: "1px solid #181816"
  card-panel:
    background: "#FFFFFF"
    radius: "2px"
    border: "1px solid #D0D0C8"
---

## Overview
Sistem grid Swiss paling tenang dan berwibawa. Struktur visual hidup dari asimetri kolom yang disengaja (kolom 1 lebar untuk narasi, kolom 2 sempit untuk metadata) dengan garis pembatas setipis silet (*razor-thin 1px*).

## Composition
* **Hero First Screen:** Grid logic dengan lebar kolom variabel (asimetri kolom terencana) dan whitespace luas.
* **Services Grid:** Grid kolom tidak seragam bergaris 1px tipis.
* **Portfolio Table:** Matriks data asimetris dengan font tabular.

## Graphics & Depth
* **Razor-Thin Border:** `1px solid #D0D0C8`.
* **Nol Shadow:** Kedalaman dari asimetri grid yang presisi.

## Guardrails
* Dilarang menggunakan shadow tebal atau warna mencolok.
```

---

# PRESET 31 — IMMERSIVE MODERN (Cinematic & Virtual Media)

## A. PRESET IDENTITY

**Archetype:** `IMMERSIVE CINEMATIC / LAYERED DEPTH`

### Spatial Grammar
Foreground, midground, background are explicitly separated; depth replaces flat section stacking.

### Visual Rhythm
Scene-based, with visual transitions between layers.

### Composition Grammar
Text can sit between visual planes, but the primary CTA must remain anchored and readable.

### Typography Behavior
Expressive display with enough weight to survive imagery.

### Image Behavior
Cinematic full-bleed media is central.

### Component Behavior
Layered media frames rather than conventional cards.

### Motion Character
Slow depth, parallax, reveal, or camera-like transitions when performance permits.

### Preset-Specific Anti-Slop
Do not use flat 2D blocks as the dominant composition.

### Distinctiveness Test
If all imagery is replaced by gray rectangles, the layer hierarchy should still be visible.

## B. SOURCE SPECIFICATION — PRESERVE

The following is the original preset specification. Treat its technical values as authoritative unless a project-specific requirement makes a change necessary.

```text
================================================================================
PRESET 31: IMMERSIVE MODERN (Cinematic & Virtual Media)
================================================================================
---
version: "superdesign-alpha"
name: "Immersive modern"
archetype: "ARCHETYPE_CINEMATIC_DEPTH"
description: "Dark cinematic media system built on 3-tier layering depth (foreground, midground, background) and dramatic atmospheric scale."
colors:
  background: "#0D0E0C"
  surface: "#181A17"
  surface-dark: "#222520"
  text-primary: "#FAF9F6"
  text-secondary: "#8C8B82"
  accent: "#667A68"
  link: "#667A68"
typography:
  display-lg:
    fontFamily: "Syne, sans-serif"
    fontSize: "44px"
    fontWeight: 600
    lineHeight: "1.1"
    letterSpacing: "-0.3px"
  headline-md:
    fontFamily: "Syne, sans-serif"
    fontSize: "28px"
    fontWeight: 600
    lineHeight: "1.2"
    letterSpacing: "-0.1px"
  body-md:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.6"
    letterSpacing: "0px"
  label-md:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "11px"
    fontWeight: 500
    lineHeight: "1.2"
    letterSpacing: "0.15em"
spacing:
  base: "8px"
  gap: "16px"
  section-padding: "64px"
rounded:
  control: "4px"
  card: "4px"
  pill: "9999px"
components:
  navbar:
    background: "rgba(13, 14, 12, 0.85)"
    backdrop-filter: "blur(16px)"
    height: "56px"
    border-bottom: "1px solid rgba(255, 255, 255, 0.08)"
  button-primary-hero:
    background: "#FAF9F6"
    text-color: "#0D0E0C"
    radius: "4px"
    height: "44px"
    padding: "11px 24px"
    hover-background: "#667A68"
  button-outline:
    background: "transparent"
    text-color: "#FAF9F6"
    radius: "4px"
    height: "44px"
    padding: "11px 24px"
    border: "1px solid rgba(255, 255, 255, 0.2)"
  card-panel:
    background: "#181A17"
    radius: "4px"
    border: "1px solid rgba(255, 255, 255, 0.08)"
---

## Overview
Sistem sinematik gelap berlapis (*layered cinematic depth*). Menolak tampilan flat 2D dan menciptakan kedalaman visual bertingkat antara elemen teks foreground, foto midground, dan tekstur background atmosferik.

## Composition
* **Hero First Screen:** Foto full-bleed berlapis dengan teks headline muncul di antara layer visual.
* **Services Bands:** Band gelap lebar dengan jeda visual sinematik.
* **Portfolio Showcase:** Scroll showcase dengan efek depth visual bertingkat.

## Graphics & Depth
* **Cinematic Floating Shadow:** `0 20px 60px rgba(0, 0, 0, 0.5)`.

## Guardrails
* Dilarang membuat layout flat 2D tanpa kedalaman layer.
```

---

# PRESET 32 — AIRBNB PHOTOGRAPHY BAZAAR (Travel & Curated Stays)

## A. PRESET IDENTITY

**Archetype:** `PHOTO BAZAAR / BROWSING SYSTEM`

### Spatial Grammar
Dense media-first grid with strong browsing lanes and optional horizontal category navigation.

### Visual Rhythm
Browse → inspect → compare → select.

### Composition Grammar
The listing image leads; metadata supports scanning below or beside it.

### Typography Behavior
Compact, highly legible, utility-first.

### Image Behavior
Photography is the main content. Crops should remain consistent enough for comparison.

### Component Behavior
Listing cards, filters, category navigation, price/location metadata.

### Motion Character
Small hover/image interactions; do not distract from browsing.

### Preset-Specific Anti-Slop
Do not invent categories, availability, pricing, or dense grids when inventory is small.

### Distinctiveness Test
Without color, the browsing/listing structure must remain unmistakable.

## B. SOURCE SPECIFICATION — PRESERVE

The following is the original preset specification. Treat its technical values as authoritative unless a project-specific requirement makes a change necessary.

```text
================================================================================
PRESET 32: AIRBNB PHOTOGRAPHY BAZAAR (Travel & Curated Stays)
================================================================================
---
version: "superdesign-alpha"
name: "Airbnb photography bazaar"
archetype: "ARCHETYPE_PHOTO_BAZAAR"
description: "Browsing-magazine layout featuring a horizontal scrollable category pill bar, dense 3-5 column photography-led listing grids, and Rausch Red accents."
colors:
  background: "#FFFFFF"
  surface: "#F7F7F7"
  surface-dark: "#222222"
  text-primary: "#222222"
  text-secondary: "#717171"
  accent: "#FF385C"
  link: "#FF385C"
typography:
  display-lg:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "32px"
    fontWeight: 600
    lineHeight: "1.15"
    letterSpacing: "-0.5px"
  headline-md:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "22px"
    fontWeight: 600
    lineHeight: "1.2"
    letterSpacing: "-0.2px"
  body-md:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: "1.5"
    letterSpacing: "0px"
  label-md:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: "1.1"
    letterSpacing: "0.05em"
spacing:
  base: "8px"
  gap: "16px"
  section-padding: "48px"
rounded:
  control: "9999px"
  card: "20px"
  pill: "9999px"
components:
  navbar:
    background: "#FFFFFF"
    height: "64px"
    border-bottom: "1px solid #EBEBEB"
  button-primary-hero:
    background: "#FF385C"
    text-color: "#FFFFFF"
    radius: "9999px"
    height: "44px"
    padding: "11px 24px"
    hover-background: "#E00B41"
  button-outline:
    background: "#FFFFFF"
    text-color: "#222222"
    radius: "9999px"
    height: "44px"
    padding: "11px 24px"
    border: "1px solid #DDDDDD"
  card-panel:
    background: "#FFFFFF"
    radius: "20px"
    shadow: "0 6px 16px rgba(0, 0, 0, 0.08)"
---

## Overview
Sistem majalah etalase visual (*photography bazaar*). Dipimpin oleh bilah kategori berbentuk pill yang dapat di-scroll horizontal, diikuti oleh grid kartu listing foto padat 3–4 kolom ber-radius 20px dengan bayangan hangat 3 lapis.

## Composition
* **Hero First Screen:** Bilah aksi terpusat di tengah dengan deretan listing foto mencuat di bawah sebagai bukti visual nyata.
* **Category Pill Bar:** Baris kategori pill horizontal (ikon + label) yang memimpin langsung ke grid foto.
* **Dense Listing Grid:** Grid padat 3 atau 4 kolom kartu foto rasio 16:10 dengan judul, lokasi, dan harga tabular di bawah foto.

## Graphics & Depth
* **3-Layer Warm Shadow:** `rgba(0,0,0,0.08) 0 2px 6px, rgba(0,0,0,0.05) 0 6px 16px, rgba(0,0,0,0.08) 0 12px 28px`.

## Guardrails
* Dilarang membuat kartu yang hanya berisi teks (foto wajib memimpin di setiap kartu).
```

---

# PRESET 33 — WISE BOLD BILLBOARD (Fintech Disruptor & Transparency)

## A. PRESET IDENTITY

**Archetype:** `BILLBOARD / STATEMENT SCALE`

### Spatial Grammar
Large typographic fields, strong horizontal statements, oversized CTA moments.

### Visual Rhythm
Statement → explanation → comparison → statement.

### Composition Grammar
Typography is the primary visual object. Cards are secondary support.

### Typography Behavior
Extremely heavy display type with tight leading; short, direct phrases.

### Image Behavior
Limited; use imagery only when it strengthens the statement.

### Component Behavior
Large statement blocks, comparison ledgers, bold CTA surfaces.

### Motion Character
Small CTA response; avoid excessive scaling.

### Preset-Specific Anti-Slop
Do not shrink the identity into normal marketing headings or fill every section with rounded cards.

### Distinctiveness Test
Grayscale must preserve the typographic billboard effect.

## B. SOURCE SPECIFICATION — PRESERVE

The following is the original preset specification. Treat its technical values as authoritative unless a project-specific requirement makes a change necessary.

```text
================================================================================
PRESET 33: WISE BOLD BILLBOARD (Fintech Disruptor & Transparency)
================================================================================
---
version: "superdesign-alpha"
name: "Wise bold billboard"
archetype: "ARCHETYPE_BILLBOARD_SCALE"
description: "Ultra-heavy billboard system defined by 80px/900 weight ultra-tight headlines (0.85 line-height), large 32px rounded cards, and growing Lime Green pill CTAs."
colors:
  background: "#EFF1F0"
  surface: "#FFFFFF"
  surface-dark: "#0E0F0C"
  text-primary: "#0E0F0C"
  text-secondary: "#454745"
  accent: "#9FE870"
  link: "#163300"
typography:
  display-lg:
    fontFamily: "Outfit, sans-serif"
    fontSize: "80px"
    fontWeight: 900
    lineHeight: "0.85"
    letterSpacing: "-1.5px"
  headline-md:
    fontFamily: "Outfit, sans-serif"
    fontSize: "44px"
    fontWeight: 900
    lineHeight: "0.9"
    letterSpacing: "-0.8px"
  body-md:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: "1.5"
    letterSpacing: "0px"
  label-md:
    fontFamily: "Outfit, sans-serif"
    fontSize: "13px"
    fontWeight: 700
    lineHeight: "1.1"
    letterSpacing: "0.05em"
spacing:
  base: "8px"
  gap: "16px"
  section-padding: "60px"
rounded:
  control: "9999px"
  card: "32px"
  pill: "9999px"
components:
  navbar:
    background: "#EFF1F0"
    height: "60px"
  button-primary-hero:
    background: "#9FE870"
    text-color: "#163300"
    radius: "9999px"
    height: "48px"
    padding: "12px 28px"
    hover-transform: "scale(1.05)"
  button-outline:
    background: "#FFFFFF"
    text-color: "#0E0F0C"
    radius: "9999px"
    height: "48px"
    padding: "12px 28px"
    border: "1px solid #CBD5E1"
  card-panel:
    background: "#FFFFFF"
    radius: "32px"
    shadow: "0 0 0 1px rgba(14, 15, 12, 0.08), 0 8px 24px rgba(14, 15, 12, 0.06)"
---

## Overview
Sistem spanduk billboard berbobot ultra-tebal (*bold billboard*). Ciri visual utamanya adalah headline bobot 900 dengan line-height sangat rapat (0.85) dan tombol aksi kapsul Lime Green (`#9FE870`) yang membesar saat di-hover (`scale(1.05)`).

## Composition
* **Hero First Screen:** Kanvas off-white hangat dengan headline 80px/900 ultra-tight, didampingi tombol pill Lime Green yang tumbuh saat kursor hover.
* **Bold Feature Statements:** Pernyataan lugas per fitur dengan sub-heading 44px/900 di dalam kartu ber-radius 32px.
* **Transparent Rate Ledger:** Tabel data perbandingan transparan dengan kartu ber-radius besar.

## Graphics & Depth
* **Ring Shadow:** `0 0 0 1px rgba(14, 15, 12, 0.08), 0 8px 24px rgba(14, 15, 12, 0.06)`.
* **Hover Interaction:** `transform: scale(1.05)` pada tombol aksi utama.

## Guardrails
* Dilarang menggunakan headline berukuran kecil atau tipis.
* Dilarang menggunakan sudut kartu tajam (wajib radius 32px membulat lebar).
```

---

# PRESET 34 — SPOTIFY IMMERSIVE COMPACT (Audio & Streaming Media)

## A. PRESET IDENTITY

**Archetype:** `COMPACT MEDIA APP / BROWSING DENSITY`

### Spatial Grammar
Dense dark surface hierarchy, compact rows, media grids, and clear active states.

### Visual Rhythm
Browse → play/open → continue.

### Composition Grammar
Media thumbnails and lists carry most of the visual load; typography remains compact.

### Typography Behavior
Compact sans; hierarchy comes from size, weight, and luminance rather than giant type.

### Image Behavior
Cover art/media is the main color source.

### Component Behavior
Media cards, rows, controls, active states, compact navigation.

### Motion Character
Hover lightening, play-state transitions, and immediate feedback.

### Preset-Specific Anti-Slop
Do not apply giant marketing heroes or spacious editorial sections to a compact media product.

### Distinctiveness Test
Even in grayscale, dense browsing, media thumbnails, and active-state hierarchy must remain obvious.

## B. SOURCE SPECIFICATION — PRESERVE

The following is the original preset specification. Treat its technical values as authoritative unless a project-specific requirement makes a change necessary.

```text
================================================================================
PRESET 34: SPOTIFY IMMERSIVE COMPACT (Audio & Streaming Media)
================================================================================
---
version: "superdesign-alpha"
name: "Spotify immersive compact"
archetype: "ARCHETYPE_COMPACT_APP"
description: "Dense dark app system built on compact headlines (24px-32px), pill/circle controls, and achromatic canvas where color comes 100% from media cover art."
colors:
  background: "#121212"
  surface: "#181818"
  surface-dark: "#282828"
  text-primary: "#FFFFFF"
  text-secondary: "#B3B3B3"
  accent: "#1ED760"
  link: "#1ED760"
typography:
  display-lg:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "28px"
    fontWeight: 700
    lineHeight: "1.15"
    letterSpacing: "-0.3px"
  headline-md:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "20px"
    fontWeight: 700
    lineHeight: "1.2"
    letterSpacing: "-0.1px"
  body-md:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "1.5"
    letterSpacing: "0px"
  label-md:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "11px"
    fontWeight: 700
    lineHeight: "1.2"
    letterSpacing: "0.15em"
spacing:
  base: "8px"
  gap: "12px"
  section-padding: "48px"
rounded:
  control: "9999px"
  card: "8px"
  pill: "9999px"
components:
  navbar:
    background: "#121212"
    height: "56px"
  button-primary-hero:
    background: "#1ED760"
    text-color: "#000000"
    radius: "9999px"
    height: "40px"
    padding: "10px 24px"
    hover-background: "#22E567"
  button-outline:
    background: "#181818"
    text-color: "#FFFFFF"
    radius: "9999px"
    height: "40px"
    padding: "10px 24px"
    hover-background: "#282828"
  card-panel:
    background: "#181818"
    radius: "8px"
    hover-background: "#282828"
---

## Overview
Sistem aplikasi kompak gelap (*compact dark app*). Menolak headline raksasa dan memilih tipografi kompak (28px) yang padat fungsional. Seluruh kanvas bersifat achromatic hitam (`#121212`), membiarkan warna visual memancar sepenuhnya dari cover art foto media, dengan aksen hijau Spotify (`#1ED760`) untuk status aktif dan tombol putar.

## Composition
* **Hero First Screen:** Headline kompak terpusat dengan cover art album/proyek berdimensi besar sebagai sumber warna utama.
* **Dense Media Cards:** Grid kartu padat `#181818` tanpa border yang memancarkan transisi hover pencerahan (`#282828`).
* **Track-List Timeline:** Baris linimasa dengan pemisah hairline abu-abu dan badge status aktif.

## Graphics & Depth
* **Hover Lightening Transition:** Background kartu bertransisi dari `#181818` ke `#282828` saat di-hover.
* **Shadows:** Bayangan pekat `rgba(0, 0, 0, 0.4) 0 8px 24px`.

## Guardrails
* Dilarang menggunakan headline raksasa di atas 36px di Hero.
* Dilarang menggunakan border fisik pada kartu utama (wajib menggunakan hover lightening).
```

---

# 03 — CROSS-PRESET DESIGN AUDIT

Before delivery, compare the generated page against the other presets.

## A. Homogeneity Test

Ask:

- Does this preset use the same hero structure as another preset?
- Does it use the same card pattern?
- Does it use the same section rhythm?
- Does it use the same alignment strategy?
- Does it use the same image treatment?
- Does it use the same whitespace density?
- Does it use the same motion pattern?

If YES without a content-based reason, redesign the composition.

## B. Grayscale Test

Convert the visual concept to grayscale.

The following must still communicate the preset:

```text
spatial structure
typographic behavior
image behavior
component geometry
depth model
visual rhythm
```

If only the colors identify the preset, the design has failed.

## C. Swap Test

Imagine replacing the preset palette with another preset's palette.

> If the page still looks essentially the same, the preset identity is too weak.

## D. Skeleton Test

Remove:

- colors
- images
- shadows
- decorative graphics

Keep only:

- boxes
- text blocks
- spacing
- alignment
- proportions

The preset should still have a recognizable composition.

---

# 04 — CLARITY / USER SATISFACTION AUDIT

## Clarity

```text
[ ] What does the business do?
[ ] Who is it for?
[ ] What is the primary value?
[ ] What is the next action?
[ ] Is the reading order obvious?
```

## Conversion

```text
[ ] One primary CTA
[ ] CTA is easy to locate
[ ] CTA language matches user intent
[ ] Secondary action is subordinate
[ ] No competing CTA hierarchy
```

## User Satisfaction

```text
[ ] Navigation is understandable
[ ] Important information is easy to find
[ ] Content is scannable
[ ] Visuals support comprehension
[ ] Mobile order is intentional
[ ] Motion does not interrupt the task
```

## Trust

```text
[ ] Claims are supported
[ ] Numbers are real or clearly marked as examples
[ ] No fake testimonials
[ ] No fake client logos
[ ] No invented certifications
```

---

# 05 — MASTER RULE

> **CLARITY IS UNIVERSAL. VISUAL GRAMMAR IS NOT.**

> **Do not make every preset safe in the same way. Make every preset intentional in its own way.**

> **A preset is successful when its identity survives grayscale, palette swapping, and component removal.**

> **Design for the visitor's decision, while preserving the preset's distinct visual language.**

---

# PRESET 35 — RETRO-FUTURIST SOLAR-PUNK (Tokyo Blueprint Editorial)

## A. PRESET IDENTITY

**Archetype:** `SOLAR_PUNK / EDITORIAL BLUEPRINT`

### Spatial Grammar
Asymmetric grid structures defined by thin 1px lines. Whitespace is filled with subtle blueprint grids or noise rather than flat color. Vertical and horizontal axes frequently intersect.

### Visual Rhythm
Rhythmic and architectural. Uses lists and rails instead of isolated cards. Text blocks are dense but surrounded by structured negative space.

### Composition Grammar
Multi-directional reading flows. English/Latin typography drives the main horizontal UI, while secondary poetic/philosophical statements use vertical layout (writing-mode: vertical-rl).

### Typography Behavior
Extreme typographic tension: 
1. Tech/Display (Chakra Petch) for loud structural headings. 
2. Traditional/Poetic Serif (Zen Old Mincho) for body and atmospheric text. 
3. Mono (Azeret Mono) for strict UI controls and metadata.

### Image Behavior
Generative architecture, solar-punk cityscapes, warm ambient lighting. Imagery acts as atmosphere (multiply blended into the paper background) rather than isolated blocks.

### Component Behavior
Bans standard rounded cards. Employs asymmetric grids, continuous timeline rails, vertical dividers, and decorative "stamps" that break out of the grid.

### Motion Character
Deliberate, staggered reveals (opacity + blur filters). Elements snap into place like a loading schematic rather than a bouncy elastic animation.

### Preset-Specific Anti-Slop
Do not fall back to generic SaaS UI. Absolutely zero glassmorphism, zero neon cyber-glows, zero rounded-xl cards, and zero floating drop-shadows.

### Distinctiveness Test
The presence of vertical atmospheric typography, the rigid 1px blueprint background, and the 3-font (Tech/Serif/Mono) tension must immediately separate this from all other 34 presets.

## B. SOURCE SPECIFICATION — PRESERVE

The following is the original preset specification. Treat its technical values as authoritative unless a project-specific requirement makes a change necessary.

```text
================================================================================
PRESET 35: RETRO-FUTURIST SOLAR-PUNK (Tokyo Blueprint Editorial)
================================================================================
---
version: "superdesign-alpha"
name: "Retro-futurist solar-punk"
archetype: "ARCHETYPE_SOLAR_PUNK"
description: "A warm, paper-textured architectural system built on 112px blueprint grids, 1px divider lines, vertical typography overlays, and a tension between traditional Mincho serifs and technical display fonts."
colors:
  background: "oklch(94% 0.035 78)"      # --paper (Warm cream)
  surface: "oklch(91% 0.045 78)"         # --paper-soft
  surface-dark: "oklch(17% 0.035 185)"   # --night (Deep charcoal/blue-black)
  text-primary: "oklch(18% 0.035 82)"    # --ink
  text-secondary: "oklch(32% 0.045 80)"  # --ink-soft
  accent: "oklch(64% 0.19 43)"           # --sun (Burnt orange/solar punk)
  link: "oklch(68% 0.145 74)"            # --gold
typography:
  display-lg:
    fontFamily: "Chakra Petch, Noto Sans JP, sans-serif"
    fontSize: "clamp(3.45rem, 7.3vw, 6.55rem)"
    fontWeight: 300
    lineHeight: "0.96"
    letterSpacing: "0px"
    textTransform: "uppercase"
  headline-md:
    fontFamily: "Chakra Petch, Noto Sans JP, sans-serif"
    fontSize: "clamp(1.9rem, 3.4vw, 3rem)"
    fontWeight: 300
    lineHeight: "1.0"
    letterSpacing: "0px"
  body-md:
    fontFamily: "Zen Old Mincho, Hiragino Mincho ProN, serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: "1.55"
    letterSpacing: "0px"
  label-md:
    fontFamily: "Azeret Mono, SFMono-Regular, monospace"
    fontSize: "12px"
    fontWeight: 700
    lineHeight: "1.2"
    letterSpacing: "0.05em"
    textTransform: "uppercase"
spacing:
  base: "8px"
  gap: "24px"
  section-padding: "72px"
rounded:
  control: "9999px" # Buttons are pill-shaped
  card: "0px"       # Layout panels are strictly 0px
  pill: "9999px"
components:
  navbar:
    background: "linear-gradient(180deg, oklch(94% 0.035 78 / 0.94), oklch(94% 0.035 78 / 0.72), transparent)"
    backdrop-filter: "none"
    height: "74px"
    border-bottom: "1px solid transparent"
  button-primary-hero:
    background: "oklch(68% 0.145 74)"
    text-color: "oklch(97% 0.02 82)"
    radius: "9999px"
    height: "44px"
    padding: "0.58rem 0.86rem"
    hover-background: "oklch(52% 0.17 38)"
  button-outline:
    background: "transparent"
    text-color: "oklch(32% 0.045 80)"
    radius: "0px"
    height: "44px"
    padding: "0px"
    border: "none"
    fontFamily: "Azeret Mono"
  card-panel:
    background: "oklch(91% 0.045 78)"
    radius: "0px"
    border: "1px solid oklch(73% 0.055 77)"
  card-panel-dark:
    background: "oklch(17% 0.035 185)"
    radius: "0px"
    text-color: "oklch(97% 0.02 82)"
---

## Overview
Arsitektur editorial *Retro-Futurist / Solar Punk* yang dibangun di atas kanvas kertas hangat bergaya *blueprint* cetak biru (dengan grid CSS 112px). Menggunakan tensi 3 tipografi yang ekstrem: Chakra Petch (Display Mekanis), Zen Old Mincho (Poetic Serif), dan Azeret Mono (Terminal UI). Warna didominasi *Warm Paper, Charcoal Ink, Sun Orange, dan Night Blue*.

## Composition
* **Hero First Screen:** `VERTICAL_POEM_GRID`. Terdiri dari teks vertikal melayang di sebelah kiri (*writing-mode: vertical-rl*) dengan ornamen SVG "stamp seal". Headline utama rata kiri menggunakan font mekanis ekstra besar. Gambar ilustratif menyatu dengan background menggunakan blend-mode `multiply`.
* **Agenda / Data Matrix:** DILARANG memakai kotak/card generik. Gunakan tata letak list/rail vertikal (kolom tanggal + garis vertikal tipis + konten) yang asimetris.
* **Atmospheric Vignette:** Halaman harus memiliki elemen visual tak terduga yang memecah grid, seperti garis pemisah vertikal (`1px width`), lingkaran glow oranye di sudut layar, atau lencana tipografi mengambang.

## Graphics & Depth
* **Shadows:** Tolak shadow membulat konvensional. Gunakan shadow radial besar yang difus hanya untuk penekanan ekstrem (`0 18px 52px oklch(50% 0.15 50 / 0.32)`), atau andalkan garis border `1px solid var(--line)` untuk membagi ruang (Depth by Division).
* **Grid Background:** Background WAJIB mengimplementasikan grid tipis: `linear-gradient(90deg, oklch(20% 0.015 80 / 0.035) 1px, transparent 1px)`.

## Guardrails
* Dilarang menggunakan sudut membulat (`rounded`) pada struktur container/layout (wajib 0px). Radius bulat hanya diizinkan untuk tombol aksi utama (Pill).
* Dilarang menggunakan warna latar putih polos (`#FFFFFF`) atau abu-abu dingin. Wajib berada pada spektrum kertas/krim hangat (Paper).
* Dilarang menggunakan sans-serif geometris (Inter/Plus Jakarta Sans).
```

# PAGE SIGNATURE MANIFEST & HARD COMPLIANCE AUDIT
*Dokumentasi Arsitektur Siluet dan Hasil Audit Mekanis Anti-Slop (Preset 23)*

## 1. 8-Axis Silhouette Matrix

| AXIS | `/` (Home) | `/ruang-kerja` | `/komunitas` | `/fasilitas` | `/coba-gratis` |
|---|---|---|---|---|---|
| 1. HERO_TOPOLOGY | INDIE_CENTER_SCRIBBLE | ASYMMETRIC_SPLIT_7_5 | PHOTO_OVERLAY_ROTATE | BILLBOARD_RAG_LEFT | CONCIERGE_FORM_RIGHT |
| 2. SECTION_ORDER | [Hero, Problem, Zoning, Community] | [Hero, PricingIsland, Meeting, Onboarding] | [Hero, Events, Stories, Manager] | [Hero, Network, Climate, Beverage] | [Hero, Expectation, Escalation] |
| 3. COLUMN_RATIO | 0/12 (Center) | 7/5 | 6/6 | 45/55 | 7/5 |
| 4. CARD_USAGE | 0 (No rigid cards, paper blobs) | 3 (Pricing blobs) | 2 (Overlapping polaroids) | 1 (Spec list) | 0 (Form only) |
| 5. BORDER_RADIUS | 255px/15px BLOB | 255px/15px BLOB | Sharp photo edges | Flat 0 / rounded-blob | 255px/15px BLOB |
| 6. IMAGE_DENSITY | 4 (Workspace & Cafe) | 2 (Desk & Meeting) | 4 (Event shots & Avatar) | 4 (Wide, Mesh, Coffee) | 1 (Concierge form) |
| 7. ALIGNMENT | C, L, L, L | L, C, L, C | L, L, L, L | L, L, L, L | L, C, C |
| 8. MOTION_SIGNATURE| Tilt/Reveal (Subtle) | Thunk (Prices) | Scrapbook Drop | Gentle Fade | Snappy Form |

---

## 2. Hard Compliance Audit Gates (Mechanical Verification)

### Page 1: `/` (Home)
- **Step A (Banned Tokens):** 0 em-dash, 0 en-dash, 0 `//` in render, 0 forbidden pill fields. (PASS)
- **Step B (Heading-First):** `<h1>` is the first element in the hero container; zero pills/badges above it. (PASS)
- **Step C (Hero Media Law):** Hero features dominant rotated paper-framed photo (`workspace_focus.jpg`). (PASS)
- **Step D (Media Count & Anti-Void):** 4 rich images deployed across sections; visual ratio >= 50%. (PASS)
- **Step E (Tailwind v4 Syntax):** 0 decimal opacity brackets `/[0.xx]`, native aspect ratio used. (PASS)
- **STATUS:** `COMPLIANCE_PASS`

### Page 2: `/ruang-kerja` (Workspaces & Pricing)
- **Step A (Banned Tokens):** 0 em-dash, 0 en-dash, 0 `//` in render. (PASS)
- **Step B (Heading-First):** `<h1>` leads the container cleanly. (PASS)
- **Step C (Hero Media Law):** Split 7/5 hero with high-res workspace photograph. (PASS)
- **Step D (Interactive Island):** Svelte 5 `PricingCalculator.svelte` active with `client:visible`. (PASS)
- **Step E (Silhouette-Diff vs Page 1):** HERO_TOPOLOGY (7/5 split vs Center), SECTION_ORDER, COLUMN_RATIO (7/5 vs 12), ALIGNMENT differ. (PASS)
- **STATUS:** `COMPLIANCE_PASS`

### Page 3: `/komunitas` (Community & Events)
- **Step A (Banned Tokens):** 0 em-dash, 0 en-dash, 0 `//` in render. (PASS)
- **Step B (Heading-First):** `<h1>` leads the container cleanly. (PASS)
- **Step C (Hero Media Law):** Dual overlapping polaroid collage in hero. (PASS)
- **Step D (Silhouette-Diff vs Pages 1 & 2):** HERO_TOPOLOGY (PHOTO_OVERLAY_ROTATE), SECTION_ORDER, and visual rhythm completely distinct. (PASS)
- **STATUS:** `COMPLIANCE_PASS`

### Page 4: `/fasilitas` (Facilities & Standards)
- **Step A (Banned Tokens):** 0 em-dash, 0 en-dash, 0 `//` in render. (PASS)
- **Step B (Heading-First):** `<h1>` leads cleanly. (PASS)
- **Step C (Hero Media Law):** Panoramic 21/9 billboard image anchor. (PASS)
- **Step D (Silhouette-Diff vs All Pages):** HERO_TOPOLOGY (BILLBOARD_RAG_LEFT), column ratio, and layout structure unique. (PASS)
- **STATUS:** `COMPLIANCE_PASS`

### Page 5: `/coba-gratis` (Book a Tour / Free Trial)
- **Step A (Banned Tokens):** 0 em-dash, 0 en-dash, 0 `//` in render. (PASS)
- **Step B (Heading-First):** `<h1>` leads cleanly. (PASS)
- **Step C (Interactive Island):** Svelte 5 `ConciergeBooking.svelte` active with `client:visible`. (PASS)
- **Step D (Silhouette-Diff vs All Pages):** HERO_TOPOLOGY (CONCIERGE_FORM_RIGHT), 3-step expectation, conversion-focused layout. (PASS)
- **STATUS:** `COMPLIANCE_PASS`

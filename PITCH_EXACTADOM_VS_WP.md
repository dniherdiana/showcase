# Pitching Strategy: ExactaDOM WaaS vs Tradisional WordPress Studio

Dokumen ini adalah draf *copywriting* dan strategi posisi (positioning) yang siap diadaptasi ke dalam halaman portofolio atau penawaran Anda (misalnya di `WhyDifferent.astro` atau `Pricing.astro`). Strategi ini lahir dari hasil *reverse-engineering* terhadap kelemahan fundamental jasa pembuatan website WordPress lokal.

---

## 1. Sudut Serang (The Disruption Angle)

Mayoritas *software house* lokal dan *freelancer* menggunakan **WordPress + Elementor + WooCommerce** untuk membuat website katalog UMKM. Cara mereka memasarkannya selalu sama:
- *"Gampang di-update lewat dasbor"*
- *"Murah di awal (Rp 800rb - 2jt)"*
- *"Banyak fitur (pakai plugin)"*

Namun, ini adalah **jebakan bagi UMKM**. Kita mendisrupsi mereka dengan membongkar realita gelap dari *WordPress*:

| Janji Manis WordPress Studio | Realita Pahit Klien UMKM | Solusi ExactaDOM WaaS |
| :--- | :--- | :--- |
| **"Dasbor Gampang Dipakai"** | Pemilik usaha bingung dengan menu WP yang rumit. Salah klik plugin, website *down*. | **Google Sheets Update.** Klien cukup ketik harga baru di HP seperti pakai Excel. Website otomatis berubah. |
| **"Harga Bikin Murah"** | Terjebak biaya perpanjangan *hosting* abal-abal yang mahal, atau dimintai biaya tambahan setiap kali plugin rusak. | **Nol Biaya Server.** Arsitektur statis di Edge CDN global. Biaya langganan WaaS datar, tanpa biaya tersembunyi. |
| **"Banyak Fitur"** | Website dipenuhi *plugin* berat. *Loading* di HP memakan waktu 4-6 detik. Pelanggan kabur sebelum gambar katalog muncul. | **Sub-Second Loading (< 0.8 detik).** *Hand-coded* murni tanpa *database* bawaan, skor kecepatan Google 95+. |
| **"Fleksibel"** | Website mudah diretas (di-*hack*) karena celah keamanan dari *plugin* gratisan. | **Unhackable.** Tidak ada *database* SQL yang terbuka ke publik. 100% aman dari peretasan WP standar. |

---

## 2. Draft Copywriting untuk Portofolio (Halaman Depan / Why Us)

### Headline:
**"Website Anda Bukan Kelinci Percobaan Plugin Gratisan."**
*(Atau variasi: "Jangan Biarkan Bisnis Anda Terjebak Tagihan Server dan Website yang Lemot.")*

### Sub-Headline:
Berhentilah membuang uang untuk website berbasis WordPress yang berat, mudah diretas, dan menyembunyikan biaya *hosting* bulanan. Kami merakit sistem katalog bisnis Anda dengan kode murni berkecepatan tinggi yang dikendalikan langsung dari *Google Sheets* di ponsel Anda.

### 3 Poin Jualan Utama (Bullet Points):

**1. Kecepatan Buka Sub-Detik (< 0.8s)**
Pelanggan tidak suka menunggu. Kami tidak memakai pembuat halaman (*page builder*) yang berat. Arsitektur murni kami memastikan katalog produk Anda terbuka instan di layar ponsel pelanggan, mengunci konversi sebelum mereka beralih ke kompetitor.

**2. Nol Kurva Belajar (Update via Google Sheets)**
Lupakan *dasbor admin* yang rumit dan menakutkan. Jika Anda bisa mengetik di tabel Excel, Anda bisa memperbarui stok, harga, dan foto katalog Anda langsung dari ponsel. Sistem kami akan menyinkronkannya ke website secara *real-time*.

**3. Transparansi Total (Tanpa Tagihan Server Gelap)**
Agensi tradisional memikat Anda dengan harga murah di awal, lalu mencekik dengan biaya sewa server bulanan yang mahal. Sistem kami menggunakan infrastruktur *Edge CDN Global*. Hasilnya? Biaya *hosting* server Anda adalah Rp 0,- selamanya.

---

## 3. Strategi WaaS (Website as a Service)

Model bisnis WaaS Anda (seperti di paket *Basic Katalog UMKM - Rp 79.000/bln*) sangat mematikan jika dipasarkan dengan membandingkannya terhadap **TCO (Total Cost of Ownership)** WordPress:

**Cara Memasarkan WaaS:**
> *"Jika Anda menyewa jasa WP, Anda bayar Rp 1,5 Juta di awal, ditambah Rp 600.000/tahun untuk hosting murah yang sering down. Jika rusak, Anda bayar perbaikan.*
> 
> *Dengan Layanan Katalog WaaS kami: Cukup Rp 199.000 (Setup) + Rp 79.000/bulan. Domain resmi sudah termasuk. Server secepat kilat (0 downtime). Update dibantu via WhatsApp. Tidak ada sakit kepala teknis. Anda fokus jualan, kami urus mesinnya."*

## 4. Validasi Teknis (Untuk Audiens B2B / Klien Kritis)
> **Target Penempatan:** Halaman *About Us (Tentang Kami)* atau segmen *Technical Specifications* di halaman Layanan (*Services*). Cocok untuk menghadapi klien korporat yang paham IT.

Jika Anda berhadapan dengan klien yang membandingkan penawaran Anda dengan agensi WordPress secara teknis, gunakan argumen *Jamstack Moat* ini:
- **0 KB JavaScript Default (Islands Architecture):** WordPress memuat lusinan *script* usang di setiap halaman. Sistem kami hanya mengirimkan HTML murni berkecepatan tinggi. Interaktivitas pintar (Svelte) hanya diaktifkan tepat di tombol yang membutuhkannya. Hasilnya: Skor *PageSpeed* nyaris 100.
- **Unhackable (Tidak Ada Database Publik):** Kasus peretasan menjadi "situs judi online" 90% terjadi akibat celah *plugin* WordPress dan serangan *SQL Injection*. Sistem kami di- *deploy* sebagai aset statis di Edge CDN global, tanpa *database* SQL publik yang bisa diretas.
- **Bebas Pajak Plugin Berlangganan:** Tidak ada tagihan sewa lisensi tahunan tersembunyi (seperti *Elementor Pro, WP Rocket*). Logika filter atau galeri katalog ditulis murni dalam bahasa pemrograman tanpa ketergantungan lisensi pihak ketiga.

---

## 5. Serangan Balik Mitos "Kelebihan WordPress" (FAQ)
> **Target Penempatan:** Bagian *FAQ (Pertanyaan yang Sering Diajukan)* di halaman utama, `estimasi.astro`, atau di *Slide Deck* Presentasi Penawaran (PDF).

**Q: "Apakah saya akan mendapatkan dasbor visual lengkap seperti WordPress untuk mengubah desain sendiri?"**
> **A:** "Kami dengan sengaja **tidak** menggunakan pembuat halaman visual (*page builder*) yang berat dan rawan merusak tata letak. Pemilik bisnis tidak seharusnya menghabiskan waktu menjadi desainer *web* dadakan. 
> 
> Sebagai solusinya, kami mengunci desain arsitekturalnya agar tetap profesional, namun memberikan Anda kendali penuh atas konten melalui **Google Sheets**. Untuk mengubah harga atau menambah produk, cukup ketik di tabel Excel dari ponsel Anda. Website akan menyinkronkannya secara otomatis tanpa ada risiko tata letak web menjadi berantakan."

**Q: "Bagaimana dengan sistem keranjang belanja otomatis yang bisa menghitung ongkos kirim seperti plugin toko online?"**
> **A:** "Riset pasar menunjukkan pembeli lokal di Indonesia mencetak rasio penyelesaian transaksi (*conversion rate*) tertinggi melalui komunikasi personal (*Conversational Commerce*). Memaksa pembeli mengisi form *checkout* panjang sering kali membuat mereka kabur (*cart abandonment*).
> 
> Sistem kami merangkum pilihan produk pelanggan ke dalam format pesanan yang rapi, lalu mengirimkannya langsung ke WhatsApp Anda hanya dengan 1-Klik. Kami menyematkan kode QRIS pembayaran langsung di layar pesanan agar Anda dapat melakukan *cross-selling*, negosiasi, dan menutup transaksi secara natural di ruang obrolan."

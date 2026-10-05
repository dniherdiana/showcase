export const layananData = {
  hero: {
    headline: 'Ruang Lingkup Arsitektur Komersial dan Rekayasa Interior Terukur.',
    headlineAccent: 'Rekayasa Interior Terukur',
    subhead: 'Dari studi kelayakan tapak hingga pengawasan fisik konstruksi mingguan, setiap divisi layanan Atelier Karsa dirancang untuk mengamankan operasional bisnis Anda.',
    ctaPrimary: {
      label: 'Konsultasikan Rencana Proyek',
      href: '/kontak',
    },
    ctaSecondary: {
      label: 'Unduh Contoh Format Dokumen DED',
      href: '#deliverables',
    },
  },
  divisions: [
    {
      id: 'fnb',
      number: '01',
      title: 'Arsitektur & Interior F&B (Kafe, Restoran, Bar)',
      focus: 'Restoran cepat saji, kedai kopi specialty, fine dining, dan lounge komersial.',
      deliverables: [
        'Analisis alur sirkulasi operasional dapur (kitchen workflow), bar station, dan pergerakan pelayan vs tamu.',
        'Perancangan Mechanical, Electrical, & Plumbing (MEP) khusus: grease trap terintegrasi, exhaust hood berdaya hisap tinggi, dan pemisahan jalur utilitas air bersih.',
        'Pemilihan material tahan noda asam, minyak, dan gesekan tinggi (heavy-duty non-slip tile, solid surface, finishing kayu tahan lembap).',
        'Skema tata suara akustik dan pencahayaan atmosferik dual-ambience (mode siang dan mode malam).',
      ],
      imageKey: 'fnb',
      rotation: '-rotate-1',
    },
    {
      id: 'retail',
      number: '02',
      title: 'Desain Interior Ritel & Flagship Store',
      focus: 'Butik fashion, toko sepatu, showroom furnitur, dan pop-up brand komersial.',
      deliverables: [
        'Pemetaan visual merchandising flow yang memaksimalkan dwell-time pengunjung di depan display utama.',
        'Rekayasa pencahayaan aksen produk dengan indeks render warna (CRI) di atas 95 agar warna asli produk terlihat akurat.',
        'Detail gambar kerja rak display kustom berbahan metal, kaca tempered, dan veneer kayu lokal.',
        'Integrasi sistem keamanan toko (EAS gate), titik POS kasir tersembunyi, dan ruang stok barang efisien.',
      ],
      imageKey: 'retail',
      rotation: 'rotate-1',
    },
    {
      id: 'office',
      number: '03',
      title: 'Kantor Kreatif & Ruang Kerja Fleksibel',
      focus: 'Markas agensi digital, studio produksi konten, kantor korporat modern, dan co-working hub.',
      deliverables: [
        'Zonasi akustik terpisah antara area kerja hening, bilik telepon privat, ruang rapat kolaboratif, dan pantry santai.',
        'Detail instalasi jalur kabel tersembunyi (cable management) pada meja kerja dan lantai raised floor.',
        'Pengaturan pencahayaan berbasis sirkadian (300-500 lux) untuk menjaga fokus kerja dan mengurangi kelelahan mata.',
        'Gambar konstruksi partisi kedap suara berstandar STC 45 ke atas.',
      ],
      imageKey: 'office',
      rotation: '-rotate-2',
    },
    {
      id: 'feasibility',
      number: '04',
      title: 'Studi Kelayakan Lahan & Audit Teknis Tapak (Feasibility Study)',
      focus: 'Layanan awal sebelum klien menyewa ruko, rukan, gedung tua, atau lahan kosong di Jakarta, Bandung, dan Bali.',
      deliverables: [
        'Pengukuran dimensi eksisting menggunakan sensor laser dan audit kondisi struktur beton/baja eksisting.',
        'Pemeriksaan kapasitas daya listrik PLN eksisting, jalur pipa air kotor, dan ketersediaan titik pembuangan limbah.',
        'Analisis zonasi perizinan tata ruang kota (KDB, KLB, GSB) dan potensi izin operasional usaha.',
        'Estimasi kasar anggaran CAPEX konstruksi untuk menentukan apakah nilai sewa tempat masuk akal secara finansial.',
      ],
      imageKey: 'feasibility',
      rotation: 'rotate-2',
    },
  ],
  deliverablesStandard: {
    headline: 'Apa Saja Dokumen yang Diterima Klien Sebelum Kontraktor Mulai Bekerja?',
    items: [
      {
        code: 'DOC-01',
        title: 'Set Gambar Kerja Detail (DED) 80 hingga 120 Halaman A3',
        description: 'Mencakup arsitektur, interior, struktur, dan MEP lengkap hingga level mur dan baut pengunci.',
      },
      {
        code: 'DOC-02',
        title: 'Buku Rencana Kerja dan Syarat-Syarat (RKS)',
        description: 'Mengikat spesifikasi teknis kontraktor dan menjadi dasar hukum standar mutu pengerjaan.',
      },
      {
        code: 'DOC-03',
        title: 'Dokumen Bill of Quantities (BoQ) Lengkap untuk Tender',
        description: 'Rincian volume satuan material dan upah tukang tanpa ada angka gelondongan terselubung.',
      },
      {
        code: 'DOC-04',
        title: 'Buku Sampel Material Fisik (Material Board)',
        description: 'Telah teruji ketersediaan stok fisiknya di distributor resmi Bandung, Jakarta, dan Bali.',
      },
      {
        code: 'DOC-05',
        title: 'Jadwal Kerja Konstruksi Kurva S',
        description: 'Alat ukur persentase progres mingguan di lapangan untuk mencegah keterlambatan pembukaan usaha.',
      },
    ],
  },
  materialAudit: {
    headline: 'Audit Ketersediaan Material Lokal Terverifikasi.',
    subhead: 'Kami memverifikasi rantai pasok material sebelum dokumen tender diserahkan, mengeliminasi risiko pembengkakan biaya akibat material impor langka.',
    materials: [
      {
        name: 'Kayu Ulin Daur Ulang',
        source: 'Depot Kayu Legal Kalimantan & Jawa Timur',
        application: 'Struktur atap ekspos, pergola semi-outdoor, dan dek lantai tahan cuaca lembap.',
      },
      {
        name: 'Batu Andesit Padalarang',
        source: 'Tambang Batu Alam Padalarang, Jawa Barat',
        application: 'Lantai nonslip finish bakar, bar counter teraso cor di tempat, dan pelapis fasad.',
      },
      {
        name: 'Batu Paras & Batu Candi',
        source: 'Pengrajin Batu Alam Ubud & Gianyar, Bali',
        application: 'Dinding aksen tekstur berpori dengan pelapis water-repellent ramah lingkungan.',
      },
      {
        name: 'Stainless Steel & Besi Hitam Knock-Down',
        source: 'Fabrikasi Workshop Lokal Bandung & Jabodetabek',
        application: 'Rak display ritel modular tanpa las di lokasi, higienis, dan cepat dirakit.',
      },
    ],
  },
  closingCta: {
    headline: 'Amankan Dokumen Perencanaan Teknis Sebelum Memilih Kontraktor.',
    subhead: 'Hubungi tim teknis kami untuk membedah kebutuhan gambar kerja ruang usaha Anda.',
    buttonText: 'Jadwalkan Diskusi Spesifikasi Teknis',
    href: '/kontak',
  },
};

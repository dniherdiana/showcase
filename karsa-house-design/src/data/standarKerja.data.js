export const standarKerjaData = {
  hero: {
    headline: 'Lima Tahap Operasional dari Studi Tapak Hingga Serah Terima Kunci.',
    headlineAccent: 'Lima Tahap Operasional',
    subhead: 'Kami menolak metode kerja spekulatif. Setiap tahapan proyek di Atelier Karsa diikat oleh dokumen verifikasi tertulis, kontrol deviasi biaya 5%, dan supervisi lapangan mingguan oleh Lead Architect.',
    ctaPrimary: {
      label: 'Pelajari Alur Kerja Kami',
      href: '#tahapan',
    },
    ctaSecondary: {
      label: 'Jadwalkan Konsultasi Denah',
      href: '/kontak',
    },
  },
  phases: [
    {
      number: '01',
      title: 'Tahap 01: Feasibility Study & Audit Fisik Tapak (Minggu 1 - 2)',
      description: 'Kami tidak langsung menggambar. Tim teknis turun ke lokasi untuk mengukur dimensi riil dengan alat laser, memeriksa kekuatan balok beton eksisting, menguji tekanan air tanah, dan memetakan kapasitas daya listrik PLN. Kami mencocokkan kondisi fisik lahan dengan target model bisnis Anda guna memastikan ruang tersebut layak disewa dan dibangun.',
      output: 'Dokumen Laporan Kelayakan Lahan, Denah Pengukuran Eksisting As-Found, dan Matriks Risiko Konstruksi Awal.',
      imageKey: 'feasibility',
    },
    {
      number: '02',
      title: 'Tahap 02: Spatial Strategy & Concept Development (Minggu 3 - 4)',
      description: 'Merancang zoning ruang komersial yang berorientasi pada efisiensi operasional. Kami membedah pergerakan staf, titik antrean kasir, alur masuk bahan baku, dan kenyamanan pelanggan. Setelah denah 2D disetujui, kami membuat visualisasi 3D dengan skala dimensi 1 banding 1 yang memetakan pencahayaan dan proporsi ruang sebenarnya.',
      output: 'Gambar Denah Tata Ruang Fungsional, Perspektif Visual 3D Skala Nyata, dan Skema Moodboard Material.',
      imageKey: 'studioKolabora',
    },
    {
      number: '03',
      title: 'Tahap 03: Detail Engineering Design (DED) & Audit Material Lokal (Minggu 5 - 7)',
      description: 'Menerjemahkan konsep estetika menjadi dokumen teknis siap bangun. Kami memproduksi 80 hingga 120 lembar gambar kerja yang merinci ketebalan pelat baja, sambungan kayu, letak stopkontak, jalur pipa air buangan, dan spesifikasi sakelar. Bersamaan dengan itu, tim mengecek ketersediaan fisik material di toko dan distributor resmi di Jakarta, Bandung, atau Bali.',
      output: 'Gambar Kerja DED Lengkap (Arsitektur, Interior, Struktur, MEP), Buku Spesifikasi RKS, dan Sampel Material Fisik Terverifikasi.',
      imageKey: 'dedBlueprints',
    },
    {
      number: '04',
      title: 'Tahap 04: Precision RAB & Pendampingan Tender Kontraktor (Minggu 8)',
      description: 'Menghitung Rencana Anggaran Biaya (RAB) terperinci berbasis Bill of Quantities (BoQ) tanpa angka gelondongan. Kami mendampingi Anda dalam proses tender kontraktor, menganalisis penawaran yang masuk, mengeliminasi biaya terselubung, dan mengunci klausul batas toleransi deviasi pengerjaan maksimal 5% di dalam kontrak kerja kontraktor.',
      output: 'Buku RAB Presisi Owner Estimate, Dokumen Tender BoQ Terstandarisasi, dan Berita Acara Rekomendasi Pemenang Tender.',
      imageKey: 'materialSamples',
    },
    {
      number: '05',
      title: 'Tahap 05: Supervisi Mingguan Lead Architect & Serah Terima Kunci (Masa Konstruksi)',
      description: 'Satu Lead Architect yang sama memimpin kunjungan lapangan mingguan selama fase konstruksi fisik. Kami mengawasi apakah adukan semen, elevasi lantai, dan detail furnitur kustom sesuai gambar DED. Setiap ketidaksesuaian langsung diperbaiki sebelum menjadi masalah permanen. Proyek diakhiri dengan uji fungsi menyeluruh (commissioning) seluruh utilitas sebelum pembukaan toko.',
      output: 'Berita Acara Supervisi Mingguan, Laporan Pengawasan Foto Berkala, Buku Panduan Pemeliharaan Bangunan, dan Gambar As-Built Final.',
      imageKey: 'architectInspection',
    },
  ],
  deviationProtocol: {
    headline: 'Bagaimana Kami Mengunci Garansi Deviasi Biaya Maksimal 5%?',
    points: [
      {
        title: 'Perhitungan Berbasis Volume Fisik Nyata, Bukan Tarif Meteran Kasar',
        description: 'Kami tidak mengalikan luas ruangan dengan harga perkiraan per meter persegi, melainkan menghitung kebutuhan riil sakelar, semen, keramik, pelat besi, dan jam kerja tukang.',
      },
      {
        title: 'Uji Pasokan Distributor Lokal Sebelum Tender',
        description: 'Material yang kami cantumkan dalam BoQ sudah dipastikan harganya dan ketersediaan stoknya di agen lokal, sehingga tidak ada kenaikan harga mendadak akibat kelangkaan barang.',
      },
      {
        title: 'Pencegahan Perubahan Desain di Lapangan (Zero On-Site Rework)',
        description: 'Kelengkapan gambar kerja DED memastikan kontraktor tidak perlu membongkar pasangan bata atau memotong keramik berulang kali karena salah paham gambar.',
      },
    ],
  },
  supervisionSop: {
    headline: 'Kehadiran Nyata Arsitek di Lapangan Setiap Pekan.',
    body: 'Kontraktor membutuhkan mitra dialog teknis, bukan sekadar instruksi jarak jauh. Lead Architect Atelier Karsa hadir di lokasi proyek setiap minggu dengan checklist evaluasi yang mencakup verifikasi elevasi lantai, uji kebocoran pipa air, keselarasan nat ubin, uji beban gantungan display, dan kepatuhan jalur kabel listrik terhadap standar PUIL. Semua temuan dicatat dalam formulir Berita Acara Lapangan yang wajib ditandatangani oleh mandor kontraktor dan arsitek pengawas.',
  },
  closingCta: {
    headline: 'Mulai Rancang Ruang Komersial Anda dengan Kepastian Teknis.',
    subhead: 'Jadwalkan sesi pemetaan proyek bersama Lead Architect kami untuk mengkaji lokasi dan garis waktu usaha Anda.',
    buttonText: 'Jadwalkan Konsultasi Denah & Kelayakan Lahan',
    href: '/kontak',
  },
};

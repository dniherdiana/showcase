export const kontakData = {
  hero: {
    headline: 'Konsultasikan Rencana Ruang Komersial Anda Bersama Lead Architect.',
    headlineAccent: 'Bersama Lead Architect',
    subhead: 'Kirimkan informasi awal mengenai lokasi lahan, status kepemilikan, dan target pembukaan bisnis Anda. Tim teknis Atelier Karsa akan meninjau kelayakan tapak dan menghubungi Anda dalam 1 x 24 jam kerja.',
    ctaPrimary: {
      label: 'Kirim Formulir Briefing Teknis',
      href: '#briefing-form',
    },
    ctaSecondary: {
      label: 'Hubungi WhatsApp Studio',
      href: 'https://wa.me/6281234567890',
    },
  },
  form: {
    title: 'Formulir Pemetaan Teknis Proyek Komersial',
    fields: {
      name: {
        label: 'Nama Lengkap Pemilik / Penanggung Jawab Proyek',
        placeholder: 'Contoh: Hendra Pratama',
      },
      brand: {
        label: 'Nama Brand atau Perusahaan',
        placeholder: 'Contoh: Karsa Specialty Coffee (PT Karsa Kuliner Nusantara)',
      },
      businessType: {
        label: 'Jenis Usaha Komersial',
        options: [
          'Kafe / Kedai Kopi / Roastery',
          'Restoran / Bar / Lounge',
          'Butik Ritel / Toko Pakaian / Showroom',
          'Kantor Kreatif / Studio Produksi / Co-Working',
          'Layanan Medis Estetika / Wellness / Lainnya',
        ],
      },
      city: {
        label: 'Lokasi Kota Proyek',
        options: [
          'Jabodetabek (Jakarta, Bogor, Depok, Tangerang, Bekasi)',
          'Kota Bandung & Sekitarnya',
          'Bali (Denpasar, Badung, Canggu, Ubud, Sanur)',
          'Kota Lain di Indonesia',
        ],
      },
      area: {
        label: 'Perkiraan Luas Area Ruang (m2)',
        placeholder: 'Contoh: 250 m2',
      },
      landStatus: {
        label: 'Status Penguasaan Lahan / Bangunan Saat Ini',
        options: [
          'Sudah Sewa / Sudah Beli (Kunci Sudah Diterima)',
          'Masih Tahap Negosiasi Sewa dengan Pemilik Gedung',
          'Milik Sendiri (Lahan Kosong / Bangunan Eksisting)',
          'Sedang Mencari Lokasi yang Sesuai',
        ],
      },
      targetTimeline: {
        label: 'Target Waktu Pembukaan Operasional Bisnis',
        placeholder: 'Contoh: 4 Bulan ke Depan (November 2026)',
      },
      budgetRange: {
        label: 'Perkiraan Alokasi Anggaran Konstruksi (Opsional)',
        options: [
          'Rp350 Juta sampai Rp750 Juta',
          'Rp750 Juta sampai Rp1.5 Miliar',
          'Rp1.5 Miliar sampai Rp3.5 Miliar',
          'Di atas Rp3.5 Miliar',
        ],
      },
      notes: {
        label: 'Catatan Tambahan atau Tautan Denah / Foto Lokasi (Google Drive / Dropbox)',
        placeholder: 'Cantumkan tautan dokumen eksisting atau ringkasan kebutuhan fungsional ruang Anda.',
      },
    },
    submitButtonLabel: 'Jadwalkan Konsultasi Denah & Kelayakan Lahan',
  },
  studiosHeadline: 'Kantor Studio & Representatif Atelier Karsa.',
  studios: [
    {
      city: 'Bandung Studio (Kantor Pusat)',
      address: 'Jl. LLRE Martadinata (Jl. Riau) No. 112, Cihapit, Bandung, Jawa Barat 40114',
      email: 'studio.bdg@atelierkarsa.co.id',
      phone: '+62 22 720 8891',
    },
    {
      city: 'Jakarta Representative Hub',
      address: 'Gandaria 8 Office Tower Lt. 12, Jl. Sultan Iskandar Muda, Kebayoran Lama, Jakarta Selatan 12240',
      email: 'jkt@atelierkarsa.co.id',
      phone: '+62 21 2930 4421',
    },
    {
      city: 'Bali Project Office',
      address: 'Jl. Raya Kerobokan No. 88X, Kerobokan Kelod, Kuta Utara, Badung, Bali 80361',
      email: 'bali@atelierkarsa.co.id',
      phone: '+62 361 847 6620',
    },
  ],
  operationalHours: 'Senin sampai Jumat: 09.00 - 18.00 WIB / WITA (Kunjungan Konsultasi Tatap Muka Berdasarkan Perjanjian Temu).',
};

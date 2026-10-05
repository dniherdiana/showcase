export const layananScopeMatrixData = {
  heading: 'Matriks Transparansi Ruang Lingkup Layanan',
  subheading: 'Kejelasan mutlak mengenai apa yang termasuk dalam setiap paket keterlibatan studio. Tidak ada biaya terselubung di tengah jalan.',
  tiers: [
    { id: 'concept', name: 'Studi Konsep & Tapak', feeNote: '20% Alokasi Biaya' },
    { id: 'design', name: 'Arsitektur + DED Lengkap', feeNote: '65% Alokasi Biaya' },
    { id: 'integrated', name: 'Layanan Terpadu Satu Pintu', feeNote: '100% Alokasi Biaya (Rekomendasi)' },
  ],
  items: [
    { feature: 'Studi Kontur Tapak & Orientasi Iklim Mikro', concept: true, design: true, integrated: true },
    { feature: 'Wawancara Analisis Kebiasaan Hidup (Lived Habits)', concept: true, design: true, integrated: true },
    { feature: 'Konsep Denah Spasial & Skematik Fasad 3D', concept: true, design: true, integrated: true },
    { feature: 'Set Gambar Kerja Detail Engineering Design (DED)', concept: false, design: true, integrated: true },
    { feature: 'Kalkulasi Beban Struktur Sipil & Pondasi', concept: false, design: true, integrated: true },
    { feature: 'Desain Sistem Mekanikal, Elektrikal & Plumbing (MEP)', concept: false, design: true, integrated: true },
    { feature: 'Desain Interior 3D & Detail Joinery Kayu Kustom', concept: false, design: false, integrated: true },
    { feature: 'Kurasi Fisik Papan Sampel Material Alami', concept: false, design: true, integrated: true },
    { feature: 'Rencana Anggaran Biaya (RAB) Terinci untuk Tender Kontraktor', concept: false, design: true, integrated: true },
    { feature: 'Inspeksi & Pengawasan Berkala Eksekusi di Lokasi Proyek', concept: false, design: false, integrated: true },
  ],
};

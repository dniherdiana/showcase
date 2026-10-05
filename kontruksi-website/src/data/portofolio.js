import craneFactoryImg from '../assets/images/crane_factory.jpg';
import engineerImg from '../assets/images/engineer.jpg';
import heroImg from '../assets/images/hero.jpg';
import loadingDockExtImg from '../assets/images/loading_dock_ext.jpg';
import manufacturingImg from '../assets/images/manufacturing.jpg';
import steelFrameCikarangImg from '../assets/images/steel_frame_cikarang.jpg';
import warehouseHighbayImg from '../assets/images/warehouse_highbay.jpg';
import warehouseImg from '../assets/images/warehouse.jpg';
import logistikNusantaraCardImg from '../assets/images/logistik_nusantara_card.jpg';
import agroPanganImg from '../assets/images/agro_pangan.jpg';
import dataCenterImg from '../assets/images/data_center_indonesia.jpg';
import cilegonMetalFacadeImg from '../assets/images/cilegon_metal_facade.jpg';
import riauAgroStage2Img from '../assets/images/riau_agro_stage2.jpg';

export const portofolioContent = {
  hero: {
    preheader: 'Dokumentasi Resmi Proyek & Galeri Foto',
    title: 'Rekam Jejak Pembangunan Pabrik & Gudang Industri',
    subheading: 'Bukti fisik pengerjaan struktur baja presisi di berbagai kawasan industri Indonesia. Dilengkapi galeri foto interaktif per proyek, spesifikasi teknis riil, dan testimoni pemilik bisnis.',
    badges: [
      '100% Proyek Tepat Waktu',
      'Garansi Purna Jual 12 Bulan'
    ]
  },
  caseStudies: [
    {
      client: 'PT Surya Manufaktur Utama',
      project: 'Pabrik Manufaktur Otomotif Heavy Duty',
      location: 'Kawasan Industri Cikarang, Jawa Barat',
      scope: 'Durasi 4.5 Bulan • Tim 24 Personel • Luas 3.600 m² • 145 Ton Steel WF',
      challenge: 'Kebutuhan bentang lebar 30 meter tanpa kolom tengah yang harus mampu menopang beban gantry crane 25 Ton untuk operasional perakitan komponen mesin otomotif berat.',
      approach: 'Penggunaan profil baja WF 400 bertoleransi SNI dipadu dengan sistem bracing silang khusus dan perumpamaan beban dinamis. Konstruksi atap menggunakan sandwich panel PU Foam untuk insulasi panas.',
      outcome: 'Proyek selesai tepat waktu dalam 4.5 bulan tanpa adendum biaya. Efisiensi sirkulasi alat berat meningkat 30% dan suhu ruangan turun 4°C tanpa pendingin udara buatan.',
      quote: '"Moving Co. memberikan kepastian anggaran dan kualitas fisik bangunan yang sangat memuaskan. Garansi maintenance purna jual 12 bulan memberikan ketenangan penuh bagi operasional kami."',
      image: manufacturingImg
    },
    {
      client: 'PT Logistik Nusantara Hub',
      project: 'Pusat Distribusi Logistik High-Bay 24/7',
      location: 'Kawasan Industri Karawang, Jawa Barat',
      scope: 'Durasi 6 Bulan • Tim 32 Personel • Luas 5.200 m² • 210 Ton Steel H-Beam',
      challenge: 'Target tenggat waktu ketat sebelum musim puncak logistik, dengan kebutuhan 18 pintu loading dock dan ketahanan lantai beton heavy duty terhadap beban lalu lintas forklift terus menerus.',
      approach: 'Penerapan metode pre-fabrikasi baja H-Beam secara paralel di workshop kami saat pengerjaan tanah dan pondasi berjalan di lapangan. Penjadwalan kurva S dikawal ketat secara harian.',
      outcome: 'Penyerahan kunci dilakukan 10 hari lebih cepat dari target awal. Fasilitas siap beroperasi penuh untuk memenuhi lonjakan sirkulasi kargo 24/7.',
      quote: '"Ketepatan jadwal dan transparansi tonase baja Moving Co. luar biasa. Penyerahan kunci lebih awal membantu kami memulai operasional logistik lebih cepat dari proyeksi investor."',
      image: logistikNusantaraCardImg
    }
  ],
  galleryProjects: [
    {
      id: 'cikarang-manufaktur',
      category: 'manufaktur',
      categoryName: 'Pabrik Manufaktur',
      name: 'Pabrik Manufaktur Otomotif Heavy Duty',
      client: 'PT Surya Manufaktur Utama',
      location: 'Kawasan Industri Cikarang, Jawa Barat',
      specs: '3.600 m² • 145 Ton Steel WF 400 • Crane 25 Ton',
      photos: [
        {
          id: 'cik-1',
          projectId: 'cikarang-manufaktur',
          projectName: 'Pabrik Manufaktur Otomotif Heavy Duty',
          client: 'PT Surya Manufaktur Utama',
          location: 'Cikarang, Jawa Barat',
          phase: 'Tahap 1: Eresi Rangka Utama',
          title: 'Pemasangan Struktur Baja WF 400 SNI Bentang 30m',
          spec: 'Baja WF 400x200 • Sambungan HTB Grade 8.8 • Toleransi Presisi ±1mm',
          description: 'Pemasangan kolom dan girder baja WF bentang 30 meter tanpa kolom tengah. Sistem sambungan menggunakan baut HTB Grade 8.8 dengan kekencangan terkalibrasi torque wrench.',
          image: steelFrameCikarangImg
        },
        {
          id: 'cik-2',
          projectId: 'cikarang-manufaktur',
          projectName: 'Pabrik Manufaktur Otomotif Heavy Duty',
          client: 'PT Surya Manufaktur Utama',
          location: 'Cikarang, Jawa Barat',
          phase: 'Tahap 2: Integrasi Gantry Crane',
          title: 'Runway Beam & Overhead Gantry Crane Kapasitas 25 Ton',
          spec: 'Kapasitas Beban 25 Ton • Clearance Tinggi 8.5m • Bracket Baja Peredam Getar',
          description: 'Pemasangan rel runway crane overhead 25 Ton yang menyatu langsung dengan kolom baja utama. Dilengkapi bracket penguat dinamis untuk meredam getaran operasional perakitan mesin.',
          image: craneFactoryImg
        },
        {
          id: 'cik-3',
          projectId: 'cikarang-manufaktur',
          projectName: 'Pabrik Manufaktur Otomotif Heavy Duty',
          client: 'PT Surya Manufaktur Utama',
          location: 'Cikarang, Jawa Barat',
          phase: 'Tahap 3: Finishing & Interior',
          title: 'Layout Assembly Line & Sistem Skylight Hemat Energi',
          spec: 'Skylight Translucent Sheet • Pencahayaan Alami 35% • Insulasi Panas 4°C',
          description: 'Selesai pengerjaan interior lantai produksi dan pencahayaan skylight hemat energi yang mengurangi konsumsi daya listrik penerangan siang hari.',
          image: manufacturingImg
        },
        {
          id: 'cik-4',
          projectId: 'cikarang-manufaktur',
          projectName: 'Pabrik Manufaktur Otomotif Heavy Duty',
          client: 'PT Surya Manufaktur Utama',
          location: 'Cikarang, Jawa Barat',
          phase: 'Tahap 4: Serah Terima & Garansi',
          title: 'Inspeksi Mutu Struktur & Penyerahan Dokumen Purna Jual 12 Bulan',
          spec: 'Pemeriksaan Kekencangan Torsi Baut • Uji Beban Dinamis • Garansi 12 Bulan',
          description: 'Inspeksi QC akhir ketepatan struktur baja dan serah terima resmi bangunan pabrik siap pakai lengkap dengan jaminan perawatan berkala 12 bulan.',
          image: engineerImg
        }
      ]
    },
    {
      id: 'karawang-logistik',
      category: 'logistik',
      categoryName: 'Gudang Logistik',
      name: 'Pusat Distribusi Logistik High-Bay 24/7',
      client: 'PT Logistik Nusantara Hub',
      location: 'Kawasan Industri Karawang, Jawa Barat',
      specs: '5.200 m² • 210 Ton Steel H-Beam • 18 Loading Docks',
      photos: [
        {
          id: 'krw-1',
          projectId: 'karawang-logistik',
          projectName: 'Pusat Distribusi Logistik High-Bay 24/7',
          client: 'PT Logistik Nusantara Hub',
          location: 'Karawang, Jawa Barat',
          phase: 'Tahap 1: Fasad Utama & Loading Dock',
          title: 'Gedung Pusat Distribusi PT Logistik Nusantara Hub',
          spec: 'Fasad Heavy Steel Canopy • 18 Loading Bays • Automatic Shutter',
          description: 'Fasilitas gudang distribusi logistik utama dengan signage PT Logistik Nusantara Hub, kanopi baja bentang panjang, dan akses sirkulasi kontainer 24 jam.',
          image: logistikNusantaraCardImg
        },
        {
          id: 'krw-2',
          projectId: 'karawang-logistik',
          projectName: 'Pusat Distribusi Logistik High-Bay 24/7',
          client: 'PT Logistik Nusantara Hub',
          location: 'Karawang, Jawa Barat',
          phase: 'Tahap 2: Struktur High-Bay Interior',
          title: 'Interior Bentang Lebar Clear-Span 35 Meter & Epoxy Floor',
          spec: 'Clear-Span 35m • Concrete Floor Hardener 350 kg/cm² • Beban Forklift 15T',
          description: 'Struktur rangka atap truss bebas kolom tengah seluas 5.200 m² memberikan kebebasan manuver penuh bagi unit forklift dan sistem rak high-bay logistik.',
          image: warehouseHighbayImg
        },
        {
          id: 'krw-3',
          projectId: 'karawang-logistik',
          projectName: 'Pusat Distribusi Logistik High-Bay 24/7',
          client: 'PT Logistik Nusantara Hub',
          location: 'Karawang, Jawa Barat',
          phase: 'Tahap 3: Canopy & Dock Kontainer',
          title: 'Eksterior 18 Pintu Loading Dock & Canopy Steel Heavy Duty',
          spec: '18 Loading Bays • Heavy Steel Canopy • Automatic Roller Shutter Door',
          description: 'Area loading-unloading kontainer dilengkapi canopy baja bentang panjang bertingkat untuk perlindungan sirkulasi barang 24 jam dalam segala cuaca.',
          image: loadingDockExtImg
        },
        {
          id: 'krw-4',
          projectId: 'karawang-logistik',
          projectName: 'Pusat Distribusi Logistik High-Bay 24/7',
          client: 'PT Logistik Nusantara Hub',
          location: 'Karawang, Jawa Barat',
          phase: 'Tahap 4: Serah Terima & Garansi',
          title: 'Inspeksi Kualitas Sambungan Baja & Dokumen Garansi 12 Bulan',
          spec: 'QA Non-Destructive Testing (NDT) Weld Check • Serah Terima 10 Hari Lebih Cepat',
          description: 'Pemeriksaan akhir kekuatan sambungan las dan kekencangan baut sebelum serah terima kunci resmi dan aktivasi garansi pemeliharaan 12 bulan.',
          image: engineerImg
        }
      ]
    },
    {
      id: 'cilegon-metal',
      category: 'metal-smelter',
      categoryName: 'Smelter & Metal',
      name: 'Fasilitas Fabrikasi Metal & Structural Plant',
      client: 'PT Karya Baja Nusantara',
      location: 'Kawasan Industri Cilegon, Banten',
      specs: '2.800 m² • 115 Ton Steel Truss • Crane 15 Ton',
      photos: [
        {
          id: 'clg-1',
          projectId: 'cilegon-metal',
          projectName: 'Fasilitas Fabrikasi Metal & Structural Plant',
          client: 'PT Karya Baja Nusantara',
          location: 'Cilegon, Banten',
          phase: 'Tahap 1: Fasad & Workshop Utama',
          title: 'Workshop Utama PT Karya Baja Nusantara Cilegon',
          spec: 'Heavy Steel Workshop • High Clearance 14m • Struktur Tahan Asam Pesisir',
          description: 'Fasilitas workshop pengolahan dan fabrikasi baja struktur berat dengan ketahanan korosi lingkungan pesisir industri Cilegon.',
          image: cilegonMetalFacadeImg
        },
        {
          id: 'clg-2',
          projectId: 'cilegon-metal',
          projectName: 'Fasilitas Fabrikasi Metal & Structural Plant',
          client: 'PT Karya Baja Nusantara',
          location: 'Cilegon, Banten',
          phase: 'Tahap 2: Fasad Sandwich Panel',
          title: 'Fasad Industri Heavy-Duty & Turbine Ventilator',
          spec: 'Sandwich Panel 50mm • Multi Turbine Ventilators • Daylight Skylight 35%',
          description: 'Integrasi sistem ventilasi alami dan fasad panel terisolasi untuk meredam suhu panas area fabrikasi pengolahan logam.',
          image: heroImg
        },
        {
          id: 'clg-3',
          projectId: 'cilegon-metal',
          projectName: 'Fasilitas Fabrikasi Metal & Structural Plant',
          client: 'PT Karya Baja Nusantara',
          location: 'Cilegon, Banten',
          phase: 'Tahap 3: Kolom Overhead Crane 50T',
          title: 'Integrasi Kolom Baja Heavy-Duty & Overhead Crane 50 Ton',
          spec: 'OHT Crane 50 Ton • Bracket Peredam Getar • Concrete Tie-Beam K-350',
          description: 'Pemasangan kolom baja heavy-duty bertoleransi presisi SNI yang menyangga rel overhead crane 50 Ton untuk operasional fabrikasi metal.',
          image: craneFactoryImg
        },
        {
          id: 'clg-4',
          projectId: 'cilegon-metal',
          projectName: 'Fasilitas Fabrikasi Metal & Structural Plant',
          client: 'PT Karya Baja Nusantara',
          location: 'Cilegon, Banten',
          phase: 'Tahap 4: Serah Terima & Garansi',
          title: 'Inspeksi Kualitas Sambungan NDT & Dokumen Garansi 12 Bulan',
          spec: 'QA Non-Destructive Testing (NDT) • Uji Momen Las • Garansi Purna Jual 12 Bulan',
          description: 'Pemeriksaan akhir mutu pengelasan baja dan kekencangan baut HTB sebelum penyerahan kunci resmi dan pengaktifan garansi pemeliharaan 12 bulan.',
          image: engineerImg
        }
      ]
    },
    {
      id: 'riau-agro',
      category: 'agro-pangan',
      categoryName: 'Agro & Pangan',
      name: 'Fasilitas Pengolahan Agro-Industri & Kelapa Sawit',
      client: 'PT Riau Agro Nusantara',
      location: 'Kawasan Industri Riau, Sumatra',
      specs: '4.200 m² • 180 Ton Heavy Truss • Continuous Flow',
      photos: [
        {
          id: 'ro-1',
          projectId: 'riau-agro',
          projectName: 'Fasilitas Pengolahan Agro-Industri & Kelapa Sawit',
          client: 'PT Riau Agro Nusantara',
          location: 'Riau, Sumatra',
          phase: 'Tahap 1: Rangka Utama Pabrik',
          title: 'Pabrik Pengolahan Kelapa Sawit PT Riau Agro Nusantara',
          spec: 'Heavy Duty Steel Truss • Multi-Level Floor • High Structural Rigidity',
          description: 'Konstruksi bangunan pabrik pengolahan kelapa sawit skala industri besar menggunakan struktur rangka baja heavy duty yang tahan kelembaban tinggi dan getaran mesin pemisah.',
          image: agroPanganImg
        },
        {
          id: 'ro-2',
          projectId: 'riau-agro',
          projectName: 'Fasilitas Pengolahan Agro-Industri & Kelapa Sawit',
          client: 'PT Riau Agro Nusantara',
          location: 'Riau, Sumatra',
          phase: 'Tahap 2: Tangki Refineri & Perpipaan',
          title: 'Struktur Rangka Tangki Refineri PKS Riau & Pipe Bridge Steel',
          spec: 'Pipe Bridge Structural Steel • Tangki CPO Anti-Karat • Cat Epoxy Heavy Duty',
          description: 'Integrasi jembatan pipa baja industri dan dudukan tangki penyulingan CPO bertingkat dengan perlindungan cat tahan bahan kimia organik.',
          image: riauAgroStage2Img
        },
        {
          id: 'ro-3',
          projectId: 'riau-agro',
          projectName: 'Fasilitas Pengolahan Agro-Industri & Kelapa Sawit',
          client: 'PT Riau Agro Nusantara',
          location: 'Riau, Sumatra',
          phase: 'Tahap 3: Eresi Rangka Atap Truss',
          title: 'Konstruksi Rangka Atap Bentang Lebar Boiler House',
          spec: 'Rangka Steel Truss WF 350 • Kemiringan Atap 12° • Ventilasi Udara Panas',
          description: 'Pemasangan rangka atap truss bentang lebar tanpa kolom tengah untuk mengakomodasi unit boiler dan stasiun perebusan buah sawit.',
          image: steelFrameCikarangImg
        },
        {
          id: 'ro-4',
          projectId: 'riau-agro',
          projectName: 'Fasilitas Pengolahan Agro-Industri & Kelapa Sawit',
          client: 'PT Riau Agro Nusantara',
          location: 'Riau, Sumatra',
          phase: 'Tahap 4: Serah Terima & Garansi',
          title: 'Inspeksi QC Ketahanan Asam Bio-Mass & Penyerahan Garansi 12 Bulan',
          spec: 'QC Non-Destructive Check • Sertifikasi Standar Lingkungan • Garansi 12 Bulan',
          description: 'Pengujian akhir kepresisian struktur baja terhadap beban dinamis mesin penggiling serta penyerahan sertifikat garansi purna jual.',
          image: engineerImg
        }
      ]
    },
    {
      id: 'tangerang-datacenter',
      category: 'data-center',
      categoryName: 'Data Center',
      name: 'Fasilitas Tier-3 High-Tech Data Center',
      client: 'PT Nexus Data Center Indonesia',
      location: 'BSD City, Tangerang, Banten',
      specs: '2.400 m² • 130 Ton Composite Steel • Tier-3 K3',
      photos: [
        {
          id: 'tg-1',
          projectId: 'tangerang-datacenter',
          projectName: 'Fasilitas Tier-3 High-Tech Data Center',
          client: 'PT Nexus Data Center Indonesia',
          location: 'Tangerang, Banten',
          phase: 'Tahap 1: Gedung Fasad & Security Gate',
          title: 'Fasad Utama Gedung Nexus Data Center Indonesia',
          spec: 'Metal Composite Cladding • Keamanan Perimeter Zone 4 • Tier-3 Facility Design',
          description: 'Pembangunan fasad gedung data center modern dengan cladding panel metal komposit bermutu tinggi dan sistem keamanan perimeter berlapis.',
          image: dataCenterImg
        },
        {
          id: 'tg-2',
          projectId: 'tangerang-datacenter',
          projectName: 'Fasilitas Tier-3 High-Tech Data Center',
          client: 'PT Nexus Data Center Indonesia',
          location: 'Tangerang, Banten',
          phase: 'Tahap 2: Struktur Komposit Tahan Gempa',
          title: 'Eresi Kolom Komposit Baja-Beton Tahan Guncangan Gempa',
          spec: 'Baja Komposit Steel-Concrete • Dinding Fire-Rated 4 Jam • Toleransi Presisi ±0.5mm',
          description: 'Konstruksi rangka baja komposit berstandar ketahanan gempa Zona 4 dan proteksi dinding tahan api 4 jam untuk mengamankan infrastruktur server.',
          image: steelFrameCikarangImg
        },
        {
          id: 'tg-3',
          projectId: 'tangerang-datacenter',
          projectName: 'Fasilitas Tier-3 High-Tech Data Center',
          client: 'PT Nexus Data Center Indonesia',
          location: 'Tangerang, Banten',
          phase: 'Tahap 3: Cooling Plant & Power Yard',
          title: 'Konstruksi Dudukan Baja Heavy-Duty Chiller & Generator Tier-3',
          spec: 'Struktur Steel Frame Galvanis • Vibration Absorber • System Redundancy N+1',
          description: 'Pemasangan dudukan struktur baja galvanis berat bergaransi presisi untuk menyangga modul pendingin udara presisi (chiller) dan generator listrik cadangan Tier-3.',
          image: dataCenterImg
        },
        {
          id: 'tg-4',
          projectId: 'tangerang-datacenter',
          projectName: 'Fasilitas Tier-3 High-Tech Data Center',
          client: 'PT Nexus Data Center Indonesia',
          location: 'Tangerang, Banten',
          phase: 'Tahap 4: Serah Terima & Sertifikasi',
          title: 'Inspeksi Akhir K3 Tier-3 & Serah Terima Dokumen Pemeliharaan',
          spec: 'Audit Keamanan Fisik Tier-3 • Test Beban Genset Cadangan • Garansi Purna Jual 12 Bulan',
          description: 'Pengujian integrasi penuh keamanan bangunan data center sebelum penyerahan kunci resmi dan pengaktifan garansi perawatan purna jual 12 bulan.',
          image: engineerImg
        }
      ]
    }
  ]
};

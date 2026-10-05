export const unitTypes = [
  {
    id: 'type-54',
    modalId: 'modal-type-54',
    cardStyle: 'standard',
    badge: 'Hunian Pertama Ideal',
    name: 'Type 54 — Serenity',
    landArea: '72 m²',
    buildingArea: '54 m²',
    price: 'Rp 780.000.000',
    kprInstallment: 'Rp 4.9 Juta / bln',
    features: [
      '2 Kamar Tidur · 1 Kamar Mandi',
      'Carport 1 Mobil + Taman Depan',
      'Listrik 2.200W & Air PDAM',
    ],
  },
  {
    id: 'type-72',
    modalId: 'modal-type-72',
    cardStyle: 'featured',
    badge: 'Pilihan Favorit Keluarga Muda',
    name: 'Type 72 — Deluxe',
    landArea: '90 m²',
    buildingArea: '72 m²',
    price: 'Rp 1.120.000.000',
    kprInstallment: 'Rp 6.8 Juta / bln',
    features: [
      '3 Kamar Tidur · 2 Kamar Mandi',
      'Carport 2 Mobil Sejajar',
      'Ceiling Tinggi 4.2 Meter',
    ],
    specs: [
      { label: '3 Kamar', value: 'Tidur Utama & Anak' },
      { label: '2 K. Mandi', value: 'Sanitari Premium' },
      { label: 'Carport 2', value: 'Mobil Sejajar' },
      { label: 'Ceiling High', value: 'Tinggi 4.2 Meter' },
    ],
    bonuses: [
      'Bonus Gratis AC 2 Unit + Canopy Carport Solar Guard',
      'Bebas Biaya Sertifikat SHM & Balik Nama',
    ],
  },
  {
    id: 'type-90',
    modalId: 'modal-type-90',
    cardStyle: 'standard',
    badge: 'Kenyamanan Eksklusif',
    name: 'Type 90 — Executive',
    landArea: '120 m²',
    buildingArea: '90 m²',
    price: 'Rp 1.480.000.000',
    kprInstallment: 'Rp 9.2 Juta / bln',
    features: [
      '4 Kamar Tidur · 3 Kamar Mandi',
      'Halaman Belakang Luas (Private Garden)',
      'Smart Home System & Solar Panel',
    ],
  },
]

export const buildingMaterials = [
  { label: 'Fondasi:', value: 'Batu Kali & Cakar Ayam Beton' },
  { label: 'Dinding:', value: 'Bata Merah Plester Aci & Cat Jotun' },
  { label: 'Lantai:', value: 'Homogeneous Tile 60x60 Monokrom' },
  { label: 'Atap:', value: 'Rangka Baja Ringan & Genteng Beton' },
  { label: 'Sanitari:', value: 'Toto / Grohe Equal Standard' },
  { label: 'Daya Listrik:', value: '2.200 Watt / 3.500 Watt Underground' },
]

export const floorplanSpecs = {
  'modal-type-54': { title: 'Denah Lantai Type 54 Serenity', subtitle: 'Hunian Compact 1 Lantai (72/54)' },
  'modal-type-72': { title: 'Denah Lantai Type 72 Deluxe', subtitle: 'Rumah Tumbuh 2 Lantai (90/72)' },
  'modal-type-90': { title: 'Denah Lantai Type 90 Executive', subtitle: 'Hunian Mewah 2 Lantai (120/90)' },
}

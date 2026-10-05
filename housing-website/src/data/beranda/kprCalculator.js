export const kprContent = {
  headline: 'Simulasikan angsuran KPR bulanan secara transparan.',
  subtext: 'Tidak ada angka yang disembunyikan. Hitung estimasi DP, angsuran masa bunga fixed, hingga estimasi penyesuaian bunga floating agar keputusan keuangan keluarga Anda tetap aman.',
  bankPartners: ['Bank Mandari', 'Bank ABC', 'Bank RBI', 'Bank NBI', 'Bank BNT'],
  sliderConfig: {
    price: { min: 750000000, max: 2000000000, step: 10000000, default: 1120000000 },
    dp: { min: 5, max: 40, step: 5, default: 10 },
  },
  tenors: [10, 15, 20, 25],
  rates: {
    fixed: 0.055,
    floating: 0.11,
  },
}

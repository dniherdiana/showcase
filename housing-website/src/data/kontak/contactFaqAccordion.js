export const faqContent = {
  tag: 'Pusat Informasi & FAQ Konsumen',
  headline: 'Jawaban transparan atas pertanyaan yang paling sering diajukan.',
  subtext: 'Gunakan kategori di bawah untuk menyaring pertanyaan seputar booking fee, legalitas sertifikat, maupun prosedur KPR bank.',
  categories: [
    { value: 'all', label: 'SEMUA PERTANYAAN (4)' },
    { value: 'booking', label: 'BOOKING & PEMESANAN' },
    { value: 'kpr', label: 'KPR & REFUND GUARANTEE' },
    { value: 'custom', label: 'DESAIN INTERIOR & REVISI' },
  ],
  items: [
    {
      category: 'booking',
      question: 'Bagaimana prosedur pemesanan unit (Booking Fee) saat survei di Marketing Gallery?',
      answer: 'Setelah Anda memilih nomor kavling yang diminati, pemesanan resmi (Booking Fee) dapat dilakukan sebesar Rp 10.000.000 (termasuk potongan DP). Pembayaran wajib ditransfer ke rekening bank atas nama resmi perusahaan PT Grand Samudra Residence — kami melarang keras pembayaran tunai kepada marketing lepas demi keamanan konsumen.',
    },
    {
      category: 'kpr',
      question: 'Bagaimana jika pengajuan KPR saya ditolak oleh bank rekanan?',
      answer: 'Kami memberikan Garansi 100% Refund Booking Fee. Jika permohonan KPR Anda ditolak oleh dua bank nasional rekanan primer kami karena alasan kapasitas pendapatan atau BI Checking, uang booking fee Anda akan dikembalikan seutuhnya tanpa potongan biaya administrasi satu rupiah pun dalam waktu maksimal 14 hari kerja.',
    },
    {
      category: 'custom',
      question: 'Apakah pembeli boleh melakukan kustomisasi denah interior sebelum unit dibangun?',
      answer: 'Ya, untuk unit indent (pembangunan tahap awal), pembeli diizinkan mengkonsultasikan perubahan layout dinding interior non-struktur (seperti tata letak kamar tidur atau ruang keluarga) bersama tim arsitek internal kami tanpa biaya desain tambahan. Namun, fasad luar wajib seragam demi estetika kawasan.',
    },
    {
      category: 'kpr',
      question: 'Apa saja berkas awal yang perlu dibawa saat kunjungan survei untuk verifikasi KPR?',
      answer: 'Untuk pengecekan kelayakan awal yang cepat di tempat, Anda cukup membawa KTP Suami/Istri, NPWP, dan Bukti Slip Gaji 3 Bulan Terakhir (atau rekening koran usaha bagi wiraswasta). Tim legal kami akan membantu verifikasi kelayakan sistem pelaporan BI Checking dalam 15 menit.',
    },
  ],
  footer: {
    title: 'Masih memiliki pertanyaan khusus seputar legalitas & KPR?',
    subtitle: 'Analis senior kami siap merespon pertanyaan Anda secara detail via WhatsApp.',
    cta: 'Tanya Analis Sekarang',
    wa: 'https://wa.me/6281234567890?text=Halo%20Tim%20Grand%20Samudra,%20saya%20ingin%20tanya%20prosedur%20booking%20dan%20legalitas',
  },
}

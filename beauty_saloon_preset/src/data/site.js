/* ============================================================
   NAMA BEAUTY SALON — central content & image registry
   Single source of truth. Every Unsplash URL is defined ONCE here
   and imported by pages → guarantees no duplicate image URLs.
   ============================================================ */

const u = (id, w = 1200, h) =>
	`https://images.unsplash.com/photo-${id}?q=80&w=${w}${h ? `&h=${h}` : ''}&auto=format&fit=crop`;

/* ---------- Image registry (keys → URLs) ---------- */
/** @type {Record<string, string>} */
export const IMG = {
	// HOME hero + bento
	heroMain: u('1560066984-138dadb4c035', 1400, 1700),
	heroInner: u('1600948836101-f9ffda59d250', 900, 1200),
	heroSerum: u('1521590832167-7bcbfaa6381f', 700),
	bentoFacial: u('1556228720-195a672e8a03', 800),
	bentoHair: u('1522337660859-02fbefca4702', 800),
	bentoNail: u('1600334129128-685c5582fd35', 800),
	bentoBody: u('1519415943484-9fa1873496d4', 800),
	featureLips: u('1515377905703-c4788e51af15', 1200, 1500),
	before: u('1521119989659-a83eee488004', 900, 1100),
	after: u('1548142813-c348350df52b', 900, 1100),
	promoJar: u('1611930022073-b7a4ba5fcccd', 800),
	insta1: u('1583001931096-959e9a1a6223', 700),
	insta2: u('1567157577867-05ccb1388e66', 700),
	insta3: u('1594736797933-d0501ba2fe65', 700),
	insta4: u('1522337360788-8b13dee7a37e', 700),

	// TENTANG
	founder: u('1573496359142-b8d87734a5a2', 900, 1200),
	tentangInterior: u('1519823551278-64ac92734fb1', 1200),
	storyTowel: u('1516975080664-ed2fc6a32937', 1000),
	timeline1: u('1560869713-7d0a29430803', 900),
	timeline2: u('1526045478516-99145907023c', 900),
	timeline3: u('1576091160399-112ba8d25d1d', 900),
	valuesLamp: u('1616394584738-fc6e612e71b9', 900),
	behindScenes: u('1593508512255-86ab42a8e620', 900, 1200),
	candleSpa: u('1595475884562-073c30d45670', 800),

	// GALERI
	gal1: u('1570172619644-dfd03ed5d881', 900),
	gal2: u('1540555700478-4be289fbecef', 900),
	gal3: u('1544161515-4ab6ce6db874', 900),
	gal4: u('1596755094514-f87e34085b2c', 900),
	gal5: u('1512499617640-c74ae3a79d37', 900),
	gal6: u('1562322140-8baeececf3df', 900),
	gal7: u('1559056199-641a0ac8b55e', 900),
	gal8: u('1571781926291-c477ebfd024b', 900),
	gal9: u('1583845112203-29329902332e', 900),
	gal10: u('1552693673-1bf958298935', 900),
	gal11: u('1571875257727-256c39da42af', 900),
	gal12: u('1580618672591-eb180b1a973f', 900),
	galCollage1: u('1487412947147-5cebf100ffc2', 900),
	galCollage2: u('1524504388940-b1c1722653e1', 900),
	galCollage3: u('1488426862026-3ee34a7d66df', 900),
	galStrip1: u('1570295999919-56ceb5ecca61', 900),
	galStrip2: u('1508341591423-4347099e1f19', 900),
	galStrip3: u('1541101767792-f9b2b1c4f127', 900),

	// LAYANAN
	svcHair: u('1620916566398-39f1143ab7be', 900),
	svcNail: u('1620331311520-246422fd82f9', 900),
	svcSkin: u('1523263685509-57c1d050d19b', 900),
	svcBody: u('1540206395-68808572332f', 900),

	// TREATMENT
	treat1: u('1556229010-6c3f2c9ca5f8', 800),
	treat2: u('1591343395082-e120087004b4', 800),
	treat3: u('1608571423902-eed4a5ad8108', 800),
	treat4: u('1610992015732-2449b76344bc', 800),
	treat5: u('1590439471364-192aa70c0b53', 800),
	treat6: u('1616683693504-3ea7e9ad6fec', 800),
	treatFinder: u('1620626011761-996317b8d101', 900),
	treatFeature: u('1560067174-c5a3a8f37060', 900),

	// META (hanya untuk og:image default — tidak dirender sebagai <img>)
	ogFace: u('1571781418606-70265b9cce90', 1200),

	// PROMO
	promo1: u('1608248597279-f99d160bfcbc', 900),
	promo2: u('1596462502278-27bfdc403348', 900),
	promo3: u('1596040033229-a9821ebd058d', 900),
	promo4: u('1631217868264-e5b90bb7e133', 900),

	// BLOG
	blog1: u('1523978591478-c753949ff840', 1000),
	blog2: u('1598440947619-2c35fc9aa908', 900),
	blog3: u('1583752028088-91e3e9880b46', 900),
	blog4: u('1596178060671-7a80dc8059ea', 900),
	blog5: u('1519415510236-718bdfcd89c8', 900),
	blog6: u('1600185365483-26d7a4cc7519', 900),

	// KONTAK
	boutique: u('1441984904996-e0b6ba687e04', 1000),

	// AVATARS
	av1: u('1494790108377-be9c29b29330', 300),
	av2: u('1508214751196-bcfd4ca60f91', 300),
	av3: u('1567532939604-b6b5b0db2604', 300),
	av4: u('1438761681033-6461ffad8d80', 300),
	av5: u('1534528741775-53994a69daeb', 300),
	av6: u('1531746020798-e6953c6e8e04', 300),
	av7: u('1544723795-3fb6469f5b39', 300),
	av8: u('1517841905240-472988babdf9', 300),
	av9: u('1580489944761-15a19d654956', 300),
	av10: u('1554151228-14d9def656e4', 300),
	av11: u('1507003211169-0a1dd7228f2d', 300),
	av12: u('1547425260-76bcadfb4f2c', 300),
	av13: u('1531891437562-4301cf35b7e4', 300),
	av14: u('1500648767791-00dcc994a43e', 300),
	av15: u('1472099645785-5658abf4ff4e', 300),
	av16: u('1560250097-0b93528c311a', 300),
	av17: u('1529626455594-4ff0802cfb7e', 300),
	av18: u('1544005313-94ddf0286df2', 300),
	av19: u('1531123897727-8f129e1688ce', 300),
	av21: u('1506794778202-cad84cf45f1d', 300),
	av22: u('1552058544-f2b08422138a', 300),
	av23: u('1507591064344-4c6ce005b128', 300),
	av25: u('1589156280159-27698a70f29e', 300),
	av26: u('1519085360753-af0119f7cbe7', 300),
	av27: u('1573497019940-1c28c88b4f3e', 300),
};

/* ---------- Brand & contact ---------- */
export const brand = {
	name: 'Nama Beauty Salon',
	short: 'NBS',
	tagline: 'Ritual kecantikan yang terasa seperti karya seni.',
	phone: '0812-XXXX-XXXX',
	whatsapp: '6281234567890',
	email: 'halo@namabeautysalon.id',
	address: 'Jl. Kebun Raya No. 88, Jakarta Selatan',
	mapQuery: 'Nama Beauty Salon Jakarta',
	instagram: '@nama.beautysalon',
};

export const hours = [
	{ day: 'Senin — Jumat', time: '10.00 — 21.00' },
	{ day: 'Sabtu', time: '09.00 — 22.00' },
	{ day: 'Minggu', time: '09.00 — 19.00' },
];

export const nav = [
	{ href: '/', label: 'Beranda' },
	{ href: '/tentang', label: 'Tentang' },
	{ href: '/layanan', label: 'Layanan' },
	{ href: '/treatment', label: 'Treatment' },
	{ href: '/galeri', label: 'Galeri' },
	{ href: '/promo', label: 'Promo' },
	{ href: '/blog', label: 'Blog' },
	{ href: '/testimoni', label: 'Testimoni' },
	{ href: '/faq', label: 'FAQ' },
	{ href: '/kontak', label: 'Kontak' },
];

export const proof = [
	{ value: '10+', label: 'Tahun berpengalaman' },
	{ value: '15.000+', label: 'Pelanggan puas' },
	{ value: '25+', label: 'Terapis profesional' },
	{ value: '50+', label: 'Treatment tersedia' },
	{ value: '4.9/5', label: 'Rating pelanggan' },
];

/* ---------- Testimonials ---------- */
export const testimonials = [
	{
		quote:
			'Dari resepsionis sampai terapis, semua detail diurus dengan sangat personal. Wajahku glowing dua minggu penuh — aku akhirnya menemukan salon "rumah" ku.',
		rating: 5,
		initials: 'SA',
		treatment: 'Signature Glow Facial',
	},
	{
		quote:
			'Terapinya tenang, produknya premium, dan hasilnya nyata terlihat. Kuku ku sekarang selalu jadi pusat perhatian di kantor.',
		rating: 5,
		initials: 'RD',
		treatment: 'Luxe Manicure',
	},
	{
		quote:
			'Yang membuat beda adalah standar kebersihannya. Setiap alat di-sterilkan di depan mata, itu bikin aku benar-benar rileks.',
		rating: 5,
		initials: 'MA',
		treatment: 'Deep Relax Massage',
	},
	{
		quote:
			'Booking online-nya gampang, reminder-nya tepat waktu, dan terapis selalu ingat preferensi ku. Layanan kelas dunia.',
		rating: 5,
		initials: 'LN',
		treatment: 'Gold Radiance Treatment',
	},
];

/* ---------- FAQ ---------- */
export const faqs = [
	{
		q: 'Apakah saya perlu janji temu (booking) dulu?',
		a: 'Sangat disarankan. Slot terapis terbatas agar setiap klien mendapat perhatian penuh dan tidak perlu menunggu. Anda bisa booking online lewat situs ini atau langsung lewat WhatsApp — konfirmasi biasanya kurang dari 15 menit.',
	},
	{
		q: 'Bagaimana standar kebersihan & sterilisasi di salon?',
		a: 'Kami menerapkan protokol kebersihan rumah sakit: setiap alat di-sterilkan dengan autoclave di depan klien, linen sekali pakai atau dicuci dengan disinfektan, dan ruangan di-scan ulang antar sesi. Ini bagian dari diferensiator layanan kami yang wajib dipertahankan.',
	},
	{
		q: 'Apakah produk yang dipakai aman untuk kulit sensitif?',
		a: 'Ya. Kami hanya menggunakan produk premium yang telah melewati uji dermatologis. Sebelum treatment, terapis melakukan skin check singkat dan menyesuaikan produk dengan jenis kulit Anda.',
	},
	{
		q: 'Berapa lama durasi rata-rata satu treatment?',
		a: 'Tergantung treatment: mulai 45 menit untuk perawatan tangan, hingga 2,5 jam untuk paket ritual lengkap. Durasi setiap treatment tercantum jelas di halaman Treatment.',
	},
	{
		q: 'Apakah ada paket membership atau program loyalitas?',
		a: 'Ada. Membership kami memberikan prioritas booking, diskon member, dan treatment gratis di bulan ulang tahun Anda. Detail lengkap ada di halaman Promo.',
	},
	{
		q: 'Bagaimana kebijakan pembatalan janji temu?',
		a: 'Pembatalan atau perubahan jadwal bisa dilakukan gratis hingga 6 jam sebelum jadwal. Lewat dari itu, dikenakan biaya administrasi 20% untuk menjaga keadilan terhadap jadwal terapis.',
	},
	{
		q: 'Apakah tersedia treatment untuk pria?',
		a: 'Tentu. Kami menyediakan baris treatment khusus pria — mulai dari facial deep-cleansing hingga perawatan rambut dan styling. Terapis kami juga tersedia dalam pilihan gender sesuai permintaan.',
	},
];

/* ---------- Services (Layanan) ---------- */
export const services = [
	{
		cat: 'Perawatan Wajah',
		img: 'svcSkin',
		items: [
			{ name: 'Signature Glow Facial', desc: 'Deep cleanse, eksfoliasi enzim, dan hidrasi intensif untuk kulit bercahaya.', duration: '60 menit' },
			{ name: 'Anti-Aging Lift', desc: 'Kombinasi pijat manual & serum kolagen untuk efek kencang dan cerah.', duration: '75 menit' },
			{ name: 'Acne Rescue', desc: 'Perawatan terarah untuk kulit berjerawat dengan standar higienis ketat.', duration: '60 menit' },
		],
	},
	{
		cat: 'Rambut & Scalp',
		img: 'svcHair',
		items: [
			{ name: 'Keratin Luxury', desc: 'Rambut halus dan berkilau hingga 5 bulan dengan produk bebas formalin.', duration: '120 menit' },
			{ name: 'Scalp Detox', desc: 'Detoksifikasi kulit kepala untuk rambut tumbuh lebih sehat.', duration: '45 menit' },
			{ name: 'Hair Spa Ritual', desc: 'Pijat kepala + masker hangat untuk relaksasi dan kilau instan.', duration: '60 menit' },
		],
	},
	{
		cat: 'Nail & Hand',
		img: 'svcNail',
		items: [
			{ name: 'Luxe Manicure', desc: 'Potong, poles, dan pijat tangan dengan hasil akhir premium.', duration: '45 menit' },
			{ name: 'Gel Artistry', desc: 'Nail art custom oleh nail artist berpengalaman.', duration: '90 menit' },
			{ name: 'Paraffin Hand Spa', desc: 'Perawatan parafin hangat untuk tangan kering dan pecah-pecah.', duration: '40 menit' },
		],
	},
	{
		cat: 'Body & Relax',
		img: 'svcBody',
		items: [
			{ name: 'Deep Relax Massage', desc: 'Pijat relaksasi dengan teknik slow-pressure khas terapis kami.', duration: '90 menit' },
			{ name: 'Hot Stone Therapy', desc: 'Batu panas vulkanik untuk meredakan ketegangan otot dalam.', duration: '90 menit' },
			{ name: 'Luxury Body Scrub', desc: 'Eksfoliasi seluruh tubuh + masker + pijat singkat.', duration: '105 menit' },
		],
	},
];

export const serviceCompare = [
	{ feature: 'Konsultasi & skin check awal', standard: true, signature: true },
	{ feature: 'Produk premium bersertifikat', standard: true, signature: true },
	{ feature: 'Sterilisasi autoclave di depan klien', standard: true, signature: true },
	{ feature: 'Terapis bersertifikasi internasional', standard: false, signature: true },
	{ feature: 'Ritual relaksasi eksklusif 5 langkah', standard: false, signature: true },
	{ feature: 'Follow-up hasil 48 jam via WhatsApp', standard: false, signature: true },
];

/* ---------- Treatments (Treatment) ---------- */
export const treatments = [
	{ name: 'Signature Glow Facial', img: 'treat1', cat: 'Facial', duration: '60 menit', rating: 4.9, badge: 'Terpopuler' },
	{ name: 'Hydra Dermabrasion', img: 'treat2', cat: 'Facial', duration: '75 menit', rating: 4.9, badge: 'Baru' },
	{ name: 'Gold Radiance 24K', img: 'treat3', cat: 'Facial', duration: '90 menit', rating: 5.0, badge: 'Signature' },
	{ name: 'Deep Relax Massage', img: 'treat4', cat: 'Body', duration: '90 menit', rating: 4.8 },
	{ name: 'Keratin Luxury', img: 'treat5', cat: 'Hair', duration: '120 menit', rating: 4.9 },
	{ name: 'Anti-Aging Lift', img: 'treat6', cat: 'Facial', duration: '75 menit', rating: 4.8, badge: 'Rekomendasi' },
];

/* ---------- Promos ---------- */
export const promos = [
	{
		name: 'Golden Hour',
		desc: 'Signature Glow Facial + Gold Radiance 24K dalam satu sesi ritual.',
		discount: '30%',
		img: 'promo1',
		tag: 'Best Seller',
		valid: 'Berlaku s.d. akhir bulan',
	},
	{
		name: 'The Perfect 10',
		desc: 'Paket 10 sesi facial dengan harga flat member + 2 sesi gratis.',
		discount: '2x',
		img: 'promo2',
		tag: 'Paket',
		valid: 'Stok terbatas',
	},
	{
		name: 'Couple Recharge',
		desc: 'Massage relaksasi untuk berdua dengan harga spesial.',
		discount: '25%',
		img: 'promo3',
		tag: 'Untuk Berdua',
		valid: 'Berlaku s.d. akhir bulan',
	},
];

export const memberships = [
	{
		name: 'Glow Member',
		price: null,
		features: ['Diskon 10% semua treatment', 'Prioritas booking', 'Voucher bulanan', 'Free konsultasi'],
		tag: 'Mulai dari sini',
	},
	{
		name: 'Luxe Member',
		price: null,
		features: ['Diskon 20% semua treatment', 'Treatment gratis di bulan ulang tahun', 'Akses ritual eksklusif', 'Fast-track booking', 'Produk travel-size bulanan'],
		tag: 'Paling Populer',
		hot: true,
	},
	{
		name: 'Royal Circle',
		price: null,
		features: ['Diskon 30% + prioritas 1', 'Butler pribadi & jadwal fleksibel', 'Gift & hampers tahunan', 'Undangan event eksklusif', 'Home service di area tertentu'],
		tag: 'Undangan',
	},
];

/* ---------- Blog ---------- */
export const blog = [
	{
		title: 'Ritual Malam 5 Menit yang Mengubah Kulitmu',
		cat: 'Skincare',
		date: '2 Minggu Lalu',
		read: '4 menit',
		img: 'blog1',
		excerpt:
			'Kunci kulit bercahaya tidak selalu soal produk mahal. Kadang yang paling penting adalah urutan dan konsistensi ritual sederhana sebelum tidur.',
	},
	{
		title: 'Facial ala Salon vs Rumahan: Apa yang Sebenarnya Beda?',
		cat: 'Tips',
		date: '1 Bulan Lalu',
		read: '5 menit',
		img: 'blog2',
		excerpt:
			'Kami terbuka soal ini: banyak hal bisa dilakukan di rumah, tapi ada lapisan hasil yang hanya bisa dicapai dengan alat dan teknik profesional.',
	},
	{
		title: '5 Kebiasaan yang Diam-diam Merusak Rambutmu',
		cat: 'Hair',
		date: '1 Bulan Lalu',
		read: '3 menit',
		img: 'blog3',
		excerpt: 'Dari ikatan rambut yang salah sampai suhu hairdryer — kebiasaan kecil harian punya efek besar pada kesehatan rambut jangka panjang.',
	},
	{
		title: 'Cara Membaca Kandungan di Label Skincare',
		cat: 'Skincare',
		date: '2 Bulan Lalu',
		read: '6 menit',
		img: 'blog4',
		excerpt: 'Retinol, niacinamide, vitamin C — apa yang benar-benar kamu butuhkan dan dalam urutan apa sebaiknya dipakai?',
	},
	{
		title: 'Memberi Waktu untuk Diri Sendiri Adalah Investasi',
		cat: 'Mindset',
		date: '2 Bulan Lalu',
		read: '4 menit',
		img: 'blog5',
		excerpt: 'Sesi perawatan bukan kemewahan belaka — ini bagian dari menjaga kapasitas diri untuk orang-orang di sekitarmu.',
	},
	{
		title: 'Glow vs Glass Skin: Mana yang Cocok untukmu?',
		cat: 'Skincare',
		date: '3 Bulan Lalu',
		read: '5 menit',
		img: 'blog6',
		excerpt: 'Dua tren kulit yang sering tertukar. Kami bantu kamu memahami keduanya sebelum memilih treatment di salon.',
	},
];

/* ---------- Gallery ---------- */
export const gallery = [
	{ img: 'gal1', cat: 'Spa', caption: 'Ritual relaksasi' },
	{ img: 'gal2', cat: 'Spa', caption: 'Detail stone therapy' },
	{ img: 'gal3', cat: 'Body', caption: 'Deep tissue massage' },
	{ img: 'gal4', cat: 'Facial', caption: 'Konsultasi kulit' },
	{ img: 'gal5', cat: 'Produk', caption: 'Kurasi produk premium' },
	{ img: 'gal6', cat: 'Hair', caption: 'Color ritual' },
	{ img: 'gal7', cat: 'Produk', caption: 'Ritual pagi' },
	{ img: 'gal8', cat: 'Spa', caption: 'Luxury bath' },
	{ img: 'gal9', cat: 'Facial', caption: 'Masker & hidrasi' },
	{ img: 'gal10', cat: 'Body', caption: 'Slow-pressure' },
	{ img: 'gal11', cat: 'Spa', caption: 'Susunan ritual' },
	{ img: 'gal12', cat: 'Hair', caption: 'Styling studio' },
];

/* ---------- Team (Tentang) ---------- */
export const team = [
	{ name: 'Dr. Vina Prameswari', role: 'Head of Treatment', img: 'av18', cert: null },
	{ name: 'Nadia Kusuma', role: 'Senior Facial Therapist', img: 'av17', cert: null },
	{ name: 'Rara Anggraini', role: 'Color & Hair Specialist', img: 'av19', cert: null },
	{ name: 'Dimas Prasetyo', role: 'Body & Relax Therapist', img: 'av16', cert: null },
];

/* ---------- Timeline (Tentang) ---------- */
export const timeline = [
	{ year: '2015', title: 'Ruang kecil, satu kursi', desc: 'Nama Beauty Salon lahir dari satu ruang perawatan kecil di lantai dua sebuah ruko, dengan satu terapis dan satu keyakinan: perawatan harus terasa personal.' },
	{ year: '2018', title: 'Pindah ke ruang yang lebih hangat', desc: 'Tiga tahun pertama memberi kami pelajaran berharga tentang ritme perawatan yang benar-benar diinginkan pelanggan: tenang, tidak terburu-buru, dan konsisten.' },
	{ year: '2021', title: 'Protokol kebersihan rumah sakit', desc: 'Kami menetapkan standar sterilisasi autoclave di depan klien — langkah yang kini menjadi salah satu alasan utama pelanggan mempercayakan kulitnya pada kami.' },
	{ year: '2024', title: '15.000+ wajah tersenyum', desc: 'Hari ini kami melayani 15.000+ pelanggan dengan 25+ terapis profesional dan lebih dari 50 jenis treatment dalam satu ruang yang kami bangun bersama tim.' },
];

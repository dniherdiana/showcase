import { images } from "../../../assets/images/index.js";

export const storiesCategories = [
	"All Stories",
	"Cultural Heritage",
	"Coastal Escapes",
	"Wilderness & Trekking",
	"Practical Travel Tips",
];

export const featuredStoryData = {
	id: "featured-1",
	slug: "slow-travel-japan-tea-villages",
	title: "The Art of Slow Travel: Exploring Japan's Forgotten Tea Villages",
	title_id: "Seni Perjalanan Santai: Menjelajahi Desa Teh Tersembunyi di Jepang",
	author: "Kenji Sato & Sarah Lin",
	readTime: "8 min read",
	date: "JULY 25, 2026",
	category: "Cultural Heritage",
	excerpt: "Far beyond the neon glow of Tokyo and crowded temples, high in the mist-wrapped hills of Shizuoka, lie ancient tea estates where time stands still and hospitality warms the soul.",
	excerpt_id: "Jauh dari hiruk-pikuk Tokyo dan candi yang padat, di perbukitan berkabut Shizuoka, terhampar perkebunan teh kuno tempat waktu terasa berhenti dan keramahan menghangatkan jiwa.",
	image: images.kyoto,
	content: `
    <p class="text-base leading-relaxed text-white/80">Far beyond the neon glow of Tokyo and crowded Kyoto temples, high in the mist-wrapped hills of Shizuoka, lie ancient tea estates where time stands still and hospitality warms the soul.</p>
    <p class="text-base leading-relaxed text-white/80 mt-4">Traveling slowly here means waking up to the gentle scent of roasted green tea, walking through dew-covered plantations with local farmers, and learning the quiet art of whisking Matcha from third-generation masters.</p>
  `,
	content_id: `
    <p class="text-base leading-relaxed text-white/80">Jauh dari hiruk-pikuk Tokyo dan candi yang padat di Kyoto, di perbukitan berkabut Shizuoka, terhampar perkebunan teh kuno tempat waktu terasa berhenti dan keramahan menghangatkan jiwa.</p>
    <p class="text-base leading-relaxed text-white/80 mt-4">Perjalanan santai di sini berarti bangun menyambut aroma teh hijau panggang yang lembut, berjalan melintasi perkebunan berembun bersama petani lokal, dan mempelajari seni tenang mengocok Matcha dari para master generasi ketiga.</p>
  `,
};

export const storiesData = [
	{
		id: "story-1",
		slug: "uncovering-secret-ryokans-in-kyoto",
		category: "Cultural Heritage",
		title: "Uncovering Secret Ryokans in Kyoto's Misty Mountains",
		title_id: "Menemukan Penginapan Ryokan Rahasia di Pegunungan Kyoto",
		author: "Elena Rostova",
		readTime: "5 min read",
		date: "JULY 20, 2026",
		excerpt: "Behind sliding cedar doors and centuries-old moss gardens lies a peaceful sanctuary where city noise fades away into gentle bamboo breezes.",
		excerpt_id: "Di balik pintu kayu cedar dan taman lumut bersejarah, tersembunyi tempat peristirahatan tenang di mana kebisingan kota menghilang ditiup angin bambu.",
		image: images.kyotoRyokan,
		content: `
    <p class="text-base leading-relaxed text-white/80">Behind sliding cedar doors and centuries-old moss gardens lies a peaceful sanctuary where city noise fades away into gentle bamboo breezes.</p>
    <p class="text-base leading-relaxed text-white/80 mt-4">Kyoto's traditional ryokans offer an immersive experience in Japanese omotenashi (hospitality). From multi-course kaiseki dinners served in private tatami rooms to soothing open-air hot spring baths surrounded by autumn foliage, every element is designed to restore balance to body and mind.</p>
  `,
		content_id: `
    <p class="text-base leading-relaxed text-white/80">Di balik pintu kayu cedar dan taman lumut bersejarah, tersembunyi tempat peristirahatan tenang di mana kebisingan kota menghilang ditiup angin bambu.</p>
    <p class="text-base leading-relaxed text-white/80 mt-4">Ryokan tradisional Kyoto menawarkan pengalaman mendalam dalam omotenashi (keramahan khas Jepang). Dari santapan kaiseki beberapa babak di kamar tatami privat hingga pemandian air panas terbuka yang menenangkan dikelilingi dedaunan musim gugur, setiap elemen dirancang untuk memulihkan keseimbangan jiwa dan raga.</p>
  `,
	},
	{
		id: "story-2",
		slug: "sailing-amalfi-coastal-italian-living",
		category: "Coastal Escapes",
		title: "Sailing Amalfi: A Masterclass in Coastal Italian Living",
		title_id: "Berlayar di Amalfi: Keindahan Hidup Santai di Pesisir Italia",
		author: "Marco Bellini",
		readTime: "6 min read",
		date: "JULY 12, 2026",
		excerpt: "Gliding through turquoise Tyrrhenian waters past Positano's pastel cliffs, discovering hidden sea coves and family trattorias.",
		excerpt_id: "Menelusuri air laut jernih melewati tebing warna-warni Positano, menemukan gua laut tersembunyi dan restoran keluarga lokal.",
		image: images.amalfi,
		content: `
    <p class="text-base leading-relaxed text-white/80">Gliding through turquoise Tyrrhenian waters past Positano's pastel cliffs, discovering hidden sea coves and family trattorias.</p>
    <p class="text-base leading-relaxed text-white/80 mt-4">The Amalfi Coast is best experienced from the water. Sailing along the dramatic coastline allows travelers to bypass crowded cliffside roads and access secluded beaches, sea caves, and traditional seafood restaurants accessible only by boat.</p>
  `,
		content_id: `
    <p class="text-base leading-relaxed text-white/80">Menelusuri air laut jernih melewati tebing warna-warni Positano, menemukan gua laut tersembunyi dan restoran keluarga lokal.</p>
    <p class="text-base leading-relaxed text-white/80 mt-4">Pesisir Amalfi paling sempurna dinikmati dari atas laut. Berlayar di sepanjang garis pantai yang spektakuler memungkinkan wisatawan menghindari jalanan tebing yang ramai dan mengakses pantai tersembunyi, gua laut, serta restoran seafood tradisional yang hanya dapat dijangkau dengan perahu.</p>
  `,
	},
	{
		id: "story-3",
		slug: "heart-of-patagonia-photographic-expedition",
		category: "Wilderness & Trekking",
		title: "Into the Heart of Patagonia: A Photographic Expedition",
		title_id: "Menjelajahi Jantung Patagonia: Ekspedisi Fotografi Petualang",
		author: "Lucas Silva",
		readTime: "7 min read",
		date: "JUNE 28, 2026",
		excerpt: "Jagged granite peaks, blue glacial ice, and golden morning light across Torres del Paine's wild landscape.",
		excerpt_id: "Puncak granit yang megah, gletser es biru, dan cahaya pagi keemasan di lanskap alam liar Torres del Paine.",
		image: images.patagonia,
		content: `
    <p class="text-base leading-relaxed text-white/80">Jagged granite peaks, blue glacial ice, and golden morning light across Torres del Paine's wild landscape.</p>
    <p class="text-base leading-relaxed text-white/80 mt-4">Patagonia offers some of the most spectacular photography conditions on Earth. From dramatic wind-swept steppes to ancient ice fields, this wilderness expedition captures the raw power and untamed beauty of South America's southern frontier.</p>
  `,
		content_id: `
    <p class="text-base leading-relaxed text-white/80">Puncak granit yang megah, gletser es biru, dan cahaya pagi keemasan di lanskap alam liar Torres del Paine.</p>
    <p class="text-base leading-relaxed text-white/80 mt-4">Patagonia menawarkan beberapa kondisi fotografi paling spektakuler di Bumi. Dari padang rumput yang diterpa angin hingga padang es kuno, ekspedisi alam liar ini mengabadikan keindahan murni dan kekuatan tak tertandingi di ujung selatan Amerika Selatan.</p>
  `,
	},
	{
		id: "story-4",
		slug: "chasing-the-northern-lights-aurora",
		category: "Wilderness & Trekking",
		title: "Chasing the Aurora: Living with Sami Reindeer Herders",
		title_id: "Mengejar Cahaya Aurora: Tinggal Bersama Suku Sami di Kutub Utara",
		author: "Astrid Lindqvist",
		readTime: "7 min read",
		date: "JUNE 15, 2026",
		excerpt: "Beneath the dancing emerald ribbons of the Arctic night sky, discovering timeless traditions and warm fires in sub-zero wilderness.",
		excerpt_id: "Di bawah tarian cahaya hijau Aurora di langit malam Arktik, menemukan tradisi hangat di tengah dinginnya salju.",
		image: images.northernLights,
		content: `
    <p class="text-base leading-relaxed text-white/80">Beneath the dancing emerald ribbons of the Arctic night sky, discovering timeless traditions and warm fires in sub-zero wilderness.</p>
    <p class="text-base leading-relaxed text-white/80 mt-4">Journey into Lapland with Sami reindeer herders to experience the celestial spectacle of the Northern Lights. Nights spent in heated glass igloos are complemented by day trips across snow-covered tundra by dog sled and snowshoe.</p>
  `,
		content_id: `
    <p class="text-base leading-relaxed text-white/80">Di bawah tarian cahaya hijau Aurora di langit malam Arktik, menemukan tradisi hangat di tengah dinginnya salju.</p>
    <p class="text-base leading-relaxed text-white/80 mt-4">Jelajahi Lapland bersama para peternak rusa kutub suku Sami untuk menyaksikan fenomena langit Aurora Borealis. Malam hari di iglo kaca hangat dilengkapi dengan perjalanan siang hari melintasi tundra bersalju menggunakan kereta luncur anjing.</p>
  `,
	},
];

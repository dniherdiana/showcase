import { siteConfig } from "../site.config.js";

export const socialLinks = [
  { name: "Facebook", id: "fb", href: "https://facebook.com/wanderlust" },
  {
    name: "Instagram",
    id: "instagram",
    href: "https://instagram.com/wanderlust",
  },
  { name: "X (Twitter)", id: "x", href: "https://x.com/wanderlust" },
  { name: "YouTube", id: "youtube", href: "https://youtube.com/@wanderlust" },
  { name: "TikTok", id: "tiktok", href: "https://tiktok.com/@wanderlust" },
];

export const footerData = {
  brandDescription:
    "Helping you explore the world at your own pace. Personal travel planning made warm, simple, and stress-free.",
  brandDescription_id:
    "Membantu Anda menikmati perjalanan dunia tanpa terburu-buru. Merancang liburan pribadi yang hangat, nyaman, dan berkesan.",
  sections: [
    {
      title: "Explore",
      title_id: "Jelajahi",
      links: [
        { name: "Home", name_id: "Beranda", href: "/" },
        { name: "Destinations", name_id: "Destinasi", href: "/destinations" },
        { name: "Promotions", name_id: "Promo", href: "/promo" },
        { name: "About Us", name_id: "Tentang Kami", href: "/about" },
        {
          name: "Travel Stories",
          name_id: "Jurnal Perjalanan",
          href: "/stories",
        },
      ],
    },
    {
      title: "Popular Collections",
      title_id: "Koleksi Populer",
      links: [
        {
          name: "Coastal & Beach Luxury",
          name_id: "Pantai & Pesisir",
          href: "/destinations?cat=coastal",
        },
        {
          name: "Nature & Wilderness",
          name_id: "Alam & Alam Liar",
          href: "/destinations?cat=wilderness",
        },
        {
          name: "Culture & Heritage",
          name_id: "Budaya & Sejarah",
          href: "/destinations?cat=culture",
        },
        {
          name: "Private Aviation & Yachting",
          name_id: "Penerbangan Privat & Kapal",
          href: "/destinations?cat=private",
        },
      ],
    },
    {
      title: "Concierge Care",
      title_id: "Layanan Konsierge",
      links: [
        {
          name: "SCBD Jakarta Lounge",
          name_id: "Lounge SCBD Jakarta",
          href: "/about#office",
        },
        {
          name: "4 Core Guarantees",
          name_id: "4 Jaminan Utama",
          href: "/about#promises",
        },
        {
          name: "Request Lookbook PDF",
          name_id: "Minta Brosur Lookbook",
          href: "/#book",
        },
        {
          name: "Private Consultation",
          name_id: "Konsultasi Pribadi",
          href: `https://wa.me/${siteConfig.whatsappNumber}`,
        },
      ],
    },
  ],
  newsletter: {
    title: "Stay Connected",
    title_id: "Tetap Terhubung",
    description:
      "Get weekly stories, handpicked hidden gems, and quiet travel inspiration delivered straight to your inbox.",
    description_id:
      "Dapatkan rekomendasi tempat tersembunyi, cerita perjalanan unik, dan inspirasi liburan santai langsung di inbox Anda setiap minggu.",
    placeholder: "Enter your email address (e.g. alex@example.com)...",
    placeholder_id: "Masukkan alamat email Anda (contoh: alex@example.com)...",
    btnText: "Subscribe",
    btnText_id: "Berlangganan",
  },
  copyright: `© ${new Date().getFullYear()} Wanderlust Travel Agency. All rights reserved.`,
  legalLinks: [
    {
      name: "Privacy Policy",
      name_id: "Kebijakan Privasi",
      href: "/about#promises",
    },
    {
      name: "Terms of Service",
      name_id: "Syarat & Ketentuan",
      href: "/about#promises",
    },
    { name: "Cookie Preferences", name_id: "Pengaturan Cookie", href: "#" },
  ],
};

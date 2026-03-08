// Just Stock Trading Limited — Centralised Contact & Company Details

export const COMPANY = {
  name: "Just Stock Trading Limited",
  shortName: "Just Stock Trading",
  tagline: "Strategic Sourcing & Wholesale Export Specialists",
  location: "United Kingdom",
  yearFounded: 2024,
  copyright: `© ${new Date().getFullYear()} Just Stock Trading Limited`,
} as const;

export const CONTACT = {
  phone: "+44 7378 473 604",
  phoneRaw: "+447378473604",
  email: "info@juststocktrading.com",
  whatsapp: "https://wa.me/447378473604",
  whatsappMessage:
    "https://wa.me/447378473604?text=Hello%2C%20I%27m%20interested%20in%20your%20wholesale%20clothing%20supply.",
} as const;

export const SOCIAL = {
  instagram: "https://instagram.com/juststocktrading",
  tiktok: "https://tiktok.com/@juststocktrading",
} as const;

export const MARKETS = ["Africa", "Middle East", "Eastern Europe"] as const;

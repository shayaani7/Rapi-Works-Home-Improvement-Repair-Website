export const site = {
  name: "RapiWorks KL",
  tagline: {
    en: "Reliable Home Improvement & Repair Services in Kuala Lumpur",
    ms: "Servis Renovasi & Pembaikan Rumah Dipercayai di Kuala Lumpur",
  },
  city: "Puchong",
  state: "Selangor",
  country: "Malaysia",

  // 011-2120 6259 in international format for wa.me (no + or spaces)
  whatsappNumber: "601121206259",
  phoneDisplay: "011-2120 6259",
  phoneTel: "+601121206259",
  email: "hello@rapiworkskl.com",
  address: "Seri Manja Square One, Puchong, Selangor, Malaysia",

  coverageAreas: [
    "Kuala Lumpur",
    "Selangor",
    "Putrajaya",
    "Cyberjaya",
  ],

  openingHours: {
    en: "Daily: 9:00 AM – 7:00 PM",
    ms: "Setiap hari: 9:00 PG – 7:00 MLM",
  },
  openingHoursShort: {
    en: "9:00 AM – 7:00 PM",
    ms: "9:00 PG – 7:00 MLM",
  },

  services: [
    {
      slug: "painting",
      titleEn: "House Painting Services",
      titleMs: "Servis Cat Rumah",
    },
    {
      slug: "plaster-ceiling",
      titleEn: "Plaster Ceiling Contractor",
      titleMs: "Pemasangan Plaster Ceiling",
    },
    {
      slug: "plumbing",
      titleEn: "Plumbing Services",
      titleMs: "Servis Paip",
    },
    {
      slug: "electrical",
      titleEn: "Electrical Services",
      titleMs: "Servis Elektrik",
    },
    {
      slug: "aircond-installation",
      titleEn: "Aircond Installation",
      titleMs: "Pemasangan Aircond",
    },
  ],
} as const;

export function getBaseUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  return "https://rapiworkskl.com";
}

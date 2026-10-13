export const site = {
  name: "RapiWorks KL",
  tagline: {
    en: "Reliable Home Improvement & Repair Services in Kuala Lumpur",
    ms: "Servis Renovasi & Pembaikan Rumah Dipercayai di Kuala Lumpur",
  },
  city: "Kuala Lumpur",
  state: "Wilayah Persekutuan Kuala Lumpur",
  country: "Malaysia",

  // Configurable business contact information
  // (Dummy number as requested until actual number is provided)
  whatsappNumber: "60123456789",
  phoneDisplay: "+60 12-345 6789",
  email: "hello@rapiworkskl.com",
  address: "Jalan Ampang, Kuala Lumpur City Centre, 50450 Kuala Lumpur, Malaysia",

  // Service Coverage Areas in KL
  coverageAreas: [
    "Kuala Lumpur City Centre (KLCC)",
    "Cheras",
    "Setapak",
    "Kepong",
    "Mont Kiara",
    "Bangsar",
    "Wangsa Maju",
    "Ampang",
    "Bukit Bintang",
    "Petaling Jaya & Klang Valley (on request)",
  ],

  openingHours: {
    en: "Mon – Sat: 8:30 AM – 6:30 PM (Sunday: By Appointment)",
    ms: "Isnin – Sabtu: 8:30 PG – 6:30 PTG (Ahad: Temujanji)",
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

export interface Project {
  id: string;
  serviceSlug: "painting" | "plaster-ceiling" | "plumbing" | "electrical" | "aircond-installation";
  location: string;
  imageUrl: string;
  en: {
    title: string;
    clientType: string;
    description: string;
    highlights: string[];
  };
  ms: {
    title: string;
    clientType: string;
    description: string;
    highlights: string[];
  };
}

export const projects: Project[] = [
  {
    id: "cheras-condo-painting",
    serviceSlug: "painting",
    location: "Cheras, Kuala Lumpur",
    imageUrl:
      "https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?q=80&w=1000&auto=format&fit=crop",
    en: {
      title: "Full Condo Interior Repainting",
      clientType: "Residential (3-Bedroom Condominium)",
      description:
        "Complete interior wall repainting using Nippon Odour-less All-1. Detailed crack repair, skim coat touch-ups, and modern neutral tone palette.",
      highlights: ["1,150 sq ft coverage", "Nippon Odour-less finish", "Completed in 3 days"],
    },
    ms: {
      title: "Mengecat Keseluruhan Bahagian Dalaman Kondo",
      clientType: "Kediaman (Kondo 3 Bilik)",
      description:
        "Kerja mengecat seluruh dinding dalaman kondo menggunakan cat Nippon tanpa bau. Menampal kesan retak halus dan sapuan tona moden neutral.",
      highlights: ["Keluasan 1,150 kps", "Cat Nippon tanpa bau", "Siap dalam 3 hari"],
    },
  },
  {
    id: "setapak-lbox-ceiling",
    serviceSlug: "plaster-ceiling",
    location: "Setapak, Kuala Lumpur",
    imageUrl:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
    en: {
      title: "Modern L-Box False Ceiling with Cove Lighting",
      clientType: "Residential (High-Floor Apartment)",
      description:
        "Custom designed perimeter L-box ceiling with concealed warm LED strip lighting troughs, heavy-duty ceiling fan anchor rods, and recessed downlights.",
      highlights: ["Perimeter L-box design", "Integrated LED light trough", "Direct concrete slab fan anchors"],
    },
    ms: {
      title: "Plaster Ceiling Rekaan L-Box dengan Lampu Cove",
      clientType: "Kediaman (Apartmen Tingkat Tinggi)",
      description:
        "Pemasangan siling kapur L-box tepi dinding dengan ruang lampu LED tersembunyi, cangkuk kipas konkrit kukuh, dan penebukan 'downlight'.",
      highlights: ["Rekaan L-box moden", "Ruang lampu jalur LED", "Cangkuk kipas ke konkrit asal"],
    },
  },
  {
    id: "kepong-concealed-pipe-repair",
    serviceSlug: "plumbing",
    location: "Kepong, Kuala Lumpur",
    imageUrl:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop",
    en: {
      title: "Concealed Wall Leaking Pipe Detection & Replacement",
      clientType: "Residential (Double Storey Terrace)",
      description:
        "Traced hidden pressure leak inside bathroom wall slab. Replaced degraded galvanized pipe section with durable PN16 PPR hot/cold fusion pipe.",
      highlights: ["Pinpoint leak detection", "PPR hot-fusion piping", "Neat tile repair and waterproofing"],
    },
    ms: {
      title: "Kesan & Baiki Paip Bocor Dalam Dinding",
      clientType: "Kediaman (Rumah Teres 2 Tingkat)",
      description:
        "Mengenal pasti punca paip bocor tersembunyi di dinding bilik air. Menggantikan paip lama dengan paip PPR tahan karat dan kalis tekanan tinggi.",
      highlights: ["Kesan kebocoran tepat", "Paip PPR tahan tekanan", "Kemasan jubin semula kemas"],
    },
  },
  {
    id: "klcc-lighting-fan-installation",
    serviceSlug: "electrical",
    location: "KLCC, Kuala Lumpur",
    imageUrl:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000&auto=format&fit=crop",
    en: {
      title: "Designer Track Light & Inverter Fan Wiring",
      clientType: "Commercial & Residential (Luxury Suite)",
      description:
        "Installation of modern black track spotlights, high-torque DC ceiling fans, smart dimmer switches, and additional concealed kitchen power sockets.",
      highlights: ["18 lighting points installed", "DC inverter fan balancing", "Tested with digital insulation tester"],
    },
    ms: {
      title: "Pemasangan Lampu Track & Kipas Inverter",
      clientType: "Kediaman Mewah (Suite KLCC)",
      description:
        "Pemasangan lampu 'track light' hitam moden, kipas siling DC inverter, suis pintar, dan penambahan punca kuasa plug elektrik di dapur.",
      highlights: ["18 mata lampu baharu", "Imbangan kipas siling DC", "Ujian keselamatan pembumian"],
    },
  },
  {
    id: "mont-kiara-aircond-installation",
    serviceSlug: "aircond-installation",
    location: "Mont Kiara, Kuala Lumpur",
    imageUrl:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1000&auto=format&fit=crop",
    en: {
      title: "Multi-Room Inverter Aircond Installation",
      clientType: "Residential (Condominium)",
      description:
        "Supplied and installed 3 units of Daikin Inverter split air conditioners (1.0HP and 2.0HP). Thick copper tubing with condensation-free drainage routing to the AC ledge.",
      highlights: ["Daikin Inverter units", "Heavy gauge insulated copper pipes", "Condominium management compliant"],
    },
    ms: {
      title: "Pemasangan Aircond Inverter Multi-Bilik",
      clientType: "Kediaman (Kondominium Mont Kiara)",
      description:
        "Pemasangan 3 unit pendingin hawa Daikin Inverter (1.0HP & 2.0HP). Laluan paip tembaga tebal dan saliran air buang kemas ke ruang pemampat.",
      highlights: ["Unit Daikin Inverter", "Paip tembaga tebal bertebat", "Mematuhi syarat pengurusan kondo"],
    },
  },
  {
    id: "ampang-exterior-waterproof-painting",
    serviceSlug: "painting",
    location: "Ampang, Kuala Lumpur",
    imageUrl:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000&auto=format&fit=crop",
    en: {
      title: "Exterior House Repainting & Weatherproofing",
      clientType: "Residential (Semi-Detached House)",
      description:
        "High-pressure jet wash cleaning of fungal growth, weather-resistant sealer application, and two coats of Jotun Jotashield Extreme for maximum UV protection.",
      highlights: ["High-pressure wall cleaning", "Jotun Jotashield Extreme", "5-year protection durability"],
    },
    ms: {
      title: "Mengecat Dinding Luar Rumah Kalis Cuaca",
      clientType: "Kediaman (Rumah Berkembar Semi-D)",
      description:
        "Cucian dinding tekanan tinggi menyingkirkan kulat, sapuan sealer kalis air dan 2 lapisan cat Jotun Jotashield Extreme kalis cuaca tropika.",
      highlights: ["Cucian 'water jet' tekanan tinggi", "Cat Jotun Jotashield", "Perlindungan tahan lasak"],
    },
  },
];

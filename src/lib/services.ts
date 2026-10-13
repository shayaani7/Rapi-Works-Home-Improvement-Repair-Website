export interface ServiceData {
  slug: string;
  iconName: string;
  imageUrl: string;
  en: {
    title: string;
    seoTitle: string;
    description: string;
    heading: string;
    tagline: string;
    overview: string;
    targetKeywords: string[];
    scope: { title: string; desc: string }[];
    process: { step: string; title: string; desc: string }[];
    faqs: { q: string; a: string }[];
    whatsappPrefill: string;
  };
  ms: {
    title: string;
    seoTitle: string;
    description: string;
    heading: string;
    tagline: string;
    overview: string;
    targetKeywords: string[];
    scope: { title: string; desc: string }[];
    process: { step: string; title: string; desc: string }[];
    faqs: { q: string; a: string }[];
    whatsappPrefill: string;
  };
}

export const services: Record<string, ServiceData> = {
  painting: {
    slug: "painting",
    iconName: "Paintbrush",
    imageUrl: "/images/work/painting-interior.jpg",
    en: {
      title: "House Painting Services",
      seoTitle: "House Painting Services Kuala Lumpur",
      description:
        "Looking for a reliable house painter in Kuala Lumpur? Enquire about interior and exterior painting, repainting, waterproofing, and wall touch-ups. Request an upfront quotation today.",
      heading: "House Painting Services in Kuala Lumpur",
      tagline:
        "Professional Interior & Exterior House Painting for Condos, Landed Properties, and Commercial Spaces in KL.",
      overview:
        "Need a fresh look for your home or commercial space? Our house painting services in Kuala Lumpur cover interior rooms, exterior facades, condo repainting, and wall touch-ups. We discuss the condition of the walls, surface preparation, paint options (Dulux, Nippon, Jotun), and project requirements before providing a transparent quotation.",
      targetKeywords: [
        "house painting Kuala Lumpur",
        "painter KL",
        "painting contractor KL",
        "interior house painting KL",
        "condo painting KL",
      ],
      scope: [
        {
          title: "Interior Painting & Wall Repainting",
          desc: "Full living room, bedroom, ceiling, and hallway painting using low-VOC, odorless, durable paints.",
        },
        {
          title: "Exterior House Painting & Facades",
          desc: "Weather-resistant, anti-fungal exterior coatings for terrace houses, semi-Ds, and bungalows.",
        },
        {
          title: "Wall Preparation & Crack Repair",
          desc: "Thorough putty plastering, hairline crack filling, peeling paint scraping, and sealer application for lasting adhesion.",
        },
        {
          title: "Condominium Move-In & Tenancy Repainting",
          desc: "Fast, cost-effective touch-up and repainting packages for landlords and new tenants in KL.",
        },
        {
          title: "Feature Walls & Color Consultation",
          desc: "Accent walls, textured effects, and guidance on selecting complementary color schemes for Malaysian homes.",
        },
      ],
      process: [
        {
          step: "01",
          title: "Free Consultation & Quotation",
          desc: "Share your floor plan or site photos via WhatsApp to receive an itemised estimate.",
        },
        {
          step: "02",
          title: "Site Inspection & Surface Prep",
          desc: "We check for moisture or peelings, protect floors/furniture with drop sheets, and patch all cracks.",
        },
        {
          step: "03",
          title: "Sealer & Topcoat Application",
          desc: "We apply premium quality primer sealer followed by 2 coats of your chosen brand finish.",
        },
        {
          step: "04",
          title: "Final Touch-up & Clean Site Handover",
          desc: "A thorough walkthrough ensures every edge is crisp before we clean up all debris.",
        },
      ],
      faqs: [
        {
          q: "How much does it cost to paint a house in Kuala Lumpur?",
          a: "Costs depend on the built-up area (sq ft), ceiling height, wall condition, and paint brand (e.g. Nippon Odourless, Dulux Pentalite, Jotun Majestic). We provide exact quotes after measuring or reviewing your layout.",
        },
        {
          q: "Do you supply the paint or can I provide my own?",
          a: "Both options are available! We can supply certified genuine paints at contractor trade rates, or provide labor-only services if you have already purchased your preferred paint.",
        },
        {
          q: "How long does it take to paint an apartment in KL?",
          a: "A typical 1,000 sq ft condo usually takes 2 to 3 days from surface preparation to final coat, including drying time.",
        },
      ],
      whatsappPrefill:
        "Hi RapiWorks KL, I would like to request a quotation for House Painting Services in Kuala Lumpur.",
    },
    ms: {
      title: "Servis Cat Rumah",
      seoTitle: "Servis Cat Rumah Kuala Lumpur",
      description:
        "Perlukan servis cat rumah profesional di Kuala Lumpur? Hubungi kami untuk kerja mengecat dalaman, luaran, mengecat semula kondo, dan baiki dinding retak. Dapatkan sebut harga telus hari ini.",
      heading: "Servis Cat Rumah di Kuala Lumpur",
      tagline:
        "Kerja Mengecat Dalaman & Luaran yang Kemas untuk Rumah Teres, Kondo dan Pejabat di KL.",
      overview:
        "Ingin menyegarkan semula warna rumah atau premis perniagaan anda? Kami menyediakan perkhidmatan mengecat bahagian dalaman dan luaran, mengecat semula dinding kondo, serta kerja kemasan cat berkualiti tinggi di sekitar Kuala Lumpur. Kami berbincang tentang keadaan dinding, kerja penyediaan permukaan, dan pilihan jenama cat sebelum menyediakan sebut harga.",
      targetKeywords: [
        "upah cat rumah KL",
        "kontraktor cat rumah Kuala Lumpur",
        "cat rumah condo KL",
        "tukang cat KL",
      ],
      scope: [
        {
          title: "Mengecat Bahagian Dalaman (Interior)",
          desc: "Mengecat ruang tamu, bilik tidur, siling dan koridor menggunakan cat berkualiti rendah bau (low-VOC).",
        },
        {
          title: "Mengecat Bahagian Luaran (Exterior)",
          desc: "Cat tahan cuaca panas dan hujan tropika Malaysia serta anti-kulat untuk rumah teres dan banglo.",
        },
        {
          title: "Kerja Rawatan Dinding & Tampal Retak",
          desc: "Mengikis cat lama mengelupas, menampal rekahan halus dengan simen putih (putty) serta sapuan cat asas (sealer).",
        },
        {
          title: "Pakej Cat Kondo Sebelum Masuk / Sewa",
          desc: "Pakej kemasan cat pantas dan berbaloi untuk pemilik rumah sewa atau pemilik baharu di KL.",
        },
        {
          title: "Dinding Tumpuan (Feature Wall) & Nasihat Warna",
          desc: "Bantuan memilih tona warna moden yang sesuai dengan pencahayaan dan konsep dekorasi rumah anda.",
        },
      ],
      process: [
        {
          step: "01",
          title: "Pertanyaan & Sebut Harga Awal",
          desc: "Hantar anggaran saiz atau gambar ruang melalui WhatsApp untuk anggaran kos pantas.",
        },
        {
          step: "02",
          title: "Penyediaan & Lindungi Perabot",
          desc: "Lantai dan perabot ditutup rapi menggunakan plastik/kain pelindung sebelum kerja dimulakan.",
        },
        {
          step: "03",
          title: "Sapuan Sealer & 2 Lapisan Cat",
          desc: "Menggunakan cat asli berkualiti tinggi (Nippon / Dulux / Jotun) dengan kemasan rata dan sekata.",
        },
        {
          step: "04",
          title: "Pemeriksaan Akhir & Pembersihan",
          desc: "Semakan kualiti bersama pemilik dan pembersihan sisa habuk sebelum penyerahan kerja.",
        },
      ],
      faqs: [
        {
          q: "Berapa anggaran upah cat rumah di Kuala Lumpur?",
          a: "Kos bergantung kepada keluasan rumah (sq ft), ketinggian siling, keadaan dinding (ada kesan lembap/retak), serta jenama cat yang dipilih. Kami menyediakan sebut harga terperinci secara percuma.",
        },
        {
          q: "Adakah harga termasuk cat atau upah sahaja?",
          a: "Kami menyediakan pilihan pakej lengkap (termasuk cat berjenama berkualiti) ataupun upah tukang sahaja jika anda telah membeli cat sendiri.",
        },
        {
          q: "Berapa lama masa diambil untuk mengecat kondo?",
          a: "Kondo bersaiz sekitar 1,000 kaki persegi biasanya siap dalam masa 2 hingga 3 hari termasuk kerja menggosok dan mengeringkan cat.",
        },
      ],
      whatsappPrefill:
        "Hai RapiWorks KL, saya ingin mendapatkan sebut harga untuk Servis Cat Rumah di Kuala Lumpur.",
    },
  },

  "plaster-ceiling": {
    slug: "plaster-ceiling",
    iconName: "Layers",
    imageUrl: "/images/work/plaster-lbox-windows.jpg",
    en: {
      title: "Plaster Ceiling Contractor",
      seoTitle: "Plaster Ceiling Contractor Kuala Lumpur",
      description:
        "Need plaster ceiling installation or repair in Kuala Lumpur? Modern L-box, flat gypsum board, cove lighting, and cornice designs with professional workmanship. Get a quotation.",
      heading: "Plaster Ceiling Services in Kuala Lumpur",
      tagline:
        "Modern Gypsum Board Ceilings, L-Box Designs, and Hidden LED Lighting Troughs for KL Properties.",
      overview:
        "Upgrade your home or commercial interior with modern plaster ceiling installation in Kuala Lumpur. We discuss ceiling layouts, gypsum board options, lighting arrangements (downlights, pendant lights, cove troughs), and suitable designs tailored to your ceiling height and budget.",
      targetKeywords: [
        "plaster ceiling contractor KL",
        "gypsum ceiling KL",
        "plaster ceiling installation Kuala Lumpur",
        "L box plaster ceiling KL",
        "ceiling repair Kuala Lumpur",
      ],
      scope: [
        {
          title: "Modern L-Box & Light Trough Ceilings",
          desc: "Sleek perimeter drop ceilings designed for concealed warm LED strip lighting and elegant ambience.",
        },
        {
          title: "Flat Gypsum Board Ceiling Installation",
          desc: "Clean, flush false ceilings perfect for concealing unsightly wiring, aircond piping, and concrete slab beams.",
        },
        {
          title: "Cornice & Plaster Mouldings",
          desc: "Classic and contemporary perimeter plaster cornices for neat transitions between walls and ceilings.",
        },
        {
          title: "Moisture-Resistant Bathroom Ceilings",
          desc: "Specialised water-resistant green gypsum boards suited for bathrooms and laundry yard areas.",
        },
        {
          title: "Ceiling Crack & Water Damage Repair",
          desc: "Reinforcement and patching for sagging, water-stained, or damaged plasterboard ceilings.",
        },
      ],
      process: [
        {
          step: "01",
          title: "Design & Measurement",
          desc: "We discuss your lighting layout, measure heights, and propose the best ceiling profile.",
        },
        {
          step: "02",
          title: "Metal Stud Framing & Hanging",
          desc: "Galvanised steel channels and heavy-duty suspension wires are securely anchored into the slab.",
        },
        {
          step: "03",
          title: "Gypsum Board Fixing & Jointing",
          desc: "Boards are screwed into place, followed by fibreglass joint tape and three smooth stopping compound coats.",
        },
        {
          step: "04",
          title: "Sanding, Cutting Holes & Primer",
          desc: "Machine sanding ensures a level surface, and precise cutouts are prepared for downlights and fans.",
        },
      ],
      faqs: [
        {
          q: "What is the difference between flat plaster ceiling and L-box?",
          a: "A flat ceiling lowers the entire surface to a uniform height to conceal conduits. An L-box (or perimeter drop) frames the edges of the room with a stepped trough for indirect mood lighting.",
        },
        {
          q: "Can you install heavy ceiling fans on plaster ceiling?",
          a: "Yes, but ceiling fans must NEVER be mounted on plasterboard alone. We install heavy-duty steel fan hooks anchored directly into the structural concrete ceiling slab above.",
        },
        {
          q: "How do you coordinate with electricians and aircond installers?",
          a: "Because RapiWorks KL handles electrical, aircond, and plaster ceiling together, we route all wiring and copper piping before closing up the ceiling, preventing costly redo work.",
        },
      ],
      whatsappPrefill:
        "Hi RapiWorks KL, I would like to enquire about Plaster Ceiling Installation in Kuala Lumpur.",
    },
    ms: {
      title: "Pemasangan Plaster Ceiling",
      seoTitle: "Kontraktor Plaster Ceiling Kuala Lumpur",
      description:
        "Mencari kontraktor plaster ceiling di Kuala Lumpur? Pemasangan siling kapur rekaan moden L-box, siling rata papan gypsum, kornis, dan baiki siling rosak. Hubungi kami untuk sebut harga.",
      heading: "Servis Plaster Ceiling di Kuala Lumpur",
      tagline:
        "Pemasangan Siling Kapur Rekaan L-Box, Papan Gypsum Rata & Siling Lampu Trough di KL.",
      overview:
        "Naik taraf ruang dalaman rumah atau pejabat anda dengan pemasangan plaster ceiling di Kuala Lumpur. Kami menawarkan pelbagai pilihan reka bentuk moden termasuk siling rata, rekaan bertingkat L-box dengan pencahayaan tersembunyi (cove lighting), dan kerja pembaikan siling mengikut bajet anda.",
      targetKeywords: [
        "kontraktor plaster ceiling KL",
        "upah plaster ceiling KL",
        "pasang siling kapur Kuala Lumpur",
        "harga plaster ceiling KL",
      ],
      scope: [
        {
          title: "Pemasangan Siling Moden Rekaan L-Box",
          desc: "Rekaan siling bertingkat tepi dinding dengan ruang lampu LED jalur tersembunyi untuk suasana eksklusif.",
        },
        {
          title: "Siling Rata (Flat Gypsum Ceiling)",
          desc: "Siling rata kemas yang menutup paip aircond dan kabel wayar yang tidak sedap dipandang.",
        },
        {
          title: "Pemasangan Cornice & Bunga Siling",
          desc: "Pilihan kornis moden atau klasik untuk kemasan tepi pertemuan antara siling dan dinding.",
        },
        {
          title: "Papan Gypsum Tahan Lembap (Bilik Air)",
          desc: "Penggunaan papan gypsum hijau kalis air untuk siling bilik air dan kawasan basah.",
        },
        {
          title: "Membaiki Siling Pecah & Kesan Bocor",
          desc: "Kerja menampal dan menggantikan bahagian siling yang melendut atau rosak akibat kebocoran paip.",
        },
      ],
      process: [
        {
          step: "01",
          title: "Ukuran & Pilihan Reka Bentuk",
          desc: "Perbincangan pelan pencahayaan, ukuran siling, dan penetapan paras ketinggian siling.",
        },
        {
          step: "02",
          title: "Pemasangan Rangka Besi (Metal Furring)",
          desc: "Rangka besi galvanis digantung kukuh pada siling konkrit mengikut piawaian keselamatan.",
        },
        {
          step: "03",
          title: "Pemasangan Papan Gypsum & Simen Plaster",
          desc: "Papan diskru kemas dan sambungan ditampal pita fiber serta 3 lapisan simen plaster halus.",
        },
        {
          step: "04",
          title: "Menggosok Rata & Penebukan Lubang Lampu",
          desc: "Permukaan digosok licin dan lubang lampu 'downlight' serta cangkuk kipas ditebuk tepat.",
        },
      ],
      faqs: [
        {
          q: "Adakah kipas siling boleh dipasang pada siling plaster?",
          a: "Boleh, tetapi cangkuk kipas mesti dipasang terus menggunakan rod besi ke lantai konkrit atas, bukan pada papan gypsum untuk keselamatan optimum.",
        },
        {
          q: "Berapa kos plaster ceiling bagi rumah kondo di KL?",
          a: "Harga bergantung kepada jenis reka bentuk (siling rata lebih jimat berbanding L-box berlampu) dan keluasan kaki persegi. Kami menyediakan sebut harga lengkap tanpa caj tersembunyi.",
        },
        {
          q: "Bolehkah kerja wiring dan paip aircond disatukan?",
          a: "Ya! Kelebihan RapiWorks KL ialah kami menguruskan elektrik, aircond, dan siling sekali gus supaya kerja tidak bertindih.",
        },
      ],
      whatsappPrefill:
        "Hai RapiWorks KL, saya ingin mendapatkan sebut harga untuk Pemasangan Plaster Ceiling di Kuala Lumpur.",
    },
  },

  plumbing: {
    slug: "plumbing",
    iconName: "Wrench",
    imageUrl:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop",
    en: {
      title: "Plumbing Services",
      seoTitle: "Plumbing Services Kuala Lumpur",
      description:
        "Need an experienced plumber in Kuala Lumpur? Leaking pipe repair, tap replacement, toilet and sink installation, water pressure booster pump setup. Contact us for a fast quote.",
      heading: "Plumbing Services in Kuala Lumpur",
      tagline:
        "Reliable Leak Repairs, Pipe Upgrades, and Sanitary Fixture Installations across KL.",
      overview:
        "Dealing with a leaking pipe, dripping tap, clogged drain, or faulty toilet cistern? Our plumbing service page helps homeowners and commercial property managers in Kuala Lumpur enquire about repairs, replacements, and new piping installations. Describe your issue and share a photo via WhatsApp for rapid diagnosis.",
      targetKeywords: [
        "plumber Kuala Lumpur",
        "plumbing repair KL",
        "leaking pipe repair KL",
        "sink installation KL",
        "water pipe repair KL",
      ],
      scope: [
        {
          title: "Leaking Pipe Detection & Concealed Repair",
          desc: "Pinpointing and repairing concealed wall leaks, burst PVC/PPR pipes, and slab seepage without unnecessary hacking.",
        },
        {
          title: "Tap, Mixer & Valve Replacement",
          desc: "Installing basin faucets, sink mixers, stop valves, bidet sprays, and thermostatic shower heads.",
        },
        {
          title: "Kitchen Sink & Bathroom Basin Installation",
          desc: "Proper trap installation, silicone water sealants, waste coupling, and drainage connections.",
        },
        {
          title: "Toilet Bowl (WC) & Cistern Mechanism Repairs",
          desc: "Fixing continuous running water, flush valve replacements, floor wax ring seals, and new WC installations.",
        },
        {
          title: "Water Tank, Booster Pump & Filter Setup",
          desc: "Installing household master water filters, rooftop stainless steel water tanks, and home booster pumps.",
        },
      ],
      process: [
        {
          step: "01",
          title: "Describe the Issue via WhatsApp",
          desc: "Send a photo or short video of the leak or fixture for an immediate preliminary assessment.",
        },
        {
          step: "02",
          title: "Site Inspection & Diagnosis",
          desc: "Our plumber arrives with diagnostic tools and essential spare parts ready to inspect the root cause.",
        },
        {
          step: "03",
          title: "Repair / Replacement Execution",
          desc: "We perform the agreed plumbing work cleanly using durable, SIRIM-approved pipes and fittings.",
        },
        {
          step: "04",
          title: "Pressure Testing & Cleanup",
          desc: "We test water pressure, verify zero leaks under operation, and leave the workspace tidy.",
        },
      ],
      faqs: [
        {
          q: "How quickly can you attend to a leaking pipe in KL?",
          a: "For active leaks causing property damage, contact us on WhatsApp immediately. We prioritize urgent repairs across central Kuala Lumpur areas.",
        },
        {
          q: "Do you supply the taps, sinks, and toilet fittings?",
          a: "We can supply standard certified plumbing fittings, or you can purchase your preferred designer brands (such as Kohler, American Standard, Sorento) and we will provide professional installation.",
        },
        {
          q: "Can you fix low water pressure in a double-storey house or condo?",
          a: "Yes. We can inspect the supply line, clean choked aerators/filters, or install a silent booster pump to ensure strong, consistent pressure throughout all bathrooms.",
        },
      ],
      whatsappPrefill:
        "Hi RapiWorks KL, I have a plumbing issue / leaking pipe in Kuala Lumpur and need a quotation.",
    },
    ms: {
      title: "Servis Paip",
      seoTitle: "Servis Paip Kuala Lumpur",
      description:
        "Perlukan tukang paip berpengalaman di Kuala Lumpur? Baiki paip bocor dalam dinding, tukar kepala paip, pasang sinki, mangkuk tandas dan pam air. Hubungi kami untuk sebut harga pantas.",
      heading: "Servis Paip di Kuala Lumpur",
      tagline:
        "Servis Baiki Paip Bocor, Pemasangan Aksesori Bilik Air & Sinki Berpengalaman di KL.",
      overview:
        "Menghadapi masalah paip bocor dalam dinding, kepala paip menitis, tandas tersumbat atau tekanan air perlahan? Kami sedia membantu pemilik kediaman dan premis komersial di Kuala Lumpur untuk kerja pembaikan, penggantian, dan pemasangan paip baharu. Kongsikan gambar kerosakan melalui WhatsApp untuk maklum balas segera.",
      targetKeywords: [
        "tukang paip KL",
        "baiki paip bocor Kuala Lumpur",
        "servis paip kondo KL",
        "pasang sinki KL",
      ],
      scope: [
        {
          title: "Kesan & Baiki Paip Bocor Dalam Dinding",
          desc: "Mengenal pasti punca kebocoran paip tersembunyi (PVC / PPR / Copper) dan membaiki dengan kesan tebukan minimum.",
        },
        {
          title: "Tukar Kepala Paip, Pancuran Mandi & Valve",
          desc: "Pemasangan 'mixer tap', hos bidet, 'stopcock', dan kepala 'shower' berkualiti.",
        },
        {
          title: "Pemasangan Sinki Dapur & Besen Cuci Tangan",
          desc: "Pemasangan perangkap sisa ('bottle trap'), penyambungan paip buang, dan kemasan gam silikon kalis bocor.",
        },
        {
          title: "Baiki & Pasang Mangkuk Tandas (WC)",
          desc: "Menggantikan pam tangki tandas yang meleleh tanpa henti serta memasang set mangkuk tandas baharu.",
        },
        {
          title: "Pemasangan Pam Air (Booster Pump) & Penapis Air",
          desc: "Memasang pam penggalak tekanan air untuk rumah teres serta sambungan penapis air luar rumah ('outdoor filter').",
        },
      ],
      process: [
        {
          step: "01",
          title: "Hantar Gambar Masalah di WhatsApp",
          desc: "Kongsikan video ringkas atau gambar masalah paip untuk kami buat anggaran kos awal.",
        },
        {
          step: "02",
          title: "Pemeriksaan Tapak",
          desc: "Tukang paip kami datang memeriksa punca sebenar kerosakan dengan peralatan yang bersesuaian.",
        },
        {
          step: "03",
          title: "Kerja Pembaikan Dilakukan",
          desc: "Kerja pembaikan dijalankan menggunakan bahan berkualiti dan paip yang disahkan SIRIM.",
        },
        {
          step: "04",
          title: "Ujian Tekanan Air & Bersihkan Tapak",
          desc: "Aliran air diuji bagi memastikan tiada kebocoran sebelum tapak kerja dibersihkan.",
        },
      ],
      faqs: [
        {
          q: "Adakah sebut harga diberikan sebelum kerja dimulakan?",
          a: "Ya. Tukang paip kami akan menerangkan punca kerosakan dan kos yang terlibat sebelum sebarang kerja dijalankan.",
        },
        {
          q: "Bolehkah baiki masalah air bertakung atau paip tersumbat?",
          a: "Ya, kami membantu menyelesaikan masalah paip longkang lantai bilik air tersumbat atau sinki dapur yang tidak mengalir lancar.",
        },
        {
          q: "Bolehkah saya beli barang sendiri dan anda pasangkan?",
          a: "Boleh! Anda boleh beli aksesori bilik air atau mangkuk tandas kegemaran anda, dan kami akan kenakan upah pasang yang berpatutan.",
        },
      ],
      whatsappPrefill:
        "Hai RapiWorks KL, saya mempunyai masalah paip bocor / servis paip di Kuala Lumpur dan ingin minta sebut harga.",
    },
  },

  electrical: {
    slug: "electrical",
    iconName: "Zap",
    imageUrl: "/images/work/electrical-pendant.jpg",
    en: {
      title: "Electrical Services",
      seoTitle: "Electrical Services Kuala Lumpur",
      description:
        "Need a reliable electrician in Kuala Lumpur? Light installation, ceiling fans, power point wiring, distribution board (DB) troubleshooting, and electrical repairs. Get a quote.",
      heading: "Electrical Services in Kuala Lumpur",
      tagline:
        "Safe, Neat Residential & Commercial Electrical Wiring and Installations in KL.",
      overview:
        "Planning electrical installations or upgrades for your home, condo, or commercial office in Kuala Lumpur? Contact us about available electrical services including lighting, ceiling fan installation, extra socket outlets, aircond isolator points, and electrical troubleshooting adhering to Malaysian Suruhanjaya Tenaga (Energy Commission) safety standards.",
      targetKeywords: [
        "electrician KL",
        "electrical wiring Kuala Lumpur",
        "electrical repair KL",
        "light installation KL",
        "wiring rumah condo KL",
      ],
      scope: [
        {
          title: "Lighting Installation & Downlight Conversions",
          desc: "Fitting LED downlights, modern track lights, pendant lights, chandelier hanging, and strip lights.",
        },
        {
          title: "Ceiling Fan Installation & Structural Reinforcement",
          desc: "Safe hook mounting and balancing for standard, remote-controlled, and DC inverter ceiling fans.",
        },
        {
          title: "New Power Sockets & Switches",
          desc: "Adding 13A single/double socket outlets, USB wall points, cooker points, and modern rocker switches.",
        },
        {
          title: "Water Heater & Aircond Power Points",
          desc: "Concealed or surface wiring with dedicated 20A isolator switches and appropriate circuit breakers.",
        },
        {
          title: "Distribution Board (DB Box) Inspection & Tripping Fixes",
          desc: "Diagnosing short circuits, fixing tripping Earth Leakage Circuit Breakers (ELCB/RCCB), and MCB upgrades.",
        },
      ],
      process: [
        {
          step: "01",
          title: "List Your Required Points",
          desc: "Inform us how many lights, fans, or new socket points you require for an upfront price guide.",
        },
        {
          step: "02",
          title: "Cable Routing & Marking",
          desc: "We mark the positions on walls/ceilings and plan the safest, neatest concealed or trunking cable run.",
        },
        {
          step: "03",
          title: "Safe Connection & Mounting",
          desc: "Wires are terminated into certified switchboards, fixtures, and sockets using proper earth grounding.",
        },
        {
          step: "04",
          title: "Testing & Polarity Verification",
          desc: "Every point is tested for correct voltage, polarity, and circuit breaker trip protection.",
        },
      ],
      faqs: [
        {
          q: "Why does my DB box keep tripping?",
          a: "Tripping is usually caused by an earth leak, overloaded circuit, or water contact inside an appliance/socket. We can inspect your DB board and locate the faulty circuit safely.",
        },
        {
          q: "Do you install customer-purchased lights and fans?",
          a: "Yes! Most homeowners buy their own lighting fixtures and ceiling fans; we provide reliable installation and wiring at clear per-point rates.",
        },
        {
          q: "Can you do concealed wiring inside condo concrete walls?",
          a: "For condominiums, structural pillars and shear walls cannot be hacked due to building management rules. We can run neat PVC casing, install false ceiling drops, or route along approved conduits.",
        },
      ],
      whatsappPrefill:
        "Hi RapiWorks KL, I would like a quotation for Electrical Services / Lighting Installation in Kuala Lumpur.",
    },
    ms: {
      title: "Servis Elektrik",
      seoTitle: "Servis Elektrik Kuala Lumpur",
      description:
        "Mencari juruelektrik di Kuala Lumpur? Pemasangan lampu, kipas siling, soket elektrik tambahan, baiki suis 'trip' dan pendawaian rumah selamat. Hubungi kami untuk sebut harga.",
      heading: "Servis Elektrik di Kuala Lumpur",
      tagline:
        "Pemasangan Lampu, Kipas, Pendawaian Soket & Baiki DB Box Selamat di KL.",
      overview:
        "Merancang pemasangan lampu baharu atau penambahan soket elektrik untuk rumah atau pejabat anda di Kuala Lumpur? Kami menawarkan kerja pemasangan dan pembaikan elektrik berkualiti, termasuk lampu 'downlight', kipas siling, suis pemanas air (water heater), suis aircond, dan pemeriksaan litar pintas yang mematuhi garis panduan keselamatan Suruhanjaya Tenaga.",
      targetKeywords: [
        "wiring rumah KL",
        "kontraktor elektrik Kuala Lumpur",
        "tukang elektrik KL",
        "pasang lampu kondo KL",
      ],
      scope: [
        {
          title: "Pemasangan Lampu LED & Downlight",
          desc: "Pemasangan pelbagai jenis lampu siling, lampu gantung (pendant), track light dan lampu jalur LED.",
        },
        {
          title: "Pemasangan Kipas Siling & Cangkuk Kukuh",
          desc: "Memasang kipas siling kawalan jauh atau regulator dengan imbangan bilah yang stabil tanpa goyang.",
        },
        {
          title: "Penambahan Mata Soket (Plug Point 13A)",
          desc: "Menambah punca kuasa plug untuk dapur, ruang TV, bilik tidur atau meja kerja komputer.",
        },
        {
          title: "Pendawaian Suis Aircond & Water Heater",
          desc: "Menyediakan litar berasingan dengan suis pengasing 20A khas untuk peralatan berkuasa tinggi.",
        },
        {
          title: "Pemeriksaan Kotak DB & Masalah 'Trip'",
          desc: "Mengenal pasti punca litar pintas, menukar RCCB/ELCB rosak dan menaik taraf kotak agihan elektrik.",
        },
      ],
      process: [
        {
          step: "01",
          title: "Senarai Titik / 'Point' Elektrik",
          desc: "Beritahu kami jumlah lampu, kipas atau soket plug yang ingin dipasang untuk sebut harga segera.",
        },
        {
          step: "02",
          title: "Penentuan Laluan Pendawaian",
          desc: "Kami merancang laluan wayar paling kemas sama ada secara 'concealed' (tanam dalam siling) atau 'casing'.",
        },
        {
          step: "03",
          title: "Pemasangan Aksesori & Sambungan",
          desc: "Kabel tembaga berkualiti disambung dengan kemas bersama sistem pembumian ('earth wire') yang selamat.",
        },
        {
          step: "04",
          title: "Ujian Keselamatan & Kefungsian",
          desc: "Setiap suis dan titik diuji kefungsian dan keselamatannya sebelum kerja diserahkan.",
        },
      ],
      faqs: [
        {
          q: "Berapa kos upah pasang lampu dan kipas siling di KL?",
          a: "Upah biasanya dikira mengikut bilangan titik ('per point'). Hubungi kami di WhatsApp untuk mendapatkan senarai kadar harga yang telus.",
        },
        {
          q: "Kenapa suis utama DB rumah saya kerap jatuh (trip)?",
          a: "Ia biasanya disebabkan kebocoran arus ke bumi, beban lampau, atau salah satu perkakas rumah yang rosak. Kami boleh memeriksa dan membaiki masalah ini dengan selamat.",
        },
        {
          q: "Adakah kerja pendawaian selamat dan kemas?",
          a: "Ya, tukang elektrik kami mengutamakan keselamatan pembumian wayar serta susun atur laluan wayar yang kemas.",
        },
      ],
      whatsappPrefill:
        "Hai RapiWorks KL, saya ingin mendapatkan sebut harga untuk Servis Elektrik / Pasang Lampu di Kuala Lumpur.",
    },
  },

  "aircond-installation": {
    slug: "aircond-installation",
    iconName: "Wind",
    imageUrl: "/images/work/aircond-split-bedroom.jpg",
    en: {
      title: "Aircond Installation",
      seoTitle: "Aircond Installation Kuala Lumpur",
      description:
        "Professional aircond installation in Kuala Lumpur. Inverter and non-inverter split units, copper piping, drainage setup for condos, landed houses, and offices. Request a quote.",
      heading: "Aircond Installation in Kuala Lumpur",
      tagline:
        "Clean, Reliable Split Unit Air Conditioner Installations for Homes and Offices in KL.",
      overview:
        "Planning to install a new air conditioner or replace an old unit in your house, apartment, or commercial office in Kuala Lumpur? Contact us to discuss the horse-power (HP) needed, indoor/outdoor unit placement, copper piping runs, and electrical requirements. We ensure high-efficiency cooling and leak-free drainage setups.",
      targetKeywords: [
        "aircond installation KL",
        "aircond installer Kuala Lumpur",
        "aircond installation condo KL",
        "split unit installation KL",
        "pasang aircond Kuala Lumpur",
      ],
      scope: [
        {
          title: "Residential Wall-Mounted Split Unit Installation",
          desc: "1.0HP to 2.5HP units installed neatly in bedrooms, living halls, and home offices with optimal airflow.",
        },
        {
          title: "Condominium Ledge & Balcony Compressor Mounting",
          desc: "Safe bracket mounting on designated AC ledges with vibration dampers adhering to condo building guidelines.",
        },
        {
          title: "Insulated Copper Piping & Drainage Piping",
          desc: "Thick gauge copper tubing, dense Armaflex insulation, and correctly sloped drain pipes to prevent water leaks.",
        },
        {
          title: "Old Unit Dismantling & Replacement",
          desc: "Safely pumping down refrigerant, dismantling older existing units, and replacing them with energy-efficient inverters.",
        },
        {
          title: "Vacuum Testing & Gas Top-Up Verification",
          desc: "Rigorous line vacuuming to eliminate moisture/air, ensuring maximum cooling performance and compressor longevity.",
        },
      ],
      process: [
        {
          step: "01",
          title: "Room Sizing & HP Recommendation",
          desc: "Share your room dimensions to determine whether 1.0HP, 1.5HP, 2.0HP or 2.5HP is best suited.",
        },
        {
          step: "02",
          title: "Indoor & Outdoor Bracket Setup",
          desc: "We mount the indoor bracket level and securely anchor the outdoor compressor brackets.",
        },
        {
          step: "03",
          title: "Copper Piping, Wiring & Drainage",
          desc: "High-grade copper pipes and drainage hoses are connected neatly with minimal wall intrusion.",
        },
        {
          step: "04",
          title: "Vacuum Pump & Commissioning",
          desc: "We perform full vacuuming, test cooling temperatures, verify quiet operation, and test drainage flow.",
        },
      ],
      faqs: [
        {
          q: "How many HP aircond do I need for my room?",
          a: "As a general guide for Malaysian climate: small bedrooms (up to 120 sq ft) use 1.0HP; master bedrooms (120–180 sq ft) use 1.5HP; living rooms (200–300 sq ft) use 2.0HP to 2.5HP. Afternoon sun exposure may require higher capacity.",
        },
        {
          q: "Does standard installation include copper piping?",
          a: "Our quotation clearly specifies the included length (typically up to 10 feet of certified copper pipe, insulation, and drainage pipe) so there are no surprises on installation day.",
        },
        {
          q: "Can you install an aircond that I bought online or from an appliance store?",
          a: "Yes! We frequently handle installation-only requests for units purchased from Shopee, Lazada, Harvey Norman, or Senheng.",
        },
      ],
      whatsappPrefill:
        "Hi RapiWorks KL, I would like to get a quotation for Aircond Installation in Kuala Lumpur.",
    },
    ms: {
      title: "Pemasangan Aircond",
      seoTitle: "Pemasangan Aircond Kuala Lumpur",
      description:
        "Servis pemasangan aircond profesional di Kuala Lumpur. Unit split inverter dan non-inverter, paip tembaga berkualiti, pemasangan kondominium dan rumah teres. Dapatkan sebut harga.",
      heading: "Pemasangan Aircond di Kuala Lumpur",
      tagline:
        "Pemasangan Unit Aircond Kemas, Paip Tembaga Berkualiti & Saluran Air Anti-Lelehan di KL.",
      overview:
        "Ingin memasang pendingin hawa (aircond) baharu atau menggantikan unit lama di rumah, kondo atau pejabat anda di Kuala Lumpur? Hubungi kami untuk membincangkan kuasa kuda (HP) yang sesuai, lokasi unit 'indoor' dan pemampat 'outdoor', serta laluan paip tembaga. Kami menjamin kerja yang kemas, penyejukan optimum dan saliran air buang yang lancar.",
      targetKeywords: [
        "pemasangan aircond KL",
        "pasang aircond Kuala Lumpur",
        "upah pasang aircond KL",
        "pasang aircond condo KL",
      ],
      scope: [
        {
          title: "Pemasangan Aircond Dinding (Wall-Mounted)",
          desc: "Pemasangan kemas unit 1.0HP hingga 2.5HP untuk bilik tidur, ruang tamu dan pejabat kecil.",
        },
        {
          title: "Pemasangan Pemampat Luar (Outdoor Bracket)",
          desc: "Pendakap besi kukuh dengan pelapik getah anti-gegaran di balkoni atau ruang 'ledge' kondo.",
        },
        {
          title: "Paip Tembaga Tebal & Penebat Armaflex",
          desc: "Penggunaan tiub tembaga berkualiti tinggi dan penebat tebal bagi mengelakkan paip berpeluh atau menitik.",
        },
        {
          title: "Membuka & Menggantikan Unit Lama",
          desc: "Membuka unit lama dengan teknik pam gas selamat sebelum memasang unit inverter moden yang jimat elektrik.",
        },
        {
          title: "Proses 'Vacuum' Paip & Pengujian Penyejukan",
          desc: "Proses vakum paip untuk menyingkirkan kelembapan sebelum gas dilepaskan bagi jangka hayat pemampat yang lama.",
        },
      ],
      process: [
        {
          step: "01",
          title: "Cadangan Kuasa Kuda (HP)",
          desc: "Kongsikan saiz bilik anda untuk memastikan pilihan HP yang mencukupi untuk cuaca panas Malaysia.",
        },
        {
          step: "02",
          title: "Pemasangan Pendakap Dinding & Luar",
          desc: "Unit dalaman dipasang seimbang menggunakan 'spirit level' dan pendakap luar dipasang kukuh.",
        },
        {
          step: "03",
          title: "Penyambungan Paip Gas & Salur Buang",
          desc: "Paip tembaga dan hos buang air dipasang dengan kecerunan yang betul supaya air tidak bertakung.",
        },
        {
          step: "04",
          title: "Vakum & Ujian Sejuk",
          desc: "Litar paip divakum rapi dan suhu angin sejuk diuji sebelum kerja disahkan siap.",
        },
      ],
      faqs: [
        {
          q: "Berapa HP aircond yang sesuai untuk bilik saya?",
          a: "Panduan umum: Bilik tidur biasa (bawah 120 kaki persegi) = 1.0HP; Bilik tidur utama (120–180 kaki persegi) = 1.5HP; Ruang tamu (200–300 kaki persegi) = 2.0HP atau 2.5HP.",
        },
        {
          q: "Adakah pakej pasang termasuk paip tembaga?",
          a: "Ya, sebut harga standard kami biasanya memperincikan panjang paip tembaga percuma (contohnya sehingga 10 kaki) bersama paip buang air dan 'wiring' pendawaian berkaitan.",
        },
        {
          q: "Bolehkah saya beli aircond sendiri dan anda pasang?",
          a: "Boleh! Ramai pelanggan kami membeli aircond semasa promosi kedai atau secara dalam talian, dan kami hanya mengenakan upah pemasangan profesional.",
        },
      ],
      whatsappPrefill:
        "Hai RapiWorks KL, saya ingin mendapatkan sebut harga untuk Pemasangan Aircond di Kuala Lumpur.",
    },
  },
};

export type ServiceSlug = keyof typeof services;

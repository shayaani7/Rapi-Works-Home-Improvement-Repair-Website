import React from "react";
import { site, getBaseUrl } from "@/lib/site";
import type { Lang } from "@/lib/translations";

interface LocalBusinessJsonLdProps {
  lang: Lang;
}

export function LocalBusinessJsonLd({ lang }: LocalBusinessJsonLdProps) {
  const baseUrl = getBaseUrl();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: site.name,
    image: `${baseUrl}/images/hero-og.jpg`,
    "@id": `${baseUrl}/#business`,
    url: `${baseUrl}/${lang}`,
    telephone: site.phoneDisplay,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jalan Ampang, Kuala Lumpur City Centre",
      addressLocality: "Kuala Lumpur",
      addressRegion: "Wilayah Persekutuan Kuala Lumpur",
      postalCode: "50450",
      addressCountry: "MY",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 3.1579,
      longitude: 101.7119,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:30",
        closes: "18:30",
      },
    ],
    areaServed: site.coverageAreas.map((area) => ({
      "@type": "AdministrativeArea",
      name: area,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: lang === "en" ? "Home Improvement Services" : "Perkhidmatan Renovasi & Pembaikan Rumah",
      itemListElement: site.services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: lang === "en" ? service.titleEn : service.titleMs,
          url: `${baseUrl}/${lang}/services/${service.slug}`,
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

interface FaqJsonLdProps {
  faqs: readonly { q: string; a: string }[] | { q: string; a: string }[];
}

export function FaqJsonLd({ faqs }: FaqJsonLdProps) {
  if (!faqs || faqs.length === 0) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

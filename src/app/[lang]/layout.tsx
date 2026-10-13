import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import { LocalBusinessJsonLd } from "@/components/JsonLd";
import { site, getBaseUrl } from "@/lib/site";
import type { Lang } from "@/lib/translations";
import "../globals.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "ms" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;

  if (lang !== "en" && lang !== "ms") {
    return {};
  }

  const baseUrl = getBaseUrl();

  const title =
    lang === "en"
      ? "Home Renovation & Repair Services in KL | RapiWorks KL"
      : "Servis Renovasi & Pembaikan Rumah KL | RapiWorks KL";

  const description =
    lang === "en"
      ? "Reliable painting, plaster ceiling, plumbing, electrical and aircond installation services in Kuala Lumpur. Contact RapiWorks KL for an honest quotation."
      : "Servis cat rumah, plaster ceiling, paip, elektrik dan pemasangan aircond berkualiti di Kuala Lumpur. Hubungi RapiWorks KL untuk sebut harga telus.";

  return {
    title: {
      default: title,
      template: `%s | ${site.name}`,
    },
    description,
    keywords: [
      "home improvement Kuala Lumpur",
      "renovation contractor KL",
      "house painting KL",
      "plaster ceiling contractor KL",
      "plumber Kuala Lumpur",
      "electrician KL",
      "aircond installation KL",
      "kontraktor rumah KL",
      "tukang paip KL",
      "wiring rumah KL",
      "cat rumah KL",
    ],
    authors: [{ name: site.name }],
    creator: site.name,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `${baseUrl}/${lang}`,
      languages: {
        en: `${baseUrl}/en`,
        ms: `${baseUrl}/ms`,
      },
    },
    openGraph: {
      type: "website",
      locale: lang === "ms" ? "ms_MY" : "en_US",
      url: `${baseUrl}/${lang}`,
      siteName: site.name,
      title,
      description,
      images: [
        {
          url: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1200&auto=format&fit=crop",
          width: 1200,
          height: 630,
          alt: "RapiWorks KL - Home Services in Kuala Lumpur",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (lang !== "en" && lang !== "ms") {
    notFound();
  }

  const validLang = lang as Lang;

  return (
    <html lang={validLang === "ms" ? "ms" : "en"} className="h-full">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-slate-50 text-slate-900 antialiased selection:bg-brand-500 selection:text-white">
        <LocalBusinessJsonLd lang={validLang} />
        <Header lang={validLang} />
        <div className="flex-1">{children}</div>
        <Footer lang={validLang} />
        <MobileCallBar lang={validLang} />
      </body>
    </html>
  );
}

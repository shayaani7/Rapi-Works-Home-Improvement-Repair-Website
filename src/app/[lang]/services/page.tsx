import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/services";
import { translations, type Lang } from "@/lib/translations";
import { getBaseUrl, site } from "@/lib/site";
import ServiceCard from "@/components/ServiceCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ChevronRight, Shield, CheckCircle } from "lucide-react";

type Props = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (lang !== "en" && lang !== "ms") return {};

  const baseUrl = getBaseUrl();
  const title =
    lang === "en"
      ? "Home Improvement & Repair Services in Kuala Lumpur"
      : "Perkhidmatan Renovasi & Pembaikan Rumah di Kuala Lumpur";

  const description =
    lang === "en"
      ? "Explore our 5 core services: house painting, plaster ceiling, plumbing, electrical, and aircond installation in KL."
      : "Terokai 5 perkhidmatan utama kami: cat rumah, plaster ceiling, baiki paip, servis elektrik dan pasang aircond di KL.";

  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}/${lang}/services`,
      languages: {
        en: `${baseUrl}/en/services`,
        ms: `${baseUrl}/ms/services`,
      },
    },
  };
}

export default async function ServicesHubPage({ params }: Props) {
  const { lang } = await params;
  if (lang !== "en" && lang !== "ms") notFound();

  const validLang = lang as Lang;
  const t = translations[validLang];
  const serviceList = Object.values(services);

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Top Banner */}
      <section className="bg-slate-900 text-white py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs text-slate-400 mb-4"
          >
            <Link href={`/${validLang}`} className="hover:text-white">
              {t.nav.home}
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium">{t.nav.services}</span>
          </nav>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight break-words">
            {validLang === "en"
              ? "Our Home Improvement & Repair Services in KL"
              : "Perkhidmatan Renovasi & Pembaikan Rumah di KL"}
          </h1>
          <p className="text-base sm:text-lg text-slate-300 mt-4 max-w-3xl leading-relaxed">
            {validLang === "en"
              ? "We provide five specialised residential and commercial services across Kuala Lumpur. From small repairs to full room refurbishments, our skilled team delivers high-quality workmanship with transparent quotations."
              : "Kami menyediakan lima perkhidmatan khusus untuk kediaman dan premis komersial di seluruh Kuala Lumpur. Daripada pembaikan kecil hingga renovasi ruang lengkap, pasukan kami menjamin hasil kemas dengan sebut harga telus."}
          </p>

          <div className="mt-6 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            <WhatsAppButton
              lang={validLang}
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 font-bold text-white text-sm shadow transition-all"
            >
              <span>{t.hero.ctaWhatsApp}</span>
            </WhatsAppButton>
            <a
              href={`tel:${site.phoneTel}`}
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 font-bold text-white text-sm border border-slate-700 transition-all"
            >
              <span>{site.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceList.map((service) => (
            <ServiceCard
              key={service.slug}
              service={service}
              lang={validLang}
            />
          ))}
        </div>
      </section>

      {/* Package & Convenience Feature */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-700 flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              {validLang === "en"
                ? "Why Hire One Contractor for Multiple Trades?"
                : "Mengapa Lebih Jimat Menggunakan Satu Kontraktor?"}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              {validLang === "en"
                ? "Renovating a home or office in KL often requires painting, plaster ceiling installation, electrical points, and aircond copper pipes at the same time. Juggling separate contractors causes scheduling clashes and blame games when pipes or wiring are concealed inside ceilings. At RapiWorks KL, we coordinate all 5 trades smoothly under one roof."
                : "Kerja renovasi rumah di KL biasanya memerlukan kerja mengecat, siling plaster, penambahan pendawaian lampu dan paip tembaga aircond serentak. Menggunakan tukang berasingan kerap menimbulkan pertembungan jadual dan salah faham apabila paip tersembunyi dalam siling. Di RapiWorks KL, kami selaraskan kelima-lima kerja ini di bawah satu pengurusan yang kemas."}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-100">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
              <div>
                <p className="font-bold text-slate-900 text-sm">
                  {validLang === "en" ? "Synchronised Schedule" : "Jadual Tersusun"}
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  {validLang === "en"
                    ? "Electrical wires and aircond pipes are laid BEFORE plaster ceilings are sealed, avoiding rework."
                    : "Wayar elektrik & paip aircond ditarik SEBELUM siling ditutup, mengelakkan siling ditebuk semula."}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
              <div>
                <p className="font-bold text-slate-900 text-sm">
                  {validLang === "en" ? "Single Point of Contact" : "Satu Hubungan Sahaja"}
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  {validLang === "en"
                    ? "One dedicated person to update you on WhatsApp, answer questions, and manage work quality."
                    : "Hanya satu nombor WhatsApp untuk bertanya, menyelaraskan kunci rumah dan memantau kerja."}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
              <div>
                <p className="font-bold text-slate-900 text-sm">
                  {validLang === "en" ? "Bundled Cost Savings" : "Penjimatan Pakej"}
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  {validLang === "en"
                    ? "Enjoy better overall project rates compared to hiring 5 different standalone specialists."
                    : "Kadar harga lebih menjimatkan berbanding melantik 5 tukang pakar secara berasingan."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

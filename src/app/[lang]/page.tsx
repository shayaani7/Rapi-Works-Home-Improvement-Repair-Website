import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { site, getBaseUrl } from "@/lib/site";
import { translations, type Lang } from "@/lib/translations";
import { services } from "@/lib/services";
import { projects } from "@/lib/projects";
import ServiceCard from "@/components/ServiceCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import HeroGallery from "@/components/HeroGallery";
import { FaqJsonLd } from "@/components/JsonLd";
import {
  MapPin,
  CheckCircle2,
  ArrowRight,
  Phone,
  HelpCircle,
  Building2,
} from "lucide-react";

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
      : "Servis Renovasi dan Pembaikan Rumah di Kuala Lumpur";

  const description =
    lang === "en"
      ? "Reliable house painting, plaster ceiling, plumbing, electrical, and aircond installation in KL. Request a free quote today."
      : "Servis cat rumah, plaster ceiling, baiki paip, pendawaian elektrik dan pasang aircond di Kuala Lumpur. Dapatkan sebut harga percuma hari ini.";

  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}/${lang}`,
      languages: {
        en: `${baseUrl}/en`,
        ms: `${baseUrl}/ms`,
      },
    },
  };
}

export default async function HomePage({ params }: Props) {
  const { lang } = await params;

  if (lang !== "en" && lang !== "ms") {
    notFound();
  }

  const validLang = lang as Lang;
  const t = translations[validLang];
  const serviceList = Object.values(services);
  const featuredProjects = projects.slice(0, 4);

  return (
    <>
      <FaqJsonLd faqs={t.faqSection.items} />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white pt-8 pb-14 sm:pt-12 sm:pb-20 lg:pt-20 lg:pb-28">
        {/* Subtle decorative background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-7xl h-96 bg-brand-600/15 blur-3xl pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 min-w-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Hero Copy */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6 min-w-0">
              <div className="inline-flex max-w-full items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/90 border border-slate-700/80 text-brand-300 text-[11px] sm:text-xs font-semibold backdrop-blur">
                <MapPin className="w-3.5 h-3.5 text-brand-400 shrink-0" />
                <span className="leading-snug break-words">{t.hero.locationBadge}</span>
              </div>

              <h1 className="text-[1.65rem] sm:text-5xl lg:text-5xl font-black tracking-tight text-white leading-tight break-words">
                {t.hero.headline}
              </h1>

              <p className="text-base sm:text-xl font-medium text-slate-300 leading-snug break-words">
                {t.hero.subheadline}
              </p>

              <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl break-words">
                {t.hero.description}
              </p>

              {/* CTAs */}
              <div className="pt-1 sm:pt-2 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3">
                <WhatsAppButton
                  lang={validLang}
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 sm:py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 font-bold text-white text-base shadow-lg shadow-emerald-600/30 active:scale-[0.98] transition-all"
                >
                  <span>{t.hero.ctaWhatsApp}</span>
                </WhatsAppButton>

                <a
                  href={`tel:${site.phoneTel}`}
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 sm:py-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 font-bold text-white text-base transition-all"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>{site.phoneDisplay}</span>
                </a>
              </div>

              {/* Trust Badges */}
              <div className="pt-4 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-300">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{t.hero.bullet1}</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{t.hero.bullet2}</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{t.hero.bullet3}</span>
                </div>
              </div>
            </div>

            {/* Right Hero Image — swipe on mobile */}
            <div className="lg:col-span-5 relative min-w-0">
              <HeroGallery />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-3.5 py-1.5 rounded-full border border-brand-200">
              {t.servicesSection.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-4">
              {t.servicesSection.title}
            </h2>
            <p className="text-base text-slate-600 mt-3 leading-relaxed">
              {t.servicesSection.description}
            </p>
          </div>

          {/* 5 Core Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceList.map((service) => (
              <ServiceCard
                key={service.slug}
                service={service}
                lang={validLang}
              />
            ))}

            {/* Custom Multi-service Card Banner */}
            <div className="bg-gradient-to-br from-brand-900 to-slate-900 rounded-2xl p-8 text-white flex flex-col justify-between shadow-lg">
              <div>
                <div className="w-10 h-10 rounded-xl bg-brand-700/60 flex items-center justify-center mb-4 text-brand-200">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {validLang === "en"
                    ? "Full Home Renovation & Makeover?"
                    : "Pakej Ubah Suai Rumah Lengkap?"}
                </h3>
                <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                  {validLang === "en"
                    ? "Combine house painting, new plaster ceiling, electrical points, and aircond installation into a single seamless project with one accountable contractor."
                    : "Gabungkan kerja mengecat, siling plaster, penambahan suis lampu dan pasang aircond dalam satu pakej kemas di bawah satu kontraktor bertanggungjawab."}
                </p>
              </div>

              <div className="pt-6">
                <WhatsAppButton
                  lang={validLang}
                  service={
                    validLang === "en"
                      ? "Full home renovation"
                      : "Pakej ubah suai rumah lengkap"
                  }
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-brand-950 font-bold text-xs hover:bg-slate-100 transition-colors"
                >
                  <span>
                    {validLang === "en"
                      ? "Discuss on WhatsApp"
                      : "Bincang di WhatsApp"}
                  </span>
                </WhatsAppButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-3.5 py-1.5 rounded-full border border-brand-200">
                {t.whyUs.badge}
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-4">
                {t.whyUs.title}
              </h2>
              <p className="text-base text-slate-600 mt-4 leading-relaxed">
                {t.whyUs.subtitle}
              </p>

              <div className="mt-8 p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                  {validLang === "en" ? "Service Guarantee" : "Jaminan Kerja"}
                </p>
                <p className="text-sm font-semibold text-slate-800">
                  {validLang === "en"
                    ? "No hidden surprises. We quote before we work, confirm scope clearly, and test every fixture thoroughly."
                    : "Tiada caj mengejut. Sebut harga diberikan awal, skop diperjelaskan, dan setiap kerja diuji sepenuhnya."}
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {t.whyUs.points.map((point, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-brand-300 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center font-bold text-sm mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {point.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase Section */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-3.5 py-1.5 rounded-full border border-brand-200">
                {t.projectsSection.badge}
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3">
                {t.projectsSection.title}
              </h2>
              <p className="text-sm text-slate-600 mt-2">
                {t.projectsSection.description}
              </p>
            </div>

            <Link
              href={`/${validLang}/projects`}
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-bold text-brand-600 hover:text-brand-700"
            >
              <span>{t.projectsSection.viewAll}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProjects.map((p) => {
              const projectData = p[validLang];
              return (
                <div
                  key={p.id}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all group flex flex-col"
                >
                  <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                    <Image
                      src={p.imageUrl}
                      alt={projectData.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur px-2.5 py-1 rounded-full text-[10px] font-bold text-white">
                      {p.location}
                    </div>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-[11px] font-bold text-brand-600 uppercase tracking-wider">
                        {projectData.clientType}
                      </p>
                      <h3 className="text-sm font-bold text-slate-900 mt-1 line-clamp-2">
                        {projectData.title}
                      </h3>
                      <p className="text-xs text-slate-600 mt-2 line-clamp-3">
                        {projectData.description}
                      </p>
                    </div>

                    <div className="pt-3 mt-3 border-t border-slate-100">
                      <Link
                        href={`/${validLang}/projects`}
                        className="text-xs font-bold text-brand-600 hover:text-brand-700 inline-flex items-center gap-1"
                      >
                        <span>
                          {validLang === "en" ? "View Details" : "Lihat Maklumat"}
                        </span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Areas We Serve Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-3.5 py-1.5 rounded-full border border-brand-200">
              {t.areasSection.badge}
            </span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-3">
              {t.areasSection.title}
            </h2>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              {t.areasSection.description}
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {site.coverageAreas.map((area) => (
              <div
                key={area}
                className="flex flex-col items-center justify-center gap-2 min-h-[112px] px-4 py-5 rounded-2xl bg-slate-50 border border-slate-200 text-center hover:border-brand-400 hover:bg-brand-50/50 transition-colors"
              >
                <MapPin className="w-5 h-5 text-brand-600" />
                <p className="text-sm font-bold text-slate-900 leading-snug">
                  {area}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-3.5 py-1.5 rounded-full border border-brand-200">
              {t.faqSection.badge}
            </span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-3">
              {t.faqSection.title}
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              {t.faqSection.description}
            </p>
          </div>

          <div className="space-y-4">
            {t.faqSection.items.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-white rounded-2xl border border-slate-200 p-5 shadow-sm [&_summary::-webkit-details-marker]:hidden open:border-brand-400"
              >
                <summary className="flex items-center justify-between cursor-pointer font-bold text-slate-900 text-base list-none">
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-brand-600 shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <span className="transition group-open:rotate-180 ml-2">
                    <ArrowRight className="w-4 h-4 text-slate-400 rotate-90" />
                  </span>
                </summary>
                <p className="mt-4 text-sm text-slate-600 leading-relaxed pl-8 border-t border-slate-100 pt-3">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp enquiry */}
      <section className="py-20 bg-white border-t border-slate-200" id="quote">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-slate-950 text-white p-8 sm:p-12">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                {validLang === "en" ? "WhatsApp quotation" : "Sebut harga WhatsApp"}
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight">
                {validLang === "en"
                  ? "Send your job details on WhatsApp"
                  : "Hantar butiran kerja anda di WhatsApp"}
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                {validLang === "en"
                  ? "There is no enquiry form. Tap the button and WhatsApp opens a chat to 011-2120 6259 with a message ready to send. Add photos of the work before you send it."
                  : "Tiada borang pertanyaan. Tekan butang dan WhatsApp membuka chat ke 011-2120 6259 dengan mesej sedia untuk dihantar. Tambah gambar kerja sebelum menghantar."}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="rounded-2xl bg-white/5 border border-white/10 px-4 py-4">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  WhatsApp
                </p>
                <p className="mt-1 text-base font-bold">{site.phoneDisplay}</p>
              </div>
              <div className="rounded-2xl bg-white/5 border border-white/10 px-4 py-4">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  {validLang === "en" ? "Hours" : "Waktu"}
                </p>
                <p className="mt-1 text-base font-bold">{site.openingHoursShort[validLang]}</p>
              </div>
              <div className="rounded-2xl bg-white/5 border border-white/10 px-4 py-4">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  {validLang === "en" ? "Address" : "Alamat"}
                </p>
                <p className="mt-1 text-sm font-bold leading-snug">Seri Manja Square One</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3">
              <WhatsAppButton
                lang={validLang}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 font-bold text-white text-base shadow-lg transition-all"
              >
                <span>
                  {validLang === "en"
                    ? "Open WhatsApp and send a message"
                    : "Buka WhatsApp dan hantar mesej"}
                </span>
              </WhatsAppButton>
              <a
                href={`tel:${site.phoneTel}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-white/15 font-bold text-white text-base hover:bg-white/10 transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>{site.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

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
import QuoteForm from "@/components/QuoteForm";
import { FaqJsonLd } from "@/components/JsonLd";
import {
  MapPin,
  CheckCircle2,
  ShieldCheck,
  Star,
  ArrowRight,
  Phone,
  HelpCircle,
  Building2,
  Sparkles,
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
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white pt-12 pb-20 lg:pt-20 lg:pb-28">
        {/* Subtle decorative background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-brand-600/15 blur-3xl pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-slate-700/80 text-brand-300 text-xs font-semibold backdrop-blur">
                <MapPin className="w-3.5 h-3.5 text-brand-400" />
                <span>{t.hero.locationBadge}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                {t.hero.headline}
              </h1>

              <p className="text-lg sm:text-xl font-medium text-slate-300 leading-snug">
                {t.hero.subheadline}
              </p>

              <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl">
                {t.hero.description}
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href={`/${validLang}/contact`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-brand-600 hover:bg-brand-500 font-bold text-white text-base shadow-lg shadow-brand-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <span>{t.hero.ctaQuote}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <WhatsAppButton
                  lang={validLang}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 font-bold text-white text-base shadow-lg shadow-emerald-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <span>{t.hero.ctaWhatsApp}</span>
                </WhatsAppButton>
              </div>

              {/* Trust Badges */}
              <div className="pt-4 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{t.hero.bullet1}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{t.hero.bullet2}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{t.hero.bullet3}</span>
                </div>
              </div>
            </div>

            {/* Right Hero Image Card Collage */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Hero Showcase Image */}
                <div className="relative rounded-3xl overflow-hidden border-2 border-slate-700/60 shadow-2xl h-[420px] bg-slate-800">
                  <Image
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop"
                    alt="RapiWorks KL Quality Renovation and Plaster Ceiling"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  {/* Floating Overlay Badge */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur text-slate-900 shadow-xl border border-white/50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center font-bold">
                          KL
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-900">
                            {validLang === "en" ? "Kuala Lumpur Verified" : "Kontraktor KL Sah"}
                          </p>
                          <p className="text-[11px] text-slate-500">
                            {validLang === "en"
                              ? "Residential & Commercial Works"
                              : "Kediaman & Premis Komersial"}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-amber-500">
                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                        <span className="text-xs font-black text-slate-900">5.0</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sub floating pill */}
                <div className="absolute -top-4 -left-4 hidden sm:flex items-center gap-2.5 bg-slate-800/95 backdrop-blur border border-slate-700 px-4 py-2.5 rounded-2xl shadow-xl">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <div className="text-left">
                    <p className="text-xs font-bold text-white">
                      {validLang === "en" ? "Direct WhatsApp Quote" : "Sebut Harga WhatsApp"}
                    </p>
                    <p className="text-[10px] text-slate-400">
                      {validLang === "en" ? "Fast preliminary review" : "Respon pantas & telus"}
                    </p>
                  </div>
                </div>
              </div>
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
                <Link
                  href={`/${validLang}/contact`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-brand-950 font-bold text-xs hover:bg-slate-100 transition-colors"
                >
                  <span>
                    {validLang === "en"
                      ? "Discuss Combined Project"
                      : "Bincang Pakej Gabungan"}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
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

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 max-w-5xl mx-auto">
            {site.coverageAreas.map((area) => (
              <div
                key={area}
                className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-center hover:border-brand-400 hover:bg-brand-50/50 transition-colors"
              >
                <MapPin className="w-4 h-4 text-brand-600 mx-auto mb-1.5" />
                <p className="text-xs font-bold text-slate-800 leading-snug">
                  {area}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs text-slate-500">
              {validLang === "en"
                ? "Outside these areas? We also accept selected Klang Valley locations (Petaling Jaya, Subang, Puchong) by prior appointment."
                : "Di luar kawasan ini? Kami juga menerima projek terpilih di Lembah Klang (Petaling Jaya, Subang, Puchong) atas perbincangan awal."}
            </p>
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

      {/* Contact & Quotation Section */}
      <section className="py-20 bg-white border-t border-slate-200" id="quote">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
                {validLang === "en" ? "Fast Quotation" : "Sebut Harga Pantas"}
              </span>

              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                {validLang === "en"
                  ? "Contact Us for Your Kuala Lumpur Home Project"
                  : "Hubungi Kami untuk Projek Rumah Anda di KL"}
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                {validLang === "en"
                  ? "Tell us what you need help with. We discuss your project specifications and arrange a site assessment or upfront quotation."
                  : "Kongsikan keperluan anda. Kami akan berbincang mengenai skop kerja dan menyediakan anggaran sebut harga atau lawatan tapak."}
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 flex items-start gap-3.5">
                  <Sparkles className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-emerald-950">
                      {validLang === "en" ? "Fastest: WhatsApp Direct" : "Paling Pantas: WhatsApp Terus"}
                    </p>
                    <p className="text-xs text-emerald-800 mt-0.5">
                      {validLang === "en"
                        ? "Take photos of your wall, ceiling, leaking pipe, or room and send them straight to WhatsApp."
                        : "Ambil gambar dinding, siling, paip bocor atau ruang anda dan hantar terus ke WhatsApp kami."}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium text-slate-500">
                      {validLang === "en" ? "Phone Call Support" : "Panggilan Telefon"}
                    </p>
                    <p className="text-base font-bold text-slate-900">
                      {site.phoneDisplay}
                    </p>
                  </div>
                  <a
                    href={`tel:${site.whatsappNumber}`}
                    className="p-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-colors"
                    aria-label="Call RapiWorks KL"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <QuoteForm lang={validLang} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

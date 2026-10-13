import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { services, type ServiceSlug } from "@/lib/services";
import { translations, type Lang } from "@/lib/translations";
import { getBaseUrl } from "@/lib/site";
import WhatsAppButton from "@/components/WhatsAppButton";
import QuoteForm from "@/components/QuoteForm";
import { FaqJsonLd } from "@/components/JsonLd";
import {
  ChevronRight,
  CheckCircle2,
  Phone,
  HelpCircle,
  ArrowRight,
  ShieldAlert,
  Sparkles,
} from "lucide-react";

type Props = {
  params: Promise<{ lang: string; slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(services).flatMap((slug) =>
    ["en", "ms"].map((lang) => ({ lang, slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;

  if (
    (lang !== "en" && lang !== "ms") ||
    !Object.hasOwn(services, slug)
  ) {
    return {};
  }

  const service = services[slug as ServiceSlug];
  const serviceLocale = service[lang as Lang];
  const baseUrl = getBaseUrl();

  return {
    title: serviceLocale.seoTitle,
    description: serviceLocale.description,
    keywords: serviceLocale.targetKeywords,
    alternates: {
      canonical: `${baseUrl}/${lang}/services/${slug}`,
      languages: {
        en: `${baseUrl}/en/services/${slug}`,
        ms: `${baseUrl}/ms/services/${slug}`,
      },
    },
    openGraph: {
      title: serviceLocale.seoTitle,
      description: serviceLocale.description,
      images: [
        {
          url: service.imageUrl,
          width: 1200,
          height: 630,
          alt: serviceLocale.heading,
        },
      ],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { lang, slug } = await params;

  if (
    (lang !== "en" && lang !== "ms") ||
    !Object.hasOwn(services, slug)
  ) {
    notFound();
  }

  const validLang = lang as Lang;
  const service = services[slug as ServiceSlug];
  const data = service[validLang];
  const t = translations[validLang];

  // Other services for internal linking
  const otherServices = Object.values(services).filter((s) => s.slug !== slug);

  return (
    <>
      <FaqJsonLd faqs={data.faqs} />

      {/* Service Hero Header */}
      <section className="relative bg-slate-900 text-white overflow-hidden py-16 lg:py-24 border-b border-slate-800">
        <div className="absolute inset-0 opacity-20">
          <Image
            src={service.imageUrl}
            alt={data.heading}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/60" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb Navigation */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs text-slate-400 mb-6"
          >
            <Link href={`/${validLang}`} className="hover:text-white">
              {t.nav.home}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <Link href={`/${validLang}/services`} className="hover:text-white">
              {t.nav.services}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-brand-300 font-semibold">{data.title}</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider bg-brand-500/20 text-brand-300 border border-brand-500/30 px-3 py-1 rounded-full">
                Kuala Lumpur
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-3 py-1 rounded-full">
                {validLang === "en" ? "Residential & Commercial" : "Kediaman & Komersial"}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              {data.heading}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {data.tagline}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <WhatsAppButton
                lang={validLang}
                service={data.title}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 font-bold text-white text-sm sm:text-base shadow-lg shadow-emerald-600/30 active:scale-95 transition-all"
              >
                <span>
                  {validLang === "en"
                    ? `WhatsApp for ${data.title} Quote`
                    : `WhatsApp Sebut Harga ${data.title}`}
                </span>
              </WhatsAppButton>

              <a
                href="#quote-form"
                className="inline-flex items-center justify-center px-6 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 font-bold text-white text-sm sm:text-base border border-slate-700 transition-all"
              >
                {validLang === "en" ? "Submit Project Specs" : "Borang Pertanyaan"}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Article Body (8 cols) */}
          <article className="lg:col-span-8 space-y-12">
            {/* Overview & Keywords */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
              <h2 className="text-2xl font-black text-slate-900 mb-4">
                {validLang === "en"
                  ? `About Our ${data.title} in Kuala Lumpur`
                  : `Mengenai ${data.title} Kami di Kuala Lumpur`}
              </h2>
              <p className="text-base text-slate-700 leading-relaxed mb-6">
                {data.overview}
              </p>

              {/* Keyword Badges for SEO Context */}
              <div className="pt-4 border-t border-slate-100">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  {validLang === "en" ? "Service Focus Areas" : "Fokus Servis"}
                </p>
                <div className="flex flex-wrap gap-2">
                  {data.targetKeywords.map((kw, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium text-slate-600 bg-slate-100 px-3 py-1 rounded-lg"
                    >
                      #{kw}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Scope of Work */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
              <h2 className="text-2xl font-black text-slate-900 mb-6">
                {validLang === "en"
                  ? "What Is Included in Our Service"
                  : "Skop Perkhidmatan Kami"}
              </h2>

              <div className="grid grid-cols-1 gap-6">
                {data.scope.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4"
                  >
                    <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-sm">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Work Process */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
              <h2 className="text-2xl font-black text-slate-900 mb-6">
                {validLang === "en"
                  ? "Our Step-by-Step Execution Process"
                  : "Langkah & Proses Kerja Kami"}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {data.process.map((step) => (
                  <div
                    key={step.step}
                    className="p-6 rounded-2xl border border-slate-200 bg-slate-50 relative overflow-hidden"
                  >
                    <span className="text-3xl font-black text-slate-300 absolute top-4 right-4">
                      {step.step}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 mb-2 pr-8">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Service-Specific FAQs */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
              <h2 className="text-2xl font-black text-slate-900 mb-6">
                {validLang === "en"
                  ? `Frequently Asked Questions About ${data.title}`
                  : `Soalan Lazim Mengenai ${data.title}`}
              </h2>

              <div className="space-y-4">
                {data.faqs.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group rounded-2xl border border-slate-200 p-5 open:border-brand-400 bg-slate-50"
                  >
                    <summary className="flex items-center justify-between cursor-pointer font-bold text-slate-900 text-sm sm:text-base list-none">
                      <span className="flex items-center gap-3">
                        <HelpCircle className="w-5 h-5 text-brand-600 shrink-0" />
                        <span>{faq.q}</span>
                      </span>
                      <span className="transition group-open:rotate-180 ml-2">
                        <ArrowRight className="w-4 h-4 text-slate-400 rotate-90" />
                      </span>
                    </summary>
                    <p className="mt-3 text-sm text-slate-600 leading-relaxed pl-8 border-t border-slate-200 pt-3">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>

            {/* Embedded Quote Form Anchor */}
            <div id="quote-form">
              <QuoteForm lang={validLang} initialService={slug} />
            </div>
          </article>

          {/* Sticky Sidebar (4 cols) */}
          <aside className="lg:col-span-4 space-y-6">
            {/* Quick Action Box */}
            <div className="bg-gradient-to-br from-brand-900 to-slate-900 text-white rounded-3xl p-6 shadow-xl space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300">
                <Sparkles className="w-4 h-4" />
                <span>{validLang === "en" ? "Fast Quotation" : "Sebut Harga Segera"}</span>
              </div>
              <h3 className="text-xl font-bold leading-snug">
                {validLang === "en"
                  ? `Need ${data.title} in Kuala Lumpur?`
                  : `Perlukan ${data.title} di KL?`}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {validLang === "en"
                  ? "Chat with our local contractor directly on WhatsApp. Send photos or floor plans for a clear, itemised price quote."
                  : "Hubungi kontraktor kami terus di WhatsApp. Kongsikan gambar atau pelan lantai untuk sebut harga terperinci."}
              </p>

              <WhatsAppButton
                lang={validLang}
                service={data.title}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 font-bold text-white text-sm shadow transition-all"
              >
                <span>
                  {validLang === "en" ? "WhatsApp Us Now" : "WhatsApp Kami Sekarang"}
                </span>
              </WhatsAppButton>

              <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>{validLang === "en" ? "Phone Call:" : "Telefon:"}</span>
                <a
                  href={`tel:${translations[validLang].nav.callNow}`}
                  className="font-bold text-white hover:text-brand-300 flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-400" />
                  <span>+60 12-345 6789</span>
                </a>
              </div>
            </div>

            {/* Coverage Areas Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3">
                {validLang === "en" ? "Service Area in KL" : "Kawasan Liputan di KL"}
              </h3>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>KLCC & Kuala Lumpur City</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Cheras & Ampang</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Setapak & Wangsa Maju</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Kepong & Mont Kiara</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Bangsar & Bukit Bintang</span>
                </li>
              </ul>
            </div>

            {/* Other Services Navigation */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3">
                {validLang === "en" ? "Other Services in KL" : "Perkhidmatan Lain di KL"}
              </h3>
              <div className="space-y-2">
                {otherServices.map((os) => (
                  <Link
                    key={os.slug}
                    href={`/${validLang}/services/${os.slug}`}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all text-xs font-bold text-slate-800 group"
                  >
                    <span>{os[validLang].title}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-brand-600 group-hover:translate-x-0.5 transition-all" />
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

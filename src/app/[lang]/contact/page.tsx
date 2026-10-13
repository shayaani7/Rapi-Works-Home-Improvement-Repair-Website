import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { site, getBaseUrl } from "@/lib/site";
import { translations, type Lang } from "@/lib/translations";
import QuoteForm from "@/components/QuoteForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  ChevronRight,
  Phone,
  MessageSquareText,
  Clock,
  MapPin,
  Mail,
  ShieldCheck,
  CheckCircle2,
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
      ? "Contact Us & Request a Quote in KL"
      : "Hubungi Kami & Dapatkan Sebut Harga KL";

  const description =
    lang === "en"
      ? "Get in touch with RapiWorks KL for painting, plaster ceiling, plumbing, electrical, and aircond services in Kuala Lumpur. Fast WhatsApp quotes."
      : "Hubungi RapiWorks KL untuk kerja cat rumah, plaster ceiling, baiki paip, elektrik dan aircond di Kuala Lumpur. Sebut harga pantas via WhatsApp.";

  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}/${lang}/contact`,
      languages: {
        en: `${baseUrl}/en/contact`,
        ms: `${baseUrl}/ms/contact`,
      },
    },
  };
}

export default async function ContactPage({ params }: Props) {
  const { lang } = await params;
  if (lang !== "en" && lang !== "ms") notFound();

  const validLang = lang as Lang;
  const t = translations[validLang];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Top Banner */}
      <section className="bg-slate-900 text-white py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs text-slate-400 mb-4"
          >
            <Link href={`/${validLang}`} className="hover:text-white">
              {t.nav.home}
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium">{t.nav.contact}</span>
          </nav>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            {t.contactPage.title}
          </h1>
          <p className="text-base sm:text-lg text-slate-300 mt-4 max-w-2xl leading-relaxed">
            {t.contactPage.description}
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Methods / Sidebar (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* WhatsApp Highlight Box */}
            <div className="bg-emerald-600 rounded-3xl p-8 text-white shadow-xl shadow-emerald-600/20 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                <MessageSquareText className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold">
                {t.contactPage.whatsappHeader}
              </h2>
              <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
                {validLang === "en"
                  ? "WhatsApp is the fastest way to get a quote. Send us your project photos, address or floor plan for immediate review."
                  : "WhatsApp adalah cara terpantas untuk mendapatkan sebut harga. Hantarkan gambar tapak atau pelan lantai anda untuk semakan segera."}
              </p>
              <div className="pt-2">
                <WhatsAppButton
                  lang={validLang}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-white text-emerald-950 font-bold text-sm shadow hover:bg-slate-100 transition-all"
                >
                  <span>
                    {validLang === "en" ? "Chat on WhatsApp" : "Mesej di WhatsApp"}
                  </span>
                </WhatsAppButton>
              </div>
            </div>

            {/* Direct Details Card */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {t.contactPage.phoneHeader}
                  </p>
                  <a
                    href={`tel:${site.whatsappNumber}`}
                    className="text-base font-bold text-slate-900 hover:text-brand-600 transition-colors"
                  >
                    {site.phoneDisplay}
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {validLang === "en"
                      ? "Direct calls & emergency queries"
                      : "Panggilan terus & pertanyaan kecemasan"}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Email
                  </p>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-base font-bold text-slate-900 hover:text-brand-600 transition-colors"
                  >
                    {site.email}
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {validLang === "en"
                      ? "Official tenders & commercial RFQs"
                      : "Sebut harga rasmi & tender premis"}
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {t.contactPage.hoursHeader}
                  </p>
                  <p className="text-sm font-bold text-slate-900">
                    {site.openingHours[validLang]}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {validLang === "en"
                      ? "Work scheduled to fit condo renovation hours"
                      : "Kerja mengikut ketetapan masa pengurusan kondo"}
                  </p>
                </div>
              </div>

              {/* Coverage Location */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {t.contactPage.addressHeader}
                  </p>
                  <p className="text-sm font-bold text-slate-900">
                    {site.city}, {site.country}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    KLCC, Cheras, Setapak, Kepong, Mont Kiara, Ampang, Bangsar
                  </p>
                </div>
              </div>
            </div>

            {/* Trust Points */}
            <div className="bg-slate-100 rounded-3xl p-6 border border-slate-200 text-xs text-slate-700 space-y-2.5">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>
                  {validLang === "en"
                    ? "Free upfront quotations before work starts"
                    : "Sebut harga percuma sebelum kerja bermula"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>
                  {validLang === "en"
                    ? "Compliant with condo management guidelines"
                    : "Mematuhi syarat kerja pengurusan kondominium"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>
                  {validLang === "en"
                    ? "No hidden material markups"
                    : "Tiada caj tersembunyi kos bahan"}
                </span>
              </div>
            </div>
          </div>

          {/* Interactive Quotation Form (7 cols) */}
          <div className="lg:col-span-7">
            <QuoteForm lang={validLang} />
          </div>
        </div>
      </section>
    </div>
  );
}

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { site, getBaseUrl } from "@/lib/site";
import { translations, type Lang } from "@/lib/translations";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  ChevronRight,
  Phone,
  MessageSquareText,
  Clock,
  MapPin,
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

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-3xl bg-emerald-600 text-white p-8 sm:p-10 shadow-xl shadow-emerald-600/20">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-xl">
              <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center mb-4">
                <MessageSquareText className="w-6 h-6" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
                {t.contactPage.whatsappHeader}
              </h2>
              <p className="mt-2 text-sm sm:text-base text-emerald-50 leading-relaxed">
                {validLang === "en"
                  ? "Quotes go straight to WhatsApp. The button opens a chat with 011-2120 6259 so you can send your location, the job, and photos."
                  : "Sebut harga dihantar terus ke WhatsApp. Butang ini membuka chat ke 011-2120 6259 supaya anda boleh hantar lokasi, jenis kerja dan gambar."}
              </p>
            </div>
            <WhatsAppButton
              lang={validLang}
              className="inline-flex items-center justify-center gap-2 shrink-0 px-6 py-4 rounded-xl bg-white text-emerald-950 font-bold text-base shadow hover:bg-emerald-50 transition-all"
            >
              <span>
                {validLang === "en" ? "Message on WhatsApp" : "Mesej di WhatsApp"}
              </span>
            </WhatsAppButton>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href={`tel:${site.phoneTel}`}
            className="flex items-start gap-4 rounded-2xl bg-white border border-slate-200 p-5 shadow-sm hover:border-brand-300 transition-colors"
          >
            <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                {t.contactPage.phoneHeader}
              </p>
              <p className="mt-1 text-lg font-bold text-slate-900">{site.phoneDisplay}</p>
            </div>
          </a>

          <div className="flex items-start gap-4 rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                {t.contactPage.hoursHeader}
              </p>
              <p className="mt-1 text-lg font-bold text-slate-900">
                {site.openingHours[validLang]}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                {t.contactPage.addressHeader}
              </p>
              <p className="mt-1 text-base font-bold text-slate-900 leading-snug">
                {site.address}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                {validLang === "en" ? "Service cities" : "Bandar perkhidmatan"}
              </p>
              <p className="mt-1 text-base font-bold text-slate-900 leading-snug">
                {site.coverageAreas.join(" · ")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

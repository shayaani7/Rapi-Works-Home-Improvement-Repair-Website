import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/projects";
import { translations, type Lang } from "@/lib/translations";
import { getBaseUrl, site } from "@/lib/site";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ChevronRight, MapPin, CheckCircle2, ArrowRight } from "lucide-react";

type Props = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (lang !== "en" && lang !== "ms") return {};

  const baseUrl = getBaseUrl();
  const title =
    lang === "en"
      ? "Our Completed Home Projects in Kuala Lumpur"
      : "Galeri Projek Siap di Kuala Lumpur";

  const description =
    lang === "en"
      ? "Browse photos of completed painting, plaster ceiling, plumbing, electrical, and aircond installation projects across KL."
      : "Lihat hasil kerja mengecat rumah, siling kapur plaster, baiki paip, pendawaian elektrik dan pasang aircond di sekitar KL.";

  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}/${lang}/projects`,
      languages: {
        en: `${baseUrl}/en/projects`,
        ms: `${baseUrl}/ms/projects`,
      },
    },
  };
}

export default async function ProjectsPage({ params }: Props) {
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
            <span className="text-white font-medium">{t.nav.projects}</span>
          </nav>

          <h1 className="text-2xl sm:text-5xl font-black tracking-tight break-words">
            {validLang === "en"
              ? "Completed Home & Commercial Projects in KL"
              : "Hasil Kerja Projek di Sekitar Kuala Lumpur"}
          </h1>
          <p className="text-base sm:text-lg text-slate-300 mt-4 max-w-3xl leading-relaxed">
            {validLang === "en"
              ? "See real examples of our recent painting, modern plaster ceiling, concealed plumbing, electrical wiring, and aircond installations across Kuala Lumpur properties."
              : "Lihat contoh kerja sebenar kami meliputi cat rumah, plaster ceiling moden, baiki paip tersembunyi, pendawaian elektrik dan pemasangan aircond di hartanah Kuala Lumpur."}
          </p>
        </div>
      </section>

      {/* Projects Showcase Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((item) => {
            const data = item[validLang];
            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Project Image */}
                <div className="relative h-64 w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={item.imageUrl}
                    alt={data.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur px-3 py-1.5 rounded-full text-xs font-bold text-white flex items-center gap-1.5 shadow">
                    <MapPin className="w-3.5 h-3.5 text-brand-400" />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-200 inline-block mb-3">
                      {data.clientType}
                    </span>
                    <h2 className="text-lg font-bold text-slate-900 leading-snug mb-3">
                      {data.title}
                    </h2>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {data.description}
                    </p>

                    {/* Highlights list */}
                    <ul className="space-y-1.5 mb-6">
                      {data.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="text-xs text-slate-700 flex items-center gap-2"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <Link
                      href={`/${validLang}/services/${item.serviceSlug}`}
                      className="text-xs font-bold text-slate-700 hover:text-brand-600 inline-flex items-center gap-1"
                    >
                      <span>
                        {validLang === "en" ? "Service Details" : "Maklumat Servis"}
                      </span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>

                    <WhatsAppButton
                      lang={validLang}
                      service={data.title}
                      showIcon={true}
                      className="inline-flex items-center gap-1.5 py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-colors"
                    >
                      <span>{validLang === "en" ? "Enquire Similar" : "Tanya Projek Ini"}</span>
                    </WhatsAppButton>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-gradient-to-r from-brand-900 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl text-center max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black">
            {validLang === "en"
              ? "Have a Specific Project in Kuala Lumpur?"
              : "Mempunyai Projek Khas di Kuala Lumpur?"}
          </h2>
          <p className="text-sm text-slate-300 mt-3 max-w-xl mx-auto leading-relaxed">
            {validLang === "en"
              ? "Send us a WhatsApp with your property photos, floor plans, or measurements for an honest evaluation."
              : "Hantarkan gambar hartanah, pelan susun atur atau anggaran ukuran kepada kami di WhatsApp untuk penilaian telus."}
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <WhatsAppButton
              lang={validLang}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 font-bold text-white text-sm shadow transition-all"
            >
              <span>{t.hero.ctaWhatsApp}</span>
            </WhatsAppButton>
            <a
              href={`tel:${site.phoneTel}`}
              className="inline-flex items-center px-6 py-3.5 rounded-xl bg-white text-slate-900 font-bold text-sm hover:bg-slate-100 transition-all"
            >
              {site.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

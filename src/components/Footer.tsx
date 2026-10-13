import React from "react";
import Link from "next/link";
import { site } from "@/lib/site";
import { translations, type Lang } from "@/lib/translations";
import Logo from "./Logo";
import {
  Phone,
  MessageSquareText,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

interface FooterProps {
  lang: Lang;
}

export default function Footer({ lang }: FooterProps) {
  const t = translations[lang];

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Pre-footer Trust Strip */}
      <div className="border-b border-slate-800/80 bg-slate-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold text-white text-sm">
                  {lang === "en" ? "Licensed & Qualified" : "Tukang Berpengalaman & Bertauliah"}
                </p>
                <p className="text-xs text-slate-400">
                  {lang === "en"
                    ? "Safe, regulation-compliant work across KL"
                    : "Piawaian keselamatan kerja mematuhi peraturan Malaysia"}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-brand-500/10 text-brand-400 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold text-white text-sm">
                  {lang === "en" ? "No Hidden Costs" : "Tiada Caj Tersembunyi"}
                </p>
                <p className="text-xs text-slate-400">
                  {lang === "en"
                    ? "Itemised quotations before any work starts"
                    : "Sebut harga terperinci sebelum kerja bermula"}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent-500/10 text-accent-400 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold text-white text-sm">
                  {lang === "en" ? "Prompt WhatsApp Support" : "Respon Pantas di WhatsApp"}
                </p>
                <p className="text-xs text-slate-400">
                  {lang === "en"
                    ? "Instant replies & fast site booking"
                    : "Maklum balas pantas & lawatan tapak mudah"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href={`/${lang}`} className="inline-flex" aria-label={site.name}>
              <Logo variant="dark" />
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {t.footer.tagline}
            </p>
            <div className="pt-2 flex flex-col gap-2.5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-400 shrink-0" />
                <span>{site.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-400 shrink-0" />
                <span>{site.openingHours[lang]}</span>
              </div>
            </div>
          </div>

          {/* Core Services Links */}
          <div>
            <p className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              {t.footer.ourServices}
            </p>
            <ul className="space-y-2.5 text-sm">
              {site.services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/${lang}/services/${s.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {lang === "en" ? s.titleEn : s.titleMs}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  href={`/${lang}/services`}
                  className="text-xs font-semibold text-brand-400 hover:text-brand-300"
                >
                  {lang === "en" ? "View all services →" : "Lihat semua servis →"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas in KL */}
          <div>
            <p className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              {lang === "en" ? "Cities We Serve" : "Bandar Liputan"}
            </p>
            <ul className="space-y-2 text-sm text-slate-300">
              {site.coverageAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <p className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              {t.footer.contactInfo}
            </p>
            <div className="space-y-3 text-sm">
              <a
                href={`https://wa.me/${site.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <MessageSquareText className="w-4 h-4 shrink-0" />
                <span>WhatsApp: {site.phoneDisplay}</span>
              </a>
              <a
                href={`tel:${site.phoneTel}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-400" />
                <span>{site.phoneDisplay}</span>
              </a>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors text-xs text-slate-400"
              >
                <Mail className="w-4 h-4 text-slate-500" />
                <span>{site.email}</span>
              </a>

              <div className="pt-2">
                <a
                  href={`https://wa.me/${site.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold py-2.5 px-3 shadow transition-all"
                >
                  {t.nav.getQuote}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright and disclaimer */}
        <div className="mt-14 pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {site.name}. {t.footer.copyright}
          </p>
          <p className="max-w-xl text-center md:text-right">
            {t.footer.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}

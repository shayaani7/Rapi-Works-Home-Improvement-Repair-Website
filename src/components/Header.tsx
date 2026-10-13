"use client";

import React, { useState } from "react";
import Link from "next/link";
import { site } from "@/lib/site";
import { translations, type Lang } from "@/lib/translations";
import LanguageSwitcher from "./LanguageSwitcher";
import Logo from "./Logo";
import {
  Wrench,
  Phone,
  Menu,
  X,
  ChevronDown,
  Paintbrush,
  Layers,
  Zap,
  Wind,
  ShieldCheck,
} from "lucide-react";

interface HeaderProps {
  lang: Lang;
}

export default function Header({ lang }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const t = translations[lang];

  const serviceLinks = [
    {
      slug: "painting",
      title: lang === "en" ? "House Painting" : "Servis Cat Rumah",
      desc:
        lang === "en"
          ? "Interior & exterior wall painting, waterproofing"
          : "Mengecat dalaman & luaran, dinding kondo",
      icon: Paintbrush,
    },
    {
      slug: "plaster-ceiling",
      title: lang === "en" ? "Plaster Ceiling" : "Pemasangan Plaster Ceiling",
      desc:
        lang === "en"
          ? "Modern L-box, cove lighting, gypsum board"
          : "Rekaan L-box moden, siling rata kornis",
      icon: Layers,
    },
    {
      slug: "plumbing",
      title: lang === "en" ? "Plumbing Services" : "Servis Paip",
      desc:
        lang === "en"
          ? "Leak repair, tap & sink replacement, pipe rerouting"
          : "Baiki paip bocor dalam dinding, sinki & tandas",
      icon: Wrench,
    },
    {
      slug: "electrical",
      title: lang === "en" ? "Electrical Services" : "Servis Elektrik",
      desc:
        lang === "en"
          ? "Downlights, fans, sockets & DB troubleshooting"
          : "Pasang lampu, kipas siling, soket & baiki trip",
      icon: Zap,
    },
    {
      slug: "aircond-installation",
      title: lang === "en" ? "Aircond Installation" : "Pemasangan Aircond",
      desc:
        lang === "en"
          ? "Split units, copper piping, condo ledge mounting"
          : "Unit split inverter, paip tembaga, salur air",
      icon: Wind,
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200 overflow-x-hidden">
      {/* Top micro bar for phone & trust */}
      <div className="hidden lg:flex items-center justify-between gap-8 bg-slate-900 text-slate-300 text-[13px] h-10 px-5">
        <div className="flex items-center gap-2.5 min-w-0">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span className="truncate tracking-wide">
            Kuala Lumpur · Selangor · Putrajaya · Cyberjaya
          </span>
        </div>
        <div className="flex items-center gap-5 shrink-0">
          <a
            href={`tel:${site.phoneTel}`}
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-brand-400" />
            <span>{site.phoneDisplay}</span>
          </a>
          <span className="text-slate-600">|</span>
          <span>{site.openingHoursShort[lang]}</span>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="flex items-center h-[64px] sm:h-[76px] px-3 sm:px-5 gap-2 sm:gap-6 min-w-0">
          {/* Brand Logo — pinned to the left edge */}
          <Link
            href={`/${lang}`}
            className="min-w-0 shrink group"
            aria-label={site.name}
          >
            <Logo
              tagline={
                lang === "en"
                  ? "Home Improvement & Repair"
                  : "Servis Renovasi & Pembaikan"
              }
              showTagline
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex flex-1 items-center justify-center gap-8" aria-label="Primary Navigation">
            <Link
              href={`/${lang}`}
              className="text-sm font-semibold text-slate-700 hover:text-brand-600 transition-colors"
            >
              {t.nav.home}
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <Link
                href={`/${lang}/services`}
                className="flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-brand-600 transition-colors py-2"
              >
                <span>{t.nav.services}</span>
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-brand-600 transition-transform" />
              </Link>

              {servicesDropdownOpen && (
                <div className="absolute top-full -left-20 w-[420px] bg-white rounded-2xl shadow-xl border border-slate-100 p-3 grid gap-1.5 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-1.5 border-b border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      {lang === "en" ? "5 Core Services" : "5 Perkhidmatan Utama"}
                    </span>
                    <Link
                      href={`/${lang}/services`}
                      className="text-xs font-semibold text-brand-600 hover:text-brand-700"
                    >
                      {lang === "en" ? "View all →" : "Lihat semua →"}
                    </Link>
                  </div>
                  {serviceLinks.map((s) => {
                    const Icon = s.icon;
                    return (
                      <Link
                        key={s.slug}
                        href={`/${lang}/services/${s.slug}`}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                        onClick={() => setServicesDropdownOpen(false)}
                      >
                        <div className="w-9 h-9 rounded-lg bg-brand-50 text-brand-700 flex items-center justify-center shrink-0 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-900 group-hover:text-brand-700">
                            {s.title}
                          </p>
                          <p className="text-xs text-slate-500 leading-snug">
                            {s.desc}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <Link
              href={`/${lang}/projects`}
              className="text-sm font-semibold text-slate-700 hover:text-brand-600 transition-colors"
            >
              {t.nav.projects}
            </Link>

            <Link
              href={`/${lang}/contact`}
              className="text-sm font-semibold text-slate-700 hover:text-brand-600 transition-colors"
            >
              {t.nav.contact}
            </Link>
          </nav>

          {/* Right Header Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher currentLang={lang} />

            <a
              href={`tel:${site.phoneTel}`}
              className="flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-brand-600 px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors whitespace-nowrap"
              aria-label="Call RapiWorks KL"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>{site.phoneDisplay}</span>
            </a>

            <a
              href={`https://wa.me/${site.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-emerald-600 hover:bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:shadow active:scale-[0.98] transition-all whitespace-nowrap"
            >
              {t.nav.getQuote}
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="ml-auto flex lg:hidden items-center gap-1.5 shrink-0">
            <LanguageSwitcher currentLang={lang} />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-3 duration-200">
          <nav className="flex flex-col gap-1">
            <Link
              href={`/${lang}`}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50"
            >
              {t.nav.home}
            </Link>

            <div className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-400">
              {t.nav.services}
            </div>
            {serviceLinks.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.slug}
                  href={`/${lang}/services/${s.slug}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50"
                >
                  <Icon className="w-4 h-4 text-brand-600" />
                  <span>{s.title}</span>
                </Link>
              );
            })}

            <Link
              href={`/${lang}/projects`}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50 mt-1"
            >
              {t.nav.projects}
            </Link>

            <Link
              href={`/${lang}/contact`}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50"
            >
              {t.nav.contact}
            </Link>

            <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href={`tel:${site.phoneTel}`}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-slate-200 font-semibold text-slate-800 hover:bg-slate-50"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>{t.nav.callNow}: {site.phoneDisplay}</span>
              </a>

              <a
                href={`https://wa.me/${site.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full py-3 rounded-xl bg-emerald-600 text-white font-semibold shadow hover:bg-emerald-700"
              >
                {t.nav.getQuote}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

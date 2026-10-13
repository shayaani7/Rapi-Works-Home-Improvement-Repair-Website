"use client";

import React from "react";
import { site } from "@/lib/site";
import type { Lang } from "@/lib/translations";
import { Phone, MessageSquareText } from "lucide-react";

interface MobileCallBarProps {
  lang: Lang;
  service?: string;
}

export default function MobileCallBar({ lang, service }: MobileCallBarProps) {
  const message =
    lang === "en"
      ? `Hi RapiWorks KL, I would like to request a quotation for ${
          service || "home services"
        } in Kuala Lumpur.`
      : `Hai RapiWorks KL, saya ingin mendapatkan sebut harga untuk ${
          service || "servis pembaikan rumah"
        } di Kuala Lumpur.`;

  const waHref = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <>
      {/* Mobile Fixed Bottom CTA Bar (Only visible on small screens < md) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur border-t border-slate-200 p-2.5 px-4 shadow-2xl flex items-center gap-3">
        <a
          href={`tel:${site.phoneTel}`}
          className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-slate-900 text-white font-bold text-sm shadow active:scale-95 transition-all"
          aria-label="Call RapiWorks KL"
        >
          <Phone className="w-4 h-4 text-brand-400" />
          <span>{lang === "en" ? "Call" : "Telefon"}</span>
        </a>

        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[2] flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 text-white font-bold text-sm shadow-md active:scale-95 transition-all"
          aria-label="WhatsApp RapiWorks KL"
        >
          <MessageSquareText className="w-4 h-4" />
          <span>{lang === "en" ? "WhatsApp Quote" : "WhatsApp Sebut Harga"}</span>
        </a>
      </div>

      {/* Desktop Floating WhatsApp Quick Button (Bottom Right) */}
      <aside aria-label="Floating WhatsApp contact" className="hidden md:block fixed bottom-6 right-6 z-40">
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white pl-4 pr-5 py-3.5 rounded-full shadow-2xl hover:shadow-emerald-600/40 active:scale-95 transition-all"
          aria-label="Chat with RapiWorks KL on WhatsApp"
        >
          <div className="relative">
            <MessageSquareText className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-300 rounded-full animate-ping" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-300 rounded-full" />
          </div>
          <div className="text-left">
            <p className="text-[11px] font-medium leading-none text-emerald-100">
              {lang === "en" ? "Fast Response" : "Respon Pantas"}
            </p>
            <p className="text-sm font-bold leading-tight">
              {lang === "en" ? "WhatsApp Us" : "WhatsApp Kami"}
            </p>
          </div>
        </a>
      </aside>
    </>
  );
}

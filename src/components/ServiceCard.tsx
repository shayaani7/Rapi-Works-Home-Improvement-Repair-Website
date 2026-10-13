import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Lang } from "@/lib/translations";
import type { ServiceData } from "@/lib/services";
import WhatsAppButton from "./WhatsAppButton";
import {
  Paintbrush,
  Layers,
  Wrench,
  Zap,
  Wind,
  ArrowRight,
  Check,
} from "lucide-react";

const iconMap = {
  Paintbrush,
  Layers,
  Wrench,
  Zap,
  Wind,
};

interface ServiceCardProps {
  service: ServiceData;
  lang: Lang;
}

export default function ServiceCard({ service, lang }: ServiceCardProps) {
  const data = service[lang];
  const IconComponent =
    iconMap[service.iconName as keyof typeof iconMap] || Wrench;

  return (
    <article className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-brand-300 transition-all duration-300 flex flex-col">
      {/* Card Image Banner */}
      <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
        <Image
          src={service.imageUrl}
          alt={data.heading}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
        <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/95 backdrop-blur text-brand-700 flex items-center justify-center shadow-md">
          <IconComponent className="w-5 h-5" />
        </div>
        <div className="absolute bottom-3 left-4 right-4">
          <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300">
            Kuala Lumpur
          </span>
          <h3 className="text-lg font-bold text-white leading-snug drop-shadow-sm">
            {data.title}
          </h3>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <p className="text-sm text-slate-600 line-clamp-3 mb-4 leading-relaxed">
            {data.overview}
          </p>

          {/* Quick Scope bullets */}
          <ul className="space-y-1.5 mb-6">
            {data.scope.slice(0, 3).map((item, idx) => (
              <li
                key={idx}
                className="text-xs text-slate-700 flex items-start gap-2"
              >
                <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                <span className="line-clamp-1">{item.title}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
          <Link
            href={`/${lang}/services/${service.slug}`}
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors"
          >
            <span>{lang === "en" ? "Explore Service" : "Ketahui Lanjut"}</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
          </Link>

          <WhatsAppButton
            lang={lang}
            service={data.title}
            showIcon={true}
            className="inline-flex items-center justify-center p-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm transition-colors text-xs font-bold"
          >
            <span className="hidden sm:inline">WhatsApp</span>
          </WhatsAppButton>
        </div>
      </div>
    </article>
  );
}

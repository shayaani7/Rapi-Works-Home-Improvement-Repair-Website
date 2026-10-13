"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Lang } from "@/lib/translations";
import { Globe } from "lucide-react";

interface LanguageSwitcherProps {
  currentLang: Lang;
  className?: string;
}

export default function LanguageSwitcher({
  currentLang,
  className = "",
}: LanguageSwitcherProps) {
  const pathname = usePathname() || `/${currentLang}`;

  // Helper to replace the lang prefix in the current pathname while preserving subpaths
  const getLocalizedPath = (targetLang: Lang) => {
    // If the path starts with /en or /ms, replace it
    if (pathname.startsWith("/en")) {
      return pathname.replace(/^\/en/, `/${targetLang}`);
    }
    if (pathname.startsWith("/ms")) {
      return pathname.replace(/^\/ms/, `/${targetLang}`);
    }
    return `/${targetLang}`;
  };

  return (
    <div
      className={`inline-flex items-center gap-0.5 sm:gap-1.5 p-0.5 sm:p-1 rounded-full bg-slate-100 border border-slate-200 text-[11px] sm:text-xs font-semibold shrink-0 ${className}`}
      aria-label="Language selector"
    >
      <Globe className="hidden sm:block w-3.5 h-3.5 ml-1 text-slate-500" />
      <Link
        href={getLocalizedPath("en")}
        className={`px-2 sm:px-2.5 py-1 rounded-full transition-colors ${
          currentLang === "en"
            ? "bg-white text-brand-900 shadow-sm font-bold"
            : "text-slate-600 hover:text-slate-900"
        }`}
        aria-current={currentLang === "en" ? "page" : undefined}
      >
        EN
      </Link>
      <span className="text-slate-300">|</span>
      <Link
        href={getLocalizedPath("ms")}
        className={`px-2 sm:px-2.5 py-1 rounded-full transition-colors ${
          currentLang === "ms"
            ? "bg-white text-brand-900 shadow-sm font-bold"
            : "text-slate-600 hover:text-slate-900"
        }`}
        aria-current={currentLang === "ms" ? "page" : undefined}
      >
        BM
      </Link>
    </div>
  );
}

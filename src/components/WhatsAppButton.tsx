"use client";

import React from "react";
import { site } from "@/lib/site";
import type { Lang } from "@/lib/translations";
import { MessageSquareText } from "lucide-react";

interface WhatsAppButtonProps {
  lang: Lang;
  service?: string;
  className?: string;
  children?: React.ReactNode;
  showIcon?: boolean;
  location?: string;
  propertyType?: string;
}

export default function WhatsAppButton({
  lang,
  service,
  className = "",
  children,
  showIcon = true,
  location,
  propertyType,
}: WhatsAppButtonProps) {
  // Construct structured enquiry message matching the conversion template in prompt
  let message: string;
  if (lang === "en") {
    message = `Hi RapiWorks KL, I found your website and would like to request a quotation.

Service needed: ${service || "Home Improvement / Repair"}
Location: ${location || "Kuala Lumpur"}
${propertyType ? `Property type: ${propertyType}\n` : ""}
I can share photos of the work if needed. Thank you.`;
  } else {
    message = `Hai RapiWorks KL, saya menemui laman web anda dan ingin mendapatkan sebut harga.

Perkhidmatan diperlukan: ${service || "Renovasi / Pembaikan Rumah"}
Lokasi: ${location || "Kuala Lumpur"}
${propertyType ? `Jenis hartanah: ${propertyType}\n` : ""}
Saya boleh kongsikan gambar jika diperlukan. Terima kasih.`;
  }

  const href = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  const defaultText =
    lang === "en" ? "WhatsApp for Quote" : "WhatsApp Sebut Harga";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={
        lang === "en"
          ? "Contact RapiWorks KL on WhatsApp"
          : "Hubungi RapiWorks KL melalui WhatsApp"
      }
      className={
        className ||
        "inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 font-semibold text-white shadow-md hover:bg-emerald-700 active:scale-[0.98] transition-all"
      }
    >
      {showIcon && <MessageSquareText className="w-5 h-5" />}
      <span>{children || defaultText}</span>
    </a>
  );
}

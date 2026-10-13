"use client";

import React, { useState } from "react";
import { site } from "@/lib/site";
import { translations, type Lang } from "@/lib/translations";
import { MessageSquareText, CheckCircle2, ArrowRight } from "lucide-react";

interface QuoteFormProps {
  lang: Lang;
  initialService?: string;
}

export default function QuoteForm({ lang, initialService }: QuoteFormProps) {
  const t = translations[lang].quoteForm;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: initialService || "",
    propertyType: "",
    location: "",
    date: "",
    message: "",
  });

  const [submittedDirectly, setSubmittedDirectly] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let text: string;
    if (lang === "en") {
      text = `Hi RapiWorks KL, I would like to request a quotation.

Name: ${formData.name || "Customer"}
Phone: ${formData.phone || "Not provided"}
Service needed: ${formData.service || "General Home Improvement"}
Location in KL: ${formData.location || "Kuala Lumpur"}
Property type: ${formData.propertyType || "Residential/Commercial"}
Preferred start date: ${formData.date || "As soon as possible"}

Project Details:
${formData.message || "Please contact me to discuss."}

I can share photos of the work if needed. Thank you.`;
    } else {
      text = `Hai RapiWorks KL, saya ingin mendapatkan sebut harga.

Nama: ${formData.name || "Pelanggan"}
Telefon: ${formData.phone || "Tiada"}
Perkhidmatan: ${formData.service || "Renovasi / Pembaikan Rumah"}
Lokasi di KL: ${formData.location || "Kuala Lumpur"}
Jenis hartanah: ${formData.propertyType || "Kediaman / Komersial"}
Tarikh jangka mula: ${formData.date || "Secepat mungkin"}

Keterangan Projek:
${formData.message || "Sila hubungi saya untuk perbincangan lanjut."}

Saya boleh kongsikan gambar jika diperlukan. Terima kasih.`;
    }

    const waUrl = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
      text
    )}`;
    window.open(waUrl, "_blank");
  };

  const handleDirectSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert(
        lang === "en"
          ? "Please provide your name and phone number."
          : "Sila masukkan nama dan nombor telefon anda."
      );
      return;
    }
    setSubmittedDirectly(true);
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xl shadow-slate-100">
      <div className="max-w-xl mx-auto mb-8 text-center">
        <h3 className="text-2xl font-bold text-slate-900">{t.title}</h3>
        <p className="text-sm text-slate-600 mt-2">{t.subtitle}</p>
      </div>

      {submittedDirectly ? (
        <div className="p-8 text-center bg-emerald-50 rounded-2xl border border-emerald-200">
          <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
          <h4 className="text-lg font-bold text-emerald-950">
            {lang === "en" ? "Quotation Request Received!" : "Permintaan Diterima!"}
          </h4>
          <p className="text-sm text-emerald-800 mt-2">{t.successMessage}</p>
          <p className="text-xs text-emerald-700 mt-4">
            {lang === "en"
              ? "For immediate response, click below to open WhatsApp directly:"
              : "Untuk maklum balas segera, klik di bawah untuk membuka WhatsApp terus:"}
          </p>
          <button
            onClick={handleWhatsAppSubmit}
            className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white font-bold rounded-xl shadow hover:bg-emerald-700 transition-colors text-sm"
          >
            <MessageSquareText className="w-4 h-4" />
            <span>{t.submitButton}</span>
          </button>
        </div>
      ) : (
        <form onSubmit={handleWhatsAppSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
              >
                {t.nameLabel} *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder={t.namePlaceholder}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none text-sm transition-all"
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
              >
                {t.phoneLabel} *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder={t.phonePlaceholder}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none text-sm transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Service Select */}
            <div>
              <label
                htmlFor="service"
                className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
              >
                {t.serviceLabel} *
              </label>
              <select
                id="service"
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none text-sm transition-all bg-white"
              >
                <option value="">{t.serviceSelectPrompt}</option>
                {site.services.map((s) => (
                  <option key={s.slug} value={s.slug}>
                    {lang === "en" ? s.titleEn : s.titleMs}
                  </option>
                ))}
                <option value="multiple">
                  {lang === "en"
                    ? "Multiple Services / Full Renovation"
                    : "Pelbagai Servis / Pakej Renovasi"}
                </option>
              </select>
            </div>

            {/* Property Type */}
            <div>
              <label
                htmlFor="propertyType"
                className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
              >
                {t.propertyLabel}
              </label>
              <select
                id="propertyType"
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none text-sm transition-all bg-white"
              >
                <option value="">{t.propertySelectPrompt}</option>
                <option value="Condominium">{t.properties.condo}</option>
                <option value="Landed House">{t.properties.landed}</option>
                <option value="Office">{t.properties.office}</option>
                <option value="Shoplot">{t.properties.shoplot}</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Location in KL */}
            <div>
              <label
                htmlFor="location"
                className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
              >
                {t.locationLabel}
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder={t.locationPlaceholder}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none text-sm transition-all"
              />
            </div>

            {/* Date */}
            <div>
              <label
                htmlFor="date"
                className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
              >
                {t.dateLabel}
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none text-sm transition-all"
              />
            </div>
          </div>

          {/* Message / Details */}
          <div>
            <label
              htmlFor="message"
              className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
            >
              {t.messageLabel}
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder={t.messagePlaceholder}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none text-sm transition-all"
            />
          </div>

          {/* Submit Actions */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base shadow-lg shadow-emerald-600/20 active:scale-[0.99] transition-all"
            >
              <MessageSquareText className="w-5 h-5" />
              <span>{t.submitButton}</span>
            </button>

            <button
              type="button"
              onClick={handleDirectSubmit}
              className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm transition-all"
            >
              <span>{t.submitButtonDirect}</span>
              <ArrowRight className="w-4 h-4 text-slate-500" />
            </button>
          </div>

          <p className="text-center text-xs text-slate-500 pt-1">
            {t.whatsappHint}
          </p>
        </form>
      )}
    </div>
  );
}

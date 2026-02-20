"use client";

import { useState, useEffect, type ChangeEvent, type FormEvent, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { WHATSAPP_NUMBER, allCountries } from "@/data/site";

function ContactFormContent() {
  const searchParams = useSearchParams();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    country: "",
    message: ""
  });

  useEffect(() => {
    const countryParam = searchParams.get("country");
    if (countryParam) {
      setForm((prev) => ({ ...prev, country: countryParam }));
    }
  }, [searchParams]);

  const onChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formatted = [
      "New Consultation Inquiry",
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Interested Country: ${form.country}`,
      `Message: ${form.message}`
    ].join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(formatted)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <form
      onSubmit={onSubmit}
      className="relative overflow-hidden rounded-2xl border-t-4 border-brand-500 bg-white p-6 shadow-xl sm:p-8"
      aria-label="Consultation contact form"
    >
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-slate-900">Get Free Consultation</h3>
        <p className="mt-2 text-sm text-slate-600">Fill the form to connect on WhatsApp.</p>
        <div className="mt-5 grid gap-3">
          <div className="grid grid-cols-2 gap-3">
            <Input label="Name" name="name" type="text" value={form.name} onChange={onChange} required />
            <Input label="Phone" name="phone" type="tel" value={form.phone} onChange={onChange} required />
          </div>
          <Input label="Email" name="email" type="email" value={form.email} onChange={onChange} required />

          <label className="grid gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Interested Country
            <div className="relative">
              <select
                name="country"
                value={form.country}
                onChange={onChange}
                required
                className="w-full appearance-none rounded-lg border border-slate-200 bg-white/50 px-3 py-2 text-sm text-slate-800 outline-none ring-brand-500/20 transition focus:border-brand-500 focus:bg-white focus:ring-4"
              >
                <option value="" disabled>Select a country</option>
                {allCountries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
                <option value="Other">Other</option>
              </select>
              <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
              </div>
            </div>
          </label>
          <label className="grid gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Message
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              required
              rows={2}
              className="w-full rounded-lg border border-slate-200 bg-white/50 px-3 py-2 text-sm text-slate-800 outline-none ring-brand-500/20 transition focus:border-brand-500 focus:bg-white focus:ring-4"
            />
          </label>
        </div>
        <button
          type="submit"
          className="mt-5 w-full rounded-lg bg-gradient-to-r from-brand-600 to-brand-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-brand-500/30 transition hover:from-brand-700 hover:to-brand-600 focus:outline-none focus:ring-4 focus:ring-brand-200 active:scale-[0.98]"
        >
          Send Request
        </button>
      </div>
    </form>
  );
}

export function ContactForm() {
  return (
    <Suspense fallback={<div className="h-96 w-full animate-pulse rounded-2xl bg-white/20" />}>
      <ContactFormContent />
    </Suspense>
  );
}

type InputProps = {
  label: string;
  name: string;
  type: "text" | "email" | "tel";
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
};

function Input({ label, name, type, value, onChange, required }: InputProps) {
  return (
    <label className="grid gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-500">
      {label}
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-lg border border-slate-200 bg-white/50 px-3 py-2 text-sm text-slate-800 outline-none ring-brand-500/20 transition focus:border-brand-500 focus:bg-white focus:ring-4"
      />
    </label>
  );
}

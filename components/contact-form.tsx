"use client";

import { useState, useEffect, type ChangeEvent, type FormEvent, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Sparkles, Send, MessageSquare, Globe, User, Phone, Mail, GraduationCap, Percent } from "lucide-react";
import { allCountries } from "@/data/site";
import { getWhatsAppLink, formatWhatsAppMessage } from "@/lib/whatsapp";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";

function ContactFormContent({ variant = "default" }: { variant?: "default" | "plain" }) {
  const isPlain = variant === "plain";
  const searchParams = useSearchParams();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    country: "",
    service: "",
    qualification: "",
    percentage: "",
    message: ""
  });

  useEffect(() => {
    const countryParam = searchParams.get("country");
    const serviceParam = searchParams.get("service");

    if (countryParam || serviceParam) {
      setForm((prev) => ({
        ...prev,
        country: countryParam || prev.country,
        service: serviceParam || prev.service
      }));
    }
  }, [searchParams]);

  const onChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formatted = formatWhatsAppMessage(form);
    const url = getWhatsAppLink(formatted);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.form
      onSubmit={onSubmit}
      initial={isPlain ? { opacity: 0 } : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={
        isPlain
          ? "relative flex flex-col gap-6"
          : "relative overflow-hidden rounded-3xl border border-white/40 bg-white/40 p-6 shadow-2xl backdrop-blur-2xl ring-1 ring-white/20 sm:p-8"
      }
      aria-label="Consultation contact form"
    >
      {/* Premium Inner Glow */}
      {!isPlain && (
        <div className="absolute -inset-[100%] z-0 bg-gradient-to-tr from-brand-500/5 via-transparent to-blue-500/5 animate-slow-pulse" />
      )}

      <div className="relative z-10 flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <h3 className="text-3xl font-black tracking-tight text-slate-900">
            Get Started <span className="text-brand-600">Today</span>
          </h3>
          <p className="text-sm font-medium text-slate-500 leading-relaxed">
            Fill the form below and our experts will reach out on WhatsApp.
          </p>
        </div>

        <div className="grid gap-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Input icon={User} label="Full Name" name="name" type="text" placeholder="John Doe" value={form.name} onChange={onChange} required />
            <Input icon={Phone} label="Phone Number" name="phone" type="tel" placeholder="+91 ..." value={form.phone} onChange={onChange} required />
          </div>

          <Input icon={Mail} label="Email Address" name="email" type="email" placeholder="john@example.com" value={form.email} onChange={onChange} required />

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <Select
              icon={MessageSquare}
              label="Service"
              name="service"
              value={form.service}
              onChange={onChange}
              required
              placeholder="Select a service"
              options={[
                "Study Abroad Consultation",
                "Visa Assistance",
                "Career Guidance",
                "University Admission Help",
                "Immigration Support",
                "Scholarship Guidance",
                "Other"
              ]}
            />
            <Select
              icon={Globe}
              label="Destination"
              name="country"
              value={form.country}
              onChange={onChange}
              required
              placeholder="Select a country"
              options={[...allCountries, "Other"]}
            />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Select
              icon={GraduationCap}
              label="Qualification"
              name="qualification"
              value={form.qualification}
              onChange={onChange}
              required
              placeholder="Select Qualification"
              options={[
                "10th Standard",
                "12th Standard",
                "Undergraduate",
                "Postgraduate",
                "Diploma",
                "Others"
              ]}
            />
            <Input icon={Percent} label="Percentage" name="percentage" type="text" placeholder="e.g. 85" value={form.percentage} onChange={onChange} required />
          </div>

          <label className="grid gap-1.5 text-xs font-bold uppercase tracking-widest text-slate-500">
            <span className="flex items-center gap-1.5">
              <MessageSquare className="h-3.5 w-3.5 text-brand-600" />
              Additional Message
            </span>
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              required
              placeholder="Tell us more about your goals..."
              rows={3}
              className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-4 text-sm font-semibold text-slate-800 outline-none ring-brand-500/10 transition-all hover:bg-white focus:border-brand-500 focus:bg-white focus:ring-4 placeholder:font-normal placeholder:text-slate-300"
            />
          </label>
        </div>

        <button
          type="submit"
          className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-slate-900 py-5 text-sm font-bold text-white shadow-xl transition-all hover:bg-brand-600 active:scale-[0.98] mt-4"
        >
          <div className="absolute inset-x-0 -top-full h-full bg-gradient-to-b from-white/20 to-transparent transition-all group-hover:top-0" />
          <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          Submit for Free Consultation
        </button>
      </div>

      {!isPlain && (
        <div className="absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-brand-500/10 blur-3xl" />
      )}
    </motion.form>
  );
}

export function ContactForm({ variant = "default" }: { variant?: "default" | "plain" }) {
  return (
    <Suspense fallback={<div className="h-96 w-full animate-pulse rounded-2xl bg-white/20" />}>
      <ContactFormContent variant={variant} />
    </Suspense>
  );
}

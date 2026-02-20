"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, ArrowRight, Plane, GraduationCap, Globe, Hexagon } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { WHATSAPP_NUMBER } from "@/data/site";

export function HeroSection() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello, I would like to book a free consultation."
  )}`;

  return (
    <section className="relative overflow-hidden pb-12 pt-32 lg:pb-20 lg:pt-40 min-h-[90vh] flex items-center">
      <div className="absolute inset-0 z-0 bg-grid-pattern opacity-[0.4]" />


      <div className="container-shell relative z-10 grid gap-12 lg:grid-cols-12 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative lg:col-span-6"
        >
          <div className="relative z-10 pt-8 lg:pt-0">
            {/* Nav space compensated - Branding moved to Navbar */}

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6 flex items-center gap-3"
            >

            </motion.div>

            <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="text-gradient block">Global Education</span>
              Made Simple.
            </h1>

            <p className="mt-6 max-w-lg text-base sm:text-lg text-slate-600 leading-relaxed">
              Expert guidance for university admissions, visa filing, and relocation. We turn your study abroad dreams into reality.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="tel:+919999999999"
                className="group relative inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-bold text-white shadow-xl shadow-brand-500/30 transition-all hover:bg-brand-700 hover:shadow-brand-500/50 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-brand-200 overflow-hidden"
              >
                <div className="absolute inset-0 rounded-full ring-2 ring-white/20 group-hover:ring-white/40 active:scale-95 transition-all" />
                <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-white"></span>
                </span>
                <span className="relative">Call Now</span>
              </a>
              <Link
                href="#services"
                className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-bold text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:border-slate-300 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-slate-100"
              >
                Explore Services
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          id="contact-form"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-6 relative flex items-center justify-end lg:mt-0"
        >
          {/* Floating animated icons */}
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-12 -right-8 z-0 text-brand-200 hidden lg:block"
          >
            <Plane size={120} strokeWidth={1} />
          </motion.div>

          <motion.div
            animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-1/2 -left-12 z-0 text-black hidden lg:block"
          >
            <GraduationCap size={140} strokeWidth={1} />
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute -bottom-8 right-12 z-0 text-slate-100 hidden lg:block"
          >
            <Globe size={100} strokeWidth={1} />
          </motion.div>

          {/* Form Container with Backdrop */}
          <div className="relative w-full max-w-md">
            <div className="absolute -inset-4 rounded-3xl bg-white/40 blur-xl -z-10" />
            <ContactForm />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

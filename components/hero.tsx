"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, ArrowRight, GraduationCap, Globe, Hexagon } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";

export function HeroSection() {
  const whatsappLink = getWhatsAppLink("Hello, I would like to book a free consultation.");

  return (
    <section className="relative min-h-[90vh] lg:h-screen flex items-end lg:items-center overflow-hidden bg-slate-900">
      {/* Cinematic Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_bg.webp"
          alt="Global Education Background"
          fill
          className="object-cover opacity-60"
          priority
        />
        {/* Professional Overlays for Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-slate-900/20 backdrop-blur-[2px] z-10" />

        {/* Brand Glow Blobs for Depth */}
        <div className="glow-blob -top-24 -left-24 bg-brand-500 opacity-20 z-20" />
        <div className="glow-blob -bottom-24 -right-24 bg-orange-500 opacity-10 z-20" />
        <div className="absolute inset-0 bg-dot-pattern opacity-[0.07] z-20" />
      </div>

      <div className="container-shell relative z-30 pt-32 lg:pt-48 pb-20 lg:pb-12">
        <div className="max-w-3xl">


          {/* Headline - Viewport Corrected */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="will-change-gpu"
          >
            <h1 className="text-3xl font-black leading-[1.1] tracking-tight text-white sm:text-5xl xl:text-6xl">
              Global <span className="text-brand-500">Education</span> <br />
              Made Simple.
            </h1>

            <p className="mt-6 text-base lg:text-lg text-slate-300 leading-relaxed font-medium max-w-xl">
              Expert guidance for university admissions, visa filing, and relocation. We turn your study abroad dreams into reality with personalized care and global expertise.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href={whatsappLink}
                target="_blank"
                className="group relative inline-flex items-center gap-3 rounded-xl bg-brand-500 px-6 py-3.5 sm:px-8 sm:py-4 text-xs sm:text-sm font-bold text-white shadow-2xl transition-all hover:bg-brand-600 hover:-translate-y-1 active:scale-[0.98] overflow-hidden"
              >
                <div className="absolute inset-x-0 -top-full h-full bg-white/20 transition-all group-hover:top-0" />
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span className="hidden sm:inline">Book Free Consultation</span>
                <span className="sm:hidden">Book Now</span>
              </Link>

              <Link
                href="#countries"
                className="group inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 backdrop-blur-md px-6 py-3.5 sm:px-8 sm:py-4 text-xs sm:text-sm font-bold text-white shadow-sm transition-all hover:bg-white/10 hover:border-white/40"
              >
                <span className="hidden sm:inline">Explore Destinations</span>
                <span className="sm:hidden">Explore</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Quick Stats - Repositioned & Optimized */}
            <div className="mt-12 hidden lg:flex flex-wrap items-center gap-8 lg:gap-12">
              {[
                { label: "Success Stories", value: "5000+", icon: Hexagon },
                { label: "Destinations", value: "20+", icon: Globe },
                { label: "Expert Counselors", value: "50+", icon: GraduationCap },
              ].map((stat, idx) => {
                const StatIcon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + idx * 0.1 }}
                    className="flex items-center gap-4 will-change-gpu"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-brand-400 backdrop-blur-md">
                      <StatIcon className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-2xl font-black text-white">{stat.value}</div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{stat.label}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

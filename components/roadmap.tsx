"use client";

import { motion } from "framer-motion";
import { roadmap } from "@/data/site";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Section } from "@/components/ui/section";

export function RoadmapSection() {
  return (
    <Section id="roadmap">
      {/* Decorative background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-100/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 border border-brand-100/10 rounded-full scale-125" />
      </div>

      <div className="container-shell relative z-10 py-2">
        <SectionHeading
          title="Your Journey in"
          highlight="6 Clear Steps"
          description="A transparent roadmap that keeps your application and visa preparation on track."
          className="mb-16"
        />

        {/* Balanced Grid for 6 Steps (3x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roadmap.map((step, index) => (
            <Reveal key={step} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                className="glass-premium group flex h-full flex-col p-8 border border-brand-100 transition-all hover:shadow-premium will-change-gpu"
              >
                {/* Step Number Badge with Arrow Motif */}
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-brand-600 shadow-lg ring-1 ring-slate-100 transition-all duration-300 group-hover:bg-brand-600 group-hover:text-white mb-8 text-xl font-black italic">
                  <span>{index + 1}</span>
                  <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-white group-hover:bg-brand-600 rotate-45 transition-colors shadow-[2px_-2px_4px_rgba(0,0,0,0.02)]" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                  {step}
                </h3>
                <p className="mt-4 text-slate-600 leading-relaxed group-hover:text-slate-700">
                  {/* Step descriptions could be added to data/site.ts later, for now we match the Why Choose layout */}
                  Professional handling of your {step.toLowerCase()} to ensure compliance and success.
                </p>

                {/* Progress & Arrow Indicator */}
                <div className="mt-auto pt-8 flex items-center justify-between gap-4">
                  <div className="h-1.5 flex-1 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className="h-full bg-brand-500"
                    />
                  </div>

                  {index < roadmap.length - 1 ? (
                    <div className="flex items-center gap-1 text-brand-600 transition-transform group-hover:translate-x-1">
                      <span className="text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Next Step</span>
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  ) : (
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                      <ChevronRight className="h-4 w-4" />
                    </div>
                  )}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

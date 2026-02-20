"use client";

import { motion } from "framer-motion";
import { roadmap } from "@/data/site";
import { Reveal } from "@/components/ui/reveal";
import { ArrowRight, ChevronRight } from "lucide-react";

export function RoadmapSection() {
  return (
    <section id="roadmap" className="relative py-10 sm:py-12 overflow-hidden">
      {/* Decorative background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-100/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 border border-brand-100/10 rounded-full scale-125" />
      </div>

      <div className="container-shell relative z-10">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center mb-16">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.05 } }
              }}
              className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
            >
              {Array.from("Your Journey in ").map((char, i) => (char === " " ? " " : (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              )))}
              <span className="text-gradient">
                {Array.from("6 Clear Steps").map((char, i) => (char === " " ? " " : (
                  <motion.span
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                )))}
              </span>
            </motion.h2>

            <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-slate-600 leading-relaxed">
              A transparent roadmap that keeps your application and visa preparation on track.
            </p>
          </div>
        </Reveal>

        {/* Balanced Grid for 6 Steps (3x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roadmap.map((step, index) => (
            <Reveal key={step} delay={index * 0.1}>
              <motion.article
                whileHover={{ y: -8 }}
                className="group relative h-full flex flex-col p-8 rounded-3xl bg-white shadow-sm ring-1 ring-slate-200/60 transition-all hover:shadow-2xl hover:ring-brand-500/20"
              >
                {/* Step Number Badge with Arrow Motif */}
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-brand-600 shadow-lg ring-1 ring-slate-100 transition-all duration-300 group-hover:bg-brand-600 group-hover:text-white mb-8 text-xl font-black italic">
                  <span>{index + 1}</span>
                  <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-white group-hover:bg-brand-600 rotate-45 border-r border-t border-slate-100 group-hover:border-transparent transition-colors shadow-[2px_-2px_4px_rgba(0,0,0,0.02)]" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                  {step}
                </h3>

                <p className="mt-4 text-slate-600 leading-relaxed group-hover:text-slate-700">
                  {/* Step descriptions could be added to data/site.ts later, for now we match the Why Choose layout */}
                  Professional handling of your {step.toLowerCase()} to ensure compliance and success.
                </p>

                {/* Progress & Arrow Indicator */}
                <div className="mt-8 flex items-center justify-between gap-4">
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
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

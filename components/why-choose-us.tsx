"use client";

import { motion } from "framer-motion";
import { highlights } from "@/data/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";

export function WhyChooseUsSection() {
  return (
    <Section id="benefits">
      {/* Background Dots & Glow Blobs */}
      <div className="absolute inset-0 z-0 bg-dot-pattern opacity-[0.2]" />
      <div className="glow-blob -top-24 -left-24 bg-brand-200 opacity-20" />
      <div className="glow-blob -bottom-24 -right-24 bg-blue-100 opacity-20" />

      <div className="container-shell relative z-10 py-2">
        <SectionHeading
          title="Why Choose"
          highlight="FormField"
          description="We combine deep industry expertise with a student-first approach to make your global education journey seamless."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="glass-premium group flex h-full flex-col overflow-hidden p-8 border border-brand-100 transition-all hover:shadow-premium will-change-gpu"
                >
                  <div className="flex flex-col h-full">
                    {/* Icon Container - Matching Services Look */}
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-brand-600 shadow-lg ring-1 ring-slate-100 transition-all group-hover:bg-brand-600 group-hover:text-white">
                      <Icon className="h-6 w-6" strokeWidth={2} />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-base text-slate-600 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Interactive Bottom Bar */}
                    <div className="mt-auto pt-8">
                      <div className="h-1 w-8 rounded-full bg-slate-100 transition-all duration-500 group-hover:w-full group-hover:bg-brand-500/20" />
                    </div>
                  </div>

                  {/* Top Edge Glow */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

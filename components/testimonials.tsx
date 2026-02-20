"use client";

import { motion } from "framer-motion";
import { Quote, Star, UserCircle2 } from "lucide-react";
import { testimonials } from "@/data/site";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Section } from "@/components/ui/section";

export function TestimonialsSection() {
  return (
    <Section id="testimonials" className="bg-slate-50/50">
      {/* Decorative Elements */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-50/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-shell relative z-10">
        <SectionHeading
          title="What Our"
          highlight="Clients Say"
          description="Real student stories from successful admissions and visa journeys across the globe."
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                className="glass-premium flex h-full flex-col p-8 transition-all hover:shadow-premium"
              >
                {/* Quotation Icon Badge */}
                <div className="absolute -top-4 -right-4 h-12 w-12 flex items-center justify-center rounded-2xl bg-brand-600 text-white shadow-xl opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-1">
                  <Quote className="h-6 w-6" />
                </div>

                <div className="flex items-center gap-4 mb-8">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-xl font-black text-brand-600 shadow-sm ring-1 ring-brand-100 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                    {item.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-sm font-medium text-slate-500">{item.role}</p>
                  </div>
                </div>

                <div className="relative">
                  <Quote className="absolute -left-2 -top-2 h-8 w-8 text-brand-100 opacity-50" />
                  <p className="relative z-10 text-slate-600 italic leading-relaxed pt-2">
                    "{item.message}"
                  </p>
                </div>

                <div className="mt-auto pt-8 flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-4 w-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

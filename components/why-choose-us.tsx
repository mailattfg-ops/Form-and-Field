"use client";

import { motion } from "framer-motion";
import { highlights } from "@/data/site";
import { Reveal } from "@/components/ui/reveal";

export function WhyChooseUsSection() {
  return (
    <section id="why-us" className="relative py-10 sm:py-12 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-100/30 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 border border-brand-100/20 rounded-full scale-110" />
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
              {Array.from("Why Choose ").map((char, i) => (char === " " ? " " : (
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
                {Array.from("FormField").map((char, i) => (
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
                ))}
              </span>
              {Array.from("?").map((char, i) => (
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
              ))}
            </motion.h2>

            <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-slate-600 leading-relaxed">
              We combine decade-long experience with profile-specific strategy to ensure your global success.
            </p>
          </div>
        </Reveal>

        {/* 2+3 Grid Layout - No Empty Space */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            // Layout: Row 1 has 2 big cards (6:6), Row 2 has 3 smaller cards (4:4:4)
            const spans = [
              "lg:col-span-6", // Card 1
              "lg:col-span-6", // Card 2
              "lg:col-span-4", // Card 3
              "lg:col-span-4", // Card 4
              "lg:col-span-4"  // Card 5
            ];

            return (
              <Reveal key={item.title} delay={index * 0.1} className={spans[index]}>
                <motion.article
                  whileHover={{ y: -6 }}
                  className="group relative h-full flex flex-col items-start rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200/60 transition-all hover:shadow-xl hover:ring-brand-500/20"
                >
                  {/* Subtle Background Accent */}
                  <div className="absolute right-0 top-0 h-24 w-24 bg-brand-50/50 [mask-image:radial-gradient(circle_at_top_right,black,transparent)] opacity-0 transition-opacity group-hover:opacity-100" />

                  {/* Service-style Icon Badge */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-brand-600 shadow-lg ring-1 ring-slate-100 transition-all duration-300 group-hover:bg-brand-600 group-hover:text-white group-hover:shadow-brand-500/20 mb-8">
                    <Icon className="h-7 w-7 transition-transform group-hover:scale-110" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-slate-600 leading-relaxed group-hover:text-slate-700">
                    {item.description}
                  </p>

                  <div className="mt-8 h-1 w-0 bg-brand-500/20 transition-all duration-500 group-hover:w-1/3 rounded-full" />
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

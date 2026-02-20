"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { faqs } from "@/data/site";
import { Reveal } from "@/components/ui/reveal";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="relative py-10 sm:py-12 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl aspect-square border border-slate-100 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square border border-slate-50 rounded-full" />
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
              {Array.from("Frequently Asked ").map((char, i) => (char === " " ? " " : (
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
                {Array.from("Questions").map((char, i) => (char === " " ? " " : (
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
              Answers to common questions about consultation, admissions, and visa timelines.
            </p>
          </div>
        </Reveal>

        <div className="mx-auto max-w-4xl grid gap-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <Reveal key={faq.question} delay={index * 0.05}>
                <motion.article
                  className={`group relative overflow-hidden rounded-3xl border transition-all duration-300 ${isOpen ? 'border-brand-500 ring-4 ring-brand-500/10 bg-white shadow-xl' : 'border-slate-200 bg-slate-50/50 hover:bg-white hover:border-brand-200 hover:shadow-lg'}`}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex((current) => (current === index ? -1 : index))}
                    className="flex w-full items-center justify-between gap-6 px-8 py-6 text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${isOpen ? 'bg-brand-600 text-white shadow-brand-500/30 shadow-lg' : 'bg-white text-brand-600 border border-slate-100 group-hover:shadow-md'}`}>
                        <HelpCircle className="h-5 w-5" />
                      </div>
                      <span className={`text-base font-bold transition-colors sm:text-lg ${isOpen ? 'text-slate-900' : 'text-slate-700 group-hover:text-slate-900'}`}>
                        {faq.question}
                      </span>
                    </div>

                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0, backgroundColor: isOpen ? '#0ea5e9' : 'transparent', color: isOpen ? 'white' : '#64748b' }}
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors"
                    >
                      <ChevronDown className="h-5 w-5" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-8 pb-8 pt-2 ml-14">
                          <div className="h-px w-full bg-slate-100 mb-6" />
                          <p className="text-base text-slate-600 leading-relaxed font-medium">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>

                  {/* Animated Accent Line */}
                  <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-brand-400 to-brand-600 transition-all duration-500 ${isOpen ? 'w-full' : 'w-0'}`} />
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

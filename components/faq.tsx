"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { faqs } from "@/data/site";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Section } from "@/components/ui/section";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Section id="faq">
      <div className="container-shell relative z-10 py-2">
        <SectionHeading
          title="Frequently Asked"
          highlight="Questions"
          description="Answers to common questions about consultation, admissions, and visa timelines."
          className="mb-16"
        />

        <div className="mx-auto max-w-3xl grid gap-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <Reveal key={item.question} delay={index * 0.05}>
                <div
                  className={`glass-premium overflow-hidden transition-all duration-300 ${isOpen ? 'shadow-premium ring-2 ring-brand-500/20' : 'hover:shadow-md'
                    }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between p-6 text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all ${isOpen ? 'bg-brand-600 text-white shadow-lg' : 'bg-brand-50 text-brand-600'
                        }`}>
                        <HelpCircle className="h-5 w-5" />
                      </div>
                      <span className={`text-base font-bold sm:text-lg ${isOpen ? 'text-slate-900' : 'text-slate-700'
                        }`}>
                        {item.question}
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${isOpen ? 'text-brand-600' : 'text-slate-400'
                        }`}
                    >
                      <ChevronDown className="h-5 w-5" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 pt-0 ml-14">
                          <div className="h-px w-full bg-slate-100/50 mb-4" />
                          <p className="text-base text-slate-600 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { services } from "@/data/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";

export function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const handleServiceClick = (serviceTitle: string) => {
    router.push(`/?service=${encodeURIComponent(serviceTitle)}#contact`);
  };

  return (
    <Section id="services">
      {/* Dynamic Background Accents */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-200/50 to-transparent" />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div style={{ y: y1 }} className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-brand-50/30 blur-3xl" />
        <motion.div style={{ y: y2 }} className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-brand-100/20 blur-3xl" />
      </div>

      <div ref={containerRef} className="container-shell relative z-10">
        <SectionHeading
          title="Tailored Services for"
          highlight="Every Step"
          description="From university selection to landing in your dream country, we provide end-to-end support to ensure your global success."
        />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal key={service.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  onClick={() => handleServiceClick(service.title)}
                  className="glass-premium group flex h-full flex-col overflow-hidden p-8 transition-all hover:shadow-premium cursor-pointer border border-brand-100 will-change-gpu"
                >
                  {/* Image Container */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />

                    {/* Icon Badge overlapping image and content */}
                    <div className="absolute bottom-4 left-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-brand-600 shadow-lg">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6 pt-6">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-3 flex-1 text-base text-slate-600 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-sm font-bold text-brand-600 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { services } from "@/data/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ArrowRight } from "lucide-react";

export function ServicesSection() {
  return (
    <section id="services" className="relative py-2 md:py-6 lg:py-8 xl:py-12 overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-brand-100/50 blur-3xl" />

      <div className="container-shell relative z-10">
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
                <motion.article
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-shadow hover:shadow-2xl"
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
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

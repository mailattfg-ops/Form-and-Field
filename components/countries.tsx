"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { countries } from "@/data/site";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Section } from "@/components/ui/section";

export function CountriesSection() {
  const router = useRouter();

  const duplicatedCountries = [...countries, ...countries];

  const handleReadMore = (countryName: string) => {
    router.push(`/?country=${encodeURIComponent(countryName)}#contact`);
  };

  return (
    <Section id="countries">
      <div className="container-shell mb-0 md:mb-4 lg:mb-8 xl:mb-16">
        <SectionHeading
          title="Destinations We"
          highlight="Serve"
          description="Explore diverse study and career opportunities in top global destinations."
        />
      </div>


      <motion.div
        className="flex gap-6 sm:gap-8 pt-8 md:pt-0"
        animate={{ x: "-50%" }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        whileHover={{ animationPlayState: "paused" }}
      >
        {duplicatedCountries.map((country, index) => (
          <div
            key={`${country.name}-${index}`}
            className="relative h-[350px] w-[260px] sm:h-[400px] sm:w-[300px] flex-shrink-0 overflow-hidden rounded-3xl group cursor-pointer"
            onClick={() => handleReadMore(country.name)}
          >
            <Image
              src={country.image}
              alt={country.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />

            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="transform transition-transform duration-500 group-hover:-translate-y-6">
                <div className="h-1 w-12 bg-brand-400 rounded-full mb-4 group-hover:w-20 transition-all" />
                <h3 className="text-3xl font-black text-white">{country.name}</h3>

                <div className="overflow-hidden">
                  <div className="max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                    <p className="mt-4 max-w-[240px] text-white/80 text-sm leading-relaxed">
                      Explore prestigious universities and premium career growth opportunities in {country.name}.
                    </p>
                    <button
                      className="mt-6 w-fit rounded-lg bg-white/10 px-5 py-2.5 text-sm font-bold text-white ring-1 ring-white/20 backdrop-blur-md transition-all hover:bg-white hover:text-brand-900"
                    >
                      Explore Destination
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </Section>
  );
}

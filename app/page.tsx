import { ContactSection } from "@/components/contact-section";
import { CountriesSection } from "@/components/countries";
import { FaqSection } from "@/components/faq";
import { FooterSection } from "@/components/footer";
import { HeroSection } from "@/components/hero";
import { RoadmapSection } from "@/components/roadmap";
import { ServicesSection } from "@/components/services";
import { TestimonialsSection } from "@/components/testimonials";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { WhyChooseUsSection } from "@/components/why-choose-us";

import { Navbar } from "@/components/navbar";
import { ProgramsSection } from "@/components/programs";

export default function HomePage() {
  return (
    <main className="bg-slate-50/50">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ProgramsSection />
      <CountriesSection />
      <WhyChooseUsSection />
      <RoadmapSection />
      <TestimonialsSection />
      <ContactSection />
      <FaqSection />
      <FooterSection />
      <WhatsAppFloat />
    </main>
  );
}

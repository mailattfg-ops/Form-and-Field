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

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ServicesSection />
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

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/ui/section-heading";
import { Section } from "@/components/ui/section";
import { SITE_ADDRESS, SITE_PHONE, SITE_EMAIL } from "@/data/site";

export function ContactSection() {
    const contactInfo = [
        {
            icon: Phone,
            title: "Call Us Anytime",
            value: SITE_PHONE,
            description: "Mon-Sat, 9AM to 7PM",
            color: "text-blue-600"
        },
        {
            icon: Mail,
            title: "Email Support",
            value: SITE_EMAIL,
            description: "Quick response within 24h",
            color: "text-brand-600"
        },
        {
            icon: MapPin,
            title: "Visit Our Office",
            value: "Kozhikode, Kerala",
            description: SITE_ADDRESS,
            color: "text-emerald-600"
        }
    ];

    return (
        <Section id="contact">
            <div className="container-shell relative z-10">
                <SectionHeading
                    title="Let's Start Your"
                    highlight="Journey"
                    description="Speak with our expert consultants today. Whether it's admissions, visas, or career counseling, we've got you covered."
                />

                <div className="mt-12 grid gap-0 grid-cols-1 lg:grid-cols-12 items-stretch rounded-3xl lg:rounded-[3.5rem] border border-slate-100 overflow-hidden">
                    {/* Left Info Column - Architectural Depth */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5 bg-slate-900 p-8 lg:p-14 text-white flex flex-col justify-between relative overflow-hidden"
                    >
                        <div className="relative z-10 flex flex-col gap-12">
                            <div className="flex flex-col gap-3">
                                <h4 className="text-2xl lg:text-3xl font-black tracking-tight leading-tight">
                                    Direct <span className="text-brand-400">Lines</span> <br />
                                    to Excellence
                                </h4>
                                <div className="h-1 w-12 bg-brand-500 rounded-full" />
                                <p className="text-slate-400 text-xs lg:text-sm max-w-xs mt-2 leading-relaxed">Ready to launch your global career? Reach out via any of these channels.</p>
                            </div>

                            <div className="flex flex-col gap-8 lg:gap-10">
                                {contactInfo.map((info, idx) => (
                                    <div key={info.title} className="flex items-center gap-4 lg:gap-6 group">
                                        <div className="flex h-10 w-10 lg:h-12 lg:w-12 shrink-0 items-center justify-center rounded-2xl bg-white/5 text-brand-400 ring-1 ring-white/10 group-hover:bg-brand-500 group-hover:text-white group-hover:ring-brand-500 transition-all duration-300">
                                            <info.icon className="h-5 w-5 lg:h-6 lg:w-6" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">{info.title}</span>
                                            <span className="text-base lg:text-lg font-bold text-white leading-none">{info.value}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Premium Stat-Based Social Proof - Image-less */}
                        <div className="relative z-10 pt-10 mt-12 border-t border-white/10 flex flex-col items-center gap-6 text-center">
                            <div className="flex flex-col items-center group">
                                <span className="text-4xl lg:text-5xl font-black text-white tracking-tighter transition-all hover:scale-105">+5,000</span>
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mt-2">Global Success Stories</span>
                            </div>
                            <div className="flex flex-wrap justify-center gap-4">
                                {[
                                    { label: "100% Verified", icon: Send },
                                    { label: "Premium Support", icon: MessageCircle }
                                ].map((badge) => (
                                    <div key={badge.label} className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 ring-1 ring-white/10 transition-colors hover:bg-white/10">
                                        <badge.icon className="h-3 w-3 text-brand-400" />
                                        <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider">{badge.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Form Column - High-End Consultation Lab */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7 p-8 lg:p-14 flex flex-col relative bg-white"
                    >
                        <div className="relative z-10 flex-grow">
                            <ContactForm variant="plain" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
}

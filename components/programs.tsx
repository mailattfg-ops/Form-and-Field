"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    GraduationCap,
    MapPin,
    Calendar,
    UserCheck,
    BookOpen,
    CheckCircle2,
    ArrowRight,
    ChevronDown,
    ChevronUp,
    LucideIcon
} from "lucide-react";
import { programs, programOverview, WHATSAPP_NUMBER } from "@/data/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";

/**
 * Interface representing the structure of a diploma program.
 */
interface Program {
    title: string;
    duration: string;
    institution?: string;
    description: string;
    image: string;
    highlights: readonly string[];
}

/**
 * Interface for the Overview Card props.
 */
interface OverviewCardProps {
    icon: LucideIcon;
    title: string;
    value: string;
    index: number;
}

/**
 * ProgramsSection displays featured diploma programs with an overview of requirements
 * and detailed expansion cards for each program.
 */
export function ProgramsSection() {
    return (
        <Section id="programs">
            <div className="container-shell relative z-10">
                <SectionHeading
                    title="Unlock Your Global"
                    highlight="Academic Potential"
                    description="Explore our elite diploma programs designed to bridge the gap between education and global industry demands."
                />

                {/* Program Overview Cards - Equal Height Grid */}
                <div className="mt-16 mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <OverviewCard
                        icon={MapPin}
                        title="Countries"
                        value={programOverview.locations.join(", ")}
                        index={0}
                    />
                    <OverviewCard
                        icon={Calendar}
                        title="Typical Duration"
                        value={programOverview.duration}
                        index={1}
                    />
                    <OverviewCard
                        icon={UserCheck}
                        title="Eligibility Age"
                        value={programOverview.ageLimit}
                        index={2}
                    />
                    <OverviewCard
                        icon={BookOpen}
                        title="Requirement"
                        value={programOverview.qualification}
                        index={3}
                    />
                </div>

                {/* Detailed Program Cards */}
                <div className="grid gap-10 lg:grid-cols-3">
                    {programs.map((program, index) => (
                        <ProgramCard
                            key={program.title}
                            program={program as Program}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </Section>
    );
}

/**
 * Individual Program Card component with expandable description.
 */
function ProgramCard({ program, index }: { program: Program; index: number }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const { title, duration, institution, description, image, highlights } = program;

    return (
        <Reveal delay={index * 0.1}>
            <motion.div
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="glass-premium group flex h-full flex-col overflow-hidden border border-brand-100 shadow-premium hover:shadow-2xl transition-all duration-500 will-change-gpu"
            >
                {/* Image Container - Clear of text for logo/institute visibility */}
                <div className="relative h-60 w-full overflow-hidden bg-slate-50 p-4">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-contain p-2 transition-none"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        priority={index === 0}
                    />

                    {/* Duration Badge - Bottom Left */}
                    <div className="absolute bottom-4 left-4 z-10">
                        <div className="flex items-center gap-2 rounded-xl border border-white/30 bg-black/60 px-3 py-1.5 backdrop-blur-md">
                            <Calendar className="h-3.5 w-3.5 text-brand-300" />
                            <span className="text-[10px] font-bold uppercase tracking-wider text-white">
                                {duration}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Card Content Area - Reduced Spacing */}
                <div className="flex flex-1 flex-col px-8 py-6 bg-white/70 backdrop-blur-sm">
                    {/* Header Section - Tighter Spacing */}
                    <div className="mb-2">
                        <h3 className="text-xl font-bold text-slate-900 leading-tight tracking-tight">
                            {title}
                        </h3>
                    </div>

                    {/* Description Area */}
                    <div className="relative mb-6">
                        <motion.p
                            initial={false}
                            animate={{ height: isExpanded ? "auto" : "3.15rem" }}
                            className="text-slate-600 text-sm leading-relaxed overflow-hidden italic font-medium opacity-80"
                        >
                            {description}
                        </motion.p>

                        <button
                            type="button"
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="mt-2 flex items-center gap-1.5 text-[10px] font-black text-brand-600 hover:text-brand-700 transition-colors uppercase tracking-[0.2em]"
                            aria-expanded={isExpanded}
                        >
                            {isExpanded ? (
                                <>Show Less <ChevronUp className="h-3.5 w-3.5" /></>
                            ) : (
                                <>Learn More <ChevronDown className="h-3.5 w-3.5" /></>
                            )}
                        </button>
                    </div>

                    {/* Highlights Section */}
                    <div className="pt-2 border-slate-200/40">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="h-4 w-1 bg-brand-500 rounded-full" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-800">
                                Core Advancements
                            </span>
                        </div>

                        <div className="grid gap-3">
                            {highlights.map((highlight) => (
                                <div key={highlight} className="flex items-start gap-3 group/item">
                                    <div className="mt-0.5 flex-shrink-0">
                                        <CheckCircle2 className="h-4 w-4 text-brand-500 transition-transform group-hover/item:scale-110" />
                                    </div>
                                    <span className="text-[13px] font-bold text-slate-700 leading-tight">
                                        {highlight}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Call to Action Button - WhatsApp Redirect */}
                    <div className="mt-auto pt-8">
                        <a
                            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi, I'm interested in enrolling for the "${title}" program. Could you please provide more details?`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/btn relative flex items-center justify-center w-full rounded-2xl bg-slate-900 p-4 text-sm font-black text-white transition-all hover:bg-brand-600 hover:shadow-2xl hover:shadow-brand-500/30 active:scale-[0.98] overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-2 tracking-wide">
                                Enroll Your Interest
                                <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-brand-400 to-brand-600 opacity-0 group-hover:btn:opacity-100 transition-opacity duration-300" />
                        </a>
                    </div>
                </div>
            </motion.div>
        </Reveal>
    );
}

/**
 * Small overview card for general program information.
 */
function OverviewCard({ icon: Icon, title, value, index }: OverviewCardProps) {
    return (
        <Reveal delay={index * 0.05} className="h-full">
            <div className="h-full p-8 rounded-[2rem] bg-white border border-brand-100 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1 group flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-600 mb-6 transition-transform group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-brand-500/20">
                    <Icon className="h-7 w-7" />
                </div>
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">
                    {title}
                </h4>
                <p className="text-slate-900 font-bold text-base leading-tight">
                    {value}
                </p>

                {/* Visual indicator footer */}
                <div className="mt-auto pt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="h-1 w-12 rounded-full bg-brand-500 mx-auto" />
                </div>
            </div>
        </Reveal>
    );
}

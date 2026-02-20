"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Hexagon, Phone, Menu, X } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/data/site";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [mobileMenuOpen]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        "Hello, I would like to book a free consultation."
    )}`;

    const navLinks = [
        { name: "Services", href: "#services" },
        { name: "Destinations", href: "#countries" },
        { name: "Process", href: "#roadmap" },
        { name: "FAQ", href: "#faq" },
    ];

    return (
        <>
            <div className="fixed top-6 inset-x-0 z-50 flex justify-center px-6 pointer-events-none">
                <motion.nav
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className={`
            pointer-events-auto flex items-center justify-between gap-8 rounded-full px-6 py-3 transition-all duration-500
            ${isScrolled
                            ? "bg-white/80 backdrop-blur-xl border border-brand-100 shadow-2xl shadow-brand-500/10 ring-1 ring-black/5"
                            : "bg-white/40 backdrop-blur-md border border-white/20 shadow-xl"}
            max-w-5xl w-full
          `}
                >
                    {/* Logo & Brand */}
                    <Link href="/" className="flex items-center gap-3 shrink-0">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-brand-500 text-white shadow-lg">
                            <Hexagon className="h-5 w-5" strokeWidth={3} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-lg font-black tracking-tight text-slate-900 leading-none">Form<span className="text-brand-600">&</span>Field</span>
                            <span className="text-[5px] font-bold uppercase tracking-[0.2em] text-brand-600 mt-0.5">Study Abroad Consultancy</span>
                        </div>
                    </Link>

                    {/* Desktop Nav Links */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-bold text-slate-600 transition-colors hover:text-brand-600"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center gap-4 shrink-0">
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-brand-500/20 transition-all hover:bg-brand-700 hover:shadow-brand-500/40"
                        >
                            <Phone className="h-4 w-4 fill-white" />
                            <span>Free Call</span>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-slate-600 transition-colors hover:bg-brand-50 hover:text-brand-600 lg:hidden"
                    >
                        {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </motion.nav>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
                        exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        className="fixed inset-0 z-[60] bg-white/60 lg:hidden"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-white p-8 shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex h-full flex-col pt-4">
                                {/* Mobile Menu Close Button */}
                                <div className="flex justify-end">
                                    <button
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-slate-600 transition-colors hover:bg-brand-50 hover:text-brand-600"
                                    >
                                        <X className="h-5 w-5" />
                                    </button>
                                </div>

                                <div className="flex flex-col gap-8 md:gap-12 pt-8 flex-1">
                                    <div className="space-y-6">
                                        {navLinks.map((link) => (
                                            <Link
                                                key={link.name}
                                                href={link.href}
                                                onClick={() => setMobileMenuOpen(false)}
                                                className="block text-2xl font-black text-slate-900 transition-colors hover:text-brand-600"
                                            >
                                                {link.name}
                                            </Link>
                                        ))}
                                    </div>

                                    <div className="mt-auto pt-8 border-t border-slate-100 pb-8">
                                        <a
                                            href={whatsappLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex w-full items-center justify-center gap-3 rounded-2xl bg-brand-600 py-4 text-base font-bold text-white shadow-xl shadow-brand-500/20"
                                        >
                                            <Phone className="h-5 w-5 fill-white" />
                                            Book Free Consultation
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

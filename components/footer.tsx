import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { SITE_ADDRESS, SITE_PHONE, SITE_EMAIL, SITE_LINKEDIN, SITE_INSTAGRAM, SITE_FACEBOOK } from "@/data/site";

export function FooterSection() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-100 bg-white py-8 lg:py-10">
      <div className="container-shell relative z-10">
        <div className="grid gap-y-16 gap-x-8 lg:gap-x-16 sm:grid-cols-2 lg:grid-cols-12 lg:items-start items-center">
          {/* Brand Column - Extra Massive Logo */}
          <div className="lg:col-span-4 sm:col-span-2 flex flex-col items-center lg:items-start lg:pr-8">
            <Link href="/" className="group block mb-6">
              <div className="relative h-64 w-64 transition-all duration-700 group-hover:scale-[1.03]">
                <Image
                  src="/images/logo.png"
                  alt="Form & Field Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            <div className="flex gap-5">
              {[
                { Icon: Instagram, href: SITE_INSTAGRAM, label: "Instagram" },
                { Icon: Facebook, href: SITE_FACEBOOK, label: "Facebook" },
                { Icon: Linkedin, href: SITE_LINKEDIN, label: "LinkedIn" }
              ].map(({ Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-slate-600 shadow-premium ring-1 ring-slate-200 transition-all hover:bg-brand-600 hover:text-white hover:ring-brand-600 hover:shadow-brand-500/30"
                >
                  <Icon className="h-5.5 w-5.5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:mt-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900 border-l-4 border-brand-500 pl-4 mb-8">Platform</h4>
            <ul className="grid gap-4">
              {[
                { name: "Services", href: "#services" },
                { name: "Countries", href: "#countries" },
                { name: "Process", href: "#roadmap" },
                { name: "FAQ", href: "#faq" },
                { name: "Contact", href: "#contact" }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-600 text-sm font-semibold transition-colors hover:text-brand-600 flex items-center gap-2 group"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-300 group-hover:bg-brand-500 transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Map Location */}
          <div className="lg:col-span-3 lg:mt-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900 border-l-4 border-brand-500 pl-4 mb-8">Location</h4>
            <div className="overflow-hidden rounded-[2rem] border border-slate-100 shadow-md ring-1 ring-slate-200/50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.0241754796234!2d75.78662417452298!3d11.25963175009614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65948b4697a5b%3A0x4eb789600ff9d506!2sEmerald%20Mall%2C%20Mavoor%20Rd%2C%20Arayidathupalam%2C%20Kozhikode%2C%20Kerala%20673004!5e0!3m2!1sen!2sin!4v1771647625615!5m2!1sen!2sin"
                width="100%"
                height="140"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 lg:mt-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900 border-l-4 border-brand-500 pl-4 mb-8">Connect</h4>
            <div className="space-y-6">
              {[
                { Icon: MapPin, text: SITE_ADDRESS },
                { Icon: Phone, text: SITE_PHONE },
                { Icon: Mail, text: SITE_EMAIL }
              ].map(({ Icon, text }) => (
                <div key={text} className="flex items-center gap-5 text-slate-600 transition-colors hover:text-slate-900">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-slate-600 shadow-premium ring-1 ring-slate-200 transition-all hover:bg-brand-600 hover:text-white hover:ring-brand-600 hover:shadow-brand-500/30">
                    <Icon className="h-5.5 w-5.5" />
                  </div>
                  <span className="text-sm leading-snug font-bold max-w-[200px]">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-slate-100 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-slate-500 font-medium">
            © {new Date().getFullYear()} <span className="font-black text-slate-900">Form & Field</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-slate-400">
            <Link href="#" className="hover:text-brand-600 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-brand-600 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

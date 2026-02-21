import Link from "next/link";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { SITE_ADDRESS, SITE_PHONE, SITE_EMAIL } from "@/data/site";

export function FooterSection() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-100 bg-white py-16">

      <div className="container-shell relative z-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block">
              <div className="flex flex-col">
                <span className="font-heading text-2xl font-black tracking-tighter text-slate-900 leading-none">
                  Form<span className="text-brand-600">&</span>Field
                </span>
                <span className="mt-1 text-[6px] font-bold uppercase tracking-[0.2em] text-slate-600">
                  Study Abroad Consultancy
                </span>
              </div>
            </Link>
            <p className="mt-6 max-w-xs text-base leading-relaxed text-slate-600">
              Empowering students and families with professional, transparent, and expert abroad education consultation.
            </p>
            <div className="mt-8 flex gap-4">
              {[
                { Icon: Instagram, href: "#", label: "Instagram" },
                { Icon: Facebook, href: "#", label: "Facebook" }
              ].map(({ Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-slate-600 shadow-sm ring-1 ring-slate-200 transition-all hover:bg-brand-600 hover:text-white hover:ring-brand-600 hover:shadow-brand-500/20"
                >
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900">Platform</h4>
            <ul className="mt-6 grid gap-4">
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
                    className="text-slate-600 transition-colors hover:text-brand-600"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Map Location */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900">Our Location</h4>
            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-100 shadow-sm ring-1 ring-slate-200/50">


              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.0241754796234!2d75.78662417452298!3d11.25963175009614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65948b4697a5b%3A0x4eb789600ff9d506!2sEmerald%20Mall%2C%20Mavoor%20Rd%2C%20Arayidathupalam%2C%20Kozhikode%2C%20Kerala%20673004!5e0!3m2!1sen!2sin!4v1771647625615!5m2!1sen!2sin"
                width="100%"
                height="120"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900">Get in Touch</h4>
            <div className="mt-6 space-y-4">
              {[
                { Icon: MapPin, text: SITE_ADDRESS },
                { Icon: Phone, text: SITE_PHONE },
                { Icon: Mail, text: SITE_EMAIL }
              ].map(({ Icon, text }) => (
                <div key={text} className="flex items-start gap-3 text-slate-600">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="text-sm leading-relaxed">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} <span className="font-bold text-slate-700">Form & Field</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
          </div>
        </div>
      </div>
    </footer>
  );
}

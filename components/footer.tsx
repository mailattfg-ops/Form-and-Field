import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function FooterSection() {
  return (
    <footer className="relative mt-12 overflow-hidden border-t border-brand-100 bg-white/80 py-16 backdrop-blur-xl">
      {/* Decorative background blobs */}
      <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-brand-50/50 blur-3xl" />
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-slate-50/50 blur-3xl" />

      <div className="container-shell relative z-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block">
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tighter text-slate-900 leading-none">
                  Form<span className="text-brand-600">&</span>Field
                </span>
                <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-600">
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
                { Icon: Linkedin, href: "#", label: "LinkedIn" },
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
                { name: "FAQ", href: "#faq" }
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

          {/* Support */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900">Support</h4>
            <ul className="mt-6 grid gap-4">
              {["Terms of Service", "Privacy Policy", "Contact Support", "Site Map"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-slate-600 transition-colors hover:text-brand-600">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900">Get in Touch</h4>
            <div className="mt-6 space-y-4">
              {[
                { Icon: MapPin, text: "Mumbai, Maharashtra, India" },
                { Icon: Phone, text: "+91 99999 99999" },
                { Icon: Mail, text: "hello@formfield.com" }
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
            <Link href="#" className="text-xs text-slate-400 hover:text-brand-600 underline">Privacy Policy</Link>
            <Link href="#" className="text-xs text-slate-400 hover:text-brand-600 underline">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

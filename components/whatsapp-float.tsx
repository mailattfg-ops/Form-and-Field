"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_NUMBER } from "@/data/site";

export function WhatsAppFloat() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello, I would like to know more about your consultation services."
  )}`;

  return (
    <Link
      href={href}
      target="_blank"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg shadow-black/20 transition hover:scale-105"
    >
      <FaWhatsapp className="h-7 w-7" />
    </Link>
  );
}

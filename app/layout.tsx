import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Form & Field | Abroad Consultation Services",
  description:
    "Professional abroad consultation for students and professionals. Get expert guidance for admissions, visa filing, scholarships, and relocation support.",
  keywords: [
    "abroad consultation",
    "study abroad",
    "visa assistance",
    "university admission",
    "immigration support",
    "consultancy in Kerala",
    "study in UK",
    "study in Canada"
  ],
  authors: [{ name: "Form & Field" }],
  openGraph: {
    title: "Form & Field | Abroad Consultation Services",
    description: "Expert guidance for your global education journey. Admissions, visas, and more.",
    url: "https://formfield.com",
    siteName: "Form & Field",
    images: [
      {
        url: "/images/og-image.jpg", // Suggested adding this file later
        width: 1200,
        height: 630,
        alt: "Form & Field - Abroad Consultation"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Form & Field | Abroad Consultation Services",
    description: "Expert guidance for your global education journey.",
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Form & Field | Abroad Consultation Services",
  description:
    "Professional abroad consultation for students and professionals. Get expert guidance for admissions, visa filing, scholarships, and relocation support.",
  keywords: [
    "abroad consultation",
    "study abroad",
    "visa assistance",
    "university admission",
    "immigration support"
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

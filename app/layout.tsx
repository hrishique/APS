import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "APS - Innovative Labelling & Packaging Solutions | Anjaneya Print Pack",
  description: "Leading provider of end-to-end labelling and packaging solutions: self-adhesive labels, shrink sleeves, smart labels, laminated films, and bespoke packaging. Quality, compliance, and R&D-driven innovation for Food, Pharma, Dairy, and Industrial sectors.",
  keywords: ["labels", "packaging", "shrink sleeves", "smart labels", "laminated films", "pharmaceutical packaging", "food packaging", "industrial packaging"],
  openGraph: {
    title: "APS - Innovative Labelling & Packaging Solutions",
    description: "End-to-end labelling and packaging solutions made to scale. Quality, compliance, and R&D-driven innovation.",
    type: "website",
    locale: "en_IN",
    siteName: "Anjaneya Print Pack Solutions",
    images: ["/images/logo.png"],
  },
  twitter: {
    card: "summary",
    title: "APS - Innovative Labelling & Packaging Solutions",
    description: "End-to-end labelling and packaging solutions made to scale. Quality, compliance, and R&D-driven innovation.",
    images: ["/images/logo.png"],
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}


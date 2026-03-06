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
  metadataBase: new URL("https://anjaneyaprintpacksolutions.com"),
  title: "Anjaneya Print Pack Solutions | Premium Printing & Packaging Solutions",
  description: "Anjaneya Print Pack Solutions provides high-quality custom printing and packaging solutions for businesses. We specialize in premium packaging, labels, and brand printing that elevate your products.",
  keywords: ["printing", "packaging solutions", "custom packaging", "product packaging", "label printing", "packaging manufacturer"],
  openGraph: {
    title: "Anjaneya Print Pack Solutions",
    description: "Premium printing and packaging solutions for businesses.",
    url: "https://anjaneyaprintpacksolutions.com",
    siteName: "Anjaneya Print Pack Solutions",
    type: "website",
    locale: "en_IN",
    images: ["/images/logo.png"],
  },
  twitter: {
    card: "summary",
    title: "Anjaneya Print Pack Solutions | Premium Printing & Packaging Solutions",
    description: "Premium printing and packaging solutions for businesses.",
    images: ["/images/logo.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/images/logo.png",
  },
  alternates: {
    canonical: "https://anjaneyaprintpacksolutions.com",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://anjaneyaprintpacksolutions.com/#organization",
        "name": "Anjaneya Print Pack Solutions",
        "url": "https://anjaneyaprintpacksolutions.com",
        "logo": "https://anjaneyaprintpacksolutions.com/images/logo.png",
        "description": "Premium printing and packaging solutions for businesses, specializing in self-adhesive labels, shrink sleeves, smart labels, and laminated films for Food, Pharma, Dairy, and Industrial sectors.",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "availableLanguage": "en"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://anjaneyaprintpacksolutions.com/#website",
        "url": "https://anjaneyaprintpacksolutions.com",
        "name": "Anjaneya Print Pack Solutions | Premium Printing & Packaging Solutions",
        "publisher": {
          "@id": "https://anjaneyaprintpacksolutions.com/#organization"
        }
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}


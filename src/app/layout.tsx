import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Just Stock Trading Limited | Strategic Sourcing & Wholesale Export",
  description:
    "UK-based procurement and wholesale export company delivering used clothing, premium cream grade clothing and liquidation stock to international buyers across Africa, the Middle East, and Eastern Europe.",
  keywords: [
    "wholesale export UK",
    "cream grade clothing",
    "used clothing wholesale",
    "liquidation stock UK",
    "procurement services UK",
    "clothing export Africa",
    "wholesale clothing bales",
    "strategic sourcing partner",
  ],
  authors: [{ name: "Just Stock Trading Limited" }],
  openGraph: {
    title: "Just Stock Trading Limited | Strategic Sourcing & Export",
    description:
      "UK-based procurement and wholesale export company delivering premium cream grade clothing to international buyers.",
    url: "https://juststocktrading.com",
    siteName: "Just Stock Trading Limited",
    images: [
      {
        url: "/images/bags-of-clothing.png",
        width: 1200,
        height: 630,
        alt: "Just Stock Trading Limited - Wholesale Export & Sourcing",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Just Stock Trading Limited | Strategic Sourcing & Export",
    description:
      "UK-based procurement and wholesale export company delivering premium cream grade clothing to international buyers.",
    images: ["/images/bags-of-clothing.png"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FAFAF5",
};

import Galaxy from "@/components/galaxy";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${cormorantGaramond.variable} font-sans antialiased bg-transparent relative min-h-screen`}
      >
        {/* Global Galaxy Background */}
        {/* <div className="fixed inset-0 z-[-1] pointer-events-none">
          <Galaxy
            mouseInteraction={false}
            density={1.5}
            speed={0.3}
            glowIntensity={0.5}
            twinkleIntensity={0.8}
            transparent={false}
          />
        </div> */}

        <div className="relative z-10">{children}</div>
        <WhatsAppButton />
      </body>
    </html>
  );
}

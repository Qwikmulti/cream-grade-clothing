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
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FAFAF5",
};

import Galaxy from "@/components/galaxy";

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
      </body>
    </html>
  );
}

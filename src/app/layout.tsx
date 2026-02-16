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
  title: "Assorted Mix Cream Grade Clothing | Premium Wholesale Fashion",
  description:
    "Top-tier Cream Grade clothing wholesale. Meticulously selected, brand-rich, and resale-ready garments from our UK sorting facility in Featherstone. Premium fashion for global export.",
  keywords: [
    "cream grade clothing",
    "wholesale clothing UK",
    "second hand clothing wholesale",
    "premium used clothes",
    "clothing export UK",
    "assorted mix clothing",
  ],
  authors: [{ name: "Wholesale Clothes Limited" }],
  viewport: "width=device-width, initial-scale=1",
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
        <div className="fixed inset-0 z-[-1] pointer-events-none">
          <Galaxy
            mouseInteraction={false}
            density={1.5}
            speed={0.3}
            glowIntensity={0.5}
            twinkleIntensity={0.8}
            transparent={false}
          />
        </div>

        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}

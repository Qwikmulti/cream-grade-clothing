"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-premium-cream/20 backdrop-blur-sm border-t border-premium-gold/10 py-16">
      <div className="container mx-auto px-4 text-center">
        <Link href="/" className="inline-block mb-8">
          <span className="text-3xl font-display font-bold tracking-tight text-premium-charcoal">
            CREAM GRADE
          </span>
          <br />
          <span className="text-[10px] uppercase tracking-[0.4em] text-premium-gold font-medium">
            Assorted Mix Clothing
          </span>
        </Link>

        <p className="text-premium-charcoal/40 text-sm max-w-xl mx-auto mb-12">
          Specialising in top-quality second-hand clothes sold by the kilo.
          Family-run business based in Featherstone, West Yorkshire.
        </p>

        <div className="flex justify-center space-x-8 mb-12">
          <Link
            href="#composition"
            className="text-xs font-bold uppercase tracking-widest text-premium-charcoal/60 hover:text-premium-gold transition-colors"
          >
            Composition
          </Link>
          <Link
            href="#quality"
            className="text-xs font-bold uppercase tracking-widest text-premium-charcoal/60 hover:text-premium-gold transition-colors"
          >
            Quality
          </Link>
          <Link
            href="#contact"
            className="text-xs font-bold uppercase tracking-widest text-premium-charcoal/60 hover:text-premium-gold transition-colors"
          >
            Contact
          </Link>
        </div>

        <div className="pt-8 border-t border-premium-gold/5 flex flex-col md:flex-row items-center justify-between text-[11px] uppercase tracking-widest text-premium-charcoal/30">
          <p>© 2026 Wholesale Clothes Limited. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="#"
              className="hover:text-premium-gold transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="hover:text-premium-gold transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import { Mail, Phone, MessageCircle } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-premium-cream/80 backdrop-blur-md border-b border-premium-gold/10">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex flex-col">
          <span className="text-2xl font-display font-bold tracking-tight text-premium-charcoal">
            CREAM GRADE
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-premium-gold font-medium -mt-1">
            Assorted Mix Clothing
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="#composition"
            className="text-sm font-medium text-premium-charcoal/80 hover:text-premium-gold transition-colors"
          >
            Composition
          </Link>
          <Link
            href="#quality"
            className="text-sm font-medium text-premium-charcoal/80 hover:text-premium-gold transition-colors"
          >
            Quality
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium text-premium-charcoal/80 hover:text-premium-gold transition-colors"
          >
            About Us
          </Link>
          <Link
            href="#contact"
            className="px-6 py-2 bg-premium-charcoal text-white text-sm font-semibold rounded-full hover:bg-premium-gold hover:text-premium-charcoal transition-all duration-300 shadow-lg shadow-premium-gold/10"
          >
            Contact Now
          </Link>
        </nav>

        <div className="flex md:hidden items-center space-x-4">
          <a
            href="https://wa.me/447378473604"
            target="_blank"
            rel="noopener noreferrer"
            className="text-premium-charcoal hover:text-premium-gold"
          >
            <MessageCircle size={24} />
          </a>
          <button className="text-premium-charcoal">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

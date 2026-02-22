"use client";

import Link from "next/link";
import { Mail, Phone, MessageCircle, Menu, ArrowRight } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Live Offers", href: "/live-offers" },
    { name: "Wholesale", href: "/wholesale" },
    { name: "Shipping", href: "/shipping" },
    { name: "Exports", href: "/exports" },
    { name: "We Buy", href: "/we-buy" },
    { name: "About", href: "/about-us" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-premium-cream/80 backdrop-blur-md border-b border-premium-gold/10 px-4">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex flex-col relative z-[60]">
          <span className="text-2xl font-display font-bold tracking-tight text-premium-charcoal">
            CREAM GRADE
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-premium-gold font-medium -mt-1">
            Assorted Mix Clothing
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-bold uppercase tracking-widest text-premium-charcoal/80 hover:text-premium-gold transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact-us"
            className="px-6 py-2 bg-premium-charcoal text-white text-[11px] font-bold uppercase tracking-widest rounded-full hover:bg-premium-gold hover:text-premium-charcoal transition-all duration-300 shadow-lg shadow-premium-gold/10"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Actions */}
        <div className="flex lg:hidden items-center space-x-4">
          <a
            href="https://wa.me/447378473604"
            target="_blank"
            rel="noopener noreferrer"
            className="text-premium-charcoal hover:text-premium-gold"
          >
            <MessageCircle size={24} />
          </a>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button
                className="text-premium-charcoal focus:outline-none"
                aria-label="Toggle Menu"
              >
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent className="flex flex-col">
              {/* Logo in Overlay */}
              <div className="mb-12">
                <span className="text-xl font-display font-bold tracking-tight text-premium-charcoal">
                  CREAM GRADE
                </span>
                <div className="text-[8px] uppercase tracking-widest text-premium-gold font-bold">
                  Assorted Mix Clothing
                </div>
              </div>

              <nav className="flex flex-col space-y-6">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                  >
                    <SheetClose asChild>
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="text-2xl font-display font-bold text-premium-charcoal active:text-premium-gold transition-colors flex items-center justify-between group"
                      >
                        {link.name}
                        <ArrowRight
                          className="opacity-0 group-active:opacity-100 transition-opacity text-premium-gold"
                          size={20}
                        />
                      </Link>
                    </SheetClose>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="pt-4"
                >
                  <SheetClose asChild>
                    <Link
                      href="/contact-us"
                      onClick={() => setIsOpen(false)}
                      className="w-full text-center py-4 bg-premium-charcoal text-white font-bold rounded-xl shadow-xl shadow-premium-gold/10 active:scale-95 transition-all flex items-center justify-center gap-2"
                    >
                      Get a Free Quote
                    </Link>
                  </SheetClose>
                </motion.div>
              </nav>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-auto pb-8 border-t border-premium-gold/10 pt-8"
              >
                <div className="text-[10px] uppercase tracking-[0.3em] text-premium-charcoal/40 font-bold mb-6 text-center">
                  Contact our Experts
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <a
                    href="tel:+447378473604"
                    className="bg-white p-3 rounded-xl flex flex-col items-center gap-2 border border-premium-gold/5 shadow-sm"
                  >
                    <Phone size={18} className="text-premium-gold" />
                    <span className="text-[8px] font-bold uppercase tracking-widest text-premium-charcoal/60">
                      Call
                    </span>
                  </a>
                  <a
                    href="mailto:hello@creamgrade.uk"
                    className="bg-white p-3 rounded-xl flex flex-col items-center gap-2 border border-premium-gold/5 shadow-sm"
                  >
                    <Mail size={18} className="text-premium-gold" />
                    <span className="text-[8px] font-bold uppercase tracking-widest text-premium-charcoal/60">
                      Email
                    </span>
                  </a>
                  <a
                    href="https://wa.me/447378473604"
                    className="bg-white p-3 rounded-xl flex flex-col items-center gap-2 border border-premium-gold/5 shadow-sm"
                  >
                    <MessageCircle size={18} className="text-premium-gold" />
                    <span className="text-[8px] font-bold uppercase tracking-widest text-premium-charcoal/60">
                      WhatsApp
                    </span>
                  </a>
                </div>
              </motion.div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

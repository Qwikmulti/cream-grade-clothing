"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Aurora from "./ui/Aurora";
import QuickContact from "./ui/QuickContact";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-transparent">
      {/* Aurora Background */}
      <Aurora />

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Image
          src="/images/a.jpeg"
          alt="Premium Cream Grade Clothing"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-premium-cream/0 via-premium-cream/50 to-premium-cream" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block px-6 py-2 bg-premium-gold/10 text-premium-gold text-xs font-bold uppercase tracking-[0.3em] rounded-full mb-8 backdrop-blur-sm border border-premium-gold/20"
            >
              The Pinnacle of UK Sorting
            </motion.span> */}

            <h1 className="text-6xl md:text-8xl font-display font-bold text-premium-charcoal leading-[1.05] mb-8 tracking-tight">
              Assorted Mix <br />
              <span className="text-premium-gold italic font-cormorant font-normal">
                Cream Grade
              </span>{" "}
              Stock
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-premium-charcoal/70 leading-relaxed mb-12 max-w-2xl mx-auto font-light"
            >
              Premium garments selected from the highest-quality tier.
              Resale-ready, brand-rich, and profit-driven.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <a
                href="#contact"
                className="group relative px-10 py-5 bg-premium-charcoal text-white rounded-full font-bold text-lg overflow-hidden transition-all duration-500 hover:pr-14"
              >
                <span className="relative z-10">Inquire for Pricing</span>
                <span className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  →
                </span>
                <div className="absolute inset-0 bg-premium-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </a>
              <a
                href="#quality"
                className="px-10 py-5 border border-premium-charcoal/20 text-premium-charcoal rounded-full font-bold text-lg hover:bg-premium-charcoal/5 transition-all duration-300 backdrop-blur-sm"
              >
                Quality Standards
              </a>
            </motion.div>
          </motion.div>

          <QuickContact variant="dark" />
        </div>
      </div>

      {/* Stats/Quick Info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-0 right-0 hidden lg:block"
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center max-w-4xl mx-auto px-12 py-8 bg-white/30 backdrop-blur-md rounded-3xl border border-white/50 shadow-2xl shadow-premium-gold/5">
            {[
              { label: "Summer Share", val: "80-85%" },
              { label: "Reject Rate", val: "2-5%" },
              { label: "Condition", val: "Pristine" },
              { label: "Origin", val: "UK-Sorted" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <span className="block text-premium-gold font-display text-3xl font-bold mb-1">
                  {stat.val}
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-premium-charcoal/50 font-bold">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

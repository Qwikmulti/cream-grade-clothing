"use client";

import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Squares from "./ui/Squares";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 bg-transparent flex items-center justify-center"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto bg-premium-charcoal rounded-[4rem] overflow-hidden shadow-3xl flex flex-col lg:row relative"
        >
          {/* Squares Background for the entire card */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <Squares
              speed={0.3}
              squareSize={50}
              borderColor="rgba(255, 255, 255, 0.1)"
            />
          </div>

          <div className="flex flex-col lg:flex-row relative z-10 w-full">
            {/* Contact Info */}
            <div className="lg:w-2/5 p-16 premium-gradient text-white flex flex-col justify-between border-right border-white/5">
              <div>
                <span className="text-premium-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block">
                  Direct Inquiry
                </span>
                <h2 className="text-5xl font-display font-bold mb-8 italic text-white tracking-tight">
                  Connect <br /> with Us
                </h2>
                <p className="text-white/50 mb-16 leading-relaxed font-light text-lg">
                  Specialists in premium wholesale clothing. Available for
                  collection and international delivery.
                </p>

                <div className="space-y-12">
                  <a
                    href="tel:+447378473604"
                    className="flex items-center gap-8 group"
                  >
                    <div className="w-16 h-16 rounded-2xl border border-white/10 flex items-center justify-center group-hover:bg-premium-gold group-hover:border-premium-gold transition-all duration-500 transform group-hover:-rotate-6">
                      <Phone
                        size={24}
                        className="group-hover:text-premium-charcoal transition-colors"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-white/30 block mb-1">
                        Call Our Office
                      </span>
                      <span className="text-xl font-bold group-hover:text-premium-gold transition-colors">
                        +44 7378 473 604
                      </span>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/447378473604"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-8 group"
                  >
                    <div className="w-16 h-16 rounded-2xl border border-white/10 flex items-center justify-center group-hover:bg-[#25D366] group-hover:border-[#25D366] transition-all duration-500 transform group-hover:rotate-6">
                      <MessageCircle
                        size={24}
                        className="group-hover:text-white transition-colors"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-white/30 block mb-1">
                        WhatsApp Chat
                      </span>
                      <span className="text-xl font-bold group-hover:text-premium-gold transition-colors">
                        Message Us Now
                      </span>
                    </div>
                  </a>

                  <div className="flex items-center gap-8">
                    <div className="w-16 h-16 rounded-2xl border border-white/10 flex items-center justify-center">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-white/30 block mb-1">
                        Our Base
                      </span>
                      <span className="text-xl font-bold">
                        Featherstone, Yorkshire
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-20 pt-10 border-t border-white/5">
                <p className="text-[10px] text-white/20 uppercase tracking-[0.3em] font-bold">
                  Wholesale Clothes Limited
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-3/5 p-16 bg-white flex flex-col justify-center">
              <h3 className="text-4xl font-display font-bold text-premium-charcoal mb-4">
                Scale Your Business
              </h3>
              <p className="text-premium-charcoal/40 mb-12 leading-relaxed text-lg font-light">
                Request a quote for export or wholesale bulk orders.
              </p>

              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="group">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-premium-charcoal/30 mb-3 group-focus-within:text-premium-gold transition-colors">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-8 py-5 bg-premium-cream/50 border-b-2 border-transparent focus:border-premium-gold outline-none transition-all duration-300 font-medium"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-premium-charcoal/30 mb-3 group-focus-within:text-premium-gold transition-colors">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-8 py-5 bg-premium-cream/50 border-b-2 border-transparent focus:border-premium-gold outline-none transition-all duration-300 font-medium"
                      placeholder="Email Address"
                    />
                  </div>
                </div>
                <div className="group">
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-premium-charcoal/30 mb-3 group-focus-within:text-premium-gold transition-colors">
                    Inquiry Details
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-8 py-5 bg-premium-cream/50 border-b-2 border-transparent focus:border-premium-gold outline-none transition-all duration-300 font-medium resize-none"
                    placeholder="How can we help your business?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="relative w-full py-6 bg-premium-charcoal text-white rounded-2xl font-bold text-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-premium-gold/20"
                >
                  <span className="relative z-10">Send Direct Inquiry</span>
                  <div className="absolute inset-0 bg-premium-gold scale-x-0 transition-transform duration-500 origin-left" />
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

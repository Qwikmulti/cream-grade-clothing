"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import {
  Truck,
  MapPinned,
  ShieldAlert,
  History,
  Anchor,
  PhoneCall,
} from "lucide-react";

export default function Shipping() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <PageHero
        title="Reliable Delivery to Every Corner of the Globe"
        subtitle="Global Shipping"
        description="We take the complexity out of logistics. Whether it's a single parcel or a full container, we ensure your cream grade stock arrives safely and on time."
        breadcrumb={[{ label: "Shipping" }]}
      />

      {/* Shipping Methods */}
      <section className="py-24">
        <div className="container mx-auto px-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Truck className="w-10 h-10" />,
                title: "UK Domestic",
                desc: "Same-day dispatch for orders placed before 12 PM. Delivery via reliable couriers within 2-3 working days across the UK mainland.",
              },
              {
                icon: <Anchor className="w-10 h-10" />,
                title: "International Sea",
                desc: "The most cost-effective option for large bulk orders (100kg+). We handle port-to-port or door-to-door delivery with full customs support.",
              },
              {
                icon: <MapPinned className="w-10 h-10" />,
                title: "Express Air",
                desc: "Fast-track your inventory with our air freight partners. Global delivery typically within 5-7 working days.",
              },
            ].map((method, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[40px] bg-premium-cream border border-premium-gold/10 hover:border-premium-gold/30 transition-all shadow-sm group"
              >
                <div className="text-premium-gold mb-8 group-hover:scale-110 transition-transform duration-500">
                  {method.icon}
                </div>
                <h3 className="text-2xl font-display font-bold text-premium-charcoal mb-4">
                  {method.title}
                </h3>
                <p className="text-premium-charcoal/50 leading-relaxed">
                  {method.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-24 bg-premium-charcoal text-white">
        <div className="container mx-auto px-14">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-16 text-center">
              Shipping <span className="text-premium-gold">FAQs</span>
            </h2>

            <div className="space-y-12">
              {[
                {
                  q: "How are shipping costs calculated?",
                  a: "Shipping is calculated based on total weight and destination. We work with multiple couriers to find the most competitive rate for your specific order.",
                },
                {
                  q: "Do you handle customs and duties?",
                  a: "For international exports, we provide all necessary commercial invoices and packing lists. However, import duties are typically the responsibility of the buyer.",
                },
                {
                  q: "Can I track my shipment?",
                  a: "Yes, every single order—from small boxes to full containers—comes with professional tracking details sent directly to your email.",
                },
                {
                  q: "What if my goods are damaged in transit?",
                  a: "We offer comprehensive shipping insurance for all orders. If your bale arrives compromised, we assist with the claim process immediately.",
                },
              ].map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 md:gap-12 pb-12 border-b border-white/10"
                >
                  <h4 className="font-bold text-premium-gold text-lg">
                    {faq.q}
                  </h4>
                  <p className="text-white/60 leading-relaxed">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block p-4 rounded-full bg-premium-gold/5 mb-8">
            <PhoneCall className="text-premium-gold" />
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-premium-charcoal mb-8">
            Need a Custom Quote?
          </h2>
          <p className="text-premium-charcoal/50 max-w-2xl mx-auto mb-12">
            Large volume orders often qualify for discounted freight rates.
            Speak with our logistics team today for a bespoke shipping plan.
          </p>
          <button className="px-10 py-5 bg-premium-charcoal text-white font-bold rounded-full hover:bg-premium-gold transition-all shadow-xl shadow-premium-gold/10">
            Contact Logistics Team
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}

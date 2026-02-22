"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import {
  Package,
  Truck,
  ShieldCheck,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import QuickContact from "@/components/ui/QuickContact";

const wholesaleFeatures = [
  {
    icon: <Package className="w-8 h-8 text-premium-gold" />,
    title: "Premium Cream Grade",
    description:
      "Our highest quality grade, featuring clothing with minimal to no signs of wear, including many brand-name pieces.",
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-premium-gold" />,
    title: "Scalable Orders",
    description:
      "From 20kg mini-bales for startups to 500kg+ shipments for established retailers. We scale with you.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-premium-gold" />,
    title: "Quality Guaranteed",
    description:
      "Every bale is hand-picked and double-checked by our quality control team in West Yorkshire.",
  },
];

export default function Wholesale() {
  return (
    <main className="min-h-screen bg-white ">
      <Header />

      <PageHero
        title="Scale Your Business with Premium Stock"
        subtitle="Wholesale Solutions"
        description="Reliable, high-quality, and hand-sorted. We provide the foundation for successful thrift stores and fashion resellers across the country."
        breadcrumb={[{ label: "Wholesale" }]}
      />

      <section className="py-24">
        <div className="container mx-auto px-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-premium-charcoal/5 flex items-center justify-center">
                <Package size={100} className="text-premium-gold/20" />
              </div>
              <Image
                src="/images/aaa.jpeg"
                alt="Wholesale Clothing Bale"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-premium-charcoal/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="text-sm font-bold uppercase tracking-widest mb-2 text-premium-gold">
                  Bale Example
                </p>
                <h3 className="text-2xl font-display font-bold">
                  Standard 45kg Cream Grade Bale
                </h3>
              </div>
            </motion.div>

            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-premium-charcoal">
                Bulk Buying <br />
                <span className="text-premium-gold">Made Simple.</span>
              </h2>
              <p className="text-premium-charcoal/60 leading-relaxed text-lg">
                We understand that as a business owner, your inventory is your
                lifeblood. That's why we focus on transparency, consistency, and
                the highest grade clothing on the market.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {wholesaleFeatures.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="space-y-3"
                  >
                    {feature.icon}
                    <h4 className="font-bold text-premium-charcoal">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-premium-charcoal/50 leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 px-8 py-4 bg-premium-charcoal text-white rounded-full font-bold flex items-center gap-3 hover:bg-premium-gold transition-colors shadow-xl"
              >
                Inquire for Price List <QuickContact />
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="py-24 bg-premium-cream">
        <div className="container mx-auto px-14 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-premium-charcoal">
              Flexible Tiers for Every Stage
            </h2>
            <p className="text-premium-charcoal/50">
              Whether you're selling on Depop or running a physical boutique, we
              have a volume tier that works for your budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                tier: "Starter",
                weight: "20kg - 40kg",
                desc: "Perfect for online resellers and side-hustles.",
              },
              {
                tier: "Business",
                weight: "50kg - 200kg",
                desc: "For established stores needing consistent weekly stock.",
              },
              {
                tier: "Enterprise",
                weight: "500kg+",
                desc: "Bulk logistics for large retailers and distributors.",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="p-8 bg-white rounded-3xl border border-premium-gold/10 hover:border-premium-gold/30 transition-all shadow-sm"
              >
                <span className="text-[10px] uppercase tracking-widest font-bold text-premium-gold mb-2 block">
                  {card.tier}
                </span>
                <h3 className="text-2xl font-display font-bold text-premium-charcoal mb-4">
                  {card.weight}
                </h3>
                <p className="text-sm text-premium-charcoal/40 mb-8">
                  {card.desc}
                </p>
                <div className="h-[1px] bg-premium-gold/10 w-full mb-8" />
                <button className="text-xs font-bold uppercase tracking-widest text-premium-charcoal hover:text-premium-gold transition-colors">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

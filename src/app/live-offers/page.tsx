"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import {
  Instagram,
  Video,
  ExternalLink,
  ShoppingBag,
  Zap,
  Users,
} from "lucide-react";
import Image from "next/image";

const socialSales = [
  {
    platform: "Instagram",
    icon: <Instagram className="w-6 h-6" />,
    handle: "@creamgrade_uk",
    description:
      "Catch our daily story drops and claim premium items before they hit the shop.",
    link: "https://instagram.com",
    color: "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]",
  },
  {
    platform: "TikTok",
    icon: <Video className="w-6 h-6" />,
    handle: "@creamgradeclothing",
    description:
      "Join our high-energy live auctions and warehouse walkthroughs every Tuesday and Thursday.",
    link: "https://tiktok.com",
    color: "bg-[#000000]",
  },
];

export default function LiveOffers() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <PageHero
        title="Experience the Rush of Live Shopping"
        subtitle="Exclusive Drops"
        description="We don't just sell clothes; we create events. Join our vibrant community on TikTok and Instagram for real-time auctions, warehouse reveals, and exclusive live-only pricing."
        breadcrumb={[{ label: "Live Offers" }]}
      />

      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-block px-4 py-1 rounded-full bg-premium-gold/10 border border-premium-gold/20">
                <span className="text-xs font-bold text-premium-gold uppercase tracking-widest">
                  How It Works
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-premium-charcoal">
                Interactive. Real-time. <br />
                <span className="text-premium-gold">Premium Selection.</span>
              </h2>
              <p className="text-premium-charcoal/60 leading-relaxed text-lg">
                Our social selling events are designed to bring the warehouse
                experience directly to your screen. See the texture, the fit,
                and the quality of our Cream Grade stock in real-time.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: <Zap className="text-premium-gold" />,
                    title: "Instant Claiming",
                    text: "Comment 'MINE' to claim unique pieces instantly during our lives.",
                  },
                  {
                    icon: <ShoppingBag className="text-premium-gold" />,
                    title: "Live-Only Bundles",
                    text: "Special kilo prices available only while we're on air.",
                  },
                  {
                    icon: <Users className="text-premium-gold" />,
                    title: "Style Advice",
                    text: "Get live styling tips and sizing help from our warehouse experts.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-premium-cream flex items-center justify-center shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-premium-charcoal">
                        {item.title}
                      </h4>
                      <p className="text-sm text-premium-charcoal/50">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {socialSales.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative overflow-hidden rounded-3xl p-8 h-[400px] flex flex-col justify-end text-white"
                >
                  <div
                    className={`absolute inset-0 ${social.color} opacity-90 group-hover:scale-110 transition-transform duration-700`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  <div className="relative z-10 space-y-4">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                      {social.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-display font-bold">
                        {social.platform}
                      </h3>
                      <p className="text-sm text-white/70 font-mono">
                        {social.handle}
                      </p>
                    </div>
                    <p className="text-sm leading-relaxed text-white/80">
                      {social.description}
                    </p>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest group-hover:gap-4 transition-all">
                      Go Live <ExternalLink size={14} />
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import QuickContact from "./ui/QuickContact";

const deals = [
  {
    title: "SUMMER CLOTHES",
    subtitle: "25 ITEMS OF DRESSES, TOPS & SKIRTS FOR £50",
    image: "/images/b.jpeg",
    type: "price",
  },
  {
    title: "KIDS CLOTHES",
    price: "£2",
    unit: "PER kg",
    image: "/images/d.jpeg",
    type: "weight",
  },
  {
    title: "MEN'S CLOTHES",
    price: "£2",
    unit: "PER kg",
    image: "/images/c.jpeg",
    type: "weight",
  },
  {
    title: "GRADE A",
    subtitle: "IN FEATHERSTONE WAREHOUSE",
    price: "£2",
    unit: "PER kg",
    image: "/images/a.jpeg",
    type: "weight",
  },
];

export default function Offers() {
  return (
    <section id="offers" className="py-24 bg-transparent overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-display font-bold text-[#8CAF8C] mb-4"
          >
            Our Offer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-premium-gold font-bold uppercase tracking-[0.2em] text-sm"
          >
            Top Deals
          </motion.p>
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {deals.map((deal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group relative aspect-square overflow-hidden rounded-xl shadow-2xl"
            >
              <Image
                src={deal.image}
                alt={deal.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-6 text-center text-white">
                {deal.type === "price" ? (
                  <>
                    <h3 className="text-3xl font-display font-bold mb-2 tracking-tight">
                      {deal.title}
                    </h3>
                    <p className="text-sm font-bold max-w-[200px] leading-tight opacity-90">
                      {deal.subtitle}
                    </p>
                  </>
                ) : (
                  <>
                    <span className="text-sm font-bold uppercase tracking-widest mb-1">
                      ONLY FOR
                    </span>
                    <div className="flex items-baseline gap-1 mb-2">
                      <span className="text-6xl font-display font-bold leading-none">
                        {deal.price}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-tighter opacity-80 leading-none">
                        {deal.unit}
                      </span>
                    </div>
                    <h3 className="text-3xl font-display font-bold mb-1 tracking-tight">
                      {deal.title}
                    </h3>
                    {deal.subtitle && (
                      <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">
                        {deal.subtitle}
                      </p>
                    )}
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Offers Section */}
        <div className="text-center">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-premium-gold font-bold uppercase tracking-[0.2em] text-sm mb-10"
          >
            Other Offers
          </motion.h3>

          <QuickContact />
        </div>
      </div>
    </section>
  );
}

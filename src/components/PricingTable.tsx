"use client";

import { motion } from "framer-motion";
import QuickContact from "./ui/QuickContact";

const pricingData = [
  {
    item: "Summer Mix",
    quality: "Cream",
    gender: "Men & Women Mix",
    price: "£ 6.50",
  },
  {
    item: "Winter Mix",
    quality: "Cream",
    gender: "Men & Women Mix",
    price: "£ 5.00",
  },
  {
    item: "Shoes",
    quality: "Cream & First Quality Mix",
    gender: "Men, Women & Children Mix",
    price: "£ 5.00",
  },
  {
    item: "Hand Bags & Belts",
    quality: "Cream & First Quality Mix",
    gender: "Men, Women & Children Mix",
    price: "£ 5.00",
  },
  {
    item: "Children Rummage",
    quality: "Cream & First Quality Mix",
    gender: "Children",
    price: "£ 4.50",
  },
  {
    item: "Sleeping/Night Wear",
    quality: "Cream & First Quality Mix",
    gender: "Men & Women Mix",
    price: "£ 3.00",
  },
  {
    item: "Workwear",
    quality: "Cream & First Quality Mix",
    gender: "Men & Women Mix",
    price: "£ 3.00",
  },
  {
    item: "Underwear and Lingerie",
    quality: "First Quality",
    gender: "Men & Women Mix",
    price: "£ 8.00",
  },
  {
    item: "Summer Mix",
    quality: "First Quality",
    gender: "Men & Women Mix",
    price: "£ 4.00",
  },
  {
    item: "Winter Mix",
    quality: "First Quality",
    gender: "Men & Women Mix",
    price: "£ 3.00",
  },
  {
    item: "Polo/T-Shirts Mix",
    quality: "Second Quality",
    gender: "Men & Women Mix",
    price: "£ 3.00",
  },
  {
    item: "Winter Mix",
    quality: "Second Quality",
    gender: "Men & Women Mix",
    price: "£ 2.00",
  },
  {
    item: "Summer Mix",
    quality: "Second Quality",
    gender: "Men & Women Mix",
    price: "£ 2.00",
  },
  {
    item: "Heavy Children",
    quality: "Second Quality",
    gender: "Children",
    price: "£ 2.00",
  },
];

export default function PricingTable() {
  return (
    <section id="pricing" className="py-24 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-premium-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block"
          >
            Transparent Pricing
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-premium-charcoal mb-6"
          >
            Price List <span className="italic text-premium-gold">& Deals</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto bg-white rounded-[2.5rem] shadow-3xl overflow-hidden border border-premium-gold/5"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-premium-charcoal text-white">
                  <th className="py-6 px-8 text-sm font-bold uppercase tracking-widest border-b border-white/10">
                    Item
                  </th>
                  <th className="py-6 px-8 text-sm font-bold uppercase tracking-widest border-b border-white/10">
                    Quality
                  </th>
                  <th className="py-6 px-8 text-sm font-bold uppercase tracking-widest border-b border-white/10">
                    Gender
                  </th>
                  <th className="py-6 px-8 text-sm font-bold uppercase tracking-widest border-b border-white/10 text-right">
                    £/Kg
                  </th>
                </tr>
              </thead>
              <tbody className="text-premium-charcoal">
                {pricingData.map((row, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className={`group transition-colors duration-300 ${index % 2 === 0 ? "bg-premium-cream/30" : "bg-white"} hover:bg-premium-gold/5`}
                  >
                    <td className="py-5 px-8 font-medium border-b border-premium-gold/5 group-last:border-none">
                      {row.item}
                    </td>
                    <td className="py-5 px-8 border-b border-premium-gold/5 group-last:border-none">
                      <span
                        className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                          row.quality.includes("Cream")
                            ? "bg-premium-gold/10 text-premium-gold"
                            : "bg-premium-charcoal/5 text-premium-charcoal/60"
                        }`}
                      >
                        {row.quality}
                      </span>
                    </td>
                    <td className="py-5 px-8 text-premium-charcoal/60 border-b border-premium-gold/5 group-last:border-none">
                      {row.gender}
                    </td>
                    <td className="py-5 px-8 font-bold text-right border-b border-premium-gold/5 group-last:border-none">
                      {row.price}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Quick Action Contact Bar in Table */}
          <div className="p-10 bg-premium-charcoal flex flex-col md:flex-row items-center justify-between gap-8 border-t border-white/5 text-white">
            <div className="text-center md:text-left">
              <p className="text-premium-gold font-bold text-lg mb-1">
                Ready to Order?
              </p>
              <p className="text-white/40 text-sm">
                Prices may vary based on quantity and seasonal demand.
              </p>
            </div>

            <QuickContact variant="dark" className="mt-0" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { Heart, Users2, ShieldCheck, Leaf, MapPin, Award } from "lucide-react";
import Image from "next/image";

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-white ">
      <Header />

      <PageHero
        title="More Than Just Clothing. A Legacy of Quality."
        subtitle="Our Journey"
        description="From a small warehouse in Featherstone to a global exporter, our mission has remained the same: to provide the world with the finest cream grade clothing."
        breadcrumb={[{ label: "About Us" }]}
      />

      {/* Story Section */}
      <section className="py-24 overflow-hidden px-14">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="inline-block p-2 px-4 rounded-full bg-premium-gold/10 text-premium-gold text-xs font-bold uppercase tracking-widest">
                Our Heritage
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-premium-charcoal">
                The Featherstone <br />
                <span className="text-premium-gold">Difference.</span>
              </h2>
              <div className="space-y-4 text-premium-charcoal/60 leading-relaxed text-lg">
                <p>
                  Founded as a family-run business in West Yorkshire, Cream
                  Grade Clothing was born out of a passion for sustainable
                  fashion and an eye for exceptional quality. We saw a gap in
                  the market for second-hand clothing that didn't feel
                  "second-best."
                </p>
                <p>
                  Today, we are proud to be one of the UK's leading specialists
                  in cream grade stock, serving a diverse community of
                  resellers, boutique owners, and international wholesalers who
                  trust our brand.
                </p>
              </div>

              <div className="flex items-center gap-6 pt-8 border-t border-premium-gold/10">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-12 h-12 rounded-full border-2 border-white bg-premium-cream overflow-hidden"
                    >
                      <Image
                        src='/images/aa.jpeg'
                        alt="Team Member"
                        width={48}
                        height={48}
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="font-bold text-premium-charcoal">
                    The Cream Grade Family
                  </div>
                  <div className="text-xs uppercase tracking-widest text-premium-charcoal/40">
                    25+ Experts in West Yorkshire
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square"
            >
              <div className="absolute inset-4 border border-premium-gold/30 rounded-[40px] z-0" />
              <div className="absolute inset-0 overflow-hidden rounded-[40px] shadow-2xl z-10">
                <Image
                  src='/images/aa.jpeg'
                  alt="Our Warehouse Team"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating Badge */}
              {/* <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl z-20 space-y-2 border border-premium-gold/10"
              >
                <Award className="text-premium-gold w-8 h-8" />
                <div className="font-display font-bold text-xl text-premium-charcoal">
                  10+ Years
                </div>
                <div className="text-[10px] uppercase tracking-widest text-premium-charcoal/40 font-bold">
                  Of Industry Excellence
                </div>
              </motion.div> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-premium-cream px-14">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <h2 className="text-3xl font-display font-bold text-premium-charcoal">
              Driven by Values
            </h2>
            <p className="text-premium-charcoal/50">
              Our commitment to these four pillars is what makes us the
              preferred partner for clothing retailers worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <ShieldCheck />,
                title: "Relentless Quality",
                desc: "No holes, no stains, no excuses. If it's not cream grade, it's not our grade.",
              },
              {
                icon: <Leaf />,
                title: "Sustainability",
                desc: "Every kilo we export is one kilo less of waste in our landfills.",
              },
              {
                icon: <Heart />,
                title: "Client First",
                desc: "We don't just sell stock; we help your business grow with tailored advice.",
              },
              {
                icon: <Users2 />,
                title: "Community",
                desc: "Supporting local economies through global trade and local employment.",
              },
            ].map((value, i) => (
              <div key={i} className="space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-premium-gold shadow-sm">
                  {value.icon}
                </div>
                <h4 className="text-xl font-display font-bold text-premium-charcoal">
                  {value.title}
                </h4>
                <p className="text-sm text-premium-charcoal/50 leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locate Us */}
      <section className="py-24 bg-white ">
        <div className="container mx-auto px-4">
          <div className="rounded-[40px] bg-premium-charcoal p-12 md:p-20 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-[50%] h-full bg-premium-gold opacity-5 blur-[120px]" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl font-display font-bold">
                  Visit our Warehouse
                </h2>
                <p className="text-white/60 text-lg leading-relaxed">
                  Centrally located in West Yorkshire, our headquarters is the
                  heart of our operations. We welcome business appointments for
                  wholesale selection.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-premium-gold flex-shrink-0" />
                    <div>
                      <div className="font-bold">Headquarters</div>
                      <div className="text-white/40 text-sm">
                        Featherstone, West Yorkshire <br />
                        United Kingdom
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[300px] md:h-[400px] bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center text-white/20 italic">
                {/* Map Placeholder */}[ Interactive Map View ]
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Composition from "@/components/Composition";
import Offers from "@/components/Offers";
import PackagingShowcase from "@/components/PackagingShowcase";
import PricingTable from "@/components/PricingTable";
import QualityStandards from "@/components/QualityStandards";
import About from "@/components/About";
import TrustSignals from "@/components/TrustSignals";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white/80 transition-colors duration-500">
      <Header />
      <Hero />
      <Composition />
      <Offers />
      <PackagingShowcase />
      <About />
      <TrustSignals />
      <QualityStandards />
      <FAQ />
      <Contact />
      <CTABanner />
      <Footer />
    </main>
  );
}

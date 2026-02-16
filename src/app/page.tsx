import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Composition from "@/components/Composition";
import Offers from "@/components/Offers";
import PricingTable from "@/components/PricingTable";
import QualityStandards from "@/components/QualityStandards";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white/70 transition-colors duration-500">
      <Header />
      <Hero />
      <Composition />
      <Offers />
      <PricingTable />
      <About />
      <QualityStandards />
      <Contact />
      <Footer />
    </main>
  );
}

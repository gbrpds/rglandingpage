import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SpecialtyTicker from "@/components/SpecialtyTicker";
import Metrics from "@/components/Metrics";
import PainPoints from "@/components/PainPoints";
import Solution from "@/components/Solution";
import Method from "@/components/Method";
import ForWhom from "@/components/ForWhom";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-rg-black">
      <Navbar />
      <Hero />
      <SpecialtyTicker />
      <Metrics />
      <PainPoints />
      <Solution />
      <Method />
      <ForWhom />
      <Process />
      <FAQ />
      <CTAFinal />
      <Footer />
    </main>
  );
}

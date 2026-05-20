import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Pain from "@/components/Pain";
import Product from "@/components/Product";
import AboutZeu from "@/components/AboutZeu";
import Offer from "@/components/Offer";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ScrollRevealInit from "@/components/ScrollRevealInit";

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <ScrollRevealInit />
      <Navbar />
      <Hero />
      <SocialProof />
      <Pain />
      <Product />
      <AboutZeu />
      <Offer />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}

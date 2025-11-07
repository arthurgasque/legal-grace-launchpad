import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrazilBanner from "@/components/BrazilBanner";
import About from "@/components/About";
import Services from "@/components/Services";
import Team from "@/components/Team";

import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <BrazilBanner />
        <About />
        <Services />
        <Team />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
};

export default Index;

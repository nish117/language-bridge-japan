
import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import VideoSection from "@/components/VideoSection";
import ContactMap from "@/components/ContactMap";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
  // Load the language context to ensure translations are available
  const { language } = useLanguage();
  const location = useLocation();
  
  // Scroll to section based on hash in URL
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash]);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroCarousel />
      <div id="about">
        <AboutUs />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="videos">
        <VideoSection />
      </div>
      <div id="contact">
        <ContactMap />
      </div>
      <Footer />
    </div>
  );
};

export default Index;

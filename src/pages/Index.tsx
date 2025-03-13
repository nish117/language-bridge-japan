
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
  // Ensure the language context is used to trigger any necessary updates
  const { language } = useLanguage();
  const location = useLocation();
  
  // Scroll to section based on hash in URL
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 300); // Small delay to ensure components have rendered
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash, language]); // Also trigger on language change
  
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


import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import VideoSection from "@/components/VideoSection";
import ContactMap from "@/components/ContactMap";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  // Load the language context to ensure translations are available
  const { language } = useLanguage();
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroCarousel />
      <AboutUs />
      <Services />
      <VideoSection />
      <ContactMap />
      <Footer />
    </div>
  );
};

export default Index;

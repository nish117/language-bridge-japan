
import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import VideoSection from "@/components/VideoSection";
import ContactMap from "@/components/ContactMap";
import Footer from "@/components/Footer";

const Index = () => {
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

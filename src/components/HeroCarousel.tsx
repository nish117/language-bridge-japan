
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// Define the slide type
type Slide = {
  image: string;
  titleKey: string;
  subtitleKey: string;
};

// Slide data with translation keys instead of hardcoded text
const slides: Slide[] = [
  {
    image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=2070&auto=format&fit=crop",
    titleKey: "hero.title1",
    subtitleKey: "hero.subtitle1"
  },
  {
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop",
    titleKey: "hero.title2",
    subtitleKey: "hero.subtitle2"
  },
  {
    image: "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?q=80&w=2071&auto=format&fit=crop",
    titleKey: "hero.title3",
    subtitleKey: "hero.subtitle3"
  }
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState<boolean[]>([false, false, false]);
  const [transitioning, setTransitioning] = useState(false);
  const { t } = useLanguage();

  // Preload images
  useEffect(() => {
    const preloadImages = () => {
      slides.forEach((slide, index) => {
        const img = new Image();
        img.src = slide.image;
        img.onload = () => {
          setIsLoaded(prev => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
        };
      });
    };
    
    preloadImages();
  }, []);

  const goToSlide = useCallback((index: number) => {
    if (transitioning) return;
    
    setTransitioning(true);
    setCurrentSlide(index);
    
    setTimeout(() => {
      setTransitioning(false);
    }, 500);
  }, [transitioning]);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, goToSlide, slides.length]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, goToSlide, slides.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="hero-carousel relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`carousel-slide absolute inset-0 w-full h-full ${
            index === currentSlide ? "opacity-100 z-0" : "opacity-0 -z-10"
          }`}
        >
          <div className="relative w-full h-full">
            {/* Image with blur loading effect */}
            <div
              className={`absolute inset-0 bg-cover bg-center blur-xl scale-110 transition-opacity duration-500 ${
                isLoaded[index] ? "opacity-0" : "opacity-100"
              }`}
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>
            
            <img
              src={slide.image}
              alt={t(slide.titleKey)}
              className={`w-full h-full object-cover object-center transition-opacity duration-500 ${
                isLoaded[index] ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
          
          <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
          
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="hero-content text-center text-white px-4 max-w-4xl animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{t(slide.titleKey)}</h1>
              <p className="text-xl md:text-2xl mb-8">{t(slide.subtitleKey)}</p>
              <button className="btn-primary">
                {t('hero.cta')}
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white w-8" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;

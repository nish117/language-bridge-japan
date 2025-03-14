
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "./LanguageToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu when changing routes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to handle smooth scrolling for anchor links on the home page
  const scrollToSection = (sectionId: string) => {
    // Only scroll if we're on the home page
    if (location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If we're not on the home page, navigate to the home page with the hash
      // The hash routing will look like /#/#section instead of just /#section
      // This is due to using HashRouter, but it will still work
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex flex-col items-start"
            >
              <span className="text-2xl font-jp-serif font-semibold bg-clip-text text-transparent bg-gradient-to-r from-japanese-navy to-japanese-accent">
                Sunmoon Nepal
              </span>
              <span className="text-lg font-jp-serif text-japanese-navy leading-tight">
                Educational Foundation Pvt. Ltd.
              </span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:flex-wrap items-center gap-4 lg:gap-6 justify-end">
            <Link to="/" className="text-gray-800 hover:text-japanese-accent transition-colors">
              {t("home")}
            </Link>
            <Link 
              to="/#about" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about");
              }}
              className="text-gray-800 hover:text-japanese-accent transition-colors"
            >
              {t("about")}
            </Link>
            <Link 
              to="/#services" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("services");
              }}
              className="text-gray-800 hover:text-japanese-accent transition-colors"
            >
              {t("services")}
            </Link>
            <Link 
              to="/#videos" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("videos");
              }}
              className="text-gray-800 hover:text-japanese-accent transition-colors"
            >
              {t("videos")}
            </Link>
            <Link 
              to="/#contact" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
              className="text-gray-800 hover:text-japanese-accent transition-colors"
            >
              {t("contact")}
            </Link>
            <LanguageToggle />
            <button className="btn-primary whitespace-nowrap">
              {t("startLearning")}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageToggle />
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-japanese-accent focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden ${
            isOpen ? "max-h-96 py-4" : "max-h-0 py-0 overflow-hidden"
          } transition-all duration-300 ease-in-out`}
        >
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-gray-800 hover:text-japanese-accent transition-colors"
            >
              {t("home")}
            </Link>
            <Link 
              to="/#about" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about");
              }}
              className="text-gray-800 hover:text-japanese-accent transition-colors"
            >
              {t("about")}
            </Link>
            <Link 
              to="/#services" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("services");
              }}
              className="text-gray-800 hover:text-japanese-accent transition-colors"
            >
              {t("services")}
            </Link>
            <Link 
              to="/#videos" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("videos");
              }}
              className="text-gray-800 hover:text-japanese-accent transition-colors"
            >
              {t("videos")}
            </Link>
            <Link 
              to="/#contact" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
              className="text-gray-800 hover:text-japanese-accent transition-colors"
            >
              {t("contact")}
            </Link>
            <button className="btn-primary w-full text-center">
              {t("startLearning")}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

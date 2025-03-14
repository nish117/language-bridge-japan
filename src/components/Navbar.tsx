
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "./LanguageToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

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

  // Function to handle navigation
  const handleNavigation = (sectionId: string) => {
    if (location.pathname === "/") {
      // If on home page, scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If on another page, navigate to home page with hash
      navigate(`/#${sectionId}`);
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
            <button 
              onClick={() => handleNavigation("about")}
              className="text-gray-800 hover:text-japanese-accent transition-colors"
            >
              {t("about")}
            </button>
            <button 
              onClick={() => handleNavigation("services")}
              className="text-gray-800 hover:text-japanese-accent transition-colors"
            >
              {t("services")}
            </button>
            <button 
              onClick={() => handleNavigation("videos")}
              className="text-gray-800 hover:text-japanese-accent transition-colors"
            >
              {t("videos")}
            </button>
            <button 
              onClick={() => handleNavigation("contact")}
              className="text-gray-800 hover:text-japanese-accent transition-colors"
            >
              {t("contact")}
            </button>
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
            <button 
              onClick={() => handleNavigation("about")}
              className="text-gray-800 hover:text-japanese-accent transition-colors text-left"
            >
              {t("about")}
            </button>
            <button 
              onClick={() => handleNavigation("services")}
              className="text-gray-800 hover:text-japanese-accent transition-colors text-left"
            >
              {t("services")}
            </button>
            <button 
              onClick={() => handleNavigation("videos")}
              className="text-gray-800 hover:text-japanese-accent transition-colors text-left"
            >
              {t("videos")}
            </button>
            <button 
              onClick={() => handleNavigation("contact")}
              className="text-gray-800 hover:text-japanese-accent transition-colors text-left"
            >
              {t("contact")}
            </button>
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

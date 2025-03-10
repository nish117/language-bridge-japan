
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

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
              className="flex items-center"
            >
              <span className="text-2xl font-jp-serif font-semibold bg-clip-text text-transparent bg-gradient-to-r from-japanese-navy to-japanese-accent">
                日本語<span className="text-japanese-navy">Academy</span>
              </span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-800 hover:text-japanese-accent transition-colors">
              Home
            </Link>
            <a href="#about" className="text-gray-800 hover:text-japanese-accent transition-colors">
              About
            </a>
            <a href="#services" className="text-gray-800 hover:text-japanese-accent transition-colors">
              Services
            </a>
            <a href="#videos" className="text-gray-800 hover:text-japanese-accent transition-colors">
              Videos
            </a>
            <a href="#contact" className="text-gray-800 hover:text-japanese-accent transition-colors">
              Contact
            </a>
            <button className="btn-primary">
              Start Learning
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
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
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <a 
              href="#about" 
              className="text-gray-800 hover:text-japanese-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a 
              href="#services" 
              className="text-gray-800 hover:text-japanese-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a 
              href="#videos" 
              className="text-gray-800 hover:text-japanese-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Videos
            </a>
            <a 
              href="#contact" 
              className="text-gray-800 hover:text-japanese-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <button className="btn-primary w-full text-center">
              Start Learning
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

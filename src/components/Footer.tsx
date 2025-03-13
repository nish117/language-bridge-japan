
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-japanese-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="mb-4">
              <Link to="/" className="text-2xl font-jp-serif font-semibold">
                日本語<span className="text-japanese-light">Academy</span>
              </Link>
            </div>
            <p className="text-gray-300 mb-6">
              {t("footer.description")}
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-gray-400" />
                <span className="text-gray-300">info@japaneseacademy.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-gray-400" />
                <span className="text-gray-300">+81 03-1234-5678</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-gray-400" />
                <span className="text-gray-300">Tokyo, Japan</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-6 border-b border-gray-700 pb-2">{t("footer.quickLinks")}</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link to="/#about" className="text-gray-300 hover:text-white transition-colors">
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link to="/#services" className="text-gray-300 hover:text-white transition-colors">
                  {t("services")}
                </Link>
              </li>
              <li>
                <Link to="/videos" className="text-gray-300 hover:text-white transition-colors">
                  {t("videos")}
                </Link>
              </li>
              <li>
                <Link to="/#contact" className="text-gray-300 hover:text-white transition-colors">
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-6 border-b border-gray-700 pb-2">{t("footer.ourServices")}</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/#services" className="text-gray-300 hover:text-white transition-colors">
                  {t("services.card1.title")}
                </Link>
              </li>
              <li>
                <Link to="/#services" className="text-gray-300 hover:text-white transition-colors">
                  {t("services.card2.title")}
                </Link>
              </li>
              <li>
                <Link to="/#services" className="text-gray-300 hover:text-white transition-colors">
                  {t("services.card3.title")}
                </Link>
              </li>
              <li>
                <Link to="/#services" className="text-gray-300 hover:text-white transition-colors">
                  {t("services.card4.title")}
                </Link>
              </li>
              <li>
                <Link to="/#services" className="text-gray-300 hover:text-white transition-colors">
                  {t("footer.culturalImmersion")}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-6 border-b border-gray-700 pb-2">{t("footer.connectWithUs")}</h3>
            <div className="flex gap-4 mb-6">
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Youtube size={20} />
              </a>
            </div>
            <div>
              <h4 className="text-base font-medium mb-3">{t("footer.subscribe")}</h4>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder={t("footer.emailPlaceholder")}
                  className="flex-1 bg-white/10 border border-white/20 rounded-md px-3 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-japanese-accent"
                />
                <button type="submit" className="bg-japanese-accent hover:bg-japanese-indigo px-4 py-2 rounded-md transition-colors">
                  {t("footer.subscribeButton")}
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} 日本語Academy. {t("footer.allRightsReserved")}
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/" className="text-gray-400 hover:text-white transition-colors">
              {t("footer.privacyPolicy")}
            </Link>
            <Link to="/" className="text-gray-400 hover:text-white transition-colors">
              {t("footer.termsOfService")}
            </Link>
            <Link to="/" className="text-gray-400 hover:text-white transition-colors">
              {t("footer.cookiePolicy")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

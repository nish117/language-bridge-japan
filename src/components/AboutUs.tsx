
import { GraduationCap, Globe, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutUs = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-24 bg-japanese-light">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in">
            <div className="inline-block rounded-lg bg-japanese-accent/10 px-3 py-1 text-sm font-medium text-japanese-accent mb-2">
              {t("about.tag")}
            </div>
            <h2 className="section-title">
              {t("about.title")}
            </h2>
            <p className="text-gray-600 text-lg">
              {t("about.description")}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              <div className="flex flex-col items-center text-center p-4 rounded-lg bg-white shadow-sm">
                <div className="p-3 rounded-full bg-japanese-accent/10 text-japanese-accent mb-3">
                  <GraduationCap size={24} />
                </div>
                <h3 className="font-medium text-lg mb-1">{t("about.card1.title")}</h3>
                <p className="text-gray-500 text-sm">{t("about.card1.description")}</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 rounded-lg bg-white shadow-sm">
                <div className="p-3 rounded-full bg-japanese-accent/10 text-japanese-accent mb-3">
                  <Globe size={24} />
                </div>
                <h3 className="font-medium text-lg mb-1">{t("about.card2.title")}</h3>
                <p className="text-gray-500 text-sm">{t("about.card2.description")}</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 rounded-lg bg-white shadow-sm">
                <div className="p-3 rounded-full bg-japanese-accent/10 text-japanese-accent mb-3">
                  <Users size={24} />
                </div>
                <h3 className="font-medium text-lg mb-1">{t("about.card3.title")}</h3>
                <p className="text-gray-500 text-sm">{t("about.card3.description")}</p>
              </div>
            </div>
            
            <div className="pt-4">
              <a href="#services" className="btn-primary">
                {t("about.cta")}
              </a>
            </div>
          </div>
          
          <div className="relative animate-slide-up">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=2069&auto=format&fit=crop" 
                alt="Japanese classroom" 
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-japanese-accent/10 rounded-lg -z-10"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-japanese-navy/5 rounded-lg -z-10"></div>
            
            <div className="absolute top-6 right-6 bg-white p-4 rounded-lg shadow-lg">
              <p className="text-5xl font-bold text-japanese-accent">12+</p>
              <p className="text-gray-600">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

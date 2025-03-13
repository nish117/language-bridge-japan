
import { GraduationCap, Briefcase, Video, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  cta: string;
  delay: number;
};

const ServiceCard = ({ icon, title, description, cta, delay }: ServiceCardProps) => (
  <div 
    className="service-card bg-white p-6 rounded-xl shadow-md hover:shadow-lg"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="bg-japanese-accent/10 w-14 h-14 rounded-lg flex items-center justify-center text-japanese-accent mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-medium mb-3">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <a href="#contact" className="text-japanese-accent hover:text-japanese-indigo font-medium flex items-center gap-1 transition-colors">
      {cta} →
    </a>
  </div>
);

const Services = () => {
  const { t } = useLanguage();
  
  return (
    <section id="services" className="py-24">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-slide-up">
          <div className="inline-block rounded-lg bg-japanese-accent/10 px-3 py-1 text-sm font-medium text-japanese-accent mb-2">
            {t("services.tag")}
          </div>
          <h2 className="section-title text-center mx-auto after:mx-auto">
            {t("services.title")}
          </h2>
          <p className="text-gray-600 mt-4">
            {t("services.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            icon={<GraduationCap size={28} />}
            title={t("services.card1.title")}
            description={t("services.card1.description")}
            cta={t("services.card1.cta")}
            delay={100}
          />
          
          <ServiceCard
            icon={<Briefcase size={28} />}
            title={t("services.card2.title")}
            description={t("services.card2.description")}
            cta={t("services.card2.cta")}
            delay={200}
          />
          
          <ServiceCard
            icon={<Video size={28} />}
            title={t("services.card3.title")}
            description={t("services.card3.description")}
            cta={t("services.card3.cta")}
            delay={300}
          />
          
          <ServiceCard
            icon={<Users size={28} />}
            title={t("services.card4.title")}
            description={t("services.card4.description")}
            cta={t("services.card4.cta")}
            delay={400}
          />
        </div>

        <div className="mt-16 glass-card p-8 rounded-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial from-japanese-accent/5 to-transparent"></div>
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-medium mb-2">{t("services.banner.title")}</h3>
              <p className="text-gray-600">
                {t("services.banner.description")}
              </p>
            </div>
            <div>
              <a href="#contact" className="btn-primary whitespace-nowrap">
                {t("services.banner.cta")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

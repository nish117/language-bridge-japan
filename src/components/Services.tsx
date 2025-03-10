
import { GraduationCap, Briefcase, Video, Users } from "lucide-react";

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
  return (
    <section id="services" className="py-24">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-slide-up">
          <div className="inline-block rounded-lg bg-japanese-accent/10 px-3 py-1 text-sm font-medium text-japanese-accent mb-2">
            Our Services
          </div>
          <h2 className="section-title text-center mx-auto after:mx-auto">
            Comprehensive Japanese Language Solutions
          </h2>
          <p className="text-gray-600 mt-4">
            From personalized language instruction to study abroad programs, we offer a complete
            suite of services to help you achieve your Japanese language goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            icon={<GraduationCap size={28} />}
            title="Study in Japan"
            description="Comprehensive support for university applications, language schools, and cultural immersion programs in Japan."
            cta="Learn More"
            delay={100}
          />
          
          <ServiceCard
            icon={<Briefcase size={28} />}
            title="Work Visa Support"
            description="Expert guidance for work visa applications, job placement assistance, and career counseling for Japan."
            cta="Explore Opportunities"
            delay={200}
          />
          
          <ServiceCard
            icon={<Video size={28} />}
            title="Online Classes"
            description="Flexible virtual Japanese lessons with certified instructors, interactive learning materials, and personalized feedback."
            cta="View Schedule"
            delay={300}
          />
          
          <ServiceCard
            icon={<Users size={28} />}
            title="Physical Classes"
            description="In-person Japanese language courses with immersive cultural activities and conversation practice."
            cta="Find Locations"
            delay={400}
          />
        </div>

        <div className="mt-16 glass-card p-8 rounded-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial from-japanese-accent/5 to-transparent"></div>
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-medium mb-2">Ready to Begin Your Japanese Journey?</h3>
              <p className="text-gray-600">
                Contact our team today to discuss your goals and find the perfect program for your needs.
              </p>
            </div>
            <div>
              <a href="#contact" className="btn-primary whitespace-nowrap">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

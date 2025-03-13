
import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactMap = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    // Show success toast
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-24 contact-section">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-slide-up">
          <div className="inline-block rounded-lg bg-japanese-accent/10 px-3 py-1 text-sm font-medium text-japanese-accent mb-2">
            {t("contact.tag")}
          </div>
          <h2 className="section-title text-center mx-auto after:mx-auto">
            {t("contact.title")}
          </h2>
          <p className="text-gray-600 mt-4">
            {t("contact.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  {t("contact.form.name")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-japanese-accent focus:border-transparent"
                  placeholder={t("contact.form.namePlaceholder")}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    {t("contact.form.email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-japanese-accent focus:border-transparent"
                    placeholder={t("contact.form.emailPlaceholder")}
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    {t("contact.form.phone")}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-japanese-accent focus:border-transparent"
                    placeholder={t("contact.form.phonePlaceholder")}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  {t("contact.form.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-japanese-accent focus:border-transparent resize-none"
                  placeholder={t("contact.form.messagePlaceholder")}
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full btn-primary justify-center"
              >
                {t("contact.form.submit")} <Send size={18} />
              </button>
            </form>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md overflow-hidden h-72">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.828030485551!2d139.76579871480857!3d35.681395837870675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfbd89f700b%3A0x277c49ba34ed38!2sTokyo%20Station!5e0!3m2!1sen!2sus!4v1621912098240!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              ></iframe>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-3">{t("contact.info.title")}</h3>
                <p className="text-gray-600 mb-6">{t("contact.info.description")}</p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-full bg-japanese-accent/10 text-japanese-accent">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="font-medium">{t("contact.info.phone")}</p>
                      <p className="text-gray-600">+81 03-1234-5678</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-full bg-japanese-accent/10 text-japanese-accent">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="font-medium">{t("contact.info.email")}</p>
                      <p className="text-gray-600">info@japaneseacademy.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-full bg-japanese-accent/10 text-japanese-accent">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="font-medium">{t("contact.info.address")}</p>
                      <p className="text-gray-600">1-1 Marunouchi, Chiyoda City, Tokyo 100-0005, Japan</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-3">{t("contact.hours.title")}</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <p className="font-medium">{t("contact.hours.weekdays")}</p>
                    <p className="text-gray-600">9:00 AM - 6:00 PM</p>
                  </div>
                  <div>
                    <p className="font-medium">{t("contact.hours.weekends")}</p>
                    <p className="text-gray-600">10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;

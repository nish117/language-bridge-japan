
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "ja" | "ne";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const defaultLanguage = "en";

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Try to get the language from localStorage
    const savedLanguage = localStorage.getItem("language") as Language;
    return savedLanguage || defaultLanguage;
  });
  
  const [translations, setTranslations] = useState<Record<string, string>>({});

  useEffect(() => {
    // Save language preference to localStorage when it changes
    localStorage.setItem("language", language);
    
    // Load translations for the selected language
    const loadTranslations = async () => {
      try {
        const translationModule = await import(`../translations/${language}.ts`);
        setTranslations(translationModule.default);
      } catch (error) {
        console.error("Failed to load translations:", error);
        // Fallback to English if translation file is missing
        const fallbackModule = await import("../translations/en.ts");
        setTranslations(fallbackModule.default);
      }
    };
    
    loadTranslations();
  }, [language]);
  
  // Translation function
  const t = (key: string): string => {
    return translations[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

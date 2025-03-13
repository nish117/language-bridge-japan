
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
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Save language preference to localStorage when it changes
    localStorage.setItem("language", language);
    
    // Load translations for the selected language
    const loadTranslations = async () => {
      try {
        // Using dynamic import with explicit file paths to ensure Vite properly bundles them
        let translationModule;
        
        if (language === 'en') {
          translationModule = await import('@/translations/en.ts');
        } else if (language === 'ja') {
          translationModule = await import('@/translations/ja.ts');
        } else if (language === 'ne') {
          translationModule = await import('@/translations/ne.ts');
        } else {
          // Fallback to English
          translationModule = await import('@/translations/en.ts');
        }
        
        setTranslations(translationModule.default);
        setLoaded(true);
      } catch (error) {
        console.error("Failed to load translations:", error);
        // Fallback to English if translation file is missing
        const fallbackModule = await import('@/translations/en.ts');
        setTranslations(fallbackModule.default);
        setLoaded(true);
      }
    };
    
    loadTranslations();
  }, [language]);
  
  // Translation function
  const t = (key: string): string => {
    if (!loaded) {
      return key; // Return key if translations haven't loaded yet
    }
    
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

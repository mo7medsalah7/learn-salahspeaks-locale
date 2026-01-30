import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  isRTL: boolean;
  t: (key: string) => string;
}

const translations = {
  ar: {
    // Navbar
    'nav.home': 'الرئيسية',
    'nav.camps': 'المعسكرات',
    'nav.courses': 'الدورات',
    'nav.graduates': 'الخريجين',
    'nav.login': 'تسجيل الدخول',
    
    // Hero
    'hero.title': 'احترف لينكس والحوسبة السحابية',
    'hero.titleHighlight': 'مع معسكرات تفاعلية',
    'hero.subtitle': 'منصة salahspeaks المتخصصة في تعليم إدارة أنظمة لينكس والحوسبة السحابية بشكل عملي تفاعلي على يد خبراء ومحترفين معتمدين من Red Hat تمتد خبراتهم لأكثر من 15 عامًا',
    'hero.cta.primary': 'اكتشف المعسكرات',
    'hero.cta.secondary': 'تصفح الدورات',
    
    // Stats
    'stats.camps': 'دورة تدريبية',
    'stats.camps.count': '+20',
    'stats.instructors': 'مدربين معتمدين',
    'stats.instructors.count': '+10',
    'stats.certificates': 'شهادات Red Hat',
    'stats.certificates.count': '100%',
    
    // Camps
    'camps.title': 'الدورات التدريبية المتاحة',
    'camps.subtitle': 'اختر المسار المناسب لك وابدأ رحلتك في عالم لينكس والحوسبة السحابية',
    'camps.card.enroll': 'سجل الآن',
    'camps.currency': 'ر.س',
    
    // Course Categories
    'category.linux': 'إدارة لينكس',
    'category.automation': 'الأتمتة',
    'category.cloud': 'الحوسبة السحابية',
    'category.containers': 'الحاويات',
    
    // Footer
    'footer.about': 'من نحن',
    'footer.about.text': 'منصة salahspeaks الرائدة في تعليم إدارة أنظمة لينكس والحوسبة السحابية في الشرق الأوسط بأساليب عملية وتفاعلية.',
    'footer.links': 'روابط سريعة',
    'footer.support': 'الدعم',
    'footer.social': 'تواصل معنا',
    'footer.copyright': '© 2024 salahspeaks. جميع الحقوق محفوظة.',
    'footer.terms': 'الشروط والأحكام',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.faq': 'الأسئلة الشائعة',
    'footer.contact': 'تواصل معنا',
  },
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.camps': 'Bootcamps',
    'nav.courses': 'Courses',
    'nav.graduates': 'Graduates',
    'nav.login': 'Login',
    
    // Hero
    'hero.title': 'Master Linux & Cloud',
    'hero.titleHighlight': 'with Interactive Bootcamps',
    'hero.subtitle': 'salahspeaks is the leading platform for learning Linux system administration and cloud computing through practical, hands-on training with Red Hat certified experts with over 15 years of experience',
    'hero.cta.primary': 'Discover Bootcamps',
    'hero.cta.secondary': 'View Courses',
    
    // Stats
    'stats.camps': 'Training Courses',
    'stats.camps.count': '20+',
    'stats.instructors': 'Certified Instructors',
    'stats.instructors.count': '10+',
    'stats.certificates': 'Red Hat Certificates',
    'stats.certificates.count': '100%',
    
    // Camps
    'camps.title': 'Available Training Courses',
    'camps.subtitle': 'Choose the right path for you and start your journey in Linux and Cloud computing',
    'camps.card.enroll': 'Enroll Now',
    'camps.currency': 'SAR',
    
    // Course Categories
    'category.linux': 'Linux Admin',
    'category.automation': 'Automation',
    'category.cloud': 'Cloud Computing',
    'category.containers': 'Containers',
    
    // Footer
    'footer.about': 'About Us',
    'footer.about.text': 'salahspeaks is the leading platform for teaching Linux system administration and cloud computing in the Middle East with practical and interactive methods.',
    'footer.links': 'Quick Links',
    'footer.support': 'Support',
    'footer.social': 'Connect With Us',
    'footer.copyright': '© 2024 salahspeaks. All rights reserved.',
    'footer.terms': 'Terms & Conditions',
    'footer.privacy': 'Privacy Policy',
    'footer.faq': 'FAQ',
    'footer.contact': 'Contact Us',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const isRTL = language === 'ar';

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['ar']] || key;
  };

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    document.documentElement.style.fontFamily = isRTL 
      ? "'IBM Plex Sans Arabic', 'Inter', sans-serif" 
      : "'Inter', 'IBM Plex Sans Arabic', sans-serif";
  }, [language, isRTL]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, isRTL, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

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
    'hero.title': 'تعلم تصميم تجربة المستخدم',
    'hero.titleHighlight': 'بمعسكرات تفاعلية',
    'hero.subtitle': 'منصة salahspeaks المتخصصة في تعليم مهارات تصميم تجربة المستخدم بشكل عملي تفاعلي على يد خبراء ومحترفين تمتد خبراتهم لأكثر من 15 عامًا في المجال',
    'hero.cta.primary': 'اكتشف المعسكرات',
    'hero.cta.secondary': 'تصفح الدورات',
    
    // Stats
    'stats.camps': 'معسكر تفاعلي',
    'stats.camps.count': '+30',
    'stats.instructors': 'مدربين محترفين',
    'stats.instructors.count': '+15',
    'stats.certificates': 'شهادات معتمدة',
    'stats.certificates.count': '100%',
    
    // Camps
    'camps.title': 'المعسكرات التفاعلية المتاحة',
    'camps.subtitle': 'اختر المعسكر المناسب لك وابدأ رحلتك في عالم تصميم تجربة المستخدم',
    'camps.card.enroll': 'سجل الآن',
    'camps.currency': 'ر.س',
    
    // Course Categories
    'category.ui': 'تصميم الواجهات',
    'category.ux': 'تجربة المستخدم',
    'category.research': 'بحث المستخدم',
    
    // Footer
    'footer.about': 'من نحن',
    'footer.about.text': 'منصة salahspeaks الرائدة في تعليم تصميم تجربة المستخدم في الشرق الأوسط بأساليب عملية وتفاعلية.',
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
    'nav.camps': 'Camps',
    'nav.courses': 'Courses',
    'nav.graduates': 'Graduates',
    'nav.login': 'Login',
    
    // Hero
    'hero.title': 'Learn UX Design with',
    'hero.titleHighlight': 'Interactive Camps',
    'hero.subtitle': 'salahspeaks is the leading platform for learning UX design skills through practical, interactive methods with experts and professionals with over 15 years of experience in the field',
    'hero.cta.primary': 'Discover Camps',
    'hero.cta.secondary': 'View Courses',
    
    // Stats
    'stats.camps': 'Interactive Camps',
    'stats.camps.count': '30+',
    'stats.instructors': 'Expert Instructors',
    'stats.instructors.count': '15+',
    'stats.certificates': 'Accredited Certificates',
    'stats.certificates.count': '100%',
    
    // Camps
    'camps.title': 'Available Interactive Camps',
    'camps.subtitle': 'Choose the right camp for you and start your journey in the world of UX design',
    'camps.card.enroll': 'Enroll Now',
    'camps.currency': 'SAR',
    
    // Course Categories
    'category.ui': 'UI Design',
    'category.ux': 'UX Design',
    'category.research': 'User Research',
    
    // Footer
    'footer.about': 'About Us',
    'footer.about.text': 'salahspeaks is the leading platform for teaching UX design in the Middle East with practical and interactive methods.',
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
      ? "'Cairo', 'Inter', sans-serif" 
      : "'Inter', 'Cairo', sans-serif";
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

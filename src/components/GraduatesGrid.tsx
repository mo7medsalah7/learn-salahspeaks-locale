import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const sampleGraduates = [
  { id: 1, nameAr: 'أحمد علي', nameEn: 'Ahmed Ali', role: 'System Administrator', testimonialAr: 'تجربة رائعة وتعلمت الكثير', testimonialEn: 'Great experience, learned a lot' },
  { id: 2, nameAr: 'منى خالد', nameEn: 'Mona Khaled', role: 'DevOps Engineer', testimonialAr: 'المحاضرين كانو ممتازين', testimonialEn: 'Instructors were excellent' },
  { id: 3, nameAr: 'سعيد محمد', nameEn: 'Saeed Mohamed', role: 'Cloud Engineer', testimonialAr: 'حصلت على وظيفة بعد الدورة', testimonialEn: 'Got a job after the course' },
];

const GraduatesGrid: React.FC = () => {
  const { isRTL } = useLanguage();

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-foreground mb-6 text-center">{isRTL ? 'خريجونا' : 'Our Graduates'}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleGraduates.map((g) => (
            <div key={g.id} className="bg-card rounded-2xl p-6 shadow-sm border border-border">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-2xl">👩‍🎓</div>
                <div>
                  <div className="font-semibold text-lg">{isRTL ? g.nameAr : g.nameEn}</div>
                  <div className="text-sm text-muted-foreground">{g.role}</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{isRTL ? g.testimonialAr : g.testimonialEn}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GraduatesGrid;

import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Clock, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const CampsGrid = () => {
  const { t, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const camps = [
    {
      id: 1,
      titleAr: 'معسكر تصميم الواجهات UI',
      titleEn: 'UI Design Bootcamp',
      categoryKey: 'category.ui',
      price: 7800,
      duration: isRTL ? '8 أسابيع' : '8 Weeks',
      students: 45,
      gradient: 'from-primary to-blue-500',
    },
    {
      id: 2,
      titleAr: 'معسكر تجربة المستخدم UX',
      titleEn: 'UX Design Bootcamp',
      categoryKey: 'category.ux',
      price: 9500,
      duration: isRTL ? '12 أسبوع' : '12 Weeks',
      students: 38,
      gradient: 'from-accent to-purple-500',
    },
    {
      id: 3,
      titleAr: 'معسكر بحث المستخدم',
      titleEn: 'User Research Camp',
      categoryKey: 'category.research',
      price: 5500,
      duration: isRTL ? '6 أسابيع' : '6 Weeks',
      students: 52,
      gradient: 'from-success to-teal-500',
    },
    {
      id: 4,
      titleAr: 'معسكر التصميم الشامل',
      titleEn: 'Complete Design Camp',
      categoryKey: 'category.ux',
      price: 12000,
      duration: isRTL ? '16 أسبوع' : '16 Weeks',
      students: 28,
      gradient: 'from-primary to-accent',
    },
    {
      id: 5,
      titleAr: 'معسكر Figma المتقدم',
      titleEn: 'Advanced Figma Camp',
      categoryKey: 'category.ui',
      price: 4500,
      duration: isRTL ? '4 أسابيع' : '4 Weeks',
      students: 67,
      gradient: 'from-orange-500 to-red-500',
    },
    {
      id: 6,
      titleAr: 'معسكر Design Systems',
      titleEn: 'Design Systems Camp',
      categoryKey: 'category.ui',
      price: 8500,
      duration: isRTL ? '10 أسابيع' : '10 Weeks',
      students: 34,
      gradient: 'from-indigo-500 to-primary',
    },
  ];

  return (
    <section id="camps" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            {isRTL ? 'المعسكرات' : 'Bootcamps'}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('camps.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('camps.subtitle')}
          </p>
        </motion.div>

        {/* Camps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {camps.map((camp, index) => (
            <motion.div
              key={camp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-card rounded-3xl border border-border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Card Top - Gradient with Badge */}
              <div className={`relative h-48 bg-gradient-to-br ${camp.gradient} p-6`}>
                {/* Category Badge */}
                <span className="inline-block px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium">
                  {t(camp.categoryKey)}
                </span>
                
                {/* Decorative Elements */}
                <div className="absolute bottom-4 right-4 w-20 h-20 rounded-full bg-white/10 blur-xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">
                      {camp.id}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Bottom - Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {isRTL ? camp.titleAr : camp.titleEn}
                </h3>

                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    <span>{camp.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-4 h-4" />
                    <span>{camp.students} {isRTL ? 'طالب' : 'students'}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <span className="text-2xl font-bold text-foreground">
                      {camp.price.toLocaleString()}
                    </span>
                    <span className="text-sm text-muted-foreground ms-1">
                      {t('camps.currency')}
                    </span>
                  </div>
                  <Button
                    variant="default"
                    size="sm"
                    className="group/btn"
                  >
                    {t('camps.card.enroll')}
                    <ArrowIcon className="w-4 h-4 ms-1 group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampsGrid;

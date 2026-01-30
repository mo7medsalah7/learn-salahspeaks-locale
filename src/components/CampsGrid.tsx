import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Clock, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const CampsGrid = () => {
  const { t, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;
  const navigate = useNavigate();

  const camps = [
    {
      id: 1,
      titleAr: 'إدارة لينكس 1 (RHCSA)',
      titleEn: 'Linux Admin 1 (RHCSA)',
      categoryKey: 'category.linux',
      price: 300,
      duration: isRTL ? '5 أيام' : '5 Days',
      students: 85,
      gradient: 'from-red-600 to-red-800',
      icon: '🐧',
    },
    {
      id: 2,
      titleAr: 'إدارة لينكس 2 (RHCE)',
      titleEn: 'Linux Admin 2 (RHCE)',
      categoryKey: 'category.linux',
      price: 300,
      duration: isRTL ? '5 أيام' : '5 Days',
      students: 62,
      gradient: 'from-red-700 to-rose-900',
      icon: '🔧',
    },
    {
      id: 3,
      titleAr: 'المسار الكامل لإدارة لينكس',
      titleEn: 'Linux Administration Full Track',
      categoryKey: 'category.linux',
      price: 500,
      duration: isRTL ? '10 أيام' : '10 Days',
      students: 45,
      gradient: 'from-red-600 to-orange-600',
      icon: '🎯',
    },
    {
      id: 4,
      titleAr: 'أتمتة الأنظمة باستخدام Ansible',
      titleEn: 'Ansible Automation',
      categoryKey: 'category.automation',
      price: 400,
      duration: isRTL ? '4 أيام' : '4 Days',
      students: 78,
      gradient: 'from-slate-700 to-slate-900',
      icon: '⚡',
    },
    {
      id: 5,
      titleAr: 'إدارة الأنظمة مع Red Hat Satellite',
      titleEn: 'Red Hat Satellite',
      categoryKey: 'category.cloud',
      price: 300,
      duration: isRTL ? '5 أيام' : '5 Days',
      students: 34,
      gradient: 'from-blue-600 to-indigo-800',
      icon: '🛰️',
    },
    {
      id: 6,
      titleAr: 'منصة OpenShift للحاويات',
      titleEn: 'OpenShift Container Platform',
      categoryKey: 'category.containers',
      price: 650,
      duration: isRTL ? '5 أيام' : '5 Days',
      students: 56,
      gradient: 'from-red-500 to-red-700',
      icon: '☸️',
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
          <span className="inline-block px-4 py-2 rounded-full bg-red-600/10 text-red-600 text-sm font-medium mb-4">
            {isRTL ? '🐧 دورات لينكس والسحابة' : '🐧 Linux & Cloud Courses'}
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
                    <span className="text-4xl">
                      {camp.icon}
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
                    onClick={() => navigate(`/enroll?course=${encodeURIComponent(isRTL ? camp.titleAr : camp.titleEn)}`)}
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

import { motion } from 'framer-motion';
import { BookOpen, Users, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const StatsBar = () => {
  const { t } = useLanguage();

  const stats = [
    {
      icon: BookOpen,
      count: t('stats.camps.count'),
      label: t('stats.camps'),
      color: 'primary',
    },
    {
      icon: Users,
      count: t('stats.instructors.count'),
      label: t('stats.instructors'),
      color: 'accent',
    },
    {
      icon: Award,
      count: t('stats.certificates.count'),
      label: t('stats.certificates'),
      color: 'success',
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-4 p-6 bg-card rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`w-14 h-14 rounded-xl bg-${stat.color}/10 flex items-center justify-center flex-shrink-0`}>
                <stat.icon className={`w-7 h-7 text-${stat.color}`} />
              </div>
              <div>
                <p className={`text-3xl md:text-4xl font-bold text-${stat.color}`}>
                  {stat.count}
                </p>
                <p className="text-muted-foreground font-medium">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;

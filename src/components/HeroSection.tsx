import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Play } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const { t, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section className="relative min-h-screen pt-20 md:pt-24 overflow-hidden bg-gradient-to-b from-background to-secondary/30">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Blue Orb */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-20 right-[10%] w-64 h-64 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-primary/30 to-accent/20 blur-3xl"
        />
        {/* Purple Orb */}
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-20 left-[5%] w-48 h-48 md:w-72 md:h-72 rounded-full bg-gradient-to-tr from-accent/30 to-primary/20 blur-3xl"
        />
        {/* Teal Orb */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/2 left-1/3 w-32 h-32 rounded-full bg-gradient-to-br from-success/40 to-primary/20 blur-2xl"
        />
        
        {/* Decorative Dots */}
        <div className="absolute top-40 left-[15%] grid grid-cols-5 gap-2 opacity-20">
          {[...Array(25)].map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-primary" />
          ))}
        </div>
        <div className="absolute bottom-40 right-[10%] grid grid-cols-4 gap-2 opacity-20">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-accent" />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 py-12 md:py-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-start"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              ✨ {isRTL ? 'أول منصة في الشرق الأوسط' : 'First Platform in the Middle East'}
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
              {t('hero.title')}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
                {t('hero.titleHighlight')}
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Button
                variant="default"
                size="lg"
                className="group w-full sm:w-auto text-lg px-8 py-6"
              >
                {t('hero.cta.primary')}
                <ArrowIcon className="w-5 h-5 ms-2 group-hover:translate-x-1 transition-transform rtl:group-hover:-translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto text-lg px-8 py-6"
              >
                <Play className="w-5 h-5 me-2" />
                {t('hero.cta.secondary')}
              </Button>
            </div>
          </motion.div>

          {/* Hero Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 relative"
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main Card */}
              <div className="relative z-10 bg-card rounded-3xl shadow-2xl border border-border overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/5 to-accent/10 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <span className="text-4xl font-bold text-primary-foreground">UX</span>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {isRTL ? 'ابدأ رحلتك' : 'Start Your Journey'}
                    </h3>
                    <p className="text-muted-foreground">
                      {isRTL ? 'تعلم من الخبراء' : 'Learn from Experts'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -right-6 bg-card rounded-2xl shadow-lg border border-border p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-success/20 flex items-center justify-center">
                    <span className="text-success text-lg">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{isRTL ? 'شهادة معتمدة' : 'Certified'}</p>
                    <p className="text-xs text-muted-foreground">{isRTL ? 'دوليًا' : 'Internationally'}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -left-6 bg-card rounded-2xl shadow-lg border border-border p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                    <span className="text-primary text-lg">👥</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{isRTL ? '+500 طالب' : '500+ Students'}</p>
                    <p className="text-xs text-muted-foreground">{isRTL ? 'هذا الشهر' : 'This Month'}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            className="fill-secondary/50"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;

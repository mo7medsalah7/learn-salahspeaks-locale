import { LanguageProvider } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import StatsBar from '@/components/StatsBar';
import CampsGrid from '@/components/CampsGrid';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <StatsBar />
          <CampsGrid />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;

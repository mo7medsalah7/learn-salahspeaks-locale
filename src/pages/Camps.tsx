import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CampsGrid from '@/components/CampsGrid';

const CampsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <CampsGrid />
      </main>
      <Footer />
    </div>
  );
};

export default CampsPage;

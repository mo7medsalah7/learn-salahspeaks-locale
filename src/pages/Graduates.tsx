import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GraduatesGrid from '@/components/GraduatesGrid';

const GraduatesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <GraduatesGrid />
      </main>
      <Footer />
    </div>
  );
};

export default GraduatesPage;

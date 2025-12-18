
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CookieBanner from './components/CookieBanner';
import PeaceSection from './components/PeaceSection';
import NextSteps from './components/NextSteps';
import MoreForYou from './components/MoreForYou';
import NewToLife from './components/NewToLife';
import BibleAppSection from './components/BibleAppSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [showCookieBanner, setShowCookieBanner] = useState(true);

  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <PeaceSection />
        <NextSteps />
        <MoreForYou />
        <NewToLife />
        <BibleAppSection />
      </main>

      <Footer />

      {showCookieBanner && (
        <CookieBanner onClose={() => setShowCookieBanner(false)} />
      )}
    </div>
  );
};

export default App;

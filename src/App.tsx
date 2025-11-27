import { useState } from 'react';
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { HomePage } from "./components/pages/HomePage";
import { NewsPage } from "./components/pages/NewsPage";
import { ReviewsPage } from "./components/pages/ReviewsPage";
import { FeaturesPage } from "./components/pages/FeaturesPage";
import { EventsPage } from "./components/pages/EventsPage";
import { VideoPage } from "./components/pages/VideoPage";
import { AboutPage } from "./components/pages/AboutPage";
import { BandsPage } from "./components/pages/BandsPage";
import { ShopPage } from "./components/pages/ShopPage";
import { PageTransition } from "./components/PageTransition";
import { AnimatePresence } from "motion/react";
import { ScrollProgress } from "./components/ui/ScrollProgress";

import { GlobalPlayer } from "./components/GlobalPlayer";
import { MembershipModal } from "./components/MembershipModal";

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'news':
        return <NewsPage />;
      case 'reviews':
        return <ReviewsPage />;
      case 'features':
        return <FeaturesPage />;
      case 'bands':
        return <BandsPage />;
      case 'events':
        return <EventsPage />;
      case 'video':
        return <VideoPage />;
      case 'shop':
        return <ShopPage />;
      case 'about':
        return <AboutPage />;
      case 'home':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-midnight-black text-platinum selection:bg-liquid-gold selection:text-midnight-black pb-20 relative">
      
      {/* Global Noise Texture */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03] mix-blend-overlay">
        <div className="absolute inset-0 bg-repeat animate-grain" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` 
        }}></div>
      </div>

      <ScrollProgress />
      <Navigation onNavigate={setCurrentPage} currentPage={currentPage} />

      <main className="pt-16 relative z-10"> {/* Offset for fixed nav */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
             <PageTransition key={currentPage}>
                {renderPage()}
             </PageTransition>
          </AnimatePresence>
        </div>
      </main>

      <Footer onNavigate={setCurrentPage} />

      {/* Persistent Global Elements */}
      <GlobalPlayer />
      <MembershipModal />
    </div>
  );
}

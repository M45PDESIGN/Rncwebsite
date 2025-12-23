import { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { GlowButton } from './ui/GlowButton';
import { motion, AnimatePresence } from "motion/react";

interface NavigationProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function Navigation({ onNavigate, currentPage }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'news', label: 'News' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'features', label: 'Features' },
    { id: 'bands', label: 'Bands' },
    { id: 'events', label: 'Events' },
    { id: 'video', label: 'Video' },
    { id: 'shop', label: 'Shop' },
    { id: 'about', label: 'About' },
  ];

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-midnight-black/90 backdrop-blur-md border-b border-white/10 h-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        
        {/* Left: Logo */}
        <div className="flex items-center gap-8">
          <motion.button 
            onClick={() => handleNavClick('home')}
            className="text-2xl font-display font-bold text-white tracking-tight relative group"
            whileHover={{ 
              color: "#d4af37",
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            RESONANCE
            <motion.span 
              className="absolute -bottom-1 left-0 h-0.5 bg-liquid-gold"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
          
          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button 
                key={link.id} 
                onClick={() => handleNavClick(link.id)}
                className={`relative text-sm font-bold uppercase tracking-widest transition-colors ${
                  currentPage === link.id ? 'text-liquid-gold' : 'text-platinum/70 hover:text-liquid-gold'
                }`}
              >
                {link.label}
                {currentPage === link.id && (
                  <motion.span 
                    layoutId="navHighlight"
                    className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-liquid-gold"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-4">
          <button className="text-platinum/70 hover:text-white transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <div className="hidden sm:block">
            <motion.button
              onClick={() => handleNavClick('donate')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-liquid-gold text-midnight-black font-bold uppercase tracking-widest text-xs py-2 px-6 rounded-sm hover:bg-white transition-colors shadow-[0_0_15px_rgba(212,175,55,0.3)]"
            >
              Donate
            </motion.button>
          </div>
          <button 
            className="md:hidden text-platinum"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-16 left-0 right-0 bg-midnight-black border-b border-white/10 md:hidden p-4 overflow-hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.button 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  key={link.id} 
                  onClick={() => handleNavClick(link.id)}
                  className={`text-lg font-bold uppercase tracking-widest text-left ${
                    currentPage === link.id ? 'text-liquid-gold' : 'text-platinum hover:text-liquid-gold'
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                 <motion.button
                   onClick={() => handleNavClick('donate')}
                   whileTap={{ scale: 0.95 }}
                   className="w-full bg-liquid-gold text-midnight-black font-bold uppercase tracking-widest text-xs py-3 rounded-sm hover:bg-white transition-colors shadow-lg"
                 >
                   Donate
                 </motion.button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

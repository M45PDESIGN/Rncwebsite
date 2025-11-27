import { useState } from 'react';
import { Instagram, Facebook, Youtube, Twitter, Mail, ArrowRight } from 'lucide-react';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const handleNavClick = (e: React.MouseEvent, pageId: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(pageId);
      window.scrollTo(0, 0);
    }
  };

  return (
    <footer className="bg-midnight-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="md:col-span-4">
            <button 
              onClick={(e) => handleNavClick(e, 'home')}
              className="text-3xl font-display font-bold text-white tracking-tight mb-6 block hover:text-liquid-gold transition-colors text-left"
            >
              RESONANCE
            </button>
            <div className="flex gap-4 mb-8">
              <a href="#" className="text-platinum/60 hover:text-liquid-gold transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-platinum/60 hover:text-liquid-gold transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-platinum/60 hover:text-liquid-gold transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-platinum/60 hover:text-liquid-gold transition-colors"><Youtube className="w-5 h-5" /></a>
            </div>
            <div className="text-platinum/60 text-sm leading-relaxed max-w-sm mb-6">
              <p className="mb-2">Resonance Music & Community is a registered non-profit organization dedicated to supporting underground artists in Austria.</p>
              <p className="font-mono text-xs text-platinum/40">ZVR-Zahl: 123456789 • Murstraße 75, 6063 Rum</p>
            </div>
            <div className="text-platinum/40 text-sm leading-relaxed max-w-sm">
              © 2025 Resonance Music & Community. All rights reserved.
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-2">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">News</h4>
            <ul className="space-y-3 text-sm text-platinum/60">
              <li><button onClick={(e) => handleNavClick(e, 'news')} className="hover:text-white transition-colors text-left">Latest</button></li>
              <li><button onClick={(e) => handleNavClick(e, 'reviews')} className="hover:text-white transition-colors text-left">Reviews</button></li>
              <li><button onClick={(e) => handleNavClick(e, 'features')} className="hover:text-white transition-colors text-left">Features</button></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Community</h4>
            <ul className="space-y-3 text-sm text-platinum/60">
              <li><button onClick={(e) => handleNavClick(e, 'events')} className="hover:text-white transition-colors text-left">Events</button></li>
              <li><button onClick={(e) => handleNavClick(e, 'bands')} className="hover:text-white transition-colors text-left">Bands</button></li>
              <li><button onClick={(e) => handleNavClick(e, 'shop')} className="hover:text-white transition-colors text-left">Shop</button></li>
              <li><a href="#" className="hover:text-white transition-colors">Forums</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Membership</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Organization</h4>
            <ul className="space-y-3 text-sm text-platinum/60">
              <li><button onClick={(e) => handleNavClick(e, 'about')} className="hover:text-white transition-colors text-left">Our Mission</button></li>
              <li><button onClick={(e) => handleNavClick(e, 'about')} className="hover:text-white transition-colors text-left">Transparency</button></li>
              <li><button onClick={(e) => handleNavClick(e, 'about')} className="hover:text-white transition-colors text-left">Board & Team</button></li>
              <li><button onClick={(e) => handleNavClick(e, 'about')} className="hover:text-white transition-colors text-left">Annual Reports</button></li>
              <li><button onClick={(e) => handleNavClick(e, 'about')} className="hover:text-white transition-colors text-left">Contact Us</button></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-2">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Newsletter</h4>
             <div className="flex flex-col gap-2">
               <input 
                 type="email" 
                 placeholder="Email" 
                 className="bg-transparent border-b border-white/20 py-2 text-sm text-white placeholder-white/20 focus:border-liquid-gold outline-none transition-colors"
               />
               <button className="text-left text-xs font-bold uppercase tracking-widest text-liquid-gold hover:text-white transition-colors mt-2">
                 Subscribe →
               </button>
             </div>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
           <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest text-platinum/30">
             <a href="#" className="hover:text-platinum/60">Accessibility</a>
             <a href="#" className="hover:text-platinum/60">Cookies</a>
             <a href="#" className="hover:text-platinum/60">Terms of Use</a>
           </div>
           <div className="text-[10px] font-bold uppercase tracking-widest text-platinum/30">
             Made in Innsbruck
           </div>
        </div>

      </div>
    </footer>
  );
}

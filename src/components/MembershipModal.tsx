import { useState, useEffect } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from './ui/dialog';
import { Star, Check, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function MembershipModal() {
  const [isOpen, setIsOpen] = useState(false);

  // Auto-trigger logic: Show after 30 seconds or on second visit
  // For this demo, we'll just show it after 15 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      // Simple check to prevent it appearing if user is already interacting deeply
      // In a real app, use localStorage to only show once per session/user
      setIsOpen(true);
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="bg-midnight-black border-liquid-gold/20 text-white max-w-2xl p-0 overflow-hidden gap-0">
        <div className="grid md:grid-cols-2">
          
          {/* Image Side */}
          <div className="relative hidden md:block h-full min-h-[400px] bg-obsidian">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight-black via-transparent to-transparent" />
            <div className="absolute top-6 left-6">
               <div className="flex items-center gap-2 bg-liquid-gold/90 text-midnight-black px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-sm shadow-lg">
                 <Star className="w-3 h-3 fill-current" />
                 VIP Access
               </div>
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white font-display font-bold text-2xl leading-none mb-2">
                "The most vital community in underground music."
              </p>
              <p className="text-platinum/60 text-xs uppercase tracking-widest">— Pitchfork</p>
            </div>
          </div>

          {/* Content Side */}
          <div className="p-8 flex flex-col justify-center relative">
            {/* Close button is handled by Dialog primitive, but we can add a custom styling if needed */}
            
            <DialogHeader className="mb-6 text-left">
              <DialogTitle className="text-3xl font-display font-bold text-white uppercase tracking-tight mb-2">
                Join the Inner Circle
              </DialogTitle>
              <DialogDescription className="text-platinum/70 text-base leading-relaxed">
                Unlock exclusive content, presale tickets, and connect with artists in our private Discord server.
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-liquid-gold/10 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-liquid-gold" />
                </div>
                <span className="text-sm text-platinum/80 font-medium">20% Off Shop Merchandise</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-liquid-gold/10 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-liquid-gold" />
                </div>
                <span className="text-sm text-platinum/80 font-medium">Priority Access to Events</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-liquid-gold/10 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-liquid-gold" />
                </div>
                <span className="text-sm text-platinum/80 font-medium">Exclusive Artist AMAs</span>
              </div>
            </div>

            <div className="space-y-3">
              <button className="w-full py-3 bg-liquid-gold text-midnight-black font-bold uppercase tracking-widest hover:bg-white transition-colors text-sm">
                Join for Free
              </button>
              <p className="text-center text-[10px] text-platinum/40 uppercase tracking-widest">
                No credit card required • Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

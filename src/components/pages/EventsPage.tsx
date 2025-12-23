import { Calendar, MapPin, Clock, Ticket } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Sidebar } from '../Sidebar';
import { motion } from "motion/react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function EventsPage() {
  const events = [
    {
      id: 1,
      title: "Alpine Underground Festival 2025",
      date: "Feb 28",
      time: "19:00",
      venue: "Treibhaus Innsbruck",
      image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=800&auto=format&fit=crop",
      category: "FESTIVAL",
      price: "€25"
    },
    {
      id: 2,
      title: "Electronic Production Workshop",
      date: "Mar 15",
      time: "14:00",
      venue: "Resonance Studio",
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800&auto=format&fit=crop",
      category: "WORKSHOP",
      price: "€45"
    },
    {
      id: 3,
      title: "Jazz Jam Session: Open Mic",
      date: "Every Thu",
      time: "20:00",
      venue: "Blue Note Café",
      image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=800&auto=format&fit=crop",
      category: "JAM",
      price: "Free"
    },
    {
      id: 4,
      title: "Synthesizer Masterclass with Elena Kraftwerk",
      date: "Mar 22",
      time: "15:00",
      venue: "Musikhaus Doblinger",
      image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=800&auto=format&fit=crop",
      category: "MASTERCLASS",
      price: "€65"
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-8">
      <div className="lg:col-span-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-white/10 pb-6"
        >
          <div>
            <h1 className="text-4xl font-display font-bold text-white uppercase tracking-tight mb-2">Events</h1>
            <p className="text-platinum/60 text-lg">Curated experiences in Innsbruck and beyond.</p>
          </div>
          <div className="flex gap-3 mt-4 md:mt-0">
            <button className="px-4 py-2 bg-liquid-gold text-midnight-black text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-white transition-colors">
              Calendar View
            </button>
            <button className="px-4 py-2 border border-white/20 text-platinum text-xs font-bold uppercase tracking-widest rounded-sm hover:border-liquid-gold hover:text-liquid-gold transition-colors">
              Submit Event
            </button>
          </div>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-8"
        >
          {events.map((event) => (
            <motion.div 
              key={event.id} 
              variants={item}
              className="group flex flex-col sm:flex-row bg-white/5 border border-white/5 cursor-pointer"
              whileHover={{ 
                borderColor: "rgba(212, 175, 55, 0.4)",
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                y: -4,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="w-full sm:w-56 aspect-video sm:aspect-auto relative overflow-hidden bg-obsidian">
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="w-full h-full"
                >
                  <ImageWithFallback
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100"
                  />
                </motion.div>
                <div className="absolute top-0 left-0 bg-liquid-gold text-midnight-black px-2 py-1 text-[10px] font-bold uppercase tracking-widest">
                  {event.category}
                </div>
              </div>
              
              <div className="p-6 flex flex-col justify-center flex-1">
                <div className="flex justify-between items-start mb-3">
                  <motion.h3 
                    className="text-xl font-display font-bold text-white leading-tight max-w-[80%]"
                    whileHover={{ 
                      color: "#d4af37",
                      x: 4,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {event.title}
                  </motion.h3>
                  <span className="text-platinum font-mono text-sm font-bold bg-white/10 px-2 py-1 rounded">{event.price}</span>
                </div>
                
                <div className="grid grid-cols-2 gap-y-2 text-sm text-platinum/60 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-liquid-gold" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-liquid-gold" />
                    <span>{event.time}</span>
                  </div>
                  <div className="col-span-2 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-liquid-gold" />
                    <span>{event.venue}</span>
                  </div>
                </div>

                <div className="mt-auto pt-4 border-t border-white/10 flex justify-end">
                  <motion.button 
                    className="text-[10px] font-bold uppercase tracking-widest text-white flex items-center gap-2"
                    whileHover={{ 
                      color: "#d4af37",
                      x: 4,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ 
                      scale: 0.95,
                      transition: { duration: 0.1 }
                    }}
                  >
                    <motion.div
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Ticket className="w-3 h-3" />
                    </motion.div>
                    Get Tickets
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-12 text-center">
          <button className="px-8 py-3 border border-liquid-gold/30 text-liquid-gold hover:bg-liquid-gold hover:text-midnight-black text-xs font-bold uppercase tracking-widest transition-all rounded-sm">
            Load More Events
          </button>
        </div>
      </div>

      <aside className="lg:col-span-4 pl-0 lg:pl-8 border-l-0 lg:border-l border-white/5">
        <Sidebar />
      </aside>
    </div>
  );
}

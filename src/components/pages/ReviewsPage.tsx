import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Sidebar } from '../Sidebar';
import { motion } from 'motion/react';
import { GlitchText } from '../ui/GlitchText';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

const item = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1 }
};

export function ReviewsPage() {
  const reviews = [
    {
      id: 1,
      artist: "Elena Kraftwerk",
      album: "Alpine Resonance",
      score: "8.4",
      date: "Jan 25",
      image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=800&auto=format&fit=crop",
      genre: "Ambient / Techno"
    },
    {
      id: 2,
      artist: "The Soft Moon",
      album: "Exister",
      score: "7.8",
      date: "Jan 24",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=800&auto=format&fit=crop",
      genre: "Post-Punk"
    },
    {
      id: 3,
      artist: "Mount Kimbie",
      album: "The Sunset Violent",
      score: "8.1",
      date: "Jan 22",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=800&auto=format&fit=crop",
      genre: "Indie Rock"
    },
    {
      id: 4,
      artist: "Nils Frahm",
      album: "Music for Animals",
      score: "6.9",
      date: "Jan 20",
      image: "https://images.unsplash.com/photo-1507838153414-b4b713384ebd?q=80&w=800&auto=format&fit=crop",
      genre: "Modern Classical"
    },
    {
      id: 5,
      artist: "Floating Points",
      album: "Cascade",
      score: "9.0",
      date: "Jan 18",
      image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=800&auto=format&fit=crop",
      genre: "Electronic"
    },
    {
      id: 6,
      artist: "Burial",
      album: "Antidawn EP",
      score: "7.5",
      date: "Jan 15",
      image: "https://images.unsplash.com/photo-1619983081563-430f63602796?q=80&w=800&auto=format&fit=crop",
      genre: "Ambient"
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-8">
      <div className="lg:col-span-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-b border-white/10 pb-6 mb-8 flex flex-col md:flex-row justify-between items-end gap-4"
        >
          <div>
            <h1 className="text-4xl font-display font-bold text-white uppercase tracking-tight mb-2">
              <GlitchText text="Reviews" />
            </h1>
            <p className="text-platinum/60 text-lg">Critical perspectives on the latest releases.</p>
          </div>
          <div className="flex gap-2 flex-wrap">
             {['All', 'Electronic', 'Rock', 'Experimental'].map(g => (
               <button key={g} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 border border-white/10 text-platinum hover:border-liquid-gold hover:text-liquid-gold transition-colors bg-white/5 hover:bg-white/10">
                 {g}
               </button>
             ))}
          </div>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12"
        >
          {reviews.map((review) => (
            <motion.div key={review.id} variants={item} className="group cursor-pointer">
              <div className="relative aspect-square mb-4 overflow-hidden bg-obsidian border border-white/5 shadow-lg">
                <ImageWithFallback
                  src={review.image}
                  alt={review.album}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-liquid-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay pointer-events-none" />
                
                <div className="absolute top-4 right-4 w-12 h-12 bg-white text-midnight-black font-bold font-display flex items-center justify-center text-lg rounded-full shadow-xl z-10 group-hover:scale-110 transition-transform">
                  {review.score}
                </div>
              </div>
              
              <div className="flex flex-col">
                <div className="text-liquid-gold text-[10px] font-bold tracking-widest uppercase mb-1">
                  {review.artist}
                </div>
                <h2 className="text-2xl font-display font-bold text-white leading-none mb-2 group-hover:text-electric-gold transition-colors">
                  {review.album}
                </h2>
                <div className="flex items-center justify-between mt-1 border-t border-white/10 pt-2 group-hover:border-liquid-gold/30 transition-colors">
                  <span className="text-platinum/40 text-[10px] font-bold uppercase tracking-widest">{review.genre}</span>
                  <span className="text-platinum/40 text-[10px] font-mono">{review.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <button className="px-8 py-3 border border-liquid-gold/30 text-liquid-gold hover:bg-liquid-gold hover:text-midnight-black text-xs font-bold uppercase tracking-widest transition-all rounded-sm">
            Load More Reviews
          </button>
        </div>
      </div>

      <aside className="lg:col-span-4 pl-0 lg:pl-8 border-l-0 lg:border-l border-white/5">
        <Sidebar />
      </aside>
    </div>
  );
}

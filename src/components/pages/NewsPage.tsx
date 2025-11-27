import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Sidebar } from '../Sidebar';
import { motion } from 'motion/react';
import { GlitchText } from '../ui/GlitchText';
import { ArrowRight } from 'lucide-react';

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

export function NewsPage() {
  const newsItems = [
    {
      id: 1,
      title: "Festival Season 2025: First Wave Lineups Announced",
      date: "Jan 25, 2025",
      image: "https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?q=80&w=800&auto=format&fit=crop",
      category: "NEWS",
      excerpt: "From Alpine Underground to Donauinselfest, here's who's playing where this summer."
    },
    {
      id: 2,
      title: "Resonance Community Launches New Grant Program for Electronic Artists",
      date: "Jan 24, 2025",
      image: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
      category: "COMMUNITY",
      excerpt: "A new initiative to fund experimental setups and modular synthesizer projects."
    },
    {
      id: 3,
      title: "Vinyl Sales in Austria Hit 30-Year High",
      date: "Jan 23, 2025",
      image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=800&auto=format&fit=crop",
      category: "INDUSTRY",
      excerpt: "Physical media continues its resurgence, driven by independent record stores in Innsbruck and Vienna."
    },
    {
      id: 4,
      title: "Treibhaus Venue Upgrade: What You Need to Know",
      date: "Jan 22, 2025",
      image: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?q=80&w=800&auto=format&fit=crop",
      category: "LOCAL",
      excerpt: "New sound system, expanded backstage, and what it means for upcoming gigs."
    },
    {
      id: 5,
      title: "Innsbruck Electronic Music Summit Scheduled for May",
      date: "Jan 21, 2025",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
      category: "EVENTS",
      excerpt: "Industry professionals and underground legends gather for a weekend of panels and parties."
    },
    {
      id: 6,
      title: "New Release Radar: Best Austrian Ambient Tracks of the Week",
      date: "Jan 20, 2025",
      image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=800&auto=format&fit=crop",
      category: "MUSIC",
      excerpt: "Featuring new work from Elena Kraftwerk, Mountain Echoes, and more."
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-8">
      <div className="lg:col-span-8">
        <motion.div 
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           className="border-b border-white/10 pb-6 mb-8"
        >
          <h1 className="text-4xl font-display font-bold text-white uppercase tracking-tight mb-2">
             <GlitchText text="News" />
          </h1>
          <p className="text-platinum/60 text-lg">Breaking updates from the underground.</p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-8"
        >
          {newsItems.map((item) => (
            <motion.div 
              key={item.id} 
              variants={item}
              className="flex flex-col md:flex-row gap-6 group cursor-pointer hover:bg-white/5 p-4 -mx-4 rounded-xl transition-colors border border-transparent hover:border-white/5"
            >
              <div className="w-full md:w-64 h-40 shrink-0 bg-obsidian overflow-hidden relative">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-liquid-gold/10 opacity-0 group-hover:opacity-100 transition-opacity mix-blend-overlay" />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-liquid-gold text-[10px] font-bold tracking-widest uppercase bg-liquid-gold/10 px-2 py-0.5 rounded-sm">{item.category}</span>
                  <span className="text-platinum/40 text-[10px] font-mono uppercase">• {item.date}</span>
                </div>
                <h2 className="text-2xl font-display font-bold text-platinum mb-3 leading-tight group-hover:text-electric-gold transition-colors">
                  {item.title}
                </h2>
                <p className="text-platinum/60 text-sm leading-relaxed max-w-2xl group-hover:text-platinum/80 transition-colors">
                  {item.excerpt}
                </p>
                <div className="mt-4 flex items-center text-[10px] font-bold uppercase tracking-widest text-platinum/30 group-hover:text-liquid-gold transition-colors opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300">
                   Read More <ArrowRight className="w-3 h-3 ml-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <button className="px-8 py-3 border border-liquid-gold/30 text-liquid-gold hover:bg-liquid-gold hover:text-midnight-black text-xs font-bold uppercase tracking-widest transition-all rounded-sm">
            Load More News
          </button>
        </div>
      </div>

      <aside className="lg:col-span-4 pl-0 lg:pl-8 border-l-0 lg:border-l border-white/5">
        <Sidebar />
      </aside>
    </div>
  );
}

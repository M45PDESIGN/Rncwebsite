import { Play, Clock, Calendar, Video as VideoIcon } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { motion } from 'motion/react';
import { GlitchText } from '../ui/GlitchText';

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

export function VideoPage() {
  const videos = [
    {
      id: 1,
      title: "Live at Treibhaus: Elena Kraftwerk",
      duration: "45:20",
      date: "Jan 25, 2025",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800&auto=format&fit=crop",
      category: "LIVE SET"
    },
    {
      id: 2,
      title: "Studio Tour: Modular Synthesis with Marcus",
      duration: "12:45",
      date: "Jan 20, 2025",
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800&auto=format&fit=crop",
      category: "DOCUMENTARY"
    },
    {
      id: 3,
      title: "Resonance Sessions: Alpine Ambient",
      duration: "28:10",
      date: "Jan 15, 2025",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=800&auto=format&fit=crop",
      category: "PERFORMANCE"
    },
    {
      id: 4,
      title: "Interview: The Future of Austrian Jazz",
      duration: "18:30",
      date: "Jan 10, 2025",
      image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=800&auto=format&fit=crop",
      category: "INTERVIEW"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="border-b border-white/10 pb-6 mb-8"
      >
        <div className="text-liquid-gold text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
          <VideoIcon className="w-4 h-4" />
          Resonance TV
        </div>
        <h1 className="text-4xl font-display font-bold text-white uppercase tracking-tight mb-2">
          <GlitchText text="Video" />
        </h1>
        <p className="text-platinum/60 text-lg">Live sets, documentaries, and exclusive sessions.</p>
      </motion.div>

      {/* Featured Video */}
      <motion.div 
         initial={{ opacity: 0, scale: 0.95 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.5 }}
         className="mb-16 group cursor-pointer"
      >
        <div className="relative aspect-video bg-obsidian mb-6 overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
           <ImageWithFallback
             src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070&auto=format&fit=crop"
             alt="Featured Video"
             className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-midnight-black via-transparent to-transparent opacity-80" />
           
           <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-24 h-24 bg-liquid-gold rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_40px_rgba(212,175,55,0.3)] backdrop-blur-sm relative z-10">
               <Play className="w-10 h-10 text-midnight-black fill-current ml-1.5" />
             </div>
             <div className="absolute w-24 h-24 bg-liquid-gold rounded-full animate-ping opacity-20"></div>
           </div>
           
           <div className="absolute bottom-6 left-6 z-10">
             <div className="text-electric-gold text-xs font-bold uppercase tracking-widest mb-2 bg-black/50 backdrop-blur-md inline-block px-2 py-1">
               Official Aftermovie
             </div>
           </div>

           <div className="absolute bottom-6 right-6 bg-black/80 backdrop-blur-md px-3 py-1.5 text-sm font-bold text-white rounded flex items-center gap-2 z-10 border border-white/10">
             <Clock className="w-4 h-4 text-liquid-gold" />
             58:20
           </div>
        </div>
        <div className="max-w-4xl">
           <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 group-hover:text-liquid-gold transition-colors">
             Resonance Festival 2024: Official Aftermovie
           </h2>
           <p className="text-platinum/60 text-lg max-w-3xl leading-relaxed">
             Relive the magic of our biggest event yet. Featuring performances from over 20 artists across 3 stages in the heart of the Alps. Experience the sound, the lights, and the community.
           </p>
        </div>
      </motion.div>

      {/* Video Grid */}
      <motion.div 
         variants={container}
         initial="hidden"
         whileInView="show"
         viewport={{ once: true }}
         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {videos.map((video) => (
          <motion.div key={video.id} variants={item} className="group cursor-pointer">
            <div className="relative aspect-video mb-4 bg-obsidian overflow-hidden border border-white/5 group-hover:border-liquid-gold/30 transition-all">
              <ImageWithFallback
                src={video.image}
                alt={video.title}
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 backdrop-blur-[1px]">
                <div className="w-12 h-12 bg-white/10 border border-white/50 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="w-5 h-5 text-white fill-current ml-0.5" />
                </div>
              </div>
              <div className="absolute top-2 left-2 bg-liquid-gold text-midnight-black px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest">
                {video.category}
              </div>
              <div className="absolute bottom-2 right-2 bg-black/80 px-1.5 py-0.5 text-[10px] font-bold text-white rounded font-mono">
                {video.duration}
              </div>
            </div>
            <h3 className="text-lg font-bold text-white leading-tight group-hover:text-liquid-gold transition-colors mb-2">
              {video.title}
            </h3>
            <div className="flex items-center gap-2 text-xs text-platinum/40 font-mono uppercase">
              <Calendar className="w-3 h-3" />
              {video.date}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-16 text-center">
        <button className="px-8 py-3 border border-liquid-gold/30 text-liquid-gold hover:bg-liquid-gold hover:text-midnight-black text-xs font-bold uppercase tracking-widest transition-all rounded-sm">
          Load More Videos
        </button>
      </div>
    </div>
  );
}

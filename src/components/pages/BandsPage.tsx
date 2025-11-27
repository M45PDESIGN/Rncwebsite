import { Music, ArrowRight, Disc, Search, Filter, Mic2, Play } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Sidebar } from '../Sidebar';
import { useState } from 'react';
import { motion } from "motion/react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function BandsPage() {
  const [activeGenre, setActiveGenre] = useState('All');

  const bands = [
    {
      id: 1,
      name: "The Innsbruck Collective",
      genre: "Experimental Techno",
      location: "Innsbruck, Tyrol",
      image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=800&auto=format&fit=crop",
      latestRelease: "Mountain Echoes EP",
      status: "Touring",
      members: 4,
      founded: 2019
    },
    {
      id: 2,
      name: "Alpine Frequency",
      genre: "Ambient / Drone",
      location: "Salzburg",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
      latestRelease: "Glacier Movements",
      status: "Recording",
      members: 1,
      founded: 2021
    },
    {
      id: 3,
      name: "Neon Valley",
      genre: "Synth-Pop",
      location: "Vienna",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=800&auto=format&fit=crop",
      latestRelease: "Night Lights",
      status: "Active",
      members: 3,
      founded: 2020
    },
    {
      id: 4,
      name: "Echo Chamber",
      genre: "Post-Punk",
      location: "Graz",
      image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=800&auto=format&fit=crop",
      latestRelease: "Shadows",
      status: "Touring",
      members: 5,
      founded: 2018
    },
    {
      id: 5,
      name: "Modular Minds",
      genre: "Electronic",
      location: "Linz",
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800&auto=format&fit=crop",
      latestRelease: "Voltage Control",
      status: "Hiatus",
      members: 2,
      founded: 2022
    },
    {
      id: 6,
      name: "Velvet Noise",
      genre: "Shoegaze",
      location: "Innsbruck",
      image: "https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&w=800&auto=format&fit=crop",
      latestRelease: "Soft Focus",
      status: "Active",
      members: 4,
      founded: 2023
    },
    {
      id: 7,
      name: "Dark Matter",
      genre: "Industrial",
      location: "Vienna",
      image: "https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=800&auto=format&fit=crop",
      latestRelease: "Void",
      status: "Active",
      members: 3,
      founded: 2021
    },
    {
      id: 8,
      name: "Solar Flares",
      genre: "Psychedelic Rock",
      location: "Graz",
      image: "https://images.unsplash.com/photo-1459749411177-0473ef71607b?q=80&w=800&auto=format&fit=crop",
      latestRelease: "Sunspots",
      status: "Active",
      members: 4,
      founded: 2019
    }
  ];

  const genres = ['All', 'Electronic', 'Ambient', 'Post-Punk', 'Synth-Pop', 'Shoegaze'];

  const filteredBands = activeGenre === 'All' 
    ? bands 
    : bands.filter(b => b.genre.includes(activeGenre) || (activeGenre === 'Electronic' && b.genre.includes('Techno')));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-8">
      <div className="lg:col-span-8">
        
        {/* Directory Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-b border-white/10 pb-8 mb-12"
        >
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-8">
             <div>
               <h1 className="text-4xl font-display font-bold text-white uppercase tracking-tight mb-2">Artist Directory</h1>
               <p className="text-platinum/60 text-lg">Discover the {bands.length} artists shaping the Austrian underground.</p>
             </div>
             <div className="w-full md:w-auto flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-2 rounded-sm focus-within:border-liquid-gold transition-colors">
               <Search className="w-4 h-4 text-platinum/40" />
               <input 
                 type="text" 
                 placeholder="Search artists..." 
                 className="bg-transparent border-none outline-none text-sm text-platinum placeholder:text-platinum/40 w-full md:w-48"
               />
             </div>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-hide">
             <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-platinum/40 pr-4 border-r border-white/10">
               <Filter className="w-3 h-3" />
               Filter
             </div>
             {genres.map(genre => (
               <button
                 key={genre}
                 onClick={() => setActiveGenre(genre)}
                 className={`px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-sm whitespace-nowrap transition-all ${
                   activeGenre === genre 
                     ? 'bg-liquid-gold text-midnight-black' 
                     : 'text-platinum/60 hover:text-white hover:bg-white/5'
                 }`}
               >
                 {genre}
               </button>
             ))}
          </div>
        </motion.div>

        {/* Featured Artist Spotlight */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.98 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.5 }}
           className="mb-16 bg-gradient-to-r from-obsidian to-midnight-black border border-white/5 relative overflow-hidden group cursor-pointer"
        >
           <div className="absolute top-0 right-0 p-4 z-10">
             <span className="bg-liquid-gold text-midnight-black text-[10px] font-bold uppercase tracking-widest px-2 py-1">Artist Spotlight</span>
           </div>
           <div className="grid md:grid-cols-5 gap-0">
             <div className="md:col-span-2 relative h-64 md:h-auto overflow-hidden">
               <ImageWithFallback
                 src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=1000&auto=format&fit=crop"
                 alt="Featured Artist"
                 className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-r from-transparent to-obsidian/80 md:hidden"></div>
             </div>
             <div className="md:col-span-3 p-8 flex flex-col justify-center relative">
               <div className="flex items-center gap-3 mb-3">
                 <div className="text-liquid-gold text-xs font-bold uppercase tracking-widest">Experimental Techno</div>
                 <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                 <div className="text-platinum/40 text-xs font-bold uppercase tracking-widest">Innsbruck</div>
               </div>
               <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">The Innsbruck Collective</h2>
               <p className="text-platinum/70 text-sm leading-relaxed mb-6 max-w-md">
                 Blending analog synthesis with field recordings from the Tyrolean Alps, the collective creates a sound that is both icy and intensely human.
               </p>
               <div className="flex items-center gap-4">
                 <button className="px-6 py-2.5 bg-white text-midnight-black text-xs font-bold uppercase tracking-widest hover:bg-liquid-gold transition-colors flex items-center gap-2">
                   <Play className="w-3 h-3 fill-current" />
                   Latest Release
                 </button>
                 <button className="px-6 py-2.5 border border-white/20 text-white text-xs font-bold uppercase tracking-widest hover:border-white transition-colors">
                   View Profile
                 </button>
               </div>
             </div>
           </div>
        </motion.div>

        {/* Artist Grid */}
        <motion.div 
           variants={container}
           initial="hidden"
           animate="show"
           key={activeGenre} // Re-animate on filter change
           className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10"
        >
          {filteredBands.map((band) => (
            <motion.div 
              key={band.id} 
              variants={item}
              className="group cursor-pointer flex flex-col bg-white/5 border border-white/5 hover:border-liquid-gold/30 transition-all p-4"
            >
              <div className="relative aspect-video mb-4 overflow-hidden bg-obsidian">
                <ImageWithFallback
                  src={band.image}
                  alt={band.name}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                {band.status === "Touring" && (
                  <div className="absolute top-2 right-2 flex items-center gap-1 bg-midnight-black/90 backdrop-blur-sm px-2 py-1 rounded-sm text-[10px] font-bold uppercase tracking-widest text-electric-gold border border-electric-gold/20">
                    <span className="w-1.5 h-1.5 bg-electric-gold rounded-full animate-pulse"></span>
                    On Tour
                  </div>
                )}
              </div>
              
              <div className="flex flex-col flex-1">
                <h2 className="text-xl font-display font-bold text-white leading-none mb-2 group-hover:text-liquid-gold transition-colors">
                  {band.name}
                </h2>
                <div className="flex items-center gap-2 text-xs text-platinum/40 mb-4 uppercase tracking-wider">
                  <Mic2 className="w-3 h-3" />
                  <span>{band.genre}</span>
                </div>
                
                <div className="mt-auto pt-4 border-t border-white/10 grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-[10px] text-platinum/30 uppercase tracking-widest mb-1">Latest Release</div>
                    <div className="text-xs font-bold text-platinum truncate">{band.latestRelease}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-platinum/30 uppercase tracking-widest mb-1">Location</div>
                    <div className="text-xs font-bold text-platinum">{band.location}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <button className="px-8 py-3 border border-liquid-gold/30 text-liquid-gold hover:bg-liquid-gold hover:text-midnight-black text-xs font-bold uppercase tracking-widest transition-all rounded-sm">
            Load More Artists
          </button>
        </div>
      </div>

      <aside className="lg:col-span-4 pl-0 lg:pl-8 border-l-0 lg:border-l border-white/5">
        <Sidebar />
      </aside>
    </div>
  );
}

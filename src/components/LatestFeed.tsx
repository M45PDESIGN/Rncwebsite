import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion, useMotionValue, useSpring } from "motion/react";
import { ArrowRight, Clock, MessageSquare, Share2, TrendingUp } from 'lucide-react';
import { GlitchText } from './ui/GlitchText';
import { useRef } from 'react';

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

export function LatestFeed() {
  const articles = [
    {
      id: 1,
      title: "The Best Ambient Tracks of January 2025",
      category: "LIST",
      author: "Marcus Weber",
      date: "Jan 25",
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800&auto=format&fit=crop",
      excerpt: "From drone textures to field recordings, here are the essential listens for the winter season.",
      readTime: "5 min read",
      comments: 12,
      trending: true
    },
    {
      id: 2,
      title: "Treibhaus: A Venue History",
      category: "FEATURE",
      author: "Anna Kraft",
      date: "Jan 24",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=800&auto=format&fit=crop",
      excerpt: "Tracing the roots of Innsbruck's most iconic cultural space from 1981 to today.",
      readTime: "8 min read",
      comments: 8,
      trending: false
    },
    {
      id: 3,
      title: "Synthesizer Workshop: Eurorack Basics",
      category: "TUTORIAL",
      author: "Tom Berg",
      date: "Jan 23",
      image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=800&auto=format&fit=crop",
      excerpt: "Getting started with modular synthesis without breaking the bank. A comprehensive guide to your first rack.",
      readTime: "12 min read",
      comments: 24,
      trending: false
    },
    {
      id: 4,
      title: "Review: The Soft Moon - 'Exister'",
      category: "REVIEW",
      author: "Sarah Müller",
      date: "Jan 22",
      image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=800&auto=format&fit=crop",
      score: "7.8",
      excerpt: "A dark, introspective journey into industrial post-punk that rewards repeated listening.",
      readTime: "4 min read",
      comments: 3,
      trending: false
    },
    {
      id: 5,
      title: "Community Spotlight: The Innsbruck Collective",
      category: "COMMUNITY",
      author: "Resonance Team",
      date: "Jan 21",
      image: "https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?q=80&w=800&auto=format&fit=crop",
      excerpt: "Meet the artists shaping the local scene and organizing the monthly 'Underground' nights.",
      readTime: "6 min read",
      comments: 15,
      trending: true
    },
    {
      id: 6,
      title: "Vinyl Revival: Best Record Stores in Tyrol",
      category: "GUIDE",
      author: "Felix Hofer",
      date: "Jan 20",
      image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=800&auto=format&fit=crop",
      excerpt: "Where to dig for crates in the mountains. Hidden gems and established classics.",
      readTime: "7 min read",
      comments: 6,
      trending: false
    }
  ];

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className="flex flex-col divide-y divide-white/5"
    >
      <div className="py-4 border-b border-white/10 mb-8 flex justify-between items-end">
        <h2 className="text-2xl font-display font-bold text-white uppercase tracking-tight">
          <GlitchText text="Latest Stories" />
        </h2>
        <div className="flex items-center gap-3">
           <div className="hidden sm:flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-platinum/40">
             <span className="text-liquid-gold">All</span>
             <span className="hover:text-white cursor-pointer transition-colors">Reviews</span>
             <span className="hover:text-white cursor-pointer transition-colors">Features</span>
             <span className="hover:text-white cursor-pointer transition-colors">News</span>
           </div>
           <div className="h-4 w-px bg-white/10 hidden sm:block"></div>
           <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-liquid-gold rounded-full animate-pulse"></span>
              <span className="text-xs font-mono text-liquid-gold uppercase">Live Feed</span>
           </div>
        </div>
      </div>
      
      {articles.map((article) => (
        <motion.div 
          key={article.id} 
          variants={item}
          className="group py-8 flex flex-col sm:flex-row gap-6 cursor-pointer px-4 -mx-4 rounded-xl relative overflow-hidden"
          whileHover={{ 
            backgroundColor: "rgba(255, 255, 255, 0.03)",
            transition: { duration: 0.3 }
          }}
        >
          {/* Subtle highlight on hover */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent pointer-events-none" 
            initial={{ opacity: 0, x: -100 }}
            whileHover={{ 
              opacity: 1, 
              x: 0,
              transition: { duration: 0.6, ease: "easeOut" }
            }}
          />

          <motion.div 
            className="w-full sm:w-48 h-48 sm:h-32 shrink-0 relative bg-obsidian overflow-hidden rounded-sm border border-white/5 z-10"
            whileHover={{ 
              borderColor: "rgba(212, 175, 55, 0.4)",
              transition: { duration: 0.3 }
            }}
          >
            <motion.div
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full h-full"
            >
              <ImageWithFallback
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              />
            </motion.div>
            {article.score && (
              <div className="absolute top-0 right-0 bg-liquid-gold text-midnight-black text-xs font-bold w-8 h-8 flex items-center justify-center shadow-lg">
                {article.score}
              </div>
            )}
            {article.trending && (
              <div className="absolute top-0 left-0 bg-electric-gold text-midnight-black px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-widest flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                Hot
              </div>
            )}
            <div className="absolute bottom-0 left-0 bg-midnight-black/90 backdrop-blur-sm px-2 py-1 text-[10px] font-bold uppercase text-white border-t border-r border-white/10 group-hover:text-liquid-gold transition-colors">
              {article.category}
            </div>
          </motion.div>
          
          <div className="flex flex-col flex-1 min-w-0 z-10">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex items-center gap-1.5 text-liquid-gold text-[10px] font-bold uppercase tracking-widest">
                 <div className="w-4 h-4 rounded-full bg-liquid-gold/20 flex items-center justify-center text-[8px]">
                   {article.author.charAt(0)}
                 </div>
                 {article.author}
              </div>
              <span className="text-platinum/20 text-[10px]">•</span>
              <span className="text-platinum/40 text-[10px] font-mono uppercase flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {article.readTime}
              </span>
            </div>
            
            <motion.h3 
              className="text-xl sm:text-2xl font-display font-bold text-platinum mb-2 leading-tight truncate sm:whitespace-normal"
              whileHover={{ 
                color: "#FFD700",
                x: 4,
                transition: { duration: 0.3 }
              }}
            >
              {article.title}
            </motion.h3>
            
            <p className="text-platinum/60 text-sm leading-relaxed max-w-xl line-clamp-2 mb-4 group-hover:text-platinum/80 transition-colors">
              {article.excerpt}
            </p>
            
            <div className="flex items-center justify-between mt-auto border-t border-white/5 pt-3">
              <div className="flex items-center gap-4">
                 <motion.div 
                   className="flex items-center gap-1.5 text-xs text-platinum/40 cursor-pointer"
                   whileHover={{ 
                     color: "rgba(229, 229, 229, 0.8)",
                     scale: 1.05,
                     transition: { duration: 0.2 }
                   }}
                   whileTap={{ scale: 0.95 }}
                 >
                   <MessageSquare className="w-3 h-3" />
                   <span>{article.comments}</span>
                 </motion.div>
                 <motion.div 
                   className="flex items-center gap-1.5 text-xs text-platinum/40 cursor-pointer"
                   whileHover={{ 
                     color: "rgba(229, 229, 229, 0.8)",
                     scale: 1.05,
                     transition: { duration: 0.2 }
                   }}
                   whileTap={{ scale: 0.95 }}
                 >
                   <Share2 className="w-3 h-3" />
                   <span>Share</span>
                 </motion.div>
              </div>
              <motion.div 
                className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-platinum/30"
                whileHover={{ 
                  color: "#d4af37",
                  x: 4,
                  transition: { duration: 0.3 }
                }}
              >
                Read Story 
                <motion.div
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowRight className="w-3 h-3" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      ))}
      
      <div className="pt-8 pb-8 text-center">
        <motion.button 
          className="group px-8 py-3 border border-liquid-gold/30 text-liquid-gold text-xs font-bold uppercase tracking-widest rounded-sm flex items-center gap-2 mx-auto overflow-hidden relative"
          whileHover={{ 
            backgroundColor: "#d4af37",
            color: "#0a0a0a",
            scale: 1.05,
            transition: { duration: 0.3 }
          }}
          whileTap={{ 
            scale: 0.98,
            transition: { duration: 0.1 }
          }}
        >
          <span className="relative z-10">Load More Stories</span>
          <motion.div
            whileHover={{ x: 3 }}
            transition={{ duration: 0.3 }}
            className="relative z-10"
          >
            <ArrowRight className="w-4 h-4" />
          </motion.div>
          
          {/* Ripple effect */}
          <motion.div
            className="absolute inset-0 bg-liquid-gold/20"
            initial={{ scale: 0, opacity: 0 }}
            whileTap={{ 
              scale: 2,
              opacity: [0.5, 0],
              transition: { duration: 0.5 }
            }}
          />
        </motion.button>
      </div>
    </motion.div>
  );
}

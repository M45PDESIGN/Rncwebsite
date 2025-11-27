import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';
import { motion } from "motion/react";
import { GlitchText } from './ui/GlitchText';

export function EditorialHero() {
  const topStory = {
    title: "The Rise of Innsbruck's Electronic Underground",
    subtitle: "How a small alpine city became the unlikely capital of experimental techno.",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop",
    author: "Sarah Müller",
    category: "FEATURE"
  };

  const secondaryStories = [
    {
      id: 1,
      title: "Elena Kraftwerk: 'Alpine Resonance' Review",
      category: "REVIEW",
      image: "https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&w=800&auto=format&fit=crop",
      score: "8.4"
    },
    {
      id: 2,
      title: "5 Synthesizers That Defined 2024",
      category: "GEAR",
      image: "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Interview: The Future of Digital Curation",
      category: "INTERVIEW",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-liquid-gold/20 border-b border-liquid-gold/20">
      {/* Main Feature */}
      <div className="lg:col-span-2 bg-midnight-black relative group cursor-pointer overflow-hidden">
        <div className="aspect-[16/9] lg:aspect-auto lg:h-[500px] relative">
           <motion.div 
             className="w-full h-full"
             whileHover={{ scale: 1.05 }}
             transition={{ duration: 0.7 }}
           >
             <ImageWithFallback
               src={topStory.image}
               alt={topStory.title}
               className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700"
             />
           </motion.div>
           <div className="absolute inset-0 bg-gradient-to-t from-midnight-black via-midnight-black/20 to-transparent"></div>
           <div className="absolute bottom-0 left-0 p-8 lg:p-12 w-full">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
             >
               <div className="text-electric-gold text-xs font-bold tracking-widest uppercase mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-electric-gold rounded-full animate-pulse"></span>
                  {topStory.category}
               </div>
               <h1 className="text-4xl lg:text-6xl font-display font-bold text-white mb-4 leading-[0.95] tracking-tight group-hover:text-platinum transition-colors">
                 <GlitchText text={topStory.title} />
               </h1>
               <p className="text-platinum/80 text-lg lg:text-xl max-w-xl leading-relaxed mb-6">
                 {topStory.subtitle}
               </p>
               <div className="flex items-center gap-3 text-sm text-platinum/60 uppercase tracking-widest font-medium">
                  <span>By {topStory.author}</span>
                  <span className="w-1 h-1 bg-liquid-gold rounded-full"></span>
                  <span>Today</span>
               </div>
             </motion.div>
           </div>
        </div>
      </div>

      {/* Side Stories */}
      <div className="bg-midnight-black flex flex-col divide-y divide-liquid-gold/10">
        {secondaryStories.map((story, index) => (
          <motion.div 
            key={story.id} 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * (index + 1) }}
            className="flex-1 p-6 flex gap-4 group cursor-pointer hover:bg-white/5 transition-colors"
          >
             <div className="w-24 h-24 shrink-0 relative overflow-hidden bg-obsidian">
               <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.4 }} className="w-full h-full">
                 <ImageWithFallback
                   src={story.image}
                   alt={story.title}
                   className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                 />
               </motion.div>
               {story.score && (
                 <div className="absolute top-0 right-0 bg-liquid-gold text-midnight-black text-xs font-bold px-1.5 py-0.5">
                   {story.score}
                 </div>
               )}
             </div>
             <div className="flex flex-col justify-center">
               <div className="text-liquid-gold text-[10px] font-bold tracking-widest uppercase mb-1.5">{story.category}</div>
               <h3 className="text-platinum font-display font-bold text-lg leading-tight group-hover:text-electric-gold transition-colors">
                 {story.title}
               </h3>
             </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

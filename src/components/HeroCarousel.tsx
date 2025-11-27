import { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "./ui/carousel";
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Play, Pause } from 'lucide-react';
import { GlitchText } from './ui/GlitchText';

const slides = [
  {
    id: 1,
    title: "The Rise of Innsbruck's Electronic Underground",
    subtitle: "How a small alpine city became the unlikely capital of experimental techno.",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop",
    author: "Sarah Müller",
    category: "FEATURE",
    date: "Today"
  },
  {
    id: 2,
    title: "Sonic Landscapes: A Journey Through Ambient",
    subtitle: "Exploring the textures and drones that define the modern ambient scene in Austria.",
    image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=2070&auto=format&fit=crop",
    author: "Markus Lang",
    category: "DEEP DIVE",
    date: "Yesterday"
  },
  {
    id: 3,
    title: "Visualizing Sound: The Art of Live Coding",
    subtitle: "Meet the visual artists turning code into immersive audiovisual experiences.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    author: "Lisa Weber",
    category: "TECH",
    date: "2 Days Ago"
  }
];

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

export function HeroCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    if (!api || !isPlaying) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [api, isPlaying]);

  const togglePlay = () => setIsPlaying(!isPlaying);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-liquid-gold/20 border-b border-liquid-gold/20">
      {/* Carousel Section */}
      <div className="lg:col-span-2 bg-midnight-black relative group overflow-hidden">
        <Carousel setApi={setApi} className="w-full h-full" opts={{ loop: true }}>
          <CarouselContent className="h-full ml-0">
            {slides.map((slide, index) => (
              <CarouselItem key={slide.id} className="pl-0 h-full">
                 <div className="aspect-[16/9] lg:aspect-auto lg:h-[550px] relative w-full h-full overflow-hidden">
                   {/* Grain Overlay */}
                   <div className="absolute inset-0 z-10 opacity-[0.07] mix-blend-overlay pointer-events-none bg-repeat animate-grain" 
                        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` }}></div>
                   
                   <motion.div 
                     className="w-full h-full"
                     initial={{ scale: 1 }}
                     animate={{ scale: current === index ? 1.05 : 1 }}
                     transition={{ duration: 6, ease: "linear" }}
                   >
                     <ImageWithFallback
                       src={slide.image}
                       alt={slide.title}
                       className="w-full h-full object-cover opacity-80"
                     />
                   </motion.div>
                   <div className="absolute inset-0 bg-gradient-to-t from-midnight-black via-midnight-black/40 to-transparent"></div>
                   
                   {/* Content Overlay */}
                   <div className="absolute bottom-0 left-0 p-8 lg:p-12 w-full max-w-3xl z-20">
                     <AnimatePresence mode="wait">
                       {current === index && (
                         <motion.div
                           key={slide.id}
                           initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                           animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                           exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                           transition={{ duration: 0.6, delay: 0.2 }}
                         >
                           <div className="text-electric-gold text-xs font-bold tracking-widest uppercase mb-3 flex items-center gap-2">
                             <span className="w-2 h-2 bg-liquid-gold rounded-full animate-pulse"></span>
                             {slide.category}
                           </div>
                           <h1 className="text-4xl lg:text-6xl font-display font-bold text-white mb-4 leading-[0.95] tracking-tight">
                             <GlitchText text={slide.title} />
                           </h1>
                           <p className="text-platinum/80 text-lg lg:text-xl leading-relaxed mb-6 line-clamp-2 max-w-xl">
                             {slide.subtitle}
                           </p>
                           <div className="flex items-center gap-3 text-sm text-platinum/60 uppercase tracking-widest font-medium">
                              <span>By {slide.author}</span>
                              <span className="w-1 h-1 bg-liquid-gold rounded-full"></span>
                              <span>{slide.date}</span>
                           </div>
                         </motion.div>
                       )}
                     </AnimatePresence>
                   </div>
                 </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Custom Controls */}
          <div className="absolute bottom-8 right-8 flex items-center gap-4 z-30">
            <button 
              onClick={togglePlay} 
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:border-liquid-gold transition-colors backdrop-blur-sm"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 pl-0.5" />}
            </button>
            <div className="flex items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => api?.scrollTo(i)}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    current === i ? "bg-liquid-gold w-8" : "bg-white/20 hover:bg-white/40 w-4"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2 ml-4">
                <CarouselPrevious className="static translate-y-0 bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-liquid-gold hover:border-liquid-gold rounded-full w-10 h-10" />
                <CarouselNext className="static translate-y-0 bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-liquid-gold hover:border-liquid-gold rounded-full w-10 h-10" />
            </div>
          </div>
        </Carousel>
      </div>

      {/* Side Stories (Static) */}
      <div className="bg-midnight-black flex flex-col divide-y divide-liquid-gold/10">
        {secondaryStories.map((story, i) => (
          <motion.div 
             key={story.id} 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ delay: i * 0.1 }}
             viewport={{ once: true }}
             className="flex-1 p-6 flex gap-4 group cursor-pointer hover:bg-white/5 transition-colors relative overflow-hidden"
          >
             {/* Hover Highlight */}
             <div className="absolute inset-0 bg-gradient-to-r from-liquid-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             
             <div className="w-24 h-24 shrink-0 relative overflow-hidden bg-obsidian border border-white/5 group-hover:border-liquid-gold/30 transition-colors z-10">
               <ImageWithFallback
                 src={story.image}
                 alt={story.title}
                 className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-110"
               />
               {story.score && (
                 <div className="absolute top-0 right-0 bg-liquid-gold text-midnight-black text-xs font-bold px-1.5 py-0.5 z-10">
                   {story.score}
                 </div>
               )}
             </div>
             <div className="flex flex-col justify-center z-10">
               <div className="text-liquid-gold text-[10px] font-bold tracking-widest uppercase mb-1.5">{story.category}</div>
               <h3 className="text-platinum font-display font-bold text-lg leading-tight group-hover:text-electric-gold transition-colors">
                 {story.title}
               </h3>
               <div className="flex items-center mt-2 text-platinum/30 group-hover:text-liquid-gold transition-colors text-xs font-bold uppercase tracking-widest">
                 Read <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
               </div>
             </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

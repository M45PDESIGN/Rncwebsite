import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Search, Filter, TrendingUp, Mail, User, Star, Plus, ChevronRight, Hash } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { GlitchText } from '../ui/GlitchText';
import { Button } from '../ui/button';

// --- Data & Types ---

type Category = 'All' | 'Music' | 'Visual Art' | 'Performing Arts' | 'Film & Media';
type SubCategory = string;

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  source: string;
  date: string;
  image: string;
  category: Category;
  subCategory: SubCategory;
  isAustrian?: boolean;
}

const CATEGORIES: { [key in Category]: SubCategory[] } = {
  'All': [],
  'Music': ['Classical', 'Jazz', 'Pop/Rock', 'Folk & World', 'Electronic'],
  'Visual Art': ['Painting', 'Sculpture', 'Photography', 'Digital Art', 'Installations'],
  'Performing Arts': ['Theater', 'Dance', 'Opera'],
  'Film & Media': ['Cinema', 'New Media', 'Documentary']
};

const NEWS_ITEMS: NewsItem[] = [
  {
    id: 1,
    title: "Vienna Philharmonic: New Conductor Announced for Summer Night Concert",
    excerpt: "The prestigious orchestra breaks tradition with a surprise appointment that signals a new direction for the annual Schönbrunn event.",
    source: "ORF Kultur",
    date: "2 hours ago",
    image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=800&auto=format&fit=crop",
    category: "Music",
    subCategory: "Classical",
    isAustrian: true
  },
  {
    id: 2,
    title: "Digital Renaissance: How AI is Reshaping Graz's Art Scene",
    excerpt: "A collective of digital artists is using machine learning to visualize the city's historical soundscapes.",
    source: "Hyperallergic",
    date: "4 hours ago",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800&auto=format&fit=crop",
    category: "Visual Art",
    subCategory: "Digital Art",
    isAustrian: true
  },
  {
    id: 3,
    title: "Jazz Fest Wien 2025: The Underground Lineup Revealed",
    excerpt: "Forget the headliners—here are the basement jazz clubs and local trios you absolutely cannot miss this July.",
    source: "mica music austria",
    date: "6 hours ago",
    image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=800&auto=format&fit=crop",
    category: "Music",
    subCategory: "Jazz",
    isAustrian: true
  },
  {
    id: 4,
    title: "Venice Biennale: Austrian Pavilion Provokes Controversy",
    excerpt: "The new installation challenges viewers with a stark confrontation of environmental themes.",
    source: "Artforum",
    date: "1 day ago",
    image: "https://images.unsplash.com/photo-1493012168393-5aa5cb9337b5?q=80&w=800&auto=format&fit=crop",
    category: "Visual Art",
    subCategory: "Installations"
  },
  {
    id: 5,
    title: "Review: 'Alpine Echoes' at the Salzburg Museum",
    excerpt: "An evocative journey through the history of mountain music, juxtaposing traditional zithers with modern sound art.",
    source: "Resonance Editorial",
    date: "1 day ago",
    image: "https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=800&auto=format&fit=crop",
    category: "Visual Art",
    subCategory: "Exhibition",
    isAustrian: true
  },
  {
    id: 6,
    title: "Electronic Producers to Watch in 2025",
    excerpt: "From deep techno to experimental ambient, these five producers are setting the tone for the coming year.",
    source: "Classic FM",
    date: "2 days ago",
    image: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?q=80&w=800&auto=format&fit=crop",
    category: "Music",
    subCategory: "Electronic"
  },
  {
    id: 7,
    title: "The Return of Analog Photography in Vienna",
    excerpt: "Young photographers are ditching digital for film, reviving darkrooms across the 7th district.",
    source: "Resonance Editorial",
    date: "3 days ago",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop",
    category: "Visual Art",
    subCategory: "Photography",
    isAustrian: true
  }
];

// --- Components ---

export function NewsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [activeSubCategory, setActiveSubCategory] = useState<SubCategory | null>(null);
  const [sortOrder, setSortOrder] = useState<'Latest' | 'Popular'>('Latest');

  const filteredItems = NEWS_ITEMS.filter(item => {
    if (activeCategory !== 'All' && item.category !== activeCategory) return false;
    if (activeSubCategory && item.subCategory !== activeSubCategory) return false;
    return true;
  });

  return (
    <div className="bg-midnight-black min-h-screen text-platinum pb-20">
      
      {/* 1. PAGE HEADER */}
      <header className="border-b border-white/10 pb-12 mb-12 pt-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-8"
          >
            <div>
              <h1 className="text-5xl md:text-7xl font-display font-bold text-white uppercase tracking-tight mb-4">
                <GlitchText text="Culture Feed" />
              </h1>
              <p className="text-xl text-platinum/60 max-w-2xl font-light">
                News, reviews, and inspiration from the world of music and art.
              </p>
            </div>
            
            {/* Trusted Sources */}
            <div className="flex flex-col gap-2">
              <span className="text-[10px] uppercase tracking-widest text-platinum/40 font-bold">Curated From</span>
              <div className="flex flex-wrap gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Text placeholders for logos as per style guide */}
                <span className="text-xs font-serif font-bold border border-white/20 px-2 py-1">ORF Kultur</span>
                <span className="text-xs font-sans font-black italic border border-white/20 px-2 py-1">mica</span>
                <span className="text-xs font-serif border border-white/20 px-2 py-1">ARTFORUM</span>
                <span className="text-xs font-mono font-bold border border-white/20 px-2 py-1">Hyperallergic</span>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
        
        {/* MAIN CONTENT AREA */}
        <div className="lg:col-span-8">
          
          {/* 2. FILTER BAR */}
          <div className="sticky top-20 z-30 bg-midnight-black/95 backdrop-blur-md py-4 border-b border-white/10 mb-8 -mx-4 px-4 md:mx-0 md:px-0">
            <div className="flex flex-col gap-4">
              {/* Top Level Categories */}
              <div className="flex items-center justify-between gap-4 overflow-x-auto pb-2 scrollbar-hide">
                <div className="flex gap-2">
                  {(Object.keys(CATEGORIES) as Category[]).map((cat) => (
                    <button
                      key={cat}
                      onClick={() => { setActiveCategory(cat); setActiveSubCategory(null); }}
                      className={`px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-sm transition-all whitespace-nowrap ${
                        activeCategory === cat 
                          ? 'bg-white text-midnight-black shadow-lg scale-105' 
                          : 'bg-white/5 text-platinum/60 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sub Categories & Tools */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex gap-2 overflow-x-auto w-full sm:w-auto scrollbar-hide pb-1">
                  {CATEGORIES[activeCategory]?.length > 0 ? (
                     CATEGORIES[activeCategory].map((sub) => (
                      <button
                        key={sub}
                        onClick={() => setActiveSubCategory(sub === activeSubCategory ? null : sub)}
                        className={`text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border transition-colors whitespace-nowrap ${
                          activeSubCategory === sub
                            ? 'border-liquid-gold text-liquid-gold bg-liquid-gold/10'
                            : 'border-white/10 text-platinum/40 hover:border-white/30 hover:text-white'
                        }`}
                      >
                        {sub}
                      </button>
                    ))
                  ) : (
                    <span className="text-[10px] uppercase tracking-widest text-platinum/30 italic">All topics</span>
                  )}
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                   <div className="relative flex-grow sm:flex-grow-0">
                     <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 text-platinum/40" />
                     <input 
                       type="text" 
                       placeholder="Search..." 
                       className="w-full sm:w-40 bg-white/5 border border-white/10 rounded-sm py-1.5 pl-8 pr-3 text-xs text-platinum focus:border-liquid-gold outline-none transition-colors"
                     />
                   </div>
                   <div className="h-4 w-px bg-white/10 hidden sm:block"></div>
                   <select 
                     value={sortOrder}
                     onChange={(e) => setSortOrder(e.target.value as any)}
                     className="bg-transparent text-xs font-bold uppercase tracking-widest text-platinum/60 outline-none cursor-pointer hover:text-white"
                   >
                     <option value="Latest">Latest</option>
                     <option value="Popular">Popular</option>
                   </select>
                </div>
              </div>
            </div>
          </div>

          {/* 3. NEWS FEED */}
          <div className="space-y-8">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="group relative bg-obsidian border border-white/5 hover:border-liquid-gold/30 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                >
                  <div className="flex flex-col sm:flex-row h-full">
                    {/* Thumbnail */}
                    <div className="w-full sm:w-64 h-48 sm:h-auto relative shrink-0 overflow-hidden">
                       <ImageWithFallback src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                       <div className="absolute inset-0 bg-liquid-gold/10 opacity-0 group-hover:opacity-100 transition-opacity mix-blend-overlay" />
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 flex flex-col justify-between flex-grow">
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-sm ${
                            item.category === 'Music' 
                              ? 'bg-liquid-gold/10 text-liquid-gold' 
                              : 'bg-platinum/10 text-platinum'
                          }`}>
                            {item.category}
                          </span>
                          <span className="text-[10px] uppercase tracking-widest text-platinum/40">
                             {item.subCategory}
                          </span>
                          {item.isAustrian && (
                            <span className="ml-auto flex items-center gap-1 text-[10px] text-red-400 font-bold uppercase tracking-widest">
                               <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                               Austrian Spotlight
                            </span>
                          )}
                        </div>
                        
                        <h3 className="text-xl font-display font-bold text-white mb-2 leading-tight group-hover:text-liquid-gold transition-colors">
                          {item.title}
                        </h3>
                        
                        <p className="text-platinum/60 text-sm leading-relaxed line-clamp-2 mb-4">
                          {item.excerpt}
                        </p>
                      </div>

                      <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-2">
                         <div className="flex items-center gap-2 text-xs text-platinum/40">
                            <span className="font-bold text-platinum/60">{item.source}</span>
                            <span>•</span>
                            <span>{item.date}</span>
                         </div>
                         <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-platinum/40 group-hover:text-white transition-colors">
                            Read Article <ArrowRight className="w-3 h-3" />
                         </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {filteredItems.length === 0 && (
              <div className="text-center py-20 border border-dashed border-white/10 rounded-lg">
                <p className="text-platinum/40">No stories found in this category.</p>
                <button 
                  onClick={() => { setActiveCategory('All'); setActiveSubCategory(null); }}
                  className="mt-4 text-liquid-gold text-xs font-bold uppercase tracking-widest hover:underline"
                >
                  Clear Filters
                </button>
              </div>
            )}
            
            <div className="text-center pt-8">
               <Button variant="outline" className="border-white/10 text-platinum/60 hover:text-white hover:border-white uppercase tracking-widest text-xs h-12 px-8">
                 Load More Stories
               </Button>
            </div>
          </div>
        </div>

        {/* 4. SIDEBAR */}
        <div className="lg:col-span-4 space-y-12">
           
           {/* Trending Topics */}
           <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white mb-6">
                <Hash className="w-4 h-4 text-liquid-gold" /> Trending Topics
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Vienna Philharmonic', 'Art Basel', 'Donauinselfest', 'Jazz Festival', 'AI Art', 'Street Art'].map(tag => (
                  <button key={tag} className="px-3 py-1.5 bg-midnight-black border border-white/10 rounded-sm text-xs text-platinum/60 hover:text-liquid-gold hover:border-liquid-gold transition-colors">
                    #{tag.replace(/\s+/g, '')}
                  </button>
                ))}
              </div>
           </div>

           {/* Local Spotlight */}
           <div className="relative group overflow-hidden rounded-xl border border-white/10">
              <div className="aspect-[4/5] relative">
                 <ImageWithFallback 
                   src="https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=800&auto=format&fit=crop" 
                   alt="Artist Spotlight" 
                   className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-midnight-black via-transparent to-transparent opacity-90" />
                 <div className="absolute top-4 right-4 bg-liquid-gold text-midnight-black text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm">
                    Artist of the Month
                 </div>
                 <div className="absolute bottom-6 left-6 right-6">
                    <h4 className="text-2xl font-display font-bold text-white mb-1">Lukas M.</h4>
                    <p className="text-liquid-gold text-xs font-bold uppercase tracking-widest mb-3">Multimedia Sculptor • Graz</p>
                    <p className="text-platinum/80 text-xs leading-relaxed mb-4 line-clamp-3">
                       Redefining spatial awareness through light and recycled industrial materials.
                    </p>
                    <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white hover:text-liquid-gold transition-colors">
                       View Profile <ArrowRight className="w-3 h-3" />
                    </button>
                 </div>
              </div>
           </div>

           {/* Newsletter */}
           <div className="bg-liquid-gold p-8 rounded-xl text-midnight-black relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="relative z-10">
                 <Mail className="w-6 h-6 mb-4" />
                 <h3 className="font-display font-bold text-2xl mb-2">Culture Weekly</h3>
                 <p className="text-sm font-medium opacity-80 mb-6">
                   Get the best of Austrian music and art delivered to your inbox every Friday.
                 </p>
                 <div className="space-y-2">
                   <input type="email" placeholder="Email Address" className="w-full bg-midnight-black/10 border-none placeholder-midnight-black/50 text-midnight-black px-4 py-3 text-sm focus:ring-2 focus:ring-white rounded-sm" />
                   <button className="w-full bg-midnight-black text-white font-bold uppercase tracking-widest text-xs py-3 rounded-sm hover:bg-white hover:text-midnight-black transition-colors">
                     Sign Up
                   </button>
                 </div>
              </div>
           </div>

           {/* Submit News */}
           <div className="border border-dashed border-white/20 rounded-xl p-6 text-center hover:border-liquid-gold/50 transition-colors group cursor-pointer">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-liquid-gold group-hover:text-midnight-black transition-colors">
                 <Plus className="w-6 h-6" />
              </div>
              <h3 className="text-white font-bold mb-2">Got a Story?</h3>
              <p className="text-xs text-platinum/50 mb-4 px-4">
                We're always looking for new voices and hidden gems in the Austrian scene.
              </p>
              <span className="text-liquid-gold text-xs font-bold uppercase tracking-widest group-hover:text-white transition-colors">
                 Submit News
              </span>
           </div>

        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-center">
         <p className="text-platinum/40 text-xs">
           We curate content from trusted cultural sources. Click through to read full articles on their respective platforms.
         </p>
      </div>

    </div>
  );
}

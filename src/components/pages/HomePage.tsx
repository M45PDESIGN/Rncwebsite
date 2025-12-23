import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Music, Palette, Play, ExternalLink, MapPin } from 'lucide-react';
import { GlowButton } from '../ui/GlowButton';
import { Button } from '../ui/button';

// --- Mock Data ---

const TICKER_ITEMS = [
  { text: "Resonance Grants 2024 applications are now open for all disciplines", source: "via RnC Support" },
  { text: "Vienna Philharmonic announces open air summer residency at Schönbrunn", source: "via ORF Kultur" },
  { text: "New community workspace opening in Innsbruck for members", source: "via RnC News" },
  { text: "Contemporary Art Fair 'Viennacontemporary' opens applications", source: "via Artforum" },
  { text: "Monthly Artist Meetup: This Friday at 19:00", source: "via RnC Events" },
];

const HERO_SLIDES = [
  {
    id: 'community',
    category: 'Community',
    title: 'Supporting Musicians & Artists in Austria',
    subtitle: 'We provide community, resources, and opportunities for creative professionals across all disciplines.',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    type: 'Mission'
  },
  {
    id: 'music',
    category: 'Music',
    title: 'From Classical to Electronic',
    subtitle: 'Connecting musicians of every genre with the stages and support they need.',
    image: 'https://images.unsplash.com/photo-1507838153414-b4b713384ebd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    type: 'Focus'
  },
  {
    id: 'art',
    category: 'Visual Art',
    title: 'A Canvas for Everyone',
    subtitle: 'Empowering painters, sculptors, and digital artists to showcase their work.',
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    type: 'Focus'
  }
];

const FEED_ITEMS = [
  {
    id: 1,
    category: 'Community',
    subcategory: 'Announcement',
    title: "Welcome to the New Resonance Platform",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    source: "RnC Team",
    time: "Just now"
  },
  {
    id: 2,
    category: 'Music',
    subcategory: 'Classical',
    title: "Reimagining Mozart for the Digital Age",
    image: "https://images.unsplash.com/photo-1702524598856-70c855481d9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    source: "Resonance Editorial",
    time: "2 hours ago"
  },
  {
    id: 3,
    category: 'Art',
    subcategory: 'Sculpture',
    title: "Light and Form: The Sculptures of Anna W.",
    image: "https://images.unsplash.com/photo-1765145298698-fdb8cdd96bc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    source: "Gallery Watch",
    time: "4 hours ago"
  },
  {
    id: 4,
    category: 'Music',
    subcategory: 'Jazz',
    title: "Innsbruck Jazz Festival Preview",
    image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    source: "Local Scene",
    time: "1 day ago"
  }
];

const EVENTS = [
  { id: 1, type: 'community', title: "New Member Orientation", date: "Oct 24", venue: "RnC HQ", category: "Meeting" },
  { id: 2, type: 'art', title: "Modern Perspectives", date: "Oct 25", venue: "Innsbruck Gallery", category: "Exhibition" },
  { id: 3, type: 'music', title: "Symphony No. 5", date: "Nov 02", venue: "Musikverein", category: "Classical" },
  { id: 4, type: 'music', title: "Electronic Sunday", date: "Nov 05", venue: "Silly World", category: "Club" },
];

const ARTISTS = [
  { name: "Elena K.", role: "Jazz Pianist", image: "https://images.unsplash.com/photo-1763215733028-02803292649c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
  { name: "Marcus T.", role: "Abstract Painter", image: "https://images.unsplash.com/photo-1663268254109-d58c3f67c7c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
  { name: "Sarah J.", role: "Violinist", image: "https://images.unsplash.com/photo-1702524598856-70c855481d9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
  { name: "Placeholder A.", role: "Your Name Here", image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
  { name: "Placeholder B.", role: "Join Us", image: "https://images.unsplash.com/photo-1459749411177-d4a414c9ff86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
];

// --- Components ---

export function HomePage() {
  const [activeTab, setActiveTab] = useState<'all' | 'music' | 'art'>('all');
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

  // Auto-rotate hero every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const filteredFeed = activeTab === 'all' 
    ? FEED_ITEMS 
    : FEED_ITEMS.filter(item => item.category.toLowerCase() === activeTab);

  return (
    <div className="bg-midnight-black min-h-screen text-platinum font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden mb-12 group">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentHeroSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 z-0"
          >
            <div className="absolute inset-0 bg-black/50 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight-black via-transparent to-transparent z-10" />
            <img 
              src={HERO_SLIDES[currentHeroSlide].image} 
              alt="Hero" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 z-20 flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto h-full">
          <div className="max-w-4xl pt-20">
            <motion.div 
              key={`tag-${currentHeroSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="bg-liquid-gold text-midnight-black text-sm font-bold uppercase tracking-widest px-4 py-1 rounded-sm">
                {HERO_SLIDES[currentHeroSlide].category}
              </span>
            </motion.div>
            
            <motion.h1 
              key={`title-${currentHeroSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 tracking-tight leading-[1.1]"
            >
              {HERO_SLIDES[currentHeroSlide].title}
            </motion.h1>
            
            <motion.p 
              key={`sub-${currentHeroSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-platinum/90 max-w-3xl font-light leading-relaxed mb-10"
            >
              {HERO_SLIDES[currentHeroSlide].subtitle}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <GlowButton className="bg-liquid-gold text-midnight-black hover:bg-white text-base py-4 px-8">
                Join Our Community
              </GlowButton>
              <button className="flex items-center gap-2 text-white border border-white/30 hover:bg-white/10 transition-colors px-8 py-4 rounded-sm font-bold uppercase tracking-widest text-sm">
                Learn More
              </button>
            </motion.div>
          </div>
          
          {/* Slide Indicators */}
          <div className="absolute bottom-12 right-8 flex gap-2 z-30">
            {HERO_SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentHeroSlide(idx)}
                className={`w-12 h-1 rounded-full transition-all ${idx === currentHeroSlide ? 'bg-liquid-gold' : 'bg-white/20 hover:bg-white/40'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 2. LIVE TICKER */}
      <section className="border-y border-white/10 bg-midnight-black py-4 overflow-hidden whitespace-nowrap mb-16 relative z-20">
        <motion.div 
          className="flex items-center gap-12"
          animate={{ x: "-50%" }}
          transition={{ 
            duration: 25, 
            ease: "linear", 
            repeat: Infinity,
            repeatType: "loop" 
          }}
          style={{ width: "fit-content" }}
        >
          {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <div key={i} className="flex items-center gap-4 text-sm flex-shrink-0">
              <span className="text-liquid-gold text-xs">●</span>
              <span className="text-white font-medium">{item.text}</span>
              <span className="text-platinum/40 uppercase text-[10px] tracking-widest">{item.source}</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* MAIN CONTENT GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* 3. DUAL CONTENT FEED (Left - 8 cols) */}
          <div className="lg:col-span-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
              <h2 className="text-3xl font-display font-bold text-white">Latest Updates</h2>
              
              {/* Tabs */}
              <div className="flex gap-1 bg-white/5 p-1 rounded-lg">
                {(['all', 'music', 'art'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-1.5 text-xs font-bold uppercase tracking-widest rounded-md transition-all ${
                      activeTab === tab 
                        ? 'bg-liquid-gold text-midnight-black shadow-lg' 
                        : 'text-platinum/50 hover:text-white'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredFeed.map((item) => (
                  <motion.div
                    layout
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="group cursor-pointer bg-obsidian border border-white/5 hover:border-liquid-gold/30 rounded-lg overflow-hidden transition-all"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <div className="absolute top-4 left-4 z-10">
                        <span className="bg-midnight-black/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm border border-white/10">
                          {item.subcategory}
                        </span>
                      </div>
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-3 text-[10px] text-platinum/50 uppercase tracking-widest">
                        <span className="text-liquid-gold font-bold">{item.category}</span>
                        <span>•</span>
                        <span>{item.source}</span>
                        <span>•</span>
                        <span>{item.time}</span>
                      </div>
                      <h3 className="text-lg font-bold text-white leading-tight group-hover:text-liquid-gold transition-colors mb-4">
                        {item.title}
                      </h3>
                      <div className="flex items-center text-xs font-bold uppercase tracking-widest text-platinum/30 group-hover:text-white transition-colors">
                        Read More <ArrowRight className="w-3 h-3 ml-1" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            
            <div className="mt-12 text-center">
              <Button variant="outline" className="border-white/20 text-platinum hover:text-white hover:border-white uppercase tracking-widest text-xs font-bold py-4 px-8 h-auto">
                View All News & Stories
              </Button>
            </div>
          </div>

          {/* 4. SIDEBAR (Right - 4 cols) */}
          <div className="lg:col-span-4 space-y-12">
            
            {/* Mission Box */}
            <div className="bg-liquid-gold p-8 rounded-xl text-midnight-black">
               <h3 className="font-display font-bold text-xl mb-3">Our Mission</h3>
               <p className="text-sm font-medium opacity-80 mb-6 leading-relaxed">
                 We are Resonance Music & Community (RnC). A non-profit dedicated to providing community, resources, and opportunities for creative professionals across all disciplines in Austria.
               </p>
               <div className="grid grid-cols-3 gap-2 text-center mb-6">
                 <div className="bg-midnight-black/10 rounded p-2">
                   <div className="font-bold text-lg">Community</div>
                 </div>
                 <div className="bg-midnight-black/10 rounded p-2">
                   <div className="font-bold text-lg">Support</div>
                 </div>
                 <div className="bg-midnight-black/10 rounded p-2">
                   <div className="font-bold text-lg">Exposure</div>
                 </div>
               </div>
               <button className="w-full bg-midnight-black text-white font-bold uppercase tracking-widest text-xs py-3 rounded hover:bg-white hover:text-midnight-black transition-colors">
                 About Us
               </button>
            </div>

            {/* Events Widget */}
            <div className="bg-obsidian border border-white/10 rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-display font-bold text-white">Upcoming Events</h3>
                <button className="text-xs text-liquid-gold uppercase tracking-widest font-bold hover:underline">Calendar</button>
              </div>
              
              <div className="space-y-4">
                {EVENTS.map((event) => (
                  <div key={event.id} className="flex gap-4 group cursor-pointer hover:bg-white/5 p-2 -mx-2 rounded-lg transition-colors">
                    <div className="flex-shrink-0 w-12 text-center pt-1">
                      <div className="text-liquid-gold font-bold text-lg leading-none">{event.date.split(' ')[1]}</div>
                      <div className="text-platinum/40 text-[10px] uppercase font-bold">{event.date.split(' ')[0]}</div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-1">
                        {event.type === 'music' ? <Music className="w-3 h-3 text-platinum/50" /> : <Palette className="w-3 h-3 text-platinum/50" />}
                        <span className="text-[10px] text-platinum/50 uppercase tracking-widest">{event.category}</span>
                      </div>
                      <h4 className="text-white font-bold text-sm mb-1 group-hover:text-liquid-gold transition-colors">{event.title}</h4>
                      <div className="flex items-center gap-1 text-xs text-platinum/40">
                        <MapPin className="w-3 h-3" /> {event.venue}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Mini */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
              <h3 className="text-white font-display font-bold text-xl mb-2">Stay Connected</h3>
              <p className="text-platinum/60 text-sm mb-4">Join our newsletter for weekly updates on grants, events, and artist features.</p>
              <input type="email" placeholder="Your email address" className="w-full bg-midnight-black border border-white/20 rounded-sm p-3 text-sm text-white mb-2 focus:border-liquid-gold outline-none" />
              <button className="w-full bg-white text-midnight-black font-bold uppercase tracking-widest text-xs py-3 rounded-sm hover:bg-liquid-gold transition-colors">
                Sign Up
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* 5. ARTIST SPOTLIGHT */}
      <section className="border-t border-white/10 py-20 bg-obsidian/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">Featured Creators</h2>
              <p className="text-platinum/60">Discover the diverse talent within our community.</p>
            </div>
            <div className="flex gap-2">
              <button className="p-2 border border-white/10 rounded-full hover:bg-white/10 text-white"><ArrowRight className="w-5 h-5 rotate-180" /></button>
              <button className="p-2 border border-white/10 rounded-full hover:bg-white/10 text-white"><ArrowRight className="w-5 h-5" /></button>
            </div>
          </div>
          
          <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x">
            {ARTISTS.map((artist, i) => (
              <div key={i} className="min-w-[280px] group snap-start">
                <div className="aspect-[3/4] overflow-hidden rounded-lg mb-4 relative">
                  <img src={artist.image} alt={artist.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0" />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight-black/90 to-transparent opacity-60" />
                  <div className="absolute bottom-4 left-4">
                     <div className="text-white font-bold text-xl">{artist.name}</div>
                     <div className="text-liquid-gold text-xs uppercase tracking-widest font-bold">{artist.role}</div>
                  </div>
                </div>
              </div>
            ))}
            <div className="min-w-[200px] flex items-center justify-center border border-dashed border-white/10 rounded-lg group cursor-pointer hover:border-liquid-gold/50 transition-colors">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-white/5 mx-auto flex items-center justify-center mb-3 group-hover:bg-liquid-gold group-hover:text-midnight-black transition-colors">
                  <ArrowRight className="w-6 h-6" />
                </div>
                <div className="text-sm font-bold text-platinum">View All Members</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. COMMUNITY CALL TO ACTION */}
      <section className="relative py-32 overflow-hidden bg-liquid-gold">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-multiply" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-midnight-black">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Join Our Community</h2>
          <p className="text-xl md:text-2xl font-medium mb-10 opacity-80 max-w-2xl mx-auto leading-relaxed">
            Whether you're a classical musician, a jazz improvisor, or a visual artist, Resonance is your home for collaboration and growth.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <button className="h-14 px-10 bg-midnight-black text-white text-sm font-bold uppercase tracking-widest rounded-sm hover:bg-white hover:text-midnight-black transition-colors shadow-2xl">
               Become a Member
             </button>
             <button className="h-14 px-10 border-2 border-midnight-black text-midnight-black font-bold uppercase tracking-widest text-sm rounded-sm hover:bg-midnight-black hover:text-white transition-colors">
               Apply for Support
             </button>
          </div>
        </div>
      </section>

      {/* 7. MEDIA PLAYER BAR */}
      <div className="bg-obsidian border-t border-white/10 py-6">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-liquid-gold flex items-center justify-center rounded-full text-midnight-black flex-shrink-0 animate-pulse">
                <Play className="w-4 h-4 fill-current ml-1" />
              </div>
              <div className="hidden sm:block">
                <div className="text-xs text-liquid-gold uppercase tracking-widest font-bold mb-1">Featured Artist</div>
                <div className="text-white font-bold text-sm">Resonance Community Playlist • Vol. 4</div>
              </div>
            </div>
            <div className="flex-grow max-w-md h-1 bg-white/10 rounded-full overflow-hidden">
               <div className="w-2/3 h-full bg-liquid-gold" />
            </div>
            <div className="flex gap-4 text-platinum/50">
               <button className="hover:text-white flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                 Listen on Spotify <ExternalLink className="w-4 h-4" />
               </button>
            </div>
         </div>
      </div>

    </div>
  );
}

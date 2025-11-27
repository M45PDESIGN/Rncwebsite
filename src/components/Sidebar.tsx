import { Calendar, Mail, ArrowRight, Star, Heart, TrendingUp, Play, Users } from 'lucide-react';
import { motion } from 'motion/react';

export function Sidebar() {
  const upcomingEvents = [
    { title: "Acoustic Night", venue: "Treibhaus", date: "Tomorrow, 20:00", genre: "Folk" },
    { title: "Electronic Session", venue: "Warehouse", date: "Feb 02, 23:00", genre: "Techno" },
    { title: "Jazz Workshop", venue: "Blue Note", date: "Feb 08, 14:00", genre: "Jazz" }
  ];

  const topTracks = [
    { id: 1, artist: "Alpine Frequency", title: "Glacier Movements", change: "up" },
    { id: 2, artist: "The Soft Moon", title: "Become The Lies", change: "same" },
    { id: 3, artist: "Burial", title: "Chemz", change: "down" },
    { id: 4, artist: "Kiasmos", title: "Blurred", change: "up" },
    { id: 5, artist: "Rival Consoles", title: "Vibrations", change: "up" }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="space-y-12 sticky top-24"
    >
      {/* Mission Widget - Non-Profit Highlight */}
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="p-6 border border-white/10 bg-white/5 backdrop-blur-sm relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-liquid-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        <h3 className="text-white font-display font-bold text-lg uppercase tracking-widest mb-4 flex items-center gap-2 relative z-10">
          <Heart className="w-4 h-4 text-liquid-gold" />
          Our Mission
        </h3>
        <p className="text-platinum/70 text-sm mb-6 leading-relaxed relative z-10">
          Resonance is a non-profit dedicated to fostering the Austrian underground music scene. We support artists through education, community, and performance opportunities.
        </p>
        <div className="flex flex-col gap-3 relative z-10">
          <div className="flex items-center gap-3 text-xs text-platinum/50">
            <div className="flex -space-x-2">
               {[1,2,3].map(i => (
                 <div key={i} className="w-6 h-6 rounded-full bg-white/10 border border-midnight-black flex items-center justify-center overflow-hidden">
                   <div className="w-full h-full bg-platinum/20"></div>
                 </div>
               ))}
            </div>
            <span>Joined by 1,240 members</span>
          </div>
          <button className="w-full py-3 border border-white/20 text-xs font-bold uppercase tracking-widest text-white hover:bg-white hover:text-midnight-black transition-colors">
            Read Manifesto
          </button>
        </div>
      </motion.div>

      {/* Top 10 Chart */}
      <div>
        <div className="py-2 border-b border-white/10 mb-6 flex justify-between items-end">
          <h3 className="text-lg font-display font-bold text-platinum uppercase tracking-tight flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-liquid-gold" />
            Resonance Charts
          </h3>
        </div>
        <div className="flex flex-col gap-1">
          {topTracks.map((track, i) => (
            <motion.div 
              key={track.id} 
              whileHover={{ x: 5, backgroundColor: "rgba(255,255,255,0.05)" }}
              className="group flex items-center gap-3 p-2 rounded-sm transition-colors cursor-pointer"
            >
              <span className="font-display font-bold text-2xl text-white/10 group-hover:text-liquid-gold transition-colors w-6 text-center">
                {i + 1}
              </span>
              <div className="flex-1 min-w-0">
                <div className="font-bold text-platinum text-sm truncate group-hover:text-white">{track.title}</div>
                <div className="text-xs text-platinum/40 truncate">{track.artist}</div>
              </div>
              <button className="w-8 h-8 flex items-center justify-center text-platinum/20 group-hover:text-liquid-gold opacity-0 group-hover:opacity-100 transition-all scale-0 group-hover:scale-100">
                <Play className="w-3 h-3 fill-current" />
              </button>
            </motion.div>
          ))}
        </div>
        <button className="w-full mt-4 text-xs font-bold uppercase tracking-widest text-platinum/40 hover:text-liquid-gold py-2 transition-colors">
          View Full Top 50
        </button>
      </div>

      {/* Newsletter Widget */}
      <div className="p-8 border border-liquid-gold/20 bg-gradient-to-b from-liquid-gold/5 to-transparent relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-liquid-gold/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 transition-transform duration-1000 group-hover:scale-110" />
        
        <div className="relative z-10">
          <h3 className="text-liquid-gold font-display font-bold text-lg uppercase tracking-widest mb-2 flex items-center gap-2">
            <Mail className="w-4 h-4" />
            The Frequency
          </h3>
          <p className="text-platinum/70 text-sm mb-6 leading-relaxed">
            Deep dives, artist interviews, and secret show locations. Delivered weekly.
          </p>
          <div className="flex flex-col gap-2">
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-midnight-black/80 border border-white/10 px-4 py-3 text-sm text-platinum w-full focus:border-liquid-gold transition-colors outline-none placeholder:text-platinum/20"
            />
            <button className="bg-liquid-gold text-midnight-black py-3 font-bold uppercase tracking-widest text-xs hover:bg-white transition-colors shadow-[0_0_20px_rgba(212,175,55,0.1)] hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]">
              Subscribe
            </button>
          </div>
          <p className="text-[10px] text-platinum/30 mt-3 text-center">No spam. Unsubscribe anytime.</p>
        </div>
      </div>

      {/* Upcoming Events Widget */}
      <div>
        <div className="py-2 border-b border-white/10 mb-6 flex justify-between items-end">
          <h3 className="text-lg font-display font-bold text-platinum uppercase tracking-tight">Events</h3>
          <a href="#" className="text-[10px] text-platinum/50 hover:text-liquid-gold uppercase tracking-widest">Calendar</a>
        </div>
        <ul className="space-y-6">
          {upcomingEvents.map((event, i) => (
            <motion.li 
              key={i} 
              whileHover={{ x: 5 }}
              className="group cursor-pointer flex gap-4"
            >
              <div className="flex flex-col items-center justify-center w-12 h-12 border border-white/10 bg-white/5 group-hover:border-liquid-gold/50 transition-colors shrink-0">
                 <span className="text-[10px] font-bold text-liquid-gold uppercase">{event.date.split(' ')[0]}</span>
                 <span className="text-lg font-display font-bold text-white">{event.date.split(' ')[1]?.replace(',', '') || '02'}</span>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                   <span className="text-[10px] font-bold bg-white/10 px-1.5 py-0.5 rounded text-platinum/60 group-hover:text-white transition-colors">{event.genre}</span>
                </div>
                <div className="text-platinum font-bold leading-tight group-hover:text-liquid-gold transition-colors mb-0.5">{event.title}</div>
                <div className="text-xs text-platinum/40">{event.venue} • {event.date.split(', ')[1]}</div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* VIP Promo */}
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="relative overflow-hidden p-8 bg-liquid-gold text-midnight-black group cursor-pointer"
      >
        <div className="relative z-10">
          <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-widest mb-3 opacity-80 border-b border-midnight-black/10 pb-3">
            <Star className="w-3 h-3" />
            Resonance VIP
          </div>
          <h3 className="font-display font-bold text-3xl leading-none mb-2">Unlock Full Access</h3>
          <p className="text-sm font-medium opacity-80 mb-6 leading-relaxed">Exclusive content, presale tickets, and community features.</p>
          <button className="w-full bg-midnight-black text-liquid-gold py-3 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-midnight-black transition-colors shadow-lg">
            Join Now
          </button>
        </div>
        <div className="absolute -right-8 -bottom-8 text-white opacity-20 mix-blend-overlay transition-transform duration-1000 group-hover:rotate-45">
          <Star className="w-40 h-40 rotate-12" />
        </div>
      </motion.div>
      
      {/* Community Ad */}
      <motion.div 
        whileHover={{ scale: 0.98 }}
        className="aspect-square bg-obsidian relative flex flex-col items-center justify-center border border-white/5 p-6 text-center group cursor-pointer overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?q=80&w=600&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:opacity-50 transition-opacity duration-700 grayscale mix-blend-luminosity"></div>
        <div className="relative z-10">
           <Users className="w-8 h-8 text-liquid-gold mx-auto mb-3" />
           <h4 className="font-display font-bold text-xl text-white mb-2">Join the Discord</h4>
           <p className="text-xs text-platinum/70 mb-4">Connect with 2,000+ artists and fans in our private server.</p>
           <span className="text-[10px] font-bold uppercase tracking-widest text-white border-b border-liquid-gold pb-0.5 group-hover:border-white transition-colors">Connect Now</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

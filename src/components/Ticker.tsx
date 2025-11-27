import { motion } from "motion/react";

export function Ticker() {
  const items = [
    "New Album: Alpine Frequency drops 'Glacier Movements' this Friday",
    "Event: Electronic Poetry Night at Treibhaus - Tickets Low",
    "Community: Join our Discord server for exclusive content",
    "Tech: Modular Synth Workshop sold out, waitlist open",
    "Review: Velvet Noise 'Soft Focus' gets 8.9 BNM"
  ];

  return (
    <div className="bg-liquid-gold text-midnight-black overflow-hidden py-2 border-y border-midnight-black/10 relative z-20">
      <div className="flex whitespace-nowrap">
        <motion.div 
          className="flex gap-12"
          animate={{ x: "-50%" }}
          transition={{ 
            duration: 20, 
            ease: "linear", 
            repeat: Infinity 
          }}
        >
          {[...items, ...items, ...items].map((item, i) => (
            <div key={i} className="text-xs font-bold uppercase tracking-widest flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-midnight-black rounded-full"></span>
              {item}
            </div>
          ))}
        </motion.div>
        <motion.div 
          className="flex gap-12 ml-12"
          animate={{ x: "-50%" }}
          transition={{ 
            duration: 20, 
            ease: "linear", 
            repeat: Infinity 
          }}
        >
          {[...items, ...items, ...items].map((item, i) => (
            <div key={i} className="text-xs font-bold uppercase tracking-widest flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-midnight-black rounded-full"></span>
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

import { useState, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Radio, Maximize2, Check, BarChart3 } from 'lucide-react';
import { Slider } from './ui/slider';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { GlitchText } from './ui/GlitchText';

export function GlobalPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState([75]);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState([35]);
  
  // Spotify Integration State
  const [source, setSource] = useState<'radio' | 'spotify'>('radio');
  const [isSpotifyConnected, setIsSpotifyConnected] = useState(false);
  const [showConnectModal, setShowConnectModal] = useState(false);

  // Mock current track
  const track = source === 'radio' ? {
    title: "Glacier Movements (Live)",
    artist: "Alpine Frequency",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=200&auto=format&fit=crop",
    duration: "5:42",
    current: "2:15"
  } : {
    title: "Midnight City",
    artist: "M83",
    image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=200&auto=format&fit=crop",
    duration: "4:03",
    current: "1:20"
  };

  // Mock Live Radio effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress(p => {
          if (p[0] >= 100) return [0];
          return [p[0] + 0.1];
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleSpotifyConnect = () => {
    // Simulate connection delay
    setTimeout(() => {
      setIsSpotifyConnected(true);
      setSource('spotify');
      setShowConnectModal(false);
    }, 1500);
  };

  return (
    <>
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1, type: "spring", stiffness: 100, damping: 20 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-midnight-black/95 backdrop-blur-xl border-t border-white/10 h-24 shadow-2xl shadow-black"
      >
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-white/5 group cursor-pointer overflow-hidden">
          <motion.div 
            className={`h-full relative transition-colors ${source === 'spotify' ? 'bg-[#1DB954]' : 'bg-liquid-gold'}`}
            style={{ width: `${progress[0]}%` }}
            layoutId="progress"
          >
            <div className={`absolute right-0 top-1/2 -translate-y-1/2 w-32 h-full bg-gradient-to-l from-white/50 to-transparent opacity-50`} />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_10px_rgba(255,255,255,0.8)] scale-150" />
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between gap-6">
          
          {/* Track Info */}
          <div className="flex items-center gap-5 w-1/3">
            <div className="relative w-16 h-16 shrink-0 group cursor-pointer overflow-hidden bg-obsidian border border-white/5 shadow-lg">
               <ImageWithFallback
                 src={track.image}
                 alt={track.title}
                 className={`w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700 ${isPlaying ? 'scale-105' : 'scale-100'}`}
               />
               {/* Audio Visualizer Overlay */}
               {isPlaying && (
                 <div className="absolute inset-0 flex items-end justify-center gap-0.5 pb-1 bg-gradient-to-t from-black/80 to-transparent">
                   {[...Array(6)].map((_, i) => (
                     <motion.div
                       key={i}
                       className="w-1 bg-liquid-gold"
                       animate={{ height: [4, 12, 6, 14, 4] }}
                       transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse", delay: i * 0.1 }}
                     />
                   ))}
                 </div>
               )}
               <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-[2px]">
                 <Maximize2 className="w-5 h-5 text-white" />
               </div>
            </div>
            <div className="hidden sm:block min-w-0">
              <div className={`text-base font-display font-bold truncate leading-none mb-1 hover:underline cursor-pointer underline-offset-4 decoration-2 ${source === 'spotify' ? 'decoration-[#1DB954]' : 'decoration-liquid-gold text-white'}`}>
                <GlitchText text={track.title} />
              </div>
              <div className="text-platinum/50 text-xs truncate font-medium tracking-wide uppercase">{track.artist}</div>
            </div>
          </div>

          {/* Playback Controls */}
          <div className="flex flex-col items-center justify-center w-1/3">
             <div className="flex items-center gap-8">
               <button className="text-platinum/40 hover:text-white transition-colors hover:scale-110 active:scale-95 duration-200">
                 <SkipBack className="w-5 h-5" />
               </button>
               <button 
                 onClick={() => setIsPlaying(!isPlaying)}
                 className={`w-12 h-12 rounded-full text-midnight-black flex items-center justify-center transition-all shadow-lg hover:scale-105 active:scale-95 ${source === 'spotify' ? 'bg-white hover:bg-[#1DB954] shadow-[#1DB954]/20' : 'bg-white hover:bg-liquid-gold shadow-liquid-gold/20'}`}
               >
                 <AnimatePresence mode="wait">
                   {isPlaying ? (
                     <motion.div key="pause" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                        <Pause className="w-5 h-5 fill-current" />
                     </motion.div>
                   ) : (
                     <motion.div key="play" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                     </motion.div>
                   )}
                 </AnimatePresence>
               </button>
               <button className="text-platinum/40 hover:text-white transition-colors hover:scale-110 active:scale-95 duration-200">
                 <SkipForward className="w-5 h-5" />
               </button>
             </div>
             <div className="hidden md:flex items-center gap-3 mt-2">
               <span className="text-[10px] font-mono text-platinum/30 tabular-nums">{track.current}</span>
               
               {/* Source Indicator / Toggle */}
               <div 
                 className={`flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.2em] cursor-pointer hover:opacity-80 transition-opacity px-2 py-0.5 rounded-full bg-white/5 border border-white/5 ${source === 'spotify' ? 'text-[#1DB954] border-[#1DB954]/20' : 'text-liquid-gold border-liquid-gold/20'}`}
                 onClick={() => !isSpotifyConnected && setShowConnectModal(true)}
               >
                  {source === 'spotify' ? (
                    <span className="flex items-center gap-1">
                       <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141 4.32-1.38 9.841-.719 13.44 1.56.42.3.6.84.301 1.261zm.12-3.36C15.54 8.46 9.059 8.22 5.28 9.361c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.38 4.32-1.32 11.58-1.08 15.421 1.2.539.3.719.96.419 1.5-.299.48-1.02.66-1.44.36z"/></svg>
                       Spotify
                    </span>
                  ) : (
                    <span className="flex items-center gap-1">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-liquid-gold opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-liquid-gold"></span>
                      </span>
                      Live Radio
                    </span>
                  )}
               </div>

               <span className="text-[10px] font-mono text-platinum/30 tabular-nums">{track.duration}</span>
             </div>
          </div>

          {/* Volume & Extras */}
          <div className="flex items-center justify-end gap-6 w-1/3">
             {isSpotifyConnected && source === 'radio' && (
                <button 
                  onClick={() => setSource('spotify')}
                  className="hidden sm:flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-platinum/50 hover:text-[#1DB954] transition-colors"
                >
                  Switch to Spotify
                </button>
             )}
             
             {!isSpotifyConnected && (
               <button 
                 onClick={() => setShowConnectModal(true)}
                 className="hidden sm:flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-platinum/50 hover:text-[#1DB954] transition-colors"
               >
                 Connect Spotify
               </button>
             )}

            <div className="hidden md:flex items-center gap-3 w-32 group">
              <button onClick={() => setIsMuted(!isMuted)} className="text-platinum/50 hover:text-white transition-colors">
                {isMuted || volume[0] === 0 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <Slider 
                value={isMuted ? [0] : volume} 
                max={100} 
                step={1} 
                onValueChange={setVolume}
                className="cursor-pointer"
              />
            </div>
          </div>

        </div>
      </motion.div>

      {/* Connect Spotify Modal */}
      <Dialog open={showConnectModal} onOpenChange={setShowConnectModal}>
        <DialogContent className="bg-midnight-black border-white/10 text-white sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-display font-bold flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#1DB954]" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141 4.32-1.38 9.841-.719 13.44 1.56.42.3.6.84.301 1.261zm.12-3.36C15.54 8.46 9.059 8.22 5.28 9.361c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.38 4.32-1.32 11.58-1.08 15.421 1.2.539.3.719.96.419 1.5-.299.48-1.02.66-1.44.36z"/></svg>
              Connect to Spotify
            </DialogTitle>
            <DialogDescription className="text-platinum/70">
              Connect your Spotify Premium account to stream full tracks directly on Resonance.
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-6 space-y-4">
            <div className="flex items-center gap-3 p-4 rounded-lg border border-white/5 bg-white/5">
              <div className="w-8 h-8 rounded-full bg-[#1DB954]/20 flex items-center justify-center">
                <Check className="w-4 h-4 text-[#1DB954]" />
              </div>
              <div className="text-sm">
                <div className="font-bold text-white">High Quality Audio</div>
                <div className="text-platinum/50">Stream at 320kbps</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg border border-white/5 bg-white/5">
              <div className="w-8 h-8 rounded-full bg-[#1DB954]/20 flex items-center justify-center">
                 <Check className="w-4 h-4 text-[#1DB954]" />
              </div>
              <div className="text-sm">
                <div className="font-bold text-white">Synchronized Playback</div>
                <div className="text-platinum/50">Control from any device</div>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <button 
              onClick={() => setShowConnectModal(false)}
              className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-platinum/60 hover:text-white transition-colors"
            >
              Cancel
            </button>
            <button 
              onClick={handleSpotifyConnect}
              className="px-6 py-2 bg-[#1DB954] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#1ed760] transition-colors rounded-full shadow-lg shadow-[#1DB954]/20"
            >
              Connect Account
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

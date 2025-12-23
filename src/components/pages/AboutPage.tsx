import { Heart, Users, Shield, Mail, Globe, FileText, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { GlitchText } from '../ui/GlitchText';

export function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      
      {/* Header */}
      <div className="text-center mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-display font-bold text-white uppercase tracking-tight mb-8"
        >
          <GlitchText text="About Resonance" />
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-2xl text-platinum/70 leading-relaxed max-w-3xl mx-auto"
        >
          We are a non-profit organization dedicated to fostering a vibrant, inclusive, and sustainable creative ecosystem in Austria.
        </motion.p>
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-16 mb-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-display font-bold text-liquid-gold uppercase tracking-widest mb-6 flex items-center gap-3">
            <Heart className="w-6 h-6" /> Our Mission
          </h2>
          <div className="prose prose-invert text-platinum/80 leading-relaxed text-lg">
            <p className="mb-6">
              Founded in 2023, Resonance Music & Community (RnC) was established to bridge the gap between creative isolation and professional opportunity. 
            </p>
            <p className="mb-6">
              Our mission is to provide a supportive infrastructure where <strong>musicians of all genres</strong> and <strong>visual artists of all mediums</strong> can thrive. We believe that art is a fundamental pillar of society and that every creator deserves access to resources, community, and fair exposure.
            </p>
            <ul className="space-y-3 mt-4">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-liquid-gold" />
                <span>Supporting 500+ Artists across Austria</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-liquid-gold" />
                <span>Providing Grants & Educational Workshops</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-liquid-gold" />
                <span>Advocating for Fair Pay & Mental Health</span>
              </li>
            </ul>
          </div>
        </motion.div>
        
        {/* Organization Details Box */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/5 p-8 md:p-10 border border-white/10 backdrop-blur-sm relative overflow-hidden rounded-xl"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-liquid-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

          <h3 className="text-xl font-display font-bold text-white uppercase tracking-widest mb-8 relative z-10 border-b border-white/10 pb-4">
            Organization Details
          </h3>
          
          <ul className="space-y-5 text-sm text-platinum/80 relative z-10">
            <li className="flex flex-col sm:flex-row justify-between sm:items-center gap-1">
              <span className="text-platinum/50 uppercase tracking-widest text-xs font-bold">Legal Name</span>
              <span className="text-white font-bold">Resonance Music & Community</span>
            </li>
            <li className="flex flex-col sm:flex-row justify-between sm:items-center gap-1">
              <span className="text-platinum/50 uppercase tracking-widest text-xs font-bold">Legal Form</span>
              <span className="text-white font-bold">Verein (ZVR: 1736087764)</span>
            </li>
            <li className="flex flex-col sm:flex-row justify-between sm:items-center gap-1">
              <span className="text-platinum/50 uppercase tracking-widest text-xs font-bold">Founded</span>
              <span className="text-white font-bold">September 18, 2023</span>
            </li>
            <li className="flex flex-col sm:flex-row justify-between sm:items-center gap-1">
              <span className="text-platinum/50 uppercase tracking-widest text-xs font-bold">Location</span>
              <span className="text-white font-bold">Innsbruck, Austria</span>
            </li>
            <li className="flex flex-col sm:flex-row justify-between sm:items-center gap-1">
              <span className="text-platinum/50 uppercase tracking-widest text-xs font-bold">Email</span>
              <a href="mailto:info@rnc4music.com" className="text-liquid-gold hover:underline font-bold">info@rnc4music.com</a>
            </li>
          </ul>

          <div className="mt-8 pt-6 border-t border-white/10">
            <h4 className="text-xs font-bold uppercase tracking-widest text-platinum/50 mb-4">Board of Directors</h4>
            <div className="space-y-3">
              <div>
                <div className="text-white font-bold text-sm">Christoph Piminger</div>
                <div className="text-liquid-gold text-xs">Obmann (Chairperson)</div>
              </div>
              <div>
                <div className="text-white font-bold text-sm">Walter Pinggera</div>
                <div className="text-platinum/60 text-xs">Obmann Stv. & Kassier (Vice Chair & Treasurer)</div>
              </div>
              <div>
                <div className="text-white font-bold text-sm">Patrik Eberhard</div>
                <div className="text-platinum/60 text-xs">Schriftführer (Secretary)</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Pillars Section */}
      <div className="mb-24">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-display font-bold text-white uppercase tracking-widest mb-12 text-center"
        >
          What We Do
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              icon: Users, 
              title: "Community Building", 
              desc: "We organize regular meetups, jam sessions, and gallery nights to connect creative minds across disciplines." 
            },
            { 
              icon: Shield, 
              title: "Artist Support", 
              desc: "From equipment rentals to grant application assistance and mental health resources, we have your back." 
            },
            { 
              icon: Globe, 
              title: "Global Exposure", 
              desc: "We promote Austrian talent internationally through our digital platform, playlists, and partner festivals." 
            }
          ].map((pillar, i) => (
            <motion.div 
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="p-8 bg-obsidian border border-white/10 rounded-xl hover:border-liquid-gold/50 transition-colors group"
            >
              <pillar.icon className="w-12 h-12 text-liquid-gold mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-white mb-4">{pillar.title}</h3>
              <p className="text-platinum/70 leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Who We Support */}
      <div className="mb-24 bg-white/5 rounded-2xl p-8 md:p-12 border border-white/5">
        <div className="text-center max-w-3xl mx-auto mb-12">
           <h2 className="text-3xl font-display font-bold text-white mb-4">Who We Support</h2>
           <p className="text-platinum/60">We are an inclusive organization welcoming creatives from all backgrounds.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
           {[
             "Classical Musicians", "Jazz Artists", "Electronic Producers", "Bands & Groups",
             "Painters", "Sculptors", "Photographers", "Digital Artists"
           ].map((item, i) => (
             <div key={i} className="p-4 bg-midnight-black rounded border border-white/10 text-white font-bold text-sm hover:border-liquid-gold transition-colors">
               {item}
             </div>
           ))}
        </div>
      </div>

      {/* Transparency / Footer Section */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-liquid-gold/20 to-midnight-black border border-liquid-gold/30 rounded-xl p-12 text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-30 mix-blend-overlay"></div>
        
        <div className="relative z-10">
          <h2 className="text-3xl font-display font-bold text-white uppercase tracking-tight mb-4">Commitment to Transparency</h2>
          <p className="text-platinum/80 max-w-2xl mx-auto mb-8 text-lg">
            Trust is our currency. As a registered non-profit, we are committed to full financial transparency. Our annual reports and auditor statements are available to the public.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="flex items-center justify-center gap-2 px-8 py-4 bg-liquid-gold text-midnight-black font-bold uppercase tracking-widest text-xs rounded-sm hover:bg-white transition-colors">
              <FileText className="w-4 h-4" />
              View 2024 Annual Report
            </button>
            
            <div className="flex flex-col items-center justify-center px-8 py-2 bg-black/40 rounded-sm border border-white/10">
               <span className="text-[10px] uppercase tracking-widest text-platinum/50 mb-1">Auditors (Rechnungsprüfer)</span>
               <span className="text-white font-bold text-sm">Marcel Piminger, Niklas Fritz</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

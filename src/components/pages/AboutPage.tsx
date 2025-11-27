import { Heart, Users, Shield, Mail, Globe, FileText } from 'lucide-react';
import { motion } from 'motion/react';
import { GlitchText } from '../ui/GlitchText';

export function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-display font-bold text-white uppercase tracking-tight mb-6"
        >
          <GlitchText text="About Resonance" />
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl text-platinum/70 leading-relaxed max-w-2xl mx-auto"
        >
          We are a non-profit organization dedicated to fostering the underground music scene in Austria through community, education, and performance.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-display font-bold text-liquid-gold uppercase tracking-widest mb-6 flex items-center gap-3">
            <Heart className="w-6 h-6" /> Our Mission
          </h2>
          <div className="prose prose-invert text-platinum/80 leading-relaxed">
            <p className="mb-4">
              Founded in 2023, Resonance Music & Community was born from a need to connect isolated artists in the Alpine region. Our mission is simple: to provide a platform where experimental and underground music can thrive.
            </p>
            <p>
              We believe that music is a fundamental human right and a powerful tool for social connection. By removing financial barriers to performance spaces and educational resources, we empower the next generation of Austrian sonic artists.
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/5 p-8 border border-white/10 backdrop-blur-sm relative overflow-hidden"
        >
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-liquid-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

          <h3 className="text-xl font-display font-bold text-white uppercase tracking-widest mb-6 relative z-10">Organization Details</h3>
          <ul className="space-y-4 text-sm text-platinum/70 relative z-10">
            <li className="flex justify-between border-b border-white/10 pb-2">
              <span>Legal Status</span>
              <span className="text-white font-bold">Registered Non-Profit (Verein)</span>
            </li>
            <li className="flex justify-between border-b border-white/10 pb-2">
              <span>ZVR-Zahl</span>
              <span className="text-white font-bold">123456789</span>
            </li>
            <li className="flex justify-between border-b border-white/10 pb-2">
              <span>Headquarters</span>
              <span className="text-white font-bold">Innsbruck, Austria</span>
            </li>
            <li className="flex justify-between border-b border-white/10 pb-2">
              <span>Established</span>
              <span className="text-white font-bold">2023</span>
            </li>
            <li className="flex justify-between pt-2">
              <span>Contact</span>
              <span className="text-liquid-gold hover:underline cursor-pointer">info@resonance.at</span>
            </li>
          </ul>
        </motion.div>
      </div>

      <div className="mb-20">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-2xl font-display font-bold text-white uppercase tracking-widest mb-8 text-center"
        >
          Our Pillars
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Users, title: "Community", desc: "Connecting artists, venues, and audiences through regular meetups and collaborative events." },
            { icon: Shield, title: "Support", desc: "Providing grants, legal advice, and mental health resources for working musicians." },
            { icon: Globe, title: "Exposure", desc: "Showcasing local talent to the world through our editorial platform and festival partnerships." }
          ].map((pillar, i) => (
            <motion.div 
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -5, borderColor: "rgba(212, 175, 55, 0.5)" }}
              className="p-8 bg-midnight-black border border-white/10 transition-all text-center group"
            >
              <pillar.icon className="w-12 h-12 text-liquid-gold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-bold text-white mb-3 uppercase tracking-wide">{pillar.title}</h3>
              <p className="text-sm text-platinum/60 leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-liquid-gold/10 to-midnight-black border border-liquid-gold/20 p-12 text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20 mix-blend-overlay"></div>
        
        <div className="relative z-10">
          <h2 className="text-3xl font-display font-bold text-white uppercase tracking-tight mb-4">Transparency</h2>
          <p className="text-platinum/70 max-w-2xl mx-auto mb-8">
            As a non-profit, we are committed to full financial transparency. Our annual reports and financial statements are available to the public.
          </p>
          <div className="flex justify-center gap-4">
            <button className="flex items-center gap-2 px-6 py-3 bg-midnight-black text-liquid-gold border border-liquid-gold hover:bg-liquid-gold hover:text-midnight-black transition-colors text-xs font-bold uppercase tracking-widest">
              <FileText className="w-4 h-4" />
              2024 Annual Report
            </button>
            <a href="mailto:board@resonance.at" className="flex items-center gap-2 px-6 py-3 bg-midnight-black text-white border border-white/20 hover:border-white transition-colors text-xs font-bold uppercase tracking-widest">
              <Mail className="w-4 h-4" />
              Contact Board
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

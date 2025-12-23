import { motion } from 'motion/react';
import { ArrowLeft, Mail, MapPin, Hash, Users, FileText, ShieldAlert } from 'lucide-react';

export function ImpressumPage() {
  return (
    <div className="bg-midnight-black min-h-screen text-platinum font-sans">
      {/* Header Section */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 mb-6 text-liquid-gold/80 hover:text-liquid-gold transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <a href="/" onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0); }} className="text-sm font-bold uppercase tracking-widest">Back to Home</a>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight relative inline-block">
            Impressum
            <span className="absolute -bottom-4 left-0 w-1/3 h-1 bg-liquid-gold"></span>
          </h1>
          <p className="text-platinum/60 text-lg md:text-xl max-w-2xl leading-relaxed mt-8">
            Legal Notice and Organization Information according to Austrian Law.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          
          {/* Column 1: Organization Details */}
          <div className="space-y-12">
            
            {/* General Info */}
            <div className="space-y-6">
              <h2 className="text-xl font-display font-bold text-white border-l-2 border-liquid-gold pl-4 uppercase tracking-wider">
                Organization
              </h2>
              
              <div className="space-y-4">
                 <div>
                    <h3 className="text-white font-bold text-lg mb-1">Resonance Music & Community</h3>
                    <p className="text-platinum/60 text-sm uppercase tracking-widest">Verein (Non-Profit Association)</p>
                 </div>

                 <div className="flex items-start gap-3 text-platinum/80">
                   <MapPin className="w-5 h-5 text-liquid-gold shrink-0 mt-0.5" />
                   <div>
                     <p>Murstraße 75</p>
                     <p>6063 Rum / Innsbruck</p>
                     <p>Austria</p>
                   </div>
                 </div>

                 <div className="flex items-center gap-3 text-platinum/80">
                   <Hash className="w-5 h-5 text-liquid-gold shrink-0" />
                   <p>ZVR-Zahl: 123456789</p>
                 </div>

                 <div className="flex items-center gap-3 text-platinum/80">
                   <Mail className="w-5 h-5 text-liquid-gold shrink-0" />
                   <a href="mailto:info@resonance.at" className="hover:text-white transition-colors">info@resonance.at</a>
                 </div>
              </div>
            </div>

            {/* Board Members */}
            <div className="space-y-6">
              <h2 className="text-xl font-display font-bold text-white border-l-2 border-liquid-gold pl-4 uppercase tracking-wider">
                The Board (Vorstand)
              </h2>
              
              <div className="bg-white/5 border border-white/10 p-6 space-y-4">
                 <div className="grid grid-cols-[1fr,auto] items-center pb-3 border-b border-white/5 last:border-0 last:pb-0">
                   <div>
                     <span className="block text-xs uppercase tracking-widest text-platinum/40 mb-1">Obmann / Chairperson</span>
                     <span className="text-white font-bold">Max Mustermann</span>
                   </div>
                 </div>
                 <div className="grid grid-cols-[1fr,auto] items-center pb-3 border-b border-white/5 last:border-0 last:pb-0">
                   <div>
                     <span className="block text-xs uppercase tracking-widest text-platinum/40 mb-1">Schriftführer / Secretary</span>
                     <span className="text-white font-bold">Julia Beispiel</span>
                   </div>
                 </div>
                 <div className="grid grid-cols-[1fr,auto] items-center pb-3 border-b border-white/5 last:border-0 last:pb-0">
                   <div>
                     <span className="block text-xs uppercase tracking-widest text-platinum/40 mb-1">Kassier / Treasurer</span>
                     <span className="text-white font-bold">Felix Muster</span>
                   </div>
                 </div>
              </div>
            </div>

          </div>

          {/* Column 2: Legal & Context */}
          <div className="space-y-12">
            
            {/* Purpose */}
            <div className="space-y-6">
              <h2 className="text-xl font-display font-bold text-white border-l-2 border-liquid-gold pl-4 uppercase tracking-wider">
                Vereinszweck
              </h2>
              <div className="text-platinum/80 leading-relaxed space-y-4">
                <p>
                  <Users className="w-5 h-5 text-liquid-gold inline-block mr-2 mb-1" />
                  The purpose of the association is the promotion of art and culture, specifically underground music scenes in Austria. We aim to provide a platform for emerging artists, foster community engagement, and organize non-profit cultural events.
                </p>
                <p className="text-sm text-platinum/60 italic">
                  Der Verein, dessen Tätigkeit nicht auf Gewinn gerichtet ist, bezweckt die Förderung von Kunst und Kultur, insbesondere der Underground-Musikszene in Österreich.
                </p>
              </div>
            </div>

            {/* Responsible for Content */}
            <div className="space-y-6">
              <h2 className="text-xl font-display font-bold text-white border-l-2 border-liquid-gold pl-4 uppercase tracking-wider">
                Editorial Responsibility
              </h2>
              <div className="text-platinum/80 leading-relaxed">
                <div className="flex items-start gap-2 mb-2">
                   <FileText className="w-5 h-5 text-liquid-gold shrink-0 mt-0.5" />
                   <p>Responsible for the content of this website according to § 5 ECG:</p>
                </div>
                <div className="pl-7">
                  <p className="text-white font-bold">Resonance Music & Community</p>
                  <p>Attn: The Board</p>
                  <p>Murstraße 75, 6063 Rum</p>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="space-y-6">
              <h2 className="text-xl font-display font-bold text-white border-l-2 border-liquid-gold pl-4 uppercase tracking-wider">
                Legal Disclaimer
              </h2>
              <div className="text-platinum/80 text-sm leading-relaxed space-y-4">
                <p>
                  <ShieldAlert className="w-4 h-4 text-liquid-gold inline-block mr-2 mb-0.5" />
                  <strong>Content Liability:</strong> The contents of our pages were created with great care. However, we cannot guarantee the accuracy, completeness, and timeliness of the content.
                </p>
                <p>
                  <strong>External Links:</strong> Our website contains links to external third-party websites over whose content we have no influence. Therefore, we cannot assume any liability for these external contents. The respective provider or operator of the pages is always responsible for the content of the linked pages.
                </p>
                <p>
                  <strong>Copyright:</strong> The content and works on these pages created by the site operators are subject to Austrian copyright law. Duplication, processing, distribution, and any kind of exploitation outside the limits of copyright law require the written consent of the respective author or creator.
                </p>
              </div>
            </div>

          </div>

        </motion.div>

        <div className="mt-20 pt-10 border-t border-white/10 text-center">
            <p className="text-platinum/40 text-sm mb-4">
               © {new Date().getFullYear()} Resonance Music & Community. All rights reserved.
            </p>
            <a href="/" className="inline-flex items-center gap-2 text-liquid-gold hover:text-white transition-colors font-bold uppercase tracking-widest text-xs">
               <ArrowLeft className="w-3 h-3" /> Back to Homepage
            </a>
        </div>
      </section>
    </div>
  );
}

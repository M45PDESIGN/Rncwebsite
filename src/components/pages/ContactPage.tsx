import { motion } from 'motion/react';
import { Mail, MapPin, Instagram, Facebook, Send, Music } from 'lucide-react';
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { GlowButton } from "../ui/GlowButton";

export function ContactPage() {
  return (
    <div className="bg-midnight-black min-h-screen text-platinum font-sans selection:bg-liquid-gold selection:text-midnight-black">
      
      {/* Header Section */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">
            Get in <span className="text-liquid-gold">Touch</span>
          </h1>
          <p className="text-platinum/60 text-lg md:text-xl leading-relaxed">
            Have questions? Want to collaborate? We'd love to hear from you.
          </p>
        </motion.div>
      </section>

      {/* Main Content Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl relative overflow-hidden">
               <div className="space-y-6 relative z-10">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <label className="text-xs font-bold uppercase tracking-widest text-platinum/50">Name</label>
                     <Input placeholder="Your name" className="bg-midnight-black/50 border-white/10 focus:border-liquid-gold text-white" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-xs font-bold uppercase tracking-widest text-platinum/50">Email</label>
                     <Input type="email" placeholder="your@email.com" className="bg-midnight-black/50 border-white/10 focus:border-liquid-gold text-white" />
                   </div>
                 </div>

                 <div className="space-y-2">
                   <label className="text-xs font-bold uppercase tracking-widest text-platinum/50">Subject</label>
                   <Select>
                    <SelectTrigger className="bg-midnight-black/50 border-white/10 focus:border-liquid-gold text-white">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent className="bg-obsidian border-white/10 text-white">
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="press">Press & Media</SelectItem>
                      <SelectItem value="partnerships">Partnerships</SelectItem>
                      <SelectItem value="volunteer">Volunteer</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                 </div>

                 <div className="space-y-2">
                   <label className="text-xs font-bold uppercase tracking-widest text-platinum/50">Message</label>
                   <Textarea placeholder="How can we help?" className="bg-midnight-black/50 border-white/10 focus:border-liquid-gold text-white min-h-[150px]" />
                 </div>

                 <div className="pt-2">
                   <GlowButton className="w-full md:w-auto bg-liquid-gold text-midnight-black hover:text-midnight-black">
                     Send Message
                   </GlowButton>
                   <p className="mt-4 text-xs text-platinum/40 italic">
                     We typically respond within 48 hours.
                   </p>
                 </div>
               </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5 space-y-12"
          >
            {/* Info Cards */}
            <div className="space-y-8">
              <div>
                <h3 className="text-white font-display font-bold text-xl mb-6 border-l-2 border-liquid-gold pl-4">Contact Info</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-white/5 border border-white/10 rounded-lg group hover:border-liquid-gold/30 transition-colors">
                    <Mail className="w-5 h-5 text-liquid-gold mt-1" />
                    <div>
                      <div className="text-sm font-bold text-white mb-1">General Inquiries</div>
                      <a href="mailto:info@resonance.at" className="text-platinum/60 hover:text-white transition-colors text-sm">info@resonance.at</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white/5 border border-white/10 rounded-lg group hover:border-liquid-gold/30 transition-colors">
                    <Send className="w-5 h-5 text-liquid-gold mt-1" />
                    <div>
                      <div className="text-sm font-bold text-white mb-1">Press & Media</div>
                      <a href="mailto:press@resonance.at" className="text-platinum/60 hover:text-white transition-colors text-sm">press@resonance.at</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white/5 border border-white/10 rounded-lg group hover:border-liquid-gold/30 transition-colors">
                    <MapPin className="w-5 h-5 text-liquid-gold mt-1" />
                    <div>
                      <div className="text-sm font-bold text-white mb-1">Location</div>
                      <p className="text-platinum/60 text-sm">Murstraße 75</p>
                      <p className="text-platinum/60 text-sm">6063 Rum / Innsbruck, Austria</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div>
                <h3 className="text-white font-display font-bold text-xl mb-6 border-l-2 border-liquid-gold pl-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-full hover:bg-liquid-gold hover:text-midnight-black hover:border-liquid-gold transition-all group">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-full hover:bg-liquid-gold hover:text-midnight-black hover:border-liquid-gold transition-all group">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-full hover:bg-liquid-gold hover:text-midnight-black hover:border-liquid-gold transition-all group">
                    <Music className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="aspect-video w-full bg-obsidian border border-white/10 rounded-xl relative overflow-hidden group">
               <div className="absolute inset-0 opacity-30 grayscale group-hover:grayscale-0 transition-all duration-700">
                  {/* Abstract Map Representation - usually would be Google Maps or similar */}
                  <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1548504778-433b5c65d63f?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center" />
               </div>
               <div className="absolute inset-0 bg-gradient-to-t from-midnight-black via-transparent to-transparent" />
               <div className="absolute bottom-4 left-4">
                 <p className="text-white font-bold text-sm">Innsbruck, Austria</p>
                 <p className="text-liquid-gold text-xs uppercase tracking-widest">Base of Operations</p>
               </div>
            </div>

          </motion.div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-obsidian border-t border-white/5 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-platinum/60">Common questions about Resonance, our mission, and how to get involved.</p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border border-white/10 bg-midnight-black/50 px-6 rounded-lg data-[state=open]:border-liquid-gold/50 transition-colors">
              <AccordionTrigger className="text-white hover:text-liquid-gold hover:no-underline font-bold text-left">
                How can I submit my music?
              </AccordionTrigger>
              <AccordionContent className="text-platinum/70 leading-relaxed">
                We love discovering new underground talent. You can submit your demos or press kits directly via email to <span className="text-liquid-gold">music@resonance.at</span>. Please include a streaming link (SoundCloud, Bandcamp) rather than attaching large files.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-white/10 bg-midnight-black/50 px-6 rounded-lg data-[state=open]:border-liquid-gold/50 transition-colors">
              <AccordionTrigger className="text-white hover:text-liquid-gold hover:no-underline font-bold text-left">
                Do you accept volunteers?
              </AccordionTrigger>
              <AccordionContent className="text-platinum/70 leading-relaxed">
                Absolutely. We are always looking for passionate individuals to help with events, content creation, and community management. Select "Volunteer" in the contact form above to get started.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-white/10 bg-midnight-black/50 px-6 rounded-lg data-[state=open]:border-liquid-gold/50 transition-colors">
              <AccordionTrigger className="text-white hover:text-liquid-gold hover:no-underline font-bold text-left">
                How do I apply for artist support?
              </AccordionTrigger>
              <AccordionContent className="text-platinum/70 leading-relaxed">
                Artist support applications open quarterly. We offer grants for recording, equipment rental, and touring. Keep an eye on our "News" section or subscribe to our newsletter for the next application window.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-white/10 bg-midnight-black/50 px-6 rounded-lg data-[state=open]:border-liquid-gold/50 transition-colors">
              <AccordionTrigger className="text-white hover:text-liquid-gold hover:no-underline font-bold text-left">
                Can I rent your rehearsal space?
              </AccordionTrigger>
              <AccordionContent className="text-platinum/70 leading-relaxed">
                Yes, our rehearsal spaces in Rum are available for booking by members. Membership starts at €10/month and includes 4 hours of studio time. Visit the Membership page for more details.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

    </div>
  );
}

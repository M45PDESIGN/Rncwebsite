import { useState } from 'react';
import { motion } from 'motion/react';
import { Heart, Music, Headphones, Check, CreditCard, ArrowRight, ShieldCheck, Users, Radio, Gift } from 'lucide-react';
import { GlowButton } from '../ui/GlowButton';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

export function DonatePage() {
  const [amount, setAmount] = useState<number | 'custom'>(50);
  const [customAmount, setCustomAmount] = useState('');
  const [frequency, setFrequency] = useState<'once' | 'monthly'>('monthly');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal' | 'sepa'>('card');

  const handleAmountClick = (val: number) => {
    setAmount(val);
    setCustomAmount('');
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount('custom');
    setCustomAmount(e.target.value);
  };

  const getImpactDescription = () => {
    const val = amount === 'custom' ? parseInt(customAmount) || 0 : amount;
    
    if (val >= 100) return "Funds a full month of mentorship for a young artist.";
    if (val >= 50) return "Covers equipment rental for an emerging artist.";
    if (val >= 25) return "Funds one hour of professional mental health support.";
    if (val >= 10) return "Provides a musician with rehearsal space for one session.";
    return "Every contribution helps keep the music alive.";
  };

  return (
    <div className="bg-midnight-black min-h-screen text-platinum font-sans selection:bg-liquid-gold selection:text-midnight-black">
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
            <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-liquid-gold/5 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '4s' }} />
            <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-indigo-900/10 rounded-full blur-[100px] mix-blend-screen" />
          </div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-liquid-gold/30 bg-liquid-gold/5 text-liquid-gold text-xs font-bold uppercase tracking-widest mb-6">
              <Heart className="w-3 h-3 fill-current" />
              Non-Profit Support
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tight leading-tight">
              Support Creativity <br />
              <span className="text-liquid-gold">in Austria.</span>
            </h1>
            <p className="text-platinum/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Your donation directly funds free rehearsal spaces, professional equipment, and mental health resources for Austria's emerging artists.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Impact & Trust */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Impact Cards */}
            <div>
              <h3 className="text-white font-display font-bold text-2xl mb-8">Your Impact</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                
                {/* Card 1 */}
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-white/5 border border-white/10 p-6 rounded-xl group hover:border-liquid-gold/30 transition-colors"
                >
                  <div className="w-10 h-10 bg-midnight-black rounded-full flex items-center justify-center border border-white/10 mb-4 group-hover:border-liquid-gold/50 group-hover:text-liquid-gold transition-colors">
                    <Music className="w-5 h-5" />
                  </div>
                  <div className="text-2xl font-display font-bold text-white mb-1">€10</div>
                  <p className="text-sm text-platinum/60 leading-relaxed">
                    Provides a musician with rehearsal space for one session.
                  </p>
                </motion.div>

                {/* Card 2 */}
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-white/5 border border-white/10 p-6 rounded-xl group hover:border-liquid-gold/30 transition-colors"
                >
                  <div className="w-10 h-10 bg-midnight-black rounded-full flex items-center justify-center border border-white/10 mb-4 group-hover:border-liquid-gold/50 group-hover:text-liquid-gold transition-colors">
                    <Headphones className="w-5 h-5" />
                  </div>
                  <div className="text-2xl font-display font-bold text-white mb-1">€25</div>
                  <p className="text-sm text-platinum/60 leading-relaxed">
                    Funds one hour of professional mental health support.
                  </p>
                </motion.div>

                {/* Card 3 */}
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-white/5 border border-white/10 p-6 rounded-xl group hover:border-liquid-gold/30 transition-colors"
                >
                  <div className="w-10 h-10 bg-midnight-black rounded-full flex items-center justify-center border border-white/10 mb-4 group-hover:border-liquid-gold/50 group-hover:text-liquid-gold transition-colors">
                    <Radio className="w-5 h-5" />
                  </div>
                  <div className="text-2xl font-display font-bold text-white mb-1">€50</div>
                  <p className="text-sm text-platinum/60 leading-relaxed">
                    Covers equipment rental for an emerging artist's gig.
                  </p>
                </motion.div>

              </div>
            </div>

            {/* Trust Section */}
            <div className="bg-obsidian border border-white/10 p-8 rounded-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-32 bg-liquid-gold/5 blur-[80px] rounded-full pointer-events-none" />
               <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start">
                  <div className="p-3 bg-liquid-gold/10 rounded-full text-liquid-gold">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">100% Transparency</h4>
                    <p className="text-platinum/70 text-sm leading-relaxed mb-4">
                      Every Euro you donate goes directly to our artist support programs. We cover our minimal administrative costs through separate grants and membership fees. Donations are tax-deductible in Austria.
                    </p>
                    <div className="text-xs text-platinum/50 uppercase tracking-widest font-bold mb-2">ZVR-Zahl: 1736087764</div>
                    <div className="flex gap-4">
                      <a href="mailto:info@rnc4music.com" className="text-xs font-bold uppercase tracking-widest text-liquid-gold hover:text-white transition-colors inline-flex items-center gap-1">
                         Contact Us
                      </a>
                    </div>
                  </div>
               </div>
            </div>

            {/* Alternatives */}
            <div>
              <h3 className="text-white font-display font-bold text-xl mb-6">Other Ways to Help</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-left rounded-lg group">
                   <Users className="w-5 h-5 text-platinum/50 group-hover:text-liquid-gold" />
                   <div>
                     <div className="font-bold text-white text-sm">Volunteer</div>
                     <div className="text-xs text-platinum/50">Join our street team</div>
                   </div>
                </button>
                <button className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-left rounded-lg group">
                   <Gift className="w-5 h-5 text-platinum/50 group-hover:text-liquid-gold" />
                   <div>
                     <div className="font-bold text-white text-sm">Donate Gear</div>
                     <div className="text-xs text-platinum/50">Instruments & audio tech</div>
                   </div>
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Donation Form */}
          <div className="lg:col-span-5">
            <div className="sticky top-24">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-midnight-black border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl relative"
              >
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-b from-liquid-gold/20 to-transparent rounded-2xl blur-md opacity-50 -z-10" />

                {/* Header */}
                <div className="mb-8 text-center">
                  <h3 className="text-2xl font-display font-bold text-white mb-2">Make a Contribution</h3>
                  <div className="flex items-center justify-center bg-white/5 p-1 rounded-lg w-fit mx-auto">
                     <button 
                       onClick={() => setFrequency('once')}
                       className={`px-4 py-1.5 rounded-md text-xs font-bold uppercase tracking-widest transition-all ${frequency === 'once' ? 'bg-liquid-gold text-midnight-black shadow-lg' : 'text-platinum/50 hover:text-white'}`}
                     >
                       One-Time
                     </button>
                     <button 
                       onClick={() => setFrequency('monthly')}
                       className={`px-4 py-1.5 rounded-md text-xs font-bold uppercase tracking-widest transition-all ${frequency === 'monthly' ? 'bg-liquid-gold text-midnight-black shadow-lg' : 'text-platinum/50 hover:text-white'}`}
                     >
                       Monthly
                     </button>
                  </div>
                </div>

                {/* Amount Selector */}
                <div className="mb-8">
                   <div className="text-xs font-bold uppercase tracking-widest text-platinum/40 mb-3">Select Amount</div>
                   <div className="grid grid-cols-4 gap-2 mb-3">
                     {[10, 25, 50, 100].map((val) => (
                       <button
                         key={val}
                         onClick={() => handleAmountClick(val)}
                         className={`py-3 rounded-lg border text-sm font-bold transition-all ${
                           amount === val 
                             ? 'border-liquid-gold bg-liquid-gold/10 text-liquid-gold shadow-[0_0_15px_rgba(212,175,55,0.2)]' 
                             : 'border-white/10 bg-white/5 text-platinum hover:border-white/30'
                         }`}
                       >
                         €{val}
                       </button>
                     ))}
                   </div>
                   <div className="relative">
                     <span className="absolute left-4 top-1/2 -translate-y-1/2 text-platinum/40 font-bold">€</span>
                     <input 
                       type="number" 
                       placeholder="Custom Amount"
                       value={customAmount}
                       onChange={handleCustomChange}
                       className={`w-full bg-white/5 border rounded-lg py-3 pl-8 pr-4 text-white text-sm focus:outline-none focus:border-liquid-gold transition-colors ${amount === 'custom' ? 'border-liquid-gold' : 'border-white/10'}`}
                     />
                   </div>
                   
                   <div className="mt-4 p-3 bg-liquid-gold/5 border border-liquid-gold/10 rounded-lg">
                      <p className="text-xs text-liquid-gold/80 text-center italic">
                        "{getImpactDescription()}"
                      </p>
                   </div>
                </div>

                {/* Info Form */}
                <div className="space-y-4 mb-8">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                       <Label className="text-xs uppercase tracking-widest text-platinum/50">First Name</Label>
                       <Input placeholder="John" className="bg-white/5 border-white/10 focus:border-liquid-gold" />
                    </div>
                    <div className="space-y-2">
                       <Label className="text-xs uppercase tracking-widest text-platinum/50">Last Name</Label>
                       <Input placeholder="Doe" className="bg-white/5 border-white/10 focus:border-liquid-gold" />
                    </div>
                  </div>
                  <div className="space-y-2">
                     <Label className="text-xs uppercase tracking-widest text-platinum/50">Email Address</Label>
                     <Input placeholder="john@example.com" type="email" className="bg-white/5 border-white/10 focus:border-liquid-gold" />
                  </div>
                </div>

                {/* Payment Method */}
                <div className="mb-8">
                   <div className="text-xs font-bold uppercase tracking-widest text-platinum/40 mb-3">Payment Method</div>
                   <div className="grid grid-cols-3 gap-2">
                     <button 
                       onClick={() => setPaymentMethod('card')}
                       className={`flex flex-col items-center justify-center p-3 rounded-lg border transition-all ${paymentMethod === 'card' ? 'border-liquid-gold bg-liquid-gold/5 text-white' : 'border-white/10 bg-white/5 text-platinum/40 hover:text-white'}`}
                     >
                       <CreditCard className="w-5 h-5 mb-1" />
                       <span className="text-[10px] font-bold uppercase">Card</span>
                     </button>
                     <button 
                       onClick={() => setPaymentMethod('paypal')}
                       className={`flex flex-col items-center justify-center p-3 rounded-lg border transition-all ${paymentMethod === 'paypal' ? 'border-liquid-gold bg-liquid-gold/5 text-white' : 'border-white/10 bg-white/5 text-platinum/40 hover:text-white'}`}
                     >
                       <span className="font-bold italic text-lg leading-none mb-1">P</span>
                       <span className="text-[10px] font-bold uppercase">PayPal</span>
                     </button>
                     <button 
                       onClick={() => setPaymentMethod('sepa')}
                       className={`flex flex-col items-center justify-center p-3 rounded-lg border transition-all ${paymentMethod === 'sepa' ? 'border-liquid-gold bg-liquid-gold/5 text-white' : 'border-white/10 bg-white/5 text-platinum/40 hover:text-white'}`}
                     >
                       <span className="font-bold text-sm mb-1">SEPA</span>
                       <span className="text-[10px] font-bold uppercase">Bank</span>
                     </button>
                   </div>
                </div>

                {/* Submit */}
                <GlowButton className="w-full bg-liquid-gold hover:bg-white text-midnight-black hover:text-midnight-black py-6 text-lg">
                   Donate {amount === 'custom' ? (customAmount ? `€${customAmount}` : '') : `€${amount}`} {frequency === 'monthly' && '/ month'}
                </GlowButton>
                
                <p className="text-center text-[10px] text-platinum/30 mt-4 uppercase tracking-widest">
                  Secure SSL Encryption • Cancel Anytime
                </p>

              </motion.div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

import { useState } from 'react';
import { Mail, Send, Check, Star, Globe, Shield } from 'lucide-react';

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubscribed(true);
    setIsLoading(false);
    setEmail('');
  };

  if (isSubscribed) {
    return (
      <section className="py-32 parallax-bg">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="glass-card p-16 fade-in-up">
            <div className="w-20 h-20 bg-gradient-to-r from-liquid-gold to-electric-gold rounded-full flex items-center justify-center mx-auto mb-8">
              <Check className="w-10 h-10 text-midnight-black" />
            </div>
            <h2 className="text-4xl font-bold text-platinum mb-6">Welcome to the Community!</h2>
            <p className="text-xl text-platinum/80 mb-8">
              You're now part of Austria's premier underground music collective. 
              Check your email for exclusive content and event invitations.
            </p>
            <button 
              onClick={() => setIsSubscribed(false)}
              className="cta-secondary"
            >
              Subscribe Another Email
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-32 parallax-bg relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-radial from-liquid-gold/10 to-transparent rounded-full blur-3xl floating-element"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-radial from-electric-gold/15 to-transparent rounded-full blur-2xl floating-element"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-5xl font-bold text-platinum mb-6">
            Join the <span className="text-liquid-gold">Underground</span>
          </h2>
          <p className="text-xl text-platinum/80 max-w-3xl mx-auto leading-relaxed">
            Get exclusive access to underground events, artist collaborations, and community insights. 
            Be the first to discover the next generation of musical innovators.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Newsletter Form */}
          <div className="fade-in-up">
            <div className="glass-card p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-liquid-gold/20 to-electric-gold/20 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-liquid-gold" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-platinum">Premium Newsletter</h3>
                  <p className="text-platinum/60">Curated weekly insights</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full h-14 bg-midnight-black/50 backdrop-blur-md border-2 border-liquid-gold/30 rounded-xl pl-6 pr-6 text-platinum placeholder-platinum/50 focus:outline-none focus:border-liquid-gold transition-all duration-300 text-lg"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading || !email}
                  className={`w-full h-14 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 transition-all duration-300 ${
                    isLoading 
                      ? 'bg-liquid-gold/50 cursor-not-allowed' 
                      : 'cta-primary hover:scale-105'
                  }`}
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-midnight-black border-t-transparent rounded-full animate-spin"></div>
                      Subscribing...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Join Community
                    </>
                  )}
                </button>
              </form>

              {/* Privacy Notice */}
              <div className="flex items-start gap-3 mt-6 p-4 bg-liquid-gold/5 rounded-lg border border-liquid-gold/20">
                <Shield className="w-5 h-5 text-liquid-gold mt-0.5 flex-shrink-0" />
                <div className="text-sm text-platinum/70 leading-relaxed">
                  <strong className="text-platinum">Privacy First:</strong> Your email is encrypted and never shared. 
                  Unsubscribe anytime with one click. GDPR compliant.
                </div>
              </div>
            </div>
          </div>

          {/* Benefits & Social Proof */}
          <div className="fade-in-up">
            <div className="space-y-8">
              
              {/* Member Benefits */}
              <div className="glass-card p-8">
                <h4 className="text-xl font-bold text-platinum mb-6">Member Exclusive Benefits</h4>
                <div className="space-y-4">
                  {[
                    { icon: Star, text: "Early access to exclusive events and limited releases" },
                    { icon: Globe, text: "Connect with 1,247+ artists and music enthusiasts" },
                    { icon: Mail, text: "Weekly curated content from industry professionals" },
                    { icon: Shield, text: "VIP invitations to private listening sessions" }
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-liquid-gold/20 to-electric-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-5 h-5 text-liquid-gold" />
                      </div>
                      <p className="text-platinum/80">{benefit.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Community Stats */}
              <div className="glass-card p-8">
                <h4 className="text-xl font-bold text-platinum mb-6">Join Our Growing Community</h4>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-liquid-gold mb-2">1,247</div>
                    <div className="text-sm text-platinum/60">Active Members</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-electric-gold mb-2">94%</div>
                    <div className="text-sm text-platinum/60">Satisfaction Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-warm-gold mb-2">127</div>
                    <div className="text-sm text-platinum/60">Featured Artists</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-platinum mb-2">23</div>
                    <div className="text-sm text-platinum/60">Monthly Events</div>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="glass-card p-8">
                <div className="flex gap-1 mb-4">
                  {Array.from({length: 5}).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-electric-gold fill-current" />
                  ))}
                </div>
                <blockquote className="text-platinum/90 italic mb-4 leading-relaxed">
                  "Resonance has completely transformed my understanding of underground music. 
                  The community connections and exclusive events are unparalleled."
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-liquid-gold to-electric-gold rounded-full"></div>
                  <div>
                    <div className="text-platinum font-medium">Elena M.</div>
                    <div className="text-platinum/60 text-sm">Electronic Artist</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
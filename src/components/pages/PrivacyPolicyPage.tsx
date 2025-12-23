import { motion } from 'motion/react';
import { Button } from "../ui/button";
import { ArrowLeft } from 'lucide-react';

export function PrivacyPolicyPage() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-midnight-black min-h-screen text-platinum font-sans">
      {/* Header Section */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 mb-6 text-liquid-gold/80 hover:text-liquid-gold transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <a href="/" onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0); }} className="text-sm font-bold uppercase tracking-widest">Back to Home</a>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">
            Privacy <span className="text-liquid-gold">Policy</span>
          </h1>
          <p className="text-platinum/60 text-lg md:text-xl max-w-2xl leading-relaxed">
            We value your trust and are committed to protecting your personal data.
          </p>
          <div className="mt-8 flex items-center gap-4 text-sm font-mono text-platinum/40 uppercase tracking-widest border-l-2 border-liquid-gold pl-4">
            <span>Last Updated: December 23, 2025</span>
          </div>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-16"
        >
          
          {/* Table of Contents (Mobile Only / Quick Links) */}
          <div className="bg-white/5 border border-white/10 p-6 rounded-none md:hidden mb-12">
            <h3 className="text-liquid-gold font-bold uppercase tracking-widest text-xs mb-4">On This Page</h3>
            <ul className="space-y-2 text-sm text-platinum/60">
              <li><button onClick={() => scrollToSection('introduction')} className="hover:text-white transition-colors text-left">1. Introduction</button></li>
              <li><button onClick={() => scrollToSection('data-collection')} className="hover:text-white transition-colors text-left">2. Data Collection</button></li>
              <li><button onClick={() => scrollToSection('data-usage')} className="hover:text-white transition-colors text-left">3. Data Usage</button></li>
              <li><button onClick={() => scrollToSection('cookies')} className="hover:text-white transition-colors text-left">4. Cookies</button></li>
              <li><button onClick={() => scrollToSection('third-party')} className="hover:text-white transition-colors text-left">5. Third-Party Services</button></li>
              <li><button onClick={() => scrollToSection('rights')} className="hover:text-white transition-colors text-left">6. Your Rights</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors text-left">7. Contact</button></li>
            </ul>
          </div>

          <div id="introduction" className="space-y-4">
            <h2 className="text-2xl font-display font-bold text-white mb-4">1. Introduction</h2>
            <p className="text-platinum/80 leading-relaxed">
              Resonance Music & Community ("we," "our," or "us") is a non-profit organization registered in Austria (ZVR-Zahl: 123456789). We operate this website to support underground artists and foster a community of music enthusiasts. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            <p className="text-platinum/80 leading-relaxed">
              We are committed to strict adherence to the General Data Protection Regulation (GDPR) and other applicable privacy laws.
            </p>
          </div>

          <div className="w-full h-px bg-white/10" />

          <div id="data-collection" className="space-y-4">
            <h2 className="text-2xl font-display font-bold text-white mb-4">2. Data We Collect</h2>
            <p className="text-platinum/80 leading-relaxed mb-4">
              We collect information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, when you participate in activities on the website, or otherwise when you contact us.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-platinum/80 leading-relaxed marker:text-liquid-gold">
              <li><strong>Personal Identification Information:</strong> Name, email address, and phone number when you sign up for our newsletter or membership.</li>
              <li><strong>Payment Information:</strong> If you make a donation or purchase merchandise, we collect data necessary to process your payment. All payment data is stored by our payment processor (Shopify/Stripe), and we do not store sensitive card details on our servers.</li>
              <li><strong>Usage Data:</strong> We may collect non-personal information about how you interact with our website, such as your IP address, browser type, and pages visited.</li>
            </ul>
          </div>

          <div className="w-full h-px bg-white/10" />

          <div id="data-usage" className="space-y-4">
            <h2 className="text-2xl font-display font-bold text-white mb-4">3. How We Use Your Data</h2>
            <p className="text-platinum/80 leading-relaxed">
              We use the information we collect or receive:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-platinum/80 leading-relaxed marker:text-liquid-gold">
              <li>To facilitate account creation and logon processes.</li>
              <li>To send you administrative information, such as product, service, and new feature information and/or information about changes to our terms, conditions, and policies.</li>
              <li>To fulfill and manage your orders, donations, and memberships.</li>
              <li>To send you marketing and promotional communications (only with your explicit consent).</li>
              <li>To protect our services and for legal compliance.</li>
            </ul>
          </div>

          <div className="w-full h-px bg-white/10" />

          <div id="cookies" className="space-y-4">
            <h2 className="text-2xl font-display font-bold text-white mb-4">4. Cookies</h2>
            <p className="text-platinum/80 leading-relaxed">
              We use cookies and similar tracking technologies to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.
            </p>
            <div className="bg-white/5 border border-white/10 p-4 mt-4 text-sm text-platinum/60">
              <p>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.</p>
            </div>
          </div>

          <div className="w-full h-px bg-white/10" />

          <div id="third-party" className="space-y-4">
            <h2 className="text-2xl font-display font-bold text-white mb-4">5. Third-Party Services</h2>
            <p className="text-platinum/80 leading-relaxed">
              We may share information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="bg-obsidian border border-white/5 p-4">
                <h4 className="text-white font-bold mb-2">Supabase</h4>
                <p className="text-sm text-platinum/60">We use Supabase for backend services and authentication. Data is stored securely in compliance with GDPR.</p>
              </div>
              <div className="bg-obsidian border border-white/5 p-4">
                <h4 className="text-white font-bold mb-2">Shopify / Stripe</h4>
                <p className="text-sm text-platinum/60">Payment processing for donations and shop purchases. We do not store your financial data.</p>
              </div>
              <div className="bg-obsidian border border-white/5 p-4">
                <h4 className="text-white font-bold mb-2">Spotify</h4>
                <p className="text-sm text-platinum/60">If you connect your Spotify account, we access public profile data to personalize your experience.</p>
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-white/10" />

          <div id="rights" className="space-y-4">
            <h2 className="text-2xl font-display font-bold text-white mb-4">6. Your Rights (GDPR)</h2>
            <p className="text-platinum/80 leading-relaxed">
              In some regions (like the EEA and UK), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability.
            </p>
            <p className="text-platinum/80 leading-relaxed">
              You can make such a request by contacting us using the contact details provided below. We will consider and act upon any request in accordance with applicable data protection laws.
            </p>
          </div>

          <div className="w-full h-px bg-white/10" />

          <div id="data-retention" className="space-y-4">
            <h2 className="text-2xl font-display font-bold text-white mb-4">7. Data Retention</h2>
            <p className="text-platinum/80 leading-relaxed">
              We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy policy, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements).
            </p>
          </div>

          <div className="w-full h-px bg-white/10" />

          <div id="contact" className="space-y-4">
            <h2 className="text-2xl font-display font-bold text-white mb-4">8. Contact Us</h2>
            <p className="text-platinum/80 leading-relaxed">
              If you have questions or comments about this policy, or if you would like to exercise your privacy rights, please contact our Data Protection Officer (DPO) at:
            </p>
            <div className="bg-white/5 border border-white/10 p-6 mt-4">
              <p className="font-bold text-white mb-1">Resonance Music & Community</p>
              <p className="text-platinum/60 mb-4">Attn: Privacy Officer</p>
              
              <div className="space-y-2 text-sm text-platinum/80">
                <p>Murstraße 75</p>
                <p>6063 Rum</p>
                <p>Austria</p>
                <p className="mt-4 pt-4 border-t border-white/10 text-liquid-gold">privacy@resonance-community.at</p>
              </div>
            </div>
          </div>
          
        </motion.div>

        <div className="mt-20 pt-10 border-t border-white/10 text-center">
            <p className="text-platinum/40 text-sm mb-4">
                Thank you for being part of our community.
            </p>
            <a href="/" className="inline-flex items-center gap-2 text-liquid-gold hover:text-white transition-colors font-bold uppercase tracking-widest text-xs">
               <ArrowLeft className="w-3 h-3" /> Back to Homepage
            </a>
        </div>
      </section>
    </div>
  );
}

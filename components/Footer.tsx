
import React from 'react';
import { motion } from 'framer-motion';
import { BRANDING } from '../constants';

const Footer: React.FC = () => {
  // Reliable relative path for the developer photo
  const anandPhotoUrl = '/anand_mohan.png';
  const fallbackAvatar = 'https://ui-avatars.com/api/?name=Anand+Mohan&background=FFD700&color=0A0A0A&bold=true';

  return (
    <footer className="bg-charcoal text-white pt-32 pb-16 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold opacity-[0.03] blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 pb-20 border-b border-white/5">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-10">
            <div className="flex items-center space-x-5 group">
              <div className="w-16 h-16 bg-gold rounded-2xl flex items-center justify-center text-charcoal text-3xl font-black shadow-neon-gold transform group-hover:rotate-12 transition-transform">N</div>
              <div>
                <h3 className="text-3xl font-black uppercase tracking-tighter text-white">NitGyanam</h3>
                <p className="text-[10px] text-gold font-black uppercase tracking-[0.4em]">Well-Being Architecture</p>
              </div>
            </div>
            <p className="text-gray-400 text-lg font-light leading-relaxed max-w-sm">
              {BRANDING.tagline}
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/30 border border-white/10 px-5 py-2.5 rounded-full">{BRANDING.affiliation}</span>
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/30 border border-white/10 px-5 py-2.5 rounded-full">DPIIT Registered</span>
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3 space-y-12">
            <div>
              <h4 className="text-gold text-[10px] font-black uppercase tracking-[0.4em] mb-6">Concerns?</h4>
              <p className="text-xl font-bold text-white">+91 {BRANDING.contact.phone}</p>
              <p className="text-gray-500 text-sm mt-2">Available for student crisis support</p>
            </div>
            <div>
              <h4 className="text-gold text-[10px] font-black uppercase tracking-[0.4em] mb-6">Location</h4>
              <p className="text-xl font-bold text-white">NIT Patna Campus</p>
              <p className="text-gray-500 text-sm mt-2">Patna, Bihar, India 800005</p>
            </div>
          </div>

          {/* Luxury Developer Signature */}
          <div className="lg:col-span-4 flex flex-col lg:items-end">
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-xl p-10 rounded-[2.5rem] w-full lg:max-w-sm relative group border border-white/10"
            >
              <div className="absolute -top-4 -right-4 bg-gold text-charcoal px-5 py-2 rounded-full text-[9px] font-black uppercase tracking-widest shadow-neon-gold border border-white/10 z-20">
                <span className="w-2 h-2 rounded-full bg-charcoal animate-pulse inline-block mr-2" />
                Verified Developer
              </div>
              
              <div className="flex flex-col space-y-8">
                <div className="flex items-center space-x-6">
                  <div className="relative">
                    <img 
                      src={anandPhotoUrl}
                      alt="Anand Mohan" 
                      className="w-20 h-20 rounded-[1.5rem] object-cover neon-ring relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (target.src !== fallbackAvatar) {
                          target.src = fallbackAvatar;
                        }
                      }}
                    />
                  </div>
                  <div>
                    <p className="text-[9px] text-gray-500 font-black uppercase tracking-widest mb-1">Architected by</p>
                    <p className="text-4xl font-signature text-gold mb-1">Anand Mohan</p>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-white/10">
                  <div className="flex justify-between items-center text-[9px] uppercase tracking-widest">
                    <span className="text-gray-500">Reg No</span>
                    <span className="text-white font-bold">22105111023</span>
                  </div>
                  <div className="flex justify-between items-center text-[9px] uppercase tracking-widest">
                    <span className="text-gray-500">Institution</span>
                    <span className="text-white font-bold">DCE Darbhanga</span>
                  </div>
                </div>

                <div className="flex justify-center space-x-6 pt-4 text-white/30 text-xs font-black uppercase tracking-widest">
                  <span className="hover:text-gold cursor-pointer transition-colors">LinkedIn</span>
                  <span className="hover:text-gold cursor-pointer transition-colors">GitHub</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="pt-16 flex flex-col md:flex-row justify-between items-center text-[10px] font-black text-gray-600 uppercase tracking-[0.4em] space-y-6 md:space-y-0">
          <p>© {new Date().getFullYear()} NitGyanam Signature Portal</p>
          <div className="flex items-center space-x-10">
            <span className="text-gold/30">Excellence in EdTech</span>
            <div className="w-1 h-1 bg-white/10 rounded-full" />
            <span>Diagnostic Platform v2.9</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

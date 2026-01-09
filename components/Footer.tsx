
import React from 'react';
import { motion } from 'framer-motion';
import { BRANDING } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal text-white py-20 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="space-y-6">
            <h4 className="text-gold font-black uppercase tracking-[0.3em] text-xs">Mission</h4>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              {BRANDING.tagline}. Dedicated to proactive mental health screening for the next generation.
            </p>
            <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-lg">
              <p className="text-gray-500 text-[9px] font-black uppercase tracking-[0.2em]">
                {BRANDING.recognition}
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-gold font-black uppercase tracking-[0.3em] text-xs">Contact</h4>
            <div className="space-y-4">
              <div className="group cursor-pointer">
                <p className="text-gray-500 text-[9px] font-black uppercase tracking-widest mb-1">Corporate Email</p>
                <p className="text-white font-bold text-sm group-hover:text-gold transition-colors">{BRANDING.contact.email}</p>
              </div>
              <div className="group cursor-pointer">
                <p className="text-gray-500 text-[9px] font-black uppercase tracking-widest mb-1">Support Line</p>
                <p className="text-white font-bold text-sm group-hover:text-gold transition-colors">{BRANDING.contact.phone}</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-gold font-black uppercase tracking-[0.3em] text-xs">Founder</h4>
            <div className="flex items-center space-x-5 group">
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gold flex items-center justify-center text-charcoal font-black text-xl shadow-xl group-hover:scale-105 transition-transform duration-500">
                  AM
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-wellBeingGreen border-2 border-charcoal rounded-full" title="Active Management" />
              </div>
              <div className="space-y-1">
                <p className="text-lg font-black uppercase tracking-tighter text-white">Anand Mohan</p>
                <p className="text-gold text-[9px] font-black uppercase tracking-[0.3em]">Project Director & Lead Developer</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.4em]">
              © {new Date().getFullYear()} {BRANDING.name}
            </p>
            <p className="text-gray-600 text-[9px] font-bold uppercase tracking-widest">
              Digital Infrastructure by NITG Clinical Lab
            </p>
          </div>
          <div className="flex items-center space-x-6">
            <span className="text-gray-500 text-[10px] font-black uppercase tracking-widest">Incubated at {BRANDING.affiliation}</span>
            <div className="w-1.5 h-1.5 rounded-full bg-gold/30" />
            <span className="text-gray-500 text-[10px] font-black uppercase tracking-widest">ISO 27001 Secured</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

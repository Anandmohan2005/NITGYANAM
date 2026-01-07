import React from 'react';
import { motion } from 'framer-motion';
import { BRANDING } from '../constants';

const Footer: React.FC = () => {
 const anandPhotoUrl = "/anand_mohan.jpg";

  return (
    <footer className="bg-charcoal text-white py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="space-y-6">
            <h4 className="text-gold font-black uppercase tracking-widest text-xs">Mission</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              {BRANDING.tagline}
            </p>
            <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest">
              {BRANDING.recognition}
            </p>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-gold font-black uppercase tracking-widest text-xs">Contact</h4>
            <div className="space-y-2">
              <p className="text-white font-bold text-sm">{BRANDING.contact.email}</p>
              <p className="text-gray-400 text-sm">{BRANDING.contact.phone}</p>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-gold font-black uppercase tracking-widest text-xs">Founder</h4>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gold/30">
                <img src={anandPhotoUrl} alt="Founder" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-sm font-black uppercase tracking-tighter">Anand Mohan</p>
                <p className="text-gray-500 text-[9px] font-bold uppercase tracking-widest">Project Director</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest">
            © {new Date().getFullYear()} {BRANDING.name}. All Rights Reserved.
          </p>
          <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest">
            Incubated at {BRANDING.affiliation}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

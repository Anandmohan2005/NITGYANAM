
import React from 'react';
import { motion } from 'framer-motion';
import { BRANDING } from '../constants';

const Footer: React.FC = () => {
  const githubUrl = "https://github.com/Anandmohan2005";
  const linkedinUrl = "https://www.linkedin.com/in/anand-mohan-44171b259?utm_source=share_via&utm_content=profile&utm_medium=member_android";

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
                <div className="w-16 h-16 rounded-2xl bg-gold flex items-center justify-center text-charcoal shadow-xl group-hover:scale-105 transition-transform duration-500 overflow-hidden">
                  <svg className="w-8 h-8 opacity-40" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-wellBeingGreen border-2 border-charcoal rounded-full" title="Active Management" />
              </div>
              <div className="space-y-2">
                <div>
                  <p className="text-lg font-black uppercase tracking-tighter text-white">Anand Mohan</p>
                  <p className="text-gold text-[9px] font-black uppercase tracking-[0.3em]">Founder & Project Director</p>
                </div>
                <div className="flex items-center space-x-3 pt-1">
                  <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
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


import React from 'react';
import { motion } from 'framer-motion';

const FounderSection: React.FC = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-2">
              <span className="text-wellBeingBlue text-[10px] font-black uppercase tracking-[0.5em] block">Visionary Leadership</span>
              <h3 className="text-5xl md:text-6xl font-black text-charcoal tracking-tighter uppercase leading-none">
                Meet the <span className="text-gold">Founder</span>
              </h3>
            </div>
            
            <p className="text-slate-500 text-xl leading-relaxed font-medium italic">
              "At NitGyanam, we believe that true education extends beyond classrooms. It begins with a healthy mind and a supportive ecosystem. Our mission is to bridge the gap between academic pressure and emotional resilience."
            </p>

            <div className="pt-8 flex items-center">
              {/* Black Box Removed */}
              <div>
                <p className="text-charcoal font-black text-2xl uppercase tracking-tighter leading-none">Anand Mohan</p>
                <p className="text-gold text-[9px] font-black uppercase tracking-[0.4em] mt-1">Founder & Project Director</p>
              </div>
            </div>
          </motion.div>

          {/* Visual Display */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-wellBeingBlue/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
            
            <div className="relative z-10 p-4 bg-white shadow-soft-xl rounded-[4rem] border border-slate-50 transform hover:-translate-y-4 transition-transform duration-700">
              <div className="aspect-[4/5] rounded-[3.5rem] overflow-hidden bg-slate-50 flex items-center justify-center relative group">
                {/* Large Black Box background removed and replaced with subtle slate */}
                <div className="absolute inset-0 bg-gradient-to-t from-wellBeingBlue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-slate-200 text-6xl font-black uppercase tracking-tighter opacity-10">NITG</div>
              </div>
              
              <div className="absolute bottom-10 right-10 bg-white text-charcoal p-6 rounded-3xl shadow-2xl border border-slate-100 group">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-wellBeingBlue mb-1">Lead Developer</p>
                <p className="font-black uppercase tracking-tighter text-lg">NIT Patna</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FounderSection;

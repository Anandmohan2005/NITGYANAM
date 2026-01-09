
import React from 'react';
import { motion } from 'framer-motion';

const FounderSection: React.FC = () => {
  // Use a local path for the provided image
  const founderImageUrl = '/founder.jpg';
  // Fallback to a high-quality placeholder if the local image is missing
  const fallbackUrl = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop';

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

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center shrink-0">
                  <span className="text-gold font-bold">01</span>
                </div>
                <div>
                  <h4 className="font-black text-charcoal uppercase tracking-tighter text-lg">Academic Excellence</h4>
                  <p className="text-slate-400 text-sm">Incubated at NIT Patna, bringing technical precision to clinical screening.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-wellBeingBlue/10 flex items-center justify-center shrink-0">
                  <span className="text-wellBeingBlue font-bold">02</span>
                </div>
                <div>
                  <h4 className="font-black text-charcoal uppercase tracking-tighter text-lg">Clinical Integrity</h4>
                  <p className="text-slate-400 text-sm">Empowering students through data-driven psychological insights.</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <p className="text-charcoal font-black text-2xl uppercase tracking-tighter">Anand Mohan</p>
              <p className="text-gold text-xs font-black uppercase tracking-[0.4em]">Founder & Project Director</p>
            </div>
          </motion.div>

          {/* Image Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-wellBeingBlue/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
            
            <div className="relative z-10 p-4 bg-white shadow-soft-xl rounded-[4rem] border border-slate-50 transform hover:-translate-y-4 transition-transform duration-700">
              <div className="aspect-[4/5] rounded-[3.5rem] overflow-hidden border-4 border-slate-100">
                <img 
                  src={founderImageUrl} 
                  alt="Anand Mohan" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = fallbackUrl;
                  }}
                />
              </div>
              
              {/* Overlay Badge */}
              <div className="absolute bottom-10 right-10 bg-charcoal text-white p-6 rounded-3xl shadow-2xl border border-white/10">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gold mb-1">Affiliation</p>
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

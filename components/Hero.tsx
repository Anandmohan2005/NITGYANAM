
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BRANDING } from '../constants';

interface HeroProps {
  onStartQuiz: () => void;
  onLogin: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStartQuiz, onLogin }) => {
  const { scrollY } = useScroll();
  const yImage = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Cinematic High-Res Background */}
      <motion.div 
        style={{ y: yImage }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&q=80&w=2400" 
          alt="Peaceful Study" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-premiumWhite/50 via-transparent to-premiumWhite" />
      </motion.div>

      {/* Floating Sparkles */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -80, 0],
              opacity: [0.1, 0.6, 0.1],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
            className="absolute w-1 h-1 bg-gold rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Central Glassmorphism Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-20 glass-hero-card px-8 py-16 md:px-20 md:py-24 max-w-5xl mx-auto rounded-[3.5rem] text-center border-white/20 shadow-neon-gold"
      >
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="inline-flex items-center space-x-3 bg-gold/10 px-6 py-2 rounded-full border border-gold/20 mb-10"
        >
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse shadow-[0_0_10px_#FFD700]" />
          <span className="text-[10px] font-black text-charcoal uppercase tracking-[0.4em]">{BRANDING.recognition}</span>
        </motion.div>

        <h1 className="text-4xl md:text-7xl font-black mb-6 leading-[1.1] tracking-tighter uppercase text-gradient-hero">
          Empowering Minds,<br />
          <span className="text-charcoal">One Level at a Time.</span>
        </h1>

        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 0.8 }}
          className="text-2xl md:text-4xl font-hindi text-charcoal/80 mb-12 font-medium"
        >
          हर मन की शक्ति, हर स्तर की प्रगति।
        </motion.h2>

        <p className="text-gray-500 text-lg md:text-xl mb-14 max-w-2xl mx-auto leading-relaxed font-light">
          India's premium bilingual screening portal for academic excellence. 
          Bridging the gap between students and support.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 215, 0, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            onClick={onStartQuiz}
            className="w-full sm:w-auto px-16 py-7 bg-gold text-charcoal font-black rounded-full uppercase tracking-widest text-xs shadow-neon-gold transition-all"
          >
            Start Assessment
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05, border: '2px solid #FFD700' }}
            whileTap={{ scale: 0.95 }}
            onClick={onLogin}
            className="w-full sm:w-auto px-16 py-7 bg-transparent text-charcoal font-black rounded-full border-2 border-charcoal/10 uppercase tracking-widest text-xs transition-all hover:bg-white/5"
          >
            Faculty Gateway
          </motion.button>
        </div>
      </motion.div>

      {/* Animated Waves SVG */}
      <div className="absolute bottom-0 left-0 w-full z-10 pointer-events-none opacity-40">
        <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className="parallax">
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,215,0,0.15)" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,215,0,0.1)" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgba(255,255,255,0.5)" />
          </g>
        </svg>
      </div>
    </section>
  );
};

export default Hero;

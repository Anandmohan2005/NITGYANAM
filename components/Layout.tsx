
import React, { useState } from 'react';
import { User, UserRole } from '../types';
import Logo from './Logo';
import Footer from './Footer';
import { motion, AnimatePresence } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
  onNavigate: (view: any) => void;
  activeView: string;
  user: User | null;
  onLogout: () => void;
  onLogoClick?: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, onNavigate, activeView, user, onLogout, onLogoClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNav = (view: any) => {
    onNavigate(view);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Primary Navigation - Solid White */}
      <nav className="fixed top-0 left-0 right-0 z-[2000] bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 md:h-24 flex items-center justify-between">
          <div 
            className="cursor-pointer" 
            onClick={() => {
              onNavigate('home');
              if (onLogoClick) onLogoClick();
            }}
          >
            <Logo className="w-10 h-10 md:w-12 md:h-12" />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            <button 
              onClick={() => onNavigate('home')} 
              className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all hover:text-charcoal ${activeView === 'home' ? 'text-charcoal border-b-2 border-charcoal pb-1' : 'text-slate-400'}`}
            >
              Home
            </button>
            <button 
              onClick={() => onNavigate('quiz')} 
              className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all hover:text-charcoal ${activeView === 'quiz' ? 'text-charcoal border-b-2 border-charcoal pb-1' : 'text-slate-400'}`}
            >
              Assessment
            </button>
            
            {user ? (
              <>
                <button 
                  onClick={() => onNavigate('dashboard')} 
                  className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all hover:text-charcoal ${activeView === 'dashboard' ? 'text-charcoal border-b-2 border-charcoal pb-1' : 'text-slate-400'}`}
                >
                  Dashboard
                </button>
                {user.role === UserRole.ADMIN && (
                  <button 
                    onClick={() => onNavigate('manager')} 
                    className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all hover:text-charcoal ${activeView === 'manager' ? 'text-charcoal border-b-2 border-charcoal pb-1' : 'text-slate-400'}`}
                  >
                    Inventory
                  </button>
                )}
                <button onClick={onLogout} className="text-[11px] font-black uppercase tracking-[0.2em] text-red-500 hover:text-red-700">Logout</button>
              </>
            ) : (
              <button 
                onClick={() => onNavigate('login')} 
                className="bg-charcoal text-white px-10 py-3.5 rounded-full text-[11px] font-black uppercase tracking-[0.2em] transition-all hover:bg-black shadow-lg"
              >
                Faculty Login
              </button>
            )}
          </div>

          {/* Mobile Menu Toggle - Premium Slate Style */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col space-y-1.5 p-3.5 focus:outline-none z-[3100] bg-slate-100 border border-slate-200 rounded-2xl shadow-sm"
            aria-label="Toggle Menu"
          >
            <motion.div 
              animate={isMenuOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-charcoal rounded-full origin-center"
            />
            <motion.div 
              animate={isMenuOpen ? { opacity: 0, x: 10 } : { opacity: 1, x: 0 }}
              className="w-6 h-0.5 bg-charcoal rounded-full"
            />
            <motion.div 
              animate={isMenuOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-charcoal rounded-full origin-center"
            />
          </button>
        </div>

        {/* Mobile Sidebar - Solid White & Gray Opaque Theme */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Solid Heavy Backdrop */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMenuOpen(false)}
                className="fixed inset-0 bg-slate-950/95 z-[2900] md:hidden"
              />
              
              {/* Opaque Sidebar Container */}
              <motion.div 
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 28, stiffness: 220 }}
                className="fixed top-0 right-0 bottom-0 w-[290px] bg-slate-100 z-[3000] md:hidden shadow-[-20px_0_60px_rgba(0,0,0,0.4)] flex flex-col border-l border-slate-300"
              >
                {/* Header Section - Solid White */}
                <div className="p-10 border-b border-slate-200 bg-white">
                  <Logo hideText className="w-9 h-9" />
                  <p className="mt-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">Portal Navigator</p>
                </div>

                {/* Nav Links - High Contrast White & Gray */}
                <div className="flex-grow pt-8 px-6 space-y-4 bg-slate-100 overflow-y-auto">
                  <button 
                    onClick={() => handleNav('home')}
                    className={`w-full flex items-center justify-between p-5 rounded-2xl transition-all border-2 ${activeView === 'home' ? 'bg-slate-900 text-white border-slate-900 shadow-xl' : 'bg-white text-slate-700 border-white hover:border-slate-300 shadow-sm'}`}
                  >
                    <span className="text-[11px] font-black uppercase tracking-widest">Home Page</span>
                    <span className="opacity-20 font-bold">→</span>
                  </button>
                  
                  <button 
                    onClick={() => handleNav('quiz')}
                    className={`w-full flex items-center justify-between p-5 rounded-2xl transition-all border-2 ${activeView === 'quiz' ? 'bg-slate-900 text-white border-slate-900 shadow-xl' : 'bg-white text-slate-700 border-white hover:border-slate-300 shadow-sm'}`}
                  >
                    <span className="text-[11px] font-black uppercase tracking-widest">Self Assessment</span>
                    <span className="opacity-20 font-bold">→</span>
                  </button>

                  {user && (
                    <>
                      <div className="h-px bg-slate-200 my-4 mx-2" />
                      <button 
                        onClick={() => handleNav('dashboard')}
                        className={`w-full flex items-center justify-between p-5 rounded-2xl transition-all border-2 ${activeView === 'dashboard' ? 'bg-slate-900 text-white border-slate-900 shadow-xl' : 'bg-white text-slate-700 border-white hover:border-slate-300 shadow-sm'}`}
                      >
                        <span className="text-[11px] font-black uppercase tracking-widest">Clinical Portal</span>
                        <span className="opacity-20 font-bold">→</span>
                      </button>
                      
                      {user.role === UserRole.ADMIN && (
                        <button 
                          onClick={() => handleNav('manager')}
                          className={`w-full flex items-center justify-between p-5 rounded-2xl transition-all border-2 ${activeView === 'manager' ? 'bg-slate-900 text-white border-slate-900 shadow-xl' : 'bg-white text-slate-700 border-white hover:border-slate-300 shadow-sm'}`}
                        >
                          <span className="text-[11px] font-black uppercase tracking-widest">MCQ Inventory</span>
                          <span className="opacity-20 font-bold">→</span>
                        </button>
                      )}
                      
                      <button 
                        onClick={onLogout}
                        className="w-full flex items-center justify-center p-5 rounded-2xl text-red-600 bg-white border-2 border-white hover:bg-red-50 transition-all mt-6 shadow-sm"
                      >
                        <span className="text-[11px] font-black uppercase tracking-widest">Terminate Session</span>
                      </button>
                    </>
                  )}

                  {!user && (
                    <div className="pt-10">
                      <button 
                        onClick={() => handleNav('login')}
                        className="w-full bg-charcoal text-white px-8 py-6 rounded-[2.5rem] text-[11px] font-black uppercase tracking-widest text-center shadow-2xl hover:bg-black transition-all border-2 border-charcoal"
                      >
                        Faculty Secure Login
                      </button>
                    </div>
                  )}
                </div>

                {/* Footer Section - Solid White */}
                <div className="mt-auto p-10 border-t border-slate-200 bg-white">
                  <p className="text-[9px] font-black text-slate-300 uppercase tracking-[0.5em] text-center">NitGyanam Well-Being v2.6</p>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>

      {/* Content Space Offset */}
      <main className="flex-grow pt-20 md:pt-24">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
    
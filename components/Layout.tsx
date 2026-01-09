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
    <div className="min-h-screen flex flex-col">
      {/* Main Navbar - Increased Z-index to 2000 */}
      <nav className="fixed top-0 left-0 right-0 z-[2000] bg-white border-b border-gray-100 shadow-sm">
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
              className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all hover:text-gold ${activeView === 'home' ? 'text-charcoal border-b-2 border-gold pb-1' : 'text-gray-400'}`}
            >
              Home
            </button>
            <button 
              onClick={() => onNavigate('quiz')} 
              className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all hover:text-gold ${activeView === 'quiz' ? 'text-charcoal border-b-2 border-gold pb-1' : 'text-gray-400'}`}
            >
              Assessment
            </button>
            
            {user ? (
              <>
                <button 
                  onClick={() => onNavigate('dashboard')} 
                  className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all hover:text-gold ${activeView === 'dashboard' ? 'text-charcoal border-b-2 border-gold pb-1' : 'text-gray-400'}`}
                >
                  Dashboard
                </button>
                {user.role === UserRole.ADMIN && (
                  <button 
                    onClick={() => onNavigate('manager')} 
                    className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all hover:text-gold ${activeView === 'manager' ? 'text-charcoal border-b-2 border-gold pb-1' : 'text-gray-400'}`}
                  >
                    Inventory
                  </button>
                )}
                <button onClick={onLogout} className="text-[11px] font-black uppercase tracking-[0.2em] text-red-500 hover:text-red-700">Logout</button>
              </>
            ) : (
              <button 
                onClick={() => onNavigate('login')} 
                className="bg-charcoal text-white px-10 py-3.5 rounded-full text-[11px] font-black uppercase tracking-[0.2em] transition-all hover:bg-black shadow-lg shadow-gray-100"
              >
                Faculty Login
              </button>
            )}
          </div>

          {/* Mobile Toggle Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col space-y-1.5 p-2 focus:outline-none z-[2200]"
            aria-label="Toggle Menu"
          >
            <motion.div 
              animate={isMenuOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
              className="w-7 h-0.5 bg-charcoal rounded-full origin-center"
            />
            <motion.div 
              animate={isMenuOpen ? { opacity: 0, x: 10 } : { opacity: 1, x: 0 }}
              className="w-7 h-0.5 bg-charcoal rounded-full"
            />
            <motion.div 
              animate={isMenuOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
              className="w-7 h-0.5 bg-charcoal rounded-full origin-center"
            />
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Solid Backdrop Overlay (Z-2050) */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMenuOpen(false)}
                className="fixed inset-0 bg-slate-900/80 backdrop-blur-md z-[2050] md:hidden"
              />
              
              {/* Opaque Sidebar (Z-2100) - White & Gray Design */}
              <motion.div 
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 bottom-0 w-[280px] bg-[#F8F9FA] z-[2100] md:hidden shadow-[-15px_0_40px_rgba(0,0,0,0.25)] flex flex-col border-l border-gray-200"
              >
                {/* Header - Solid White */}
                <div className="p-8 border-b border-gray-200 bg-white">
                  <Logo hideText className="w-8 h-8" />
                  <p className="mt-4 text-[10px] font-black text-gray-400 uppercase tracking-[0.4em]">Navigation Menu</p>
                </div>

                {/* Body - Professional Gray Background with White Cards */}
                <div className="flex-grow pt-8 px-6 space-y-3 bg-[#F8F9FA]">
                  <button 
                    onClick={() => handleNav('home')}
                    className={`w-full flex items-center space-x-4 p-5 rounded-2xl transition-all border ${activeView === 'home' ? 'bg-wellBeingBlue text-white border-wellBeingBlue shadow-lg' : 'bg-white text-slate-700 border-gray-100 hover:border-wellBeingBlue'}`}
                  >
                    <span className="text-[11px] font-black uppercase tracking-widest">Home</span>
                  </button>
                  
                  <button 
                    onClick={() => handleNav('quiz')}
                    className={`w-full flex items-center space-x-4 p-5 rounded-2xl transition-all border ${activeView === 'quiz' ? 'bg-wellBeingBlue text-white border-wellBeingBlue shadow-lg' : 'bg-white text-slate-700 border-gray-100 hover:border-wellBeingBlue'}`}
                  >
                    <span className="text-[11px] font-black uppercase tracking-widest">Assessment</span>
                  </button>

                  {user && (
                    <>
                      <button 
                        onClick={() => handleNav('dashboard')}
                        className={`w-full flex items-center space-x-4 p-5 rounded-2xl transition-all border ${activeView === 'dashboard' ? 'bg-wellBeingBlue text-white border-wellBeingBlue shadow-lg' : 'bg-white text-slate-700 border-gray-100 hover:border-wellBeingBlue'}`}
                      >
                        <span className="text-[11px] font-black uppercase tracking-widest">Dashboard</span>
                      </button>
                      
                      {user.role === UserRole.ADMIN && (
                        <button 
                          onClick={() => handleNav('manager')}
                          className={`w-full flex items-center space-x-4 p-5 rounded-2xl transition-all border ${activeView === 'manager' ? 'bg-wellBeingBlue text-white border-wellBeingBlue shadow-lg' : 'bg-white text-slate-700 border-gray-100 hover:border-wellBeingBlue'}`}
                        >
                          <span className="text-[11px] font-black uppercase tracking-widest">Inventory</span>
                        </button>
                      )}
                      
                      <button 
                        onClick={onLogout}
                        className="w-full flex items-center space-x-4 p-5 rounded-2xl text-red-500 bg-red-50 border border-red-100 hover:bg-red-100 transition-all mt-4"
                      >
                        <span className="text-[11px] font-black uppercase tracking-widest">Sign Out</span>
                      </button>
                    </>
                  )}

                  {!user && (
                    <div className="pt-8">
                      <button 
                        onClick={() => handleNav('login')}
                        className="w-full bg-charcoal text-white px-8 py-5 rounded-[2rem] text-[11px] font-black uppercase tracking-widest text-center shadow-xl hover:bg-black transition-all"
                      >
                        Faculty Login
                      </button>
                    </div>
                  )}
                </div>

                {/* Footer - Solid White */}
                <div className="mt-auto p-8 border-t border-gray-200 bg-white text-center">
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em]">NitGyanam Portal v2.3</p>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>

      <main className="flex-grow pt-20 md:pt-24">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
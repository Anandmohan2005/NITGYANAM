
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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl shadow-sm border-b border-gray-100">
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

          {/* Mobile Hamburger Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col space-y-1.5 p-2 focus:outline-none z-[60]"
          >
            <motion.div 
              animate={isMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="w-8 h-1 bg-charcoal rounded-full origin-center"
            />
            <motion.div 
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-8 h-1 bg-charcoal rounded-full"
            />
            <motion.div 
              animate={isMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="w-8 h-1 bg-charcoal rounded-full origin-center"
            />
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMenuOpen(false)}
                className="fixed inset-0 bg-charcoal/50 backdrop-blur-sm z-[55] md:hidden"
              />
              <motion.div 
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 bottom-0 w-[280px] bg-white z-[56] md:hidden shadow-2xl flex flex-col pt-32 px-10 space-y-8"
              >
                <button 
                  onClick={() => handleNav('home')}
                  className={`text-xl font-black uppercase tracking-widest text-left ${activeView === 'home' ? 'text-gold' : 'text-charcoal'}`}
                >
                  Home
                </button>
                <button 
                  onClick={() => handleNav('quiz')}
                  className={`text-xl font-black uppercase tracking-widest text-left ${activeView === 'quiz' ? 'text-gold' : 'text-charcoal'}`}
                >
                  Assessment
                </button>
                {user ? (
                  <>
                    <button 
                      onClick={() => handleNav('dashboard')}
                      className={`text-xl font-black uppercase tracking-widest text-left ${activeView === 'dashboard' ? 'text-gold' : 'text-charcoal'}`}
                    >
                      Dashboard
                    </button>
                    <button onClick={onLogout} className="text-xl font-black uppercase tracking-widest text-red-500 text-left">Logout</button>
                  </>
                ) : (
                  <button 
                    onClick={() => handleNav('login')}
                    className="bg-charcoal text-white px-8 py-5 rounded-3xl text-sm font-black uppercase tracking-widest text-center shadow-lg"
                  >
                    Faculty Login
                  </button>
                )}
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

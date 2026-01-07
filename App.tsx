/**
 * NITGYANAM WELL-BEING PORTAL - TECHNICAL ARCHITECTURE
 * ---------------------------------------------------
 * Framework: React 19 (Functional Components + Hooks)
 * Styling: Tailwind CSS (Utility-first, JIT Engine)
 * Animation: Framer Motion (Declarative Orchestration)
 * State Management: Local React State + LocalStorage Persistence
 * Data Flow: Unidirectional (Parent-to-Child via Props)
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import Quiz from './components/Quiz';
import AdminDashboard from './components/AdminDashboard';
import QuestionManager from './components/QuestionManager';
import Auth from './components/Auth';
import Hero from './components/Hero';
import { User, UserRole, WellBeingLevel, Submission } from './types';

type AppView = 'home' | 'quiz' | 'login' | 'dashboard' | 'manager';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<AppView>('home');
  const [user, setUser] = useState<User | null>(null);
  const [showDebug, setShowDebug] = useState(false);
  const [logoClicks, setLogoClicks] = useState(0);

  useEffect(() => {
    const savedUser = localStorage.getItem('ng_user_session');
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  const handleLogin = (u: User) => {
    setUser(u);
    localStorage.setItem('ng_user_session', JSON.stringify(u));
    setActiveView('dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('ng_user_session');
    setActiveView('home');
  };

  const handleLogoClick = () => {
    const newCount = logoClicks + 1;
    setLogoClicks(newCount);
    if (newCount === 5) {
      setShowDebug(true);
      setLogoClicks(0);
    }
    setTimeout(() => setLogoClicks(0), 2000);
  };

  const levels = [
    { title: WellBeingLevel.LEVEL_1, hindi: 'कक्षा १ से ३', icon: '🎨', desc: 'Emotions & Home Metaphors', color: 'text-wellBeingBlue' },
    { title: WellBeingLevel.LEVEL_2, hindi: 'कक्षा ४ से ६', icon: '🔋', desc: 'Energy & Focus Probe', color: 'text-wellBeingGreen' },
    { title: WellBeingLevel.LEVEL_3, hindi: 'कक्षा ७ से ८', icon: '📱', desc: 'Identity & Social Connection', color: 'text-wellBeingBlue' },
    { title: WellBeingLevel.LEVEL_4, hindi: 'कक्षा ९ से १०', icon: '🚀', desc: 'Aspirations & Future Dread', color: 'text-slate-800' },
  ];

  const renderContent = () => {
    switch (activeView) {
      case 'home':
        return (
          <div className="pb-32">
            <Hero 
              onStartQuiz={() => setActiveView('quiz')} 
              onLogin={() => setActiveView('login')} 
            />
            
            <section className="max-w-7xl mx-auto px-6 py-40">
              <div className="text-center mb-24 space-y-4">
                <motion.span 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="text-wellBeingBlue text-[10px] font-black uppercase tracking-[0.5em] block"
                >
                  Diagnostic Modules
                </motion.span>
                <motion.h3 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-6xl font-black text-slate-800 uppercase tracking-tighter"
                >
                  Assessment Tiers
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.6 }}
                  className="text-slate-400 font-hindi text-xl md:text-2xl"
                >
                  छात्रों के मानसिक स्वास्थ्य हेतु स्तर-आधारित मॉड्यूल
                </motion.p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {levels.map((lvl, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -15, scale: 1.02 }}
                    onClick={() => setActiveView('quiz')}
                    className="bg-white p-12 rounded-[4rem] cursor-pointer group flex flex-col items-center text-center shadow-bento hover:shadow-2xl hover:border-wellBeingBlue border border-transparent transition-all"
                  >
                    <div className={`text-7xl mb-10 transform group-hover:scale-125 transition-all duration-500 drop-shadow-md`}>
                      {lvl.icon}
                    </div>
                    <h4 className={`text-2xl font-black mb-2 uppercase tracking-tighter group-hover:text-wellBeingBlue transition-colors ${lvl.color}`}>
                      {lvl.title}
                    </h4>
                    <p className="text-slate-400 font-hindi text-lg mb-8 italic opacity-80 group-hover:opacity-100 transition-opacity">
                      {lvl.hindi}
                    </p>
                    <div className="flex-grow">
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] leading-relaxed">
                        {lvl.desc}
                      </p>
                    </div>
                    <div className="mt-12 w-14 h-14 rounded-full bg-slate-50 flex items-center justify-center text-wellBeingBlue/30 group-hover:bg-wellBeingBlue group-hover:text-white transition-all shadow-sm">
                      <span className="text-xl font-bold">→</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>
        );
      case 'quiz':
        return <Quiz onComplete={(submission: Submission) => {
          // Stay on quiz page to show completion screen, 
          // or navigate away only when user explicitly clicks "Finish and Return"
          console.log("Assessment logged:", submission.id);
        }} />;
      case 'login':
        return <Auth onLogin={handleLogin} />;
      case 'dashboard':
        return user ? <AdminDashboard user={user} /> : <Auth onLogin={handleLogin} />;
      case 'manager':
        return user?.role === UserRole.ADMIN ? <QuestionManager /> : <Auth onLogin={handleLogin} />;
      default:
        return null;
    }
  };

  return (
    <Layout 
      activeView={activeView} 
      onNavigate={setActiveView} 
      user={user} 
      onLogout={handleLogout}
      onLogoClick={handleLogoClick}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={activeView}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {renderContent()}
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {showDebug && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            className="fixed top-0 right-0 w-full md:w-[450px] h-full bg-charcoal z-[999] shadow-2xl p-10 overflow-y-auto text-white"
          >
            <div className="flex justify-between items-center mb-10 border-b border-white/10 pb-6">
              <div>
                <h4 className="text-gold font-black uppercase tracking-widest text-xs">Developer Console</h4>
                <p className="text-[10px] text-gray-500 mt-1 uppercase font-bold tracking-tighter italic">Inspection: Local Storage Mode</p>
              </div>
              <button onClick={() => setShowDebug(false)} className="text-white/40 hover:text-white font-black text-xs">CLOSE [X]</button>
            </div>

            <div className="space-y-10 font-mono text-[10px]">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                <p className="text-wellBeingGreen mb-4 font-bold uppercase tracking-widest">Active State</p>
                <div className="space-y-2 text-gray-400">
                   <p>View: <span className="text-white">{activeView}</span></p>
                   <p>User: <span className="text-white">{user ? user.username : 'Guest'}</span></p>
                   <p>Role: <span className="text-white">{user ? user.role : 'N/A'}</span></p>
                </div>
              </div>

              <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                <p className="text-wellBeingBlue mb-4 font-bold uppercase tracking-widest">LocalStorage DB (Submissions)</p>
                <div className="max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                  <pre className="text-[8px] leading-tight text-gold/80">
                    {JSON.stringify(JSON.parse(localStorage.getItem('nit_gyanam_submissions_v2') || '[]'), null, 2)}
                  </pre>
                </div>
              </div>

              <div className="text-center pt-4">
                <button 
                  onClick={() => { localStorage.clear(); window.location.reload(); }}
                  className="text-[9px] bg-red-500/20 text-red-500 border border-red-500/30 px-6 py-3 rounded-full font-black uppercase tracking-widest hover:bg-red-500 hover:text-white transition-all"
                >
                  Wipe Database & Reset
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default App;
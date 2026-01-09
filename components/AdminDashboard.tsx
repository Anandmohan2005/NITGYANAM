
import React, { useState, useEffect } from 'react';
import { Submission, UserRole, User, Question } from '../types';
import { api } from '../services/api';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../services/supabase';

interface AdminDashboardProps {
  user: User;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ user }) => {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [filter, setFilter] = useState<'all' | 'CRITICAL'>('all');
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null);
  const [isLive, setIsLive] = useState(false);
  const [isRegenerating, setIsRegenerating] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);

  const loadData = async () => {
    const [sData, qData] = await Promise.all([
      api.fetchSubmissions(),
      api.fetchQuestions()
    ]);
    setSubmissions(sData);
    setQuestions(qData);
    setIsLive(!!supabase);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleSync = async () => {
    if (!isLive || isSyncing) return;
    setIsSyncing(true);
    const result = await api.syncLocalData();
    alert(`Sync Complete: ${result.success} records uploaded, ${result.failed} failed.`);
    await loadData();
    setIsSyncing(false);
  };

  const handleRegenerate = async () => {
    if (!selectedSubmission || isRegenerating) return;
    
    setIsRegenerating(true);
    try {
      const newReport = await api.generateAIAnalysis(selectedSubmission, questions);
      const updatedSubmission = { ...selectedSubmission, aiReport: newReport };
      await api.submitAssessment(updatedSubmission);
      
      setSubmissions(prev => prev.map(s => s.id === selectedSubmission.id ? updatedSubmission : s));
      setSelectedSubmission(updatedSubmission);
    } catch (e) {
      console.error(e);
    } finally {
      setIsRegenerating(false);
    }
  };

  const filteredData = submissions.filter(s => 
    filter === 'all' ? true : s.riskStatus === 'CRITICAL'
  );

  const stats = {
    total: submissions.length,
    critical: submissions.filter(s => s.riskStatus === 'CRITICAL').length,
    moderate: submissions.filter(s => s.riskStatus === 'MODERATE').length,
    stable: submissions.filter(s => s.riskStatus === 'STABLE').length,
  };

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
        <div>
          <div className="flex items-center space-x-4 mb-2">
            <h2 className="text-5xl font-black text-slate-800 tracking-tighter uppercase leading-none">
              {user.role === UserRole.ADMIN ? 'MCQ Center' : 'Clinical Portal'}
            </h2>
            <div className={`px-4 py-1.5 rounded-full flex items-center space-x-2 border ${isLive ? 'bg-emerald-50 border-emerald-100 text-emerald-600' : 'bg-slate-50 border-slate-100 text-slate-400'}`}>
              <div className={`w-2 h-2 rounded-full ${isLive ? 'bg-emerald-500 animate-pulse' : 'bg-slate-300'}`} />
              <span className="text-[9px] font-black uppercase tracking-widest">{isLive ? 'Cloud DB Active' : 'Local Storage Only'}</span>
            </div>
          </div>
          <p className="text-slate-400 font-medium mt-3 text-lg italic">Tracking Well-Being for: <span className="text-wellBeingBlue font-black">{user.username}</span></p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          {isLive && (
            <button 
              onClick={handleSync}
              disabled={isSyncing}
              className={`px-8 py-4 rounded-full text-[11px] font-black uppercase tracking-widest transition-all bg-emerald-600 text-white shadow-lg hover:bg-emerald-700 flex items-center justify-center space-x-2 ${isSyncing ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isSyncing ? <span>Syncing...</span> : <span>☁️ Sync Local Data</span>}
            </button>
          )}
          <div className="flex bg-white shadow-sm border border-slate-100 p-2 rounded-full">
            <button 
              onClick={() => setFilter('all')}
              className={`px-8 py-3 rounded-full text-[11px] font-black uppercase tracking-widest transition-all ${filter === 'all' ? 'bg-wellBeingBlue text-white shadow-md' : 'text-slate-400 hover:text-wellBeingBlue'}`}
            >
              All
            </button>
            <button 
              onClick={() => setFilter('CRITICAL')}
              className={`px-8 py-3 rounded-full text-[11px] font-black uppercase tracking-widest transition-all ${filter === 'CRITICAL' ? 'bg-red-500 text-white shadow-md' : 'text-slate-400 hover:text-red-500'}`}
            >
              Red Flags
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
        <div className="bg-white p-10 rounded-[3rem] shadow-bento border border-slate-50 group transition-all">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Total Screened</p>
          <p className="text-5xl font-black text-slate-800 mt-3 tracking-tighter">{stats.total}</p>
        </div>
        <div className="bg-emerald-50 p-10 rounded-[3rem] border border-emerald-100/50 group transition-all">
          <p className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.3em]">Healthy</p>
          <p className="text-5xl font-black text-emerald-700 mt-3 tracking-tighter">{stats.stable}</p>
        </div>
        <div className="bg-amber-50 p-10 rounded-[3rem] border border-amber-100/50 group transition-all">
          <p className="text-[10px] font-black text-amber-600 uppercase tracking-[0.3em]">Moderate</p>
          <p className="text-5xl font-black text-amber-700 mt-3 tracking-tighter">{stats.moderate}</p>
        </div>
        <div className="bg-red-50 p-10 rounded-[3rem] border border-red-200 shadow-xl shadow-red-500/10 transition-all">
          <p className="text-[10px] font-black text-red-600 uppercase tracking-[0.3em]">Red Flags</p>
          <p className="text-5xl font-black text-red-700 mt-3 tracking-tighter">{stats.critical}</p>
        </div>
      </div>

      <div className="bg-white rounded-[4rem] overflow-hidden border border-slate-100 shadow-soft-xl">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-50">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="px-10 py-8 text-left text-[11px] font-black text-slate-400 uppercase tracking-[0.3em]">Student Profile</th>
                <th className="px-10 py-8 text-left text-[11px] font-black text-slate-400 uppercase tracking-[0.3em]">Clinical Status</th>
                <th className="px-10 py-8 text-left text-[11px] font-black text-slate-400 uppercase tracking-[0.3em]">AI Insights</th>
                <th className="px-10 py-8 text-left text-[11px] font-black text-slate-400 uppercase tracking-[0.3em]">Sync Log</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filteredData.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-10 py-32 text-center text-slate-300 font-black uppercase tracking-[0.4em] text-sm">No synchronized records found.</td>
                </tr>
              ) : (
                filteredData.map((s) => (
                  <tr key={s.id} className={`hover:bg-slate-50/30 transition-colors group ${s.riskStatus === 'CRITICAL' ? 'bg-red-50/20' : ''}`}>
                    <td className="px-10 py-10">
                      <div className="text-xl font-black text-slate-800 tracking-tighter group-hover:text-wellBeingBlue transition-colors">{s.student.name}</div>
                      <div className="text-[10px] text-slate-400 font-black uppercase mt-1.5 tracking-widest">Std {s.student.standard} • {s.student.school}</div>
                    </td>
                    <td className="px-10 py-10">
                      <div className={`inline-flex items-center space-x-3 px-6 py-2.5 rounded-full border ${
                        s.riskStatus === 'CRITICAL' ? 'bg-red-100 text-red-700 border-red-200' : 
                        s.riskStatus === 'MODERATE' ? 'bg-amber-100 text-amber-700 border-amber-200' : 'bg-emerald-100 text-emerald-700 border-emerald-200'
                      }`}>
                        <span className={`w-2.5 h-2.5 rounded-full animate-pulse ${
                          s.riskStatus === 'CRITICAL' ? 'bg-red-600' : 
                          s.riskStatus === 'MODERATE' ? 'bg-amber-600' : 'bg-emerald-600'
                        }`} />
                        <span className="text-[11px] font-black uppercase tracking-widest">{s.riskStatus}</span>
                      </div>
                    </td>
                    <td className="px-10 py-10">
                      <button 
                        onClick={() => setSelectedSubmission(s)}
                        className="bg-wellBeingBlue text-white px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-charcoal transition-all shadow-md"
                      >
                        Behavioral Record
                      </button>
                    </td>
                    <td className="px-10 py-10 text-[11px] text-slate-300 font-black uppercase tracking-tighter">
                      {new Date(s.timestamp).toLocaleDateString()}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <AnimatePresence>
        {selectedSubmission && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              onClick={() => setSelectedSubmission(null)} 
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[2100]" 
            />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 30 }} 
              animate={{ scale: 1, opacity: 1, y: 0 }} 
              exit={{ scale: 0.95, opacity: 0, y: 30 }} 
              className="fixed inset-4 md:inset-10 lg:inset-20 m-auto w-full max-w-5xl h-fit max-h-[90vh] bg-white rounded-[3rem] z-[2200] shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Header - Matching requested style */}
              <div className="bg-[#0A0A0A] px-10 py-10 text-white flex justify-between items-start shrink-0">
                <div className="flex items-center space-x-6">
                  <div className="w-14 h-14 bg-wellBeingBlue rounded-2xl flex items-center justify-center text-3xl shadow-lg">📄</div>
                  <div>
                    <h3 className="text-3xl font-black uppercase tracking-tighter leading-none">Behavioral Assessment Record</h3>
                    <p className="text-gold text-[10px] font-black uppercase tracking-[0.4em] mt-3">NitGyanam Well-Being Framework</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedSubmission(null)} 
                  className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all group shadow-inner"
                >
                  <span className="text-2xl text-white group-hover:scale-110 transition-transform">✕</span>
                </button>
              </div>

              {/* Scrollable Content Area */}
              <div className="flex-grow overflow-y-auto p-12 md:p-16 custom-scrollbar bg-white">
                <div className="max-w-4xl mx-auto space-y-12">
                   {/* Info Matrix */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pb-10 border-b border-slate-100">
                    <div>
                      <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">Full Name</p>
                      <p className="text-xl font-bold text-slate-800">{selectedSubmission.student.name}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">Academic Grade</p>
                      <p className="text-xl font-bold text-slate-800">Std {selectedSubmission.student.standard}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">Diagnostic ID</p>
                      <p className="text-xl font-bold text-wellBeingBlue">{selectedSubmission.id}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">Risk Verdict</p>
                      <div className={`text-xl font-black uppercase ${
                        selectedSubmission.riskStatus === 'CRITICAL' ? 'text-red-500' : 
                        selectedSubmission.riskStatus === 'MODERATE' ? 'text-amber-500' : 'text-emerald-500'
                      }`}>
                        {selectedSubmission.riskStatus}
                      </div>
                    </div>
                  </div>

                  {/* Student Feedback */}
                  {selectedSubmission.feedback && (
                    <div className="bg-amber-50/50 border border-amber-100 p-8 rounded-[2.5rem]">
                        <h4 className="text-[10px] font-black uppercase text-amber-600 tracking-widest mb-4">Student Self-Disclosure</h4>
                        <p className="font-medium text-slate-700 italic text-xl leading-relaxed">"{selectedSubmission.feedback}"</p>
                    </div>
                  )}

                  {/* Main Analysis Text */}
                  <div className="prose prose-slate prose-xl max-w-none">
                    <div className="whitespace-pre-wrap font-medium text-slate-700 leading-relaxed border-l-4 border-slate-100 pl-10 py-4">
                      {selectedSubmission.aiReport ? selectedSubmission.aiReport : "Analyzing behavioral markers..."}
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Actions - Matching requested style */}
              <div className="px-10 py-8 bg-white border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-6 shrink-0">
                <div className="flex flex-col">
                  <p className="text-[9px] font-black text-slate-300 uppercase tracking-[0.3em]">Confidential Diagnostic Document</p>
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em]">Authorized Reviewer: <span className="text-wellBeingBlue">{user.username}</span></p>
                </div>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <button 
                    disabled={isRegenerating} 
                    onClick={handleRegenerate} 
                    className={`flex items-center space-x-3 px-8 py-4 border border-slate-200 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-600 shadow-sm transition-all ${
                      isRegenerating ? 'opacity-50' : 'hover:border-wellBeingBlue hover:text-wellBeingBlue hover:bg-wellBeingBlue/5'
                    }`}
                  >
                    {isRegenerating ? (
                      <div className="w-4 h-4 border-2 border-wellBeingBlue border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <span className="flex items-center"><span className="mr-2">🔄</span> Regenerate Analysis</span>
                    )}
                  </button>
                  <button 
                    onClick={() => window.print()} 
                    className="px-8 py-4 border border-slate-200 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-600 hover:bg-slate-50 transition-all shadow-sm"
                  >
                    Print Record
                  </button>
                  <button 
                    onClick={() => setSelectedSubmission(null)} 
                    className="bg-[#0A0A0A] text-white px-12 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-black transition-all shadow-xl active:scale-95"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdminDashboard;

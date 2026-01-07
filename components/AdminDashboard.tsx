
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

  useEffect(() => {
    const loadData = async () => {
      const [sData, qData] = await Promise.all([
        api.fetchSubmissions(),
        api.fetchQuestions()
      ]);
      setSubmissions(sData);
      setQuestions(qData);
      setIsLive(!!supabase);
    };
    loadData();
  }, []);

  const handleRegenerate = async () => {
    if (!selectedSubmission || isRegenerating) return;
    
    setIsRegenerating(true);
    try {
      const newReport = await api.generateAIAnalysis(selectedSubmission, questions);
      const updatedSubmission = { ...selectedSubmission, aiReport: newReport };
      await api.submitAssessment(updatedSubmission);
      
      // Update state
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
        <div className="flex bg-white shadow-sm border border-slate-100 p-2 rounded-full">
          <button 
            onClick={() => setFilter('all')}
            className={`px-8 py-3 rounded-full text-[11px] font-black uppercase tracking-widest transition-all ${filter === 'all' ? 'bg-wellBeingBlue text-white shadow-md' : 'text-slate-400 hover:text-wellBeingBlue'}`}
          >
            All Submissions
          </button>
          <button 
            onClick={() => setFilter('CRITICAL')}
            className={`px-8 py-3 rounded-full text-[11px] font-black uppercase tracking-widest transition-all ${filter === 'CRITICAL' ? 'bg-red-500 text-white shadow-md' : 'text-slate-400 hover:text-red-500'}`}
          >
            Red Flags Only
          </button>
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
                        Psychological Conclusion
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
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedSubmission(null)}
              className="fixed inset-0 bg-charcoal/80 backdrop-blur-md z-[100]"
            />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 30 }}
              className="fixed inset-0 m-auto w-full max-w-4xl h-fit max-h-[90vh] bg-white rounded-[4rem] z-[101] shadow-2xl overflow-hidden flex flex-col"
            >
              <div className="bg-charcoal px-12 py-10 text-white flex justify-between items-center shrink-0">
                <div className="flex items-center space-x-6">
                  <div className="w-12 h-12 bg-wellBeingBlue rounded-2xl flex items-center justify-center text-2xl">📝</div>
                  <div>
                    <h3 className="text-2xl font-black uppercase tracking-tighter">Clinical Diagnostic Record</h3>
                    <p className="text-gold text-[10px] font-black uppercase tracking-[0.3em] mt-1">NitGyanam Well-Being Framework</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedSubmission(null)}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="p-12 overflow-y-auto custom-scrollbar bg-slate-50/30">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 bg-white p-10 rounded-[2.5rem] border border-slate-100">
                  <div className="space-y-1">
                    <p className="text-[9px] font-black uppercase text-slate-400 tracking-widest">Full Name</p>
                    <p className="font-bold text-slate-800">{selectedSubmission.student.name}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[9px] font-black uppercase text-slate-400 tracking-widest">Grade</p>
                    <p className="font-bold text-slate-800">Std {selectedSubmission.student.standard}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[9px] font-black uppercase text-slate-400 tracking-widest">Diagnostic ID</p>
                    <p className="font-bold text-wellBeingBlue">{selectedSubmission.id}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[9px] font-black uppercase text-slate-400 tracking-widest">Status</p>
                    <p className={`font-black uppercase text-[10px] ${
                      selectedSubmission.riskStatus === 'CRITICAL' ? 'text-red-500' : 
                      selectedSubmission.riskStatus === 'MODERATE' ? 'text-amber-500' : 'text-emerald-500'
                    }`}>{selectedSubmission.riskStatus}</p>
                  </div>
                </div>

                <div className="prose prose-slate prose-lg max-w-none">
                  <div className="whitespace-pre-wrap font-medium text-slate-700 leading-relaxed text-lg border-l-4 border-wellBeingBlue/20 pl-8 py-2">
                    {selectedSubmission.aiReport ? selectedSubmission.aiReport : "Analysis pending or unavailable."}
                  </div>
                </div>
              </div>

              <div className="px-12 py-8 bg-white border-t border-slate-100 flex justify-between items-center shrink-0">
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                  Confidential Document • Authorized Reviewer: {user.username}
                </p>
                <div className="flex gap-4">
                  <button 
                    disabled={isRegenerating}
                    onClick={handleRegenerate}
                    className={`flex items-center space-x-3 px-6 py-3 border-2 border-slate-100 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-600 transition-all ${
                      isRegenerating ? 'opacity-50' : 'hover:border-wellBeingBlue hover:text-wellBeingBlue'
                    }`}
                  >
                    {isRegenerating ? (
                      <div className="w-4 h-4 border-2 border-wellBeingBlue border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <span>🔄 Regenerate Analysis</span>
                    )}
                  </button>
                  <button 
                    onClick={() => window.print()}
                    className="px-6 py-3 border-2 border-slate-200 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-600 hover:bg-slate-50 transition-all"
                  >
                    Print Record
                  </button>
                  <button 
                    onClick={() => setSelectedSubmission(null)}
                    className="bg-charcoal text-white px-10 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-wellBeingBlue transition-all shadow-lg"
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

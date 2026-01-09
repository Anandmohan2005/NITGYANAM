
import { useState, useEffect } from 'react';
import { Question, WellBeingLevel, ResponseIndicator, Option } from '../types';
import { api } from '../services/api';
import { motion, AnimatePresence } from 'framer-motion';

const QuestionManager: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<Question>>({});

  useEffect(() => {
    const loadData = async () => {
      const data = await api.fetchQuestions();
      setQuestions(data);
    };
    loadData();
  }, []);

  const handleSave = async () => {
    let updated;
    if (editingId === 'new') {
      const newQ: Question = {
        ...formData as Question,
        id: `clinical_${Date.now()}`,
      };
      updated = [...questions, newQ];
    } else {
      updated = questions.map(q => q.id === editingId ? { ...q, ...formData } : q);
    }
    setQuestions(updated);
    await api.saveQuestions(updated);
    setEditingId(null);
  };

  const deleteQuestion = async (id: string) => {
    if (confirm('Are you sure you want to delete this clinical MCQ?')) {
      const updated = questions.filter(q => q.id !== id);
      setQuestions(updated);
      await api.saveQuestions(updated);
    }
  };

  const openEditor = (q?: Question) => {
    if (q) {
      setEditingId(q.id);
      setFormData(JSON.parse(JSON.stringify(q))); // Deep copy for safety
    } else {
      setEditingId('new');
      setFormData({
        level: WellBeingLevel.LEVEL_1,
        textEn: '',
        textHi: '',
        options: [
          { id: 'a', en: '', hi: '', indicator: ResponseIndicator.HEALTHY },
          { id: 'b', en: '', hi: '', indicator: ResponseIndicator.HEALTHY },
          { id: 'c', en: '', hi: '', indicator: ResponseIndicator.CONCERN },
          { id: 'd', en: '', hi: '', indicator: ResponseIndicator.RED_FLAG },
        ]
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h2 className="text-3xl font-black text-charcoal tracking-tighter uppercase">MCQ Inventory Manager</h2>
          <p className="text-slate-500 font-medium">Bilingual Clinical Assessment Bank</p>
        </div>
        <button 
          onClick={() => openEditor()}
          className="bg-charcoal text-gold px-8 py-3 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-black transition-all shadow-xl"
        >
          + Add MCQ
        </button>
      </div>

      <AnimatePresence>
        {editingId && (
          <div className="fixed inset-0 z-[3000] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setEditingId(null)} 
              className="absolute inset-0 bg-charcoal/90 backdrop-blur-sm" 
            />
            
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative bg-white rounded-[2.5rem] p-8 md:p-10 max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border-4 border-gold custom-scrollbar"
            >
              <div className="flex justify-between items-center mb-8 sticky top-0 bg-white z-10 pb-4">
                <h3 className="text-2xl font-black tracking-tighter uppercase">
                  {editingId === 'new' ? 'New Clinical Entry' : 'Update Clinical Entry'}
                </h3>
                <button onClick={() => setEditingId(null)} className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:text-charcoal hover:bg-slate-200 transition-all font-black">✕</button>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-[10px] font-black uppercase text-gray-500 tracking-widest mb-2 px-1">Target Academic Level</label>
                  <select 
                    value={formData.level}
                    onChange={e => setFormData({...formData, level: e.target.value as WellBeingLevel})}
                    className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl font-bold focus:border-wellBeingBlue outline-none transition-all"
                  >
                    {Object.values(WellBeingLevel).map(l => <option key={l} value={l}>{l}</option>)}
                  </select>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label className="block text-[10px] font-black uppercase text-gray-500 tracking-widest mb-2 px-1">Question (English)</label>
                    <textarea 
                      rows={2}
                      value={formData.textEn}
                      onChange={e => setFormData({...formData, textEn: e.target.value})}
                      className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl font-bold focus:border-wellBeingBlue outline-none transition-all resize-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase text-gray-500 tracking-widest mb-2 px-1">Question (Hindi)</label>
                    <textarea 
                      rows={2}
                      value={formData.textHi}
                      onChange={e => setFormData({...formData, textHi: e.target.value})}
                      className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl font-hindi font-bold focus:border-wellBeingBlue outline-none transition-all resize-none text-xl"
                    />
                  </div>
                </div>
                
                <div className="space-y-4 pt-4 border-t border-slate-100">
                  <p className="text-xs font-black uppercase text-charcoal tracking-widest mb-4">Clinical Options & Reasoning</p>
                  {formData.options?.map((opt, idx) => (
                    <div key={idx} className="p-6 border-2 border-slate-50 rounded-[2rem] bg-slate-50/50 space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="font-black text-xs uppercase text-slate-400 tracking-tighter">Option {opt.id.toUpperCase()}</span>
                        <select 
                          value={opt.indicator}
                          onChange={e => {
                            const newOpts = [...(formData.options || [])];
                            newOpts[idx].indicator = e.target.value as ResponseIndicator;
                            setFormData({...formData, options: newOpts});
                          }}
                          className={`text-[10px] font-black border-2 rounded-lg px-2 py-1 uppercase tracking-widest transition-colors ${
                            opt.indicator === ResponseIndicator.RED_FLAG ? 'bg-red-50 text-red-600 border-red-100' :
                            opt.indicator === ResponseIndicator.CONCERN ? 'bg-amber-50 text-amber-600 border-amber-100' :
                            'bg-emerald-50 text-emerald-600 border-emerald-100'
                          }`}
                        >
                          {Object.values(ResponseIndicator).map(i => <option key={i} value={i}>{i}</option>)}
                        </select>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <input 
                          placeholder="English Response"
                          value={opt.en}
                          onChange={e => {
                            const newOpts = [...(formData.options || [])];
                            newOpts[idx].en = e.target.value;
                            setFormData({...formData, options: newOpts});
                          }}
                          className="w-full p-3 bg-white border border-slate-200 rounded-xl text-sm font-bold focus:border-wellBeingBlue outline-none"
                        />
                        <input 
                          placeholder="Hindi Response"
                          value={opt.hi}
                          onChange={e => {
                            const newOpts = [...(formData.options || [])];
                            newOpts[idx].hi = e.target.value;
                            setFormData({...formData, options: newOpts});
                          }}
                          className="w-full p-3 bg-white border border-slate-200 rounded-xl text-sm font-hindi font-bold focus:border-wellBeingBlue outline-none"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-end gap-4 mt-10 sticky bottom-0 bg-white pt-6 border-t border-slate-50">
                <button 
                  onClick={() => setEditingId(null)} 
                  className="px-8 py-4 text-slate-400 font-black uppercase tracking-widest text-[10px] hover:text-charcoal transition-colors"
                >
                  Discard Changes
                </button>
                <button 
                  onClick={handleSave} 
                  className="px-10 py-4 bg-charcoal text-white rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-2xl hover:bg-black transition-all active:scale-95"
                >
                  Commit to Inventory
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {questions.map(q => (
          <div key={q.id} className="bg-white border-2 border-slate-50 rounded-[2.5rem] p-8 hover:border-gold transition-all duration-300 group flex flex-col justify-between shadow-sm hover:shadow-md">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-[10px] font-black bg-gold/10 text-charcoal border border-gold/20 px-3 py-1 rounded-full uppercase tracking-widest">{q.level}</span>
                  <span className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em]">{q.id}</span>
                </div>
              </div>
              <h4 className="font-black text-xl text-charcoal leading-tight mb-3 group-hover:text-wellBeingBlue transition-colors">{q.textEn}</h4>
              <p className="text-lg text-slate-400 font-hindi font-medium italic opacity-80">{q.textHi}</p>
            </div>
            <div className="flex justify-end space-x-2 mt-8 pt-6 border-t border-slate-50">
              <button 
                onClick={() => openEditor(q)} 
                className="px-5 py-2 text-[10px] font-black text-charcoal uppercase tracking-widest hover:bg-slate-50 rounded-xl transition-all"
              >
                Edit Details
              </button>
              <button 
                onClick={() => deleteQuestion(q.id)} 
                className="px-5 py-2 text-[10px] font-black text-red-400 uppercase tracking-widest hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionManager;

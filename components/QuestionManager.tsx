
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
        id: `q_${Date.now()}`,
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
    if (confirm('Are you sure you want to delete this question?')) {
      const updated = questions.filter(q => q.id !== id);
      setQuestions(updated);
      await api.saveQuestions(updated);
    }
  };

  const openEditor = (q?: Question) => {
    if (q) {
      setEditingId(q.id);
      setFormData(JSON.parse(JSON.stringify(q))); 
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
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex justify-between items-center mb-12">
        <div>
          <h2 className="text-4xl font-black text-charcoal tracking-tighter uppercase">MCQ Inventory Manager</h2>
          <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px] mt-2">Bilingual Assessment Bank</p>
        </div>
        <button 
          onClick={() => openEditor()}
          className="bg-charcoal text-gold px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-black transition-all shadow-xl active:scale-95"
        >
          + Add MCQ
        </button>
      </div>

      <AnimatePresence>
        {editingId && (
          <div className="fixed inset-0 z-[4000] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setEditingId(null)} 
              className="absolute inset-0 bg-slate-900/80 backdrop-blur-md" 
            />
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 40 }}
              className="relative bg-white rounded-[3rem] w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Header */}
              <div className="px-10 py-8 bg-slate-50 border-b border-slate-100 flex justify-between items-center shrink-0">
                <h3 className="text-2xl font-black tracking-tighter uppercase text-charcoal">
                  {editingId === 'new' ? 'New Question Entry' : 'Update Question Entry'}
                </h3>
                <button 
                  onClick={() => setEditingId(null)} 
                  className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-charcoal transition-all shadow-sm"
                >
                  ✕
                </button>
              </div>

              {/* Scrollable Form Content */}
              <div className="flex-grow overflow-y-auto p-10 custom-scrollbar">
                <div className="space-y-10">
                  <div className="bg-slate-50/50 p-8 rounded-[2rem] border border-slate-100">
                    <label className="block text-[10px] font-black uppercase text-slate-400 tracking-[0.2em] mb-4 px-1">Target Assessment Level</label>
                    <select 
                      value={formData.level}
                      onChange={e => setFormData({...formData, level: e.target.value as WellBeingLevel})}
                      className="w-full p-5 bg-white border-2 border-slate-100 rounded-2xl font-bold focus:border-wellBeingBlue outline-none transition-all shadow-sm"
                    >
                      {Object.values(WellBeingLevel).map(l => <option key={l} value={l}>{l}</option>)}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <label className="block text-[10px] font-black uppercase text-slate-400 tracking-[0.2em] px-1">Question Stem (English)</label>
                      <textarea 
                        rows={4}
                        value={formData.textEn}
                        onChange={e => setFormData({...formData, textEn: e.target.value})}
                        placeholder="Type question here..."
                        className="w-full p-6 bg-white border-2 border-slate-100 rounded-3xl font-bold focus:border-wellBeingBlue outline-none transition-all resize-none shadow-sm"
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="block text-[10px] font-black uppercase text-slate-400 tracking-[0.2em] px-1">Question Stem (Hindi)</label>
                      <textarea 
                        rows={4}
                        value={formData.textHi}
                        onChange={e => setFormData({...formData, textHi: e.target.value})}
                        placeholder="यहाँ प्रश्न लिखें..."
                        className="w-full p-6 bg-white border-2 border-slate-100 rounded-3xl font-hindi font-bold focus:border-wellBeingBlue outline-none transition-all resize-none shadow-sm text-2xl"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <p className="text-[10px] font-black uppercase text-charcoal tracking-[0.3em] px-1">Response Options & Clinical Indicators</p>
                    <div className="grid grid-cols-1 gap-4">
                      {formData.options?.map((opt, idx) => (
                        <div key={idx} className="bg-white p-6 border-2 border-slate-100 rounded-[2.5rem] shadow-sm flex flex-col md:flex-row gap-6 items-start md:items-center">
                          <div className="w-12 h-12 bg-charcoal text-gold rounded-2xl flex items-center justify-center font-black text-xl shrink-0 uppercase">{opt.id}</div>
                          
                          <div className="flex-grow grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
                            <input 
                              placeholder="English text"
                              value={opt.en}
                              onChange={e => {
                                const newOpts = [...(formData.options || [])];
                                newOpts[idx].en = e.target.value;
                                setFormData({...formData, options: newOpts});
                              }}
                              className="w-full p-4 bg-slate-50 border border-transparent focus:bg-white focus:border-wellBeingBlue rounded-xl font-bold outline-none transition-all text-sm"
                            />
                            <input 
                              placeholder="हिंदी टेक्स्ट"
                              value={opt.hi}
                              onChange={e => {
                                const newOpts = [...(formData.options || [])];
                                newOpts[idx].hi = e.target.value;
                                setFormData({...formData, options: newOpts});
                              }}
                              className="w-full p-4 bg-slate-50 border border-transparent focus:bg-white focus:border-wellBeingBlue rounded-xl font-hindi font-bold outline-none transition-all text-lg"
                            />
                          </div>

                          <select 
                            value={opt.indicator}
                            onChange={e => {
                              const newOpts = [...(formData.options || [])];
                              newOpts[idx].indicator = e.target.value as ResponseIndicator;
                              setFormData({...formData, options: newOpts});
                            }}
                            className={`px-4 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest border-2 outline-none transition-all shrink-0 ${
                              opt.indicator === ResponseIndicator.RED_FLAG ? 'bg-red-50 text-red-600 border-red-100' :
                              opt.indicator === ResponseIndicator.CONCERN ? 'bg-amber-50 text-amber-600 border-amber-100' :
                              'bg-emerald-50 text-emerald-600 border-emerald-100'
                            }`}
                          >
                            {Object.values(ResponseIndicator).map(i => <option key={i} value={i}>{i}</option>)}
                          </select>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Footer Actions */}
              <div className="px-10 py-8 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row justify-end gap-4 shrink-0">
                <button 
                  onClick={() => setEditingId(null)} 
                  className="px-8 py-4 text-slate-400 font-black uppercase tracking-widest text-[10px] hover:text-charcoal transition-all"
                >
                  Discard Changes
                </button>
                <button 
                  onClick={handleSave} 
                  className="px-12 py-4 bg-charcoal text-white rounded-2xl font-black uppercase tracking-widest text-[11px] shadow-xl hover:bg-black transition-all active:scale-95"
                >
                  Save Question
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {questions.map(q => (
          <motion.div 
            layout
            key={q.id} 
            className="bg-white border-2 border-slate-100 rounded-[3rem] p-10 hover:border-wellBeingBlue transition-all group shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] font-black bg-slate-100 text-slate-500 px-4 py-1.5 rounded-full uppercase tracking-widest">{q.level}</span>
                <span className="text-[9px] font-bold text-slate-300 uppercase tracking-[0.3em]">{q.id}</span>
              </div>
              <h4 className="text-2xl font-black text-charcoal leading-tight mb-4 group-hover:text-wellBeingBlue transition-colors">{q.textEn}</h4>
              <p className="text-xl text-slate-400 font-hindi font-medium italic opacity-80">{q.textHi}</p>
            </div>
            
            <div className="flex justify-end space-x-3 mt-10 pt-8 border-t border-slate-50">
              <button 
                onClick={() => openEditor(q)} 
                className="px-6 py-2.5 text-[10px] font-black text-charcoal uppercase tracking-widest hover:bg-slate-100 rounded-xl transition-all"
              >
                Edit Question
              </button>
              <button 
                onClick={() => deleteQuestion(q.id)} 
                className="px-6 py-2.5 text-[10px] font-black text-red-400 uppercase tracking-widest hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"
              >
                Remove
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default QuestionManager;

import React, { useState, useMemo, useEffect } from 'react';
import { WellBeingLevel, Question, ResponseIndicator, StudentInfo, Submission, Option } from '../types';
import { api } from '../services/api';
import { motion, AnimatePresence } from 'framer-motion';

interface QuizProps {
  onComplete: (submission: Submission) => void;
}

type QuizStep = 'level-select' | 'student-info' | 'questions' | 'completed' | 'syncing';

const Quiz: React.FC<QuizProps> = ({ onComplete }) => {
  const [step, setStep] = useState<QuizStep>('level-select');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selectedLevel, setSelectedLevel] = useState<WellBeingLevel | null>(null);
  const [studentInfo, setStudentInfo] = useState<StudentInfo>({ name: '', age: '', standard: '', school: '' });
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [id: string]: { indicator: ResponseIndicator; optionId: string } }>({});
  const [tempOption, setTempOption] = useState<Option | null>(null);
  const [finalSubmission, setFinalSubmission] = useState<Submission | null>(null);
  const [processingStatus, setProcessingStatus] = useState("Securing your data...");
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const load = async () => {
      const qData = await api.fetchQuestions();
      setQuestions(qData);
    };
    load();
  }, []);

  useEffect(() => {
    if (step === 'syncing') {
      const statuses = [
        "Analyzing clinical markers...",
        "Generating psychological synthesis...",
        "Checking risk indicators...",
        "Finalizing diagnostic report...",
        "Saving encrypted record..."
      ];
      let i = 0;
      const interval = setInterval(() => {
        setProcessingStatus(statuses[i % statuses.length]);
        i++;
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [step]);

  const filteredQuestions = useMemo(() => {
    return questions.filter(q => q.level === selectedLevel);
  }, [selectedLevel, questions]);

  const progress = filteredQuestions.length > 0 
    ? Math.round(((currentQuestionIndex) / filteredQuestions.length) * 100) 
    : 0;

  const handleNext = async () => {
    if (!tempOption || isTransitioning) return;

    setIsTransitioning(true);
    
    const questionId = filteredQuestions[currentQuestionIndex].id;
    const newAnswers = { 
      ...answers, 
      [questionId]: { indicator: tempOption.indicator, optionId: tempOption.id } 
    };
    setAnswers(newAnswers);

    if (currentQuestionIndex < filteredQuestions.length - 1) {
      // Advance to next question
      setCurrentQuestionIndex(prev => prev + 1);
      setTempOption(null);
      setIsTransitioning(false);
    } else {
      // Process full submission for the last question
      setStep('syncing');
      const answerList = Object.values(newAnswers).map(a => a.indicator);
      const { riskStatus, conclusion } = api.analyzeResults(answerList);
      
      const submission: Submission = {
        id: `sub_${Math.random().toString(36).substr(2, 9)}`,
        student: studentInfo,
        level: selectedLevel!,
        answers: newAnswers as any,
        metrics: {
          healthyCount: answerList.filter(v => v === ResponseIndicator.HEALTHY).length,
          concernCount: answerList.filter(v => v === ResponseIndicator.CONCERN).length,
          redFlagCount: answerList.filter(v => v === ResponseIndicator.RED_FLAG).length,
          totalQuestions: answerList.length
        },
        riskStatus,
        conclusion,
        timestamp: Date.now(),
      };

      try {
        const aiAnalysis = await api.generateAIAnalysis(submission, questions);
        submission.aiReport = aiAnalysis;
      } catch (e) {
        submission.aiReport = "Direct human review recommended.";
      }

      await api.submitAssessment(submission);
      setFinalSubmission(submission);
      setStep('completed');
      onComplete(submission);
      setIsTransitioning(false);
    }
  };

  if (step === 'syncing') {
    return (
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="max-w-2xl mx-auto px-6 py-40 text-center"
      >
        <div className="relative mb-12">
           <div className="w-24 h-24 border-4 border-wellBeingBlue border-t-transparent rounded-full animate-spin mx-auto"></div>
           <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-12 h-12 bg-wellBeingBlue/10 rounded-full animate-pulse"></div>
           </div>
        </div>
        <h2 className="text-3xl font-black text-slate-800 uppercase tracking-tighter mb-4">Diagnostic Processing</h2>
        <motion.p 
          key={processingStatus}
          initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }}
          className="text-slate-400 font-bold uppercase tracking-[0.3em] text-[10px]"
        >
          {processingStatus}
        </motion.p>
      </motion.div>
    );
  }

  if (step === 'level-select') {
    return (
      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-wellBeingBlue tracking-tighter uppercase mb-6">Select Your Grade</h2>
          <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Choose the tier that fits your standard</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.values(WellBeingLevel).map((level) => (
            <button
              key={level}
              onClick={() => { setSelectedLevel(level); setStep('student-info'); }}
              className="bg-white p-12 text-left group border border-slate-100 rounded-[3rem] hover:border-wellBeingBlue transition-all shadow-bento hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-3xl font-black text-slate-800 group-hover:text-wellBeingBlue transition-colors tracking-tighter">{level}</h3>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mt-3">Interactive Self-Check</p>
                </div>
                <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-wellBeingBlue group-hover:text-white transition-all">
                  <span className="text-3xl font-bold">→</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (step === 'student-info') {
    return (
      <div className="max-w-2xl mx-auto px-6 py-24">
        <div className="bg-white p-12 shadow-soft-xl rounded-[3rem] border border-slate-100">
          <h2 className="text-3xl font-black text-slate-800 tracking-tighter uppercase mb-10 text-center">Student Details</h2>
          <form onSubmit={e => { e.preventDefault(); setStep('questions'); }} className="space-y-8">
            <div className="space-y-3">
               <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest px-1">Full Name</label>
               <input required placeholder="Student Name" className="w-full px-8 py-5 rounded-[2rem] bg-slate-50 border border-transparent focus:bg-white focus:border-wellBeingBlue outline-none font-bold text-charcoal transition-all placeholder:text-gray-300" onChange={e => setStudentInfo({...studentInfo, name: e.target.value})} />
            </div>
            <div className="grid grid-cols-2 gap-8">
               <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest px-1">Standard</label>
                  <input required placeholder="Class" className="w-full px-8 py-5 rounded-[2rem] bg-slate-50 border border-transparent focus:bg-white focus:border-wellBeingBlue outline-none font-bold text-charcoal transition-all placeholder:text-gray-300" onChange={e => setStudentInfo({...studentInfo, standard: e.target.value})} />
               </div>
               <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest px-1">Age</label>
                  <input required type="number" placeholder="Age" className="w-full px-8 py-5 rounded-[2rem] bg-slate-50 border border-transparent focus:bg-white focus:border-wellBeingBlue outline-none font-bold text-charcoal transition-all placeholder:text-gray-300" onChange={e => setStudentInfo({...studentInfo, age: e.target.value})} />
               </div>
            </div>
            <div className="space-y-3">
               <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest px-1">School Name</label>
               <input required placeholder="Enter School" className="w-full px-8 py-5 rounded-[2rem] bg-slate-50 border border-transparent focus:bg-white focus:border-wellBeingBlue outline-none font-bold text-charcoal transition-all placeholder:text-gray-300" onChange={e => setStudentInfo({...studentInfo, school: e.target.value})} />
            </div>
            <button type="submit" className="w-full mt-6 bg-wellBeingBlue text-white font-black py-6 rounded-full shadow-lg hover:shadow-wellBeingBlue/20 transition-all uppercase tracking-[0.2em] text-[11px]">Begin Diagnostic</button>
          </form>
        </div>
      </div>
    );
  }

  if (step === 'questions') {
    const q = filteredQuestions[currentQuestionIndex];
    if (!q) return <div className="p-32 text-center font-black text-wellBeingBlue animate-pulse">Initializing Assessment...</div>;
    
    const isLastQuestion = currentQuestionIndex === filteredQuestions.length - 1;

    return (
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="mb-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center space-x-6">
            <span className="text-[11px] font-black text-white bg-wellBeingBlue uppercase tracking-[0.2em] px-6 py-2.5 rounded-full shadow-sm">{selectedLevel}</span>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em]">Module {currentQuestionIndex + 1} / {filteredQuestions.length}</span>
          </div>
          <div className="w-full md:w-80 bg-slate-200 rounded-full h-3 overflow-hidden">
            <div className="bg-wellBeingGreen h-full transition-all duration-700" style={{ width: `${progress}%` }}></div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={q.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-white p-12 md:p-16 rounded-[4rem] border border-slate-100 shadow-bento mb-16 text-center">
                 <h2 className="text-3xl md:text-4xl font-black text-slate-800 leading-tight tracking-tighter mb-8">{q.textEn}</h2>
                 <div className="w-20 h-1 bg-wellBeingGreen/20 mx-auto mb-8"></div>
                 <h2 className="text-3xl md:text-4xl font-hindi font-bold text-wellBeingBlue leading-tight">{q.textHi}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {q.options.map(opt => (
                <button 
                  key={opt.id} 
                  disabled={isTransitioning}
                  onClick={() => setTempOption(opt)} 
                  className={`bg-white p-10 text-left group rounded-[3rem] border transition-all shadow-sm hover:shadow-md ${tempOption?.id === opt.id ? 'border-wellBeingBlue bg-wellBeingBlue/[0.03] ring-2 ring-wellBeingBlue/10' : 'border-slate-50 hover:border-wellBeingGreen'}`}
                >
                  <div className="flex items-center space-x-8">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center font-black transition-all text-xl ${tempOption?.id === opt.id ? 'bg-wellBeingBlue text-white scale-110' : 'bg-slate-50 text-wellBeingBlue group-hover:bg-wellBeingGreen group-hover:text-white'}`}>
                      {opt.id.toUpperCase()}
                    </div>
                    <div className="flex-grow">
                      <p className={`font-bold text-xl mb-2 transition-colors ${tempOption?.id === opt.id ? 'text-wellBeingBlue' : 'text-slate-800 group-hover:text-wellBeingGreen'}`}>{opt.en}</p>
                      <p className="text-slate-400 font-hindi font-medium text-lg italic">{opt.hi}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center h-24">
          <AnimatePresence>
            {tempOption && (
              <motion.button 
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 10 }}
                disabled={isTransitioning}
                onClick={handleNext}
                className={`px-24 py-7 rounded-full font-black uppercase tracking-[0.2em] text-[11px] transition-all shadow-xl bg-charcoal text-white hover:bg-black active:scale-95`}
              >
                {isLastQuestion ? 'Generate Final Report' : 'Next'}
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
    );
  }

  if (step === 'completed' && finalSubmission) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto px-6 py-20"
      >
        <div className="text-center mb-16">
          <div className="w-24 h-24 bg-wellBeingGreen text-white rounded-full flex items-center justify-center text-4xl mx-auto mb-8 shadow-2xl">✓</div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tighter mb-4 uppercase">
            Assessment Complete
          </h2>
          <p className="text-slate-500 font-medium text-xl max-w-2xl mx-auto">
            Your summary has been generated below. Thank you for using the NitGyanam Portal.
          </p>
        </div>

        <div className="bg-white rounded-[4rem] shadow-soft-xl border border-slate-100 p-12 md:p-20 overflow-hidden relative mb-16">
          <div className="absolute top-0 right-0 p-10 opacity-5 select-none pointer-events-none">
             <span className="text-8xl font-black text-charcoal">SUMMARY</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20 border-b border-slate-50 pb-16">
            <div>
              <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-2">Student Profile</p>
              <h4 className="text-2xl font-black text-charcoal">{finalSubmission.student.name}</h4>
              <p className="text-slate-400 font-bold uppercase text-[10px] tracking-[0.2em] mt-1">{finalSubmission.student.school}</p>
            </div>
            <div className="md:text-right">
              <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-2">Diagnostic ID</p>
              <h4 className="text-2xl font-black text-wellBeingBlue">{finalSubmission.id}</h4>
              <p className="text-slate-400 font-bold uppercase text-[10px] tracking-[0.2em] mt-1">{new Date(finalSubmission.timestamp).toLocaleString()}</p>
            </div>
          </div>

          <div className="space-y-16">
            {filteredQuestions.map((q, idx) => {
              const ansData = finalSubmission.answers[q.id] as any;
              const selectedOption = q.options.find(o => o.id === ansData?.optionId);

              return (
                <div key={q.id} className="relative group">
                  <div className="absolute -left-12 top-0 text-slate-100 font-black text-6xl select-none group-hover:text-wellBeingBlue/5 transition-colors">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <div className="relative">
                    <h3 className="font-bold text-slate-800 text-xl leading-snug mb-6">
                      {q.textEn}
                    </h3>
                    <div className="bg-slate-50/50 border-l-4 border-wellBeingBlue p-6 rounded-r-3xl">
                      <p className="text-wellBeingBlue font-black text-lg">
                        {selectedOption?.en}
                      </p>
                      <p className="text-slate-400 font-hindi mt-2 text-sm">
                        {selectedOption?.hi}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center py-20 border-t border-slate-100">
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1, ease: "easeOut" }}
           >
             <h3 className="text-6xl font-signature text-gold mb-6">Thank You</h3>
             <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.5em] mb-4">NitGyanam Well-Being Portal</p>
             <p className="text-slate-400 text-sm max-w-sm mx-auto leading-relaxed italic">
               Empowering students through proactive mental health screening and clinical synthesis.
             </p>
             <div className="mt-12 flex justify-center space-x-4">
                <div className="w-12 h-1 bg-gold/30 rounded-full"></div>
                <div className="w-12 h-1 bg-wellBeingBlue/30 rounded-full"></div>
                <div className="w-12 h-1 bg-wellBeingGreen/30 rounded-full"></div>
             </div>
           </motion.div>
        </div>
      </motion.div>
    );
  }

  return null;
};

export default Quiz;
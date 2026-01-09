
import { useState, useMemo, useEffect } from 'react';
import { WellBeingLevel, Question, ResponseIndicator, StudentInfo, Submission, Option } from '../types';
import { api } from '../services/api';
import { motion, AnimatePresence } from 'framer-motion';

interface QuizProps {
  onComplete: (submission: Submission) => void;
}

type QuizStep = 'level-select' | 'student-info' | 'questions' | 'completed';

const Quiz: React.FC<QuizProps> = ({ onComplete }) => {
  const [step, setStep] = useState<QuizStep>('level-select');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selectedLevel, setSelectedLevel] = useState<WellBeingLevel | null>(null);
  const [studentInfo, setStudentInfo] = useState<StudentInfo>({ name: '', age: '', standard: '', school: '' });
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [id: string]: { indicator: ResponseIndicator; optionId: string } }>({});
  const [tempOption, setTempOption] = useState<Option | null>(null);
  const [finalSubmission, setFinalSubmission] = useState<Submission | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [isFeedbackSent, setIsFeedbackSent] = useState(false);
  const [isGeneratingAI, setIsGeneratingAI] = useState(false);

  useEffect(() => {
    const load = async () => {
      const qData = await api.fetchQuestions();
      setQuestions(qData);
    };
    load();

    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen();
    }
  };

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
      setTimeout(() => {
        setCurrentQuestionIndex(prev => prev + 1);
        setTempOption(null);
        setIsTransitioning(false);
      }, 300);
    } else {
      // INSTANT COMPLETION LOGIC
      if (document.fullscreenElement) document.exitFullscreen();
      
      const answerList = Object.values(newAnswers).map(a => a.indicator);
      const { riskStatus, conclusion } = api.analyzeResults(answerList);
      
      const submission: Submission = {
        id: `NGP_${Math.random().toString(36).substr(2, 6).toUpperCase()}`,
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

      // 1. Set state to completed INSTANTLY
      setFinalSubmission(submission);
      setStep('completed');
      onComplete(submission);
      setIsTransitioning(false);

      // 2. Initial Save (without AI Report)
      await api.submitAssessment(submission);

      // 3. Background AI Analysis (Still running to save for Admin, but UI is hidden for student)
      setIsGeneratingAI(true);
      try {
        const aiAnalysis = await api.generateAIAnalysis(submission, questions);
        const fullyUpdatedSubmission = { ...submission, aiReport: aiAnalysis };
        
        // 4. Update state and cloud storage once AI finishes
        setFinalSubmission(fullyUpdatedSubmission);
        await api.submitAssessment(fullyUpdatedSubmission);
      } catch (e) {
        const failedSubmission = { ...submission, aiReport: "Direct professional guidance recommended." };
        setFinalSubmission(failedSubmission);
      } finally {
        setIsGeneratingAI(false);
      }
    }
  };

  const submitFeedback = async () => {
    if (!finalSubmission || !feedback.trim()) return;
    const updated = { ...finalSubmission, feedback };
    await api.submitAssessment(updated);
    setFinalSubmission(updated);
    setIsFeedbackSent(true);
  };

  const startAssessment = () => {
    setStep('questions');
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    }
  };

  if (step === 'level-select') {
    return (
      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-wellBeingBlue tracking-tighter uppercase mb-6">Select Your Grade</h2>
          <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">Choose the tier that fits your standard</p>
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
                  <h3 className="text-4xl font-black text-slate-800 group-hover:text-wellBeingBlue transition-colors tracking-tighter">{level}</h3>
                  <p className="text-[12px] font-black text-slate-400 uppercase tracking-[0.2em] mt-3">Interactive Well-being Check</p>
                </div>
                <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-wellBeingBlue group-hover:text-white transition-all">
                  <span className="text-4xl font-bold">→</span>
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
          <h2 className="text-4xl font-black text-slate-800 tracking-tighter uppercase mb-10 text-center">Student Details</h2>
          <form onSubmit={e => { e.preventDefault(); startAssessment(); }} className="space-y-8">
            <div className="space-y-3">
               <label className="text-[12px] font-black uppercase text-gray-400 tracking-widest px-1">Full Name</label>
               <input required placeholder="Student Name" className="w-full px-8 py-5 rounded-[2rem] bg-slate-50 border border-transparent focus:bg-white focus:border-wellBeingBlue outline-none font-bold text-charcoal transition-all placeholder:text-gray-300 text-xl" onChange={e => setStudentInfo({...studentInfo, name: e.target.value})} />
            </div>
            <div className="grid grid-cols-2 gap-8">
               <div className="space-y-3">
                  <label className="text-[12px] font-black uppercase text-gray-400 tracking-widest px-1">Standard</label>
                  <input required placeholder="Class" className="w-full px-8 py-5 rounded-[2rem] bg-slate-50 border border-transparent focus:bg-white focus:border-wellBeingBlue outline-none font-bold text-charcoal transition-all placeholder:text-gray-300 text-xl" onChange={e => setStudentInfo({...studentInfo, standard: e.target.value})} />
               </div>
               <div className="space-y-3">
                  <label className="text-[12px] font-black uppercase text-gray-400 tracking-widest px-1">Age</label>
                  <input required type="number" placeholder="Age" className="w-full px-8 py-5 rounded-[2rem] bg-slate-50 border border-transparent focus:bg-white focus:border-wellBeingBlue outline-none font-bold text-charcoal transition-all placeholder:text-gray-300 text-xl" onChange={e => setStudentInfo({...studentInfo, age: e.target.value})} />
               </div>
            </div>
            <div className="space-y-3">
               <label className="text-[12px] font-black uppercase text-gray-400 tracking-widest px-1">School Name</label>
               <input required placeholder="Enter School" className="w-full px-8 py-5 rounded-[2rem] bg-slate-50 border border-transparent focus:bg-white focus:border-wellBeingBlue outline-none font-bold text-charcoal transition-all placeholder:text-gray-300 text-xl" onChange={e => setStudentInfo({...studentInfo, school: e.target.value})} />
            </div>
            <button type="submit" className="w-full mt-6 bg-wellBeingBlue text-white font-black py-7 rounded-full shadow-lg hover:shadow-wellBeingBlue/20 transition-all uppercase tracking-[0.2em] text-[13px]">Begin Profile Check</button>
          </form>
        </div>
      </div>
    );
  }

  if (step === 'questions') {
    const q = filteredQuestions[currentQuestionIndex];
    if (!q) return <div className="p-32 text-center font-black text-wellBeingBlue animate-pulse text-3xl">Loading...</div>;
    const isLastQuestion = currentQuestionIndex === filteredQuestions.length - 1;

    return (
      <div className={`mx-auto px-4 md:px-6 flex flex-col justify-center overflow-hidden transition-all duration-500 ${isFullscreen ? 'max-w-7xl h-screen bg-slate-50' : 'max-w-6xl h-[calc(100vh-100px)]'}`}>
        <div className="mb-4 flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-4">
            <span className="text-[10px] font-black text-white bg-wellBeingBlue uppercase tracking-[0.2em] px-5 py-2 rounded-full shadow-sm">{selectedLevel}</span>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em]">Question {currentQuestionIndex + 1} / {filteredQuestions.length}</span>
          </div>
          <div className="flex items-center space-x-6">
            <div className="hidden md:block w-48 bg-slate-200 rounded-full h-1.5 overflow-hidden">
              <div className="bg-wellBeingGreen h-full transition-all duration-700" style={{ width: `${progress}%` }}></div>
            </div>
            <button onClick={toggleFullscreen} className="bg-white border border-slate-200 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-500 shadow-sm">{isFullscreen ? 'Exit Full' : 'Expand View'}</button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={q.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }} className="flex-grow flex flex-col justify-center min-h-0">
            <div className="bg-white p-6 md:p-10 lg:p-12 rounded-[2.5rem] md:rounded-[3.5rem] border border-slate-100 shadow-bento mb-4 text-center shrink-0">
                 <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-800 leading-tight tracking-tighter mb-4">{q.textEn}</h2>
                 <div className="w-20 h-1.5 bg-wellBeingGreen/20 mx-auto mb-4 rounded-full"></div>
                 <h2 className="text-2xl md:text-4xl lg:text-5xl font-hindi font-bold text-wellBeingBlue leading-tight">{q.textHi}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 lg:gap-6 shrink overflow-y-auto no-scrollbar pb-2">
              {q.options.map(opt => (
                <button key={opt.id} disabled={isTransitioning} onClick={() => setTempOption(opt)} className={`bg-white p-4 md:p-6 lg:p-8 text-left group rounded-[2rem] border transition-all shadow-sm ${tempOption?.id === opt.id ? 'border-wellBeingGreen bg-wellBeingGreen/[0.03] ring-4 ring-wellBeingGreen/5 scale-[1.01]' : 'border-slate-50 hover:border-wellBeingGreen'}`}>
                  <div className="flex items-center space-x-4 md:space-x-6">
                    <div className={`w-10 h-10 md:w-12 lg:w-16 lg:h-16 shrink-0 rounded-full flex items-center justify-center font-black transition-all text-lg lg:text-2xl ${tempOption?.id === opt.id ? 'bg-wellBeingGreen text-white' : 'bg-slate-50 text-wellBeingGreen group-hover:bg-wellBeingGreen group-hover:text-white'}`}>{opt.id.toUpperCase()}</div>
                    <div className="flex-grow">
                      <p className={`font-black text-lg md:text-xl lg:text-2xl transition-colors leading-tight ${tempOption?.id === opt.id ? 'text-wellBeingGreen' : 'text-slate-800 group-hover:text-wellBeingGreen'}`}>{opt.en}</p>
                      <p className="text-slate-400 font-hindi font-bold text-sm md:text-base lg:text-lg leading-relaxed italic mt-1 opacity-80">{opt.hi}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center h-16 md:h-20 shrink-0 items-center mt-2">
          <AnimatePresence>
            {tempOption && (
              <motion.button initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} disabled={isTransitioning} onClick={handleNext} className="px-16 md:px-24 py-4 md:py-5 rounded-full font-black uppercase tracking-[0.2em] text-[11px] md:text-[12px] transition-all shadow-xl bg-charcoal text-white hover:bg-black active:scale-95">
                {isLastQuestion ? 'Complete Assessment' : 'Confirm & Next'}
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
    );
  }

  if (step === 'completed' && finalSubmission) {
    return (
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <div className="w-24 h-24 bg-wellBeingGreen text-white rounded-full flex items-center justify-center text-4xl mx-auto mb-8 shadow-xl animate-bounce">✓</div>
          <h2 className="text-5xl md:text-6xl font-black text-slate-800 tracking-tighter mb-4 uppercase">Thank You!</h2>
          <p className="text-slate-500 font-medium text-2xl max-w-2xl mx-auto italic">"Your well-being is our priority. Your responses have been securely saved for professional review."</p>
        </div>

        <div className="bg-white rounded-[4rem] shadow-soft-xl border border-slate-100 p-12 md:p-20 relative mb-16 overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-5 select-none pointer-events-none text-9xl font-black text-charcoal tracking-tighter">SUMMARY</div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20 border-b border-slate-50 pb-16">
            <div>
              <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-4">Student Profile</p>
              <h4 className="text-4xl font-black text-charcoal leading-none">{finalSubmission.student.name}</h4>
              <p className="text-slate-400 font-bold uppercase text-[10px] tracking-[0.2em] mt-3">Std {finalSubmission.student.standard} • {finalSubmission.student.school}</p>
            </div>
            <div className="md:text-right">
              <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-4">Profile Identifier</p>
              <h4 className="text-3xl font-black text-wellBeingBlue leading-none">{finalSubmission.id}</h4>
              <p className="text-slate-400 font-bold uppercase text-[10px] tracking-[0.2em] mt-3">{new Date(finalSubmission.timestamp).toLocaleDateString()}</p>
            </div>
          </div>

          {/* Clinical Synthesis Report display removed from Student view as per request */}

          {/* Feedback Section */}
          <div className="bg-slate-50 p-10 rounded-[3rem] mb-20 border-2 border-dashed border-slate-200">
             <h3 className="text-xl font-black text-slate-800 uppercase tracking-widest mb-6">Your Thoughts (Optional)</h3>
             {isFeedbackSent ? (
                <div className="text-emerald-600 font-bold p-6 bg-emerald-50 rounded-2xl border border-emerald-100 flex items-center space-x-3">
                  <span>✓</span> <span>Feedback received. Thank you for helping us understand you better.</span>
                </div>
             ) : (
                <div className="space-y-4">
                  <textarea 
                    value={feedback}
                    onChange={e => setFeedback(e.target.value)}
                    placeholder="Anything else you'd like to tell us about your day or feelings?"
                    className="w-full p-8 rounded-3xl bg-white border border-slate-200 focus:border-wellBeingBlue outline-none font-medium text-slate-700 min-h-[150px] transition-all resize-none shadow-sm"
                  />
                  <button 
                    onClick={submitFeedback}
                    className="bg-charcoal text-white px-10 py-4 rounded-full text-[10px] font-black uppercase tracking-widest shadow-md hover:bg-black transition-all"
                  >
                    Submit Feedback
                  </button>
                </div>
             )}
          </div>

          <div className="space-y-16">
            <h3 className="text-xl font-black text-slate-400 uppercase tracking-widest text-center">Summary of Responses</h3>
            {filteredQuestions.map((q, idx) => {
              const ansData = finalSubmission.answers[q.id] as any;
              const selectedOption = q.options.find(o => o.id === ansData?.optionId);
              return (
                <div key={q.id} className="relative pl-12 border-l-2 border-slate-100">
                  <div className="absolute -left-[1.25rem] top-0 w-10 h-10 bg-white border-2 border-slate-100 rounded-full flex items-center justify-center font-black text-slate-300">{idx + 1}</div>
                  <div className="mb-6">
                    <h3 className="font-black text-slate-800 text-2xl leading-snug mb-3 tracking-tighter">{q.textEn}</h3>
                    <div className="bg-slate-50/50 p-6 rounded-[2rem] inline-block border border-slate-100">
                      <p className="text-wellBeingBlue font-black text-xl">{selectedOption?.en}</p>
                      <p className="text-slate-400 font-hindi font-bold mt-1 italic text-lg opacity-80">{selectedOption?.hi}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center py-20 border-t border-slate-100">
           <h3 className="text-6xl font-signature text-gold mb-6">NitGyanam</h3>
           <p className="text-slate-400 text-lg max-w-lg mx-auto leading-relaxed italic font-medium">Empowering future generations through proactive care.</p>
        </div>
      </motion.div>
    );
  }

  return null;
};

export default Quiz;

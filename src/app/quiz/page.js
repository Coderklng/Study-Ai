"use client";

import React, { useState, useEffect } from 'react';
import { Wand2, Loader2, Trophy, Timer, ArrowRight, ArrowLeft } from 'lucide-react';
import confetti from 'canvas-confetti';
import axios from "axios";

export default function ProfessionalQuizApp() {
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const [quizData, setQuizData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [started, setStarted] = useState(false);

  // Timer Logic: Time 0 hote hi wapas home par
  useEffect(() => {
    if (started && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (started && timeLeft === 0) {
      alert("Time khatam ho gaya!");
      setStarted(false);
      setQuizData([]);
      setScore(0);
      setUserAnswers({});
    }
  }, [timeLeft, started]);

  const generateQuiz = async () => {
    if (!input.trim()) return;
    setLoading(true);
    try {
      const res = await axios.post("https://ai-service-production-558b.up.railway.app/quiz/generate", { question: input });
      const rawText = res.data.answer || res.data;
      const blocks = rawText.split("Question");
      
      const formatted = blocks.filter(b => b.trim().length > 10).map(block => {
        const lines = block.split("\n").filter(l => l.trim() !== "");
        const answerLine = lines.find(l => l.toUpperCase().includes("CORRECT ANSWER"));
        const match = answerLine ? answerLine.match(/[ABCD]/i) : null;
        const extractedAnswer = match ? match[0].toUpperCase() : "";

        return {
          question: lines[0].replace(/^[0-9]+[:.]/, "").trim(),
          options: lines.slice(1, 5).map(o => o.trim()),
          answer: extractedAnswer
        };
      });
      
      setQuizData(formatted);
      setStarted(true);
      setTimeLeft(60);
      setScore(0);
      setUserAnswers({});
      setCurrentIndex(0);
    } catch (e) { alert("Error connecting to API!"); } finally { setLoading(false); }
  };

  const handleAnswer = (letter) => {
    if (userAnswers[currentIndex]) return;
    
    const isCorrect = letter === quizData[currentIndex].answer;
    setUserAnswers({ ...userAnswers, [currentIndex]: letter });
    
    if (isCorrect) {
      setScore(s => s + 1);
      confetti({ particleCount: 50, spread: 50, origin: { y: 0.6 } });
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans">
      <div className="h-1 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500 mb-8" />

      <div className="max-w-3xl mx-auto px-6 pb-20">
        {!started ? (
          <div className="text-center pt-20">
            <h1 className="text-5xl font-bold mb-6">Transform Ideas into <span className="text-indigo-400">Knowledge</span></h1>
            <textarea value={input} onChange={(e) => setInput(e.target.value)} 
              className="w-full h-40 bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800 focus:outline-none mb-6 text-white" placeholder="Paste your topic..." />
            <button onClick={generateQuiz} className="bg-indigo-600 px-10 py-4 rounded-xl font-bold flex items-center gap-2 mx-auto transition hover:bg-indigo-500">
              {loading ? <Loader2 className="animate-spin" /> : <><Wand2 size={18}/> Generate Quiz</>}
            </button>
          </div>
        ) : (
          <div>
            <div className="flex justify-between items-center mb-8 bg-zinc-900/50 p-4 rounded-2xl border border-zinc-800">
              <div className="flex items-center gap-4 text-sm font-medium">
                <span className="text-indigo-400"><Trophy size={16} className="inline mr-1"/> Score: {score}</span>
                <span className="text-red-400"><Timer size={16} className="inline mr-1"/> {timeLeft}s</span>
              </div>
              <span className="text-zinc-500">Question {currentIndex + 1} / {quizData.length}</span>
            </div>

            <div className="bg-zinc-900/30 border border-zinc-800 p-10 rounded-3xl">
              <h3 className="text-2xl font-semibold mb-8 leading-relaxed text-white">
                {quizData[currentIndex].question}
              </h3>
              
              <div className="space-y-4">
                {quizData[currentIndex].options.map((opt, i) => {
                  const match = opt.match(/^[ABCD]/i);
                  const letter = match ? match[0].toUpperCase() : "";
                  const isSelected = userAnswers[currentIndex] === letter;
                  const isCorrect = letter === quizData[currentIndex].answer;
                  const answered = userAnswers[currentIndex] !== undefined;

                  let style = "bg-zinc-950 border-zinc-800";
                  if (!answered) style += " hover:border-zinc-600";
                  else if (isCorrect) style = "bg-green-500/20 border-green-500 text-green-400";
                  else if (isSelected && !isCorrect) style = "bg-red-500/20 border-red-500 text-red-400";

                  return (
                    <button key={i} onClick={() => handleAnswer(letter)} disabled={answered}
                      className={`w-full text-left p-5 rounded-xl border transition ${style}`}>
                      {opt}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <button onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))} className="px-6 py-3 bg-zinc-900 rounded-xl hover:bg-zinc-800 transition"><ArrowLeft size={18}/></button>
              <button onClick={() => setCurrentIndex(Math.min(quizData.length - 1, currentIndex + 1))} className="px-6 py-3 bg-indigo-600 rounded-xl hover:bg-indigo-500 transition"><ArrowRight size={18}/></button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
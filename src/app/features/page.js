import React from "react";
import {
  Bot,
  FileText,
  NotebookPen,
  BrainCircuit,
  ChartSpline,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";

import Navbar from "../../../Components/Navbar/Navbar";

const features = [
  {
    title: "AI Study Assistant",
    icon: Bot,
    color: "text-violet-500",
    border: "hover:border-violet-500",
    desc: "Get instant answers and smart explanations with our intelligent AI assistant.",
  },
  {
    title: "PDF Upload & Analysis",
    icon: FileText,
    color: "text-green-500",
    border: "hover:border-green-500",
    desc: "Upload PDFs and let AI summarize, analyze, and extract key insights.",
  },
  {
    title: "AI Notes Generator",
    icon: NotebookPen,
    color: "text-yellow-500",
    border: "hover:border-yellow-500",
    desc: "Generate clean and organized notes instantly for faster revision.",
  },
  {
    title: "AI Quiz Generator",
    icon: BrainCircuit,
    color: "text-cyan-500",
    border: "hover:border-cyan-500",
    desc: "Create MCQ quizzes automatically and improve exam preparation.",
  },
  {
    title: "Smart Progress Tracking",
    icon: ChartSpline,
    color: "text-pink-500",
    border: "hover:border-pink-500",
    desc: "Track study performance, accuracy, and learning growth in real-time.",
  },
  {
    title: "Personalized Learning",
    icon: GraduationCap,
    color: "text-blue-500",
    border: "hover:border-blue-500",
    desc: "Get AI-powered recommendations based on your learning style.",
  },
];

const FeaturesUi = () => {
  return (
    <>
    <div className="bg-black">
    <Navbar />
    <section className="w-full min-h-screen relative overflow-hidden bg-gradient-to-br from-black via-zinc-950 to-black py-24">
        
      {/* Blur Background */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-violet-600/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-600/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <div className="text-center mb-20">

          <span className="px-5 py-2 rounded-full border border-violet-500/30 text-violet-400 text-sm">
            OUR FEATURES
          </span>

          <h1 className="text-5xl md:text-7xl font-bold text-white mt-8 leading-tight">
            Powerful AI Features
            <br />
            Designed for
            <span className="text-violet-500"> Smarter Learning</span>
          </h1>

          <p className="text-zinc-400 mt-6 max-w-2xl mx-auto leading-relaxed">
            StudyAI brings all the tools students need to learn faster,
            stay productive, and achieve better results with AI.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className={`bg-zinc-900/60 backdrop-blur-md border border-zinc-800 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 ${item.border}`}
              >

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-zinc-800 flex items-center justify-center mb-6">
                  <Icon className={`text-3xl ${item.color}`} />
                </div>

                {/* Title */}
                <h2 className="text-2xl font-semibold text-white mb-4">
                  {item.title}
                </h2>

                {/* Desc */}
                <p className="text-zinc-400 leading-relaxed text-sm">
                  {item.desc}
                </p>

                {/* Bottom Tags */}
                <div className="flex flex-wrap gap-3 mt-6">

                  <span className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 text-xs">
                    AI Powered
                  </span>

                  <span className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 text-xs">
                    Smart Learning
                  </span>

                </div>

              </div>
            );
          })}
        </div>

        {/* Security Banner */}
        <div className="mt-14 bg-zinc-950/60 backdrop-blur-md border border-zinc-800 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-5">

          <div className="flex items-center gap-5">

            <div className="w-16 h-16 rounded-2xl bg-violet-500/10 flex items-center justify-center">
              <ShieldCheck className="text-violet-500 text-3xl" />
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white">
                Your Data is Safe with Us
              </h2>

              <p className="text-zinc-400 mt-2">
                Advanced security and AI protection ensure your learning
                experience stays private and secure.
              </p>
            </div>
          </div>

          <button className="px-6 py-3 rounded-2xl bg-violet-600 hover:bg-violet-700 transition-all duration-300 text-white">
            Explore Now
          </button>

        </div>

      </div>
    </section>
    </div>
    </>
  );
};

export default FeaturesUi;
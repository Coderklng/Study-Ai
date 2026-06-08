import React from "react";
import {
  Bot,
  FileText,
  BrainCircuit,
  BookOpen,
  ChartSpline,
  MessagesSquare,
} from "lucide-react";

import Navbar from "../../../Components/Navbar/Navbar";
import Link from "next/link";
const services = [
  {
    title: "AI Study Assistant",
    icon: Bot,
    link:"/chat",
    color: "text-violet-500",
    border: "hover:border-violet-500",
    desc: "Get instant AI-powered answers, explanations, and homework help anytime.",
  },
  {
    title: "PDF Analysis",
    icon: FileText,
    link:"/pdf",
    color: "text-green-500",
    border: "hover:border-green-500",
    desc: "Upload study material PDFs and receive summaries, notes, and insights instantly.",
  },
  {
    title: "Quiz Generation",
    icon: BrainCircuit,
    link:"/quiz",
    color: "text-cyan-500",
    border: "hover:border-cyan-500",
    desc: "Automatically generate MCQs and quizzes to improve exam preparation.",
  },
  {
    title: "Smart Notes",
    icon: BookOpen,
    link:"/notes",
    color: "text-yellow-500",
    border: "hover:border-yellow-500",
    desc: "Generate clean, structured, and AI-organized notes for efficient learning.",
  },
  {
    title: "ATS Resume",
    icon: ChartSpline,
    link:"/ats_check",
    color: "text-pink-500",
    border: "hover:border-pink-500",
    desc: "Track study progress, accuracy, learning time, and performance analytics.",
  },
  {
    title: "24/7 AI Support",
    icon: MessagesSquare,
    link:"/support",
    color: "text-blue-500",
    border: "hover:border-blue-500",
    desc: "Our AI assistant is always available to support your learning journey.",
  },
];

const ServicesUi = () => {
  return (
    <>
    <div className="bg-black">
    <Navbar />
    <section className="w-full min-h-screen relative overflow-hidden bg-gradient-to-br from-black via-zinc-950 to-black py-24">

      {/* Blur Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-violet-600/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-600/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <div className="text-center mb-20">

          <span className="px-5 py-2 rounded-full border border-violet-500/30 text-violet-400 text-sm">
            OUR SERVICES
          </span>

          <h1 className="text-5xl md:text-7xl font-bold text-white mt-8 leading-tight">
            Smart AI Services
            <br />
            For Modern
            <span className="text-violet-500"> Education</span>
          </h1>

          <p className="text-zinc-400 mt-6 max-w-2xl mx-auto leading-relaxed">
            Explore powerful AI services designed to help students learn,
            understand, and grow faster with intelligent technology.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className={`bg-zinc-900/60 backdrop-blur-md border border-zinc-800 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 ${service.border}`}
              >

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-zinc-800 flex items-center justify-center mb-6">
                  <Icon className={`text-3xl ${service.color}`} />
                </div>

                {/* Title */}
                <h2 className="text-2xl font-semibold text-white mb-4">
                  {service.title}
                </h2>

                {/* Desc */}
                <p className="text-zinc-400 leading-relaxed text-sm mt-3">
                  {service.desc}
                </p>

                {/* Button */}
                <button      className="mt-8 px-5 py-3 rounded-2xl bg-zinc-800 hover:bg-violet-600 transition-all duration-300 text-white text-sm ">
                 <Link href={service.link}>Get Started</Link>
                </button>

              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Ready To Learn Smarter?
          </h2>

          <p className="text-zinc-400 mt-5 max-w-2xl mx-auto">
            Join thousands of students already improving their learning
            experience with StudyAI.
          </p>

          <button className="mt-8 px-8 py-4 rounded-2xl bg-violet-600 hover:bg-violet-700 transition-all duration-300 text-white text-lg">
            Get Started
          </button>

        </div>

      </div>
    </section>
    </div>
    </>
  );
};

export default ServicesUi;
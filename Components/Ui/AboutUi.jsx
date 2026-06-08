import React from "react";
import Navbar from "../Navbar/Navbar";
import { GiArcheryTarget } from "react-icons/gi";
import { FaEye } from "react-icons/fa";

const AboutUi = () => {
  return (
    <>
      <div className="bg-gradient-to-br from-black via-zinc-950 to-black">
        <Navbar />
        <section className="w-full min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-violet-600/20 blur-[120px] rounded-full"></div>

          <div className="py-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <span className="px-4 py-2 rounded-full border border-violet-500/30 text-violet-400 text-sm">
                About StudyAI
              </span>

              <h1 className="text-5xl md:text-7xl font-bold text-white mt-6 leading-tight">
                Building The Future Of
                <span className="text-violet-500"> AI Learning</span>
              </h1>

              <p className="text-zinc-400 mt-6 max-w-xl leading-relaxed">
                StudyAI helps students learn smarter with AI-powered notes,
                quizzes, summaries, and personalized learning experiences.
              </p>

              <div className="flex gap-4 mt-8">
                <button className="px-6 py-3 rounded-xl bg-violet-600 text-white hover:bg-violet-700 transition-all">
                  Get Started
                </button>
                <button className="px-6 py-3 rounded-xl border border-zinc-700 text-white hover:bg-zinc-800 transition-all">
                  Learn More
                </button>
              </div>
            </div>

            {/* Right */}
            <div className="w-full flex flex-col md:flex-row justify-center items-center">
              <img
                src="/marcus-Picsart-BackgroundRemover.jpg"
                alt="AI"
                className="w-full max-w-lg"
              />
            </div>
          </div>
        </section>

        <div className="w-full">
          <div className="container mx-auto p-5">
            <div className="w-full gap-5 flex items-center py-5 justify-center text-center text-white flex-col">
              <h2 className="text-violet-700 font-bold">OUR PURPOSE</h2>
              <h1 className="text-2xl md:text-4xl">Why We Built Study AI</h1>
              <p className="max-w-md text-sm text-zinc-400">
                Education is evolving and we are part of that revolution. Our goal is to make
                high quality learning effective for everyone.
              </p>
            </div>
            
            <div className="w-full flex flex-col md:flex-row gap-5 justify-center mt-3">
              <div className="w-full md:max-w-md bg-zinc-950 flex gap-3 items-center p-6 rounded-2xl border border-zinc-800">
                <GiArcheryTarget className="text-7xl text-blue-500 mb-4" />
                <div>
                  <h2 className="text-white text-xl font-semibold mb-2">Our Vision</h2>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    We envision a future where AI helps every student learn smarter,
                    grow faster, and achieve their goals with confidence.
                  </p>
                </div>
              </div>

              <div className="w-full md:max-w-md bg-zinc-950 flex gap-3 items-center p-6 rounded-2xl border border-zinc-800">
                <FaEye className="text-7xl text-blue-500 mb-4" />
                <div>
                  <h2 className="text-white text-xl font-semibold mb-2">Our Mission</h2>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Our mission is to empower students with smart AI-driven learning tools
                    that make studying faster, easier, and more interactive.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <section className="w-full py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { val: "50K+", label: "Active Students", color: "blue" },
                { val: "120+", label: "AI Study Tools", color: "purple" },
                { val: "98%", label: "Student Satisfaction", color: "cyan" },
                { val: "24/7", label: "AI Assistance", color: "pink" }
              ].map((stat, i) => (
                <div key={i} className={`bg-zinc-900/60 border border-zinc-800 rounded-3xl p-8 text-center hover:border-${stat.color}-500 transition-all duration-300`}>
                  <h2 className="text-5xl font-bold text-white mb-3">{stat.val}</h2>
                  <p className="text-zinc-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="w-full py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white">Meet Our Team</h2>
              <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
                Passionate developers and innovators building the future of AI-powered education.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-10">
              {/* Team Cards content remains the same */}
              {/* ... (ensure no dark: classes here as well) */}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUi;
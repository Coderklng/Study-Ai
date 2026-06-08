"use client";
import React,{useState,useEffect} from "react";
import {
  Bot,
  BookOpen,
  BrainCircuit,
  ChartSpline,
  FileText,
  Bell,
  Search,
  User,
} from "lucide-react";
import axios from "axios";
const DashboardUi = () => {
  const [name,setName] = useState("");
  const [message,setMessage] = useState("");
  const verifyToken = async()=>{
    try{ 
    const token = localStorage.getItem("key");  
    const res = await axios.get("http://192.168.1.7:5000/verify/token",{
    headers:{
      Authorization : `bearer ${token}`
    }
    });
    let userName = res.data.user.name;
    let nameUser = userName.split("@")[0];
    const format = userName.charAt(0) + nameUser.slice(1);
   
    setName(format);
    }catch(error){
     const msg = error.response?.data?.message;
     setMessage(msg);
    }
  }

  useState(()=>{
   verifyToken();
  },[]);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-black via-zinc-950 to-black flex">

      {/* Sidebar */}
      <aside className="hidden md:flex w-72 bg-zinc-950/60    backdrop-blur-md border-r border-zinc-800 flex-col p-6">

        {/* Logo */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-white">
            Study<span className="text-violet-500">AI</span>
          </h1>

          <p className="text-zinc-400 text-sm mt-2">
            AI Learning Dashboard
          </p>
        </div>

        {/* Menu */}
        <div className="space-y-4">

          <button className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl bg-violet-600 text-white">

            <ChartSpline />
             
           Dashboard
          </button>

          <button className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl hover:bg-zinc-800 text-zinc-300 transition-all duration-300">

            <Bot />

            AI Assistant
          </button>

          <button className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl hover:bg-zinc-800 text-zinc-300 transition-all duration-300">

            <BookOpen />

            Smart Notes
          </button>

          <button className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl hover:bg-zinc-800 text-zinc-300 transition-all duration-300">

            <BrainCircuit />

            Quiz Generator
          </button>

          <button className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl hover:bg-zinc-800 text-zinc-300 transition-all duration-300">

            <FileText />

            PDF Analysis
          </button>

        </div>

        {/* Bottom User */}
        <div className="mt-auto bg-zinc-800 rounded-3xl p-5 flex items-center gap-4">

          <div className="w-14 h-14 rounded-full bg-violet-600 flex items-center justify-center text-white text-xl font-bold">
            K
          </div>

          <div>
            <h2 className="text-white font-semibold">
              Kartik Sharma
            </h2>

            <p className="text-zinc-400 text-sm">
              Pro Member
            </p>
          </div>

        </div>

      </aside>

      {/* Main */}
      <main className="flex-1 p-6 md:p-10 overflow-hidden">

        {/* Topbar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 mb-10">

          <div>
            <h1 className="text-3xl md:text-3xl font-bold text-white">
              Welcome ,{ name || "Admin" } 👋
            </h1>

            <p className="text-zinc-400 mt-3">
              Continue your AI-powered learning journey.
            </p>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4 w-full md:w-auto">

            {/* Search */}
            <div className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 px-5 py-4 rounded-2xl w-full md:w-80">

              <Search className="text-zinc-500" />

              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none text-white w-full"
              />
            </div>

            {/* Bell */}
            <button className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white">

              <Bell />

            </button>

            {/* User */}
            <button className="w-14 h-14 rounded-2xl bg-violet-600 flex items-center justify-center text-white">

              <User />

            </button>

          </div>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

          {/* Card */}
          <div className="bg-zinc-900/60 backdrop-blur-md border border-zinc-800 rounded-3xl p-6 hover:border-violet-500 transition-all duration-300">

            <h2 className="text-zinc-400">
              Study Hours
            </h2>

            <h1 className="text-5xl font-bold text-white mt-4">
              128h
            </h1>

            <p className="text-green-500 mt-4 text-sm">
              +12% This Week
            </p>

          </div>

          {/* Card */}
          <div className="bg-zinc-900/60 backdrop-blur-md border border-zinc-800 rounded-3xl p-6 hover:border-cyan-500 transition-all duration-300">

            <h2 className="text-zinc-400">
              Quizzes Completed
            </h2>

            <h1 className="text-5xl font-bold text-white mt-4">
              52
            </h1>

            <p className="text-cyan-500 mt-4 text-sm">
              +8 New Quizzes
            </p>

          </div>

          {/* Card */}
          <div className="bg-zinc-900/60 backdrop-blur-md border border-zinc-800 rounded-3xl p-6 hover:border-pink-500 transition-all duration-300">

            <h2 className="text-zinc-400">
              AI Notes
            </h2>

            <h1 className="text-5xl font-bold text-white mt-4">
              230
            </h1>

            <p className="text-pink-500 mt-4 text-sm">
              Smart Generated
            </p>

          </div>

          {/* Card */}
          <div className="bg-zinc-900/60 backdrop-blur-md border border-zinc-800 rounded-3xl p-6 hover:border-yellow-500 transition-all duration-300">

            <h2 className="text-zinc-400">
              Accuracy
            </h2>

            <h1 className="text-5xl font-bold text-white mt-4">
              92%
            </h1>

            <p className="text-yellow-500 mt-4 text-sm">
              Excellent Progress
            </p>

          </div>

        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mt-10">

          {/* Left Large */}
          <div className="xl:col-span-2 bg-zinc-900/60 backdrop-blur-md border border-zinc-800 rounded-3xl p-8">

            <div className="flex items-center justify-between mb-8">

              <div>
                <h2 className="text-3xl font-bold text-white">
                  Learning Progress
                </h2>

                <p className="text-zinc-400 mt-2">
                  Your weekly study analytics.
                </p>
              </div>

              <button className="px-2 md:px-5 py-3  rounded-2xl bg-violet-600 text-white">
                View Report
              </button>

            </div>

            {/* Fake Chart */}
            <div className="w-full h-80 rounded-3xl bg-gradient-to-br from-violet-600/20 to-blue-600/20 border border-zinc-800 flex items-center justify-center">

              <h2 className="text-zinc-400 text-xl">
                Analytics Chart Here
              </h2>

            </div>

          </div>

          {/* Right */}
          <div className="bg-zinc-900/60 backdrop-blur-md border border-zinc-800 rounded-3xl p-8">

            <h2 className="text-3xl font-bold text-white">
              Recent Activity
            </h2>

            <div className="space-y-6 mt-8">

              {/* Item */}
              <div className="flex items-start gap-4">

                <div className="w-12 h-12 rounded-2xl bg-violet-500/10 flex items-center justify-center">
                  <Bot className="text-violet-500" />
                </div>

                <div>
                  <h3 className="text-white font-semibold">
                    AI Generated Notes
                  </h3>

                  <p className="text-zinc-400 text-sm mt-1">
                    Physics Chapter 5 completed.
                  </p>
                </div>

              </div>

              {/* Item */}
              <div className="flex items-start gap-4">

                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center">
                  <BrainCircuit className="text-cyan-500" />
                </div>

                <div>
                  <h3 className="text-white font-semibold">
                    Quiz Completed
                  </h3>

                  <p className="text-zinc-400 text-sm mt-1">
                    Scored 92% in JavaScript Quiz.
                  </p>
                </div>

              </div>

              {/* Item */}
              <div className="flex items-start gap-4">

                <div className="w-12 h-12 rounded-2xl bg-pink-500/10 flex items-center justify-center">
                  <FileText className="text-pink-500" />
                </div>

                <div>
                  <h3 className="text-white font-semibold">
                    PDF Uploaded
                  </h3>

                  <p className="text-zinc-400 text-sm mt-1">
                    AI analyzed Data Structures PDF.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </main>
    </div>
  );
};

export default DashboardUi;
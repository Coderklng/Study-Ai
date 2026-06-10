"use client";

import React, { useState } from 'react';
import { Sparkles, FileText, Settings, Trash2, Plus, Loader2, Download, BrainCircuit, LayoutDashboard } from 'lucide-react';
import axios from "axios";

export default function ProfessionalNotesUI() {
  const [input, setInput] = useState("");
  const [downloadUrl, setDownload] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setDownload(""); 
    
    try {
      const res = await axios.post("https://ai-service-production-558b.up.railway.app/notes/generator", {
        question: input
      }, {
        headers: { "Content-Type": "application/json" }
      });
      console.log(res.data);
      setDownload(res.data.download_url);
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to generate notes.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex font-sans">
      
      {/* --- SIDEBAR --- */}
      <aside className=" w-64 border-r border-zinc-800 bg-zinc-950/50 backdrop-blur-xl hidden md:flex flex-col p-6">
        <div className="flex items-center gap-3 mb-10">
          <div className="h-8 w-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <BrainCircuit size={20} className="text-white" />
          </div>
          <h1 className="font-bold text-xl tracking-tight">AI NoteGen</h1>
        </div>

        <nav className="flex-1 space-y-2">
          <button className="w-full flex items-center gap-3 px-4 py-3 bg-zinc-900 text-indigo-400 border border-zinc-800 rounded-xl font-medium transition">
            <Plus size={18} /> New Generation
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900/50 rounded-xl transition">
            <FileText size={18} /> History
          </button>
        </nav>

        <button className="flex items-center gap-3 px-4 py-3 text-zinc-500 hover:text-white transition">
          <Settings size={18} /> Settings
        </button>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 p-8 md:p-12 overflow-y-auto">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-white">Generate New Notes</h2>
            <p className="text-zinc-500 mt-2">Transform your ideas into structured study material.</p>
          </div>

          {/* Input Area */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md p-1 shadow-2xl">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={loading}
              className="w-full h-48 p-6 bg-transparent focus:outline-none resize-none text-zinc-200 placeholder:text-zinc-600"
              placeholder="Enter your topic or paste your research content here..."
            />
            <div className="flex justify-end p-3">
              <button 
                onClick={sendMessage} 
                disabled={loading || !input}
                className="flex items-center gap-2 px-6 py-3 bg-white text-zinc-950 rounded-xl font-bold hover:bg-zinc-200 transition disabled:opacity-50"
              >
                {loading ? (
                  <><Loader2 size={18} className="animate-spin" /> Generating...</>
                ) : (
                  <><Sparkles size={18} /> Generate Notes</>
                )}
              </button>
            </div>
          </div>

          {/* Download Section */}
          {downloadUrl && (
            <div className="mt-8 p-6 bg-indigo-900/10 border border-indigo-500/30 rounded-2xl flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-white">Ready to download!</h3>
                <p className="text-sm text-zinc-400">Your notes have been successfully generated.</p>
              </div>
              <a 
                href={downloadUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-sm font-medium transition"
              >
                <Download size={16} /> Download
              </a>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
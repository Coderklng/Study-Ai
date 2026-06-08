"use client";
import React, { useState } from 'react';
import axios from 'axios';
import { Upload, AlertTriangle, CheckCircle2, Loader2 } from 'lucide-react';

export default function ATSDashboard() {
  const [file, setFile] = useState(null);
  const [jd, setJd] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file || !jd) return alert("JD और File दोनों जरूरी हैं!");
    
    setLoading(true);
    const formData = new FormData();
    formData.append("job_description", jd);
    formData.append("file", file);

    try {
      const response = await axios.post("https://ai-service-production-558b.up.railway.app/upload/resume", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      setResult(response.data.result.result);
    } catch (err) {
      console.error(err);
      alert("API कनेक्ट नहीं हो पा रही है!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6 md:p-12 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight">ATS Core v1.0</h1>
          <p className="text-zinc-500 mt-2">Professional Resume Analysis Tool</p>
        </header>
        
        {/* Input Section */}
        <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl mb-8 shadow-2xl">
          <textarea 
            className="w-full bg-zinc-950 border border-zinc-800 p-4 rounded-xl text-sm mb-4 focus:ring-1 focus:ring-indigo-500 outline-none"
            placeholder="Paste Job Description here..."
            rows={5}
            onChange={(e) => setJd(e.target.value)}
          />
          <div className="flex items-center gap-4">
            <input type="file" onChange={(e) => setFile(e.target.files[0])} className="text-sm text-zinc-400" />
            <button 
              onClick={handleUpload}
              disabled={loading}
              className="bg-indigo-600 px-6 py-2 rounded-lg font-medium hover:bg-indigo-500 transition flex items-center gap-2"
            >
              {loading ? <><Loader2 className="animate-spin" size={16}/> Processing...</> : "Analyze Resume"}
            </button>
          </div>
        </div>

        {/* Result Section */}
        {result && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Dynamic Score Card */}
            <div className={`p-8 rounded-2xl border ${result.score >= 60 ? 'bg-emerald-950/20 border-emerald-500/30' : 'bg-red-950/20 border-red-500/30'}`}>
              <p className="text-xs uppercase tracking-widest text-zinc-400 font-semibold mb-2">Match Score</p>
              <h2 className={`text-6xl font-black ${result.score >= 60 ? 'text-emerald-400' : 'text-red-400'}`}>
                {result.score}%
              </h2>
            </div>
            
            {/* Skills Grids */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800">
                <h3 className="text-sm font-semibold text-red-400 mb-4 flex items-center gap-2">
                  <AlertTriangle size={16} /> Missing Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {result.missing_skills.map((s, i) => <span key={i} className="bg-zinc-950 border border-zinc-800 text-zinc-300 px-3 py-1 rounded-md text-xs">{s}</span>)}
                </div>
              </div>

              <div className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800">
                <h3 className="text-sm font-semibold text-emerald-400 mb-4 flex items-center gap-2">
                  <CheckCircle2 size={16} /> Recommended Tools
                </h3>
                <div className="space-y-3">
                  {Object.entries(result.recommended_tools).map(([tool, sub], i) => (
                    <div key={i} className="text-xs">
                      <span className="font-bold text-zinc-200">{tool}:</span> <span className="text-zinc-500">{sub.join(", ")}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
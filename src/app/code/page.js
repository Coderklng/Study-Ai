"use client";
import { useState } from "react";
import { Menu, X, MessageSquare, Copy, Check, Send, Loader2 } from "lucide-react";
import axios from "axios";

export default function ChatLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [copiedId, setCopiedId] = useState(null);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setInput("");
    setLoading(true);

    try {
      const response = await axios.post("https://ai-service-production-558b.up.railway.app/code/generate", {
        question: userMessage
      });
      setMessages((prev) => [...prev, { role: "ai", content: response.data }]);
    } catch (error) {
      setMessages((prev) => [...prev, { role: "ai", content: { summary: "Error", explanation: "Failed to connect to API.", code: "// Check your backend status", language: "text", notes: "N/A" } }]);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedId(index);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="flex h-screen w-full bg-black text-white overflow-hidden">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-gradient-to-l from-zinc-950 to-black border-r border-zinc-800 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition-transform duration-300 ease-in-out`}>
        <div className="p-12 flex justify-between items-center">
          <h2 className="font-bold text-xl md:text-3xl  tracking-tight">Flow Ai</h2>
          <button onClick={() => setSidebarOpen(false)} className="md:hidden"><X size={20} /></button>
        </div>
        <nav className="px-4">
          <button onClick={() => setMessages([])} className="w-full flex items-center gap-3 p-3 rounded-lg bg-zinc-800 text-sm hover:bg-zinc-700 transition">
            <MessageSquare size={18} /> New Chat
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full w-full overflow-hidden relative">
        <header className="h-16  border-b border-zinc-800 flex items-center px-4 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-10 ">
          <button onClick={() => setSidebarOpen(true)} className="md:hidden mr-4"><Menu size={24} /></button>
          <h1 className="text-sm md:text-xl font-light md:font-medium">AI Service Dashboard</h1>
        </header>

        <main className="flex-1 overflow-y-auto w-full p-4 md:p-6 space-y-6 sidebar">
          {messages.map((msg, i) => (
            <div key={i} className={` shadow-lg w-full md:max-w-3xl mx-auto p-4 rounded-xl border ${msg.role === 'user' ? 'bg-gradient-to-b from-zinc-950 to-black border-zinc-800' : 'bg-gradient-to-r from-violet-800 to-blue-900 border-zinc-800'}`}>
              {msg.role === 'user' ? (
                <p className="text-sm break-words">{msg.content}</p>
              ) : (
                <div className="space-y-4 w-full overflow-hidden">
                  <h3 className="font-bold text-lg break-words">{msg.content.summary}</h3>
                  <p className="text-zinc-400 text-sm break-words">{msg.content.explanation}</p>
                  
                  <div className="relative group bg-black rounded-lg border border-zinc-700 w-full">
                    <div className="flex justify-between items-center px-4 py-2 bg-zinc-900 border-b border-zinc-700">
                      <span className="text-[10px] font-mono text-white">{msg.content.language}</span>
                      <button onClick={() => copyToClipboard(msg.content.code, i)} className="text-zinc-400 hover:text-white">
                        {copiedId === i ? <Check size={12} /> : <Copy size={12} />}
                      </button>
                    </div>
                    <pre className="p-4 text-xs font-mono text-emerald-400 overflow-x-auto w-full">
                      <code>{msg.content.code}</code>
                    </pre>
                  </div>
                  <p className="text-zinc-500 text-xs italic break-words">Notes: {msg.content.notes}</p>
                </div>
              )}
            </div>
          ))}
          {loading && <div className="max-w-3xl mx-auto text-zinc-500 text-sm flex gap-2"><Loader2 className="animate-spin" /> Thinking...</div>}
        </main>

        <div className="p-4 bg-gradient-to-l from-bg-zinc-950 to-black border-t border-zinc-800">
          <div className="max-w-3xl mx-auto relative flex items-center">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your message..."
              className="w-full bg-zinc-900 border border-zinc-700 rounded-xl py-3.5 pl-4 pr-12 text-sm focus:outline-none focus:border-zinc-500 transition"
            />
            <button onClick={handleSend} className="absolute right-3 p-2 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition">
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
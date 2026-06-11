"use client";
import { useState } from 'react';
import { Upload, FileText, Send, Bot, X, Menu, Loader2 } from 'lucide-react';
import axios from 'axios';

export default function SleekRAG() {
  const [file, setFile] = useState(null);
  const [messages, setMessages] = useState([
    { role: "ai", text: "Hello! Upload a document to start asking questions about your data." }
  ]);
  const [input, setInput] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // File Upload Logic
  const handleUpload = async (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    setFile(selectedFile);
    setLoading(true);

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      await axios.post(
        "https://ai-service-production-558b.up.railway.app/api/upload",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      setMessages((prev) => [...prev, { role: "ai", text: "File uploaded successfully! You can now ask questions." }]);
    } catch (error) {
      setMessages((prev) => [...prev, { role: "ai", text: "Error uploading file. Please check your backend." }]);
    } finally {
      setLoading(false);
    }
  };

  // Chat Logic with your specific response structure
  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setInput("");
    setLoading(true);

    try {
      const response = await axios.post("https://ai-service-production-558b.up.railway.app/api/chat", {
        query: userMessage 
      });

      const { answer, context } = response.data; // Backend ka structure extract kiya
      
      setMessages((prev) => [
        ...prev, 
        { role: "ai", text: answer, context: context }
      ]);
    } catch (error) {
      setMessages((prev) => [...prev, { role: "ai", text: "Sorry, I encountered an error connecting to the chat API." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen w-full bg-[#09090b] text-zinc-100 overflow-hidden font-sans">
      
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-72 border-r border-zinc-800 bg-[#09090b] p-6 flex flex-col gap-6 transform transition-transform duration-300 md:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex justify-between items-center md:hidden">
            <h1 className="text-xl font-semibold">RAG Engine</h1>
            <button onClick={() => setSidebarOpen(false)}><X size={20}/></button>
        </div>
        <h1 className="hidden md:block text-xl font-semibold tracking-tight">RAG Engine</h1>
        
        <div className="flex flex-col gap-3">
          <label className="group relative border border-zinc-800 bg-zinc-900/50 rounded-2xl p-6 flex flex-col items-center justify-center cursor-pointer hover:border-zinc-600 transition-all">
            <div className="p-3 bg-zinc-800 rounded-full mb-3 group-hover:bg-zinc-700 transition">
              <Upload className="w-5 h-5 text-zinc-400" />
            </div>
            <span className="text-sm font-medium">Click to upload PDF</span>
            <input type="file" className="hidden" onChange={handleUpload} />
          </label>
          {file && (
            <div className="flex items-center gap-2 p-3 bg-zinc-900 border border-zinc-800 rounded-xl text-xs text-zinc-400 truncate">
                <FileText size={14}/> {file.name}
            </div>
          )}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col bg-zinc-950 w-full overflow-hidden">
        <header className="h-16 border-b border-zinc-800 flex items-center px-4 gap-4 sticky top-0 bg-[#09090b]/80 backdrop-blur-md">
            <button className="md:hidden" onClick={() => setSidebarOpen(true)}><Menu size={24}/></button>
            <h2 className="font-medium">Document Chat</h2>
        </header>

        <div className="flex-1 overflow-y-auto p-4 md:p-8 flex flex-col items-center w-full">
          <div className="w-full max-w-3xl space-y-8">
            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-4 w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.role === 'ai' && (
                  <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center shrink-0">
                    <Bot size={16}/>
                  </div>
                )}
                <div className={`p-4 rounded-2xl max-w-[85%] md:max-w-2xl text-sm leading-relaxed ${msg.role === 'user' ? 'bg-blue-600 text-white' : 'bg-zinc-900 border border-zinc-800 text-zinc-300'}`}>
                  {msg.text}
                  {/* Context display section */}
                  {msg.context && (
                    <details className="mt-3 pt-2 border-t border-zinc-700 cursor-pointer">
                      <summary className="text-[10px] text-zinc-500 font-medium">View Source Context</summary>
                      <p className="text-[10px] text-zinc-400 mt-1 italic">{msg.context}</p>
                    </details>
                  )}
                </div>
              </div>
            ))}
            {loading && <div className="text-zinc-500 flex gap-2 text-sm justify-center"><Loader2 className="animate-spin" /> Processing...</div>}
          </div>
        </div>

        {/* Input Area */}
        <div className="p-4 md:p-6 border-t border-zinc-800 bg-[#09090b]">
          <div className="max-w-3xl mx-auto flex items-center gap-3 bg-zinc-900 border border-zinc-800 rounded-full p-2 focus-within:border-zinc-600 transition">
            <input 
              className="flex-1 bg-transparent px-4 py-2 outline-none text-sm"
              placeholder="Ask anything about your document..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button onClick={handleSend} className="p-2.5 bg-blue-600 rounded-full hover:bg-blue-500 transition shadow-lg shadow-blue-900/20">
              <Send size={16}/>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
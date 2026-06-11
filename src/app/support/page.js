"use client";
import React, { useState } from 'react';
import { LayoutDashboard, FileText, HelpCircle, User, Bot, Send } from 'lucide-react';
import "../globals.css";

export default function ProfessionalDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="flex h-screen bg-zinc-950 text-white font-sans overflow-x-hidden">
      {/* Sidebar - Added shrink-0 to prevent compression */}
      <aside className="hidden w-64 bg-zinc-900 border-r border-zinc-800 md:flex flex-col shrink-0">
        <div className="p-6 text-xl font-black text-indigo-500 tracking-tighter">ATS PRO v1.0</div>
        <nav className="flex-1 px-4 space-y-2 mt-4">
        
          <NavItem 
            icon={<HelpCircle size={18}/>} 
            label="Support Team" 
            active={activeTab === 'support'} 
            onClick={() => setActiveTab('support')} 
          />
        </nav>
      </aside>

      {/* Main Area */}
      <main className="flex-1 p-8 overflow-y-auto">
     <SupportDashboard /> 
      </main>
      
    </div>
  );
}

function SupportDashboard() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! How can our team help you with your ATS today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMsg = input;
    const newMessages = [...messages, { sender: 'user', text: userMsg }];
    setMessages(newMessages);
    setInput('');

    try {
      const res = await fetch('https://ai-service-production-558b.up.railway.app/support', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: userMsg })
      });
      const data = await res.json();
      setMessages([...newMessages, { sender: 'bot', text: data.response }]);
    } catch (err) {
      setMessages([...newMessages, { sender: 'bot', text: "Sorry, I'm having trouble connecting to the server." }]);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold">Support & Help</h2>
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl h-[500px] flex flex-col overflow-hidden">
        <div className="p-4 border-b border-zinc-800 flex items-center gap-3">
          <div className="bg-indigo-600 p-2 rounded-full"><Bot size={20}/></div>
          <div>
            <p className="font-bold">ATS Support Team</p>
            <p className="text-xs text-emerald-400">● Online</p>
          </div>
        </div>
        
        {/* Chat Messages */}
        <div className="flex-1 p-6 overflow-y-auto flex flex-col gap-4 scrollbar-hide">
          {messages.map((m, i) => (
            <div key={i} className={`flex gap-3 ${m.sender === 'user' ? 'flex-row-reverse' : ''}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${m.sender === 'bot' ? 'bg-zinc-700' : 'bg-indigo-900'}`}>
                {m.sender === 'bot' ? <Bot size={16}/> : <User size={16}/>}
              </div>
              <div className={`p-3 rounded-2xl text-sm max-w-[70%] ${m.sender === 'bot' ? 'bg-zinc-800' : 'bg-indigo-600'}`}>
                {m.text}
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-zinc-800 flex gap-2">
          <input 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            className="flex-1 bg-zinc-950 p-3 rounded-xl outline-none" 
            placeholder="Message support team..." 
          />
          <button onClick={handleSend} className="bg-indigo-600 p-3 rounded-xl hover:bg-indigo-500 transition"><Send size={18}/></button>
        </div>
      </div>
    </div>
  );
}

function NavItem({ icon, label, active, onClick }) {
  return (
    <button onClick={onClick} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition ${active ? 'bg-indigo-600' : 'hover:bg-zinc-800'}`}>
      {icon} {label}
    </button>
  );
}

function DashboardContent() {
  return <h1 className="text-3xl font-bold">Welcome back, Rahul.</h1>;
}
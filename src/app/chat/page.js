"use client";
import { Menu, Plus, Send, User, Bot } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import "../globals.css";

export default function Chat() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    { role: "ai", text: "Hello Sir How can I help You" }
  ]);
  const bottomRef = useRef(null);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const msg = input;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: msg,
      },
    ]);

    setInput("");
    setLoading(true);

    try {
      const res = await axios.post(
        "https://ai-service-production-558b.up.railway.app/chat-with_ai",
        {
          question: msg,
        }
      );

      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: res.data.answer,
        },
      ]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  return (
    <div className="flex h-screen bg-zinc-950 text-white overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`${sidebarOpen ? "w-72" : "w-0"
          } transition-all duration-300 overflow-hidden border-r border-zinc-800 bg-zinc-900`}
      >
        <div className="p-4">
          <button className="w-full flex items-center gap-2 rounded-xl bg-violet-700 px-4 py-3 hover:bg-violet-600">
            <Plus size={18} />
            New Chat
          </button>
        </div>

        <div className="px-3 space-y-2">
          {["React Help", "Node Project", "AI Chatbot"].map((chat) => (
            <button
              key={chat}
              className="w-full text-left rounded-xl px-3 py-3 hover:bg-zinc-800"
            >
              {chat}
            </button>
          ))}
        </div>
      </aside>

      {/* Main */}
      <main className="flex flex-1 flex-col overflow-y-hidden hide-scrollbar">
        {/* Header */}
        <header className="flex items-center gap-3 border-b border-zinc-800 p-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="rounded-lg p-2 hover:bg-zinc-800"
          >
            <Menu />
          </button>

          <h1 className="text-lg font-semibold">AI Assistant</h1>
        </header>
        {/* Messages */}

        {/* Messages */}
        <div className="flex-1 overflow-y-auto hide-scrollbar">
          <div className="mx-auto max-w-4xl p-6 space-y-6">

            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex gap-3 ${msg.role === "user"
                  ? "justify-end"
                  : "justify-start"
                  }`}
              >
                {msg.role === "ai" && (
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 flex items-center justify-center shrink-0">
                    <Bot size={18} />
                  </div>
                )}

                <div
                  className={`max-w-2xl rounded-3xl px-5 py-4 break-words ${msg.role === "user"
                    ? "bg-violet-700 text-white"
                    : "bg-zinc-900 border border-zinc-800"
                    }`}
                >
                  <ReactMarkdown
                    components={{
                      h1: ({ children }) => (
                        <h1 className="text-4xl font-bold mb-3">{children}</h1>
                      ),
                      h2: ({ children }) => (
                        <h2 className="text-3xl font-semibold mb-2">{children}</h2>
                      ),
                      p: ({ children }) => (
                        <p className="leading-5 mb-2 font-light">{children}</p>
                      ),
                      code: ({ children }) => (
                        <code className="bg-zinc-950/60 backdrop-blur-md px-2 py-1 rounded">
                          {children}
                        </code>
                      ),
                    }}
                  >
                    {msg.text}
                  </ReactMarkdown>
                </div>

                {msg.role === "user" && (
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-zinc-700 to-zinc-900 flex items-center justify-center shrink-0">
                    <User size={18} />
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className="flex gap-3 items-start">

                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 flex items-center justify-center shrink-0">
                  <Bot size={18} />
                </div>

                <div className="rounded-3xl border border-zinc-800 bg-zinc-900 px-5 py-4">
                  <div className="flex gap-2">
                    <div className="h-2 w-2 rounded-full bg-violet-500 animate-bounce" />
                    <div className="h-2 w-2 rounded-full bg-violet-500 animate-bounce [animation-delay:0.15s]" />
                    <div className="h-2 w-2 rounded-full bg-violet-500 animate-bounce [animation-delay:0.3s]" />
                  </div>
                </div>

              </div>
            )}

            <div ref={bottomRef} />
          </div>
        </div>
        {/* Input */}
        <div className="border-t border-zinc-800 p-4">
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center gap-3 rounded-3xl border border-zinc-800 bg-zinc-900 px-4 py-3">
              <input
                value={input}
                placeholder="Ask anything..."
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent outline-none"
              />

              <button className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-700 hover:bg-violet-600"
                onClick={sendMessage}
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
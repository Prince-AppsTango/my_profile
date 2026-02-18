import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot } from "lucide-react";
import { chatData, defaultResponse } from "../data/chatData";
import axios from "axios";
const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hi! I'm Prince's virtual assistant. Ask me anything about his projects, skills, or experience!",
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const findResponse = (userInput) => {
    const lowerInput = userInput.toLowerCase();

    // Find best match based on keywords
    const match = chatData.find((item) =>
      item.keywords.some((keyword) => lowerInput.includes(keyword)),
    );

    return match ? match.response : defaultResponse;
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input;

    // Immediately add user message and clear input
    setMessages((prev) => [...prev, { type: "user", text: userMessage }]);
    setInput("");

    // Add loading indicator
    const loadingId = Date.now();
    setMessages((prev) => [
      ...prev,
      { type: "bot", text: "...", isLoading: true, id: loadingId },
    ]);

    try {
      const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:3001";
      const res = await axios.post(`${apiUrl}/chat`, {
        message: userMessage,
      });

      console.log("Response from backend:", res.data);

      // Remove loading indicator and add bot response
      setMessages((prev) => [
        ...prev.filter((msg) => msg.id !== loadingId),
        { type: "bot", text: res.data.reply },
      ]);
    } catch (error) {
      console.error("Frontend Error:", error);

      // Remove loading indicator and add error message
      setMessages((prev) => [
        ...prev.filter((msg) => msg.id !== loadingId),
        { type: "bot", text: "Server error. Check backend." },
      ]);
    }
  };

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-24 right-8 z-50 flex flex-col items-end transition-opacity duration-300 ${isVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 w-80 md:w-96 bg-zinc-900 border border-zinc-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            style={{ maxHeight: "500px" }}
          >
            {/* Header */}
            <div className="bg-zinc-800 p-4 flex items-center justify-between border-b border-zinc-700">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <Bot size={18} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">Prince's AI</h3>
                  <p className="text-xs text-zinc-400">
                    Online | Portfolio Assistant
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto bg-zinc-900/95 space-y-4 min-h-[300px]">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.type === "user"
                        ? "bg-primary text-white rounded-br-none"
                        : "bg-zinc-800 text-zinc-200 rounded-bl-none border border-zinc-700"
                      }`}
                  >
                    {msg.isLoading ? (
                      <div className="flex gap-1 items-center py-1">
                        <span
                          className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0ms" }}
                        ></span>
                        <span
                          className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce"
                          style={{ animationDelay: "150ms" }}
                        ></span>
                        <span
                          className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce"
                          style={{ animationDelay: "300ms" }}
                        ></span>
                      </div>
                    ) : (
                      msg.text.split("\n").map((line, i) => (
                        <p key={i} className={i > 0 ? "mt-1" : ""}>
                          {line}
                        </p>
                      ))
                    )}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form
              onSubmit={handleSend}
              className="p-3 bg-zinc-800 border-t border-zinc-700 flex gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about skills, projects..."
                className="flex-1 bg-zinc-900 border border-zinc-700 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-primary transition-colors"
              />
              <button
                type="submit"
                className="p-2 bg-primary rounded-full text-white hover:bg-primary/90 transition-colors disabled:opacity-50"
                disabled={!input.trim()}
              >
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 rounded-full bg-primary text-white shadow-lg shadow-primary/30 hover:bg-primary/90 transition-all flex items-center justify-center"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>
    </div>
  );
};

export default ChatBot;

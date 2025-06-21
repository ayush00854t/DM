'use client';

import React, { useState } from 'react';

interface Message {
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [stage, setStage] = useState<'idle' | 'greeted' | 'waitingForEmail'>('idle');
  const [showHelloPopup, setShowHelloPopup] = useState(true);

  const formatTime = (): string =>
    new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const sendBotMessage = (text: string) => {
    const botReply: Message = {
      sender: 'bot',
      text,
      timestamp: formatTime(),
    };
    setMessages((prev) => [...prev, botReply]);
  };

  const getSmartResponse = (text: string): string => {
    const lowered = text.toLowerCase();
    if (lowered.includes('price') || lowered.includes('pricing')) {
      return 'Our pricing is flexible — tell us your needs and we’ll customize it.';
    }
    if (lowered.includes('service')) {
      return 'We offer premium digital marketing, branding, and automation services.';
    }
    if (lowered.includes('hello') || lowered.includes('hi')) {
      return 'Hello! How can I assist you today?';
    }
    return 'Please share your email so we can assist you better.';
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      sender: 'user',
      text: input,
      timestamp: formatTime(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      if (stage === 'waitingForEmail') {
        sendBotMessage('Sent in email.');
        setStage('idle');
      } else {
        const reply = getSmartResponse(input);
        if (reply.includes('email')) {
          setStage('waitingForEmail');
        }
        sendBotMessage(reply);
      }
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSend();
  };

  const handleReset = () => {
    setMessages([]);
    setInput('');
    setStage('idle');
  };

  const handleOpen = () => {
    setIsOpen(true);
    setShowHelloPopup(false);
    setMessages([]);
    setIsTyping(true);
    setStage('greeted');

    setTimeout(() => sendBotMessage('Team Rocket 🚀'), 400);
    setTimeout(() => {
      sendBotMessage('Welcome! What can I help you with today?');
      setIsTyping(false);
    }, 1200);
  };

  const handleDefaultClick = () => {
    const userMessage: Message = {
      sender: 'user',
      text: 'Our Services',
      timestamp: formatTime(),
    };
    setMessages((prev) => [...prev, userMessage]);

    sendBotMessage('Please share your email.');
    setStage('waitingForEmail');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* 👋 Hello Popup */}
      {!isOpen && showHelloPopup && (
        <div className="absolute -top-14 right-1 bg-white text-black px-4 py-2 rounded-full shadow-md flex items-center space-x-2 text-sm animate-bounce">
          <span>Hello 👋</span>
          <button
            onClick={() => setShowHelloPopup(false)}
            className="text-gray-500 hover:text-red-500 font-bold"
          >
            ×
          </button>
        </div>
      )}

      {/* Bot Icon or Chatbox */}
      {!isOpen ? (
        <button
          onClick={handleOpen}
          className="w-20 h-20 p-1 rounded-full shadow-lg border-2 border-white bg-white overflow-hidden hover:scale-105 transition-transform"
        >
          <img
            src="/imgc.jpg"
            alt="chatbot"
            className="w-full h-full object-cover scale-125 animate-spin-slow"
          />
        </button>
      ) : (
        <div className="w-[22rem] h-[36rem] bg-white text-black rounded-3xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex justify-between items-center bg-gray-800 text-white px-4 py-2">
            <span className="font-semibold">Meowth 🚀</span>
            <div className="space-x-2">
              <button onClick={handleReset} title="Refresh" className="hover:text-gray-300">
                &#x21bb;
              </button>
              <button onClick={() => setIsOpen(false)} title="Close" className="hover:text-red-400">
                &times;
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 space-y-2 overflow-y-auto bg-gray-50 text-sm">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[75%] px-3 py-2 rounded-lg flex flex-col ${
                    msg.sender === 'user'
                      ? 'bg-blue-600 text-white items-end'
                      : 'bg-gray-200 text-black items-start'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {msg.sender === 'bot' && (
                      <img src="/imgc.jpg" alt="bot" className="w-5 h-5 rounded-full" />
                    )}
                    <p>{msg.text}</p>
                  </div>
                  <span className="text-[10px] text-right opacity-60 mt-1">{msg.timestamp}</span>
                </div>
              </div>
            ))}
            {isTyping && <div className="text-left text-xs text-gray-500">Meowth is typing...</div>}
            {stage === 'greeted' && (
              <div className="flex justify-start">
                <button
                  onClick={handleDefaultClick}
                  className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-xs hover:bg-blue-200"
                >
                  Our Services
                </button>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="flex items-center border-t border-gray-300 px-2 py-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 px-3 py-1 border rounded-md text-sm focus:outline-none"
            />
            <button onClick={handleSend} className="ml-2 text-blue-600 hover:text-blue-800 font-bold">
              ➤
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;

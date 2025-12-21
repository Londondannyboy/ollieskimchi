'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function TalkToVicPage() {
  const [message, setMessage] = useState('')
  const [chatHistory, setChatHistory] = useState<{ role: 'user' | 'vic'; text: string }[]>([
    { role: 'vic', text: "Hey! I'm Vic, Ollie's trusty kimchi companion. Ask me anything about kimchi - recipes, fermentation tips, storage, or just chat! What's on your mind?" }
  ])

  const quickQuestions = [
    "How long does kimchi last?",
    "Is kimchi good for gut health?",
    "What can I cook with kimchi?",
    "How spicy is your kimchi?",
  ]

  const handleSend = () => {
    if (!message.trim()) return

    // Add user message
    setChatHistory(prev => [...prev, { role: 'user', text: message }])

    // Simulate Vic's response (placeholder - would connect to AI in production)
    setTimeout(() => {
      const responses = [
        "Great question! Kimchi is amazing for gut health - it's packed with probiotics from the natural fermentation process. The live cultures help support your digestive system!",
        "Our Classic Kimchi has a nice kick but it's not overwhelming. Perfect for kimchi newbies and spice lovers alike! We also have Mild and Spicy versions coming soon.",
        "Ooh, you can do so much with kimchi! Try it in fried rice, on burgers, in grilled cheese, or just straight from the jar (no judgment here!). Check out our recipes section for more ideas!",
        "Properly stored in the fridge, our kimchi stays fresh for months. The flavour develops over time - some people prefer it young and crunchy, others like it more fermented and tangy!",
      ]
      setChatHistory(prev => [...prev, {
        role: 'vic',
        text: responses[Math.floor(Math.random() * responses.length)]
      }])
    }, 1000)

    setMessage('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-red-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link href="/" className="text-kimchi-red hover:underline text-sm font-medium">
            &larr; Back to Home
          </Link>
          <div className="flex items-center gap-4 mt-4">
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-kimchi-red/10 flex items-center justify-center overflow-hidden">
                <Image
                  src="/Assets/Ollie.JPG"
                  alt="Vic"
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                />
              </div>
              <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Talk to Vic</h1>
              <p className="text-gray-600">Your friendly kimchi guide</p>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Messages */}
          <div className="h-96 overflow-y-auto p-6 space-y-4">
            {chatHistory.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs md:max-w-md px-4 py-3 rounded-2xl ${
                    msg.role === 'user'
                      ? 'bg-kimchi-red text-white rounded-br-sm'
                      : 'bg-gray-100 text-gray-800 rounded-bl-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Questions */}
          <div className="px-6 py-3 border-t border-gray-100 bg-gray-50">
            <p className="text-xs text-gray-500 mb-2">Quick questions:</p>
            <div className="flex flex-wrap gap-2">
              {quickQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setMessage(q)
                  }}
                  className="text-xs px-3 py-1.5 bg-white border border-gray-200 rounded-full hover:border-kimchi-red hover:text-kimchi-red transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-100">
            <div className="flex gap-3">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask Vic anything about kimchi..."
                className="flex-1 px-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-kimchi-red focus:border-transparent"
              />
              <button
                onClick={handleSend}
                className="px-6 py-3 bg-kimchi-red text-white font-bold rounded-full hover:bg-red-600 transition-colors flex items-center gap-2"
              >
                <span>Send</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-gray-400 mt-4">
          Vic is here to help with general kimchi questions. For order support, please <Link href="/contact" className="text-kimchi-red hover:underline">contact us</Link>.
        </p>
      </div>
    </div>
  )
}

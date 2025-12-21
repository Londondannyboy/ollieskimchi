'use client'

import Image from 'next/image'

interface OllieSaysProps {
  children: React.ReactNode
  variant?: 'tip' | 'story' | 'warning' | 'fun'
}

const variantStyles = {
  tip: {
    bg: 'bg-gradient-to-br from-green-50 to-emerald-50',
    border: 'border-green-400',
    accent: 'text-green-600',
    label: "Ollie's Tip",
    emoji: '💡',
  },
  story: {
    bg: 'bg-gradient-to-br from-amber-50 to-orange-50',
    border: 'border-amber-400',
    accent: 'text-amber-600',
    label: "Ollie's Story",
    emoji: '📖',
  },
  warning: {
    bg: 'bg-gradient-to-br from-red-50 to-rose-50',
    border: 'border-red-400',
    accent: 'text-red-600',
    label: 'Heads Up!',
    emoji: '⚠️',
  },
  fun: {
    bg: 'bg-gradient-to-br from-purple-50 to-pink-50',
    border: 'border-purple-400',
    accent: 'text-purple-600',
    label: 'Fun Fact',
    emoji: '🎉',
  },
}

export default function OllieSays({ children, variant = 'tip' }: OllieSaysProps) {
  const style = variantStyles[variant]

  return (
    <div className={`${style.bg} border-l-4 ${style.border} rounded-2xl p-6 my-8 relative overflow-hidden`}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/30 rounded-full -translate-y-1/2 translate-x-1/2" />

      <div className="relative flex gap-4 items-start">
        {/* Ollie's Photo */}
        <div className="flex-shrink-0">
          <div className="relative">
            <Image
              src="/Assets/Ollie Photo.png"
              alt="Ollie"
              width={80}
              height={80}
              className="rounded-full border-4 border-white shadow-lg"
            />
            <span className="absolute -bottom-1 -right-1 text-2xl">{style.emoji}</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-grow">
          <p className={`font-bold ${style.accent} text-sm uppercase tracking-wide mb-2`}>
            {style.label}
          </p>
          <div className="text-gray-700 text-lg leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

// Simpler inline version for quick tips
export function OllieTip({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3 bg-kimchi-red/5 border border-kimchi-red/20 rounded-xl p-4 my-4">
      <Image
        src="/Assets/Ollie Photo.png"
        alt="Ollie"
        width={40}
        height={40}
        className="rounded-full border-2 border-kimchi-red flex-shrink-0"
      />
      <p className="text-gray-700">
        <span className="font-bold text-kimchi-red">Ollie says: </span>
        {children}
      </p>
    </div>
  )
}

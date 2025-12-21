'use client'

import Image from 'next/image'

interface ArticleIntroProps {
  title: string
  excerpt?: string
  author?: string
  date?: string
  category?: string
}

export default function ArticleIntro({ title, excerpt, author = "Ollie's Kimchi", date, category }: ArticleIntroProps) {
  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl overflow-hidden mb-12">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-900 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500 rounded-full blur-3xl" />
      </div>

      <div className="relative p-8 md:p-12">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Ollie's Photo */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-kimchi-red shadow-2xl shadow-kimchi-red/30">
                <Image
                  src="/Assets/Ollie Photo.png"
                  alt="Ollie"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>
              {/* "It's Alive" badge */}
              <div className="absolute -bottom-2 -right-2 bg-red-900 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg wiggle-slow">
                It&apos;s Alive!
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-grow text-center md:text-left">
            {/* Meta */}
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              {category && (
                <span className="px-3 py-1 bg-red-900 text-white text-sm font-bold rounded-full">
                  {category}
                </span>
              )}
              {date && (
                <span className="text-gray-400 text-sm">{date}</span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              {title}
            </h1>

            {/* Excerpt */}
            {excerpt && (
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-4">
                {excerpt}
              </p>
            )}

            {/* Author */}
            <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400">
              <span>By</span>
              <span className="text-white font-medium">{author}</span>
              <span className="text-red-900">• Kimchi Obsessive</span>
            </div>
          </div>
        </div>

        {/* Fun quote bubble */}
        <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
          <div className="flex items-start gap-4">
            <span className="text-4xl">💬</span>
            <div>
              <p className="text-white text-lg italic">
                &quot;I&apos;ve been obsessing over this stuff for years. Let me share what I&apos;ve learned!&quot;
              </p>
              <p className="text-red-900 font-bold mt-2">— Ollie</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Compact version for smaller callouts
export function OllieQuote({ quote, context }: { quote: string; context?: string }) {
  return (
    <div className="bg-gradient-to-r from-kimchi-red/10 to-orange-50 rounded-2xl p-6 my-8 border-l-4 border-kimchi-red">
      <div className="flex items-start gap-4">
        <Image
          src="/Assets/Ollie Photo.png"
          alt="Ollie"
          width={60}
          height={60}
          className="rounded-full border-2 border-kimchi-red flex-shrink-0"
        />
        <div>
          <p className="text-gray-800 text-lg italic leading-relaxed">
            &quot;{quote}&quot;
          </p>
          <p className="text-red-900 font-bold mt-2">
            — Ollie {context && <span className="text-gray-500 font-normal">({context})</span>}
          </p>
        </div>
      </div>
    </div>
  )
}

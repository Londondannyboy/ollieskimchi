import Image from 'next/image'

interface OllisPromiseProps {
  variant?: 'default' | 'compact'
}

export default function OllisPromise({ variant = 'default' }: OllisPromiseProps) {
  if (variant === 'compact') {
    return (
      <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
        <Image
          src="/Assets/Ollie Photo.png"
          alt="Olli"
          width={48}
          height={48}
          className="rounded-full"
        />
        <div>
          <p className="text-sm text-gray-700 italic">
            &ldquo;I promise you, my kimchi will set your tastebuds alive!&rdquo;
          </p>
          <p className="text-xs text-gray-500 mt-0.5">— Olli, Founder</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 mt-8">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <Image
            src="/Assets/Ollie Photo.png"
            alt="Olli - Founder"
            width={80}
            height={80}
            className="rounded-full border-4 border-white shadow-lg"
          />
        </div>
        <div className="flex-grow">
          <h4 className="font-display text-lg font-semibold text-gray-900">
            Olli&apos;s Promise
          </h4>
          <p className="text-gray-600 mt-2 leading-relaxed">
            &ldquo;You can&apos;t go wrong with this kimchi. I&apos;ve spent years perfecting
            the recipe — every jar is made with love, patience, and the best ingredients
            I can find. I promise you, it&apos;ll set your tastebuds alive!&rdquo;
          </p>
          <div className="flex items-center gap-2 mt-3">
            <span className="text-sm font-semibold text-gray-900">— Olli</span>
            <span className="text-sm text-gray-500">Chef & Founder</span>
          </div>
        </div>
      </div>
    </div>
  )
}

import Image from 'next/image'

interface GuardianBadgeProps {
  size?: 'sm' | 'md' | 'lg'
  showQuote?: boolean
  className?: string
}

export default function GuardianBadge({ size = 'md', showQuote = false, className = '' }: GuardianBadgeProps) {
  const sizes = {
    sm: {
      container: 'w-14 h-14',
      logo: 'h-3',
      stars: 'w-2 h-2',
      quote: 'text-[6px]',
      padding: 'p-1.5',
    },
    md: {
      container: 'w-20 h-20',
      logo: 'h-4',
      stars: 'w-2.5 h-2.5',
      quote: 'text-[7px]',
      padding: 'p-2',
    },
    lg: {
      container: 'w-28 h-28',
      logo: 'h-5',
      stars: 'w-3 h-3',
      quote: 'text-[8px]',
      padding: 'p-3',
    },
  }

  const s = sizes[size]

  return (
    <div
      className={`${s.container} rounded-full bg-white shadow-lg flex flex-col items-center justify-center ${s.padding} ${className}`}
    >
      {/* Guardian Logo */}
      <Image
        src="/Assets/guardian-logo-blue.png"
        alt="The Guardian"
        width={80}
        height={16}
        className={`${s.logo} w-auto`}
      />

      {/* 5 Stars */}
      <div className="flex gap-0.5 mt-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`${s.stars} text-yellow-400 fill-current`}
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Optional Quote */}
      {showQuote && (
        <p className={`${s.quote} text-gray-600 font-medium mt-0.5 text-center leading-tight`}>
          &ldquo;Big flavour&rdquo;
        </p>
      )}
    </div>
  )
}

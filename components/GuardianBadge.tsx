import Image from 'next/image'

interface GuardianBadgeProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function GuardianBadge({ size = 'md', className = '' }: GuardianBadgeProps) {
  const sizes = {
    sm: {
      logo: 'h-5',
      stars: 'w-3 h-3',
      gap: 'gap-0.5',
      padding: 'px-2 py-1.5',
    },
    md: {
      logo: 'h-6',
      stars: 'w-4 h-4',
      gap: 'gap-0.5',
      padding: 'px-3 py-2',
    },
    lg: {
      logo: 'h-8',
      stars: 'w-5 h-5',
      gap: 'gap-1',
      padding: 'px-4 py-3',
    },
  }

  const s = sizes[size]

  return (
    <div
      className={`bg-white/90 backdrop-blur-sm rounded-xl shadow-lg flex flex-col items-center ${s.padding} ${className}`}
    >
      {/* Guardian Logo */}
      <Image
        src="/Assets/guardian-logo-blue.png"
        alt="The Guardian"
        width={100}
        height={20}
        className={`${s.logo} w-auto`}
      />

      {/* 5 Stars underneath */}
      <div className={`flex ${s.gap} mt-1`}>
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
    </div>
  )
}

import type { Metadata } from 'next'
import { Outfit, Source_Serif_4 } from 'next/font/google'
import './globals.css'
import GuardianBanner from '@/components/GuardianBanner'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import EmailPopup from '@/components/EmailPopup'
import CookieConsent from '@/components/CookieConsent'
import { CartProvider } from '@/components/CartContext'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Ollie's Kimchi | Handcrafted Fermented Foods",
  description: "Handcrafted, naturally fermented kimchi made in London. Bursting with probiotics, flavour, and life. It's Alive!",
  keywords: ['kimchi', 'fermented foods', 'probiotics', 'London', 'artisan', 'handcrafted'],
  openGraph: {
    title: "Ollie's Kimchi",
    description: "Handcrafted, naturally fermented kimchi made in London. It's Alive!",
    url: 'https://ollieskimchi.co.uk',
    siteName: "Ollie's Kimchi",
    locale: 'en_GB',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${sourceSerif.variable}`}>
      <body className="min-h-screen flex flex-col">
        <CartProvider>
          <GuardianBanner />
          <NavBar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <EmailPopup />
          <CookieConsent />
        </CartProvider>
      </body>
    </html>
  )
}

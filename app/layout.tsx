import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { OrganizationStructuredData } from '@/components/structured-data'



import './globals.css'
import Head from '@/components/head'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Green Tape Agro - Premium Organic Compost | 10kg',
  description: 'Pasteurized organic compost by Green Tape Agro Industries. Perfect for agriculture, gardening, and farming. Premium quality soil enrichment for healthy plants.',
  generator: 'v0.app',
  keywords: ['organic compost', 'pasteurized compost', 'agriculture', 'gardening', 'soil enrichment', 'organic fertilizer'],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://greentapeagro.com',
    siteName: 'Green Tape Agro Industries',
    title: 'Green Tape Agro - Premium Organic Compost',
    description: 'Pasteurized organic compost for agriculture and gardening - ₹499 per 10kg bag',
    images: [
      {
        url: '/product-compost.jpg',
        width: 1200,
        height: 630,
        alt: 'Green Tape Agro Premium Organic Compost',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Green Tape Agro - Premium Organic Compost',
    description: 'Pasteurized organic compost for agriculture and gardening',
    images: ['/product-compost.jpg'],
  },
  alternates: {
    canonical: 'https://greentapeagro.com',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Head me SEO + structured data */}
        <OrganizationStructuredData />
      </head>
      <body className="font-sans antialiased">
        <Head />     {/* Har page me header */}
        {children}        {/* Page content */}     {/* Har page me footer */}
      </body>
    </html>
  )
}

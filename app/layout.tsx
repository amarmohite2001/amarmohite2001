import type { Metadata } from 'next'
import '../styles/globals.css'
import { ThemeProvider } from '@/context/ThemeContext'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GoToTop from '@/components/GoToTop'
import { CONTENT } from '@/data/content'

const ogImageUrl = `${CONTENT.site.url}${CONTENT.site.ogImage}`

export const metadata: Metadata = {
  title: CONTENT.site.title,
  description: CONTENT.site.description,
  alternates: {
    canonical: `${CONTENT.site.url}/`,
  },
  openGraph: {
    title: CONTENT.site.title,
    description: CONTENT.site.description,
    url: `${CONTENT.site.url}/`,
    siteName: CONTENT.brand.name,
    images: [ogImageUrl],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: CONTENT.site.title,
    description: CONTENT.site.description,
    images: [ogImageUrl],
  },
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: CONTENT.brand.name,
  description: CONTENT.site.description,
  url: `${CONTENT.site.url}/`,
  sameAs: CONTENT.hero.socials.map(social => social.href),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml" />
        {/* Prevent flash of wrong theme by reading localStorage before React hydrates */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('theme');document.body.className=t==='light_theme'?'light_theme':'dark_theme';}catch(e){}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body id="top" suppressHydrationWarning>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
          <GoToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}

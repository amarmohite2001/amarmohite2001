import type { Metadata } from 'next'
import '../styles/globals.css'
import { ThemeProvider } from '@/context/ThemeContext'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GoToTop from '@/components/GoToTop'
import { CONTENT } from '@/data/content'

export const metadata: Metadata = {
  title: CONTENT.site.title,
  description: CONTENT.site.description,
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

'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Theme = 'dark_theme' | 'light_theme'

interface ThemeContextType {
  isLight: boolean
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType>({
  isLight: false,
  toggleTheme: () => {},
})

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isLight, setIsLight] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'light_theme') setIsLight(true)
  }, [])

  useEffect(() => {
    const theme: Theme = isLight ? 'light_theme' : 'dark_theme'
    document.body.className = theme
    localStorage.setItem('theme', theme)
  }, [isLight])

  const toggleTheme = () => setIsLight(prev => !prev)

  return (
    <ThemeContext.Provider value={{ isLight, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)

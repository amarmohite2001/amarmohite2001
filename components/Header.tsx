'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useTheme } from '@/context/ThemeContext'
import { CONTENT } from '@/data/content'

export default function Header() {
  const { isLight, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [navOpen, setNavOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeNav = () => {
    setNavOpen(false)
    document.body.classList.remove('active')
  }

  const toggleNav = () => {
    const next = !navOpen
    setNavOpen(next)
    document.body.classList.toggle('active', next)
  }

  return (
    <header className={`header${scrolled ? ' active' : ''}`}>
      <div className="container">
        <h1 className="h1 logo">
          <Link href="/#home" onClick={closeNav}>
            {CONTENT.brand.name}
          </Link>
        </h1>

        <div className="navbar-actions">
          <button
            className={`theme-btn${isLight ? ' active' : ''}`}
            aria-label="Change Theme"
            title="Change Theme"
            onClick={toggleTheme}
          >
            <span className="icon" />
          </button>
        </div>

        <button
          className={`nav-toggle-btn${navOpen ? ' active' : ''}`}
          aria-label="Toggle Menu"
          title="Toggle Menu"
          onClick={toggleNav}
        >
          <span className="one" />
          <span className="two" />
          <span className="three" />
        </button>

        <nav className={`navbar${navOpen ? ' active' : ''}`}>
          <ul className="navbar-list">
            {CONTENT.navigation.map(item => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="navbar-link"
                  onClick={closeNav}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

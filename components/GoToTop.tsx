'use client'

import { useEffect, useState } from 'react'
import { IoArrowUp } from 'react-icons/io5'

export default function GoToTop() {
  const [active, setActive] = useState(false)

  useEffect(() => {
    const onScroll = () => setActive(window.scrollY >= 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href="#top"
      className={`go-top${active ? ' active' : ''}`}
      title="Go to Top"
      aria-label="Go to Top"
    >
      <IoArrowUp />
    </a>
  )
}

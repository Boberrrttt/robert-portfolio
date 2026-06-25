'use client'

import { useEffect, useRef, useState } from 'react'

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Work' },
  { id: 'contact', label: 'Contact' },
]

const SideDotNav = () => {
  const [activeSection, setActiveSection] = useState('about')
  const lastSectionRef = useRef('about')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2

      for (let i = navItems.length - 1; i >= 0; i--) {
        const { id } = navItems[i]
        const el = document.getElementById(id)

        if (el && el.offsetTop <= scrollPos) {
          if (lastSectionRef.current !== id) {
            setActiveSection(id)
            history.replaceState(null, '', `#${id}`)
            lastSectionRef.current = id
          }
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav
        aria-label="Section navigation"
        className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 flex-col items-end gap-5"
      >
        {navItems.map(({ id, label }) => {
          const isActive = activeSection === id
          return (
            <button
              key={id}
              type="button"
              onClick={() => scrollTo(id)}
              className="group flex items-center gap-3 cursor-pointer"
              aria-label={label}
              aria-current={isActive ? 'true' : undefined}
            >
              <span
                className={`font-mono-tag text-xs tracking-wide transition-all duration-200 ${
                  isActive
                    ? 'text-brand-accent opacity-100 translate-x-0'
                    : 'text-gray-400 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
                }`}
              >
                {label}
              </span>
              <span
                className={`rounded-full border-2 transition-all duration-200 shrink-0 ${
                  isActive
                    ? 'w-3 h-3 bg-brand-accent border-brand-accent scale-110'
                    : 'w-2.5 h-2.5 bg-transparent border-white/30 group-hover:border-brand-accent/60 group-hover:scale-110'
                }`}
              />
            </button>
          )
        })}
      </nav>

      <nav
        aria-label="Section navigation"
        className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-4 py-2.5 rounded-full bg-brand-primary/90 backdrop-blur-md border border-white/10"
      >
        {navItems.map(({ id, label }) => {
          const isActive = activeSection === id
          return (
            <button
              key={id}
              type="button"
              onClick={() => scrollTo(id)}
              className="p-1 cursor-pointer"
              aria-label={label}
              aria-current={isActive ? 'true' : undefined}
            >
              <span
                className={`block rounded-full border-2 transition-all duration-200 ${
                  isActive
                    ? 'w-2.5 h-2.5 bg-brand-accent border-brand-accent'
                    : 'w-2 h-2 bg-transparent border-white/30'
                }`}
              />
            </button>
          )
        })}
      </nav>
    </>
  )
}

export default SideDotNav

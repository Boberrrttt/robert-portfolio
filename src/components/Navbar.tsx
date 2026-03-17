'use client'

import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
] as const

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('about')
  const [menuOpen, setMenuOpen] = useState(false)
  const lastSectionRef = useRef('about')
  const navRef = useRef<HTMLElement>(null)

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

  const goToSection = (id: string) => {
    const target = document.getElementById(id)
    target?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  useEffect(() => {
    if (!menuOpen) return
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setMenuOpen(false)
    }
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('click', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('click', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [menuOpen])

  return (
    <>
      {/* Skip to main content - critical for recruiters using keyboard/screen readers */}
      <a href="#about" className="skip-link" onClick={(e) => { e.preventDefault(); goToSection('about') }}>
        Skip to content
      </a>
      <nav
        ref={navRef}
        className="shadow-lg fixed top-0 left-0 right-0 bg-brand-primary/95 backdrop-blur-sm z-50 border-b border-white/10"
        aria-label="Main navigation"
      >
        <div className="flex justify-between items-center text-white py-4 px-6 md:py-5 md:px-10 max-w-7xl mx-auto">
          <a
            href="#about"
            onClick={(e) => { e.preventDefault(); goToSection('about') }}
            className="flex items-center gap-3 hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-primary rounded"
            aria-label="Robert Salvo - go to top"
          >
            <Image src="/assets/wave.gif" width={40} height={40} alt="" className="w-8 h-8 md:w-10 md:h-10" />
            <span className="font-bold text-lg md:text-xl">Robert Salvo</span>
          </a>

          <ul className="hidden md:flex gap-8 font-semibold" role="list">
            {navItems.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => { e.preventDefault(); goToSection(id) }}
                  className={`py-2 px-1 transition-all duration-200 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-primary ${
                    activeSection === id
                      ? 'text-white underline underline-offset-8 decoration-2 decoration-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                  aria-current={activeSection === id ? 'true' : undefined}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="md:hidden p-2 text-white rounded-lg hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={28} aria-hidden /> : <Menu size={28} aria-hidden />}
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-all duration-200 ${menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}
          aria-hidden={!menuOpen}
        >
          <ul className="flex flex-col items-center gap-1 py-6 px-4 bg-brand-secondary/50 border-t border-white/10" role="list">
            {navItems.map(({ id, label }) => (
              <li key={id} className="w-full">
                <a
                  href={`#${id}`}
                  onClick={(e) => { e.preventDefault(); goToSection(id) }}
                  className={`block w-full text-center py-4 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-inset ${
                    activeSection === id ? 'bg-white/15 text-white font-semibold' : 'text-gray-300 hover:bg-white/10 hover:text-white'
                  }`}
                  aria-current={activeSection === id ? 'true' : undefined}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar

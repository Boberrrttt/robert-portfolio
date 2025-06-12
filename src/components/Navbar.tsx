'use client'

import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react' // You can use any icon library
import Image from 'next/image'

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('about')
  const [menuOpen, setMenuOpen] = useState(false)
  const lastSectionRef = useRef('about')
  const navItems = ['about', 'skills', 'projects', 'contact']


  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2

      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = navItems[i]
        const el = document.getElementById(section)

        if (el && el.offsetTop <= scrollPos) {
          if (lastSectionRef.current !== section) {
            setActiveSection(section)
            history.replaceState(null, '', `#${section}`)
            lastSectionRef.current = section
          }
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [navItems])

  return (
    <nav className="shadow-md fixed top-0 left-0 bg-brand-primary z-50 w-full">
      <div className="flex justify-between items-center text-white py-6 px-8">
        <div className="flex items-center gap-3">
          <Image src="/assets/wave.gif" alt="Wave" className="w-10 h-10" />
          <h1 className="font-bold text-xl">Robert S.</h1>
        </div>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-10 font-bold">
          {navItems.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                onClick={(e) => {
                  e.preventDefault()
                  const target = document.getElementById(section)
                  target?.scrollIntoView({ behavior: 'smooth' })
                  setMenuOpen(false) 
                }}
                className={`cursor-pointer transition-all duration-200 ${
                  activeSection === section
                    ? 'underline underline-offset-8 decoration-white'
                    : 'text-gray-400'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>

            </li>
          ))}
        </ul>

        {/* Hamburger icon */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center gap-6 font-bold py-6 bg-brand-primary text-white">
          {navItems.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                onClick={(e) => {
                  e.preventDefault()
                  const target = document.getElementById(section)
                  target?.scrollIntoView({ behavior: 'smooth' })
                  setMenuOpen(false) // closes the menu if mobile
                }}
                className={`cursor-pointer transition-all duration-200 ${
                  activeSection === section
                    ? 'underline underline-offset-8 decoration-white'
                    : 'text-gray-400'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>

            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}

export default Navbar

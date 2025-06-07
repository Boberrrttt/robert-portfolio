'use client'

import { useEffect, useRef, useState } from 'react'

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('about')
  const lastSectionRef = useRef('about') // track last updated section
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
            history.replaceState(null, '', `#${section}`) // safe to call directly here
            lastSectionRef.current = section
          }
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="shadow-md fixed top-0 left-0 bg-brand-primary z-50 flex justify-between items-center text-white py-6 px-8 w-full">
      <div className="flex items-center gap-3">
        <img src="/assets/wave.gif" alt="Wave" className="w-10 h-10" />
        <h1 className="font-bold text-xl">Robert S.</h1>
      </div>

      <ul className="flex gap-10 font-bold">
        {navItems.map((section) => (
          <li key={section}>
            <a
              href={`#${section}`}
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
    </nav>
  )
}

export default Navbar

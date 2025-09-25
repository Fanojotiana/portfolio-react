import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ThemeToggle from './ThemeToggle' // Assurez-vous que le chemin est correct

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Highlight active section
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'services', 'blog', 'contact']
      const scrollPosition = window.scrollY + 100
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Accueil', href: '#home', id: 'home' },
    { name: 'À propos', href: '#about', id: 'about' },
    { name: 'Expérience', href: '#experience', id: 'experience' },
    { name: 'Projets', href: '#projects', id: 'projects' },
    { name: 'Compétences', href: '#skills', id: 'skills' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Blog', href: '#blog', id: 'blog' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 md:px-8 py-3 flex justify-between items-center">
        <motion.span 
          className="text-xl font-bold text-indigo-600 dark:text-indigo-400"
          whileHover={{ scale: 1.05 }}
        >
          MonPortfolio
        </motion.span>

        {/* Menu desktop */}
        <div className="hidden md:flex items-center gap-8">
          <div className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`transition-colors ${
                  activeSection === item.id
                    ? 'text-indigo-600 dark:text-indigo-400 font-medium'
                    : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => scrollToSection('#contact')}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors hidden md:block"
            >
              Me Contacter
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded focus:outline-none
              bg-indigo-500 text-white
              dark:bg-yellow-400 dark:text-gray-900
              border-2 border-indigo-700 dark:border-yellow-500
              transition-colors duration-300 shadow-lg"
            aria-label="Ouvrir le menu"
          >
            {/* icône hamburger */}
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <line x1="4" y1="7" x2="20" y2="7" stroke="currentColor"  strokeLinecap="round"/>
              <line x1="4" y1="12" x2="20" y2="12" stroke="currentColor" strokeLinecap="round"/>
              <line x1="4" y1="17" x2="20" y2="17" stroke="currentColor" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </nav>

      {/* Menu mobile ouvert */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`transition-colors py-2 text-left ${
                  activeSection === item.id
                    ? 'text-indigo-600 dark:text-indigo-400 font-medium'
                    : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
                }`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('#contact')}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors mt-2"
            >
              Me Contacter
            </button>
          </div>
        </div>
      )}
    </motion.div>
  )
}

export default Navbar
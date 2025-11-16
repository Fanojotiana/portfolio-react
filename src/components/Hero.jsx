import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08
      }
    }
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  const AnimatedText = ({ text, className }) => {
    return (
      <motion.h1
        className={className}
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        {text.split('').map((char, index) => (
          <motion.span key={index} variants={letterVariants}>
            {char}
          </motion.span>
        ))}
      </motion.h1>
    )
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16 px-4 md:px-8 ">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute top-0 right-0 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 left-0 w-72 h-7 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-48 h-48 mx-auto mb-2 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl"
        >
          <img
            src="/images/fanojo_hero.png"
            alt="Profile Photo"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <AnimatedText
          text="Fanojotiana R."
          className="text-5xl md:text-7xl font-bold text-gray-800 dark:text-white mb-4"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="text-xl md:text-2xl text-indigo-600 dark:text-indigo-400 mb-8 font-mono typewriter"
        >
          Fullstack Web Developer
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12"
        >
          I create modern and interactive web experiences using React, Next.js, and the latest technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium"
          >
            View My Projects
          </button>
          <button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400 px-8 py-3 rounded-lg hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-400 dark:hover:text-gray-900 transition-colors font-medium"
          >
            Contact Me
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero

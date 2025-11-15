import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  const skills = [
    { name: 'HTML & CSS', level: 70, gradient: 'from-orange-500 to-red-500' },
    { name: 'JavaScript', level: 60, gradient: 'from-yellow-500 to-orange-500' },
    { name: 'PHP', level: 60, gradient: 'from-purple-500 to-indigo-500' },
    { name: 'React', level: 70, gradient: 'from-cyan-500 to-blue-500' },
    { name: 'Next.js', level: 50, gradient: 'from-gray-700 to-gray-900' },
    { name: 'Symfony', level: 60, gradient: 'from-black to-gray-800' },
    { name: 'Laravel', level: 70, gradient: 'from-red-500 to-pink-500' },
    { name: 'Vue.js', level: 60, gradient: 'from-emerald-500 to-teal-500' },
    { name: 'Tailwind', level: 50, gradient: 'from-cyan-400 to-blue-500' },
  ]

  const techIcons = [
    { name: 'React', icon: '⚛️', gradient: 'from-cyan-500 to-blue-500' },
    { name: 'JavaScript', icon: '🟨', gradient: 'from-yellow-500 to-orange-500' },
    { name: 'Symfony', icon: '🟢', gradient: 'from-black to-gray-800' },
    { name: 'Laravel', icon: '🚀', gradient: 'from-red-500 to-pink-500' },
    { name: 'Vue.js', icon: '🟩', gradient: 'from-emerald-500 to-teal-500' },
    { name: 'Tailwind CSS', icon: '🎨', gradient: 'from-cyan-400 to-blue-500' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="skills" className="relative py-20 px-4 md:px-8 overflow-hidden bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-600 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-600 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/50">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
            My Skills
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Technical expertise and proficiency levels
          </p>
        </motion.div>

        {/* Skills Progress Bars */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="mb-8 group"
            >
              <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300">
                {/* Gradient Border Effect on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${skill.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl`}></div>
                
                <div className="relative z-10">
                  <div className="flex justify-between mb-3">
                    <span className="text-white font-semibold text-lg">
                      {skill.name}
                    </span>
                    <motion.span 
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                      className={`px-3 py-1 rounded-full bg-gradient-to-r ${skill.gradient} text-white font-bold text-sm shadow-lg`}
                    >
                      {skill.level}%
                    </motion.span>
                  </div>
                  
                  {/* Progress Bar Container */}
                  <div className="relative w-full bg-white/10 rounded-full h-4 overflow-hidden border border-white/20">
                    {/* Animated Progress Bar */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className={`h-full bg-gradient-to-r ${skill.gradient} rounded-full relative`}
                    >
                      {/* Shimmer Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                    </motion.div>
                  </div>
                </div>

                {/* Floating Particle */}
                <div className={`absolute bottom-2 right-2 w-12 h-12 bg-gradient-to-br ${skill.gradient} opacity-20 rounded-full filter blur-xl group-hover:scale-150 transition-transform duration-700`}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Technology Icons Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-10">
            Technologies I Work With
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {techIcons.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -10 }}
                className="relative group"
              >
                <div className="relative bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 text-center">
                  {/* Gradient Border Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${tech.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-2xl`}></div>
                  
                  <div className="relative z-10">
                    <motion.div 
                      className="text-5xl mb-3"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    >
                      {tech.icon}
                    </motion.div>
                    <div className="text-white font-semibold text-sm">
                      {tech.name}
                    </div>
                  </div>

                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} opacity-0 group-hover:opacity-20 rounded-2xl filter blur-xl transition-opacity duration-500`}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-lg rounded-full border border-white/10">
            <svg className="w-5 h-5 text-cyan-400 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-300 font-medium">Constantly learning and improving</span>
            <svg className="w-5 h-5 text-purple-400 animate-pulse" fill="currentColor" viewBox="0 0 20 20" style={{ animationDelay: '0.5s' }}>
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
      `}</style>
    </section>
  )
}

export default Skills
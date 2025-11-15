import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="about" className="relative py-20 px-4 md:px-8 overflow-hidden bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-600 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
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
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/50">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
            About Me
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Passionate developer dedicated to creating exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Content Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Main Card */}
            <motion.div variants={itemVariants} className="mb-8 group">
              <div className="relative bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-500">
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl"></div>
                
                {/* Accent Top Border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      Who am I?
                    </h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    I am a passionate web developer who builds modern and high-performance applications with Laravel, Symfony, React, Vue.js, and other technologies. 
                    Curious and solution-oriented, I enjoy tackling complex challenges to deliver intuitive and innovative user experiences.
                    I am a C1-certified English speaker, which allows me to communicate efficiently in international and technical environments.
                  </p>
                </div>

                {/* Floating Particles */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-indigo-500/20 rounded-full filter blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-purple-500/20 rounded-full filter blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
              <motion.div 
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 shadow-xl text-center group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 mb-2">
                    Several
                  </div>
                  <div className="text-gray-300 font-medium">Completed Projects</div>
                </div>
                <div className="absolute bottom-2 right-2 w-16 h-16 bg-indigo-500/20 rounded-full filter blur-xl group-hover:scale-150 transition-transform duration-500"></div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 shadow-xl text-center group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                    5+
                  </div>
                  <div className="text-gray-300 font-medium">Technologies Mastered</div>
                </div>
                <div className="absolute bottom-2 right-2 w-16 h-16 bg-purple-500/20 rounded-full filter blur-xl group-hover:scale-150 transition-transform duration-500"></div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="relative">
              {/* Decorative Background Elements */}
              <motion.div 
                animate={{ 
                  rotate: [0, 5, 0],
                  scale: [1, 1.02, 1]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -inset-6 bg-gradient-to-br from-indigo-500/30 to-purple-500/30 rounded-2xl blur-2xl"
              ></motion.div>
              
              <motion.div 
                animate={{ 
                  rotate: [0, -3, 0],
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -inset-4 border-2 border-white/20 rounded-2xl transform rotate-3"
              ></motion.div>

              {/* Main Image Container */}
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                  alt="About"
                  className="relative w-full h-auto group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -right-6 bg-gradient-to-br from-indigo-500 to-purple-500 p-6 rounded-2xl shadow-2xl border border-white/20"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">C1</div>
                  <div className="text-sm text-white/80 font-medium">English</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-lg rounded-full border border-white/10 shadow-xl">
            <svg className="w-6 h-6 text-indigo-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-200 font-semibold text-lg">
              Let's build something amazing together
            </span>
            <svg className="w-6 h-6 text-purple-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ animationDelay: '0.5s' }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
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
      `}</style>
    </section>
  )
}

export default About
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
    <section id="about" className="py-20 px-4 md:px-8 bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            À propos de moi
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="mb-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                    Qui suis-je ?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Je suis un développeur web passionné avec plus de 5 ans d'expérience dans la création 
                    d'applications web modernes et performantes. Spécialisé en React et Node.js, 
                    j'aime résoudre des problèmes complexes et créer des expériences utilisateur exceptionnelles.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
              <div className="bg-indigo-50 dark:bg-gray-800 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">50+</div>
                <div className="text-gray-600 dark:text-gray-300">Projets réalisés</div>
              </div>
              <div className="bg-indigo-50 dark:bg-gray-800 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">5+</div>
                <div className="text-gray-600 dark:text-gray-300">Ans d'expérience</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -inset-4 border-2 border-indigo-200 dark:border-gray-700 rounded-lg transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                alt="À propos"
                className="relative rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
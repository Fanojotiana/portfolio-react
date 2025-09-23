import React from 'react'
import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
      title: "Développeur Fullstack Senior",
      company: "TechCorp Inc.",
      period: "2021 - Présent",
      description: "Développement d'applications web avec React, Node.js et MongoDB. Gestion d'une équipe de 5 développeurs."
    },
    {
      title: "Développeur Frontend",
      company: "WebSolutions SARL",
      period: "2019 - 2021",
      description: "Création d'interfaces utilisateur responsive avec React et intégration avec des API REST."
    },
    {
      title: "Développeur Junior",
      company: "StartUp Innovante",
      period: "2018 - 2019",
      description: "Apprentissage des bonnes pratiques de développement et participation à divers projets web."
    }
  ]

  return (
    <section id="experience" className="py-20 px-4 md:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Mon Parcours
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-12 relative"
            >
              <div className="flex items-start">
                <div className="absolute left-0 mt-1.5">
                  <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-12">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{exp.title}</h3>
                  <p className="text-indigo-600 dark:text-indigo-400 font-medium">{exp.company} | {exp.period}</p>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">{exp.description}</p>
                </div>
              </div>
              {index < experiences.length - 1 && (
                <div className="absolute left-3 top-8 h-16 w-0.5 bg-indigo-200 dark:bg-gray-600 ml-0.5"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
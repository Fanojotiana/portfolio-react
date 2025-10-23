import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const projects = [
    {
      id: 1,
      title: "School Management",
      description: "Laravel platform to manage students, teachers, classes, and schedules.",
      image: "https://i.pinimg.com/736x/bc/2f/c9/bc2fc951e93524dafcd7e1cb1fff14ff.jpg",
      technologies: ["Laravel", "PHP", "MySQL", "Bootstrap 5", "JavaScript", "MySQL"],
      details: "Development of a complete application for school management with CRUD for students, teachers, subjects, schedules, and multi-role authentication. Project versioned on GitHub.",
      github: "https://github.com/Fanojotiana/Gestion-d-ecole"
    },
    {
      id: 2,
      title: "JobSy",
      description: "Interactive job platform to create a profile, apply for jobs, and communicate with employers.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSciC1DjdDVFE1A2Vi38HsubhR8JRdvbIp9A&s",
      technologies: ["PHP", "jQuery", "Bootstrap 5", "JavaScript", "MySQL"],
      details: "Development of a professional social platform with authentication, content posting, real-time messaging, and notifications.",
      github: "https://github.com/Fanojotiana/site-d-emploi-JOBSY"
    },
    {
      id: 3,
      title: "Flight Booking Site",
      description: "Easily search and book flights with our user-friendly platform. Compare prices, choose your seats, and manage your bookings in just a few clicks for a stress-free journey",
      image: "https://i.pinimg.com/736x/f5/bc/9e/f5bc9eebec67986b3db1bcfdcda371c0.jpg",
      technologies: ["Symfony", "Tailwind", "JavaScript", "MySQL"],
      details: "Our Flight Booking Site makes planning your trips simple and convenient. Search thousands of flights from top airlines, compare prices in real time, select your preferred seats, and manage your bookings effortlessly. With an intuitive interface and secure payment options, we ensure a smooth and stress-free travel experience from start to finish.",
      github: "https://github.com/Fanojotiana/Site-de-r-servation-de-vol"
    },
    {
      id: 4,
      title: "Lambake",
      description: "Web app that recommends outfits according to real-time weather using an external weather API.",
      image: "https://media.gq.com/photos/676598892ab7540c29ee81f6/16:9/w_2000,h_1125,c_limit/winteressentialslede1220.png",
      technologies: ["React", "Tailwind", "Typescript", "External API (OpenWeather)"],
      details: "Web app that recommends outfits according to real-time weather using an external weather API.",
      github: "https://github.com/Fanojotiana/lambake"
    },
    {
      id: 5,
      title: "TaskList",
      description: "Our TaskList app helps you organize and manage your tasks efficiently. Create, edit, and categorize your tasks, set deadlines, and track your progress all in one place. With an intuitive interface and smart notifications, staying productive and meeting your goals has never been easier.",
      image: "data:image/jpeg;base64,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",
      technologies: ["React", "Tailwind", "Typescript"],
      details: "Our TaskList app is designed to help you stay organized and boost your productivity. Easily create tasks, assign priorities, set deadlines, and categorize them by project or type. Track your progress with visual indicators, mark tasks as completed, and receive smart reminders to stay on schedule. With an intuitive interface, collaboration features, and seamless syncing across devices, managing your daily tasks and long-term projects becomes simple, efficient, and stress-free.",
      github: "https://github.com/Fanojotiana/TasksProject"
    }
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  }

  return (
    <section id="projects" className="py-20 px-4 md:px-8 bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </motion.div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative cursor-pointer"
            >
              <div 
                className="bg-white dark:bg-gray-800 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => openModal(project)}
              >
                <div className="relative overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold">View Details</span>
                  </div>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-2 right-2 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.724-4.033-1.415-4.033-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.084-.729.084-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.304.762-1.604-2.665-.304-5.467-1.332-5.467-5.93 0-1.31.468-2.381 1.236-3.221-.124-.303-.536-1.523.116-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.289-1.552 3.294-1.23 3.294-1.23.653 1.653.242 2.873.118 3.176.77.84 1.234 1.911 1.234 3.221 0 4.61-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                      </svg>
                    </a>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-100 text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {showModal && selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{selectedProject.title}</h3>
                  <button onClick={closeModal} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-48 object-cover rounded-lg mb-4"/>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{selectedProject.details}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-100 text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <button onClick={closeModal} className="px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors">
                    Close
                  </button>
                  {selectedProject.github && (
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.724-4.033-1.415-4.033-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.084-.729.084-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.304.762-1.604-2.665-.304-5.467-1.332-5.467-5.93 0-1.31.468-2.381 1.236-3.221-.124-.303-.536-1.523.116-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.289-1.552 3.294-1.23 3.294-1.23.653 1.653.242 2.873.118 3.176.77.84 1.234 1.911 1.234 3.221 0 4.61-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                      </svg>
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;


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
      technologies: ["Laravel", "PHP", "MySQL", "Bootstrap 5", "JavaScript"],
      details: "Development of a complete application for school management with CRUD for students, teachers, subjects, schedules, and multi-role authentication. Project versioned on GitHub.",
      github: "https://github.com/Fanojotiana/Gestion-d-ecole",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      id: 2,
      title: "JobSy",
      description: "Interactive job platform to create a profile, apply for jobs, and communicate with employers.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSciC1DjdDVFE1A2Vi38HsubhR8JRdvbIp9A&s",
      technologies: ["PHP", "jQuery", "Bootstrap 5", "JavaScript", "MySQL"],
      details: "Development of a professional social platform with authentication, content posting, real-time messaging, and notifications.",
      github: "https://github.com/Fanojotiana/site-d-emploi-JOBSY",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "Flight Booking Site",
      description: "Easily search and book flights with our user-friendly platform. Compare prices, choose your seats, and manage your bookings in just a few clicks for a stress-free journey",
      image: "https://i.pinimg.com/736x/f5/bc/9e/f5bc9eebec67986b3db1bcfdcda371c0.jpg",
      technologies: ["Symfony", "Tailwind", "JavaScript", "MySQL"],
      details: "Our Flight Booking Site makes planning your trips simple and convenient. Search thousands of flights from top airlines, compare prices in real time, select your preferred seats, and manage your bookings effortlessly. With an intuitive interface and secure payment options, we ensure a smooth and stress-free travel experience from start to finish.",
      github: "https://github.com/Fanojotiana/Site-de-r-servation-de-vol",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      id: 4,
      title: "Lambake",
      description: "Web app that recommends outfits according to real-time weather using an external weather API.",
      image: "https://media.gq.com/photos/676598892ab7540c29ee81f6/16:9/w_2000,h_1125,c_limit/winteressentialslede1220.png",
      technologies: ["React", "Tailwind", "Typescript", "External API (OpenWeather)"],
      details: "Web app that recommends outfits according to real-time weather using an external weather API.",
      github: "https://github.com/Fanojotiana/lambake",
      gradient: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "TaskList",
      description: "Our TaskList app helps you organize and manage your tasks efficiently. Create, edit, and categorize your tasks, set deadlines, and track your progress all in one place.",
      image: "https://i.pinimg.com/736x/8a/b1/16/8ab116dc6875fa277128db80eb116a56.jpg",
      technologies: ["Laravel", "React", "Tailwind", "Typescript"],
      details: "Our TaskList app is designed to help you stay organized and boost your productivity. Easily create tasks, assign priorities, set deadlines, and categorize them by project or type. Track your progress with visual indicators, mark tasks as completed, and receive smart reminders to stay on schedule. With an intuitive interface, collaboration features, and seamless syncing across devices, managing your daily tasks and long-term projects becomes simple, efficient, and stress-free.",
      github: "https://github.com/Fanojotiana/TasksProject",
      gradient: "from-emerald-500 to-teal-500"
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
    <section id="projects" className="relative py-20 px-4 md:px-8 overflow-hidden bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl animate-pulse"></div>
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
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/50">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            My Projects
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Explore my portfolio of web applications and creative solutions
          </p>
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
              className="relative group"
            >
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 shadow-2xl cursor-pointer"
                onClick={() => openModal(project)}
              >
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60"></div>
                  
                  {/* GitHub Button */}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`absolute top-4 right-4 p-3 bg-gradient-to-r ${project.gradient} text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300 z-20`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.724-4.033-1.415-4.033-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.084-.729.084-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.304.762-1.604-2.665-.304-5.467-1.332-5.467-5.93 0-1.31.468-2.381 1.236-3.221-.124-.303-.536-1.523.116-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.289-1.552 3.294-1.23 3.294-1.23.653 1.653.242 2.873.118 3.176.77.84 1.234 1.911 1.234 3.221 0 4.61-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                      </svg>
                    </a>
                  )}

                  {/* View Details Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold text-lg flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      View Details
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 relative z-10">
                  <h3 className={`text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${project.gradient} transition-all duration-300`}>
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-white/10 backdrop-blur-sm text-gray-200 text-sm rounded-full border border-white/20 hover:bg-white/20 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Floating Particle */}
                <div className={`absolute bottom-4 right-4 w-16 h-16 bg-gradient-to-br ${project.gradient} opacity-20 rounded-full filter blur-xl group-hover:scale-150 transition-transform duration-700`}></div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {showModal && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                {/* Header Image */}
                <div className="relative h-64 overflow-hidden rounded-t-2xl">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent`}></div>
                  
                  {/* Close Button */}
                  <button 
                    onClick={closeModal} 
                    className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-sm text-white rounded-full hover:bg-black/70 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className={`text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${selectedProject.gradient} mb-4`}>
                    {selectedProject.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                    {selectedProject.details}
                  </p>
                  
                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, i) => (
                        <span 
                          key={i} 
                          className={`px-4 py-2 bg-gradient-to-r ${selectedProject.gradient} text-white text-sm rounded-full shadow-lg`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Buttons */}
                  <div className="flex gap-4 pt-4 border-t border-white/10">
                    <button 
                      onClick={closeModal} 
                      className="flex-1 px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-colors border border-white/20"
                    >
                      Close
                    </button>
                    {selectedProject.github && (
                      <a 
                        href={selectedProject.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r ${selectedProject.gradient} text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.724-4.033-1.415-4.033-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.084-.729.084-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.304.762-1.604-2.665-.304-5.467-1.332-5.467-5.93 0-1.31.468-2.381 1.236-3.221-.124-.303-.536-1.523.116-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.289-1.552 3.294-1.23 3.294-1.23.653 1.653.242 2.873.118 3.176.77.84 1.234 1.911 1.234 3.221 0 4.61-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                        </svg>
                        View on GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
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
  );
}

export default Projects;
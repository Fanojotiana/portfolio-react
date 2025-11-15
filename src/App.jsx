import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Services from './components/Services'
/*import Blog from './components/Blog'*/
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AnimatedBackground from './components/AnimatedBackground'

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
 

 
      <AnimatedBackground /> {/* Ajoute ceci */}
       
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Services />
      {/* <Blog /> */}
      <Contact />
      <Footer />
    
    </div>
  )
}

export default App
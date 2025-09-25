import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Services from './components/Services'
/*import Blog from './components/Blog'*/
import Contact from './components/Contact'
import Footer from './components/Footer'
import AnimatedBackground from './components/AnimatedBackground'
import Particles from './components/Particles'

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <div>

  <Particles
    particleColors={['#ffffff', '#ffffff']}
    particleCount={200}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
    className="particles-container"
  />

      <AnimatedBackground /> {/* Ajoute ceci */}
       
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Services />
      {/* <Blog /> */}
      <Contact />
      <Footer />
      </div>
    </div>
  )
}

export default App
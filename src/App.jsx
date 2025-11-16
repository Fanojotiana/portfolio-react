import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Services from "./components/Services";
/*import Blog from './components/Blog'*/
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AnimatedBackground from "./components/AnimatedBackground";
import Particles from "./components/Particules";

function App() {
  return (
    <>
      <div className="w-full h-screen relative bg-black flex justify-center items-center">
        {/* Particules en fond */}
        <div className="absolute inset-0">
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>

        {/* Navbar fixée en haut */}
        <div className="absolute top-0 left-0 w-full pointer-events-auto z-50">
          <Navbar />
        </div>

        {/* Hero centré */}
        <div className="flex flex-col justify-center items-center pointer-events-auto">
          <Hero />
        </div>
      </div>

      <div className="bg-black dark:bg-gray-900 transition-colors duration-300">
        <AnimatedBackground />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Services />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;

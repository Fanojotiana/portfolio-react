import React, { useState, useEffect } from "react";
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
import TextType from "./components/WelcomeSplash";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSplash(false);
    }, 7000); // Temps total avant de cacher le splash (ajuste si besoin)
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {showSplash ? (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
          <TextType
            text={[
              "Bienvenue sur mon portfolio !",
              "Je suis Fanojotiana R.",
              "Fullstack Web Developer"
            ]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            className="text-white text-3xl md:text-5xl text-center"
          />
        </div>
      ) : (
        <div>
          {/* Fond avec particules */}
          <div className="w-full h-screen relative bg-black flex justify-center items-center">
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

          {/* Autres sections */}
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
        </div>
      )}
    </>
  );
}

export default App;

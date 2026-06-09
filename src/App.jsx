import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSkill, setActiveSkill] = useState(null);


  return (
    <div className="app-container">
      {/* Floating nav */}

      {/* Main sections */}
      <main>
        <Hero  />
        <About />
        <Skills activeSkill={activeSkill} setActiveSkill={setActiveSkill} />
        <Experience activeSkill={activeSkill} />
        <Projects activeSkill={activeSkill} />
        <Contact />
      </main>

      {/* Footer signature */}
      <Footer/>
    </div>
  );
}

export default App;

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <footer className="py-8 text-center text-zinc-500 text-sm border-t border-zinc-800 bg-zinc-900/50">
        <p>© {new Date().getFullYear()} Prince Kumar Yadav. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

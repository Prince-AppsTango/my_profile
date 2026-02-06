import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollToTop from './components/ui/ScrollToTop';
import ChatBot from './components/ChatBot';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary/30 relative">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
        style={{ scaleX }}
      />

      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <ScrollToTop />
      <ChatBot />

      <footer className="py-8 text-center text-zinc-500 text-sm border-t border-zinc-800 bg-zinc-900/50">
        <p>© {new Date().getFullYear()} Prince Kumar Yadav. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

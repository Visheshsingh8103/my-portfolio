import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';

import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import BackgroundCanvas from './components/BackgroundCanvas';
import ScrollProgress from './components/ScrollProgress';

import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import GitHubSection from './sections/GitHubSection';
import Services from './sections/Services';
import Process from './sections/Process';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  const [loading, setLoading] = useState(false);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    // If user prefers reduced motion, disable smooth scrolling
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    let animationFrameId;
    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#ededed] overflow-x-hidden selection:bg-cyan-500/20 selection:text-cyan-300">
      
      {/* 1. Full-screen Cinematic Preloader */}
      {loading && <Preloader onFinish={() => setLoading(false)} />}

      {/* 2. Custom Glowing Magnetic Cursor */}
      <CustomCursor />

      {/* 3. Interactive Three.js Background Canvas */}
      <BackgroundCanvas />

      {/* 4. Top Glowing Scroll Progress */}
      <ScrollProgress />

      {/* 5. Floating Glassmorphism Navbar */}
      <Navbar />

      {/* 6. Main Portfolio Layout */}
      <main className="relative z-10 flex flex-col">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <GitHubSection />
        <Services />
        <Process />
        <Contact />
      </main>

      {/* 7. Footer */}
      <Footer />

    </div>
  );
}

export default App;

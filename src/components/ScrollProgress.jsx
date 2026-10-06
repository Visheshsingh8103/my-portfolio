import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
        setShowTopButton(window.scrollY > 400);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top glowing progress bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-[100] pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-blue-600 via-cyan-400 to-white shadow-[0_0_12px_#00f0ff]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Scroll-to-Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        data-cursor="TOP"
        className={`fixed bottom-6 right-6 z-50 p-3 rounded-xl bg-surface-100/80 hover:bg-surface-50 border border-white/10 hover:border-cyan-400/50 text-white/70 hover:text-cyan-300 backdrop-blur-md transition-all duration-300 shadow-xl group ${
          showTopButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'
        }`}
      >
        <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
      </button>
    </>
  );
};

export default ScrollProgress;

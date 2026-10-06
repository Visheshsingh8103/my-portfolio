import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Section tracking
      const sections = ['home', 'about', 'skills', 'projects', 'journey', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className={`flex items-center justify-between px-5 py-2.5 rounded-2xl transition-all duration-300 ${
              scrolled
                ? 'bg-[#09090d]/80 backdrop-blur-xl border border-white/[0.08] shadow-[0_8px_30px_rgb(0,0,0,0.4)]'
                : 'bg-transparent border border-transparent'
            }`}
          >
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-3 group"
              data-cursor="HOME"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white/10 to-white/[0.02] border border-cyan-400/30 flex items-center justify-center transition-all duration-300 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.4)]">
                <span className="font-display font-extrabold text-sm tracking-tighter bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
                  VS
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-sm tracking-wide text-white group-hover:text-cyan-300 transition-colors">
                  {personalInfo.name}
                </span>
                <span className="font-mono text-[10px] text-white/40 tracking-wider">
                  FULL STACK ENG
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1 bg-white/[0.03] px-3 py-1.5 rounded-full border border-white/[0.06] backdrop-blur-md">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    data-cursor="GO"
                    className={`relative px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                      isActive
                        ? 'text-cyan-300 font-semibold'
                        : 'text-white/60 hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    {isActive && (
                      <span className="absolute inset-0 bg-cyan-500/10 rounded-full border border-cyan-400/30 shadow-[0_0_12px_rgba(0,240,255,0.2)] -z-10" />
                    )}
                    {item.label}
                  </a>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                data-cursor="CHAT"
                className="btn-ripple relative group px-4 py-2 rounded-xl text-xs font-medium text-black bg-cyan-400 hover:bg-cyan-300 transition-all duration-300 shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_25px_rgba(0,240,255,0.6)] flex items-center gap-1.5"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-white hover:text-cyan-300 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden bg-black/80 backdrop-blur-2xl transition-all duration-300 flex flex-col justify-center px-6 ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-4 text-center">
          <div className="w-12 h-12 mx-auto mb-2 rounded-2xl bg-cyan-500/10 border border-cyan-400/40 flex items-center justify-center">
            <Terminal className="w-6 h-6 text-cyan-400" />
          </div>

          <p className="font-mono text-xs uppercase tracking-widest text-cyan-400 mb-4">
            Navigation Menu
          </p>

          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="font-display text-2xl font-semibold text-white/80 hover:text-cyan-300 transition-colors py-2"
            >
              {item.label}
            </a>
          ))}

          <div className="pt-6 border-t border-white/10 mt-4 flex flex-col gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="py-3 px-6 rounded-xl bg-cyan-400 text-black font-semibold text-sm shadow-[0_0_20px_rgba(0,240,255,0.4)]"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';

const Footer = () => {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050505] pt-12 pb-16 overflow-hidden">
      {/* Subtle animated gradient line above footer */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent mb-12 shadow-[0_0_15px_#00f0ff]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/[0.06]">
          
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-xl bg-white/[0.05] border border-cyan-400/30 flex items-center justify-center font-display font-extrabold text-xs text-cyan-300">
                VS
              </div>
              <span className="font-display font-bold text-lg text-white">
                {personalInfo.name}
              </span>
            </div>
            <p className="font-mono text-xs text-white/50">
              {personalInfo.primaryTitle}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 font-mono text-xs text-white/60">
            {['home', 'about', 'skills', 'projects', 'journey', 'contact'].map((sec) => (
              <a
                key={sec}
                href={`#${sec}`}
                onClick={(e) => scrollToSection(e, sec)}
                className="hover:text-cyan-300 transition-colors uppercase tracking-wider"
              >
                {sec}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-cyan-400/40 text-white/70 hover:text-cyan-300 transition-all"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-cyan-400/40 text-white/70 hover:text-cyan-300 transition-all"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-cyan-400/40 text-white/70 hover:text-cyan-300 transition-all"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom Rights Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-white/40 gap-4">
          <p>© 2026 Vishesh Singh. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-[11px]">
            Designed & engineered with <span className="text-cyan-400">React</span>, <span className="text-cyan-400">Three.js</span> & <span className="text-cyan-400">Tailwind</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

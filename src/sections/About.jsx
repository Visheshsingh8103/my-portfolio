import React from 'react';
import { Terminal, BookOpen, Sparkles, Layers, Cpu, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            01 // PROFILE
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            ABOUT <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">ME</span>
          </h2>
          <p className="font-mono text-xs sm:text-sm text-white/40 mt-2 max-w-xl">
            Merging computer science discipline with high-craft digital execution.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Narrative Glass Card */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-8 sm:p-10 border border-white/10 relative overflow-hidden flex flex-col justify-between group">
            {/* Ambient interior glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/[0.08] mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-cyan-400">
                    <Terminal className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-white">
                      Vishesh Singh
                    </h3>
                    <p className="font-mono text-xs text-cyan-400">
                      {personalInfo.profile}
                    </p>
                  </div>
                </div>

                <span className="font-mono text-[11px] text-white/40 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06]">
                  EST. 2026
                </span>
              </div>

              {/* Bio Paragraphs */}
              <div className="space-y-4 text-white/70 text-sm sm:text-base leading-relaxed">
                {personalInfo.aboutText.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Code Philosophy Box */}
              <div className="mt-8 p-4 rounded-2xl bg-black/50 border border-white/[0.06] font-mono text-xs text-white/80">
                <div className="text-white/40 mb-1">// engineering core principles</div>
                <div className="text-cyan-300">
                  <span className="text-purple-400">const</span> mindset = &#91;
                  <span className="text-emerald-300">"Scalable Architecture"</span>, 
                  <span className="text-emerald-300">"Pixel Precision"</span>, 
                  <span className="text-emerald-300">"Algorithmic Rigor"</span>
                  &#93;;
                </div>
              </div>
            </div>

            {/* Bottom status bar */}
            <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-xs text-white/60">
                  Actively building & contributing
                </span>
              </div>

              <a
                href="#contact"
                className="font-mono text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1 group/link"
              >
                <span>Initiate collaboration</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Interests & Core Capabilities */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Card: Current Focus */}
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 relative overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-400/30 flex items-center justify-center text-purple-400">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-base text-white">Current Academic Focus</h4>
                  <p className="font-mono text-xs text-white/40">B.Tech Computer Science</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-white/60 leading-relaxed mb-4">
                Deepening mastery across full-stack JavaScript frameworks, backend microservices in Node.js, and object-oriented systems engineering with Java.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/[0.06] font-mono text-xs text-white/70">
                <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <span className="text-cyan-400 block text-[10px] uppercase">Primary</span>
                  Full Stack
                </div>
                <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <span className="text-purple-400 block text-[10px] uppercase">Foundation</span>
                  Java & DSA
                </div>
              </div>
            </div>

            {/* Card: Key Interests & Passions */}
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 flex-1">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h4 className="font-display font-bold text-base text-white">Core Interests & Domains</h4>
              </div>

              <div className="flex flex-wrap gap-2">
                {personalInfo.interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] hover:border-cyan-400/40 text-xs text-white/80 hover:text-cyan-300 font-medium transition-all duration-200 cursor-default"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;

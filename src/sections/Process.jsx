import React from 'react';
import { processSteps } from '../data/portfolioData';

const Process = () => {
  return (
    <section id="process" className="relative py-28 overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            07 // METHODOLOGY
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            DEVELOPMENT <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">PROCESS</span>
          </h2>
          <p className="font-mono text-xs sm:text-sm text-white/40 mt-2 max-w-xl">
            A methodical six-phase approach transforming complex technical requirements into refined software.
          </p>
        </div>

        {/* Process Steps Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {processSteps.map((step, idx) => (
            <div
              key={step.step}
              data-cursor="STEP"
              className="glass-panel glass-panel-hover rounded-3xl p-8 border border-white/10 flex flex-col justify-between group transition-all duration-300 relative overflow-hidden"
            >
              {/* Top Bar with Number & Step indicator */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono font-bold text-xs text-cyan-400 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20">
                    STAGE {step.step}
                  </span>
                  <span className="font-display font-black text-2xl text-white/20 group-hover:text-cyan-400/60 transition-colors">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-white group-hover:text-cyan-300 transition-colors mb-1">
                  {step.title}
                </h3>
                <p className="font-mono text-xs text-white/40 mb-4">
                  {step.subtitle}
                </p>

                <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Step progression line at bottom of each card */}
              <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <span className="font-mono text-[10px] text-white/30 uppercase">
                  Phase {idx + 1} of 6
                </span>
                <span className="w-2 h-2 rounded-full bg-cyan-400/50 group-hover:bg-cyan-400 group-hover:scale-125 transition-all" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Process;

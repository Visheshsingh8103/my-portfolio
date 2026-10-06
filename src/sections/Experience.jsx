import React from 'react';
import { GraduationCap, Award, Calendar, CheckCircle2, Trophy, BookOpen, Rocket } from 'lucide-react';
import { journeyTimeline, educationData, achievementsData } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="journey" className="relative py-28 overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            04 // PATHWAY
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            MY <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">JOURNEY</span>
          </h2>
          <p className="font-mono text-xs sm:text-sm text-white/40 mt-2 max-w-xl">
            Academic milestones, technical development, and persistent problem solving.
          </p>
        </div>

        {/* ================= EDUCATION HERO CARD ================= */}
        <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-white/10 mb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-4 flex flex-col items-start">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 mb-4 shadow-[0_0_20px_rgba(0,240,255,0.2)]">
                <GraduationCap className="w-7 h-7" />
              </div>

              <span className="font-mono text-xs uppercase text-cyan-400 tracking-wider mb-1">
                CURRENT ACADEMIC STATUS
              </span>
              <h3 className="font-display font-bold text-2xl text-white mb-2">
                {educationData.degree}
              </h3>
              <p className="text-sm font-semibold text-white/80 mb-1">
                {educationData.branch}
              </p>
              <div className="flex items-center gap-2 font-mono text-xs text-white/40 mt-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>Graduation ~ {educationData.expectedGraduation}</span>
              </div>
            </div>

            <div className="lg:col-span-8 border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-8">
              <h4 className="font-mono text-xs uppercase tracking-wider text-white/40 mb-3">
                Key Academic Specializations & Focus
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                {educationData.focusAreas.map((area) => (
                  <div
                    key={area}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.02] border border-white/[0.05] text-xs text-white/70"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 text-[11px] font-mono text-cyan-300/80">
                {(educationData.academicHighlights || []).map((hl) => (
                  <span key={hl} className="px-2.5 py-1 rounded-lg bg-cyan-500/5 border border-cyan-500/20">
                    ⚡ {hl}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* ================= VERTICAL TIMELINE ================= */}
        <div className="relative max-w-4xl mx-auto mb-24">
          
          {/* Animated Central Glowing Spine Line */}
          <div className="absolute top-0 bottom-0 left-4 sm:left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500/30 shadow-[0_0_10px_#00f0ff]" />

          <div className="space-y-12">
            {journeyTimeline.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.title}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Node Beacon */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#050505] border-2 border-cyan-400 flex items-center justify-center z-10 shadow-[0_0_15px_#00f0ff]">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  </div>

                  {/* Spacer for other half */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Content Card */}
                  <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-8 w-full">
                    <div className="glass-panel glass-panel-hover rounded-2xl p-6 border border-white/10 relative">
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/10 font-mono text-[10px] uppercase text-cyan-300">
                          {item.type}
                        </span>
                        <span className="font-mono text-xs text-white/40">
                          {item.year}
                        </span>
                      </div>

                      <h4 className="font-display font-bold text-lg text-white mb-1">
                        {item.title}
                      </h4>
                      <p className="font-mono text-xs text-cyan-400/80 mb-3">
                        {item.institution}
                      </p>

                      <p className="text-xs sm:text-sm text-white/60 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Highlights */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]">
                        {item.highlights.map((h) => (
                          <span
                            key={h}
                            className="px-2 py-0.5 rounded bg-white/[0.03] text-[10px] font-mono text-white/50"
                          >
                            #{h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= KEY MILESTONES & ACHIEVEMENTS ================= */}
        <div>
          <div className="text-center mb-10">
            <h3 className="font-display font-bold text-2xl text-white">
              Milestones & Focus Areas
            </h3>
            <p className="font-mono text-xs text-white/40 mt-1">
              Key academic and technical milestones across projects and computer science fundamentals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {achievementsData.map((ach) => (
              <div
                key={ach.id}
                className="glass-panel glass-panel-hover rounded-2xl p-6 border border-white/10 flex flex-col justify-between group transition-colors text-left"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-cyan-400 px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-400/20">
                      {ach.tag}
                    </span>
                  </div>
                  <h4 className="font-display font-bold text-base text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {ach.title}
                  </h4>
                  <p className="text-xs text-white/60 leading-relaxed">
                    {ach.detail}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/[0.06] font-mono text-[11px] text-white/40">
                  {ach.category}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;

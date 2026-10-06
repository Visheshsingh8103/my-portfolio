import React, { useState } from 'react';
import { 
  Code, Server, Database, Terminal, Cpu, Sparkles, 
  Layers, GitBranch, Box, Zap, Layout, Palette, FileCode,
  Coffee, Binary, HardDrive, Send
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import SkillsVisualization from './SkillsVisualization';

// Icon Map helper
const iconMap = {
  React: Layers,
  FileCode: FileCode,
  Palette: Palette,
  Layout: Layout,
  Paintbrush: Palette,
  Server: Server,
  Cpu: Cpu,
  Network: GitBranch,
  Coffee: Coffee,
  Binary: Binary,
  Terminal: Terminal,
  Database: Database,
  HardDrive: HardDrive,
  GitBranch: GitBranch,
  Github: GitBranch,
  Code: Code,
  Send: Send,
  Box: Box,
  Zap: Zap,
  Sparkles: Sparkles
};

const categories = [
  { id: 'all', label: 'All Tech' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'programming', label: 'Programming' },
  { id: 'database', label: 'Database' },
  { id: 'tools', label: 'Tools' },
  { id: 'other', label: 'Other & AI' }
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  // Flatten or filter skills
  const getFilteredSkills = () => {
    if (activeCategory === 'all') {
      return Object.entries(skillsData).flatMap(([cat, items]) => 
        items.map(item => ({ ...item, category: cat }))
      );
    }
    return (skillsData[activeCategory] || []).map(item => ({ ...item, category: activeCategory }));
  };

  const filtered = getFilteredSkills();

  return (
    <section id="skills" className="relative py-28 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            02 // CAPABILITIES
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            TECH <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">STACK</span>
          </h2>
          <p className="font-mono text-xs sm:text-sm text-white/40 mt-2 max-w-xl">
            A battle-tested repertoire of modern tools, languages, and frameworks.
          </p>
        </div>

        {/* Futuristic Interactive Skills Visualization */}
        <SkillsVisualization />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 my-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              data-cursor="FILTER"
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-cyan-400 text-black font-semibold shadow-[0_0_20px_rgba(0,240,255,0.4)]'
                  : 'bg-white/[0.03] text-white/60 hover:text-white hover:bg-white/[0.06] border border-white/[0.06]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((skill) => {
            const IconComponent = iconMap[skill.icon] || Code;
            return (
              <div
                key={skill.name}
                data-cursor="TECH"
                className="interactive-card glass-panel glass-panel-hover rounded-2xl p-6 border border-white/[0.07] flex flex-col justify-between group transition-all duration-300"
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-cyan-400 group-hover:text-cyan-300 group-hover:border-cyan-400/40 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.25)] transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <span className="font-mono text-[10px] uppercase tracking-wider text-white/30 px-2 py-0.5 rounded-full bg-white/[0.02] border border-white/[0.04]">
                      {skill.category}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-white group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </h3>

                  <p className="text-xs text-white/50 leading-relaxed mt-2 mb-4">
                    {skill.description}
                  </p>
                </div>

                {/* Skill Badge */}
                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between font-mono text-[11px]">
                  <span className="text-white/40">Category: {skill.category}</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 font-semibold">
                    {skill.badge}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;

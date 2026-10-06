import React, { useState } from 'react';
import { ExternalLink, ArrowUpRight, Sparkles, Layers, Activity, Code2 } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from '../components/ProjectModal';
import GithubIcon from '../components/GithubIcon';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="relative py-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            03 // SELECTED WORK
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            FEATURED <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">PROJECTS</span>
          </h2>
          <p className="font-mono text-xs sm:text-sm text-white/40 mt-2 max-w-xl">
            A curated showcase of applications, algorithmic systems, and engineering experiments.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {projectsData.map((project, idx) => (
            <div
              key={project.id}
              data-cursor="VIEW"
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-3xl glass-panel glass-panel-hover p-6 sm:p-8 border border-white/10 flex flex-col justify-between cursor-pointer transition-all duration-500 hover:border-cyan-400/40"
            >
              {/* Card Header & Holographic Mockup Window */}
              <div>
                <div className="relative w-full h-52 sm:h-60 rounded-2xl bg-gradient-to-br from-[#12121c] via-[#0d0d12] to-[#08080c] border border-white/10 overflow-hidden mb-6 flex flex-col justify-between p-4 group-hover:border-cyan-400/30 transition-colors">
                  
                  {/* Subtle grid in mockup */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
                  
                  {/* Accent Glow Blob */}
                  <div className={`absolute top-0 right-0 w-44 h-44 bg-gradient-to-br ${project.accent} opacity-15 blur-3xl pointer-events-none group-hover:opacity-30 transition-opacity`} />

                  {/* Window Controls */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                      <span className="font-mono text-[10px] text-white/30 ml-2">{project.id}.app</span>
                    </div>

                    <span className="px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[10px] font-mono text-cyan-300">
                      {project.badge}
                    </span>
                  </div>

                  {/* Visual Centerpiece Icon/Graphic */}
                  <div className="relative z-10 flex flex-col items-center justify-center py-4">
                    <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all duration-300">
                      {idx === 0 ? (
                        <Activity className="w-8 h-8 text-cyan-400" />
                      ) : idx === 1 ? (
                        <Code2 className="w-8 h-8 text-amber-400" />
                      ) : (
                        <Sparkles className="w-8 h-8 text-blue-400" />
                      )}
                    </div>
                    <span className="font-mono text-[11px] text-white/50 mt-2">
                      {project.category}
                    </span>
                  </div>

                  {/* Mockup Status footer */}
                  <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-white/40 pt-2 border-t border-white/[0.06]">
                    <span>DEPLOYED // STABLE</span>
                    <span className="text-cyan-400 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      Inspect Specs &rarr;
                    </span>
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="font-display font-bold text-2xl text-white group-hover:text-cyan-300 transition-colors mb-3 flex items-center justify-between">
                  <span>{project.title}</span>
                  <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-cyan-400 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </h3>

                {/* Description */}
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Technologies & Action Footer */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06] text-[11px] font-mono text-white/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    data-cursor="CODE"
                    className="flex-1 py-2.5 px-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-cyan-400/40 text-white font-medium text-xs flex items-center justify-center gap-2 transition-all"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Source Code</span>
                  </a>

                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    data-cursor="DEMO"
                    className="flex-1 py-2.5 px-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-semibold text-xs flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;

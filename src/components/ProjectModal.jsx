import React from 'react';
import { X, ExternalLink, CheckCircle2, Cpu, Activity } from 'lucide-react';
import GithubIcon from './GithubIcon';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-[fadeIn_0.2s_ease-out]">
      <div
        className="relative w-full max-w-2xl bg-[#0b0b10] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.9)] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-white/[0.05] hover:bg-white/10 text-white/60 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Badge */}
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-xs uppercase text-cyan-400 tracking-wider">
            {project.category}
          </span>
          <span className="text-white/20">•</span>
          <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-400/20 font-mono text-[10px] text-cyan-300">
            {project.badge}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-4">
          {project.title}
        </h3>

        {/* Full narrative */}
        <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6">
          {project.longDescription || project.description}
        </p>

        {/* Key Metrics / Stats */}
        {project.stats && (
          <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] mb-6">
            {Object.entries(project.stats).map(([k, v]) => (
              <div key={k} className="text-center">
                <div className="font-mono text-[10px] uppercase text-white/40 tracking-wider">
                  {k}
                </div>
                <div className="font-display font-bold text-sm sm:text-base text-cyan-300 mt-0.5">
                  {v}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Technologies List */}
        <div className="mb-8">
          <h4 className="font-mono text-xs uppercase tracking-wider text-white/40 mb-3">
            Integrated Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-white/90"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/[0.08]">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 px-5 rounded-xl bg-white/[0.06] hover:bg-white/10 border border-white/10 hover:border-cyan-400/40 text-white font-medium text-xs sm:text-sm flex items-center justify-center gap-2 transition-all"
          >
            <GithubIcon className="w-4 h-4 text-white" />
            <span>View Source on GitHub</span>
          </a>

          <a
            href={project.liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 px-5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Launch Live Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;

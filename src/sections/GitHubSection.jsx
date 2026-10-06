import React from 'react';
import { GitBranch, ExternalLink, Code2, Terminal } from 'lucide-react';
import { githubProfileData, personalInfo } from '../data/portfolioData';
import GithubIcon from '../components/GithubIcon';

const GitHubSection = () => {
  return (
    <section id="github" className="relative py-28 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-emerald-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            05 // OPEN SOURCE
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            GITHUB <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">ACTIVITY</span>
          </h2>
          <p className="font-mono text-xs sm:text-sm text-white/40 mt-2 max-w-xl">
            Public repositories, version-controlled architectures, and ongoing projects.
          </p>
        </div>

        {/* GitHub Profile Banner */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 mb-10">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white shadow-lg">
                <GithubIcon className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-white flex items-center gap-2">
                  <span>@{githubProfileData.username}</span>
                </h3>
                <p className="font-mono text-xs text-cyan-400 mt-0.5">
                  Full Stack Web Developer &bull; CSE Student
                </p>
              </div>
            </div>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="GITHUB"
              className="px-5 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-semibold text-xs font-mono flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] group"
            >
              <span>VIEW GITHUB PROFILE</span>
              <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Real Language Footprint Overview */}
          <div className="mt-8 pt-6 border-t border-white/[0.08]">
            <div className="flex justify-between items-center text-xs font-mono text-white/50 mb-3">
              <span>Primary Tech Stack Languages</span>
              <span>Java &bull; Python &bull; JavaScript</span>
            </div>
            <div className="h-2 w-full rounded-full overflow-hidden flex bg-white/[0.05]">
              <div className="h-full bg-amber-500 w-[40%]" title="Java" />
              <div className="h-full bg-cyan-400 w-[35%]" title="JavaScript" />
              <div className="h-full bg-blue-600 w-[20%]" title="Python" />
              <div className="h-full bg-purple-500 w-[5%]" title="HTML/CSS" />
            </div>

            <div className="flex flex-wrap items-center gap-5 mt-4 text-xs font-mono text-white/70">
              <span className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" /> Java (DSA & OOP)
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" /> JavaScript & React (Full Stack Web)
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600" /> Python (AI & Machine Learning)
              </span>
            </div>
          </div>
        </div>

        {/* Public Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {githubProfileData.pinnedRepositories.map((repo) => (
            <a
              key={repo.name}
              href={`${personalInfo.github}/${repo.name}`}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="REPO"
              className="glass-panel glass-panel-hover rounded-2xl p-6 border border-white/10 flex flex-col justify-between group transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <GitBranch className="w-4 h-4 text-cyan-400" />
                    <span className="font-mono font-bold text-sm text-white group-hover:text-cyan-300 transition-colors">
                      {repo.name}
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-white/[0.04] text-[10px] font-mono text-white/40">
                    Public
                  </span>
                </div>

                <p className="text-xs text-white/60 leading-relaxed mb-4">
                  {repo.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-white/[0.06] text-xs font-mono text-white/60">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: repo.languageColor }}
                  />
                  <span>{repo.language}</span>
                </div>

                <span className="text-cyan-400 text-[11px] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  Explore &rarr;
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GitHubSection;

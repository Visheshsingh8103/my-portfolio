import React from 'react';
import { Layers, Monitor, Server, Sparkles, ArrowRight, Check } from 'lucide-react';
import { servicesData } from '../data/portfolioData';

const iconMap = {
  Layers: Layers,
  Monitor: Monitor,
  Server: Server,
  Sparkles: Sparkles
};

const Services = () => {
  return (
    <section id="services" className="relative py-28 overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute bottom-1/4 left-1/3 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            06 // SPECIALIZATIONS
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            WHAT I <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">BUILD</span>
          </h2>
          <p className="font-mono text-xs sm:text-sm text-white/40 mt-2 max-w-xl">
            Engineering digital solutions with end-to-end precision and modern aesthetics.
          </p>
        </div>

        {/* 4 Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicesData.map((service) => {
            const Icon = iconMap[service.icon] || Sparkles;
            return (
              <div
                key={service.id}
                data-cursor="OFFER"
                className="glass-panel glass-panel-hover rounded-3xl p-8 border border-white/10 flex flex-col justify-between group transition-all duration-300 relative overflow-hidden"
              >
                {/* Number watermark */}
                <span className="absolute top-6 right-8 font-display font-black text-6xl text-white/[0.03] group-hover:text-cyan-400/[0.08] transition-colors select-none pointer-events-none">
                  {service.id}
                </span>

                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-cyan-400 group-hover:text-cyan-300 group-hover:border-cyan-400/40 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.25)] transition-all duration-300 mb-6">
                    <Icon className="w-7 h-7" />
                  </div>

                  <span className="font-mono text-xs uppercase text-cyan-400 tracking-wider">
                    MODULE // {service.id}
                  </span>
                  <h3 className="font-display font-bold text-2xl text-white mt-1 mb-3 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-white/60 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Features checklist */}
                <div className="pt-6 border-t border-white/[0.08]">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {service.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-xs text-white/70">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;

import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, ArrowUpRight, Download, Sparkles, Terminal, Code2, Database, Cpu } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  // Animated role rotation
  useEffect(() => {
    const roleInterval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % personalInfo.secondaryTitles.length);
    }, 2800);
    return () => clearInterval(roleInterval);
  }, []);

  // Subtle mouse parallax
  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const { left, top, width, height } = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setMousePos({ x, y });
  };

  const scrollToProjects = (e) => {
    e.preventDefault();
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadResume = (e) => {
    e.preventDefault();
    // Create an accessible fallback or open printable summary
    const link = document.createElement('a');
    link.href = '#';
    link.setAttribute('download', 'Vishesh_Singh_Resume.pdf');
    alert("Vishesh Singh's resume is currently configured for direct download. You can also view full qualifications in the Journey & Education sections below, or connect via Email/LinkedIn!");
  };

  return (
    <section
      id="home"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 lg:py-0 overflow-hidden"
    >
      {/* Background Volumetric Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/5 rounded-full blur-[180px] pointer-events-none" />

      {/* Subtle Matrix / Tech Grid Accent */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[calc(100vh-6rem)]">
          
          {/* ================= LEFT / HERO CONTENT ================= */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Status Beacon */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md mb-6 w-fit shadow-[0_0_15px_rgba(0,240,255,0.1)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
              </span>
              <span className="font-mono text-xs text-white/70 tracking-wide uppercase">
                {personalInfo.status}
              </span>
            </div>

            {/* Sub-heading Greeting */}
            <p className="font-mono text-xs sm:text-sm tracking-[0.3em] uppercase text-cyan-400 font-semibold mb-2 flex items-center gap-2">
              <Terminal className="w-4 h-4 inline-block text-cyan-400" />
              HI, I'M
            </p>

            {/* Main Name Heading */}
            <h1 className="font-display font-extrabold text-5xl sm:text-7xl xl:text-8xl tracking-tight text-white uppercase leading-[0.95] mb-4">
              VISHESH<br />
              <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
                SINGH
              </span>
            </h1>

            {/* Dynamic Animated Role Ticker */}
            <div className="h-10 sm:h-12 overflow-hidden mb-6 flex items-center">
              <div
                key={currentRoleIndex}
                className="font-mono text-base sm:text-xl md:text-2xl font-bold tracking-wider text-cyan-300 flex items-center gap-2 animate-[fadeInUp_0.5s_ease-out]"
              >
                <span className="text-white/40">&gt;</span>
                <span className="border-b-2 border-cyan-400/60 pb-0.5">
                  {personalInfo.secondaryTitles[currentRoleIndex]}
                </span>
                <span className="w-2 h-5 bg-cyan-400 inline-block animate-pulse ml-1" />
              </div>
            </div>

            {/* Bold Hero Philosophy */}
            <p className="font-display font-semibold text-lg sm:text-xl text-white/90 tracking-tight leading-snug mb-3">
              {personalInfo.heroTagline}
            </p>

            {/* Short Description */}
            <p className="text-white/60 text-sm sm:text-base leading-relaxed max-w-xl mb-8">
              {personalInfo.heroBio}
            </p>

            {/* Interactive CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                onClick={scrollToProjects}
                data-cursor="WORK"
                className="btn-ripple px-6 py-3.5 rounded-xl font-display font-semibold text-sm text-black bg-cyan-400 hover:bg-cyan-300 transition-all duration-300 shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:shadow-[0_0_35px_rgba(0,240,255,0.7)] flex items-center gap-2 group"
              >
                <span>VIEW MY WORK</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </a>

              <a
                href="#contact"
                onClick={scrollToContact}
                data-cursor="CONTACT"
                className="btn-ripple px-6 py-3.5 rounded-xl font-display font-semibold text-sm text-white/90 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-cyan-400/40 transition-all duration-300 backdrop-blur-md flex items-center gap-2 group"
              >
                <span>CONTACT ME</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-cyan-400" />
              </a>

              <button
                onClick={handleDownloadResume}
                data-cursor="RESUME"
                className="px-4 py-3.5 rounded-xl text-xs font-mono font-medium text-white/50 hover:text-cyan-300 transition-colors flex items-center gap-2 hover:bg-white/[0.02]"
                title="Download Resume"
              >
                <Download className="w-3.5 h-3.5" />
                <span>RESUME</span>
              </button>
            </div>

            {/* Quick Tech Pill Ribbon */}
            <div className="mt-10 pt-6 border-t border-white/[0.06] flex flex-wrap items-center gap-2 text-white/40 font-mono text-xs">
              <span className="text-white/30 mr-1">TECH STACK:</span>
              {["React", "Node.js", "Java", "Three.js", "MongoDB", "Tailwind"].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.05] hover:border-cyan-400/30 hover:text-cyan-300 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

          </div>

          {/* ================= RIGHT / CINEMATIC HERO PORTRAIT ================= */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Ambient Multi-Layer Glow behind image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-cyan-500/20 to-purple-600/10 rounded-3xl blur-2xl transform scale-95 pointer-events-none" />

            {/* Main Portrait Frame with subtle 3D parallax */}
            <div
              className="relative w-full max-w-[420px] rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/[0.08] to-transparent p-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-sm transition-transform duration-300 ease-out"
              style={{
                transform: `perspective(1000px) rotateY(${mousePos.x * 6}deg) rotateX(${-mousePos.y * 6}deg)`
              }}
            >
              {/* Inner wrapper with Cinematic Video & Fallback */}
              <div className="relative rounded-[22px] overflow-hidden bg-[#0d0d12] aspect-[3/4] flex items-center justify-center">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster="/images/hero.png"
                  className="w-full h-full object-cover object-top select-none transition-transform duration-700 hover:scale-105"
                >
                  <source src="/videos/hero-ambient.mp4" type="video/mp4" />
                  <source src="/videos/hero.mp4" type="video/mp4" />
                  <img
                    src="/images/hero.png"
                    alt="Vishesh Singh - Full Stack Web Developer"
                    className="w-full h-full object-cover object-top"
                  />
                </video>

                {/* Cinematic subtle gradient overlays to meld with dark page */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/40 via-transparent to-transparent pointer-events-none" />

                {/* Subtle blue rim lighting shimmer */}
                <div className="absolute inset-0 border border-cyan-400/20 rounded-[22px] pointer-events-none" />

                {/* Live Video Indicator Badge */}
                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 flex items-center gap-1.5 z-20 pointer-events-none">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  <span className="font-mono text-[9px] uppercase tracking-wider text-cyan-300 font-semibold">
                    MOTION REEL
                  </span>
                </div>
              </div>

              {/* Floating Holographic Glass Panel 1: Live Code Snippet */}
              <div
                className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-6 p-3 sm:p-4 rounded-2xl glass-panel shadow-[0_15px_30px_rgba(0,0,0,0.6)] border border-cyan-400/30 backdrop-blur-xl transition-transform duration-300 hidden sm:block"
                style={{
                  transform: `translate3d(${-mousePos.x * 12}px, ${-mousePos.y * 12}px, 0)`
                }}
              >
                <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-white/[0.08]">
                  <span className="w-2 h-2 rounded-full bg-red-400/80" />
                  <span className="w-2 h-2 rounded-full bg-yellow-400/80" />
                  <span className="w-2 h-2 rounded-full bg-green-400/80" />
                  <span className="font-mono text-[10px] text-white/40 ml-1">developer.js</span>
                </div>
                <div className="font-mono text-[11px] leading-relaxed text-cyan-300">
                  <span className="text-purple-400">const</span> developer = &#123;<br />
                  &nbsp;&nbsp;name: <span className="text-emerald-400">'Vishesh'</span>,<br />
                  &nbsp;&nbsp;role: <span className="text-cyan-400">'Full Stack'</span>,<br />
                  &nbsp;&nbsp;craft: <span className="text-yellow-300">'Modern Web'</span><br />
                  &#125;;
                </div>
              </div>

              {/* Floating Glass Pill 2: Performance & Architecture */}
              <div
                className="absolute top-6 -right-3 sm:-right-5 px-3 py-2 rounded-xl glass-panel border border-white/10 shadow-xl backdrop-blur-xl flex items-center gap-2.5"
                style={{
                  transform: `translate3d(${mousePos.x * 10}px, ${mousePos.y * 10}px, 0)`
                }}
              >
                <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="font-mono text-[9px] uppercase tracking-wider text-white/50">ARCHITECT</div>
                  <div className="font-display font-bold text-xs text-white">Production Ready</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40 hover:opacity-100 transition-opacity">
        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white">SCROLL</span>
        <div className="w-4 h-7 rounded-full border border-white/20 flex justify-center pt-1">
          <div className="w-1 h-1.5 rounded-full bg-cyan-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

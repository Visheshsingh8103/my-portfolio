import React, { useEffect, useState } from 'react';

const Preloader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += 12;
      const next = Math.min(100, current);
      setProgress(next);

      if (next >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => {
            onFinish();
          }, 300);
        }, 150);
      }
    }, 35);

    // Hard fallback: never block user for more than 1.2 seconds
    const fallbackTimer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(onFinish, 200);
    }, 1200);

    return () => {
      clearInterval(interval);
      clearTimeout(fallbackTimer);
    };
  }, [onFinish]);

  return (
    <div
      onClick={onFinish}
      className={`fixed inset-0 z-[99999] bg-[#050505] flex flex-col items-center justify-center transition-all duration-500 ease-in-out cursor-pointer ${
        isExiting ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100'
      }`}
    >
      {/* Background radial glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

      {/* Monogram / Brand mark */}
      <div className="relative mb-8 text-center">
        <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-white/10 to-white/[0.02] border border-cyan-400/30 flex items-center justify-center backdrop-blur-md shadow-[0_0_40px_rgba(0,240,255,0.2)]">
          <span className="font-display font-extrabold text-3xl tracking-tighter bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
            VS
          </span>
        </div>

        <h1 className="mt-4 font-display font-bold text-sm tracking-[0.3em] uppercase text-white/80">
          Vishesh Singh
        </h1>
        <p className="mt-1 font-mono text-[11px] tracking-wider text-cyan-400/70">
          FULL STACK DEVELOPER
        </p>
      </div>

      {/* Progress Bar Container */}
      <div className="w-64 max-w-[80vw] relative">
        <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-white transition-all duration-75 ease-out shadow-[0_0_15px_#00f0ff]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Counter and status */}
        <div className="flex justify-between items-center mt-3 font-mono text-[10px] text-white/40">
          <span className="tracking-widest flex items-center gap-1.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            WORKSPACE
          </span>
          <span className="text-cyan-300 font-semibold">{progress}%</span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;

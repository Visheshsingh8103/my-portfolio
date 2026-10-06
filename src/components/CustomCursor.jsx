import React, { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
  const [enabled, setEnabled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorText, setCursorText] = useState('');

  const dotRef = useRef(null);
  const ringRef = useRef(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }
    setEnabled(true);

    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      // Update dot immediately
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      // Check hovered element
      const target = e.target;
      const interactiveEl = target.closest('button, a, input, textarea, [data-cursor], .interactive-card');
      if (interactiveEl) {
        setIsHovered(true);
        const customLabel = interactiveEl.getAttribute('data-cursor');
        setCursorText(customLabel || '');
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    // Smooth trailing ring loop using RAF
    let animationFrameId;
    const updateRing = () => {
      // Lerp ring towards mouse
      const ease = 0.18;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * ease;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * ease;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(updateRing);
    };

    animationFrameId = requestAnimationFrame(updateRing);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      {/* Central Glowing Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 rounded-full bg-cyan-400 pointer-events-none z-[9999] transition-transform duration-75 shadow-[0_0_12px_#00f0ff]"
      />

      {/* Trailing Outer Ring / Pill */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9998] transition-[width,height,background-color,border-color,margin,opacity] duration-200 ease-out flex items-center justify-center -translate-x-1/2 -translate-y-1/2 ${
          isHovered
            ? 'w-14 h-14 -ml-7 -mt-7 bg-cyan-500/10 border border-cyan-400/60 backdrop-blur-[1px] shadow-[0_0_25px_rgba(0,240,255,0.35)]'
            : isClicking
            ? 'w-8 h-8 -ml-4 -mt-4 bg-white/20 border border-white/40'
            : 'w-9 h-9 -ml-[18px] -mt-[18px] border border-cyan-400/30'
        } rounded-full`}
      >
        {cursorText && (
          <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-cyan-300 select-none">
            {cursorText}
          </span>
        )}
      </div>
    </>
  );
};

export default CustomCursor;

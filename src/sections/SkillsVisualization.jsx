import React, { useState } from 'react';
import { skillsVisualizationNodes } from '../data/portfolioData';

const SkillsVisualization = () => {
  const [activeNode, setActiveNode] = useState(null);

  const centerNode = skillsVisualizationNodes.find((n) => n.id === 'center');
  const satellites = skillsVisualizationNodes.filter((n) => n.id !== 'center');

  return (
    <div className="relative w-full max-w-4xl mx-auto my-12 p-6 sm:p-10 rounded-3xl glass-panel border border-white/10 overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute inset-0 bg-radial-gradient-hero opacity-30 pointer-events-none" />

      {/* Header info */}
      <div className="text-center mb-8 relative z-10">
        <span className="font-mono text-xs uppercase tracking-widest text-cyan-400">
          SYSTEM ARCHITECTURE // INTERACTIVE NODES
        </span>
        <h3 className="font-display font-bold text-2xl text-white mt-1">
          Full Stack Ecosystem Map
        </h3>
        <p className="text-xs text-white/50 max-w-md mx-auto mt-1">
          Hover or tap any cluster to inspect connected technologies and integration flow.
        </p>
      </div>

      {/* Interactive SVG Diagram */}
      <div className="relative w-full aspect-[16/10] max-h-[500px] flex items-center justify-center">
        <svg
          viewBox="-250 -180 500 360"
          className="w-full h-full overflow-visible select-none"
        >
          <defs>
            {/* Glowing filter */}
            <filter id="glow-filter" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            {/* Gradients for connecting lines */}
            <linearGradient id="line-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#0066ff" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* Connection Lines from Center to Satellites */}
          {satellites.map((node) => {
            const isHighlighted = activeNode === node.id || activeNode === 'center';
            return (
              <g key={`link-${node.id}`}>
                {/* Background line */}
                <line
                  x1={0}
                  y1={0}
                  x2={node.x}
                  y2={node.y}
                  stroke={isHighlighted ? node.color : 'rgba(255, 255, 255, 0.12)'}
                  strokeWidth={isHighlighted ? 2.5 : 1}
                  strokeDasharray={isHighlighted ? 'none' : '4 4'}
                  className="transition-all duration-300"
                />

                {/* Animated traveling packet */}
                <circle r={isHighlighted ? 3 : 2} fill={node.color} opacity={0.8}>
                  <animateMotion
                    path={`M 0,0 L ${node.x},${node.y}`}
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            );
          })}

          {/* Center FULL STACK Node */}
          <g
            className="cursor-pointer group"
            onMouseEnter={() => setActiveNode('center')}
            onMouseLeave={() => setActiveNode(null)}
          >
            {/* Outer pulsating aura */}
            <circle
              cx={0}
              cy={0}
              r={46}
              fill="rgba(0, 240, 255, 0.08)"
              className="animate-pulse"
            />
            {/* Core Circle */}
            <circle
              cx={0}
              cy={0}
              r={38}
              fill="#09090f"
              stroke="#00f0ff"
              strokeWidth={2}
              filter="url(#glow-filter)"
              className="transition-transform duration-300 group-hover:scale-110"
            />
            <text
              x={0}
              y={-4}
              textAnchor="middle"
              className="fill-white font-display font-extrabold text-[11px] tracking-wider select-none pointer-events-none"
            >
              FULL
            </text>
            <text
              x={0}
              y={10}
              textAnchor="middle"
              className="fill-cyan-300 font-display font-extrabold text-[11px] tracking-wider select-none pointer-events-none"
            >
              STACK
            </text>
          </g>

          {/* Satellite Category Nodes */}
          {satellites.map((node) => {
            const isHovered = activeNode === node.id;
            return (
              <g
                key={node.id}
                transform={`translate(${node.x}, ${node.y})`}
                className="cursor-pointer group transition-all duration-300"
                onMouseEnter={() => setActiveNode(node.id)}
                onMouseLeave={() => setActiveNode(null)}
                onClick={() => setActiveNode(activeNode === node.id ? null : node.id)}
              >
                {/* Node Glow ring on hover */}
                {isHovered && (
                  <circle
                    cx={0}
                    cy={0}
                    r={node.radius + 6}
                    fill="none"
                    stroke={node.color}
                    strokeWidth={1.5}
                    opacity={0.6}
                    className="animate-ping"
                  />
                )}

                {/* Node Body */}
                <circle
                  cx={0}
                  cy={0}
                  r={node.radius}
                  fill="#0e0e14"
                  stroke={isHovered ? node.color : 'rgba(255, 255, 255, 0.15)'}
                  strokeWidth={isHovered ? 2 : 1}
                  className="transition-all duration-300 group-hover:scale-105"
                />

                {/* Node Label */}
                <text
                  cx={0}
                  cy={0}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="fill-white font-mono text-[10px] font-semibold select-none pointer-events-none"
                  style={{ fill: isHovered ? node.color : '#ffffff' }}
                >
                  {node.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Active Node Detail Card below */}
      <div className="mt-4 pt-4 border-t border-white/[0.08] min-h-[4rem] flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-white/40 uppercase">Selected Module:</span>
          <span className="font-display font-bold text-sm text-cyan-300">
            {activeNode ? satellites.find(s => s.id === activeNode)?.label || 'Full Stack Core' : 'Hover over any node'}
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {activeNode && satellites.find(s => s.id === activeNode)?.items?.map((item) => (
            <span
              key={item}
              className="px-2.5 py-1 rounded-md bg-white/[0.05] border border-cyan-400/30 text-white text-xs font-mono"
            >
              {item}
            </span>
          ))}
          {!activeNode && (
            <span className="text-xs text-white/30 font-mono">
              [ 6 Integrated Technology Clusters ]
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillsVisualization;

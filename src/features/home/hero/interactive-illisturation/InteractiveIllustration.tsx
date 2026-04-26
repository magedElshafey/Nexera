"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { useMouseParallax } from "../hooks/useMouseParallax";

type NodeProps = {
  x: number;
  y: number;
  emoji: string;
  label: string;
  primary?: boolean;
  delay?: number;
};

function Node({ x, y, emoji, label, primary, delay = 0 }: NodeProps) {
  const reduce = useReducedMotion();

  return (
    <g>
      {/* glow pulse */}
      <motion.circle
        cx={x}
        cy={y}
        r={primary ? 24 : 18}
        fill="currentColor"
        className={primary ? "text-accent" : "text-primary"}
        initial={{ opacity: 0.15 }}
        animate={
          reduce
            ? { opacity: 0.15 }
            : { opacity: [0.15, 0.35, 0.15], scale: [1, 1.2, 1] }
        }
        transition={{
          duration: 2,
          repeat: Infinity,
          delay,
          ease: "easeInOut",
        }}
      />

      {/* icon */}
      <text x={x} y={y + 5} textAnchor="middle" fontSize={primary ? 18 : 16}>
        {emoji}
      </text>

      {/* label (hover/focus) */}
      <g className="opacity-0 pointer-events-none group-hover:opacity-100 group-focus:opacity-100 transition">
        <rect
          x={x - 40}
          y={y - 42}
          rx={8}
          width={80}
          height={22}
          fill="var(--card)"
          stroke="var(--border)"
        />
        <text
          x={x}
          y={y - 27}
          textAnchor="middle"
          fontSize={10}
          fill="var(--foreground)"
        >
          {label}
        </text>
      </g>
    </g>
  );
}

export default function InteractiveIllustration() {
  const ref = useRef<HTMLDivElement>(null);
  useMouseParallax(ref);
  const reduce = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className="w-full max-w-md mx-auto perspective-[1200px]"
      style={
        reduce
          ? undefined
          : {
              transform:
                "rotateX(calc(var(--py) * -8deg)) rotateY(calc(var(--px) * 8deg))",
            }
      }
    >
      <svg viewBox="0 0 400 300" className="w-full">
        {/* gradients */}
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--primary)" />
            <stop offset="100%" stopColor="var(--accent)" />
          </linearGradient>
        </defs>

        {/* 🔗 lines */}
        <motion.path
          d="M80 150 L200 80"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.path
          d="M200 80 L320 150"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        />
        <motion.path
          d="M200 80 L200 220"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        {/* ✨ particles (3 مسارات) */}
        {!reduce && (
          <>
            <motion.circle r="3" fill="var(--primary)">
              <animateMotion
                dur="3s"
                repeatCount="indefinite"
                path="M80 150 L200 80"
              />
            </motion.circle>

            <motion.circle r="3" fill="var(--accent)">
              <animateMotion
                dur="3.5s"
                repeatCount="indefinite"
                path="M200 80 L320 150"
              />
            </motion.circle>

            <motion.circle r="3" fill="var(--primary)">
              <animateMotion
                dur="4s"
                repeatCount="indefinite"
                path="M200 80 L200 220"
              />
            </motion.circle>
          </>
        )}

        {/* 🛡️ Security */}
        <g className="group">
          <Node x={80} y={150} emoji="🛡️" label="Security" />
        </g>

        {/* 🧹 Cleaning */}
        <g className="group">
          <Node x={320} y={150} emoji="🧹" label="Cleaning" delay={0.2} />
        </g>

        {/* 🏗️ Maintenance */}
        <g className="group">
          <Node x={200} y={220} emoji="🏗️" label="Maintenance" delay={0.3} />
        </g>

        {/* ⚙️ Center */}
        <g className="group">
          <Node x={200} y={80} emoji="⚙️" label="Nexera System" primary />
        </g>
      </svg>
    </motion.div>
  );
}

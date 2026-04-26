"use client";

import { motion } from "framer-motion";
import { useId } from "react";

export default function NetworkLines({ lines }: { lines: number[][] }) {
  const gradientId = useId();
  return (
    <svg className="absolute inset-0 w-full h-full">
      <defs>
        <linearGradient id={gradientId}>
          <stop offset="0%" stopColor="var(--primary)">
            <animate
              attributeName="offset"
              values="0;1;0"
              dur="6s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="1" stopColor="var(--accent)">
            <animate
              attributeName="offset"
              values="1;0;1"
              dur="6s"
              repeatCount="indefinite"
            />
          </stop>
        </linearGradient>
      </defs>

      {lines.map(([x1, y1, x2, y2], i) => (
        <motion.line
          key={i}
          x1={`${x1}%`}
          y1={`${y1}%`}
          x2={`${x2}%`}
          y2={`${y2}%`}
          stroke={`url(#${gradientId})`}
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 1,
            delay: i * 0.2,
            ease: "easeOut",
          }}
        />
      ))}
    </svg>
  );
}

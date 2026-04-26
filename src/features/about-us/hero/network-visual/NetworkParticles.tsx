"use client";

import { motion } from "framer-motion";

export default function NetworkParticles({ lines }: { lines: number[][] }) {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none">
      {lines.map(([x1, y1, x2, y2], i) => (
        <motion.circle
          key={`p-${i}`}
          r="3"
          fill="var(--primary)"
          initial={{ cx: `${x1}%`, cy: `${y1}%` }}
          animate={{
            cx: [`${x1}%`, `${x2}%`],
            cy: [`${y1}%`, `${y2}%`],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </svg>
  );
}

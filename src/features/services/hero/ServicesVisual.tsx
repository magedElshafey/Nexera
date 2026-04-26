"use client";

import { motion } from "framer-motion";

const nodes = [
  { label: "Security", x: "20%", y: "30%" },
  { label: "Cleaning", x: "70%", y: "25%" },
  { label: "Maintenance", x: "30%", y: "70%" },
  { label: "HSE", x: "75%", y: "65%" },
];

export default function ServicesVisual() {
  return (
    <div className="relative w-full h-[320px] rounded-3xl border border-border bg-card overflow-hidden">
      {/* center */}
      <div className="absolute top-1/2 left-1/2 w-20 h-20 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-primary text-white flex items-center justify-center font-bold">
        NX
      </div>

      {/* nodes */}
      {nodes.map((n, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.2 }}
          className="absolute"
          style={{ top: n.y, left: n.x }}
        >
          <div className="px-3 py-2 rounded-lg bg-muted border border-border text-xs">
            {n.label}
          </div>
        </motion.div>
      ))}

      {/* animated lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {nodes.map((n, i) => (
          <motion.line
            key={i}
            x1="50%"
            y1="50%"
            x2={n.x}
            y2={n.y}
            stroke="url(#grad)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: i * 0.2 }}
          />
        ))}

        <defs>
          <linearGradient id="grad">
            <stop offset="0%" stopColor="var(--primary)" />
            <stop offset="100%" stopColor="var(--accent)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

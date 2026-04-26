"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import React from "react";
import { IconType } from "react-icons";

function NetworkNode({
  icon: Icon,
  label,
  x,
  y,
}: {
  icon: IconType;
  label: string;
  x: number;
  y: number;
}) {
  // 🔥 magnetic effect
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const springX = useSpring(mx, { stiffness: 120, damping: 10 });
  const springY = useSpring(my, { stiffness: 120, damping: 10 });

  return (
    <motion.div
      className="absolute flex flex-col items-center gap-2 group cursor-pointer"
      style={{
        top: `${y}%`,
        left: `${x}%`,
        translateX: "-50%",
        translateY: "-50%",
        x: springX,
        y: springY,
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const dx = e.clientX - rect.left - rect.width / 2;
        const dy = e.clientY - rect.top - rect.height / 2;

        mx.set(dx * 0.25);
        my.set(dy * 0.25);
      }}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      whileHover={{ scale: 1.15 }}
    >
      {/* glow */}
      <div className="absolute inset-0 rounded-xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition" />

      <div className="relative w-12 h-12 flex items-center justify-center rounded-xl bg-card border border-border shadow-md group-hover:border-primary transition">
        <Icon className="text-primary" />
      </div>

      <span className="text-xs text-muted-foreground">{label}</span>
    </motion.div>
  );
}
export default React.memo(NetworkNode);

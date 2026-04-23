"use client";

import { motion } from "framer-motion";

export default function ContactVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="relative rounded-3xl border border-border bg-card p-10 overflow-hidden"
    >
      {/* glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />

      {/* fake map grid */}
      <div className="relative z-10 grid grid-cols-6 gap-2 opacity-40">
        {Array.from({ length: 36 }).map((_, i) => (
          <div key={i} className="h-6 bg-border rounded" />
        ))}
      </div>
    </motion.div>
  );
}

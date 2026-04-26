/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion, useTransform } from "framer-motion";

export default function StorySlide({
  step,
  index,
  progress,
}: {
  step: { title: string; desc: string };
  index: number;
  progress: any;
}) {
  // 👇 show/hide based on scroll
  const opacity = useTransform(
    progress,
    [index - 0.5, index, index + 0.5],
    [0, 1, 0],
  );

  const y = useTransform(
    progress,
    [index - 0.5, index, index + 0.5],
    [40, 0, -40],
  );

  const scale = useTransform(
    progress,
    [index - 0.5, index, index + 0.5],
    [0.95, 1, 0.95],
  );

  return (
    <motion.div
      style={{ opacity, y, scale }}
      className="
        absolute w-full max-w-xl
        p-10 rounded-3xl border border-border bg-card
        text-center shadow-xl backdrop-blur-md
      "
    >
      {/* glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 hover:opacity-100 transition" />
      {/* number */}
      <div className="text-6xl font-bold text-primary/10">
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* title */}
      <h3 className="mt-4 text-2xl font-semibold">{step.title}</h3>

      {/* desc */}
      <p className="mt-3 text-muted-foreground">{step.desc}</p>
    </motion.div>
  );
}

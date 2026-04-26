"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUp } from "@/lib/motion-config/motion";

export default function HeroBadges({ badges }: { badges: string[] }) {
  const shouldReduceMotion = useReducedMotion();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const safe = (v: any) => (shouldReduceMotion ? {} : v);
  return (
    <motion.div
      variants={safe(fadeUp)}
      transition={{ delay: 0.3 }}
      className="mt-10 flex flex-wrap gap-3"
    >
      {badges.map((b) => (
        <span
          key={b}
          className="px-4 py-2 rounded-full bg-muted border border-border text-sm"
        >
          {b}
        </span>
      ))}
    </motion.div>
  );
}

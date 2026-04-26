"use client";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp } from "@/lib/motion-config/motion";

export default function HeroDescription({ text }: { text: string }) {
  const shouldReduceMotion = useReducedMotion();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const safe = (v: any) => (shouldReduceMotion ? {} : v);
  return (
    <motion.p
      variants={safe(fadeUp)}
      transition={{ delay: 0.1 }}
      className="mt-6 text-muted-foreground text-lg max-w-xl"
    >
      {text}
    </motion.p>
  );
}

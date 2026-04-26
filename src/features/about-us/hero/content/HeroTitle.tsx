"use client";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp } from "@/lib/motion-config/motion";

export default function HeroTitle({ title }: { title: string }) {
  const shouldReduceMotion = useReducedMotion();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const safe = (v: any) => (shouldReduceMotion ? {} : v);
  return (
    <motion.h1
      variants={safe(fadeUp)}
      className="text-4xl md:text-6xl font-bold leading-tight"
    >
      <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        {title}
      </span>
    </motion.h1>
  );
}

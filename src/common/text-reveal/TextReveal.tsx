"use client";

import { motion } from "framer-motion";
import { textReveal } from "@/lib/motion-config/motion";

export default function TextReveal({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.span variants={textReveal} className="block overflow-hidden">
      <span className="block">{children}</span>
    </motion.span>
  );
}

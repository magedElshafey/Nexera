"use client";

import { motion } from "framer-motion";

export default function CTABackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />

      {/* moving light */}
      <motion.div
        animate={{
          x: ["-20%", "120%"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute top-0 left-0
          w-[40%] h-full
          bg-gradient-to-r from-transparent via-white/10 to-transparent
          blur-3xl
        "
      />
    </div>
  );
}

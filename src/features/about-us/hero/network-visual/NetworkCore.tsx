"use client";

import { motion } from "framer-motion";

export default function NetworkCore() {
  return (
    <motion.div
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 4, repeat: Infinity }}
      className="
        absolute top-1/2 left-1/2
        -translate-x-1/2 -translate-y-1/2
        w-20 h-20 rounded-2xl
        bg-gradient-to-br from-primary to-accent
        flex items-center justify-center text-white font-bold
        shadow-xl
      "
    >
      NX
    </motion.div>
  );
}

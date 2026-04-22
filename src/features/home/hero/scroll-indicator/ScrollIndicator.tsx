"use client";

import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

export default function ScrollIndicator({
  targetId = "services-section",
}: {
  targetId?: string;
}) {
  const handleScroll = () => {
    const el = document.getElementById(targetId);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <button
      onClick={handleScroll}
      aria-label="Scroll to next section"
      className="absolute bottom-6 left-1/2 -translate-x-1/2 group"
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.4 }}
        className="
          w-8 h-12 rounded-full border border-border
          flex flex-col items-center justify-start pt-2
          bg-background/50 backdrop-blur-sm
          hover:border-primary transition
        "
      >
        {/* dot */}
        <div className="w-1 h-2 bg-primary rounded-full" />

        {/* arrow */}
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 1.2 }}
          className="mt-2 text-muted-foreground group-hover:text-primary transition"
        >
          <FaChevronDown size={12} />
        </motion.div>
      </motion.div>
    </button>
  );
}

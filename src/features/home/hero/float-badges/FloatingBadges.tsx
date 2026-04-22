// FloatingBadges.tsx
"use client";

import { motion } from "framer-motion";
import { FaShieldAlt, FaTools, FaBroom } from "react-icons/fa";

const badges = [
  { icon: FaShieldAlt, text: "Security" },
  { icon: FaBroom, text: "Cleaning" },
  { icon: FaTools, text: "Maintenance" },
];

export default function FloatingBadges() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {badges.map((b, i) => {
        const Icon = b.icon;
        return (
          <motion.div
            key={i}
            className="absolute flex items-center gap-2 px-3 py-1 rounded-full bg-card border border-border text-xs shadow-sm"
            style={{
              top: `${20 + i * 20}%`,
              left: i % 2 === 0 ? "5%" : "80%",
            }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i,
            }}
          >
            <Icon className="text-primary" />
            {b.text}
          </motion.div>
        );
      })}
    </div>
  );
}

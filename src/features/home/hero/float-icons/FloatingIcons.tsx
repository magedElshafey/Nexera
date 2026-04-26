"use client";

import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaBroom,
  FaHardHat,
  FaShoppingCart,
} from "react-icons/fa";

const icons = [
  { Icon: FaShieldAlt, style: { top: "10%", left: "5%" } },
  { Icon: FaBroom, style: { top: "10%", right: "5%" } },
  { Icon: FaHardHat, style: { bottom: "10%", left: "10%" } },
  { Icon: FaShoppingCart, style: { bottom: "10%", right: "10%" } },
];

export default function FloatingIcons() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {icons.map(({ Icon, style }, i) => (
        <motion.div
          key={i}
          style={{
            ...style,
            transform: `
              translateX(calc(var(--px, 0) * ${20 + i * 5}px))
              translateY(calc(var(--py, 0) * ${20 + i * 5}px))
            `,
          }}
          className="absolute text-primary/20 text-3xl md:text-4xl"
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -30, 20, 0],
          }}
          transition={{
            duration: 12 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Icon />
        </motion.div>
      ))}
    </div>
  );
}

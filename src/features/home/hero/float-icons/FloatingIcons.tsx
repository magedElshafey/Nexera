// "use client";

// import { motion } from "framer-motion";
// import { IconType } from "react-icons";
// import {
//   FaShieldAlt,
//   FaBroom,
//   FaHardHat,
//   FaShoppingCart,
//   FaTools,
//   FaUserShield,
// } from "react-icons/fa";

// type IconItem = {
//   Icon: IconType;
//   start: { top?: string; bottom?: string; left?: string; right?: string };
//   x: number[];
//   y: number[];
//   duration: number;
// };

// const icons: IconItem[] = [
//   // top left
//   {
//     Icon: FaShieldAlt,
//     start: { top: "10%", left: "5%" },
//     x: [0, 40, -20, 0],
//     y: [0, -30, 20, 0],
//     duration: 14,
//   },

//   // top right
//   {
//     Icon: FaBroom,
//     start: { top: "5%", right: "8%" },
//     x: [0, -50, 30, 0],
//     y: [0, 40, -20, 0],
//     duration: 16,
//   },

//   // center left
//   {
//     Icon: FaHardHat,
//     start: { top: "50%", left: "2%" },
//     x: [0, 60, -30, 0],
//     y: [0, -50, 30, 0],
//     duration: 18,
//   },

//   // center right
//   {
//     Icon: FaShoppingCart,
//     start: { top: "55%", right: "2%" },
//     x: [0, -60, 40, 0],
//     y: [0, 50, -30, 0],
//     duration: 15,
//   },

//   // bottom left
//   {
//     Icon: FaTools,
//     start: { bottom: "10%", left: "10%" },
//     x: [0, 50, -20, 0],
//     y: [0, -40, 30, 0],
//     duration: 17,
//   },

//   // bottom right
//   {
//     Icon: FaUserShield,
//     start: { bottom: "8%", right: "10%" },
//     x: [0, -40, 20, 0],
//     y: [0, 30, -25, 0],
//     duration: 19,
//   },
// ];

// export default function FloatingIcons() {
//   return (
//     <div className="absolute inset-0 pointer-events-none overflow-hidden">
//       {icons.map(({ Icon, start, x, y, duration }, i) => (
//         <motion.div
//           key={i}
//           className="absolute text-primary/15 text-3xl md:text-4xl"
//           style={start}
//           animate={{
//             x,
//             y,
//             rotate: [0, 10, -10, 0], // subtle rotation
//           }}
//           transition={{
//             duration,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         >
//           <Icon />
//         </motion.div>
//       ))}
//     </div>
//   );
// }

// "use client";

// import { motion } from "framer-motion";
// import { useRef } from "react";
// import {
//   FaShieldAlt,
//   FaBroom,
//   FaHardHat,
//   FaShoppingCart,
// } from "react-icons/fa";

// const icons = [
//   { Icon: FaShieldAlt, style: { top: "10%", left: "5%" } },
//   { Icon: FaBroom, style: { top: "10%", right: "5%" } },
//   { Icon: FaHardHat, style: { bottom: "10%", left: "10%" } },
//   { Icon: FaShoppingCart, style: { bottom: "10%", right: "10%" } },
// ];

// export default function FloatingIconsInteractive() {
//   const containerRef = useRef<HTMLDivElement>(null);

//   return (
//     <div
//       ref={containerRef}
//       className="absolute inset-0 pointer-events-none overflow-hidden"
//     >
//       {icons.map(({ Icon, style }, i) => (
//         <motion.div
//           key={i}
//           style={style}
//           className="absolute text-primary/20 text-3xl md:text-4xl"
//           animate={{
//             x: [0, 30, -20, 0],
//             y: [0, -30, 20, 0],
//           }}
//           transition={{
//             duration: 12 + i * 2,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           whileHover={{ scale: 1.2 }}
//         >
//           <Icon />
//         </motion.div>
//       ))}
//     </div>
//   );
// }

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

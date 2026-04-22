// "use client";

// import { useTheme } from "next-themes";
// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { MdDarkMode } from "react-icons/md";
// import { CiLight } from "react-icons/ci";

// export default function ThemeToggle() {
//   const { theme, setTheme } = useTheme();
//   const [mounted, setMounted] = useState(false);

//   // eslint-disable-next-line react-hooks/set-state-in-effect
//   useEffect(() => setMounted(true), []);
//   if (!mounted) return null;

//   const isDark = theme === "dark";

//   return (
//     <button
//       title={isDark ? "Light mode" : "Dark mode"}
//       onClick={() => {
//         document.documentElement.classList.add("theme-switching");

//         setTheme(isDark ? "light" : "dark");

//         setTimeout(() => {
//           document.documentElement.classList.remove("theme-switching");
//         }, 300);
//       }}
//       aria-label="Toggle theme"
//       className="
//         relative w-6 h-6 rounded-lg
//         border border-border
//         bg-background/70 backdrop-blur-md
//         flex items-center justify-center
//         transition-all duration-300
//         hover:bg-muted hover:scale-105
//         active:scale-95
//         focus:outline-none focus:ring-2 focus:ring-primary/40
//       "
//     >
//       <AnimatePresence mode="wait" initial={false}>
//         <motion.span
//           key={isDark ? "light" : "dark"}
//           initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
//           animate={{ rotate: 0, opacity: 1, scale: 1 }}
//           exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
//           transition={{ duration: 0.25 }}
//           className="absolute"
//         >
//           {isDark ? (
//             <CiLight size={15} className="text-accent" />
//           ) : (
//             <MdDarkMode size={15} className="text-primary" />
//           )}
//         </motion.span>
//       </AnimatePresence>
//     </button>
//   );
// }

"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useRadialTheme } from "@/providers/RadialTransitionProvider";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const triggerRadial = useRadialTheme();

  const [mounted, setMounted] = useState(false);
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  const handleClick = (e: React.MouseEvent) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect();

    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    const nextTheme = isDark ? "light" : "dark";

    // 🔥 start radial animation
    triggerRadial({ x, y }, nextTheme);

    // ⏱️ change theme mid animation
    setTimeout(() => {
      setTheme(nextTheme);
    }, 250);
  };

  return (
    <button
      onClick={handleClick}
      className="
        relative w-10 h-10 rounded-lg
        border border-border
        bg-background/70 backdrop-blur-md
        flex items-center justify-center
        transition-all duration-300
        hover:bg-muted hover:scale-105
        active:scale-95
      "
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={isDark ? "light" : "dark"}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {isDark ? <CiLight size={18} /> : <MdDarkMode size={18} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

// "use client";

// import { useState, useRef } from "react";
// import { useScroll, useMotionValueEvent } from "framer-motion";

// interface Options {
//   threshold?: number;
//   delay?: number;
// }

// export function useNavbarVisibility(options?: Options) {
//   const { threshold = 80, delay = 0 } = options || {};
//   const { scrollY } = useScroll();

//   const [visible, setVisible] = useState(true);
//   const [scrolled, setScrolled] = useState(false);

//   const timeoutRef = useRef<NodeJS.Timeout | null>(null);

//   useMotionValueEvent(scrollY, "change", (latest) => {
//     const prev = scrollY.getPrevious() ?? 0;

//     // shadow / blur trigger
//     setScrolled(latest > 10);

//     // always show at top
//     if (latest <= 0) {
//       setVisible(true);
//       return;
//     }

//     // don't hide before threshold
//     if (latest < threshold) {
//       setVisible(true);
//       return;
//     }

//     // clear previous delay
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//     }

//     // debounce visibility
//     timeoutRef.current = setTimeout(() => {
//       if (latest > prev) {
//         // scrolling down
//         setVisible(false);
//       } else {
//         // scrolling up
//         setVisible(true);
//       }
//     }, delay);
//   });

//   return { visible, scrolled };
// }

"use client";

import { useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

interface Options {
  threshold?: number;
}

export function useNavbarBehavior(options?: Options) {
  const { threshold = 80 } = options || {};
  const { scrollY } = useScroll();

  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;

    setScrolled(latest > 10);

    if (latest <= 0) {
      setVisible(true);
      return;
    }

    if (latest < threshold) {
      setVisible(true);
      return;
    }

    if (hovered) {
      setVisible(true);
      return;
    }

    if (latest > prev) {
      setVisible(false); // down
    } else {
      setVisible(true); // up
    }
  });

  return {
    visible,
    scrolled,
    hovered,
    setHovered,
  };
}

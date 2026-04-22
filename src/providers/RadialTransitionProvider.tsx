"use client";

import { createContext, useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Point = { x: number; y: number };

const RadialContext = createContext<
  (point: Point, nextTheme: "light" | "dark") => void
>(() => {});

export const useRadialTheme = () => useContext(RadialContext);

export default function RadialTransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [circle, setCircle] = useState<{
    x: number;
    y: number;
    theme: "light" | "dark";
  } | null>(null);

  return (
    <RadialContext.Provider
      value={(point, nextTheme) => {
        setCircle({ ...point, theme: nextTheme });
      }}
    >
      {children}

      <AnimatePresence>
        {circle && (
          <motion.div
            key="radial"
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 20, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            onAnimationComplete={() => setCircle(null)}
            style={{
              position: "fixed",
              top: circle.y,
              left: circle.x,
              width: 20,
              height: 20,
              borderRadius: "50%",
              transform: "translate(-50%, -50%)",
              background:
                circle.theme === "dark"
                  ? "var(--background)"
                  : "var(--background)",
              zIndex: 9999,
              pointerEvents: "none",
            }}
          />
        )}
      </AnimatePresence>
    </RadialContext.Provider>
  );
}

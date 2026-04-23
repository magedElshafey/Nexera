"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import logo from "@/assets/nexera-logo.png";

const STEP_DURATION = 900;
const EXIT_DURATION = 600;

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
  const t = useTranslations("Hero");
  const features = t.raw("features") as string[];

  const [index, setIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const total = features.length;
  const progress = (index / total) * 100;

  // 🔥 sequence
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => {
        if (prev >= total) return prev;

        const next = prev + 1;

        if (next === total) {
          clearInterval(intervalRef.current!);

          setTimeout(() => {
            setIsExiting(true);
            setTimeout(onFinish, EXIT_DURATION);
          }, 300);
        }

        return next;
      });
    }, STEP_DURATION);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [total, onFinish]);

  // 🔒 lock scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: EXIT_DURATION / 1000, ease: "linear" }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
    >
      {/* Radial exit */}
      <motion.div
        className="absolute inset-0 bg-background pointer-events-none"
        animate={
          isExiting
            ? { clipPath: "circle(0% at 50% 50%)" }
            : { clipPath: "circle(150% at 50% 50%)" }
        }
        transition={{ duration: EXIT_DURATION / 1000 }}
      />

      {/* Logo */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative will-change-transform"
      >
        <div className="absolute inset-0 blur-2xl bg-primary/20 rounded-full scale-150" />
        <Image src={logo} alt="logo" width={90} height={90} priority />
      </motion.div>

      {/* Feature */}
      <div className="mt-4 h-6 flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          {index < total && (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="text-sm text-muted-foreground will-change-transform"
            >
              {features[index]}
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {/* Progress */}
      <div className="mt-6 flex items-center gap-3 w-[240px]">
        <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary will-change-transform"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>

        <span className="text-xs text-muted-foreground w-10 text-right tabular-nums">
          {Math.round(progress)}%
        </span>
      </div>
    </motion.div>
  );
}

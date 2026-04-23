"use client";

import {
  motion,
  useMotionValue,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { useRef } from "react";

export default function ServiceCard({
  children,
  className,
  onHover,
}: {
  children: React.ReactNode;
  className?: string;
  onHover?: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [6, -6]);
  const rotateY = useTransform(x, [-50, 50], [-6, 6]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (shouldReduceMotion) return;

    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <motion.article
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      onMouseEnter={onHover}
      style={shouldReduceMotion ? {} : { rotateX, rotateY }}
      className={`rounded-3xl border border-border bg-card p-6 ${className}`}
    >
      {children}
    </motion.article>
  );
}

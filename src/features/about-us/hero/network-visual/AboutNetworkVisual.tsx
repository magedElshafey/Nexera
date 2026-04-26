"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef, useCallback } from "react";
import { nodes, lines } from "./data/data";
import NetworkNode from "./NetworkNode";
import NetworkLines from "@/features/about-us/hero/network-visual/NetworkLines";
import NetworkParticles from "@/features/about-us/hero/network-visual/NetworkParticles";
import NetworkCore from "@/features/about-us/hero/network-visual/NetworkCore";

export default function AboutNetworkVisual() {
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-50, 50], [6, -6]);
  const rotateY = useTransform(mouseX, [-50, 50], [-6, 6]);

  const handleMove = useCallback((e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  }, []);

  const reset = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, []);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ rotateX, rotateY }}
      className="relative w-[360px] h-[360px] mx-auto"
    >
      <NetworkLines lines={lines} />
      <NetworkParticles lines={lines} />

      {nodes.map((n, i) => (
        <NetworkNode key={i} {...n} />
      ))}

      <NetworkCore />
    </motion.div>
  );
}

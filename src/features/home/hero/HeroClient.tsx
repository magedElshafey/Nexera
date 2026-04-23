"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useMouseParallax } from "./hooks/useMouseParallax";

import GlowCursor from "@/common/glow-cursor/GlowCursor";
import FloatingBadges from "@/features/home/hero/float-badges/FloatingBadges";
import FloatingIcons from "@/features/home/hero/float-icons/FloatingIcons";
import GridBackground from "@/features/home/hero/grid-bg/GridBackground";
import InteractiveIllustration from "@/features/home/hero/interactive-illisturation/InteractiveIllustration";
import ScrollIndicator from "@/features/home/hero/scroll-indicator/ScrollIndicator";
import { Button } from "@/design-system/components/button/Button";
import { Link } from "@/i18n/navigation";

import {
  fadeUp,
  fadeLeft,
  fadeRight,
  scaleIn,
  staggerContainer,
  hoverScale,
} from "@/lib/motion-config/motion";

import TextReveal from "@/common/text-reveal/TextReveal";

type Props = {
  data: {
    title: string;
    description: string;
    features: string[];
    contact: string;
    about: string;
  };
};

export default function HeroClient({ data }: Props) {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  useMouseParallax(ref);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const safe = (v: any) => (shouldReduceMotion ? {} : v);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-12 md:py-16 xl:py-18"
    >
      <GridBackground />
      <FloatingIcons />
      <FloatingBadges />
      <GlowCursor />

      <motion.div
        variants={safe(staggerContainer)}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 text-center max-w-3xl"
      >
        {/* Title */}
        <motion.h1
          variants={safe(fadeUp)}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          <TextReveal>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {data.title}
            </span>
          </TextReveal>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={safe(fadeUp)}
          transition={{ delay: 0.1 }}
          className="mt-6 text-muted-foreground text-lg"
        >
          {data.description}
        </motion.p>

        {/* Features */}
        <motion.div
          variants={safe(fadeLeft)}
          className="mt-8 flex flex-wrap justify-center gap-4 text-sm"
        >
          {data.features.map((f) => (
            <motion.span
              key={f}
              variants={safe(fadeUp)}
              className="px-4 py-2 bg-muted rounded-full border border-border"
            >
              {f}
            </motion.span>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={safe(fadeRight)}
          transition={{ delay: 0.3 }}
          className="mt-8 flex justify-center gap-4"
        >
          <motion.div {...hoverScale}>
            <Link href="/contact-us">
              <Button variant="accent">{data.contact}</Button>
            </Link>
          </motion.div>

          <motion.div {...hoverScale}>
            <Link href="/about-us">
              <Button>{data.about}</Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Illustration */}
        <motion.div
          variants={safe(scaleIn)}
          transition={{ delay: 0.2 }}
          className="mt-4 flex justify-center"
        >
          <InteractiveIllustration />
        </motion.div>
      </motion.div>

      <ScrollIndicator />
    </section>
  );
}

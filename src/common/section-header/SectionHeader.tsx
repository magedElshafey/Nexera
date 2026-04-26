"use client";

import { fadeUp } from "@/lib/motion-config/motion";
import { motion, useReducedMotion } from "framer-motion";
type SectionHeaderProps = {
  title: string;
  description?: string;
};

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
}) => {
  const shouldReduceMotion = useReducedMotion();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const safe = (v: any) => (shouldReduceMotion ? {} : v);
  return (
    <motion.header
      variants={safe(fadeUp)}
      initial="hidden"
      whileInView="visible"
      className="text-center max-w-2xl mx-auto"
    >
      <h2 className="text-4xl md:text-6xl font-bold">{title}</h2>
      {description && (
        <p className="mt-4 text-muted-foreground">{description}</p>
      )}
    </motion.header>
  );
};

export default SectionHeader;

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { fadeUp } from "@/lib/motion-config/motion";
import { motion } from "framer-motion";

type Props = {
  title: string;
  description: string;
  safe: (v: any) => any;
};

export default function ServiceHeader({ title, description, safe }: Props) {
  return (
    <motion.header
      variants={safe(fadeUp)}
      initial="hidden"
      whileInView="visible"
      className="text-center max-w-2xl mx-auto"
    >
      <h2 className="text-4xl md:text-6xl font-bold">{title}</h2>
      <p className="mt-4 text-muted-foreground">{description}</p>
    </motion.header>
  );
}

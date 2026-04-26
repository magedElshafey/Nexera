/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUp } from "@/lib/motion-config/motion";

export default function ServicePreview({ service }: any) {
  const shouldReduceMotion = useReducedMotion();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const safe = (v: any) => (shouldReduceMotion ? {} : v);
  return (
    <motion.div
      key={service.key}
      variants={safe(fadeUp)}
      initial="hidden"
      animate="visible"
      className="
        sticky top-24
        p-8 rounded-3xl border border-border bg-card
        min-h-[320px]
      "
    >
      <h3 className="text-2xl font-bold">{service.title}</h3>

      <p className="mt-4 text-muted-foreground">{service.desc}</p>

      {/* extra content */}
      <ul className="mt-6 space-y-2 text-sm">
        <li>✔ Professional teams</li>
        <li>✔ Trained staff</li>
        <li>✔ 24/7 availability</li>
      </ul>
    </motion.div>
  );
}

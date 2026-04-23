// TestimonialsHeader.tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUp } from "@/lib/motion-config/motion";
import { useTranslations } from "next-intl";

export default function TestimonialsHeader() {
  const t = useTranslations("Testimonials");
  const shouldReduceMotion = useReducedMotion();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const safe = (v: any) => (shouldReduceMotion ? {} : v);
  return (
    <motion.header
      variants={safe(fadeUp)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-center max-w-2xl mx-auto"
    >
      <h2 id="testimonials-heading" className="text-4xl md:text-6xl font-bold">
        {t("title")}
      </h2>

      <p className="mt-4 text-muted-foreground">{t("description")}</p>
    </motion.header>
  );
}

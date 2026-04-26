"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { Button } from "@/design-system/components/button/Button";
import { fadeUp, hoverScale } from "@/lib/motion-config/motion";

export default function HeroCTA({
  primary,
  secondary,
}: {
  primary: string;
  secondary: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const safe = (v: any) => (shouldReduceMotion ? {} : v);
  return (
    <motion.div
      variants={safe(fadeUp)}
      transition={{ delay: 0.2 }}
      className="mt-8 flex gap-4"
    >
      <motion.div {...hoverScale}>
        <Button asChild>
          <Link href="/contact-us">{primary}</Link>
        </Button>
      </motion.div>

      <motion.div {...hoverScale}>
        <Button variant="ghost" asChild>
          <Link href="/services">{secondary}</Link>
        </Button>
      </motion.div>
    </motion.div>
  );
}

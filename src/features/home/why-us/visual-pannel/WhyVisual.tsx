"use client";

import TiltPanel from "@/common/tilit-pannel/TiltPanel";
import { motion } from "framer-motion";

export function WhyVisual({ title, desc }: { title: string; desc: string }) {
  return (
    <TiltPanel>
      <motion.div
        key={title} // 🔥 مهم عشان animation يشتغل صح
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="relative rounded-2xl border border-border bg-card p-8 min-h-[280px]"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />

        <div className="relative z-10">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="mt-4 text-muted-foreground">{desc}</p>
        </div>
      </motion.div>
    </TiltPanel>
  );
}

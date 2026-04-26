"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import StorySlide from "./StorySlide";

export default function StickyStory({
  steps,
}: {
  steps: { title: string; desc: string }[];
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // 👇 كل step ليه range
  const stepIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, steps.length - 1],
  );

  return (
    <div ref={ref} className="relative h-[300vh] mt-20">
      {/* 🔥 sticky container */}
      <div className="sticky top-1/2 -translate-y-1/2">
        <div className="relative h-[320px] flex items-center justify-center">
          {steps.map((step, i) => (
            <StorySlide key={i} step={step} index={i} progress={stepIndex} />
          ))}
        </div>

        {/* 🔥 progress bar */}
        <div className="mt-10 w-full h-1 bg-border rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary"
            style={{
              scaleX: scrollYProgress,
              transformOrigin: "left",
            }}
          />
        </div>
      </div>
    </div>
  );
}

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { Button } from "@/design-system/components/button/Button";

import {
  fadeLeft,
  fadeRight,
  scaleIn,
  staggerContainer,
  hoverScale,
} from "@/lib/motion-config/motion";

import { iconMap } from "@/features/home/sevices/data/iconMap";
import ServiceCard from "@/features/home/sevices/card/ServiceCard";
import { useState } from "react";
export default function ServicesGrid({ data }: { data: any }) {
  const shouldReduceMotion = useReducedMotion();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const safe = (v: any) => (shouldReduceMotion ? {} : v);
  const [active, setActive] = useState(0);
  return (
    <div className="container mx-auto px-4 max-w-7xl py-12 md:py-16 xl:py-18 overflow-hidden">
      <motion.div
        variants={safe(staggerContainer)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-10 md:mt-12 grid gap-6 md:grid-cols-3"
      >
        {data.map((s: any, i: number) => {
          const Icon = iconMap[s.icon as keyof typeof iconMap];
          const isFeatured = s.featured;

          return (
            <ServiceCard
              key={s.key}
              onHover={() => setActive(i)}
              className={
                isFeatured
                  ? "md:col-span-2 min-h-[260px] border border-primary"
                  : "min-h-[200px]"
              }
            >
              <motion.div
                variants={safe(
                  isFeatured ? scaleIn : i % 2 === 0 ? fadeLeft : fadeRight,
                )}
                {...hoverScale}
                className="flex flex-col h-full"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="text-primary" size={22} />
                </div>

                <div className="mt-6">
                  <h3
                    className={`font-semibold ${
                      isFeatured ? "text-2xl" : "text-lg"
                    }`}
                  >
                    {s.title}
                  </h3>

                  <p className="mt-2 text-muted-foreground">{s.desc}</p>
                </div>

                <div className="mt-auto pt-6">
                  <Link
                    href={{
                      pathname: "/services/[slug]",
                      params: { slug: s.key },
                    }}
                  >
                    <Button variant={isFeatured ? "primary" : "ghost"}>
                      {data.readmore}
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </ServiceCard>
          );
        })}
      </motion.div>
    </div>
  );
}

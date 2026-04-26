"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Button } from "@/design-system/components/button/Button";
import { Link } from "@/i18n/navigation";
import ServicesVisual from "./ServicesVisual";

import { fadeLeft, fadeRight } from "@/lib/motion-config/motion";
import GlowCursor from "@/common/glow-cursor/GlowCursor";

export default function ServicesHero() {
  const t = useTranslations("ServicesHero");
  const shouldReduceMotion = useReducedMotion();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const safe = (v: any) => (shouldReduceMotion ? {} : v);
  return (
    <section className="relative py-12 md:py-16 xl:py-18  overflow-hidden">
      <GlowCursor />
      {/* background */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-primary/5 via-transparent to-accent/5" />

      <div className="container mx-auto px-4 max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <motion.div
          variants={safe(fadeLeft)}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
            {t("title")}
          </h1>

          <p className="mt-6 text-muted-foreground max-w-xl">
            {t("description")}
          </p>

          {/* CTA */}
          <div className="mt-8 flex gap-4 flex-wrap">
            <Button size="lg" asChild>
              <Link href="/contact-us">{t("ctaPrimary")}</Link>
            </Button>

            <Button size="lg" variant="outline" asChild>
              <Link href="/services">{t("ctaSecondary")}</Link>
            </Button>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          variants={safe(fadeRight)}
          initial="hidden"
          animate="visible"
        >
          <ServicesVisual />
        </motion.div>
      </div>
    </section>
  );
}

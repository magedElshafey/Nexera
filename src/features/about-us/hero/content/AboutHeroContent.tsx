"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";

import { staggerContainer } from "@/lib/motion-config/motion";
import HeroTitle from "@/features/about-us/hero/content/HeroTitle";
import HeroDescription from "@/features/about-us/hero/content/HeroDescription";
import HeroCTA from "@/features/about-us/hero/content/HeroCTA";
import HeroBadges from "@/features/about-us/hero/content/HeroBadges";

export default function AboutHeroContent() {
  const t = useTranslations("AboutHero");
  const shouldReduceMotion = useReducedMotion();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const safe = (v: any) => (shouldReduceMotion ? {} : v);

  return (
    <motion.div
      variants={safe(staggerContainer)}
      initial="hidden"
      animate="visible"
    >
      <HeroTitle title={t("title")} />
      <HeroDescription text={t("description")} />
      <HeroCTA primary={t("ctaPrimary")} secondary={t("ctaSecondary")} />
      <HeroBadges badges={t.raw("badges")} />
    </motion.div>
  );
}

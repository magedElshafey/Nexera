"use client";

import { useTranslations } from "next-intl";
import SectionHeader from "@/common/section-header/SectionHeader";

export default function TestimonialsHeader() {
  const t = useTranslations("Testimonials");
  // const shouldReduceMotion = useReducedMotion();

  // const safe = (v: any) => (shouldReduceMotion ? {} : v);
  return (
    // <motion.header
    //   variants={safe(fadeUp)}
    //   initial="hidden"
    //   whileInView="visible"
    //   viewport={{ once: true }}
    //   className="text-center max-w-2xl mx-auto"
    // >
    //   <h2 id="testimonials-heading" className="text-4xl md:text-6xl font-bold">
    //     {t("title")}
    //   </h2>

    //   <p className="mt-4 text-muted-foreground">{t("description")}</p>
    // </motion.header>
    <SectionHeader title={t("title")} description={t("description")} />
  );
}

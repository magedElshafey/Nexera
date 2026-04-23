// header/ContactHeader.tsx
"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function ContactHeader() {
  const t = useTranslations("Contact");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center max-w-2xl mx-auto"
    >
      <h2 id="contact-heading" className="text-3xl md:text-5xl font-bold">
        {t("title")}
      </h2>

      <p className="mt-4 text-muted-foreground">{t("description")}</p>
    </motion.div>
  );
}

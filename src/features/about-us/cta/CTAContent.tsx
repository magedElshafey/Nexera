"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUp } from "@/lib/motion-config/motion";
import { Button } from "@/design-system/components/button/Button";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import SectionHeader from "@/common/section-header/SectionHeader";

export default function CTAContent() {
  const t = useTranslations("CTA");
  const shouldReduceMotion = useReducedMotion();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const safe = (v: any) => (shouldReduceMotion ? {} : v);
  return (
    <div className="text-center">
      {/* headline */}

      <SectionHeader title={t("title")} description={t("description")} />
      {/* actions */}
      <motion.div
        variants={safe(fadeUp)}
        transition={{ delay: 0.2 }}
        className="mt-10 flex justify-center gap-4 flex-wrap"
      >
        <motion.div whileHover={{ scale: 1.05 }}>
          <Button variant="primary" size="lg" asChild>
            <Link href="/contact-us">{t("primary")}</Link>
          </Button>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }}>
          <Button variant="outline" size="lg" asChild>
            <Link href="/services">{t("secondary")}</Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}

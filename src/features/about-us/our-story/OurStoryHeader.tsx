"use client";

import { useTranslations } from "next-intl";
import SectionHeader from "@/common/section-header/SectionHeader";

export default function OurStoryHeader() {
  const t = useTranslations("OurStory");

  return <SectionHeader title={t("title")} description={t("description")} />;
}

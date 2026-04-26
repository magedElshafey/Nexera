import SectionHeader from "@/common/section-header/SectionHeader";
import { useTranslations } from "next-intl";

export default function ContactHeader() {
  const t = useTranslations("Contact");

  return <SectionHeader title={t("title")} description={t("description")} />;
}

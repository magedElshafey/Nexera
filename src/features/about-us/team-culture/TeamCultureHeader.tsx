import { useTranslations } from "next-intl";
import SectionHeader from "@/common/section-header/SectionHeader";

export default function TeamCultureHeader() {
  const t = useTranslations("Team");
  return (
    <>
      <SectionHeader title={t("title")} description={t("description")} />
    </>
  );
}

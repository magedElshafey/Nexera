import HeroClient from "./HeroClient";
import { getTranslations } from "next-intl/server";

export default async function HeroSection() {
  const t = await getTranslations("Hero");

  const data = {
    title: t("title"),
    description: t("description"),
    features: t.raw("features"),
    contact: t("contact"),
    about: t("about"),
  };

  // هنا تقدر تعمل data fetching عادي جدا
  // const stats = await fetch(...)

  return <HeroClient data={data} />;
}

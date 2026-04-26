import { getTranslations } from "next-intl/server";
import ServicesClient from "./ServicesClient";
import { services } from "@/features/home/sevices/data/services.data";

export default async function ServicesSection() {
  const t = await getTranslations("Services");

  const data = {
    title: t("title"),
    description: t("description"),
    readmore: t("readmore"),
    viewAll: t("viewAll"),
    services: services.map((s) => ({
      ...s,
      title: t(`${s.key}.title`),
      desc: t(`${s.key}.desc`),
    })),
  };

  return <ServicesClient data={data} />;
}

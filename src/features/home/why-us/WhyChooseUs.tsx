import { getTranslations } from "next-intl/server";
import WhyClient from "./WhyClient";
import { reasons, stats } from "./data/why.data";

export default async function WhyChooseUs() {
  const t = await getTranslations("Why");
  const statsT = await getTranslations("Stats");

  const data = {
    title: t("title"),
    description: t("description"),

    reasons: reasons.map((r) => ({
      key: r.key,
      title: t(`${r.key}.title`),
      desc: t(`${r.key}.desc`),
      long: t(`${r.key}.long`),
    })),

    stats: stats.map((s) => ({
      ...s,
      label: statsT(s.label),
    })),
  };

  return <WhyClient data={data} />;
}

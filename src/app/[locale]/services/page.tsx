import JsonLd from "@/common/seo/JsonLd";

import { generateSEO } from "@/lib/seo/metadata";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/schema";
import { getTranslations } from "next-intl/server";
import { services } from "@/features/home/sevices/data/services.data";
import ServicesHero from "@/features/services/hero/ServicesHero";

import ServicesGrid from "@/features/services/grid/ServicesGrid";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("SEO.Services");

  return generateSEO({
    title: t("title"),
    description: t("description"),
    locale,
    path: "/services",
    keywords: t.raw("keywords"),
  });
}
const page = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params;
  return (
    <>
      <JsonLd
        data={breadcrumbSchema(locale, [
          { name: locale === "ar" ? "الرئيسية" : "Home", path: "" },
          { name: locale === "ar" ? "الخدمات" : "Services", path: "/services" },
        ])}
      />
      <JsonLd data={webPageSchema(locale, "Services", "/services")} />
      <ServicesHero />
      <ServicesGrid data={services} />
    </>
  );
};

export default page;

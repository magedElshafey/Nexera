import { getTranslations } from "next-intl/server";
import { generateSEO } from "@/lib/seo/metadata";
import JsonLd from "@/common/seo/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/schema";
import HeroSection from "@/features/home/hero/Hero";
import { Suspense } from "react";
import HeroSkeleton from "@/features/home/hero/skeleton/HeroSkeleton";
import ServicesSection from "@/features/home/sevices/ServicesSection";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("SEO.Home");

  return generateSEO({
    title: t("title"),
    description: t("description"),
    locale,
    path: "",
    keywords: t.raw("keywords"),
  });
}
const page = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params;
  return (
    <>
      <JsonLd
        data={breadcrumbSchema(locale, [
          {
            name: locale === "ar" ? "الرئيسية" : "Home",
            path: "",
          },
        ])}
      />
      <JsonLd data={webPageSchema(locale, "Home", "")} />
      <Suspense fallback={<HeroSkeleton />}>
        <HeroSection />
      </Suspense>
      <ServicesSection />
    </>
  );
};

export default page;

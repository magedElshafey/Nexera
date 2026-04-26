import JsonLd from "@/common/seo/JsonLd";
import CTASection from "@/features/about-us/cta/CTASection";
import AboutHero from "@/features/about-us/hero/AboutHero";
import OurStorySection from "@/features/about-us/our-story/OurStorySection";
import TeamCultureSection from "@/features/about-us/team-culture/TeamCultureSection";
import { generateSEO } from "@/lib/seo/metadata";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/schema";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("SEO.About");

  return generateSEO({
    title: t("title"),
    description: t("description"),
    locale,
    path: "/about-us",
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
          {
            name: locale === "ar" ? "من نحن" : "About",
            path: "/about-us",
          },
        ])}
      />
      <JsonLd data={webPageSchema(locale, "About", "/about-us")} />
      <AboutHero />
      <OurStorySection />
      <TeamCultureSection />
      <CTASection />
    </>
  );
};

export default page;

import JsonLd from "@/common/seo/JsonLd";
import { generateSEO } from "@/lib/seo/metadata";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/schema";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("SEO.Contact");

  return generateSEO({
    title: t("title"),
    description: t("description"),
    locale,
    path: "/contact-us",
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
            name: locale === "ar" ? "تواصل معنا" : "Contact",
            path: "/contact-us",
          },
        ])}
      />
      <JsonLd data={webPageSchema(locale, "Contact", "/contact-us")} />
    </>
  );
};

export default page;

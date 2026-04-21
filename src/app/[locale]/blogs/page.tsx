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
  const t = await getTranslations("SEO.Blogs");

  return generateSEO({
    title: t("title"),
    description: t("description"),
    locale,
    path: "/projects",
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
            name: locale === "ar" ? "المقالات" : "Blogs",
            path: "/blogs",
          },
        ])}
      />
      <JsonLd data={webPageSchema(locale, "Blogs", "/blogs")} />
    </>
  );
};

export default page;

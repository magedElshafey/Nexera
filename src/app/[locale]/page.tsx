import { getTranslations } from "next-intl/server";
import { generateSEO } from "@/lib/seo/metadata";
import JsonLd from "@/common/seo/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/schema";
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

      <div className="bg-background text-foreground">
        <div className="bg-card border border-border p-6 rounded-2xl">
          <h2 className="text-primary">Title</h2>

          <button className="bg-primary text-primary-foreground px-4 py-2 rounded-xl">
            Action
          </button>
        </div>
      </div>
    </>
  );
};

export default page;

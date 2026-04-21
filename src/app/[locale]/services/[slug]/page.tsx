import JsonLd from "@/common/seo/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/schema";
const page = async ({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) => {
  const { locale, slug } = await params;
  const service = { title: "test" };
  return (
    <>
      <JsonLd
        data={webPageSchema(locale, service.title, `/services/${slug}`)}
      />
      <JsonLd
        data={breadcrumbSchema(locale, [
          { name: locale === "ar" ? "الرئيسية" : "Home", path: "" },
          { name: locale === "ar" ? "الخدمات" : "Services", path: "/services" },
          { name: service.title, path: `/services/${slug}` },
        ])}
      />
    </>
  );
};

export default page;

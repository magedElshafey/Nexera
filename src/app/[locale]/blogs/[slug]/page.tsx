import JsonLd from "@/common/seo/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/schema";
const page = async ({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) => {
  const { locale, slug } = await params;
  const blogs = { title: "test" };
  return (
    <>
      <JsonLd data={webPageSchema(locale, blogs.title, `/blogs/${slug}`)} />
      <JsonLd
        data={breadcrumbSchema(locale, [
          { name: locale === "ar" ? "الرئيسية" : "Home", path: "" },
          { name: locale === "ar" ? "المقالات" : "Blogs", path: "/blogs" },
          { name: blogs.title, path: `/blogs/${slug}` },
        ])}
      />
    </>
  );
};

export default page;

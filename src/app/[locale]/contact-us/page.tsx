import ContactChat from "@/app/[locale]/contact-us/components/contact-chat/ContactChat";
import JsonLd from "@/common/seo/JsonLd";
import ContactHeader from "@/features/home/contact/header/ContactHeader";
import ContactInfo from "@/features/home/contact/info/ContactInfo";
import ContactVisual from "@/features/home/contact/visual/ContactVisual";
import { generateSEO } from "@/lib/seo/metadata";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/schema";
import { getTranslations } from "next-intl/server";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
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
  const contactData = {
    phone: "+20 100 000 0000",
    email: "info@nexera.com",
    address: "Cairo, Egypt",
  };
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
      <div className="container mx-auto px-4 max-w-7xl py-12 md:py-16 lg:py-20 space-y-8 md:space-y-12 lg:space-y-16">
        <ContactHeader />
        <ContactChat />
        <ContactHeader />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div className="flex flex-col items-center gap-4">
            <ContactInfo contact={contactData} />
            <div className="flex items-center gap-5">
              {[FaFacebook, FaLinkedin, FaInstagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social"
                  className="w-9 h-9 rounded-md border border-border flex items-center justify-center hover:bg-muted transition"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>
          <ContactVisual />
        </div>
      </div>
    </>
  );
};

export default page;

import { getTranslations } from "next-intl/server";
import { generateSEO } from "@/lib/seo/metadata";
import JsonLd from "@/common/seo/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/schema";
import HeroSection from "@/features/home/hero/Hero";
import { Suspense } from "react";
import HeroSkeleton from "@/features/home/hero/skeleton/HeroSkeleton";
import ServicesSection from "@/features/home/sevices/ServicesSection";
import WhyChooseUs from "@/features/home/why-us/WhyChooseUs";
import { WhyChooseUsSkeleton } from "../../features/home/why-us/skeleton/WhyChooseUsSkeleton";
import { ServicesSkeleton } from "@/features/home/sevices/skeleton/ServicesSkeleton";
import TestimonialsSection from "@/features/home/testimonials/TestimonialsSection";
import ContactSection from "@/features/home/contact/ContactSection";
import TestimonialsSectionSkeleton from "@/features/home/testimonials/skeleton/TestimonialsSectionSkeleton";
import ContactSectionSkeleton from "@/features/home/contact/skeleton/ContactSectionSkeleton";
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
      <Suspense fallback={<ServicesSkeleton />}>
        <ServicesSection />
      </Suspense>
      <Suspense fallback={<WhyChooseUsSkeleton />}>
        <WhyChooseUs />
      </Suspense>
      <Suspense fallback={<TestimonialsSectionSkeleton />}>
        <TestimonialsSection />
      </Suspense>
      <Suspense fallback={<ContactSectionSkeleton />}>
        <ContactSection />
      </Suspense>
    </>
  );
};

export default page;

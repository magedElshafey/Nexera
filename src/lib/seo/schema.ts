import { env } from "@/lib/config/env";

export function organizationSchema(locale: string) {
  const isArabic = locale === "ar";

  return {
    "@context": "https://schema.org",
    "@type": "Organization",

    name: isArabic ? "نكسيرا" : "NEXERA",

    url: `${env.BASE_URL}/${locale}`,

    logo: `${env.BASE_URL}/logo.png`,

    inLanguage: locale,

    sameAs: [],

    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        availableLanguage: ["English", "Arabic"],
      },
    ],
  };
}
export function websiteSchema(locale: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "NEXERA",
    url: `${env.BASE_URL}/${locale}`,
    inLanguage: locale,
  };
}

type BreadcrumbItem = {
  name: string;
  path: string;
};

export function breadcrumbSchema(locale: string, items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${env.BASE_URL}/${locale}${item.path}`,
    })),
  };
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function serviceSchema(locale: string, service: any) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: "NEXERA",
    },
    areaServed: "Global",
    inLanguage: locale,
  };
}
export function webPageSchema(locale: string, title: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    url: `${env.BASE_URL}/${locale}${path}`,
    inLanguage: locale,
  };
}

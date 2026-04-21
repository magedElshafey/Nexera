import { Metadata } from "next";
import { env } from "@/lib/config/env";

const baseUrl = env.BASE_URL;

type SEOProps = {
  title: string;
  description: string;
  locale: string;
  path: string;
  keywords?: string[];
};

export function generateSEO({
  title,
  description,
  locale,
  path,
  keywords,
}: SEOProps): Metadata {
  const url = `${baseUrl}/${locale}${path}`;

  return {
    title,
    description,
    keywords,

    alternates: {
      canonical: url,
      languages: {
        en: `${baseUrl}/en${path}`,
        ar: `${baseUrl}/ar${path}`,
      },
    },

    openGraph: {
      title,
      description,
      url,
      locale,
      type: "website",
    },
  };
}

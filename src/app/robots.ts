import { env } from "@/lib/config/env";
export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${env.BASE_URL}/sitemap.xml`,
  };
}

import { env } from "@/lib/config/env";
export default function sitemap() {
  const baseUrl = env.BASE_URL;

  const routes = ["", "/about-us", "/services", "/projects", "/contact-us"];

  return routes.flatMap((route) => [
    {
      url: `${baseUrl}/en${route}`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/ar${route}`,
      lastModified: new Date(),
    },
  ]);
}

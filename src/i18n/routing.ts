import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "ar"],

  // Used when no locale matches
  defaultLocale: "ar",
  localeDetection: false,
  pathnames: {
    "/": "/",

    "/about-us": {
      en: "/about-us",
      ar: "/من-نحن",
    },

    "/services": {
      en: "/services",
      ar: "/الخدمات",
    },
    "/services/[slug]": {
      en: "/services/[slug]",
      ar: "/خدمات/[slug]",
    },
    "/contact-us": {
      en: "/contact-us",
      ar: "/تواصل-معنا",
    },
    "/blogs": {
      en: "/blogs",
      ar: "/المقالات",
    },
    "/blogs/[slug]": {
      en: "/blogs/[slug]",
      ar: "/المقالات/[slug]",
    },
  },
});

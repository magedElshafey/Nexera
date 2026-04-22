import { routing } from "@/i18n/routing";
export const localeNames = {
  en: "English",
  ar: "العربية",
};

export type Locale = (typeof routing.locales)[number];

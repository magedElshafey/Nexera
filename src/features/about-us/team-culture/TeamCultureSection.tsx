import TeamCultureHeader from "@/features/about-us/team-culture/TeamCultureHeader";
import CultureOrbit from "@/features/about-us/team-culture/CultureOrbit";
import { getTranslations } from "next-intl/server";

export default async function TeamCultureSection() {
  const t = await getTranslations("teamCulture");

  const values = t.raw("values");

  return (
    <section className="relative py-12 md:py-16 xl:py-18 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 max-w-7xl">
        <TeamCultureHeader />
        <CultureOrbit values={values} />
      </div>
    </section>
  );
}

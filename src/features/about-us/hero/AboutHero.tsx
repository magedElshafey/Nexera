import AboutHeroContent from "@/features/about-us/hero/content/AboutHeroContent";
import AboutNetworkVisual from "@/features/about-us/hero/network-visual/AboutNetworkVisual";

export default async function AboutHero() {
  // 👇 future API
  const data = null;

  return (
    <section className="relative overflow-hidden py-12 md:py-16 xl:py-18">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 blur-3xl rounded-full" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent/10 blur-3xl rounded-full" />

      <div className="container mx-auto px-4 max-w-7xl grid md:grid-cols-2 gap-12 items-center">
        <AboutHeroContent />
        <AboutNetworkVisual />
      </div>
    </section>
  );
}

import CTAContent from "./CTAContent";
import CTABackground from "./CTABackground";

export default async function CTASection() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="relative py-32 overflow-hidden"
    >
      <CTABackground />

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <CTAContent />
      </div>
    </section>
  );
}

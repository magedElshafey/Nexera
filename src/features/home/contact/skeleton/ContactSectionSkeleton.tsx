import ContactHeaderSkeleton from "./ContactHeaderSkeleton";
import ContactLayoutSkeleton from "./ContactLayoutSkeleton";

export default function ContactSectionSkeleton() {
  return (
    <section className="relative py-12 md:py-16 xl:py-18 overflow-hidden">
      {/* background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

      <div className="container mx-auto px-4 max-w-7xl">
        <ContactHeaderSkeleton />
        <ContactLayoutSkeleton />
      </div>
    </section>
  );
}

import TestimonialsHeader from "@/features/home/testimonials/header/TestimonialsHeader";
import TrustWall from "@/features/home/testimonials/trust-wall/TrustWall";

export default async function TestimonialsSection() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="relative py-12 md:py-16 xl:py-18 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_70%)]" />

      <div className="container mx-auto px-4 max-w-7xl">
        <TestimonialsHeader />

        <div className="mt-7 md:mt-12 lg:mt-14">
          <TrustWall />
        </div>
      </div>
    </section>
  );
}

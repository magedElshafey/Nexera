import TestimonialsHeaderSkeleton from "@/features/home/testimonials/skeleton/TestimonialsHeaderSkeleton";
import TrustWallSkeleton from "@/features/home/testimonials/skeleton/TrustWallSkeleton";

export default function TestimonialsSectionSkeleton() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="relative py-12 md:py-16 xl:py-18 overflow-hidden"
    >
      {/* نفس الـ background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_70%)]" />

      <div className="container mx-auto px-4 max-w-7xl">
        <TestimonialsHeaderSkeleton />

        <div className="mt-7 md:mt-12 lg:mt-14">
          <TrustWallSkeleton />
        </div>
      </div>
    </section>
  );
}

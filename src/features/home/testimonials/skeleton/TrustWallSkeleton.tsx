import LogoCardSkeleton from "@/features/home/testimonials/skeleton/LogoCardSkeleton";

export default function TrustWallSkeleton() {
  return (
    <div
      className="
      grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6
      gap-8 md:gap-10
    "
    >
      {Array.from({ length: 12 }).map((_, i) => (
        <LogoCardSkeleton key={i} />
      ))}
    </div>
  );
}

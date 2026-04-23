import { SkeletonCard } from "@/features/home/sevices/skeleton/SkeletonCard";

export function ServicesSkeleton() {
  return (
    <section className="relative py-12 md:py-16 xl:py-18">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto animate-pulse">
          <div className="h-10 md:h-14 bg-muted rounded w-2/3 mx-auto" />
          <div className="mt-4 h-4 bg-muted rounded w-full" />
          <div className="mt-2 h-4 bg-muted rounded w-5/6 mx-auto" />
        </div>

        {/* Cards */}
        <div className="mt-10 md:mt-12 grid gap-6 md:grid-cols-3">
          <SkeletonCard featured />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>

        {/* Button */}
        <div className="mt-10 md:mt-12 flex justify-center animate-pulse">
          <div className="h-12 w-40 rounded-xl bg-muted" />
        </div>
      </div>
    </section>
  );
}

function WhyVisualSkeleton() {
  return (
    <div
      className="
        relative rounded-2xl border border-border bg-card p-8
        min-h-[280px] overflow-hidden
        skeleton
      "
    >
      {/* glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />

      <div className="relative z-10 space-y-4">
        <div className="h-5 w-1/2 bg-muted rounded" />
        <div className="h-4 w-full bg-muted rounded" />
        <div className="h-4 w-5/6 bg-muted rounded" />
        <div className="h-4 w-2/3 bg-muted rounded" />
      </div>

      {/* badge */}
      <div className="absolute bottom-4 right-4 h-6 w-16 rounded-full bg-muted" />
    </div>
  );
}

function WhyListSkeleton() {
  return (
    <div className="flex flex-col gap-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="
            p-5 rounded-xl border border-border
            skeleton
          "
        >
          <div className="h-4 w-1/3 bg-muted rounded" />
          <div className="mt-2 h-3 w-full bg-muted rounded" />
          <div className="mt-1 h-3 w-5/6 bg-muted rounded" />
        </div>
      ))}
    </div>
  );
}

function StatsSkeleton() {
  return (
    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="
            text-center p-4 rounded-xl
            bg-muted/50 border border-border
            skeleton
          "
        >
          <div className="h-6 w-16 mx-auto bg-muted rounded" />
          <div className="mt-2 h-3 w-20 mx-auto bg-muted rounded" />
        </div>
      ))}
    </div>
  );
}

export function WhyChooseUsSkeleton() {
  return (
    <section className="relative py-12 md:py-16 xl:py-18">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto skeleton">
          <div className="h-10 md:h-14 bg-muted rounded w-2/3 mx-auto" />
          <div className="mt-4 h-4 bg-muted rounded w-full" />
          <div className="mt-2 h-4 bg-muted rounded w-5/6 mx-auto" />
        </div>

        {/* Layout */}
        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
          <WhyListSkeleton />
          <WhyVisualSkeleton />
        </div>

        {/* Stats */}
        <StatsSkeleton />
      </div>
    </section>
  );
}

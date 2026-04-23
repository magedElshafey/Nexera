export function SkeletonCard({ featured }: { featured?: boolean }) {
  return (
    <div
      className={`
        relative rounded-3xl border border-border bg-card
        ${featured ? "md:col-span-2 min-h-[260px]" : "min-h-[200px]"}
      `}
    >
      <div className="p-6 flex flex-col h-full skeleton">
        {/* Icon */}
        <div className="w-12 h-12 rounded-xl bg-muted" />

        {/* Title + Desc */}
        <div className="mt-6 space-y-3">
          <div
            className={`h-4 rounded bg-muted ${featured ? "w-1/2" : "w-2/3"}`}
          />
          <div className="h-3 rounded bg-muted w-full" />
          <div className="h-3 rounded bg-muted w-5/6" />
        </div>

        {/* Button */}
        <div className="mt-auto pt-6">
          <div className="h-10 w-28 rounded-xl bg-muted" />
        </div>
      </div>
    </div>
  );
}

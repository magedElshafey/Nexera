export default function ContactInfoSkeleton() {
  return (
    <div className="grid sm:grid-cols-3 gap-4">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="p-4 rounded-2xl border border-border bg-card">
          <div className="flex flex-col gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary/10 skeleton" />

            <div className="h-3 w-1/2 skeleton rounded" />

            <div className="h-4 w-3/4 skeleton rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}

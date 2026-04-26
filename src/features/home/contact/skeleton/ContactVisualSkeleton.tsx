export default function ContactVisualSkeleton() {
  return (
    <div className="relative rounded-3xl border border-border bg-card p-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />

      <div className="relative z-10 grid grid-cols-6 gap-2 opacity-40">
        {Array.from({ length: 36 }).map((_, i) => (
          <div key={i} className="h-6 bg-border rounded" />
        ))}
      </div>
    </div>
  );
}

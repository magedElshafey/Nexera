"use client";

export default function WhyList({
  reasons,
  active,
  setActive,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  reasons: any[];
  active: number;
  setActive: (i: number) => void;
}) {
  return (
    <div className="flex flex-col gap-4">
      {reasons.map((r, i) => (
        <button
          key={r.key}
          onMouseEnter={() => setActive(i)}
          className={`
            p-5 rounded-xl border transition
            ${active === i ? "border-primary bg-primary/5" : "border-border"}
          `}
        >
          <h3>{r.title}</h3>
          <p className="text-sm text-muted-foreground">{r.desc}</p>
        </button>
      ))}
    </div>
  );
}

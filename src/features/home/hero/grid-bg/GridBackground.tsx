// GridBackground.tsx
export default function GridBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      {/* grid */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* mesh (reuse بتاعتك) */}
      <div className="absolute w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl top-[-100px] left-[-100px]" />
      <div className="absolute w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl bottom-[-100px] right-[-100px]" />
    </div>
  );
}

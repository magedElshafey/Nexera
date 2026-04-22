export default function HeroSkeleton() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-10 bg-background" />

      <div className="container mx-auto px-4 text-center max-w-3xl">
        {/* Title */}
        <div className="mx-auto h-10 md:h-14 w-[80%] rounded-md skeleton" />

        {/* Description */}
        <div className="mt-6 space-y-2">
          <div className="h-4 w-[90%] mx-auto rounded skeleton" />
          <div className="h-4 w-[70%] mx-auto rounded skeleton" />
        </div>

        {/* Features */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-8 w-24 rounded-full skeleton" />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 flex justify-center gap-4">
          <div className="h-12 w-36 rounded-lg skeleton" />
        </div>

        {/* Illustration */}
        <div className="mt-12 flex justify-center">
          <div className="w-full max-w-md h-[220px] rounded-xl skeleton" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border border-border rounded-full flex justify-center">
          <div className="w-1 h-2 mt-2 rounded-full skeleton" />
        </div>
      </div>
    </section>
  );
}

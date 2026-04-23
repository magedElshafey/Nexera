export default function LogoCardSkeleton() {
  return (
    <div className="relative">
      {/* نفس الكارد بالظبط */}
      <div
        className="
        relative w-[150px] h-[150px] md:w-[190px] md:h-[190px]
        flex items-center justify-center rounded-2xl
        border border-border
        bg-card/70
        backdrop-blur-xl
        shadow-sm
      "
      >
        {/* fake logo */}
        <div className="w-16 h-16 md:w-20 md:h-20 skeleton rounded-md" />
      </div>
    </div>
  );
}

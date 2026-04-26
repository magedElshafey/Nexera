export default function ContactConversationSkeleton() {
  return (
    <div className="flex flex-col gap-6">
      {/* question */}
      <div className="h-8 md:h-10 w-2/3 skeleton rounded" />

      {/* input */}
      <div>
        <div className="w-full h-[48px] px-4 py-3 rounded-xl bg-muted border border-border skeleton" />

        {/* نفس ارتفاع error بالظبط */}
        <div className="h-[25px] my-2" />
      </div>

      {/* buttons */}
      <div className="flex gap-2">
        <div className="h-10 w-24 skeleton rounded-lg" />
        <div className="h-10 w-24 skeleton rounded-lg" />
      </div>
    </div>
  );
}

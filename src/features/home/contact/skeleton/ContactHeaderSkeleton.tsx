export default function ContactHeaderSkeleton() {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <div className="h-10 md:h-14 w-3/4 mx-auto skeleton rounded-lg" />

      <div className="mt-4 h-4 w-2/3 mx-auto skeleton rounded" />
    </div>
  );
}

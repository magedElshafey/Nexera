import ContactConversationSkeleton from "./ContactConversationSkeleton";
import ContactInfoSkeleton from "./ContactInfoSkeleton";
import ContactVisualSkeleton from "./ContactVisualSkeleton";

export default function ContactLayoutSkeleton() {
  return (
    <div className="mt-7 md:mt-12 lg:mt-14 grid lg:grid-cols-2 gap-16 items-start">
      <div className="flex flex-col gap-8">
        <ContactConversationSkeleton />
        <ContactInfoSkeleton />
      </div>

      <ContactVisualSkeleton />
    </div>
  );
}

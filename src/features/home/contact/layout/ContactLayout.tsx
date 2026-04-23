// layout/ContactLayout.tsx
"use client";

import ContactVisual from "../visual/ContactVisual";
import ContactInfo from "../info/ContactInfo";
import ContactConversation from "@/features/home/contact/conversation/ContactConversation";

export default function ContactLayout({
  contact,
}: {
  contact: {
    phone: string;
    email: string;
    address: string;
  };
}) {
  return (
    <div className="mt-7 md:mt-12 lg:mt-14 grid lg:grid-cols-2 gap-16 items-start">
      <div className="flex flex-col gap-8">
        <ContactConversation />
        <ContactInfo contact={contact} />
      </div>

      <ContactVisual />
    </div>
  );
}

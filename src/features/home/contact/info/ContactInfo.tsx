// "use client";

// import { motion } from "framer-motion";
// import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

// export default function ContactInfo({
//   contact,
// }: {
//   contact: {
//     phone: string;
//     email: string;
//     address: string;
//   };
// }) {
//   const items = [
//     { icon: FaPhone, label: "Phone", value: contact.phone },
//     { icon: FaEnvelope, label: "Email", value: contact.email },
//     { icon: FaMapMarkerAlt, label: "Location", value: contact.address },
//   ];

//   return (
//     <div className="grid sm:grid-cols-3 gap-4">
//       {items.map((item, i) => {
//         const Icon = item.icon;

//         return (
//           <motion.div
//             key={i}
//             whileHover={{ y: -4, scale: 1.02 }}
//             className="
//               relative p-4 rounded-2xl border border-border
//               bg-card overflow-hidden group
//             "
//           >
//             {/* glow */}
//             <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition" />

//             <div className="relative z-10 flex flex-col gap-2">
//               <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
//                 <Icon />
//               </div>

//               <span className="text-xs text-muted-foreground">
//                 {item.label}
//               </span>

//               <span className="text-sm font-medium">{item.value}</span>
//             </div>
//           </motion.div>
//         );
//       })}
//     </div>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useTranslations } from "next-intl";

export default function ContactInfo({
  contact,
}: {
  contact: {
    phone: string;
    email: string;
    address: string;
  };
}) {
  const t = useTranslations("Contact.Info");

  const items = [
    {
      icon: FaPhone,
      label: t("phone"),
      value: contact.phone,
      href: `https://wa.me/${contact.phone.replace(/\D/g, "")}`,
      type: "phone",
    },
    {
      icon: FaEnvelope,
      label: t("email"),
      value: contact.email,
      href: `mailto:${contact.email}`,
      type: "email",
    },
    {
      icon: FaMapMarkerAlt,
      label: t("location"),
      value: contact.address,
      href: null,
      type: "address",
    },
  ];

  return (
    <div className="grid sm:grid-cols-3 gap-4">
      {items.map((item, i) => {
        const Icon = item.icon;

        const Wrapper = item.href ? "a" : "div";

        return (
          <motion.div key={i} whileHover={{ y: -3 }} className="group">
            <Wrapper
              {...(item.href && {
                href: item.href,
                target: "_blank",
              })}
              className="
                block p-4 rounded-2xl border border-border
                bg-card transition
                hover:border-primary
              "
            >
              <div className="flex flex-col gap-2">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon />
                </div>

                <span className="text-xs text-muted-foreground">
                  {item.label}
                </span>

                <span
                  dir={item?.type === "phone" ? "ltr" : ""}
                  className="text-sm font-medium text-center"
                >
                  {item.value}
                </span>
              </div>
            </Wrapper>
          </motion.div>
        );
      })}
    </div>
  );
}

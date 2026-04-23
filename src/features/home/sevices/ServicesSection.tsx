// "use client";

// import { motion, useReducedMotion } from "framer-motion";
// import { useState } from "react";
// import { useTranslations } from "next-intl";
// import { Link } from "@/i18n/navigation";
// import { Button } from "@/design-system/components/button/Button";

// // ✅ reuse motion system
// import {
//   fadeUp,
//   fadeLeft,
//   fadeRight,
//   scaleIn,
//   staggerContainer,
//   hoverScale,
// } from "@/lib/motion-config/motion";
// import { services } from "@/features/home/sevices/data/services.data";
// import ServiceCard from "@/features/home/sevices/card/ServiceCard";
// import ServiceHeader from "@/features/home/sevices/header/ServiceHeader";
// import DynamicServiceBg from "@/features/home/sevices/dynamic-bg/DynamicServiceBg";
// export default function ServicesSection() {
//   const t = useTranslations("Services");
//   const [active, setActive] = useState(0);
//   const shouldReduceMotion = useReducedMotion();
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   const safe = (v: any) => (shouldReduceMotion ? {} : v);
//   return (
//     <section
//       id="services-section"
//       aria-labelledby="services-heading"
//       className="relative py-12 md:py-16 xl:py-18 overflow-hidden"
//     >
//       {/* 🔥 Dynamic Background */}
//       <DynamicServiceBg services={services} active={active} />

//       <div className="container mx-auto px-4 max-w-7xl">
//         {/* Header */}
//         <ServiceHeader safe={safe} />

//         {/* Cards */}
//         <motion.div
//           variants={staggerContainer}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-80px" }}
//           className="mt-10 md:mt-12 grid gap-6 md:grid-cols-3"
//         >
//           {services.map((s, i) => {
//             const Icon = s.icon;
//             const isFeatured = s.featured;

//             return (
//               <ServiceCard
//                 key={s.key}
//                 onHover={() => setActive(i)}
//                 className={`
//                   ${
//                     isFeatured
//                       ? "md:col-span-2 min-h-[260px] border-primary shadow-lg"
//                       : "min-h-[200px]"
//                   }
//                 `}
//               >
//                 <motion.div
//                   variants={safe(
//                     isFeatured ? scaleIn : i % 2 === 0 ? fadeLeft : fadeRight,
//                   )}
//                   {...hoverScale}
//                   className="flex flex-col h-full"
//                 >
//                   {/* Icon */}
//                   <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10">
//                     <Icon className="text-primary" size={22} />
//                   </div>

//                   {/* Content */}
//                   <div className="mt-6">
//                     <h3
//                       className={`font-semibold ${
//                         isFeatured ? "text-2xl" : "text-lg"
//                       }`}
//                     >
//                       {t(`${s.key}.title`)}
//                     </h3>

//                     <p className="mt-2 text-muted-foreground">
//                       {t(`${s.key}.desc`)}
//                     </p>
//                   </div>

//                   {/* CTA */}
//                   <div className="mt-auto pt-6">
//                     <Link
//                       href={{
//                         pathname: "/services/[slug]",
//                         params: { slug: s.key },
//                       }}
//                     >
//                       <Button variant={isFeatured ? "primary" : "ghost"}>
//                         {t("readmore")}
//                       </Button>
//                     </Link>
//                   </div>
//                 </motion.div>
//               </ServiceCard>
//             );
//           })}
//         </motion.div>

//         {/* View All */}
//         <motion.div
//           variants={safe(fadeUp)}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="mt-10 md:mt-12 flex justify-center"
//         >
//           <Link href="/services">
//             <Button size="lg" variant="accent">
//               {t("viewAll")}
//             </Button>
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// ServicesSection.tsx (Server)

import { getTranslations } from "next-intl/server";
import ServicesClient from "./ServicesClient";
import { services } from "@/features/home/sevices/data/services.data";

export default async function ServicesSection() {
  const t = await getTranslations("Services");

  const data = {
    title: t("title"),
    description: t("description"),
    readmore: t("readmore"),
    viewAll: t("viewAll"),
    services: services.map((s) => ({
      ...s,
      title: t(`${s.key}.title`),
      desc: t(`${s.key}.desc`),
    })),
  };

  return <ServicesClient data={data} />;
}

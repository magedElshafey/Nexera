// "use client";

// import { useState } from "react";
// import { useTranslations } from "next-intl";
// import { WhyVisual } from "@/features/home/why-us/visual-pannel/WhyVisual";
// import { Stats } from "@/features/home/why-us/stats/Stats";

// export default function WhyChooseUs() {
//   const t = useTranslations("Why");
//   const [active, setActive] = useState(0);

//   const reasons = [
//     { key: "security" },
//     { key: "team" },
//     { key: "speed" },
//     { key: "quality" },
//   ];

//   return (
//     <section className="relative py-12 md:py-16 xl:py-18 overflow-hidden">
//       <div className="container mx-auto px-4 max-w-7xl">
//         {/* Header */}
//         <div className="text-center max-w-2xl mx-auto">
//           <h2 className="text-4xl md:text-6xl font-bold">{t("title")}</h2>
//           <p className="mt-4 text-muted-foreground">{t("description")}</p>
//         </div>

//         {/* Layout */}
//         <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
//           {/* LEFT */}
//           <div className="flex flex-col gap-4">
//             {reasons.map((r, i) => (
//               <button
//                 key={r.key}
//                 onMouseEnter={() => setActive(i)}
//                 className={`
//                   p-5 rounded-xl border transition
//                   ${
//                     active === i
//                       ? "border-primary bg-primary/5"
//                       : "border-border"
//                   }
//                 `}
//               >
//                 <h3>{t(`${r.key}.title`)}</h3>
//                 <p className="text-sm text-muted-foreground">
//                   {t(`${r.key}.desc`)}
//                 </p>
//               </button>
//             ))}
//           </div>

//           {/* RIGHT */}
//           <WhyVisual
//             title={t(`${reasons[active].key}.title`)}
//             desc={t(`${reasons[active].key}.long`)}
//           />
//         </div>

//         {/* Stats */}
//         <Stats />
//       </div>
//     </section>
//   );
// }

// WhyChooseUs.tsx (Server)

import { getTranslations } from "next-intl/server";
import WhyClient from "./WhyClient";
import { reasons, stats } from "./data/why.data";

export default async function WhyChooseUs() {
  const t = await getTranslations("Why");
  const statsT = await getTranslations("Stats");

  const data = {
    title: t("title"),
    description: t("description"),

    reasons: reasons.map((r) => ({
      key: r.key,
      title: t(`${r.key}.title`),
      desc: t(`${r.key}.desc`),
      long: t(`${r.key}.long`),
    })),

    stats: stats.map((s) => ({
      ...s,
      label: statsT(s.label),
    })),
  };

  return <WhyClient data={data} />;
}

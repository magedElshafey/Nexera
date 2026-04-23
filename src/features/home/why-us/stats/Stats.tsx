// import Counter from "@/features/home/why-us/counter/Counter";
// import { useTranslations } from "next-intl";
// const stats = [
//   { value: 500, suffix: "+", label: "clients" },
//   { value: 1200, suffix: "+", label: "workers" },
//   { value: 24, suffix: "/7", label: "support" },
//   { value: 99, suffix: "%", label: "satisfaction" },
// ];

// export function Stats() {
//   const t = useTranslations("Stats");
//   return (
//     <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
//       {stats.map((s) => (
//         <div
//           key={t(s.label)}
//           className="text-center p-4 rounded-xl bg-muted/50 border border-border"
//         >
//           <p className="text-2xl font-bold text-primary">
//             <Counter value={s.value} />
//             {s.suffix}
//           </p>

//           <p className="text-sm text-muted-foreground">{t(s.label)}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

"use client";

import Counter from "@/features/home/why-us/counter/Counter";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Stats({ stats }: { stats: any[] }) {
  return (
    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((s) => (
        <div
          key={s.label}
          className="text-center p-4 rounded-xl bg-muted/50 border border-border"
        >
          <p className="text-2xl font-bold text-primary">
            <Counter value={s.value} />
            {s.suffix}
          </p>

          <p className="text-sm text-muted-foreground">{s.label}</p>
        </div>
      ))}
    </div>
  );
}

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import WhyList from "@/features/home/why-us/list/WhyList";
import { Stats } from "@/features/home/why-us/stats/Stats";
import { WhyVisual } from "@/features/home/why-us/visual-pannel/WhyVisual";
import { useState } from "react";

export default function WhyClient({ data }: { data: any }) {
  const [active, setActive] = useState(0);

  return (
    <section className="relative py-12 md:py-16 xl:py-18 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold">{data.title}</h2>
          <p className="mt-4 text-muted-foreground">{data.description}</p>
        </div>

        {/* Layout */}
        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
          <WhyList
            reasons={data.reasons}
            active={active}
            setActive={setActive}
          />

          <WhyVisual
            title={data.reasons[active].title}
            desc={data.reasons[active].long}
          />
        </div>

        <Stats stats={data.stats} />
      </div>
    </section>
  );
}

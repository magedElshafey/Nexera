/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import ServicePreview from "@/features/services/pereview/ServicePreview";
import ServicesGrid from "@/features/services/grid/ServicesGrid";

export default function ServicesLayout({ data }: any) {
  const [active, setActive] = useState(0);

  return (
    <div className="mt-16 grid lg:grid-cols-2 gap-10 items-start">
      {/* LEFT: GRID */}
      <ServicesGrid data={data} setActive={setActive} />

      {/* RIGHT: PREVIEW */}
      <ServicePreview service={data[active]} />
    </div>
  );
}

// hooks/useMouseParallax.ts
"use client";

import { useEffect } from "react";

export function useMouseParallax(
  containerRef: React.RefObject<HTMLElement | null>,
) {
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let raf = 0;

    const onMove = (e: MouseEvent) => {
      if (raf) cancelAnimationFrame(raf);

      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        el.style.setProperty("--px", x.toString());
        el.style.setProperty("--py", y.toString());
      });
    };

    el.addEventListener("mousemove", onMove);
    return () => {
      el.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [containerRef]);
}

"use client";

import { useEffect, useState } from "react";

export default function GlowCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        background: `radial-gradient(300px at ${pos.x}px ${pos.y}px, rgba(47,115,183,0.15), transparent 80%)`,
      }}
    />
  );
}

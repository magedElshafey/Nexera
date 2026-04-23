/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function LogoCard({ logo }: any) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  function handleMove(e: any) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = (y / rect.height - 0.5) * 10;
    const rotateY = (x / rect.width - 0.5) * -10;

    setPos({ x: rotateX, y: rotateY });
  }

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      style={{
        transform: `perspective(800px) rotateX(${pos.x}deg) rotateY(${pos.y}deg)`,
      }}
      whileHover={{ scale: 1.05 }}
      className="relative group"
    >
      {/* Spotlight */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-[radial-gradient(circle_at_center,var(--primary)/0.15,transparent_70%)] rounded-2xl" />

      {/* Card */}
      <div
        className="
        relative w-[150px] h-[150px] md:w-[190px] md:h-[190px]
        flex items-center justify-center rounded-2xl
        border border-border
        bg-card/70
        backdrop-blur-xl
        shadow-sm
        hover:shadow-lg
        transition-all duration-300
      "
      >
        <Image
          src={logo}
          alt="Company logo"
          fill
          className="
            object-contain p-8
            grayscale opacity-70
            transition-all duration-300
            group-hover:grayscale-0 group-hover:opacity-100
          "
        />
      </div>
    </motion.div>
  );
}

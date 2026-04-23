/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { motion } from "framer-motion";

import logo1 from "@/assets/400x400.png";
import logo2 from "@/assets/400x400.png";
import logo3 from "@/assets/400x400.png";
import logo4 from "@/assets/400x400.png";
import logo5 from "@/assets/400x400.png";
import logo6 from "@/assets/400x400.png";
import LogoCard from "@/features/home/testimonials/logo-card/LogoCard";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

export default function TrustWall() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.08,
          },
        },
      }}
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8 md:gap-10"
    >
      {[...logos, ...logos].map((logo, i) => (
        <motion.div
          key={i}
          variants={{
            hidden: { opacity: 0, y: 40, scale: 0.9 },
            visible: { opacity: 1, y: 0, scale: 1 },
          }}
        >
          <LogoCard logo={logo} index={i} />
        </motion.div>
      ))}
    </motion.div>
  );
}

"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaShieldAlt,
  FaUserCheck,
  FaCogs,
  FaChartLine,
  FaUsers,
} from "react-icons/fa";

const icons = [FaShieldAlt, FaUserCheck, FaCogs, FaChartLine, FaUsers];

export default function CultureGrid({
  values,
}: {
  values: { label: string; desc: string }[];
}) {
  const [active, setActive] = useState<number | null>(null);
  const t = useTranslations("teamCulture");
  return (
    <div className="mt-20 grid md:grid-cols-3 gap-6">
      {/* 🔥 MAIN CARD */}
      <motion.div
        onMouseEnter={() => setActive(-1)}
        onMouseLeave={() => setActive(null)}
        className={`
          md:col-span-2 row-span-2
          p-8 rounded-3xl border bg-card relative overflow-hidden
          transition-all duration-300
          ${
            active !== null && active !== -1
              ? "opacity-40 blur-[1px]"
              : "opacity-100"
          }
        `}
      >
        {/* glow */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 hover:opacity-100 transition" />

        <div className="relative z-10">
          <h3 className="text-2xl md:text-3xl font-bold">{t("title")}</h3>

          <p className="mt-4 text-muted-foreground max-w-lg">
            {t("description")}
          </p>

          <div className="mt-6 text-sm text-primary font-medium">
            {t("badge")}
          </div>
        </div>
      </motion.div>

      {/* 🔥 VALUES */}
      {values.map((v, i) => {
        const Icon = icons[i % icons.length];
        const isActive = active === i;

        return (
          <motion.div
            key={i}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            whileHover={{ y: -6, scale: 1.03 }}
            className={`
              p-6 rounded-2xl border bg-card relative overflow-hidden
              transition-all duration-300
              ${
                active !== null && !isActive
                  ? "opacity-40 blur-[1px] scale-[0.98]"
                  : "opacity-100"
              }
              ${isActive ? "border-primary shadow-lg" : "border-border"}
            `}
          >
            {/* glow */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 hover:opacity-100 transition" />

            <div className="relative z-10">
              {/* icon */}
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 mb-4">
                <Icon className="text-primary" />
              </div>

              <h4 className="font-semibold">{v.label}</h4>

              <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

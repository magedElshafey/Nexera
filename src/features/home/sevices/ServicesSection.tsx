"use client";

import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";
import { useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/design-system/components/button/Button";

import {
  FaShieldAlt,
  FaBroom,
  FaHardHat,
  FaStore,
  FaUserTie,
} from "react-icons/fa";

// ✅ reuse motion system
import {
  fadeUp,
  fadeLeft,
  fadeRight,
  scaleIn,
  staggerContainer,
  hoverScale,
} from "@/lib/motion-config/motion";

export const services = [
  {
    key: "security",
    icon: FaShieldAlt,
    featured: true,
    color: "from-primary/30 via-primary/10 to-transparent",
  },
  {
    key: "cleaning",
    icon: FaBroom,
    color: "from-accent/30 via-accent/10 to-transparent",
  },
  {
    key: "maintenance",
    icon: FaHardHat,
    color: "from-primary/20 via-accent/10 to-transparent",
  },
  {
    key: "retail",
    icon: FaStore,
    color: "from-accent/25 via-primary/10 to-transparent",
  },
  {
    key: "staffing",
    icon: FaUserTie,
    color: "from-primary/25 via-transparent to-accent/20",
  },
];

function Card({
  children,
  className,
  onHover,
}: {
  children: React.ReactNode;
  className?: string;
  onHover?: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [6, -6]);
  const rotateY = useTransform(x, [-50, 50], [-6, 6]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (shouldReduceMotion) return;

    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <motion.article
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      onMouseEnter={onHover}
      style={shouldReduceMotion ? {} : { rotateX, rotateY }}
      className={`
        relative rounded-3xl border border-border bg-card
        transition-all duration-300 will-change-transform
        hover:scale-[1.02] hover:border-primary
        ${className}
      `}
    >
      <div className="relative p-6 flex flex-col h-full">{children}</div>
    </motion.article>
  );
}

export default function ServicesSection() {
  const t = useTranslations("Services");
  const [active, setActive] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const safe = (v: any) => (shouldReduceMotion ? {} : v);
  return (
    <section
      id="services-section"
      aria-labelledby="services-heading"
      className="relative py-12 md:py-16 xl:py-18 overflow-hidden"
    >
      {/* 🔥 Dynamic Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className={`
            absolute inset-0 -z-10 bg-gradient-to-b
            ${services[active].color}
          `}
        />
      </AnimatePresence>

      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <motion.header
          variants={safe(fadeUp)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 id="services-heading" className="text-4xl md:text-6xl font-bold">
            {t("title")}
          </h2>
          <p className="mt-4 text-muted-foreground">{t("description")}</p>
        </motion.header>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-10 md:mt-12 grid gap-6 md:grid-cols-3"
        >
          {services.map((s, i) => {
            const Icon = s.icon;
            const isFeatured = s.featured;

            return (
              <Card
                key={s.key}
                onHover={() => setActive(i)}
                className={`
                  ${
                    isFeatured
                      ? "md:col-span-2 min-h-[260px] border-primary shadow-lg"
                      : "min-h-[200px]"
                  }
                `}
              >
                <motion.div
                  variants={safe(
                    isFeatured ? scaleIn : i % 2 === 0 ? fadeLeft : fadeRight,
                  )}
                  {...hoverScale}
                  className="flex flex-col h-full"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="text-primary" size={22} />
                  </div>

                  {/* Content */}
                  <div className="mt-6">
                    <h3
                      className={`font-semibold ${
                        isFeatured ? "text-2xl" : "text-lg"
                      }`}
                    >
                      {t(`${s.key}.title`)}
                    </h3>

                    <p className="mt-2 text-muted-foreground">
                      {t(`${s.key}.desc`)}
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="mt-auto pt-6">
                    <Link href={`/services/${s.key}`}>
                      <Button variant={isFeatured ? "primary" : "ghost"}>
                        {t("readmore")}
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              </Card>
            );
          })}
        </motion.div>

        {/* View All */}
        <motion.div
          variants={safe(fadeUp)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 md:mt-12 flex justify-center"
        >
          <Link href="/services">
            <Button size="lg" variant="accent">
              {t("viewAll")}
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

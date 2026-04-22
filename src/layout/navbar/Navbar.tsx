"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { navLinks } from "@/layout/navbar/data/navbar.data";
import ThemeToggle from "@/layout/theme-toggle/ThemeToggle";
import LanguageSwitcher from "@/layout/language-swircher/LanguageSwitcher";
import AppLogo from "@/layout/logo/AppLogo";
import { useNavbarBehavior } from "./hook/useNavbarVisibility";
import logo from "@/assets/nexera-logo.png";
import MobileNavbar from "@/layout/navbar/mobile-navbar/MobileNavbar";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const pathname = usePathname();

  const { visible, scrolled, setHovered } = useNavbarBehavior();

  // progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-0.5 bg-primary origin-left z-60"
      />

      <motion.header
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        initial={{ y: -100 }}
        animate={{ y: visible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className={`
          sticky top-0 z-50 w-full border-b transition-all duration-300
          ${
            scrolled
              ? "bg-background/80 backdrop-blur-md shadow-sm border-border"
              : "bg-transparent border-transparent"
          }
        `}
      >
        <nav
          className={`
            container mx-auto flex items-center justify-between px-4
            transition-all duration-300
            ${scrolled ? "py-2" : "py-4"}
          `}
        >
          <AppLogo logo={logo} />

          {/* Desktop Links */}
          <ul className="relative hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <li key={link.href} className="relative">
                  <Link
                    href={link.href}
                    className={`px-3 py-1.5 text-sm font-medium transition-colors
                    ${
                      isActive
                        ? "text-primary"
                        : "text-foreground/80 hover:text-primary"
                    }`}
                  >
                    {t(link.label)}
                  </Link>

                  {/* sliding pill */}
                  {isActive && (
                    <motion.span
                      layoutId="active-pill"
                      className="absolute inset-0 rounded-md bg-primary/10 -z-10"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </li>
              );
            })}
          </ul>

          {/* Actions */}
          <div className="hidden md:flex gap-3 items-center">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
          <MobileNavbar />
        </nav>
      </motion.header>
    </>
  );
}

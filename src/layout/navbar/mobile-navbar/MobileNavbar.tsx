import { Link, usePathname } from "@/i18n/navigation";
import AppLogo from "@/layout/logo/AppLogo";
import { useState } from "react";
import { motion } from "framer-motion";
import { navLinks } from "@/layout/navbar/data/navbar.data";
import logo from "@/assets/nexera-logo.png";
import { useTranslations, useLocale } from "next-intl";
import ThemeToggle from "@/layout/theme-toggle/ThemeToggle";
import LanguageSwitcher from "../../language-swircher/LanguageSwitcher";
const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations("Navbar");
  const locale = useLocale();
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="md:hidden flex items-center justify-center w-10 h-10 rounded-md border border-border"
        aria-label="Open Menu"
      >
        ☰
      </button>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: open ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={`fixed inset-0 z-100 bg-black/40 backdrop-blur-sm ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Mobile Sheet */}
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: open ? "0%" : "-100%" }}
        transition={{ type: "spring", stiffness: 260, damping: 25 }}
        className="fixed top-0 left-0 right-0 z-110 bg-background border-b border-border shadow-lg md:hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-border">
          <AppLogo logo={logo} />

          <button
            onClick={() => setOpen(false)}
            className="w-10 h-10 flex items-center justify-center rounded-md border border-border"
            aria-label="Close Menu"
          >
            ✕
          </button>
        </div>

        {/* Links */}
        <ul className="flex flex-col gap-2 p-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`
              flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium
              transition-all
              ${
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-foreground/80 hover:bg-muted"
              }
            `}
                >
                  {t(link.label)}

                  {/* arrow */}
                  <span className="text-sm opacity-60">
                    {locale === "ar" ? "←" : "→"}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Actions */}
        <div className="flex items-center justify-between px-4 py-4 border-t border-border">
          <ThemeToggle />
          <LanguageSwitcher />
        </div>
      </motion.div>
    </>
  );
};

export default MobileNavbar;

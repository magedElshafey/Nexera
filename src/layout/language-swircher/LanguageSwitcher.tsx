"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { routing } from "@/i18n/routing";
import { localeNames, type Locale } from "@/i18n/locale-config";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { useSearchParams } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";
import { FaGlobe } from "react-icons/fa";

const FLAGS: Record<Locale, string> = {
  en: "🇺🇸",
  ar: "🇪🇬",
};

const LangSwitcher = () => {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const changeLocale = (nextLocale: Locale) => {
    const query = searchParams.toString();
    const url = query ? `${pathname}?${query}` : pathname;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    router.replace(url as any, { locale: nextLocale });

    setOpen(false);
  };

  const { currentLang, otherLangs } = useMemo(() => {
    const current = routing.locales.find((l) => l === locale);
    const others = routing.locales.filter((l) => l !== locale);

    return {
      currentLang: current,
      otherLangs: others,
    };
  }, [locale]);

  // detect mobile
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();

    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // close on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // keyboard accessibility
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "Enter" || e.key === "ArrowDown") setOpen(true);
    };

    document.addEventListener("keydown", handleKey);

    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  if (!currentLang) return null;

  return (
    <div
      ref={containerRef}
      className="relative select-none"
      {...(!isMobile && {
        onMouseEnter: () => setOpen(true),
        onMouseLeave: () => setOpen(false),
      })}
    >
      {/* Trigger */}
      <button
        onClick={() => isMobile && setOpen((prev) => !prev)}
        className="flex items-center gap-2  border-b-4 border-b-transparent group cursor-pointer focus:outline-none text-sm text-foreground/80 hover:text-primary"
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <FaGlobe size={15} />

        <span>{localeNames[currentLang as Locale]}</span>

        <IoIosArrowDown
          size={15}
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      <div
        className={`absolute top-full ${locale === "ar" ? "left-0" : "right-0"}  w-40 flex flex-col rounded-lg border border-border bg-background shadow-lg z-50 text-start
        transition-all duration-200 ease-out
        ${
          open
            ? "opacity-100 translate-y-0 "
            : "opacity-0 -translate-y-2  pointer-events-none"
        }`}
        role="menu"
      >
        {otherLangs.map((loc) => (
          <button
            key={loc}
            onClick={() => changeLocale(loc as Locale)}
            role="menuitem"
            className="flex items-center justify-between px-3 py-2 text-sm  text-foreground/80 hover:text-primary transition-colors duration-200"
          >
            <span>{localeNames[loc as Locale]}</span>

            <span>{FLAGS[loc as Locale]}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LangSwitcher;

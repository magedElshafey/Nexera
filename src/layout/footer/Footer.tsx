"use client";

import { motion, useReducedMotion } from "framer-motion";
import { footerContainer, footerItem } from "./lib/motion-footer/motion";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import AppLogo from "@/layout/logo/AppLogo";
import logo from "@/assets/nexera-logo.png";

export default function Footer() {
  const t = useTranslations("Footer");
  const reduce = useReducedMotion();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const safe = (v: any) => (reduce ? {} : v);

  return (
    <footer className="relative border-t border-border bg-background">
      {/* subtle top glow */}
      <div className="pointer-events-none absolute inset-x-0 -top-20 h-40 bg-gradient-to-b from-primary/10 to-transparent blur-2xl" />

      <motion.div
        variants={safe(footerContainer)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="container mx-auto px-4 py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4"
      >
        {/* Brand */}
        <motion.div variants={safe(footerItem)} className="space-y-4">
          <AppLogo logo={logo} />
          <p className="text-sm text-muted-foreground max-w-xs">
            {t("description")}
          </p>

          {/* Social */}
          <div className="flex items-center gap-3">
            {[FaFacebook, FaLinkedin, FaInstagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social"
                className="w-9 h-9 rounded-md border border-border flex items-center justify-center hover:bg-muted transition"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Links - Company */}
        <motion.div variants={safe(footerItem)} className="space-y-4">
          <h3 className="text-sm font-semibold">{t("company")}</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link href="/about-us" className="hover:text-primary transition">
                {t("about")}
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-primary transition">
                {t("services")}
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us"
                className="hover:text-primary transition"
              >
                {t("contact")}
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Links - Services */}
        <motion.div variants={safe(footerItem)} className="space-y-4">
          <h3 className="text-sm font-semibold">{t("servicesTitle")}</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>{t("security")}</li>
            <li>{t("cleaning")}</li>
            <li>{t("maintenance")}</li>
            <li>{t("workforce")}</li>
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div variants={safe(footerItem)} className="space-y-4">
          <h3 className="text-sm font-semibold">{t("contactTitle")}</h3>

          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <FaPhone size={12} />
              <span>+20 100 000 0000</span>
            </div>

            <div className="flex items-center gap-2">
              <FaEnvelope size={12} />
              <span>info@nexera.com</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <span>
            © {new Date().getFullYear()} Nexera. {t("rights")}
          </span>

          {/* <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-primary transition">
              {t("privacy")}
            </Link>
            <Link href="/terms" className="hover:text-primary transition">
              {t("terms")}
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
}

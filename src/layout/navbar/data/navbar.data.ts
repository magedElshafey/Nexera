type NavbarLinksType =
  | "/"
  | "/blogs"
  | "/about-us"
  | "/contact-us"
  | "/services";
export const navLinks: { href: NavbarLinksType; label: string }[] = [
  { href: "/", label: "home" },
  { href: "/about-us", label: "about" },
  { href: "/services", label: "services" },
  { href: "/blogs", label: "blogs" },
  { href: "/contact-us", label: "contact" },
];

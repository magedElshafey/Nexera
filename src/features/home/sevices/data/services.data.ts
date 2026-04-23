export type ServiceType = {
  key: string;
  icon: string;
  featured?: boolean;
  color: string;
};
export const services: ServiceType[] = [
  {
    key: "security",
    icon: "security",
    featured: true,
    color: "from-primary/30 via-primary/10 to-transparent",
  },
  {
    key: "cleaning",
    icon: "cleaning",
    color: "from-accent/30 via-accent/10 to-transparent",
  },
  {
    key: "maintenance",
    icon: "maintenance",
    color: "from-primary/20 via-accent/10 to-transparent",
  },
  {
    key: "retail",
    icon: "retail",
    color: "from-accent/25 via-primary/10 to-transparent",
  },
  {
    key: "staffing",
    icon: "staffing",
    color: "from-primary/25 via-transparent to-accent/20",
  },
];

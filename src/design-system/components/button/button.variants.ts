// components/ui/button/button.variants.ts
import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  `
  inline-flex items-center justify-center gap-2
  rounded-lg text-sm font-medium
  transition-all duration-200
  focus:outline-none focus:ring-2 focus:ring-primary/40
  disabled:opacity-50 disabled:pointer-events-none
  `,
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:opacity-90",
        secondary: "bg-muted text-foreground hover:bg-muted/80",
        ghost: "bg-transparent hover:bg-muted",
        outline: "border border-border hover:bg-muted",
        accent: "bg-accent text-accent-foreground hover:opacity-90",

        success: "bg-green-600 text-white hover:opacity-90",
        warning: "bg-yellow-500 text-black hover:opacity-90",
        info: "bg-blue-500 text-white hover:opacity-90",
        destructive: "bg-red-600 text-white hover:opacity-90",
      },

      size: {
        sm: "h-9 px-3",
        md: "h-10 px-4",
        lg: "h-12 px-6 text-base",
        icon: "h-10 w-10 p-0",
      },

      fullWidth: {
        true: "w-full",
      },

      loading: {
        true: "pointer-events-none",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

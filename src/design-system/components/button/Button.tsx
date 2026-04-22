"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { buttonVariants } from "./button.variants";
import { VariantProps } from "class-variance-authority";
import { cn } from "@/lib/clx/utils";

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      loading = false,
      leftIcon,
      rightIcon,
      children,
      fullWidth,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    // ⚠️ مهم: لو asChild لازم child واحد
    if (asChild && React.Children.count(children) !== 1) {
      console.error("Button with asChild requires a single child.");
      return null;
    }

    // return (
    //   <Comp
    //     ref={ref}
    //     className={cn(
    //       buttonVariants({ variant, size, fullWidth, loading }),
    //       className,
    //     )}
    //     disabled={!asChild ? loading || props.disabled : undefined}
    //     {...props}
    //   >
    //     {loading ? (
    //       <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
    //     ) : (
    //       <>
    //         {leftIcon}
    //         {children}
    //         {rightIcon}
    //       </>
    //     )}
    //   </Comp>
    // );
    return (
      <Comp
        ref={ref}
        className={cn(
          buttonVariants({ variant, size, fullWidth, loading }),
          className,
        )}
        disabled={!asChild ? loading || props.disabled : undefined}
        {...props}
      >
        {loading ? (
          <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        ) : (
          <span className="inline-flex items-center gap-2">
            {leftIcon}
            {children}
            {rightIcon}
          </span>
        )}
      </Comp>
    );
  },
);

Button.displayName = "Button";

export { Button };

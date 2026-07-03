"use client";

import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

const variants = {
  primary: "bg-nu-primary text-white hover:bg-nu-primary-dark active:bg-nu-primary-dark/90 shadow-sm",
  secondary: "bg-nu-secondary text-white hover:bg-nu-secondary-dark active:bg-nu-secondary-dark/90 shadow-sm",
  outline:
    "border-2 border-nu-primary text-nu-primary hover:bg-nu-primary hover:text-white active:bg-nu-primary-dark",
  ghost: "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-800 active:bg-neutral-200",
};

const sizes = {
  sm: "px-3 py-1.5 text-xs rounded-md",
  md: "px-5 py-2.5 text-sm rounded-lg",
  lg: "px-6 py-3 text-base rounded-lg",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", fullWidth, className, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          "inline-flex items-center justify-center gap-2 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-nu-primary/30 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
          variants[variant],
          sizes[size],
          fullWidth && "w-full",
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

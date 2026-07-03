import { cn } from "@/lib/utils";

interface BadgeProps {
  variant?: "tersedia" | "habis" | "preorder" | "default";
  children: React.ReactNode;
  className?: string;
}

const variants = {
  tersedia: "bg-green-100 text-green-800 border-green-200",
  habis: "bg-red-100 text-red-800 border-red-200",
  preorder: "bg-amber-100 text-amber-800 border-amber-200",
  default: "bg-neutral-100 text-neutral-700 border-neutral-200",
};

export function Badge({ variant = "default", children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-full border",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

import React from "react";
import { cn } from "@/lib/cn";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
};

export function Button({ children, variant = "primary", className = "", ...props }: ButtonProps) {
  const variantStyles = {
    primary:
      "bg-slate-950 text-white shadow-[0_10px_30px_-12px_rgba(15,23,42,0.9)] hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-[0_18px_40px_-16px_rgba(15,23,42,0.95)] active:translate-y-0 active:shadow-sm",
    secondary:
      "border border-slate-300 bg-white text-slate-900 hover:-translate-y-0.5 hover:border-slate-900 hover:bg-slate-50 active:translate-y-0",
    tertiary:
      "border border-slate-200 bg-white text-slate-700 shadow-sm hover:-translate-y-1 hover:border-slate-900 hover:text-slate-950 hover:shadow-[0_14px_36px_-20px_rgba(15,23,42,0.5)] active:translate-y-0 active:shadow-sm",
  };

  return (
    <button
      className={cn(
        "cursor-pointer inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-slate-300",
        variantStyles[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
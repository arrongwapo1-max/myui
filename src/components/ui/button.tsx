import React from "react";
import { cn } from "@/lib/cn";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
};

export function Button({ children, variant = "primary", className = "", ...props }: ButtonProps) {
  const variantStyles = {
    primary: "bg-black text-white hover:bg-gray-800",
    secondary: "bg-white text-gray-900  border border-gray-300 hover:bg-gray-50",
    tertiary: "group relative bg-white text-gray-700  border  border-gray-200 rounded-xl shadow-sm px-6 py-3   hover:border-black  hover:text-black   hover:shadow-xl  hover:-translate-y-1    transition-all   duration-300",
  };

  return (
    <button className={cn("cursor-pointer inline-flex items-center justify-center font-medium transition-colors focus:outline-none px-4 py-1.5 rounded-lg text-sm", 
      variantStyles[variant],
      className
    )}
    {...props}
    >
      {children}
    </button>
  );
}
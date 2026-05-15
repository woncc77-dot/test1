import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outlined' | 'ghost';
  size?: 'md' | 'lg' | 'icon';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const variants = {
      primary: "bg-primary text-on-primary hover:bg-primary-container/90 shadow-sm hover:shadow-lg",
      outlined: "border border-outline text-primary hover:bg-surface-variant",
      ghost: "text-on-surface-variant hover:bg-on-surface/8",
    };
    
    const sizes = {
      md: "px-6 py-2 text-sm font-medium",
      lg: "px-8 py-3.5 text-sm font-medium",
      icon: "p-2.5",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "rounded-full transition-all active:scale-95 flex items-center justify-center gap-2",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export const Card = ({ children, className, glass = false }: { children: React.ReactNode, className?: string, glass?: boolean }) => (
  <div className={cn(
    "rounded-xl border border-outline-variant overflow-hidden transition-all",
    glass ? "glass-card" : "bg-surface-container-high",
    className
  )}>
    {children}
  </div>
);

export const Chip = ({ children, variant = 'surface' }: { children: React.ReactNode, variant?: 'secondary' | 'surface', key?: React.Key }) => (
  <span className={cn(
    "px-3 py-1 rounded-lg text-xs font-medium uppercase tracking-wider",
    variant === 'secondary' 
      ? "bg-secondary-container text-on-secondary-container" 
      : "bg-surface-variant text-on-surface-variant border border-outline-variant"
  )}>
    {children}
  </span>
);
